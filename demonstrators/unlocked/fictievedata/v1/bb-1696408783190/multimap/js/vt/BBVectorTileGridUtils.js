this.tilelayers=[];
var vtMaxZoom=22;
var vtExtent=4096;
var vtBuffer=64;
var vtDebug=0; // off
var vtTolerance=1; // default 4


function recolor(json,waarde,oud, nieuw)
{
    var bindings = json.json.results.bindings;
    var uri_c={};
    for (var n in bindings)
	{
	   var o= bindings[n];
	   try
	   {
        	   var uri=o.uri.value;
        	   var color=o.color.value;
        	   if (color==waarde)
        	       {
        	          uri_c[uri]="recolor";
        	       }
	   }
	   catch(err){}
	}
    
   
  
    for (var n in document.tileIndex.tiles)
	{
	
	 var tile =document.tileIndex.tiles[n];
	 for (var ng in tile.features)
	     {
	        var feature = tile.features[ng];
	        var uri=feature.tags.uri;
	        if (uri_c[uri]!=null)
	            {
	                
        	            feature.tags.color=nieuw;
	            }
	        
	     }
	}

}

function getScreenFeature(uri)
{
    
     for (var n in document.tileIndex.tiles)
    {
    
     var tile =document.tileIndex.tiles[n];
     for (var ng in tile.features)
         {
            var feature = tile.features[ng];
            var furi=feature.tags.uri;
            if (furi==uri)
                {
                    
                      return feature;
                }
            
         }
    }
    
}





function addData(data)
{
    //add geojson data to the map
        var tileOptions = {
            maxZoom: vtMaxZoom,  // max zoom to preserve detail on
            tolerance:vtTolerance, // simplification tolerance (higher means simpler)
            extent: vtExtent, // tile extent (both width and height)
            buffer: vtBuffer,   // tile buffer on each side
            debug: vtDebug,      // logging level (0 to disable, 1 or 2)

            indexMaxZoom: 1,        // max zoom in the initial tile index
            indexMaxPoints: 1000, // max number of points per tile in the index
            solidChildren: true 
        };
        
      // tileOptions={debug:1};
        //-------------------------------------------------
      
   
        var tileIndex = geojsonvt(data, tileOptions);
        document.tileIndex=tileIndex;
        var tileLayer = L.canvasTiles()
                      .params({ debug: false, padding: 64 })
                      .drawing(drawingOnCanvas)
                      
        tileLayer.options.maxZoom=vtMaxZoom;              
       tileLayer.tileIndex=tileIndex;
        var leafletMap=Singleton.getInstance().map;
        removeAllTileLayers();
        this.tilelayers=[];
   //  console.log(leafletMap);
       tileLayer.addTo(leafletMap);
       this.tilelayers.push(tileLayer);
       tileLayer.bringToFront();
    
       return tileLayer;
}




function removeAllTileLayers()
{
    var leafletMap=Singleton.getInstance().map;
  //  console.log("removingAllTileLayers");
    for (var n in this.tilelayers)
	{
	  leafletMap.removeLayer(this.tilelayers[n]);
	//  console.log("remvoing ",updateAllTileLayers);
	}
  
}


var cancelUpdate=false;

function updateAllTileLayers()
{
   // console.log("update all tile layers");
    cancelUpdate=false;
  
    var leafletMap=Singleton.getInstance().map;
    removeAllTileLayers();
   for (var n in this.tilelayers)
	{
       if (cancelUpdate) {return};
	  leafletMap.addLayer(this.tilelayers[n]);
	  this.tilelayers[n].bringToFront();
	}
}

function getKleurRGBArray(feature)
{
 
    var kleur="RED";
    if (feature.tags.uri==null)
	{
	// console.log("kleur hulp object");
	return [0,255,0];
	}
    try
    {
    if (feature.tags.uri==Singleton.getInstance().selectedUri)
	{
	// console.log("selected object coloring red ");
	 return [255,0,0];
	}
    }
    catch(error) {console.log(error);}
 //  console.log(feature,feature.tags.uri,Singleton.getInstance().selectedUri);
    
    try
    {
	if (feature.tags.colorArray!=null)
	    {
	       return feature.tags.colorArray;
	      
	    }
	if (feature.tags.color!=null)
	    {
	    	feature.tags.colorArray=feature.tags.color.split(',');
	    	feature.tags.colorArray;
	    }
	 
    }
    catch(error){console.log(error);}
    
    
    
return [100,100,100];
}

