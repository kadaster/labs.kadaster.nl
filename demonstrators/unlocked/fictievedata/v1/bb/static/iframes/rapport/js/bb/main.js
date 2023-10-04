

function generateReport(results,sparql)
{
    
   // console.log(sparql);
    var bs=results.results.bindings;
    //  console.log(bs,sparql);
      var uri_arLuri={};
     var geenData=0;
      // create basis dataset
      for (var n in bs)
  	{
  		var b=bs[n];
  		var luriO={};
  		luriO.begin = b.begin.value;
  		luriO.end = b.end.value;
  		luriO.lengte= (luriO.end-luriO.begin)*100;
  	        luriO.luri = b.luri.value;
  	     
  	        if ( b.uri==null)
  	            {
  	           //   console.log("geen constructie data ");
  	            geenData++;
  	            }
  	        else
  	            {
  	        //  console.log("wel constructie data ");
  	          luriO.uri = b.uri.value;
  	        var ar=uri_arLuri[luriO.luri];
  	        if (ar==null){uri_arLuri[luriO.luri]=[];}
  	        ar=uri_arLuri[luriO.luri];
  	        ar.push(luriO);
  	        luriO.score=b.score.value;
  	        luriO.eis=b.eisScore.value;
  	       // console.log(luriO.eis,luriO.score);
  	        if (luriO.eis<luriO.score){luriO.ok=false;}else {luriO.ok=true}
  	            }
  	        
  	}
      
      
      
      
      var gok=0;
      var gnotOk=0;
      var gokL=0;
      var gnotOkL=0;
      var cok=0;
      var cokL=0;
      var cnokL=0;
      var cok=0;
      var cnok=0;
      for (var uri in uri_arLuri)
     {
  	var ar=uri_arLuri[uri];
  	var ok=true; 
  	
  	for (var n in ar)
  	    {
  	      var luriO=ar[n];
  	      if (luriO.ok==false){ok=false;cnok++}else{cok++;}
  	      
  	    }
  	if (ok){gok++;gokL+=Math.abs(ar[0].lengte);}
  	else
  	    
  	{gnotOk++;gnotOkL+=Math.abs(ar[0].lengte);}
  	
     }
      
      var data1=[["geen eisen/scores",geenData],["voldoen",gok],["Voldoen niet",gnotOk]];
      var graph1={data: {bindTo:"#pie1", columns:data1,      type : 'bar'  } , size: {       height: 400,       width: 400    }	  };
     var chart2 = c3.generate(graph1);
      
      
      d3.select("#pie1").append("text")
      .attr("x", "300px" )
      .attr("y", 50)
      .style("text-anchor", "middle")
      .text("Geluidswallen");
      
      $("#pie1").append(chart2.element); 
      
      
      
      
      
      var data=[["constructies voldoet",cok],["constructie voldoet niet",cnok]];
      var graph={   data: {            columns:data,          type : 'bar'  } , size: {       height: 400,       width: 400    }}
      var chart = c3.generate(graph);
      
     
      
      d3.select("#pie2").append("text")
      .attr("x", 300 )
      .attr("y", 50)
      .style("text-anchor", "middle")
      .text("Aantal constructies ");
      
      $("#pie2").append(chart.element);
      
       
      var data=[["constructie lengte voldoet",gokL],["constructie voldoet niet",gnotOkL]];
      var graph={    data: {            columns:data,          type : 'bar'  }, size: {       height: 400,       width: 400    } }
      var chart = c3.generate(graph);
      
      d3.select("#pie3").append("text")
      .attr("x", 100 )
      .attr("y", 50)
      .style("text-anchor", "middle")
      .text("Constructie lengte");
     
      $("#pie3").append(chart.element);




}