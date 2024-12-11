var MyCommand={};

//old???

MyCommand.logout=function(rv)
{
    MyCommand.sendCommand({commando:"logout"},rv);    
}

MyCommand.runJavaRule=function(cls)
{
    var json={commando:"VRCommands",command2:"runJavaRule",command3:cls};
    MyCommand.sendCommand(json);
}

MyCommand.runSparlURIRule=function(uri)
{
    var json={commando:"VRCommands",command2:"runSparqlRule",command3:uri};
    MyCommand.sendCommand(json);
}

MyCommand.sendCommand=function(json,rv,rv2)
{
    console.log("send command called")
    
   var uri=null;
     try
     {
        if (Singleton.getInstance().baseUri!=null)
        {
            uri=Singleton.getInstance().baseUri+Singleton.getInstance().bb+"/cgi/command";
        }
     }
     catch(e)
     {
        
       }
       if (uri==null)
       {
        
         try
     {
         uri=BBAPI.base+Singleton.getInstance().bb+"/cgi/command";
        }
        catch(e)
     {}
        
    }
  
    
    $.ajax({
        type: "POST",
        url: uri,
        async:true,
        timeout:6000000,
        data: json,
        success: function(arg)
        {
            console.log("success ",arg);
            if (rv!=null)
        	{
        	  rv.call(this,arg);
        	}
            else
        	{
        	    showInfo("server command succesful");
                console.log(arg);
        	}
            
            },//location.reload();
        error:function(arg){

            console.log("error functie",arg);
            if (rv2!=null)rv2.call(this,arg);
            showError("server command error ");
            }
        });



}

MyCommand.downloadFile=function(file,extensie)
{
   
    var bu=Singleton.getInstance().baseUri;
    var url=bu+Singleton.getInstance().bb+"/cgi/download";

      try
      {
        url=getIface().me.props.repoURL.replace("sparql","download");
      }
      catch(e)
      {}


     var sendO={   httpMethod: "get",data:{}};

     if (file==null){return;}
     file = file.replace("//file/","");
      sendO.data.localFile=file;
      
      if (extensie!=null)
      {


            window.open(url+"/"+file, '_blank');
       }
       else
       {


            $.fileDownload(url,sendO)
            .done(function (arg) { console.log(arg); alert('File download a success!'); })
            .fail(function (e) { alert('File download failed!');console.log(e); });
        }
}



MyCommand.generateCoinsLight=function(datagraph,schemagraph)
{
    var json={commando:"generateCoinsLight",datagraph:datagraph,schemagraph:schemagraph};
  //  console.log(json);
    //var json=JSON.stringify(json);
    MyCommand.sendCommand(json);
}


function exportXLSGML(jss,arg,widget,prop,propagate)
{
   // console.log(jss.ev.behaviours);
  var  datagraph=  jss.ev.behaviours["http://www.buildingbits.nl/coinsConfig#dataparameter"].value;
  var  schemagraph=  jss.ev.behaviours["http://www.buildingbits.nl/coinsConfig#schemaParameter"].value;

    MyCommand.generateCoinsLight(datagraph,schemagraph);
}