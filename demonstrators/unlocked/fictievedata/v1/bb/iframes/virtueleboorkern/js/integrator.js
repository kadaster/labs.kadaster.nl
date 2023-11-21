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

var jsonStandaard = {
	       'border':{'color':'#aa0000'},
	  //    'label': ['ondergrond', 'l1:tussenlaag', 'l2:tussenlaag', 'l3:bovenlaag'],
	       //'label': [{name:'ondergrond',uri:'iets 26'},{name:'l1:tussenlaag',uri:'iets 255'},{name:'l2:tussenlaag',uri:'iets 42'},{name:'l3:bovenlaag',uri:'iets 22'}],
	       'label':[{name:'voorbeeld',uri:'niets'}],
	      'values': [
	      {
	        'label': "voorbeeeld",
	        //'values': [40, 15, 5,15]
	        'values': [100]
	      }],
	      'color':['#ffd08a']
	      
	  };

function init()
{
 // console.log("bk init");
  
    var label="onbekend";
    
    try { 
	var iface =Singleton.getInstance().iface;
	//console.log(iface.widget.dao);
	label=dao["label"];
	if (label==null){label="";}
    }
    catch(e){}

  

  
  showBoorkern(jsonStandaard,true); // moet voor initialisatie
  document.latestJSON=jsonStandaard;
  
  try
  {
      var iface =Singleton.getInstance().iface;
      iface.widget.reExecuteSparql();
    
  }
  catch(e)
  {
	console.log(Singleton.getInstance());
  }
  
  
}


var typeColors={};
//cat1
typeColors["Natuurlijke ondergrond"]=['#ffd08a','#3e4d54','#cdd3d6','#596e78','#7a8b93','#9ba8ae','#bcc5c9','#dde2e4'];
typeColors["Onderbouw"]=['#ffd08a','#3e4d54','#cdd3d6','#596e78','#7a8b93','#9ba8ae','#bcc5c9','#dde2e4'];
typeColors["Bovenbouw"]=['#ffd08a','#3e4d54','#cdd3d6','#596e78','#7a8b93','#9ba8ae','#bcc5c9','#dde2e4','#c4c5c6','#969798','#757778','#595b5c','#48494a','#2f3131','#fba384','#ce856b','#98604d','#7d4e3e','#603c2f','#4d2a1e'];

// cat2
typeColors["Aardebaan"]=['#FFEE9C','#E9D88A','#F4F967','#F5FC3E','#F4FB27','#F3FB15'];
typeColors["Fundering"]=['#FBA384','#CE856B','#98604D','#7D4E3E','#603C2F','#4D2A1E'];
typeColors["Asfaltconstructie"]=['#C4C5C6','#969798','#757778','#595B5C','#48494A','#2F3131','#394448','#29393F','#1C343E','#ffd08a','#3e4d54','#cdd3d6','#596e78','#7a8b93','#9ba8ae','#bcc5c9','#dde2e4'];
typeColors["Verbeterde ondergrond"]=['#FED202','#CAA704','#9A7F02','#756103','#4E4102','#382E01','#211B01'];


function showBoorkernSparql(results)
{
    
   // console.log(results);
    
    if (results==null){showBoorkern2(); return  null;}
    
    //var colors2=colors.slice();
    var colors2=[];
    var ar=[];
    var labels=[];
    var selectedUri=null;
    datum="onbekend";
       
    try
    {
	var cat1=0;
	var cat2=0;
    for (var n in     results.results.bindings)
	{
	    var tcolor=colors[n];
	    var b= results.results.bindings[n];
		try {datum=b.date.value;}catch(e){}
		try {selectedUri=b.selectedUri.value;}catch(e){}
	    var dikte = b.dikte.value;
	    if (b.mengselnaam!=null)
		{
			var mengselnaam=b.mengselnaam.value;
		}
	    else
		{
			var mengselnaam=b.deklaagtype.value;
		}
	    
	    try {var uri = b.uri.value; }
	    catch(e) {uri="onbekend";}
	    var o={name:mengselnaam,uri:uri};
	    try {o.cat1 = b.cat1.value; } catch(e) {}
	    try {o.cat2 = b.cat2.value; tcolor=typeColors[o.cat2][cat2] ;cat2++;} catch(e) {}
	    if (tcolor==null){tcolor=typeColors["Bovenbouw"][n];}
	    if (tcolor==null) {tcolor='#bcc5c9';}
        if (b.color!=null) {tcolor=b.color.value;}
	//    console.log(o);
	    // uitzondering
	    if ((o.name=="Fundering") && (o.uri=="onbekend"))
		{
		 // o.name="Fundering&tussenlagen";
		}
	
	    colors2.push(tcolor);
	    labels.push(o);
	    ar.push(dikte);
	}
    }
    catch(e){console.log(e);}
    // console.log(colors2);
   
    
    var json = {
	       'border':{'color':'#aa0000'},
	      'label': labels,
	      'values': [
	      {
	        'label': 'opbouw '+datum,
	        'values': ar
	      }],
	      'color':colors2,
	      datum:datum
	      
	  };
	  
   
  //showBoorkern(json,false);
	update(json,true);
	if (selectedUri!=null)
	{
		setTimeout(function(){document.barChart.selectUri(selectedUri)},250);
		Iface.sendEvent("singleSelection",selectedUri);
	}

}


