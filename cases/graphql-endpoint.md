---
layout: page
title: GraphQL Open endpoint
---
# Use Case: Kadaster GEO-informatie voor iedereen

### Disclaimer
Deze pagina beschrijft het eerste open GraphQL endpoint wat het Kadaster bij wijze van experiment beschikbaar stelt. Dit endpoint wordt met een onderhouden met een 'best-effort' service level en betreft alleen open data bronnen bij het Kadaster. Wij kunnen voor dit endpoint niet garanderen dat de data altijd actueel is en zullen af en toe (onaangekondigd) het endpoint vernieuwen in het kader van doorontwikkeling. Heb je hier vragen of opmerkingen over? Neem dan <a href=/about> contact met ons op</a>.

<div class="cards-wrapper">
  <a href="/odysseyhackathon">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/graphql-logo.png">
      <div class="card-title">GraphQL endpoint</div>
      <div class="card-description">Middels dit endpoint bevraag je de (open) databronnen van het Kadaster met GraphQL.</div>
    </div>
  </a>
</div>

## Introductie
Met GraphQL ondervangen we een aantal vaak gestelde tekortkomingen van de services die we op onze basisregistraties leveren.
- Levering van data is **vraaggestuurd** in plaats van **aanbodgestuurd**. We geven de gebruiker de kans om precies die data te bevragen die hij/zij nodig heeft
- We maken bevragen op basis van **objecten** mogelijk
- Verschillende datasets met een administratieve connectie kunnen **integraal** bevraagd worden

Met GraphQL definiëren we een model van onze data in zogenoemde objecten en diens attributen. Voor dit endpoint bevat dit momenteel enkel data uit de Basisadministratie Adressen & Gebouwen (BAG). Een volledig datamodel van deze bron is te vinden in Figuur 1. 
<figure id="figuur-1">
  <a href="/assets/images/schema_bag_ams.png">
    <img src="/assets/images/schema_bag_ams.png">
  </a>
  <figcaption>
    Figuur 1 ― Het volledige datamodel van de BAG (Bron: Gemeente Amsterdam)
  </figcaption>
</figure>

Voor dit endpoint zijn hiervan de volgende objecten beschikbaar gesteld:
- Woonplaats
- Openbare Ruimte 
- Pand
- Verblijfsobject
- Nummeraanduiding

Deze objecten zijn landsdekkend. Er kan dus over heel Nederland bevragingen worden uitgevoerd op de beschikbare data middels dit endpoint. 

<div class="textbox" markdown="1">
## Kadaster jargon

