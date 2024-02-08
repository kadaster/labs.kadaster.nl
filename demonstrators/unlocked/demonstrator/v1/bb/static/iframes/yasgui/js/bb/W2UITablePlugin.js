function startW2Table(arg,div)
{
    return new W2UITablePlugin(arg);
}


var W2UITablePlugin=function(arg)
{
    
    
    this.arg=arg;
    this.name="W2Table";
    this.hideFromSelection=false;
    this.getPriority=104;
    arg.options.outputPlugins.push("W2Table");
    document.mapplugin=this;
    
    
   
}



W2UITablePlugin.prototype.draw=function(a)
{
  
    
    
    //window.top.Singleton.getInstance().yasguiResults=this.arg.results.getAsJson();
     window.top.Singleton.getInstance().yasguiSparql=Singleton.getInstance().yasguiSparql;
     
    var i = document.createElement('iframe');
    i.style.height="100%";
  
    var link = './W2TablePlugin.html';
    i.src = link;
    if (MapPlugin.notebook)
	{
        
	   i.src = '../../yasgui/W2TablePlugin.html';
      
	}
       
    
    i.setAttribute("height","90%");
    i.setAttribute("style","min-height:90vh;height:90%;width:100%;overflow:auto;");
    i.setAttribute("width","100%");
    i.setAttribute("frameborder","0px");
  
    i.id="myW2UITablePlugin";
    this.iframe=i;
    
      
   this.arg.resultsContainer[0].appendChild(i);
   var p=this.arg.resultsContainer[0]
   
   
  // this.arg.resultsContainer[0].setAttribute("height","600px");
 
   window.top.Singleton.getInstance().yasguiResize=function(){ 
       i.setAttribute("height","90%"  );
       }
   
  
  
}

W2UITablePlugin.prototype.canHandleResults=function(arg2) 
{
    return true;
 }
//MapPlugin.prototype.getPriority=function() {return 100}

