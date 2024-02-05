ObjectWidgets.showStroefheid=function(uri)
{
   // var stroken=["1 R- L","1 W- L","2 R- L","3 R- L","4 R- L","5 R- L","1 I- L","1 U- L","1 R- R","1 U- R","2 R- R","2 U- R","3 R- R","1 W- R","1 I- R","1 Q- R","2 U- L","6 R- L","4 R- R","5 R- R","6 R- R","2 W- R","3 U- R","2 W- L","3 W- R","1 Q- L","3 U- L","3 W- L","1 B- L"];
    
   
     if (uri==null){uri="";}
    uri=uri.replace("<","").replace(">","");
    
   var s="prefix ivon:<http://www.rws.nl/2018/vr/mjpv#>\r\n" + 
                "prefix vr:<http://www.buildingbits.nl/2017/coins2/VenR#>\r\n" + 
                "prefix bps:<http://www.buildingbits.nl/2017/coins2/BPS#>\r\n" + 
                "\r\n" + 
                "select distinct ?strook ?jaar ?value \r\n" + 
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
                
              //  console.log(s);
    
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
                
              
    
    ObjectWidgets.showStrookXLineChart("stroefheidindex (jaren)",s,"jaar",{ pointSize: 4,curveType: 'function'});
  
 
    
}
