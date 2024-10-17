function parsejson(results,sparql)
{
    document.results=results;
    document.sparql=sparql;
   if (results==null) {createEmpty();return;}
   

   
    var cols=[];
    if (results.head==null) {createEmpty();return;}
    var vars= results.head.vars;
    var colSize=(100/vars.length)+"%";
    if (vars.length>4) colSize="200px";
    for (var n in vars)
    {
        var v = vars[n];
        cols.push( { field: v, text: v, size: colSize, sortable: true, resizable: true });
    }
    
    var records=[];
    let bindings=results.results.bindings;
    for (var b in bindings)
    {
        let binding=bindings[b];
        var o ={ recid:b};
        records.push(o);
        for (var n in vars)
        {
            let v = vars[n];
            let value = "";
            try {
                value=binding[v].value;
            }
            catch(e){}
            o[v]=value;
        }
        
        
    }
    
    $('#main').w2grid({
    name: 'main',
    header: 'Resultaten',
    show: {
        toolbar: true,
        footer: true,
        toolbarReload   : false,
    },
     toolbar: {
        items2: [
          
            { type: 'button', id: 'mybutton', caption: 'download', img: 'fa fa-download' }
        ],
        onClick: function (target, data) 
        {
            download(target,data);
        }
        },
        
    columns: cols,
    records: records
});
    
    
    
}

function download(target,data)
{
   
    
    
    if (document.sparql!=null)
    {
        var sp=document.sparql+"";
        sp =sp.replace("limit 1000","").replace("limit 100","").replace("limit 10","").replace("limit 1","");
          sp =sp.replace("LIMIT 1000","").replace("LIMIT 100","").replace("LIMIT 10","").replace("LIMIT 1","");
        
       // sp+="  limit 10";; // for testing purposes
       sp+-"limit 1000";
       w2ui.main.lock('Even geduld svp.', true);
       var ms = window.top.Singleton.getInstance().MySparql;
       if (ms==null)
       {
        // notebook version? 
           var endpoint =window.parent.document.endpoint;
           if (endpoint==null)     {endpoint =window.parent.parent.document.endpoint;}
           MyCommand.url=endpoint.replace("sparql","command");
       }
       
       
       // NORMALE VERSIE
       
       
       var template="";
       try
       {
           var temp =document.sparql.split("template:")[1];
           template= temp.split(";")[0]; 
       }
       catch(e){}
         
            var json={commando:"sparqlReport",sparql:sp,template:template};
            console.log("file download start");
                     $.fileDownload( MyCommand.url,{ httpMethod: "POST",data:json,
                     successCallback:function(e){console.log("done");w2ui.main.unlock();    },
                     failCallback:function(e){console.log("failed");w2ui.main.unlock();  alert("download failed");  },
                     
                     
                     });
                     
                     
                     
                         
            
           return;
        
    }
}

var MyCommand={};

MyCommand.url=null;
MyCommand.sendCommand=function(json,rv)
{
    
    
    $.ajax({
        type: "POST",
        url: MyCommand.url,
        async:true,
        timeout:6000000,
        data: json,
        success: function(arg)
        {
            if (rv!=null)
            {
            rv.call(this);
            }
            else
            {
            showInfo("server command succesful");
            }
            
            },//location.reload();
        error:function(arg){console.log("server command error");console.log(arg);}
        });



}

MyCommand.downloadFile=function(file)
{
    //not used
    var bu=Singleton.getInstance().baseUri;
    var url=bu+"BloodBee/cgi/download";

     var sendO={   httpMethod: "POST",data:{}};

     if (file==null){return;}
     file = file.replace("//file/","");
     console.log("trying to download ",file);
      sendO.data.localFile=file;

//console.log(sendO);



$.fileDownload(url,sendO)
.done(function () { w2ui.main.unlock(); alert('File download a success!'); })
.fail(function (e) { w2ui.main.unlock(); alert('File download failed!');console.log(e); });
    
}





function createXLS(results)
{
    //not used
      w2ui.main.unlock();
    w2ui.main.lock('creating xls...', true);
    var csv="";
    var vars= results.head.vars;
    let bindings=results.results.bindings;
    var kommaType=";";
    //headers;
    var komma="";
     for (var n in vars)
        {
                 let v = vars[n];
                 csv+=komma+v;
                 komma=kommaType;
        }
        csv+="\n";
    
    for (var b in bindings)
    {
        let binding=bindings[b];
        var komma="";
        for (var n in vars)
        {
            let v = vars[n];
            let value = "";
            try {
                value=binding[v].value;
            }
            catch(e){}
              csv+=komma+value;
              komma=kommaType;
        }
         csv+="\n";
        
    }
    
    save(csv);
          w2ui.main.unlock();
 }
 
 function save(data)
 {
    
 var filename="results.csv";
       var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e);
        
           
    
}







function createEmpty()
{
      $('#main').w2grid({
    name: 'main',
    header: 'Geen resultaten',
    show: {
        toolbar: true,
        footer: true
    },
    columns: [
        
    ],
    searches: [
      
    ],
    sortData: [{ field: 'recid', direction: 'ASC' }],
    records: [
           
    ]
});
}




