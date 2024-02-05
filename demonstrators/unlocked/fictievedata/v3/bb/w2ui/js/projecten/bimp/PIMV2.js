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
            "    ?uri <https://www.buildingbits.nl/2019/pim#heeftOnderzoek>/<https://www.buildingbits.nl/2019/pim#heeftMonsterLaag> ?laag.\r\n" + 
            "        ?laag <https://www.buildingbits.nl/2019/pim#decompositieOmschrijving> ?omschrijving.\r\n" + 
            "        ?laag <https://www.buildingbits.nl/2019/pim#volgnummer> ?volgnummer. "+
            " ?laag <https://www.buildingbits.nl/2019/pim#volgnummerUE> ?ue. filter not exists {?laag <https://www.buildingbits.nl/2019/pim#volgnummerUE> ?ueHoger. filter (?ueHoger>?ue)}. "  +
            "        ?laag <https://www.buildingbits.nl/2019/pim#heeftUitvoeringsEenheid>/<https://www.buildingbits.nl/2019/pim#laagdikte> ?dikte\r\n" + 
            "    }\r\n" + 
         //   "}\r\n" + 
            "order by asc(?volgnummer)";
           console.log(s);
            
            setTimeout(function() {MySparql.select(s,function(data){iface.setBeginSparqlResults(data,s);});},300);
        
    
    }
    
    ObjectWidgets.showPopup("PIM Monster","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='../../../bb/static/iframes/virtueleboorkern/vboorkern.html' />",400,550);
    
            
    
    
}

