$.fn.visibleHeight = function() {
    var elBottom, elTop, scrollBot, scrollTop, visibleBottom, visibleTop;
    scrollTop = $(window).scrollTop();
    scrollBot = scrollTop + $(window).height();
    elTop = this.offset().top;
    elBottom = elTop + this.outerHeight();
    visibleTop = elTop < scrollTop ? scrollTop : elTop;
    visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
    return visibleBottom - visibleTop
}



var GChart=function(layout,panel,widget,rv)
{
    GChart.init(this);
    Widget.nid++;
    var me=this;
    this.dao=widget;
    this.toolbarViz=true;
    
    this.title=this.dao[V2+"title"];
    
    // valuecolor altijd aanwezig
    var valueColor=this.dao[V2+"valueColor"];
    if (valueColor==null){valueColor=[];}
    if (!Array.isArray(valueColor)){valueColor=[valueColor];}
    this.valueColor={};
    for (var key in valueColor) {var values =valueColor[key].split(":"); this.valueColor[values[0]]=values[1];}
  
    
    if (this.title==null) {     this.title="no title";} 
    this.type=this.dao[V2+"chartType"];
    if (this.type==null) {  this.type="Bar"; }
   
    this.htmlid='chartWidget'+Widget.nid;
   
     me.height="inherit";
    this.layout=layout;
    this.panel=panel;
    
   
    this.options={width:'50%', height:400};
    
   
    if (this.dao[V2+"pointsVisible"]) {this.options.pointsVisible=true;}
    if (this.dao[V2+"curved"])	{	this.options.curveType= 'function';} 
    if (this.dao[V2+"vAxisMinValue"]!=null)	{this.options.vAxis={minValue:this.dao[V2+"vAxisMinValue"]}};
    if (this.dao[V2+"vAxisMaxValue"]!=null)	{if (this.options.vAxis==null) {this.options.vAxis={maxValue:this.dao[V2+"vAxisMaxValue"]}}else{this.options.vAxis.maxValue=this.dao[V2+"vAxisMaxValue"]}};
    
    
	
     this.options.chartArea={height:"100%",top:20};
     if (this.dao[V2+"animate"]) {
             this.options.animation={startup:true,
        	        duration: 500,
        	        easing: 'inAndOut',
        	      };
     }
     
    var height=this.dao[V2+"height"];
   // if (height!=null){this.options.height=parseInt(height)	;}
    
    
    
    
  
   // if (this.dao[V2+"searchbar"]!=null) { this.toolbarViz=this.dao[V2+"searchbar"];}
   // if (this.dao[V2+"title"]!=null) { this.header=this.dao[V2+"title"];}
     if (panel!=null)
	 {
    
                    w2ui[layout].on('resize', function(event) {
                	
                	    if (me.chart!=null){
                		
                		    var height=$("#"+me.htmlid).visibleHeight()-10;
          
                		}
                });
	 }
    
   

    
    if (panel!=null)
	{
			w2ui[layout].html(panel,"<div id='"+this.htmlid+"'></div>");
	}
    else
	{
	if (layout!=null)
	    {
	    this.htmlid=layout;
	    }
	}
    
   
    this.dao.connect(me,function(){
	if (rv!=null) {
	    rv.call(this);
	}
        if (this.panel!=null)
            {
                var height= w2ui[layout].box.clientHeight-10;
        	    var width= w2ui[layout].box.clientWidth-10;
        	    me.height=height;
        	    me.width=width;
            }
        
         
    }); // set connections
    
  
}
GChart.prototype.resize=function()
{
    var height= w2ui[this.layout].box.clientHeight-10;
    var width= w2ui[this.layout].box.clientWidth-10;
    this.height=height;
    this.width=width;
     this.chart.clearChart();
    this.chart.draw(this.data, this.options);
}
GChart.prototype.correctSize=function()
{
    if (true){return;}
    var me=this;
    if (this.layout==null)
    {
      
          setTimeout(function(){me.correctSize},250);
    }
    else
    {
          console.log("really correct size ");
                var height= w2ui[this.layout].box.clientHeight-10;
                var width= w2ui[this.layout].box.clientWidth-10;
                this.height=height;
                this.width=width;
                 this.chart.clearChart();
                this.chart.draw(this.data, this.options);
    }
    
}



