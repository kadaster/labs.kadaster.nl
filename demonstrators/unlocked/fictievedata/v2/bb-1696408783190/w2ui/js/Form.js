var FormWidget=function(layout,panel,widget,rv,perspective)
{
    Widget.nid++;
    var me=this;
    this.dao=widget;
    this.toolbarViz=true;
    this.rv=rv;
    
    this.htmlid='formWidget'+Widget.nid;
    this.gridName='formWidget'+Widget.nid;
    this.layout=layout;
	this.panel = panel;
    this.header=null;
}

FormWidget.prototype.validateFile=function()
{
	
	let filetype =this.dao[V2+"filetype"];
	if (filetype!=null)
	{
		try
		{
			
			let file =this.grid.record.file;
			if (file==null){return true;}
			if (file.length>1)
			{
				w2ui.form.message('Te veel files');
				return false;
			}
			for (let n in file)
			{
				let f=file[n];
				if (f.name.endsWith(filetype)) {return true;}
				break;
			}

			w2ui.form.message('verkeerde file extensie');
			return false;
		}
		catch(e){}
	}
	return true;

}
FormWidget.prototype.getIface=function()
{
	return getIface();
}
FormWidget.prototype.close=function()
{
  
	let me =getIface().me;
	let endjs=me.props["endJS"];

   if (endjs!=null)
   {
	   try
	   {
		//   console.log("evaluating ",endjs);
	   	eval(endjs);
	   }
	   catch(e)
	   {
              console.log(e);
	   }
   }

   me.uploadSuccessfulAfter();
}

FormWidget.prototype.createGUI=function()
{
 let layout = this.layout;
 let panel = this.panel;
    if (this.dao[V2+"title"]!=null) { this.header=this.dao[V2+"title"];}
  if (this.header==null){this.header="";}
   let fields=null;
fields=getIface().me.props.fields;
//fields=this.dao[V2+"fields"];
if (fields!=null)
{
	 // fields= fields.replaceAll("'","").replace(/([a-z][^:]*)(?=\s*:)/g, '"$1"');

	try {fields=JSON.parse(fields);} catch(e){}
}

let tabs=this.dao[V2+"tabs"];
 var me = this;

    let grid=$().w2form({
        name   : 'form',
        header : me.header,
        fields: fields,
	    actions: {
            Reset: function () {
                this.clear();
            },
            Save: function () {

				let surl=me.getServerURL();
				if (surl==null)
				{

					w2ui.form.message('No server specified');
					return;
				}
                if (w2ui.form.validate().length == 0) {
					if (!me.validateFile()) {return } ;
					
					w2ui.form.lock("processing ",true);
					let oo=this.getCleanRecord();
					
					
					let dataCommand2 =me.dao[V2+"dataCommand"];
					let dataCommand=null;
					try { dataCommand=JSON.parse(dataCommand2);}catch(e){}

					const formData = new FormData();
                    if (dataCommand!=null)
					{
						for (let key in dataCommand)
						{
							  if (oo[key]==null)
							  {
									oo[key]=dataCommand[key];
									formData.append(key,dataCommand[key]);
							  }
						}
					}
					
					
				    //console.log(getIface().me.props["service"]);
					if (getIface().me.props["service"]=="upload")
					{

						for (let key in oo)
						{
                             
							  if (key=="file")
							  {
                                 formData.append("file",$('input[type=file]')[0].files[0]);
								// console.log($('input[type=file]')[0].files[0]);
							  }
							  else
							  {
							//	console.log(key,oo[key]);
								formData.append(key,oo[key]);
							  }
								
						}
						formData.append("command", me.dao[V2+"commando"]); 
						let uploadurl=surl.replace("command","upload");
						var request = new XMLHttpRequest();
						request.withCredentials = true;
						request.open("POST", uploadurl);
						//request.addEventListener("progress", updateProgress);
						request.addEventListener("load", function(e){w2ui.form.unlock();w2ui.form.clear();	w2ui.form.message({ onClose:function(){ me.close()}, width: 400, height: 200,body:'<div class="w2ui-centered"><div style="padding: 10px;"><p>data succesvol verzonden<p></div></div>'}); });
						request.addEventListener("error", function(e){w2ui.form.unlock();			w2ui.form.message('server update error'); console.log(e);});

						request.send(formData);



					}
					else
					{
						oo["commando"]=me.dao[V2+"commando"];
					
					postData(surl,oo,dataCommand).then(data => {

						  try
						  {
						
						if (data.ok==false)
						{
							w2ui.form.unlock();
							w2ui.form.message('server update error');
							return;
						}
					data.json().then(data2=>{

						     // console.log(data2);
                           if ((data2.status=="success") || (data2.success=="true") )
						   {
							w2ui.form.unlock();
							let msg ='server update success';
							if (data2.message!=null) msg=data2.message;


							w2ui.form.message({
								body: '<div class="w2ui-centered">'+msg+'</div>',
								width: 400,
								height: 200,
								buttons: '	<button class="w2ui-btn" onclick="w2ui.form.message()">Yes</button> '
								,
								onClose(event) {
									
									event.done(() => { me.close(); })
								}
							})

							
							
							

						   }
						   else
						   {

							w2ui.layout.unlock("main");
							let msg='server update error';
							if (data2.message!=null) msg=data2.message;
							w2ui.form.message(msg);
						   }


					      })
						
					  
					  
					}
					catch(e)
					{
						w2ui.layout.unlock("main");
						w2ui.form.message('server error'); 
						console.log(e);
					}
				}
					);
			}
		
					  
                   


				   
                }
				else
				{


				}
			}
            
           
        }
    });
    
    
    this.grid=grid;
    this.layout=layout;
    this.panel=panel;
  
        
    
    w2ui[layout].html(panel,grid);
    
      
  

    
  //  console.log(this.dao,me.hash);
}
FormWidget.prototype.getServerURL=function()
{
	try
	{
	
		let repoUrl=getIface().me.props.repoURL;
		
			return repoUrl.replace("sparql","command");
		
		

	}
	catch(e){}

	return null;

}





