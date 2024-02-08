

var TreeWidget2=function(layout,panel,widget,rv)
{

	
    this.recidN=0;
    this.layout=layout;
    this.panel=panel;
    Widget.nid++;
    this.dao=widget;
     this.rv=rv;
    this.htmlid='treewidget2'+Widget.nid;
    var me=this;
   document.tree=this;
    
  
   this.createTree();
  
 
  if (this.dao[V2+"createRoot"]=="true")
      {
        this.createRoot=true;
      }
  else
      {
        this.createRoot=false;
      };
}


TreeWidget2.prototype.expandUpToLevel=function (nodes,clevel)
{
    var me=this;
	if(clevel==null)clevel=0;
   var level=me.dao[V2+"expandLevel"];
if (level!=null)
    {
    for (var n in nodes)
	{
	  var node=nodes[n];
	  try
	  {
	      me.tree.expand(node.recid);
	      try
	      {
		  if (level==2)
		      {
		  		for (var n2 in node.w2ui.children)
		      	{
		     		 me.tree.expand(node.w2ui.children[n2].recid);
		      	}
		      }
	      }
	      catch(error2){}
	    
	  }
	  catch(error){}
	}
    }
}

function searchInputTree(tree,treeID)
{

    w2ui[treeID].me.search(tree.value);
    
}

TreeWidget2.prototype.swapSparql=function(uri)
{
    //menuitems can change the sparql query for filling the tree. this is handled here
    var me=this;
    this.menuState=uri;
    var sparqluri=this.dao[uri];
    var sparqlorg=this.dao[V2+"hasSparqlInput"];
    
  
    if (sparqluri==null)
	{
	 showWarning("no tree content configuration found");
	 return;
	}
    
    var sparqlExecutor =me.eventManager.behaviours[sparqlorg];
   
    var sparqlO=MySparql.getObject(sparqluri,function(arg)
	    {
	                        var sparqlString=arg[V2+"sparqlstring"];
				
				
				if (sparqlExecutor!=null)
				    {
				    if (sparqlString!=null)
					{
					  // sparqlExecutor.orgSparql= sparqlString;
					   sparqlExecutor.execute(sparqlString);
					}
				    }
				
	    });
    
    
    
    
}

TreeWidget2.prototype.isMenuChecked=function(item)
{
    // default 
  //  console.log (item,this.menuState);
    if (this.menuState==null)
    {
	if (item==V2+"hasSparqlInput") {return true;}
	return false;
    }
    if (this.menuState==item)
	{
	   return true;
	}
    
    return false;
    
    
}

