var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance 22");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
         //   console.log(instance);
            return instance;
        }
    };
})();


Singleton.getInstance().aantalFeaturesIsLaag=true;


/*
var RD = new L.Proj.CRS(
	    'EPSG:28992',
	    '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs', {
	    origin: [-285401.92, 22598.08],
	    resolutions: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105],
	    bounds: L.bounds([-285401.92, 22598.08], [595401.920, 903401.920])
	});

*/

//raster fix

try
{
  (function(){
    var originalInitTile = L.GridLayer.prototype._initTile
    L.GridLayer.include({
        _initTile: function (tile) {
            originalInitTile.call(this, tile);

            let tileSize = this.getTileSize();

            tile.style.width = tileSize.x + 1 + 'px';
            tile.style.height = tileSize.y + 1 + 'px';
        }
    });
})()

}
catch(e){}




var usePDOK=true;


var options={};
//options.maxZoom=19;
//options.crs=RD;
options.continuousWorld= true;
options.maxZoom=22;

var center=[52.2324167,5.9935917];
var centerzoom=8;


options.contextmenu= true;
//options.contextmenuWidth140
   
function showProperties()
{
   
    var uri=Singleton.getInstance().selectedUri;
    if (uri!=null)
    {
       //  console.log("show properties for ",uri);
        openPropertyPanel(null,{uri:uri});
        }
        else
        {
            showInfo("niets geselecteerd");
        }
}

options.contextmenuItems= [{
        text: 'properties',
       callback: showProperties
    } ];


if (usePDOK)
    {

    
    var opts = {
            style: 'standaard',
            target: 'map',
            center: {
                longitude: 5.969900,
                latitude: 52.511200
            },
            overlay: 'false',
            marker: false,
            zoom: 12,
            maxZoom: 0,
            minZoom:16,
            search: true,
            zoomControl: false
           
        };
        if (L.version.substring(0,2)=="0.")
        {
          //  console.log("LEAFLET V0.7 via nlmaps");
           //var map = L.map('map',options);
            var map = nlmaps.createMap(opts);
            map.removeControl(map.zoomControl);
            try
            {
                var zoomHome = L.Control.zoomHome( {position: 'topright'});
                zoomHome.addTo(map);
                zoomHome.setHomeCoordinates(center);
                zoomHome.setHomeZoom(centerzoom);
               
            }
            catch(eee){}
        }
        else
        {
            //
           // console.log("LEAFLET V1.8"); 
            
            options.edgeBufferTiles=2;
            if (false)
            {
                 options.scrollWheelZoom=false;
                options.smoothWheelZoom= true;  // enable smooth zoom 
                 options.smoothSensitivity= 1;    // zoom speed. default is 1
            }
            
            var map = L.map('map',options);
             // var map = nlmaps.createMap(opts);
            
             try
            {
               // console.log("create zoom home")
                var zoomHome = L.Control.zoomHome( {position: 'topright'});
               
                zoomHome.setHomeCoordinates(center);
                zoomHome.setHomeZoom(centerzoom);
                 zoomHome.addTo(map);
               
            }
             catch(eee){console.log(eee);}
        }
    }
else
    {

    		var map = L.map('map',options);
    }
map.options.maxZoom = 24;

map.on("layeradd", function(e)
{
 //console.log("layeradd event",e);
   try {getIface().setLoading(false); } catch(e){}
})



try
{

map.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'View Fullscreen',
        'true': 'Exit Fullscreen'
    }
}));

}
catch(e){}



map.on("move",function(){  try {map.contextmenu.hide();}catch(e){}});





try
{


map.addControl(new L.Control.LinearMeasurement({
    unitSystem: 'metric',
    color: '#FF0080',
    type: 'line'
  }));
  

}
catch (ee){}

//L.DomUtil.addClass(map._container,'crosshair-cursor-enabled'); //werkt niet
//$('.leaflet-mouse-marker').css('cursor','crosshair');
/*
map.on("mousemove",function(event){
    //console.log(event);
    //document.getElementById('map').style.cursor = 'crosshair';
    document.getElementById('map').style.cursor = ''; // handje
    
    
});
*/





Singleton.getInstance().map=map;
if (false)
{
        try
        {

        L.control.polylineMeasure(options).addTo(map);
        }
        catch(ee){}
}


if (false)
{
    try
    {
        
    stateChangingButton.addTo( map );

        
    }
    catch(ee){console.log(ee);}
}


