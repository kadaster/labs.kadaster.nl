

function analyseerResulaten(json)
{
    
  //  runtime("analyse");
    if (json==null) {return;}
    if (json.results==null) {return;}
    document.mapsize=1;
    var bindings = json.results.bindings;
    if (bindings==null){return;}
     if (bindings.length==0)
      {
        try 
        {
           var rs=getIface().me.props.noResultToast;
           if ((rs!=null) &&(rs.length>0))
            {
              getIface().me.showToast(rs);
            }
          }
          catch(exc){console.log(exc)}
        return;
      }
    var analyseResultaten={json:json,geometry:false,geometryGeoJSON:false,rgbcolor:false, actief:false,color:false,size:false,popup:false,highlight:false,sizeGetal:false,colorGetal:false,title:'',kenmerknaam:''};
     
    var aantal = 1;
    if (bindings.length<1){aantal=0;}
       
   
   
  
   
   var sizeO={};
   var colorO={};
   var rgbcolorO={};
   var actiefO={};
      analyseResultaten.sizeO=sizeO;
      analyseResultaten.colorO=colorO;
      analyseResultaten.rgbcolorO=rgbcolorO;
      analyseResultaten.actiefO=actiefO;
      analyseResultaten.totaal=0;
      analyseResultaten.colorWaardeAantal={}; // geen getal maar iets anders
      analyseResultaten.colorWaardeLengte={}; // speciaal geval waar de lengte waarde opgeteld wordt
      
    
      var functies=[];
   
  
      for (var i=0;i<aantal;i++)
      {
                var o= bindings[i];
               if (o.geometry!=null) {analyseResultaten.geometry=true;}
               if (o.geometryGeoJSON!=null) {analyseResultaten.geometryGeoJSON=true;}
               if (o.color!=null) 
                { 
                    analyseResultaten.color=true;
                    if ((o.color.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.color.datatype=="http://www.w3.org/2001/XMLSchema#int"))
                     {
                          analyseResultaten.colorGetal=true;
                          functies.push(function(analyseResultaten2,o2)
                          { 
                            analyseResultaten2.colorO[parseFloat(o2.color.value)]=1;
                            }
                          ); 
                     }
                     else
                     {
                      if ((o.color.datatype=="http://www.w3.org/2001/XMLSchema#date") || (o.color.datatype=="http://www.w3.org/2001/XMLSchema#inffft"))
                        {
                         
                             analyseResultaten.colorGetal=true;
                             analyseResultaten.date=true;
                             
                             functies.push(function(analyseResultaten2,o2)
                             { 
                                 var dateObj = new Date(o2.color.value);
                                 var dateI = dateObj.getTime();
                                  analyseResultaten2.colorO[parseFloat(dateI)]=1;
                               }
                             ); 
                        }
                        else
                        {

                         functies.push(function(analyseResultaten,o){ analyseResultaten.colorO[o.color.value]=1;});
                        }
                      
                    }
                   // if (functies.length==0)
                    {
                     
                    functies.push(function(analyseResultaten,o){
                      var value=o.color.value;
                      if (analyseResultaten.date) { value=new Date(value).getTime();}
                                              if (analyseResultaten.colorWaardeAantal[value]==null)
                                     {
                                            analyseResultaten.colorWaardeAantal[value]=1;
                                            //console.log("counting "+o.color.value);
                                     }
                                 else
                                     {
                                            analyseResultaten.colorWaardeAantal[value]++;
                                     }
                                       
               
                                      
                    });// end add functies
                  }
                }
              
                
                if (o.lengte!=null)
                {
                    functies.push(function(analyseResultaten,o){
                      var value=o.color.value;
                      if (analyseResultaten.date) { value=new Date(value.getTime());}
                      if (analyseResultaten.colorWaardeLengte[value]==null)
                                     {
                                      
                                           try{ analyseResultaten.colorWaardeLengte[value]=parseFloat(o.lengte.value/1000);} catch(e){}
                                            //console.log("counting "+o.color.value);
                                     }
                                 else
                                     {
                                            try{analyseResultaten.colorWaardeLengte[value]+=parseFloat(o.lengte.value/1000);} catch(e){}
                                     }
                                     });
                    
                }
                
                
                
               if (o.size!=null) 
               {
                    
                    analyseResultaten.size=true;
                     if ((o.size.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.size.datatype=="http://www.w3.org/2001/XMLSchema#int"))
                    {
                        analyseResultaten.sizeGetal=true;
                        functies.push(function(analyseResultaten,o){   analyseResultaten.sizeO[parseFloat(o.size.value)]=1;  } );
                    }
                    else
                    {
                      if ((analyseResultaten.date))
                        {
                            analyseResultaten.sizeGetal=true;
                            functies.push(function(analyseResultaten,o){   analyseResultaten.sizeO[parseFloat(o.size.value)]=1;  } );
                        }
                        else
                        {


                         functies.push(function(analyseResultaten,o){ analyseResultaten.sizeO[o.size.value]=1; });
                        }
                    }
                }
                
               if (o.popup!=null) {analyseResultaten.popup=true}
               if (o.highlight!=null) {analyseResultaten.highlight=true}
               if (o.rgbcolor!=null) 
               {
                analyseResultaten.rgbcolor=true;
                
                   functies.push(function(analyseResultaten,o)
                   
                                    { 
                                        
                                        var rgb=[255,0,0];
                                  try
                                  {
                                          var vv=o.rgbcolor.value.replace("rgb(","");
                                          vv=vv.replace("RGB(","");
                                          vv=vv.replace(")","");
                                          rgb=vv.split(",");
                                  }
                                  catch(error){}
                                
                                   analyseResultaten.rgbcolorO[o.color.value]=rgb;
                                    
                                   });
                
                
                }
               if (o.actief!=null) {
                        analyseResultaten.actief=true;
                        
                         functies.push(function(analyseResultaten,o) {
                           
                             var vector=analyseResultaten.actiefO[o.actief.value];
                       if (vector==null)
                           {
                             vector=[];
                             analyseResultaten.actiefO[o.actief.value]=vector;
                           }
                       vector.push(o);
                      
                       });
                }
               
             if (o.kenmerknaam!=null) {analyseResultaten.kenmerknaam=o.kenmerknaam.value}// singleton.
                 
                    
      }
      
    
      
      
     // runtime("analyseloop");
      bindings.forEach(function(o, i)
    //for  (i in bindings)
    {
            analyseResultaten.totaal++;
           // var o= bindings[i];
            for (var fn in functies)
            {
                try {functies[fn].call(this,analyseResultaten,o);} catch(e){console.log(e);}
            }
    });
   // endtime("analyseloop");
    
   
    if (analyseResultaten.size==true)
    {
       // bepaal min en max waarde
       //
     
       var ar=Object.keys(sizeO);
       var extra="";
       if (analyseResultaten.sizeGetal)
       {
         extra="\"";
         ar=ar.sort(function(a,b) { return b - a;});
         var min=ar[0];
         var max=ar[ar.length-1];
         var delta=max-min;
         
         analyseResultaten.sizeMin=min;
         analyseResultaten.sizeMax=max;
         analyseResultaten.sizeAr=ar;
      
         for (var key in ar)
         {
            var value = ar[key];
            var cvalue=((value-min)/delta)*8+7;
            sizeO[value]=Math.floor(cvalue);
         }
         
       }
       else
       {
        ar= ar.sort();
           var n=0.0;
           var sizeO={};
           for (var key in ar)
           {
         
             sizeO[ar[key]]=1.5+(n/ar.length)*25;
             n++;
           }
           analyseResultaten.sizeO=sizeO;
    }
  
       
     
       
    }
      if (analyseResultaten.color==true)
    {
        
       // bepaal min en max waarde
       //
       var ar=Object.keys(colorO);
       var extra="";
       if (analyseResultaten.colorGetal)
       {
         extra="\"";
       
         ar=ar.sort(function(a,b) { return b - a;});
       
         var min=ar[0];
         var max=ar[ar.length-1];
         var reverse=false;
        if (min>max) {var tmax=max;max=min;min=tmax; ar=ar.reverse();reverse=true;}
         var delta=max-min;
        analyseResultaten.colorMin=min;
        analyseResultaten.colorMax=max;
        analyseResultaten.colorAr=ar;
       // console.log(min,max,ar)
        
         for (var key in ar)
         {
            var value = ar[key];
            var cvalue=((value-min)/delta)*255.0;
             //console.log(analyseResultaten);
           
                if (reverse){ cvalue=255-((value-min)/delta)*255.0;  
                  console.log("REVERSE sorting"); 
                  // very dangerous
                  } 
            
            colorO[value]=cvalue;
         }
         
       }
       else
       {
       // getal
       
           ar= ar.sort();
           var n=0.0;
           var colorO={};
           for (var key in ar)
           {
            // This following expression decides a value from 0~255 to decide the hue retio of a color
            // The range of the HSL ratio is limited to 50 to 255 to avoids the color to be pure red which is the highlight color.
            colorO[ar[key]]= 50 + (n/ar.length)* 205;
            n++;
           }
            
       }
       analyseResultaten.colorO=colorO;
      // console.log(colorO);
    // Singleton.getInstance().legend.update(analyseResultaten);
  
   }
      
  //  
      
    // console.log(analyseResultaten);
      // change red if only one object
      if (analyseResultaten.colorO!=null)
      {
      
        var aantal=0;
        for (var n in analyseResultaten.colorO){aantal++}
    //    console.log(aantal)
        if (aantal==1)
        {
         for (var n in analyseResultaten.colorO){analyseResultaten.colorO[n]=255;} 
        }
       
      }
   //   console.log(analyseResultaten);
      // createLegendPanel(analyseResultaten);
    
      try{
        createLegendPanel(analyseResultaten);
      
      
      }catch(error){}
    
  // console.log("analyse resultaten:",analyseResultaten,json);
   
      
     //  endtime("analyse");
   return analyseResultaten;
}





