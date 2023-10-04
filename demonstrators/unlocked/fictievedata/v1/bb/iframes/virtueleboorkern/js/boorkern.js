var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

// # ondergrond  #ffd08a
//#3e4d54 #cdd3d6 #596e78 #7a8b93 39ba8ae #bcc5c9 #dde2e4 // dab 2-asfalt


var colors=['#ffd08a','#3e4d54','#cdd3d6','#596e78','#7a8b93','#9ba8ae','#bcc5c9','#dde2e4'];

function showBoorkern(json,first){
  //init data
    document.latestJSON=json;
  if (json==null) {return;}
 // console.log(json);
  var animate=true;
  if (first==true){animate=false;}
  try
  {
    //init BarChart
    //console.log("nieuw barChart");
    var barChart = new $jit.BarChart({
      //id of the visualization container
      injectInto: 'infovis',
      //whether to add animations
      animate: false,
      //horizontal or vertical barcharts
      orientation: 'vertical',
      //bars separation
      barsOffset: 120,
      //visualization offset
      Margin: {
        top:-10,
        left: 15,
        right: 25,
        bottom: 0
      },
     
      //labels offset position
      labelOffset: 5,
      //bars style
      type: useGradients? 'stacked:gradient' : 'stacked',
      //whether to show the aggregation of the values
      showAggregates:false,
      //whether to show the labels for the bars
      showLabels:false,
      //labels style
      Label: {
        type: labelType, //Native or HTML
        size: 16,
        family: 'Arial',
        color: 'white'
      },
      //add tooltips
      Tips: {
        enable: true,
        onShow: function(tip, elem) {
          tip.innerHTML = "<b>" + elem.name.name + "</b>: " + elem.value+" mm";
        }
         
      },
      NodeStyles: {  
        enable: true,  
        type: 'Native',  
        stylesHover: {  
          dim: 30,  
          color: '#fcc'  
        },  
        duration: 100 ,
        stylesClick:true
      } ,
      Events:{ enable: true,onClick:function(arg,eventInfo,e){
	  //var iface= getIface();
	  // console.log("click virtuele boorkern asfaltlaag",arg,eventInfo,e);
	  if (arg.name!=null)
	      {
	      if (arg.name.uri!=null)
		  {
        Iface.sendEvent("singleSelection",arg.name.uri);
        document.barChart.selectUri(arg.name.uri);
		  }
	      else
		  {
		  showInfo("geen bouwlaag gegevens gevonden");
		  }
	      }
	  else
	      {
	      showInfo("geen bouwlaag gegevens gevonden");
	      }
	  
	  
	  //console.log(iface,arg.uri);
	  }}
    });
    //load JSON data.
    barChart.loadJSON(json);
    document.barChart=barChart;
    showLegenda(json);
    
         
    
  }
  catch(e)
  {console.log(e,json);}
}
function allReady()
{
  
}

function update(json,animate)
{
 
   if (document.getElementById("infovis-canvaswidget").style.width=="0px")
    {
     // console.log("boorkern widht is 0 ");
      var el=document.getElementById("infovis-canvaswidget");
      el.parentNode.removeChild(el);
      init();
    }
 
 
 
    if (document.barChart!=null)
	{
	if (animate!=null)
	    {
	    	//document.barChart.config.animate=animate;
	    }
		document.barChart.loadJSON(json);
		
		showLegenda(json);
		document.latestJSON=json; //  handig voor resize event
	}
}

function showLegenda(json)
{
    
    //end
    if (json==null){json={};}
    var datum = json.datum;
    if (datum==null) {datum="onbekend";}else{datum =datum.split("T")[0];}
    document.getElementById("legenda").innerHTML="legenda ("+datum+")";
    
    var list = $jit.id('id-list');
       
        
    //update json on click 'Update Data'
    
    //
    
    //dynamically add legend to list
    var legend = json.label,
        listItems = [];
  
    for(var i in legend) {
	
      listItems.push('<div class=\'query-color\' style=\'background-color:'
          + json.color[i] +'\'>&nbsp;</div>' + legend[i].name);
    }
    listItems=listItems.reverse();
    list.innerHTML = '<li>' + listItems.join('</li><li>') + '</li>';
}