TreeWidget2.prototype.createTree=function(nodes)
{
   
    var me =this;
    if (nodes==null){nodes=[];}
    try
    {
    var title ="";
    var header=false;
    if  ( (this.dao[V2+"title"]!=null)  && (this.dao[V2+"title"].length>0) )
	{
        //old code?
        header=true;
	  title = this.dao[V2+"title"];
      tree.topHTML='<div style="background-color: #eee; padding: 10px 5px; border-bottom: 1px solid silver">'+title+'</div>';
	  tree.bottomHTML=tree.topHTML;
	  
	}
    if (this.dao[V2+"icon"]!=null)
	{
	//   console.log("extra icon ");
	   this.extraIcon=this.dao[V2+"icon"];
	}
}catch(error){}




var addButton=false;   var delButton=false;   var editButton=false;
if (this.dao[V2+"addButton"]!=null) { addButton=true;}
if (this.dao[V2+"removeButton"]!=null) { delButton=true;}
if (this.dao[V2+"editButton"]!=null) { editButton=true;}


var treemenuitems=[];
var breakit=false;

var searchBar=false;
var toolbarYN=false;



if (this.dao[V2+"searchBar"]!=null) { searchBar=this.dao[V2+"searchBar"]; toolbarYN=true;}
if (searchBar=="false") searchBar=false;

if (this.dao[V2+"altPresentationName0"]!=null) {toolbarYN=true;var checked=me.isMenuChecked(V2+"hasSparqlInput");treemenuitems.push({ type: 'radio',  id: 'item0',  group: '1', text: this.dao[V2+"altPresentationName0"] , icon: 'fa fa-sitemap', checked: checked }); breakit=true;}
if (this.dao[V2+"altPresentationName1"]!=null) {toolbarYN=true;var checked=me.isMenuChecked(V2+"altQuery1");treemenuitems.push({ type: 'radio',  id: 'item1',  group: '1', text: this.dao[V2+"altPresentationName1"] , icon: 'fa fa-sitemap', checked: checked }); breakit=true;}
if (this.dao[V2+"altPresentationName2"]!=null) {toolbarYN=true;var checked=me.isMenuChecked(V2+"altQuery2");treemenuitems.push({ type: 'radio',  id: 'item2',  group: '1', text: this.dao[V2+"altPresentationName2"] , icon: 'fa fa-sitemap', checked: checked }); breakit=true;}
if (this.dao[V2+"altPresentationName3"]!=null) {toolbarYN=true;var checked=me.isMenuChecked(V2+"altQuery3");treemenuitems.push({ type: 'radio',  id: 'item3',  group: '1', text: this.dao[V2+"altPresentationName3"] , icon: 'fa fa-sitemap', checked: checked }); breakit=true;}

if (breakit) {treemenuitems.push({ type: 'break', id: 'break1' });toolbarYN=true;}

if (searchBar)
{
    toolbarYN=true;
    treemenuitems.push({ type: 'html',  id: 'item5',
        html: function (item) {
            var html =
              '<div style="padding: 3px 10px;">'+
              ' zoek:'+
              '    <input size="20" placeholder="zoek" onchange="searchInputTree(this,\''+me.htmlid+'\')" '+
              '         style="padding: 3px; border-radius: 2px; border: 1px solid silver" value="'+ (item.value || '') +'"/>'+
              '</div>';
            return html;
        }
    });
}


var columnHeaders=false;

if (this.dao[V2+"columnHeaders"]!=null) { columnHeaders=this.dao[V2+"columnHeaders"];}

if (columnHeaders=="false") columnHeaders=false;

var gridO={ 
    name: me.htmlid, 
    header: title,
    show: { 
        header         : header,
        columnHeaders:columnHeaders,
        toolbar: toolbarYN,
        toolbarReload   : false,
        toolbarColumns  : false,
        toolbarSearch   : false,
        toolbarInput :false,
        toolbarAdd: addButton,
        toolbarDelete: delButton,
        toolbarEdit: editButton,
        footer:false
    },
    toolbar: {
        items: treemenuitems,
        onClick: function (target, data) {
            if (target!=null)
            {
               if (data.item.checked){return;}
               if (target=="item0") {me.swapSparql(V2+"hasSparqlInput");}
               if (target=="item1") {me.swapSparql(V2+"altQuery1");}
               if (target=="item2") {me.swapSparql(V2+"altQuery2");}
               if (target=="item3") {me.swapSparql(V2+"altQuery3");}
            }
          
        }
    },
    multiSearch: false,
    columns: [              
     
        { field: 'text',  size: '100%',render:mytreerender } ],
    onExpand: function (event) {me.expanding(event);},
    onSearch:function(event,arg){me.onSearch(event,arg)},
    onRefresh:function(event,arg){me.onSearchEnd(event);},
    records: nodes,
  //  summary:[{recid: "s-1",text:"hallo"}],
    onAdd: function (event) {
       try{eval(me.dao[V2+"addButton"])}catch(error){console.log(error);}
    },
    onEdit: function (event) {
        w2alert('edit');
    },
    onDelete: function (event) {
        console.log('delete has default behavior');
    }
    
    
    
}

this.tree=$().w2grid(gridO);

me.tree.me=me;



w2ui[me.layout].html(me.panel,me.tree); 

}

