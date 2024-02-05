
ObjectWidgets.showIvonPlanningsItem=function(uri)
{
     if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");

    var s="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
    "\r\n" + 
    "select  ?dwh ?lvl ?ilg ?dosr ?raf ?krk ?rsd ?str\r\n" + 
    "where {\r\n" + 
    "    \r\n" + 
    "graph  ?g { \r\n" + 
    "        bind (<"+uri+"> as ?uri)\r\n" + 
    "          ?uri <http://www.rws.nl/2018/vr/mjpv#belongsTo> ?ivon.   "+
    "         ?ivon  <http://www.buildingbits.nl/2017/coins2/BPS#strook> ?strook. ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#buitenste_rijstrook> true.\r\n" + 
    "        optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dwh> ?dwh.} \r\n" + 
    "               optional {  ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_lvl> ?lvl. }\r\n" + 
    "               optional {  ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_ilg> ?ilg. }\r\n" + 
    "               optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dosr> ?dosr. }\r\n" + 
    "              optional {   ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dosr> ?dosr. }\r\n" + 
    "              optional {   ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_raf> ?raf. }\r\n" + 
    "             optional {    ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_krk> ?krk. }\r\n" + 
    "             optional {    ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_rsd> ?rsd. }\r\n" + 
    "               optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_str> ?str. }\r\n" + 
    "    }\r\n" + 
    "  }\r\n" + 
    "order by ?strook";
  
    
   ObjectWidgets.showChartPopup(uri,"TimelineYear",'interventiejaren',s);
   
  }
  
  


ObjectWidgets.showIvon=function(uri)
{
     if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");

    var s="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
    "\r\n" + 
    "select  ?dwh ?lvl ?ilg ?dosr ?raf ?krk ?rsd ?str\r\n" + 
    "where {\r\n" + 
    "    \r\n" + 
    "graph  ?g { \r\n" + 
    "        bind (<"+uri+"> as ?ivon)\r\n" + 
    "     \r\n" + 
    "}\r\n" + 
    "    graph  ?g  { \r\n" + 
            
    "         ?ivon  <http://www.buildingbits.nl/2017/coins2/BPS#strook> ?strook. "+
    
    
     //"?ivon <http://www.buildingbits.nl/2017/coins2/VenR#buitenste_rijstrook> true.\r\n" + 
    "        optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dwh> ?dwh.} \r\n" + 
    "               optional {  ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_lvl> ?lvl. }\r\n" + 
    "               optional {  ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_ilg> ?ilg. }\r\n" + 
    "               optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dosr> ?dosr. }\r\n" + 
    "        \r\n" + 
    "              optional {   ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dosr> ?dosr. }\r\n" + 
    "              optional {   ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_raf> ?raf. }\r\n" + 
    "             optional {    ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_krk> ?krk. }\r\n" + 
    "             optional {    ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_rsd> ?rsd. }\r\n" + 
    "               optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_str> ?str. }\r\n" + 
    "    }\r\n" + 
    "  }\r\n" + 
    "order by ?strook";

    
    
   ObjectWidgets.showChartPopup(uri,"TimelineYear",'interventiejaren',s);
   
  }
  

ObjectWidgets.showIvonBaan=function(uri)
{
    
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");

    var s="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
	"\r\n" + 
	"select  ?dwh ?lvl ?ilg ?dosr ?raf ?krk ?rsd ?str\r\n" + 
	"where {\r\n" + 
	"    \r\n" + 
	"graph  <http://www.rws.nl/VenR/2018/IvonBaan> { \r\n" + 
	"        bind (<"+uri+"> as ?uri)\r\n" + 
	"     \r\n" + 
	"}\r\n" + 
	"    graph  <http://www.rws.nl/VenR/2018/Ivon2> { \r\n" + 
	"        ?ivon <http://www.rws.nl/2018/vr/mjpv#gelijkAanIvonBaan> ?uri.\r\n" + 
	"         ?ivon  <http://www.buildingbits.nl/2017/coins2/BPS#strook> ?strook. ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#buitenste_rijstrook> true.\r\n" + 
	"        optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dwh> ?dwh.} \r\n" + 
	"               optional {  ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_lvl> ?lvl. }\r\n" + 
	"               optional {  ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_ilg> ?ilg. }\r\n" + 
	"               optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dosr> ?dosr. }\r\n" + 
	"        \r\n" + 
	"              optional {   ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_dosr> ?dosr. }\r\n" + 
	"              optional {   ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_raf> ?raf. }\r\n" + 
	"             optional {    ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_krk> ?krk. }\r\n" + 
	"             optional {    ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_rsd> ?rsd. }\r\n" + 
	"               optional { ?ivon <http://www.buildingbits.nl/2017/coins2/VenR#interventiejaar_str> ?str. }\r\n" + 
	"        \r\n" + 
	"        \r\n" + 
	"    }\r\n" + 
	"\r\n" + 
	"  }\r\n" + 
	"order by ?strook";
    
 //console.log(s);

  ObjectWidgets.showChartPopup(uri,"TimelineYear",'interventiejaren',s);





}

