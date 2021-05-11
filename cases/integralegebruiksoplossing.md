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

# Use Case: Integraal Bevragen

Deze pagina toont de huidige voortgang en zal gedurende het project worden geupdate. Het Adobe XD document geeft een indicatie van design- en gebruiksintenties met daaronder de links naar de verschillende demonstrators die geproduceert zijn.

## Overall UI/UX Design

In dit project willen we een doorkijkje bieden naar wat 'integraa gebruik' precies inhoudt. Welke componenten vinden we hierin en hoe ziet dit eruit. Browse door onderstaand Adobe XD bestand om live een inkijkje in de design gedachten te krijgen.

<div style="border: 1px solid black; min-height: 20px;">
    <iframe  width="1440" height="920" src="https://xd.adobe.com/embed/d22902be-087f-4087-b5a8-b38405f092c6-877a/" frameborder="0" allowfullscreen></iframe>
</div>
<div>Iframe link to Adobe XD, mocht het niet getoond bezoek dan: <a href="https://xd.adobe.com/embed/d22902be-087f-4087-b5a8-b38405f092c6-877a/">https://xd.adobe.com/embed/d22902be-087f-4087-b5a8-b38405f092c6-877a/</a></div>
<br />

## Demonstrators ten behoeve van het stimuleren gebruik

Om te laten zien wat er mogelijk is met de verschillende endpoints en data die er vanuit het Kadaster beschikbaar zijn gemaakt stellen we verschillende demonstrators en halffabrikaten beschikbaar om mee te experimenteren voor onze gebruikers. Tevens dient dit om een overzicht te bieden van de zaken die er nu al mogelijk zijn.

### Architectuurprincipes

<div class="cards-wrapper">
  <a href="/demonstrators/architectuur-selfservice">
    <div class="card">
      <div class="card-type">Use Case</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-title">Aanpak en Architectuur van de Knowledge Graph</div>
      <div class="card-description">Hier besteden we aandacht aan onze aanpak om met oa. Linked Data een knowledge Graph te maken.</div>
    </div>
  </a>
</div>

### Laagdrempelige bevraging voor de non-professional

<div class="cards-wrapper">
  <a href="/demonstrators/pandviewer">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/pandviewer.png">
      <div class="card-title">Pandviewer</div>
      <div class="card-description">Zoek zelf in de Pandviewer op locatie, informatie uit de BAG, BGT en BRT. Deze demonstrator
      geeft eerste invulling aan een laagdrempelige integrale bevraging.</div>
    </div>
  </a>
  <a href="/cases/loki">
    <div class="card">
      <div class="card-type">Use Case</div>
      <img class="card-image" src="/assets/images/loki-logo.jpg" alt="Loki logo">
      <div class="card-title">Loki voor GEO Informatieverstrekking</div>
      <div class="card-description">Loki is een chatbot voor Locatie-gebaseerde Kadaster Informatieverstrekking. </div>
    </div>
  </a>
</div>

### Integrale analyses op data van het Kadaster voor de ervaren gebruiker

<div class="cards-wrapper">
  <a href="/demonstrators/sparklis/osparklis.html?title=%0A%09%09%09%09%09%09%09%09BAG%0A%09%09%09%09%09%09%09&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&max_increment_samples=100">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/sparklis.png">
      <div class="card-title">Sparklis</div>
      <div class="card-description">Een querybuilder in natuurlijke taal waarmee niet-ervaren gebruikers SPARQL-endpoints kunnen verkennen en doorzoeken.</div>
    </div>
  </a>
  <a href="/demonstrators/geodatawizard">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/spatial_wizard_logo.png">
      <div class="card-title">GeoDataWizard</div>
      <div class="card-description">Ga zelf aan de slag met het omzetten van uw datasets naar Linked Data, zodat je deze gecombineerd met onze data kan bevragen!</div>
    </div>
  </a>
  <a href="/stories/bag/index.html">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/kadaster-logo.png">
      <div class="card-title">BAG Data Story</div>
      <div class="card-description">In een data story combineren we een verhaal met real-time visualisaties op de data. Klik op één van de figuren om de onderliggende query te zien!</div>
    </div>
  </a>
  <a href="/browsers/bevolking">
    <div class="card">
      <div class="card-type">Browser</div>
      <img class="card-image" src="/assets/images/cbs-logo.png">
      <div class="card-title">Bevolkingsbrowser</div>
      <div class="card-description">Met de bevolkingsbrowser kunnen Nederlandse gemeenten, wijken en buurten op basis van bevolkingsstatistieken worden doorzocht.</div>
    </div>
  </a>
</div>

### Voorzieningen voor Developers

<div class="cards-wrapper">
  <a href="/developer/">
    <div class="card">
      <div class="card-type">Developer</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-title">Developer Portal</div>
      <div class="card-description">Voor een lijst van al onze endpoints en services gebaseerd op Linked Data en GraphQL en benodigde resources, kijk hier.</div>
    </div>
  </a>
    <a href="https://kadaster.wvr.io/sdo-target-model/home">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/sdo-model.PNG" alt="Knowledge Graph">
      <div class="card-title">Datamodellen</div>
      <div class="card-description">Voor het datamodel van onze Knowledge Graph, klik hier voor een visualisatie.</div>
    </div>
  </a>
</div>