function analyseerResulatenGood(json)
{
    
   // runtime("analyse");
   
   
    
   
    
    if (json==null) {return;}
    if (json.results==null) {return;}
    
   document.mapsize=1;
    
	var bindings = json.results.bindings;
	if (bindings==null){return;}
	// console.log(bindings)
   var analyseResultaten={json:json,geometry:false,geometryGeoJSON:false,rgbcolor:false, actief:false,color:false,size:false,popup:false,highlight:false,sizeGetal:false,colorGetal:false,title:'',kenmerknaam:''};
   
   
   
   
   var i;
   
   var sizeO={};
   var colorO={};
   var rgbcolorO={};
   var actiefO={};
      analyseResultaten.sizeO=sizeO;
      analyseResultaten.colorO=colorO;
      analyseResultaten.rgbcolorO=rgbcolorO;
      analyseResultaten.actiefO=actiefO;
      analyseResultaten.totaal=0;
      analyseResultaten.colorWaardeAantal={}; // geen getal maar iets anders
      analyseResultaten.colorWaardeLengte={}; // speciaal geval waar de lengte waarde opgeteld wordt
      
      
    //  runtime("analyse loop");
 	for  (i in bindings)
 	{
 	    	analyseResultaten.totaal++;
               var o= bindings[i];
               if (o.geometry!=null) {analyseResultaten.geometry=true}
               if (o.geometryGeoJSON!=null) {analyseResultaten.geometryGeoJSON=true}
               if (o.color!=null) {
        	   analyseResultaten.color=true;
        	   if ((o.color.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.color.datatype=="http://www.w3.org/2001/XMLSchema#int")) {analyseResultaten.colorGetal=true;} 
        	   
        	   if (analyseResultaten.colorWaardeAantal[o.color.value]==null)
	      	     {
	      	     		analyseResultaten.colorWaardeAantal[o.color.value]=1;
	      	     		//console.log("counting "+o.color.value);
	      	     }
	      	 else
	      	     {
	      	     		analyseResultaten.colorWaardeAantal[o.color.value]++;
	      	     }
                   
                   
                 if (analyseResultaten.colorWaardeLengte[o.color.value]==null)
                 {
                  
                       try{ analyseResultaten.colorWaardeLengte[o.color.value]=parseFloat(o.lengte.value/1000);} catch(e){}
                        //console.log("counting "+o.color.value);
                 }
             else
                 {
                        try{analyseResultaten.colorWaardeLengte[o.color.value]+=parseFloat(o.lengte.value/1000);} catch(e){}
                 }
                
               
               }
               if (o.size!=null) {analyseResultaten.size=true; if ((o.size.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.size.datatype=="http://www.w3.org/2001/XMLSchema#int")) {analyseResultaten.sizeGetal=true;}}
               if (o.popup!=null) {analyseResultaten.popup=true}
               if (o.highlight!=null) {analyseResultaten.highlight=true}
               if (o.rgbcolor!=null) {analyseResultaten.rgbcolor=true}
               if (o.actief!=null) {analyseResultaten.actief=true}
           //    if (o.title!=null) {analyseResultaten.title=o.title.value}// singleton.
									    // beetje
									    // ranzig
									    // maarja
               if (o.kenmerknaam!=null) {analyseResultaten.kenmerknaam=o.kenmerknaam.value}// singleton.
											    // beetje
											    // ranzig
											    // maarja
               
              try {if (analyseResultaten.sizeGetal) { sizeO[parseFloat(o.size.value)]=1;} else {sizeO[o.size.value]=1;}} catch(error){}
              try {if (analyseResultaten.colorGetal) { colorO[parseFloat(o.color.value)]=1;} else {colorO[o.color.value]=1;}} catch(error){}
              try {if (analyseResultaten.rgbcolor) 
              { 
        	  var rgb=[255,0,0];
        	  try
        	  {
                	  var vv=o.rgbcolor.value.replace("rgb(","");
                	  vv=vv.replace("RGB(","");
                	  vv=vv.replace(")","");
                	  rgb=vv.split(",");
        	  }
        	  catch(error){}
        	
        	      	  analyseResultaten.rgbcolorO[o.color.value]=rgb;
        	      	
        	  
              }
              	} catch(error){}
              	
                try {
                    if (analyseResultaten.actief) 
                        {  
                	   var vector=actiefO[o.actief.value];
                	   if (vector==null)
                	       {
                	         vector=[];
                	         actiefO[o.actief.value]=vector;
                	       }
                	   vector.push(o);
                        }
                }
                catch(error){}
    }
  //  endtime("analyse loop");
 	
   
    if (analyseResultaten.size==true)
    {
       // bepaal min en max waarde
       //
       // runtime("analyse extra 1");
       var ar=Object.keys(sizeO);
       var extra="";
       if (analyseResultaten.sizeGetal)
       {
         extra="\"";
         ar=ar.sort(function(a,b) { return b - a;});
         var min=ar[0];
         var max=ar[ar.length-1];
         var delta=max-min;
         analyseResultaten.sizeMin=min;
         analyseResultaten.sizeMax=max;
         analyseResultaten.sizeAr=ar;
      
         for (var key in ar)
         {
            var value = ar[key];
            var cvalue=((value-min)/delta)*8+7;
            sizeO[value]=Math.floor(cvalue);
         }
         
       }
       else
       {
      	ar= ar.sort();
           var n=0.0;
           var sizeO={};
           for (var key in ar)
           {
         
             sizeO[ar[key]]=1.5+(n/ar.length)*25;
             n++;
           }
           analyseResultaten.sizeO=sizeO;
	}
  
       
  //    endtime("analyse extra 1");
       
    }
      if (analyseResultaten.color==true)
    {
      //   runtime("analyse extra 2");
       // bepaal min en max waarde
       //
       var ar=Object.keys(colorO);
       var extra="";
       if (analyseResultaten.colorGetal)
       {
         extra="\"";
         ar=ar.sort(function(a,b) { return b - a;});
       
         var min=ar[0];
         var max=ar[ar.length-1];
         var delta=max-min;
        analyseResultaten.colorMin=min;
        analyseResultaten.colorMax=max;
        analyseResultaten.colorAr=ar;
        
         for (var key in ar)
         {
            var value = ar[key];
            var cvalue=((value-min)/delta)*255.0;
            colorO[value]=cvalue;
         }
         
       }
       else
       {
	   // getal
	   
      	   ar= ar.sort();
           var n=0.0;
           var colorO={};
           for (var key in ar)
           {
            colorO[ar[key]]=0+(n/ar.length)*255;
            
            //colorO[ar[key]]=255-((n/ar.length)*255);
            
            n++;
           }
            
       }
       analyseResultaten.colorO=colorO;
      // console.log(colorO);
    // Singleton.getInstance().legend.update(analyseResultaten);
   //  endtime("analyse extra 2");
   }
      
  //  
      
    // console.log(analyseResultaten);
      // change red if only one object
      if (analyseResultaten.colorO!=null)
	  {
        // runtime("analyse extra 3");
	    var aantal=0;
	    for (var n in analyseResultaten.colorO){aantal++}
	//    console.log(aantal)
	    if (aantal==1)
		{
		 for (var n in analyseResultaten.colorO){analyseResultaten.colorO[n]=255;} 
		}
      //  endtime("analyse extra 3");
	  }
   //   console.log(analyseResultaten);
      // createLegendPanel(analyseResultaten);
    //  runtime("analyse legend");
     // try{createLegendPanel(analyseResultaten);}catch(error){}
    //  endtime("analyse legend");
  // console.log("analyse resultaten:",analyseResultaten,json);
   
      
    //   endtime("analyse");
   return analyseResultaten;
}




