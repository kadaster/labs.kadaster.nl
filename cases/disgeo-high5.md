---
layout: page
title: Use Case ― DiS-Geo High 5
---
# Use Case: DiS-Geo High 5

## Introductie

In de week van 8 - 14 Juli 2020 nam het Kadaster samen met enkele andere partijen deel aan de DiS-Geo High 5 rondom Linked Data. In deze inspiratiesprint lag de aandacht op het aantonen van Linked Data voor het bijeenbrengen van de basisregistraties.
Hier willen we bewijzen dat Linked Data geschikt is voor de volgende kernprincipes:
- (Geo-)data integraal beschikbaar
- Data generiek beschikbaar 
- Eén waarheid met een semantisch eenduidig beeld
- Data federatief ontsluitbaar (De data mag op meerdere locaties staan)
- Combinatie Open –en gesloten data mogelijk

 <figure id="figuur-1">
  <a href="/assets/images/sfeerimpressie-high5.jpg">
    <img src="/assets/images/sfeerimpressie-high5.jpg" >
  </a>
  <figcaption>
    Figuur 1 ― Sfeerimpressie van de aftrap van de High 5
  </figcaption>
</figure>

Links naar de opgenomen webinar, bijbehorende slides en de resulterende QA zijn terug te vinden op <a href="https://www.geobasisregistraties.nl/documenten/publicatie/2020/07/20/dis-online-eindpresentatie-innovatiesprint">deze website</a>.


### Use cases
In deze hackathon richtten we ons op het visueel maken van twee use cases waarop de kracht van Linked Data wordt getoond. We beredeneren deze High 5 vanuit het thema **brand**. 
Vanuit de ogen van een meldkamermedewerker, officier van dienst én de Data Analist die achteraf de impact bepaalt wordt gekeken naar de beschikbare data over een eenduidig en eenzelfde fundament.
Deze use case werd ook wel de use case rond de omgeving **Rotterdam** genoemd.  
Daarnaast kijken we ook naar het proces van een provincie binnen de afhandeling van een dergelijke brand, waarbij een medewerker zijn/haar gesloten (interne) data aan de externe Knowledge Graph verbindt 
om te kijken wat dit doet met de waterstromen in de provincie.  Deze tweede use case werd ook wel de use case rond de omgeving **Castricum** genoemd. 

Beide use cases tonen de waarde van het integraal ontsluiten van data aan rondom een operationeel proces. We focussen ons in deze case voor de brandweer rondom de drie verschillende fases van een brand. 
Dit begint met een incident dat binnen komt bij de meldkamer. De meldkamer verzamelt de eerste beschikbare inzichten in het nieuwe incident en speelt deze door naar de verschillende teams die worden ingezet. 
Denk hierbij aan gebouwkarakteristieken, bedrijfsinformatie of belangrijke punten in de omgeving, zoals de dichtstbijzijnde watertoevoer.

Wanneer het incident een tijd duurt geraakt het incident in de operationele planningsfase. Rook verspreidt zich middels de wind over de stad. Dit kan informatie zijn waarop de brandweer 
additionele beslissingen kan nemen, zoals het ontruimen van bepaalde gebouwen in de buurt of het afzetten van de omgeving. Zo is het bijvoorbeeld uit de data interessant om te zien hoe de wind 
zich op dit moment ontwikkelt, of de rook zich richting bijvoorbeeld een kinderopvang beweegt en of er nog additionele risicogebouwen (bijvoorbeeld een vuurwerkopslagplaats) zich in de buurt gevonden. 

