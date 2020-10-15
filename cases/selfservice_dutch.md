---
layout: page
title: Self Service Tooling	
---

# Use Case: Self Service GIS - Een Visie

For the english version, see <a href="/cases/selfservice_eng">the english version here</a>.

## Introductie
Het strategische meerjarenplan van het Kadaster is bedoeld om ‘geo-informatie voor iedereen’ te bieden, om het beantwoorden van de meest relevante maatschappelijke vragen te ondersteunen. Hoewel we veel van de data die we momenteel hebben in een voor ontwikkelaars goed bruikbaar technisch format kunnen aanbieden, zal het beschikbaar stellen van data in andere formats en via andere middelen een breder scala aan gebruikers toegang geven om de data van het Kadaster te gebruiken.

Onze langetermijnstrategie is om burgers de mogelijkheid te bieden om zowel kadastergegevens als gegevens uit andere (open) bronnen te gebruiken, zodat gebruikers de gegevens van Kadaster gemakkelijk kunnen verkennen en deze kunnen combineren met hun eigen gegevens en voor ruimtelijke analyses van een bepaald niveau die gemakkelijk online kunnen worden uitgevoerd.  Dit brengt de gegevens dichter bij de gebruiker, waardoor klanten zelf antwoorden op hun vragen kunnen vinden.

Een oplossing hiervoor, die het meest van toepassing is op de strategie van Kadaster, is het gebruik van webtechnologieën om deze "self-service" tool naar de eindgebruikers van het Kadaster te brengen in de vorm van een interactieve web mapping interface of web GIS.  De volgende pagina geeft enig inzicht in hoe "self-service GIS" kan worden bereikt binnen Kadaster.

## Doelgroep
Het doel van de ontwikkeling van deze self-service tool is om de betrokken gebruiker en actieve burger te voorzien van de middelen om ruimtelijke analyse uit te voeren, als ze proberen om een vraag te beantwoorden. Tot deze gebruikersgroep kan bijvoorbeeld een data- of onderzoeksjournalist behoren, die op zoek is naar een gedragspatroon, een potentiële nieuwe huiseigenaar die op zoek is naar milieu-informatie over zijn nieuwe woning of een lid van een woningcorporatie die de criminaliteit in zijn buurt wil onderzoeken.

Deze gebruikersgroep is doorgaans niet goed thuis in de technische fijne kneepjes van ruimtelijke analyse van de mogelijkheden van GIS, maar is gewoon geïnteresseerd in het gebruik van een combinatie van door het Kadaster verstrekte gegevens en de gegevens van andere aanbieders of hun eigen gegevens om een bepaalde ruimtelijke vraag, die ruimtelijke analysefunctionaliteit vereist, te beantwoorden.

## Wat zijn de kenmerken van Self-Service GIS?
<div class="textbox" markdown="1">
## Self-Service GIS defined
Esri, de toonaangevende commerciële leverancier van geospatiale software en clouddiensten voor geo-informatie, definieert self-service GIS als een uitbreiding op de typische functionaliteit die binnen een web GIS wordt gevonden.  Over het algemeen is een self-service GIS een applicatie die een gemakkelijke interactie door de gebruiker en eenvoudige analyse van georuimtelijke gegevens via webgebaseerde geografische toepassingen, mogelijk maakt.
</div>

Bij het bedienen van de bovengenoemde gebruikersgroep, wordt de vraag gesteld wat de features zijn van self-service GIS. Deze features kunnen zowel de functionaliteit bevatten, die beschikbaar moet zijn voor de gebruiker in de toepassing vanuit het perspectief van de gebruikersinterface, als ook welke gegevens of welke functies van deze gegevens beschikbaar moeten zijn voor de gebruiker in de webtoepassing.  Om te bepalen wat de features van self-service GIS zijn voor het doel en de doelgroep van het Kadaster, kijken we naar onze klanten om te zien welke features nuttig kunnen zijn.

Een analyse van welke ruimtelijke vragen de klanten van het Kadaster stellen, wordt uitgevoerd als onderdeel van een interne analyse van de gebruikersbehoeften. Welke vragen worden gesteld, zal benadrukken welke functionaliteit nuttig kan zijn voor de gebruikers in een selfservice GIS-toepassing.  Het geeft ook inzicht in hoe gebruikers gebruik willen maken van de gegevens van het Kadaster en met welke andere gegevens de Kadastergegevens meestal worden gecombineerd bij het beantwoorden van ruimtelijke vragen.

De features in de visie van het Kadaster voor self-service GIS, zijn ook afhankelijk van de technologische mogelijkheden en toekomstvisie voor het Kadaster als geheel.

## Technologische benadering
Om de technologische benadering van deze use case te ontwerpen, moeten we eerst onderzoeken welke self-service tooling en ervaringen momenteel beschikbaar zijn, als een manier om inspiratie op te doen voor een Kadaster-specifieke self-service GIS. Ons onderzoek brengt ons verder dan GIS specifieke tooling en kijkt ook naar andere voorbeelden van data exploration en browsing tooling opties die geen geovisualisatie mogelijkheden hebben, maar die wel interessante features hebben, die kunnen worden geïntegreerd in een self-service GIS.

De tooling voorbeelden zijn onderverdeeld in drie hieronder genoemde categorieën. Waar mogelijk zijn voorbeelden voor elke categorie opgenomen om de functionaliteiten die voor ons onderzoek van belang zijn, te demonstreren.

*the following is a work in progress

### Data Browsers en Viewers

<div class="cards-wrapper">
  <a href="/browsers/bevolking/">
    <div class="card">
      <div class="card-type">Browser</div>
      <img class="card-image" src="/assets/images/cbs-lod.png">
      <div class="card-title">CBS Bevolking Data Browser</div>
      <div class="card-description">Met de populatiebrowser kunnen Nederlandse gemeenten, wijken en buurten worden doorzocht op basis van bevolkingsstatistieken.</div>
    </div>
  </a>
    <a href="http://vowl.visualdataweb.org/ldvowl/#/graph?endpointURL=https:%2F%2Fapi.labs.kadaster.nl%2Fdatasets%2Fkadaster%2Fbag%2Fservices%2Fbag%2Fsparql">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/ld-vowl.png">
      <div class="card-title">LD-VOWL</div>
      <div class="card-description">Het datamodel van de Basisregistratie Adressen en Gebouwen (BAG) in de online visualisatietool LD-VOWL.</div>
	</div>
  </a>
</div>
  
### Analytics Dashboards

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

<!-- 
TODO: Fix .webm file later.
<figure id="2">
  <video controls loop poster="/assets/images/gruff.png" width="1200">
    <source src="/assets/videos/gruff_bag.mp4" type="video/mp4">
      Helaas, uw browser kan deze webm video niet weergeven.
    </source>
  </video>
  <figcaption>
    Figuur 2 ― Demonstratie van het gebruik van de BAG-dataset binnen een grafische browser en querytool (<a href="https://allegrograph.com/products/gruff/" target="_blank">Gruff</a>).
  </figcaption>
</figure>
 -->
 
### Querying Interfaces
Work in Progress..

## Self-Service GIS Architecture
Work in Progress..

## Het Resultaat
Work in Progress..