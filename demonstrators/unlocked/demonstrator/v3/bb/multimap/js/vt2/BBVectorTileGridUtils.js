this.tilelayers=[];
var vtMaxZoom=24;
var vtExtent=4096;
var vtBuffer=264;
var vtDebug=0; // off
var vtTolerance=1; // default 4 // necessary for points as circles // 1 for full view with esri 

var alpha=0.5;


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
    
   
     for (let nt in this.tilelayers)
    {
      
        let tl = this.tilelayers[nt];
        for (let n in tl.tileIndex.tiles)
    	{
    	
    	 var tile =tl.tileIndex.tiles[n];
    	 for (let ng in tile.features)
    	     {
    	        let feature = tile.features[ng];
    	        let uri=feature.tags.uri;
    	        if (uri_c[uri]!=null)
    	            {
    	                
            	            feature.tags.color=nieuw;
    	            }
    	        
    	     }
    	}
    }

}





function addData(data,add)
{
    //add geojson data to the map
        var tileOptions = {
            maxZoom: vtMaxZoom,  // max zoom to preserve detail on
            tolerance:vtTolerance, // simplification tolerance (higher means simpler)
            extent: vtExtent, // tile extent (both width and height)
            buffer: vtBuffer,   // tile buffer on each side
            debug: vtDebug,      // logging level (0 to disable, 1 or 2)

            indexMaxZoom: 0,        // max zoom in the initial tile index
            indexMaxPoints: 1000, // max number of points per tile in the index
            solidChildren: true 
        };
        
      // tileOptions={debug:1};
        //-------------------------------------------------
      
   
          var tileLayer = new L.GridLayer.GeoJSON(data, tileOptions);
        document.tileIndex=tileLayer.tileIndex;
        document.tl=tileLayer;
        
        
     
                      
        tileLayer.options.maxZoom=vtMaxZoom;              
      // tileLayer.tileIndex=tileIndex;
        var leafletMap=Singleton.getInstance().map;
    //  document.add=true;
        if (document.add!=true)
        {
            removeAllTileLayers();
            this.tilelayers=[];
        }
        
   //  console.log(leafletMap);
       tileLayer.addTo(leafletMap);
       this.tilelayers.push(tileLayer);
       tileLayer.bringToFront();
    
       return tileLayer;
}




function removeAllTileLayers()
{
   
    var leafletMap=Singleton.getInstance().map;
   // console.log("removingAllTileLayers "+this.tilelayers);
    for (var n in this.tilelayers)
	{
	  leafletMap.removeLayer(this.tilelayers[n]);
	//  console.log("remvoing ",updateAllTileLayers);
	}
    
    this.tilelayers=[];
  
}


var cancelUpdate=false;

function updateAllTileLayers(cancelUpdate,canvas,tile)
{
    var leafletMap=Singleton.getInstance().map;
 
    cancelUpdate=false;
  
    
    //removeAllTileLayers();
   for (var n in this.tilelayers)
	{
       if (cancelUpdate) {return};
     this.tilelayers[n].smartRedraw();
	  //leafletMap.addLayer(this.tilelayers[n]);
      
	 // this.tilelayers[n].bringToFront();
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
 Singleton.getInstance().uri_rgb={};
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
    
     var rgb = Singleton.getInstance().uri_rgb[feature.tags.uri];
    if (rgb!=null){return rgb;}
    
    
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
	kleur=kleur.replace("rgb(","rgba(").replace(")",","+alpha+")");
	 
    }
    catch(error){console.log(error);}
    
    
    
return kleur;
}



var mouseMoveEvent=true;
function drawingOnCanvas(canvasOverlay, params) {
    
    
   console.log("drawing On Canvas",canvasOverlay);
    let leafletMap=Singleton.getInstance().map; //IFrame dus altijd maar 1 map
    let pad = 0;
    let bounds = params.bounds;
    params.tilePoint.z = params.zoom;

    let ctx = params.canvas.getContext('2d');
   // let ctx = params.canvas.getContext('webgl');
    
    ctx.globalCompositeOperation = 'source-over';
    let tileIndex=canvasOverlay.tileIndex;
    let tile = tileIndex.getTile(params.tilePoint.z, params.tilePoint.x, params.tilePoint.y);
    
    
    
    params.canvas.addEventListener("click", function(e){handleMouseClick(e,params.canvas,ctx,tile,pad)}, {capture:false,passive:true}); //orignal false{capture:false,passive:true}//Expose "passive" boolean in the EventListenerOptions dictionary
    let isRealistic=true;
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
               // console.log("adding mouse move event listener");
    		params.canvas.addEventListener("mousemove",function(e){mouseMoveEventCanvasCursorSelector(e,params.canvas,ctx,tile,pad);},{capture:false,passive:true}); //Expose "passive" boolean in the EventListenerOptions dictionary
    	    }
	}
    ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
    drawTileOnCanvas(tile,ctx,pad);
    
    if (Singleton.getInstance().tileIndex!=null)
	{
	 
		let tile2=Singleton.getInstance().tileIndex.getTile(params.tilePoint.z, params.tilePoint.x, params.tilePoint.y);
       
		drawTileOnCanvas(tile2,ctx,pad,"RGB(0,255,0)");
	}

    
}


