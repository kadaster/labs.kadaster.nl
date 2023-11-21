
function showPopupWithdownloadResults(files)
{
   if (files==null) 
   //{files=[{file:"file",label:"mijn eerste label"},{file:"file",label:"mijn 2e label"}]};
       {return;}
   
    
    var body="";
    
    for (var n in files)
	{
	var file = files[n].file;
	var label = files[n].label;
	
	
	  body+='<div class=""><a href="javascript:downloadSpecificResult(\''+file+'\')">'+label+'</a></div>';
	  
	}
    
  
    
    w2popup.open({
        title: 'download files',
        body: body
    });


}


function downloadSpecificResult(file)
{
   

    var bu= window.location;
    bu = bu .protocol + "//" + bu.host + "/";
   var url=bu+"BloodBee/cgi/download"; 

     var o={fileToDownload:file};

     
   var r=$.fileDownload(url,{   httpMethod: "POST",data:o});
   r.done(function () {console.log("done"); });
   r.fail(function (e) { console.log("not yet ready",e); alert('File download failed. Not yet ready. please try again later');console.log(e); });   
 // r.always(function(e){console.log("aweasy ",e)});


}