ObjectWidgets.showLMS=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
    var s="select distinct ?naam ?min (?close as ?open) ?close ?max \r\n" + 
	"{\r\n" + 
	"    {\r\n" + 
	"    graph <http://www.rws.nl/VenR/2017/LMS>\r\n" + 
	"    {\r\n" + 
	"        bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"lichtverkeer et\" as ?naam)\r\n" + 
	"  \r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#we_lv_et> ?close.       \r\n" + 
	"    }\r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph <http://www.rws.nl/VenR/2017/LMS>\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        ?x <http://www.buildingbits.nl/2017/coins2/VenR#we_lv_et> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"    union\r\n" + 
	"    {\r\n" + 
	"        #zvet\r\n" + 
	"         graph <http://www.rws.nl/VenR/2017/LMS>\r\n" + 
	"{\r\n" + 
	"               bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"zwaarverkeer etmaal\" as ?naam)\r\n" + 
	"      \r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#we_zv_et> ?close.\r\n" + 
	"    \r\n" + 
	"    }\r\n" + 
	"    \r\n" + 
	"        \r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph <http://www.rws.nl/VenR/2017/LMS>\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"       			?x <http://www.buildingbits.nl/2017/coins2/VenR#we_zv_et> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"        \r\n" + 
	"        \r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"    union\r\n" + 
	"    {\r\n" + 
	"        #mv\r\n" + 
	"         graph <http://www.rws.nl/VenR/2017/LMS>\r\n" + 
	"{\r\n" + 
	"        bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"MV\" as ?naam)\r\n" + 
	"     \r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#we_mv_et> ?close.\r\n" + 
	"       \r\n" + 
	"    }\r\n" + 
	"    \r\n" + 
	"        \r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph <http://www.rws.nl/VenR/2017/LMS>\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        ?x <http://www.buildingbits.nl/2017/coins2/VenR#we_mv_et> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"        \r\n" + 
	"        \r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"  \r\n" + 
	"    \r\n" + 
	"}";

	
	  ObjectWidgets.showChartPopup(uri,"Candlestick",'LMS',s);

}

