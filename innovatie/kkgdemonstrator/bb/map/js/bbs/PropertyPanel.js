function getDeflectionQuery(o)
{
    
    var query=" select  distinct ?prop ?value  where   {     Graph <http://www.bbsgroep.nl/F25/showcase> ";
    query+="   { 	   <"+o.uri+"> ?propUri ?value.    } ";
    query+="    Graph <http://www.bbsgroep.nl/F25/schema>    { 	    ?propUri rdfs:label ?prop  . filter (LANG(?prop)=\"nl-nl\")  }";
    query+=" }";
    
    return query;
}
function getBasisQuery(o)
{
    
    var query=" select  distinct ?prop ?value  where   {  ";
    query+="        <"+o.uri+"> ?propUri ?value.     ";
    query+="           ?propUri rdfs:label ?prop  .  filter (ISLITERAL(?value)) ";
    query+=" }";
    console.log(query);
    return query;
}




function getCOINS2Query(o,datagraph,schemagraph)
{
    
    
    var query="    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> 	prefix cbim:<http://www.coinsweb.nl/cbim-2.0.rdf#> 	select distinct ?prop ?value ";
    query+="  	where 	{	 Graph <"+datagraph+"> ";
    query+="  	  { 	      <"+o.uri+"> cbim:hasProperties ?b.	    ?b a ?type.	    ?b cbim:datatypeValue ?value }";
    
   
    query+="   Graph <"+schemagraph+">    { 	     ?type rdfs:subClassOf* cbim:SimpleProperty. 	     ?type cbim:name ?prop }}";    
 return query;
    
}

function getPNHQuery(o)
{
    var datagraph="http://otb.noord-holland.nl/COINS2/showcase/as-is";
    var query="    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> 	prefix cbim:<http://www.coinsweb.nl/cbim-2.0.rdf#> 	select distinct ?prop ?value ";
    query+="  	where 	{	 Graph <"+datagraph+"> ";
    query+="  	  { 	      <"+o.uri+"> cbim:hasProperties ?b.	    ?b a ?prop.	    ?b cbim:datatypeValue ?value }}";
    
    return query;
    


}

function getGLDQuery(o,setName)
{
     
return getCOINS2Query(o,"http://www.bim.provinciegelderland.nl/COINS2/GWW/showcase/"+setName,"http://www.bim.provinciegelderland.nl/COINS2/GWW/schema");

}





function openSparqlResultsPropertyPanelNotebook(uri,e)
{
   
    if (window.top.MySparql!=null)
    {
	
        var uri_objects =Singleton.getInstance().uri_objects;
        if (uri_objects==null){return;}
        
        var layers=uri_objects[uri];
        var layerO=null;
        if (layers!=null){  
    		
    	layers=layers[0];
    	for (var n in layers._layers){layerO=layers._layers[n];} 
    	}
      
       if (layerO!=null)
	   {
              
    	        window.top.MySparql.select("select ?prop ?value where {<"+uri+"> ?pred ?value. filter (isLiteral(?value)). ?pred  <http://www.w3.org/2000/01/rdf-schema#label> ?prop} order by ?ASC(?prop)  ",function(arg2){openSparqlResultsPropertyPanelNotebookResults(arg2,layerO,e);});
    	       
	   }
    }
    else
	{
	
	 openSparqlResultsPropertyPanelBasis(uri);
	
	}
    
   
    
}

function openSparqlResultsPropertyPanelNotebookResults(arg,layerO,mouseEvent)
{
 
    try
    {
               if (this.marker!=null)
                   {
                     map.removeLayer(this.marker);
                   }
               
            if (arg==null) {return;}
            
    
            var table="";
            table+="<table style=\"width: 100%;border: 1px solid #000;border-collapse: collapse;font: normal 10pt Arial, Helvetica, sans-serif;color: #000;text-align: center;\"><thead>";
            table+="<tr><th style=\"background: #9cf;\" scope=\"col\">Property</th><th style=\"background: #9cf;\" scope=\"col\">Value</th></tr></thead><tbody>";
            
            for (var s in arg.results.bindings)
        	{
                        var binding = arg.results.bindings[s];
                      
                        try
                        {
                        var prop = binding.prop.value;
                        prop=prop.replace("(Âµm)","");
                        prop=prop.replace("Voor belasting genormeerde deflecties: ","");
                        
                        var value = binding.value.value;
        		table+="<tr style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\"> <td style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\">"+prop+"</td> <td>"+value+"</td>  </tr> ";
                        }
                        catch(e){}
        	}
                
            table+="</tbody></table>";
            
            
            if (layerO!=null)
            {
        	//console.log(layerO);
                var latlng = layerO._latlng;
                if (latlng==null)
                    {
                     latlng=map.layerPointToLatLng(map.mouseEventToLayerPoint(mouseEvent));
                    
                      //try { latlng = layerO._latlngs[0];} catch(e){}
                    }
                
                     
                    
                    
                if (latlng!=null)
            	{
            	    this.marker = L.marker(latlng);
            	    this.marker.bindPopup(table,{maxWidth : 500, zoomAnimation:false, autoPan:false}).openPopup();
            	    this.marker.addTo(map);
            	}
            }
     }
    catch(e){console.log(e);}
}

function removeMarker()
{
    try
    {
    if (this.marker!=null)
    {
      map.removeLayer(this.marker);
    }
    }
    catch(e){}

}

