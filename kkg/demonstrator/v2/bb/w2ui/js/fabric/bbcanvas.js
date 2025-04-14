

 var canvas =null;

 function createCanvas()
 {

    canvas = new fabric.Canvas('mysvg');
    canvas.on('mouse:wheel', function(opt) {
        var delta = opt.e.deltaY;
        var zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
        var vpt = this.viewportTransform;
        if (zoom < 400 / 1000) {
          vpt[4] = 200 - 1000 * zoom / 2;
          vpt[5] = 200 - 1000 * zoom / 2;
        } else {
          if (vpt[4] >= 0) {
            vpt[4] = 0;
          } else if (vpt[4] < canvas.getWidth() - 1000 * zoom) {
            vpt[4] = canvas.getWidth() - 1000 * zoom;
          }
          if (vpt[5] >= 0) {
            vpt[5] = 0;
          } else if (vpt[5] < canvas.getHeight() - 1000 * zoom) {
            vpt[5] = canvas.getHeight() - 1000 * zoom;
          }
        }
    })

    canvas.on('mouse:down', function(opt) {
        var evt = opt.e;
       
        if ( (evt.altKey === true) ||  (evt.ctrlKey === true)  ||  (evt.shift === true)  ||  (evt.button === 2)   ) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      try {
        var uri = opt.target.uri;
        if (uri!=null)
        {
          var sel =getIface().me.props["publishVariable"];
          if (sel!=null)
          {
            console.log("we should send an event ",uri,sel);
            getIface().me.props.publish(sel,uri);
          }
          
          
          //Iface.sendEvent(name,uri);
        }
      }
      catch(e){}

      });
      canvas.on('mouse:move', function(opt) {
        if (this.isDragging) {
          var e = opt.e;
          var vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
      canvas.on('mouse:up', function(opt) {
        // on mouse up we want to recalculate new interaction
        // for all objects, so we call setViewportTransform
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });




      canvas.on('mouse:over', function(e) {
        try
        {
            let oos=e.target._objects;
          if (oos!=null)
          {
           
            oos.forEach(function(oo){
               

                let f=oo.fill;
                oo.set("fillOrg",f);
                 f=oo.stroke;
                oo.set("strokeOrg",f);

                oo.set('fill', 'red');
                oo.set('stroke', 'red');



            });
            var value = e.target.tippy;
        if (value==null)
        {
            value="unknown";
        }
        showTippy(value);
            canvas.renderAll();
            return;

          }
          let f=e.target.get('fill');
          e.target.set("fillOrg",f);
          f=e.target.get('stroke');
          e.target.set("strokeOrg",f);
        e.target.set('fill', 'red');
        e.target.set('stroke', 'red');
        var value = e.target.tippy;
        if (value==null)
        {
            value="unknown";
        }
        showTippy(value);

        canvas.renderAll();
        }
        catch(e){}
      });

    
      canvas.on('mouse:out', function(e) {
        try
        {
            destroyTippy()
            let oos=e.target._objects;
            if (oos!=null)
            {
             
              oos.forEach(function(oo){
                  oo.set('fill', oo.fillOrg);
                  oo.set('stroke', oo.strokeOrg);
              });
              canvas.renderAll();
              return;
            }
        let oo= e.target;

        oo.set('fill', oo.get("fillOrg"));
                  oo.set('stroke', oo.get("strokeOrg"));
        canvas.renderAll();
        }
        catch(e){}
      });


     

          


 }

 window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    if (canvas==null)return;
  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);
  canvas.renderAll();
}


function showTippy(msg)
{
    destroyTippy();
    if (msg==null)
    {
        msg="no info";
    }

    document.tippy=tippy(document.body, { content: msg,followCursor: true  });
    try {document.tippy[0].show();} catch(e){}
    try {document.tippy.show();} catch(e){}
    
}


function destroyTippy()
{
    if ( document.tippy!=null)
    {
        
         for (let n in document.tippy)
           {
            
          try
          {
            document.tippy[n].destroy();
          }
          catch(e){
          //  console.log(e,document.tippy);
            try {document.tippy.destroy();} catch(e){}
          }
           }
    }
    document.tippy=null;
}


