---
layout: page
title: Use Case ― BRT-LD Basisregistratie Topografie als Linked Data
---

# NEN Hackathon 2022: Resultaten

# Introductie
De <a href='https://www.nen.nl/hackathon'>NEN Hackathon 2022</a>, een tweedaags evenement met teams uit binnen- en buitenland, werd georganiseerd door NEN (Stichting Koninklijk Nederlands Normalisatie Instituut) met als doel nieuwe en innovatieve manieren te vinden om slim gebruik te maken van de gegevens van NEN om de ambitie waar te maken om gebruikers van standaarden in staat te stellen eenvoudig de juiste informatie voor de juiste situatie te vinden en te integreren. Het Kadaster Data Science Team (DST) nam deel aan de hackathon met als doel een generieke oplossing te ontwikkelen om de doorzoekbaarheid en vindbaarheid van NEN-normen te optimaliseren met als doel gebruikers te ondersteunen bij het vinden en gebruiken van de juiste normgegevens voor hun situatie. De oplossing van het Kadasterteam is volledig gebaseerd op de principes van open standaarden en linked data en heeft twee opmerkelijke resultaten opgeleverd.

## Oplossing 1: Serendipity Search

De eerste oplossing die voor de hackathon werd ontwikkeld, was gebaseerd op het concept van 'serendipity search', een deel van semantic search functionaliteit, waarbij een gebruiker simpelweg de beschikbaarheid van normen en standaarden verkent die bij een bepaalde term horen. Deze associatie is gebaseerd op getagde termen of trefwoorden die zijn gedefinieerd of vervat in een bepaalde norm of standaard en maakt het mogelijk een verband te leggen tussen normen die een gemeenschappelijke tag of trefwoord delen. Deze oplossing is ontwikkeld om een gebruiker te ondersteunen bij het verkennen van de beschikbaarheid van normen over een bepaald onderwerp, maar kent niet noodzakelijk een specifieke norm bij het begin. Deze oplossing wordt zowel gedemonstreerd in de Weaver-omgeving waar gebruikers kunnen zoeken op termen of interactie met de grafiek om bijbehorende normen te vinden op basis van trefwoorden of thema's, als in het Serendipity Search data story dat beschikbaar is via de onderstaande link.

<div class="cards-wrapper">
  <a href="https://kadaster.wvr.io/nen-hackathon-22?branch=main&tab=home">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/nen-serendipity.jpg" alt="NEN Serendipity Search">
      <div class="card-title">Weaver: Serendipity Search</div>
      <div class="card-description">Live Weaver demonstrator voor de eerste oplossing geproduceerd voor de NEN hackathon</div>
    </div>
  </a>
    <a href="https://data.labs.kadaster.nl/nen/-/stories/semantic-search">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/network.jpg" alt="Network">
      <div class="card-title">Semantic Search met NEN Metadata</div>
      <div class="card-description">Dit data story maakt gebruik van de linked NEN-normmetadata en laat zien hoe deze effectief ingezet kan worden voor semantische zoekfunctionaliteit.</div>
    </div>
  </a>
</div>

## Oplossing 2: Recommender System

De tweede oplossing is een recommender system die de gebruiker ondersteunt bij het vinden van normen die samenhangen met een reeds bekende norm. In vergelijking met de eerste oplossing ondersteunt deze oplossing een gebruiker die al bekend is met een bepaalde norm bij het vinden van andere normen die inhoud delen en ook relevant kunnen zijn voor de gebruiker in kwestie; een oplossing die erg lijkt op de aanbevelingen van bol.com voor 'Ook andere klanten kochten'. Deze oplossing wordt geïmplementeerd door verschillende SPARQL-query's die worden uitgevoerd op de gekoppelde data-inhoud van NEN-normen die beschikbaar zijn gesteld als onderdeel van de hackathon. Deze oplossing wordt gedemonstreerd in het Recommender System data story dat beschikbaar is via de onderstaande link. 

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/nen/-/stories/recommendations">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/network.jpg" alt="NEN Serendipity Search">
      <div class="card-title">Recommender System met Open Standards</div>
      <div class="card-description">Demonstratie van de recommender system ontwikkeld als onderdeel van de NEN Hackathon 2022.</div>
    </div>
    </a>
</div>

## Data en SPARQL Endpoint

De onbewerkte linked data en het SPARQL-eindpunt voor deze gegevens zijn beschikbaar via de onderstaande tegel.

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
