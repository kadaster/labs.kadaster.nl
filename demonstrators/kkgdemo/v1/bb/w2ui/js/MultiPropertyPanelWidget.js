function multipopertypanelrenderValueCol(item,ind, col_ind, data)
{
    //if (item.prop=="loaded"){}
    //console.log(item.htmlid);

    
   
    var f=this.columns[1].render;
    this.columns[1].render=null;
    var html =this.getCellHTML(ind,col_ind,null,null);
 
    html="<div"+html.split("><div")[1];
    html=html.replace("</td>","");
    
    var htmlid=item.htmlid;
   
    var info="<span class='w2ui-info  fa fa-info' style='color:grey' onclick='event.stopPropagation();MultiPropertyPanelWidget.infoValueClick(\""+htmlid+"\",\""+item.recid+"\");'></span>";
    if (item.beschrijvingValue==null) {info="";}

    
    if (! ((data==null) || (data=="")))
	{
	//  if ( (data.startsWith("https://")) || (data.startsWith("http://")) )
	//console.log(data);
	
	if ( (data.includes("relatics")) )
	      {
	    
		          html=html.replace(">"+data+"</div>","><a  target=\"_blank\" href=\""+data+"\"> "+data+"<\a></div>");
	      }
	  else
	      {
	         if  (data.startsWith("javascript:"))
	             {
                    var open="open";
                    var data2=data;
                    if (data.includes(";"))
                    {
                        data2=data.split(";")[0]+data.split(";")[2];
                        open  = data.split(";")[1];
                       
                    }
                    data2=data2.replace("{{htmlid}}",htmlid);
                      data2=data2.replace("{htmlid}","");
                                   
                    data2=data2.replace("javascript:","javascript:parent.");

                    //console.log(data2);
                    
	                 html=html.replace(">"+data+"</div>","><a  href=\""+data2+"\">"+open+"<\a></div>");
	             }
	         else
	             {
                    if (data.startsWith("//file/"))
                    {
                        var dInfo = data.split("/");
                        dInfo=dInfo[dInfo.length-1];
                        //data=data.replace("\"","\\\"");
                     //   data=data.split("#")[0];
                        let extra ="";
                        try {extra=data.split("#")[1];}catch(e){}
                        if (extra==null)extra="";
                       
                        var data2=encodeURIComponent(data);
                          html=html.replace(">"+data+"</div>","><a href=\"javascript:MyCommand.downloadFile('"+data2+"','"+extra+"');\">"+dInfo+info+"</a></div>"); 
                    }
                    else
                    {
	       
        	             if (item.w2ui=="notimplemented")
        	        	 {
        	       
        	        	  html=html.replace(">"+data+"</div>","><a href=\"javascript:propPanelSelectUri('"+item.w2ui.uri+"');\">"+data+info+"</a></div>"); 
        	        	  
        	        	 }
        	             else
        	        	 {
                          //  console.log(data,info);
        	        	       html=html.replace(">"+data+"</div>",">"+data+info+"</div>"); 
        	        	 }
                     }
        			
	             }
	      }
	}
   
    this.columns[1].render=f;
    return html;
}

function propPanelSelectUri(uri)
{
  //console.log("highlightUri(\""+uri+"\");");
  if (uri!=null)
      {
      	EventManager.generateEvent(me,V2+"hasUriOutput",uri);
      }
  
}




