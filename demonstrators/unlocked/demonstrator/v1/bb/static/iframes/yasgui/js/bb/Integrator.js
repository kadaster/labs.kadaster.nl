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
    
    this.iface=iface;
    window.top.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
    Singleton.getInstance().iface=iface;
    
    var yasgui = YASGUI(document.getElementById("showcase"));
    iface.yasgui=yasgui;
    document.yasgui=yasgui;
    
    yasgui.options.catalogueEndpoints=[{endpoint:window.top.Singleton.getInstance().sparqlendpoint,title: "server"}];
    yasgui.options.yasqe.sparql.endpoint=window.top.Singleton.getInstance().sparqlendpoint;
    
    yasgui.options.yasqe.createShareLink=null;
    YASGUI.YASQE.defaults.createShareLink = null;
   
    
    YASGUI.YASQE.defaults.sparql.endpoint=window.top.Singleton.getInstance().sparqlendpoint;
    YASGUI.YASQE.defaults.sparql.getQueryForAjax3=function(a,b,c)
	    {
      
	    	addTabFunctions(yasgui.current());
	    	return a;
	    };
    
   YASGUI.YASR.registerOutput("2DMap", startMap);
   YASGUI.YASR.registerOutput("3DMap", startMapCesium);
     YASGUI.YASR.registerOutput("W2Table", startW2Table);
   //YASGUI.YASR.registerOutput("IFC", startIFC);
   var V2="http://www.bbsgroep.nl/application/v2/";
   try
   {
       if (this.iface.widget.dao[V2+"showIFCViewer"]=="true")
	   {
	   YASGUI.YASR.registerOutput("IFC", startIFC);
	   }
   }
   catch(error){}
  // console.log(this.iface);
   
   //
 
   yasgui.on("queryFinish",function(a,b){
      
       var tab=yasgui.current();
       if (tab.ok==null)
	   {
	      tab.ok=true;
	      tab.query(b.yasqe.getValue());
	      
	   }
       else
	   {
	   
       		Iface.sendEvent(a,b);  var sparql=b.yasqe.getValue();  Singleton.getInstance().yasguiSparql=sparql;
	   }
       		  
       });
  
     
   
    for (var tab in yasgui.tabs)
	{
		yasgui.closeTab(tab);
	}
    
      
    
    yasgui.addTab(null);
    Singleton.getInstance().yasgui=yasgui;
    var tab= yasgui.current();
    tab.yasqe.options.createShareLink=null;
    // update current function
    var cur=yasgui.current;
    yasgui.current=function()
    {
	
	var tab2=cur.call(window.top);
	
	if (tab2.bb==null)
	    {
	
	    addTabFunctions(tab2);
	    }
	
	
	return tab2;
    }
    
    
   addTabFunctions(yasgui.current());
  
}




function addTabFunctions(tab)
{
    var me=this;
    if (tab.bb!=null) {
	//console.log("Tab allready processed");
	return;}
   
    tab.yasqe.options.createShareLink=function(url,callback)
    {
	      console.log(url,callback);
    }
    
      tab.yasqe.options.sparql.callbacks.beforeSend=function(a,b)
    {
	
	
	
	   var ev= me.iface.widget.eventManager;
	   var dao=me.iface.widget.dao;
	   var ar=dao["http://www.bbsgroep.nl/application/v2/hasParameters"];
	   if (ar!=null)
	       {
        	   var replace="";
        	   if (!Array.isArray(ar)){ar=[ar];}
	   
	     
	       for (var n in ar)
	   {
		   var graph=ar[n];
		   if (ev.behaviours[graph]!=null)
		       {
        		   if ( (ev.behaviours[graph].value!=null) && (ev.behaviours[graph].keyword!=null) )
        		       {
        		       
        		           var rGraph=ev.behaviours[graph].value;
        		           var keyword=ev.behaviours[graph].keyword;
        		           rGraph=encodeURI(rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		           b.data=b.data.replace(keyword,rGraph);
        		         
        		       }
		       }
	      
	   }
	       
	       
	       replace+=" where";
	
	var where=encodeURI(replace);
	b.data=b.data.replace("where",where);
	
	
	       }
    }
      
      
    
      

      
      
    tab.bb=true;   
}
YASGUI.YASQE.defaults.addTabFunctions=function(tab){addTabFunctions(tab);}

var Iface=function()
{
    // interface between this iframe and the rest

}

Iface.prototype.setBeginSparqlResults=function(results,sparql,conversion,named)
{
   
    try
    {
	      var records=[];
	      var b=results.results.bindings;
	      var recid=0;
	      var sparql=b[0].s.value;
	      Singleton.getInstance().yasgui.current().yasqe.setValue(sparql);
      }
	catch(error) 
	{
	    //console.log(error);
	    }
 
}

Iface.prototype.selectUri=function(uri)
{
        console.log("selecturi yasgui not implemetned ",uri);
  
           
  
    
}
Iface.sendEvent=function(a,b)
{
  
    var yasgui=Singleton.getInstance().yasgui;
    
    var y=yasgui.current();
       
    Singleton.getInstance().iface.widget.sendEvent("sparqlResult1",y);
    
}



try{startIntegration(); }catch(error){console.log(error);}

