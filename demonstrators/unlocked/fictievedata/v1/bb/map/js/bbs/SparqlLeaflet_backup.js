


function removeAll()
{


var first=true;
Singleton.getInstance().map.eachLayer(function (layer) {
  //  console.log(layer);
if (first)
{first=false;}
else
{
	
    Singleton.getInstance().map.removeLayer(layer);
    }
});

removeAllSelections();
}




function analyseerResulaten(json)
{
    
   // runtime("analyse");
    
   
    
    if (json==null) {return;}
    if (json.results==null) {return;}
    
    this.window.top.mapsize=1;
    
	var bindings = json.results.bindings;
	if (bindings==null){return;}
	// console.log(bindings)
   var analyseResultaten={json:json,geometry:false,geometryGeoJSON:false,rgbcolor:false, actief:false,color:false,size:false,popup:false,highlight:false,sizeGetal:false,colorGetal:false,title:'',kenmerknaam:''};
   
   var i;
   
   var sizeO={};
   var colorO={};
   var rgbcolorO={};
   var actiefO={};
      analyseResultaten.sizeO=sizeO;
      analyseResultaten.colorO=colorO;
      analyseResultaten.rgbcolorO=rgbcolorO;
      analyseResultaten.actiefO=actiefO;

 	for  (i in bindings)
 	{
               var o= bindings[i];
               if (o.geometry!=null) {analyseResultaten.geometry=true}
               if (o.geometryGeoJSON!=null) {analyseResultaten.geometryGeoJSON=true}
               if (o.color!=null) {analyseResultaten.color=true;if ((o.color.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.color.datatype=="http://www.w3.org/2001/XMLSchema#int")) {analyseResultaten.colorGetal=true;} }
               if (o.size!=null) {analyseResultaten.size=true; if ((o.size.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.size.datatype=="http://www.w3.org/2001/XMLSchema#int")) {analyseResultaten.sizeGetal=true;}}
               if (o.popup!=null) {analyseResultaten.popup=true}
               if (o.highlight!=null) {analyseResultaten.highlight=true}
               if (o.rgbcolor!=null) {analyseResultaten.rgbcolor=true}
               if (o.actief!=null) {analyseResultaten.actief=true}
           //    if (o.title!=null) {analyseResultaten.title=o.title.value}// singleton.
									    // beetje
									    // ranzig
									    // maarja
               if (o.kenmerknaam!=null) {analyseResultaten.kenmerknaam=o.kenmerknaam.value}// singleton.
											    // beetje
											    // ranzig
											    // maarja
               
              try {if (analyseResultaten.sizeGetal) { sizeO[parseFloat(o.size.value)]=1;} else {sizeO[o.size.value]=1;}} catch(error){}
              try {if (analyseResultaten.colorGetal) { colorO[parseFloat(o.color.value)]=1;} else {colorO[o.color.value]=1;}} catch(error){}
              try {if (analyseResultaten.rgbcolor) 
              { 
        	  var rgb=[255,0,0];
        	  try
        	  {
                	  var vv=o.rgbcolor.value.replace("rgb(","");
                	  vv=vv.replace("RGB(","");
                	  vv=vv.replace(")","");
                	  rgb=vv.split(",");
        	  }
        	  catch(error){}
        	
        	      	  analyseResultaten.rgbcolorO[o.color.value]=rgb;
        	 
        	  
              }
              	} catch(error){}
              	
                try {
                    if (analyseResultaten.actief) 
                        {  
                	   var vector=actiefO[o.actief.value];
                	   if (vector==null)
                	       {
                	         vector=[];
                	         actiefO[o.actief.value]=vector;
                	       }
                	   vector.push(o);
                        }
                }
                catch(error){}
    }
 	
    
    if (analyseResultaten.size==true)
    {
       // bepaal min en max waarde
       //
       var ar=Object.keys(sizeO);
       var extra="";
       if (analyseResultaten.sizeGetal)
       {
         extra="\"";
         ar=ar.sort(function(a,b) { return b - a;});
         var min=ar[0];
         var max=ar[ar.length-1];
         var delta=max-min;
         analyseResultaten.sizeMin=min;
         analyseResultaten.sizeMax=max;
         analyseResultaten.sizeAr=ar;
      
         for (var key in ar)
         {
            var value = ar[key];
            var cvalue=((value-min)/delta)*8+7;
            sizeO[value]=Math.floor(cvalue);
         }
         
       }
       else
       {
      	ar= ar.sort();
           var n=0.0;
           var sizeO={};
           for (var key in ar)
           {
         
             sizeO[ar[key]]=1.5+(n/ar.length)*25;
             n++;
           }
           analyseResultaten.sizeO=sizeO;
	}
  
       
     
       
    }
      if (analyseResultaten.color==true)
    {
       // bepaal min en max waarde
       //
       var ar=Object.keys(colorO);
       var extra="";
       if (analyseResultaten.colorGetal)
       {
         extra="\"";
         ar=ar.sort(function(a,b) { return b - a;});
       
         var min=ar[0];
         var max=ar[ar.length-1];
         var delta=max-min;
        analyseResultaten.colorMin=min;
        analyseResultaten.colorMax=max;
        analyseResultaten.colorAr=ar;
        
         for (var key in ar)
         {
            var value = ar[key];
            var cvalue=((value-min)/delta)*255.0;
            colorO[value]=cvalue;
         }
         
       }
       else
       {
	   // getal
	   
      	   ar= ar.sort();
           var n=0.0;
           var colorO={};
           for (var key in ar)
           {
            colorO[ar[key]]=0+(n/ar.length)*255;
            n++;
           }
            
       }
       analyseResultaten.colorO=colorO;
    // Singleton.getInstance().legend.update(analyseResultaten);
   }
      
  //   endtime("analyse");
      
     
      // change red if only one object
      if (analyseResultaten.colorO!=null)
	  {
	    var aantal=0;
	    for (var n in analyseResultaten.colorO){aantal++}
	//    console.log(aantal)
	    if (aantal==1)
		{
		 for (var n in analyseResultaten.colorO){analyseResultaten.colorO[n]=255;} 
		}
	  }
   //   console.log(analyseResultaten);
      // createLegendPanel(analyseResultaten);
      try{createLegendPanel(analyseResultaten);}catch(error){}
  // console.log("analyse resultaten:",analyseResultaten,json);
   
      
      
   return analyseResultaten;
}



