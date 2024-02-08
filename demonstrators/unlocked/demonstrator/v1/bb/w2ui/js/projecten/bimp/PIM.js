var PIM=function() {};


PIM.showMonster=function(uri)
{
  //  console.log(uri);
     if (uri==null){uri="";}
   uri=uri.replace("<","").replace(">","");
    Widget.nid++;
    var htmlid='owiframe'+Widget.nid;
    if (Singleton.getInstance().iframes==null) {Singleton.getInstance().iframes={};}
    Singleton.getInstance().iframes[htmlid]=function(iface)
    {
    //console.log("retreiving" ,iface);
    iface.widget={dao:{},sendEvent:function(a,b,c){console.log(a,b,c);}};
   
    var s=" select distinct  (?omschrijving as ?mengselnaam) ?dikte (\"Bovenbouw\" as ?cat1) \r\n" + 
            "\r\n" + 
            "where\r\n" + 
            "{\r\n" + 
           // "    graph <https://www.buildingbits.nl/2021/pim/N3>\r\n" + 
         //   "    {\r\n" + 
            "         bind (<"+uri+"> as ?uri)\r\n" +
            " ?uri <https://www.buildingbits.nl/2019/pim#codeHandmatig> ?codeH. "+
     " ?uri <https://www.buildingbits.nl/2019/pim#boorkernProcedureSuffix> ?suffix. "+
    " ?uri <https://www.buildingbits.nl/2019/pim#heeftOnderzoek>/<https://www.buildingbits.nl/2019/pim#heeftMonsterLaag> ?laag. "+
    "?laag <https://www.buildingbits.nl/2019/pim#heeftMonster> ?monster. "+
    "?monster <https://www.buildingbits.nl/2019/pim#codeHandmatig> ?codeH."+
    "?monster <https://www.buildingbits.nl/2019/pim#boorkernProcedureSuffix> ?suffix. "+
    " ?laag <https://www.buildingbits.nl/2019/pim#decompositieOmschrijving> ?omschrijving. "+
    "?laag <https://www.buildingbits.nl/2019/pim#volgnummer> ?volgnummer.   "+
    "?laag <https://www.buildingbits.nl/2019/pim#heeftUitvoeringsEenheid>/<https://www.buildingbits.nl/2019/pim#laagdikte> ?dikte" + 
          
            "    }\r\n" + 
         //   "}\r\n" + 
            "order by asc(?volgnummer)";
            
            
            
            
        //    console.log(s);
            
            setTimeout(function() {MySparql.select(s,function(data){iface.setBeginSparqlResults(data,s);});},200);
        
    
    }
    
    ObjectWidgets.showPopup("PIM Monster","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='./static/iframes/virtueleboorkern/vboorkern.html' />",400,550);
    
            
    
    
}

PIM.showAsfaltMaaswijdte=function(uri)
{
   var s="PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\r\n" + 
	"PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
	" \r\n" + 
	"select distinct (concat (\"Maaswijdte \",STR(?maaswijdte)) as ?maaswijdte2) (xsd:float(?gewensteWaarde) as ?gewenstewaarde)  (xsd:float(?berekendeWaarde) as ?berekendewaarde) \r\n" + 
	"\r\n" + 
	"\r\n" + 
	"\r\n" + 
	"\r\n" + 
	" where\r\n" + 
	" {\r\n" + 
	//"    filter (?uri =<https://www.buildingbits.nl/2019/pim#UitvoeringsEenheidMengselReferebkn00002I218>).\r\n" +  // verwijder deze
	//"    ?uri <https://www.buildingbits.nl/2019/pim#heeftMengselontwerp> ?mengselOntwerp. \r\n" + 
	"    <"+uri+"> <https://www.buildingbits.nl/2019/pim#heeftMengselontwerp> ?mengselOntwerp. \r\n" +
	"    ?mengselOntwerp <https://www.buildingbits.nl/2019/pim#heeftMengselontwerpKorrelverdeling> ?korrel.\r\n" + 
	"    ?korrel <https://www.buildingbits.nl/2019/pim#maaswijdteMM> ?maaswijdte.\r\n" + 
	"    ?korrel <https://www.buildingbits.nl/2019/pim#gewensteWaarde> ?gewensteWaarde.\r\n" + 
	"     ?korrel <https://www.buildingbits.nl/2019/pim#berekeningResultaat> ?berekendeWaarde.\r\n" + 
	"  \r\n" + 
	"} \r\n" + 
	"order by DESC(?maaswijdte)\r\n" + 
	"";
     
 
   Widget.nid++;
   var layoutid='pimlaout'+Widget.nid;
   
  var layout= {
       name: layoutid,
       padding: 0,
       panels: [
           { type: 'main', minSize: 350, overflow: 'hidden' }
       ]
   };
  
   
   $().w2layout(layout);
   
   
   
   
   
   
   
   
   var xanimate=V2+"animate";
   var gchart =new GChart(null,null,{xanimate:true,connect:function(){}},null);
   gchart.options.animation={startup:true,
	        duration: 500,
	        easing: 'inAndOut',
	      };
   gchart.options.chartArea={height:"95%",top:15,bottom:85};
   gchart.type="Col2";
   //g.type="Bar2";
   //gchart.title="Maaswijdte";

   w2popup.open({
       title   : 'Maaswijdte',
       width   : 850,
       height  : 450,
       showMax : true,
       body    : "<div   id='"+gchart.htmlid+"'></div>",
       onOpen  : function (event) {
           event.onComplete = function () {
              
               $('#w2ui-popup #main').w2render(layoutid);
               
            //   $('#w2ui-popup #main').w2render('layout');
               //w2ui.layout.content('left', w2ui.sidebar);
               //w2ui.layout.content('main', w2ui.grid);
           }
       },
       onToggle: function (event) { 
           event.onComplete = function () {
              w2ui[layoutid].resize();
             //  var height=$("#"+gchart.htmlid).visibleHeight()-10;
           }
       }        
   });
   
   
   
   
   
   
   MySparql.select(s,function(arg){
     
       gchart.setSparqlResults(arg,s);
     
     //  gchart.refresh();
     //  gchart.resize();
   
   });
   
   
   
   
   
   

}

