---
layout: story
title: Bier Data Story
---

<h1>Bier Data Story</h1>

<p>In deze Data Story behandelen we vragen rond bier brouwerijen in Nederland, op basis van verschillende datasets.</p>

<h2>Stakingen bij brouwers</h2>
<p>Stakingen die in Nederland hebben plaatsgevonden worden als Linked Data gepubliceerd door het Instituut voor Sociale Geschiedenis (IISG) op <a href="https://druid.datalegend.net/dataLegend/strikes" target="_blank">Druid</a>.  We kunnen de stakingen per beroep opvragen.  Hieronder de stakingen geïnitieerd door brouwers:</p>

<query data-config-ref="https://druid.datalegend.net/dataLegend/strikes/queries/stakingen-brouwers">
</query>

<h3>Stakingen bij Heineken</h3>

<p>Maar niet alleen brouwers hebben gestaakt bij Heineken.  Hieronder de stakingen van *alle* beroepsgroepen bij Heineken door door de jaren heen:</p>

<query data-config-ref="https://druid.datalegend.net/dataLegend/strikes/queries/stakingen-heineken">
</query>

<h2>Heineken brouwerij</h2>

<p>Laten we eens kijken hoe oud het gebouw van de Heineken Experience / de oude Heineken brouwerij is.  We zoeken dit op in zowel de Kadaster BAG alsook het RCE Monumenten Register:</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/bier">
</query>