GChart.init=function(gchart)
{
    if (GChart.initializing==true){return;}
    if (GChart.ready==true){return;}
    GChart.initializing=true;
    var script = document.createElement('script');
    script.onload = function () 
    {
            GChart.initializing=false;
            
            google.charts.load('current', {'packages':['corechart','gauge','table','timeline']});
            google.charts.setOnLoadCallback(function(){
            // console.log("Gchart is ready");
                GChart.ready=true;
                });
            
    };
    script.src = "https://www.gstatic.com/charts/loader.js";
    var h=document.getElementsByTagName("Head");
    h[0].appendChild(script); //or something of the likes

}




GChart.prototype.refresh=function()
{
    
   // console.log("gchart refresh");
}







GChart.prototype.setSparqlResults=function(results,sparql)    {
     //   // from connection
      //console.log("Gchart widget set sparql results ",results,sparql);
       
        var me=this;
       // pipe this through to the iframe.
        if (results==null) {return;}
      
      if (sparql==null){
          if (DEBUG){   console.log("geen sparql query voor tree gevonden! ",sparql);}
          return;}
      
      try
      {
     
    	//console.log(results);
	
	    
    	this.drawDashboardChart(results,this.options);
    	
      }
      catch(error){console.log(error);}
    //  unlock();
  


}
GChart.prototype.get2ColDataset=function(data2)
{
    
    //console.log("creaet default number dataset");
    // create a default string,numbe3r dataset
    var data = new google.visualization.DataTable();
    var keyS=data2.head.vars[0];
    var valueS=data2.head.vars[1]
    data.addColumn('string', keyS);
    data.addColumn('number', valueS);
    var ar=[];
    for (var n in data2.results.bindings)
	{
	
	  var binding=data2.results.bindings[n];
	     var key=binding[keyS].value;
	     var value=binding[valueS].value;
	     value=parseFloat(value);
	      ar.push([key,value]);   
	}
  
  data.addRows(ar);
  return data;
}
GChart.prototype.get3ColDataset=function(data2)
{
    
    //console.log("creaet default number dataset");
    // create a default string,numbe3r dataset
    var data = new google.visualization.DataTable();
    var keyS=data2.head.vars[0];
    var valueS=data2.head.vars[1];
    var valueS2=data2.head.vars[2]
    data.addColumn('string', keyS);
    data.addColumn('number', valueS);
    data.addColumn('number', valueS2);
    var ar=[];
    for (var n in data2.results.bindings)
	{
	
	  var binding=data2.results.bindings[n];
	     var key=binding[keyS].value;
	     var value=binding[valueS].value;
	     value=parseFloat(value);
	     var value2=binding[valueS2].value;
	     value2=parseFloat(value2);
	     
	     
	      ar.push([key,value,value2]);   
	}
  
  data.addRows(ar);
 data.sort([{column: 0}]);
  return data;
}

