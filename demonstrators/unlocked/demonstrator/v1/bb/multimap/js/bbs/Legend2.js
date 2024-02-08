function addLogo(analyse)
{
    
 try{if (document.credctrl!=null)document.credctrl.removeFrom(map);}catch(er){try {map.removeControl(document.credctrl);}catch(e){}};
  try{if (document.credctrl2!=null)document.credctrl2.removeFrom(map);}catch(er){try {map.removeControl(document.credctrl2);}catch(e){}};
    try{if (document.credctrl3!=null)document.credctrl3.removeFrom(map);}catch(er){try {map.removeControl(document.credctrl3);}catch(e){}};
  if (analyse==null){return}
  if (analyse.useBIMVLogo==true){
     //1
 //if (logo==null){logo="bimv.png";}
            var logo="./logos/BIMV.png";
                 try   
                {
                 document.credctrl = L.controlCredits({
                    image: logo,
                    link: "http://www.buildingbits.nl/",
                    text: "BIM-V",
                    width: 130,
                    height:70
                }).addTo(map);   
                }
                catch(e){console.log(e);}
                
                logo="./logos/rws.png";
                 try   
                {
                 document.credctrl2 = L.controlCredits({
                    image: logo,
                    link: "http://www.buildingbits.nl/",
                    text: "BIM-V",
                    width: 250,
                    height:70
                }).addTo(map);   
                }
                catch(e){console.log(e);}
           }
           
        
           
           
   if (analyse.disclaimerBIMV==true)
   
   {
    var text = "De planjaren op basis van de VGD-metingen zijn indicatief en kunnen niet gebruikt worden voor de onderhoudsplanning. Meer informatie is verkrijgbaar bij Arthur van Dommelen en Mirella Villani.";
       w2popup.open({
      title: 'DISCLAIMER',
      body: '<div class="w2ui-centered">'+text+'</div>'
  });
    var logo="./logos/Disclaimer.png";
     try   
                {
                    document.credctrl3 = L.controlCredits({
                    image: logo,
                    link: "mailto:Hans@BuildingBits.nl",
                    text: text,
                    width: 128,
                    height:72,
                    clickEvent:function(){
                        
     w2popup.open({
      title: 'DISCLAIMER',
      body: '<div class="w2ui-centered">'+text+'</div>'
  });
    
    
                        
                        }}).addTo(map);   
                
               /* L.DomEvent
        .addListener(document.credctrl3 , 'click', function () {
            console.log("halloe")
                
                });
                console.log( document.credctrl3 );
                */
                }
                catch(e){console.log(e);}
    
}
    
}

function legendShowPopupText(beschrijving)
{
    
 
  w2popup.open({
      title: 'informatie',
      body: '<div class="w2ui-centered">'+beschrijving+'</div>'
  });
}

 document.layerN=0;
 document.layer_analyse={};
 document.legendAfterFuncties=[];
 
 function runLegendAfterFuncties()
 {
   // console.log("running after functions ",document.legendAfterFuncties);
    for (let n in  document.legendAfterFuncties)  
    {
         document.legendAfterFuncties[n].call(this);
    }

    document.legendAfterFuncties=[];
  }

function cancelLegendChangePopup(arg)
{
w2popup.close();
}

