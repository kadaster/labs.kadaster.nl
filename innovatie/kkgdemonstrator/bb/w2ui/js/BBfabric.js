
   
var BBSVG=function(layout,panel,widget,rv)
{
    this.recidN=0;
    this.layout=layout;
    this.panel=panel;
    Widget.nid++;
    this.dao=widget;
    this.htmlid='svg'+Widget.nid;
    var me=this;
    this.createSVG(); 
    this.dao.connect(me,function(){
       if (rv!=null)
	   {
	   //	console.log( "vis graph connected",me.dao);
               rv.call(me);
              
            

	   }
   }); // set connections

   document.svg=this;


   
   


}



BBSVG.prototype.createSVG=function(nodes)
{
  var me=this;
  w2ui[me.layout].html(me.panel,"<div class='w2ui-panel-content' width=\"100%\" height=\"100%\"style='height:\"auto\"' ><Canvas style=\"height:100%;width:100%\"id=\"mysvg\"> </Canvas></div>"); 

 //test();



}



BBSVG.prototype.setSparqlResults=function(results,sparql,sparql2)
{
if(sparql.includes("#test;"))
{
  test();
  return;
}

  if (this.onlyOnce==null)
  {
  createCanvas();
     resizeCanvas();
     this.onlyOnce=false;
  }
  canvas.clear();


   
   if (results==null) {test();return;}

   var dx=180;
   var dy=50;
       
   



   try
   {
  for (let n in results.results.bindings)
  {
     let binding= results.results.bindings[n];
     let x = parseInt(binding.x.value)+dx;
     let y=parseInt(binding.y.value)+dy;
     let type2 = binding.type.value;
     let uri = binding.uri.value;
     let label = binding.name.value;
     let text=null;
     try {text=binding.text.value} catch(e){};
     let rotate=null;
     try {rotate=parseInt(binding.rotate.value)} catch(e){};
     

     if (type2.startsWith("hardcoded:"))
     {
        type2= type2.replace("hardcoded:","");
        cmd=type2+"\""+uri+"\")";
        console.log("cmd2:",cmd);
        eval(cmd);
        continue;
     }

     if ((text!=null)&&(rotate==null) )
     {
      var cmd=type2+"("+x+","+y+",\""+label+"\",\""+text+"\",\""+uri+"\")";
      //console.log(cmd);
      try
      {
       eval (cmd);
      }
      catch(e    )
      {
         console.log(e);

      }
      continue;
     }
     if ((text==null)&&(rotate!=null) )
     {
      var cmd=type2+"("+x+","+y+",\""+label+"\","+rotate+",\""+uri+"\")";
      //console.log(cmd);
      try
      {
       eval (cmd);
      }
      catch(e    )
      {
         console.log(e);

      }
      continue;
     }




switch(type2) {
   case "hline5fff00":
    //bullshit
    line (x,y,x,y-25,uri);
    break;

    default:
      var cmd=type2+"("+x+","+y+",\""+label+"\",\""+uri+"\")";
     // console.log(cmd);
      try
      {
       eval (cmd);
      }
      catch(e    )
      {
         console.log(e);

      }
      

}

    


  }
}
catch(e)
{
console.log(e);

}

  
  //test(this.draw,500,500);
}
   
      
   




BBSVG.prototype.stringToColour =function(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
  }



  BBSVG.prototype.setEmptySelection=function()
{
 // console.log("set empty selection ")
  if (this.dao[V2+"publishVariable"]!=null)
    {
        var name=this.dao[V2+"publishVariable"];
        if (name!=null)
        {
        
          Iface.sendEvent(name,"http://www.buildingbits.nl/reset");
        
        }
        
    }
}



