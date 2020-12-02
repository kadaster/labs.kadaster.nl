---
banner: /assets/images/handen.jpg
layout: page
title: Self Service GIS
---

# Use Case: Self Service GIS - Een Visie

For the english version, see <a href="/cases/selfservice_eng">the English version here</a>.

## Introductie
Een belangrijke peiler het strategische meerjarenplan van het Kadaster is ‘geo-informatie voor iedereen’ te bieden en hiermee het beantwoorden van de meest relevante maatschappelijke vragen te ondersteunen. Hoewel we veel van de data die we momenteel hebben in een voor ontwikkelaars goed bruikbaar technisch format kunnen aanbieden, zal het beschikbaar stellen van data in andere formats en via andere middelen een breder scala aan gebruikers toegang geven om de data van het Kadaster te gebruiken.

Onze langetermijnsvisie is om burgers de mogelijkheid te geven om zowel kadastergegevens als gegevens uit andere (open) bronnen te gebruiken, zodanig dat gebruikers de gegevens van Kadaster gemakkelijk kunnen verkennen en deze kunnen combineren met hun eigen gegevens. Daarnaast willen we ruimtelijke analyses van een bepaald niveau die gemakkelijk online (in de browser) kunnen worden uitgevoerd. Dit brengt de gegevens dichter bij de gebruiker, waardoor klanten zelf antwoorden op hun (ruimtelijke) vragen kunnen vinden.

Een oplossing hiervoor is het gebruik van webtechnologieën om deze "self-service" tool naar de eindgebruikers van het Kadaster te brengen in de vorm van een interactieve web mapping interface of web GIS (Geospatial Information System). De volgende pagina geeft enig inzicht in hoe "self-service GIS" kan worden bereikt binnen het Kadaster.

## Doelgroep
Het doel van de ontwikkeling van deze self-service tool is om de betrokken gebruiker en actieve burger te voorzien van de middelen om ruimtelijke analyse uit te voeren, als ze proberen om een vraag te beantwoorden. Tot deze gebruikersgroep kan bijvoorbeeld een data- of onderzoeksjournalist behoren, die op zoek is naar een gedragspatroon, een potentiële nieuwe huiseigenaar die op zoek is naar milieu-informatie over zijn nieuwe woning of een lid van een woningcorporatie die de criminaliteit in zijn buurt wil onderzoeken.

Deze gebruikersgroep is doorgaans niet goed thuis in de technische fijne kneepjes van ruimtelijke analyse en de mogelijkheden van een volwaardig GIS pakket, maar is gewoon geïnteresseerd in het gebruik van (een combinatie van) door het Kadaster verstrekte gegevens en de gegevens van andere aanbieders of hun eigen gegevens om een bepaalde ruimtelijke vraag te beantwoorden.

## Wat zijn de kenmerken van Self-Service GIS?
<div class="textbox" markdown="1">
## Self-Service GIS defined
Esri, de toonaangevende commerciële leverancier van geospatiale software en clouddiensten voor geo-informatie, definieert self-service GIS als een uitbreiding op de typische functionaliteit die binnen een web GIS wordt gevonden. Over het algemeen is een self-service GIS een applicatie die gemakkelijke interactie door de gebruiker en eenvoudige analyse van georuimtelijke gegevens via webgebaseerde geografische toepassingen, mogelijk maakt.
</div>

Bij het bedienen van de bovengenoemde gebruikersgroep, wordt de vraag gesteld wat de features zijn van self-service GIS. Deze features kunnen zowel de functionaliteit bevatten, die beschikbaar moet zijn voor de gebruiker in de toepassing vanuit het perspectief van de gebruikersinterface, als ook welke gegevens of welke functies van deze gegevens beschikbaar moeten zijn voor de gebruiker in de webtoepassing. Om te bepalen wat de belangrijke features van self-service GIS zijn voor ons doel en de doelgroep van het Kadaster, kijken we ook naar de wenzen vanuit onze klanten.

Een analyse van welke ruimtelijke vragen de klanten van het Kadaster stellen, wordt uitgevoerd als onderdeel van een interne analyse van de gebruikersbehoeften. Welke vragen worden gesteld, zal benadrukken welke functionaliteit nuttig kan zijn voor de gebruikers in een selfservice GIS-toepassing. Het geeft ook inzicht in hoe gebruikers gebruik willen maken van de gegevens van het Kadaster en met welke andere gegevens de Kadastergegevens meestal worden gecombineerd bij het beantwoorden van ruimtelijke vragen.

De features in de visie van het Kadaster voor self-service GIS, zijn ook afhankelijk van de technologische mogelijkheden en toekomstvisie voor het Kadaster als geheel.

## Technologische benadering
Om de technologische benadering van deze use case te ontwerpen, moeten we eerst onderzoeken welke self-service tooling en ervaringen momenteel beschikbaar zijn, als een manier om inspiratie op te doen voor een Kadaster-specifieke self-service GIS. Ons onderzoek brengt ons verder dan GIS specifieke tooling en kijkt ook naar andere voorbeelden van data exploration en browsing tooling opties die geen geovisualisatie mogelijkheden hebben, maar die wel interessante features hebben, die kunnen worden geïntegreerd in een self-service GIS.

De tooling voorbeelden zijn onderverdeeld in drie hieronder genoemde categorieën. Waar mogelijk zijn voorbeelden voor elke categorie opgenomen om de functionaliteiten die voor ons onderzoek van belang zijn, te demonstreren.

### Data Browsers en Viewers

Hieronder volgen voorbeelden van browsers en viewers die door het Kadaster zijn ontwikkeld voor het browsen en bekijken van Linked Data. Deze drie voorbeelden benadrukken de reeks visualisatie- en interactiefuncties die beschikbaar zijn voor de eindgebruiker voor het bladeren door gegevens.

