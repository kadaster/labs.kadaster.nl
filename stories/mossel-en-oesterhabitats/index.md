---
layout: story
title: Mossel- en Oesterhabitats
endpoint: https://data.labs.pdok.nl/geosparql
logo: mossel-en-oesterhabitats/logo.jpg
output: leaflet
description: Waar ligt uw dichtstbijzijnde mossel- en oesterhabitat?
---

# Waar ligt uw dichtstbijzijnde mossel- en oesterhabitat?

De tien dichtstbijzijnde mossel- en oesterhabitats bij u in de buurt!
Deze query wordt mogelijk gemaakt met behulp van de <a
href="https://en.wikipedia.org/wiki/GeoSPARQL">GeoSPARQL</a>
functionaliteit van het endpoint van het PDOK data lab. Bekijk de
query hoe het werkt.

Voor deze pagina dient u uw browser toe te staan om uw locatie op te halen...

<!-- if the geolocation request doesn't work out: fill the div text with a comment -->
<div id="remarks"></div>

<query data-endpoint="https://data.labs.pdok.nl/geosparql" data-output="geo"></query>
<script type="text/javascript" src="mosselscript.js">
</script>
