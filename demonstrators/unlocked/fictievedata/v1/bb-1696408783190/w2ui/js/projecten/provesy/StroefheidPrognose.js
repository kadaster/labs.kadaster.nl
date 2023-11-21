

var Stroefheid={};

Stroefheid.addCurve=function(option,name,data)
{
  var serie=
  {
      data: data,
      type: 'line',
      smooth: true,
      name:name,
      showSymbol: false,
      emphasis: {
        focus: 'series'
      }
    }
    if (option.series==null) option.series=[];
    option.series.push(serie);
  return serie;
}


Stroefheid.addVLine=function(option,name,x)
{
   // does not work 

   option.markLine = {
 
    label: name,
    data : [
      // Horizontal Axis (requires valueIndex = 0)
      {yAxis:x, lineStyle: {
        color: 'red',  // Color of the vertical line
        width: 2       // Width of the vertical line
      }}
    ]
  };




}


Stroefheid.addHLine=function(option,xdata,name,value){
    var data=[];
    for (var jaar in xdata) data.push(value);

    var serie= {
    data: data,
    type: 'line',
    smooth: false,
    showSymbol: false,
    name:name,
    emphasis: {
      focus: 'series'
    }
  }
  if (option.series==null) option.series=[];
  option.series.push(serie);
  return serie;
}

Stroefheid.addPoints=function(option,name,xdata,xydata,symbol,debug){
   var data=[];
   if (symbol==null) symbol="circle";
   try
   {
   for (var nx in xdata)
   {
    var b=false;
        var x=xdata[nx];
         for (var nxy in xydata)
         {
          if (debug) {console.log(xydata[nxy],x);}
            if (xydata[nxy].x==x)
            {
              if (debug) { console.log("FOUND POINT ",new Date(x) );} 
              data.push(xydata[nxy].y);
              b=true;
            }
         }
         if (b==false)
         {
          data.push(undefined);
         }
   }

 //   console.log(data);
  var serie= {
  data: data,
  type: 'scatter',
  symbolSize: 9,
  symbol:symbol,
  showSymbol: true,
  name:name,
  z:100
}
option.series.push(serie);
return serie;
   }
   catch(e)
   {
    console.log(e);
   }
}

function compareDatesStrings(a, b) {
  return new Date(a) - new Date(b);
}





Stroefheid.getDiagramSelector=function(id)
{

  Stroefheid.n++;
 
   var rs="";
   
          rs+="<option wbid='"+id+"' value='intensiteit'>verkeersintensiteit</option>";
          rs+="<option wbid='"+id+"' value='jaar'>jaar</option>";
          
   
   var pref= "<select wbid='"+id+"' id='diagram"+ Stroefheid.n+"' style='z-index:10;position:absolute;top:4px;right:40px'>";
   rs+="</select>";
   return pref+rs;
}


Stroefheid.getTitle=function(all)
{
   var rs="unknown";
   try{
    var data =all[0].data;
    var meta =data.meta[0];
    rs="RW"+meta.weg+" "+meta.baan+" "+meta.strook+" "+meta.van+"-"+meta.tot;
  }
  catch(e){console.log(e);}
    
   return rs;
}


Stroefheid.test=function()
{
  //Stroefheid.showStroefheidPrognose("http://www.rws.nl/VenR/xxx/Stroefheid#siwnzz16697");

  //Stroefheid.showStroefheidPrognose("http://www.rws.nl/VenR/xxx/Stroefheid#siznm26291");  //RW073 80.2-80.3 '1 HR R' '2 R- R'
  //Stroefheid.showStroefheidPrognose("http://www.rws.nl/VenR/xxx/Stroefheid#siznm26311");  //RW073 80.6-80.7 '1 HR R' '2 R- R'

  //Stroefheid.showStroefheidPrognose("http://www.rws.nl/VenR/xxx/Stroefheid#siznm26311");  //RW073 80.6-80.7 '1 HR R' '2 R- R'
  
  Stroefheid.showStroefheidPrognose("http://www.rws.nl/VenR/xxx/Stroefheid#siznm27621");  //RW073 80.6-80.7 '1 HR R' '2 R- R'
 
}

ObjectWidgets.showStroefheidPrognose=function(uri)
{
  Stroefheid.showStroefheidPrognose(uri);
}

Stroefheid.showStroefheidPrognose=function(uri)
{
     
       w2alert("calculating","stroefheid") ;
      var com={commando:"stroefheidcurve",uri:uri};

      var jo=command.sendCommand2(com,function(arg){
        w2popup.close();
       
        var data=arg.data;
        loadEChart(function(){ Stroefheid.showStroefheidPrognoseEChart(data);});
      
      });

}

