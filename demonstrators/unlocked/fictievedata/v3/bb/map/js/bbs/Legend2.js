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
    
    
    
  }


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



L.Control.Legend = L.Control.extend({
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
  
  
  
  visibleElement:function(kenmerknaam)
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
      
  },
  
 
  
  legendElement:function(kenmerknaam,waarde,decColor,beschrijving,extra,procent)
  {
   // console.log("legend  ",waarde);
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
      
      var s= "<tr><td> <input type='checkbox' onclick='onLegendItemClicked(this,\""+decColor+"\",\""+waarde+"\",\""+document.layerN+"\")'  checked></td> <td><input id='li"+L.Control.Legend.widgetID+"' onchange='onLegendColorClicked(this,\""+decColor+"\",\""+waarde+"\",\""+document.layerN+"\")'  type='color'  style='border: none;background-color: transparent;' value='#"+decColor+"' /></td>" ;
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
	  s= "<tr><td><input  onchange='onLegendColorClicked(this,\""+decColor+"\",\""+waarde+"\",\""+document.layerN+"\")'  type='color'  style='border: none;background-color: transparent;' value='#"+decColor+"' /></td><td><h4>"+kenmerknaam+ puntjes+waarde2+extra+"</h4></td>"+info+"</tr>";
	  }
      
      return s;
      
  },
  beginLegend:function(analyse)
  {
      let title="";
      if (analyse==null){analyse={title:"Legenda"}};
      
      
      if (document.add==true)
	  {
         if (document.l2==null)
         {
             title="<h3>&nbsp;&nbsp;&nbsp;"+analyse.title+"<div style='margin-right:2px;' align='right'><button  onclick='increaseMapFeatures(event)'>+</button><button   onclick='decreaseMapFeatures(event)'>-</button></div></h3>";
         }
         else
         {
             title="<h3>&nbsp;&nbsp;&nbsp;"+analyse.title+"</h3>";
        }
       }
        else
        {
	      title="<h3>&nbsp;&nbsp;&nbsp;"+analyse.title+"<div style='margin-right:2px;' align='right'><button  onclick='increaseMapFeatures(event)'>+</button><button   onclick='decreaseMapFeatures(event)'>-</button></div></h3>";
	    }
      
      
     return title+"<table class='legendtable' style='overflow-y:scroll;' >";
      
  },
  eindLegend:function()
  {
      
     return "</table>";
      
  },
  
  
  update:function(analyse)
  {
    
     if (document.add==true){
        document.layerN++;
        if (document.layer_analyse==null)   document.layer_analyse={};
        }
        else
        {
            document.l2=null;
             document.layerN=0;
             document.layer_analyse={};
              document.legendAfterFuncties=[];
        }
        document.layer_analyse["layer"+document.layerN]=analyse;
    try
    {
        this.removeFrom(map); //leaflet v0.7
     }
    catch(err){
      try{  map.removeControl(this);} catch(ee){}
    }
    if (analyse==null){return;}
    
    addLogo(analyse);
    this.addTo(map);
   
     
     this.analyse=analyse;
     this.useCheckbox=true;
      var l2=null; 
      if (analyse.color==true)
	  {
	
        	  if (analyse.colorGetal==true)      {this.useCheckbox=false;l2= this.colorGetal(analyse); }
        	  if (analyse.colorGetal==false)      {  l2= this.colorGetal(analyse); }
	  }
      
     if (l2==null)
     {
	   l2=this.beginLegend();
	   l2+="<tr><td></td><td><h4> geen legenda</h4></td></tr>";
	   l2+=this.eindLegend();
	
      }
      else
      {
         if (document.add==true){
            if (document.l2!=null) {document.l2+=l2;}else{document.l2=l2;}
        }else {  
            document.l2=l2;
         }
        }
    
     this.legend.innerHTML =document.l2;
     if (analyse.actief)
	     {
	      //this.n++;
	   for (var n in analyse.actiefO)
		{
	          this.n++;
		}
	  }
     
      if (document.add==true){
        this.n++;
           if (document.ln==null) {document.ln=this.n;}else{document.ln+=this.n;}
        }
        else
        {
            document.ln=this.n;
        }
        this.n=document.ln;
      if (this.n>15) {this.n=15;}
      
          var h=this.n*32+85;
	  this.legend.setAttribute("style", "width:250px;height:"+h+"px;overflow-y: auto;");
      
      runLegendAfterFuncties();
  },
  
  colorGetal:function(analyse)
  {
    return this.colorGetalNew(analyse);
   // return this.colorGetalOLD(analyse);
    },
  colorGetalNew:function(analyse)
  {
  //  console.log("colorgetal new")
      let l2=this.beginLegend(analyse);
     
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
     let slider='<div id="slider'+document.layerN+'" style="height:300px;"></div>';
   
      
      
      let useLabels=analyse.noLegend;
      console.log(analyse);
      let ar= analyse.colorAr;
      if (ar!=null)
      {
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
                   let min=ar[ar.length-1];
                      let max=ar[0];
                      let uniek=""+document.layerN;
                     let f =function (){createSlider(uniek,min,max,useLabels);}
                        document.legendAfterFuncties.push(f);
                   l3+="<table><tr><td width='75px'>"+"</td><td>"+slider+"</td></table>"+this.eindLegend();
                 //  l3+=""+slider+""+this.eindLegend();
                 this.n=10;
              
             
              return l3;
      }
      else
      {
      if (analyse.beschrijving==null) {analyse.beschrijving={}};
      if (analyse.extra==null) {analyse.extra={}};
       ar=analyse.colorO;
       var aantal=0;
       this.n=0;
       if (analyse.colorOVolgorde==null){analyse.colorOVolgorde=[];}
        
            for (var waarde in ar)
          {
            if (!analyse.colorOVolgorde.some(e => e == waarde)) {
              
                        analyse.colorOVolgorde.push(waarde);
                    } 
           }
       // zet de juiste waarde 
      // console.log("objecten kleur",ar,analyse);
       for (var waardeN in analyse.colorOVolgorde)
          {
           var waarde  = analyse.colorOVolgorde[waardeN];
           var colorN= analyse.colorO[waarde];
           var beschrijving=analyse.beschrijving[waarde];
           var extra=analyse.extra[waarde];
           var rgb=null;
           if (Array.isArray(colorN))
           {
           rgb=[parseInt(colorN[0]),parseInt(colorN[1]),parseInt(colorN[2])];
           }
           else
           {
                rgb = numberToColorHslRGB(colorN/255,0,1);
           }
              
              if (analyse.rgbcolor)
              {
                 
                  rgb=analyse.rgbcolorO[waarde];
                  rgb=[parseInt(rgb[0]),parseInt(rgb[1]),parseInt(rgb[2])];
              }
              
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
              
              
              l2+=this.legendElement(analyse.kenmerknaam,waarde,decColor,beschrijving,extra,procent); 
            this.n++;
          }
          
          
          
       l2+=this.eindLegend();
      return l2;
      
      }
   
      },
  
  

  colorGetalOLD:function(analyse)
  {
   
      var l2=this.beginLegend(analyse);
     
      if (analyse.actief)
	  {
	      l2="<table class='legendtable' style='overflow-y:scroll;'>";
	      l2+="<tr><td></td><td><h4>zichtbaar</h4></td></tr>";
	    for (var n in analyse.actiefO)
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
      
      
      var ar= analyse.colorAr;
      if (ar!=null)
	  {
	  if (analyse.beschrijving==null) {analyse.beschrijving={}};
	  if (analyse.extra==null) {analyse.extra={}};
	  
        	    var n=ar.length;
        	    var factor=1;
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
        	          
        	          l2+=this.legendElement(analyse.kenmerknaam,waarde,decColor,beschrijving,extra,procent);    	      
        	      }
        	  l2+=this.eindLegend();
        	 
        	  return l2;
	  }
      else
	  {
	  if (analyse.beschrijving==null) {analyse.beschrijving={}};
	  if (analyse.extra==null) {analyse.extra={}};
	   ar=analyse.colorO;
	   var aantal=0;
	   this.n=0;
       if (analyse.colorOVolgorde==null){analyse.colorOVolgorde=[];}
        
            for (var waarde in ar)
          {
            if (!analyse.colorOVolgorde.some(e => e == waarde)) {
              
                        analyse.colorOVolgorde.push(waarde);
                    } 
           }
       // zet de juiste waarde 
	  // console.log("objecten kleur",ar,analyse);
	   for (var waardeN in analyse.colorOVolgorde)
	      {
	       var waarde  = analyse.colorOVolgorde[waardeN];
	       var colorN= analyse.colorO[waarde];
	       var beschrijving=analyse.beschrijving[waarde];
	       var extra=analyse.extra[waarde];
	       var rgb=null;
	       if (Array.isArray(colorN))
		   {
		   rgb=[parseInt(colorN[0]),parseInt(colorN[1]),parseInt(colorN[2])];
		   }
	       else
		   {
	            rgb = numberToColorHslRGB(colorN/255,0,1);
		   }
	          
	          if (analyse.rgbcolor)
	          {
	             
	              rgb=analyse.rgbcolorO[waarde];
	              rgb=[parseInt(rgb[0]),parseInt(rgb[1]),parseInt(rgb[2])];
	          }
	          
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
	          
	          
	          l2+=this.legendElement(analyse.kenmerknaam,waarde,decColor,beschrijving,extra,procent); 
	        this.n++;
	      }
	   l2+=this.eindLegend();
 	  return l2;
	  
	  }
   
	  }
  
  
}
);

