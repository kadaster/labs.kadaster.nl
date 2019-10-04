---
banner: /assets/images/lisse.jpg
layout: story
published: true
title: PLDN-Werkgroep Digitaal Erfgoed
---

# PLDN-Werkgroep Digitaal Erfgoed

## Achtergrond

Het Platform Linked Data Nederland (PLDN) is een netwerk waarin experts en 
belangstellenden kennis delen over Linked Data. De werkgroep Digitaal Erfgoed 
wil een bijdrage leveren aan de totstandkoming van meer samenhang in 
digitale bronnen voor erfgoed en de totstandkoming van hulpmiddelen voor 
eindgebruikers.

Deze pagina bevat een Data Story waarmee de werkgroep wil laten zien dat
linked data geschikt is om diverse bronnen te verbinden en zo tot nieuwe
en interessante inzichten te komen.

In een Data Story proberen we een inhoudelijk verhaal te vertellen aan de
hand van data. In dit geval gaat het om de geschiedenis van buitenplaatsen in 
Lisse en de bewoners van Lisse.

Voor deze Data Story maken we gebruik van o.a. de volgende bronnen:

* [data.oudlisse.nl](https://data.oudlisse.nl), een SPARQL-endpoint
  van de Vereniging Oud Lisse met data van o.a. percelen, gebouwen,
  eigenaren, bewoners in Lisse omstreeks 1830.
* [linkeddata.cultureelerfgoed.nl](https://linkeddata.cultureelerfgoed.nl),
  een SPARQL-endpoint van de Rijksdienst voor Cultureel Erfgoed met
  o.a data over monumenten.
* Beeldbank van de Rijksdienst voor Cultureel Erfgoed.
* Beeldbank van Erfgoed Leiden en Omstreken.
* PDOK, een SPARQL-endpoint van het Kadaster dat o.a. de
  basisregistraties ontsluit, alsook informatie uit het Kadastraal
  archief.
* HISCO, een classificatiesysteem voor beroepen van het Internationaal
  Instituur voor Sociale Geschiedenis (IISG).
* kbresearch.nl 
* Europeana
* DBpedia
* Delpher
* Digitale Collectie Nederland
* Rijksmuseum

# Data Story “Buitenplaatsen in Lisse”

## Buitenplaatsen

In de 17<sup>de</sup> eeuw groeide de rijkdom van de Amsterdamse
elite.  Het aantal rentieniers in deze groep nam sterk toe.  Rond 1700
had tenminste een derde van de Amsterdamse elite één of meer
buitenhuizen en/of landgoederen.  Al vroeg in de Gouden Eeuw werden
buitenplaatsen aangelegd op door droogbemaling nieuw gewonnen land,
maar ook werden ze in grote aantallen achter de duinen en langs
bevaarbare waterwegen gebouwd.

Veel buitenplaatsen zijn verdwenen.  Wat behouden is, zien we veelal
terug als monumenten.  Laten we onze aandacht eens richten op Lisse,
een dorp dat gelegen is tegen een oude strandwal (duinen) en al in de
17<sup>de</sup> eeuw goed toegankelijk via het water en de weg.  In
Lisse ontstonden vele buitenplaatsen.

## Rijksmonumenten

Wat is er nog te vinden van de buitenplaatsen?  We starten onze Data
Story met een overzicht van de rijksmonumenten van Lisse op een
kaart.  De data is afkomstig van het Linked Data platform van de RCE.

<query data-endpoint="https://linkeddata.cultureelerfgoed.nl/sparql"
       data-output="geo"
       data-query-ref="rce.rq">
</query>

Naast de afbeelding op de kaart kunnen we de monumenten met beschrijving ook in een gallery
view tonen.

<query data-endpoint="https://linkeddata.cultureelerfgoed.nl/sparql"
       data-output="gallery"
       data-query-ref="viewMonumenten.rq">
</query>

In het overzicht van de monumenten komen we Keukenhof tegen. Keukenhof is van oorsprong
een buitenplaats die gesticht werd in 1641 door commandeur Adriaen Maertensz Block. Het
landgoed groeide uit tot een gebied van ruim 200 ha. De naam Keukenhof is afgeleid van het
Keukenduyn. Gravin Jacoba van Beieren (1401-1436) haalde uit het Keukenduin groente en
fruit voor de keuken van kasteel Teylingen.

De keukenhof zien we terug als monument op de website van de RCE  
[Keukenhof](https://cultureelerfgoed.nl/monumenten/511406) de query:

<query data-endpoint="https://linkeddata.cultureelerfgoed.nl/sparql"
       data-output="geo"
       data-query-ref="keukenhof.rq">
</query>

## Minuutplan

Hoe heeft het terrein van Keukenhof er vroeger uitgezien? De eerste betrouwbare kaarten
werden door het Kadaster gemaakt tussen 1812 en 1830. Die eerste kaarten werden
minuutplans genoemd. De minuutplans van Lisse worden door Erfgoed Leiden en Omstreken
beschikbaar gesteld. Zie de volgende kaart.

<!-- '''Minuutplan Lisse sectie A blad 1''' -->
<img src="https://images.memorix.nl/rce/download/1200x1200/a454004e-33cf-bb43-7e66-f169d804c4e1.jpg">

Door de Vereniging Oud Lisse zijn de minuutplans gedigitaliseerd en beschikbaar
gemaakt als linked data. Ook de Oorspronkelijke Aanwijzende Tafels met eigendomsbeschrijving
zijn opgenomen. Zo kunnen we eenvoudig de kaart van 1812 genereren.

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/perceel-achternaam">
</query>

## Eigendom

Het Lisse-endpoint geeft ook eigendomsinformatie. Klik daarvoor op een perceel.
De percelen van Keukenhof blijken in bezit van Johan Steengracht van Oost Cappelle.
We kunnen onmiddellijk doorklikken naar DBpedia en zien een portret en zien dat
Johan een bekende kunstverzamelaar en museumdirecteur was.
<a href="http://nl.dbpedia.org/resource/Johan_Steengracht_van_Oostcapelle">Link naar DBpedia op basis van Johan Steengracht van Oost Capelle</a>

Welke percelen waren in bezit van Steengracht van Oost Capelle? Het Lisse-
endpoint geeft deze informatie.

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/JohanPerceel">
</query>

Hoe zit het eigenlijk verder met Amsterdammers in Lisse? Door middel van een
query op het Lisse-endpoint vinden we een lijst personen die in percelen land
bezitten in Lisse en in Amsterdam wonen.

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/AmsterdamPerceel">
</query>

<!-- ''Kunnen we nog iets leuks doen met deze lijst? Bijvoorbeeld Coenraad Jacob
Temminck; zie DBpedia; eerste directeur van Museum voor Natuur Historie in Leiden'' -->

## Veldwerken

Bij veranderingen aan percelen of gebouwen, wordt door een landmeter van het Kadaster
de nieuwe situatie opgenomen. De tekeningen die in het veld gemaakt worden, worden
Veldwerken genoemd; daarin staat veel meetcijfers en inlichtingen over verkoper en koper.
Het Kadaster bewaart de veldwerken in het Kadastraal archief. Ook het kasteel Keukenhof
is regelmatig verbouwd. De volgende query levert de veldwerken die gekoppeld zijn aan
het perceel van kasteel Keukenhof.

<!-- '''Veldwerken van Kasteel Keukenhof - perceel A255

Query veldwerken erbij (pdok labs endpoint) Kijk naar percelen waar het
kasteel Keukenhof op staat. Voor keukenhof Wouter
vragen om dit even over te nemen.
Zit momenteel niet in de data pdok labs
''' -->

<!--
<query data-endpoint="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/sparql/virtuoso"
       data-output="table"
       data-query-ref="veldwerkenKeukenhof.rq">
</query> -->

<!-- ## Beeldbank

Ellen/Henk/Richard (1 mei) Beeldbanken (rce en lisse/leiden)
[link](https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=keukenhof&mode=gallery&view=horizontal), [link](https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=511406&mode=gallery&view=horizontal&page=1&reverse=0). Op een kaart met popups… Of een gallery… (mocht er een audio/video fragment erbij zijn…het kan)
[link](https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=keukenhof&mode=gallery&view=horizontal), [link](https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=511406&mode=gallery&view=horizontal&page=1&reverse=0). Lisse/ELO:
[link](http://webservices.picturae.pro/mediabank/media?apiKey=c8bf841e-24cc-11e7-a2f6-4394354bd8f8&fq[]=search_t_collection:%22Vereniging%20Oud%20Lisse%22&q=Keukenhof&CC-O).

Deze urls komen bij in de data van lisse (Hans), en kunnen dan wel
in de visualisatie meegenomen worden. (handwerk; filter de foto’s; een
stuk of 10 uitkiezen en URL opnemen) -->

## Beroepen

Buitenplaatsen zorgen voor werkgelegenheid: op de boerderijen, de landerijen, de tuinen
en de bediening. In het Lisse-endpoint is informatie over beroepen uit de Volkstelling 1830 opgenomen. Via een
query krijgen we een tabel met de beroepen van de bewoners van Lisse in 1830.

<!-- '''Tabel met beroepen en voor ieder beroep het aantal van voorkomen''' -->

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/BeroepenOudLisse">
</query>

Ieder persoon is aan een adres gekoppeld een deel van de personen heeft een beroep.
We kunnen nu een link leggen met de database met beroepenclassificaties van het IISG.

<!-- '''Kaartje met beroepenstructuur''' -->

<!-- <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/beroepenStructuur">
</query> -->

<!-- '''Kaartje met afbeelding status beroepen op geografie''' -->
<query data-endpoint="http://data.oudlisse.nl:7200/repositories/ltr"
       data-output="geo"
       data-query-ref="KaartStatusBeroep.rq">
</query>

## Bewoners

In het Lisse-endpoint kunnen we ook bewoners vinden. Selecteer bijvoorbeeld perceel C191.
Dit perceel behoort bij Keukenhof. Op dit perceel staan een twee dienstwoningen, bekend staand
als 't Hoogje. Zie de documentatie van het monument (monumentregister 511416).
Op de kaart wordt zichtbaar wie in de huisjes wonen, hoe oud ze zijn en wat hun beroep is.

<!-- '''Toon foto van monument 511416''' -->

[Keukenhof 't Hoogje](https://cultureelerfgoed.nl/monumenten/511416)

<a href="https://cultureelerfgoed.nl/monumenten/511416" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Lisse_Stationsweg_164-166_01.jpg"></a>

<!-- '''Toon kaart met perceel C191 met popup met bewoners, leeftijd, geslacht, beroep''' -->
<query data-endpoint="http://data.oudlisse.nl:7200/repositories/ltr"
       data-output="geo"
       data-query-ref="C191Popup.rq">
</query>

## Familieboom

Aangezien we in het Lisse-endpoint ook beschikken over relatie-gegevens, kunnen we
de het familieverband van Willem de Koning afbeelden.

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/family-tree">
</query>

## Tijdslijn

Niet alleen een familieverband kan worden weergegeven, ook een tijdslijn over de bewoners in een huis kunnen worden weergegeven. Hieronder worden de bewoners van Broekweg 180 getoond die over de tijd heen hebben gewoond in het huis.

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/woonTijdlijn/3">
</query>

<!-- ## Historische artikelen

Richard (15 april) kijkt erna…Historische krant artikelen? (is dat
linked data?)
[link](https://www.delpher.nl/nl/platform/results?query=keukenhof&coll=platform),
[link](https://kbresearch.nl/xportal/) Richard kijkt. Deadline: paar
weekjes.

## PDOK

Wouter (1 mei) - Huidige data? (BAG?) (betrouwbaarheid door lisse)
http://nl.dbpedia.org/page/Keukenhof BAG BRT Wikidata (via opnemen van
BAG ids van Lisse in wikidata set) Huidige CBS wijk en buurt gegevens
laten zien… (brouwerij/bier nog even naar kijken; klein duimpje)

<query data-endpoint="https://data.pdok.nl/sparql"
       data-output="geo"
       data-query-ref="brk.rq">
</query>

## Persoon

Henk/Hans (1 mei) (met hulp van Wouter/Richard voor het tweede
deel) Focus op persoon: starten bij een persoon (die meerdere
percelen/buitenhuizen bezit in lisse) (met een mooi fotootje uit de
beeldbank van lisse) Wie zijn de beroemde lissenaren? Hebben die een
portret in musea (collectie in amsterdamse musea; en dan
gestandaardiseerd op personen, zodat je verder kan zoeken in
bv. DBpedia)

## Digitale Collectie Nederland

Digitale Collectie Nederland. Europeana. Bijvoorbeeld:
https://www.europeana.eu/portal/en/record/2021663/memorix_3f05695a_c460_9349_71d3_a5532ff69894.html?q=lisse#dcId=1553596917257&p=1
https://data.collectienederland.nl/search/?q=keukenhof SPARQL endpoint
op: https://data.collectienederland.nl/sparql en grafische schil op
https://data.collectienederland.nl/snorql/ (Richard / Wouter gaan Ivo
Zandhuis nog even navragen)

Richard gaat hier volgende week naar kijken.

## Rijksmuseum

Rijksmuseum data…

## DBpedia

DBpedia query op beroemde personen…

<query data-config-ref="https://triplydb.com/wikimedia/dbpedia/queries/lissenaren">
</query>

## NA

Erwin vraagt Ed: welk NA setje mag hier niet ontbreken In de
dataset: gemeentegeschiedenis gebruiken Rein/Erwin/Wouter: maken data
story aan, kopieren tekst.

<query data-config-ref="https://triplydb.com/nationaal-archief/beeldbank/queries/lisse">
</query>

## Tulpen

Erwin-Wouter (15 mei) Iets met namen en bloemennamen….(keukenhof is in de jaren 60 ontstaan) Ludiek ideetje: Voornamen met bloemen (fleur, bloem, madelief, …, misschien via voornamenbank) Tulpen die benoemd zijn naar beroemdheden: is er een beroemde lissenaar met een buitenplaats waarna een tulp is genoemd, en dan doorlinken naar dbpedia europeana, etc… Serpens (marieke) https://www.clariah.nl/projecten/research-pilots/serpens/serpens#abstract Naturalis (leiden): https://www.nederlandsesoorten.nl/ https://www.wikidata.org/wiki/Property:P3405

<query data-config-ref="https://triplydb.com/wikimedia/dbpedia/queries/tulip-hierarchy">
</query>

<query data-config-ref="https://triplydb.com/wikimedia/dbpedia/queries/tulip-gallery">
</query>

## Familieboom

<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/oud-lisse/queries/family-tree">
</query> -->