try
{

L.easyPrint({
	title: 'Print',
	position: 'bottomright',
	sizeModes: ['A4Portrait', 'A4Landscape','A0Landscape']
}).addTo(map);

}
catch(ee){}


 
function geoTimer()
{
  
    var d=new Date();
    var dold=Singleton.getInstance().geoSubsetTime;
    if (dold==undefined){return;}
   // console.log("geotimer called",dold,d);
    if (d-dold>1000)
	 {
	//console.log("really resparqlen fitBounds is "+Singleton.getInstance().fitBounds);
	 try
		{
	          var old=Singleton.getInstance().fitBounds;
	          Singleton.getInstance().fitBounds=false;
	          
		  resparql(Singleton.getInstance().map,false);
		  Singleton.getInstance().fitBounds=old;
		}
		catch(error){console.log(error);}
		
		 Singleton.getInstance().geoSubsetTime=undefined;
	 }
    else
	 {
	    window.setTimeout(geoTimer, 1000);
	 }
    
    
    
 }

 
function resparqlBecauseOfView(e)
{
  //  console.log("resparqlBecauseOfView event called ",Singleton.getInstance().geoSubset);
    if (Singleton.getInstance().geoSubset==true)
	{
	  if (Singleton.getInstance().geoSubsetTime==undefined)
	      {
	        //start up
	      //   console.log("starting geosparql timer");
	         window.setTimeout(geoTimer, 1000);
	      
	      }
	  
	      Singleton.getInstance().geoSubsetTime=new Date();
	}
}





Singleton.getInstance().legend=new L.Control.Legend();

 if (!Singleton.getInstance().noLegend==true)
 {
 
    Singleton.getInstance().legend.addTo(map);
   // Singleton.getInstance().legend.testTabs();
    }


map.on('baselayerchange', function(e) {
  
    updateAllTileLayers();
    
   // window.setTimeout(function(){ updateAllTileLayers(); }, 100);
    
  });


//baseTile.addTo(map);





map.setView(center,centerzoom);


//
//  test
//


//var wmsLayer = L.tileLayer.wms('https://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WMSServer', {SRS:"EPSG:4326",CRS:"EPSG:4326"version:"1.3.0",layers:"Wegas"}).addTo(map);
//console.log("adding wmslayer",wmsLayer)

Singleton.getInstance().clearSelectionButton=L.easyButton('fa-remove', () => {
  map.removeLayer(drawnItems)
  const emptyValue = 'http://www.buildingbits.nl/empty'
  Singleton.getInstance().iface.widget.publishList('multiSelectionPublishVariable', 'multiSelectionParameterType', [])
  Singleton.getInstance().iface.widget.publish('publishVariable', emptyValue)
  SparqlLayerDB.setSelectedObjects()
}, 'clear selection').addTo(map)

if (false)
{
    try
    {

    L.easyButton('fa-download', function(btn, map){
    downloadCSV();
    }).addTo( map );

    }
    catch(ee){}

}







var drawnItems = new L.FeatureGroup();
//map.addLayer(drawnItems);
try
{
        var geoc=L.Control.geocoder({position:"bottomright"});
        geoc.setPosition("bottomleft");
       geoc.addTo(map);
}
catch(ee){}


var overlayMaps = { "selectie":drawnItems
   
};

overlayMaps=null;

try
{
  new Layerwidget(map);
}
catch (eee){console.log(eee)}


try
{
// load shapefile
var control=L.control.shapefile({ position: 'topright' }).addTo(map);
Singleton.getInstance().loadShapeControl=control;

}
catch(e)
{

}

try 
{
  //geoman

map.pm.addControls({  
  position: 'topleft',  
  drawCircle: false,  
  drawPolygon:false,
  drawRectangle:false,
  drawMarker:false,
  drawText:false,
  drawCircleMaker:false
});  

}catch(e)
{


}


try
{
L.drawLocal.draw.toolbar.buttons.rectangle = 'selecteer een gebied';

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    draw:{polyline:true,polygon:true,circle:false,marker:true},
    edit:false
    
});

 
  map.addControl(drawControl);


Singleton.getInstance().drawControl=drawControl;
Singleton.getInstance().drawnItems=drawnItems;
// polygon event

map.on('draw:created', function (e) {
  Singleton.getInstance().fitBounds=true;
  drawnItems.addLayer(e.layer);
  map.addLayer(drawnItems);
  //resparql(e.layer);

  const deckLayer = SparqlLayerDB.deckLayer
  if (deckLayer) {
    publishObjectsInDrawnShape(drawnItems, deckLayer.gjlayer)
  }
});

