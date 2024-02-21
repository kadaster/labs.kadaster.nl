

const GeoJsonLayer = deck.GeoJsonLayer
const MVTLayer = deck.MVTLayer

 
SparqlLayerDB={};
SparqlLayerDB.db={};

SparqlLayerDB.shouldSelectMultipleOnClick = setupMultipleClickListener()
setupSelectedUrisListener()

SparqlLayerDB.addLayer=function(layer)
{
   
    if (SparqlLayerDB.containsLayer(layer)) {
        SparqlLayerDB.db[layer.uri].setVisible=true;
         return 
        };

    SparqlLayerDB.db[layer.uri]=layer;
   // console.log("add layer set visible");
    layer.setVisible(true);
}

SparqlLayerDB.getFeature=function(uri)
{
  for (var n in  SparqlLayerDB.db)
  {
    var layer=SparqlLayerDB.db[n];
    if (layer.visible==false) continue;
    var fs=layer.json.features;
    for (var fn in fs)
    {
      if ( fs[fn].properties.uri==uri) return fs[fn]
    }
  }
  return null;
}



SparqlLayerDB.removeLayer=function(layer)
{
  if (layer!=null)
  {
    delete SparqlLayerDB.db[layer.uri];
  }
}


SparqlLayerDB.containsLayer=function(layer)
{
   var layer2= SparqlLayerDB.db[layer.uri];
   if (layer2==null) return false;
   if  (( layer2.filter==layer.filter) && (layer2.graph===layer.graph) && (layer2.color===layer.color) && (layer2.label===layer.label) && (layer2.extra===layer.extra))
   {
    return true;
   }

   return false;
}

getFillColor=function(d)
{
 

    if (d.properties.colorRGB) {
      //  console.log(d.properties.colorRGB);
        return d.properties.colorRGB;
    }


   /* if (d.geometry.type=="Point") 
    {
        if (map.getZoom()>15)
        {
            return [200,200,200,255];
        }
    };
*/
    return colorToArray(d.properties.color);////color value
}
getLineColor=function(d)
{
 
  if (selectedObjects.has(d))
  {
    return [0,0,255];
  }
    if (d.properties.colorRGB) {return d.properties.colorRGB;}
    if (d.properties.color)


   /* if (d.geometry.type=="Point") 
    {
        if (map.getZoom()>15)
        {
            return [200,200,200,255];
        }
    };
*/
    return colorToArray(d.properties.color); //color value
}
getPointType2=function(d)
{
  if (false)
  {
    if (d.properties.icon) return "icon";
    return 'circle';
  }
  console.log(d);
  return "circle";
}
getPolygonOffset =function(d)
{
  if (window.top.offset==null) window.top.offset=1000;
  window.top.offset--;
  console.log("get polygon offset",d);
    return null;
  //return {layerindex:d.layerIndex,opacity:d.opacity} ;
}

getIcon=function(d)
{
  if (d.properties.icon) {return d.properties.icon;}
  return "marker2";
}

getFindFirstObjectType=function(ar,wtype)
{
    try
  {
    for (var n in ar)
    {
      var object = ar[n];
      var type =object.object.geometry.type;
      if (type==wtype) {
    
        return object;
      }
    }
  }
  catch(e){}
  return null;
}
getReasonableFirstObject=function(ar)
{
  var o=getFindFirstObjectType(ar,"Point");
  if (o!=null) return o;
  o=getFindFirstObjectType(ar,"LineString");
  if (o!=null) return o;
 try{
   // return ar[0];
 }
 catch(e){}
  
 
   
 
 return null;
}

getElevation=function(d)
{
  //console.log("elevation not working?",d.properties.elevation);
  if (d.properties.elevation==null) return 0.1;
  return d.properties.elevation;
}


const ICON_MAPPING = {
    marker: {x: 0, y: 0, width: 128, height: 128, mask: true},
    marker2: {x: 128, y: 0, width: 128, height: 128, mask: true}
  };


let selectedObjects= new Set();
let selectedObjectsMap = new Map();

function renderLegend() {
  try{
  var legend = Singleton.getInstance().legend;

  legend.removeAllTabs();
  for (let uri in SparqlLayerDB.db) {
    var layer = SparqlLayerDB.db[uri];
    let features = layer?.json?.features;
    if (layer.visible && features!=null)
      legend.addTab(new LegendTab(layer.uri,layer.title,layer.json.legend));
  }
  legend.showTabs();

  runLegendAfterFuncties(); //for slider init
} catch(e){console.log("catched ",e);}
}

