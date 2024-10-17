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

function startIntegration()
{
  //  var viewer=null;
   //  Singleton.getInstance().w2table=viewer;
    
  var sparql=window.top.Singleton.getInstance().yasguiSparql ; //old
    
    try {
        sparql=parent.document.y.getValue(); document.notebook=true;
        Singleton.getInstance().iface=new Iface();
      
        Singleton.getInstance().iface.singleton=    window.top.Singleton.getInstance();
    
    } catch(e){
        //console.log(e);
        }; // if notebook
    

    
  try{ parsejson(parent.document.mapplugin.arg.results.getAsJson(),sparql);}catch(error){
	  console.log(error);
    alert("connection error: wrong request or not logged in?");
	
   // window.top.location.reload();
    }
 
   window.top.Singleton.getInstance().yasguiResize.call(this);
    
    
    
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

Iface.prototype.setBeginSparqlResults=function(results,sparql)
{
   // console.log("cesium retreiving results");
    parsejson(results,sparql);
     try
    {
        this.document.parent.content.ready();
    }
    catch(e)
    {
    
    }

}

Iface.prototype.selectUri=function(uri)
{
   
  
   
}

Iface.sendEvent=function(event,arg)
{
  
    Singleton.getInstance().iface.widget.sendEvent(event,arg);
    
}