function okLegendChangePopup(form)
{
  var  layer= form.layer;
   var update=false;

   let kenmerk = form.record.kenmerk;
   let pred = null;
   for (key in layer.altColor) {if (layer.altColor[key]==kenmerk) pred = key;}
   let label = null;
   for (key in layer.altLabel) {if (layer.altLabel[key]==form.record.label) label = key;}
  
  if (layer.prefColor!=pred)
  {
         update=true;
  }
  if (layer.prefLabel!=label)
  {
    update=true;
  }
  layer.prefColor=pred;
  layer.prefLabel=label;
  if (update)
  {
    layer.json=null;
    layer.jsonOrg=null;
    layer.userReset();
    layer.setVisible(true,true);
    // update legend
    Singleton.getInstance().legend.updateTab(layer.uri);
   

    
  }
  
  w2popup.close();
  
}

  function changeAppearence(event,uri)
  {
    var layout= new w2layout({      name: 'layout',       padding: 0,      panels: [          { type: 'main', minSize: 450, overflow: 'hidden' }    ]  });
    var  layer = SparqlLayerDB.db[uri];
    var preds = [];
    for  (let n in layer.altColor)
    {
          preds.push(layer.altColor[n])
    }
    var labels=[];
    for  (let n in layer.altLabel)
    {
         labels.push(layer.altLabel[n])
    }
    var userPred=layer.altColor[layer.prefColor];
    var userLabel=layer.altLabel[layer.prefLabel];
    var form = new w2form({
      box: '#form',
      name: 'form',
      record: {
          kenmerk:userPred,label:userLabel
      },
      fields: [
      { field: 'kenmerk', type: 'select', required: true,
            html: { label: 'Kenmerk', text: ' ' ,attr: 'style="width: 300px"'},
            options: { items: preds }
        },
        { field: 'label', type: 'select', required: true,
            html: { label: 'Label', text: ' ',attr: 'style="width: 300px"' },
            options: { items: labels }
        },
       ],
       actions: {Cancel:cancelLegendChangePopup, Ok: function(){ okLegendChangePopup(this);} }
      });
      form.layer=layer;
      layer.form=form;

    w2popup.open({
      title: 'change view',
      body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>'
    })
    .then(() => {
        layout.render('#w2ui-popup #main')
        layout.html('main', form)
    })
   

  }



  document.uniek=0;

class LegendTab {
  constructor(uri,name,legend)
{
  this.name=name;
  this.uri=uri;
  this.layer= SparqlLayerDB.db[uri];
  
    this.layer.legendTab=this;
 
    this.legend=legend;
  
 
}

getHTML()
{
  let div = this.create();
  return div;
}

visibleElement(kenmerknaam)
  {
      if (kenmerknaam==null){kenmerknaam="value:"}
      var puntjes=":";
      if (kenmerknaam==""){puntjes="";}
      kenmerknaam= decodeURIComponent(escape(kenmerknaam));
      this.n++;
      var info="";
   
     // info="<td><i class=\"fa fa-info-circle\"></i></td>";
     // return "<tr><td ></td><td><h4> waarde:"+waarde+"</h4></td></tr>   <tr><td > <h2 class=\"circle\" style=\"background:#"+decColor+"\"/></td></tr>";
      return "<tr><td> <input type='checkbox' onclick='onVisibleItemClicked(this,\""+kenmerknaam+"\",\""+document.layerN+"\")'  checked></td><td><h4>"+kenmerknaam+"</h4></td>"+info+"</tr>"
      
      //return "<tr><td> <h2 class=\"circle\" style=\"background:#"+decColor+"\"/></td><td><h4> waarde:"+waarde+"</h4></td></tr>";
      
  }


