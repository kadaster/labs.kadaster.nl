---
banner: /assets/images/lisse.jpg
layout: story
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
Linked Data geschikt is om diverse bronnen te verbinden en zo tot nieuwe
en interessante inzichten te komen.

In een Data Story proberen we een inhoudelijk verhaal te vertellen aan de
hand van data. In dit geval gaat het om de geschiedenis van buitenplaatsen in
Lisse en de bewoners van Lisse.

Voor deze Data Story maken we gebruik van o.a. de volgende bronnen:

- Een SPARQL-endpoint van de Vereniging Oud Lisse met data van o.a. percelen,
  gebouwen, eigenaren, bewoners in Lisse omstreeks 1830.
- [linkeddata.cultureelerfgoed.nl](https://linkeddata.cultureelerfgoed.nl),
  een SPARQL-endpoint van de Rijksdienst voor Cultureel Erfgoed met
  o.a data over monumenten.
- Beeldbank van de Rijksdienst voor Cultureel Erfgoed.
- Beeldbank van Erfgoed Leiden en Omstreken.
- PDOK, een SPARQL-endpoint van het Kadaster dat o.a. de
  basisregistraties ontsluit, alsook informatie uit het Kadastraal
  archief.
- HISCO, een classificatiesysteem voor beroepen van het Internationaal
  Instituut voor Sociale Geschiedenis (IISG).
- WikiData
- Wikipedia
- Delpher

# Data Story “Buitenplaatsen in Lisse”

## Buitenplaatsen

In de 17<sup>de</sup> eeuw groeide de rijkdom van de Amsterdamse
elite. Het aantal renteniers in deze groep nam sterk toe. Rond 1700
had tenminste een derde van de Amsterdamse elite één of meer
buitenhuizen en/of landgoederen. Al vroeg in de Gouden Eeuw werden
buitenplaatsen aangelegd op door droogbemaling nieuwgewonnen land,
maar ook werden ze in grote aantallen achter de duinen en langs
bevaarbare waterwegen gebouwd.

Veel buitenplaatsen zijn verdwenen. Wat behouden is, zien we veelal
terug als monumenten. Laten we onze aandacht eens richten op Lisse,
een dorp dat gelegen is tegen een oude strandwal (duinen) en al in de
17<sup>de</sup> eeuw goed toegankelijk via het water en de weg. In
Lisse ontstonden vele buitenplaatsen.

## Rijksmonumenten

Wat is er nog te vinden van de buitenplaatsen? We starten onze Data
Story met een overzicht van de rijksmonumenten van Lisse op een kaart
([Figuur 1](#rce)). De data is afkomstig van het Linked Data platform
van de RCE.

<figure id="rce">
  <query data-endpoint="https://linkeddata.cultureelerfgoed.nl/sparql"
         data-output="geo"
         data-query-ref="rce.rq">
  </query>
  <figcaption>
    Figuur 1 ― Kaart met monumenten in Lisse.
  </figcaption>
</figure>

Naast de afbeelding op de kaart ([Figuur 1](#rce)) kunnen we de
monumenten met beschrijving ook in een galerij ([Figuur
2](#viewMonumenten)) tonen.

<figure id="viewMonumenten">
  <query data-endpoint="https://linkeddata.cultureelerfgoed.nl/sparql"
         data-output="gallery"
         data-query-ref="viewMonumenten.rq">
  </query>
  <figcaption>
    Figuur 2 ― Galerij met beschrijvingen van monumenten in Lisse.
  </figcaption>
</figure>

## Keukenhof

In het overzicht van de monumenten komen we
[Keukenhof](https://cultureelerfgoed.nl/monumenten/511406) tegen.
Keukenhof is van oorsprong een buitenplaats die gesticht werd in 1641
door commandeur Adriaen Maertensz Block. Het landgoed groeide uit tot
een gebied van ruim 200 ha. De naam Keukenhof is afgeleid van de naam
van het daar gelegenKeukenduyn. Gravin Jacoba van Beieren (1401-1436)
haalde uit het Keukenduin groente en fruit voor de keuken van kasteel
Teylingen.

[Figuur 3](#keukenhof) toont de monumenten die deel uitmaken van
Keukenhof op een kaart.

<figure>
  <query data-endpoint="https://linkeddata.cultureelerfgoed.nl/sparql"
         data-output="geo"
         data-query-ref="keukenhof.rq">
  </query>
  <figcaption>
    Figuur 3 ― Monumenten die deel uitmaken van Keukenhof op een kaart.
  </figcaption>
</figure>

## Minuutplan

[Figuur 4](#figuur-4) laat zien hoe het terrein van Keukenhof er
vroeger heeft uitgezien. De eerste betrouwbare kaarten werden door
het Kadaster gemaakt tussen 1812 en 1830. Die eerste kaarten werden
minuutplans genoemd. De minuutplans van Lisse worden door Erfgoed
Leiden en Omstreken beschikbaar gesteld. [Figuur 4](#figuur-4) laat een minuutplan
van Lisse zien; op deze kaart is het terrein van Keukenhof rond 1812
te zien.

<!-- '''Minuutplan Lisse sectie A blad 1''' -->
<figure id="figuur-4">
  <img src="https://images.memorix.nl/rce/download/1200x1200/a454004e-33cf-bb43-7e66-f169d804c4e1.jpg" height="600">
  <figcaption>
    Figuur 4 ― Minuutplan Lisse Sectie C, blad 2 met daarop het terrein van Keukenhof.
  </figcaption>
</figure>

Door de Vereniging Oud Lisse zijn de minuutplans gedigitaliseerd en
beschikbaar gemaakt als Linked Data. Ook de Oorspronkelijke
Aanwijzende Tafels met eigendomsbeschrijving zijn opgenomen. [Figuur
5](#perceel-achternaam) toont de kaart die op basis van deze bronnen
is opgebouwd, waarop de eigenaren van percelen in 1812 te zien zijn.

<figure id="perceel-achternaam">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/perceel-achternaam">
  </query>
  <figcaption>
    Figuur 5 ― Percelen en hun eigenaren in Lisse in 1812.
  </figcaption>
</figure>

Daarnaast is het mogelijk om de percelen van 1812 af te zetten tegen de huidige informatie die beschikbaar wordt gesteld door Kadaster.
Hierdoor is het mogelijk om te zien hoe Oud Lisse is veranderd naar het huidige Lisse.
[Figuur 5A](#perceel-kadaster) toont de kaart op basis van de bronnen van Oud Lisse met de huidige kaarten van het Kadaster.
In het rood wordt het RegistratieGebied en de stadskernen van Lisse getoond. De blauwe percelen tonen de percelen uit 1812.

<figure id="perceel-achternaam">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/oud-lisse">
  </query>
  <figcaption>
    Figuur 5A ― Percelen uit 1812 en de huidige kaart van Lisse.
  </figcaption>
</figure>

## Eigendom

Tot het begin van de 18de eeuw was Keukenhof in bezit van Amsterdammers. Daar kwam in 1809 een eind aan. Via [Delpher](https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:010077613:mpeg21:a0006) vinden we een advertentie in de oprechte Haarlemse Courant; op 14 september 1809 vindt een verkoping plaats van een hofstede genaamd Keukenhof, in het Regthuis ‘de Zwaan’.

De nieuwe eigenaar van Keukenhof vinden we terug in het Lisse-endpoint. Klik daarvoor op een
perceel in [Figuur 6](#JohanPerceel). De percelen van Keukenhof blijken in bezit van Johan
Steengracht van Oost Cappelle, een Hagenaar. We kunnen ook doorklikken
naar Wikipedia en zien dat Johan een bekende
kunstverzamelaar en museumdirecteur was.

<figure id="JohanPerceel">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/johan-perceel">
  </query>
  <figcaption>
    Figuur 6 ― Percelen die in het bezit waren van Steengracht van Oost Capelle.
  </figcaption>
</figure>

## Amsterdammers in Lisse

Hoe zit het eigenlijk verder met Amsterdammers in Lisse? Bijvoorbeeld Coenraad Jacob Temminck, grootgrondbezitter in Lisse. Daarnaast ook bioloog en de oprichter en eerste directeur van het Rijksmuseum van Natuurlijke Historie in Leiden.
Zijn benoeming staat ook op de website van [Delpher](https://resolver.kb.nl/resolve?urn=ddd:010119517).
Door middel van een bevraging op het Lisse-endpoint vinden we een lijst personen
die percelen in Lisse bezitten én in Amsterdam wonen ([Figuur
7](#AmsterdamPerceel)).

<figure id="AmsterdamPerceel">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/amsterdam-perceel">
  </query>
  <figcaption>
    Figuur 7 ― Amsterdammers die percelen in Lisse bezaten.
  </figcaption>
</figure>

## Beroepen

Buitenplaatsen zorgen voor werkgelegenheid: op de boerderijen, de landerijen, de tuinen en de bediening.  In het Lisse-endpoint is informatie over beroepen uit de Volkstelling 1830 opgenomen.  Via een bevraging krijgen we een tabel ([Figuur 8](#beroepen-oud-lisse)) met de beroepen van de bewoners van Lisse in 1830.

<figure id="beroepen-oud-lisse">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/Beroepen-HISCO-aantal">
  </query>
  <figcaption>
    Figuur 8 ― Beroepen van bewoners in Lisse in 1830.
  </figcaption>
</figure>

Iedere persoon is aan een adres gekoppeld; een deel van de personen heeft een beroep. We kunnen nu een link leggen met de database met beroepenclassificaties van het Instituut voor Sociale Geschiedenis (IISG). Hierdoor kunnen we de kaart van Lisse inkleuren op basis van de HISCO beroepenclassificatie ([Figuur 9](#KaartStatusBeroep)).

De kaart hiernaast toont de werkende bevolking van Lisse.  De kleur geeft aan in welke categorie de werkende valt, volgens de legenda:

<ul>
  <li>
    <svg width="12px" height="12px">
      <circle cx="6" cy="6" r="5" stroke="black" fill="green"></circle>
    </svg>
    Professional, technical and related workers
  </li>
  <li>
    <svg width="12px" height="12px">
      <circle cx="6" cy="6" r="5" stroke="black" fill="black"></circle>
    </svg>
    Administrative and managerial workers
  </li>
  <li>
    <svg width="12px" height="12px">
      <circle cx="6" cy="6" r="5" stroke="black" fill="pink"></circle>
    </svg>
    Clerical and related workers
  </li>
  <li>
    <svg width="12px" height="12px">
      <circle cx="6" cy="6" r="5" stroke="black" fill="yellow"></circle>
    </svg>
    Sales workers
  </li>
  <li>
    <svg width="12px" height="12px">
      <circle cx="6" cy="6" r="5" stroke="black" fill="orange"></circle>
    </svg>
    Service workers
  </li>
    <li>
      <svg width="12px" height="12px">
        <circle cx="6" cy="6" r="5" stroke="black" fill="blue"></circle>
      </svg>
      Agricultural, animal husbandry and forestry workers, fishermen and hunters
    </li>
    <li>
      <svg width="12px" height="12px">
        <circle cx="6" cy="6" r="5" stroke="black" fill="red"></circle>
      </svg>
      Production and related workers, transport equipment operators and labourers
    </li>
</ul>
  <figure id="KaartStatusBeroep">
    <query class="aside-figure" data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/kaart-status-beroep">
    </query>
    <figcaption>
      Figuur 9 ― Kaart ingekleurd op basis van de beroepen van de eigenaren van de verschillende percelen.
    </figcaption>
  </figure>
## Bewoners

In het Lisse-endpoint kunnen we ook bewoners vinden. Selecteer
bijvoorbeeld perceel C191. Dit perceel behoort bij Keukenhof. Op dit
perceel staan twee dienstwoningen, bekend als ['t
Hoogje](https://cultureelerfgoed.nl/monumenten/511416). Op de kaart
([Figuur 10](#Lisse_Statuinsweg_164-166_01)) wordt zichtbaar wie in de
huisjes wonen, hoe oud ze zijn en wat hun beroep is.

<figure id="Lisse_Stationsweg_164-166_01">
  <a href="https://cultureelerfgoed.nl/monumenten/511416" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Lisse_Stationsweg_164-166_01.jpg" height="600">
  </a>
  <figcaption>
    Figuur 10 ― Afbeelding van monument 't Hoogje.
  </figcaption>
</figure>

[Figuur 11](#c191-popup) toont perceel C191 met de bijbehorende bewoners in een popup.

<figure id="c191-popup">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/c191-popup">
  </query>
  <figcaption>
    Figure 11 ― Perceel C191 in Lisse.  Klik op het perceel om een overzicht te zien van de bewoners.
  </figcaption>
</figure>

## Familieboom

Aangezien we in het Lisse-endpoint ook beschikken over
relatie-gegevens, kunnen we de nakomelingen van Petronella Berkel
afbeelden in [Figuur 12](#family-tree).

<figure id="family-tree">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/family-tree">
  </query>
  <figcaption>
    Figuur 12 ― Nakomelingen van Petronella Berkel.
  </figcaption>
</figure>

## Tijdlijn

Niet alleen een familieverband kan worden weergegeven, ook een
tijdlijn voor de bewoners in een huis kan worden weergegeven. [Figuur
13](#woon-tijdlijn) toont de bewoners die door de tijd heen op adres
Broekweg 180 gewoond hebben.

<figure id="woon-tijdlijn">
  <query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/woon-tijdlijn">
  </query>
  <figcaption>
    Figuur 13 ― Tijdlijn van bewoners van Broekweg 180.
  </figcaption>
</figure>

## Tot besluit

De PLDN-werkgroep Digitaal Erfgoed heeft met veel plezier deze webpagina samengesteld. We hopen dat deze webpagina laat zien dat met relatief weinig moeite veel samenhang gebracht kan worden in digitale bronnen voor erfgoed. Wilt u ook bijdragen, meldt u dan aan bij [PLDN](http://www.pilod.nl/wiki/Contact).

<!--
We nemen nu in gepaste vorm afscheid met een paar oude ansichtkaarten van het Kasteel keukenhof, allen afkomstig uit linked data van het Lisse-endpoint.

<figure id="Fotos-endpoint Lisse">
<query data-config-ref="https://data.pldn.nl/werkgroep-digitaal-erfgoed/-/queries/Fotos-uit-endpoint/">
</query>
  <figcaption>
    Figuur 14 ― Foto's van het Oud-Lisse endpoint.
  </figcaption>
</figure>
-->
