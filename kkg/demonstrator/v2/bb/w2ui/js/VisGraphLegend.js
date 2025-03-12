function isInsideRect(x, y, rect) {
   // console.log(x,y,rect);
    return x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height;
}

VisGraph.prototype.activateGroup=function(group,active)
{
    try{
          for (var n in this.dbRaw.nodes)
            {
                var node = this.dbRaw.nodes[n];
             //   console.log(node);
                if (node.group==group)
                    {
                     node.active=active;
                    // console.log("activate ",node);
                    }
            }
          
    }
    catch(e) {console.log(e)}
    
}

VisGraph.prototype.syncLegendWithRaw=function()
{
    var me=this;
    try{

        for (var uri in me.legendAdmin)
            {
                try{
                var la = me.legendAdmin[uri];
                me.activateGroup(uri,la.active);
                    // console.log("found a legend ",la);
               
                }
                catch(e){}
            }
        }
        catch(e){}
}



VisGraph.prototype.createLegendEvent=function()
{
  
    if (this.cle==null)
        {
            this.cle=true;
            this.legendAdmin={};
let canvas = document.getElementById("canvaslegend");
// Handle canvas click event
var me=this;
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
     for (var uri in me.legendAdmin)
        {
            try{
             var la = me.legendAdmin[uri];
            if (isInsideRect(x,y,la.rect))
                {
                     
                    if (la.active==null)
                        {la.active=true}
                       la.active=!la.active;
                       me.activateGroup(uri,la.active);
                       me.dynamic(false);
                       me.renderRaw();
                    

                   // console.log("found a legend ",la);
                }
            }
            catch(e){}
        }
   
    me.createLegend(me.nodes);

    // legendData.forEach(item => {
    //     if (isInsideRect(x, y, item)) {
    //         // Toggle the fill opacity of the clicked item
    //         item.color = item.color === 'gray' ? item.originalColor : 'gray';
    //         drawLegend();
    //     }
    // });
    
});
        }


}
//

VisGraph.prototype.createLegend=function(nodes)
{
   
   this.createLegendEvent();
   this.nodes=nodes;
     uri_label=VisGraph.uri_label;
  let canvas = document.getElementById("canvaslegend");
  let legend = document.getElementById("legend");
  var rect = canvas.parentNode.getBoundingClientRect();
  
  canvas.width = rect.width;
  canvas.height = rect.height;
  const ctx = canvas.getContext('2d');
  ctx.scale(1, 1);
  canvas.width = rect.width;
  canvas.height = rect.height;
  ctx.scale(1, 1);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  let l=this.dao[V2+"legend"];
  if ((l==true) || (l=="true") || (l=="\"true\"") )
  {
         let lo={};
        for (let n in this.dbRaw.nodes)
        {
            let group = this.dbRaw.nodes[n].group;
            if (group!=null)
            {
                lo[group]="yes";
            }
        }
      
        let y=-10;
        ctx.strokeStyle = 'black';
      
        ctx.font = '10px arial';
      for (let n in lo)
      {
            y+=32;
            ctx.fillStyle = this.stringToColour(n);
            var olegend=this.legendAdmin[n];
            if (olegend==null) { olegend={}; this.legendAdmin[n]=olegend;}

            try {if (olegend.active==false)  ctx.fillStyle='grey';} catch(e){}
            olegend.rect={x:2,y:(y-12),height:20,width:50}
            ctx.beginPath();
            ctx.arc(20, y, 12, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            let n2 = uri_label[n];
            if (n2==null) 
              {
                var localName=this.getLocalName(n);
                var tn=n.replace("#"+localName,"").replace("/"+localName,"");
                n2 = uri_label[tn];
               // console.log(tn,n2,n)

              }
          
            if (n2==null)
            {
                if (n.includes("/")) {var rs=n.split("/"); r=rs[rs.length-1]; if (r=="") {r=rs[rs.length-2]}} 
              
              if (r!=null) {n2=r;} else{ n2=n;} 
            }

            ctx.fillStyle = 'grey';
            ctx.fillStyle = "black";
            try {if (olegend.active==false)  ctx.fillStyle='grey';} catch(e){}
            ctx.fillText(n2, 45, (y+5));

      }
     
      if (canvas.height<y+50)
      {
       // console.log("waarschijlijk een scrollbar nodig",canvas);
        let legend = document.getElementById("canvaslegend2222");
        legend.style.setProperty("overflow","auto") ;
        legend.style.setProperty("overflow","auto") ;
        canvas.height=(y+50);
      }
      else
      {
       // console.log("waarschijlijk geen scrollbar nodig",canvas);
        let legend = document.getElementById("canvaslegend2222");
        legend.style.setProperty("overflow","hidden") 
        //"canvaslegend2222"

      }
 
     // 

  }
  else
  {
   // let legend = document.getElementById("legendA");
   // console.log(legend);
  }


 



}