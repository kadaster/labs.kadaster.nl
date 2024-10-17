
   
var Venn=function(layout,panel,widget,rv)
{
    this.recidN=0;
    this.layout=layout;
    this.panel=panel;
    Widget.nid++;
    this.dao=widget;
    this.htmlid='venn'+Widget.nid;
    var me=this;
    this.createVenn(); 
    this.dao.connect(me,function(){
       if (rv!=null)
	   {
	   //	console.log( "vis graph connected",me.dao);
               rv.call(me);
              
            

	   }
   }); // set connections

   document.venn=this;

    


}



Venn.prototype.createVenn=function(nodes)
{
  var me=this;
  this.graphdata=null;
  this.dbRaw={nodes:{},edges:{}};
  this.group=0;
  this.counter=0;
  this.network=null;
  w2ui[me.layout].html(me.panel,"<div class='w2ui-panel-content' style='height:\"auto\"' id=\"mynetwork\"></div>"); 
}



Venn.prototype.setSparqlResults=function(data,sparql)
{
   //console.log(data);

   this.sets=[];
   try
   {
   for (let n in data.results.bindings)
   {
         let binding=data.results.bindings[n];
         let setC=binding.set.value;
         let amount = parseInt(binding.amount.value);
         let setst=setC.split(" ");
         let sets=[];
         for (let n in setst)
         {
           if (setst[n]!="") {sets.push(setst[n])}
           else
           {
             //sets
           }
         }
         if (sets.length>0)
         {
          this.sets.push({sets:sets,size:amount});
         }
         else
         {
         // this.sets.push({sets:["alles"],size:amount});
         }

   }
   console.log(this.sets);
   this.render();
   return;
  }
  catch(e){}



  if (true)
  {
  this.sets = [
    {sets: ['Alles'], size: 112}, 
    {sets: ['Alles','A'], size: 12},
    {sets: ['Alles','B'], size: 12},
    {sets: ['Alles','D'], size: 12},
    {sets: ['Alles','E'], size: 12},
    {sets: ['Alles','F'], size: 12},
    {sets: ['A'], size: 12}, 
  {sets: ['B'], size: 12},
  {sets: ['D'], size: 12},
  {sets: ['E'], size: 12},
  {sets: ['F'], size: 12},
  {sets: ['E','F'], size:10},
 
    {sets: ['B','E','F'], size: 4},
   
   
  
  {sets: ['B','A'], size: 2},
  {sets: ['F','B'], size: 2},
  {sets: ['F','B'], size: 2},
  {sets: ['E','B'], size: 2},
  

];
  }
   



   this.render();
}
   
      
   


Venn.prototype.handleSelect=function(event)
{
  var node = event.nodes;
  
   
    if (node==null){return;}
    if (node.length!=1){return;}
    
    var uri = node[0];
   
    if (uri.startsWith("legend")) {return;}
   
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


 Venn.prototype.getOptions=function()
 {
   if (this.options!=null){return this.options;}
    let options={};  
    this.options=options;
    return options;
 }

Venn.prototype.render=function()
{
  document.vg =this; //debug
 console.log("render venn function called");
var options=this.getOptions();

var me=this;


             var chart = venn.VennDiagram();
            
             

var div = d3.select("#venn");
let d2 = div.datum(this.sets);
d2.call(chart);



div.selectAll("path")
    .style("stroke-opacity", 0)
    .style("stroke", "#fff")
    .style("stroke-width", 3)


// add a tooltip
var tooltip = d3.select("body").append("div")
    .attr("class", "venntooltip");

// add listeners to all the groups to display tooltip on mouseover
div.selectAll(".venn-area")
    .on("mouseover", function(d, i,p) {
        // sort all the areas relative to the current item
            console.log(d,i,p);

        let all=div.selectAll("svg").datum();
          
        //console.log(d,p);
        
        //  d.sets.push("B_A");
        //venn.containedInCircles(point,circles);
        //venn.sortAreas(div, d);

        // Display a tooltip with the current size
        tooltip.transition().duration(400).style("opacity", .9);
        tooltip.text(d.size + " objects");
        
        // highlight the current path
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("stroke-width", 3)
            .style("fill-opacity", d.sets.length == 1 ? .4 : .1)
            .style("stroke-opacity", 1);
    })

    .on("mousemove", function() {
        tooltip.style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
    })
    
    .on("mouseout", function(d, i) {
        tooltip.transition().duration(400).style("opacity", 0);
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("stroke-width", 0)
            .style("fill-opacity", d.sets.length == 1 ? .25 : .0)
            .style("stroke-opacity", 0);
    });





}





