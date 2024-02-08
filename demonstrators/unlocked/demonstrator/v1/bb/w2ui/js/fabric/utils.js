

function test()
{
console.log("running test");

   createCanvas();
     resizeCanvas();
    var circle = new fabric.Circle({
      radius: 120, fill: 'green', left: 100, top: 100
    });
    var triangle = new fabric.Triangle({
      width: 120, height: 130, fill: 'blue', left: 50, top: 50
    });


    var x=180;
var y=50;
    var bullshituri="";
horizontalRail(500,y+500,"rail a",bullshituri);
horizontalRail(500,y+525,"rail b",bullshituri);


earthUp(80,y+470,"ARAX",bullshituri);
earthDown(80,y+555,"ARBX",bullshituri);
//vline(150,525);

//vline 1


line (x+3,y+525,x+3,500,bullshituri);
scheider(x,y+475,"SRB",bullshituri); //breaker
earthLeft(x,y+425,"AVRB1",bullshituri);
vermogensschakelaarearthleft(x,y+375,"VSB380",bullshituri)

stroomtrafosterpunt(x,y+325,"IT2",bullshituri);

line (x+3,y+300,354,y+300,bullshituri);

stroomtrafosterpuntearthleft(x,y+275,"IT","AVV380",bullshituri);
stroomtrafoearthleft(x,y+225,"UT380","ATT380",bullshituri);
overspanningsafleider(x,y+175,"OSA380",bullshituri)
transformator(x,y+125,"TR402","380/150/50kV","500MVA",bullshituri)
overspanningsafleider(x-4,y+75,"OSA150",bullshituri)
scheider(x-4,y+50,"ST150",bullshituri);
earthLeft(x-4,y+0,"ATL150",bullshituri);

//vline 2
scheider(350,y+475,"SRA",bullshituri);
earthLeft(350,y+425,"AVRA",bullshituri);
vermogensschakelaar(350,y+375,"VSA380",bullshituri)
stroomtrafosterpunt(350,y+325,"IT1",null,bullshituri);


// hline hoog
overspanningsafleider(x+64,y+127,"DSA050",-90,bullshituri)
stroomtrafosterpunt(x+95,y+121,"IS1",90,bullshituri);

}




function transformator(x,y,text,text1,text2,uri)
{
    insertSVG("transformator",x-2,y,null,uri); 
    var t=new fabric.Text(text,{ fontSize:10,left: x-65, top: y-11 });
    canvas.add(t);
    t.tippy=text;
    t.uri=uri;
    var t=new fabric.Text(text1,{ fontSize:10,left: x-65, top: y+4 });
    canvas.add(t);
    t.tippy=text1;
    t.uri=uri;
    var t=new fabric.Text(text2,{ fontSize:10,left: x-65, top: y+19 });
    canvas.add(t);
    t.tippy=text2;
    t.uri=uri;
}


function overspanningsafleider(x,y,text,rotate,uri)
{
    if (uri==null)
    {
        uri=rotate;
        rotate=null;
    }
    insertSVG("overspanningsafleider",x-8,y,null,uri); 
    if (rotate==null)
    {
    var text1=new fabric.Text(text,{ fontSize:10,left: x-60, top: y-11 });
    canvas.add(text1);
    text1.tippy=text;
    text1.uri=uri;
    }
    else
    {
        var text1=new fabric.Text(text,{ fontSize:10,left: x-20, top: y+16 });
        canvas.add(text1);
        text1.tippy=text;
        text1.uri=uri;
    }
}

function stroomtrafoearthleft(x,y,text,text2,uri)
{
    insertSVG("stroomtrafoearthleft",x+1,y,null,uri); 
    var text1=new fabric.Text(text,{ fontSize:10,left: x-60, top: y-11 });
    canvas.add(text1);
    text1.tippy=text;
    text1.uri=uri;

    var text1=new fabric.Text(text2,{ fontSize:10,left: x-60, top: y+12 });
    canvas.add(text1);
    text1.tippy=text2;
    text.uri=uri;
}



