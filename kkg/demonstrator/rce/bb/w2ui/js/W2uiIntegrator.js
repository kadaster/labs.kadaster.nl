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

var DEBUG=false;

var Widget={nid:0};
var V2="http://www.bbsgroep.nl/application/v2/"; 

var EventManager={generateEvent: function(widget,event,uri)
    {

   // console.log(" generate event ",widget,event,uri);
  //  console.log(Singleton.getInstance().iface);
    var iface =Singleton.getInstance().iface;
    
    if (iface!=null)
    {
         //console.log(event,uri,widget);
         if (event==V2+"hasUriOutput")
         {
           // console.log("on click event ",uri);
                iface.me.onClick(event,uri);
                return;
         }
         if (event==V2+"hasTextOutput")
         {
                iface.me.onClick(event,uri);
                return;
         }
         if (event==V2+"hasVar1Output")
         {
                iface.me.onClick(event,uri);
                return;
         }
        


    }
}};

function lock()
{
    console.log("lock not implemented");
}
function unlock()
{
    console.log("unlock not implemented");
}


function startIntegration(widget)
{

    if (getIface()!=null) {console.log("skipping start integration");return;}
 // console.log("start integration w2uiintegrator");
    var iface =new Iface();
    Singleton.getInstance().iface=iface;
    try
    {
    
        window.top.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
     
    }
    catch(error)
    {
		//console.log(error);
    }
   // console.log("   halfway integration w2uiintegrator");
    if (widget!=null)
    {
       widget.eventManager={};
       widget.eventManager.behaviours={};

     // create mysparql
     var url= window.top.url;
     document.connectionError=function(a,b,c){console.log("error sparql");}
     var sparqler = new SPARQL.Service(url);
     sparqler.setMethod("POST");
     Singleton.getInstance().sparqler=sparqler;

     MySparql.select=function(sparql,succes,error)
     {
        
          window.top.query(sparql,succes,error);

     }
     if (iface.me.props.basequery!=null)
     {
         // found basequery
        // console.log("Found base query");
         if (iface.me.props.data==null)
         {
             console.log("geen data gevonden");
         }
     }

   //  console.log(" part 3 integration w2uiintegrator");
       //SparqlExecutor =function(oo,sparql,ev,prop,ready)
       try{
         // console.log(iface.me.props.query);
            var sparqlexecutor = new SparqlExecutor(widget.dao,iface.me.props.query,widget.eventManager) ;
            widget.eventManager.behaviours[widget.dao[V2+"hasSparqlInput"]]=sparqlexecutor;
            sparqlexecutor.orgSparql=iface.me.props.query;
       }
       catch(e){
           //console.log(e);
        }

       // transfer react props.

      
     //    console.log("end integration")


    }

}



function getIface()
{
    if (Singleton.getInstance().iface!=null) {return  Singleton.getInstance().iface;}
    return null;
}
function showWarning (info)
{
    var iface=Singleton.getInstance().iface;
    if (iface!=null)
	{
	 if (iface.toastr!=null)
	     {
	       iface.toastr.info(info);
	     }
	}
    else
    {

    }
}
function showPopup(title,message)
{
    console.log("show popup",title,message);
    try{
      
      
           
            parent.w2popup.open({
                title:  title,
                body: '<div class="w2ui-centered">'+message+'</div>'
            });
        
        }

  
    catch(e)
    {
        console.log(e);
    }
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
         else
         {
             try { parent.toaster.info(info);}catch(e){}
         }
	}
    else
         {
             try { parent.toastr.info(info);}catch(e){}
         }
    
}





function setParams(widget)
{
    // still used but should be replaced by direct params via getFace().me.props
    var ha = getQueryParams();
    for (var key in ha)
    {
        
        var value = ha[key];
        if (value.includes("@@")){value=value.replaceAll("@@","||");}
        if (value.includes("!@!@")){value=value.replaceAll("!@!@","{{");}
        if (value.includes("@!@!")){value=value.replaceAll("@!@!","}}");}
        if (key=="expandLevel"){try{value=parseInt(value);}catch(e){}}
     
           if ((key.startsWith("http")) && (key.endsWith("widgetId")))
           {
              widget[V2+"widgetId"]=value;
             // console.log("Params:"+key,value);
           }
           else
           {
            widget[V2+key]=value;

           // console.log("Params:"+key,value);
           }
    }

   // var subscribe=getIface().me.props["subscribeVariable"];
   

}
function getQueryParams() {

    var qs=document.location.href;
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}



var Iface=function()
{
    // interface between this iframe and the rest

}
Iface.prototype.evalParent=function(com)
{
    try
    {
        console.log(com);
        eval(com);
    }
    catch(e)
    {
        
    }
}





function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }



Iface.prototype.tranferProps=function(wui)
{
//
    if (this.me!=null)
    {
    
        for (var key in this.me.props)
        {
            var value=this.me.props[key];
            if ( (typeof value === 'function') ||((typeof value === 'object'))) {}else{
                if ((key=="mode") ||(key=="query") ||(key=="className") ||(key=="mode") ||(key=="data") || (key=="children") || (key=="definition") ){}else
                {
                     
                      var value =this.me.props[key];
                      
                      if ((value==true) || (value==false)) value="\""+value+"\"";
                   
                     if ((value!=null)  && (value!="\"\"") && (value!="") && value!=undefined)
                     {
                      wui.dao[V2+key]=value;
                       //  console.log("transfer props ",key,value);
                     }
                }
            }

        }

      
         


    }



}


Iface.prototype.selectUri=function(uri)
{
    // voor de map
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
 // console.log(event,arg);
    Singleton.getInstance().iface.widget.sendEvent(event,arg);
    
}

function loadPopupJS()
{

    let dir=document.location.href.split("propertypanel.html")[0];
    parent.$.getScript(dir+"js/GChart.js");

    $.getScript("https://www.gstatic.com/charts/loader.js");



        google.charts.load('current', {packages: ['corechart']});
        console.log("gchart is loading ",document);


}