function multipopertypanelrender(item,ind, col_ind, data)
{
 
    var f=this.columns[0].render;
    this.columns[0].render=null;
    var html =this.getCellHTML(ind,col_ind,null,null);
  
    html="<div"+html.split("><div")[1];
    html=html.replace("</td>","");
    
    var icon=item.icon;
  //  console.log(item);
  //  if (icon==null){icon="fa fa-star-o";}
    if (icon==null){icon="fa fa-star";}
  //  console.log(item);
    var htmlid=item.htmlid;
    var iconColor="";
    if (item.iconColor!=null)
    {
        iconColor="style='color:"+item.iconColor+"'";
    }
    var iconColor2="";
    if (item.iconColor2!=null)
    {
        iconColor="style='color:"+item.iconColor2+"'";
    }
   // var icons="<span class='w2ui-info "+icon+"'  style='' onclick='event.stopPropagation();TreeWidget2.clickEvent(\""+me.me.htmlid+"\",\""+item.recid+"\");'></span>";
    var icons="<span class='w2ui-info "+icon+"'  "+iconColor+" onclick='event.stopPropagation();'></span>";

    var icon2 = item.icon2;
    if (icon2!=null)
	{
	
	 icons="<span class='w2ui-info "+icon2+"' style='color:red' onclick='event.stopPropagation();console.log(\"icon click 2\");'></span>"+icons;
	}
    
    var info="<span class='w2ui-info  fa fa-info' style='color:grey' onclick='event.stopPropagation();MultiPropertyPanelWidget.infoClick(\""+htmlid+"\",\""+item.recid+"\");'></span>";
  //  icons+=icons;
  if  ( (item.beschrijving==null) && (item.pred==null) ) {info="";}
    
    
    html=html.replace(">"+data+"</div>",">"+icons+data+info+"</div>");
    this.columns[0].render=f;
    return html;
}