function showBoorkern2()
{
    
    var a=Math.random()*6+1;
    var ar=[];
    var labels=[];
    for (var i=0;i<a;i++) {
    	ar.push(Math.random()*40);
    	labels.push({name:"laag "+i,uri:'http://www.uri/m'+i});
    //	labels.push("laag "+i);
	}
    
    var json = {
	       'border':{'color':'#aa0000'},
	      'label': labels,
	      'values': [
	      {
	        'label': 'virtuele boorkern',
	        'values': ar
	      }],
	      'color':colors
	      
	  };
	  
	
	
  
    update(json,false);

}



function startIntegration()
{
   
    var iface =new Iface();
    Singleton.getInstance().iface=iface;
    try
    {
    
		window.top.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
		var dao=iface.widget.dao;
                 return;
    }
    catch(error1)
    {
	
	try
	{
	       this.parent.Singleton.getInstance().iframes[window.frameElement.id].call(this,iface);
		var dao=iface.widget.dao;
             return;
	}
	catch(error)
	{
	
	    console.log("error boorkern integration ",error);
	}
    }
    
   
  
  	try
  	{
	window.top.postMessage(window.frameElement.id, window.top.BBAPI.base);
  	}
  	catch(eee){}
    
  
  
  
}

function getIface()
{
    if (Singleton.getInstance().iface!=null) {return  Singleton.getInstance().iface;}
    return null;
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

var Iface=function()
{
    // interface between this iframe and the rest

}

Iface.prototype.setBeginSparqlResults=function(results,sparql)
{
 //  console.log("boorkern:  set begin sparql results ",results);
   this.orgSparql=sparql;
   
   showBoorkernSparql(results); 

}

Iface.prototype.setSparqlResults=function(results,sparql)
{
  //console.log("set sparql results  boorkern",results,sparql);
    
    if (this.blockEmptyResults)
	{
	
	if (results.results.bindings.length==0)
	    {
	    	//console.log("block empty results");
	    	return;
	    }
	}
    
   this.orgSparql=sparql;
   
   showBoorkernSparql(results);

}


Iface.prototype.selectUri=function(arg)
{
   
   var me=this;
    
    
       var sparqlexecutor=this.widget.eventManager.behaviours[this.widget.dao[this.V2+"hasSparqlInput"]];
	//    console.log(sparqlexecutor);
	  var contextQuery= sparqlexecutor.getRewriteQuery(sparqlexecutor.orgSparql,null,null);
	  var sparql = contextQuery.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  sparql = sparql.replace("${uri}",arg);
	  //console.log(sparql);
	  this.MySparql.select(sparql,function(results)
		    {
	        //      console.log("boorkern mengsel resultaten",sparql);
	            
		         me.setSparqlResults(results,sparql);
		     
		        
		    }); 
    
    
    
}

Iface.sendEvent=function(event,arg)
{
 
 //console.log(arg);
 if (arg=="onbekend")
     {
      //  console.log("not sending event");
        showInfo("geen informatie aanwezig");
        return;
     }
    Singleton.getInstance().iface.widget.sendEvent("http://www.bbsgroep.nl/application/v2/hasUriOutput",arg);
    
}

try{startIntegration(); }catch(error){console.log(error);}


