function saveAsGeoJSON()
{
    
   console.log(Singleton.getInstance(),window.top);
   

}


     function stringToColour(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = '#';
      for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
      }
      return colour;
      }
      
      
     

      
      
     function stringToRGBAr(str) {
          let hex = stringToColour(str);
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16)+"",parseInt(result[2], 16)+"",parseInt(result[3], 16)+"",1]
  
        }  
        
        
        



function numberToColorHslRGB(i, min, max) {
    var ratio = i;
    if (min> 0 || max < 1) {
        if (i < min) {
            ratio = 0;
        } else if (i > max) {
            ratio = 1;
        } else {
            var range = max - min;
            ratio = (i-min) / range;
        }
    }

    // as the function expects a value between 0 and 1, and red = 0� and green = 120�
    // we convert the input to the appropriate hue value
    var hue = ratio * 1.2 / 3.60;
    //if (minMaxFactor!=1) hue /= minMaxFactor;
    //console.log(hue);

    // we convert hsl to rgb (saturation 100%, lightness 50%)
    var rgb = hslToRgb(hue, 1, .5);
   return rgb
  
}
function numberToColorHsl(i, min, max) {
    
    var rgb=numberToColorHslRGB(i, min, max);
    
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'; 
}


function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}






(function(window) {


L.Icon.Pulsed = L.DivIcon.extend({

    options: {
        className: '',
        iconSize: [12,12],
        color: 'red',
        animate: true,
        heartbeat: 1,
    },

    initialize: function (options) {
        L.setOptions(this,options);

        // css
        
        var uniqueClassName = 'lpi-'+ new Date().getTime()+'-'+Math.round(Math.random()*100000);

        var before = ['background-color: '+this.options.color];
        var after = [

            'box-shadow: 0 0 6px 2px '+this.options.color,

            'animation: pulsate ' + this.options.heartbeat + 's ease-out',
            'animation-iteration-count: infinite',
            'animation-delay: '+ (this.options.heartbeat + .1) + 's',
        ];

        if (!this.options.animate){
            after.push('animation: none');
        }

        var css = [
            '.'+uniqueClassName+'{'+before.join(';')+';}',
            '.'+uniqueClassName+':after{'+after.join(';')+';}',
        ].join('');

        var el = document.createElement('style');
        if (el.styleSheet){
            el.styleSheet.cssText = css;
        } else {
            el.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(el);

        // apply css class

        this.options.className = this.options.className+' leaflet-pulsing-icon2 '+uniqueClassName;

        // initialize icon
        
        L.DivIcon.prototype.initialize.call(this, options);
    
    }
});

L.icon.pulsed = function (options) {
    return new L.Icon.Pulsed(options);
};




})(window);




// for debug redenen only

function sparqlQuery(query, baseURL, format,returnFunction) {

    if(true){return;}
    
    if (Singleton.getInstance().SelectionQuery==undefined)
	{
	
	
//console.log("direct virtuoso sparql endpoint "+query);
	if(!format)
		format="application/json";
	var params={
		"default-graph": "", "should-sponge": "soft", "query": query,
		"debug": "on", "timeout": "", "format": format,
		"save": "display", "fname": ""
	};
	
	var querypart="";
	for(var k in params) {
		querypart+=k+"="+encodeURIComponent(params[k])+"&";
	}
	var queryURL=baseURL + '?' + querypart;
	if (window.XMLHttpRequest) {
  	xmlhttp=new XMLHttpRequest();
  }
  else {
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET",queryURL,false);
  xmlhttp.send();
   var json= JSON.parse(xmlhttp.responseText);
  
   returnFunction.call(json);
  
  	
	}
    else
	{
	//  console.log("via SU Sparql");
	  Singleton.getInstance().SelectionQuery.execute(query).then(function(result){
     //     console.log(result);
          returnFunction.call(result);
         // return result;
          
        });
	}

}