Stroefheid.n=0;
Stroefheid.db={};

Stroefheid.selectDiagramEvent=function(arg)
{
  var id =arg.target.getAttribute("wbid") ;
  var label=arg.target.value;
  Stroefheid.showDiagramJaarInweva(id,label);

}


Stroefheid.setError=function(arg)
{
  console.log("error",arg);
}

Stroefheid.showStroefheidPrognoseEChart=function(arg)
{
try
{
  
   Stroefheid.n++;
    let id="echartID"+Stroefheid.n;
    

//    var body= Stroefheid.getStrookSelector(arg,id)+"<div style='position:relative;overflow:hidden;height:100%;width:100%'    id='"+id+"'></div>";
    var body= Stroefheid.getDiagramSelector(id)+"<div style='position:relative;overflow:hidden;height:100%;width:100%'    id='"+id+"'></div>";

    var wb=ObjectWidgets.showPopup("Stroefheid prognose "+Stroefheid.getTitle(arg),body,700,450);
      wb.id=id;
    

         var data =arg[0].data;
         
         wb.data=new StroefheidData(data,arg[1].diagramjson);
         wb.uri=wb.data.meta.uri;
         data.wb=wb;
        
     Stroefheid.db[id]=wb.data;
     data.selectID="diagram"+Stroefheid.n;
  
     
    const selectDropdown = parent.document.getElementById("diagram"+Stroefheid.n);
    selectDropdown.addEventListener('change', Stroefheid.selectDiagramEvent);
 

   // Stroefheid.showDiagram("intensiteit",id);
   Stroefheid.showDiagram(id,selectDropdown);
   wb.onresize=function(arg) {Stroefheid.showDiagram(id,selectDropdown);}
   wb.onfullscreen   =function(arg) {Stroefheid.showDiagram(id,selectDropdown);}
   
  
}
catch(e)
{
  Stroefheid.setError();
}


}

Stroefheid.showDiagram=function(id,selectDropdown)
{
  var chartDom = document.getElementById(id);
 try {echarts.dispose(chartDom);} catch(e){}
   
  Stroefheid.showDiagramJaarInweva(id,selectDropdown.value);
}





Stroefheid.showDiagramJaarInweva=function(id,type)
{
  var chartDom = document.getElementById(id);
  var data= Stroefheid.db[id];
  // construct x values
 var startjaar=data.getBeginJaar();
 
 var eindjaar=2075;
 var beginjaarDate=Date.parse(startjaar+"-01-01");

 

    var garantiejaar7= new Date(Date.parse(data.getBeginDate()));
    garantiejaar7.setFullYear(garantiejaar7.getFullYear()+7) ;
    garantiejaar7=garantiejaar7.getTime();
  
   
  var xdata=[beginjaarDate];
  xdata.push(garantiejaar7); 
  var begin=Date.parse(data.getBeginDate());
  for (var jaar=startjaar;jaar<eindjaar+1;jaar++)
  {
    var t=Date.parse(jaar+"-01-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-02-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-03-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-04-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-05-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-06-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-07-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-08-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-09-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-10-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-11-01");
    if (t>begin)  xdata.push(t);
    t=Date.parse(jaar+"-12-01");
    if (t>begin)  xdata.push(t);

    
}
  var measurements =data.getRelMeasurements();
  for (var n in measurements)   {      xdata.push(Date.parse(measurements[n].date));  }
   var ccxy=  data.getCurveDataCumIntCheckXY(xdata);
   if (ccxy.x!=null)  { xdata.push(ccxy.x);  }

   
// only for determining x values.. so redetermine grenswaardes
   var grens100=data.getCurveDataXY(xdata,"0.01",0);
   if (grens100.x!=null)  { xdata.push(grens100.x);  }

   var grens50=data.getCurveDataXY(xdata,"0.5",0);
   if (grens50.x!=null)  { xdata.push(grens50.x);  }
   var grens99=data.getCurveDataXY(xdata,"0.99",0);
   if (grens99.x!=null)  { xdata.push(grens99.x);  }
     xdata.sort();



     grens100=data.getCurveDataXY(xdata,"0.01",0);
     grens50=data.getCurveDataXY(xdata,"0.5",0);
     grens99=data.getCurveDataXY(xdata,"0.99",0);
     // 2 keer opdat goede x values are inserted
     var grenswaarden=[];
     if (grens100.x!=null)  { grenswaarden.push(grens100); xdata.push(grens100.x); }
     if (grens50.x!=null)  { grenswaarden.push(grens50);xdata.push(grens50.x);  }
     if (grens99.x!=null)  { grenswaarden.push(grens99);xdata.push(grens99.x);  }


       var xsdata =xdata.sort();
       xdata=xsdata;
      var xaxis=xsdata;
      var inweva=false;
      if (type=="intensiteit")
      {
        xaxis=data.getCurveData2(xsdata,"0.5").inweva;
        inweva=true;
      }

      


      
       var  option = {
   
   // title: {
       // text: '',
       // subtext: 'Fake Data'
    //  },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: false, readOnly: false },
          magicType: { show: false, type: ['line', 'bar'] },
          restore: { show: false },
          saveAsImage: { show: true }
        }
      },
    legend:{  orient: 'vertical',
                  right: 40,
                 top: 'center' ,
                 data: ['bovenkant', 'prognose', 'onderkant',"meetpunten","buiten model","metingen te vroeg", "cum_int","beheerdersoordeel (min)","beheerdersoordeel (max)","grenswaarden(0.01,05,0.99)","garantie"]
          },
          grid: {
          
            right: '25%',
          
          },
          dataZoom: [
            //{                id: 'dataZoomX',                type: 'slider',                xAxisIndex: [0],                filterMode: 'filter'            },
            {
              type: 'inside',
              start: 0,
              end: 100
            },
           // {                 id: 'dataZoomY',                type: 'slider',                yAxisIndex: [0],                filterMode: 'empty'            }
        ],

        xAxis: {
          type: 'category',
          axisLabel: {
            formatter: (function(value){
                    if (inweva) return parseInt((value/1000000)+"")+"m";
                 value= new Date(parseInt(value));
                 value = value.getFullYear()+"-"+(value.getMonth()+1);//+"-"+value.getDate();
              
                if (value.endsWith("-1-1")) return value.substr(0,4);
               // if (value.endsWith("-1-1")) return value.substr(0,4);
 
              //return moment(value).format("YYYY");
              return value;
                
            })
        },
          data: xaxis
        },
        yAxis: {
          type: 'value'
        },
        series: []
    };
    var opacity=0.4;
    var serie={};

