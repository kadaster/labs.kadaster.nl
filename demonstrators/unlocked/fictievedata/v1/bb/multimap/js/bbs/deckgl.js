

function processLegend(sparql,json,layer)
{

   var analyseResultaten={json:json,geometry:false,geometryGeoJSON:false,rgbcolor:false, actief:false,color:false,size:false,popup:false,highlight:false,sizeGetal:false,colorGetal:false,title:'',kenmerknaam:''};
   var legend=json.legend;
 

   try
   {
      analyseResultaten.title=sparql.split("#title:")[1].split(";")[0];
      
   }
   catch(e)   {}

   try
   {
      if (sparql.includes("#random;")){analyseResultaten.random=true;}
   }
   catch(e)   {}

  

   if (legend.items!=null)
   {
      layer.colorToArray=function(value)
      {
         
         let c=legend.items[value];
         if (c!=null)
         {
          //  console.log("discrete color map found ",c);
            return c;
         }
         return [0,255,0,255];
      }
      if (analyseResultaten.title==null){analyseResultaten.title="geen titel";}
      //analyseResultaten.colorOVolgorde=legend.items;
      analyseResultaten.colorO=legend.items;
      analyseResultaten.color=true;
      analyseResultaten.colorGetal=false;
      
      console.log(analyseResultaten);
      return analyseResultaten;
      
   }
   else
   {
      layer.colorToArray=colorToArray;
   }

   return analyseResultaten
}




var choice="1 HR R"

function getChoice(r)
{
   return choice;
}

function renderGeoJson(json,sparql)
{
  console.log("render geojson");
   let geojson=json;
   
   SparqlLayerDB.db={};
   var sl = new SparqlLayer("http://www.buildingbits.nl/first");
   sl.json=json;
   sl.filter = getIface().me.props.pubsub["extraFilter"];
   sl.visible=true;
   sl.sparql=sparql;

   var elements=sparql.split("#title:");
   //   console.log(elements);
      if (elements.length==2)
	  {
      sl.title=elements[1].split(";")[0];
	  }

   const featureMap = new Map()
   json.features.forEach(feature => featureMap.set(feature.properties.uri, feature))

   SparqlLayerDB.featureMap = featureMap;
   SparqlLayerDB.db[sl.uri]=sl;
   SparqlLayerDB.composeGeoJson();


   
  


   Singleton.getInstance().legend.updateTab(sl.uri);



   try
   {
      if (sparql.includes("#noLegend;")){
       console.log(Singleton.getInstance().legend);
      }
   }
   catch(e)   {}


}


function renderGeoJson_oldbutgood(json,sparql)
{
let geojson=json;
                     
    
let gjlayer=new deck.GeoJsonLayer({pickable: true,
stroked: true,
filled: true,
extruded: true,
//  opacity:0.5,
autoHighlight: true,
controller: true,
pointType: 'circle',
lineWidthScale: 2,
lineWidthMinPixels: 2,
getFillColor: d => getFillColor(d),
getLineColor: d => getLineColor(d),
getPointRadius:  2 ,
getElevation: d =>getElevation(d),
data: geojson,
// getLineWidth: d =>{if (d.properties.color==choice){return 10; }else {return 0;} },

updateTriggers22:{
  getLineWidth:getChoice,
  getPointRadius:getChoice 
}
,

onHover: (info,object) => {if (info.object==null) {if (document.tippyUri!=null) {destroyTippy();document.tippyUri=null;} } else 
{
                  
                  let label=info.object.properties.label;
                  if (label==null){destroyTippy();return;}
                         let uri=info.object.properties.uri;
                         if ((label!=null) && (document.tippyUri!=uri) )
                         {
                           destroyTippy();
                            document.tippy=tippy('#map', { content: label,followCursor: true  });
                            document.tippy[0].show();
                            document.tippyUri=uri;
                         
                         }
}

   },
   onClick:(info,object) => {console.log(info,object); if (info.object!=null){ try{ let uri=info.object.properties.uri;    Iface.sendEvent("http://www.bbsgroep.nl/application/v2/hasUriOutput",uri,null); }catch(e){}}},   
getTooltip: ({ object }) => object && { html: object.properties.uri }
});



if (false)
{
let analyseResultaten= processLegend(sparql,json,gjlayer);

try {   Singleton.getInstance().legend.update(analyseResultaten); } catch(e){console.log("legend update error",e);}
}             


  

 if (document.deckLayers==null) document.deckLayers=[];

     

 var deckLayer = new DeckGlLeaflet.LeafletLayer({layers:[gjlayer]});
 deckLayer.gjlayer=gjlayer;
deckLayer.deck=true;
this.deckLayer=deckLayer;

 var layer=Singleton.getInstance().map.addLayer(deckLayer);
 this.layer=layer;
 deckLayer.leafletlayer=layer;
 document.deckLayers.push(deckLayer);
  let bounds =layer.getBounds();
  Singleton.getInstance().map.fitBounds(bounds);
  console.log("einde processing geometry");


  Singleton.getInstance().legend.addTab(new LegendTab("first","title",json.legend));


}


function test()
{

   choice="1 HR L";
   console.log(choice);
   change();
   setTimeout(() => {
      test2();
   }, 3000);
}

function test2()
{

   choice="1 HR R";
  // console.log(choice);
   change();
   setTimeout(() => {
      test();
   }, 3000);
}

function change()
{
   try{
   var dl=document.deckLayers[0];
   if (dl==null) {console.log("no changes");return;}
   //map.removeLayer(dl.leafletlayer );
   //map.removeLayer(dl );
   //document.deckLayers=[];
   
  // var dl = new DeckGlLeaflet.LeafletLayer({layers:dl.props.layers});
   
  // dl.deck=true;
  
   dl.leafletlayer=map.addLayer(dl);
  // map.invalidateSize();
   //document.deckLayers.push(dl);
   }
   catch(e)
   {
      console.log(e);
   }
}





function stringToDeckGLColor(str) 
{
   let hex = stringToColour(str);
     let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return [parseInt(result[1], 16),parseInt(result[2], 16),parseInt(result[3], 16),255]

 }  

function colorToArray(color)
{
  
   if (color==null){return [0,255,0,255]}
   if (this.hash==null) this.hash={};
   
   let color2=stringToDeckGLColor(color);
   //console.log(color,color2);
   this.hash[color]=color2;
   return color2;
 
}