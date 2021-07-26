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

<p>Welkom op de integrale gebruiksoplossing. Deze oplossing maakt het mogelijk om Geo-data gecombineerd te bevragen  en is ontworpen voor algemene gebruikers, geo-professionals en ontwikkelaars. Bekijk de toepassingen die bij u passen en ga er mee aan de slag. Het is de eerste versie van de integrale gebruiksoplossing, dus we horen graag wat u er van vindt!
</p>

<h1>Kijk en vraag</h1>
<div class="description">
Toepassingen voor de algemene gebruiker: Bekijk en bevraag informatie uit verschillende basisregistraties over een object, zoals een gebouw, weg of terrein.
</div>

<div class="cards-wrapper">
    <a href="/demonstrators/objectviewer">
      <div class="card">
        <div class="card-type">Objectviewer</div>
        <img class="card-image" src="/assets/images/pandviewer.png">
        <div class="card-description">Zoek in de Objectviewer door informatie uit de BAG, BGT en BRT. Deze demonstrator geeft een invulling aan integrale bevraging.</div>
      </div>
    </a>
</div>
 

<h1>Combineer en selecteer</h1>
<div class="description">
Toepassingen voor de professionele gebruiker:
Voeg data samen en selecteer gegevens om inzicht te krijgen met data over jouw omgeving uit basis- en andere registraties. We realiseren ons dat het gebruik van deze tools enige oefening vereist. Om jullie hiermee op weg te helpen hebben wij twee tutorials voor Sparklis gemaakt. <a href="/assets/videos/sparklis_demo_1.webm">Video 1</a> en <a href="/assets/videos/sparklis_demo_2.webm">Video 2</a>
</div>
  <div class="cards-wrapper">
      <a href="/demonstrators/sparklis/osparklis.html?title=KG-demo-Sparklis&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/kg-demo-sparklis/services/default/sparql&avoid_lengthy_queries=true&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&lang=nl">
        <div class="card">
          <div class="card-type">Sparklis</div>
          <img class="card-image" src="/assets/images/sparklis.png">
          <div class="card-description">Een querybuilder in natuurlijke taal waarmee professionele gebruikers SPARQL-endpoints kunnen verkennen en doorzoeken.</div>
        </div>
      </a>
      <a href="/demonstrators/geodatawizard">
        <div class="card">
          <div class="card-type">GeoDataWizard</div>
          <img class="card-image" src="/assets/images/spatial_wizard_logo.png">
          <div class="card-description">Ga zelf aan de slag met het omzetten van uw datasets naar Linked Data, zodat je deze gecombineerd met onze data kan bevragen!</div>
        </div>
      </a>
<!--        <a href="/demonstrators/geodatavisitor">
        <div class="igo_card">
          <div class="card-type">GeoDataVisitor</div>
          <img class="card-image" src="/assets/images/spatial_wizard_logo.png">
          <div class="card-description">In deze demonstrator kan je je eigen geüploade data meteen visualiseren, inclusief een doorkijkje naar de gerelateerde data.</div>
        </div>
      </a> -->
      <a href="https://data.labs.kadaster.nl/igo/-/stories/user-story">
        <div class="card">
          <div class="card-type">Data Story</div>
          <img class="card-image" src="/assets/images/data-story-igo.PNG">
          <div class="card-description">Bekijk hier hoe we SPARQL gebruiken om een aantal use cases van gebruikers te beantwoorden.</div>
        </div>
      </a>
    </div>



<h1>Ontwikkel en Analyseer</h1>
<div class="description">
      Toepassingen voor de ontwikkelaar:
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

<div class="textbox" markdown="1">
## Speeltuinsessies
De integrale gebruiksoplossing is als Minimum Viable Product (MVP) af. We zijn echter nog steeds continu bezig om deze MVP te verbeteren en we zijn heel erg benieuwd naar de ervaringen en uitdagingen van onze gebruikers. Mede daarom organiseren we elke **donderdagochtend van 10:00-11:00** uur speeltuinsessies voor al uw vragen. Interesse? Meld u aan door een bericht te sturen naar [Evi van der Meer](mailto:evi.vandermeer@ictu.nl).
</div> 

## Van de makers  
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

## Van de gebruikers

Nu onze Knowledge Graph beschikbaar is zijn de eerste gebruikers al aan de slag gegaan om componenten te ontwikkelen op onze data. Deze dienen als inspiratie voor de mogelijkheden met deze ontsluiting.

<div class="cards-wrapper">
    <a href="/browsers/kkg-gebouw/">
    <div class="card">
      <div class="card-type">Data Browser</div>
      <img class="card-image" src="/assets/images/browser-screenshot.PNG" alt="Facet Check">
      <div class="card-description">Gebruik de Facet Check Browser - ontwikkeld door Triply - om door de gebouwen in de Knowledge Graph te zoeken.</div>
    </div>
  </a>
  <a href="https://searchdata.com/">
    <div class="card">
      <div class="card-type">Searchdata</div>
      <img class="card-image" src="/assets/images/searchdata-screenshot.PNG" alt="Searchdata">
      <div class="card-description">Valuecare heeft deze applicatie ontwikkeld om op basis van natuurlijke tekst door onze data te kunnen zoeken.</div>
    </div>
  </a>
  <a href="https://kadaster.github.io/datascience-comunica-client/">
    <div class="card">
      <div class="card-type">Comunica</div>
      <img class="card-image" src="/assets/images/comunica-logo.PNG" alt="Comunica">
      <div class="card-description">Met deze implementatie van het open-source component Comunica van de universiteit Gent kunnen we de Knowledge Graph met GraphQL en SPARQL bevragen.</div>
    </div>
  </a>
</div>

## Feedback

<iframe width="100%" height="920" src="https://docs.google.com/forms/d/e/1FAIpQLSeSTbWGwQywPOmiJ_WVVIL1OjNp33eUsnzWsHYfyVAa6EEgIw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Laden..</iframe> 

## Overall UI/UX Design

In dit overzicht willen we een doorkijk bieden naar het mogelijke toekomstige design van de ‘integrale gebruiksoplossing’. Welke componenten vinden we hierin en hoe kan het eruit gaan zien? Browse door onderstaand Adobe XD bestand om een beeld te krijgen van de design gedachten voor de toekomst.

<iframe height="920" width="100%" src="https://xd.adobe.com/embed/05d2d443-eabf-4bd5-bc20-c3d375fe7207-5081/" frameborder="0" marginheight="0" marginwidth="0"></iframe>

<div>Iframe link to Adobe XD, mocht het niet getoond worden bezoek dan: <a href="https://xd.adobe.com/embed/05d2d443-eabf-4bd5-bc20-c3d375fe7207-5081/">https://xd.adobe.com/embed/05d2d443-eabf-4bd5-bc20-c3d375fe7207-5081/</a></div>  
<br />
