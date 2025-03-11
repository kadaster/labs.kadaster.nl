

var TableWidget=function(layout,panel,widget,rv,perspective)
{
   
   
    Widget.nid++;
    var me=this;
    this.dao=widget;
    this.toolbarViz=false;
    this.rv=rv;
    this.recordHeight=32;
    
    this.htmlid='tableWidget'+Widget.nid;
    this.gridName='tableWidget'+Widget.nid;
    
    this.header=null;
    if (this.dao[V2+"title"]!=null) { this.header=this.dao[V2+"title"];}
    var gridDef={ 
        name: me.gridName, 
        columns: [                
            { field: 'prop', text: 'x', info:'hallo',  size: '60%' },
            { field: 'lname', text: 'y', info:'hallo',size: '40%' },
        ]
	}
       
    
    
    if (this.header!=null)
	{
          gridDef.header=me.header;
          gridDef.show={header:false}
	}
    
    var grid=$().w2grid(gridDef);  
    
    this.grid=grid;
    this.layout=layout;
    this.panel=panel;
  

    
    w2ui[layout].html(panel,grid);
    
   
    
    w2ui[me.gridName].buttons.reload.onClick=function(event){me.refreshSparqlResults(me);};
   me.hash=this.dao[V2+"hashproperty"];
    me.parameterForListingObjects=this.dao[V2+"parameterForListingObjects"];
    
 
    
    
  //  console.log(this.dao,me.hash);
}


TableWidget.prototype.refresh=function()
{
   // console.log("table refresh");
      if (this.grid!=null)
	  {
	     this.grid.refresh();
	    //   this.grid.resize();
	  }
}



TableWidget.prototype.getListing=function(results)    {
    
    var ro=[]; // cols and data
    var recid=0;
	var data=[];
	var cols=[];
	var hash={};
	var colHash={};
	 var me=this;
	 let size='125px';
	 var replaceJSON=getIface().me.props["replaceHeaderJSON"];
	 if (replaceJSON==null) replaceJSON={};
    try
    	{
	    	for (var n in results.results.bindings)
	    	    {
	    	    	
	    	    	var o =results.results.bindings[n];
	    	    	var id=o[me.parameterForListingObjects].value;
	    	
	    	    	var oo=hash[id];
	    	    	if (oo==null)
	    	    	    {
	    	    	    	recid++;
	    	    	    	var oo={recid:recid,uri:id};
	    	    	    	hash[id]=oo;
	    	    	    	data.push(oo);
	    	    	    }
	    	    	try
	    	    	{
	    	    	         if (colHash[o.prop.value]==null)
	    	    	             {
									var text = o.prop.value;
									if (replaceJSON[o.prop.value]!=null) text=replaceJSON[o.prop.value];
	    	    	             	cols.push({field: o.prop.value, text: text, size: size,sortable: true  });
	    	    	             	colHash[o.prop.value]="gevonden";
	    	    	             }
	    	    	    	oo[o.prop.value]=o.value.value;
	    	    		
	    	        }catch(error){}
	    	    }
	}
	catch(e){console.log(e);}



	


return [cols,data];
}




TableWidget.prototype.getHashedResults=function(results,cols)    {
    var recid=0;
	var data=[];
	var hash={};
	 var me=this;
try
	{
	    	for (var n in results.results.bindings)
	    	    {
	    	    	
	    	    	var o =results.results.bindings[n];
	    	    	var id=o[me.hash].value;
	    	
	    	    	var oo=hash[id];
	    	    	if (oo==null)
	    	    	    {
	    	    	    	recid++;
	    	    	    	var oo={recid:recid,uri:id};
	    	    	    	hash[id]=oo;
	    	    	data.push(oo);
	    	    	    }
	    	    	
	    	    	for (var i in cols)
	    	    	    {
	    	    		try{ 
	    	    		    var value=o[cols[i].field].value;
	    	    		//if ((oo[cols[i].field]=="-") || (oo[cols[i].field]==null))
	    	    			{
	    	    				oo[cols[i].field]=value;
	    	    			}
	    	    		    }catch(error){}
	    	             
	    	    	    }
	    	    	
	    	   
	    	    		
	    	    }
	}
	catch(e){console.log(e);}
return data;
}