<div class="cards-wrapper">
  <a href="http://vowl.visualdataweb.org/ldvowl/#/graph?endpointURL=https:%2F%2Fapi.labs.kadaster.nl%2Fdatasets%2Fkadaster%2Fbag%2Fservices%2Fbag%2Fsparql">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/ld-vowl.png" alt="Linked data vowl">
      <div class="card-title">LD-VOWL</div>
      <div class="card-description">Het datamodel van de Basisregistratie Adressen en Gebouwen (BAG) in de online visualisatietool LD-VOWL.</div>
	</div>
  </a>
  <a href="/demonstrators/graph-browser/ontodia-knowledge-graph">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge graph">
      <div class="card-title">Kadaster's Knowledge Graph</div>
      <div class="card-description">Beweeg door alle Linked Data die wij integraal ontsluiten en ontdek relaties tussen de verschillende bronnen.</div>
	</div>
  </a>
  <a href="/demonstrators/graph-browser/namen-app">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/namen-app-tegel-image.png" alt="Screenshot Toponamenzoeker">
      <div class="card-title">Toponamenzoeker</div>
      <div class="card-description">In de toponamenzoeker kun je zoeken op alle namen die in de topografische bestanden en kaarten van het Kadaster aanwezig zijn.</div>
	</div>
  </a>
</div>
  
### Analytics Dashboards

Hieronder volgen voorbeelden van meer geavanceerde toolingvoorbeelden of dashboards die de gebruiker een bepaald niveau van analytische functionaliteit bieden.

#### Voyager

Het eerste voorbeeld is een korte gebruikssessie van gegevens uit deze case die in een Business Intelligence-tool zijn geladen. Het belang van deze demonstratie voor self-service GIS zijn de functies die deze tool de gebruiker biedt voor data-interactie. Deze omvatten grafiekvisualisatie, tijdvelden en filtering.

<figure id="1">
  <video controls loop poster="/assets/images/voyager.png" width="1200">
	<source src="/assets/videos/voyager.webm" type="video/webm">
		Helaas, uw browser kan deze webm video niet weergeven.
	</source>
  </video>
  <figcaption>
	Figuur 1 ― Demonstratie van het gebruik van een Linked Data selectie binnen een Business Intelligence (BI) tool (<a href="https://vega.github.io/voyager/" target="_blank">Voyager</a>).
  </figcaption>
</figure>

#### Gruff

Het tweede voorbeeld toont het bladeren en opvragen van BAG-gegevens binnen Gruff, een tool die het bladeren door Knowledge Graphs (Linked Data) en de analyse van bedrijfsgegevens ondersteunt. De interessante functie voor self-service GIS is de grafische query-editor.

<figure id="2">
  <video controls loop poster="/assets/images/gruff.png" width="1200">
    <source src="/assets/videos/gruff.webm" type="video/webm">
      Helaas, uw browser kan deze webm video niet weergeven.
    </source>
  </video>
  <figcaption>
    Figuur 2 ― Demonstratie van het gebruik van de BAG dataset binnen een Graphical Browser en Querying Tool (<a href="https://allegrograph.com/products/gruff/" target="_blank">Gruff</a>).
  </figcaption>
 </figure>
 
### Querying Interfaces
Er is een reeks SPARQL-clients beschikbaar voor de end user voor het opvragen van Linked Data. We laten het gebruik van deze klanten het beste zien in onze Data Stories. Bekijk enkele van de onderstaande voorbeelden.

<div class="cards-wrapper">
  <a href="/stories/covid-19/">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/covid-19.jpg" alt="Weergave Covid-19 virus">
      <div class="card-title">Corona (COVID-19) Data Story</div>
      <div class="card-description">Deze Data Story geeft een overzicht van de Nederlandse Corona statistieken in combinatie met Kadaster data.</div>
	</div>
  </a>
  <a href="/stories/digitaal-erfgoed/index.html">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/Lisse_logo_tile.jpg" alt="Lisse logo">
      <div class="card-title">Digital Heritage</div>
      <div class="card-description">Een Data Story over Oud Lisse gemaakt door de PLDN werkgroep Digitaal Erfgoed.</div>
	</div>
  </a>
  <a href="/stories/pdok-knowledge-graph/index.html">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/pdok-logo-text.png" alt="PDOK logo">
      <div class="card-title">PDOK Knowledge Graph</div>
      <div class="card-description">In deze Data Story bevragen we combinaties van datasets. Hiermee laten we de toegevoegde waarde van een Knowledge Graph zien.</div>
	</div>
  </a>
</div>


## Bereiken Self Service GIS 

Bij het Kadaster werken we aan de ontwikkeling van onze Knowledge Graph door de gegevens die we bijhouden te integreren in één bron. Met deze centrale ontsluiting, zou onze self-service GIS onze gebruikers gemakkelijker toegang kunnen geven tot al onze datasets tegelijk en in realtime; het verbeteren van de toegankelijkheid tot- en betrokkenheid bij geospatiale en niet-ruimtelijke gegevens voor onze gebruikers.

<figure id="3">
	<a href="/assets/images/self-serviceGISarchitecture.jpg">
		<img src="/assets/images/self-serviceGISarchitecture.jpg" alt="Self-service GIS architectuur">
	</a>
  <figcaption>
    Figuur 3 ― Self-Service GIS Architectuur. 
  </figcaption>
 </figure>

## Het Resultaat
Voor meer informatie over de voortgang van het Kadaster met het realiseren van selfservice GIS, zie <a href="/cases/SelfServiceGISPortal">onze voortgangspagina.</a>
