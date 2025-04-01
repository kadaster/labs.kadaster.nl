  
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
    
    function changeVizSliderDate(layerN,min,max)
    {
       // console.log("date slider event");
        let json=getLJSON(layerN);
      
        for (var n in json.results.bindings)
        {
           var object=json.results.bindings[n];
         
           try
           {
            let value=object.color.value;
            var d=new Date(object.color.value);
            value=d.getTime();
                  
           if ((value>=min) &&(value<=max) )
               {
                  object.colorVisible=true;
               }
               else
               {
                   object.colorVisible=false;
               }
           }
           catch(e)
           {
               console.log(json,object,e);
           }
           
        }
        updateVisibility(layerN);
       
            
    }
    
    function changeVizSlider(layerN,min,max)
    {
       
        if (Singleton.getInstance().ar.date) {changeVizSliderDate(layerN,min,max); return}

         let uris={};
        let json=getLJSON(layerN);


        for (var n in json.results.bindings)
        {
           var object=json.results.bindings[n];
         
           try
           {
            let value=object.color.value;
         
           if ((value>=min) &&(value<=max) )
               {
                  object.colorVisible=true;
               }
               else
               {
                   object.colorVisible=false;
               }
           }
           catch(e)
           {
               console.log(json,object,e);
           }
           
        }
        updateVisibility(layerN);
        
        
        
        
    }
    
    function presentGetal(value)
    {
        if (Singleton.getInstance().ar.date)
            {
                dateObj = new Date(value);
                const year = dateObj.getFullYear();
                const month = ('0' + (dateObj.getMonth() + 1)).slice(-2); // Months are zero-indexed
                const day = ('0' + dateObj.getDate()).slice(-2);
                
                const dateStr = `${year}-${month}-${day}`;
                return dateStr;
                
            }
      
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
    
         
         
         function createSlider(uniek,min,max,useLabels)
         {
             
          //    useLabels=false;
               let delta =max-min;
               let factor=1;
               if (delta<100)factor=100;
               min=min*factor;
               max=max*factor;
        
                    $("#slider"+uniek).slider({
                      orientation: "vertical",
                      range: true,
                      min:min,
                      uniek:uniek,
                      max:max,
                      factor:factor,
                      values: [ min, max ],
                      slide: function( event, ui ) {
                        
                         
                       slide(event, ui,factor,"#slider"+uniek,uniek,useLabels);
                     
                      },
                      create: function (event, ui) {
                            create(event, ui, $(this).slider('values', 0)/factor, $(this).slider('values', 1)/factor,useLabels)
                        },
                        stop:function(event,ui)
                        {
                            changeVizSlider(uniek,$(this).slider('values', 0)/factor, $(this).slider('values', 1)/factor,useLabels);
                        }
        
                    });
                    
        }
        
        
        
        
       
       
        
    
        
        
        
        