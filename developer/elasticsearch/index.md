---
layout: page
title: Developer
---

<link rel="stylesheet" href="/assets/css/developer.css">

# Developer resources

Het Kadaster Data Science Team onderhoudt verscheidene services waarin de gegevens uit onze basisregistraties ontsloten kunnen worden. Op deze pagina is de verdere toelichting bij het gebruik van Elastic Search uitgewerkt.

<br/>

<img class="developerpageIcon" src="/assets/images/elastic-search-logo.png">
## Elastic Search
<br>
Elasticsearch maakt het mogelijk om op een laagdrempelige manier data op te vragen uit de databronnen of de integrale gebruiksoplossing. Hierbij is het mogelijk om te zoeken op adresgegevens zoals; postcode, straat en huisnummer en plaatsnaam. Tevens is het mogelijk om de zoekfunctionaliteit van Elastic Search te bevragen met namen vanuit de Basisregistratie Topografie (BRT), denk hierbij aan het zoeken naar bijvoorbeeld: "Paleis het Loo". Voor de resultaten vanuit Elastic Search wordt een "matching score" berekend met de zoektermen. De resultaten in Elastic Search worden aan de hand van deze score gesorteerd, waarbij de top 10 resultaten met de hoogste score boven aan verschijnen. Het endpoint voor Elastic search op de Knowledge Graph is hieronder te vinden.

<br/>

Klik <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-your-data.html">hier</a> voor een uitgebreide documentatie van Elastic Search.

<div class="endpointContainer mobileHidden">
    <div><b>Name</b>:</div>
    <div><b>Endpoint</b>:</div>
    <div></div>
    <div></div>
    <div></div>
</div>

<div class="endpointContainer">
    <div class="endpointContainer_title mobileSpan">
        <img class="endpointContainerTitle_image" src="/assets/images/elastic-search-logo.png">
        <div>
            <div class="endpointContainerTitle_maintext">Elastic Search</div>
            <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/kg/">Knowledge Graph</a></div>
        </div>
    </div>
    <div class="mobileSpan"><a href="https://data.labs.kadaster.nl/kadaster/kg/elasticsearch/search/query">Endpoint</a></div>
    <div class="endpointContainer_center"><a href="/cases/integralegebruiksoplossing">Use case</a></div>
    <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/sdo-target-model/home">Data Model</a></div>
</div>