function removeAll()
{


let first=true;
Singleton.getInstance().map.eachLayer(function (layer) {
 
  let remove =true;
        if (document.add==true)
        {
            
            if (layer.deck!=null) remove=false;
        }

  
 
  try {
    if ((layer.options.type=="wmts") || (layer.options.tileSize!=null)) {remove=false;}
}
catch (e){}
 
if (remove)
        {
            Singleton.getInstance().map.removeLayer(layer);
        }

});

removeAllSelections();
}






function parseArrays(headers,resultaten)
{
    // oude implementatie voor weaver resultaten
    // console.log(headers,resultaten);
    
    let json={results:{bindings:[]}}
    
    let bindings = json.results.bindings;
    for (var nr in resultaten)
	{
	let r=resultaten[nr]
	 let o={};
	 bindings.push(o);
	 
	 for (let headerN in headers)
	     {
	       let header = headers[headerN]
	        o[header]={value: r[headerN]};
	     }
	
	}
// console.log(json);
    parsejson(json);
    
    
    
}



function determineReSparqlAbilities(sparql,ar)
{
 // console.log("determine sparql",sparql,ar )
    try {alpha=0.7;}catch(e){}
    try
    {
     if (sparql.includes("#alpha:"))
     {
          var elements=sparql.split("#alpha:");
         alpha = elements[1].split(";")[0];   
    }
    }
    catch(e){}

    try
    {
     if (sparql.includes("#selectionColor:"))
     {
          var elements=sparql.split("#selectionColor:");
          Singleton.getInstance().selectionColor = elements[1].split(";")[0];   
    }
    }
    catch(e){}
    
    
    
     try
    {
     if (sparql.toLowerCase().includes("#stringtocolor"))
     {
      
        for (let n in ar.colorO)
        {
         
            ar.colorO[n]=stringToRGBAr(n);
            
            //ar.rgbcolorO[n]=stringToColour(n);
          //   ar.rgbcolorO[n]="RGB(255,0,0)";
            
            
        }
      //  ar.colorOVolgorde=[];
       // ar.rgbcolor=true;
        //ar.colorOVolgorde
      //  ar.colorO={};
        
     }
    }
    catch(e){console.log(e);}
     
   if (ar==null){return;}
   if (document.sliderControl!=null)
   {
       try { map.removeControl(document.sliderControl); }catch(e){}
    }
    
    try{
        
          if (sparql.includes("#slider:"))
          {
          document.sliderControl=L.control.sliderControl({position: 'bottomleft' }).addTo(map);
            
          }
          } catch(err){
           // console.log(err); 
            }
    
    try
    {
	//console.log("determine sparql abilities",sparql);
	removeLocations();
	 if (sparql.includes("#Locations:"))
	    {
	      var elements=sparql.split("#Locations:");
	      var s = elements[1].split(";")[0];
	      createLocations(s);
	    }
    }
    catch(e)
    {
	//console.log(e);
    }
    
    
     try
    {
         if (sparql.includes("#baselayer:"))
        {
            var elements=sparql.split("#baselayer:");
            var layername = elements[1].split(";")[0];
            
            Layerwidget.changeBaselayer(layername);
        }
    }
    catch(e)
    {
    //console.log(e);
    }
    
    
  //  console.log("determineResparql abilities "+sparql)
   // bepaald of een sparql query gerewrite kan worden met een grafische
    // filter. Dit kan wannee er #bounds in de bsp voorkomt
    if (sparql==null)
	{
	   try {   Singleton.getInstance().map.removeControl( Singleton.getInstance().drawControl); return;}catch(error){};
	   return {};
	}
    
  try{  Singleton.getInstance().map.removeControl( Singleton.getInstance().drawControl);}catch(error){};
  try
  {
      Singleton.getInstance().drawControl.options.draw.rectangle=false;
    
    if (sparql.includes("#bounds"))
    {
	Singleton.getInstance().drawControl.options.draw.rectangle=true;
	Singleton.getInstance().drawControl.options.draw.polygon=true;
    }
    if (sparql.includes("#RD"))
    {
	Singleton.getInstance().rd=true;
    }
    else
	{
	Singleton.getInstance().rd=false;
	}
  if  ( (sparql.includes("#minimal")) || (sparql.includes("#Minimal")) || (sparql.includes("#minimal")) )
    {
      setTimeout(function(){map.removeControl( Singleton.getInstance().downloadButton)},10);
      setTimeout(function(){map.removeControl( Singleton.getInstance().polylineMeasure)},10);
      setTimeout(function(){map.removeControl( Singleton.getInstance().fullscreencontrol)},10);
      setTimeout(function(){map.removeControl( document.easyprint)},10);
      setTimeout(function(){map.removeControl( Singleton.getInstance().zoomHome)},10);
      setTimeout(function(){map.removeControl( map.zoomControl)},10);


    }

    
   
     if  ( (sparql.includes("#NoLegend")) || (sparql.includes("#noLegend")) || (sparql.includes("#nolegend")) )
    {
       
        Singleton.getInstance().noLegend=true;
     
          setTimeout(function(){map.removeControl( Singleton.getInstance().legend)},250);
         try {map.removeControl( Singleton.getInstance().legend);   ar.noLegend=true;}catch(eee){
          console.log(eee)
         }
    }
    else
    {
      
         Singleton.getInstance().noLegend=false;
    }
    
    
    var drawControl = new L.Control.Draw(Singleton.getInstance().drawControl.options);
    Singleton.getInstance().drawControl=drawControl;
    Singleton.getInstance().map.addControl(Singleton.getInstance().drawControl);

  }
  catch(error){}
  
  try {
     if (sparql.includes("#info"))
  {
    
     var elements=sparql.split("#info:");
      var key = elements[1].split(";")[0];
      if ((key!=null) && (key!=""))
      {
            setTimeout(function(){ showWarning(key)}, 300);
      }
      
    }
}
catch(e){}

 if (sparql.includes("#V2;"))
  {
    ar.useDeck=true;
  }
   if (sparql.includes("#useDeck"))
  {
    ar.useDeck=true;
  }
  
  
  if (sparql.includes("#inverse"))
  {
    ar.inverse=true;
	console.log("inverse coloring called ",ar);
	if (ar.color)
	    {
	       for (var key in ar.colorO)
		   {
		     	var waarde=ar.colorO[key];
		     	ar.colorO[key]=(255-waarde);
		   }
	    }
	else
	    {
	    
	    console.log("inverse not implemented for this")
	    }
	
  }
  if (sparql.includes("#procent"))
  {
      ar.procent=true;
  }
  if (sparql.includes("#Procent"))
  {
      ar.procent=true;
  }
  if ( sparql.includes("#lengteKM")   || sparql.includes("#LengteKM")|| sparql.includes("#LengteInKM")|| sparql.includes("#lengteInKM") )
  {
      ar.lengteInKM=true;
  }
  
  
  try
  {
      var elements=sparql.split("#link:");
      var key = elements[1].split(";")[0];
      if ((key!=null) && (key!=""))
	  {
	  	getIface().initLink(key);
	  }
      
  }
  catch(e){}
  
  
  
  // add values from sparql nOT USED
  
  try
  {
      var elements=sparql.split("#color:RGBA(");
    // console.log(elements);
      for (var n in elements)
      { // beetje ranzig maar prima voor nu
	  // we gaan over op rgb kleuren
	//  ar.rgbcolor=true;
	 // ar.rgbcolorO={};
	 // ar.colorGetal=false;
	  if (n!=0)
     	   {
           if (ar.colorO==null) ar.colorO={};
    	     
    
           //   console.log("NOT resetting rgb colors according to sparql definitions and sequence");	  
     	   }
	  
	  
      }
	 ar.beschrijving={};
	 ar.extra={};
	 ar.colorOVolgorde=[];
      for (var n in elements)
	  {
	  // use rgb mechanism for this.
      	   var element=elements[n];
      	   
      	   if (n!=0)
      	   {
      	       var line=element.split("\n");
      	       var keys=line[0].split("@");
      	       var rgb=keys[0].replace(")","");
	       var key=keys[1].split("\"")[1];
	       var rgb=rgb.replace("rgba(","");
	       rgb=rgb.replace("RGBA(","");
	       rgb=rgb.replace(")","");
		rgb=rgb.split(",");
        // only existing ones?
        if (ar.colorO[key]!=null) // overwrite only.no new ones
        {
            
	      	ar.colorO[key]=rgb;
             ar.colorOVolgorde.push(key);
        
	      	
	      	try 
	      	{
	      	    var beschrijving=keys[1].split("\"")[2].split("&")[0];
	      	    if ((beschrijving!=null) && (beschrijving.length>4))
	      		{
	      		
	      		   ar.beschrijving[key]=beschrijving.replace("\n","").replace("\r","");
	      	//	  console.log("got a beschrijving ",beschrijving);
	      		 }
	      	    //ar.colorO[key+"__beschrijving"]=beschrijving;
	      	  
	      	}
	      	catch(e){}
		try 
	      	{
		   
	      	    var beschrijving=keys[1].split("\"")[2].split("&")[1];
	      	    if ((beschrijving!=null) && (beschrijving.length>1))
	      		{
	      		
	      		   ar.extra[key]=beschrijving;
	      	//	console.log("got a extra ",beschrijving);
	      		  
	      		 }
	      	    //ar.colorO[key+"__beschrijving"]=beschrijving;
	      	  
	      	}
	      	catch(e){}
	   }
       }
       }
    //  console.log(ar);

  }
  catch(error){
    //console.log(error);
    }
  
  try
  {
      
      var elements=sparql.split("#title:");
   //   console.log(elements);
      if (elements.length==2)
	  {
	     ar.title=elements[1].split(";")[0];
	  }
  }
  catch(error){
   // console.log(error);
    }
  
  
  try
  {
     if (sparql.includes("#useBIMVLogo"))
     {
        ar.useBIMVLogo=true;
    }
    
}
catch(e){}
try
  {
     if (sparql.includes("#disclaimerBIMV"))
     {
        ar.disclaimerBIMV=true;
    }
    
}
catch(e){}

    return ar;
    
}

