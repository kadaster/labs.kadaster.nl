function startMapCesium(arg,div)
{
  
    
    return new CesiumPlugin(arg);
}


var CesiumPlugin=function(arg)
{
    
    
    this.arg=arg;
    this.name="3DMap";
    this.hideFromSelection=false;
    this.getPriority=100;
    arg.options.outputPlugins.push("3DMap");
    
    
   
}



CesiumPlugin.prototype.draw=function(a)
{
  
    window.top.Singleton.getInstance().yasguiResults=this.arg.results.getAsJson();
     window.top.Singleton.getInstance().yasguiSparql=Singleton.getInstance().yasguiSparql;
     
    var i = document.createElement('iframe');
   // i.style.height="100%";
   
  //  i.style.display = 'none';
  
    i.src = './../cesiumMap/cesiumPlugin.html';
 //   i.setAttribute("height","100%");
  //  i.setAttribute("style"," position: absolute;;margin-bottom:0px;bottom:0px;width:100%;overflow:auto;");
    i.setAttribute("style","height:800px;margin-bottom:0px;bottom:0px;width:100%;overflow:auto;");
    
    
    i.setAttribute("width","100%");
    i.id="myMap3d";
    this.iframe=i;
    
  
    
   this.arg.resultsContainer[0].appendChild(i);
   var p=this.arg.resultsContainer[0]
   
   
  // this.arg.resultsContainer[0].setAttribute("height","600px");
 
   window.top.Singleton.getInstance().yasguiResize=function(){ 
     // i.setAttribute("height","100%"  );
     // i.setAttribute("style","height:100%;margin-bottom:0px;bottom:0px;width:100%;overflow:auto;");
       }
   
  
  
}

CesiumPlugin.prototype.canHandleResults=function(arg2) 
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
         if (v=="gltf") {b2=true;}
	     
	    }
	if ((b1) && (b2)) {return true;}
	
    }
    catch(error){}
    return false;
   }
//MapPlugin.prototype.getPriority=function() {return 100}



//YASR.registerOutput("2DMap", startMap);
