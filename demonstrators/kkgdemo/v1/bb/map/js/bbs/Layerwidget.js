



var Layerwidget=function(map,overlays){
    
    if ( Layerwidget.control!=null)
	{
	  
	   map.removeControl(Layerwidget.control)
	   //Layerwidget.control.remove();
	   Layerwidget.control=null;
	
	}
 // baselayers
 var baseTile=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {id: 'mapbox.light',
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', maxNativeZoom:18,maxZoom: 22,

 });
 
 


 var baseTileMini=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {id: 'mapbox.light',
     attribution: ''
 });


 var baseTileGrey= L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {maxNativeZoom:18,
 	maxZoom: 22,
 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 });


//https://www.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/1/0/1.pbf


 //var esriStreets=L.esri.basemapLayer('Streets');

 //var esri=L.esri.basemapLayer('Topographic',{maxNativeZoom:18,maxZoom: 22});

 // http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${x}
 
 var Esri_grey = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {maxNativeZoom:16,maxZoom: 26,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
 });
 

 var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxNativeZoom:18,maxZoom: 22,
 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
 });


 var gldmap = L.tileLayer('http://services.arcgisonline.nl/arcgis/rest/services/Basiskaarten/Topo_0tm14/MapServer/tile/{z}/{y}/{x}', {maxNativeZoom:18,maxZoom: 22,
 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
 });


 
if (overlays==null){ overlays = {};}

 
 /*
 
 overlays.kilometrering=Layerwidget.getWMSLayer("kilometrering",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays.wegas=Layerwidget.getWMSLayer("Wegas",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Grenzen- Eigendomsgebied"]=Layerwidget.getWMSLayer("Grenzen- Eigendomsgebied",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Grenzen- Beheergebied"]=Layerwidget.getWMSLayer("Grenzen- Beheergebied",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Vlakken onder maaiveld"]=Layerwidget.getWMSLayer("Vlakken onder maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Lijnen onder maaiveld"]=Layerwidget.getWMSLayer("Lijnen onder maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Vlakken op maaiveld"]=Layerwidget.getWMSLayer("Vlakken op maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Lijnen op maaiveld"]=Layerwidget.getWMSLayer("Lijnen op maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Vlakken boven maaiveld"]=Layerwidget.getWMSLayer("Vlakken boven maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Punten onder maaiveld"]=Layerwidget.getWMSLayer("Punten onder maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Kabels en leidingen WION vlakken"]=Layerwidget.getWMSLayer("Kabels en leidingen WION vlakken",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Punten op maaiveld"]=Layerwidget.getWMSLayer("Punten op maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Kabels en leidingen WION lijnen"]=Layerwidget.getWMSLayer("Kabels en leidingen WION lijnen",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 overlays["Punten boven maaiveld"]=Layerwidget.getWMSLayer("Punten boven maaiveld",'http://ags101.prvgld.nl/arcgis/services/IMGEO/imgeo_wms/MapServer/WmsServer');
 */
  