BBSVG.prototype.handleDoubleClick=function(event)
{
  this.latestDoubleSelectedNodeUri=null;
    var node = event.nodes;

    if (node==null){return;}
    if (node.length!=1){return;}

    var uri = node[0];
    uri=this.dbRaw.nodes[uri].uri;
    console.log(uri);
    this.group++;
     if (uri.startsWith("legend")) {return;}
    // propagate query

    var sparql =this.dao[V2+"extendquery"];
  
    if (sparql==null){return;}
   
    sparql= sparql.replace("{{visuri}}",uri).replace("{{visuri}}",uri).replace("{{visuri}}",uri).replace("{{visuri}}",uri).replace("{{visuri}}",uri).replace("{{visuri}}",uri).replace("{{uri}}",uri).replace("{{uri}}",uri).replace("{{uri}}",uri).replace("{{uri}}",uri).replace("{{uri}}",uri).replace("{{uri}}",uri);
    
    var me=this;
    this.latestDoubleSelectedNodeUri=uri;
    window.top.query(sparql,function(data)
      {
              me.addData(data,true);
        });
}




BBSVG.prototype.addData=function(data,addBoolean)
{
 
    for (var n in data.results.bindings)
    {
      try {
        var binding=data.results.bindings[n];
       
          var edge=binding.edge.value;
          var edgeLabel="onbekend";
          try {edgeLabel=binding.edgeLabel.value;} catch(e){}

          if (this.useLocalNames) edgeLabel=this.getLocalName(edgeLabel);
          var node=binding.node.value;
          var extraLabel="";
          try {extraLabel ="\n("+ binding.extraLabel.value+")";}catch(e){}

          var nodeLabel="onbekend";
          try {nodeLabel=binding.nodeLabel.value;} catch(e){}
        
          if (this.useLocalNames) nodeLabel=this.getLocalName(nodeLabel);
          nodeLabel+=extraLabel;
          var object=binding.object.value;
          var extraObjectLabel="";
          try {extraObjectLabel ="\n("+ binding.extraObjectLabel.value+")";}catch(e){}
          var objectLabel="onbekend";
          try {objectLabel=binding.objectLabel.value;} catch(e){}
      //    console.log(objectLabel,this.useLocalNames);
          if (this.useLocalNames) objectLabel=this.getLocalName(objectLabel);
          objectLabel+=extraObjectLabel;
          var groupNode="groep"+group;
          var groupObject="groep"+groupO;
          var shape="circle";
          var shapeO="circle";
          
          try {this.hier = binding.hier.value;}catch(e){}
          try {shape = binding.shape.value;}catch(e){}
          try {shapeO = binding.shapeO.value;}catch(e){}
          try {groupNode = binding.nodeType.value;}catch(e){}
          try {groupObject = binding.objectType.value;}catch(e){}
          var nodeID=node.replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","");
          var objectID=object.replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","");
          if (this.dbRaw.nodes[nodeID]==null){   this.dbRaw.nodes[nodeID]={id:nodeID,uri:node,shape:shape,label:nodeLabel,group:groupNode}; }
          if (this.dbRaw.nodes[objectID]==null){  this.dbRaw.nodes[objectID]={id:objectID,uri:object,shape:shapeO,label:objectLabel,group:groupObject};}
          this.dbRaw.nodes[nodeID].group=groupNode;

          var edgeID=nodeID+"__"+objectID+"__"+edgeLabel.replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","").replace("-","");
         //console.log(edgeID,this.dbRaw.edges);
          var edge={id:edgeID,from:nodeID,to:objectID,title:edgeLabel,uri:edge };
          this.dbRaw.edges[edge.id]=edge;
          if (this.edgelabels)
          {
            edge.label =edgeLabel;
          }

        }
        catch(e)
        {
          console.log(e);
        }
          
    }
  
}



 parseBoolean =function(s)
 {
   
   
   if (s==null) {return false;}
   s=s.replace("\"","").replace("\"","").replace("\"","");
   if (s=="true") {return true;}
   if (s=="TRUE") {return true;}
   if (s=="True") {return true;}
   // console.log("returning false  for ",s)
   return false;
 }


 