L.Control.Legend.widgetID=0;

function onVisibleItemClicked(checkbox,waarde,layerN)
{
    var json=getLJSON(layerN);
    for (var n in json.results.bindings)
	{
	   var object=json.results.bindings[n];
	   if(object.actief.value==waarde)
	       {
	          object.actiefVisible=checkbox.checked;
	       }
	}
    updateVisibility(layerN);
   
}

function getLJSON(layerN)
{
    return getLAnalyse(layerN).json;
}

    
 function getLAnalyse(layerN)
 {
    let json =Singleton.getInstance().legend.analyse;
   // console.log(layerN);
     if (layerN!=null)
    {
         
       let json2=document.layer_analyse["layer"+layerN];
     
       
       if (json2!=null)
       {
      //   console.log("found json",document.layer_analyse,"layer"+layerN);
        json=json2;
         
       }
       else
       {
     //   console.log("cannot find json",document.layer_analyse,"layer"+layerN);
        }
       
        
    }
    
    return json;
    
}

function updateVisibility(layerN)
{
    var uri_objects= Singleton.getInstance().uri_objects;
    if (uri_objects==null){return;}
    
    var json=getLJSON(layerN);
   // console.log("update visibility",json.results.bindings);
    for (var n in json.results.bindings)
	{
	try
	{
	   var object=json.results.bindings[n];
	   var b=false;
	     if (object.actiefVisible==null) {object.actiefVisible=true;}
	     if (object.colorVisible==null) {object.colorVisible=true;}
	     if (object.actiefVisible==false)
		 {
		  b=false;
		 }
	     else
		 {
		 if (object.colorVisible==true)
		     {
		        b=true;
		     }
		 }
	   
	   object.visible=b;
	   var uri = object.uri.value;
	   var layers= uri_objects[uri];
     //  console.log(layers);
	  if (layers!=null)
           {
	     for (var layerN in layers)
        	 {
        	    var layer=layers[layerN];
        	    
        	    	for (var fn in layer._layers)
        		{
        	    	   layer._layers[fn].feature.properties.visible=b;
        		     //  console.log("changing visbility");
        		}
        	    }
	    }
	}
	catch(error){}
    }
    updateAllTileLayers();
}