function infoClick(gridname,recid)
{
   
    var grid=w2ui[gridname];
    var js=grid.me.dao[V2+"infoClickJS"];
  
    var record=grid.get(recid)
   
    var extra="";
    if (record!=null)
    {
    	var uri = record.uri;
    	if (uri!=null)
    	{
    		extra="uri="+uri;
    		  if (js!=null)
    		{
    		   eval(js,uri);
    		   return;
    		}
    	    
    	}
    }
    
	showInfo(extra+"(more info in the console)");
	console.log(record,extra); // on purpose here
}



function mytreerender(item,ind, col_ind, data)
{
	
   
	//var me=document.tree.tree;
var me=this;
    var f= me.columns[0].render;
	me.columns[0].render=null;
    var html =me.getCellHTML(ind,col_ind,null,null);
	
  
    html="<div"+html.split("><div")[1];
    html=html.replace("</td>","");
    
    var icon=item.icon;
  //  console.log(item);
   var achteraan=false;
    if (icon==null){icon="fa fa-map-o";}
    var icons="<span class='w2ui-info "+icon+"'  style='' onclick='event.stopPropagation();TreeWidget2.clickEvent(\""+me.me.htmlid+"\",\""+item.recid+"\");'></span>";
    var icon2 = item.icon2;
    var color="style='color:red'";
    if (item.icon3!=null){color="";achteraan=true;}
    if (icon2!=null) { icons="<span class='w2ui-info "+icon2+" ' "+color+" onclick='event.stopPropagation();console.log(\"icon click 2\");'></span>"+icons;}
    if (item.icon3!=null) { icons="<span class='w2ui-info "+item.icon3+"' "+color+" onclick='event.stopPropagation();console.log(\"icon click 3\");'></span>"+icons;}
    if (item.icon4!=null) { icons="<span class='w2ui-info "+item.icon4+"' "+color+" onclick='event.stopPropagation();console.log(\"icon click 4\");'></span>"+icons;}
    if (item.icon5!=null) { icons="<span class='w2ui-info "+item.icon5+"' "+color+" onclick='event.stopPropagation();console.log(\"icon click 5\");'></span>"+icons;}
    
    
    var info="<span class='w2ui-info  fa fa-info' style='color:grey' onclick='event.stopPropagation();infoClick(\""+me.name+"\",\""+item.recid+"\");'></span>";
  //  icons+=icons;
    try {if (getIface().me.props["noInfoIcon"]===true){  info="";};}catch(e){}

       if (!achteraan)
       {
             html=html.replace(">"+data+"</div>",">"+icons+data+info+"</div>");
             }
             else
             {
                html=html.replace(">"+data+"</div>",">"+info+data+icons+"</div>");
        }
    
   
    me.columns[0].render=f;
    return html;
}


TreeWidget2.prototype.search=function(searchValue)
{
  
    var me=this;
   me.tree.selectNone();
   var selection=[];
   
          for (var n in me.uri_oo)
              {
              var record=me.uri_oo[n];
              var select=false;
              
                 var text=record.text;
                 if (text!=null)
                     {
                        if (text.search(searchValue)!=-1)
                            {
                               select=true;
                             
                            }
                     }
                 text=record.extraText;
                 if (text!=null)
                 {
                    if (text.search(searchValue)!=-1)
                        {
                	   select=true;
                        }
                 }
                 
                 if (select)
                     {
                     me.fireEvent("singleSelection",record.recid);
                     selection.push(record);
                     }
              }
       
        var latest=null;
   for (var n in selection)
       {
          me.tree.select(selection[n].recid);
          latest=selection[n];
          
       }
   if (latest!=null)
       {
	         EventManager.generateEvent(me,V2+"hasUriOutput",latest.uri);
	     //   console.log("teee event text",o);
	    	 EventManager.generateEvent(me,V2+"hasTextOutput",latest.text);
             if (latest.uri2!=null)
             {
                EventManager.generateEvent(me,V2+"hasUri2Output",latest.text);
            }
       }
   
  // console.log("einde selection");
    
    
}

