
function downloadGeoJSON()
{
 console.log("download geojson");
 w2alert("downloading geojson file"); 
 var csv=JSON.stringify(document.allGeoJson );
 download("geo.geojson",csv);

}


function download(filename,text)
{

  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  window.saveAs(blob,filename) ;
}


function download2(filename, text) {
  //old. may be erased
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function removeControls()
  {
    $(".leaflet-control-fullscreen").show() ;
    map.removeControl(Singleton.getInstance().legend);
    map.removeControl(zoomHome);
    map.removeControl(Singleton.getInstance().drawControl);
    map.removeControl(geoc);
    try {map.removeControl(downloadButton);} catch(e){}
    map.removeControl(document.easyprint);
    map.removeControl(stateChangingButton);
    map.removeControl(polygonMeasureControl);
    map.removeControl(document.layerWidgetControl);
   // map.removeControl(fullscreencontrole); // raar gedragh

   
   
    map.removeControl(map.zoomControl);
    map.removeControl(Singleton.getInstance().legend )

  }

document.saveMapsO ={};

function stop()
{
  document.stopVenR=true;
}

function saveVenR()
{
  removeControls();
  document.stopVenR=false;
  setTimeout(function(){$(".leaflet-control-fullscreen").hide() ;

  saveAsPNG("VenR_RWS_Netwerk_2022.jpg"); //begin situatie
 
  setTimeout(function(){nextVenRMap();},1000); //tijd voor huidige situatie

},5000);




  
 
  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZeeEnDelta"]="VenR_RWS_ZeeEnDelta_2022.jpg";

      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZDNoord"]="VenR_RWS_ZeeEnDelta__Noord_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZDZuid"]="VenR_RWS_ZeeEnDelta_Zuid_2022.jpg";

  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#MiddenNederland"]="VenR_RWS_MiddenNL_2022.jpg";

      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#MNNoord"]="VenR_RWS_MiddenNL_Noord_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#MNZuid"]="VenR_RWS_MiddenNL_Zuid_2022.jpg";


  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#NoordNederland"]="VenR_RWS_NoordNL_2022.jpg";

      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#NNWest"]="VenR_RWS_NoordNL_West_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#NNOost"]="VenR_RWS_NoordNL_Oost_2022.jpg";


  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZuidNederland"]="VenR_RWS_ZuidNL_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZNWest"]="VenR_RWS_ZuidNL_West_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZNMidden"]="VenR_RWS_ZuidNL_Midden_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ZNZuid"]="VenR_RWS_ZuidNL_Zuid_2022.jpg";


  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#WestNederlandZuid"]="VenR_RWS_WestNLZuid_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#WNZNoord"]="VenR_RWS_WestNLZuid_Noord_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#WNZZuid"]="VenR_RWS_WestNLZuid_Zuid_2022.jpg";


  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#OostNederland"]="VenR_RWS_OostNL_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ONOost"]="VenR_RWS_OostNL_Oost_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ONNoord"]="VenR_RWS_OostNL_Noord_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#ONZuid"]="VenR_RWS_OostNL_Zuid_2022.jpg";


  document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#WestNederlandNoord"]="VenR_RWS_WestNLNoord_2022.jpg";
  
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#WNNZuid"]="VenR_RWS_WestNLNoord_Zuid_2022.jpg";
      document.saveMapsO["http://www.rws.nl/2021/rws/organisatie#WNNNoord"]="VenR_RWS_WestNLNoord_Noord_2022.jpg";




}
function nextVenRMap()
{
  if (document.stopVenR==true)
  {
    console.log("aborting");
    return;
  }
  
  setTimeout(function()
  {
   for (let key in document.saveMapsO)
   {
     saveVenRMap(key,document.saveMapsO[key]);
     delete document.saveMapsO[key];
     return;
   }
   console.log("klaar");
  },8000);
}

function saveVenRMap(uri,filename)
{
  if (uri!=null)
  {
    getIface().me.props.publish("selection3",uri);
  }
  
  setTimeout(function() { map.removeControl(Singleton.getInstance().legend ) ;console.log("saving "+filename+"");saveAsPNG(filename);nextVenRMap()},5000);
 
}

  function saveAsPNG(filename)
  {
    
    if (filename==null) filename='my-image-test.jpeg';
    domtoimage.toJpeg(document.getElementById('map'), { quality: 0.8 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
    });


  }