TableWidget.prototype.getNormalResults=function(results,cols)    
{
	var uselocalnumberformat=getIface().me.props["uselocalnumberformat"];
	if (uselocalnumberformat==true)
	{
	
		return this.getNormalResultsF(results,cols);
	}
	else
	{
       return this.getNormalResultsS(results,cols);
	}
}
TableWidget.prototype.getNormalResultsF=function(results,cols)    
{
    let recid=0;
	let data=[];
	const regex = /^-?\d*\.?\,?\d*E?-?\+?\d*$/;
	
try
	{
	    	for (let n in results.results.bindings)
	    	    {
	    	    	recid++
	    	    	let o =results.results.bindings[n];
	    	    	let oo={recid:recid};
					let uri="";
					try {oo.uri=o.uri.value;}catch(e){}
	    	    	for (let i in cols)
	    	    	    {
	    	    		try{ 
	    	    		    var value=o[cols[i].field].value;
							if ((value!=null) && (value.match(regex)!=null))
							{
							//	try {value=value.replace(".",","); }catch(ee){}
							}
							oo[cols[i].field]=value;
							 try {oo[cols[i].field+"Fix"]=o[cols[i].field+"Fix"].value;}catch(e){}
						    }catch(error){oo[cols[i].field]="";}
	    	             
	    	    	    }
						try{
							if (o.background!=null) 
							{
								oo.w2ui={ style: "background-color: "+o.background.value } ;
							}
						}catch(e){}
	    	    	data.push(oo);
	    	   
	    	    		
	    	    }
	}
	catch(e){console.log(e);}



return data;
}

TableWidget.prototype.getNormalResultsS=function(results,cols)    
{
    let recid=0;
	let data=[];
	
try
	{
	    	for (let n in results.results.bindings)
	    	    {
	    	    	recid++
	    	    	let o =results.results.bindings[n];
	    	    	let oo={recid:recid};
					let uri="";
					try {oo.uri=o.uri.value;}catch(e){}
	    	    	for (let i in cols)
	    	    	    {
	    	    		try{ 
	    	    		    oo[cols[i].field]=o[cols[i].field].value;
							
							
	    	    		    }catch(error){oo[cols[i].field]="";}
	    	             
	    	    	    }
						try{
							if (o.background!=null) 
							{
								oo.w2ui={ style: "background-color: "+o.background.value } ;
							}
						}catch(e){}
	    	    	data.push(oo);
	    	   
	    	    		
	    	    }
	}
	catch(e){console.log(e);}



return data;
}

function publish(uri)
{
	//console.log("we should publish variable ",uri);
	if ((uri!=null) && (uri.length>1))
	{
		EventManager.generateEvent(tree,V2+"hasUriOutput",uri,true);
	}

}


function myRenderFunction(record,z)
{  
	
		 var col=z.self.columns[z.colIndex].field;
		 if  ( (record[col+"URI"]!=null) && (record[col+"URI"]!=""))
			return `<a href="javascript:publish('${record[col+"URI"]}')" title="${record[col]}"><u class="tableInternalLink">${record[col]}</u></a>`

		if  ( (record[col+"URL"]!=null) &&(record[col+"URL"]!="")) 
			return `<a href="${record[col+"URL"]}" target="_blank" title="${record[col]}"><u class="tableHyperlink">${record[col]}</u></a>`;
		
		if  ( (record[col+"Fix"]!=null) &&(record[col+"Fix"]!="")) 
		{
		 //   console.log(record)	;
			try
			{
            	var fix  = record[col+"Fix"];
				
				const regex = /^-?\d*\.?\,?\d*E?-?\+?\d*$/;
				var value = record[col];
			
				if (value.match(regex))
				{
					try {value=parseFloat(value).toFixed(fix);
					value=value.replace(".",","); //NL local
					}
					catch(e){}
				}

				return `<div class="w2ui-grid-data" title="${value}">${value}</div>`;
			}
			catch(e){}
		}

			return `<div class="w2ui-grid-data" title="${record[col]}">${record[col]}</div>`;

}

