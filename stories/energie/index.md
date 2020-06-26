---
layout: story
logo: /assets/images/energy.png
published: true
title: Energie Data Story
---

<h1>Energie Data Story</h1>

<h2>Windturbineparken in Nederland</h2>

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/wikidata-windfarms">
  </query>
  <figcaption>
    Bron: Wikidata
  </figcaption>
</figure>

<h2>Windturbines in Nederland</h2>

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/brt-windturbines">
  </query>
  <figcaption>
    Bron: BRT
  </figcaption>
</figure>

<h2>TODO</h2>

<p>Deze data story laat zien welke mogelijkheden er ontstaan als de Energielabel Dataset (RVO) beschikbaar gesteld wordt als Linked Data.  Daarbij wordt vooral gefocust op de toegevoegde waarde door combinaties te leggen met andere datasets, zoals de BAG (Kadaster), Energieverbruik (Gemeente Amsterdam), en Energiebesparingspotentieel (CBS).  Data interoperabiliteit in de praktijk.</p>

<h2>Woning</h2>

<p>We beginnen bij een specifieke woning in Dordrecht: Noordendijk 248.</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/Dordrecht-Noordendijk">
</query>

<h2>Straat</h2>

<p>
Hoe zit het eigenlijk met de energielabels op de Noordendijk?  De
panden in deze straat hebben energielabel A (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#22b14c" r="10"></circle>
</svg>
), energielabel B (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#8ff334" r="10"></circle>
</svg>
), of geen energielabel (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10"></circle>
</svg>
).
</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q2-dordrecht">
</query>

<h2>Hoe zit het dan in zo'n wijk qua energie verbruik?</h2>

<p>Gasverbruik is gemeten in kubieke meters (m³).
Elektriciteitsverbruik is gemeten in kilowattuur (kWh).</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q3-cbs">
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

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q4-energie">
</query>

<!-- <h2>Reële energiebesparing</h2>

<p>De volgende kaart toont de totale besparing in energieverbruik
(uitgedrukt in euro per jaar) die in koopwoningen behaald kan worden
wanneer alle energiebesparende maatregelen die nog kunnen worden
toegepast in de woning worden gerealiseerd.  Besparingen liggen
landelijk tussen €0 (blauw/koud) en €2.280 (rood/warm).</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q5-energie">
</query>
<h2> Theoretische energiebesparing</h2>

<p>De volgende thematische kaart laat de theoretische energiebesparing
zien.  Landelijk ligt dit besparingspotentieel tussen €0 en €1.900 per
koopwoning per jaar.</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q6-energie">
</query> -->

<h2>Besparingspotentie voor een gemeente</h2>

<p>In andere gemeentes kan de besparinspotentie aanzienlijker zijn,
bijvoorbeeld in Amsterdam.  We tonen hier de buurten waar besparingen
weinig opbrengen (blauw) en de buurten waar besparingen veel opgrengen
(rood).</p>

<p>We zien dat in een nieuwbouwbuurt als ‘IJburg West’ (rechts in de
kaart gelegen) bijna geen energiebesparingen mogelijk zijn. Maar in de
oude buurten in de binnenstad zijn aanzienlijke energiesparingen van
duizenden euros per jaar mogelijk.</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q7-energie">
</query>

<!-- <h2>Hoog Energieverbruik?</h2>

<p>We zijn wel benieuwd welke gebouwen in Amsterdam veel energie
verbruiken, en welk energielabel daar dan bij hoort.</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/q8-energie">
</query> -->

<h2>Energie browser</h2>

<p>Naast bovenstaande queries is het ook mogelijk om buurten te
filteren op basis van energie-gerelateerde eigenschappen in de Energie
Browser:</p>

<a href="../../presentations/energie-browser" target="_blank">
  <button>Energie Browser</button>
</a>
