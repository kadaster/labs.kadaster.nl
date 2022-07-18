---
layout: page
title: Use Case ― BRT-LD Basisregistratie Topografie als Linked Data
---

# NEN Hackathon 2022: Resultaten

# Introductie
De [NEN Hackathon 2022](https://www.nen.nl/hackathon), is een tweedaags evenement met teams uit binnen- en buitenland, georganiseerd door NEN (Stichting Koninklijk Nederlands Normalisatie Instituut). Doel van de NEN Hackaton 2022 is nieuwe en innovatieve manieren te vinden om slim gebruik te maken van de gegevens van NEN, om de ambitie waar te maken om gebruikers van standaarden in staat te stellen eenvoudig de juiste informatie voor de juiste situatie te vinden en te integreren.

Het Kadaster Data Science Team heeft deelgenomen aan de hackathon met als idee een generieke oplossing te ontwikkelen om de doorzoekbaarheid en vindbaarheid van NEN-normen te optimaliseren. Daarmee kunnen we gebruikers ondersteunen bij het vinden en gebruiken van de juiste normgegevens voor hun situatie. De oplossing van het Kadaster Datascience Team is volledig gebaseerd op de principes van open standaarden en Linked Data en heeft twee verschillende oplossingen opgeleverd.

De eindpresentatie van het Kadaster team is te vinden onder [deze link](https://docs.google.com/presentation/d/15pJ9hKdr6RZOW4lX6TLxtOti8ndvFEiIZonsboEhFeA/edit#slide=id.p1).

## Oplossing 1: Serendipity Search

De eerste oplossing die voor de hackathon is ontwikkeld, is gebaseerd op het concept van 'serendipity search', een deel van semantic search functionaliteit, waarbij een gebruiker simpelweg de beschikbaarheid van normen en standaarden verkent die bij een bepaalde term horen. Dit is gebaseerd op getagde termen of trefwoorden die zijn gedefinieerd in een bepaalde norm of standaard en maakt het mogelijk een verband te leggen tussen normen die een gemeenschappelijke tag of trefwoord delen. Deze oplossing is ontwikkeld om een gebruiker te ondersteunen bij het verkennen van de beschikbaarheid van normen over een bepaald onderwerp, maar kent niet noodzakelijk een specifieke norm bij het begin. Deze oplossing is zowel gedemonstreerd in de Weaver-omgeving waar gebruikers kunnen zoeken op termen of interactie met de grafiek om bijbehorende normen te vinden op basis van trefwoorden of thema's, als in de Serendipity Search data story die beschikbaar is via de onderstaande link.

<div class="cards-wrapper">
  <a href="https://kadaster.wvr.io/nen-hackathon-22?branch=main&tab=home">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/nen-serendipity.jpg" alt="NEN Serendipity Search">
      <div class="card-title">Weaver: Serendipity Search</div>
      <div class="card-description">Live Weaver demonstrator voor de eerste oplossing ontwikkeld voor de NEN hackathon</div>
    </div>
  </a>
    <a href="https://data.labs.kadaster.nl/nen/-/stories/semantic-search">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/network.jpg" alt="Network">
      <div class="card-title">Semantic Search met NEN Metadata</div>
      <div class="card-description">Deze data story maakt gebruik van de linked NEN-normmetadata en laat zien hoe deze gebruikt kan worden voor semantische zoekfunctionaliteit.</div>
    </div>
  </a>
</div>

## Oplossing 2: Recommender System

De tweede oplossing is een "Recommender System" die de gebruiker ondersteunt bij het vinden van normen die samenhangen met een reeds bekende norm. In vergelijking met de eerste oplossing ondersteunt deze oplossing een gebruiker die al bekend is met een bepaalde norm bij het vinden van andere normen die qua inhoud ook relevant kunnen zijn voor de gebruiker in kwestie; een oplossing die erg lijkt op de aanbevelingen van bol.com voor 'Ook andere klanten kochten'. Deze oplossing is ontwikkeld door verschillende SPARQL-query's uit te voeren op de gekoppelde data-inhoud van NEN-normen, die beschikbaar zijn gesteld als onderdeel van de hackathon. Deze oplossing wordt gedemonstreerd in de "Recommender System" data story dat beschikbaar is via de onderstaande link. 

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/nen/-/stories/recommender-system">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/network.jpg" alt="NEN Serendipity Search">
      <div class="card-title">Recommender System met Open Standards</div>
      <div class="card-description">Demonstratie van de recommender system ontwikkeld als onderdeel van de NEN Hackathon 2022.</div>
    </div>
    </a>
</div>

## Data en SPARQL Endpoint

De onbewerkte linked data en het SPARQL-endpoint voor deze gegevens zijn beschikbaar via de onderstaande link.

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/nen/catalog">
    <div class="card">
      <div class="card-type">Dataset</div>
      <img class="card-image" src="/assets/images/nen-logo.webp" alt="NEN logo">
      <div class="card-title">NEN Catalog als Linked Data</div>
      <div class="card-description">De NEN-dataset die gebruikt is voor de hackathon, beschikbaar als Linked Data.</div>
    </div>
  </a>
  <a href="https://data.labs.kadaster.nl/nen/catalog/sparql/default">
    <div class="card">
      <div class="card-type">Endpoint</div>
      <img class="card-image" src="/assets/images/sparql-nen.png" alt="SPARQL Endpoint">
      <div class="card-title">SPARQL Endpoint</div>
      <div class="card-description">Het SPARQL endpoint van de NEN Hackathon data.</div>
    </div>
  </a>
</div>
