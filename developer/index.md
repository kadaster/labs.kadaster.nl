---
layout: page
title: Developer
---

<link rel="stylesheet" href="/assets/css/developer.css">

# Developer resources

Het Kadaster Data Science Team onderhoudt verscheidene services waarin de gegevens uit onze basisregistraties ontsloten kunnen worden. In de basis bieden wij Linked Data en GraphQL endpoints aan.

<br/>

<img class="developerpageIcon" src="/assets/images/linked-data_icon.png"> 
## Linked Data
Door linked data kunt u als developer datasets met elkaar verbinden. Bijvoorbeeld de dataset van de Basisregistratie Adressen en Gebouwen (BAG) met andere datasets. Omdat veel informatie via een adres gelinkt kan worden, leent de BAG zich hier goed voor. De querytaal van Linked Data heet SPARQL.

Voor meer informatie, kijk bij de <a href="/demonstrators/architectuur-selfservice/">Use Case: Aanpak en Architectuur van de (Kadaster) Knowledge Graph</a>

Klik <a href="/dissemination/Kadaster-SPARQL-Tutorial.html">hier</a> voor een SPARQL Tutorial en <a href="/dissemination/Kadaster-SPARQL-Webinar.html">hier</a> voor een SPARQL Webinar.

<img class="developerpageIcon" src="/assets/images/graphql_icon.svg">
## GraphQL
Met GraphQL ondervangen we een aantal vaak gestelde tekortkomingen van de services die we op onze basisregistraties leveren. De levering van data is vraaggestuurd in plaats van aanbodgestuurd, en daardoor kan de data beter op de gebruiker worden aangeboden. Verschillende datasets kunnen met een administratieve connectie integraal bevraagd worden.

Download <a href="/assets/pdf/20210510 GraphQL Tutorial.pdf">hier</a> een tutorial (PDF) van het gebruik van GraphQL.

Voor meer informatie, kijk bij de <a href="/cases/graphql-endpoint">Use Case: GraphQL Open endpoint</a>    

<br/>

<div class="endpointContainer mobileHidden">
    <div>Name:</div>
    <div>Endpoint:</div>
    <div></div>
    <div></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
        <div>
            <div class="endpointContainerTitle_maintext">BAG</div>
            <div class="endpointContainerTitle_subtext">Basisregistratie Adressen en Gebouwen</div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://bag2.basisregistraties.overheid.nl/sparql">https://bag2.basisregistraties.overheid.nl/sparql</a></div>
    <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/bag2-0">Data Model</a></div>
    <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/bag2/sparql/default">Sandbox</a></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
        <div>
            <div class="endpointContainerTitle_maintext">BGT</div>
            <div class="endpointContainerTitle_subtext">Basisregistratie Grootschalige Topografie</div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://bgt.basisregistraties.overheid.nl/sparql">https://bgt.basisregistraties.overheid.nl/sparql</a></div>
    <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/bgt">Data Model</a></div>
    <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/bgt/sparql/bgt">Sandbox</a></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
        <div>
            <div class="endpointContainerTitle_maintext">BRT</div>
            <div class="endpointContainerTitle_subtext">Basisregistratie Topografie</div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql">https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql</a></div>
    <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/brt-ld">Data Model</a></div>
    <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/brt-2/sparql/brt">Sandbox</a></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
        <div>
            <div class="endpointContainerTitle_maintext">CBS KWB</div>
            <div class="endpointContainerTitle_subtext">CBS Kerncijfers Wijken- en Buurten</div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/cbs/wbk/services/wbk/sparql">https://api.labs.kadaster.nl/datasets/cbs/wbk/services/wbk/sparql</a></div>
    <div class="endpointContainer_center">Data Model WIP</div>
    <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/cbs/wbk/sparql/wbk">Sandbox</a></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
        <div>
            <div class="endpointContainerTitle_maintext">KG</div>
            <div class="endpointContainerTitle_subtext">Knowledge Graph</div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql">https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql</a></div>
    <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/sdo-target-model/home">Data Model</a></div>
    <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/kg/sparql/default">Sandbox</a></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/graphql_icon.svg">
        <div>
            <div class="endpointContainerTitle_maintext">GraphQL</div>
            <div class="endpointContainerTitle_subtext">Open databronnen van het Kadaster</div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://labs.kadaster.nl/gateway/graphql">https://labs.kadaster.nl/haalcentraalanalyse</a></div>
    <div class="endpointContainer_center"><a href="https://labs.kadaster.nl/cases/graphql-endpoint#graphql-introspection">Data Model WIP</a></div>
    <!-- previous Data Model was reached on https://labs.kadaster.nl/voyager but is currently disabled -->
    <div class="endpointContainer_center"><a href="https://labs.kadaster.nl/haalcentraalanalyse">Sandbox</a></div>
</div>