Niet veel mensen zullen hun huis beschrijven als een Verblijfsobject, zoals hij officieel in de [Basisadministratie Adressen en Gebouwen (BAG)](https://zakelijk.kadaster.nl/basisregistratie-adressen-en-gebouwen) is opgenomen. Voor een goede beschrijving van de objecten en wat deze representeren, verwijzen we de lezer naar een betrouwbare bron zoals die van de [Gemeente Amsterdam](https://www.amsterdam.nl/stelselpedia/bag-index/informatiemodel-bag/).
</div>

## GraphQL Introspection
Wanneer je gebruik maakt van de [GraphQL Playground](https://labs.kadaster.nl/odysseyhackathon/) om een query op te stellen in GraphQL, wordt je door de user interface ondersteunt in het opstellen van de juiste bevragingen. Voor deze stap gebruikt het endpoint de [GraphQL Introspection query](https://graphql.org/learn/introspection/). Hiermee wordt tijdens het typen de objecten en attributen zichtbaar die in een query beschikbaar zijn. Dit datamodel is ook in alle rust terug te lezen in **Docs** rechts in het scherm. Het datamodel kan ook gevisualiseerd worden met [GraphQL Voyager](https://apis.guru/graphql-voyager/). Gebruik daarvoor [deze SDL file](/assets/graphql/schema-bag-uoi.graphql). Binnen de demo omgeving van GraphQL Voyager kun je het schema veranderen met deze SDL file met 'Change Schema'.

# Bevragingen middels een identificatiecode
Ieder object binnen de BAG kent zijn eigen identificatiecode (een 16-cijferige 'string' met daarin onder andere verwijzingen naar de betrokken gemeente en het type object wat beschreven wordt). Op zoek naar de identificatiecode van jouw adres of openbare ruimte? Kijk dan ook even op de [BAGViewer](https://bagviewer.kadaster.nl/lvbag/bag-viewer/). 

Middels GraphQL kan er op twee manieren een bevraging worden uitgevoerd, middels een identificatiecode of middels een first/offset/filter combinatie. Neem als voorbeeld een bevraging waarbij we de informatie van een Nummeraanduiding (adres) met identificatiecode **0307200000495314** bevragen. Zie bijvoorbeeld onderstaande bevraging.

``` graphql
query informatieVoorEenIdentificatiecode {
  bagnummeraanduiding(identificatiecode: "0307200000495314", peilDatum: "2020-11-13") {
    identificatiecode
    postcode
    huisnummer
    huisletter
    huisnummertoevoeging
    uoi
  }
}
``` 

In feite gedraagt deze bevraging zich als een simpele REST-API interface op een Nummeraanduiding, waarbij alle informatie (attributen) gegeven dit object wordt getoond. 

### Peildatums
We hebben in bovenstaande specifieke bevraging een expliciete peildatum meegegeven. Dit houdt dus in dat we alleen de objecten geldend op dit specifieke moment ophalen. Indien deze peildatum niet wordt meegegeven pakt het endpoint standaard de huidige datum als peildatum. Het is dus momenteel niet mogelijk om historie middels dit endpoint te bevragen. 

<div class="textbox" markdown="1">
## UOI

Recent heeft Kadaster in samenwerking met het Ministerie van BZK en Fibree gewerkt aan een Unique Object Identifier (UOI). Deze is voor dit open endpoint geintegreerd in de BAG dataset.
<figure id="figuur-2">
  <a href="/assets/images/uoi-schema.PNG">
    <img src="/assets/images/uoi-schema.PNG">
  </a>
  <figcaption>
    Figuur 2 ― De structuur van een Unique Object Identificer (UOI)
  </figcaption>
</figure>
Een object is dan ook middels eenzelfde bevraging met een uoi als identificatiecode te gebruiken. Een voorbeeld van een bevraging rondom hetzelfde object als in bovengenoemde query doe je als volgt.

``` graphql
query informatieVoorEenUOI {
  bagnummeraanduiding(uoi: "NL.550e8400-e29b-na0a-0307-200000495314", peilDatum: "2020-11-13")
  {
    uoi
    postcode
    huisnummer
    huisletter
    huisnummertoevoeging    
    identificatiecode
    
  }
}
```
</div>

# Bevragingen middels first/offset en filter
Het kan voorkomen dat de gebruiker niet geïnteresseerd is in het bevragen van één enkel object, maar dat een gebruiker een set aan objecten uit bijvoorbeeld een woonplaats of openbare ruimte (straat) wil bevragen. In dat geval kun je gebruik maken van de **first** en **offset** argumenten. Hiermee bevraag je de eerste (first) objecten, startend vanaf het (offset) object. Een voorbeeld bevraging vind je hieronder. Deze query bevraagd voor een gegeven woonplaats met identificatiecode 1245 (*Den Haag*) de eerste 3 openbare ruimten (straten) en van deze openbare ruimten worden daar vijf nummeraanduidingen (adressen) bevraagd, startende met nummer 11. 

**Note: Om extreme belasting op het endpoint te limiteren mag een query niet langer dan 60 seconden duren. Daarna zal het een timeout error geven. Dit betekent dat het nummer gekozen voor first niet te hoog mag zijn (omdat hiermee het aantal opgehaalde elementen erg groot wordt). De stijlregel die wij hier hanteren is om niet batches groter dan 1000 op te vragen tegelijkertijd. Door met first en offset te werken kunnen deze wel in meerdere batches achter elkaar bevraagd worden.**

``` graphql
query AdressenInDenHaag 
 {
  ## Deze query bevraagt verschillende adressen in Den Haag (code: 1245) op basis van de eerste openbare ruimten 
 bagwoonplaats(identificatiecode: "1245", peilDatum: "2020-11-13") {
    woonplaatsnaam
    woonplaatsstatus
    uoi
    peilDatum
    openbareruimten(first: 3) {
      openbareruimtenaam
      identificatiecode
      uoi
      nummeraanduidingen(first: 5, offset: 10) {
        identificatiecode
        uoi
        postcode
        huisnummer
        huisletter
        huisnummertoevoeging
      }
    }
  }
}
```

## Bevragingen middels een filter
Het uitgangspunt met dit open GraphQL endpoint is dat we met Kadaster een transitie willen maken van aanbodgestuurd naar vraaggestuurde bevragingen. Dat betekent dus dat de gebruiker kiest welke data hij/zij wil zien, binnen het datamodel van de beschikbare data. Om deze reden filteren we bij voorbaat ook geen data uit de bron. Enkel het gebruik van een peildatum (de default of een gekozen variant) wordt geforceerd. 

De gebruiker kan wel zelf een filter toevoegen. Vrijwel ieder object heeft een argument **filter** waarmee een bepaalde selectie kan worden uitgevoerd. De beschikbare kolommen waarop gefilterd kunnen worden in het object zijn alle attributen die zich ook in het object zelf bevinden. Meerdere filters worden gescheiden met een **'and'**.
Een voorbeeldbevraging met het gebruik van een filter ziet er als volgt uit:

``` graphql
query InfoVoorEenAdres {
 ## Deze query bevraagt alle informatie uit de BAG voor het hoofdkantoor van de politie in Den Haag 
 bagnummeraanduiding(filter: "postcode='2585BG' and huisnummer=35") {
    identificatiecode
    uoi
    postcode
    huisnummer
    huisletter
    hoofdadresVan {
      identificatiecode
      uoi
      oppervlakteverblijfsobject
      ligtinpand {
        identificatiecode
        uoi
        bouwjaar
      }
    }
  }
}
``` 

Deze query bevraagt (een set aan bagnummeraanduidingen) zonder first en offset. Het neemt de twee attributen van een bagnummeraanduiding (**postcode** en **huisnummer**) en plaatst een filter op deze attributen. Let op dat omdat postcode een string betreft, aanhalingstekens ('') noodzakelijk zijn in het filter. Omdat huisnummer een getal betreft is dat hier niet nodig. Deze query bevraagt dus alle nummeraanduidingen met postcode 2585BG en huisnummer 35. Van deze nummeraanduiding wordt ook het betreffende verblijfsobject en pand erbij gezocht, inclusief de voor ons relevante attributen van deze objecten. 
