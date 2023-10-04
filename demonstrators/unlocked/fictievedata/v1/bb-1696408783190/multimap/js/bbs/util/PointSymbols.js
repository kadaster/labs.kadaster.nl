function drawTypeOneSymbol(ctx,geom,feature,size,size2)
{
    
    var x = geom[0] / 16;
    var y = geom[1] / 16;
    
    if (false)
	{
      // fast little box
    	ctx.beginPath();
	ctx.strokeStyle=getKleur(feature);
	ctx.fillStyle=ctx.strokeStyle;
       
         ctx.fillRect(x-size,y-size,size2,size2);
	}
    
    if (false) // tree
	{
    
            ctx.beginPath();
           // ctx.strokeStyle=getKleur(feature);
             ctx.fillStyle = 'green';
            //ctx.fillStyle=ctx.strokeStyle;
            ctx.arc(x, y, size2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = '#003300';
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = 'brown';
            ctx.strokeStyle = 'brown';
            ctx.arc(x, y, size2*.25, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
	}
    
    ctx.beginPath();
    ctx.fillStyle=getKleur(feature);
    ctx.strokeStyle = '#003300';
    ctx.arc(x, y, size2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    
    
    
    
     
     

}