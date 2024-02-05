var InputExecutor=function(){};




InputExecutor.createLinks=function(ev,prop,inputDescriptions,oo,widget,inputB)
{
 //   console.log("InputExecutor createLinks ");
    //already made?
    var ready=function(){oo.connectedReady(widget);} // als laatste)
   
  var sps=[];
    for (var n in inputDescriptions)
	{
	  var inputD=inputDescriptions[n];
	  
	  if (ev.behaviours[inputD.uri])
		{
		var sp=ev.behaviours[inputD.uri];
		//console.log("behaviour already created",ev.behaviours[oo[prop]]);
		 if (inputB){sp.inputWidgets.push(widget)}else{sp.outputWidgets.push(widget)}
		  ready.call(this,this);
		 sps.push(sp);
		}
	  else
	      {
	  
	  
	  
	  var type =inputD.getType(); // could be an array
	  if (Array.isArray(type))
	      {
	      console.log(" input Executor multityped object not fully imlemented :  taking first type ");
	      type=type[0];
	      }
	  var ok=false;
	  var sp=null
	  if (type==V2+"ParameterisedSparqlQuery"){ok=true;sp=new SparqlExecutor(oo,inputD,ev,prop,ready);}
	  if (type==V2+"SparqlQuery"){ok=true;sp=new SparqlExecutor(oo,inputD,ev,prop,ready);}
	  if (type==V2+"NamedQuery"){ok=true;sp=new SparqlExecutor(oo,inputD,ev,prop,ready);}
	  if (type==V2+"RedisQuery"){ok=true;sp=new SparqlExecutor(oo,inputD,ev,prop,ready);}
	  
	  
	  if (type==V2+"StringParameter"){ok=true;sp=SparqlParameter.create(inputD.uri,oo,prop,inputD,ev,null,ready);}
	  if (type==V2+"FromGraphs"){ok=true;sp=SparqlParameter.create(inputD.uri,oo,prop,inputD,ev,null,ready);}
	  if (type==V2+"CustomJavaScriptAction"){ok=true;sp=new CustomJavaScriptAction(inputD.uri,oo,prop,inputD,ev,ready);}
	  if (type==V2+"SelectionJS"){ok=true;sp=new SelectionJS(oo,prop,inputD,ev,ready);}
	  if (type==V2+"CoinsContainerSelectionJS"){ok=true;sp=new CustomJavaScriptAction(inputD.uri,oo,prop,inputD,ev,ready,"coinsContainerSelectionJS(this,arg,widget,prop,propagate);");}
	  if (type==V2+"ChangeParameter"){ok=true;sp=new CustomJavaScriptAction(inputD.uri,oo,prop,inputD,ev,ready,"changeParameterJS(this,arg,widget,prop,propagate);");}
		
	  if (type==V2+"DatasetParameter"){ok=true;sp=SparqlParameter.create(inputD.uri,oo,prop,inputD,ev,prop,ready);}
	
	  
	  if (ok==false)
	      {
	         console.log("error inputExeuctor, geen implementatie voor "+type);
	      }
	  else
	      {
	        if (inputB){sp.inputWidgets.push(widget)}else{sp.outputWidgets.push(widget)}
	      }
	  sps.push(sp);
	}
	}
    return sps;
    //
}

var SparqlExecutor =function(oo,sparql,ev,prop,ready)
{
   // console.log("creating sparqlExecutor ");
    this.inputWidgets=[];
    this.outputWidgets=[];
   
    var me =this;
    this.parameters=[];
    me.ready=ready;
    this.oo=oo;
    ev.behaviours[this.oo[prop]]=this;
    this.orgSparql=sparql[V2+"sparqlstring"];
    var pids=sparql[V2+"hasParameters"];
    
    if (pids!=null)
	{
	    if (!Array.isArray(pids)){pids=[pids];}
	    me.aantalParameters=pids.length;
	    for (n in pids)
		{
		
		   var pid = pids[n];
		
		   if (ev.behaviours[pid]!=null) {ev.behaviours[pid].sparqlExec.push(this);me.parameters.push(ev.behaviours[pid]);me.parameterReady();}
		   else
		       {
		   //     console.log("sparql moet parameter aanmaken",pid);
		       	 MySparql.getObject(pid,function(args){var sp= SparqlParameter.create(args.uri,oo,prop,args,ev,me); me.parameters.push(sp);ev.behaviours[args.uri]=sp; me.parameterReady();},ApplicationV2.graph);
		       	 
		       }
		}
	}
    else
	{
	if (ready!=null)
	    {
	
	    	ready.call(this,this);
	    }
	}
  

  // sparql.getBeginSparql(function(s){me.sparql=s; console.log(s);});    
}