  legendElement(kenmerknaam,waarde,decColor,beschrijving,extra,procent)
  {
   
      var info="";
    //  beschrijving="hallo dit is een text  koud he";
      if (extra==null){extra=""}
      if (beschrijving!=null)
	  {
      
	  	info="<td><i class='fa fa-info-circle' onclick=\"legendShowPopupText('waarde "+waarde+" : "+beschrijving+"')\"></i></td>";
	  }
    
      if (kenmerknaam==null){kenmerknaam="value:"}
      var puntjes=":";
      if (kenmerknaam==""){puntjes="";}
      
      waarde2=waarde;
      try
      {
	  var waarde2= decodeURIComponent(escape(waarde));
      }
      catch(e){}
      
      L.Control.Legend.widgetID++;
    //  if (procent==null){procent="";}
     // <div style=\"height:20px\" >
      let checked="checked";
      if (this.layer.itemVisibility[waarde]!=null) checked="";
     
      
      var s= "<tr><td> <input type='checkbox' onclick='onLegendItemClicked(this,\""+decColor+"\",\""+waarde+"\",\""+document.layerN+"\",\""+this.uri+"\")'  "+checked+"></td> <td><input id='li"+L.Control.Legend.widgetID+"' onchange='onLegendColorClicked(this,\""+decColor+"\",\""+waarde+"\",\""+document.layerN+"\",\""+this.uri+"\")'  type='color'  style='border: none;background-color: transparent;' value='#"+decColor+"' /></td>" ;
      if (procent!=null)
	  {
      		s+="<td> <p onclick='$(\"#li"+L.Control.Legend.widgetID+"\").click()' style=\"margin-top:2px;margin-bottom:0px;position:relative;left:-43px\"> "+procent+" </p> </td>" +
      		"<td><h4 style='position:relative;left:-25px'>"+kenmerknaam+ puntjes+waarde2+extra+"</h4></td>"+info+"</tr>";
	  }
      else
	  {
		s+="<td><h4 style=''>"+kenmerknaam+ puntjes+waarde2+extra+"</h4></td>"+info+"</tr>";
	  }
      
      
      if (this.useCheckbox!=true)
	  {
	  s= "<tr><td><input  onchange='onLegendColorClicked(this,\""+decColor+"\",\""+waarde+"\",\""+document.layerN+"\",\""+this.uri+"\")'  type='color'  style='border: none;background-color: transparent;' value='#"+decColor+"' /></td><td><h4>"+kenmerknaam+ puntjes+waarde2+extra+"</h4></td>"+info+"</tr>";
	  }
     
      return s;
      
  }
  beginLegend(analyse)
  {
   
      let titleLabel= this.layer.altColor[this.layer.prefColor];
      if (titleLabel==null) {titleLabel=""}
      // title="<h3>&nbsp;&nbsp;&nbsp;"+titleLabel+"<div style='margin-right:2px;' align='right'><button  onclick='increaseMapFeatures(event)'>+</button><button   onclick='decreaseMapFeatures(event)'>-</button><button   onclick='changeAppearence(event)'>%</button></div></h3>";

      var title="";
      if (this.layer.legendHasOptions)
      {
	     title="<span style='margin-bottom:10px' ><b>&nbsp;&nbsp;&nbsp;"+titleLabel+"</b><button style='float: right;margin-left:5px;margin-right:2px;'  onclick='changeAppearence(event,\""+this.uri+"\")'>&#9881;</button></span>";
      }
       else
       {
       title="<span style='margin-bottom:10px' ><b>&nbsp;&nbsp;&nbsp;"+titleLabel+"</b></span>";
       }
    return title+"<table class='legendtable' style='overflow-y:scroll;' >";
      
  }
  eindLegend()
  {
      
     return "</table>";
      
  }
  colorItems(analyse)
  {
    console.log("colorItems",analyse);
    let l2=this.beginLegend(analyse);
      if (analyse.beschrijving==null) {analyse.beschrijving={}};
      if (analyse.extra==null) {analyse.extra={}};
       var ar=analyse.items;
      
       var aantal=0;
       this.n=0;
       for (var label in ar)
          {
           var rgb  = ar[label];
           
           if (this.layer.itemColor[label]!=null) rgb=this.layer.itemColor[label];
          
           var beschrijving=analyse.beschrijving[label];
           var extra=analyse.extra[label];
          
       
          
              //  rgb = numberToColorHslRGB(colorN/255,0,1);
          
                            
              
              var color= rgb[2] +  rgb[1]*256 + 65536 * rgb[0];
              var decColor=color.toString(16);
              decColor = "000000".substr(0, 6 - decColor.length) + decColor;
            
          
              var procent=null;
              if (analyse.procent)
                  {
                      try {
                            
                             var nn=analyse.colorWaardeAantal[waarde];
                        
                             procent=Math.round((nn/analyse.totaal)*100)+"%";
                             
                      }catch(eee){console.log(eee);}
                  }
                  
                    if (analyse.lengteInKM)
                      {
                           try {
                                 
                                 var nn=analyse.colorWaardeLengte[waarde]+"";
                            //     console.log(analyse,analyse.colorWaardeLengte[waarde],nn);
                                 //extra="   ("+Math.round(nn)+" km)";
                                  extra="   ("+nn.split(".")[0]+" km)";
                                
                                 
                          }catch(eee){}
                      }
              
                    
                 
              l2+=this.legendElement("",label,decColor,beschrijving,extra,procent); 
            this.n++;
          }
          
          
          
       l2+=this.eindLegend();
      return l2;
      
      
  }