ObjectWidgets.showBoorkernPIM=function(uri,htmlid)
{
    // iframe based
  //  var widget=document.widgets[htmlid];
  console.log("showboorkernPIM fdafadfa");
   if (uri==null){uri="";}
   uri=uri.replace("<","").replace(">","");
    Widget.nid++;
    var htmlid='owiframe'+Widget.nid;
    if (Singleton.getInstance().iframes==null) {Singleton.getInstance().iframes={};}
    Singleton.getInstance().iframes[htmlid]=function(iface)
    {
    //console.log("retreiving" ,iface);
    iface.widget={dao:{},sendEvent:function(a,b,c){
        //  console.log("generateevent",widget,a,b);
          widget.fireEvent("singleSelection",b);
       // EventManager.generateEvent(widget,a,b,true);
        }};
    
    
    
      var s="PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\r\n" + 
    "PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> \r\n" + 
    "select  ?date ?uri (?mengsel as ?mengselnaam) (?elOmschrijving as ?cat1) (?omschrijving as ?cat2) ?dikte\r\n" + 
    "where\r\n" + 
    "{\r\n" + 
    "graph <https://www.buildingbits.nl/2019/pim/data>\r\n" + 
    "{\r\n" + 
    "<"+uri+"> <https://www.buildingbits.nl/2019/pim#behoortBijConstructie> ?constructie.\r\n" + 
    "optional {<"+uri+"> <https://www.buildingbits.nl/2019/pim#creationDate> ?date}\r\n" + 
    "# <https://www.buildingbits.nl/2019/pim/data#constructierealisatie531> <https://www.buildingbits.nl/2019/pim#behoortBijConstructie> ?constructie.     \r\n" + 
    "        \r\n" + 
    "        ?constructie  <https://www.buildingbits.nl/2019/pim#bevatConstructieElement> ?constructieElement.\r\n" + 
    "        ?constructieElement  <https://www.buildingbits.nl/2019/pim#omschrijving> ?elOmschrijving.\r\n" + 
    "        ?constructieElement  <https://www.buildingbits.nl/2019/pim#volgnummer> ?constructieElementVolgnummer.\r\n" + 
    "        \r\n" + 
    "        ?constructieElement  <https://www.buildingbits.nl/2019/pim#bevatConstructieDeel> ?deel.\r\n" + 
    "        ?deel <https://www.buildingbits.nl/2019/pim#volgnummer> ?volgnummerdeel. \r\n" + 
    "        ?deel <https://www.buildingbits.nl/2019/pim#omschrijving> ?omschrijving.\r\n" + 
    "        \r\n" + 
    "        optional {?deel  <https://www.buildingbits.nl/2019/pim#bevatConstructieLaag> ?laag. \r\n" + 
    "        ?laag <https://www.buildingbits.nl/2019/pim#volgnummer> ?volgnummerlaag.\r\n" + 
    "          ?laag <https://www.buildingbits.nl/2019/pim#deklaagtype> ?deklaagtype.\r\n" + 
    "           \r\n" + 
    "                ?constructie <https://www.buildingbits.nl/2019/pim#heeftUitvoeringsEenheid> ?eenheid.\r\n" + 
    "                 ?eenheid <https://www.buildingbits.nl/2019/pim#behoortBijConstructieLaag> ?laag.\r\n" + 
    "                 ?eenheid <https://www.buildingbits.nl/2019/pim#volgnummer> ?eenheidVolgnummer.\r\n" + 
    "              ?eenheid <https://www.buildingbits.nl/2019/pim#laagdikte> ?dikte2.\r\n" + 
    "              ?eenheid <https://www.buildingbits.nl/2019/pim#bevatMengselRef>?mengselRef.\r\n" + 
    "           ?mengselRef <https://www.buildingbits.nl/2019/pim#mengselOmschrijving>?mengsel2.\r\n" + 
    "        }\r\n" + 
    "}\r\n" + 
    "    bind (if(BOUND(?dikte2),?dikte2,\"250\"^^xsd:float) as ?dikte)\r\n" + 
    "      bind (if(BOUND(?mengsel2),?mengsel2,?omschrijving) as ?mengsel)\r\n" + 
    "       bind (if(BOUND(?mengselRef),?mengselRef,\"onbekend\") as ?uri)\r\n" + 
    "      filter (?mengsel not in (\"Natuurlijke ondergrond\",\"Verbeterde ondergrond\",\"Aardebaan\",\"Fundering\"))\r\n" + 
    "}\r\n" + 
    "order by DESC(?constructieElementVolgnummer) DESC(?volgnummerdeel)  DESC(?volgnummerlaag)  ASC(?eenheidVolgnummer)\r\n"; 
      
   
     //iface.widget.reExecuteSparql=function(data,s){console.log(data,s);}
    
    setTimeout(function() {MySparql.select(s,function(data){iface.setBeginSparqlResults(data,s);});},150);
        
    
    }
  //  console.log("hallo hier ben ik");
    let loc =window.location.origin+"/bb/boorkern/vboorkern.html"
    //ObjectWidgets.showPopup("PIM bovenste asfaltlagen","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='../../../bb/static/iframes/virtueleboorkern/vboorkern.html' />",400,550);
    ObjectWidgets.showPopup("PIM bovenste asfaltlagen","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='"+loc+"' />",450,550);
    
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


ObjectWidgets.showStroefheid=function(uri)
{
   // var stroken=["1 R- L","1 W- L","2 R- L","3 R- L","4 R- L","5 R- L","1 I- L","1 U- L","1 R- R","1 U- R","2 R- R","2 U- R","3 R- R","1 W- R","1 I- R","1 Q- R","2 U- L","6 R- L","4 R- R","5 R- R","6 R- R","2 W- R","3 U- R","2 W- L","3 W- R","1 Q- L","3 U- L","3 W- L","1 B- L"];
   
   
     if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
   var s="prefix ivon:<http://www.rws.nl/2018/vr/mjpv#>\r\n" + 
                "prefix vr:<http://www.buildingbits.nl/2017/coins2/VenR#>\r\n" + 
                "prefix bps:<http://www.buildingbits.nl/2017/coins2/BPS#>\r\n" + 
                "\r\n" + 
                "select distinct?strook ?jaar ?value \r\n" + 
                "\r\n" + 
                "where\r\n" + 
                "{\r\n" + 
                "    \r\n" + 
                "    bind (<"+uri+"> as ?uri)\r\n" + 
                "\r\n" + 
                " \r\n" + 
                "    ?uri <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.\r\n" + 
                "    \r\n" + 
                "     {graph <http://www.rws.nl/VenR/M13/Stroefheid>{?x <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2013\" as ?jaar) ?x bps:strook ?strook. ?x vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M14/Stroefheid>{?x1 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2014\" as ?jaar)?x1 bps:strook ?strook.?x1 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M15/Stroefheid>{?x2 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2015\" as ?jaar)?x2 bps:strook ?strook.?x2 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M16/Stroefheid>{?x3 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2016\" as ?jaar)?x3 bps:strook ?strook.?x3 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M17/Stroefheid>{?x4 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2017\" as ?jaar)?x4 bps:strook ?strook.?x4 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M18/Stroefheid>{?x5 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2018\" as ?jaar)?x5 bps:strook ?strook.?x5 vr:meetwaarde ?value}}\r\n" +
                "     union {graph <http://www.rws.nl/VenR/M19/Stroefheid>{?x6 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2019\" as ?jaar)?x6 bps:strook ?strook.?x6 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M20/Stroefheid>{?x7 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2020\" as ?jaar)?x7 bps:strook ?strook.?x7 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M21/Stroefheid>{?x8 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2021\" as ?jaar)?x8 bps:strook ?strook.?x8 vr:meetwaarde ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M22/Stroefheid>{?x9 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2022\" as ?jaar)?x9 bps:strook ?strook.?x9 vr:meetwaarde ?value}}\r\n" + 
            
                "    \r\n" + 
                "}\r\n" + 
                "order by ?strook ?jaar\r\n" + 
                "";
                
          //      console.log(s);
    
    ObjectWidgets.showStrookXLineChart("stroefheid (jaren)",s,"jaar",{ pointSize: 4,curveType: 'function'});
  
 
    
}
ObjectWidgets.showStroefheidIndex=function(uri)
{
   // var stroken=["1 R- L","1 W- L","2 R- L","3 R- L","4 R- L","5 R- L","1 I- L","1 U- L","1 R- R","1 U- R","2 R- R","2 U- R","3 R- R","1 W- R","1 I- R","1 Q- R","2 U- L","6 R- L","4 R- R","5 R- R","6 R- R","2 W- R","3 U- R","2 W- L","3 W- R","1 Q- L","3 U- L","3 W- L","1 B- L"];
    
   
     if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
   var s="prefix ivon:<http://www.rws.nl/2018/vr/mjpv#>\r\n" + 
                "prefix vr:<http://www.buildingbits.nl/2017/coins2/VenR#>\r\n" + 
                "prefix bps:<http://www.buildingbits.nl/2017/coins2/BPS#>\r\n" + 
                "\r\n" + 
                "select distinct?strook ?jaar   ?value \r\n" + 
                "\r\n" + 
                "where\r\n" + 
                "{\r\n" + 
                "    \r\n" + 
                "    bind (<"+uri+"> as ?uri)\r\n" + 
                "\r\n" + 
                " \r\n" + 
                "    ?uri <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.\r\n" + 
                "    \r\n" + 
                "     {graph <http://www.rws.nl/VenR/M13/Stroefheid>{?x <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2013\" as ?jaar) ?x bps:strook ?strook. ?x vr:stroefheidIndex ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M14/Stroefheid>{?x1 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2014\" as ?jaar)?x1 bps:strook ?strook.?x1 vr:stroefheidIndex ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M15/Stroefheid>{?x2 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2015\" as ?jaar)?x2 bps:strook ?strook.?x2 vr:stroefheidIndex ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M16/Stroefheid>{?x3 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2016\" as ?jaar)?x3 bps:strook ?strook.?x3 vr:stroefheidIndex ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M17/Stroefheid>{?x4 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2017\" as ?jaar)?x4 bps:strook ?strook.?x4 vr:stroefheidIndex ?value}}\r\n" + 
                "     union {graph <http://www.rws.nl/VenR/M18/Stroefheid>{?x5 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2018\" as ?jaar)?x5 bps:strook ?strook.?x5 vr:stroefheidIndex ?value}}\r\n" +
                "     union {graph <http://www.rws.nl/VenR/M19/Stroefheid>{?x6 <http://www.buildingbits.nl/2017/coins2/BPS#heeftWegvak> ?ib.bind (\"2019\" as ?jaar)?x6 bps:strook ?strook.?x6 vr:stroefheidIndex ?value}}\r\n" + 
            
                "    \r\n" + 
                "}\r\n" + 
                "order by ?strook ?jaar\r\n" + 
                "";
                
              //  console.log(s);
    
    ObjectWidgets.showStrookXLineChart("stroefheidindex (jaren)",s,"jaar",{ pointSize: 4,curveType: 'function'});
  
 
    
}


