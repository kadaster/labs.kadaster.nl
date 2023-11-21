
   
var ThreeJSViewer=function(layout,panel,widget,rv)
{
  this.recidN=0;
  this.layout=layout;
  this.panel=panel;
  Widget.nid++;
  this.dao=widget;
var me =this;
    this.dao.connect(me,function(){
       if (rv!=null)
	   {
	   //	console.log( "vis graph connected",me.dao);
               rv.call(me);
              
            

	   }
   }); // set connections

  

}




ThreeJSViewer.prototype.setSparqlResults=function(results,sparql,sparql2)
{
  

  var loader = document.getLoader();
  var scene = document.getScene();
  
   let size  = results.results.bindings.length;
 
   let aantal=1;
   
   for (var n in results.results.bindings)
   {
    
    
     var binding = results.results.bindings[n];
     var gltf2 = binding.gltf.value;
    
    

     loader.parse(gltf2, "",function ( gltf ) {

      aantal++;
      let box =document.getBox();
      let x =box.setFromObject(gltf.scene.children[0]);
      //gltf.scene.scale.set(0.01,0.01 ,0.01 ); 
      scene.add( gltf.scene );
     //scene.add(gltf.scene.children[0]);
     //document.getCamera().camera.position.set(x.min.x,x.min.y,x.min.z);
     
     
     if (size==aantal )
     {
      
      document.render();
      document.getCamera().position={x:14949.7841796875, y: 489536.625, z: 1.0744445323944092};
      document.render();
      console.log(scene);

     }
  
     
  
    } );


   }

 
}
   
      
   


ThreeJSViewer.prototype.handleSelect=function(event)
{
  
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





ThreeJSViewer.prototype.setEmptySelection=function()
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


 

 