  colorGetal(analyse)
  {
  // console.log("colorgetal",analyse);
      let l2=this.beginLegend(analyse);
      var me=this;
      if (analyse.actief)
      {
          l2="<table class='legendtable' style='overflow-y:scroll;'>";
          l2+="<tr><td></td><td><h4>zichtbaar</h4></td></tr>";
        for (let n in analyse.actiefO)
        {
        
            l2+=this.visibleElement(n);     
        }
          var title="kleurschema";
          if ((analyse.title!="") &&(analyse.title!=null))
          {
            title=analyse.title;
          }
          title="<tr><td></td><td><h4>"+title+"</h4></td></tr>";
          l2+=title;
        
      }
      
      let l3=l2;
       //  l2="";
       document.uniek++;
       let uniek=document.uniek;
     let slider='<div id="slider'+uniek+'" style="height:300px;"></div>';
   
      
      
      let useLabels=analyse.noLegend;
      
      let ar= analyse.colorAr;
      if (ar==null)ar=[];
      
      if (analyse.beschrijving==null) {analyse.beschrijving={}};
      if (analyse.extra==null) {analyse.extra={}};
      
                let n=ar.length;
                let factor=1;
              if (n>17){n=17;factor=ar.length/17;} //else{
             this.n=n;
             //    color=numberToColorHsl(colorN/255,0,1);
              for (var ii=0;ii<n;ii++)
                  {
                      var i=Math.floor(factor*ii);
                      var waarde=ar[i];
                      var colorN= analyse.colorO[waarde];
                      var beschrijving=analyse.beschrijving[waarde];
                      var extra=analyse.extra[waarde];
                      var rgb = numberToColorHslRGB(colorN/255,0,1);
                      if (this.layer.itemColor[waarde]!=null) rgb=this.layer.itemColor[waarde];
                      var color= rgb[2] +  rgb[1]*256 + 65536 * rgb[0];
                      var decColor=color.toString(16);
                      decColor = "000000".substr(0, 6 - decColor.length) + decColor;
                      var procent=null;
                      if (analyse.procent)
                      {
                          try {
                                 
                                 var nn=analyse.colorWaardeAantal[waarde];
                                 procent=Math.round((nn/analyse.totaal)*100)+"%";
                                 
                          }catch(eee){}
                      }
                    
                      if (analyse.lengteInKM)
                      {
                           try {
                                 
                                   var nn=analyse.colorWaardeLengte[waarde]+"";
                                  extra="   ("+nn.split(".")[0]+" km)";
                                
                                 
                          }catch(eee){}
                      }
                  //    console.log(ar);
                     
                     
                      
                      l2+=this.legendElement(analyse.kenmerknaam,waarde,decColor,beschrijving,extra,procent);             
                  }

                      let min=analyse.min;
                      let max=analyse.max;
                      let userMin=this.layer.userMin;
                      let userMax=this.layer.userMax;
                     
                    
                      let uri2= this.uri;
                      let f =function (){createSlider(uniek+"",min,max,useLabels,uri2,userMin,userMax);}
                      document.legendAfterFuncties.push(f);
                      l3+="<table style='margin-top:15px'><tr><td width='75px'>"+"</td><td>"+slider+"</td></table>"+this.eindLegend();
               
                      this.n=10;
              
             
              return l3;
    
     
      
   
      }

      create()
      {
         var analyse=this.legend;
         if (analyse==null) analyse={};
         this.useCheckbox=true;
          var l2=null; 
          if (analyse.items==null)      {this.useCheckbox=false;l2= this.colorGetal(analyse); }
          if (analyse.items!=null)      {  l2= this.colorItems(analyse); }
      
         
         if (l2==null)
         {
            l2=this.beginLegend();
           l2+="<tr><td></td><td><h4> geen legenda</h4></td></tr>";
            l2+=this.eindLegend();
      
          }
         
        
           if (false)
           {
          if (this.n>15) {this.n=15;}
          
              var h=this.n*32+85;
               this.legend.setAttribute("style", "width:250px;height:"+h+"px;overflow-y: auto;");
         }
          return l2;
      }
    }