ObjectWidgets.showInweva=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
	var s="select distinct ?naam ?min (?close as ?open) ?close ?max \r\n" + 
	"{\r\n  {select distinct ?g where {graph ?g {<"+uri+"> a ?cls} } }   " + 
	"    {\r\n" + 
	"  graph ?g\r\n" + 
	"{\r\n" + 
	"        bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"etmaal al\" as ?naam)\r\n" + 
	"        bind (\"etmaal al waarde voor rw\" as ?description)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_AL> ?close." +
	//"        bind (concat('al ',?close) as ?description)\r\n" + 
	"    }\r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph ?g\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        ?x <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_AL> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"    union\r\n" + 
	"    {\r\n" + 
	"        #L1\r\n" + 
	"         graph ?g\r\n" + 
	"{\r\n" + 
	"               bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"L1\" as ?naam)\r\n" + 
	"        bind (\"L1 waarde voor rw\" as ?description)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_L1> ?close.\r\n" + 
	//"        bind (concat('L1 ',?close) as ?description)\r\n" +
	"    \r\n" + 
	"    }\r\n" + 
	"    \r\n" + 
	"        \r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph ?g\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"       			?x <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_L1> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"        \r\n" + 
	"        \r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"    union\r\n" + 
	"    {\r\n" + 
	"         #L2\r\n" + 
	"         graph ?g\r\n" + 
	"{\r\n" + 
	"        bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"L2\" as ?naam)\r\n" + 
	"        bind (\"L2 waarde voor rw\" as ?description)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_L2> ?close.\r\n" + 
	//"        bind (concat('L2 ',?close) as ?description)\r\n" +
	"       \r\n" + 
	"    }\r\n" + 
	"    \r\n" + 
	"        \r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph ?g\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        ?x <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_L2> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"        \r\n" + 
	"        \r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"    union\r\n" + 
	"    {\r\n" + 
	"         #L3\r\n" + 
	"         graph ?g\r\n" + 
	"{\r\n" + 
	"        bind (<"+uri+"> as ?uri)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        bind (\"L3\" as ?naam)\r\n" + 
	"        bind (\"L3 waarde voor rw\" as ?description)\r\n" + 
	"        ?uri <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_L3> ?close.\r\n" + 
	//"        bind (concat('L3 ',?close) as ?description)\r\n" +
	"    }\r\n" + 
	"        {\r\n" + 
	"        SELECT (max(?al) as ?max) (min(?al) as ?min) \r\n" + 
	"			WHERE {\r\n" + 
	"            graph ?g\r\n" + 
	"			{\r\n" + 
	"            	 ?x <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> ?rw.\r\n" + 
	"        ?x <http://www.buildingbits.nl/2017/coins2/VenR#etmaal_L3> ?al.\r\n" + 
	"            }\r\n" + 
	"        }\r\n" + 
	"        \r\n" + 
	"        \r\n" + 
	"}\r\n" + 
	"    }\r\n" + 
	"    \r\n" + 
	"}\r\n" + 
	"";
	//console.log(s);
	  ObjectWidgets.showChartPopup(uri,"Candlestick",'Inweva',s);

}
ObjectWidgets.showVGD=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
    var s="PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\r\n" + 
	"PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> \r\n" + 
	"select ?label (-?value as ?deflectie)\r\n" + 
	"where \r\n" + 
	"{\r\n" + 
	" {\r\n" + 
	"      ?uri ?pred ?value.\r\n" + 
	"    filter (?uri= <"+uri+">)\r\n" + 
	"    filter (?pred in ( <http://otl.rws.nl/otl#PTPRO056-hasproperty>,<http://otl.rws.nl/otl#PTPRO057-hasproperty>,<http://otl.rws.nl/otl#PTPRO058-hasproperty>,<http://otl.rws.nl/otl#PTPRO059-hasproperty>,<http://otl.rws.nl/otl#PTPRO060-hasproperty>,<http://otl.rws.nl/otl#PTPRO061-hasproperty>, <http://otl.rws.nl/otl#PTPRO062-hasproperty> ))               \r\n" + 
	"}\r\n" + 
	"  ?pred rdfs:label ?label2\r\n" + 
	"  {\r\n" + 
	"      bind (xsd:int(STRBEFORE(STRAFTER(?label2,\" D\"),\"b\")) as ?i)\r\n" + 
	"      bind (concat(concat(\"D\",STR(?i)),\"b\") as ?label)\r\n" + 
	"  }\r\n" + 
	"  union \r\n" + 
	"  {\r\n" + 
	"    filter (?pred!=<http://otl.rws.nl/otl#PTPRO056-hasproperty>)\r\n" + 
	"  bind (-xsd:int(STRBEFORE(STRAFTER(?label2,\" D\"),\"b\")) as ?i)\r\n" + 
	"      bind (concat(concat(\"D\",STR(?i)),\"b\") as ?label)\r\n" + 
	"  \r\n" + 
	"  }\r\n" + 
	"}\r\n" + 
	"order by ASC(?i)";
   
    ObjectWidgets.showChartPopup(uri,"Line",'RWS Val deflectie meting (OB02871)',s);
    
}

ObjectWidgets.showKNMI=function(uri)
{
    ObjectWidgets.showKNMIPred(uri,"etmaal_temperatuur","gemiddelde etmaal temperatuur");
}
ObjectWidgets.showKNMIMin=function(uri)
{
    ObjectWidgets.showKNMIPred(uri,"etmaal_min_temperatuur","minimale temperatuur");
}
ObjectWidgets.showKNMIMax=function(uri)
{
    ObjectWidgets.showKNMIPred(uri,"etmaal_max_temperatuur","maximale temperatuur");
}

ObjectWidgets.showKNMIMin10=function(uri)
{
    ObjectWidgets.showKNMIPred(uri,"etmaal_min_temperatuur_10cm","min temp 10 cm");
}
ObjectWidgets.showKNMINeerslag=function(uri)
{
    ObjectWidgets.showKNMIPred(uri,"etmaalNeerslag","neerslag in 0.1 mm","neerslag");
}