TreeWidget2.prototype.onSearchEnd=function(event,arg)
{
    var me=this;
    if (me.expandAllRequest)
	{
	  me.expandAllRequest=false;
	
	  for (var i = 0; i < this.tree.records.length; i++) {
              var rec = this.tree.records[i];
            //console.log(rec);
	  }
	 }
}



TreeWidget2.prototype.refresh=function()
{
 //console.log("resize Tree",this.tree);

    var me=this;
 this.tree.resize();
 this.tree.focus();
 try{ this.tree.initResize();} catch(error){}
 window.setTimeout(function(){me.tree.resize()},200);
 this.tree.resize();
 
 
}


TreeWidget2.prototype.setSparqlResults=function(results,sparql)
{
    // from connection
   // console.log("tree set sparql results ",results,sparql);
    
   var me=this;
  // if (this.latestSparql==sparql){console.log("not processing sparql results,  TreeWidget ");return;}
   this.latestSparql=sparql;
   
   
   if (results==null){return;}
   if (results.results==null){return;}
  
   try
   {
       for (var n in results.head.vars)
	   {
	      if (results.head.vars[n]=="discipline")
		  {
		
        		  this.disciplineTree(results,sparql);
        		  return;
		  }
	   }
     
   }
   catch(error)
   {
       
   }
   this.normalTree(results,sparql);
   var initialSearch=this.dao[V2+"initialSelectSearch"];
  

   if (initialSearch!=null)
   {
   
       if (this.notFirstTime==null)
       {
           this.notFirstTime=true;
           var me=this;
           if (window.location.origin=="http://localhost:8080")
           {
            showInfo("Localhost version: skipping initial selection tree "+initialSearch);
        }else
        {
           setTimeout(function(){  me.search(initialSearch);},100);
           }
          
          
           //
           
        }
    }

	
    var subscribeVariable =getIface().me.props["subscribeVariable"];
	if (subscribeVariable)
	{
	
		var value=getIface().me.props.pubsub[subscribeVariable];
	//	console.log("subscribeprop value",value);
		if (value)
		{
            setTimeout(function(){
				// console.log("setting initial value for the tree",value);
				me.fireEvent("singleSelection",value)
				},0);;
			
		}
	}
	



}

TreeWidget2.prototype.extraGrouping=function(nodes,prop)
{
  //  console.log("post process tree for extra grouping",nodes);
    //old
    var group_nodes={};
    for (var n in nodes)
	{
	   var node = nodes[n];
	   if (node[prop]!=null)
	       {
	          var ar=group_nodes[node[prop]];
	          if (ar==null){ar=[];group_nodes[node[prop]]=ar;}
	          ar.push(node);
	       }
	}
  
    if (false)
	{
    
    for (var groupname in group_nodes)
	{
	   var ar=group_nodes[groupname];
	   if (ar.length>5)
	       {
	      //  console.log("needs to be grouped ",groupname,ar.length);
	        this.recidN++;
	        var uri="http://www.buildingbits.nl/auto/grouping/group"+this.recidN;
	        groupname=decodeURIComponent(escape(groupname));
	        var group={recid:uri,uri:uri,text:groupname+" collectie ("+ar.length+")",extraText:"groep",w2ui:{children:ar},icon: 'fa fa-compress'};
	        this.uri_oo[uri]=group;
	        nodes.push(group);
	        for (var n in ar)
	            {
	               var i=nodes.indexOf(ar[n]);
	               nodes.splice(i,1);
	               ar[n].parent=group.uri;
	            }
	        
	       }
	
	}
	}
return nodes;
    
    
}
TreeWidget2.prototype.createCollection=function(oo,prop)
{
    var group_nodes={};
    var nodes=oo.w2ui.children;
    for (var n in oo.w2ui.children)
	{
		var node = oo.w2ui.children[n];
		if (node[prop]!=null)
	       {
	          var ar=group_nodes[node[prop]];
	          if (ar==null){ar=[];group_nodes[node[prop]]=ar;}
	          ar.push(node);
	       }
	}
    
    
    for (var groupname in group_nodes)
	{
	   var ar=group_nodes[groupname];
	   if (ar.length>5)
	       {
	      //  console.log("needs to be grouped ",groupname,ar.length);
	        this.recidN++;
	        var uri="http://www.buildingbits.nl/auto/grouping/group"+this.recidN;
	        groupname=decodeURIComponent(escape(groupname));
	        var group={recid:uri,uri:uri,text:groupname+" collectie ("+ar.length+")",extraText:"groep",w2ui:{children:ar},icon: 'fa fa-compress'};
	        this.uri_oo[uri]=group;
	        nodes.push(group);
	        for (var n in ar)
	            {
	               var i=nodes.indexOf(ar[n]);
	               nodes.splice(i,1);
	               group.parent=ar[n].parent;
	               ar[n].parent=group.uri;
	            }
	       }
	}
}