L.Control.Legend = L.Control.extend({

  testTabs:function()
  {
    var o1={color:true,title:"hallo dan tab 1",colorGetal:true};
    var o2={color:true,title:"hallo dan tab 2",colorGetal:true};
    var o3={color:true,title:"hallo dan title",colorGetal:true};
    var o4={color:true,title:"hallo dan imeva",colorGetal:true};
    
  
    this.addTab(new LegendTab("uri1","boorkern",o1));
    this.addTab(new LegendTab("uri2","VGD cat1",o1));
    this.addTab(new LegendTab("uri3","VGD cat 2",o3));
    this.addTab(new LegendTab("uri4","NWB 100",o2));
    this.addTab(new LegendTab("uri5","INWEVA",o4));
  
    this.showTabs();
    
  },


  options: {
    // topright, topleft, bottomleft, bottomright
    position: 'topright',
    placeholder: 'Legend',
  
  },
  initialize: function (options /*{ data: {...}  }*/) {
    // constructor
    L.Util.setOptions(this, options);
    this.n=10;
  },
  onAdd: function (map) {
    // happens after added to map
    
    this.legend = L.DomUtil.create('div', 'legend');
    this.legend.id="myLegendParent";
    this.legend.setAttribute("style", "width:300px;height:400px;overflow-y: auto;");

    
    if (!L.Browser.touch) {
	    L.DomEvent.disableClickPropagation(this.legend);
	    L.DomEvent.on(this.legend, 'mousewheel', L.DomEvent.stopPropagation);
	} else {
	    L.DomEvent.on(this.legend, 'click', L.DomEvent.stopPropagation);
         L.DomEvent.disableClickPropagation(this.legend);
	}
    return this.legend;
  },

  removeAllTabs:function()
  {
    this.tabs=[];
    this.uritab={};
  },

  removeTab:function(legendTab)
  {
    if (this.tabs==null) {this.tabs=[];}
    if (this.uritab==null) {this.uritab={};}
    delete this.uritab[legendTab.uri];
    this.tabs.remove(legendTab);
  },

  
addTab:function(legendTab)
{
     if (this.tabs==null) {this.tabs=[];}
     if (this.uritab==null) {this.uritab={};}
     this.tabs.push(legendTab);
     this.uritab[legendTab.uri]=legendTab;

},
updateTab:function(uri)
{
   this.showTab(uri);
},

showTab:function(uri)
{
  try
  {
    let html=this.uritab[uri].getHTML();
   // console.log(html);
     query('#selected-tab').html(html);
     runLegendAfterFuncties();
  }
  catch(e)
  {console.log(e);}
}
,

showTabs:function()
{
  if (this.tabs==null) {this.tabs=[];}
  while (this.legend.lastElementChild) {
    this.legend.removeChild(this.legend.lastElementChild);
  }

  let parent=document.createElement("div");
  parent.id="tabbar";
  this.legend.appendChild(parent);

  let parent2=document.createElement("div");
  parent2.id="selected-tab";
  parent2.style.padding="5px 5px";
  this.legend.appendChild(parent2);
  /*
  while (this.legendTab.lastElementChild) {
    this.legendTab.removeChild(this.legendTab.lastElementChild);
  }
  */
  let tabs=[];
  let selected=null;
    for (let n  in this.tabs)
    {
         let tab= this.tabs[n];
         tabs.push({ id: tab.uri, text: tab.name });
         selected=tab.uri;
    }
    let me=this;
    try {if (w2ui["tabs"]!=null) w2ui["tabs"].destroy(); } catch(e) {console.log(e);}

    let w2tab=new w2tabs({
      box: '#tabbar',
      name: 'tabs',
      active: selected,
      tabs: tabs,
      onClick(event) {
        me.showTab(event.target);
      }});
      this.w2tab=w2tab;
      try
      {
        query('#selected-tab').html(me.uritab[w2tab.active].getHTML());
      }
      catch(e){}
      try{
      w2tab.scrollIntoView(w2tab.active);
    }
    catch(e){}
    }
   }
  
);

L.Control.Legend.widgetID=0;

function onLegendItemClicked(checkbox,color,waarde,layerN,layerUri)
{
    let layer = SparqlLayerDB.db[layerUri];
    layer.changeItemVisibility(waarde,checkbox.checked);
   
}

function onLegendColorClicked(icolor,color,waarde,layerN,layerUri)
{
  let layer = SparqlLayerDB.db[layerUri];
  var rgb=hexToRgb(icolor.value);
  
  layer.changeItemColor(waarde,rgb);

   // console.log("#color:RGBA"+rgb.replace("rgb","").replace(")",",0.7)")+"@\""+waarde+"\";" ); // handy
    

    
   
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
     : null;
}





