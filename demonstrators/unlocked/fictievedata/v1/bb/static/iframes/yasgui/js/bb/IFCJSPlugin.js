function startIFCJS(arg,div)
{
     
    return new IFCJSPlugin(arg);
}


var IFCJSPlugin=function(arg)
{
    
    
    this.arg=arg;
    this.name="IFCJS";
    this.hideFromSelection=false;
    this.getPriority=100;
    arg.options.outputPlugins.push("IFCJS");
	  document.ifcjsplugin=this;
}



IFCJSPlugin.prototype.draw=function(a)
{
	console.log(a);
	this.a=a;
	
    window.top.Singleton.getInstance().yasguiResults=this.arg.results.getAsJson();
     window.top.Singleton.getInstance().yasguiSparql=Singleton.getInstance().yasguiSparql;
     
    var i = document.createElement('iframe');
    i.style.height="100%";
    i.src = './../ifcviewer/indexbbyasgui.html';
    i.setAttribute("height","600px");
    i.setAttribute("style","height:600px;width:100%;overflow:auto;");
    i.setAttribute("width","100%");
    i.id="IFCJS";
    this.iframe=i;
    
  
    
   this.arg.resultsContainer[0].appendChild(i);
   var p=this.arg.resultsContainer[0]
   
   
  // this.arg.resultsContainer[0].setAttribute("height","600px");
 
   window.top.Singleton.getInstance().yasguiResize=function(){ 
       i.setAttribute("height","600px"  );
       }
   
  
  
}






IFCJSPlugin.prototype.canHandleResults=function(arg2) 
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
	     if (v=="file") {b2=true;}
	     if (v=="guid") {b2=true;}
	     
	    }
	if ((b1) && (b2)) {return true;}
	
    }
    catch(error){}
    //return rtur;
    return true;
   }
//MapPlugin.prototype.getPriority=function() {return 100}



//YASR.registerOutput("2DMap", startMap);