function publishObjectsInDrawnShape(drawnItems, gjlayer) {

  const drawnItemGeo = drawnItems.toGeoJSON()
  if (!drawnItemGeo.type === "FeatureCollection" && drawnItemGeo.features.length !== 1) {
    throw new Error("Drawn item not in expected format")
  }
  const drawnItemFeature = drawnItemGeo.features[0]

  const matchedFeatureSet = new Set()

  const selectionType = Singleton.getInstance().iface.me.props.multiSelectionType || "intersect"

  /*
   * Using internal deck.GeoJsonLayer data to intersect, then going back
   * to the original __source object.
   *
   * This solution is incorporated now since at this place we do not have the
   * original features array at hand.
   */
  for (const featuresInternal of Object.values(gjlayer.state.features)) {
    for (const featureInternal of featuresInternal) {
      const matches = geometryMatchesSelection(selectionType, featureInternal.geometry, drawnItemFeature.geometry)
      if (!matches) continue
      matchedFeatureSet.add(featureInternal.__source.object)
    }
  }

  SparqlLayerDB.setSelectedObjects(matchedFeatureSet)

  const geometryPublishFormat = Singleton.getInstance().iface.me.props.multiSelectionShapePublishFormat || "GeoJSON"

  const cleanedDrawnItemFeature = featureWithoutSubsequentDuplicatePoints(drawnItemFeature)
  publishGeometry(geometryPublishFormat, cleanedDrawnItemFeature)
}

/**
 * Determines whether two GeoJSON geometries match, according to the specified selectionType
 * @param selectionType {"intersect" | "within"}
 * @param geometry1 the first GeoJSON geometry
 * @param geometry2 the second GeoJSON geometry
 * @return {boolean}
 */
function geometryMatchesSelection(selectionType, geometry1, geometry2) {
  switch (selectionType) {
    case "intersect":
      return turf.booleanIntersects(geometry1, geometry2)
    case "within":
      return turf.booleanWithin(geometry1, geometry2)
    default:
      throw new Error(`Unknown selectionType ${selectionType}`)
  }
}

/**
 * Publishes the GeoJSON feature back to the iface, according to specified geometryPublishFormat
 * @param geometryPublishFormat {"WKT" | "GeoJSON"}
 * @param feature the GeoJSON feature
 */
function publishGeometry(geometryPublishFormat, feature) {
  switch (geometryPublishFormat) {
    case "WKT":
      const wkt = Terraformer.WKT.convert(feature.geometry)
      Singleton.getInstance().iface.widget.publish('multiSelectionShapePublishVariable', wkt)
      return
    case "GeoJSON":
      const geoJson = JSON.stringify(feature)
      // Need to escape JSON string, since wistor {{variables}} don't do proper escaping on their own
      const geoJsonEscaped = geoJson.replaceAll("\"", "\\\"")
      Singleton.getInstance().iface.widget.publish('multiSelectionShapePublishVariable', geoJsonEscaped)
      return
    default:
      throw new Error(`Unknown geometry publish format ${geometryPublishFormat}`)
  }
}

/**
 * Workaround for Leaflet.Draw's published geometry containing duplicate points.
 *
 * This workaround is probably not necessary in newer Leaflet.Draw versions:
 * https://github.com/Leaflet/Leaflet.draw/issues/688
 *
 * @return GeoJSON geometry without subsequent duplicate points
 */
function featureWithoutSubsequentDuplicatePoints(feature) {
  if (feature.geometry.type !== "Polygon") return feature
  return {
    ...feature,
    geometry: {
      ...feature.geometry,
      coordinates: feature.geometry.coordinates.map(filterSubsequentDuplicatePoints)
    }
  }
}

function filterSubsequentDuplicatePoints(points) {
  return points.reduce((filteredPoints, currentPoint) => {
    if (!filteredPoints.length) return [currentPoint]
    const lastPoint = filteredPoints.at(-1)
    if (isNotDuplicate(lastPoint, currentPoint)) filteredPoints.push(currentPoint)
    return filteredPoints
  }, [])
}

function isNotDuplicate(pointA, pointB) {
  for (let i = 0; i < pointA.length; i++) {
    if (pointA[i] !== pointB[i]) return true
  }
  return false
}

map.on('draw:drawstop', function (e) {

if (drawnItems.getLayers().length==0)
{
	resparql(null);
}
var data = drawnItems.toGeoJSON();
console.log(data);
   
});


}
catch(ee){}



/*
//3D Buildings

new L.TileLayer('https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png', {
attribution: 'Map tiles &copy; <a href="http://mapbox.com">MapBox</a>',
maxZoom: 19,
maxNativeZoom: 20
}).addTo(map);
map.setView([53.4324167,5.9835917],16);

var osmb = new OSMBuildings(map);

osmb.load();
osmb.load();
console.log(osmb.getPane());

*/