TableWidget.prototype.downloadEventXLSX= async function()
{
	w2popup.open({
		title   : 'downloading csv file',
		body    : 'processing',
		
	});
	
	var dar=[];
	var ar=[];
	var excelheadertest=getIface().me.props["excelheadertext"];
	if ((excelheadertest!=null) && (excelheadertest.length>0))
	{
		
		excelheadertest=getIface().me.resolveParameterValue(excelheadertest);
		var header=[excelheadertest];
		
		dar.push(header);
	}
	

	dar.push(ar);
	for (var headerN in this.grid.columns)
	{
		var header =this.grid.columns[headerN];
		 ar.push(header.text);
	}
   
	const regex = /^-?\d*\.?\,?\d*E?-?\+?\d*$/;
	// data
	for (var r in this.grid.records)
	{
		var ar=[];
		dar.push(ar);
	   var record=this.grid.records[r];
	
	   for (var headerN in this.grid.columns)
	   {
		   var header =this.grid.columns[headerN].field;
		   var value = record[header];
		   if (value==null){value=""}
		   if (value.match(regex))
		   {
			var fix = record[header+"Fix"];
			if (fix==null)fix=2;
		//	fix=2;
			  value=parseFloat(value).toFixed(fix);
			  value=parseFloat(value);
			  if (isNaN(value) ) value="";
		 	  //value=value.replace(".",","); //NL local
		   		
		   }
		   		else
				{
                   //console.log(" not a number match ",value);

				}
			
		   ar.push(value);
	   }
	   
	}


try{
	var summaryFields=getIface().me.props["summaryFields"];
	if (summaryFields!=null) 
		{
			var ar=[];
			dar.push(ar);
			ar=[];
			dar.push(ar);
			ar=["Totaal"];
			for (var n in this.grid.columns)
			{
				if (n==0)continue;
				var col=this.grid.columns[n];
				var value =this.grid.summary[0][col.field];
			
				if (value==null)value="";
				value=value.replace(",",".");
				value=parseFloat(value);
				if (isNaN(value) ) value="";
				ar.push(value);
			}
			
			dar.push(ar);
			

		}
	}
	catch(e)
	{}


   try {
	await getIface().me.exportToSpreadsheet(dar);
   }
   catch(e)
   {
	console.log(e);
	alert("error generating excel")
   }
 
  
}