//
  //nt
  //


 
  // actuele waaarden
  var points =[];
  
   for (var n in measurements)
   {
        var m=measurements[n];
      
        var xdate=Date.parse(m.date);
         var o={};
        o.x=xdate;
       // console.log(m);
        o.y=m.actuele_waarde;
        points.push(o);
   }

serie=Stroefheid.addPoints(option,"meetpunten",xdata,points,"triangle");

 // actuele waaarden
  points =[];
  var measurementsT =data.getTeVroegMeasurements();
 for (var n in measurementsT)
 {
      var m=measurementsT[n];
    
      var xdate=Date.parse(m.date);
       var o={};
      o.x=xdate;
     // console.log(m);
      o.y=m.actuele_waarde;
      points.push(o);
 }
 Stroefheid.addPoints(option,"metingen te vroeg",xdata,points,"triangle");
 points =[];
  var measurementsT =data.getBuitenMeasurements();
 for (var n in measurementsT)
 {
      var m=measurementsT[n];
    
      var xdate=Date.parse(m.date);
       var o={};
      o.x=xdate;
     // console.log(m);
      o.y=m.actuele_waarde;
      points.push(o);
 }
 Stroefheid.addPoints(option,"buiten model",xdata,points,"triangle");

 Stroefheid.addPoints(option,"cum_int",xdata,[ccxy],"roundRect");

Stroefheid.addPoints(option,"metingen te vroeg",xdata,points,"triangle");
Stroefheid.addPoints(option,"grenswaarden(0.01,05,0.99)",xdata,grenswaarden,"diamond");



//curves

var curveData=data.getCurveData(xsdata,"0.5");
serie=Stroefheid.addCurve(option,"prognose",curveData);
serie.lineStyle= {color: '#0000FF',width:3};     serie.color="#0000FF";

 curveData=data.getCurveData(xsdata,"0.01");
serie=Stroefheid.addCurve(option,"onderkant",curveData);
serie.lineStyle= {color: '#6a6868',  opacity: opacity,width: 2};serie.color='#6a6868';

curveData=data.getCurveData(xsdata,"0.99");
serie=Stroefheid.addCurve(option,"bovenkant",curveData);
serie.lineStyle= {color: '#888484',  opacity: opacity,width: 2};serie.color='#888484';