var MultiPropertyPanelWidget=function(layout,panel,widget,rv)
{
    Widget.nid++;
    this.recid=0;
    this.panel=panel;
    this.dao=widget;
    var me=this;
    
    this.layout=layout;
    this.htmlid='multipropertypanelgrid'+Widget.nid;
    if (document.widgets==null){document.widgets={};}
    document.widgets[this.htmlid]=this;
    
    
    this.title="";
    this.titleB=false;
   // console.log(this);
    try
    {
	this.hasValueAbbr=this.dao[V2+"hasValueAbbreviation"];
	if (!Array.isArray(this.hasValueAbbr)){this.hasValueAbbr=[this.hasValueAbbr];}
	//console.log(this.hasValueAbbr);
    }
    catch(error){};
    try
    {
    
	if (this.dao[V2+"title"]!=null)
	{
	  this.title = this.dao[V2+"title"];
	  this.titleB=true;
	}
    }catch(error){}
    
    
    
    this.grid=$().w2grid({ 
        name: 'multipropertypanelgrid'+Widget.nid, 
        header:me.title,
        show: { 
   	            header         : me.titleB,
                    recordTitles: true
        },
        columns: [                
            { tooltip:"property name",title:MultiPropertyPanelWidget.propertyTitleFunction,field: 'prop', sortable: true,text: 'Property', size: '50%' ,render:multipopertypanelrender },
            { ooltip:"property value",title:MultiPropertyPanelWidget.propertyTitleFunction,field: 'value', text: 'Value', size: '50%',   editable: { type: 'text' } , render:multipopertypanelrenderValueCol},
        ]

    });  
   
   
   
    //    console.log("editable property panel ")
        this.grid.on("change",function(event)
        {
            var iface = getIface();
            if ( (iface!=null) && (!iface.me.props["editable"]==true) )
            {
                console.log("not editable");
                event.preventDefault();
                return;
            }
            if (event.column!=1)
            {
                alert("cannot change items in this column");
                console.log("can not change items in this column");
                event.preventDefault();
                return;
            }
            var item=me.grid.get(event.recid);
            if (item==null) { 
                alert("cannot change item: No item found ");
                 event.preventDefault(); return;
                }
            if  ((item.pred!=null ) && (item.graph!=null) && (item.uri!=null) && (item.datatype!=null) )
            {
               
            //    console.log("should be able to update this value",item);
                var value = event.value_new;
                var tested=false;
                var ok=true;
                if ((item.datatype=="http://www.w3.org/2001/XMLSchema#decimal")  ||(item.datatype=="http://www.w3.org/2001/XMLSchema#float") )
                {
                    tested=true;
                    ok=w2utils.isFloat(value);
                }
                if  ( (item.datatype=="http://www.w3.org/2001/XMLSchema#int") || (item.datatype=="http://www.w3.org/2001/XMLSchema#integer") )
                {
                    tested=true;
                    ok=w2utils.isInt(value);
                }
                if  ( (item.datatype=="http://www.w3.org/2001/XMLSchema#date") || (item.datatype=="http://www.w3.org/2001/XMLSchema#date") )                {
                    tested=true;
                    ok=w2utils.isDate(value);
                }
                if  ( (item.datatype=="http://www.w3.org/2001/XMLSchema#dateTime") || (item.datatype=="http://www.w3.org/2001/XMLSchema#dateTime") )                {
                    tested=true;
                    ok=w2utils.isDateTime(value);
                }
                if  ( (item.datatype=="http://www.w3.org/2001/XMLSchema#time") || (item.datatype=="http://www.w3.org/2001/XMLSchema#time") )                {
                    tested=true;
                    ok=w2utils.isTime(value);
                }
                if  ( (item.datatype=="http://www.w3.org/2001/XMLSchema#boolean") || (item.datatype=="http://www.w3.org/2001/XMLSchema#boolean") )
                    {
                       tested=true;
                       if (value==null) {ok=false}
                       else
                       {
                           value=value.toLowerCase().trim();
                           if ((value==='true') || (value==='false') ) {ok=true;} else{ok=false;}
                       }
                }
                if ((tested) && (!ok) )
                {
                   alert("new value is not ok: does not match datatype");
                   event.preventDefault();
                   return;
                }
                // sending it to form command.
                    var o={graph:item.graph,propuri:item.pred,uri:item.uri,value:value,valuetype:item.datatype}
                var results={results:[o]}
                
                if (iface.me.props.ruleTagAfterSubmit!=null)
                {
                   results.ruleTagAfterSubmit=iface.me.props.ruleTagAfterSubmit;
                   var parameters = iface.me.props.parameters;
                   
                  if (parameters !=null)
                  {
                      parameters=iface.me.publishUtils.processStringForParameters(iface.me,parameters);
                      var pa=JSON.parse(parameters);
                      results.ruleTagAfterSubmitParameters=pa;
                  }
                   
                }
            
                  iface.me.props.setLoading(true);
                //console.log("sending command",results);
                iface.me.command.sendCommand(iface.me,"formCommand",results,function(e){
                   // console.log("success",e);

                    iface.me.publishUtils.setTimeStampParameter(iface.me,true);
                    iface.me.props.setLoading(false);
                
                },function(err){
                    iface.me.props.setLoading(false);
                    alert("general error: cannot process the change");
                    event.preventDefault(); return;
                });
                
            }
            else
            {
                alert("cannot change item:  not enough information ");
                event.preventDefault(); return;
            }

            
        });
    
    
    this.grid.on("select",function(event)
        {
       //  console.log("select event ",event);
         var item=me.grid.get(event.recid);
            if (item==null) return;
      //     console.log(item);
           if ( (item.w2ui!=null) && (item.value!=null) )
           {
               // EventManager.generateEvent(me,V2+"hasUriHighlightOutput",item.uri);
               if (item.w2ui.uri!=null)
               {
                    EventManager.generateEvent(me,V2+"hasUriOutput",item.w2ui.uri);
                }
           }
         
        }
    )
    this.grid.on('expand', function (event)
    {
   
	var item=me.grid.get(event.recid);
   // console.log("expand function",item);
	if (item==null) return;
     
	if (item.w2ui==null) return;
     
	if (item.w2ui.load==true)return;
    item.w2ui.load=false;
    
     // console.log("expand function 5",item.w2ui.load);
	if ((item.w2ui.loaded==false) )
    
	    {
            me.grid.lock('', true);
            
             item.w2ui.load=true;
    
            var uriItem=item.w2ui.children[0];
            delete uriItem.value;
            
	   //    console.log(" loading ",uriItem);
	       delete item.w2ui.loaded; 
	     
	       var sparqlexecutor=me.eventManager.behaviours[me.dao[V2+"hasSparqlInput"]];
	       
	       var orgSparql=sparqlexecutor.orgSparql;
	       
	       var arg = item.w2ui.uri;
         
	       var sparql = orgSparql.replace("${uri}",arg);
		  sparql = sparql.replace("${uri}",arg);
		  sparql = sparql.replace("${uri}",arg);
		  sparql = sparql.replace("${uri}",arg);
		  sparql = sparql.replace("${uri}",arg);
		  sparql = sparql.replace("${uri}",arg);
       
		  
		  sparql = sparql.replace("{{uri}}",arg);
		  sparql = sparql.replace("{{uri}}",arg);
		  sparql = sparql.replace("{{uri}}",arg);
		  sparql = sparql.replace("{{uri}}",arg);
		  sparql = sparql.replace("{{uri}}",arg);

		  if (me.childParameterText!=null)
     {
         
         sparql = sparql.replace(me.childParameterText,arg);
         sparql = sparql.replace(me.childParameterText,arg);
         sparql = sparql.replace(me.childParameterText,arg);
         sparql = sparql.replace(me.childParameterText,arg);
         sparql = sparql.replace(me.childParameterText,arg);
         sparql = sparql.replace(me.childParameterText,arg);
     }

		  
	  
    
	       
	        sparql= sparqlexecutor.getRewriteQuery(sparql,null,null);
          
	       if (sparql==null) return;

          
			
	    //   var sparql="select * where {<"+item.w2ui.uri+"> ?prop ?value. ?prop rdfs:label ?property. bind (ISLiteral(?value) as ?literal)} ";
	       
	        //setTimeout(function()
               // console.log(sparql);
                  getIface().setLoading(true);
                 
                getIface().me.executeSparql(sparql,function(data){
	       //MySparql.select(sparql,function(data){
		   
		    item.w2ui.children=[];
		 
		    item.w2ui.children=me.setSparqlResults2(data,sparql,null,null,[]);
		   // me.grid.add(item);
		
		    delete item.loaded;
		    delete item.loaded;
            
           
		
		    me.grid.refresh();
		    try {me.grid.toggle(item.recid); }catch(e){}
		    try {me.grid.toggle(item.recid); } catch(e){}
            try {
             if ( item.w2ui.children.length>1)
            {
                me.grid.remove(uriItem.recid);
             }
            } catch(ee){}
               me.grid.refresh();
            try {me.grid.toggle(item.recid); }catch(e){}
            try {me.grid.toggle(item.recid); } catch(e){}
             
            
            me.grid.unlock();       
              me.grid.refresh();
              getIface().setLoading(false);
		        
		        });
               // },10);
	       
	     
	       
	    }
        
          // console.log("expand function end");
	return true;
	
    });
    
  
    w2ui[layout].html(panel,this.grid);
 //   console.log("connect property panel widget ",me);
    this.dao.connect(me,function(){
	if (rv!=null)
	    {
        rv.call(this);
	    }
	 
    }); // set connections
}