var selectedBasemap="default";
if (usePDOK)
    {
    	//var pdokpastel = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartpastel/EPSG:3857/{z}/{x}/{y}.png', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Kaartgegevens Kadaster' });
    	//var pdokstandaard = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Kaartgegevens Kadaster' });
        
 	var pdokgrijs = L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?service=WMTS&layer=grijs&style=default&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A3857%3A{z}&TileCol={x}&TileRow={y}', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Kaartgegevens Kadaster' });

    var grijs  =  L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?service=WMTS&layer=grijs&style=default&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A3857%3A4&TileCol=11&TileRow=7', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Kaartgegevens Kadaster' });


        var pdokstandaard = L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?service=WMTS&layer=standaard&style=default&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A3857%3A{z}&TileCol={x}&TileRow={y}', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Kaartgegevens Kadaster' });
     
         var pdokpastel = L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?service=WMTS&layer=pastel&style=default&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A3857%3A{z}&TileCol={x}&TileRow={y}', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Kaartgegevens Kadaster' });
    
     
 	//var pdokluchtfoto = L.tileLayer('https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wmts/2016_ortho25/EPSG:3857/{z}/{x}/{y}.jpeg', {maxNativeZoom:19,maxZoom: 22, "type": "wmts","format": "jpeg",attribution: 'Kaartgegevens Kadaster' });
	
    //var pdokluchtfoto = L.tileLayer('https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wmts/Actueel_ortho25/EPSG:3857/{z}/{x}/{y}.jpeg', {maxNativeZoom:19,maxZoom: 22, "type": "wmts","format": "jpeg",attribution: 'Kaartgegevens Kadaster' });
    
    
    var pdokluchtfoto = L.tileLayer('https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0?layer=Actueel_orthoHR&style=default&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A3857%3A{z}&TileCol={x}&TileRow={y}', {maxNativeZoom:21,maxZoom: 24, "type": "wmts","format": "jpeg",attribution: 'PDOK' });

    function bgt(layer) {
       return L.tileLayer.wmts('https://service.pdok.nl/lv/bgt/wmts/v1_0', {
         layer: layer,
         tileMatrixSet: "EPSG:3857",
         format: "image/png",
         attribution: 'PDOK',
         minNativeZoom: 17,
         maxNativeZoom: 18,
         minZoom: 15,
         maxZoom: 24
       })
     }

     
 
 //"https://bgtviewer.nl/geoserver/bgt_v2/wms?=&service=WMS&request=GetMap&layers=bgt_v2:bgt_vlakgericht_v2&styles=&format=image/png&transparent=true&version=1.3.0&width=512&height=512&crs=EPSG:3857&bbox=571137.4753468371,6816959.930585159,571748.9715731185,6817571.426811442"
 
     // var brtgrey = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartgrijs/EPSG:3857/{z}/{x}/{y}.png', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Geodata' });
       var brt = L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/standaard/EPSG:3857/{z}/{x}/{y}.png', {maxNativeZoom:20,maxZoom: 24, "type": "wmts","format": "png",attribution: 'Geodata' });
 
      
      
      
      var ahndts = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/ahn3_05m_dsm/EPSG:28992/{z}/{x}/{y}.png', {maxNativeZoom:19,maxZoom: 24, "type": "wmts","format": "png",attribution: 'AHN3' });
    //   https://geodata.nationaalgeoregister.nl/tiles/service/wmts?layer=ahn3_5m_dsm&style=default&tilematrixset=EPSG%3A28992&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A28992%3A4&TileCol=9&TileRow=10
    
    
     var luchtfotoLayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wmts/Actueel_ortho25/EPSG:3857/{z}/{x}/{y}.jpeg', {
                attribution: '<a href="https://creativecommons.org/licenses/by/4.0/deed.nl">CC BY 4.0</a> Kadaster',
                maxNativeZoom:19,maxZoom: 24,
                minZoom: 8,
                tileSize: 256,
                zoomOffset: 0
            });

            //
            // Voorgrond lagen
            //
            var plu = L.tileLayer.wms("https://service.pdok.nl/kadaster/plu/wms/v1_0", {
                    layers: 'Enkelbestemming',
                    format: 'image/png',
                    transparent: true,
                    minZoom: 14,
                    maxZoom: 24,
                    attribution: '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed.nl">CC0 1.0</a> PDOK'
                }
            );

              var kavel = L.tileLayer.wms("https://service.pdok.nl/kadaster/kadastralekaart/wms/v5_0?", {
                layers: 'Perceel',
                format: 'image/png',
                transparent: true,
                minZoom: 17,
                maxZoom: 24,
                attribution: '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed.nl">CC0 1.0</a> PDOK'
            });
            
        
            
            
            var hbordenA = L.esri.dynamicMapLayer({ url: 'https://geo.rijkswaterstaat.nl/arcgis/rest/services/GDR/nwb_metrering/MapServer',layers: [0],extendedBase:true,pane2:"tilePane",pane:"overlayPane","z-index":200});
 
            var hbordenN = L.esri.dynamicMapLayer({ url: 'https://geo.rijkswaterstaat.nl/arcgis/rest/services/GDR/nwb_metrering/MapServer',layers: [1],extendedBase:true,pane2:"tilePane",pane:"overlayPane","z-index":200});
            var hbordenV = L.esri.dynamicMapLayer({ url: 'https://geo.rijkswaterstaat.nl/arcgis/rest/services/GDR/nwb_metrering/MapServer',layers: [4],extendedBase:true,pane2:"tilePane",pane:"overlayPane","z-index":200});
                       
            
            
            //   var = https://geoservices.rijkswaterstaat.nl/arcgis2/rest/services/METRERING/nwb_metrering/MapServer/export?dpi=96&transparent=true&format=png8&layers=show%3A0%2C1%2C2%2C3&bbox=141743.12819992765%2C454034.0382963927%2C149032.94277955682%2C457920.2460688083&bboxSR=28992&imageSR=28992&size=1148%2C612&f=image
    

    
    //var baseMaps={"luchtfoto":luchtfotoLayer};
    var baseMaps = {"grijs":grijs,"PDOK grijs":pdokgrijs,"BRT standaard (PDOK)":pdokstandaard,"pastel (PDOK)":pdokpastel, "luchtfoto (PDOK)": pdokluchtfoto, "Esri Grey":Esri_grey,"BRT":brt
  //  "BGT":bgt,
   // "AHN3":ahndts
  // "pdokachtergrondkaart":pdokachtergrondkaart 
	 
	};

    overlays["ruimtelijke plannen"]=plu;
    overlays["hectoborden Rijkswegen"]=hbordenA;
    overlays["hectoborden N-wegen"]=hbordenN;
    overlays["hectoborden vaarwegen"]=hbordenV;
    overlays["BGT achtergrondvisualisatie"] = bgt('achtergrondvisualisatie');
    overlays["BGT icoonvisualisatie"] = bgt('icoonvisualisatie');
    overlays["BGT omtrekgerichtevisualisatie"] = bgt('omtrekgerichtevisualisatie');
    overlays["BGT pastelvisualisatie"] = bgt('pastelvisualisatie');
    overlays["BGT planvisualisatie"] = bgt('planvisualisatie');
    overlays["BGT standaardvisualisatie"] = bgt('standaardvisualisatie');
    overlays["kavel"]=kavel;
    
    
   // selectedBasemap="BRT standaard (PDOK)";
   // selectedBasemap="grijs";

    selectedBasemap="Esri Grey";

   // console.log("startWithGreyBase",getIface().me.props.startWithGreyBase)

    //var pgreyb=getIface().me.props.startWithGreyBase;  //this necessary. really. weird
    try {
        if (getIface().me.props.startWithGreyBase) 
            {
                selectedBasemap="grijs";
            }
    } catch(e) {}
    try {
        if (getIface().me.props.startWithBase) 
            {
                selectedBasemap=getIface().me.props.startWithBase;
               
            }
    } catch(e) {
        console.log(e);
    }


    }