ObjectWidgets.showKNMIPred=function(uri,pred,title,naamPred)
{
   if (naamPred==null){naamPred="temp";}
   
     if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
     var s="PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\r\n" + 
            "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
            "SELECT distinct ?datum ?"+naamPred+" WHERE {\r\n" + 
            " graph <http://www.buildingbits.nl/rws/venr/2021/knmi/weerstations>\r\n" + 
            "  {\r\n" + 
            "    bind (   <"+uri+">  as ?uri)\r\n" + 
            "    ?uri <http://www.buildingbits.nl/rws/venr/2021/knmi/weerstations#heeftMeetwaarde> ?meetwaarde.\r\n" + 
            "    ?meetwaarde <http://www.buildingbits.nl/rws/venr/2021/knmi/weerstations#datum> ?datum.\r\n" + 
            "    ?meetwaarde <http://www.buildingbits.nl/rws/venr/2021/knmi/weerstations#"+pred+"> ?"+naamPred+".\r\n" + 
            "  }\r\n" + 
            "} \r\n" + 
            "order by ?datum";
     
       ObjectWidgets.showChartPopup(uri,"Line",title,s);
     
}

ObjectWidgets.boorkern="./";

ObjectWidgets.showBoorkern=function(uri)
{
  //console.log("show boorkern "+ObjectWidgets.boorkern);
  
    // iframe based
   if (uri==null){uri="";}
   uri=uri.replace("<","").replace(">","");
    Widget.nid++;
    var htmlid='owiframe'+Widget.nid;
    if (Singleton.getInstance().iframes==null) {Singleton.getInstance().iframes={};}
    Singleton.getInstance().iframes[htmlid]=function(iface)
    {
	//console.log("retreiving" ,iface);
	iface.widget={dao:{},sendEvent:function(a,b,c){console.log(a,b,c);}};
	
	
	
	  var s="select ?uri ?mengselnaam ?dikte (\"Bovenbouw\" as ?cat1) ?date \r\n" + 
		"\r\n" + 
		"{\r\n" + 
		//"    graph <http://www.rws.nl/VenR/2017/BoorkernKerngis>\r\n" + 
		//"    {\r\n" + 
		"        #http://otl.rws.nl/otl#OB02872\r\n" + 
		"        bind (<"+uri+"> as ?uri )\r\n" + 
		"optional {?uri <http://otl.rws.nl/otl#OB02872-PR00287-hasproperty> ?date}"+
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_1_type_asfalt> ?mengselnaam.\r\n" + 
		"        	optional {?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_1_laagdikte> ?dikte2.} "+
        "			optional {?uri <http://otl.rws.nl/otl#OB02872-Dikte-Deklaag-hasproperty> ?dikte3}  "+ 
        "			bind (IF (BOUND(?dikte2),?dikte2,?dikte3) as ?dikte) "+
        			"bind (1 as ?sal)\r\n" + 
		"        }\r\n" + 
		"        union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_2_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_2_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (2as ?sal)\r\n" +
		"        }\r\n" + 
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_3_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_3_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (3 as ?sal)\r\n" +
		"        }\r\n" + 
		"            union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_4_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_4_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (4 as ?sal)\r\n" +
		"        }\r\n" + 
		"           union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_5_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_5_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (5 as ?sal)\r\n" +
		"        }\r\n" + 
		"            union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_6_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_6_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (6 as ?sal)\r\n" +
		"        }\r\n" + 
		"           union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_7_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_7_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (7 as ?sal)\r\n" +
		"        }\r\n" + 
		"           union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_8_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_8_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (8 as ?sal)\r\n" +
		"        }\r\n" + 
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_9_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_9_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (9 as ?sal)\r\n" +
		"        }\r\n" + 
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_10_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_10_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (10 as ?sal)\r\n" +
		"        }\r\n" + 
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_11_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_11_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (11 as ?sal)\r\n" +
		"        }\r\n" + 
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_12_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_12_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (12 as ?sal)\r\n" +
		"        }\r\n" + 
		
		
		
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_13_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_13_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (13 as ?sal)\r\n" +
		"        }\r\n" + 
		
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_14_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_14_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (14 as ?sal)\r\n" +
		"        }\r\n" + 
		
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_15_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_15_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (15 as ?sal)\r\n" +
		"        }\r\n" + 
		
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_16_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_16_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (16 as ?sal)\r\n" +
		"        }\r\n" + 
		
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_17_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_17_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (17 as ?sal)\r\n" +
		"        }\r\n" + 
		
		"          union\r\n" + 
		"        {\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_18_laagdikte> ?dikte.\r\n" + 
		"        	?uri <http://www.buildingbits.nl/2017/coins2/VenR#laag_18_type_asfalt> ?mengselnaam.\r\n" + 
		"bind (18 as ?sal)\r\n" +
		"        }\r\n" + 
		
		
		
		
		
		
		
		"        filter (?dikte>0)" + 
		"        \r\n" + 
		//"    }\r\n" + 
		"    \r\n" + 
		"    \r\n" + 
		"} order by DESC(?sal)";
	  
	
	setTimeout(function() {MySparql.select(s,function(data){iface.setBeginSparqlResults(data,s);});},300);
		
    
    }

    if (window.top.location.host=="localhost:3000")
    {
      ObjectWidgets.boorkern="http://localhost:3000/bb/";
    }
    console.log(ObjectWidgets.boorkern+"static/iframes/virtueleboorkern/vboorkern.html");

   // ObjectWidgets.showPopup("RWS boorkern","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='"+ObjectWidgets.boorkern+"static/iframes/virtueleboorkern/vboorkern.html' />",400,550);
   ObjectWidgets.showPopup("RWS boorkern","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='"+ObjectWidgets.boorkern+"boorkern/vboorkern.html' />",400,550);
    
}

