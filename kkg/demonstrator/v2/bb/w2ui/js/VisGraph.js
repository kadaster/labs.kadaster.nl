

   
var VisGraph=function(layout,panel,widget,rv)
{
    this.recidN=0;
    this.layout=layout;
    this.panel=panel;
    Widget.nid++;
    this.dao=widget;
    this.htmlid='visgraph'+Widget.nid;
    var me=this;
    this.createVisgraph(); 
    this.dao.connect(me,function(){
       if (rv!=null)
	   {
	   //	console.log( "vis graph connected",me.dao);
               rv.call(me);
              
            

	   }
   }); // set connections

   document.visGraph=this;



}

let uri_label={};
uri_label["https://w3id.org/nen2660/def"]="NEN2660";
uri_label["https://w3id.org/nen2660/term"]="NEN2660-term";
uri_label["http://www.w3.org/2000/01/rdf-schema"]="RDFS";
uri_label["https://bimloket.nl/data/term/cbnl/"]="CBNL-term";
uri_label["https://bimloket.nl/data/def/cbnl/"]="CBNL-def";

uri_label["http://ont.cbnl.org/cb/def/"]="CBNL-org-def";
uri_label["http://ont.cbnl.org/cb/id/agent/"]="CBNL-org-agent";
uri_label["http://www.w3.org/2002/07/owl"]="owl";
uri_label["https://w3id.org/nen2660/def"]="NEN2660-def";
uri_label["http://www.w3.org/2001/XMLSchema"]="XSD";
uri_label["http://example.com/ifc/"]="ifc";




uri_label["http://ont.cbnl.org/cb/def/skos/"]="CBNL-skos";
uri_label["http://www.w3.org/1999/02/22-rdf-syntax-ns"]="RDF";


uri_label["http://www.rws.nl/abdl"]="abdl";

uri_label["https://bimloket.nl/data/kernmodel/thesaurus/"]="CBNL-thesaurus";
uri_label["https://bimloket.nl/data/term/"]="data-term";



uri_label["http://www.w3.org/2004/02/skos/core"]="SKOS";
uri_label["http://ont.cbnl.org/cb/def/rdfs/"]="CBNL-rdfs";
//uri_label["http://ont.cbnl.org/cb/def/rdfs"]="CBNL-Oud";

//http://ont.cbnl.org/cb/def
uri_label["http://purl.org/dc/terms/"]="dc";
uri_label["http://qudt.org/schema/qudt/"]="qudt";
uri_label["http://www.w3.org/ns/shacl#"]="shacl";
uri_label["https://w3id.org/nen2660/owl/def#"]="NEN2660";



VisGraph.uri_label=uri_label;


VisGraph.prototype.createVisgraph=function(nodes)
{
  var me=this;
  this.graphdata=null;
  this.dbRaw={nodes:{},edges:{}};
  this.group=0;
  this.counter=0;
  this.network=null;
  w2ui[me.layout].html(me.panel,"<div class='w2ui-panel-content' style='height:\"auto\"' id=\"mynetwork\"></div>"); 
}



VisGraph.prototype.setSparqlResults=function(results,sparql,sparql2)
{
  getIface().me.props.setLoading(true);
  // console.log(sparql);
  var edgelabels= this.dao[V2+"edgelabels"];
  if (edgelabels==null){edgelabels=false;}else{edgelabels = parseBoolean(edgelabels);}
  this.edgelabels=edgelabels;
  //console.log("ue local names:"+this.useLocalNames);


   this.addData(results);
  
   this.render();
   getIface().me.props.setLoading(false);
}
   
      
   


VisGraph.prototype.handleSelect=function(event)
{
  var node = event.nodes;
  
   
    if (node==null){return;}
    if (node.length!=1){return;}
    
    var uri = node[0];
   
    if (uri.startsWith("legend")) {return;}
   uri=this.dbRaw.nodes[uri].uri;
   try{
    if (this.dao[V2+"publishVariable"]!=null)
    {
        var name=this.dao[V2+"publishVariable"];
        if (name!=null)
        {
        
          Iface.sendEvent(name,uri);
        
        }
        
    }
   
  }
  catch(e){}
}