else
    {

 var baseMaps = { "default":esri, "black&white":baseTileGrey,"brt grijs": pdokstandaard,
	    "kleurenkaart":baseTile,"Esri_world":Esri_WorldImagery
	  
	};
    }
    
    
 

 
 var  config = {
	       // position: 'top-left',
	        overlays: overlays,
	        baseLayers:baseMaps,
	        selectedBasemap: selectedBasemap,
	        selectedOverlays: [],
	        mapServers: [],
	     
	    };


 Layerwidget.control = L.control.autolayers(config);
 Layerwidget.control.setPosition("bottomleft");
 
 if (L.version!="1.7.1")
 {
 
   var first=true;
    map.eachLayer(function (layer) {
        if (first){
            first=false;
            map.removeLayer(layer);
            }else{
        //map.removeLayer(layer);
        }
        });
 
}
 
 
 document.layerWidgetControl=Layerwidget.control.addTo(map);
 
 /*
 map.on("layeradd",function(data){
      
      let layer=data.layer;
      console.log(data);
    if(layer.tileIndex==null)
    {
        console.log("non vector tile added. is it a base layer with z-index=0");
        if (layer.options.zIndex==0)
        {
            console.log("z index =0");
        }
        else
        {
            console.log("z index != 0");
        }
        
    }
    
    })
    
    */
 
 

 
 
  //if (L.TileLayer==null)
 // {
     //   var miniMap = new L.Control.MiniMap(selectedBasemap,{zoomLevelOffset:-6}).addTo(map); // geeft mouse errors bij v0.7
   //     }
 
 
 //old
 //L.control.layers(baseMaps, overlayMaps).addTo(map);
  
    
}

Layerwidget.getWMSLayer=function(name,url)
{
    var gldmap3 = L.tileLayer.wms(url, {
    layers: name,
    format: 'image/png',
    version:'1.3.0',
    transparent: true,
    request:'GetMap',
    srs:'EPSG:4326',
    });
    
    return gldmap3;
}

Layerwidget.changeBaselayer=function(layername)
{
    console.log("change baselayer ",layername);
    if (layername==null) {layername="Esri Grey";} // slaat nergens op maar goed handig voor testen
    var eg =Layerwidget.control._getLayerByName(layername);
    if (eg==null) {console.log("kan base layer niet vinden ",layername); return; }
    eg=eg.layer;
    var oud =Layerwidget.control.selectedBasemap;
    if (oud!=null)
    {
        var oudl = Layerwidget.control._getLayerByName(oud);
        if (oudl!=null)
        {
             oudl=oudl.layer;
             var url  = oudl._url;
           
             for (var n in map._layers)
             {
                 if (map._layers[n]._url==url)
                 {
                    map.removeLayer(map._layers[n]);   
                    break;
                  }  
              }
           
        }
    }
    map.addLayer(eg);
   
}