SparqlExecutor.runQueryViaUri=function(uri,evt,pars,rv)
{
    MySparql.getObject(uri,function(oo)
	    {
	           SparqlExecutor.runQueryViaOO(oo,evt,pars,rv); 
	    }
    );
}
SparqlExecutor.runQueryViaOO=function(oo,ev,pars,rv)
{
    var sparql=oo[V2+"sparqlstring"];
    var pids=oo[V2+"hasParameters"];
    var conversion={};
    var named=[];
    
    if (pids!=null)
	{
	    if (!Array.isArray(pids)){pids=[pids];}
	    for (var n in pids)
		{
		   var par=ev.behaviours[pids[n]];
		   if ((par.type==V2+"StringParameter") || (par.type==V2+"DatasetParameter"))
			 {           conversion[par.keyword]=par.value;      }
			 if ((par.type==V2+"FromGraphs")  )
				 {
			     named.push(par.value);
			     }
		}
	
 
	 
	}
    
     sparql=MySparql.rewrite(sparql,conversion,named);
     if (sparql!=null)
	 
	 {
    
          if (pars!=null)
              {
                  for (var key in pars)
            	  {
            	    var about = pars[key];
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
                       sparql = sparql.replace("${"+key+"}",about);
             	  
            	  }
              }
          
          
            MySparql.select(sparql,rv); 
          
          
	 }
    
    
    
}






SparqlExecutor.prototype.parameterReady=function()
{
    this.aantalParameters--;
    if ( this.aantalParameters==0)
	{
	 // console.log("sparqlquery and parameters  ready "+this.parameters.length);
	  this.ready.call(this,this);
	}
}


SparqlExecutor.prototype.isDependend=function()
{
    var b=false;
    var me=this;
    for (var n in me.parameters)
	{
	   var parameter=me.parameters[n];
	   if (parameter.isDependend()){b=true;}
	}
    if (this.outputWidgets.length>0)
	{
	 return true;
	}
    me.dependend=b;
    return b;
    
}

SparqlExecutor.prototype.executeQuery=function(rawSparql,conversion, named,rv)
{
    var sparql=this.getRewriteQuery(rawSparql,conversion, named);
    
   
    MySparql.select(sparql,function(results)
	    {
	          rv.call(this,results,conversion,named);
	    });
    
}
SparqlExecutor.prototype.getRewriteQuery=function(rawSparql,conversion, named)
{
    
    // handy function for cesium properyt panel e.g.
    var me=this;
    if ((conversion==null) && (named==null))
	{
    var conversion={};
    var named=[];
    for (var n in this.parameters)
   {
	 var par = this.parameters[n];
	 if ((par.type==V2+"StringParameter")  || (par.type==V2+"DatasetParameter") )
	 {           conversion[par.keyword]=par.value;      }
	 if ((par.type==V2+"FromGraphs")  )
	 {
	     named.push(par.value);
	     }
	 
    }
	}
    
  
   
    var sparql=MySparql.rewrite(rawSparql,conversion,named);
    
 //   console.log(conversion,named,sparql);
    return sparql;
  
    
}