async function postData(url = '', data = {},com) 
{
      

	//if (com!=null){let data2=JSON.parse(com);data2.data=data; data=data2;}
	//console.log(data);
	// Default options are marked with *
	const response = await fetch(url, {
	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
	  mode: 'cors', // no-cors, *cors, same-origin
	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	  credentials: 'include', // include, *same-origin, omit
	  headers: {
		'Content-Type': 'application/json',
	//	'Access-Control-Allow-Origin':'http://localhost:8080'
		// 'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  redirect: 'follow', // manual, *follow, error
	  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	  body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response; // parses JSON response into native JavaScript objects
  }



FormWidget.prototype.refresh=function()
{
   // console.log("table refresh");
      if (this.grid!=null)
	  {
	     this.grid.refresh();
	    //   this.grid.resize();
	  }
}





FormWidget.prototype.setSparqlResults=function(results,sparql)    {
        // from connection
     console.log("table widget set sparql results ",results);
       
        var me=this;
       // pipe this through to the iframe.
        if (results==null) {return;}
        if (results.results==null) {return;}
        
        this.grid.destroy();
      
      
      if (sparql==null){
          if (DEBUG){   console.log("geen sparql query voor table gevonden! ",sparql);}
          return;}
      
      try
      {
     
    	var nodes=[];
    //	console.log("receiving tabel data ",results);
    	// cols
    	var cols=[];
        var size='30%';
        if (results.head.vars.length>4) size='20%';
        
    	
     	for (var n in results.head.vars)
    	    {
     	        var col=results.head.vars[n];
     	        if (col!=me.hash)
     	            {
     	            cols.push({field: col, text: col, size: size, sortable: true });
     	            }
     	        
    	    }
     	
     //	console.log("found cols",cols);
     	var data=[];
     	if (me.hash==null)
     	    {
     	        if (me.parameterForListingObjects!=null)
     	            {
     	                 var o=me.getListing(results);
     	                 cols=o[0];
     	                 data=o[1];
     	            }
     	        else
     	            {
     	            		data=me.getNormalResults(results,cols);    
     	            }
     	    	
     	    }
     	else
     	    {
     	 data=me.getHashedResults(results,cols);
     	    }
     	
     	
     	
     	var tgrid={ 
    	        name: me.gridName, 
    	        columns: cols,
    	        records:data,
    	       onSelect: function (event) {
                try
                {
                var record = this.get(event.recid);
              
                var uri = record.uri;
             
                if (uri!=null)
                    {
                    EventManager.generateEvent(me,V2+"hasUriOutput",uri,true);
                    }
                
                }
                catch(e){console.log(e);}
              
            }
    	        
    	    };
     	if (me.header!=null)
     	    {
     	      tgrid.header=me.header;
     	      tgrid.show={header:true}
     	    }
     	
     	if (me.toolbarViz==true)
     	    {
         	    var show=tgrid.show;
         	    if (show==null){show={};}
         	     show.toolbar= true;
         	     show.footer= true;
         	     show.toolbarSave= true;
         	      tgrid.show=show;
    	       }
     
     	
    	
    	  var grid=$().w2grid(tgrid); 
    	  
    	  
    	  this.grid=grid;
    	
    	  w2ui[me.layout].html(me.panel,me.grid);
    	  
    //	console.log("data ready");
    	
    	console.log("table refreshing "+this.grid);
    	this.grid.refresh();
        this.grid.resize();
    	
      }
      catch(error){console.log(error);}
    //  unlock();
  


}


FormWidget.prototype.refreshSparqlResults=function(me)
 {
     console.log("table :refresh sparql results ",me);
    // if (me.firstRefresh==null){me.firstRefresh=false;return;}
   //  console.log(me,me);
     var sparqlexecutor=me.eventManager.behaviours[me.dao[V2+"hasSparqlInput"]];
     var contextQuery= sparqlexecutor.getRewriteQuery(sparqlexecutor.orgSparql,null,null);
  //   console.log(contextQuery);
     MySparql.clearCache();
     
     me.fireEvent("singleSelection",me.latestArg);
     
 }


 FormWidget.prototype.fireEvent=function(eventString,arg)
{
    // pipe this through to the iframe.    
     console.log("fire event table");
     var me=this;
     try
     {
   
    me.latestArg=arg;
     
    // console.log("table ontvangt een event (zou incorrect kunnen zijn) "+eventString,arg);
     if (eventString=="singleSelection")
     {
	 var sparqlexecutor=this.eventManager.behaviours[this.dao[V2+"hasSparqlInput"]];
	  var contextQuery= sparqlexecutor.getRewriteQuery(sparqlexecutor.orgSparql,null,null);
	  var sparql = contextQuery.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	//  console.log(sparql);
	  MySparql.select(sparql,function(results)
		    {
	            
		         me.setSparqlResults(results,sparql);
		    }); 
     }
     }
     catch(error){console.log(error);}
    
}