
//console.log("rewriting sparql executor ");
SparqlExecutor.prototype.getRewriteQuery=function(rawSparql,conversion, named)
{
    
    // handy function for cesium properyt panel e.g.
    var me=this;
    if ((conversion==null) && (named==null))
	{
        var conversion={};
        var named=[];

      //  console.log("special rewriter ",getIface());

        let pubsub= getIface().me.props.pubsub;

       // console.log(pubsub);

        for (let n in pubsub)
        {
            let value = pubsub[n];
           
            if (value!=null)
            {
              try{
                if  ( (value.startsWith("http://")) || (value.startsWith("https://")) )
                {
                  //  console.log("deze nemen we mee",n,value);
                    conversion[n]=value; 
                }
              }
              catch(e){}
            }
        }
    }
  //  console.log(conversion,rawSparql);
    var sparql=MySparql.rewrite(rawSparql,conversion,named);
    
 //  console.log(conversion,sparql);
    return sparql;
  
    
}