function createGeoJsonData() {
  const geoJsonData = {
    type: "FeatureCollection", crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [],
  };

  for (let uri in SparqlLayerDB.db) {
    var layer = SparqlLayerDB.db[uri];
    if (layer.visible && layer?.json?.features!=null)
      for (const feature of layer.json.features) geoJsonData.features.push(feature)
      //geoJsonData.features.push(...layer.json.features) #spread gives problems on chrome with large arrays
  }

  return geoJsonData
}


SparqlLayerDB.composeGeoJson = function composeGeoJson(updateLegend = true, shouldFitBounds = true) {
  if (SparqlLayerDB.pointRadius==null) SparqlLayerDB.pointRadius=2;
  var props = getIface().me.props ?? {};

  try {
    if (updateLegend) renderLegend()

    var allGeoJson = createGeoJsonData()
    document.allGeoJson=allGeoJson;

    const selectionColor = [255, 0, 0, 100]

    const geoJsonLayerProps = {
      pickable: true, stroked: true, filled: true, extruded: true, autoHighlight: true, pointType: "icon",
      lineWidthScale: props.lineWidthScale | 1,
      lineWidthMinPixels: props.lineWidthMinPixels | 1,
      iconSizeMinPixels:6,
      iconSizeMaxPixels:50,
      iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
      iconMapping: ICON_MAPPING,
      iconSizeScale:0.01,
      getColor: d => getFillColor(d),
      getElevation: d => getElevation(d),
      getFillColor: (feature) => selectedObjectsMap.has(feature.properties.uri) ? selectionColor : getFillColor(feature),
      getIcon: d => getIcon(d),
      getIconColor: (feature) => selectedObjectsMap.has(feature.properties.uri) ? selectionColor : getFillColor(feature),
      getLineColor: (feature) => selectedObjectsMap.has(feature.properties.uri) ? selectionColor : getLineColor(feature),
      getPointRadius:  SparqlLayerDB.pointRadius ,
      getTooltip: ({ object }) => object && { html: object.properties.uri },

      onDrag:(arg)=>{document.getElementById('deckgl-overlay').style.cursor="grabbing"},

      onHover: (info, object) => {
        var s = document.getElementById('deckgl-overlay').style;
        if (info.object==null && document.tippyUri!=null) {
          destroyTippy();
          document.tippyUri=null;
          s.cursor='pointer'
        }
        if (info.object==null) return

        var deck=this.deckLayer._deck;
        ar = deck.pickMultipleObjects({ x: info.x ,y: info.y });
        if (ar.length>1) {
          var object = getReasonableFirstObject(ar);
          if (object!=null) { info.object=object.object; }
        }

        let { label, uri } = info.object.properties;
        if (label==null) return destroyTippy();

        if (label!=null && document.tippyUri!=uri) {
            destroyTippy();
            document.tippy = tippy('#map', { content: label,followCursor: true });
            document.tippy[0].show();
            document.tippyUri=uri;
            s.cursor='grab'
        }
      },

      onClick: (info, object) => {
        try {
          var deck=this.deckLayer._deck;
          ar = deck.pickMultipleObjects({ x: info.x, y: info.y });
          if (ar.length>1) {
            destroyTippy();
            return popupMultiSelect(info,ar);
          }
        } catch(ex) {
          console.log(ex);
        }

        if (info.object!=null) {
          try {
            let uri=info.object.properties.uri;
            destroyTippy();
            selectedUriFromClick(uri);
          } catch(e) {}
        }
      },
    }
    if (false)
    {
      var mvtLayer = new MVTLayer( { id: 'MVTLayer',
      data: [
        'https://tiles-a.basemaps.cartocdn.com/vegctortiles/carto.streets/v1/{z}/{x}/{y}.mvt'
      ]});
    }
   
    let gjlayer = new GeoJsonLayer({ data: allGeoJson, ...geoJsonLayerProps });
     //gjlayer=mvtLayer;
    var newDeckLayer = new DeckGlLeaflet.LeafletLayer({ layers: [gjlayer] });
    getIface().setLoading(true);
    var layer=Singleton.getInstance().map.addLayer(newDeckLayer);

    const oldDeckLayer = SparqlLayerDB.deckLayer
    if (oldDeckLayer!=null) Singleton.getInstance().map.removeLayer(oldDeckLayer);

    newDeckLayer._deck.props.pickingRadius=5;
    newDeckLayer.gjlayer=gjlayer;
    newDeckLayer.deck=true;
    newDeckLayer.leafletlayer=layer;
    this.deckLayer=newDeckLayer;
    this.gjlayer=gjlayer;
    this.layer=layer;
    SparqlLayerDB.deckLayer=newDeckLayer;

    if (getIface().me.props.fitbounds==true && shouldFitBounds) adjustMapBoundsTo(allGeoJson);

    return allGeoJson;
  } catch(e) {
    console.log(e);
  }
  return null;
}