TreeWidget2.prototype.createCollections=function(prop,nodes2)
{
    // check kinderen van objecten
    for (var uri in this.uri_oo)
	{
	  var oo=this.uri_oo[uri];
	  if (oo.w2ui!=null)
	      {
	        if (oo.w2ui.children!=null)
	            {
	             if (oo.w2ui.children.length>8)
	        	 {
	        	    this.createCollection(oo,prop);
	        	 }
	            }
	      }
	}
    
    // process roots
    if (nodes2!=null)
	{
	var oo={recid:"root",w2ui:{children:nodes2}};
	 this.createCollection(oo,prop);

	}
    
   
    
    return oo.w2ui.children;
    // root objecten ook groeperen
    
}


TreeWidget2.prototype.normalTree=function(results,sparql)
{
    var rar =this.firstBuild(results,sparql);
    var nodes=rar[0];
    var uri_oo=rar[1];
    var me=this;
    
    me.tree.destroy();
	// check if nodes have no children
	
	var nodes2=[];
	//console.log(this.dao);
	if(this.dao[V2+"createOrphansItem"]=="true")
	    {
	        var orphans=[];
        	for (var n in nodes)
        	    {
        	       if (nodes[n].w2ui==null) {orphans.push(nodes[n])}else{nodes2.push(nodes[n])}
        	    }
    
	
	
	if (orphans.length>0)
	    {
	      recid++;
	      var oo={recid:recid,uri:"orphans", text:"orphans",w2ui:{children:orphans}};
	      uri_oo["orphans"]=oo;
	      for (var j in orphans)
		  {
		     orphans[j].parent="orphans";
		  }
	       nodes2.push(oo);
	    }
	
	      }
	else
	    {
	    nodes2=nodes;
	    }
	
	if(this.dao[V2+"groupByPropertyValue"]!=null)
	    {
	     //  this.extraGrouping(nodes,this.dao[V2+"groupByPropertyValue"]); // alleen 1 laag
	       nodes2 =this.createCollections(this.dao[V2+"groupByPropertyValue"],nodes2);  //  alle lagen 
	     
	    
	    }
	
	
	
	
	
	
	  me.createTree(nodes2);
	  w2ui[me.layout].html(me.panel,me.tree);  
	  
	  w2ui[me.htmlid].on('click', function (event) {
	       me.clickEvent(me,event);
	        
	    });
	  
	  me.expandUpToLevel(nodes);
	  
	//me.tree.nodes=nodes;
	//me.tree.refresh();
	//me.tree.resize();
	  
	  
	 me.refresh();
    
    
    
    
    
}