function openSparqlResultsPropertyPanelBasis(uri)
{

   
    try
    {
   if (this.marker!=null)
       {
         map.removeLayer(this.marker);
       }
    
    var uri_objects =Singleton.getInstance().uri_objects;
    if (uri_objects==null){return;}
    
    var layers=uri_objects[uri];
    var layerO=null;
    if (layers!=null){  
		
	layers=layers[0];
	for (var n in layers._layers){layerO=layers._layers[n];} 
	}
    
    
       

    
    var table="";
    table+="<table style=\"width: 100%;border: 1px solid #000;border-collapse: collapse;font: normal 10pt Arial, Helvetica, sans-serif;color: #000;text-align: center;\"><thead>";
    table+="<tr><th style=\"background: #9cf;\" scope=\"col\">Property</th><th style=\"background: #9cf;\" scope=\"col\">Value</th></tr></thead><tbody>";
   
    
      
 
    var bindings = Singleton.getInstance().json.results.bindings;
    for (var n in bindings)
	{
	  var binding= bindings[n];
	  if (binding.uri.value==uri)
	      {
            	  for (var prop in binding)
            	      {
            	          
            	          if ((prop!="geometry") && (prop!="uri"))
            	              {
            	               var value = binding[prop].value;
            	               table+="<tr style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\"> <td style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\">"+prop+"</td> <td>"+value+"</td>  </tr> ";
            	               
            	               
            	              }
            	      }
	      }
	}

    
   
    
	  table+="</tbody></table>";
	  
	 
	  
	
	if (layerO!=null)
	    {
	    var latlng = layerO._latlng;
	    if (latlng!=null)
		{
		
        	 
        	    this.marker = L.marker(latlng);
        	    this.marker.bindPopup(table,{maxWidth : 500, zoomAnimation:false, autoPan:false}).openPopup();
        	    this.marker.addTo(map);
        	    
        	  
		}
	    
	    }
	  
    }
    catch(error){console.log(error);}
}



function openPropertyPanel(e,o)
{
  
   // if (true) {return true;}
try
{
  // console.log("open property panel v1.5",e,o,o.uri);
   var table="";
 
  // table="<h1>Properties</h1>";
 //  table+="<style> " 
 //  table+=" .table{width: 60%;border: 1px solid #000;border-collapse: collapse;font: normal 10pt Arial, Helvetica, sans-serif;color: #000;text-align: center;}";
 // table+="</style>";
   
   
   table+="<table style=\"width: 100%;border: 1px solid #000;border-collapse: collapse;font: normal 10pt Arial, Helvetica, sans-serif;color: #000;text-align: center;\"><thead>";
   table+="<tr><th style=\"background: #9cf;\" scope=\"col\">Property</th><th style=\"background: #9cf;\" scope=\"col\">Value</th></tr></thead><tbody>";
   
  // var query=getDeflectionQuery(o);
  // query= getGLDQuery(o,"ASBUILT");
  // var query=getPNHQuery(o);
    var query=getBasisQuery(o);
   
 //  console.log(query);
   
   if ((Singleton.getInstance().SelectionQuery!=undefined) && (true) )
       {
       console.log("via Virtuoso object ",query);
       Singleton.getInstance().Virtuoso.select(query).then(function(result){
	 
                   var json =result.data;
                   try
           	{
           	    var bindings =json.results.bindings;
           	    for (var n in bindings)
           		{
           		   var binding = bindings[n];
           		   var prop=binding.prop.value;
           		   try {prop=prop.replace("heeft kenmerk Voor belasting genormeerde deflecties:","");}catch(error){}
           		  try {prop=prop.replace("http://otb.noord-holland.nl#","");}catch(error){}
              		
           		   var value="";
           		   try
           		   {
           		       value=binding.value.value;    
           		   }
           		   catch(error){}
           		   table+="<tr style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\"> <td style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\">"+prop+"</td> <td>"+value+"</td>  </tr> ";
           		}
           	}
           	catch(error){console.log(error);}
           	  table+="</tbody></table>";
           	  var popup=o.bindPopup(table);
           //	console.log("autopan off v2");
           	    o.bindPopup(table,{maxWidth : 500, zoomAnimation:false, autoPan:false}).openPopup();
           	 
                 
                   
                 });
       }
   else
       {
   
   
       console.log("via direct link test",query);
    //   Singleton.getInstance().SelectionQuery=null;
     //  Singleton.getInstance().url="http://192.168.99.100:8890";
	var json=   sparqlQuery(query,Singleton.getInstance().url,null, function(){
	try
	{
	    var bindings =json.results.bindings;
	    for (var n in bindings)
		{
		   var binding = bindings[n];
		   var prop=binding.prop.value;
		   var value="";
		   try
		   {
		       value=binding.value.value;    
		   }
		   catch(error){}
		   table+="<tr style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\"> <td style=\"border: 1px solid #000;border-collapse:collapse;padding: 2px;\">"+prop+"</td> <td>"+value+"</td>  </tr> ";
		}
	}
	catch(error){console.log(error);}
	  table+="</tbody></table>";
	  o.bindPopup(table,{maxWidth : 500,zoomAnimation:false, autoPan:false}).openPopup();
       }
	);
	  
       }
   
}
catch(error){console.log(error);}

}