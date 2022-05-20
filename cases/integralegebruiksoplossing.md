---
layout: page
title: Use Case ― Integrale Gebruiksoplossing
---

<iframe style=" z-index: 9999; position: fixed; right: 0; bottom: 0; height: 0px; width: 0px;" id="loki-chat"
  scrolling="no" frameborder="0" allowtransparency="true" src="/demonstrators/loki-1.0/index.html" title="Loki">
</iframe>
<script>
  iFrameResize({ sizeHeight: true, sizeWidth: true, autoResize: false, checkOrigin: false,  heightCalculationMethod: 'grow' }, '#loki-chat')
</script>

<link rel="stylesheet" href="/assets/css/integralegebruiksoplossing.css">

<h1>Welkom!</h1>

Welkom bij de integrale gebruiksoplossing. Deze oplossing maakt het mogelijk om geo-data uit verschillende geo-basisregistraties gecombineerd te bevragen en is ontworpen voor algemene gebruikers, geo-professionals en ontwikkelaars. Middels een Knowledge Graph wordt data ontsloten uit de BAG, BGT, BRT, Kadastrale Percelen (DKK), WKPB, CBS wijken en buurten en daarnaast kunnen eigen databestanden worden toegevoegd. Bekijk de toepassingen die bij u passen en ga er mee aan de slag. De integrale gebruiksoplossing is als Proof of Concept ontwikkeld voor het programma DiS-Geo. Onderaan deze pagina is een feedbackformulier beschikbaar, we horen graag wat u ervan vindt!

<h1>Algemene gebruiker</h1>
<div class="description">
  Voor de algemene gebruiker: Bekijk en bevraag met de objectviewer informatie uit de BAG, BGT en BRT over een object, zoals een gebouw, weg of terrein.
</div>

<div class="cards-wrapper">
  <a href="/demonstrators/objectviewer">
    <div class="card">
      <div class="card-type">Objectviewer</div>
      <img class="card-image" src="/assets/images/pandviewer.png">
      <div class="card-description">Bevraag informatie uit de BAG, BGT en BRT over een object.</div>
    </div>
  </a>
</div>

<h1>Professionele gebruiker</h1>
<div class="description">
  Voor de professionele gebruiker:
  Voeg data samen en selecteer gegevens om inzicht te krijgen in uw vraagstukken. Voor het gebruik van deze tools is echter wel enige oefening vereist, om daarbij te helpen zijn er tutorials. Zie <a href="/assets/videos/sparklis_demo_1.mp4">Video 1</a> en <a href="/assets/videos/sparklis_demo_2.mp4">Video 2</a>. Voor de GeoDataWizard tutorials zie <a href="/assets/videos/GeoData Wizard Tutorial 1_ Van Tabel naar Linked Data.mp4">Video 1: Van Tabel naar Linked Data</a>, <a href="/assets/videos/GeoData Wizard Tutorial 2_ Linked Data Configuratie.mp4">Video 2: Linked Data Configuratie</a>, <a href="/assets/videos/GeoData Wizard Tutorial 3_ Geografische en Kadastrale Configuratie.mp4">Video 3:Geografische en Kadastrale Configuratie</a>, <a href="/assets/videos/GeoData Wizard Tutorial 4_ Publiceren in een Triple Store.mp4">Video 4: Publiceren in een Triple Store</a>.
</div>

<div class="cards-wrapper">
  <a href="/demonstrators/sparklis/osparklis.html?title=KG-demo-Sparklis&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/kg-demo-sparklis/services/default/sparql&avoid_lengthy_queries=true&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&lang=nl">
    <div class="card">
      <div class="card-type">Sparklis</div>
      <img class="card-image" src="/assets/images/sparklis.png">
      <div class="card-description">Met sparklis kunnen selecties worden gemaakt om geïntegreerde linked data te bevragen. </div>
    </div>
  </a>
  <a href="/demonstrators/geodatawizard">
    <div class="card">
      <div class="card-type">GeoDataWizard</div>
        <img class="card-image" src="/assets/images/spatial_wizard_logo.png">
        <div class="card-description">Met de GeoDataWizzard kunnen eigen datasets worden omgezet in linked data en wordt de toegevoegde data onderdeel van de integrale bevraging</div>
    </div>
  </a>
  <a href="/cases/integralegebruiksoplossing_stories">
    <div class="card">
      <div class="card-type">Data Story</div>
      <img class="card-image" src="/assets/images/data-story-igo.PNG">
      <div class="card-description">Bekijk hier hoe vraagstukken uit verschilende sectoren worden beantwoord met behulp van de Integrale Gebruiksoplossing.</div>
    </div>
  </a>
</div>

<h1>Developer</h1>
<div class="description">
  Voor de ontwikkelaar:
  Bouw eigen toepassingen met geodata op basis van de Knowledge Graph, GraphQL- en SPARQL-endpoints.
</div>

