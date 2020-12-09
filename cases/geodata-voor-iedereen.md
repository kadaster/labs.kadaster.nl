---
banner: /assets/images/geodataplein.PNG
layout: page
title: Kadaster GEO-Dataplein
---
# Use Case: Kadaster GEO-informatie voor iedereen

## Introductie

Kadaster is beheerder van veel GEO data en (GEO)basisregistraties. Vanuit deze rol en met gedegen expertise, willen wij als Kadaster inzicht
geven in de uitgangssituatie én in de ruimtelijke verbanden bij het zoeken naar oplossingen voor deze vraagstukken. Door data en informatie te koppelen, 
is een gedegen analyse mogelijk en ontstaan visuele (ruimtelijke) beelden die kunnen helpen bij besluitvorming.
De ambitie van het Kadaster is samengevat in het speerpunt **‘GEO informatie voor iedereen’**. Het past in de doelstelling
van het Kadaster om zich (verder) te ontwikkelen tot een sleutelspeler in de informatiewaarde keten voor publiek maatschappelijke vragen.

Het concept achter GEO informatie voor iedereen geven wij een concrete invulling middels een aantal demonstrators. Het Data Science Team van het Kadaster kreeg als opdracht mee
om middels twee demonstrators aan te tonen hoe een toekomstige manier van ontsluiting richting een eindgebruiker eruit kan zien en welke technische bouwstenen hiervoor nodig zijn.

<div class="cards-wrapper">
  <a href="/demonstrators/integrale-explorer/index.html">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/logoexplorer.PNG" alt="Integrale explorer logo">
      <div class="card-title">Integrale Explorer</div>
      <div class="card-description">Deze demonstrator laat zien hoe met een integrale data ontsluiting een volledig beeld van een object kan worden gerealiseerd.</div>
    </div>
  </a>
  <a href="/demonstrators/generiek-kwaliteitsdashboard/index.html">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/kwaliteits_dashboard_screenshot.PNG" alt="Screenshot kwaliteitsdashboard">
      <div class="card-title">Generiek Kwaliteitsdashboard</div>
      <div class="card-description">Deze demonstrator laat zien hoe een ge-uniformeerde data ontsluiting kunnen leiden tot verbeterde kwaliteit in de landelijke basisregistraties.</div>
    </div>
  </a>
</div>


## Demonstrators 

Concreet heeft het Data Science Team hierbij de volgende demonstrators opgeleverd:
1. **Integrale Explorer** - We maken het mogelijk om verschillende (basis)registraties integraal te bevragen op basis van een object (Adres, Pand, WOZ Object, etc.) welke als ingang voor de bevraging dient. De Integrale Explorer toont daarbij alle data die beschikbaar is in de API’s van de verschillende basisregistraties en richt zich hierbij ook nadrukkelijk op de data lineage; Waar komt de data vandaan en hoe is deze aan elkaar gekoppeld?
2. **Generiek Kwaliteitsdashboard** - Hierbij laten wij zien dat het mogelijk is om eenvoudig kwaliteitsanalyses uit te voeren over basisregistraties heen. We focussen ons hier op near real-time analyse waarbij de domeinkennis bij de gebruiker ligt in plaats van het IT systeem wat er achter zit.


**Hierbij moeten de demonstrators minstens aansluiten bij de volgende leidende principes van Kadaster omtrent data ontsluiting in de nieuwe situatie:**
-  De demonstrators worden gevoed door (samengestelde) APIs over de verschillende basisregistraties in scope.
-  De data waarover wordt gevisualiseerd en geanalyseerd blijft bij de bron. Voor deze toepassingen wordt geen kopie van de data gemaakt.
-  De demonstrators tonen een doorkijkje naar de toekomst vanuit de architectuur/back-end, maar richten zich primair op de toepassing en waarde voor de eindgebruiker. Het toont een voorbeelduitwerking van hoe het Kadaster zijn data in de toekomst kan organiseren.

<figure id="figuur-1">
  <a href="/assets/images/architectuur-platformstrategie.PNG">
    <img src="/assets/images/architectuur-platformstrategie.PNG" alt="Architectuur platformstrategie">
  </a>
  <figcaption>
    Figuur 1 ― Simpele architectuurplaat van de gemaakte demonstrators.
  </figcaption>
</figure>

<div class="textbox" markdown="1">
## Samengestelde API's / GraphQL

In de introductie spreken wij over samengestelde API's. Voor de demonstrators waarover gesproken wordt in deze use case betreft dit een samengestelde API op basis van de 
tooling GraphQL. Wil je meer weten over wat GraphQL precies inhoudt en wat de relatie is met andere bekende data-ontsluitingstechnieken zoals REST en Linked Data, neem dan contact met ons op! 
We delen graag onze visie op dit stuk.
</div>
