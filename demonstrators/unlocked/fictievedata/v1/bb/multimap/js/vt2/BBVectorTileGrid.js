
var zindex=300;
L.GridLayer.GeoJSON = L.GridLayer.extend({
    options: {
        async: true,
        updateWhenZooming:true,
       
       
     //   maxNativeZoom:0
      //  updateInterval:0,
       // keepBuffer:100
    },

    initialize: function (geojson, options) {
        if (options==null) options={};
        options.pane="tilePane";
        L.setOptions(this, options);
               
        
        L.GridLayer.prototype.initialize.call(this, options);
        //console.log("this tileIndex",thi)
        this.tileIndex = geojsonvt(geojson, this.options);
        
        
    },
    getPane:function(name)
    {
      //console.log("getpanel",name);
      //this._map.getPane(name
      return map.getPane("overlayPane")
        
    },
    
    smartRedraw:function()
    {
        
        document.tl = this;
      
        
       var col=this._container.lastElementChild.children;
         var pad = 0;
       for (let n=0;n<col.length;n++)
       {
          let tile = col.item(n);
       
           let style =getComputedStyle(tile);
          // console.log(style.height);
           let h=style.height.replace("256.","255.");
           let w=style.width.replace("256.","255.");
           h=255;
           w=255;
            tile.style.height=h;
            tile.style.width=w;
          
             
          
           let ctx = tile.getContext('2d');
         
     
           ctx.clearRect(0, 0, tile.width, tile.height);
           drawTileOnCanvas(tile,ctx,pad);
             tile.style.height=h;
            tile.style.width=w;
          
       }
    
    },
    setTimeYear:function(beginyear,endyear)
    {
      var uri_o=Singleton.getInstance().uri_objects;
     // Singleton.getInstance().uri_rgb={};
      
      for (var uri in uri_o)
      {
        //var o = uri_o[uri];
        var value=Singleton.getInstance().uri_value[uri]
        if ((value=>beginyear) && (value<=endyear))
        {
            Singleton.getInstance().uri_rgb[uri]=null;
        }
         
      } 
       map.removeLayer(this);
       map.addLayer(this);
       
    },
    test:function()
    {
        //rgba(0,255,0,0.05)
      this.recolorAll("rgba(128,128,128,0.7)"); 
      this.setTimeYear(1950,1975);
     // updateAllTileLayers();
    
    },
    restoreAllColors:function(update)
    {
        Singleton.getInstance().uri_rgb={};
        
        if (update!=false)
        {
            updateAllTileLayers();
         }
      //   this.recolorAllDone=false;
    },
    
    recolorAll:function(rgb,update)
    {
       // if (this.recolorAllDone){return;}
        
         restorePreviousHoover();
         removeAllSelections();
         
         
          var uri_o=Singleton.getInstance().uri_objects;
          Singleton.getInstance().uri_rgb={};
      
      for (let uri in uri_o)
      {
        let o = uri_o[uri];
         Singleton.getInstance().uri_rgb[uri]=rgb;
      }  
      
          if (update!=false)
        {
            updateAllTileLayers();
         }
     //    this.recolorAllDone=true;
    },


    createTile: function (coords) {
       
        // create a <canvas> element for drawing
          let tile = L.DomUtil.create('canvas', 'BBTile leaflet-pane leaflet-overlay-pane');
          // var tile = L.DomUtil.create('canvas', 'BBTile leaflet-tile leaflet-tile-loaded','');
           tile.style["z-index"]=zindex;
      
        if (this.options.mouseEvents!=false)
        {
           // console.log("creating tile with events");
          
            
          
            
            
             
          }
          else
          {
           
               //var tile = L.DomUtil.create('canvas', 'BBTile leaflet-tile leaflet-tile-loaded');
           //     var tile = L.DomUtil.create('canvas', 'BBTile leaflet-image-layer');
               tile.style["pointer-events"]="none";
            //   tile.style["z-index"]=zindex;
               
        }
        
        
        // setup tile width and height according to the options
        let size = this.getTileSize();
        tile.width = size.x;
        tile.height = size.y;
        
       
        // get a canvas context and draw something on it using coords.x, coords.y and coords.z
               
       let ctx = tile.getContext('2d');
        
       
        
        // return the tile so it can be rendered on screen
        let tileInfo = this.tileIndex.getTile(coords.z, coords.x, coords.y);
        let features = tileInfo ? tileInfo.features : [];
        tile.features=features;
         let pad = 0;
     
        drawTileOnCanvas(tile,ctx,pad);
    
        
        /*
        for (var i = 0; i < features.length; i++) {
            var feature = features[i];
            this.drawFeature(ctx, feature);
        }
        */
       
        let leafletMap=Singleton.getInstance().map; //IFrame dus altijd maar 1 map
        if (this.options.mouseEvents!=false)
        {
            tile.addEventListener("click", function(e){handleMouseClick(e,this,ctx,tile,pad)}, false);
            }
    var isRealistic=true;
    
    if (Singleton.getInstance().aantalFeaturesIsLaag==false)
    {
    
      if (leafletMap.getZoom()<12)
          {
            isRealistic=false;
          }
      
    }
    let mouseMoveEvent=true;
    if (mouseMoveEvent) 
    {
    if (isRealistic)
        {
            if (this.options.mouseEvents!=false)
            {
                tile.addEventListener("mousemove",function(e){mouseMoveEventCanvasCursorSelector(e,this,ctx,tile,pad);},false);
                }
        }
    }
        
        
        
        
        return tile;
    },


    drawFeature: function (ctx, feature) {
        console.log("Drawfeature");
        var typeChanged = type !== feature.type,
            type = feature.type;
        ctx.beginPath();
        if (this.options.style) this.setStyle(ctx, this.options.style);
        if (type === 2 || type === 3) {
            for (var j = 0; j < feature.geometry.length; j++) {
                var ring = feature.geometry[j];
                for (var k = 0; k < ring.length; k++) {
                    var p = ring[k];
                    if (k) ctx.lineTo(p[0] / 16.0, p[1] / 16.0);
                    else ctx.moveTo(p[0] / 16.0, p[1] / 16.0);
                }
            }
        } else if (type === 1) {
            for (var j = 0; j < feature.geometry.length; j++) {
                var p = feature.geometry[j];
                ctx.arc(p[0] / 16.0, p[1] / 16.0, 2, 0, Math.PI * 2, true);
            }
        }
        if (type === 3) ctx.fill(this.options.style.fillRule || 'evenodd');

        ctx.stroke();
    },

    setStyle: function (ctx, style) {
        var stroke = style.stroke || true;
        if (stroke) {
            ctx.lineWidth = style.weight || 5;
            var color = this.setOpacity(style.color, style.opacity);
            ctx.strokeStyle = color;

        } else {
            ctx.lineWidth = 0;
            ctx.strokeStyle = {};
        }
        var fill = style.fill || true;
        if (fill) {
            ctx.fillStyle = style.fillColor || '#03f';
            var color = this.setOpacity(style.fillColor, style.fillOpacity);
            ctx.fillStyle = color;
        } else {
            ctx.fillStyle = {};
        }
    },

    setOpacity: function (color, opacity) {
        if (opacity) {
            var color = color || '#03f';
            if (color.iscolorHex()) {
                var colorRgb = color.colorRgb();
                return "rgba(" + colorRgb[0] + "," + colorRgb[1] + "," + colorRgb[2] + "," + opacity + ")";
            } else {
                return color;
            }
        } else {
            return color;
        }

    }
})

L.gridLayer.geoJson = function (geojson, options) {
    return new L.GridLayer.GeoJSON(geojson, options);
};

String.prototype.iscolorHex = function () {
    let sColor = this.toLowerCase();
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    return reg.test(sColor);
}


String.prototype.colorRgb = function () {
    let sColor = this.toLowerCase();
    if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
    }
  
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return sColorChange;
};  