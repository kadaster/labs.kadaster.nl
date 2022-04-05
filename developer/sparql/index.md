---
layout: page
title: Developer
---

<link rel="stylesheet" href="/assets/css/developer.css">

Ga naar <https://labs.kadaster.nl/sparql> voor de publieke Kadaster SPARQL endpoint.

# Developer resources

Het Kadaster Data Science Team onderhoudt verscheidene services waarin de gegevens uit onze basisregistraties ontsloten kunnen worden. Op deze pagina is de verdere toelichting bij het gebruik van Linked Data (SPARQL) uitgewerkt.

<br/>

<img class="developerpageIcon" src="/assets/images/linked-data_icon.png"> 
## Linked Data (SPARQL)
Door linked data kunt u als developer datasets met elkaar verbinden. Bijvoorbeeld de dataset van de Basisregistratie Adressen en Gebouwen (BAG) met andere datasets. Omdat veel informatie via een adres gelinkt kan worden, leent de BAG zich hier goed voor. De querytaal van Linked Data heet SPARQL. SPARQL is een RDF-zoektaal (querytaal) die gebruikt wordt om RDF-gebaseerde data te bevragen door middel van zoekopdrachten (queries). Met deze zoektaal is het mogelijk om informatie op te vragen voor applicaties op het semantisch web. Onderaan deze pagina vindt u een link naar een tutorial om stapsgewijs je eerste SPARQL query op te stellen.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- [Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI)
- [Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph)
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)

</div>

Op 26 augustus 2021 heeft er een workshop plaatsgevonden specifiek voor de developers die gebruik kunnen maken van de data in de [Integrale Gebruiksoplossing](/cases/integralegebruiksoplossing). Deze sessie is opgenomen. Meer informatie en een link naar de video kun je vinden op [deze link](https://www.geobasisregistraties.nl/basisregistraties/documenten/publicatie/2021/08/26/integrale-gebruiksoplossing-workshop-voor-developers).

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

- **Basisadministratie Adressen en Gebouwen** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2021-07-08*.
- **Basisadministratie Grootschalige Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-01-18*.
- **Basisregistratie Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2021-02-24*.
- **Digitale Kadastrale Kaart** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-01-14*.
- **Basisregistratie Kadaster - Publieksrechtelijke Beperkingen** (geen reguliere vernieuwing) - *Laatst vernieuwd met data van 2021-03-16*.
- **Basisregistratie Kadaster - BRK Adressen (koppeling BRK-BAG)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2021-10-07*.
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