MultiPropertyPanelWidget.propertyTitleFunction=function(record, ind, col_ind)
{
     
      if (record.beschrijving!=null) return record.beschrijving;
    
    return 'geen info gevonden'
}

MultiPropertyPanelWidget.valueTitleFunction=function(record, ind, col_ind){
    console.log(record);
    if (record.beschrijvingValue!=null) return record.beschrijvingValue;
    
    return 'geen info gevonden';
}




MultiPropertyPanelWidget.prototype.reAttach=function()
{
    w2ui[this.layout].html(this.panel,this.grid);
}


MultiPropertyPanelWidget.infoClick=function(gridname,item)
{
  
 var grid=w2ui[gridname];
 //var js=grid.me.dao[V2+"infoClickJS"];

 var record=grid.get(item);
 var naam=record.prop;

 if (record.coins!=null)
     {
      // console.log("vraag extra coins informatie op");
       var md =record.modificationDate;
       var cd = record.creationDate;
       var c  = record.creator;
       var m= record.modifier;
       var ds = record.propdescription;
    
       
     
     }
 
 
 else
     {

     if (record.beschrijving!=null)
         {
 			
            	 var beschrijving = record.beschrijving;
                 console.log(beschrijving);
                     var pred=record.pred;
                     if (pred!=null)
                 	{
                 	  beschrijving+="<br><br><br>"+pred;
                 	}
                  showPopup("beschrijving",beschrijving);
         }
     else
	 {
         	var message="geen extra informatie voor "+naam;
         	
         	  var pred=record.pred;
                  if (pred!=null)
              	{
                      showPopup("uri",pred);
              	}
                  else
                      {
                      showInfo(message);
                      }
             
               
         	//if (record.icon=="fa fa-star")    {message=naam+" is een verplicht OTL kenmerk"; }
         	//if (record.icon=="fa fa-star-o")    {message=naam+" is een niet verplicht OTL kenmerk"; }
         	//if (record.icon=="fa fa-sort-asc")    {message=naam+" is een niet verplicht COINS kenmerk"; }
         	
	 }
     }
}


