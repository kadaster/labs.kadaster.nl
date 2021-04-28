---
banner: /assets/images/kg-banner.webp
layout: page
title: Use Case ― Architectuur rondom integraal bevragen
---

<script src="/demonstrators/loki-1.0/assets/js/iframeResizer.min.js"></script>
<iframe style=" z-index: 9999; position: fixed; right: 0; bottom: 0; height: 0px; width: 0px;" id="loki-chat"
  scrolling="no" frameborder="0" allowtransparency="true" src="/demonstrators/loki-1.0/index.html" title="Loki">
</iframe>
<script>
  iFrameResize({ sizeHeight: true, sizeWidth: true, autoResize: false, checkOrigin: false,  heightCalculationMethod: 'grow' }, '#loki-chat')
</script>

# Aanpak en Architectuur van de (Kadaster) Knowledge Graph

Bij het Kadaster zijn wij al enige tijd bezig met het vraagstuk hoe wij de bestaande basisregistraties en andere relevante databronnen van de Nederlandse overheid op een laagdrempeligere en meer integrale manier beschikbaar te stellen. In deze use case beschrijven we onze visie hierop en beschrijven we de architectuur waarmee wij dit waarmaken.

## Hoog-over architectuur

<figure id="figuur-1">
  <a href="/assets/images/hoogover-kg-architectuur.png">
    <img src="/assets/images/hoogover-kg-architectuur.png" width="80%" alt="Hoog-over architectuur">
  </a>
  <figcaption>
    Figuur 1 ― De hoog-over architectuur die wij gebruiken.
  </figcaption>
</figure>

In de essentie begint onze gedachte bij de data. Hierbij doen we doelbewust geen uitspraken over de specifieke databronnen. De aanpak die wij schetsen is generiek en zal moeten werken voor verschillende soorten data en databronnen. Databronnen benaderbaar met SQL, Linked Data en REST (vanuit de bron) noemen we hier expliciet. Op deze typen bronnen hebben wij eerder succesvol linked data ontsloten.

Vanuit deze bronnen maken/hebben wij een Linked Data specifiek model waarheen wij middels een verderop beschreven aanpak (Figuur 2) de brondata omzetten. Dit datamodel representeert vaak een vertaling die dicht op het oorspronkelijke datamodel van de bron ligt en is derhalve herkenbaar voor de dataset-eigenaar. Deze resulterende LD – registraties zijn vaak moeilijk te gebruiken zonder domeinkennis van de specifieke bron en diens datamodel.

Om die reden zetten we de data om naar één of meerdere views (datamodellen) wat dichter bij de wens van de gebruiker zitten. Dit is zichtbaar in de gele laag. De aanpak hoe we dit doen wordt verderop besproken (Figuur 3).

Uiteindelijk bieden we op basis van standaard services (bijv. REST / ElasticSearch / SPARQL / GraphQL) verschillende stopcontacten waar een gebruiker middels zijn applicatie op kan aansluiten. Hierbij interpreteren we een applicatie als een breed begrip. Zo is de metadata bijvoorbeeld ook gemakkelijk vindbaar voor een zoekmachine als Google.

## Linked Data publicatie pipeline

<figure id="figuur-2">
  <a href="/assets/images/ld-treintje.png">
    <img src="/assets/images/ld-treintje.png" width="80%" alt="Linked data pipeline">
  </a>
  <figcaption>
    Figuur 2 ― Een beschrijving van de componenten die wij gebruiken om Linked Data te publiceren
  </figcaption>
</figure>

Om de stap van een bron als SQL of REST naar Linked Data te maken maken wij gebruik van een simpele architectuur gebaseerd op de Open-source tooling van GraphQL in cominatie van een JSON-LD Context (gestandaardiseerd). De data wordt uiteindelijk via een component wat wij de enhancer noemen (dat minimale code bevat) omgezet van GraphQL naar Linked Data (in de vorm van n-quads). De resulterende data laden we in onze Triple store. (TriplyDB)

De workflow van dit geheel managen wij met de open-soure tooling van Apache Airflow. Hiermee wordt het proces herhaalbaar en valt het voldoende te monitoren.

**Note**: In het ideaalplaatje bevat de pipeline niet noodzakelijkerwijs een (PostgreSQL) database met een kopie van de bron. In de toekomst voorzien wij dat de pipeline rechtstreeks op de bron zal acteren.

## Knowledge Graph via LD Views

<figure id="figuur-3">
  <a href="/assets/images/architectuur-ld-views.png">
    <img src="/assets/images/architectuur-ld-views.png" width="80%" alt="Knowledge Graph architectuur">
  </a>
  <figcaption>
    Figuur 3 ― Een beschrijving van de architectuur hoe wij uiteindelijk naar een laagdrempelige view van de data komen.
  </figcaption>
</figure>

Wanneer we de data in de LD-registraties beschikbaar hebben als Linked Data (volgende de modellen van de bron, bijv. BAG) kunnen we verschillende versimpelingen uitvoeren om de resulterende data in een zogenoemde LD View te stoppen. Op basis van het doel kan ervoor gekozen meerdere van deze views te genereren.  Deze views generen wij met zogenoemde SHACL Rules (ook een open standaard).
Herleidbaar naar de bron van informatie in de view garanderen wij door gebruik te maken van de Provenance standaard (prov).

Een voorbeeld van een dergelijke omzetting is zichtbaar in de volgende data story:

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/kkg/-/stories/ld-views">
    <div class="card">
      <div class="card-type">Use Case</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge graph">
      <div class="card-title">Knowledge Graph via LD Views</div>
      <div class="card-description">Een voorbeeld van hoe we LD views gebruiken om laagdrempelig integrale objecten te realiseren.</div>
    </div>
  </a>
</div>
