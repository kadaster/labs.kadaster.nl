---
layout: page
title: Knowledge Graph
---

# Knowledge Graph

Kadaster publiceert een groot aantal door haar beheerde open
databronnen op een geïntegreerde en gestandaardiseerde manier.

De Kadaster Kennisgraaf bevat de volgende open data bronnen:

- Basisregistratie Adressen en Gebouwen
- Basisregistratie Grootschalige Topografie
- Basisregistratie Topografie (Top10NL)
- Basisregistratie Kadaster (open deel)
- Publiekrechtelijke beperkingen

De Kadaster Kennisgraaf maakt gebruik van linked data standaarden, en
kan met de gestandaardiseerde SPARQL bevragingstaal bevraagd worden.

<img class="developerpageIcon" src="/assets/images/linked-data_icon.png"> 
## Wat is linked data?

De oppervlakte van een gebouw wordt in de Basisregistratie Adressen en
Gebouwen (BAG) opgeslagen.  Dat gebouw staat op een perceel, en dat
perceel heeft ook een oppervlakte, maar die wordt in Basisregistratie
Kadaster (BRK) opgeslagen.

In de Kadaster Kennisgraaf zijn deze, en heel veel andere, gegevens
met elkaar verbonden.  Voor deze verbindingen (of ‘links’) wordt
linked data gebruikt.

Linked data is een ecosysteem van open standaarden.  Een van deze
standaarden betreft de SPARQL zoektaal.  Met SPARQL kunnen vragen aan
de Kadaster Kennisgraaf gesteld worden.

De SPARQL zoektaal kan worden gebruikt vanuit een [online
editor](#todo).  Het is ook mogelijk om SPARQL bevragingen vanuit een
script of applicatie te versturen.  Hierdoor kunnen ook applicaties
gebruik maken van de Kadaster Kennisgraaf.

Op deze pagina vindt u links naar verschillende tutorials om
stapsgewijs de eerste SPARQL bevraging zelf op te stellen en uit te
voeren.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- [Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - SPARQL bevragingstaal](/developer/sparql/tutorial/2-SPARQL)
- [Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph)
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)
</div>

<br/>

<div class="endpointContainer mobileHidden">
  <div><b>Name</b>:</div>
  <div><b>Endpoint</b>:</div>
  <div></div>
  <div></div>
  <div></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BAG</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/bag2/">Basisregistratie Adressen en Gebouwen</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://bag2.basisregistraties.overheid.nl/sparql">https://api.labs.kadaster.nl/datasets/kadaster/bag2/services/default/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/bag-ld">Use case</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/bag2-0">Data Model</a></div>
  <div class="endpointContainer_center"><a href="https://bag2.basisregistraties.overheid.nl/sparql">Sandbox</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BGT</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/bgt">Basisregistratie Grootschalige Topografie</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://bgt.basisregistraties.overheid.nl/sparql">https://api.labs.kadaster.nl/datasets/kadaster/bgt/services/bgt/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/bgt-ld">Use case</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/bgt">Data Model</a></div>
  <div class="endpointContainer_center"><a href="https://bgt.basisregistraties.overheid.nl/sparql">Sandbox</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BRK</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/brk">Basisregistratie Kadaster (open deel)</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://bgt.basisregistraties.overheid.nl/sparql">https://api.labs.kadaster.nl/datasets/kadaster/brk/services/brk/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/brk-ld">Use case</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/brk-pb/home">Data Model (WIP)</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/brk/sparql/default">Sandbox</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BRT</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/brt-2">Basisregistratie Topografie</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql">https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/brt-ld">Use case</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/brt-ld">Data Model</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/brt-2/sparql/brt">Sandbox</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">CBS KWB</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/cbs/wbk/">CBS Kerncijfers Wijken- en Buurten</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/cbs/wbk/services/wbk/sparql">https://api.labs.kadaster.nl/datasets/cbs/wbk/services/wbk/sparql</a></div>
  <div class="endpointContainer_center">-</div>
  <div class="endpointContainer_center">-</div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/cbs/wbk/sparql/wbk">Sandbox</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">KG</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/kg/">Knowledge Graph</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql">https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/igo/-/stories/user-story">Use case</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/kg-kadaster/home">Data Model</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/kg/sparql/default">Sandbox</a></div>
</div>

<div class="textbox" markdown="1">
## Actualiteit van databronnen

De data die beschikbaar wordt gesteld vanuit de Integrale Gebruiksoplossing wordt op een regelmatige basis ververst. Momenteel bevat de integrale gebruiksoplossing de volgende datasets:

- **Basisadministratie Adressen en Gebouwen** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-05-20*.
- **Basisadministratie Grootschalige Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-04-30*.
- **Basisregistratie Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-04-21*.
- **Digitale Kadastrale Kaart** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-01-14*.
- **Basisregistratie Kadaster - Publieksrechtelijke Beperkingen** (geen reguliere vernieuwing) - *Laatst vernieuwd met data van 2021-03-16*.
- **Basisregistratie Kadaster - BRK Adressen (koppeling BRK-BAG)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-05-04*.
- **CBS Wijk- en buurtkaart** (jaarlijks vernieuwd) - *Laatst vernieuwd met data van 2019-11-01*.

Specifieke details over de wijzigingen tussen leveringen kunnen worden geraadpleegd vanuit de individuele dataset pagina's. Vaak betreft dit kleine quality-of-life verbeteringen of fixes op basis van observaties van gebruikers.

De Kadaster Knowledge Graph (op basis van Schema.org) maakt gebruik van deze onderliggende datasets en is daarmee qua actualiteit een afgeleide van bovenstaande sets.
</div>

## Additionele resources

Om jullie als developer een beetje op weg te helpen stellen wij reeds een scala aan voorbeeld queries en andere resources beschikbaar die jullie kunnen helpen om snel met onze data aan de slag te gaan. Kijk daarom ook eens in de resources hieronder:

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/kadaster/-/stories/algemene-queries-voor-kg-gebruik">
    <div class="card">
      <div class="card-type">Data Story</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-description">In deze data story nemen we je aan de hand om je eerste SPARQL query op onze Knowledge Graph op te stellen!</div>
    </div>
  </a>
</div>