ObjectWidgets.showBoorkernPIM=function(uri,htmlid)
{
    // iframe based
  //  var widget=document.widgets[htmlid];
  
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
      
     
    
    setTimeout(function() {MySparql.select(s,function(data){iface.setBeginSparqlResults(data,s);});},150);
        
    
    }
    
    ObjectWidgets.showPopup("PIM bovenste asfaltlagen","<iframe  id='"+htmlid+"' style='width:100%;height:100%' src='./static/iframes/virtueleboorkern/vboorkern.html' />",400,550);
    
}



ObjectWidgets.showLangshelling=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    //label value
    var s="prefix bps:<http://www.buildingbits.nl/2017/coins2/BPS#>\r\n" + 
"prefix vr:<http://www.buildingbits.nl/2017/coins2/VenR#>\r\n" + 
"select (?van2 as ?label) (?langshelling2 as ?langsHelling) \r\n" + 
"\r\n" + 
"where\r\n" + 
"{\r\n" + 
"    \r\n" + 
"    graph <http://www.rws.nl/VenR/2018/WinfraAlt>\r\n" + 
"    {\r\n" + 
"        bind (<"+uri+"> as ?uri).\r\n" + 
"        ?uri vr:langshelling ?langshelling.\r\n" + 
"        ?uri bps:rijksweg ?rw.\r\n" + 
"        ?uri bps:baan ?baan.\r\n" + 
"        ?uri bps:strook ?strook.\r\n" + 
"         ?uri bps:van ?van.\r\n" + 
"         ?uri bps:tot ?tot.\r\n" + 
"        ?uri2 bps:rijksweg ?rw.\r\n" + 
"        ?uri2 bps:baan ?baan.\r\n" + 
"        ?uri2 bps:strook ?strook.\r\n" + 
"         ?uri2 bps:van ?van2.\r\n" + 
"         ?uri2 bps:tot ?tot2.\r\n" + 
"        filter (?van2>(?van-1.4))\r\n" + 
"        filter (?van2<(?van+1.4))\r\n" + 
"         ?uri2 vr:langshelling ?langshelling2.\r\n" + 
"    }\r\n" + 
"}\r\n" + 
"order by ASC(?van2)";

     ObjectWidgets.showChartPopup(uri,"Line",'langshelling',s,null,null,{curveType: 'function'});
  var o={chartType:"Line",curveType: 'function'};
 //   ObjectWidgets.showChartsPopup("langsProfiel",[s,s2],[o,o]);
    
}