TreeWidget2.prototype.disciplineTree=function(results,sparql)
{
   // this.firstBuild(results,sparql);
    var rar =this.firstBuild(results,sparql);
    var nodes=rar[0];
    var uri_oo=rar[1];
    var disciplinesAanwezig=false;
    var me=this;
    
    me.tree.destroy();
    var nodes2=[];
    var recid=0;
	for (var uri in uri_oo)
   	 {
   	      var oo=uri_oo[uri];
   	   if (oo.disciplineRoot)
   	       {
   	        nodes2.push(oo);
   	       }
   	   else
   		  {
           	      var parent=oo.parent;
           	      if ((parent==null) || (uri_oo[parent]==null) )
           		  {
           		 
           		     var dObject =uri_oo[oo.discipline];
           		     if (dObject==null)
           			 {
           			  console.log(error,"geen discipline gevonden",oo);
           			 }
           		     else
           			 {
           			 	dObject.w2ui.children.push(oo);
           			 	oo.parent=dObject.recid;
           			 }
           		     
           		  }
           	      else
           		  {
           		    //found a child =oo with a resolvable parent
           		   var pO=uri_oo[parent];
           		   if (pO.discipline!=oo.discipline)
           		       {
           		//    console.log("found a discipline thing ",pO,oo);
           		 disciplinesAanwezig=true;
           		    //console.log()
           		         var oocopy=JSON.parse(JSON.stringify(oo));
           		   //   console.log(oocopy);
           		      recid++;
           		      oocopy.recid="Recid"+recid;
           		      var dObject =uri_oo[oocopy.discipline];
           		    
           		      dObject.w2ui.children.push(oocopy);
           		      oocopy.parent=dObject.recid;
           		  
           		        
           		       }
           		  
           		  
           		  }
   		  }
   	 }
	
	// zoek children van parents met een andere discipline
	
	
    
    
    
  
    
    
    if(this.dao[V2+"groupByPropertyValue"]!=null)
    {
     //  this.extraGrouping(nodes,this.dao[V2+"groupByPropertyValue"]); // alleen 1 laag
       nodes2 =this.createCollections(this.dao[V2+"groupByPropertyValue"],nodes2);  //  alle lagen 
     
    
    }
  
	




 

  me.createTree(nodes2);
  w2ui[me.layout].html(me.panel,me.tree);  
  
  w2ui[me.htmlid].on('click', function (event) {
       me.clickEvent(me,event);
        
    });
  
  me.expandUpToLevel(nodes);
  if (disciplinesAanwezig)
      {
      	showInfo("dubbele objecten aanwezig in de decompositieboom vanwege discipline indeling");
      }
  
  
//me.tree.nodes=nodes;
//me.tree.refresh();
//me.tree.resize();
  
  
 me.refresh();
    
    
    
    
}
TreeWidget2.prototype.isCyclicOK=function(nodes)
{
   // console.log(nodes);
  // console.log("cyclic ok check not implemented ");
    
    return true;
 }

