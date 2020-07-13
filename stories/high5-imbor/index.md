---
layout: story
title: DiS-Geo High 5 - IMBOR & BGT Data
---

# Samenhangende Objecten Registratie en aanvullende domein modellen

Deze datastory laat zien hoe de Samenhangende Objecten Registratie (SOR) kan werken in combinatie met aanvullende domein modellen.
Met linked data kunnen we gegevens uit de SOR in samenhang met aanvullende registraties gebruiken. In dit voorbeeld worden GWSW en IMBOR gebruikt in combinatie met de BGT.

<figure id="figuur-1">
  <a href="/assets/images/sor-houtskoolschets.png">
    <img src="/assets/images/sor-houtskoolschets.png">
  </a>
  <figcaption>
    Figuur 1 ― Houtskoolschets van Samenhangende Objecten Registratie
  </figcaption>
</figure>

## Scenario

Er is een incident (brand) waar een grote hoeveelheid bluswater bij vrijkomt. We willen weten waar dit eventueel vervuilde bluswater in de omgeving terecht komt.
Hiervoor beginnen we onze analyse in de SOR om de betreffende Put te vinden in IMGeo. Dan zoeken we aanvullende informatie in GWSW. 
Op basis van de informatie in GWSW kunnen we de overstortput vinden waar het bluswater in de omgeving terecht zou komen.
Vanaf deze plek zoeken we in de SOR over welke terreindelen het gaat. Tenslotte bevragen we via Ontodia de organisatie specifieke IMBOR kennisgraph over aanvullende informatie van dit terreindeel. 

<figure id="figuur-1b">
  <a href="/assets/images/sor-aanvullend-story.png">
    <img src="/assets/images/sor-aanvullend-story.png">
  </a>
  <figcaption>
    Figuur 2 ― Overzicht van de betrokken databronnen
  </figcaption>
</figure>

### Queries

1) Zoek de corresponderende GWSW Rioolput bij de IMGEO put (gebruikt dus de linkset tussen IMGeo en GWSW)
<figure id="2">
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/Select-put-imbor-rioolput-gwsw">
  </query>
  <figcaption>
    Figuur 3 - Inzicht in het correspondere GWSW object bijbehorend aan de IMBOR data
  </figcaption>
</figure>

2) Zoek in GWSW de dichtstbijzijnde Overstortput die via het rioolstelsel verbonden is met de betreffende rioolput (dus niet alleen hemelsbreed)
<figure id="3">
  <query data-query-ref="gwsw-rioolput-stelsel-overstortput.rq" data-endpoint="https://sparql.gwsw.nl/repositories/TestDatastory" data-output="geo">
  </query>
  <figcaption>
    Figuur 4 - Zoek de dichtstbijzijnde overstortpunt (administratief) verbonden via het rioolstelsel.
  </figcaption>
</figure>

3) Zoek in de BGT welke terreindelen er bij deze overstortput liggen (zou een gefedereerde geosparql query moeten zijn, maar die werkt dus niet...) 

<figure id="4">
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/dichtstbijzijnde-vlak-bij-punt">
  </query>
  <figcaption>
    Figuur 5 - Bijbehorende BGT Terreindeel
  </figcaption>
</figure>


