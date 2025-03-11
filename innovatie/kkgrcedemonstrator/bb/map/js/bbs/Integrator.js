
function startIntegration()
{
    
    var iface =new Iface();
    Singleton.getInstance().iface=iface;
    try
    {
    
     window.top.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
    
     
     var dao=iface.widget.dao;
     var wmsUri=dao["http://www.bbsgroep.nl/application/v2/optionalWMSLayer"];
     
     if (wmsUri!=null)
	 {
          var overlays={};
        if (!Array.isArray(wmsUri)){wmsUri=[wmsUri];}
        
          for (var nn in wmsUri)
              {
                                  var wmsUri2=wmsUri[nn];
                          iface.MySparql.getObject(wmsUri2,function(app)
                            {
                                            var uri=app["http://www.bbsgroep.nl/application/v2/serviceurl"];
                                            //var label = app["http://www.w3.org/2000/01/rdf-schema#label"];
                                            var layers=app["http://www.bbsgroep.nl/application/v2/hasLayerName"];
                                            if (!Array.isArray(layers)){layers=[layers];}
                                            
                                                                
                                        //   overlays["test"]=Layerwidget.getWMSLayer("cpt","http://geodata.nationaalgeoregister.nl/brocpt/wms?SERVICE=WMS");
                                            for (var n in layers)
                                          {
                                            overlays[layers[n]]=Layerwidget.getWMSLayer(layers[n],uri);
                                          
                                          }
                                            
                                            new Layerwidget(map,overlays);
                                            
                                          
                            });
              }
          
        
        
	 }
     
   
     
     
     
     
     
     
     return;
    }
    catch(error)
    {}
    
    try
    {
    
     window.top.BBAPI["mapke"].call(this,iface);
    }
    catch(error)
    {
  
        try
        {
            window.top.postMessage(window.frameElement.id, window.top.BBAPI.base);
        }
        catch(eee){}
     }



try
{
   new Layerwidget(map);
}
catch (eee){}
  
  
  
}

function getIface()
{
    if (Singleton.getInstance().iface!=null) {return  Singleton.getInstance().iface;}
    return null;
}

function showInfo(info)
{
    var iface=Singleton.getInstance().iface;
    if (iface!=null)
	{
	 if (iface.toastr!=null)
	     {
	       iface.toastr.info(info);
	     }
	}
}

function showWarning(info)
{
    var iface=Singleton.getInstance().iface;
    if (iface!=null)
    {
     if (iface.toastr!=null)
         {
           iface.toastr.warning(info);
         }
    }
}

var Iface=function()
{
    // interface between this iframe and the rest

}
Iface.prototype.unlock=function(id,msg)
{
  //  console.log(id,msg);
  try
  {
    this.me.props.setLoading(false);
  }
  catch(e)
  {}
}

Iface.prototype.lock=function(id,msg)
{
  //  console.log(id,msg);
  try
  {
    this.me.props.setLoading(true);
  }
  catch(e)
  {}
}

Iface.prototype.setBeginSparqlResults=function(results,sparql)
{
  //console.log("set begin sparql ");
    this.lock("map","de map is bezig");
    
    try
    {
        removeAllSelections();
        parsejson(results,sparql);
		
		

    }
    catch(e){console.log(e);}
    this.unlock("map");
    
  
    

}
Iface.prototype.getMap=function(){return map;}

Iface.prototype.hasHighlightSelectionInput=function(uri)
{
    //hasHighlightSelectionInput
   // console.log("map external event for hightlighting uri ",uri);
    if (uri!=null){
        highlightUri(uri);
    }
    
}


Iface.prototype.selectUri=function(uri)
{
   // console.log("map select uri ",uri);
    if ( Singleton.getInstance().selectedUri==uri)
	{
	  // console.log("already selected ");
	   return;
	}
    
    removeAllSelections();
    if (uri==null){return false;}
    
    var uri_objects= Singleton.getInstance().uri_objects;
    
    if (uri_objects==null){return false;}
    
    var layers=uri_objects[uri];
   if (layers==null){updateAllTileLayers();showInfo("geen grafisch object gevonden ");return false;}
    if (layers!=null){  	
	
	//,f,tile,selection,x,y,pad,ctx,events
	
	selectedUriFromClick(uri,null,null,null,null,null,null,null,false);
	
	
    try{
	        
		Singleton.getInstance().map.fitBounds(layers[0].getBounds());
		
		}catch(error)
		{
		  //  console.log(error,layers);
		    // could be a point
		    try
		    {
			console.log("error in bounds selectie. zooming uit naar NL ");
			Singleton.getInstance().map.setView([layers[0].feature.geometry.coordinates[1],layers[0].feature.geometry.coordinates[0]], 54);
			
			
		    }
		    catch(error2){}
	}}
    try {if (Singleton.getInstance().map.getZoom()>19) {setTimeout(function(){Singleton.getInstance().map.setZoom(19);},00);} } catch(eee) {}
	return true;
}

Iface.sendEvent=function(event,arg)
{
  
    Singleton.getInstance().iface.widget.sendEvent(event,arg);
    
}




Iface.prototype.initLink=function(key)
{
    var me=this;
    if (this.linked==null)
	{
	     if (this.singleton.linkedMaps==null)
		 {
		 this.singleton.linkedMaps={};
		 }
	     var ar  = this.singleton.linkedMaps[key];
	     if (ar==null){ar=[];this.singleton.linkedMaps[key]=ar;}
	     ar.push(map);
	     
	     
                map.on('moveend zoomend', function() {
        	   
        	  // console.log(map.getZoom(),map.getCenter());
        	   
        	   var ar=me.singleton.linkedMaps[key];
        	   for (var n in ar)
        	       {
        	        var m=ar[n];
        	        if (m!=map)
        	            {
        	              m.setZoom(map.getZoom());
        	              m.setCenter(map.getCenter());
        	            }
        	       }
        	   
        	});
            this.linked=true;
	}


}

try{startIntegration(); }catch(error){console.log(error);}

