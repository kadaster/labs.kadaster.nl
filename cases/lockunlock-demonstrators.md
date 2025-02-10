---
layout: page
title: Lock - Unlock
---
# Lock-Unlock: Autorisatie op Linked Data

## Twee Aanpakken

### SPARQL Rewrite Demonstrator
Sparql-rewrite in de locked/unlocked context is een techniek om een bestaande sparql query te transformeren naar een nieuwe sparql query.Hierbij blijft de inhoudelijke vraag gelijk maar wordt ervoor gezorgd dat de query alleen voor de gebruiker toegankelijke data bevraagt. Aanpassingen in een triplestore is door deze aanpak niet nodig. In dit project is verkend in hoeverre deze techniek daadwerkelijk mogelijk, haalbaar en bruikbaar is.

### Subgraph Demonstrator 
Bij de subgraph methode wordt er eerst een selectie gemaakt van de data waar de gebruiker toegang toe heeft, waarna de gebruiker vrij queries kan uitvoeren op deze subgraph. Het voordeel van deze methode is de eenvoud waarmee gecontroleerd kan worden dat een gebruiker niet ongeoorloofd bij data kan, maar de schaalbaarheid van deze oplossing moet nog verder onderzocht worden. Deze demonstrator is enkel lokaal beschikbaar gemaakt en is derhalve niet online terug te vinden.

## Demonstrators

<div class="cards-wrapper">
<a href="https://labs.kadaster.nl/demonstrators/unlocked/demonstrator/">
  <div class="card">
    <div class="card-type">Demonstrators</div>
    <img class="card-image" src="/assets/images/lockunlock.jpg">
    <div class="card-title">SPARQL Rewrite Demonstrator</div>
    <div class="card-description">Deze demonstrator beveiligt gegevens op basis van herschrijven SPARQL-query's op basis van gedefinieerde gebruikersautorisaties.</div>
  </div>
</a>

</div>

## Documentatie
Bezoek deze [pagina](https://kadaster-labs.github.io/lock-unlock-docs/) en de [Github repo](https://github.com/kadaster-labs/lock-unlock-docs) om de volledige documentatie van beide aanpakken te lezen. 