function adjustMapBoundsTo(geoJson) {
  try
  {
  var geoJsonLayer = L.geoJson(geoJson);
  const bounds = geoJsonLayer.getBounds();
  Singleton.getInstance().map.fitBounds(bounds);
  }
  catch(e)
  {
    
  }
}

SparqlLayerDB.addSelectedObject = function addSelectedObject(selectedObject) {
  selectedObjects.add(selectedObject)
  SparqlLayerDB.setSelectedObjects(selectedObjects)
}

SparqlLayerDB.setSelectedObjects = function setSelectedObjects(theSelectedObjects = new Set()) {
  selectedObjects = theSelectedObjects

  const uris = Array.from(selectedObjects, o => o.properties.uri)
 
  Singleton.getInstance().iface.me.setSelectedUris(uris)

  selectedObjectsMap.clear()
  selectedObjects.forEach(o => selectedObjectsMap.set(o.properties.uri, o))

  if (Singleton.getInstance().iface.me.props.redrawMapOnSelectionChange) {
    SparqlLayerDB.composeGeoJson(true, false)
  }
}

SparqlLayerDB.containsUri=function(uri)
{
   var layer2= SparqlLayerDB.db[uri];
   if (layer2!=null) return true;
   
   return false;
}

SparqlLayerDB.onlyTheseLayers=function(uris)
{
    let noComposeNecessary =false;
    for (var layerUri in SparqlLayerDB.db)
    {
        var layer = SparqlLayerDB.db[layerUri];
        var visible =false;
        for (var uri in uris)
        {
           if (uri==layerUri) visible=true;
        }
      //  console.log("set visible ",visible);
        let b=layer.setVisible(visible);
        if (b==false) {noComposeNecessary=true;}
    }

    return !noComposeNecessary; //compose necessary

  
}
SparqlLayerDB.reset=function()
{

}


var SparqlLayer = function(uri)
{
    this.uri=uri;
    // filled via bindings
    this.altColor={};
    this.altLabel={};
// filled via bindins and user-interaction
    this.prefLabel=null;
    this.prefColor=null;
    this.prefColorLabel=null;

    // layer admin
    this.visible=false;
    this.graph=null;
    this.extra="";

   
    this.title="no title";
    this.layer=null;
    this.itemVisibility ={};
    this.itemColor={};
    this.json=null; // is nodig

}


SparqlLayer.prototype.userReset=function()
{
    this.itemVisibility ={};
    this.itemColor={}; 
    delete this.userMin;
    delete this.userMax;
    delete this.min;
    delete this.max;

    
}
SparqlLayer.prototype.isFilterChanged=function()
{

  var filter2=getIface().me.props.pubsub["extraFilter"]; 
  if (filter2!=this.filter)return true;
  return false;
}
SparqlLayer.prototype.setVisible=function(visible,updateExistingLegendTab)
{
    //console.log("  SetVisible called ",visible,this.isFilterChanged(),this.json);
  
    this.visible=visible;
    if (this.isFilterChanged()) this.json=null;

    if (this.json==null)
    {
        var sparql=this.getSparql();
        var me=this;
        getIface().setLoading(true);
     //   console.log("sparqling ")
        getIface().me.executeSparql(sparql,function(arg){
            
            me.processGeometry(arg,sparql,updateExistingLegendTab);});

            return false;
    
    }
    return true;
  
}

