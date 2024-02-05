function startIFC(arg,div)
{
  
    
    return new IFCPlugin(arg);
}


var IFCPlugin=function(arg)
{
    
    
    this.arg=arg;
    this.name="IFC";
    this.hideFromSelection=false;
    this.getPriority=100;
    arg.options.outputPlugins.push("IFC");
	document.ifcplugin=this;
       
   
}



IFCPlugin.prototype.draw=function(a)
{
  
    window.top.Singleton.getInstance().yasguiResults=this.arg.results.getAsJson();
     window.top.Singleton.getInstance().yasguiSparql=Singleton.getInstance().yasguiSparql;
     
    var i = document.createElement('iframe');
    i.style.height="100%";
   
  //  i.style.display = 'none';
  
    i.src = './../rdfviewer/indexbbyasgui.html';
    i.setAttribute("height","600px");
    i.setAttribute("style","height:600px;width:100%;overflow:auto;");
    i.setAttribute("width","100%");
    i.id="RDFIFC";
    this.iframe=i;
    
     
   this.arg.resultsContainer[0].appendChild(i);
   var p=this.arg.resultsContainer[0]
   
   
  // this.arg.resultsContainer[0].setAttribute("height","600px");
 
   window.top.Singleton.getInstance().yasguiResize=function(){ 
       i.setAttribute("height","600px"  );
       }
   
  
  
}

IFCPlugin.prototype.canHandleResults=function(arg2) 
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
	   //  if (v=="geometryGeoJSON") {b2=true;}
	     
	    }
	if ((b1) && (b2)) {return true;}
	
    }
    catch(error){}
    //return rtur;
    return false;
   }
//MapPlugin.prototype.getPriority=function() {return 100}



//YASR.registerOutput("2DMap", startMap);