function resparql(layer)
{
   
    try{Singleton.getInstance().scope.loader.map=true;}catch(error){}
   
    
   
if (Singleton.getInstance().sparql!=null)
{
  if (layer==null)
  {
      //  console.log("resparql without bounds");
        
        Singleton.getInstance().SelectionQuery.execute(Singleton.getInstance().sparql).then(function(result){
          
            
        });
    
     
	
     return;
  }
  else
  {
      var bounds =layer.getBounds();
      try
      {
	  var points= layer.getLatLngs()[0];
      }
      catch(error){var points= [bounds.getSouthWest(), bounds.getNorthWest(),bounds.getNorthEast(),bounds.getSouthEast()];}

    //  console.log(points);
      var wkt="POLYGON((";
      var komma="";
      for (var pn in points)
  	{
  	  var point = points[pn];
  	  wkt+=komma+ point.lng+" "+point.lat;
  	  komma=",";
  	}
      wkt+="))";    
      
      
      
   //console.log("resparqle with  ",bounds);
  // var ne =bounds.getNorthEast();
  // var se=bounds.getSouthWest();
  // var s=ne.lng+" "+ne.lat+","+se.lng+" "+se.lat;
   //var ss="FILTER(bif:st_intersects(bif:st_geomfromtext(\"BOX("+s+")\"), ?geometry)).";
   //var ss="FILTER(bif:st_may_intersect(bif:st_geomfromtext(\"BOX("+s+")\"), st_get_bounding_box (?geometry))).";
   
   
   
 //  var ss="#bounds \n FILTER(bif:st_may_intersect(bif:st_geomfromtext(\"BOX("+s+")\"), ?geometry)).";
   
   //var ss="FILTER(bif:st_within(?geometry,bif:st_geomfromtext(\"BOX("+s+")\"))).";  // werkt niet goed
   
   var ss="#bounds \n FILTER(bif:st_may_intersect(bif:st_geomfromtext(\""+wkt+"\"), ?geometry)).";
   
  // console.log(ss);
   
   //L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   var sparqlBB=Singleton.getInstance().sparql.replace("#bounds", ss);
 //  console.log(sparqlBB);
   
   Singleton.getInstance().SelectionQuery.execute(sparqlBB).then(function(result){
     //  parsejson(json,sparqlBB);
      // console.log("ready resparql",result);
   },function(error){console.log("error sparql"); 
   //Singleton.getInstance().drawnItems.clearLayers(); 
   map.removeLayer(drawnItems);
   resparql(null);
   
   });
   
  
    
  //  parsejson(json,sparqlBB);
    
    
    }
  
 
 }
 else
 {
 	console.log("Geen sparql query gevonden");
 }
 

}




map.on('draw:drawstart', function (e) {
drawnItems.clearLayers();
//console.log("draw start",e);
   
});


function featureSelected(e,o)
{
	

     unselectAll();
     try
     {
     	var bb = o.getBounds();
     
     	if (bb._southWest.lat==bb._northEast.lat)
         	{
     	          bb=bb._southWest.toBounds(10);
         	}
     	
     	if (bb._southWest==bb._northEast)
     	    {
     	    	bb=bb._southWest.toBounds(10);
     	    }
     
     	
     //	console.log(bb.toBBoxString());
     	
     	
     	var rec=L.rectangle(bb, {color: "#0000FF", weight: 2});
     	rec.addTo(Singleton.getInstance().map);
     	Singleton.getInstance().map.selectedObjects.push(rec);
     	try {openPropertyPanel(e,o);}catch(error){};
     	
     	     	
     }
     catch(error)
     {
    	//console.log(error);
    	// o.oldIcon=o.getIcon();
    	
    	 o.oldColor = o.options.icon.options.color;
    	 var size = 5;
    	 try{size=o.options.icon.options.iconSize[0];}catch(error){}
    	var myIcon= L.icon.pulsed({animate:false, iconSize:[size,size],color:"blue"});
    	 
    	 o.setIcon(myIcon);
    	 if (Singleton.getInstance().map.redDots==null)
    		 {
    	     		Singleton.getInstance().map.redDots=[];
    		 }
    	Singleton.getInstance().map.redDots.push(o);
    	Singleton.getInstance().map.removeLayer(o);
    	Singleton.getInstance().map.addLayer(o);
    //	 console.log("created red dot",o);
    	try {openPropertyPanel(e,o);}catch(error){};
    	 
     }
     
  

}

function unselectAll()
{
    try
    {
	var map =Singleton.getInstance().map;
	if (map.selectedObjects==null){map.selectedObjects=[];return;}

	for (var n in map.selectedObjects)
		{
		  var so = map.selectedObjects[n];
		  map.removeLayer(so);
		}
	
	map.selectedObjects=[];
	 if (Singleton.getInstance().map.redDots!=null)
	 {
	    for (var n in Singleton.getInstance().map.redDots)
	    	{
	    	  var redDot = Singleton.getInstance().map.redDots[n];
	    	  var size = 5;
	     	 try{size=redDot.options.icon.options.iconSize[0];}catch(error){}
	     	 var color=redDot.oldColor ;
	    	  var myIcon= L.icon.pulsed({animate:false, iconSize:[size,size],color:color});
	    	  redDot.setIcon(myIcon);
    		 
	    	}
	 }
	 Singleton.getInstance().map.redDots=[];
    }
    catch(error){}
	
	// process the red dots
}