GChart.prototype.getStackedColDataset=function(data2)
{
  
    
    // create a stacked dataset using 3 cols
    var data = new google.visualization.DataTable();
    var key1S=data2.head.vars[0];
    var key2S=data2.head.vars[1];
    var valueS=data2.head.vars[2];
    var key1_o={};
    var key2_uniek={};
  
    var ar=[];
    for (var n in data2.results.bindings)
	{
	     var binding=data2.results.bindings[n];
	     var key1=binding[key1S].value;
	     var o=key1_o[key1];if (o==null){o={};key1_o[key1]=o;}
	     var key2=binding[key2S].value;
	     key2_uniek[key2]="";
	     var value=binding[valueS].value;
	     o[key2]=parseFloat(value);
	}
    
   var stack=[this.title];
   
   
   var keys = Object.keys(key2_uniek);
   keys=keys.sort();
   for (var key2 in keys){stack.push(keys[key2]);}
   
   /*
   for (var key2 in key2_uniek){stack.push(key2);}
   
   */
   var rows=[stack];
   
   for (var key in key1_o)
       {
          var row = [];
          row[0]=key;
          for (var key2 in  key2_uniek)
          {
             var value = key1_o[key][key2];
             if (value==null) {value=0;}
             row.push(value);      
          }
          
          rows.push(row);
        
       }
   
   
   var data = google.visualization.arrayToDataTable(rows);
     
  return data;
}
GChart.prototype.getTableData=function(data2)
{
  
   // console.log(data2);
    // create a stacked dataset using 3 cols
    var data = new google.visualization.DataTable();
    var headers = data2.head.vars;
    for (var n in headers)
	{
	    var header = headers[n];
	    data.addColumn('string', header);
	    //data.addColumn('number', h2);
	}
    
    for (var n in data2.results.bindings)
	{
	     var binding=data2.results.bindings[n];
	     var ar =[];
	     for (var n in headers)
		 {
		 	var value="";
		 	try {value= binding[headers[n]].value;} catch(e){}
		        ar.push(value);
		 }
	  
	     data.addRow(ar);
	}
    
    return data;
}


GChart.prototype.getTimelineYearData=function(data2)
{
  
   // console.log(data2);
    // create a stacked dataset using 3 cols
    var dataTable = new google.visualization.DataTable();
    var headers = data2.head.vars;
    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    for (var n in headers)
	{
	    var header = headers[n];
	  
	    //data.addColumn('number', h2);
	}
    var id=0;
    for (var n in data2.results.bindings)
	{
	     var binding=data2.results.bindings[n];
	     id++;
	    
	     for (var n in headers)
		 {
		       
		 	var value="";
		 	try {value= binding[headers[n]].value;} catch(e){}
		 	if (value!="")
		 	    {
		 	      var ar =[id+""];
		 	     ar.push(headers[n]);
		 	     var jaartal=parseInt(value);
		 	     ar.push(new Date(jaartal,0,0));
		 	     ar.push(new Date((jaartal+1),0,0));
		 	    dataTable.addRow(ar);
		 	    }
		        
		 }
	  
	     
	}
    
    return dataTable;
}


GChart.prototype.getCandlestickData=function(data2)
{
  
   // console.log(data2);
    // create a stacked dataset using 3 cols
    var data = new google.visualization.DataTable();
    var h1=data2.head.vars[0]; // naam
    var h2=data2.head.vars[1];  //min
    var h3=data2.head.vars[2]; //beg
    var h4=data2.head.vars[3];// end
    var h5=data2.head.vars[4]; // max
   
   
    
    data.addColumn('string', h1);
    data.addColumn('number', h2);
    data.addColumn('number', h3);
    data.addColumn('number', h4);
    data.addColumn('number', h5);
    
    
    for (var n in data2.results.bindings)
	{
	     var binding=data2.results.bindings[n];
	     var ar =[binding[h1].value,parseFloat(binding[h2].value),parseFloat(binding[h3].value),parseFloat(binding[h4].value),parseFloat(binding[h5].value)];
	  
	     data.addRow(ar);
	}
    
    return data;
}
    
    
    


GChart.prototype.drawDashboardChart=function(data2,options)
{
   var me=this;
    if (GChart.ready!=true)
    {
      
        setTimeout(function(){me.drawDashboardChart(data2,options);}, 250);
        return;
    }
    
    // Set chart options
    if (options==null)
        {options={};}
    
  
    // Create the data table.
   if ((this.type=="Candlestick") || (this.type=="Table") || (this.type=="TimelineYear") )
       {
          if (this.type=="Candlestick") { var data=this.getCandlestickData(data2);} 
          if (this.type=="Table") { var data=this.getTableData(data2);} 
          if (this.type=="TimelineYear") { 
              var data=this.getTimelineYearData(data2);
              options.hAxis= {
        	      minValue: new Date(2019, 0, 0),
        	      maxValue: new Date(2040, 0, 0)
        	    };
                    options.height="200px";
              
              } 
          
       }
   else
       {
    
    if (data2.head.vars.length==2)
	{
	  	var  data=this.get2ColDataset(data2);
	  	//color normal 
	}
    else
	{
	if (me.type.endsWith("2"))
	    {
	      var data=this.get3ColDataset(data2);
	      //options.series= {};
	 	options.is3D= true;
	    }
	else
	    {

	 	var  data=this.getStackedColDataset(data2);
	 	//color in time series
	 	//console.log(data,this.valueColor);
	 	options.series= {};
	 	options.is3D= true;
			  //  0:{color:'Red'},
			  
			  
	 	for (var n in data.vg)
	 	    {
	 	      if (n>0)
	 		  {
	 		     var label = data.vg[n].label;
	 		     var color=this.valueColor[label];
	 		     if (color!=null)
	 			 {
	 			   options.series[n-1]={color:color};
	 			 }
	 		  }
	 	    }
	    }
	
	}
    
   }
    
    

    if (this.chartReady!=true)
	{
          
             options.title=this.title;
             if (options.height==null)    {  options.width="100%";options.height=me.height;}
             if (options.is3D==null){options.is3D=true;}
             if (data2.head.vars.length==3) {     options.isStacked= true;}
          
            var type=this.type;
            var div=this.htmlid;
            // Instantiate and draw our chart, passing in some options.
            if (type=="Pie") {	    var chart = new google.visualization.PieChart(document.getElementById(div));} 
            if (type=="Col") {	    var chart = new google.visualization.ColumnChart(document.getElementById(div));} 
            if (type=="Col2") {	    var chart = new google.visualization.ColumnChart(document.getElementById(div));  options.isStacked= false;} 
            
            
            
            
            if (type=="Bar") {	    var chart = new google.visualization.BarChart(document.getElementById(div));}
            if (type=="Bar2") {	    var chart = new google.visualization.BarChart(document.getElementById(div)); options.isStacked= false;} 
            if (type=="Line") {	    var chart = new google.visualization.LineChart(document.getElementById(div)); document.line=chart;} 
            if (type=="Area") {    var chart = new google.visualization.AreaChart(document.getElementById(div));}
            if (type=="Table") {    var chart = new google.visualization.Table(document.getElementById(div));}
            if (this.type=="TimelineYear") {    var chart = new google.visualization.Timeline(document.getElementById(div));}
         
            if (type=="Candlestick") {  
        	
                     
        	  var chart = new google.visualization.CandlestickChart(document.getElementById(div));
        	  options.legend="none";
        	 
        	}
            
            if (type=="Gauge") {
        	
        	var parser = new DOMParser();
        	
        	while (document.getElementById(div).firstChild) document.getElementById(div).removeChild(document.getElementById(div).firstChild);
        	
        	document.getElementById(div).appendChild( parser.parseFromString("<h2  align='center'>"+me.title+"</h2>",'text/xml').firstChild); 
        	document.getElementById(div).appendChild( parser.parseFromString("<div id='"+div+"gauge'></div>",'text/xml').firstChild);
        	div=div+"gauge";
        	var data=[ ['Label', 'Value']];
	
        	 var data = google.visualization.arrayToDataTable(data);
        	 var chart = new google.visualization.Gauge(document.getElementById(div)); 
        		var aantalX=0;
        		for (var n in data2.results.bindings)
        		    {
        		       aantalX++;
        		       if (aantalX<2)
        			   {
        			   	var b = data2.results.bindings[n];
        			   	data.push([b.label.value,parseFloat(b.value.value)]);
        			   	options.min=b.min.value;
        			   	options.max=b.max.value;
        			   }
        		    }
           			}
            if (type=="Donut"){ var chart = new google.visualization.PieChart(document.getElementById(div));options.pieHole=0.4;}
            if (chart==null) 
            {
        	   console.log("chart =null: choosing pie chart");
        	   var chart = new google.visualization.PieChart(document.getElementById(div));
        	
        	}

           this.chart = chart;
           
	}
     //console.log("really drawing chart ",options);
    this.chart.draw(data, options);
    this.chartReady=true;
    this.data=data;
    this.options=options;
   
  }
  
  GChart.prototype.drawChartDirectlyUsingDatatable=function(type, data,options)
{
    var me=this;
    if (GChart.ready!=true)
    {
      
        setTimeout(function(){me.drawChartDirectly(type,cols,ar,options);}, 250);
        return;
    }
    var div=this.htmlid;
    if (type=="Pie") {     var chart = new google.visualization.PieChart(document.getElementById(div));} 
    if (type=="Col") {      var chart = new google.visualization.ColumnChart(document.getElementById(div));} 
    if (type=="Bar") {      var chart = new google.visualization.BarChart(document.getElementById(div));}
    if (type=="Line") {     var chart = new google.visualization.LineChart(document.getElementById(div)); document.line=chart;} 
    if (type=="Area") {    var chart = new google.visualization.AreaChart(document.getElementById(div));}
    if (type=="Table") {    var chart = new google.visualization.Table(document.getElementById(div));}

this.chart=chart;

// Set chart options
if (options==null)
{options={};}

options.is3D=true;
if (options.title==null){ options.title=this.title;}
   if (options.title==null) {options.title="";}
if (options.height==null)    {  options.width="100%";options.height=me.height;}
options.height=me.height;
  options.height=400;
  options.title="";
 options.chartArea={top:"50"};
this.chart.draw(data, options);
this.chartReady=true;
this.data=data;
this.options=options;

}
  
GChart.prototype.drawChartDirectly=function(type, cols,ar,options)
{
     var me=this;
    if (GChart.ready!=true)
    {
      
        setTimeout(function(){me.drawChartDirectly(type,cols,ar,options);}, 250);
        return;
    }
    
    var data = new google.visualization.DataTable(); //data table is niet beschikbaar zonder google load
     
        for (var n in cols)
        {
            var col =cols[n];
            data.addColumn(col.type,col.name);    
        }
        
        
       
      data.addRows(ar);
      var div=this.htmlid;
            if (type=="Pie") {     var chart = new google.visualization.PieChart(document.getElementById(div));} 
            if (type=="Col") {      var chart = new google.visualization.ColumnChart(document.getElementById(div));} 
            if (type=="Bar") {      var chart = new google.visualization.BarChart(document.getElementById(div));}
            if (type=="Line") {     var chart = new google.visualization.LineChart(document.getElementById(div)); document.line=chart;} 
            if (type=="Area") {    var chart = new google.visualization.AreaChart(document.getElementById(div));}
            if (type=="Table") {    var chart = new google.visualization.Table(document.getElementById(div));}
    
    this.chart=chart;
    
    // Set chart options
    if (options==null)
        {options={};}
        
        options.is3D=true;
        if (options.title==null){ options.title=this.title;}
           if (options.title==null) {options.title="";}
        if (options.height==null)    {  options.width="100%";options.height=me.height;}
        options.height=me.height;
          options.height=400;
          options.title="";
         options.chartArea={top:"50"};
    this.chart.draw(data, options);
    this.chartReady=true;
    this.data=data;
    this.options=options;
    
   // this.correctSize();
  
 }


GChart.prototype.fireEvent=function(eventString,arg)
{
    // pipe this through to the iframe.    
    // console.log(this);
     var me=this;
     try
     {
   
    me.latestArg=arg;
     
    // console.log("Iframe ontvangt een event (zou incorrect kunnen zijn) "+eventString,arg);
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
	  MySparql.select(sparql,function(results)
		    {
		         me.setSparqlResults(results,sparql);
		    }); 
     }
     }
     catch(error){console.log(error);}
    
}