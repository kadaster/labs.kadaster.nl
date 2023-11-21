var timeCollector={};

function resetTime()
{
    timeCollector={};
}
function runtime(s)
{
    if (timeCollector[s]==null)
	{
	   timeCollector[s]=0;
	}
    var d = new Date();
	var n = d.getTime();
    timeCollector[s+"start"]=n;
    
}
function endtime(s)
{
    var d = new Date();
	var n = d.getTime();
	 var begin=timeCollector[s+"start"]
	 var tot = timeCollector[s];
	 
	 tot = tot+n-begin;
    timeCollector[s]=tot;
    timeCollector[s+"start"]=null;
    
}
function printtime()
{
    for (var n in timeCollector)
	{
	if (timeCollector[n]!=null)
	    {
	    	console.log(n, timeCollector[n]);
	    }
	}
}
