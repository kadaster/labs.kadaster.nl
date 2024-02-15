---
layout: page
title: Lock - Unlock
---
# Lock-Unlock: Lock de Data, Unlock het Potentieel

## Project Achtergrond
Het Lock – Unlock project is uitgevoerd in opdracht van het [Federatief Datastelsel](https://realisatieibds.pleio.nl/cms/view/8852ee2a-a28a-4b91-9f3e-aab229bbe07f/federatief-datasysteem), programmaonderdeel van [Realisatie IBDS](https://realisatieibds.pleio.nl/). Binnen het Federatief Datastelsel is het kunnen delen van data uiteraard de kern, maar dit moet ook op een verantwoorde manier gebeuren, waarbij bescherming van data en autorisatie belangrijk zijn.

Lock-Unlock richt zich op Linked Data, voortbouwend op de [Integrale Gebruiksoplossing (IGO)](https://labs.kadaster.nl/cases/integraleutilizationsolution) en de [Kadaster Knowledge Graph (KKG)](https://labs.kadaster.nl/thema/Kennis_grafiek) ontwikkeld door het Kadaster. Er zijn weinig gestandaardiseerde mogelijkheden voor autorisatie van data in het Linked Data domein. Dit project is uitgevoerd om de (on)mogelijkheden te onderzoeken en te testen.

### Praatplaat
- Een federatief datastelsel betekent natuurlijk ook het federatief kunnen bevragen van de verschillende datasets. Dit bevragen is uitsluitend mogelijk via een API. Er zijn verschillende opties voor APIs, namelijk Rest API’s, GraphQL API's en SPARQL API's voor het bevragen van Linked Data. 
- Een belangrijk verschil tussen die verschillende opties is de “query vrijheid”: 
  - Bij REST API’s definieert de aanbieder wat je kan bevragen en hoe.
  - Bij GraphQL is in een hiërarchisch GraphQL schema vastgelegd hoe dat opgevraagd kan worden en met een GraphQL gateway kan dat zelfs over meerdere GraphQL endpoints. GraphQL is daarmee flexibeler dan REST API’s en maakt het mogelijk om integraal informatie beschikbaar te stellen.
  - Een SPARQL API is gebaseerd de mogelijkheden van Linked Data. In Linked Data is data expliciet voorzien van metadata zodat het duidelijk is wat elk element betekent. Dit is geen hiërarchisch schema, maar er kunnen vrije combinaties en relaties worden bevraagd. SPARQL is de query taal die dit 'vrij bevragen' mogelijk maakt en ondersteunt direct het bevragen van meerdere endpoints in samenhang vanuit een enkele bevraging (query).
-Binnen een federatief datastelsel zullen er ook gesloten/afgeschermde datasets zijn waardoor het kunnen afschermen van data en het autoriseren van gebruikers belangrijk is. Voor het Lock-Unlock project hebben we daarom een aantal requirements voor de autorisatie oplossingen opgesteld: het kunnen werken met horizontale (bijv. een specifieke regio) en verticale (bijv. wel/geen koopsom) subsets en het kunnen beperken van de richting waarlangs een query van element (node) naar element bevraagt. Tegelijkertijd willen we de vrije query mogelijkheden (de kracht van Linked Data) blijven ondersteunen.
- Op basis van die requirements zijn we tot het Autorisatie als Linked Data concept gekomen. Dit houdt in dat de autorisatie zelf als Linked Data wordt uitgedrukt. Daarvoor zijn twee onderdelen nodig: een autorisatie ontologie en een autorisatie configuratie. De autorisatie ontologie is een "woordenboek" welke de autorisatie terminologie bevat. Deze hebben wij gebaseerd op XACML. De autorisatie configuratie bevat de specifieke autorisatie regels voor een resource.
- Op basis hiervan zijn 2 implementaties bedacht en getest: de subset implementatie en de SPARQL rewrite implementatie.
  - Bij de subset methode wordt op basis van de autorisatie configuratie on demand een subset gecreëerd. Op deze subset wordt vervolgens de query van de gebruiker uitgevoerd.
  - Bij de SPARQL rewrite methode wordt de binnengekomen query gecontroleerd en herschreven (meestal uitgebreid) op basis van de autorisatie configuratie en vervolgens naar de onderliggende data gestuurd zodanig dat de resultaten worden beperkt tot de data waartoe de gebruiker toegang heeft.
  
<figure id="figuur-1">
  <a href="/assets/images/lockunlock-infographic.png">
    <img src="/assets/images/lockunlock-infographic.png">
  </a>
</figure>

## Resultaten

<div class="cards-wrapper">
<a href="https://data.labs.kadaster.nl/lock-unlock/-/stories/lock-unlock-personas">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/user-context-lock-unlock.png">
    <div class="card-title">Lock-Unlock Personas</div>
    <div class="card-description">De personas en use cases waarop deze project is gebouwd, worden hier in detail beschreven.</div>
  </div>
</a>
<a href="/cases/lockunlock-demonstrators">
  <div class="card">
    <div class="card-type">Demonstrators</div>
    <img class="card-image" src="/assets/images/lockunlock.jpg">
    <div class="card-title">Autorisatie Als Linked Data</div>
    <div class="card-description">Er zijn hier twee autorisatie-implementaties beschikbaar als demonstrators.</div>
  </div>
</a>
<a href=""> 
  <div class="card">
    <div class="card-type">Documentatie</div>
    <img class="card-image" src="/assets/images/coming-soon.png">
    <div class="card-title">Voor De Ontwikkelaars</div>
    <div class="card-description">We werken er hard aan om de resultaten van het project volledig te documenteren. Deze documentatie zal hier beschikbaar komen.</div>
  </div>
</a>
</div>

## Dissemintation
!TODO
- papers
- presentations (desk research?)
In oktober hebben we de [desk research](https://labs.kadaster.nl/assets/pdf/Lock Unlock - Desk Research Autorisatie v1.0 - 27102023 (1).pdf) naar autorisatie binnen Linked Data opgeleverd. Momenteel zijn we druk bezig met het daadwerkelijk implementeren en beproeven hiervan: stay posted!  
- videos 
- eind rapport