function getKleur(feature)
{
 
    var kleur="RED";
    if (feature.tags.uri==null)
	{
	// console.log("kleur hulp object");
	return 'rgba(0,255,0,0.05)';
	}
    try
    {
    if (feature.tags.uri==Singleton.getInstance().selectedUri)
	{
	// console.log("selected object coloring red ");
	 return "RGB(255,0,0)";
	}
    }
    catch(error) {console.log(error);}
    
    try
    {
    if (feature.tags.uri==Singleton.getInstance().relatedUri1)
	{
	// console.log("selected object coloring red ");
	 return "RGB(255,255,0)";
	}
    }
    catch(error) {console.log(error);}
    
    
 //  console.log(feature,feature.tags.uri,Singleton.getInstance().selectedUri);
    
    try
    {
	if (feature.tags.color!=null)
	    {
	       if (feature.tags.color.startsWith("rgb")) {kleur=feature.tags.color;}else
		   {
	      kleur="rgb("+feature.tags.color+")";}
	      
	    }
	kleur=kleur.replace("RGBA","rgba");
	kleur=kleur.replace("RGB","rgb");
	kleur=kleur.replace("rgb(","rgba(").replace(")",",0.7)");
	 
    }
    catch(error){console.log(error);}
    
    
    
return kleur;
}



var mouseMoveEvent=true;
function drawingOnCanvas(canvasOverlay, params) {
    
  // console.log("drawing On Canvas");
    var leafletMap=Singleton.getInstance().map; //IFrame dus altijd maar 1 map
    var pad = 0;
    var bounds = params.bounds;
    params.tilePoint.z = params.zoom;

    var ctx = params.canvas.getContext('2d');
   //  var ctx = params.canvas.getContext('webgl');
    
   
    
     
    ctx.globalCompositeOperation = 'source-over';
    var tileIndex=canvasOverlay.tileIndex;
    var tile = tileIndex.getTile(params.tilePoint.z, params.tilePoint.x, params.tilePoint.y);
    
    
    
    params.canvas.addEventListener("click", function(e){handleMouseClick(e,params.canvas,ctx,tile,pad)}, false);
    var isRealistic=true;
    if (Singleton.getInstance().aantalFeaturesIsLaag==false)
	{
	
	  if (leafletMap.getZoom()<12)
	      {
	      	isRealistic=false;
	      }
	  
	}
    if (mouseMoveEvent) 
	{
	if (isRealistic)
	    {
		params.canvas.addEventListener("mousemove",function(e){mouseMoveEventCanvasCursorSelector(e,params.canvas,ctx,tile,pad);},false);
	    }
	}
    ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
    drawTileOnCanvas(tile,ctx,pad);
    
    if (Singleton.getInstance().tileIndex!=null)
	{
	 
		var tile2=Singleton.getInstance().tileIndex.getTile(params.tilePoint.z, params.tilePoint.x, params.tilePoint.y);
		drawTileOnCanvas(tile2,ctx,pad,"RGB(0,255,0)");
	}

    
}