function showMouseLabel(label)
{
       let t=tippy('#map', { content: 'My tooltip map!',followCursor: true  });
        //  t[0].destroy();
          
         // t=tippy('#map', { content: 'My tooltip map22222!',followCursor: true  });
        
}



//That's how you define the value of a pixel //
function drawPixel (canvasData,canvasWidth,x, y, r, g, b, a) {
    //not used. could be faster but I doubt it. not worth it
    
    let ok=true;
       	if ((x<0)|| (x>canvasWidth))
       	{
       	    ok=false;
       	}
       	if ((y<0)|| (y>canvasWidth))
   	{
   	    ok=false;
   	}
       	if (!ok){return;}
       	    
    
    let index = (x + y * canvasWidth) * 4;

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
       
       for (let i in features) {
	        let feature = features[i],
	            type = feature.type;
	        let ar=type_ar[type];
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
                    let x = geom[0] / 16;
                    let y = geom[1] / 16;
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
                    let x = geom[0] / 16;
                    let y = geom[1] / 16;
                    ctx.beginPath();
                    ctx.strokeStyle="rgba(200,200,200,1)";
                    let fg=getKleur(feature);
                    
                    let grd = ctx.createRadialGradient(x, y, r, x, y, 0.01);
                    grd.addColorStop(0, fg);
                    grd.addColorStop(0.5,  "white");
                    grd.addColorStop(1,fg);
                    
                  
                    ctx.arc(x, y, r, 0, fullcircel);
                      ctx.fillStyle=grd;
                    ctx.fill();
                   // ctx.fillRect(x-size,y-size,size2,size2);
        }
   }


    for (let iii in features) {
      
        var feature = features[iii]; //var niet veranderen in let... snap nog niet goed waarom
         let   type = feature.type;
            if (type!=1)   ctx.beginPath();
        
        if (feature.tags.visible!=false)
        {
            
       
        var aantal=0;
        for (let j in feature.geometry) {
            aantal++;
       
            let geom = feature.geometry[j];
            if (type === 1) { drawPointFunction.call(this,ctx,geom);                       
                       
                     
               continue;
            }
            else
        	{
        	
        	 ctx.lineWidth = document.mapsize*2 ;
        	  if (type === 2) {ctx.strokeStyle=getKleur(feature);	}
              else
              {
                if (noPolygonLines)
                {
                    ctx.strokeStyle=getKleur(feature);
                      ctx.strokeStyle=ctx.strokeStyle.replace(","+alpha+")",",0.75)");
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

                geom=geom.reverse();
        	    }
              let begin=true;
            for (let k in geom) {
        	
        	
                let p = geom[k];
              
                //var x = p[0] / extent * 256;
                //var y = p[1] / extent * 256;
                let x = p[0] / 16;
                let y = p[1] / 16;
              //  if (k) ctx.lineTo(x  + pad, y   + pad);
               // else ctx.moveTo(x  + pad, y  + pad);
                
                if (!begin) ctx.lineTo(x  , y   );
                else {ctx.moveTo(x  , y  ); begin=false;}
              
            }
           
           
          
        }

        //polygon 'evenodd'
        } //feature geometry
        if (type === 3 || type === 1) ctx.fill("evenodd"); 
        ctx.stroke();

         }

            ctx.closePath();

           
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
		
		this.previousHoover.tags.color=this.previousHoover.tags.orgColor;
		 this.previousHoover.tags.orgColor==null;
		
	       this.previousHoover=null;
           
           
           destroyTippy();
          
           
	       return true;
	}
    
    return false;
   
}
function destroyTippy()
{
    if ( document.tippy!=null)
    {
        
         for (let n in document.tippy)
           {
       
            document.tippy[n].destroy();
           }
    }
    document.tippy=null;
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
	 
	   
        destroyTippy();
        try
        {
            let uri=f.tags.uri;
            let binding =getBinding(uri);
      
            if (binding!=null)
            {
                  
                      let oo= binding.label.value;
                      if (oo!=null)
                      {
                         document.tippy=tippy('#map', { content: oo,followCursor: true  });
                         document.tippy[0].show();
                       }
             }
            
        }
        catch(e){};
        
          
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
    //console.log("mouse moved ",ro);
   if ( (ro==null) && (this.previousHoover==null) ) {return;} // niets geslecteerd
   if (ro==this.previousHoover) {return;} // hooovering on the already highlighted feature
   
    if (ro==null)
    {
    	if (restorePreviousHoover())
    	{
          //  console.log("restore previous hoover");
    	    updateAllTileLayers(null,canvas,tile);
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
	
     if (nearestF!=null) {
	   return;
    }
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
            //  console.log("restore previous hoover   update all tile layers");
		updateAllTileLayers(null,canvas,tile);
		};
	    }
	document.getElementById('map').style.cursor = 'crosshair'; 
	
	return;
     }
   
    if (restorePreviousHoover()){ 
      //   console.log("restore previous hoover222   update all tile layers");
	    updateAllTileLayers(null,canvas,tile);
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
    if ( (alles.length>0) )
	{
           
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
	   
	 
      
      
	  // 1 geselecteerd. zou een expanded item kunnen zijn==> geen restore
	  if (alles[0].orgGeometry!=null)
	      {
	      
	      }
	  else
	      {
	      restoreExpandedGeometry();
	      }
	
    
    var rect = canvas.getBoundingClientRect();
    var  x= e.clientX - rect.left;
    var y= e.clientY - rect.top;
    
 
    //  console.log(ro,nearestF);
 
    // single selection policy
    
    // punten en lijnen gaan voor polygonen
    if (nearestF!=null)
    { 
            if (alles.length>1)
            {
               // showInfo(alles.length+" features geselecteerd. Alleen de eerste wordt geselecteerd");
                  if (!(enableMultiPointSelection)&&(map.getZoom()<16) ) {popupMultiSelect(e,alles);return} 
                  else
                   { 
                    showInfo(alles.length+" features geselecteerd. Alleen de eerste wordt geselecteerd");
                     selectedUriFromClick(nearestF.tags.uri,nearestF,tile,nearestF,x,y,pad,ctx,null,e);
                    }
            }
            else
            {
             selectedUriFromClick(nearestF.tags.uri,nearestF,tile,nearestF,x,y,pad,ctx,null,e);
            }
         return;
    } 
    
    
    
    if (nearestLine!=null){ selectedUriFromClick(nearestLine.tags.uri,nearestLine,tile,nearestLine,x,y,pad,ctx,null,e); return;}
	
	if (selectedPolies.length>0)
	    {
	     var f=selectedPolies[0];
	     var poly=polies[0];
         
         
            if (selectedPolies.length>1){
               
                //  if (!(enableMultiPointSelection)&&(map.getZoom()>14) ) {showInfo(alles.length+" features geselecteerd. alleen de eerste wordt geselecteerd");}
                 if (!(enableMultiPointSelection)&&(map.getZoom()>14) ) {popupMultiSelect(e,alles);return} else { showInfo(selectedPolies.length+" features geselecteerd. Alleen de eerste wordt geselecteerd");}
            }
          
            
             selectedUriFromClick(f.tags.uri,f,tile,poly,x,y,pad,ctx,e);  
        }
    
	   
	   // 
	    //if (selectedPolies.length>1){ showInfo(selectedPolies.length+" features geselecteerd. alleen de eerste wordt geselecteerd");}
	    
	  }
    
}

