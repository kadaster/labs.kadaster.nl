  
     function slide(event, ui,factor,id,uniek,noLegend) {
    // Allow time for exact positioning
    setTimeout(function () {
        
        let value = ui.value/factor;
         value=presentGetal(value);
        
        if (noLegend!=true)
        {
        
        $(ui.handle).attr('title',value).tooltip('fixTitle').tooltip('show');
        }
        
    }, 0);
    
    let values=$(id).slider( "option", "values" );
  // console.log(values[0]/factor,values[1]/factor,uniek);
  
   //changeVizSlider(uniek,values[0]/factor,values[1]/factor);
   
    
}



function changeVizSlider(uri,min,max)
{
    let layer = SparqlLayerDB.db[uri];

    layer.changeMinMaxVisibility(min,max);

}

function presentGetal(value)
{
    
     let value2=value+"";
        if (value2.includes("."))
        {
            try
            {
             value=parseFloat(value2);
             value=value.toFixed(3);   
            }
            catch(e) {}
            
        }
    
    return value;
    
}




function create(event, ui, start, end,noLegend) {
    
    
    start=presentGetal(start);
    end=presentGetal(end);
    var handles = $(event.target).find('span');
     if (noLegend!=true)
    {
    handles.eq(0).tooltip({
        animation: false,
        placement: 'right',
        trigger: 'manual',
        container: handles.eq(0),
        title: ""+start,
        dynamic:true
    }).tooltip('show');
    
   
    handles.eq(1).tooltip({
        animation: false,
        placement: 'left',
        trigger: 'manual',
        container: handles.eq(1),
        title: end,
        dynamic:true
    }).tooltip('show');
    
    }
    
    
    
}

     
    
     function createSlider(uniek,min,max,useLabels,layerUri,userMin,userMax)
     {
       
     
      //    useLabels=false;
           let delta =max-min;
           let factor=1;
           if (delta<100)factor=100;

           if (userMin==null){userMin=min;}
           if (userMax==null){userMax=max;}
           userMin=userMin*factor;
           userMax=userMax*factor;
           min=min*factor;
           max=max*factor;

           
    
                $("#slider"+uniek).slider({
                  orientation: "vertical",
                  range: true,
                  min:min,
                  uniek:uniek,
                  max:max,
                  factor:factor,
                  values: [ userMin, userMax ],
                  slide: function( event, ui ) {
                    
                     
                   slide(event, ui,factor,"#slider"+uniek,uniek,useLabels);
                 
                  },
                  create: function (event, ui) {
                        create(event, ui, $(this).slider('values', 0)/factor, $(this).slider('values', 1)/factor,useLabels)
                    },
                    stop:function(event,ui)
                    {
                        changeVizSlider(layerUri,$(this).slider('values', 0)/factor, $(this).slider('values', 1)/factor,useLabels);
                    }
    
                });
                
    }
    
    
    
    
   
   
    

    
    
    
    