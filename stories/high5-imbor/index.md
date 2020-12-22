---
layout: story
title: DiS-Geo High 5 - IMBOR & BGT Data
---

# DiS-Geo High 5: Integratie Linked Data & Geo-data

## Geo-informatie en Linked Data
Binnen gemeenten, overheden en provincies wordt al jaren gewerkt met data, waarvan het veelal een geo-component bevat. Tools zoals ArcGIS en QGIS zijn bij menige afdeling een 
vertrouwde tool in de gereedschapskoffer. Geo data kan veel waarde brengen in dergelijke analyses, maar kan ook misleidend zijn. De informatie die getoond wordt is 
een aaneenschakeling van kaartlagen die over elkaar heen liggen. Deze koppeling is vaak volledig, maar mist ook bepaalde onderdelen:
- Het is onduidelijk wat de daadwerkelijke (semantische) relatie is tussen de gerelateerde objecten
- De interpretatie is een menselijke actie
- Relaties die alleen administratief te leggen zijn ontbreken vaak in het geheel.

[Figuur 1](#1) toont de bijbehorende percelen en diens informatie voor een gegeven adres. Dit is een typische koppeling waarbij de administratieve werkelijkheid anders (kan) zijn dan de geometrische 
koppeling zou suggereren. Deze link beschrijft percelen welke toebehoren (in een akte van overschrijving benoemd zijn) aan een adres. Deze domeinkennis en ownership op het koppelvlak is van vitaal belang.
Vanuit de bronnen DKK (Het open gedeelte van de Basisregistratie Kadaster) wordt deze koppeling met de BAG (Basisadministratie Adressen en Gebouwen) bijgehouden. 

(Vul hier ook een ander postcode + huisnummer in om de koppeling te bekijken).

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/perceel-selectie">
  </query>
  <figcaption>
    Figuur 1 ― De (Administratieve) koppeling tussen percelen (Kadastrale Kaart) en Adressen (BAG) gevisualiseerd.
  </figcaption>
</figure>

## Scenario

We brengen deze problematiek terug naar een scenario waarbinnen een provincie acteert. Er is een incident (brand) waar een grote hoeveelheid bluswater bij vrijkomt. We willen weten waar dit eventueel vervuilde bluswater in de omgeving terecht komt.
Hiervoor beginnen we onze analyse in de Samenhangende Objecten Registratie om de betreffende Put te vinden in IMGeo. Dan zoeken we aanvullende informatie in GWSW. 
Op basis van de informatie in GWSW kunnen we de overstortput vinden waar het bluswater in de omgeving terecht zou komen. Dit kan enkel doordat deze overstortput administratief is verbonden aan onze put uit IMGEO.
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
    Figuur 3 - Inzicht in het corresponderende GWSW object bijbehorend aan de IMBOR data
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


<div class="textbox" markdown="1">
## Federatie in Linked Data
De boodschap achter deze data story is tweeledig. Enerzijds zien we dat een administratieve koppeling tussen objecten kansen biedt om meer integraal analyses uit te voeren over onze data. 
Anderzijds zien we dat de waarde pas echt significant is als de centrale (open) data te koppelen is aan de interne (gesloten) data zonder dat hiervoor een kopieslag nodig is. Dit kan enkel 
indien de onderliggende databases een dergelijke integrale federatieve query ondersteunen. Voor deze high 5 is het een lessons learned dat dit opgenomen moet worden in de standaarden waarmee open 
data beschikbaar moet worden gesteld. Bovenstaande query(s) zouden met de techniek Linked Data in theorie in één query moeten kunnen plaatsvinden.
</div>



