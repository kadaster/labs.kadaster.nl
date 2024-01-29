var MyCommand={};

MyCommand.logout=function(rv)
{
    MyCommand.sendCommand({commando:"logout"},rv);    
}

MyCommand.sendCommand=function(json,rv)
{
    
    
    //var bu=Singleton.getInstance().baseUri;
    var bu= window.location;
     bu = bu .protocol + "//" + bu.host + "/";
    var url=bu+"BloodBee/cgi/upload";   // geen command
    json.nofile=true;
    // command
    $.ajax({
        type: "POST",
        url: url,
        data: json,
        success: function(arg)
        {
            if (rv!=null)
        	{
        	rv.call(this);
        	}
            else
        	{
        	console.log("server command succesful",json);
        	}
            
            },//location.reload();
        error:function(arg){console.log(arg,json);}
        });



}


