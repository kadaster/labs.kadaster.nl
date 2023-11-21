  
      var llist=null;
      
  function createLocations(s)
  {  
    removeLocations();
    var list=[];  
    if (s)
    {
      list=JSON.parse(s);
    }
    
    llist = L.control.locationlist({ position:"topleft",locationsList : list ,     
    nextText : '->',
    nextTitle : 'Next',
    prevText : '<-',
    prevTitle : 'Previous',
    showList : true });
    map.addControl(llist);
   }
   
   
   function removeLocations()
   {
       if (llist!=null)
       {
            map.removeControl(llist);
            llist=null;
       }
   }
       
    //   
   //
   ///
   // edit
      
     function addLocation(text)
     {
	 if (llist==null)
	       {
	     	createLocations();
	       }
        var o={title:text};
        //o.latlng="["+map.getCenter().lat+", "+map.getCenter().lng+"]";
        o.latlng=map.getCenter();
        o.zoom=map.getZoom();
        
        if (llist!=null)
        {
           llist.options.locationsList.push(o);
        }
        return;
     }
     
     
     function getLocations()
     {
      if (llist!=null)
        {
	  var x="#Locations:"+JSON.stringify(llist.options.locationsList);
	  console.log(x);
           return;
        }
     }
     
     function testLocations()
     {
     
     var s='[{"title":"Poland","latlng":[52.03,19.27],"zoom":6},{"title":"Other","latlng":[50.04,14.28],"zoom":6},{"title":"Other2","latlng":[50.04,19.27],"zoom":12},{"title":"Tiel","latlng":{"lat":51.89473329483807,"lng":5.437441908616148},"zoom":15},{"title":"utrecht","latlng":[52.09550539277189,5.159731228773677],"zoom":13}]';
     
     
     createLocations(s);
     }