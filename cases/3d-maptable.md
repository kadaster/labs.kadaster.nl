---
banner: /assets/images/grondmarkt.jpg
layout: page
title: Use Case ― Grondmarkt
---
# Use Case: 3D Maptable

<div id="openseadragon1" style="width: 1920px; height: 1080px;"></div>
<script src="/assets/js/openseadragon/openseadragon.min.js"></script>
<script src="/assets/js/openseadragon/openseadragon-bookmark-url.js"></script>
<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "/assets/js/openseadragon/images/",
        tileSources: {
        type: 'image',
        url:  "/assets/images/full_brt_map.png"
    }
    });
	viewer.bookmarkUrl();
</script>