//That's how you define the value of a pixel //
function drawPixel (canvasData,canvasWidth,x, y, r, g, b, a) {
    //not used. could be faster but I doubt it. not worth it
    
    var ok=true;
       	if ((x<0)|| (x>canvasWidth))
       	{
       	    ok=false;
       	}
       	if ((y<0)|| (y>canvasWidth))
   	{
   	    ok=false;
   	}
       	if (!ok){return;}
       	    
    
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

//ctx.putImageData(canvasData, 0, 0);

document.mapsize=1;


function drawTileOnCanvasPointsOnly(tile,ctx,pad,color)
{
    
    var extent = 4096;
     var canvasData = ctx.getImageData(0, 0, 255, 255); // for fast point insertion
 
     if (!tile) {
      //   console.log('tile empty');
         return;
     }
   
     var size=document.mapsize; // punt size
 
    // if (size==0){size=1;size2=0;}
     if (tile.z2>162144) {size=document.mapsize*2;size2=size*2;}
     var features = tile.features;
     var kleur="red";
    // ctx.strokeStyle = kleur;

        var ratio=1;
         
        // sort by types
        // first polygons, then polylines then points
        
        var type_ar={};
        
        for (var i in features) {
 	        var feature = features[i],
 	            type = feature.type;
 	        var ar=type_ar[type];
 	        if (ar==null) {ar=[];type_ar[type]=ar;}
 	        ar.push(feature);
        }
      
        var sortedFeatures=[];
        var ar=type_ar[3];
        if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
        var ar=type_ar[2];
        if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
        var ar=type_ar[1];
        if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
        
      // console.log(type_ar);
        features=sortedFeatures;
        
        
 var fullcircel=2 * Math.PI;
     for (var i in features) {
         var feature = features[i],
             type = feature.type;
         
         if (feature.tags.visible!=false)
         {
             
        
         var aantal=0;
         for (var j in feature.geometry) {
             aantal++;
        
             var geom = feature.geometry[j];
             if (type === 1) {
         
         	  	var x =Math.floor( (geom[0] / 16));
     	               	var y = Math.floor ((geom[1] / 16));
     	               	
     	               	
     	                var car =getKleurRGBArray(feature);
     	              
     	        
         	         drawPixel(canvasData,255,x,y,car[0],car[1],car[2],150);
         	         if (size>1)
         	             {
         	             	drawPixel(canvasData,255,x+1,y,car[0],car[1],car[2],150);
         	             }
         	      
         	         if (size>2)
         	             {
         	             	drawPixel(canvasData,255,x,y+1,car[0],car[1],car[2],150);
         	            
             	         if (size>3)
         	             {
             	             drawPixel(canvasData,255,x+1,y,car[0],car[1],car[2],150);
         	          
                     	     if (size>4)
         	             {
                     		 drawPixel(canvasData,255,x+1,y+1,car[0],car[1],car[2],150);
         	            
                     	  if (size>5)
      	             {
      	             	drawPixel(canvasData,255,x+2,y,car[0],car[1],car[2],150);
      	             
      	         if (size>6)
      	             {
      	             	drawPixel(canvasData,255,x,y+2,car[0],car[1],car[2],150);
      	             
          	         if (size>7)
      	             {
          	             drawPixel(canvasData,255,x+2,y,car[0],car[1],car[2],150);
      	            
                  	     if (size>8)
      	             {
                  		 drawPixel(canvasData,255,x+2,y+2,car[0],car[1],car[2],150);
      	             }}}}}}}}}}
        
      	           
                continue;
     }
           
        
 	ctx.putImageData(canvasData, 0, 0);
   
    
}
function drawTileOnCanvas(tile,ctx,pad,color)
{
    
    var noPolygonLines=false;
    if (document.sparql!=null)
    {
        if (document.sparql.includes("#noPolygonLines"))
        {
            noPolygonLines =true;
        }
        
        try {
        
        if (document.sparql.includes("#pointsOnly;"))
            {
            // console.log("points only");
             drawTileOnCanvasPointsOnly(tile,ctx,pad,color);
            return;
            }
        }
        catch(ee){}
    }
    
    var extent = 4096;
    if (!tile) {
     //   console.log('tile empty');
        return;
    }
  
    var size=document.mapsize; // punt size
    var size2=document.mapsize*2; // punt size *2
   // if (size==0){size=1;size2=0;}
    if (tile.z2>162144) {size=document.mapsize*2;size2=size*2;}
    var features = tile.features;
    var kleur="red";
   // ctx.strokeStyle = kleur;

       var ratio=1;
        
       // sort by types
       // first polygons, then polylines then points
       
       var type_ar={};
       
       for (var i in features) {
            var feature = features[i],
                type = feature.type;
            var ar=type_ar[type];
            if (ar==null) {ar=[];type_ar[type]=ar;}
            ar.push(feature);
       }
     
       var sortedFeatures=[];
       var ar=type_ar[3];
       if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
       var ar=type_ar[2];
       if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
       var ar=type_ar[1];
       if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
       
     // console.log(type_ar);
       features=sortedFeatures;
       
       
    var fullcircel=2 * Math.PI;

   var drawPointFunction=function(ctx,geom)
   {
                    var x = geom[0] / 16;
                    var y = geom[1] / 16;
                    ctx.beginPath();
                    ctx.strokeStyle=getKleur(feature);
                    ctx.fillStyle=ctx.strokeStyle;
                    ctx.fillRect(x-size,y-size,size2,size2);
   }
   
   if (map.getZoom()>15)
   {
      var r =map.getZoom()-15+3;
       drawPointFunction=function(ctx,geom)
        {
                    var x = geom[0] / 16;
                    var y = geom[1] / 16;
                    ctx.beginPath();
                    ctx.strokeStyle="rgba(200,200,200,1)";
                    var fg=getKleur(feature);
                    
                    var grd = ctx.createRadialGradient(x, y, r, x, y, 0.01);
                    grd.addColorStop(0, fg);
                    grd.addColorStop(0.5,  "white");
                    grd.addColorStop(1,fg);
                    
                  
                    ctx.arc(x, y, r, 0, fullcircel);
                      ctx.fillStyle=grd;
                    ctx.fill();
                   // ctx.fillRect(x-size,y-size,size2,size2);
        }
   }


    for (var i in features) {
        var feature = features[i],
            type = feature.type;
        
        if (feature.tags.visible!=false)
        {
            
       
        var aantal=0;
        for (var j in feature.geometry) {
            aantal++;
       
            var geom = feature.geometry[j];
            if (type === 1) { drawPointFunction.call(this,ctx,geom);                       
                       
                     
               continue;
            }
            else
            {
            ctx.beginPath();
             ctx.lineWidth = document.mapsize*2 ;
              if (type === 2) {ctx.strokeStyle=getKleur(feature);   }
              else
              {
                if (noPolygonLines)
                {
                    ctx.strokeStyle=getKleur(feature);
                }
                else
                {
                    ctx.strokeStyle='rgba(128,128,128,1)';
                }
                
              }
              if ((type==3) &&(color!=null))
                  {
                  //console.log("selectie box");
                       ctx.strokeStyle='rgba(255,0,0,1)';
                  }
             
             //    ctx.fillStyle = feature.tags.color ? feature.tags.color : 'rgba(255,0,0,0.05)';
             ctx.fillStyle=getKleur(feature);
            
                 // type =2 linestring
            if((type==3) && (aantal>1))
                {
               // console.log("polygon with a hole found!!! ");
                }
              
            for (var k in geom) {
            
            
                var p = geom[k];
              
                //var x = p[0] / extent * 256;
                //var y = p[1] / extent * 256;
                var x = p[0] / 16;
                var y = p[1] / 16;
              //  if (k) ctx.lineTo(x  + pad, y   + pad);
               // else ctx.moveTo(x  + pad, y  + pad);
                
                if (k) ctx.lineTo(x  , y   );
                else ctx.moveTo(x  , y  );
              
            }
            ctx.stroke();
        }

        if (type === 3 || type === 1) ctx.fill('evenodd');  //polygon
        }
            }
    }
    
   /*console.log("put Image data",canvasData);
    if (putImage)
    {
    ctx.putImageData(canvasData, 0, 0);
    }
   */ 

};


function drawTileOnCanvasold(tile,ctx,pad,color)
{
    
    var noPolygonLines=false;
    if (document.sparql.includes("#noPolygonLines"))
    {
        noPolygonLines =true;
    }
    
    try {
	
	if (document.sparql.includes("#pointsOnly;"))
	    {
	    // console.log("points only");
	     drawTileOnCanvasPointsOnly(tile,ctx,pad,color);
	    return;
	    }
    }
    catch(ee){}
    
    var extent = 4096;
   // var putImage=true;
   // if (document.mapsize>1) {putImage=false;}
    
   // var canvasData = ctx.getImageData(0, 0, 255, 255); // for fast point insertion
 //   console.log(tile);
    if (!tile) {
     //   console.log('tile empty');
        return;
    }
  
    var size=document.mapsize; // punt size
    var size2=document.mapsize*2; // punt size *2
   // if (size==0){size=1;size2=0;}
    if (tile.z2>162144) {size=document.mapsize*2;size2=size*2;}
    var features = tile.features;
    var kleur="red";
   // ctx.strokeStyle = kleur;

       var ratio=1;
        
       // sort by types
       // first polygons, then polylines then points
       
       var type_ar={};
       
       for (var i in features) {
	        var feature = features[i],
	            type = feature.type;
	        var ar=type_ar[type];
	        if (ar==null) {ar=[];type_ar[type]=ar;}
	        ar.push(feature);
       }
     
       var sortedFeatures=[];
       var ar=type_ar[3];
       if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
       var ar=type_ar[2];
       if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
       var ar=type_ar[1];
       if (ar!=null){sortedFeatures=sortedFeatures.concat(ar);}
       
     // console.log(type_ar);
       features=sortedFeatures;
       
       
var fullcircel=2 * Math.PI;
    for (var i in features) {
        var feature = features[i],
            type = feature.type;
        
        if (feature.tags.visible!=false)
        {
            
       
        var aantal=0;
        for (var j in feature.geometry) {
            aantal++;
       
            var geom = feature.geometry[j];
            if (type === 1) {
        	 
            //point     
          		
                       
                	   var x = geom[0] / 16;
   	               	var y = geom[1] / 16;
                	       ctx.beginPath();
                	 	ctx.strokeStyle=getKleur(feature);
                	 	ctx.fillStyle=ctx.strokeStyle;
            	             
            	               	ctx.fillRect(x-size,y-size,size2,size2);
                	
               	 /*      }
        	   else
        	       {
        	  	var x =Math.floor( (geom[0] / 16));
    	               	var y = Math.floor ((geom[1] / 16));
    	               	
    	               	
    	                var car =getKleurRGBArray(feature);
    	              
    	        
        	         drawPixel(canvasData,255,x,y,car[0],car[1],car[2],150);
        	         if (size>1)
        	             {
        	             	drawPixel(canvasData,255,x+1,y,car[0],car[1],car[2],150);
        	             }
        	         /*
        	         if (size>2)
        	             {
        	             	drawPixel(canvasData,255,x,y+1,car[0],car[1],car[2],150);
        	            
            	         if (size>3)
        	             {
            	             drawPixel(canvasData,255,x+1,y,car[0],car[1],car[2],150);
        	          
                    	     if (size>4)
        	             {
                    		 drawPixel(canvasData,255,x+1,y+1,car[0],car[1],car[2],150);
        	            
                    	  if (size>5)
     	             {
     	             	drawPixel(canvasData,255,x+2,y,car[0],car[1],car[2],150);
     	             
     	         if (size>6)
     	             {
     	             	drawPixel(canvasData,255,x,y+2,car[0],car[1],car[2],150);
     	             
         	         if (size>7)
     	             {
         	             drawPixel(canvasData,255,x+2,y,car[0],car[1],car[2],150);
     	            
                 	     if (size>8)
     	             {
                 		 drawPixel(canvasData,255,x+2,y+2,car[0],car[1],car[2],150);
     	             }}}}}}}}
     	             */
                    	
        	         
    	               	
        	         //drawPixel(canvasData,vtExtent,x*16,y*16,255,0,0,255);
        	    
        	    /*     drawPixel(canvasData,vtExtent,0,0,vtExtent,0,0,255);
        	         drawPixel(canvasData,vtExtent,vtExtent,vtExtent,255,0,0,255);
        	         drawPixel(canvasData,vtExtent,0,vtExtent,255,0,0,255);
        	         drawPixel(canvasData,vtExtent,vtExtent,0,255,0,0,255);
        	         */
        	     //  }
        	   
    	               	
                     
                     
               continue;
            }
            else
        	{
        	ctx.beginPath();
        	 ctx.lineWidth = document.mapsize*2 ;
        	  if (type === 2) {ctx.strokeStyle=getKleur(feature);	}
              else
              {
                if (noPolygonLines)
                {
                    ctx.strokeStyle=getKleur(feature);
                }
                else
                {
                    ctx.strokeStyle='rgba(128,128,128,1)';
                    }
                
              }
        	  if ((type==3) &&(color!=null))
        	      {
        	      //console.log("selectie box");
        	      ctx.strokeStyle='rgba(255,0,0,1)';
        	      }
        	 
        	 //    ctx.fillStyle = feature.tags.color ? feature.tags.color : 'rgba(255,0,0,0.05)';
        	 ctx.fillStyle=getKleur(feature);
        	
        	     // type =2 linestring
        	if((type==3) && (aantal>1))
        	    {
        	   // console.log("polygon with a hole found!!! ");
        	    }
        	  
            for (var k in geom) {
        	
        	
                var p = geom[k];
              
                //var x = p[0] / extent * 256;
                //var y = p[1] / extent * 256;
                var x = p[0] / 16;
                var y = p[1] / 16;
              //  if (k) ctx.lineTo(x  + pad, y   + pad);
               // else ctx.moveTo(x  + pad, y  + pad);
                
                if (k) ctx.lineTo(x  , y   );
                else ctx.moveTo(x  , y  );
              
            }
            ctx.stroke();
        }

        if (type === 3 || type === 1) ctx.fill('evenodd');  //polygon
        }
            }
    }
    
   /*console.log("put Image data",canvasData);
    if (putImage)
	{
	ctx.putImageData(canvasData, 0, 0);
	}
   */ 

};

function isClockwise(dots)
{
    var sum = 0;
    for(var i=1, n=dots.length; i<n; i++){
        sum += (dots[i][0] - dots[i-1][0]) * (dots[i][1] + dots[i-1][1]);
    }
    sum += (dots[0][0] - dots[n-1][0]) * (dots[0][1] + dots[n-1][1]);
    return sum < 0;
}

function restorePreviousHoover()
{
    if (this.previousHoover!=null)
	{
	          // restore previous
		try
        {
		this.previousHoover.tags.color=this.previousHoover.tags.orgColor;
		 this.previousHoover.tags.orgColor==null;
		
	       this.previousHoover=null;
	       return true;
           }
           catch(e){}
	}
    
    return false;
   
}

var highlightOn=true;

function highlight(f,cancelable)
{
    if (highlightOn==false) {return;}
   
    if (f!=this.previousHoover)
	{
	
	 restorePreviousHoover();
         this.previousHoover=f;

	    if (f.tags.orgColor==null)
		{
		   f.tags.orgColor=f.tags.color;
		}
	    f.tags.color="rgb(0,0,255)";
	 
	    updateAllTileLayers(cancelable);
	}

}



function mouseMoveEventCanvasCursorSelector(e,canvas,ctx,tile,pad)
{

   var highlightB=true;
   if (runningCancelableMouseInteraction!=null){runningCancelableMouseInteraction.cancel=true;}
   var cm = new CancelableMouseInteraction();
   runningCancelableMouseInteraction= cm;
    var ro=cm.getGeometriesUnderCursor(e,canvas,ctx,tile,pad);
   if ( (ro==null) && (this.previousHoover==null) ) {return;} // niets geslecteerd
   if (ro==this.previousHoover) {return;} // hooovering on the already highlighted feature
   
    if (ro==null)
    {
	if (restorePreviousHoover())
	{
	    updateAllTileLayers();
	}; // geen cm
	document.getElementById('map').style.cursor = ''; // handje
	return;
     }
    var nearestF=ro[0];
    var selectedPolies=ro[1];
    var nearestLine=ro[4];
    if (nearestF!=null)
    {
	document.getElementById('map').style.cursor = 'crosshair'; 
	
	
	if (nearestF!=this.previousHoover)
	    {
	    	
	    	if (highlightB) {highlight(nearestF);}
	    	
	    }
	
	return;
	}
  
    if (nearestLine!=null){
	
	document.getElementById('map').style.cursor = 'crosshair';
	
	if (nearestLine!=this.previousHoover)
	    {
	    	
	    if (highlightB) {highlight(nearestLine);}
	    	
	    }
	
	
	
	return;}
  
    if (selectedPolies.length>0)
    {
	
	//if (selectedPolies.length==1)
	if (true)
	    {
	    //var layers=Singleton.getInstance().uri_objects[selectedPolies[0].tags.uri];
	   // createRectangle(layers);
	    var f= selectedPolies[selectedPolies.length-1];
	    if (highlightB) {  highlight(f);}
	    
	
	    }
	else
	    {
	    if (restorePreviousHoover()){ 
		updateAllTileLayers();
		};
	    }
	document.getElementById('map').style.cursor = 'crosshair'; 
	
	return;
     }
   
    if (restorePreviousHoover()){ 
	updateAllTileLayers();
	};
 
    document.getElementById('map').style.cursor = '';
}


var runningCancelableMouseInteraction =null;
var expandedGeometry=[];

function restoreExpandedGeometry()
{
   for (var n in expandedGeometry)   
       {
          var g = expandedGeometry[n];
          if (g.orgGeometry!=null)
              {
                g.geometry[0]=g.orgGeometry;
                g.orgGeometry=null;
              }
       }
   expandedGeometry=[];
}

function handleMouseClick(e,canvas,ctx,tile,pad)
{
     
     var enableMultiPointSelection=false;
     try {if (document.sparql.includes("#enableMultiPointSelection;")){enableMultiPointSelection=true;}}catch(ee){}
    
    var cm = new CancelableMouseInteraction(); 
  
    var ro=cm.getGeometriesUnderCursor(e,canvas,ctx,tile,pad);
   
    
    if (ro==null){ restoreExpandedGeometry(); console.log("niets geselecteerd");removeMarker();return;}
    var nearestF=ro[0];
    var selectedPolies=ro[1];
    var polies=ro[2];
    var alles=ro[3];
    var nearestLine=ro[4];
    if (alles.length>0)
	{
	
	  if (alles.length>1)
	      {
	      // if (!(enableMultiPointSelection)&&(map.getZoom()>14) ) {showInfo(alles.length+" features geselecteerd. alleen de eerste wordt geselecteerd");}
	      restoreExpandedGeometry();
	    //  console.log(ro);
	     
	   for (var allesN in alles)
	       {
	          try{
	               var allesUri = alles[allesN].tags.uri;
	            //   console.log("geselecteerde uri's:"+allesUri,alles[allesN]);
	               var ltn=alles[allesN].geometry[0];
	               if ( (ltn.length==2) && (enableMultiPointSelection)&&(map.getZoom()>14)) //alleen punten
	        	   {
            	               if (alles[allesN].orgGeometry==null)
            	        	   {
            	        	   	alles[allesN].orgGeometry=[];
            	        	   	for (var gn in alles[allesN].geometry[0])
            	        	   	    {
            	        	   	    	alles[allesN].orgGeometry.push(alles[allesN].geometry[0][gn]);
            	        	   	    };
            	        	   }
            	               
            	               ltn[0]+=(allesN*150);
            	               ltn[1]+=(allesN*150);
                    	       alles[allesN].geometry[0]=ltn;
        	               expandedGeometry.push(alles[allesN]);
	        	   }
	               
	               
	             }
	          catch(error){console.log(error);}
	          
	       }
	   if (expandedGeometry.length>0)
	    {
	    showInfo("exploding  points");
	    }
	   
	      }
	  // 1 geselecteerd. zou een expanded item kunnen zijn==> geen restore
	  if (alles[0].orgGeometry!=null)
	      {
	      
	      }
	  else
	      {
	      restoreExpandedGeometry();
	      }
	}
    var rect = canvas.getBoundingClientRect();
    var  x= e.clientX - rect.left;
    var y= e.clientY - rect.top;
    
 
    // single selection policy
    
    // punten en lijnen gaan voor polygonen
    if (nearestF!=null){ selectedUriFromClick(nearestF.tags.uri,nearestF,tile,nearestF,x,y,pad,ctx,null,e); return;} 
    if (nearestLine!=null){ selectedUriFromClick(nearestLine.tags.uri,nearestLine,tile,nearestLine,x,y,pad,ctx,null,e); return;}
	
	if (selectedPolies.length>0)
	    {
	     var f=selectedPolies[0];
	     var poly=polies[0];
         
         if (selectedPolies.length>1)
        {
             if (!(enableMultiPointSelection)&&(map.getZoom()>14) ) {popupMultiSelect(e,alles);return} else { showInfo(selectedPolies.length+" features geselecteerd. alleen de eerste wordt geselecteerd"); }
             }
	   
	    selectedUriFromClick(f.tags.uri,f,tile,poly,x,y,pad,ctx,e);
	    //if (selectedPolies.length>1){ showInfo(selectedPolies.length+" features geselecteerd. alleen de eerste wordt geselecteerd");}
	    
	    }
	 // 
        // return;
   
	
    
}

var CancelableMouseInteraction = function()
{
   this.cancel=false;    
}
CancelableMouseInteraction.prototype.getGeometriesUnderCursor=function(e,canvas,ctx,tile,pad){
    return getGeometriesUnderCursor(e,canvas,ctx,tile,pad,true);
}







function getGeometriesUnderCursor(e,canvas,ctx,tile,pad,canceleable){

   
   var rect = canvas.getBoundingClientRect();
   var selectedPolies=[];
   var polies=[];
   var alles=[];
    
   var  x= e.clientX - rect.left;
    var y= e.clientY - rect.top;
    
     x=(x/canvas.width)*4096;//e.layerY
     y=(y/canvas.height)*4096;
    
     var gf=new jsts.geom.GeometryFactory();
     var c=new jsts.geom.Coordinate(x,y,0);
      var gp=gf.createPoint(c);
    // console.log(gp);
      if (tile!=null)
	  {
	  var nearestF=null;
	  var nearestLine=null;
	  var distanceL=null;
	  var distance=0;
	    for (var featureN in tile.features)
		{
	          if (canceleable) {if (this.cancel){console.log("early return ");return;}}
		   var f= tile.features[featureN];
		
		   if (f.tags.visible==false)
		       {
		     //  console.log("not visible feature",f);
		       }
		   else
		       {
		   //console.log("visible feature",f);
		   if (f.type=="MultiLineString") {f.type=2;}
		   if (f.type=="LineString") {f.type=2;}
		
		   if (f.type==1)
		       {
		       //punt
		           var px=f.geometry[0][0];
		           var py=f.geometry[0][1];
		           var d=(Math.abs(px-x)*Math.abs(px-x))+(Math.abs(py-y)*Math.abs(py-y));
		           d=Math.sqrt(d);
		           
		      
		           if ( d<100 )
		           {
		               alles.push(f);
		               if (nearestF==null){nearestF=f;distance=d; }
		               else
		        	   {
		        	     if (d<distance){nearestF=f;distance=d;}
		        	   }
		           }
                           
		       }
		   if ((f.type==2) || (f.type==3))
		       {
		        // line
		     //  console.log("line selection");
		      
		        for (var gn in f.geometry)//linesgement
		            {
		                var lijnsegment=f.geometry[gn]; //segment
		                var coords=[];
		                for (var cn in lijnsegment)
		                   {
		                	    var c=new jsts.geom.Coordinate( lijnsegment[cn][0], lijnsegment[cn][1],0);
		                	    coords.push(c);
		                   }
		                
		                if (f.type==2)
		                    {
		                    		//var gf=new jsts.geom.GeometryFactory();
		        		            var linesstring=gf.createLineString(coords);
		        		           
		        		            var d=linesstring.distance(gp);
		        		          //  console.log(d,f.tags.uri,f,linesstring,gp);
		        		             if(d<100.0)
		        		        	{
		        		        	 alles.push(f);
		        			               if (nearestLine==null){nearestLine=f;distanceLine=d;}
		        			               else
		        			        	   {
		        			        	     if (d<distanceLine){nearestLine=f;distanceLine=d;}
		        			        	   }
		        		        	  
                                                             
		        		        	}
		                    }
		                else
		                    {
		                   try{
		                        var poly=gf.createPolygon(coords);
                              //  console.log(poly);
		                   //     if (( poly.contains(gp)) ||  poly.touches(gp) ||  poly.covers(gp) ) 
                                // if (  poly.covers(gp) ) 
                                   if (  poly.intersects(gp) ) 
		                            {
		                            selectedPolies.push(f);
		                            polies.push(poly);
		                            alles.push(f);  
		                            }
		                   }
		                   catch(error){}
		                    }
        		           
		            }
		        
		        
		       }
		
		       }
		}
	//    console.log([nearestF,selectedPolies,polies,alles,nearestLine]);
	    return [nearestF,selectedPolies,polies,alles,nearestLine];
	  }
 
  return null;
  
  //  console.log(tile);
  }

function removeAllSelections()
{
    if (Singleton.getInstance().selections!=null)
	{
	  for (var n in Singleton.getInstance().selections)
	      {
	         var pol=Singleton.getInstance().selections[n];
	         Singleton.getInstance().selectionGroup.removeLayer(pol);
	      }
	}
    Singleton.getInstance().selections=[];
    Singleton.getInstance().selectedUri=null;
    Singleton.getInstance().tileIndex =null;
    
    removeMarker();
    try {map.contextmenu.hide();}catch(e){}
}

//tileLayer.canvas.addEventListener("mousedown", handleMouseDown, false);

function selectedUriFromClick(uri,f,tile,selection,x,y,pad,ctx,events,mouseEvents)
{
    removeAllSelections();
  
   // console.log("Found an uri "+uri,f,selection);
    var layers=Singleton.getInstance().uri_objects[uri];
    if (layers!=null)
	{
	
	  Singleton.getInstance().selectedUri=uri;
      var feature=getScreenFeature(uri);
	  console.log("selected uri ",uri,layers,feature);
	    createRectangle(layers);
        	    
        	     
	}
    if (events!=false)
	{
    try
    {
  
	Iface.sendEvent("http://www.bbsgroep.nl/application/v2/hasUriOutput",uri,mouseEvents);
    }
    catch(error){}

  try
  {
      
      Singleton.getInstance().iface.sendEvent("http://www.bbsgroep.nl/application/v2/hasUriOutput",uri,mouseEvents);
  }
  catch(error) {}
	}

}

function highlightUri(uri)
{
    
    //http://www.rws.nl/VenR/2017/NWB#BOB032082308
    var layers=Singleton.getInstance().uri_objects[uri];
    if (layers!=null)
	{
		  
           var feature=getScreenFeature(uri);
           if (feature!=null){highlight(feature);}
           
        
           
            //Singleton.getInstance().relatedUri1=uri;
          // createRectangle(layers);
         
       
	}
        
    //time out
}



function createRectangle(layers)
{
    
      
       
    if (layers==null){return ;}
    var pols=[];
	  for (var layerN in layers)
	      {
	         var layer = layers[layerN];
	         
	      
	        var bb =layer.getBounds();
	       // console.log(layer,bb);     
  	if (bb!=null)
  	    {
  	      var pol = L.polygon([ bb.getNorthEast(), bb.getNorthWest(), bb.getSouthWest(),bb.getSouthEast()]).toGeoJSON();
  	    if((bb.getNorthEast().lat==bb.getNorthWest().lat) && (bb.getNorthEast().lng==bb.getNorthWest().lng) && (bb.getSouthWest().lat==bb.getSouthEast().lat) )
  		{
  		var w=0.00004;
  		var wlat=2;
  		var ne= {lat:bb.getNorthEast().lat,lng:bb.getNorthEast().lng};
  		ne.lat+=w;
  		ne.lng+=w;
  		var nw= {lat:bb.getNorthWest().lat,lng:bb.getNorthWest().lng};
  		
  		nw.lat+=w;
  		nw.lng-=w;
  		var sw= {lat:bb.getSouthWest().lat,lng:bb.getSouthWest().lng};
  		
  		sw.lat-=w;
  		sw.lng-=w;
  		var se= {lat:bb.getSouthEast().lat,lng:bb.getSouthEast().lng};
  		
  		se.lat-=w;
  		se.lng+=w;
  		  pol = L.polygon([ne,nw, sw,se]).toGeoJSON();
  		
  		}
  	    pols.push(pol);
  	      
  	    }
	      }
	//  console.log(pols);
  	if (pols.length>0)
  	    {
  	     // pol.geometry.type=2;
  	     var gj= { "type": "FeatureCollection",     "crs": {         "type": "name",         "properties": {             "name": "urn:ogc:def:crs:OGC:1.3:CRS84"        }     },     "features": pols};
  	  
  	     var tileOptions = {
  		            maxZoom: vtMaxZoom,  // max zoom to preserve detail on
  		            tolerance:vtTolerance, // simplification tolerance (higher means simpler)
  		            extent: vtExtent, // tile extent (both width and height)
  		            buffer: vtBuffer,   // tile buffer on each side
  		            debug: vtDebug,      // logging level (0 to disable, 1 or 2)
  
  		            indexMaxZoom: 1,        // max zoom in the initial tile index
  		            indexMaxPoints: 500, // max number of points per tile in the index
  		          
  		        };
  	      
  	     Singleton.getInstance().tileIndex = geojsonvt(gj, tileOptions);
  	     
  	     updateAllTileLayers();
  	    }
  	  


}


function popupMultiSelect(e,alles)
{
   try
   {
      var coord=map.mouseEventToLatLng(e);
        var name_uri={};
       map.contextmenu.removeAllItems();
       map.contextmenu.addItem({text:"found "+alles.length+" items"});
       map.contextmenu.addItem({
        separator: true,
        index: 1
    });
      var i=1;
       for (var n in alles)
       {
        i++;
          var o=alles[n];
          var uri = o.tags.uri;
          var name = "object "+(parseInt(n)+1);
          map.contextmenu.addItem({text:name,data:name});
          name_uri[name]=uri; 
           map.contextmenu._items[i].el.onmouseenter=function(e){ var name =e.target.innerText;if (name_uri[name]!=null){highlightUri(name_uri[name]);}};
           map.contextmenu._items[i].el.onmouseleave=function(e){var name =e.target.innerText; if (name_uri[name]!=null){highlightUri(null); }};
           
          map.contextmenu._items[i].el.onmouseup=function(e,f,g){var name =e.target.innerText; if (name_uri[name]!=null){selectedUriFromClick(name_uri[name]);}};
   
        }
      
          setTimeout(function(){  map.contextmenu.showAt(coord);},100);
      
        }
        catch(error)
        {
            console.log(error);
        }
  }
    



function decreaseMapFeatures()
{
    document.mapsize--;
    if (document.mapsize<0){document.mapsize=0;}
    updateAllTileLayers();
}
function increaseMapFeatures()
{
  
    document.mapsize++;
    if (document.mapsize>10){document.mapsize=10;}
    updateAllTileLayers();
}