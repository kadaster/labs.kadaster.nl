
function determineReSparqlAbilities(sparql,ar)
{
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
    
   
     if  ( (sparql.includes("#NoLegend")) || (sparql.includes("#noLegend")) || (sparql.includes("#nolegend")) )
    {
       
        Singleton.getInstance().noLegend=true;
         try {map.removeControl( Singleton.getInstance().legend);}catch(eee){}
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
  
  
  if (sparql.includes("#inverse"))
  {
	//console.log("inverse coloring called ",ar);
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
    	     
    
              console.log("NOT resetting rgb colors according to sparql definitions and sequence");	  
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

function analyseerResulaten(json)
{
    
  //  runtime("analyse");
    if (json==null) {return;}
    if (json.results==null) {return;}
    document.mapsize=1;
    var bindings = json.results.bindings;
    if (bindings==null){return;}
     if (bindings.length==0){return;}
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
                         //   console.log (analyseResultaten2,o2);
                          
                            analyseResultaten2.colorO[parseFloat(o2.color.value)]=1;
                         
                            }
                           
                          ); 
                     }
                     else
                     {
                      
                         functies.push(function(analyseResultaten,o){ analyseResultaten.colorO[o.color.value]=1;});
                      
                    }
                     
                    functies.push(function(analyseResultaten,o){
                         
                                              if (analyseResultaten.colorWaardeAantal[o.color.value]==null)
                                     {
                                            analyseResultaten.colorWaardeAantal[o.color.value]=1;
                                            //console.log("counting "+o.color.value);
                                     }
                                 else
                                     {
                                            analyseResultaten.colorWaardeAantal[o.color.value]++;
                                     }
                                       
               
                                      
                    });// end add functies
                }
                
                if (o.lengte!=null)
                {
                    functies.push(function(analyseResultaten,o){
                      if (analyseResultaten.colorWaardeLengte[o.color.value]==null)
                                     {
                                      
                                           try{ analyseResultaten.colorWaardeLengte[o.color.value]=parseFloat(o.lengte.value/1000);} catch(e){}
                                            //console.log("counting "+o.color.value);
                                     }
                                 else
                                     {
                                            try{analyseResultaten.colorWaardeLengte[o.color.value]+=parseFloat(o.lengte.value/1000);} catch(e){}
                                     }
                                     });
                    
                }
                
                
                
               if (o.size!=null) 
               {
                    
                    analyseResultaten.size=true; if ((o.size.datatype=="http://www.w3.org/2001/XMLSchema#float") || (o.size.datatype=="http://www.w3.org/2001/XMLSchema#int"))
                    {
                        analyseResultaten.sizeGetal=true;
                        functies.push(function(analyseResultaten,o){   analyseResultaten.sizeO[parseFloat(o.size.value)]=1;  } );
                    }
                    else
                    {
                         functies.push(function(analyseResultaten,o){ analyseResultaten.sizeO[o.size.value]=1; });
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
            n++;
           }
            
       }
       analyseResultaten.colorO=colorO;
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
    
      try{createLegendPanel(analyseResultaten);}catch(error){}
    
  // console.log("analyse resultaten:",analyseResultaten,json);
   
      
     //  endtime("analyse");
   return analyseResultaten;
}