function speedupLeaflet()
{
  // if (true) {return;}
  
    
    try
    {
        L.Mixin.raw=true;
        if (getIface()==null) return;
        getIface().lock("map","processing map data");
        
    return;
    /*
        if (L.Mixin.Events.addEventListener2==null)
        {
            L.Mixin.Events.addEventListener2=L.Mixin.Events.addEventListener;
        }
    
    L.Mixin.Events.addEventListener=function(types, fn, context){return this;}
     */
    }
    catch(e)
    {console.log(e);}
   
}


function unSpeedupLeaflet()
{
     // if (true) {return;}
   // console.log("speedup leaflet called");
    try
    {
         L.Mixin.raw=false;
       //  speedupLeaflet();
       //  L.Mixin.Events.addEventListener= L.Mixin.Events.addEventListener2;
      }
    catch(e)
    {}
    
    try
    {
        if (getIface()==null)return;
         getIface().unlock("map","processing map data");
    }
    catch(e){}
    
  }




proj4.defs("urn:ogc:def:crs:EPSG::28992","+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.999908 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.4174,50.3319,465.5542,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +no_defs");
var crs={        type: "name",        properties: {          name: "urn:ogc:def:crs:EPSG::28992"        }      };
 Singleton.getInstance().uri_objects={};
   Singleton.getInstance().uri_value={};
   Singleton.getInstance().uri_rgb={};