TreeWidget2.prototype.firstBuild=function(results,sparql)
{
   //console.log("building  treee",sparql,results);
    var recid=0;
    var me=this;
    if (results==null){return;}
    if (results.results==null){return;}
   // pipe this through to the iframe.
  
  
    
  if (sparql==null){
      if (DEBUG){   console.log("geen sparql query voor tree gevonden! ",sparql);}
      return;}
  
  
 var parentsFound=0;
	var nodes=[];
//	console.log("receiving tree data ");
	try
	{
	    	var uri_oo={};
	    	this.uri_oo=uri_oo;
	    //	console.log(results.results.bindings);
	    	for (var n in results.results.bindings)
	    	    {
	    	    		recid++
	    	    		var o =results.results.bindings[n];
	    	    		var oo={recid:o.uri.value,icon:'fa fa-circle',info:{icon: 'fa fa-circle',fields:[],showEmtpy:true}}; 
	    	    		try{   		oo.text=decodeURIComponent(escape(o.text.value));}catch(error){
							//console.log(o.text.value);
							oo.text="noName";
							oo.text=o.text.value;
						}
	    	    		try{   		oo.icon=o.icon.value;}catch(error){}
	    	    		// discipline optie
	    	    		try{
	    	    		    	var discipline =o.discipline.value;
	    	    		    	var dObject =this.uri_oo[discipline];
	    	    		    	if (dObject==null)
	    	    		    	    {
	    	    		    	    var dtext=discipline+"(discipline)";
	    	    		    	    	var dObject={recid:discipline,text:dtext,disciplineRoot:true,info:{icon: 'fa fa-star',fields:[],showEmtpy:true}, w2ui: { children: [] }}; 
	    	    		    	    	this.uri_oo[discipline] = dObject;
	    	    		    	    }
	    	    		    	oo.discipline=discipline;
	    	    		}
	    	    		catch(error){}
    	    		     
	    	    		oo.uri=o.uri.value;
	        		if (o.parent!=null){oo.parent=o.parent.value;parentsFound++}
	    	    		
	    	    		if (o.extraText!=null){
	    	    		        if (o.extraText.value!="")
	    	    		            {
	    	    		    			oo.extraText=o.extraText.value; oo.text+="("+decodeURIComponent(escape(oo.extraText))+")";
	    	    		            }
	    	    		    }
							
	    	    		if (o.var1!=null){oo.var1=o.var1.value;}
						if (o.URI2!=null){oo.URI2=o.URI2.value;}
	    	    		if (o.var2!=null){oo.var2=o.var2.value;}
	    	    		if (o.icon2!=null){oo.icon2=o.icon2.value;}
                            if (o.icon3!=null){oo.icon3=o.icon3.value;}
                                if (o.icon4!=null){oo.icon4=o.icon4.value;}
                                    if (o.icon5!=null){oo.icon5=o.icon5.value;}
                                    
	    	    		//if (uri_oo[oo.uri]!=null){console.log("sparql query levert dubbele resultaten op voor tree",sparql);}
	    	    	        uri_oo[oo.uri]=oo;;
	    	    	        
	    	    }
	    	
	    	//console.log("parents found:"+parentsFound);
	    	for (var uri in uri_oo)
	    	 {
	    	      var oo=uri_oo[uri];
	    	     
        	    	      var parent=oo.parent;
        	    	      if (parent!=null)
        	    	      {
        	    		 var parentOO=uri_oo[parent];
        	    		 if (parentOO==null){
        	    		     
        	    		  //   console.log("Tree error: parent niet gevonden",parent);
        	    		     if (me.createRoot)
        	    			 {
                	    		     recid++;
                	    		     parentOO={ w2ui: { children: [] },recid:recid,text: "root",extraName:""};
                	    		     uri_oo[parent]=parentOO;
                    	    		      parentOO.w2ui.children.push(oo);
                    	    		      nodes.push(parentOO);
                    	    		      oo.parent=parent;
        	    			 }
        	    		     else
        	    			 {
        	    			     nodes.push(oo);
        	    			 }
        	    		     
        	    		     }
        	    		 else
        	    		     {
        	    		//      console.log("parent found");
        	    		         if (parentOO.w2ui==null){parentOO.w2ui={children:[]};}
        	    		         parentOO.w2ui.children.push(oo);
        	    		         oo.parent=parent;
        	    		     }
        	    		
        	    		 }
        	    	      else
        	    		  {
        	    		    // found a root
        	    		    nodes.push(oo);
        	    		  }
        	    	
	           }//for
               
	}
	catch(error){console.log(error);}
       // console.log(uri_oo,nodes);
	if (!this.isCyclicOK(nodes)) { showError("cannot display all objects because of cyclic references");} 
return [nodes,uri_oo];

} 



TreeWidget2.clickEvent=function(treeid,recid)
{
    if (this.noEvents) return;
   
    w2ui[treeid].me.clickEvent(w2ui[treeid].me,{recid:recid});
    
}




