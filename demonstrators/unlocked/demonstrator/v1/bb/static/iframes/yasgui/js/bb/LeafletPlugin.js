function startMap(arg,div)
{
    return new MapPlugin(arg);
}


var MapPlugin=function(arg)
{
    
    
    this.arg=arg;
    this.name="2DMap";
    this.hideFromSelection=false;
    this.getPriority=100;
    arg.options.outputPlugins.push("2DMap");
    document.mapplugin=this;
    
    
   
}



MapPlugin.prototype.draw=function(a)
{
  
       
    //window.top.Singleton.getInstance().yasguiResults=this.arg.results.getAsJson();
     window.top.Singleton.getInstance().yasguiSparql=Singleton.getInstance().yasguiSparql;
     
    var i = document.createElement('iframe');
    i.style.height="100%";
    
  
  //  var link = './../map-view2/leafletWidgetPlugin.html';
    var link = './../map-view2/leafletWidgetPlugin171V1.html';
    i.src = link;
    if (MapPlugin.notebook)
	{
	   i.src = '.'+link;
	}
    
    
    
    i.setAttribute("height","90%");
    i.setAttribute("style","margin:0px;min-height:90vh;height:90%;width:100%;overflow:auto;border:none");
    i.setAttribute("width","100%");
    i.setAttribute("frameborder","0px");
  
    i.id="myMap2d";
    this.iframe=i;
    
    
  
    
   this.arg.resultsContainer[0].appendChild(i);
   var p=this.arg.resultsContainer[0]
   
   
  // this.arg.resultsContainer[0].setAttribute("height","600px");
 
   window.top.Singleton.getInstance().yasguiResize=function(){ 
       i.setAttribute("height","90%"  );
       }
   
  
  
}

MapPlugin.prototype.canHandleResults=function(arg2) 
{
   
    try
    {
	
	var b1=false;
	var b2=false;
	var vars=arg2.results.getVariables();
	for (var n in vars)
	    {
	    var v=vars[n];
	     
	     if (v=="uri") {b1=true;}
	     if (v=="geometry") {b2=true;}
	     if (v=="geometryGeoJSON") {b2=true;}
	     
	    }
	if ((b1) && (b2)) {
	  
	    return true;
	    }
	
    }
    catch(error){}
    return false;
 }
//MapPlugin.prototype.getPriority=function() {return 100}



//YASR.registerOutput("2DMap", startMap);
