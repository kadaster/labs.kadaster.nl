---
layout: page
title: Integrale Explorer
---
# Use Case: Integrale Explorer

## Introductie

Als onderdeel van het uitwerken van een nieuwe architectuur voor het ontsluiten van zijn data heeft het Data Science Team gewerkt aan een tweetal demonstrators. 
Eén van deze demonstrators betreft de visie van het Kadaster over integrale explorer. Eén van de speerpunten achter een hernieuwde architectuur heeft een relatie tot de integrale
samengang van de landelijke basisregistraties, samengevat in het <a href = "https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/basisregistraties-en-stelselafspraken/stelsel-van-basisregistraties/stelselplaat/"> Stelsel van Basisregistraties</a>.

Kadaster stelt voor de verschillende registraties die wij beheren verschillende viewers ter beschikking. Zo is de open data van de BAG beschikbaar in de <a href="https://bagviewer.kadaster.nl/lvbag/bag-viewer/#?geometry.x=160000&geometry.y=455000&zoomlevel=0">BAG Viewer</a>
en kunnen gebruikers hun WOZ-waarde opvragen in het <a href="https://www.wozwaardeloket.nl/index.jsp">WOZ Waardeloket</a>. Deze viewers zijn vaak gebaseerd op de silo die zij visualiseren, ook al tonen zij de praktijk vaak overlappende data. 
Figuur 1 toont een bevraging van de beide genoemde viewers in de context van het Kadaster kantoor in Apeldoorn. De huidige aanpak heeft een aantal tekortkomingen:

- Een gebruiker wordt vereist naar verschillende portalen te gaan om alle informatie te verkrijgen die hij/zij van een bepaald object (vaak zijn/haar huis) wil weten.
- Om informatie te verkrijgen over bepaalde objecten, is domeinexpertise nodig om te weten in welke bron het te vinden is. Zo zal niet iedereen weten dat het bouwjaar van ieder pand in de BAG is opgenomen.

<figure id="figuur-1">
  <a href="/assets/images/bagviewer.PNG">
    <img src="/assets/images/bagviewer.PNG" style="height:403px;width:812px;">
  </a>
   <a href="/assets/images/wozwaardeloket.PNG">
    <img src="/assets/images/wozwaardeloket.PNG" style="height:403px;width:812px;">
  </a>
  <figcaption>
    Figuur 1 ― Voorbeeld van de BAG viewer (boven) en het WOZ Waardeloket (onder) 
  </figcaption>
</figure>

## Aanpak

Zoals bij ieder innovatie traject beginnen we door onszelf de vraag te stellen: **Wat willen we precies bewijzen en wat levert het Kadaster op?**

Het antwoord luidt als volgt. Kunnen wij de opzet neerzetten voor een integrale explorer waarbij:
- Objectinformatie over een adres integraal wordt ontsloten
- De data bij de bron blijft staan; Er worden geen onnodige kopieën van de data gemaakt
- Middels Data Lineage / tracing duidelijk wordt welke data uit welke bron komt en hoe deze aan elkaar verbonden is. 

**Daarnaast hanteren we de volgende uitgangspunten:**
-  De demonstrators worden gevoed door (samengestelde) APIs over de verschillende basisregistraties in scope.
-  De data waarover wordt gevisualiseerd en geanalyseerd blijft bij de bron. Voor deze toepassingen wordt geen kopie van de data gemaakt.
-  De demonstrators tonen een doorkijkje naar de toekomst vanuit de architectuur/back-end, maar richten zich primair op de toepassing en waarde voor de eindgebruiker. Het toont een voorbeelduitwerking van hoe het Kadaster zijn data in de toekomst kan organiseren.

### Scope van Demonstrator

Voor deze demonstrator is gekozen een beperkte scope te hanteren. In de analyse die we uitvoeren beperken we onszelf tot de volgende bronnen:
- **BAG**
- **WOZ**
- **PDOK Locatieserver**
- **BRK**
- **CBS Kerncijfers Wijken- en buurten**

Het doel is om in één bevraging de informatie uit deze bronnen integraal te tonen en daarmee een completer beeld van een adres te vormen. Hierbij nemen we bewust een verzameling aan 
open- en gesloten data, en data die zowel binnen als buiten het Kadaster draait. Op die manier tonen we aan dat een integraal beeld (van de leefomgeving) zich niet per se beperkt
tot de data die wij bieden, maar ook tot alle andere data die (semi-)overheden, maar ook marktpartijen en de gebruikers zelf bieden.

## Datamodel van de registraties en integrale bevraging

In bovenstaande introductie praten we voornamelijk over functionele eisen die wij aan onze demonstrator stellen. Uiteraard is er ook een techniek waarmee we deze demonstrator bewerkstelligen.
Om geïntegreerd en real-time bevragingen te kunnen uitvoeren maken wij gebruik van de querytaal <a href = "https://graphql.org/">GraphQL</a>. GraphQL is een graaf-gebaseerde API waarmee
een verscheidenheid aan bronnen integraal mee beschikbaar wordt gesteld. GraphQL is een **federatieve** en **virtualisatie** laag. Dat wil zeggen dat 
1. De data uit verschillende back-ends mag komen, waarbij GraphQL de verdeling van de vraag naar deze endpoints orkestreert.
2. De data alleen virtueel integraal ontsloten wordt. Geen enkele data wordt gekopieerd, maar de data wordt alleen tussen de virtuele laag en de eindgebruiker doorgegeven. 

