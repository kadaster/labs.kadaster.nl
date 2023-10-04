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
    var iface =new Iface();
    window.top.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
    Singleton.getInstance().iface=iface;
}

var Iface=function()
{
    // interface between this iframe and the rest

}

Iface.prototype.setBeginSparqlResults=function(results,sparql)
{
    
  generateReport(results,sparql);

}

Iface.prototype.selectUri=function(uri)
{
  
   
  
    
}
Iface.sendEvent=function(event,arg)
{
  
    Singleton.getInstance().iface.widget.sendEvent(event,arg);
    
}



try{startIntegration(); }catch(error){console.log(error);}