MultiPropertyPanelWidget.infoValueClick=function(gridname,item)
{
    

  try
  {
 var grid=w2ui[gridname];
 //var js=grid.me.dao[V2+"infoClickJS"];

 var record=grid.get(item);
 var naam=record.prop;
 //console.log("multi info click ",record);
 if (record.coins!=null)
     {
     
       var md =record.modificationDate;
       var cd = record.creationDate;
       var c  = record.creator;
       var m= record.modifier;
       var ds = record.propdescription;
  //    console.log(md,cd,c,m,ds);
       
     
     }
 
 
 else
     {

     if (record.beschrijvingValue!=null)
         {
 			showInfo(record.beschrijvingValue);
         }
     else
	 {
         var message="geen extra informatie voor "+naam;
      //   if (record.icon=="fa fa-star")    {message=naam+" is een verplicht kenmerk"; }
      //   if (record.icon=="fa fa-star-o")    {message=naam+" is een niet verplicht kenmerk"; }
      //   if (record.icon=="fa fa-sort-asc")    {message=naam+" is een niet verplicht COINS kenmerk"; }
        showInfo(message);
	 }
     }
}
  catch(e){}
}

  



MultiPropertyPanelWidget.prototype.refresh=function()
{
   var me=this;
 this.grid.resize();    
 this.grid.initResize();
 this.grid.resizeBoxes();
 w2ui[me.layout].html(me.panel,this.grid);
 //window.setTimeout(function(){me.grid.resize()},100);

 
 
}

MultiPropertyPanelWidget.prototype.setSparqlResults=function(results,sparql,conversion,named)
{
    // deliberatedly empty
    //console.log("multi propertypanel widget",results,sparql,conversion,named,this.dao);
    if (this.dao!=null)
	{
	  var use=this.dao[V2+"useNormalSparqlInput"];
	//  console.log(use,this.dao);
	  use="true";
	  if (use!=null)
	      {
	         if (use.toLowerCase()=="true")
	             {
	                this.setSparqlResults2(results,sparql,conversion,named);
	             }
	      }
	}
  
 }