TreeWidget2.prototype.clickEvent=function(me,event)
{
	//console.log("click event");
    try
    {
	 
	  var recid =event.recid;
	  var o=me.tree.get(recid);
	 
	  if (o.uri!=null)
	      {
	                me.noEvents=true;
			EventManager.generateEvent(me,V2+"hasUriOutput",o.uri);
		     	EventManager.generateEvent(me,V2+"hasTextOutput",o.text);
              
                    EventManager.generateEvent(me,V2+"hasVar1Output",o.var1);
		     	me.noEvents=false;
	     //           console.log(event.target,o);
	                
		     
	    //   $("#"+event.target).parent().addClass("w2ui-selected");
	      
	      }
		 
		  if (o.URI2!=null)
		  {
			me.noEvents=true;
		
			//EventManager.generateEvent(me,V2+"hasUriOutput",o.URI2);
			EventManager.generateEvent(me,V2+"hasVar1Output",o.URI2);
			me.noEvents=false;
		  }
    }
    catch(error){
	//	console.log(error);
	}
}


TreeWidget2.prototype.fireEvent=function(eventString,arg)
{
    // incoming events
    if (this.noEvents==true) {return;}
  //  console.log("receiving incoming event tree ",eventString,arg);
    if (arg==null)
	{
		try {    this.tree.selectNone();} catch(e){}
	 return;
	}
	if (this.uri_oo==null)
	{
		return;
	}
    if (eventString=="singleSelection")
	{
	       try {     	this.tree.selectNone(); } catch(e){}
        	
		   try {this.tree.select(arg);} catch(e){}
        	var recid=this.tree.get(arg,true);
		
        	if (recid!=null)
        	    {
        	
        	    	this.tree.scrollIntoView(this.tree.get(arg,true));
        	    }
        	else
        	    {
        	    		var oo=this.uri_oo[arg];
        	    		if (oo==null){return;}
        	    		var soo=oo;
        	    		//console.log("alternatieve strategie om object te vinden. Wellicht nog niet uitgeklapt",oo);
        	    		var branch=[];
        	    		branch.push(oo);
                        
        	    		while (oo.parent!=null)
        	    		    {
        	    		        if (oo.cyclicCeck!=null) {showWarning("error: cannot display item in cyclic tree");return;}
                                oo.cyclicCeck=true;
        	    		          oo=this.uri_oo[oo.parent];;
        	    		          if ((oo!=null) && (oo!=soo))
        	    		              {
        	    		              	branch.push(oo);
        	    		              }
        	    		          else
        	    		              {
        	    		               oo={};
        	    		              }
        	    		    }
        	    		this.expansionSelection=soo;
        	    		for (var n=branch.length;n>0;n--)
        	    		    {
        	    		       var oo=branch[n-1];
        	    		       if (oo!=null)
        	    			   {
        	    			        try{  this.tree.expand(oo.recid);}catch(e){  try { this.tree.selectNone(); }catch(e){}                       this.tree.select(arg); return;}
        	    			   }
        	    		    }
                            
        	    		for (var n=branch.length;n>0;n--)
    	    		    {
    	    		       var oo=branch[n-1];
    	    		       this.tree.expand(oo.recid);
    	    		    }
        	    		
        	    		this.tree.expand(soo.recid);
        	    		this.tree.scrollIntoView(this.tree.get(arg,true));
        	    		this.tree.selectNone();
        	        	this.tree.select(arg);
       	    }
        
	}
} 

TreeWidget2.prototype.expanding=function(event)
{
  //  console.log("expanding ",event);
    if (false)
	{
    var me=this;
    event.onComplete = function () 
    {
     //  console.log("completed expansion");
	if (me.expansionSelection!=null)
	    {
	//	console.log(" expansion complete so selecting" ,this.expansionSelection);
		me.tree.scrollIntoView(me.expansionSelection.recid);
		me.tree.selectNone();
	//	this.tree.select(this.expansionSelection);
		//this.tree.scrollIntoView(this.expansionSelection.recid); 
		me.tree.select(me.expansionSelection.recid);
		//console.log("selected");
		
		me.expansionSelection=null;
	    }
    }
	}
}