SparqlLayer.prototype.changeItemVisibility=function(waarde,visible)
{
   if (this.itemVisibility==null) this.itemVisibility={};

  if (visible==false) this.itemVisibility[waarde]=visible;
  if (visible==true) delete this.itemVisibility[waarde];

  this.updateVisualisation();
}


SparqlLayer.prototype.updateVisualisation=function()
{
 // console.log("update visualisation ");
  getIface().setLoading(true);
  if (this.jsonOrg==null)this.jsonOrg=this.json;
  if (this.itemVisibility==null) this.itemVisibility={};

  this.json = {...this.jsonOrg};
  this.json.features=[];
  //console.log(this.json,this.jsonOrg,this.itemVisibility);
  for (let n in this.jsonOrg.features)
  {
    let f=this.jsonOrg.features[n];
    let twaarde =f.properties.color;
   // console.log(twaarde);
    if ((this.itemVisibility[twaarde]!=null)  )
    {
            // not visible so not copying to features
          //  console.log("not visible feature");
    }
    else
    {
        this.json.features.push(f);
    }
  }
  //console.log(this.json);
  SparqlLayerDB.composeGeoJson(false);
 // getIface().setLoading(false);

}


SparqlLayer.prototype.changeItemColor=function(waarde,color)
{
    this.itemColor[waarde]=color;
  
    if (this.jsonOrg==null)this.jsonOrg=this.json;
    let t=null;
    for (let n in this.jsonOrg.features)
    {
      let f=this.jsonOrg.features[n];
      let twaarde =f.properties.color;
      if (twaarde==waarde)
      {
        f.properties.colorRGB=color;
      }
       

    }
   
    this.updateVisualisation();

}


SparqlLayer.prototype.changeMinMaxVisibility=function(min,max)
{
    //console.log( "change min max ",min,max,this.json,this.jsonOrg);
  getIface().setLoading(true);
  if (this.jsonOrg==null)this.jsonOrg=this.json;
  this.json = {...this.jsonOrg};
  this.json.features=[];

  this.userMin=min;
  this.userMax=max;
  for (let n in this.jsonOrg.features)
  {
    let f=this.jsonOrg.features[n];
    let twaarde =f.properties.color;
    if ((twaarde>=min) && (twaarde<=max))
    {
        this.json.features.push(f);
    }
  }

  SparqlLayerDB.composeGeoJson(false);


  //getIface().setLoading(false);


}



SparqlLayer.prototype.processGeometry=function(json,sparql,updateExistingLegendTab)
{
   console.log("process geometry using sparql def results ")
    getIface().setLoading(true);
    try
    {
      this.json=json;
      //console.log("got json ",this.json);
      if (this.json!=null)
      {
        if (this.json.type==null)
        {
            console.log("parsing json.. .probably wrong json?",this.json.legend,this.json);
            if (this.json==="")
            {
              window.alert("no geometry found");
              SparqlLayerDB.removeLayer(this);
              SparqlLayerDB.composeGeoJson();
              //getIface().setLoading(false);
              return;

            }
            console.log("pre parse");
            this.json=JSON.parse(this.json);
            console.log("end parse");
        }
      }
      this.sparql=sparql;
      SparqlLayerDB.composeGeoJson();

      if (updateExistingLegendTab)
      {
     //   console.log("updating legend tab");
        Singleton.getInstance().legend.updateTab(this.uri);
      }
    }
    catch(e)
    {
      console.log(e);
      window.alert("error processing geometry");
      getIface().setLoading(false);
    }
    //  getIface().setLoading(false);
}



SparqlLayer.prototype.addBinding=function(binding)
{
  //  console.log(binding);
    try

    {
      
        try {this.graph=binding.graph.value;}catch(e){}
      
        try { var altColor=binding.colorPred.value;
            this.altColor[altColor]=binding.colorPredLabel.value;
              if (binding.selectedColorPred!=null)  
              {
                        if (binding.selectedColorPred.value=="true")
                        {
                           if (this.prefColor==null)
                           {
                            this.prefColor=altColor;
                            this.prefColorLabel=this.altColor[altColor];
                           }

                        }
        }

        }catch(e){}
        try {
            var altLabel=binding.labelPred.value;
            this.altLabel[altLabel]=binding.labelPredLabel.value;

            if (binding.selectedLabelPred!=null)
            {
 
            if (binding.selectedLabelPred.value=="true")
            {
                if (this.prefLabel==null)    this.prefLabel=altLabel;
            
            }
        }

        }catch(e){}
       
        try {this.extra=binding.extra.value; }catch(e){}
        try {this.title=binding.label.value; }catch(e){}

        try {this.fixedSparql=binding.fixedSparql.value; }catch(e){}
    }

    catch(e)
    {
        console.log(e);
    }

      
}

