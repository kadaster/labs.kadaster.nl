---
layout: story
logo: /assets/images/energy.png
published: false
title: Energie Data Story
---

<h1>Energie Data Story</h1>

<h2>Windturbineparken in Nederland</h2>

<figure>
  <query data-conf-ref="https://data.labs.kadaster.nl/kadaster/knowledge-graph/queries/wikidata-windfarms">
  </query>
  <figcaption>
    Bron: Wikidata
  </figcaption>
</figure>

<h2>Windturbines in Nederland</h2>

<figure>
  <query data-conf-ref="https://data.labs.kadaster.nl/kadaster/knowledge-graph/queries/brt-windturbines">
  </query>
  <figcaption>
    Bron: BRT
  </figcaption>
</figure>

<h2>TODO</h2>

<p>Deze data story laat zien welke mogelijkheden er ontstaan als de Energielabel Dataset (RVO) beschikbaar gesteld wordt als Linked Data.  Daarbij wordt vooral gefocust op de toegevoegde waarde door combinaties te leggen met andere datasets, zoals de BAG (Kadaster), Energieverbruik (Gemeente Amsterdam), en Energiebesparingspotentieel (CBS).  Data interoperabiliteit in de praktijk.</p>

<h2>Woning</h2>

<p>We beginnen bij een specifieke woning in Zoetermeer: Waarderstraat
23.</p>

<query data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="q1.rq">
</query>

<h2>Straat</h2>

<p>Hoe zit het eigenlijk met de energielabels op de Waarderstraat?  De
panden in deze straat hebben energielabel A (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#22b14c" r="10">
</svg>
), energielabel B (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#8ff334" r="10">
</svg>
), of geen energielabel (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10">
</svg>
).</p>

<query data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="q2.rq">
</query>

<h2>Hoe zit het dan in zo'n wijk qua energie verbruik?</h2>

<p>Gasverbruik is gemeten in kubieke meters (m³).
Elektriciteitsverbruik is gemeten in kilowattuur (kWh).</p>

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-output="gchart"
       data-query-ref="q3.rq"
       data-config="http://localhost:4000/stories/energie/#query=prefix+buurt%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fregios%2F2016%2Fid%2Fbuurt%2F%3E%0Aprefix+def%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix+dimension%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aselect+%3Fwoningtype+%3Fgas_m3+%3Felektra_kWh+%7B%0A++bind(buurt%3ABU03010500+as+%3Fbuurt)%0A++%7B%0A++++_%3A1a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Appartement+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A1b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Appartement+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22appartement%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A2a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Hoekwoning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A2b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Hoekwoning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22hoekwoning%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A3a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Tussenwoning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A3b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Tussenwoning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22tussenwoning%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A4a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Twee-onder-een-kap-woning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A4b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Twee-onder-een-kap-woning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22twee+onder+%C3%A9%C3%A9n+kap%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A5a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_VrijstaandeWoning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A5b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_VrijstaandeWoning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22vrijstaande+woning%22+as+%3Fwoningtype)%0A++%7D%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fbetalinkeddata.cbs.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D">
</query>

<h2>Zij-stap: BAG data in Tableau</h2>

<script type="text/javascript" src="/assets/js/tableau/viz_v1.js">
</script>

<div class="tableauPlaceholder">
	<object class="tableauViz" style="display:none;">
		<param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F">
		<param name="embed_code_version" value="3">
		<param name="site_root" value="">
		<param name="name" value="Osterheem&#47;Dashboard1">
		<param name="tabs" value="yes">
		<param name="toolbar" value="yes">
		<param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Os&#47;Osterheem&#47;Dashboard1&#47;1.png">
		<param name="animate_transition" value="yes">
		<param name="display_static_image" value="yes">
		<param name="display_spinner" value="yes">
		<param name="display_overlay" value="yes">
		<param name="display_count" value="yes">
	</object>
</div>

<h2>Buurt & mogelijke besparingen</h2>

<p>Mijn buurt heet ‘Oosterheem-Noordoost’, waar volgende de CBS Wijk
en Buurtkaar het gemiddelde aardgasverbruik 470 m³/jaar is, en het
gemiddelde elektriciteitsgebruik 3,880 kWh/jaar.</p>

<p>Dat is mooi, maar is er in mijn buurt misschien ook energie te
besparingen?  Het CBS heeft hier gegevens over.  Voor buurt
‘Oosterheem-Noordoost ’ zijn de mogelijke besparingen €100,- per jaar.
Daarvoor zijn éénmalige investeringen van €4.100,- nodig.  Dat
betekent dat er pas na 41 jaar een positief rendement optreed…</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="q4.rq">
</query>

<h2>Reële energiebesparing</h2>

<p>De volgende kaart toont de totale besparing in energieverbruik
(uitgedrukt in euro per jaar) die in koopwoningen behaald kan worden
wanneer alle energiebesparende maatregelen die nog kunnen worden
toegepast in de woning worden gerealiseerd.  Besparingen liggen
landelijk tussen €0 (blauw/koud) en €2.280 (rood/warm).</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="q5.rq">
</query>

<h2> Theoretische energiebesparing</h2>

<p>De volgende thematische kaart laat de theoretische energiebesparing
zien.  Landelijk ligt dit besparingspotentieel tussen €0 en €1.900 per
koopwoning per jaar.</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="q6.rq">
</query>

<h2>Besparingspotentie voor een gemeente</h2>

<p>In andere gemeentes kan de besparinspotentie aanzienlijker zijn,
bijvoorbeeld in Amsterdam.  We tonen hier de buurten waar besparingen
weinig opbrengen (blauw) en de buurten waar besparingen veel opgrengen
(rood).</p>

<p>We zien dat in een nieuwbouwbuurt als ‘IJburg West’ (rechts in de
kaart gelegen) bijna geen energiebesparingen mogelijk zijn. Maar in de
oude buurten in de binnenstad zijn aanzienlijke energiesparingen van
duizenden euros per jaar mogelijk.</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="q7.rq">
</query>

<h2>Hoog Energieverbruik?</h2>

<p>We zijn wel benieuwd welke gebouwen in Amsterdam veel energie
verbruiken, en welk energielabel daar dan bij hoort.</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="q8.rq">
</query>

<h2>Energie browser</h2>

<p>Naast bovenstaande queries is het ook mogelijk om buurten te
filteren op basis van energie-gerelateerde eigenschappen in de Energie
Browser:</p>

<a href="../../presentations/energie-browser" target="_blank">
  <button>Energie Browser</button>
</a>