var CancelableMouseInteraction = function()
{
   this.cancel=false;    
}
CancelableMouseInteraction.prototype.getGeometriesUnderCursor=function(e,canvas,ctx,tile,pad){
   
   //console.log(e,canvas,ctx,tile,pad);
   
   let x = e.pageX;
   let y= e.pageY;
   
   
   let els =document.elementsFromPoint(x,y);
   
   for (let n in els)
   {
   
    let el = els[n];
    
    try
    {
        let r =getGeometriesUnderCursor(e,el,ctx,el,pad,true);
        if (r==null) continue;
       
        let b=false;
        for (let rn in r)
        {
            if ((r[rn]!=null) ) 
            {
                 if (r[rn].length>0) {b=true;}
            }
        }
       //  console.log(r,b);
       
        if (b)
        {
            // console.log("returning r",r);
             return r;
        } 
        
    }
    catch(e)
    {
        console.log(e);
    }
    
    
       
  
    
     
   }
    
    return getGeometriesUnderCursor(e,canvas,ctx,tile,pad,true);
}








function getGeometriesUnderCursor(e,canvas,ctx,tile,pad,canceleable){

   
   let rect = canvas.getBoundingClientRect();
   let selectedPolies=[];
   let polies=[];
   let alles=[];
    
  //  console.log(rect,canvas);
   let  x= e.clientX - rect.left;
    let y= e.clientY - rect.top;
     x=(x/canvas.width)*4096;//e.layerY
     y=(y/canvas.height)*4096;
    
     let gf=new jsts.geom.GeometryFactory();
     let c=new jsts.geom.Coordinate(x,y,0);
      let gp=gf.createPoint(c);
    // console.log(gp);
      if (tile!=null)
      {
      let nearestF=null;
      let nearestLine=null;
      let distanceL=null;
      let distance=0;
        for (let featureN in tile.features)
        {
              if (canceleable) {if (this.cancel){console.log("early return ");return;}}
           let f= tile.features[featureN];
        
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
                   let px=f.geometry[0][0];
                   let py=f.geometry[0][1];
                   let d=(Math.abs(px-x)*Math.abs(px-x))+(Math.abs(py-y)*Math.abs(py-y));
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
                let mainCords=null;
                let holes = [];
                let aantal=0;
                for (let gn in f.geometry)//linesgement
                    {
                        let lijnsegment=f.geometry[gn]; //segment
                        let coords=[];
                       
                        for (let cn in lijnsegment)
                           {
                                let c=new jsts.geom.Coordinate( lijnsegment[cn][0], lijnsegment[cn][1],0);
                                coords.push(c);
                           }
                          
                   
                        
                        if (f.type==2)
                            {
                                    //var gf=new jsts.geom.GeometryFactory();
                                    let linesstring=gf.createLineString(coords);
                                   
                                    let d=linesstring.distance(gp);
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
                                if (aantal==0){
                                    try {mainCords=gf.createLinearRing(coords);}catch(e){}
                                    }else {
                                        try{let lr=gf.createLinearRing(coords);holes.push(lr);}catch(e){}}
                                aantal++;
                            }
                        }

                        if (f.type==3)
                            {
                           try{
                                let poly=gf.createPolygon(mainCords,holes);
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
       // console.log([nearestF,selectedPolies,polies,alles,nearestLine]);
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
	//  console.log("selected uri "+uri);
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
		Singleton.getInstance().relatedUri1=uri;
		   createRectangle(layers);
		   
	}
        
    //time out
}


var selectionLayer=null;//bestaat alvast
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
        if (map.getZoom()>20)
        {  
          var w=0.00002;
         }
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
                    mouseEvents:false,
                    indexMaxZoom: 1,        // max zoom in the initial tile index
  		            indexMaxPoints: 500, // max number of points per tile in the index
  		          
  		        };
                  
                  if (selectionLayer!=null)
                  {
                    map.removeLayer(selectionLayer);
                  }
                 selectionLayer= new L.GridLayer.GeoJSON(gj,tileOptions);
                 selectionLayer.addTo(map);
  	      
  	    // Singleton.getInstance().tileIndex = geojsonvt(gj, tileOptions);
  	     
  	     updateAllTileLayers();
  	    }
  	  


}

