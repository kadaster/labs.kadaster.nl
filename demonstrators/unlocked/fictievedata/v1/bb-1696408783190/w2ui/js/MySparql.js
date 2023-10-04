var MySparql={};

MySparql.debug=false;
Singleton.getInstance().MySparql=MySparql;

MySparql.insertStatements=function(graph,inserts,deletes,succesRV)
{
   
  
    if ((inserts==[]) && (deletes==[])){return;}
    if (inserts==null){inserts=[]}
    if (deletes==null){deletes=[]}
    
    var bu=Singleton.getInstance().baseUri;
    var url=bu+"BloodBee/cgi/command";
    
    var insertsJson=JSON.stringify(inserts);
    var deletesJson=JSON.stringify(deletes);
   
    
    var json ={commando:"insertStatements",datasetUri:graph,inserts:insertsJson,deletes:deletesJson};
      
    
    $.ajax({
        type: "POST",
        url: url,
        data: json,
        success: function(arg){if (succesRV!=null){succesRV.call(this);}else{showInfo("server updated");}},
        error:function(arg){showError("server update error (errorcode: at22)");}
        });

}

MySparql.inserts=function(update,rv)
{
    
    MySparql.insert(update,rv);
    
}

MySparql.insert=function(update,succesRV)
{
   
  
    if (update==null){return;}
    
    var bu=Singleton.getInstance().baseUri;
    var url=bu+"BloodBee/cgi/command";
    
        
    var json ={commando:"sparqlUpdate",update:update};
      
    
    $.ajax({
        type: "POST",
        url: url,
        data: json,
        success: function(arg){if (succesRV!=null){succesRV.call(this);}else {showInfo("server updated");}},//location.reload();
        error:function(arg){showError("server update error (errorcode :update22)");}
        });

}

MySparql.rewrite=function(sparql,replace,fromGraphs)
{
    if (MySparql.debug)
	{
			console.log("Rewrite ",replace,fromGraphs,sparql);
	}
    
  if (fromGraphs!=null)
      {
      	if (Array.isArray(fromGraphs))
      	    {
                	fromGraphs=[].concat.apply([], fromGraphs);
      	    }
      }
      
    if (sparql==null)
	{
	  console.log("geen sparqlquery gevonden voor rewrite ",sparql);
	  return null;
	}
    if (Array.isArray(sparql))
	{
	  console.log("meerdere sparqlquery gevonden voor ",sparql);
	  return null;
	}
 
     for (var keyA in replace)
     {
	 if (keyA!=null)
        	     {
        	 var value2 = replace[keyA];
        	 if (value2!=null)
        	     {
        	     	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2); 
                    	     		   sparql=sparql.replace("${"+keyA+"}",value2);


      
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2); 
										sparql=sparql.replace("{{"+keyA+"}}",value2);
										 


                    	     		   
                    	     	           sparql=sparql.replace("<"+keyA+">","<"+value2+">");
                    	     	  sparql=sparql.replace("<"+keyA+">","<"+value2+">");
                    	     	sparql=sparql.replace("<"+keyA+">","<"+value2+">");
                    	    sparql=sparql.replace("<"+keyA+">","<"+value2+">");
                    	sparql=sparql.replace("<"+keyA+">","<"+value2+">");
 	     	           
                    	     	           
        	     }
	     }
     }
     
	   if (fromGraphs.length>0)
	       {
	       var s="";
	         for (var n in fromGraphs)
	             {
	                s+="from <"+fromGraphs[n]+"> \n";
	             }
	         s+="\n where \n";
	         
	         sparql=sparql.replace("where",s);
	   //      console.log(sparql);
	       
	   //    console.log(key+" add From graphs to the query",fromGraphs);
	       }
     
     try{
	if (sparql.indexOf("${a") !== -1) 
    // if (sparql.includes("${"))
	 {
	 console.log("inclomplete sparql query ",sparql,widget);
	 return null;
	 }
     }
     catch(error)
     {
	// console.log(error,sparql.toString().includes("${"));
     }
  
 //console.log(sparql);
return sparql;


}


MySparql.aantal=0;
MySparql.maxThreads=10;
MySparql.tasks=[];
MySparql.tasksInProcess=[];



MySparql.select=function(sparql,rf,noLock,debug,extra)
{
  //  console.log(sparql);
    
    if (noLock==null){noLock=true;}
    if (sparql==null){return;}
    if (noLock==true){}else   { lock();}
  //  if (debug==true){console.log(sparql);}
    var task={sparql:sparql,rf:rf,noLock:noLock,extra:extra};
    MySparql.tasks.push(task);
    MySparql.runTask(task);
}


function removeFromArray(array, value) {
    var idx = array.indexOf(value);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
    return array;
}

MySparql.checkHealth=function()
{
    
try
{
    var size=0;
    for (var key in MySparql.cache)
	{
	  
	  //size+=key.length;
	  try{var r=MySparql.cache[key];size+=r.results.bindings.length} catch(e){}
	}
    
    if (size>1000000) {
	console.log("clearing cache for memory reasons ");
	MySparql.cache={};
    }
    
}
catch(error){}


}

