function popertypanelrenderValueCol(item,ind, col_ind, data)
{
 
    var f=this.columns[1].render;
    this.columns[1].render=null;
    var html =this.getCellHTML(ind,col_ind,null,null);
  
    html="<div"+html.split("><div")[1];
    html=html.replace("</td>","");
    
    var htmlid=item.htmlid;
    
    var info="<span class='w2ui-info  fa fa-info' style='color:grey' onclick='event.stopPropagation();PropertyPanelWidget.infoValueClick(\""+htmlid+"\",\""+item.recid+"\");'></span>";
  //  icons+=icons;
    
    if (! ((data==null) || (data=="")))
	{
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
                        
                            data2=data2.replace("{{htmlid}}",htmlid);
                            
                     
                    }
                     html=html.replace(">"+data+"</div>","><a  href=\""+data2+"\">"+open+"<\a></div>");
	             }
	         else
	             {
			html=html.replace(">"+data+"</div>",">"+data+info+"</div>");
			
	             }
	      }
	
	
	
		
	}
    this.columns[1].render=f;
    return html;
}


function popertypanelrender(item,ind, col_ind, data)
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
    
   // var icons="<span class='w2ui-info "+icon+"'  style='' onclick='event.stopPropagation();TreeWidget2.clickEvent(\""+me.me.htmlid+"\",\""+item.recid+"\");'></span>";
    var icons="<span class='w2ui-info "+icon+"'  style='' onclick='event.stopPropagation();'></span>";
    var icon2 = item.icon2;
    if (icon2!=null)
	{
	    icons="<span class='w2ui-info "+icon2+"' style='color:red' onclick='event.stopPropagation();console.log(\"icon click 2\");'></span>"+icons;
	}
    
    var info="<span class='w2ui-info  fa fa-info' style='color:grey' onclick='event.stopPropagation();PropertyPanelWidget.infoClick(\""+htmlid+"\",\""+item.recid+"\");'></span>";
  //  icons+=icons;
    
    
    html=html.replace(">"+data+"</div>",">"+icons+data+info+"</div>");
    this.columns[0].render=f;
    return html;
}

var PropertyPanelWidget=function(layout,panel,widget,rv)
{



    Widget.nid++;
    this.panel=panel;
    this.dao=widget;
    var me=this;
    this.layout=layout;
    this.htmlid='propertypanelgrid'+Widget.nid;
    
    
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
        name: 'propertypanelgrid'+Widget.nid, 
        header:me.title,
        show: { 
   	 header         : me.titleB
        },
        columns: [                
            { field: 'prop', sortable: true,text: 'Property', size: '50%' ,render:popertypanelrender },
            { field: 'value', text: 'Value', size: '50%',   editable: { type: 'text' } , render:popertypanelrenderValueCol},
        ]
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




PropertyPanelWidget.prototype.reAttach=function()
{
    w2ui[this.layout].html(this.panel,this.grid);
}


PropertyPanelWidget.infoClick=function(gridname,item)
{
  console.log("infoclick");
 var grid=w2ui[gridname];
 //var js=grid.me.dao[V2+"infoClickJS"];

 var record=grid.get(item);
 var naam=record.prop;
 console.log("info click ",record);
 if (record.coins!=null)
     {
       console.log("vraag extra coins informatie op");
       var md =record.modificationDate; if (md==null){md="no modification date found";}
       var cd = record.creationDate;if (cd==null){cd="no creation date found";}
       var c  = record.creator;if (c==null){c="no creator";}
       var m= record.modifier;if (m==null){m="no modifier  found";}
       
     
       
       if (record.beschrijving!=null)
       {
           //showInfo(record.beschrijving);
            var beschrijving = record.beschrijving;
              var pred=record.pred;
              if (pred!=null)
          	{
          	  beschrijving+="<br><br><br>"+pred;
          	}
           showPopup("beschrijving",beschrijving);
       }
       
     
     }
 
 
 else
     {
        
         if (record.beschrijving!=null)
             {
                 showInfo(record.beschrijving);
             var beschrijving = record.beschrijving;
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
                             	showPopup("uri",record.pred);
                             }
                         else
                             {
             				showInfo(message);
                             }
             }
        
     }
}


PropertyPanelWidget.infoValueClick=function(gridname,item)
{
  
 var grid=w2ui[gridname];
 //var js=grid.me.dao[V2+"infoClickJS"];

 var record=grid.get(item);
 var naam=record.prop;
 
 if (record.coins!=null)
     {
     //  console.log("vraag extra coins informatie op");
       var md =record.modificationDate;
       var cd = record.creationDate;
       var c  = record.creator;
       var m= record.modifier;
       var ds = record.propdescription;
  //    console.log(md,cd,c,m,ds);
       
       if (record.beschrijvingValue!=null)
       {
			showInfo(record.beschrijvingValue);
       }
       
       
     
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
             //	if (record.icon=="fa fa-star")    {message=naam+" is een verplicht OTL kenmerk"; }
             //	if (record.icon=="fa fa-star-o")    {message=naam+" is een niet verplicht OTL kenmerk"; }
            // 	if (record.icon=="fa fa-sort-asc")    {message=naam+" is een niet verplicht COINS kenmerk"; }
             	showInfo(message);
             }
     }
}



PropertyPanelWidget.prototype.refresh=function()
{
   var me=this;
 this.grid.resize();    
 this.grid.initResize();
 this.grid.resizeBoxes();
 w2ui[me.layout].html(me.panel,this.grid);
 //window.setTimeout(function(){me.grid.resize()},100);
 
}

PropertyPanelWidget.prototype.setSparqlResults=function(results,sparql,conversion,named)
{
    // deliberatedly empty
    console.log("propertypanel widget set sparql results",results,sparql,conversion,named);
    if (this.dao!=null)
	{
	  var use=this.dao[V2+"useNormalSparqlInput"];
	//  console.log(use,this.dao);
	  if (use!=null)
	      {
	         if (use.toLowerCase()=="true")
	             {
	                this.setSparqlResults2(results,sparql,conversion,named);
	             }
	      }
	}
    
  
 }

PropertyPanelWidget.prototype.setSparqlResults2=function(results,sparql,conversion,named){
 
    var me=this;
    var records=[];
    var isCoins=false;
    try
    {
	
    var b=results.results.bindings;
    var recid=0;
    
    for (var bn in b)
	  {
	  try
	  {
	     var prop = b[bn].property.value;
	     
	     var value="";
	     try{  value = b[bn].value.value; 
	     
	     var v2=escape(value);
	     
	    if (v2.startsWith("%E2%u2030%A5")) 
		{
		    v2=v2.replace("%E2%u2030%A5","");
		    value="&ge;"+unescape(v2);
		}
	     }catch(error){};
	    
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
	     
	     var o={editable: false,modificationDate:modificationDate,creationDate:creationDate,creator:creator,modifier:mod,recid:recid,value:value,icon:icon,prop:prop,pred:pred,propO:propO,uri:uri,htmlid:me.htmlid};
	     
	     try {o.beschrijving = b[bn].beschrijving.value}catch(e){}
	     try {o.beschrijvingValue = b[bn].beschrijvingValue.value}catch(e){}
	     try {o.coins = b[bn].coins.value; isCoins=true;}catch(e){}
	     
	     
	     
	     records.push(o);
	  }
	  catch(error){
	      console.log(error);
	      }
	  }
    
    }
    catch(error){
	console.log(error);
	}
    
    if (isCoins)
	{
	
	  
	  	var coins_records={};
	  	for (var n in records)
	  	    {
	  	       var record =records[n];
	  	       if (record.coins!=null)
	  		   {
                                  var ar=	coins_records[record.coins];
                                  if (ar==null)
                                      {
                                        ar=[];
                                        coins_records[record.coins]=ar;
                                      }
                                  ar.push(record);
	  		   }
	  	       
	  	    }
	  	for (var n in coins_records)
	  	    {
	  	       if (coins_records[n].length>1)
	  		   {
	  		   
	  		  console.log("Found records met dubble coins uris ",coins_records[n]);
	  		     var ar =coins_records[n];
	  		     for (var i in ar)
	  			 {
	  			    var record = ar[i];
	  			    if  (   (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#IntegerProperty") ||  (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#FloatProperty") || (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#UriProperty") ||  (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#DateTimeProperty") || (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#StringProperty") || (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#NumericProperty") || (record.propO=="http://www.coinsweb.nl/cbim-2.0.rdf#BooleanProperty")  )
	  				{
	  				records = records.filter(item => item !== record)
	  				
	  				}
	  			 }
	  		     
	  		   
	  		   }
	  	    }  
	  
	}
    
    

try
{
  w2ui[me.htmlid].records = records;
  w2ui[me.htmlid].total = records.length;
  w2ui[me.htmlid].refresh();
  this.reAttach();
}
catch(error){console.log(error);}

}  
    

PropertyPanelWidget.prototype.fireEvent=function(eventString,arg)
{
   // pipe this through to the iframe.    
 //   console.log("fire event for property panel ",eventString);
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
	             // console.log("kenmerk resultaten",sparql);
	              unlock("propertypanel");
		         me.setSparqlResults2(results,sparql);
		        
		    }); 
	
	
	
    }
    }
    catch(error){console.log(error);}
    
    
}

    