function decreaseMapFeatures(event)
{
    if (event!=null) {event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}
   // console.log(event);
    document.mapsize--;
    if (document.mapsize<0){document.mapsize=0;}
    updateAllTileLayers();
}
function increaseMapFeatures(event)
{
  if (event!=null) {event.stopImmediatePropagation();event.stopPropagation(); event.preventDefault();}
    document.mapsize++;
    if (document.mapsize>10){document.mapsize=10;}
    updateAllTileLayers();
}





































/*


L.TileLayer.mergeOptions({
    // @option keepBuffer
    // The amount of tiles outside the visible map area to be kept in the stitched
    // `TileLayer`.

    // @option dumpToCanvas: Boolean = true
    // Whether to dump loaded tiles to a `<canvas>` to prevent some rendering
    // artifacts. (Disabled by default in IE)
    dumpToCanvas: L.Browser.canvas && !L.Browser.ie,
  
});

L.TileLayer.include({
    _onUpdateLevel: function(z, zoom) {
        if (this.options.dumpToCanvas) {
            try
            {
            this._levels[z].canvas.style.zIndex =
                this.options.maxZoom - Math.abs(zoom - z);
                }
                catch(e){}
        }
    },

    _onRemoveLevel: function(z) {
        if (this.options.dumpToCanvas) {
            try{
            L.DomUtil.remove(this._levels[z].canvas);
            }
            catch(e){}
        }
    },

    _onCreateLevel: function(level) {
        if ((this.options.dumpToCanvas)  && (true)){
            level.canvas = L.DomUtil.create(
                "canvas",
                "leaflet-tile-container leaflet-zoom-animated ",
                this._container
            );
            level.ctx = level.canvas.getContext("2d");
            this._resetCanvasSize(level);
        }
    },

    _removeTile: function(key) {
        if (this.options.dumpToCanvas) {
            var tile = this._tiles[key];
            var level = this._levels[tile.coords.z];
            var tileSize = this.getTileSize();

            if (level) {
                // Where in the canvas should this tile go?
                try
                {
                var offset = L.point(tile.coords.x, tile.coords.y)
                    .subtract(level.canvasRange.min)
                    .scaleBy(this.getTileSize());

                level.ctx.clearRect(offset.x, offset.y, tileSize.x, tileSize.y);
                } catch(e){}
            }
        }

        L.GridLayer.prototype._removeTile.call(this, key);
    },

    _resetCanvasSize: function(level) {
        var buff = this.options.keepBuffer,
            pixelBounds = this._getTiledPixelBounds(this._map.getCenter()),
            tileRange = this._pxBoundsToTileRange(pixelBounds),
            tileSize = this.getTileSize();

        tileRange.min = tileRange.min.subtract([buff, buff]); // This adds the no-prune buffer
        tileRange.max = tileRange.max.add([buff + 1, buff + 1]);

        var pixelRange = L.bounds(
                tileRange.min.scaleBy(tileSize),
                tileRange.max.add([1, 1]).scaleBy(tileSize) // This prevents an off-by-one when checking if tiles are inside
            ),
            mustRepositionCanvas = false,
            neededSize = pixelRange.max.subtract(pixelRange.min);

        // Resize the canvas, if needed, and only to make it bigger.
        if (
            neededSize.x > level.canvas.width ||
            neededSize.y > level.canvas.height
        ) {
            // Resizing canvases erases the currently drawn content, I'm afraid.
            // To keep it, dump the pixels to another canvas, then display it on
            // top. This could be done with getImageData/putImageData, but that
            // would break for tainted canvases (in non-CORS tilesets)
            var oldSize = { x: level.canvas.width, y: level.canvas.height };
            // console.info('Resizing canvas from ', oldSize, 'to ', neededSize);

            var tmpCanvas = L.DomUtil.create("canvas");
            tmpCanvas.style.width = (tmpCanvas.width = oldSize.x) + "px";
            tmpCanvas.style.height = (tmpCanvas.height = oldSize.y) + "px";
            tmpCanvas.getContext("2d").drawImage(level.canvas, 0, 0);
            // var data = level.ctx.getImageData(0, 0, oldSize.x, oldSize.y);

            level.canvas.style.width = (level.canvas.width = neededSize.x) + "px";
            level.canvas.style.height = (level.canvas.height = neededSize.y) + "px";
            level.ctx.drawImage(tmpCanvas, 0, 0);
            // level.ctx.putImageData(data, 0, 0, 0, 0, oldSize.x, oldSize.y);
        }

        // Translate the canvas contents if it's moved around
        if (level.canvasRange) {
            var offset = level.canvasRange.min
                .subtract(tileRange.min)
                .scaleBy(this.getTileSize());

            //          console.info('Offsetting by ', offset);

            if (!L.Browser.safari) {
                // By default, canvases copy things "on top of" existing pixels, but we want
                // this to *replace* the existing pixels when doing a drawImage() call.
                // This will also clear the sides, so no clearRect() calls are needed to make room
                // for the new tiles.
                level.ctx.globalCompositeOperation = "copy";
                level.ctx.drawImage(level.canvas, offset.x, offset.y);
                level.ctx.globalCompositeOperation = "source-over";
            } else {
                // Safari clears the canvas when copying from itself :-(
                if (!this._tmpCanvas) {
                    var t = (this._tmpCanvas = L.DomUtil.create("canvas"));
                    t.width = level.canvas.width;
                    t.height = level.canvas.height;
                    this._tmpContext = t.getContext("2d");
                }
                this._tmpContext.clearRect(
                    0,
                    0,
                    level.canvas.width,
                    level.canvas.height
                );
                this._tmpContext.drawImage(level.canvas, 0, 0);
                level.ctx.clearRect(0, 0, level.canvas.width, level.canvas.height);
                level.ctx.drawImage(this._tmpCanvas, offset.x, offset.y);
            }

            mustRepositionCanvas = true; // Wait until new props are set
        }

        level.canvasRange = tileRange;
        level.canvasPxRange = pixelRange;
        level.canvasOrigin = pixelRange.min;

        // console.log('Canvas tile range: ', level, tileRange.min, tileRange.max );
        // console.log('Canvas pixel range: ', pixelRange.min, pixelRange.max );
        // console.log('Level origin: ', level.origin );

        if (mustRepositionCanvas) {
            this._setCanvasZoomTransform(
                level,
                this._map.getCenter(),
                this._map.getZoom()
            );
        }
    },

    /// set transform/position of canvas, in addition to the transform/position of the individual tile container
    _setZoomTransform: function(level, center, zoom) {
        L.GridLayer.prototype._setZoomTransform.call(this, level, center, zoom);
        if (this.options.dumpToCanvas) {
            this._setCanvasZoomTransform(level, center, zoom);
        }
    },

    // This will get called twice:
    // * From _setZoomTransform
    // * When the canvas has shifted due to a new tile being loaded
    _setCanvasZoomTransform: function(level, center, zoom) {
        // console.log('_setCanvasZoomTransform', level, center, zoom);
        if (!level.canvasOrigin) {
            return;
        }
        var scale = this._map.getZoomScale(zoom, level.zoom),
            translate = level.canvasOrigin
                .multiplyBy(scale)
                .subtract(this._map._getNewPixelOrigin(center, zoom))
                .round();

        if (L.Browser.any3d) {
            L.DomUtil.setTransform(level.canvas, translate, scale);
        } else {
            L.DomUtil.setPosition(level.canvas, translate);
        }
    },

    _onOpaqueTile: function(tile) {
        if (!this.options.dumpToCanvas) {
            return;
        }

        // Guard against an NS_ERROR_NOT_AVAILABLE (or similar) exception
        // when a non-image-tile has been loaded (e.g. a WMS error).
        // Checking for tile.el.complete is not enough, as it has been
        // already marked as loaded and ready somehow.
        try {
            this.dumpPixels(tile.coords, tile.el);
        } catch (ex) {
            return this.fire("tileerror", {
                error: "Could not copy tile pixels: " + ex,
                tile: tile,
                coods: tile.coords,
            });
        }

        // If dumping the pixels was successful, then hide the tile.
        // Do not remove the tile itself, as it is needed to check if the whole
        // level (and its canvas) should be removed (via level.el.children.length)
        tile.el.style.display = "none";
    },

    // @section Extension methods
    // @uninheritable

    // @method dumpPixels(coords: Object, imageSource: CanvasImageSource): this
    // Dumps pixels from the given `CanvasImageSource` into the layer, into
    // the space for the tile represented by the `coords` tile coordinates (an object
    // like `{x: Number, y: Number, z: Number}`; the image source must have the
    // same size as the `tileSize` option for the layer. Has no effect if `dumpToCanvas`
    // is `false`.
    dumpPixels: function(coords, imageSource) {
        var level = this._levels[coords.z],
            tileSize = this.getTileSize();

        if (!level.canvasRange || !this.options.dumpToCanvas) {
            return;
        }

        // Check if the tile is inside the currently visible map bounds
        // There is a possible race condition when tiles are loaded after they
        // have been panned outside of the map.
        if (!level.canvasRange.contains(coords)) {
            this._resetCanvasSize(level);
        }

        // Where in the canvas should this tile go?
        var offset = L.point(coords.x, coords.y)
            .subtract(level.canvasRange.min)
            .scaleBy(this.getTileSize());

        level.ctx.drawImage(imageSource, offset.x, offset.y, tileSize.x, tileSize.y);

        // TODO: Clear the pixels of other levels' canvases where they overlap
        // this newly dumped tile.
        return this;
    },
});


*/