TableWidget.prototype.downloadEvent=function()
{
   this.downloadEventXLSX();
}
TableWidget.prototype.downloadEventCSV=function()
{
	const separator=";"
	
	//console.log("should create a csv file and download it ",this);
	w2popup.open({
		title   : 'downloading csv file',
		body    : 'processing',
		
	});
	try
	{
		 var file="";
		 var komma="";
		 for (var headerN in this.grid.columns)
		 {
			 var header =this.grid.columns[headerN];
			 file+=komma+header.text;
			 komma=separator;
		 }
		
		 // data
		 for (var r in this.grid.records)
		 {
			file+="\n";
			var record=this.grid.records[r];
			komma="";
			for (var headerN in this.grid.columns)
			{
				var header =this.grid.columns[headerN].field;
				var value = record[header];
				if (value==null){value=""}
				value=value.replace(".",",");
				file+=komma+value;
				komma=separator;
			}
			
		 }
		// console.log(file);

		 var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
  element.setAttribute('download', "export.csv");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);


		 w2popup.close();

		
	}
	catch(e)
	{
		w2popup.close();
		w2alert('Error cannot produce export');

	}
	

}



 TableWidget.prototype.setSparqlResults=function(results,sparql)    {
        // from connection
     // console.log(results,query);
	 
       if (sparql.includes("THIS QUERY"))
	   {
		this.debug=true;
		
	   }
        var me=this;
       // pipe this through to the iframe.
        if (results==null) {return;}
        if (results.results==null) {return;}
        
        this.grid.destroy();

		var replaceJSON =getIface().me.props["replaceHeaderJSON"] ;
		try {replaceJSON=JSON.parse(replaceJSON);} catch(e){}
	//	console.log(replaceJSON);
		if (replaceJSON==null) replaceJSON={};
		this.searchbar=getIface().me.props["searchbar"];
		if (this.searchbar==null)  this.toolbarSearch= false;
		this.downloadbutton=getIface().me.props["downloadbutton"];
		if (this.downloadbutton==null)  this.downloadbutton= false;


		if  ( (this.searchbar==true) || (this.downloadbutton==true)  )  { this.toolbarViz=true; }else {this.toolbarViz=false;}
		
      
      if (sparql==null){
          if (DEBUG){   console.log("geen sparql query voor table gevonden! ",sparql);}
          return;}
      
      try
      {
        var sortable=true;
		var frozen=true;
    	var nodes=[];
    //	console.log("receiving tabel data ",results);
    	// cols
    	var cols=[];
        var size='30%';
        if (results.head.vars.length>4) size='20%';

        var colIndex=0;
    	var col_col={};
     	for (var n in results.head.vars)
    	    {
				var render=null;
     	        var col=results.head.vars[n];
				var type="text";
				var text=col;
				
				
				if (col.endsWith("Check")){text=text.replace("Check","");render= function (record,z) { var x=""; if (z.value=="true"){x="checked";} ;return  '<input type="checkbox" disabled  '+x+'> ' }}

				 if (col=="uri")continue;
				 if (col=="background") continue;
				 if (col.endsWith("Fix")) {
					var o=col_col[col.replace("Fix","")];
					if (o==null)
					{
						col_col[col.replace("Fix","")]=o;
					}
					o.render=myRenderFunction;
					continue;
				}

     	        if (col!=me.hash)
     	            {
						var o=col_col[col];
						if (o==null)
						{
							o={};
							cols.push(o);
							colIndex++;
							col_col[col]=o;
						}
						o.field=col;
						//console.log(o,"'"+text+"'",replaceJSON[text]);
						if (replaceJSON[text]!=null) text=replaceJSON[text];
                       o.text=text;
						o.size=size;
						try {o.size=getIface().me.props.colSizes[colIndex-1];}catch(e){}
						o.sortable=sortable;
						//o.frozen=frozen;
						o.searchable=true;

						o.render = render ?? myRenderFunction;
     	            
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
							//fix columns
							var ncols=[];
							for (var n in cols)
							{
								var col=cols[n];
								if (col.field.endsWith("URI")) {  
									col=col.field.replace("URI",""); 
									if (col_col[col]!=null)
									 {
										col_col[col].render=myRenderFunction
									}
										  continue		
										    }

									
								if (col.field.endsWith("URL"))  { 
									col=col.field.replace("URL",""); 
								
											if (col_col[col]!=null) {col_col[col].render=myRenderFunction}
												
										continue;
										}

										



						        ncols.push(col)  	
							}
							cols=ncols;
						
     	            }
     	    	
     	    }
     	else
     	    {
     	 data=me.getHashedResults(results,cols);
     	    }
     	

            this.addSummary(data,cols);

			const selectType = getIface().me.props.selectType || 'row'

     	var tgrid={
    	        name: me.gridName, 
    	        columns: cols,

    	        records:data,
				selectType: selectType,
				contextMenu: [
					{ id: 1, text: 'Copy', icon: 'fa fa-copy' }
				],
				onContextMenuClick: async (event) => {
					const text = event.owner.copy(null, event)
					try {
						await navigator.clipboard.writeText(text)
					} catch (err) {
						console.error(err)
						alert('Failed to copy text to the clipboard. Please check your browser permissions or try again.')
					}
				},
    	       onSelect: function (event) {
				var grid = this;
				event.onComplete = function () {
					var sel = grid.getSelection();
				//console.log("select event ",sel);
                try
                {
					
                var record = grid.get(sel)[0];
				//console.log("select event 2",record);
                 if (record==null){return;}
                var uri = record.uri;
             //  console.log(uri,V2);
                if (uri!=null)
                    {
                    EventManager.generateEvent(me,V2+"hasUriOutput",uri,true);
                    }
                
                }
                catch(e){console.log(e);}
              
            }}
    	        
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
         	     show.toolbarSearch= this.searchbar;
				 show.toolbarReload= false;
         	     show.toolbarSave= false; //this.downloadbutton;
         	     tgrid.show=show;
				 if (this.downloadbutton)
				 {
				 		tgrid.toolbar= {items:[{ type: 'button', id: 'downloadbutton', text: 'Download', icon: 'fa fa-download'}],onClick: function (target, data) {me.downloadEvent();}}}
					
				}
     
    	  var grid=$().w2grid(tgrid);
    	  grid.recordHeight = this.recordHeight
    	 
    	  this.grid=grid;

		  if (this.debug==true) 
		{
			console.log(me.layout,me.panel,grid);
		}
		
		
    	try {  w2ui[me.layout].html(me.panel,me.grid); }
		catch(e)
		{
			console.log(e);
			console.log(me.layout,me.panel,me.grid)
		}
    	  
    //	console.log("data ready");
    	
    	//console.log("table refreshing "+this.grid);
    	try { me.grid.refresh(); }catch(e){}
        try {me.grid.resize();} catch(e){}
	
      }
      catch(error){console.log(error);}
    //  unlock();
  


}
TableWidget.prototype.getSum=function(data,field)
{
	  var sum=0;
	  var fix=0;
      for (var n in data)
	  {
		try { var value=data[n][field];

                value=value.replace(",",".");
			   sum+=parseFloat(value)} catch(e){}
			   fix = data[n][field+"Fix"];
	  }
     if (fix==null)fix=0;
	 if (sum==NaN) return "-";
	 sum=sum.toFixed(fix);
	 if ((sum=="NaN") || (sum==NaN)) return "-";
	  
	  
	  return sum;
}

