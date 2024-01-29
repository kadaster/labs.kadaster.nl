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




var Iface=function()
{
    // interface between this iframe and the rest
  this.busy=false;
}

Iface.prototype.setBeginSparqlResults=function(results,sparql,conversion,named)
{
 
    Singleton.getInstance().iface.conversion=conversion;
    Singleton.getInstance().iface.named=named;
   // console.log("receiving sparql results ",results,sparql);
    createUploaderWidget(); //first
    createToolbar(results);
    
    if ((conversion!=null) && (Singleton.getInstance().parameters!=null))
	{ 
	    for (var n in conversion) {Singleton.getInstance().parameters[n]=conversion[n];}
	}
    
}
Iface.prototype.eval=function(e)
{
    try
    {
	eval(e);
    }
    catch(error){}
 }

Iface.prototype.setConfig=function(config)
{
    
   
  
    if (config.fileExtensions!=null)
    {
	 if (config.fileExtensions.startsWith("[")) {config.fileExtensions=eval(config.fileExtensions);} else {config.fileExtensions=[config.fileExtensions]; }
	fileExtensions=config.fileExtensions;
    }
    if (config.waitingPath!=null){waitingPath=config.waitingPath;}
    if (config.notAvailablePath!=null){notAvailablePath=config.notAvailablePath;}
    if (config.multiple!=null){multiple=config.multiple;}
    if (config.command!=null){command=config.command;}
    if (config.succesText!=null){succesText=config.succesText;}
    if (config.succesEval!=null){succesEval=config.succesEval;}
    if (config.autoUpload!=null){
	autoUpload=config.autoUpload;
    }
    if (config.initJavascript!=null){
	try{eval(config.initJavascript);}catch(error){console.log(error);}
	
    }
    
     
    createUploaderWidget();
    
   
    
    
}


Iface.prototype.selectUri=function(uri)
{
    
}

Iface.sendEvent=function(event,arg)
{
  
    Singleton.getInstance().iface.widget.sendEvent(event,arg);
    
}


function createToolbar(results)
{
   
   
    var me=this;
    if (this.cctoolbar!=null) {this.cctoolbar.destroy();}
    
    var items=[];
    items.push({ text: 'containerOTL',value: 'containerOTL', icon: 'fa-glass' });
    var selected=items[0].id;
    var id=1;
    if (results!=null)
	{
            try
            {
        	for (var n in results.results.bindings)
        	    {
        	       var o=results.results.bindings[n];
        	       var oo={text:o.text.value,uri:o.uri.value,icon: 'fa-camera'}
        	       id++;
        	       items.push(oo);
        	       selected=oo;
        	    }
        	
            }
            catch (error){console.log(error);}
	}
    
    console.log(items);

  
    //{ id: 'None', uri: 'Geen OTL', icon: 'fa-camera' },
    //{ id: 'OTL171', uri: 'OTL171', icon: 'fa-picture' },
    //{ id: 'containerOTL', uri: 'OT2.0', icon: 'fa-glass' }
    
   this.cctoolbar= $('#ccuploadtoolbar').w2toolbar(
                          	   {
                        	    name: 'ccuploadtoolbar',
                        	    items: [
                        	        { type: 'menu-radio', id: 'otl', text: 'OTL Keuze', icon: 'fa-star',items:items, 
                        	               
                        	            text: function (item) {
                        	                    var text = item.selected;
                        	                    if (text!=null)
                        	                	{
                        	                	                       	                		
                        	                			return text;
                        	                	}
                        	                    else
                        	                	{
                        	                	 return "Kies een OTL versie";
                        	                	}
                        	                }
                        	        
                        	               // selected: "containerOTL", required:true, 
                        	            },
                        	           
                        
                        	        { type: 'break', id: 'break1' },
                        	        { type: 'radio',  id: 'RD',  group: '1', caption: 'RD', icon: 'fa-star', checked: true },
                        	        { type: 'radio',  id: 'WGS',  group: '1', caption: 'WGS', icon: 'fa-star-empty' },
                        	        
                        	        { type: 'html',  id: 'beschrijving',
                        	                html: function (item) {
                        	                    var html =
                        	                      '<div style="padding: 3px 10px;">'+
                        	                      ' beschrijving:'+
                        	                      '    <input size="10" onchange="Singleton.getInstance().parameters.beschrijving=this.value;  var el = w2ui.ccuploadtoolbar.set(\'beschrijving\', { value: this.value });" '+
                        	                      '         style="padding: 3px; border-radius: 2px; border: 1px solid silver" value="'+ (item.value || '') + '"/>'+
                        	                      '</div>';
                        	                    return html;
                        	                }
                        	            },
                        	            
                        		        { type: 'html',  id: 'code',
                        		                html: function (item) {
                        		                    var html =
                        		                      '<div style="padding: 3px 10px;">'+
                        		                      ' code:'+
                        		                      '    <input size="10" onchange=" Singleton.getInstance().parameters.code=this.value; var el = w2ui.ccuploadtoolbar.set(\'code\', { value: this.value });" '+
                        		                      '         style="padding: 3px; border-radius: 2px; border: 1px solid silver" value="'+ (item.value || '') + '"/>'+
                        		                      '</div>';
                        		                    return html;
                        		                }
                        		            },
                        	        
                        	        { type: 'break', id: 'break2' },
                        	        { type: 'button',  id: 'sendIT',  caption: 'Send', icon: 'fa-home' }
                        	       
                        	    ]
                        
    });
   
   
   
   
   w2ui.ccuploadtoolbar.on('click', function (event) {
        var t=event.target;
      //  if (t=="otl"){return;}
       
        if (t=="RD") {me.parameters.rd=true; return}
        if (t=="WGS") {me.parameters.rd=false; return}
        if (t=="sendIT"){sendIT(); return;}
        
    // if (t=="beschrijving") {me.parameters.beschrijving=me.cctoolbar.get("beschrijving").value;}   
   //  if (t=="code") {me.parameters.code=me.cctoolbar.get("code").value;}
        if (me.cctoolbar.get(t).uri!=null)
            {
            	me.parameters.otl=me.cctoolbar.get(t).uri;
            }
        
        //console.log(window.top.parameters);
   });
   
   
  
   Singleton.getInstance().parameters.otl="containerOTL";
   Singleton.getInstance().parameters.beschrijving="geen beschrijving";
   Singleton.getInstance().parameters.code="geen code";
   
   
}