function onLegendItemClicked(checkbox,color,waarde,layerN)
{
    //checkbox.checked
    //color
   // console.log("leged item clicked ", waarde,Singleton.getInstance().legend.analyse.json);
    let uris={};
    let json=getLJSON(layerN);
   
    for (var n in json.results.bindings)
	{
	   var object=json.results.bindings[n];
	 
	   try
	   {
	   if(object.color.value==waarde)
	       {
	          // uris[object.uri.value]="true";
	          object.colorVisible=checkbox.checked;
	       }
	   }
	   catch(e)
	   {
	       console.log(json,object,e);
	   }
	   
	}
    updateVisibility(layerN);
    
   
}
function onLegendColorClicked(icolor,color,waarde,layerN)
{
    //console.log("click",icolor.value);
    //checkbox.checked
    //color
  
    var uris={};
    var json=getLAnalyse(layerN);
    
   //  console.log("legend item clicked ", layerN,json);
    
    var colorO=json.colorO;
    var rgb=hexToRgb(icolor.value);
   
    colorO[waarde]=rgb;
  //  console.log("recolor");
    recolor(json,waarde,color,rgb);
    
    console.log("#color:RGBA"+rgb.replace("rgb","").replace(")",",0.7)")+"@\""+waarde+"\";" ); // handy
    
    updateVisibility(layerN);
    
   
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgb("+ parseInt(result[1], 16)+","+ parseInt(result[2], 16)+","+ parseInt(result[3], 16)+")"
     : null;
}