function parseArrays(headers,resultaten)
{
    // oude implementatie voor weaver resultaten
    // console.log(headers,resultaten);
    
    var json={results:{bindings:[]}}
    
    var bindings = json.results.bindings;
    for (var nr in resultaten)
	{
	var r=resultaten[nr]
	 var o={};
	 bindings.push(o);
	 
	 for (var headerN in headers)
	     {
	     var header = headers[headerN]
	        o[header]={value: r[headerN]};
	     }
	
	}
// console.log(json);
    parsejson(json);
    
    
    
}



function determineReSparqlAbilities(sparql,ar)
{
    
    
  //  console.log("determineResparql abilities "+sparql)
   // bepaald of een sparql query gerewrite kan worden met een grafische
    // filter. Dit kan wannee er #bounds in de bsp voorkomt
    if (sparql==null)
	{
	   try {   Singleton.getInstance().map.removeControl( Singleton.getInstance().drawControl); return;}catch(error){};
	}
    
  try{  Singleton.getInstance().map.removeControl( Singleton.getInstance().drawControl);}catch(error){};
  try
  {
      Singleton.getInstance().drawControl.options.draw.rectangle=false;
    
    if (sparql.includes("#bounds"))
    {
	Singleton.getInstance().drawControl.options.draw.rectangle=true;
	Singleton.getInstance().drawControl.options.draw.polygon=true;
    }
    if (sparql.includes("#RD"))
    {
	Singleton.getInstance().rd=true;
    }
    else
	{
	Singleton.getInstance().rd=false;
	}
    
    var drawControl = new L.Control.Draw(Singleton.getInstance().drawControl.options);
    Singleton.getInstance().drawControl=drawControl;
    Singleton.getInstance().map.addControl(Singleton.getInstance().drawControl);

  }
  catch(error){}
  
  
  
  if (sparql.includes("#inverse"))
  {
	console.log("inverse coloring called ",ar);
	if (ar.color)
	    {
	       for (var key in ar.colorO)
		   {
		     	var waarde=ar.colorO[key];
		     	ar.colorO[key]=(255-waarde);
		   }
	    }
	else
	    {
	    
	    console.log("inverse not implemented for this")
	    }
	
  }
  
  
  
  // add values from sparql nOT USED
  
  try
  {
      var elements=sparql.split("#color:RGBA(");
    // console.log(elements);
      for (var n in elements)
      { // beetje ranzig maar prima voor nu
	  // we gaan over op rgb kleuren
	//  ar.rgbcolor=true;
	 // ar.rgbcolorO={};
	 // ar.colorGetal=false;
	  if (n!=0)
     	   {
    	     ar.colorO={};
              console.log("resetting rgb colors according to sparql definitions and sequence");	  
     	   }
	  
	  
      }
      for (var n in elements)
	  {
	  // use rgb mechanism for this.
      	   var element=elements[n];
      	   
      	   if (n!=0)
      	   {
      	       var line=element.split("\n");
      	       var keys=line[0].split("@");
      	       var rgb=keys[0].replace(")","");
	       var key=keys[1].split("\"")[1];
	       var rgb=rgb.replace("rgba(","");
	       rgb=rgb.replace("RGBA(","");
	       rgb=rgb.replace(")","");
		rgb=rgb.split(",");
	      	ar.colorO[key]=rgb;
	   }
       }
    //  console.log(ar);

  }
  catch(error){console.log(error);}
  
  try
  {
      
      var elements=sparql.split("#title:");
   //   console.log(elements);
      if (elements.length==2)
	  {
	     ar.title=elements[1].split(";")[0];
	  }
  }
  catch(error){console.log(error);}
  

    return ;
    
}


