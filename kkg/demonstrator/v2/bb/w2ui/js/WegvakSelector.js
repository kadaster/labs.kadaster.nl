

var WegSelector=function(layout,panel,widget,rv,perspective)
{
    Widget.nid++;
    var me=this;
    this.dao=widget;
    this.toolbarViz=true;
    this.rv=rv;
    
    this.htmlid='formWidget'+Widget.nid;
    this.gridName='formWidget'+Widget.nid;
    this.layout=layout;
	this.panel = panel;
    this.header=null;
}

WegSelector.prototype.getIface=function()
{
	return getIface();
}
WegSelector.prototype.createGUI=function()
{
    
    let layout = this.layout;
    let panel = this.panel;
  
    createConfig();
    var l =$().w2layout(WegvakSelector.wvconfig.layout);
    w2ui[layout].html(panel,l);
    WegvakSelector.layout=l;

    WegvakSelector.grid=$().w2grid(WegvakSelector.wvconfig.grid);

   l.content('left', WegvakSelector.grid);
   WegvakSelector.form=$().w2form(WegvakSelector.wvconfig.form);
    l.content('main', WegvakSelector.form);


   
}



var WegvakSelector={};

function createConfig()
{

if (window.top.Singleton.getInstance().records==null)  window.top.Singleton.getInstance().records=[];



WegvakSelector.recid=0;


// widget configuration
WegvakSelector.wvconfig = {
    layout: {
        name: 'layoutWV',
        padding: 4,
        panels: [
            { type: 'left', size: '270px', resizable: true },
            { type: 'main', size:'50px' }
        ]
    },
    grid: { 
        name: 'wvgrid',
        columns: [
            { field: 'rw', text: 'Rijksweg', size: '80px', sortable: false, searchable: true },
           { field: 'baan', text: 'Baan', size: '80px' , sortable: false, searchable: true},
        //    { field: 'strook', text: 'Strook', size: '120px' , sortable: false, searchable: true},
            { field: 'van', text: 'van', size: '50px',  sortable: false, searchable: true },
            { field: 'tot', text: 'tot', size: '50px', sortable: false, searchable: true  }
            
        ],
        records:  window.top.Singleton.getInstance().records
        ,
        onClick: function(event) {
            var grid = this;
            var form = w2ui.formWV;
            event.onComplete = function (e) {
        	
                var sel = grid.getSelection();
              //  console.log(e,sel);
                if (sel.length == 1) {
                    form.recid  = sel[0];
                    form.record = $.extend(true, {}, grid.get(sel[0]));
                    form.refresh();
                } else {
                    form.clear();
                }
            }
        }
    },
    form: { 
        header: 'Edit Selectie',
        name: 'formWV',
        fields: [
            { name: 'rw', type: 'list', required: true, html: { caption: 'Rijksweg', attr: 'size="20" ' }, options: { items: ['*','RW001','RW002','RW003','RW004','RW005','RW006','RW007','RW008','RW009','RW010','RW011','RW012','RW013','RW014','RW015','RW016','RW017','RW020','RW022','RW027','RW028','RW029','RW030','RW031','RW032','RW033','RW035','RW036','RW037','RW044','RW046','RW048','RW050','RW057','RW058','RW059','RW061','RW065','RW067','RW073','RW076','RW077',
        	'RW079','RW099','RW200','RW325','RW708','RW783','RW835','RW838'] } },
             { name: 'baan', type: 'list', html: { caption: 'Baan', attr: 'size="20" ' } ,options: { items: ['*',"1 HR L" , "1 HR R" , "2 HR L" , "2 HR R" , "0 HR M" , "PW L" , "PW R" , "RB L" , "RB R" , "VB L" , "VB R" , "YY" , "VW a" , "VW b" , "VW c" , "VW d" , "VW e" , "VW f" , "VW g" , "VW h" , "VW i" , "VW j" , "VW k" , "VW l" , "VW m" , "VW n" , "VW o" , "VW p" , "VW q" , "VW r" , "VW s" , "VW t" , "VW u" , "VW v" , "VW w" , "VW x" , "VW y" , "VW z" , "MB"]}},
         //   { name: 'strook', type: 'list', required: false, html: { caption: 'strook', attr: 'size="20" maxlength="40" ' } ,options: { items: ['*',"1 R- L" , "1 R- R" , "2 R- L" , "2 R- R" , "3 R- L" , "3 R- R" , "4 R- L" , "4 R- R" , "5 R- L" , "5 R- R" , "6 R- L" , "6 R- R" , "1 U- L" , "1 U- R" , "2 U- L" , "2 U- R" , "1 I- L" , "1 I- R" , "2 I- L" , "2 I- R" , "1 W- L" , "1 W- R" , "2 W- L" , "2 W- R" , "1 Q- L" , "1 Q- R" , "2 Q- L" , "2 Q- R" , "X" , "V- R" , "V- L" , "W- R" , "W- L" , "B- R" , "B- L" , "L- R" , "L- L"]}},
            { name: 'van', type: 'float', html: { caption: 'van (in km)', attr: 'size="10" ' } },
            { name: 'tot', type: 'float', html: { caption: 'tot (in km)', attr: 'size="10" ' } }
        ],
        actions: {
            Nieuw: function () {
                this.clear();
                window.top.Singleton.getInstance().records=w2ui.wvgrid.records;
            },
        
            Delete: function () {
              // 
        	   if (this.recid != 0) {
        	       w2ui.wvgrid.remove(this.recid);
        	       w2ui.wvgrid.selectNone();
        	       this.clear();
                   window.top.Singleton.getInstance().records=w2ui.wvgrid.records;
        	   }
            },
          
            Save: function () {
                var errors = this.validate();
                if (errors.length > 0) return;
                if (this.recid == 0) {
                    WegvakSelector.recid++;
                    w2ui.wvgrid.add($.extend(true, { recid: WegvakSelector.recid}, this.record));
                 //   console.log("setting 22 recid ",(WegvakSelector.recid));
                    w2ui.wvgrid.selectNone();
                    this.clear();
                    
                 
                    
                } else {
                
                    w2ui.wvgrid.set(this.recid, this.record);
                    w2ui.wvgrid.selectNone();
                    this.clear();
                  
                }
                window.top.Singleton.getInstance().records=w2ui.wvgrid.records;
            },
            Klaar: function () {
        	console.log("klaar");
            //filterUpdate
            var parameter=getIface().me.props["publishVariable"];
            if (parameter!=null)
            {
                var myFilter= WegvakSelector.getFilter(w2ui.wvgrid.records);
                getIface().me.props.publish(parameter,myFilter);
                getIface().me.props.publish("filterUpdate",(Math.random()*100000)+"t");
                
                
            }
            try{            getIface().me.props.closeDialog(); } catch(e){};

        	
            },
        }
    }
};



WegvakSelector.clear=function()
{
   // console.log(WegvakSelector.grid);
    
   try {WegvakSelector.grid.clear();}catch(e){console.log(e);}   
}

WegvakSelector.openRWSelector=function(jss,uri) {
    this.rwSelectorJSS=jss;
    
    if (true)
	{
          if ( w2ui.wvgrid.records.length==0)
    	{
              //w2ui.wvgrid.records=[{recid:1,rw: {text:"RW027"},baan:{text:"*"},bst_type:{text:"*"},van:10.2,tot:220.6},{recid:2,rw: {text:"RW002"},baan:{text:"*"},bst_type:{text:"*"},van:10.2,tot:100.6}]
      //        w2ui.wvgrid.records=[{recid:1,rw: {text:"RW027"},baan:{text:"*"},bst_type:{text:"*"},van:10.2,tot:220.6}];
    	  w2ui.wvgrid.refresh();
    	}
	}
      
	
   
   
}

WegvakSelector.getFilter=function(records)
{
   
    if (records==null){return "";}
    if (records.length==0){return "";}
    
   
    var rv=WegvakSelector.getWVSparqlElement(records);
    if (rv==null)rv="";

    console.log("filter =\n"+rv+"\n");
   return rv; 
   
}



WegvakSelector.getWVSparqlElement=function(records)
{
    if (records==null){return null;}
    if (records.length==0){return null;}
  //  console.log(records);
    //var s = "select distinct ?uri ?geometry ?color where {  ";
    
    
    var s="";
    if (records.length>1) s+="{";
  
    var union="";
    for (var recordN in records)
	{
        var punt="";
	s+=union;
	union="} union {"
	    var record=records[recordN];
	    var rw = "<http://www.rws.nl/VenR/2017/NWB#"+record.rw.text+">";
	    
	    if (record.rw.text=="*")
		{
		  rw="?rwAlles";
		}
	    
	    s+=" ?uri  <http://www.buildingbits.nl/2017/coins2/BPS#rijksweg> "+rw+" ";
	    
	    // baan
	    
	    var baan = record.baan.text;
	    if (baan=="*") {baan=null;}
	    if ((baan!=null) && (baan!="*")){
             s+=". ?uri  <http://www.buildingbits.nl/2017/coins2/BPS#baan> ?baan. filter (?baan=\""+baan+"\") \n"; 
            // s+=" . \n?uri  <http://www.buildingbits.nl/2017/coins2/BPS#baan> \""+baan+"\" "; 
        }
		    
	    
	    var van=record.van;
	    var tot=record.tot;
	    if ((van!=""))
		{
		        s+=" .?uri  <http://www.buildingbits.nl/2017/coins2/BPS#van> ?van. ";
                if (van!=""){s+="filter (?van>="+van+") "};
		      
		}
	    
        if ((tot!=""))
		{
		      
		        s+=" . ?uri  <http://www.buildingbits.nl/2017/coins2/BPS#tot> ?tot. ";
                if (tot!=""){s+="filter (?tot<="+tot+") \n"};
		}
	    
	    
	  
	   try
       {
	    var strook = record.strook.text;
	    if (strook=="*") {strook=null;}
	    
	      if ((strook!=null) && (strook!="*")){ s+="?uri  <http://www.buildingbits.nl/2017/coins2/BPS#strook> ?strook. filter (?strook='"+strook+"') ";}
       }
       catch(e){}

      
	}

    if (records.length!=1) { s+="}" } 
    if (records.length==1) { s+="." } 
    
	     
 
    
 return s;
 }
}