Achteraf is er nog nog een analyse fase, waarin provincie, gemeente of waterschap de effecten wil inschatten van het recente incident. Is de infrastructuur en mobiliteit bijvoorbeeld significant geraakt?
Of is er verontreinigd bluswater in het afvoersysteem belandt? Met een combinatie aan statische data en informatie over de fysieke object in de regio kan een goede inschatting worden gedaan van de effecten van de brand.

 <figure id="figuur-2">
  <a href="/assets/images/Stages_Inzicht_Brandweer.PNG">
    <img src="/assets/images/Stages_Inzicht_Brandweer.PNG" >
  </a>
  <figcaption>
    Figuur 2 ― Stages geïdentificeerd in deze use case rondom brand.
  </figcaption>
</figure>

### Resultaten
In de high 5 zijn een aantal concrete demonstrators opgeleverd om de boodschap van ons verhaal kracht bij te zetten. Zo zijn een aantal graph browsers (gebaseerd op Ontodia) opgeleverd om 
door het beschikbare datamodel en diens instantie-data te wandelen. Hiermee laten we zien dat de combinatie aan databronnen van verschillende endpoints aan elkaar te verbinden zijn indien de 
onderliggende datamodellering en opslag op orde is. We brengen de data tesamen in een visuele 3D demonstrator waarbij een sterke focus staat op het verkrijgen van een volledig beeld van de omgeving 
uit de beschikbare data. Hiermee kan de brandweer actief beslissingen nemen over hoe het de brand het beste kan aanpakken. 
 
We beginnen met een incident in de meldkamer. Figuur 3 toont een visualisatie in de Ontodia Graph Browser welke rechtstreeks op ons Linked Data fundament de verschillende data relateert aan het originele incident. 
Hierin zien we informatie uit de BAG (Basisadministratie Adressen en Gebouwen), Handelsregister (van de Kamer van Koophandel), CBS (Betreffende de buurt waar het inligt en diens statistieken) en de data uit het meldkamersysteem zelf. 
Hierbij benadrukken we dat de tool om door de data te browsen op ieder fundament werkt, zo ook met data uit verschillende SPARQL endpoints. 
Speel bijvoorbeeld zelf ook eens in de Graph Browsers met de URI's van het <a href="https://labs.kadaster.nl/demonstrators/graph-browser/ontodia-knowledge-graph/?resource=http://bag.basisregistraties.overheid.nl/bag/id/nummeraanduiding/0599200001005578">Kadaster kantoor in Rotterdam</a>.

 <figure id="figuur-3">
  <a href="/assets/images/Ontodia_Brand.gif">
    <img src="/assets/images/Ontodia_Brand.gif" >
  </a>
  <figcaption>
    Figuur 3 ― De data vanuit deze case gevisualiseerd in een Graph Browser. (Tip: Klik op het figuur voor een uitvergroot beeld)
  </figcaption>
</figure>

Alhoewel deze eerste visualisatie de eerste informatie verschaft voor een meldkamer, is het niet direct de meest gebruikersvriendelijke manier om naar de data te kijken. Om het nut van een goed informatiefundament 
daadwerkelijk te laten landen in een operationeel proces zijn er specifieke toepassingen gewenst die de informatie simpel en laagdrempelig beschikbaar stellen. Zo hebben we in deze High 5 gewerkt aan een 3D Demonstrator,
waarbij 3D data van de <a href="https://www.kadaster.nl/-/actueel-3d-basisbestand-van-heel-nederland-beschikbaar">3D Basisregistratie</a> gelinked is aan de verschillende bronnen die tijdens deze High 5 en 
en uit eerdere trajecten beschikbaar zijn gesteld. Het resultaat is in video vorm beschikbaar gesteld in Figuur 4. In de toekomst zal deze demonstrator ook als live demonstrator beschikbaar worden gesteld op deze website.

 <figure id="figuur-4">
  <video controls loop width="1200">
    <source src="/assets/videos/disgeo.mp4" type="video/mp4">
      Helaas, uw browser kan deze webm video niet weergeven.
    </source>
  </video>
  <figcaption>
    Figuur 4 ― Geïntegreerde Dis-Geo informatie bevraagd vanuit een 3D omgeving.
  </figcaption>
