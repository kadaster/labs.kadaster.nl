

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
    this.legend.setAttribute("style", "width:200px;height:400px;overflow-y: auto;");
    if (!L.Browser.touch) {
	    L.DomEvent.disableClickPropagation(this.legend);
	    L.DomEvent.on(this.legend, 'mousewheel', L.DomEvent.stopPropagation);
	} else {
	    L.DomEvent.on(this.legend, 'click', L.DomEvent.stopPropagation);
	}
    return this.legend;
  },
  
  
  
  legendElement:function(kenmerknaam,waarde,decColor)
  {
      console.log("l1 ");
      var info="";
      info="<td><i class=\"fa fa-info-circle\"></i></td>";
      
      if (kenmerknaam==null){kenmerknaam="value:"}
      var puntjes=":";
      if (kenmerknaam==""){puntjes="";}
      
     // return "<tr><td ></td><td><h4> waarde:"+waarde+"</h4></td></tr>   <tr><td > <h2 class=\"circle\" style=\"background:#"+decColor+"\"/></td></tr>";
      return "<tr><td> <svg width='40' height='15'>  <rect x='0' y='0' rx='6' ry='6' width='40' height='15' onclick='onLegendItemClicked(\""+decColor+"\",\""+waarde+"\")'  style='fill:#"+decColor+";stroke:black;stroke-width:1;opacity:0.8' /></svg></td><td><h4>"+kenmerknaam+ puntjes+waarde+"</h4></td>"+info+"</tr>"
      
      //return "<tr><td> <h2 class=\"circle\" style=\"background:#"+decColor+"\"/></td><td><h4> waarde:"+waarde+"</h4></td></tr>";
      
  },
  beginLegend:function(analyse)
  {
      var title="";
      if (analyse==null){analyse={title:""}};
      if (analyse.title!="")
	  {
	  title="<h3>"+analyse.title+"</h3>";
	  }
      
     return title+"<table class='legendtable' style='overflow-y:scroll;' >";
      
  },
  eindLegend:function()
  {
      
     return "</table>";
      
  },
  
  
  update:function(analyse)
  {
      console.log(analyse);
    var l2=null;
      if (analyse.color==true)
	  {
        	  if (analyse.colorGetal==true)      {l2= this.colorGetal(analyse); }
        	  if (analyse.colorGetal==false)      {l2= this.colorGetal(analyse); }
	  }
     if (l2==null){l2=this.beginLegend();l2+="<tr><td></td><td><h4> geen legenda</h4></td></tr>";l2+=this.eindLegend();}     
      this.legend.innerHTML =l2;
      
      if (this.n>15) {this.n=15;}
      var h=this.n*25;
	  this.legend.setAttribute("style", "width:200px;height:"+h+"px;overflow-y: auto;");
      
  },
  
  colorGetal:function(analyse)
  {
      var l2=this.beginLegend(analyse);
      var ar= analyse.colorAr;
      if (ar!=null)
	  {
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
        	       //   var color= colorN + 256 * 0 + 65536 * (255-colorN);
        	          var rgb = numberToColorHslRGB(colorN/255,0,1);
        	          
        	          var color= rgb[2] +  rgb[1]*256 + 65536 * rgb[0];
        	          var decColor=color.toString(16);
        	          decColor = "000000".substr(0, 6 - decColor.length) + decColor;
        	          
        	          l2+=this.legendElement(analyse.kenmerknaam,waarde,decColor);    	      
        	      }
        	  l2+=this.eindLegend();
        	 
        	  return l2;
	  }
      else
	  {
	
	   ar=analyse.colorO;
	   var aantal=0;
	   this.n=0;
	  // console.log("objecten kleur",ar);
	   for (var waarde in ar)
	      {
	       
	       var colorN= analyse.colorO[waarde];
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
	          l2+=this.legendElement(analyse.kenmerknaam,waarde,decColor); 
	        this.n++;
	      }
	   l2+=this.eindLegend();
 	  return l2;
	  
	  }
   
	  }
  
  
});

function onLegendItemClicked(e,f)
{
    console.log("leged item clicked ",e,f);
    
}