function processJson(json,sparql)
{
   try {
   
     //runtime("json");
    let meerdereShapesPerUri=false;
    //   runtime("removeall");
    
    	
    //	endtime("removeall");
    
  
    removeAll();

   
      

 
    	Singleton.getInstance().aantalFeaturesIsLaag=true;
        
    	if (json==null){ return;}
        
        
        
   	// bepaal resparql mogelijkheden
    	// Singleton.getInstance().iface.unlock();
    	// console.log("start verwerken");
    	  showInfo("start verwerken gis data");
    	// Singleton.getInstance().iface.lock();
    	
    	var ar=analyseerResulaten(json);
      Singleton.getInstance().ar=ar;
        determineReSparqlAbilities(sparql,ar);
   	
 //console.log("sparql geanalyseerd");
 
   Singleton.getInstance().json=json; // old but still necessary
   


   try {  
   
     Singleton.getInstance().legend.update(ar); 
    
    } catch(e){console.log("legend update error",e);}
 //   console.log("legenda ready");

if (document.add==true)
{
    
}
else
{
   Singleton.getInstance().uri_objects={};
   Singleton.getInstance().uri_value={};
   Singleton.getInstance().uri_rgb={};
  
 }
//  if (json==null){return }
//  if (json.results==null){return }
//  if (json.results.bindings==null){return }

   let features=[];
    	let bindings = json.results.bindings;
    	let i;
    	let bounds=null;
    	let aantal=0;
    	
    	//runtime("parse");
    	
        
       
    //	console.log("process features results");
        
    	for  (i in bindings)
    	{
    	    aantal++;
    	   let o= bindings[i];
    	         try
    	         {
              let uri=o.uri.value;
              if (ar.geometryGeoJSON)
                  {
                  		var gj=o.geometryGeoJSON.value;
                  	    var  geojsonObject = { 'type': 'FeatureCollection', 'crs': {'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:OGC:1.3:CRS84' }  }, 'features': [JSON.parse(gj) ]};
                     // faster implementation possible via   {type:'Feature',geometry:{type:'Point',coordinates:[]},properties:{uri:x,color}"}    
                         //var    layer = omnivore.geojson(geojsonObject);
                  		try {var layer=new L.geoJson(geojsonObject);} catch(e) {console.log(e,geojsonObject);} // slow
                        //  if (aantal<10)   {                                     console.log("geojson ",layer,geojsonObject);      }
                          
                  }
              else
                  {
                  		let p2=o.geometry.value;
                  		//runtime("wkt");
                          try{
                  		            var layer =omnivore.wkt.parse(p2.toString());
                                         //if (aantal<10)   {                                     console.log("WKT ",layer);      }
                        
                          }
                          catch(e)
                          {
                            
                            //let p2 =p2.toString().replace("MULTIPOINT (","POINT ").replace(")","");
                           //   try {var layer =omnivore.wkt.parse(p2);} catch(ee)
                             // {
                               console.log("cannot parse wkt "+p2.toString());
                           // }
                        }
                  		//endtime("wkt");
                  }
                         
                          if (Singleton.getInstance().rd==true)
                   	   {
                   	   
                   	       layer=layer.toGeoJSON();
                   	       layer.crs=crs;
                   	       layer=L.Proj.geoJson(layer);
                   	     
                   	   }
                          
                          
                       //   runtime("hashlookup");
                          
                          if (Singleton.getInstance().uri_objects[uri]!=null)
                   	   {
                   	           meerdereShapesPerUri=true;
                   	           Singleton.getInstance().uri_objects[uri].push(layer);
                   	          // if (aantal<2) {console.log(uri);}
                   	   }
                          else
                   	   {
                   	   	        Singleton.getInstance().uri_objects[uri]=[layer];
                              try{Singleton.getInstance().uri_value[uri]=o.color.value;} catch(e){}
                   	   }
                       //   endtime("hashlookup");
                        
                        
                          try{
                            
                          if (bounds==null){bounds=layer.getBounds();}else{bounds.extend(layer.getBounds());}
                        
                          }
                          catch(error){
                   	   // console.log(error);
                   	   }
                         let color="blue";
                        color="155, 102, 102" ;
                        
                       
                        
                        if (ar.color==true)
                        {
                   	 try
                   	     {
                                                                     
                           	          let colorN =ar.colorO[o.color.value];
                                    
                                   
                           	       if (colorN==undefined){colorN=ar.colorO[parseFloat(o.color.value)]}
                                   if ((colorN==undefined) && (ar.date==true))
                                    {
                                       var dateO= new Date(o.color.value);
                                       colorN=ar.colorO[parseFloat(dateO.getTime())];
                                    }
                           	       if (colorN==undefined) {colorN=0;}
                           	       if (Array.isArray(colorN))
                           		   {
                           		       color=colorN[0]+","+colorN[1]+","+colorN[2];
                                     try
                                     {
                                      if (colorN[3]!=null)
                                      {
                                        color="RGBA("+color+","+colorN[3]+")" ; //alpha
                                       
                                      }
                                     }catch(e){}
                           		   }
                           	       else
                           		   {
                           		   	color=numberToColorHsl(colorN/255,0,1);
                           		   }
                   	       }
                   	       catch(error){}
                        }
                       
                     
                        if (ar.rgbcolor==true)
                   	 {
                   	 	try {color=o.rgbcolor.value;
                   	 	if (color==null){  color="155, 102, 102" ;}
                   	 	}
                   	 	catch(error)
                   	 	{
                   	 	 color="155, 102, 102" ; 
                   	 	}
                   	 }
                      
                        
                   	let supportedType=false;
   		for (let n in layer._layers)
   			{
   			
   			  try
   			  {
   						let object = layer._layers[n];
   						object.uri=uri;
   						//var type = object.feature.geometry.type;
   						object.feature.properties["uri"]=uri;
                         //  object.feature.properties["o"]=o;
   						if (color!=null){						object.feature.properties["color"]=color;}
   						features.push(object.feature);
   			  }
   			  catch(error)
   			  {
   			     // console.log(error);
   			  }
   						 
   			}
    	         }catch(featureError){
                   // console.log(featureError,o);
                    }
   	} //end for
       
       
    	
    	if (aantal>1000)
    	    {
    	      Singleton.getInstance().aantalFeaturesIsLaag=false;
    	    }
    	else
    	    {
    	Singleton.getInstance().aantalFeaturesIsLaag=true;
    	    }
    	//console.log("end parsing  "+Singleton.getInstance().aantalFeaturesIsLaag);
    	//endtime("json");
    	//runtime("leaflet");
    //	console.log("klaar met resultaten processen "+aantal);
    
    
    	return [features,meerdereShapesPerUri,aantal,bounds];
    	
        }
        catch(e)
        {
          console.log(e)
          return null;
        }
    	}
        
        