ObjectWidgets.showAsfaltDBITSR=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    //label value
    var s="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
    "PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" + 
    "select   ?value\r\n" + 
    "\r\n" + 
    "where\r\n" + 
    "{\r\n" + 
    " graph<http://www.buildingbits.nl/rws/bimp/2020/data/asfaltdb>\r\n" + 
    "  {\r\n" + 
    "   \r\n" + 
    "    <"+uri+"> <http://www.buildingbits.nl/rws/bimp/2020/def/asfaltdb#7f924db4-a920-e511-80bf-000af764f30b> ?value.\r\n" + 
    "      bind (\"ITSR\" as ?kenmerk)\r\n" + 
    "   \r\n" + 
    "    \r\n" + 
    "  }\r\n" + 
    "}\r\n"; 


     ObjectWidgets.showChartPopup(uri,"Gauge",'ITSR',s,null,null,{curveType: 'function'});
  var o={chartType:"Line",curveType: 'function'};
 //   ObjectWidgets.showChartsPopup("langsProfiel",[s,s2],[o,o]);
    
}

ObjectWidgets.showAsfaltDBWeerstand=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    //label value
    var s="\r\n" + 
    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n" + 
    "PREFIX owl: <http://www.w3.org/2002/07/owl#>\r\n" + 
    "select  ?kenmerk ?value\r\n" + 
    "\r\n" + 
    "where\r\n" + 
    "{\r\n" + 
    " graph<http://www.buildingbits.nl/rws/bimp/2020/data/asfaltdb>\r\n" + 
    "  {\r\n" + 
    "   \r\n" + 
    "    {\r\n" + 
    "    <"+uri+"> <http://www.buildingbits.nl/rws/bimp/2020/def/asfaltdb#356ce62d-aa20-e511-80bf-000af764f30b> ?value.\r\n" + 
    "      bind (\"PSV verklaard\" as ?kenmerk)\r\n" + 
    "    }\r\n" + 
    "      union\r\n" + 
    "      {\r\n" + 
    "        <"+uri+"> <http://www.buildingbits.nl/rws/bimp/2020/def/asfaltdb#a86ae014-aa20-e511-80bf-000af764f30b> ?value.\r\n" + 
    "      bind (\"PSV verklaard niet autosnelweg\" as ?kenmerk)\r\n" + 
    "    }\r\n" + 
    "       union\r\n" + 
    "      {\r\n" + 
    "        <"+uri+"> <http://www.buildingbits.nl/rws/bimp/2020/def/asfaltdb#a86ae014-aa20-e511-80bf-000af764f30b> ?value.\r\n" + 
    "      bind (\"weerstand steenslag 2\" as ?kenmerk)\r\n" + 
    "    }\r\n" + 
    "        union\r\n" + 
    "      {\r\n" + 
    "        <"+uri+"> <http://www.buildingbits.nl/rws/bimp/2020/def/asfaltdb#00959d1c-aa20-e511-80bf-000af764f30b> ?value.\r\n" + 
    "      bind (\"weerstand steenslag 3\" as ?kenmerk)\r\n" + 
    "    }\r\n" + 
    "    \r\n" + 
    "    }\r\n" + 
    "    }\r\n" + 
    "   "; 


     ObjectWidgets.showChartPopup(uri,"Bar",'Weerstand',s,null,null,{curveType: 'function'});
  var o={chartType:"Line",curveType: 'function'};
 }






ObjectWidgets.showStrookXLineChart=function(title,sparql,x,options)
{
    //generieke implementatie
    
    MySparql.select(sparql,function(arg){
    var cols=[{type: "string", name: x}];
    
    
      
     try
     {  
        // get all the stroken
        var stroken={};
        var xs={};
         for (var n in arg.results.bindings)
          {
                 var binding  = arg.results.bindings[n];
                  stroken[binding.strook.value]={};
                  xs[binding[x].value]={};
          }
            
         var resultaten=new Map();
          
          for (var doelStrook in stroken)
          {
          
                  cols.push({type:"number",name:doelStrook});
                  for (var n in arg.results.bindings)
                  {
                      var binding  = arg.results.bindings[n];
                      strook = binding.strook.value;
                      var xvalue = binding[x].value;
                      var value = binding.value.value;
                      var id=strook+"__"+xvalue;
                      resultaten[id]=parseFloat(value);
                    //  var perStrook =  resultaat[strook];
                    //  if (perStrook==null){perStrook={}; resultaat[strook]=perStrook;}
                     // perStrook[xvalue]=value;
                    
                 }
         }
    
    
    
   
   var ar=[];
   //series
   
   for (var jaar in xs)
   {
       var record=[jaar];
       ar.push(record);
       for (var strook in stroken)
       {
         var id=strook+"__"+jaar;
          record.push(resultaten[id]);
       }  
    
   }
   
   
   //console.log(cols,ar);
   /*  voorbeeld
   ar=[];
   
    var cols=[{type: "string", name:  "test"}];
    cols.push({type:"number",name: "1 hr l"});
    cols.push({type:"number",name: "2 hr l"});
    cols.push({type:"number",name: "3 hr l"});
   // cols.push({type:"number",name: "m15"});
   //  cols.push({type:"number",name: "m16"});
    
   var record=["m13",2,4,1];
   ar.push(record);
   record=["m14",5,3,null];
   ar.push(record);
   record=["m15",5,2,3];
   ar.push(record);
   record=["m16",3,1,3];
   ar.push(record);
   
    
  

console.log(cols,ar);
*/
 
  var chart= ObjectWidgets.showChartPopupDirect(title,"Line",cols,ar,options);
  
  
    }
    catch(e){console.log(e);}
    
    });//end select
    
}


