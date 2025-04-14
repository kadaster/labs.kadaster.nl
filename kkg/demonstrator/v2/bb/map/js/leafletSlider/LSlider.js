L.Control.SliderControl = L.Control.extend({
    options: {
   
        maxValue: 2020,
        minValue: 1920,
     
    },

      


    onAdd: function (map) {
        this.options.map = map;

        // Create a control sliderContainer with a jquery ui slider
      
        this.sliderContainer = L.DomUtil.create('div',"slider");
          this.sliderContainer.setAttribute("style", "width:400px;height:100px;overflow-y: auto;");
        
          if (!L.Browser.touch) {
        L.DomEvent.disableClickPropagation(this.sliderContainer);
           L.DomEvent.disable(this.sliderContainer);
        L.DomEvent.on(this.sliderContainer, 'mousewheel', L.DomEvent.stopPropagation);
    } else {
        L.DomEvent.on(this.sliderContainer, 'click', L.DomEvent.stopPropagation);
    }
   
        
        
      
        var slider=$( this.sliderContainer).append('<input  type="range" min="'+this.options.minValue+'" max="'+this.options.maxValue+'" value="'+this.options.maxValue+'" class="slider" id="myRange" oninput="sliderInputEvent(event)">');
        
     
            disableEvents();
     
        
        return  this.sliderContainer;
    },
    

    onRemove: function (map) {
        //Delete all markers which where added via the slider and remove the slider div
      
      
}
     

   
});

function disableEvents()
{
   
        var el = document.getElementById("myRange");
        if (el==null)
        {
            setTimeout(disableEvents,200);
            return;
        }
      
        L.DomEvent.disableClickPropagation(el);
      
}

function sliderInputEvent(event)
    {
      
            document.tl.recolorAll("rgba(128,128,128,0.7)",false); 
          var v=parseInt(event.target.value);
          
            document.tl.setTimeYear(1920,v);
            
          //   L.DomEvent.disableClickPropagation($("#myRange"));
               //event.stopPropagation();
              //event.preventDefault();
            
    }

L.control.sliderControl = function (options) {
    return new L.Control.SliderControl(options);
};