SparqlExecutor.prototype.execute=function(arg)
{
    var me=this;
    if (arg!=null){this.orgSparql=arg; if (DEBUG) {console.log("sparql executor setting new sparql query ",arg);}}
    var conversion={};
    var named=[];
    for (var n in this.parameters)
   {
	 var par = this.parameters[n];
	
	    if (par.type==null) { 
		console.log("error in parameter. Wellicht ApplicationV2 niet geladen?",par,this);
		}
	    
	    
	    
	 if ((par.type==V2+"StringParameter") || (par.type==V2+"DatasetParameter"))
	 {           conversion[par.keyword]=par.value;      }
	 if ((par.type==V2+"FromGraphs")  )
		 {
	     named.push(par.value);
	     }
	 
    }
 // console.log("rewrite",conversion,this);
    var sparql=MySparql.rewrite(this.orgSparql,conversion,named);
 // console.log(sparql);
    if (sparql==null)
	{
	 //    console.log("error geen goede sparql rewrite ",this);
	     return;
	}
    
    if (sparql.includes("<${"))
	{
	//  console.log("sparql nog niet geschikt voor executie ");
	  return;
	}
    
    
    try
    {
    if (sparql.localeCompare(this.sparql)!=0)
	{
	// console.log("Nieuwe sparql query. Executing",{news:sparql,old:this.sparql});
	 this.sparql=sparql;
    lock();
   // if (DEBUG) {console.log("selecting "+sparql);}
    MySparql.select(sparql,function(results)
	    {
	          for (var n in me.inputWidgets)
	              {
	          //       console.log("setting sparql results for "+n,me,me.inputWidgets[n]);
	                // console.log(sparql);
	                 me.inputWidgets[n].setSparqlResults(results,me.sparql,conversion,named);
	                
	              }
	    });
    
	}
    else
	{
	if (DEBUG) {console.log("geen nieuwe sparql query. skipping query execution",this,conversion,named);}
	// if (DEBUG) {console.log("maar de data wordt wel doorgezet "+sparql);}
	/* for (var n in me.inputWidgets)
         {
           try{ me.inputWidgets[n].setSparqlResults(results,me.sparql,conversion,named);} catch(e){}
           
         }
         */
	
	}

	}

    catch(error)
    {
	console.log("error sparql executor",error);
	//unlock();
    }
    
    
 
}



var SparqlParameter=function(uri,oo,prop,dao,ev,sparqlExec,ready)
{
  
  this.dao=dao;
  this.type=dao["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"];
  this.inputWidgets=[];
  this.outputWidgets=[];
  this.keyword=dao[V2+"sparqlparameter"];
  this.ev=ev;
  this.prop=prop;
  this.sparqlExec=[];
  if (ev.behaviours[uri]!=null)
      {
        console.log("DIT IS RAAR",this,ev,oo[prop]);
        return;
      }
  ev.behaviours[uri]=this;
  if (sparqlExec!=null){this.sparqlExec.push(sparqlExec);}// can be zero
  this.value=dao[V2+"hasDefaultValue"];
  if (this.value==null)
      {
      this.value=dao[V2+"graphUri"];
      }
  if (ready!=null)
      {
       ready.call(this,this);
      }
 
}

SparqlParameter.create=function(uri,oo,prop,dao,ev,sparqlExec,ready)
{
    
  // if exists return 
    var sp=ev.behaviours[uri];
 //   console.log(sp,dao);
    if (sp!=null)
	{
	// console.log("RE_USING A SPARQL PARAMETER ",dao);
	 if (sparqlExec!=null){sp.sparqlExec.push(sparqlExec);}// can be zero
	return sp;
	}
    
// else  create new
    return new SparqlParameter(uri,oo,prop,dao,ev,sparqlExec,ready);
    
}

SparqlParameter.prototype.isDependend=function()
{
    if (this.outputWidgets.length>0){return true;}
    return false;
}


SparqlParameter.prototype.execute=function(arg,widget,prop,propagate)
{ 
   // var changed=false;
    if (arg!=null)
    {
	if (this.value!=arg)
	    {
	    	this.value=arg;
	    	//changed=true;
	    }
	
    }
    if ((propagate!=false) )
    {
	for (var n in this.sparqlExec)
	    {
	  // if (DEBUG){ console.log(this.sparqlExec[n]);}
	   try
	   {
    		this.sparqlExec[n].execute(null);
	   }
	   catch(error){}
           }
    }
     
}













var CustomJavaScriptAction=function(uri,oo,prop,dao,ev,ready,predefined)
{
    
    this.dao=dao;
    this.ev=ev;
    this.oo=oo;
    this.type=dao["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"];
    this.inputWidgets=[];
    this.outputWidgets=[];
    
   // console.log("create custom javacript action ",uri);
   
    ev.behaviours[uri]=this;
    
    this.predefined=predefined;
    
    if (ready!=null)
    {
     ready.call(this,this);
    }
  
}

CustomJavaScriptAction.prototype.isDependend=function()
{
    if (this.outputWidgets.length>0){return true;}
    return false;
}





CustomJavaScriptAction.prototype.execute=function(arg,widget,prop,propagate)
{
   if (this.predefined!=null)
       {
           try
           {
              eval(this.predefined);
           }
           catch(error)
           {
       	      console.log("error exeucting javascript predefined function ",this,arg,widget,error);
           }
       }
    try
    {
       var js=this.dao[V2+"javascript"];
       eval(js);
    }
    catch(error)
    {
	console.log("error exeucting javascript function ",error,this,arg);
    }
 
}