<div class="cards-wrapper">
  <a href="/developer/">
    <div class="card">
      <div class="card-type">Developer Portal</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-description">Voor een lijst van al onze endpoints en services gebaseerd op Linked Data en GraphQL en benodigde resources, kijk hier en ga ermee aan de slag.</div>
    </div>
  </a>
  <a href="https://kadaster.wvr.io/kg-kadaster/home">
    <div class="card">
      <div class="card-type">Datamodellen</div>
      <img class="card-image" src="/assets/images/sdo-model.PNG" alt="Knowledge Graph">
      <div class="card-description">Voor het datamodel van onze Knowledge Graph, klik hier voor een visualisatie.</div>
    </div>
  </a>
</div>

## Video

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IEsmV4q2Ai0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Feedback

We zijn continu op zoek naar feedback op deze oplossing en de toepassingen die jullie (de gebruikers) zien. Voor deze feedback hebben we onder andere een [Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSeSTbWGwQywPOmiJ_WVVIL1OjNp33eUsnzWsHYfyVAa6EEgIw/viewform) beschikbaar. Alternatief kan er contact [via de mail](mailto:erwin.folmer@kadaster.nl) worden opgenomen.

##  Integrale Gebruiksoplossing workshops voor specifieke sectoren

Ga mee de diepte in en bekijk een van de (online) sectorworkshops over de Integrale Gebruiksoplossing. Hierin worden de werking en mogelijkheden van de Integrale Gebruiksoplossing per sector toegelicht en gedemonstreerd. Zo maak je nader kennis met hoe de oplossing voor jou het beste werkt, zie je concrete oplossingen en ervaar je de voordelen voor verschillende sectoren.

### Integrale Gebruiksoplossing: workshop voor beheer openbare ruimte

De workshop over de Integrale Gebruiksoplossing voor beheer openbare ruimte vond plaats op 28 oktober 2021. Deze sessie is opgenomen. Klik <a href="https://www.geobasisregistraties.nl/basisregistraties/documenten/publicatie/2021/10/29/integrale-gebruiksoplossing-workshop-voor-beheer-openbare-ruimte">hier</a> voor meer informatie en klik <a href="https://data.labs.kadaster.nl/igo/-/stories/Beheer-Openbare-Ruimte">hier</a> voor de data.

### Integrale Gebruiksoplossing: workshop voor openbare orde & veiligheid

De workshop over de Integrale Gebruiksoplossing voor openbare orde & veiligheid vond plaats op 24 oktober 2021. Deze sessie is opgenomen. Klik <a href="https://www.geobasisregistraties.nl/basisregistraties/documenten/publicatie/2021/10/14/integrale-gebruiksoplossing-workshop-voor-openbare-orde-en-veiligheid">hier</a> voor meer informatie en klik <a href="https://data.labs.kadaster.nl/kadaster/-/stories/Openbare-orde--Veiligheid">hier</a> voor de data.

### Integrale Gebruiksoplossing: workshop voor nutsbedrijven

De workshop over de Integrale Gebruiksoplossing voor openbare orde & veiligheid vond plaats op 23 september 2021. Deze sessie is opgenomen. Klik <a href="https://www.geobasisregistraties.nl/basisregistraties/documenten/publicatie/2021/09/23/integrale-gebruiksoplossing-workshop-voor-nutsbedrijven">hier</a> voor meer informatie en klik <a href="https://data.labs.kadaster.nl/igo/-/stories/nutsbedrijven">hier</a> voor de data.

### Integrale Gebruiksoplossing: workshop voor ruimtelijke ordening

De workshop over de Integrale Gebruiksoplossing voor openbare orde & veiligheid vond plaats op 16 september 2021. Deze sessie is opgenomen. Klik <a href="https://www.geobasisregistraties.nl/basisregistraties/documenten/publicatie/2021/09/16/integrale-gebruiksoplossing-workshop-voor-ruimtelijke-ordening">hier</a> voor meer informatie en klik <a href="https://data.labs.kadaster.nl/kadaster/-/stories/Planologen-per-buurt">hier</a> voor de data.

### Integrale Gebruiksoplossing: workshop voor developers

De workshop over de Integrale Gebruiksoplossing voor openbare orde & veiligheid vond plaats op 26 augustus 2021. Deze sessie is opgenomen. Klik <a href="https://www.geobasisregistraties.nl/basisregistraties/documenten/publicatie/2021/08/26/integrale-gebruiksoplossing-workshop-voor-developers">hier</a> voor meer informatie.

<br>

## Project uitleg door de makers
Lees hier hoe we (de makers) de gegevens in samenhang brengen om ze makkelijk tegelijk te kunnen gebruiken.

<div class="cards-wrapper">
  <a href="/demonstrators/architectuur-selfservice/Status">
    <div class="card">
      <div class="card-type">Knowledge Graph</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-description">De Aanpak en Architectuur van de Knowledge Graph. Hier besteden we aandacht aan onze aanpak om met oa. Linked Data een Knowledge Graph te maken.</div>
    </div>
  </a>
</div>

## Status