Een voorbeeld van een GraphQL bevraging waarbij meerdere objecten en diens informatie worden bevraagd vind je in Figuur 1.

<figure id="figuur-2">
  <a href="/assets/images/integralequery.gif">
    <img src="/assets/images/integralequery.gif">
  </a>
  <figcaption>
    Figuur 2 ― Een integrale bevraging aan het GraphQL endpoint met een verzameling aan beschikbare data over één adres.
  </figcaption>
</figure>
<br>
In GraphQL, net als in een reguliere REST API, is het belangrijk een bepaalde ingang te definiëren. Neem als voorbeeld de <a href = "https://bag.basisregistraties.overheid.nl/restful-api?articleid=1927964">BAG-API</a>.
Ook hier is het gemakkelijk om informatie op te vragen over één object, zoals de informatie van één Pand of Nummeraanduiding. In GraphQL is dit in theorie niet anders. 
Het is dan ook gemakkelijk om te zien hoe GraphQL, net als een reguliere REST-API, goed om kan gaan met enkelvoudige object-georiënteerde bevragingen.

Voor deze specifieke use case gebruiken we als ingang de PDOK Locatieserver. Het idee hierachter is triviaal. Deze server biedt de mogelijkheid om vanuit vrije tekst (Postcode + huisnummer)
het relevante BAG Adres er bij te zoeken. We willen de gebruiker niet belasten met de kennis die noodzakelijk is om te weten dat de BAG het ingangspunt is voor een adres. Het resultaat van de de locatieserver bevat een verwijzing naar de BAG. 

<div class="textbox" markdown="1">
## PDOK Locatieserver

Adressen en stadsnamen zijn voorbeelden van concepten waar vaak typfouten in ontstaan, maar tegelijkertijd van levensbelang zijn om een (unieke) locatie aan een vraag toe te wijzen.
De Locatieserver van Publieke Dienstverlening Op de Kaart(PDOK) biedt een API om adressen te verifiëren aan de hand van de bestaande adressen in de BAG.  Deze biedt tevens standaardisatie voor de gegevens waarin ze officieel in de bron zitten.  
Zo kent hij Den Haag als 's-Gravenshage en maken we mbv deze service van de Kogelaan in Zwolle de Koggelaan, in lijn met het adres wat we daar kunnen vinden.
</div>



## Resultaten visualiseren in een front-end

Wanneer de data bereikbaar is gemaakt middels GraphQL, ontwikkelen we een front-end applicatie die met deze ontsluitingslaag interacteert. Dit is een voorbeeld van een applicatie 
zoals die - zowel voor het Kadaster als voor eventuele marktpartijen of partners - eruit kan zien indien de data aan de achterkant op een correcte manier wordt ontsloten. Dit vereist echter wel dat 
we goed om gaan met wie welke data mag zijn. We simuleren deze scheiding tussen open en gesloten data met een login scherm. Enkel met een account kan vertrouwelijks informatie worden bekeken 
over bijvoorbeeld de WOZ waarde of de Akte bijbehorend aan een Kadastraal recht. 

<figure id="figuur-3">
  <a href="/assets/images/login_integrale_explorer.PNG">
    <img src="/assets/images/login_integrale_explorer.PNG">
  </a>
  <figcaption>
    Figuur 3 ― Weren aan de deur. Alleen met de juiste toestemming kan je je data zien. 
  </figcaption>
</figure>
<br>

Wanneer men ingelogd is kan er gezocht worden op basis van de combinatie postcode en huisnummer. Deze wordt, net als in de eerder getoonde GraphQL query meegegeven aan de locatieserver
en daar wordt meteen een integrale bevraging gestuurd richting ons GraphQL endpoint gestuurd. De resultaten worden inzichtelijk gemaakt op de kaart en in tabellen. 

Een voorbeeld van het resultaat vind je in Figuur 4.
<figure id="figuur-4">
  <a href="/assets/images/integraleexplorer.PNG">
    <img src="/assets/images/integraleexplorer.PNG">
  </a>
  <figcaption>
    Figuur 4 ― Een voorbeeld visualisatie in de Integrale Explorer
  </figcaption>
</figure>

## Tracability en Data Lineage

Een belangrijk onderdeel van het tonen van geïntegreerde data is de manier waarop deze data integraal met elkaar verbonden is. Over welke facetten is er gekoppeld? Waar komt de data vandaan?
Heeft deze data wel het kwaliteitskeurmerk dat we van het Kadaster kunnen verwachten. Om deze vragen te kunnen beantwoorden ligt een belangrijke focus op het inzichtelijk maken van de herkomst van de data. 
Zo weet de gebruiker wie er verantwoordelijk is voor de onderliggende data, en weten we hoe het aan elkaar is verbonden. Figuur 5 toont een simplistisch beeld van hoe de lineage in deze specifieke bevraging
inzichtelijk kan worden gemaakt. 

<figure id="figuur-5">
  <a href="/assets/images/lineageexplorer.PNG">
    <img src="/assets/images/lineageexplorer.PNG">
  </a>
  <figcaption>
    Figuur 5 ― Data Lineage en de geraadpleegde bronnen laagdrempelig beschikbaar gesteld.
  </figcaption>
</figure>

