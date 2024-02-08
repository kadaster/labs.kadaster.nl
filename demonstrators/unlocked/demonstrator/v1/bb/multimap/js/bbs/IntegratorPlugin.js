function startIntegration()
{
    
  //  console.log("start integration");
    
    var sparql=window.top.Singleton.getInstance().yasguiSparql ; //old
    
    
    
        try{

        sparql=this.parent.document.yasgui.current().yasqe.getValue();
        console.log(sparql);

    }
    catch(e)
    {

    }
    
    
    
	
	try {
	    sparql=parent.document.y.getValue(); document.notebook=true;
	    Singleton.getInstance().iface=new Iface();
	  
	    Singleton.getInstance().iface.singleton=	window.top.Singleton.getInstance();
	
	} catch(e){
	    //console.log(e);
	    }; // if notebook
	

	
  try{ parsejson(parent.document.mapplugin.arg.results.getAsJson(),sparql);}
  catch(error)
  {
     // console.log(error);
   try{
     parsejson( parent.document.yasgui.current().yasr.results.getAsJson(),sparql);
     }
     catch(e)
     {
        console.log(e);
    }
    
}

 
   window.top.Singleton.getInstance().yasguiResize.call(this);
   
  
}

function getIface()
{
    return Singleton.getInstance().iface;
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
function showWarning(info)
{
    var iface=Singleton.getInstance().iface;
    if (iface!=null)
    {
     if (iface.toastr!=null)
         {
           iface.toastr.warning(info);
         }
    }
}




var Iface=function()
{
    // interface between this iframe and the rest
 
}

Iface.prototype.setBeginSparqlResults=function(results,sparql)
{
  
  //console.log("parsejson via setsparql results");
  //removeAllSelections();
    parsejson(results,sparql);
  
   
    try
    {
	this.document.parent.content.ready();
    }
    catch(e)
    {
	
    }
  
 // console.log(this);
  
}

Iface.prototype.removeLink=function(key)
{
    
  
    if (this.singleton!=null)
	{
	if (this.singleton.linkedMaps!=null)
	    {
	       delete this.singleton.linkedMaps.key;
	       this.linked==null;
	    }
	}
    
	
}
Iface.prototype.initLink=function(key)
{
    var me=this;
    if (this.linked==null)
	{
	     if (this.singleton.linkedMaps==null)
		 {
		 this.singleton.linkedMaps={};
		 }
	     var ar  = this.singleton.linkedMaps[key];
	     if (ar==null){ar=[];this.singleton.linkedMaps[key]=ar;}
	     ar.push(map);
	     
	     
                map.on('moveend zoomend', function() {
        	   
        	
        	   
        	   var ar=me.singleton.linkedMaps[key];
        	   for (var n in ar)
        	       {
        	        var m=ar[n];
        	        if (m!=map)
        	            {
        	              try {m.setView(map.getCenter(),map.getZoom());}catch(e){}
        	              
        	              //m.setCenter(map.getCenter());
        	            }
        	       }
        	   
        	});
            this.linked=true;
	}


}


Iface.prototype.selectUri=function(uri)
{
  // extern only
    unselectAll();
    var uri_objects= Singleton.getInstance().uri_objects;
    
    if (uri_objects==null){return;}
    
    var layers=uri_objects[uri];
   
    if (layers!=null){    	   featureSelected(null,layers[0]);  
    try{	
	Singleton.getInstance().map.fitBounds(layers[0].getBounds()); 
	
	
    }
    catch(error){console.log(error);}}
    
   
    
    try {if (Singleton.getInstance().map.getZoom()>16) {setTimeout(function(){Singleton.getInstance().map.setZoom(16);},100);} } catch(eee) {}
  
    
}
Iface.prototype.lock=function(widget,msg)
{
    console.log("IFACE lock called but not implemented",widget,msg);
}



Iface.sendEvent=function(event,arg,mouseEvent)
{
    // select event vanuit de kaart
   //arg is uri
    
  //  console.log("select event ",event,arg,document.notebook);
    if (event=="http://www.bbsgroep.nl/application/v2/hasUriOutput")
      	{
            if (document.notebook)
        	{
        	  
        	  openSparqlResultsPropertyPanelNotebook(arg,mouseEvent);
        	  
        	}
            else
        	{
        		openSparqlResultsPropertyPanelBasis(arg,mouseEvent);
        	}
            
	}
    
  
    if (Singleton.getInstance().iface!=null)
	{
	  if (Singleton.getInstance().iface.widget!=null)
	      {
	      	Singleton.getInstance().iface.widget.sendEvent(event,arg);	      
	      }
	}
    
    
    
}

try{startIntegration(); }catch(error){console.log(error);}