Incidenteel komt het voor dat er een endpoint of demonstrator onbeschikbaar raakt wegens een storing of (gepland) onderhoud. Bekende problemen en aankomend onderhoud wordt bijgehouden op <a href="/status">deze pagina</a>.

<div class="textbox" markdown="1">
## Actualiteit van databronnen

De data die beschikbaar wordt gesteld vanuit de Integrale Gebruiksoplossing wordt op een regelmatige basis ververst. Voor detailinformatie en links naar alle databronnen verwijzen we de gebruiker naar [onze developer pagina](/developer/). Momenteel bevat de integrale gebruiksoplossing de volgende datasets:

- **Basisregistratie Adressen en Gebouwen** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-05-20*.
- **Basisregistratie Grootschalige Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-04-30*.
- **Basisregistratie Topografie** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-04-21*.
- **Digitale Kadastrale Kaart** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-01-14*.
- **Basisregistratie Kadaster - Publieksrechtelijke Beperkingen** (geen reguliere vernieuwing) - *Laatst vernieuwd met data van 2021-03-16*.
- **Basisregistratie Kadaster - BRK Adressen (koppeling BRK-BAG)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2022-05-04*.
- **CBS Wijk- en buurtkaart** (jaarlijks vernieuwd) - *Laatst vernieuwd met data van 2019-11-01*.

De Kadaster Knowledge Graph (op basis van Schema.org) maakt gebruik van deze onderliggende datasets en is daarmee qua actualiteit een afgeleide van bovenstaande sets.

</div>

## Van de gebruikers

Nu onze Knowledge Graph beschikbaar is zijn de eerste gebruikers al aan de slag gegaan om componenten te ontwikkelen op onze data. Deze dienen als inspiratie voor de mogelijkheden met deze ontsluiting.

<div class="cards-wrapper">
    <a href="/browsers/kkg-gebouw">
    <div class="card">
      <div class="card-type">Data Browser</div>
      <img class="card-image" src="/assets/images/browser-screenshot.PNG" alt="Facet Check">
      <div class="card-description">Gebruik de Facet Check Browser - ontwikkeld door Triply - om door de gebouwen in de Knowledge Graph te zoeken.</div>
    </div>
  </a>
  <a href="https://searchdata.com">
    <div class="card">
      <div class="card-type">Searchdata</div>
      <img class="card-image" src="/assets/images/searchdata-screenshot.PNG" alt="Searchdata">
      <div class="card-description">Valuecare heeft deze applicatie ontwikkeld om op basis van natuurlijke tekst door onze data te kunnen zoeken.</div>
    </div>
  </a>
    <a href="https://qanswer-frontend.univ-st-etienne.fr/?kb=kg&user=kadaster">
    <div class="card">
      <div class="card-type">QAnswer</div>
      <img class="card-image" src="/assets/images/qanswer.PNG" alt="qanswer">
      <div class="card-description">Met deze demonstrator wordt het mogelijk in natuurlijke taal de Knowledge graph te bevragen.</div>
    </div>
  </a>
  <a href="https://kadaster.github.io/datascience-comunica-client">
    <div class="card">
      <div class="card-type">Comunica</div>
      <img class="card-image" src="/assets/images/comunica-logo.PNG" alt="Comunica">
      <div class="card-description">Met deze implementatie van het open-source component Comunica van de universiteit Gent kunnen we de Knowledge Graph met GraphQL en SPARQL bevragen.</div>
    </div>
  </a>
  <a href="/demonstrators/comunica">
    <div class="card">
      <div class="card-type">Comunica</div>
      <img class="card-image" src="/assets/images/comunica-logo.PNG" alt="Comunica">
      <div class="card-description">Met deze implementatie van het open-source component Comunica van de universiteit Gent kunnen we de Knowledge Graph met GraphQL en SPARQL bevragen.</div>
    </div>
  </a>
  <a href="/demonstrators/gruff">
    <div class="card">
      <div class="card-type">Gruff</div>
      <img class="card-image" src="/assets/images/gruff.png" alt="Gruff">
      <div class="card-description">Een applicatie waarmee u de knowledge graph van Kadaster kunt visualiseren en doorbladeren.</div>
    </div>
  </a>
</div>

## Overall UI/UX Design

In dit overzicht willen we een doorkijk bieden naar het mogelijke toekomstige design van de ‘integrale gebruiksoplossing’. Welke componenten vinden we hierin en hoe kan het eruit gaan zien? Browse door onderstaand Adobe XD bestand om een beeld te krijgen van de design gedachten voor de toekomst.

<iframe height="920" width="100%" src="https://xd.adobe.com/embed/a6d6d70a-3a3b-44d4-af6a-7a985632e630-f385/ " frameborder="0" marginheight="0" marginwidth="0">
</iframe>

<p>Iframe link to Adobe XD, mocht het niet getoond worden bezoek dan: <a href="https://xd.adobe.com/view/a6d6d70a-3a3b-44d4-af6a-7a985632e630-f385/ ">https://xd.adobe.com/view/a6d6d70a-3a3b-44d4-af6a-7a985632e630-f385/</a></p>