TableWidget.prototype.addSummary=function(data,cols)
{
	var uselocalnumberformat=getIface().me.props["uselocalnumberformat"];
	try{
				var summaryFields=getIface().me.props["summaryFields"];
				if (summaryFields==null) return;
				var fields = summaryFields.split(",");
				var label=cols[0].field;
				var summary=  { w2ui: { summary: true },recid: 'S-1'};
				
				summary[label]= '<span style="float: left;">Totaal</span>'  ;
				summary[label]="Totaal";
				for (var n in fields)
				{
						var field = fields[n];
						var sum=this.getSum(data,field);

                         if (uselocalnumberformat)
						 {
							try
							{
                                  sum=sum.replace(".",",");
							}
							catch(ee){}
						 }

						summary[field]=sum;

				}
				// set empty values for non summary fields
				for (var n in cols)
				{
					var col = cols[n].field;
					//console.log(col,summary);
					if (summary[col]==null) summary[col]="";
				}

				data.push(summary);
			}
			catch(e)
			{}
}



 TableWidget.prototype.refreshSparqlResults=function(me)
 {
    // console.log("table :refresh sparql results ",me);
    // if (me.firstRefresh==null){me.firstRefresh=false;return;}
   //  console.log(me,me);
     var sparqlexecutor=me.eventManager.behaviours[me.dao[V2+"hasSparqlInput"]];
     var contextQuery= sparqlexecutor.getRewriteQuery(sparqlexecutor.orgSparql,null,null);
  //   console.log(contextQuery);
     MySparql.clearCache();
     
     me.fireEvent("singleSelection",me.latestArg);
     
 }




TableWidget.prototype.fireEvent=function(eventString,arg)
{
    // pipe this through to the iframe.    
   //  console.log("fire event table ",eventString,arg);
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