proj4.defs("urn:ogc:def:crs:EPSG::28992","+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.999908 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.4174,50.3319,465.5542,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +no_defs");
var crs={        type: "name",        properties: {          name: "urn:ogc:def:crs:EPSG::28992"        }      };





async function parsejson(json,sparql)
{
 
    resetTime();
    removeAllSelections(); //BBVTGUitls
    var meerdereShapesPerUri=false;
 //   runtime("removeall");
 	removeAll();
 //	endtime("removeall");
 	if (json==null){return;}
 	  Singleton.getInstance().uri_objects={};
	// bepaal resparql mogelijkheden
 	// Singleton.getInstance().iface.unlock();
 	
 	  showInfo("start verwerken gis data");
 	// Singleton.getInstance().iface.lock();
 	
 	var ar=analyseerResulaten(json);
 	 
	determineReSparqlAbilities(sparql,ar);
	

 console.log("jsonparsing" );
if (ar.geometryGeoJSON) 
	{// console.log("receiving geojson ");
	}



Singleton.getInstance().json=json;
Singleton.getInstance().legend.update(ar);

Singleton.getInstance().uri_objects={};

var features=[];
 	var bindings = json.results.bindings;
 	var i;
 	var bounds=null;
 	var aantal=0;
 	
 	//runtime("parse");
 	
 	
 	//console.log("process results");
 	for  (i in bindings)
 	{
 	    aantal++;
 	   var o= bindings[i];
 	         try
 	         {
           var uri=o.uri.value;
           if (ar.geometryGeoJSON)
               {
               		var gj=o.geometryGeoJSON.value;
               	        var  geojsonObject = { 'type': 'FeatureCollection', 'crs': {'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:OGC:1.3:CRS84' }  }, 'features': [JSON.parse(gj) ]};
               		var layer=new L.geoJson(geojsonObject);
               }
           else
               {
               		var p2=o.geometry.value;
               		//runtime("wkt");
               		var layer =omnivore.wkt.parse(p2.toString());
               		//endtime("wkt");
               }
                      
                       if (Singleton.getInstance().rd==true)
                	   {
                	   
                	       layer=layer.toGeoJSON();
                	       layer.crs=crs;
                	       layer=L.Proj.geoJson(layer);
                	     
                	   }
                       
                       
                    //   runtime("hashlookup");
                       
                       if (Singleton.getInstance().uri_objects[uri]!=null)
                	   {
                	           meerdereShapesPerUri=true;
                	           Singleton.getInstance().uri_objects[uri].push(layer);
                	           if (aantal<2) {console.log(uri);}
                	   }
                       else
                	   {
                	   	Singleton.getInstance().uri_objects[uri]=[layer];
                	   }
                    //   endtime("hashlookup");
                     
                     
                       try{
                       if (bounds==null){bounds=layer.getBounds();}else{bounds.extend(layer.getBounds());}
                       }
                       catch(error){
                	   // console.log(error);
                	   }
                      var color="blue";
                     color="155, 102, 102" ;
                     
                    
                     
                     if (ar.color==true)
                     {
                	 try
                	     {
                        	       var colorN =ar.colorO[o.color.value];
                        	       if (colorN==undefined){colorN=ar.colorO[parseFloat(o.color.value)]}
                        	       if (colorN==undefined) {colorN=0;}
                        	       if (Array.isArray(colorN))
                        		   {
                        		       color=colorN[0]+","+colorN[1]+","+colorN[2];
                        		   }
                        	       else
                        		   {
                        		   	color=numberToColorHsl(colorN/255,0,1);
                        		   }
                	       }
                	       catch(error){}
                     }
                     
                     if (ar.rgbcolor==true)
                	 {
                	 	color=o.rgbcolor.value;
                	 	if (color==null){  color="155, 102, 102" ;}
                	 }
                     
                	var supportedType=false;
		for (var n in layer._layers)
			{
			
			  try
			  {
						var object = layer._layers[n];
						object.uri=uri;
						var type = object.feature.geometry.type;
						object.feature.properties["uri"]=uri;
						if (color!=null){						object.feature.properties["color"]=color;}
						features.push(object.feature);
			  }
			  catch(error)
			  {
			      console.log(error);
			  }
						 
			}
 	         }catch(featureError){}
	} //end for
 	
 	//console.log("end parsing");
 	//endtime("parse");
 	//runtime("leaflet");
 	console.log("klaar met resultaten processen");
 	
 	
 	
 	
 	
 	
 	
 	addData({ "type": "FeatureCollection",     "crs": {         "type": "name",         "properties": {             "name": "urn:ogc:def:crs:OGC:1.3:CRS84"        }     },     "features": features});
  	if(Singleton.getInstance().fitBounds!=false)
 	    {
 	    
         	   var oldfb=Singleton.getInstance().fitBounds;
         	 //  Singleton.getInstance().fitBounds=false;
         	   try{	Singleton.getInstance().map.fitBounds(bounds); }catch(error){}
         
 	    }
 	// window.top.map.invalidateSize();
 	
 	try{Singleton.getInstance().scope.loader.map=false;}catch(error){}
 	//endtime("leaflet");
 	//printtime();
 	
 	if (meerdereShapesPerUri)
 	    {
 	    	showInfo("meerdere features kunnen 1 object vertegenwoordigen");
 	    }
 	
 	showInfo("einde verwerken van "+aantal+" features" );
 	//console.log("einde verwerken");
 	
 	try {window.top.ready();}catch(e){}
 	}
 	







	
	
	