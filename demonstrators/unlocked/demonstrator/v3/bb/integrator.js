if (Singleton==null)
    {
         var Singleton = (function () 
             {
             var instance=null;
          
             function createInstance() 
             {
                 var object = new Object("I am BBAPI instance");
               
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
 
}

document.si=0;
function startIntegration()
{
 // console.log("start integration yasr results");
    var iface =new Iface();
    Singleton.getInstance().iface=iface;
   // console.log("start integration for frame ",window.frameElement.id)
    try
    {
    
     window.top.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
      
    
     
    }
    catch(error)
    {
		document.si++;
		if (document.si<0)
		{
			setTimeout(startIntegration,250);
			return;
		}
		else
		{
		console.log("IFrame Integration error: wellicht nog niet visible",error);
		}
	}
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

var Iface=function()
{
    // interface between this iframe and the rest

}


Iface.prototype.selectUri=function(uri)
{
    removeAllSelections();
    if (uri==null){return;}
    
    var uri_objects= Singleton.getInstance().uri_objects;
    
    if (uri_objects==null){return;}
    
    var layers=uri_objects[uri];
   if (layers==null){updateAllTileLayers();showInfo("geen grafisch object gevonden ");return;}
    if (layers!=null){  	   
	selectedUriFromClick(uri);
	
    try{
		Singleton.getInstance().map.fitBounds(layers[0].getBounds()); 
		}catch(error)
		{
		    console.log(error,layers);
		    // could be a point
		    try
		    {
			Singleton.getInstance().map.setView([layers[0].feature.geometry.coordinates[1],layers[0].feature.geometry.coordinates[0]], 54);
			
			
		    }
		    catch(error2){}
	}}
}

Iface.sendEvent=function(event,arg)
{
  
    Singleton.getInstance().iface.widget.sendEvent(event,arg);
    
}