
function popupMultiSelect(e,alles)
{
   try
   {

     
        var name_uri={};
        var name_index={};
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
          var uri = o.object.properties.uri;
          var index = o.index;
           var color="";
           try {color=o.object.properties.color}catch(e){}
          var name = "object "+(parseInt(n)+1)+" "+color;
          map.contextmenu.addItem({text:name,data:name});
          name_uri[name]=uri; 
          name_index[name]=index; 
           map.contextmenu._items[i].el.onmouseenter=function(e){ var name =e.target.innerText;if (name_uri[name]!=null){highlightUri(name_uri[name],name_index[name]);}};
           map.contextmenu._items[i].el.onmouseleave=function(e){var name =e.target.innerText; if (name_uri[name]!=null){highlightUri(null); }};
           
          map.contextmenu._items[i].el.onmouseup=function(e,f,g){var name =e.target.innerText; if (name_uri[name]!=null){selectedUriFromClick(name_uri[name]);}};
   
        }
      
       setTimeout(function(){  map.contextmenu.showAt(e);},100);
      
        }
        catch(error)
        {
            console.log(error);
        }
    
}

function highlightUri(uri)
{
   // removeAllSelections();
    var layers=SparqlLayerDB.getFeature(uri);
     if (layers!=null)
	{
	 //Singleton.getInstance().selectedUri=uri;
	    createRectangle(layers,true);
	}
}

function selectedUriFromClick(uri,f,tile,selection,x,y,pad,ctx,events,mouseEvents) {
  var layers=SparqlLayerDB.getFeature(uri);
  if (layers==null) return

  if (SparqlLayerDB.shouldSelectMultipleOnClick())
    SparqlLayerDB.addSelectedObject(layers)
  else {
    removeAllSelections();
   
    SparqlLayerDB.setSelectedObjects(new Set([layers]))
  }

  if (getIface().me.props.selectboundingbox==true) createRectangle(layers);
}


function highlight(f,cancelable)
{
    console.log("highlight",f);

}
function removeAllSelections()
{
    if ( this.selectionLayer!=null)
    {
        map.removeLayer(this.selectionLayer);
    }
    if ( this.selectionLayerHighlight!=null)
    {
        map.removeLayer(this.selectionLayerHighlight);
    }

    
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

var selectionLayer=null;//bestaat alvast
var selectionLayerHighlight=null;
var selectionLayerGeometry=null;


function createSelectLayer(layers,object)
{
    if (layers==null){return ;}
    if (selectionLayerGeometry!=null)   {    map.removeLayer(selectionLayerGeometry);}
    createSelectLayerLeaflet(layers);

}

function createSelectLayerLeaflet(layers)
{
    if (SparqlLayerDB.pointRadius==null) SparqlLayerDB.pointRadius=2;
    var props =getIface().me.props;
    if (props==null){props={};}
    var lineWidthScale = props.lineWidthScale|1;
    var lineWidthMinPixels=props.lineWidthMinPixels|1;

    var zoom=map.getZoom();
    var value=lineWidthScale*zoom*lineWidthMinPixels/100;
    
    var feature=L.geoJSON(layers,{ weight: value });
   
    selectionLayerGeometry =feature.addTo(map);
}

function createSelectLayerDeck(layers)
{
   if (SparqlLayerDB.pointRadius==null) SparqlLayerDB.pointRadius=2;
    var props =getIface().me.props;
    if (props==null){props={};}
    var lineWidthScale = props.lineWidthScale|1;
    var lineWidthMinPixels=props.lineWidthMinPixels|1;
    var geojson={type:"FeatureCollection",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[layers]};
    let gjlayer=new deck.GeoJsonLayer({pickable: true,
        stroked: true,
        filled: true,
        extruded: true,
        getElevation: d => getElevation(d),
        autoHighlight: false,
        pointType: 'circle',
        lineWidthScale: lineWidthScale,
        lineWidthMinPixels: lineWidthMinPixels,
        getFillColor: [100,0,100],
        getLineColor: [0,0,0],
        getPointRadius:  SparqlLayerDB.pointRadius ,
        data: geojson,
    });
    var selectionLayerGeometry = new DeckGlLeaflet.LeafletLayer({layers:[gjlayer]});
   
    map.addLayer(selectionLayerGeometry);


}

function buffer(geojson, distance)
{
    var reader, input, buffer, bufferGeoJSON;
    
    reader = new jsts.io.GeoJSONReader();
   
    input = reader.read(geojson);
    buffer = input.geometry.buffer(distance);
  
    bufferGeoJSON = new jsts.io.GeoJSONWriter().write(buffer);
    
    return L.geoJson(bufferGeoJSON);
  }


function createRectangle(layers2,highlight)
{
    if (layers2==null){return ;}
   var layers =L.geoJSON(layers2).addTo(map);

	var bb =layers.getBounds();

    
	     

  	if (bb!=null)
  	    {
  	      var pol = L.polyline([ bb.getNorthEast(), bb.getNorthWest(), bb.getSouthWest(),bb.getSouthEast(),bb.getNorthEast()]);

          // if point
  	    if((bb.getNorthEast().lat==bb.getNorthWest().lat) && (bb.getNorthEast().lng==bb.getNorthWest().lng) && (bb.getSouthWest().lat==bb.getSouthEast().lat) )
  		{
            var w=0.00004;
            if (map.getZoom()>20)
            {  
                 var w=0.00002;
            }
         

           w=w*SparqlLayerDB.pointRadius;
        //  w=0;
  		
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
  		     pol = L.polyline([ne,nw, sw,se,ne]);
        }
        else
        {
            var props= getIface().me.props;
            var lineWidthScale = props.lineWidthScale|1;
            var lineWidthMinPixels=props.lineWidthMinPixels|1;
                     // bb=buffer(layers2,10*lineWidthScale).getBounds();
            //console.log(bb);
            
            //bb=bb.pad(lineWidthScale*lineWidthMinPixels/100);

        }
            //pol = L.polygon([se,sw, nw,ne]);
       // var  lp=  addTempGeojson(pol.toGeoJSON());
        
           var lp= pol.addTo(map,true);
          
            if (highlight==true)
            {
                if ( this.selectionLayerHighlight!=null)
                {
                    map.removeLayer(this.selectionLayerHighlight);
                }
                this.selectionLayerHighlight=pol;

            }
            else
            {
                if ( this.selectionLayer!=null)
                {
                    map.removeLayer(this.selectionLayer);
                }
                this.selectionLayer=pol;
            }
  	  
  	      
  	  
	      }
          map.removeLayer(layers);



}


function addTempGeojson_notworking(feature)
{
    var geojson={type:"FeatureCollection",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[]};
    geojson.features.push(feature);
    let gjlayer=new deck.GeoJsonLayer({pickable: false, data: geojson,  lineWidthScale: 1,
        lineWidthMinPixels: 2,getLineColor:[255,0,0,255]})
    var deckLayer = new DeckGlLeaflet.LeafletLayer({layers:[gjlayer]});
    var layer=Singleton.getInstance().map.addLayer(deckLayer);
   // console.log("adding geojson layer ",layer);

    return layer;


}