VisGraph.prototype.stringToColour =function(str){
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



VisGraph.prototype.setEmptySelection=function()
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



VisGraph.prototype.handleDoubleClick=function(event)
{
  this.latestDoubleSelectedNodeUri=null;
    var node = event.nodes;

    if (node==null){return;}
    if (node.length!=1){return;}

    var uri = node[0];
    uri=this.dbRaw.nodes[uri].uri;
  
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
VisGraph.prototype.storeCurrentPositions=function()
{
  if (this.nodes==null){return;}
  //console.log("storing node positions");

  this.network.storePositions();

}
VisGraph.prototype.tweenPositions=function(dataset)
{
// not used
  if (this.nodes==null){return;}
 // console.log(this.nodes);

}
VisGraph.prototype.getLocalName=function(label)
{
  //console.log("get local name for "+label);
  if (label==null){return "";}
  
 
  if ( (label.startsWith("http")) || (label.startsWith("https"))   )
  {
   // console.log(label);
    if (label.includes("#")) 
      {
         var base=label.split("#")[0];
         var sbase=VisGraph.uri_label[base+"#"];
         if (sbase==null){sbase="" }else{sbase+=":"}
        return sbase+label.split("#")[1];
      }

    let labels=label.split("/");
    return labels[labels.length-1];

  }
  return label;
}

VisGraph.prototype.dynamic=function(b)
{

  var newPhysicsOptions = {
    enabled: true,
    barnesHut: {
      gravitationalConstant: -2000,
      centralGravity: 0.3,
      springLength: 20,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
  
    timestep: 1.5
  };

  if (this.network!=null)
    {
      if (b)
        {
      //    console.log("go to physics");
          this.network.stabilize(1000);
          this.network.setOptions({physics:newPhysicsOptions, });
          this.network.startSimulation();
        }
        else
        {
       //   console.log("disable physics");
          this.network.setOptions({physics:{enabled:false}, });
          this.network.stopSimulation();
        }
    }

}


VisGraph.prototype.addData=function(data,addBoolean)
{
 
  this.useLocalNames = false;
   try {this.useLocalNames=this.dao[V2+"useLocalNames"];}catch(er){}
   if (this.useLocalNames==null){this.useLocalNames=false;}else{this.useLocalNames = parseBoolean(this.useLocalNames);}
   // console.log("use localnames:",this.useLocalNames);
   
    var reallyAdded=false;

 // console.log("add data called ",addBoolean);
  if ((addBoolean) || (addBoolean!=null) )
  {
   
      
  }
  else{
  //  console.log("resetting nodes and creating an new dataset");
 
  this.setEmptySelection();

  if (this.network!=null)
    {
       this.dynamic(false);
    }
    this.nodes=null;
    this.edges=null;
    this.graphdata =null;
    
    this.dbRaw={nodes:{},edges:{}};
    this.group=0;
    this.counter=0;
    this.network=null;


  } // adding or resetting


    var group=this.group;
    var groupO=group++;
    this.hier=true;
    if (data==null){return;}
  // console.log("vis graph parsing data ",data.results);
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
          if (this.dbRaw.nodes[nodeID]==null){ 
            reallyAdded=true;
              this.dbRaw.nodes[nodeID]={id:nodeID,uri:node,shape:shape,label:nodeLabel,group:groupNode}; 
            }
          if (this.dbRaw.nodes[objectID]==null){ reallyAdded=true; this.dbRaw.nodes[objectID]={id:objectID,uri:object,shape:shapeO,label:objectLabel,group:groupObject};}
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
    this.syncLegendWithRaw();
   // console.log("add data calling renderRaw");
    this.renderRaw();
    if ((addBoolean) || (addBoolean!=null) )
      {
        if (reallyAdded==false)
          {
            this.dynamic(false);
            getIface().me.showToast("no additions were made to the graph visualisation","info");
          }
          else
          {
           // this.storeCurrentPositions(); // for tweening purposes
            if (this.network!=null)
            {
               this.dynamic(true);
             }
          }
      }
  }
  VisGraph.prototype.renderRaw=function()
   {

    // console.log("renderRaw called"  );
    // db raw is updated.

    try{if (this.hier=="false")this.hier=false;}catch(e){}
    try{if (this.hier=="true")this.hier=true;}catch(e){}
    

    var nodes=new vis.DataSet([]);
    if (this.nodes!=null){nodes=this.nodes;}
    else{this.nodes=nodes;}
    //console.log("adding nodes ",this.dbRaw.nodes);
    var aantal=0;
    for (let n in this.dbRaw.nodes)
    {
     try
     {
      aantal++;
      let node = this.dbRaw.nodes[n];
     
      if (node.group!=null)
      {
           
            node.color=this.stringToColour(node.group);
           // node.title="hallo";
      }
      else
      {
        node.color= "#FF9900";
      }


      if (node.active==false) 
        {  node.color= "#AAAAAA";
         // nodes.remove(node);
        }
       
        let o=this.nodes.get(node.id);
    {
                if (o==null)
                {
                    nodes.add(node);
                }
                else{
                  if (o.uri!=this.latestDoubleSelectedNodeUri)
                  {
                    o.fixed=true;
                  }
                  else{
                    o.fixed=false;
                  }
              
                // o.fixed={x:false,y:false};
               
                  nodes.update(o);
                }
    }

      if (aantal>75)
      {
        alert("too many nodes. not displaying all nodes ");
        break;
      }
    }
    catch(e)
    {console.log(e);}
    }
   // console.log( "create legend",nodes);
    this.createLegend(nodes);
  
    //add legend
  

    let edges=new vis.DataSet([]);
    if (this.edges!=null) {edges=this.edges;}
    else{this.edges=edges;}
   // console.log(this.dbRaw.edges,this.edges);
    for (let n in this.dbRaw.edges)
    {
      let edge =this.dbRaw.edges[n];
    
      let o=this.edges.get(edge.id);
      if (o==null)
      {
      
          edges.add([edge]);
      }
      
    }

    if (this.graphdata==null)
    {
        this.graphdata = {
            nodes: nodes,
            edges: edges,
        };
      }
   //   console.log("end add ddata",this.graphdata);
      this.group++;
      if (this.network!=null) 
      {
        if (aantal>100)
        {
            console.log("turning physics off: too many nodes ");
           this.network.setOptions({physics:{enabled:false}}) ;
           this.network.stabilize(1000);
           this.dynamic(false);
           try {
            getIface().me.showToast("Not showing all nodes: too many nodes","warning");
            //showInfo("turning grid off: too many nodes");

          } catch(e){}
        }
        else
        {
        //  console.log("stablizing network ",this.network);
      
          //this.network.stabilize(140000);
   
        }
        this.network.stabilize();
      }
      
     //console.log(addBoolean,reallyAdded);
     
}

function removeAllSelections()
{
  //console.log("remove all selections called graphvis.js");
 
  var name=document.visGraph.dao[V2+"publishVariable"];
   if (name!=null)
   {
   //console.log("reset selection values ?");
     Iface.sendEvent(name,"http://www.buildingbits.nl/null");
   
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


 VisGraph.prototype.getOptions=function()
 {
   if (this.options!=null){return this.options;}

   var direction="UD";
   var hierarchical=false;
   try {hierarchical=this.dao[V2+"hierarchical"];}catch(er){}
   if (hierarchical==null){hierarchical=false;}else{hierarchical = parseBoolean(hierarchical);}
   try {direction=this.dao[V2+"direction"];}catch(er){}
   if (direction==null) {direction="UD";}
   var arrows = this.dao[V2+"edgetype"];
   var editable = this.dao[V2+"editable"];
   if (editable==null){editable=false;}else{editable = parseBoolean(editable);}
   var dragNodes = this.dao[V2+"dragNodes"];
   if (dragNodes==null){dragNodes=false;}else{dragNodes = parseBoolean(dragNodes);}
   this.dragNodes = dragNodes;
    
 
   //direction= "LR";
   
   
   
   var nodeSpacing=100;
   var treeSpacing=100;
   var nodeSize=80;
   var edgeLength=20;
   
   if (!this.hier)
   {
     hierarchical=false;
     var nodeSpacing=5;
     var treeSpacing=5;
      var nodeSize=40;
      var edgeLength=5;
   }
   
   
   //hierarchical=false;
   var options = {
    
     interaction: { hover: true,hoverConnectedEdges:true,navigationButtons:true,dragNodes:dragNodes },
    manipulation:{enabled:editable},
   layout:{
     randomSeed: 10,
     improvedLayout:true,
      clusterThreshold:150,
      hierarchical: {
       enabled:hierarchical,
       levelSeparation: 125,
         nodeSpacing: nodeSpacing,
         treeSpacing: treeSpacing,
         blockShifting: true,
         edgeMinimization: false,
         parentCentralization: false,
         direction: direction,        // UD, DU, LR, RL
         sortMethod: 'directed',  // hubsize, directed
         shakeTowards: 'roots'  // roots, leaves
      }
   },
   nodes: {
     shadow: true,
     shape: "circle",
     size: nodeSize,
     label: "label",
     font: {
       size: 8,
       color: "#000000",
     },
     mass:2,
     borderWidth: 2,
     widthConstraint:
    { minimum: 58, maximum: 62,}
   
   },
   edges: {
     width: 2,
     length:edgeLength,
     font: {
       size: 8,
       color: "#000000",
   
     },
     color:{color:"#aaaaaa"}
    
   },
   physics:{maxVelocity:50,
       stabilization:{fit:false,updateInterval:100}, 
       enabled:true},
       renderer: {
              enabled: true,
              type: 'webgl' // Specify WebGL as the rendering engine
      }
   };
   
   if ( (arrows!=null) && (arrows!="none"))
   {
       options.edges.arrows=arrows;
   }


this.options=options;

return options;
 }

VisGraph.prototype.render=function()
{
  document.vg =this; //debug
 //console.log("render function called");
var options=this.getOptions();

var me=this;

/*var shadowC = document.getElementById("shadow");
this.shadow=new vis.Network(shadowC, this.graphdata, options);
this.shadow.on("stabilized", function () {
  console.log("shadow stabilized");
});
*/


var container = document.getElementById("mynetwork");
var network = new vis.Network(container, this.graphdata, options);



network.on("selectNode",function(nodes,edges){ me.handleSelect(nodes,edges);});
network.on("doubleClick",function(nodes,edges){ me.handleDoubleClick(nodes,edges);})
network.on("stabilized",function (){me.stabilized();});

this.network=network;

  // this.hierarchyHack();


  //network.stopSimulation(); 

}

VisGraph.prototype.stabilized=function()
{
  //console.log("stabalized event ",this.dbRaw);
  if (this.dbRaw==null) return;
  if (this.dbRaw.nodes==null) return;
 // console.log("stabalized  processing",this.nodes);
  for (var uri in this.dbRaw.nodes)
  {
    var o=this.dbRaw.nodes[uri];
    //console.log(o);
  //  if (o.fixed) continue;
    o.fixed=false;
    this.nodes.update(o); // update view
  }

  if (this.network!=null)
  {
     // console.log("set netwerk ");
   // this.network.setOptions({layout:{hierarchical: {enabled:true}},physics: {enabled: false}  });
  // this.network.setOptions({physics: {enabled: false} });
   

  }


  

}


VisGraph.prototype.setHier=function(b)
{

  //debug function
  var network = this.network;
  if (network==null) {return;}
  network.on("startStabilizing2", function() {
      
   // console.log("start stabilization but NOT stopping simulations");
    
   
  });

  network.setOptions({
    "layout": {"hierarchical": {"enabled": b}},                  
    });
}

VisGraph.prototype.hierarchyHack=function()
{
  //old
  if (true) {return;}
   var dragNodes = this.dragNodes;
   var hierarchical=this.hierarchical ;
   if (dragNodes==null) {return;}
   if (hierarchical==null){return;}
   var network = this.network;
   if (network==null){return;}
   
   
   if ((dragNodes) &&(hierarchical))
  {
     // console.log("dragnodes hack");
      network.on("stabilized", function () {
       // console.log("network stabilized. stopping simuluation");
        //network.stopSimulation();
      //  network.setOptions({
      //  "layout": {"hierarchical": {"enabled": false}},                  
      //  });
      });

    
      network.on("startStabilizing", function() {
      
        console.log("start stabilization but stopping simulations");
       // network.stopSimulation(); 
       
      });
     
      network.setOptions({
       "layout": {"hierarchical": {"enabled": true}},                  
       });

     
    }

}



