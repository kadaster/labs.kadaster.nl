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

Gegevens van de overheid zijn verdeeld over losse registraties. Jij wilt ze niet zelf bij elkaar zoeken, je wilt ze makkelijk tegelijk gebruiken. In deze “integrale gebruiks oplossing” vind je alle gegevens over jouw buurt op één plek. Ga direct aan de slag!

<div class="igo_usercontainer">
  <div class="igo_usercard">
    <h1>Kijk en vraag</h1>
    <div class="description">
      Bekijk en bevraag informatie uit verschillende basisregistraties over een object, zoals een gebouw, weg of terrein.
      Een toepassing voor de nieuwsgierige algemene gebruiker.
    </div>
    <div class="cards-wrapper">
      <a href="/demonstrators/objectviewer">
        <div class="igo_card">
          <div class="card-type">Objectviewer</div>
          <img class="card-image" src="/assets/images/pandviewer.png">
          <div class="card-description">Zoek in de Objectviewer door informatie uit BAG, BGT en BRT. Deze demonstrator geeft een concept voor integrale bevraging.</div>
        </div>
      </a>
      <a href="/cases/loki">
        <div class="igo_card">
          <div class="card-type">Loki</div>
          <img class="card-image" src="/assets/images/loki-logo.jpg" alt="Loki logo">
          <div class="card-description">Loki is een chatbot voor Locatie-gebaseerde Kadaster Informatieverstrekking. </div>
        </div>
      </a>
    </div>
  </div>

  <div class="igo_usercard">
    <h1>Combineer en selecteer</h1>
    <div class="description">
      Voeg data samen en selecteer gegevens om inzicht te krijgen met data over jouw omgeving uit basis- en andere registraties. 
      Een toepassing voor de professionele geodata gebruiker. 
    </div>
    <div class="cards-wrapper">
      <a href="/demonstrators/sparklis/osparklis.html?title=KG-demo-Sparklis&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/kg-demo-sparklis/services/default/sparql&avoid_lengthy_queries=true&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&lang=nl">
        <div class="igo_card">
          <div class="card-type">Sparklis</div>
          <img class="card-image" src="/assets/images/sparklis.png">
          <div class="card-description">Een querybuilder in natuurlijke taal waarmee niet-ervaren gebruikers SPARQL-endpoints kunnen verkennen en doorzoeken.</div>
        </div>
      </a>
      <a href="/demonstrators/geodatawizard">
        <div class="igo_card">
          <div class="card-type">GeoDataWizard</div>
          <img class="card-image" src="/assets/images/spatial_wizard_logo.png">
          <div class="card-description">Ga zelf aan de slag met het omzetten van uw datasets naar Linked Data, zodat je deze gecombineerd met onze data kan bevragen!</div>
        </div>
      </a>
<!--       <a href="/demonstrators/geodatavisitor">
        <div class="igo_card">
          <div class="card-type">GeoDataVisitor</div>
          <img class="card-image" src="/assets/images/spatial_wizard_logo.png">
          <div class="card-description">Gebruik je eigen geüploade data meteen in de geodatavisitor!</div>
        </div>
      </a> -->
      We realiseren ons dat het gebruik van deze tools enige oefening vereist. Om jullie hiermee op weg te helpen hebben wij twee tutorials voor Sparklis gemaakt. <a href="/assets/videos/sparklis_demo_1.webm">Video 1</a> en <a href="/assets/videos/sparklis_demo_2.webm">Video 2</a>.
    </div>
  </div>

  <div class="igo_usercard">
    <h1>Ontwikkel en Analyseer</h1>
    <div class="description">
      Bouw eigen toepassingen met geodata op basis van de Knowledge Graph, GraphQL- en SPARQL-endpoints.
      De resources en toepassingen voor de technische ontwikkelaar vind je hier.
    </div>
    <div class="cards-wrapper">
      <a href="/developer/">
        <div class="igo_card">
          <div class="card-type">Developer Portal</div>
          <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
          <div class="card-description">Voor een lijst van al onze endpoints en services gebaseerd op Linked Data en GraphQL en benodigde resources, kijk hier.</div>
        </div>
      </a>
      <a href="https://kadaster.wvr.io/sdo-target-model/home">
        <div class="igo_card">
          <div class="card-type">Datamodellen</div>
          <img class="card-image" src="/assets/images/sdo-model.PNG" alt="Knowledge Graph">
          <div class="card-description">Voor het datamodel van onze Knowledge Graph, klik hier voor een visualisatie.</div>
        </div>
      </a>
    </div>
  </div>
</div>

<h1>Van de makers</h1>
Lees hoe we de gegevens in samenhang brengen om ze makkelijk tegelijk te kunnen gebruiken.

<div class="cards-wrapper">
  <a href="/demonstrators/architectuur-selfservice/Status">
    <div class="card">
      <div class="card-type">Knowledge Graph</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-description">De Aanpak en Architectuur van de Knowledge Graph. Hier besteden we aandacht aan onze aanpak om met oa. Linked Data een knowledge Graph te maken.</div>
    </div>
  </a>
</div>

## Feedback

We zijn heel benieuwd naar jullie feedback. Jullie zouden ons dan ook helpen door onderstaand formulier in te vullen.

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSTbWGwQywPOmiJ_WVVIL1OjNp33eUsnzWsHYfyVAa6EEgIw/viewform?embedded=true" width="640" height="1293" frameborder="0" marginheight="0" marginwidth="0">Laden..</iframe> 


## Overall UI/UX Design

In dit project willen we een doorkijkje bieden naar wat 'integraa gebruik' precies inhoudt. Welke componenten vinden we hierin en hoe ziet dit eruit. Browse door onderstaand Adobe XD bestand om live een inkijkje in de design gedachten te krijgen.

<div style="border: 1px solid black; min-height: 20px;">
    <iframe  width="1440" height="920" src="https://xd.adobe.com/embed/d22902be-087f-4087-b5a8-b38405f092c6-877a/" frameborder="0" allowfullscreen></iframe>
</div>
<div>Iframe link to Adobe XD, mocht het niet getoond bezoek dan: <a href="https://xd.adobe.com/embed/d22902be-087f-4087-b5a8-b38405f092c6-877a/">https://xd.adobe.com/embed/d22902be-087f-4087-b5a8-b38405f092c6-877a/</a></div>
<br />