SparqlLayer.prototype.getSparql=function()
{
  this.legendHasOptions=true;
  if (this.fixedSparql!=null) return this.getFixedSparqlDatasetDefinition();

  return this.getSparqlNormalDatasetDefinition();
}
SparqlLayer.prototype.getYearlyDatasetDefinition=function()
{
  console.log("not yet implemented ");
  return this.getSparqlNormalDatasetDefinition();
}

SparqlLayer.prototype.getFixedSparqlDatasetDefinition=function()
{
  this.legendHasOptions=false;
  var s= this.fixedSparql;
  s+="\r\n#geojson;\r\n \r\n";



  return s;
}


SparqlLayer.prototype.getSparqlNormalDatasetDefinition=function()
{

  let s="select distinct ?uri ?geometry ?color ?label \n where { "
    s+="graph <"+this.graph+">{ \n";
    try {this.filter =getIface().me.props.pubsub["extraFilter"]; } catch(e){}
    if (this.filter!=null)
    {
      s+=this.filter+"\n";
    }
    s+=" ?uri <http://www.opengis.net/ont/geosparql#asGeoJSON> ?geometry . \n ";
    if (this.prefColor!=null)    {         s+=" ?uri <"+this.prefColor+"> ?color. \n";     } //else { s+=" bind (\"Onbekend\" as ?color).";}
    if (this.prefLabel!=null)    {         s+=" ?uri <"+this.prefLabel+"> ?label.\n";     }

 

s+="\r\n#geojson;\r\n}} \r\n";
if (this.extra!=null) s+=this.extra;


//s+="\r\n limit 100";

return s;


}


processMultiMap=function(results,sparql)
{
    var newLayers={};
    var allLayerUris={};
  
    if ((results==null) || (results.results==null) )
    {
        if (SparqlLayerDB.onlyTheseLayers(allLayerUris));
        {
       
            SparqlLayerDB.composeGeoJson();
        }
        return;
    }

    try
    {
    let bindings = results.results.bindings;
        for (let n in bindings)
        {
            let binding = bindings[n];
            let uri=binding.uri.value;
            allLayerUris[uri]=uri;
         //   console.log("found binding ",binding);
         
            if (SparqlLayerDB.containsUri(uri)==false)
            {
                     var layer = newLayers[uri];
                     if (layer==null)
                     {
                                 layer = new SparqlLayer(uri);
                                 newLayers[uri]=layer;
                     }
                     //console.log("adding binding ",layer);
                     layer.addBinding(binding);
            }
           

        }
       
        var composeNecessary= SparqlLayerDB.onlyTheseLayers(allLayerUris);
         var hasNewLayers=false;
            for (var n in newLayers)
            {
                var layer = newLayers[n];
            //    console.log("adding new layer "+layer.graph);
                SparqlLayerDB.addLayer(layer);
                hasNewLayers=true;

            }
       
       if (!hasNewLayers)
       {
        console.log("no new layers so composing ");
        SparqlLayerDB.composeGeoJson();
       }

    }
    catch(e){console.log(e);}
}



function setupMultipleClickListener() {
  const backTickKey = '`'
  const userInputChannel = new BroadcastChannel('user-input-channel')

  let currentKeyPresses = new Set()
  userInputChannel.addEventListener('message', (event) => { currentKeyPresses = event.data })

  const shouldSelectMultipleOnClick = () => currentKeyPresses.has(backTickKey)
  return shouldSelectMultipleOnClick
}

function setupSelectedUrisListener() {
  window.addEventListener('message', event => {
    if (event.data.type !== 'update-selected-uris') return
    
    const selectedFeatures = event.data.selectedUris.map(uri => SparqlLayerDB.featureMap.get(uri))
    SparqlLayerDB.setSelectedObjects(new Set(selectedFeatures))
  })
}
