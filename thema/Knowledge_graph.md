---
layout: page
title: Kadaster Knowledge Graph
---

<link rel="stylesheet" href="/assets/css/developer.css">

# Kadaster Knowledge Graph
De oppervlakte van een gebouw wordt in de Basisregistratie Adressen en Gebouwen (BAG) opgeslagen. Dat gebouw staat op een perceel, en dat perceel heeft ook een oppervlakte, maar die wordt in Basisregistratie Kadaster (BRK) opgeslagen. In de Kadaster Knowledge Graph zijn deze, en heel veel andere, gegevens met elkaar verbonden. Voor deze verbindingen (of ‘links’) wordt linked data gebruikt. Linked data is een ecosysteem van nationale en internationale open standaarden en de Kadaster Knowledge Graph maakt gebruik van linked data standaarden, en kan door ontwikkelaars met de SPARQL bevragingstaal gebruikt worden. Op deze pagina vindt u informatie over de Kadaster Knowledge Graph.

## Buttons/Tegels: Data Model, SPARQL Editor, Developers
Kunnen we alsjeblieft drie verschillende knoppen of tegels maken:
1. data model met een link naar weaver: https://kadaster.wvr.io/kadaster-knowledge-graph?branch=main&tab=home 
2. SPARQL editor met een link naar: https://data.labs.kadaster.nl/dst/kkg/sparql/default
3. Developers met een link naar: https://labs.kadaster.nl/developer

## Bronnen en Actualiteit
De Kadaster Knowledge Graph bevat gegevens afkomstig uit verschillende open data bronnen. De gegevens in de Kadaster Knowledge Graph worden regelmatig ververst. Op dit moment 4 keer per jaar.

- De Landelijke Voorziening van de Basisregistratie Adressen en Gebouwen (BAG).
- De Landelijke Voorziening van de Basisregistratie Grootschalige Topografie (BGT).
- De Top10NL van de Basisregistratie Topografie (BRT).
- Het open deel van de Basisregistratie Kadaster (BRK).
- De Publiekrechtelijke Beperkingen (PB).

Voor een compleet overzicht van alle onderliggende datasets en toegang tot hun respectievelijke endpoints, bezoek de volgende pagina: [linked data bronnen overzicht](https://labs.kadaster.nl/developer/sparql/)

De data die beschikbaar wordt gesteld op een regelmatige basis ververst. Hieronder vindt u een overzicht van hoe vaak de gegevenssets worden vernieuwd en wanneer de laatste update is uitgevoerd:

<div class="textbox" markdown="1">
## Actualiteit van databronnen

- **Basisregistratie Adressen en Gebouwen** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-05-20*.
- **Basisregistratie Grootschalige Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-07-13*.
- **Basisregistratie Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-07-13*.
- **Digitale Kadastrale Kaart** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-01-14*.
- **Basisregistratie Kadaster - Publieksrechtelijke Beperkingen** (geen reguliere vernieuwing) - *Laatst vernieuwd met data van 2021-03-16*.
- **Basisregistratie Kadaster - BRK Adressen (koppeling BRK-BAG)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-05-04*.
- **CBS Wijk- en buurtkaart** (jaarlijks vernieuwd) - *Laatst vernieuwd met data van 2019-11-01*.

De Kadaster Knowledge Graph maakt gebruik van deze datasets en is daarmee qua actualiteit een afgeleide van bovenstaande sets. Voor een compleet overzicht van alle onderliggende datasets en toegang tot hun respectievelijke endpoints werwijzen we de gebruiker naar onze [developer portaal](/developer/sparql/). Voor use cases en data stories specifiek voor een specifiek datasets verwijzen we de gebruiker naar [onze data pagina](/data/).

</div>

Specifieke details over de wijzigingen tussen leveringen kunnen worden geraadpleegd vanuit de individuele dataset pagina's. Vaak betreft dit kleine quality-of-life verbeteringen of fixes op basis van observaties van gebruikers.

## Demonstrators
Voeg de volgende demonstranten toe (deze staat nu in de Linked Data Thema pagina maar moet echter hier komen):
1. AR applicatie
2. Gruff
3. GeoDataVisitor
4. Objectviewer
5. Sparklis

Laten we dit van de pagina met gekoppelde gegevens verwijderen. 

## Use cases

De Kadaster Knowledge Graph wordt gebruikt in een toenemend aantal use
cases, waarmee gegevens op een nieuwe manier gekoppeld, bevraagd, en
inzichtelijk gemaakt worden.

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/planologen-per-buurt">
    <div class="card">
      <div class="card-type">Ruimtelijke ordening</div>
      <img class="card-image" src="/assets/images/planologen-screenshot.PNG">
      <div class="card-description">Planologen en stedenbouwers houden zich bezig met wat mensen waar kunnen doen en hoe dat kan veranderen.</div>
    </div>
  </a>
    <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/nutsbedrijven">
    <div class="card">
      <div class="card-type">Nutsbedrijven</div>
      <img class="card-image" src="/assets/images/elektriciteitsmast.PNG">
      <div class="card-description">De nutsbedrijven staan voor grote uitdagingen om hun netten in een steeds voller wordende gebouwde omgeving in te passen.</div>
    </div>
  </a>
  <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/openbare-orde-en-veiligheid">
    <div class="card">
      <div class="card-type">Openbare orde en veiligheid</div>
      <img class="card-image" src="/assets/images/BRK.jpg" alt="BRK">
      <div class="card-description">Bekijk hier hoe we geodata inzetten ten behoeve van het verbeteren van de openbare orde & veiligheid.</div>
    </div>
  </a>
    <!-- <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/Kwaliteitstoezicht-en-Handhaving">
    <div class="card">
      <div class="card-type">Kwaliteitstoezicht & Handhaving</div>
      <img class="card-image" src="/assets/images/bag-bgt-tooltip.PNG" alt="BAG-BGT kwaliteit">
      <div class="card-description">Bekijk hier hoe we de iGO kunnen inzetten tbv kwaliteitsverbetering van de geobasisregistraties</div>
    </div>
  </a> -->
  <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/beheer-openbare-ruimte">
    <div class="card">
      <div class="card-type">Beheer Openbare Ruimte</div>
      <img class="card-image" src="/assets/images/story-bor.PNG" alt="Beheer Openbare Ruimte">
      <div class="card-description">Bekijk hier hoe we geodata inzetten ten behoeve van het verbeteren van het beheer openbare ruimte.</div>
    </div>
  </a>
    <a href="https://data.labs.kadaster.nl/dst/-/stories/algemene-queries-voor-kkg-gebruik">
    <div class="card">
      <div class="card-type">Ontwikkelaar</div>
      <img class="card-image" src="/assets/images/eerste-igo.PNG">
      <div class="card-description">Hoe gebruik ik als ontwikkelaar zelf de Knowledge Graph? En hoe stel ik mijn eerste query op?</div>
    </div>
  </a>
  <a href="/cases/integralegebruiksoplossing">
    <div class="card">
      <div class="card-type">Use Case</div>
      <img class="card-image" src="/assets/images/igo-design.PNG" alt="Integraal Bevragen">
      <div class="card-title">Integrale Gebruiksoplossing</div>
      <div class="card-description">In deze use case worden verschillende use cases gecombineerd naar een geheel dat meer waarde bied dan de som van zijn onderdelen</div>
    </div>
  </a>
</div>