ObjectWidgets.showLangsprofiel=function(uri)
{
    if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    //label value
    var s="prefix bps:<http://www.buildingbits.nl/2017/coins2/BPS#>\r\n" + 
"prefix vr:<http://www.buildingbits.nl/2017/coins2/VenR#>\r\n" + 
"select ?van2 (?van2 as ?label) (?langshelling2 as ?langsHelling) ?strook ?baan \r\n" + 
"\r\n" + 
"where\r\n" + 
"{\r\n" + 
"    \r\n" + 
"    graph <http://www.rws.nl/VenR/2018/WinfraAlt>\r\n" + 
"    {\r\n" + 
"        bind (<"+uri+"> as ?uri).\r\n" + 
"        ?uri vr:langshelling ?langshelling.\r\n" + 
"        ?uri bps:rijksweg ?rw.\r\n" + 
"        ?uri bps:baan ?baan.\r\n" + 
//"        ?uri bps:strook ?strook.\r\n" + 
"         ?uri bps:van ?van.\r\n" + 
"         ?uri bps:tot ?tot.\r\n" + 
"        ?uri2 bps:rijksweg ?rw.\r\n" + 
"        ?uri2 bps:baan ?baan.\r\n" + 
"        ?uri2 bps:strook ?strook.\r\n" + 
"         ?uri2 bps:van ?van2.\r\n" + 
"         ?uri2 bps:tot ?tot2.\r\n" + 
"        filter (?van2>(?van-0.4))\r\n" + 
"        filter (?van2<(?tot+0.4))\r\n" + 
"         ?uri2 vr:langshelling ?langshelling2.\r\n" + 
"    }\r\n" + 
"}\r\n" + 
"order by ASC(?van2)  ASC(?strook)"; // nogal belangrijk




  //     var value=0.100267717998651;
   //    console.log(value, Math.atan(value*Math.PI/180)*100);
       
       
 
  MySparql.select(s,function(arg){
    
     var cols=[];
      cols.push({type:"string",name:"hecto"});
      
     try
     {  
        var stroken={};
         for (var n in arg.results.bindings)
          {
                 var binding  = arg.results.bindings[n];
                  stroken[binding.strook.value]={};
            }
            
         var resultaten=new Map();
          
          for (var doelStrook in stroken)
          {
          
                  cols.push({type:"number",name:doelStrook});
                  var previousProcent=0;
                  var previousHoogte=0;
                  var first=true;
                  var previouspos=0;
                  
                  var strook="";
                  var baan="";
                  var half=0.5;
                 
                
                  for (var n in arg.results.bindings)
                  {
                      var binding  = arg.results.bindings[n];
                      strook = binding.strook.value;
                      var van = binding.van2.value;
                      var resultaat = resultaten.get(van);
                     
                      if (resultaat==null){resultaat={};resultaten.set(van,resultaat);}
                   
                       
                      if (doelStrook==strook)
                      {
                         baan = binding.baan.value;
                             if (baan.endsWith("L")) {half=-0.5;}
                          
                          var value=parseFloat(binding.langsHelling.value);
                          valueProcent=Math.atan(value*Math.PI/180)*100; // in procenten;
                          if (first)
                          {
                            first=false;
                            var hoogte=0;  
                            previousHoogte=0;
                          }
                          else
                          {
                            var hoogte = previousHoogte+(half* (previousProcent+valueProcent)*0.1 )*1000/100;
                          
                          }
                            previousHoogte = hoogte;
                            previousProcent = valueProcent;
                            resultaat[strook]=hoogte;
                            //strookResultaten.ar.push([binding.label.value,hoogte,hoogte+1]);
                       }
                }
         }
    }
    catch(e){console.log(e);}
    
   
   var ar=[];
   window.top.t=resultaten;
   var it = resultaten.entries();
    var entry = it.next();
    var min=1000000;
    var max=-1000000;
    var aantal = resultaten.size;
  while (!entry.done)
   {
  
     var pos = entry.value[0];
     if (pos<min) {min=pos;}
     if (pos>max) {max=pos;}
      var resultaat = resultaten.get(pos);
   
      var record=[pos];
     for (var doelStrook in stroken)
          {
              var value=resultaat[doelStrook];
              if (value==null) {value=0;}
              record.push(value);
          }
          ar.push(record);
          entry = it.next();
    }

 //console.log(cols,ar);
  var chart= ObjectWidgets.showChartPopupDirect("lokale benadering langsprofiel ("+baan+")","Line",cols,ar,{ pointSize: 4,curveType: 'function'});
  
  
   
   //add kolken
   var s="prefix bps:<http://www.buildingbits.nl/2017/coins2/BPS#>\r\n" + 
"prefix vr:<http://www.buildingbits.nl/2017/coins2/VenR#>\r\n" + 
"select distinct ?pos \r\n" + 
"\r\n" + 
"where\r\n" + 
"{\r\n" + 
"    \r\n" + 
"    graph <http://www.rws.nl/VenR/2018/WinfraAlt>\r\n" + 
"    {\r\n" + 
"        bind (<"+uri+"> as ?uri).\r\n" + 

"        ?uri bps:rijksweg ?rw.\r\n" + 
"        ?uri bps:baan ?baan.\r\n" + 
//"        ?uri bps:strook ?strook.\r\n" + 
"         ?uri bps:van ?van.\r\n" + 
"         ?uri bps:tot ?tot.\r\n" + 
"        ?uri2 bps:rijksweg ?rw.\r\n" + 
"        ?uri2 bps:baan ?baan.\r\n" + 
"         ?uri2 bps:van ?van2.\r\n" + 
"         ?uri2 bps:tot ?tot2.\r\n" + 
"        filter (?van2>(?van-0.4))\r\n" + 
"        filter (?van2<(?van+0.4))\r\n" +
"  ?uri2 <http://www.rws.nl/2018/vr/mjpv#gelijkAanIvonBaan> ?ib   " +
 
"    }\r\n" + 


"   graph<http://www.rws.nl/VenR/2019/Kolk/rekenresultatenAddendum>{ \r\n" + 
"        ?kolk <http://www.rws.nl/2018/vr/mjpv#gelijkAanIvonBaan> ?ib. \r\n" +
"         ?kolk bps:position ?pos." + 
"         \r\n" +
"} }";


 MySparql.select(s,function(arg){
      
      var setKolken=function()
      {
        if (chart.chart==null)
        {
            setTimeout(setKolken,250);
            return;
        }
       
        var cli = chart.chart.getChartLayoutInterface();
        var chartArea = cli.getChartAreaBoundingBox();
        var minPx=Math.floor(cli.getXLocation(0));
        var maxPx=Math.floor(cli.getXLocation(aantal));
        var delta =(maxPx-minPx);
        
        //console.log(min,max,minPx,maxPx);
        
          var div =document.createElement("DIV");
        for (var n in arg.results.bindings)
          {
                 var binding  = arg.results.bindings[n];
                 var pos = binding.pos.value;
               
                 var x=pos-min;
                 if (x>0)
                 {
                      x=Math.floor(minPx+(x/(max-min)*delta))+"px";
                     // console.log(pos+"  x="+ x);       
                        var txt ='<svg style="position:relative;margin-top:-400px;width:100%" >  <line stroke="blue" x1="'+x+'" y1="0" x2="'+x+'" y2="100" style="stroke:rgb(0,0,255);stroke-width:1" /></svg>';
                      
                       div.innerHTML+=txt;
                        
                       
                }
                
           
           }
            chart.chart.getContainer().appendChild(div);     
                 
        
          
       // var x =Math.floor(cli.getXLocation(0))  + "px";
        
       
      
        
     
        
        
        }
        if (false)         setKolken();
              
   
       
        
    });
  

   
   
   
    
});

 
   
   



    
}