</figure>

<div class="textbox">
  <h2>3D Basisregistratie</h2>
  <p>Sinds Juli 2020 stelt Het Kadaster de actuele 3D Basisregistratie beschikbaar middels PDOK. Het bestand is gebaseerd op topografie uit de Basisregistratie Grootschalige Topografie (BGT), de gebouwen uit de Basisregistratie Adressen en Gebouwen (BAG),
  en de hoogte volledig automatisch gegenereerd uit luchtfotobeelden en het Actueel Hoogtebestand Nederland.</p>
</div>

Voor de laatste fase van deze demonstrator kijken we naar een analyse achteraf. Linked Data loont zich uitstekend voor het doen van uitgebreide (statische analyses). Eén van de tools die je veel op deze website 
kunt vinden zijn onze data stories rondom Linked Data. Hiermee pakken we een combinatie aan SPARQL Queries (en de bijbehorende live resultaten) en tekst om een verhaal te vertellen. 
Ook bij deze case laten we in <a href="/stories/disgeo">een data story</a> zien hoe de onderliggende linked data over mobiliteit (middels NDW gegevens) gebruikt kan worden om de impact van de brand te bepalen.
Het kan echter ook dienen als data selectie, waarbij een gebruiker (bijvoorbeeld een Data Analist of Data Scientist) de data verder oppakt in zijn eigen tool. We laten zien dat het SPARQL resultaat terug gebracht kan worden
naar een CSV en gebruikt kan worden in een (open-source) BI Tool zoals <a href="http://vega.github.io/voyager/">Voyager</a>.

Om in het thema te blijven van het integreren van de Linked Data in het eigen werkproces kijken we ook naar een data story rondom Provincie data in relatie tot bestaande Linked Data zoals de BGT 
uit een <a href="/stories/bgt-high3/">eerdere high 5</a>. In deze case focussen we ons op data in verschillende endpoints (federatie) en de waarde die dit brengt voor een bestaand proces.
We zoomen ook in op de waarde van administratieve links tussen geometrische datasets, waarbij de administratieve koppeling een (semantisch) betere beschrijving biedt van hoe de objecten gerelateert zijn.
Deze demonstrator kun je <a href="/stories/high5-imbor">hier</a> vinden. 

### Conclusies
Deze high 5 was een mooi voorbeeld van wat een kleine ervaren groep in korte tijd kan realiseren. Het was een motiverende en interessante paar dagen, waarbij meerdere disciplines bij elkaar kwamen. 
In deze dagen hebben we met meerdere demonstrator de waarde en huidige tekortkomingen van Linked Data aangetoond. Deze resultaten zijn door Geonovum samengevat in een Lessons Learned document via
<a href="https://geonovum.github.io/disgeo-demo-2/">deze link</a>. Het webinar waarin de resultaten zijn gepresenteerd kun je terugvinden op <a href="https://www.geonovum.nl/themas/linked-data/webinar-dis-geo">deze link</a>.

<div class="cards-wrapper">
  <a href="/stories/disgeo">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/brand.png">
      <div class="card-title">Brand - Analyse achteraf</div>
      <div class="card-description">In deze data story laten we zien hoe mobiliteitsdata van het NDW gebruikt kan worden om een analyse na afloop van een brand te doen in Linked Data of eigen systemen.</div>
    </div>
  </a>
  <a href="/stories/high5-imbor">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/brand.jpg">
      <div class="card-title">Brand - Wat doet dit met je water</div>
      <div class="card-description">In deze story bekijken we de combinatie tussen geometrische analyse en administratieve link in de afhandeling van de brand voor een provincie </div>
    </div>
  </a>
   <a href="/demonstrators/graph-browser">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png">
      <div class="card-title">Graph Browsers</div>
      <div class="card-description">We stellen hier verschillende graaf browsers beschikbaar op onze data.</div>
    </div>
  </a>
</div>
