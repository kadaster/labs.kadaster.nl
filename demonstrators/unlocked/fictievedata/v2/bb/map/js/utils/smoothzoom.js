
L.Map.mergeOptions({
    // @section Mousewheel options
    // @option smoothWheelZoom: Boolean|String = true
    // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
    // it will zoom to the center of the view regardless of where the mouse was.
    smoothWheelZoom: true,

    // @option smoothWheelZoom: number = 1
    // setting zoom speed
    smoothSensitivity:1

});


L.Map.SmoothWheelZoom = L.Handler.extend({

    addHooks: function () {
        L.DomEvent.on(this._map._container, 'wheel', this._onWheelScroll, this);
    },

    removeHooks: function () {
        L.DomEvent.off(this._map._container, 'wheel', this._onWheelScroll, this);
    },

    _onWheelScroll: function (e) {
        if (!this._isWheeling) {
            this._onWheelStart(e);
        }
        this._onWheeling(e);
    },

    _onWheelStart: function (e) {
        if (this._isEnding==true){return;}
        
        this.setDraggingEnabled(false);
        var map = this._map;
        this._isWheeling = true;
        this._wheelMousePosition = map.mouseEventToContainerPoint(e);
        this._centerPoint = map.getSize()._divideBy(2);
        this._startLatLng = map.containerPointToLatLng(this._centerPoint);
        this._wheelStartLatLng = map.containerPointToLatLng(this._wheelMousePosition);
        this._startZoom = map.getZoom();
        this._moved = false;
        this._zooming = true;

        map._stop();
        if (map._panAnim) map._panAnim.stop();

        this._goalZoom = map.getZoom();
        this._prevCenter = map.getCenter();
        this._prevZoom = map.getZoom();

        this._zoomAnimationId = requestAnimationFrame(this._updateWheelZoom.bind(this));
    },

    _onWheeling: function (e) {
        //  console.log("wheeling");
        let map = this._map;
         this._wheelMousePosition = this._map.mouseEventToContainerPoint(e);
        this._goalZoom = this._goalZoom + L.DomEvent.getWheelDelta(e) * 0.003 * map.options.smoothSensitivity;
        if (this._goalZoom<2) {this._goalZoom=2;}
            if (this._goalZoom>24) {this._goalZoom=24;}
        
        this._performZoom(e);
         L.DomEvent.preventDefault(e);
        L.DomEvent.stopPropagation(e);
       },
       
       _performZoom:function(e,timeout)
       {
        
        let map = this._map;

        if (this._goalZoom < map.getMinZoom() || this._goalZoom > map.getMaxZoom()) {
            this._goalZoom = map._limitZoom(this._goalZoom);
        }
        
        if (timeout==null)
        {
            clearTimeout(this._timeoutId);
            this._timeoutId = setTimeout(this._onWheelEnd.bind(this), 500);
        }
        
      // this.updateDeckLayers();
        
     

       
    },
    updateDeckLayers:function()
    {
         let map = this._map;
       //  let zoom = map.getZoom();
         map.setZoom(this._goalZoom);
       for (let n in map._layers)
      {
        let layer = map._layers[n];
        if (layer._deck!=null)
        {
            layer._update();
        }
       }
     //  map.setZoom(zoom);
        
    },
    
    setDraggingEnabled:function(b)
    {
        for (let n in map._handlers)
        {
           let h = map._handlers[n];
           if (h._draggable!=null)
           {
               if (b)
               {
                h.addHooks()
                }
                else
                {
                    h.removeHooks();
                }            
            }
        }
        document.zooming=!b;
        
        
    },

    _onWheelEnd: function (e) {
        this._isEnding=true;
       this._isWheeling = false;
        document.zooming=false;
   
       if (true)
       {
         let delta =this._startZoom-this._goalZoom;
         if (delta>0)
         {
          
            this._goalZoom=Math.floor( this._map.getZoom()+0.25 );
            let delta1=  Math.abs(this._goalZoom-this._map.getZoom());
           //   console.log("zooming out ends ",delta,delta1);
         //   if (delta1>0.2) {this._goalZoom=this._goalZoom+1;}
        }
        else
        {
          
           this._goalZoom=Math.floor( this._map.getZoom()+0.75 );
            let delta1=  Math.abs(this._goalZoom-this._map.getZoom());
          //    console.log("zooming in ends ",delta,delta1);
           // if (delta1>0.2) {this._goalZoom=this._goalZoom-1;}
           
         }
        }
        this._performZoom(e,false);
          
         let me=this;
         setTimeout(function(){
           
              me._map._moveEnd(true);
       //   this._map.setZoom(this._goalZoom);
             cancelAnimationFrame(me._zoomAnimationId);
             me._map._move(me._center, me._goalZoom);
             me._isEnding=false;
              me.setDraggingEnabled(true);
             //  this.updateDeckLayers();
        
        },100);
         
      
        
      
      
     //   console.log();
           
           
        
    },

    _updateWheelZoom: function () {
        var map = this._map;

        if ((!map.getCenter().equals(this._prevCenter)) || map.getZoom() != this._prevZoom)
            return;

        this._zoom = map.getZoom() + (this._goalZoom - map.getZoom()) * 0.3;
        this._zoom = Math.floor(this._zoom * 100) / 100;

        var delta = this._wheelMousePosition.subtract(this._centerPoint);
        if (delta.x === 0 && delta.y === 0)
            return;

        if (map.options.smoothWheelZoom === 'center') {
            this._center = this._startLatLng;
        } else {
            this._center = map.unproject(map.project(this._wheelStartLatLng, this._zoom).subtract(delta), this._zoom);
        }

        if (!this._moved) {
            map._moveStart(true, false);
            this._moved = true;
        }

        map._move(this._center, this._zoom);
        this._prevCenter = map.getCenter();
        this._prevZoom = map.getZoom();

        this._zoomAnimationId = requestAnimationFrame(this._updateWheelZoom.bind(this));
    }

});

L.Map.addInitHook('addHandler', 'smoothWheelZoom', L.Map.SmoothWheelZoom );



// edgebuffer

(function (factory, window) {
  // define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory);

  // define a Common JS module that relies on 'leaflet'
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  }

  // attach your plugin to the global 'L' variable
  if (typeof window !== 'undefined' && window.L && !window.L.EdgeBuffer) {
    factory(window.L);
  }
}(function (L) {
  L.EdgeBuffer = {
    previousMethods: {
      getTiledPixelBounds: L.GridLayer.prototype._getTiledPixelBounds
    }
  };

  L.GridLayer.include({

    _getTiledPixelBounds : function(center, zoom, tileZoom) {
      var pixelBounds = L.EdgeBuffer.previousMethods.getTiledPixelBounds.call(this, center, zoom, tileZoom);

      // Default is to buffer one tiles beyond the pixel bounds (edgeBufferTiles = 1).
      var edgeBufferTiles = 1;
      if ((this.options.edgeBufferTiles !== undefined) && (this.options.edgeBufferTiles !== null)) {
        edgeBufferTiles = this.options.edgeBufferTiles;
      }

      if (edgeBufferTiles > 0) {
        var pixelEdgeBuffer = L.GridLayer.prototype.getTileSize.call(this).multiplyBy(edgeBufferTiles);
        pixelBounds = new L.Bounds(pixelBounds.min.subtract(pixelEdgeBuffer), pixelBounds.max.add(pixelEdgeBuffer));
      }
      return pixelBounds;
    }
  });

}, window));



