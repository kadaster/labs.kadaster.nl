
var StroefheidData=function(data,diagramjson)
{
  this.data=data;
  console.log( "data",data);
  this.meta =data.meta[0];
  console.log( "meta",this.meta);
  this.diagramjson =diagramjson;
  console.log( "diagramjson",this.diagramjson);
  document.sdata=this;// debugonly

}

StroefheidData.prototype.getFirstStrook=function()
{
      try{
          var hms=this.data;
          for (var n in hms)
          {
            return hms[n];
          }
    }
    catch(e){}
      return null;

}
StroefheidData.prototype.getCurveData=function(xdata,percentielS,afkappen)
{
  var o = this.getCurveData2(xdata,percentielS,afkappen);
  return o.rar;
}
StroefheidData.prototype.getCurveData2=function(xdata,percentielS,afkappen)
{
  if (afkappen==null)afkappen=true;
  var r={};
  var rar=[];
  r.rar=rar;
  var inwevas=[];
  r.inweva=inwevas;

   var ar =this.diagramjson.as_parameterized_curves[percentielS];
   var a=ar[0];
   var b=ar[1];
   var last =xdata[0];
  
   var cumulatief=0;
 
   for (var n in xdata)
   {
    var x=xdata[n];
    
    var Difference_In_Time = x-last;
    var days = Difference_In_Time / (1000 * 3600 * 24);
   
    if (days==0){days=0.001};
    if (isNaN(days)) {break;}
    
    var inweva = this.getNearestEtmaalAll(x);

    //console.log("days:"+days+"   inweva:",inweva,"cumulatief ",cumulatief);

     cumulatief+=(inweva*days);
      inwevas.push(cumulatief);
    //var cumint=(0.00001)*(cumulatief);
    var cumint=(0.000001)*(cumulatief);
    var as = a+(b*Math.log10((cumint/365)));
   // console.log(x/10000,as,new Date(x));
   if ((afkappen) && (as>0.6))
   {
      rar.push(undefined);
   }
   else
   {
    rar.push(as);
   }
    last=x;
   }

 
   return r;
}

StroefheidData.prototype.getCurveDataCumIntCheckXY=function(xdata)
{
  var cumin=  this.diagramjson.as_cumint_check;
  return this.getCurveDataXY(xdata,"0.5",cumin);
}

StroefheidData.prototype.getCurveDataXY=function(xdata,percentiel,yvalue)
{
  
  var object={};
  try
  {
    var ys=this.getCurveData(xdata,percentiel,false);
   
   object.y=yvalue;
  
   for (var n in xdata)
   {
          
          var y=ys[n];
      
         
      if (object.x==null)
      {
        if (y<yvalue)
        {
             var yA=ys[n-1];
             var xA=xdata[n-1];
             var yB=ys[n];
             var xB=xdata[n];
             var dy=yA-yB;
             var dx=xB-xA;

         
             var rdate=(((yA-yvalue)/dy)*dx)+xA;
             var rdate2=new Date(rdate);

             // console.log(xA,rdate,rdate2.getTime());
           
             object.x=rdate2.getTime();
             return object;
        }
      }
      
    }
  
  }
  catch(e)
  {
    console.log(e);
  }

  
   return object;
  
}


StroefheidData.prototype.getNearestEtmaalAll=function(date)
{
  
  var nearestDate = null;
  var nearestValue = null;
  var deklaag = this.getLatestDeklaag()[1];
  var ms= deklaag.measurements;
  for (var dateS in ms)
  {
     
      var cdate = Date.parse(dateS);
     
      if (nearestDate==null)
      {
        nearestDate=cdate;
        nearestValue=ms[dateS].etmaalintensiteit_totaal;
      }
      else
      {
        if  (Math.abs(date-nearestDate)>Math.abs(date-cdate))
        {
          nearestDate=cdate;
          nearestValue=ms[dateS].etmaalintensiteit_totaal;
        }
      }

  }
  return nearestValue;

}



StroefheidData.prototype.getRelMeasurements=function()
{
  var ar=[];
  var deklaag = this.getLatestDeklaag()[1];
  for (var n in deklaag.measurements)
  {
           var measurement = deklaag.measurements[n];
           measurement.date=n;
           try 
           {
                   if (measurement.remark.includes("te vroeg")) continue;
           }
           catch(e){}
          
           ar.push(measurement);
           
  }



  return ar;
}


StroefheidData.prototype.getBuitenMeasurements=function()
{
  var ar=[];
  var deklaag = this.getLatestDeklaag()[1];
  for (var n in deklaag.measurements)
  {
           var measurement = deklaag.measurements[n];
           measurement.date=n;
           try 
           {
                   if (measurement.remark.includes("buiten")) 
                   {
                    ar.push(measurement);
                   }
           }
           catch(e){}
          
  }

  return ar;
}


StroefheidData.prototype.getTeVroegMeasurements=function()
{
  var ar=[];
  var deklaag = this.getLatestDeklaag()[1];
  for (var n in deklaag.measurements)
  {
           var measurement = deklaag.measurements[n];
           measurement.date=n;
           try 
           {
                   if (measurement.remark.includes("te vroeg")) 
                   {
                    ar.push(measurement);
                   }
           }
           catch(e){}
          
  }

  return ar;
}



//"remark": "meetmoment te vroeg; meetwaarde niet gebruikt voor model",


StroefheidData.prototype.getBeginJaar=function()
{
  try
  {
            return parseInt(this.getLatestDeklaag()[0].substr(0,4));
  }
  catch(e)
  {
         console.log(e);
  }
  return 1975;
}

StroefheidData.prototype.getBeginDate=function()
{
  try
  {
            return  this.getLatestDeklaag()[0];
  }
  catch(e)
  {
         console.log(e);
  }
  return new Date(1950);
}

StroefheidData.prototype.getLatestDeklaag=function()
{
    //laatste deklaag
     var returnDate=null;
     var returnJaar=null;
     var returnO=null;

     try{
      var hms=this.data;
      for (var n in hms)
      {
        return [n,hms[n]]
      }
}
catch(e){}

          
     
}





Stroefheid.getThresholdValues=function(strook)
{
  //{"0.01":array[2]}
try{
  return  strook.curve.threshold_values;
}
catch(e){}
return null;
}






Stroefheid.getFirstYear=function(strook)
{
  
}

Stroefheid.getParametrizedCurves=function(strook)
{
  //{"0.01":array[2]}
try {
  return  strook.curve.as_parameterized_curves;
}
catch(e){}
return null;
}