MySparql.runTask=function(task)
{
    if (MySparql.tasksInProcess.length>MySparql.maxThreads) 
    {
	//console.log("Wacht met query "+MySparql.tasksInProcess.length);
	return;}
    
   
   if ((task==null) && (MySparql.tasks.length>0))
       {
          task=MySparql.tasks[0];
       }
   if (task==null) {
     //  console.log("geen nieuwe taken:"+MySparql.tasks.length);
	       if (MySparql.tasksInProcess.length==0)
		   {
	//	  console.log("geen nieuwe taken meer en alle taken klaar: unlocking");
	          unlock();
		   
		   }
            return;
   }

   
   
   MySparql.tasksInProcess.push(task);
   MySparql.tasks=removeFromArray(MySparql.tasks,task);
    if (DEBUG)
	{
	  console.log(task.sparql);
	}
   var json=MySparql.cache[task.sparql];
   if (json!=null)
       {
         //console.log("redis");
       setTimeout(function(){ MySparql.aantal=0;removeFromArray(MySparql.tasksInProcess,task); task.rf.call(this,json,task.sparql);MySparql.runTask();}, 0.00001);
      
       return;
       }
   
  
   
   
   //MySparql.tasks.splice (0, 1);//
    var sparqler= Singleton.getInstance().sparqler;
    var query = sparqler.createQuery();
    if (MySparql.debug==true)
	{
	console.log(task.sparql);
	}
   // 
    query.query(task.sparql,{
	failure: function(json){
	    console.log("query failure. trying to reconnect");
	    
	    //MySparql.aantal++;
	    
	    connectionError(function(){console.log("retry sparql",task.sparql);removeFromArray(MySparql.tasksInProcess,task);MySparql.tasks.push(task); MySparql.runTask();});
	    if (true) {return;} if (MySparql.aantal>10) {console.log("ERROR: select query fails",json,sparql);removeFromArray(MySparql.tasksInProcess,task);}else {console.log("retry sparql",sparql);removeFromArray(MySparql.tasksInProcess,task);MySparql.tasks.push(task); }MySparql.runTask();},	
	success: function(json)
	{
		console.log("query results ",json);
	    if (json==null)
		{
		  //console.log("MySparql error: lets continue for now ",task.sparql);//MySparql.tasksInProcess=[];logOutProc();return;
		}
	    MySparql.cache[task.sparql]=json;
	 
	    MySparql.aantal=0;removeFromArray(MySparql.tasksInProcess,task); task.rf.call(this,json,task.sparql,task.extra);MySparql.runTask();
	}});
}


MySparql.cache={};
MySparql.downloadCache=function()
{
    
    var data = "MySparql.cache="+JSON.stringify(MySparql.cache);
    console.save(data);
}
MySparql.clearCache=function()
{
    MySparql.cache={};
    }



MySparql.getObject=function(id,rf,graph)
{
   if (id==null){return;}
    if (Array.isArray(id))
	{
	  var ids="";
	  var komma="";
	  for (var n in id)
	      {
	        ids+=komma+"<"+id[n]+">";
	        komma=","
	      }
	  
	  id=ids;
	}
    else
	{
	 id="<"+id+">";
	
	}
    
    //console.log(id);
     var sparqler= Singleton.getInstance().sparqler;
    var query = sparqler.createQuery();
    if (graph!=null)
	{
	var s="SELECT * from <"+graph+"> WHERE { ?a ?b ?c. filter(?a in ("+id+")) } ";
	}
    else
	{
    
		var s="SELECT distinct ?a ?b ?c WHERE {  graph ?g {?a ?b ?c. filter(?a in ("+id+")) } } ";
	}

    MySparql.select(s,function(json){
  //  query.query(s,
	//	{failure: function(json){console.log(json);}, success: function(json) {
		    
		    var hash={};
		       var lo=null; 
		       if (json==null)
			   {
			   console.log("error: GEEN SPARQL resultaten voor ",s);
			   return;
			   }
		    for (var b in json.results.bindings)
			{
			    var oo=json.results.bindings[b];
			    var object=oo.a.value;
			    if (hash[object]==null){var o=new OO();o.uri=object; hash[object]=o;}
			    var o= hash[object];
			    lo=o;
			    var key=oo.b.value;
			    var value=oo.c.value;
			    
			    if (o[key]!=null)
				{
			//	console.log(o[key]);
				if (Array.isArray(o[key]))
				    {
				       o[key].push(value);
				    }
				else
				    {
				    var v1=o[key];
				    var ar=[];
				    o[key]=ar;
				    ar.push(v1);
				    ar.push(value);
				    }
				}
			    else
				{
				 o[key]=value;
				}
			}
		  //  console.log(hash,lo);
		    var kn=0;
		    for (var k in hash)
		{
			kn++;
		}
		    
		    if (kn==1)
		    {
			rf.call(this,lo);
		    }
		    else{rf.call(this,hash);}
		}
            //}
	);
}



    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }


