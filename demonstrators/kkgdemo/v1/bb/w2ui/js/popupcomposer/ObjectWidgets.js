var ObjectWidgets=function(){}
var V2="http://www.bbsgroep.nl/application/v2/"; 


ObjectWidgets.showChartPopupDirect=function(title,chartType,cols,ar,options,width, height)
{
   
     var gchart =this.showChartPopupBase("uri",chartType,title,"",width, height,options);
     gchart.drawChartDirectly(chartType, cols,ar,options);
   return gchart;
   
    
}

ObjectWidgets.showChartPopup=function(uri,chartType,title,sparql,width, height,options)
{
    var gchart =this.showChartPopupBase(uri,chartType,title,sparql,width, height,options);
      MySparql.select(sparql,function(arg){
      
    
        gchart.setSparqlResults(arg,sparql);
    });
    
    
 }
    
ObjectWidgets.showChartPopupBase=function(uri,chartType,title,sparql,width, height,options)
{
  //  console.log("shop chart popupbase");
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
    if (width==null)
	{
	   width =850;
	}
    if (height==null)
	{
	  height =450;
	}
   // ObjectWidgets.showPopup("RWS Val deflectie meting (OB02871)","under construction",800,400);
    
  
       
    
    
    var gchart =new GChart(null,null,{xanimate:true,connect:function(){}},null);
    gchart.options.animation={startup:true,
 	        duration: 500,
 	        easing: 'inAndOut',
 	      };
           
        if (options!=null)
        {
            for (var key in options)
            {
                gchart.options[key]=options[key];
            }
        }   
        
       // gchart.options.explorer={ actions: ['dragToZoom', 'rightClickToReset'],          axis: 'horizontal',       keepInBounds: true  , maxZoomIn: 211124.0   };
      
       // console.log("options 2",gchart.options);
           
           
    gchart.options.chartArea={height:"95%",top:15,bottom:85};
  //  gchart.options.chartArea={height:"95%",width:"90%",top:0,bottom:0};
    gchart.type=chartType;
   
    new WinBox({
         width:width,
         height:height,
        title: title,
        html: "<div  width='100%' heigth='100%' id='"+gchart.htmlid+"'></div>"
    });

     
     
   
  
  return gchart;
    
}


//
//experimental
//
//

ObjectWidgets.showChartsPopup=function(title,sparqls,optionss,width,height)
{
    // multiple charts// werkt nog niet goed
    
   
    
   
    if (width==null)
    {
       width =850;
    }
    if (height==null)
    {
      height =450*optionss.length;
    }
    
       
    
    var body="";
    var gcharts=[];
    for (var n in optionss)
    {
         
       var options= optionss[n];
        var xanimate=V2+"animate";
        var gchart =new GChart(null,null,{xanimate:true,connect:function(){}},null);
        gchart.options.animation={startup:true,
                duration: 500,
                easing: 'inAndOut',
              };
               
            if (options!=null)
            {
                for (var key in options)
                {
                    gchart.options[key]=options[key];
                }
            }   
               
               
     //   gchart.options.chartArea={height:"50%",top:15,bottom:85};
        gchart.options.chartArea={height:"400px"};
    //    gchart.options.explorer={           actions: ['dragToZoom', 'rightClickToReset'],          axis: 'horizontal',       keepInBounds: true     };
      //  gchart.options.chartArea={height:"95%",width:"90%",top:0,bottom:0};

        // console.log("options",gchart.options);
        gchart.type=options.chartType;
        //g.type="Bar2";
       body+= "<div width='100%' height='100%'   id='"+gchart.htmlid+"'></div><br>";
       gcharts.push(gchart);
    }
      
    new WinBox({
        width:width,
        height:height,
        title: title,
        html: body
    });
   
     
   
   for (var n in gcharts)
   {
    var gchart=gcharts[n];
    var sparql = sparqls[n];
        MySparql.select(sparql,function(arg,a,gchart){
         // console.log("setting sparql results for chart ",b,c,d);
            gchart.setSparqlResults(arg,sparql);
          
          //  gchart.refresh();
          //  gchart.resize();
        
        },null,null,gchart);
    }
 
}



ObjectWidgets.showPopup=function(title,div,width,height)
{
      
 
    var wb =new WinBox({
        width:width,
        height:height,
        title: title,
        html: div,
       
    });

    return wb;
    
 
}