try{
  Stroefheid.addVLine(option,"garantie",garantiejaar7);
}
catch(exception){
  console.log(exception);
}




//
try{
 serie= Stroefheid.addHLine(option,xdata,"beheerdersoordeel (max)", data.diagramjson.threshold_values.as_plus);
 serie.lineStyle= { type: 'dashed',color: '#fc0000',  opacity:opacity,width: 1};
     serie.color="#fc0000";
  serie=Stroefheid.addHLine(option,xdata,"beheerdersoordeel (min)", data.diagramjson.threshold_values.as_min);
  serie.lineStyle= { type: 'dashed',color: '#fe0000',  opacity:opacity,width: 1};
   serie.color="#fe0000";
      
}
catch(e)
{}




     
var myChart = echarts.init(chartDom,'dark', {
    renderer: 'svg'
  });
myChart.setOption(option);



}


ObjectWidgets.showStroefheidPrognoseGChart=function(uri)
{

    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");

     

      var gchart =new GChart(null,null,{xanimate:true,connect:function(){}},null);
     
      var body= "<div width='100%' height='100%'   id='"+gchart.htmlid+"'></div><br>";

      gchart.options.animation={startup:true,
        duration: 500,
        easing: 'inAndOut',
      };
      gchart.options.chartArea={height:"95%",top:15,bottom:85};
      //  gchart.options.chartArea={height:"95%",width:"90%",top:0,bottom:0};
     

      var wb=ObjectWidgets.showPopup("Stroefheid rekenresultaten RW050 1 HR L  2 R-R  ",body,700,450);
    

       var f1=function(a,b,x)
       {
             let y=(-a*x*x)+b;
             return y;
       }
       var ar=[];
       var header=[];
       ar.push(header);
       header.push("Jaar");
       var onlyOnce=true;
       var bomin=111000;
       var bomax=112500;
     
       for (var jaar=2000;jaar<2028;jaar++)
       {
        
             var row=[jaar+""];
             
             ar.push(row)
            for (var n=0;n<10;n++) // 10 punten
            {   
                if (onlyOnce) header.push("n"+n);
                 var value = f1(2,(111112.0+(n*500)),((jaar-2000)*1))
                 row.push(value);
                 
            }  
            //beheerders oordeel
            row.push(bomin);
            row.push(bomax);
            //meetwaarde
            if (jaar<2020)
            {
                row.push(166000-(jaar*26)) 
            }
            else
            {
                row.push({})
            }
            onlyOnce=false;
           
           // console.log(row)
       }
     header.push("points");
     header.push("bo min");
     header.push("bo max");
     
    var scatter=header.length-2;
   

    var      data = google.visualization.arrayToDataTable(ar);
    var options = {
        title: 'Stroefheid',
        curveType: 'function',
        legend: { position: 'bottom' },
       // lineWidth: 8,
      //  opacity: 0.00, //points
        series:{}

      };
       var helft=(header.length/2)-1;
       options.series={};
       for (var i=0;i<header.length-2;i++)
       {
        if (helft>i)
            {
                 options.series[i]={opacity:0.00, lineDashStyle: [2, 2] ,dataOpacity:0.9,lineWidth: 1,color: 'rgb(0,'+(150+(9*i))+","+(150+(9*i))+')'};
            }
            else
            {
                options.series[i]={opacity:0.00, lineDashStyle: [2, 2] ,dataOpacity:0.9,lineWidth: 1,color: 'rgb(0,'+(50+(9*i))+","+(50+(9*i))+')'};
            }
            //selected line
            if (i==6)
            {
                options.series[i]={opacity:0.00, lineDashStyle2: [4, 4] ,dataOpacity:0.9,lineWidth: 1,color: 'rgb(255,'+(50+(9*i))+","+(50+(9*i))+')'};
            }
       }
       options.series[scatter]={type:"scatter", dataOpacity: 1, opacity: 1, lineWidth: 0,};
       options.series[scatter-1]={opacity:0.00, lineDashStyle2: [4, 4] ,dataOpacity:0.9,lineWidth: 1,color: 'rgb(200,50,50)'};
       options.series[scatter-2]={opacity:0.00, lineDashStyle2: [4, 4] ,dataOpacity:0.9,lineWidth: 1,color: 'rgb(220,50,50)'};
     // options={series:{1:{type:"scatter"},scatter:{ curveType: 'function',type:"line"}}}


gchart.drawChartDirectlyUsingDatatable("Line", data,options);
wb.onresize= function(w, h){
    gchart.drawChartDirectlyUsingDatatable("Line", data,options);
};


}