function stroomtrafosterpunt(x,y,text,rotate,uri)
{
    if (uri==null)
    {
        uri=rotate;
        rotate=null;
    }
    insertSVG("stroomtrafosterpunt",x+10,y,null,uri); 
    if (rotate==null)
    {
        var text1=new fabric.Text(text,{ fontSize:10,left: x-25, top: y-8 });
        canvas.add(text1);
        text1.tippy=text;
        text1.uri=uri;
    }
    else
    {
        var text1=new fabric.Text(text,{ fontSize:10,left: x+20, top: y+20 });
        canvas.add(text1);
        text1.tippy=text;
        text1.uri=uri;
    }
}

function stroomtrafosterpuntearthleft(x,y,text,text2,uri)
{
    insertSVG("stroomtrafosterpuntearthleft",x+3,y,null,uri); 
    var text1=new fabric.Text(text,{ fontSize:10,left: x-25, top: y-8 });
    canvas.add(text1);
    text1.tippy=text;
    text1.uri=uri;

    var text1=new fabric.Text(text2,{ fontSize:10,left: x-60, top: y+12 });
    canvas.add(text1);
    text1.tippy=text2;
    text1.uri=uri;
}



function earthLeft(x,y,text,uri)
{
    insertSVG("earthleft",x-7,y,null,uri); 
    createText(x-55,y+8,text,uri);
   
}
function vermogensschakelaarearthleft(x,y,text,uri)
{
    insertSVG("vermogensschakelaarearthleft",x-5,y,null,uri); 
    createText(x-50,y-8,text,uri);

    
}


function vermogensschakelaar(x,y,text,uri)
{
    insertSVG("vermogensschakelaar",x,y,null,uri); 
    createText(x-50,y-8,text,uri);

   
}
function scheider(x,y,text,uri)
{
    insertSVG("scheider",x,y,null,uri); 
    createText(x-35,y-8,text,uri);
   
}
function vline(x,y,uri)
{
    insertSVG("verticalline",x,y,null,uri);
}

function earthUp(x,y,text,uri)
{
    insertSVG("earthUp",x,y,null,uri);
    createText(x-15,y-30,text,uri);
}
function earthDown(x,y,text,uri)
{
    insertSVG("earthDown",x,y,null,uri);
    createText(x-20,y+18,text,uri);

   
}
function createText(x,y,text,uri)
{
    var text1=new fabric.Text(text,{ fontSize:10,left: x, top: y });
    text1.tippy=text;
    text1.uri=uri;
  
    text1.lockMovementX=true;
    text1.lockMovementY=true;
    text1.lockScalingX= true;
    text1.lockScalingY=true;
    text1.lockRotation=true;

    canvas.add(text1);

}

function insertSVG(file,x,y,rotate,uri)
{

    fabric.loadSVGFromURL('./js/fabric/lib/'+file+'.svg', function(objects, options) 
    {
       
        var options ={ selectable: true,
            evented: true}
        var obj = fabric.util.groupSVGElements(objects, options);
        obj.hasControls = false;
     if (rotate!=null)
     {
        obj.rotate(rotate);
     }
     obj.tippy=file.replace("left","").replace("right","").replace("up","").replace("down","");;
        obj.transformMatrix= [ 0.5, 0, 0, 0.5, 0, 0 ];
        var newCenter = { x: x, y: y };
        obj.scaleX=0.5;
        obj.scaleY=0.5;
        obj.lockMovementX=true;
        obj.lockMovementY=true;
        obj.lockScalingX= true;
        obj.lockScalingY=true;
        obj.lockRotation=true;
        obj.setPositionByOrigin(newCenter, 'center', 'center');
        obj.uri=uri;
        canvas.add(obj).renderAll();
      })
   
}

function line(x,y,x2,y2,uri)
{
    var line  = new fabric.Line([ x, y, x2, y2 ],{
        fill: 'grey',
        stroke: 'grey',
        strokeWidth: 1,
        selectable: true,
        evented: true,
      })
 line.uri=uri;
canvas.add(line);
}

function horizontalRail(length,y,text,uri)
{
    var line  = new fabric.Line([ 50, y, length+50, y ],{
        fill: 'grey',
        stroke: 'grey',
        strokeWidth: 3,
        selectable: true,
        evented: true,
      })
      line.uri=uri;
 
canvas.add(line);
var text1=new fabric.Text(text,{ fontSize:15,left: 10, top: y-10 });
canvas.add(text1);
text1.tippy=text;
text1.uri=uri;

var text1=new fabric.Text(text,{ fontSize:15,left: length+60, top: y-10 });
canvas.add(text1);
text1.tippy=text;
text1.uri=uri;



}





