function processDeckGLHeatmap(data,sparql)
{
        try
        {
            if (Singleton.getInstance().heatmap!=null)
            {
                Singleton.getInstance().map.removeLayer(Singleton.getInstance().heatmap);
            }
        }
        catch(e) {}

            var heatmap = new L.webGLHeatmap({
                size: 0.0001,
                units: 'px'  
            });



            heatmap.setData(data);



        var layer=Singleton.getInstance().map.addLayer(heatmap);
        Singleton.getInstance().heatmap=layer;


}