function getBinding(uri)
{
    
    let json=Singleton.getInstance().json;
    let bindings = json.results.bindings;
    for (let n in bindings)
    {
        let binding = bindings[n];
        if (binding.uri.value==uri)return binding;
    }
    return null;
}        
        
        
 function colorToArray(color)
{
   try{
           color=color.replace("rgb(","").replace(")","").split(",");
           let ar=[];
           ar.push(parseInt(color[0]));
           ar.push(parseInt(color[1]));
           ar.push(parseInt(color[2]));
           ar.push(255);
           return ar;
   }
   catch(e){}
  return [0,0,0,255];
}


var useDeck=false;

 function parsejson(json,sparql)
{
  if (json==null) return;
  if (json.results==null)return;
  if (json.results.bindings==null) return;
  
    document.sparql=sparql;
    resetTime();
    removeAllSelections(); //BBVTGUitls
    if (json==null){return;}
  //  console.log("parsejson");
    speedupLeaflet();
    try {document.plainOverlay=PlainOverlay.show(); } catch(e){} 
   
    let bounds = null;
    if (true)
	{
	   let ro=processJson(json,sparql);
    
	   var features=ro[0];
	   meerdereShapesPerUri =ro[1];
	   var aantal = ro[2];
	   bounds=ro[3];
	}
    else
	{
	   let ro=processJson(json,sparql);
	   var features=ro[0];
	   meerdereShapesPerUri =ro[1];
	   var aantal = ro[2];
	}
    
    if ( ((sparql!=null) && (sparql.includes("#useDeck")) ) || (useDeck) )
      
   {
     let x=Math.random*10000000+"";
                   let  geojson ={ "type": "FeatureCollection",     "crs": {"type": "name"+x,         "properties": {             "name": "urn:ogc:def:crs:OGC:1.3:CRS84"        }     },     "features": features};
                  // window.top.geojson= geojson;
                   
                  
                    let gjlayer=new deck.GeoJsonLayer({pickable: true,
                    stroked: false,
                    filled: true,
                    extruded: false,
                    autoHighlight: true,
                    pointType: 'circle',
                    lineWidthScale: 1,
                    lineWidthMinPixels: 1,
                    getFillColor: d => colorToArray(d.properties.color),
                    getLineColor: d => colorToArray(d.properties.color),
                    getPointRadius: 1,
                    getLineWidth: 1,
                    getElevation: 30,
                    data: geojson,
                    
                     onHover: (info,object) => {if (info.object==null) {if (document.tippyUri!=null) {destroyTippy();document.tippyUri=null;} } else 
                     {
                                       
                                       let label=info.object.properties.label;
                                       if (label==null){destroyTippy();return;}
                                              let uri=info.object.properties.uri;
                                              if ((label!=null) && (document.tippyUri!=uri) )
                                              {
                                                destroyTippy();
                                                 document.tippy=tippy('#map', { content: label,followCursor: true  });
                                                 document.tippy[0].show();
                                                 document.tippyUri=uri;
                                              
                                              }
                     }
                     
                        },
                        onClick:(info,object) => {if (info.object!=null){ try{ let uri=info.object.properties.uri;    Iface.sendEvent("http://www.bbsgroep.nl/application/v2/hasUriOutput",uri,null); }catch(e){}}},   
                     getTooltip: ({ object }) => object && { html: object.properties.uri },
                    });
                    
                    
                      
                   
                
                     let  deckLayer = new DeckGlLeaflet.LeafletLayer({layers:[gjlayer]});
                     deckLayer.deck=true;
                     Singleton.getInstance().map.addLayer(deckLayer);
                 
         
         
         }
 else
      {
        
 	addData({ "type": "FeatureCollection",     "crs": {         "type": "name",         "properties": {             "name": "urn:ogc:def:crs:OGC:1.3:CRS84"        }     },     "features": features});
     }
   //  endtime("adddata");

     let viewAll=true;
   let pv=	getIface().me.props.publishVariable;
   removeAllSelections();
   if (pv!=null) 
   {
     let sel=getIface().me.props.pubsub[pv];
     let me=this;
    
     if (sel!=null)
     {
       
      if (getIface().selectUri(sel)) viewAll=false;
     }
     
   }




    if (viewAll)
    {
   //console.log("fit bounds ",bounds);
  // console.log("parsing json 22");
  	if(Singleton.getInstance().fitBounds!=false)
 	    {
 	    
  	  
         	   var oldfb=Singleton.getInstance().fitBounds;
         	//  console.log("fit bounds via mapt fitbounds ",bounds);
         	 //  Singleton.getInstance().fitBounds=false;
         	   try{	Singleton.getInstance().map.fitBounds(bounds); }catch(error){console.log(bounds);}
         	   
         	 // Singleton.getInstance().map.
 	    }
         else
         {
           // console.log("Set default home view",bounds);
            
        }
  	
      if (Singleton.getInstance().map.getZoom()<-5)
      {
           showInfo("sommige punten liggen buiten NL" );
         //  console.log("sommige punten liggen ver uit NL");
            try {
                setTimeout(
                    function(){
                       console.log("TIME out function setting zoom level 7");
                        Singleton.getInstance().map.setZoom(7);
                          var southWest = L.latLng(49.90171121726089,  0.85693359375);
                        var northEast = L.latLng(54.0787285386706, 10.52490234375);
                        bounds = L.latLngBounds(southWest, northEast);
                         Singleton.getInstance().map.fitBounds(bounds);

                           },100);
                        
                        
                        }  catch(eee) {console.log(eee);}
           
        }
      
     // console.log("parsing json 3");
  	try {if (Singleton.getInstance().map.getZoom()>20) {
       console.log("timeout zoom 20 function");
      setTimeout(function(){Singleton.getInstance().map.setZoom(20);},100);}
     } catch(eee) {console.log(eee);}
  	
      }
 	
 	try{Singleton.getInstance().scope.loader.map=false;}catch(error){}
 	//endtime("leaflet");
 	//printtime();
 	
 	if (meerdereShapesPerUri)
 	    {
 	    	showInfo("meerdere features kunnen 1 object vertegenwoordigen");
 	    }
 	
 	//console.log("einde verwerken "+aantal+"features",p);
 
 	
 	unSpeedupLeaflet();
    try {document.plainOverlay.hide();} catch(e){}
    
        showInfo("einde verwerken van "+aantal+" features" );
 	
 	}
 	







	
	
	