MultiPropertyPanelWidget.prototype.setSparqlResults2=function(results,sparql,conversion,named,itemRecords)
{
    var me=this;
    if (results==null) {return;}
    if (results.results==null) {return;}
    
    var records=[];
    if (itemRecords!=null)
	{
	  records=itemRecords;
	}
    
 
    try
    {
    var b=results.results.bindings;
    var recid=me.recid;
    for (var bn in b)
	  {
	  try
	  {
	     var prop = b[bn].property.value;
	     
	     var value="";
	     try{  value = b[bn].value.value; 
         
         var valueType ="";
         try{  valueType = b[bn].value.type;}catch(error){};
	     
	     var v2=escape(value);
	     
	    if (v2.startsWith("%E2%u2030%A5")) 
		{
		    v2=v2.replace("%E2%u2030%A5","");
		    value="&ge;"+unescape(v2);
		}
	     }catch(error){};
	     
	     var literal="true";
	     try {literal=b[bn].literal.value;} catch(e){}
	    
	   // if (escape(value).startsWith("%E2%u2030%A5")) {value="≥"+unescape(escape(value).replace("%E2%u2030%A5",""));}
	   
	     if (me.hasValueAbbr!=null)
		 {
		   for (var n in me.hasValueAbbr)
		       {
		            var vabbr= me.hasValueAbbr[n];
		            value=value.replace(vabbr,"");
		       }
		 }
	     
	   	//  prop=prop+"µ";
	   	  //prop=prop.replace("\u00b5","micro");
	     prop=prop.replace("\u00C2",""); // A dakje fix
	  
	     
	     recid++;
	     var icon="fa fa-star";
	     try {icon = b[bn].icon.value}catch(e){}
         
         var iconColor=null;
         try {iconColor = b[bn].iconColor.value}catch(e){}
          var iconColor2=null;
         try {iconColor2 = b[bn].iconColor2.value}catch(e){}
         
         
	     var uri="";
	     try {uri = b[bn].uri.value}catch(e){}
         
         
       
         
	     
	     var propO="";
	     try {propO = b[bn].propO.value}catch(e){}
	     var pred="";
	     try {pred = b[bn].pred.value}catch(e){}
	     var mod="";
	     try {mod = b[bn].modifer.value}catch(e){}
	     var creator="";
	     try {creator = b[bn].creator.value}catch(e){}
	     var creationDate="";
	     try {creationDate = b[bn].creationDate.value}catch(e){}
	     var modificationDate="";
	     try {modificationDate = b[bn].modificationDate.value}catch(e){}
	     
	     var o={editable: false,modificationDate:modificationDate,creationDate:creationDate,creator:creator,modifier:mod,recid:recid,value:value,valueType:valueType,icon:icon,iconColor:iconColor,iconColor2:iconColor2,prop:prop,pred:pred,propO:propO,uri:uri,htmlid:me.htmlid};
	     records.push(o);
	     try {o.beschrijving = b[bn].beschrijving.value}catch(e){}
	     try {o.beschrijvingValue = b[bn].beschrijvingValue.value}catch(e){}
         // editable
         try {o.uri = b[bn].uri.value}catch(e){}
         try {o.datatype = b[bn].datatype.value}catch(e){}
         try {o.graph = b[bn].graph.value}catch(e){}
	     
	     if (literal!="true")
		 {
		  recid++;
		  if (o.value.split("#").length==2){o.value=o.value.split("#")[1];}
		 //  o.w2ui=  {loaded:false, uri:value,children: [{recid:recid,prop:"loaded",value:false}] };

           o.w2ui=  {loaded:false, uri:value,children: [{recid:recid,prop:"uri",value:o.value}] };
           o.value="...";
          
		 }
	  }
	  catch(error){
	      //console.log(error);
	      }
	  }
    
    }
    catch(error){console.log(error);}

try
{
 if (itemRecords!=null)
     {
      //  var r=w2ui[me.htmlid].records;
     //    this.grid.clear();
      //   w2ui[me.htmlid].records=r;
         
     }
 else
     {
     	w2ui[me.htmlid].records = records;
     	w2ui[me.htmlid].total = records.length;
     	  w2ui[me.htmlid].refresh();
     	
     	  this.reAttach();
     }
 
 me.recid=recid;
  return records;
}
catch(error){console.log(error);}

}  
    

MultiPropertyPanelWidget.prototype.fireEvent=function(eventString,arg)
{
   // pipe this through to the iframe.    
   // console.log("fire event for multi property panel ",eventString,arg);
    var me=this;
    try
    {
    //console.log("Iframe ontvangt een event (zou incorrect kunnen zijn) "+eventString,arg);
    if (eventString=="singleSelection")
    {
	
	//console.log("select properties for "+arg);
	if (me.current==arg) {return}
	me.current=arg;
	try{
	    w2ui[me.htmlid].records = [];
	    w2ui[me.htmlid].refresh();
	    me.updateMe();
	 
	}
	catch(e){}
	 
	
	
	lock("propertypanel");
	
	  var sparqlexecutor=this.eventManager.behaviours[this.dao[V2+"hasSparqlInput"]];
	  //  console.log(sparqlexecutor);
	  var contextQuery= sparqlexecutor.getRewriteQuery(sparqlexecutor.orgSparql,null,null);
	  var sparql = contextQuery.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);

	  if (this.childParameterText!=null)
     {
         console.log("replacing based upon childParameter index ")
         sparql = sparql.replace(this.childParameterText,arg);
         sparql = sparql.replace(this.childParameterText,arg);
         sparql = sparql.replace(this.childParameterText,arg);
         sparql = sparql.replace(this.childParameterText,arg);
         sparql = sparql.replace(this.childParameterText,arg);
         sparql = sparql.replace(this.childParameterText,arg);
	 }
	 
	//  console.log(sparql);
	  MySparql.select(sparql,function(results)
		    {
	             // console.log("kenmerk resultaten",sparql);
	              unlock("propertypanel");
		         me.setSparqlResults2(results,sparql);
		        
		    }); 
	
	
	
    }
    }
    catch(error){console.log(error);}
    
    
}

    




