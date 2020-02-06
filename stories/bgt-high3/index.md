---
layout: story
title: BGT High3
---

# BGT High3

## De BGT als Linked Data

De BGT is de enige geo Basisregistratie die niet als Linked Data beschikbaar is. Daarmee is de BGT ook niet integraal bevraagbaar in combinatie met andere datasets. Het Kadaster Data Science Team, Provincie Noord-Holland, CROW en CGI, hebben daarom in 3 dagen (High3 week) een experiment uitgevoerd om de BGT eenmalig om te zetten naar Linked Data, en door middel van een Data Story (deze pagina) wat inzicht te bieden in de mogelijkheden.  

Allereerst zijn we gestart met het omzetten van de BGT naar Linked Data. <a href="#bgt-klasse-histogram">Figuur 1</a> geeft een overzicht van de omvang en het soort objecten dat door ons is omgezet.

Op basis van ons werk is het relatief eenvoudig om de volledige BGT als Linked Data te publiceren.  Een landsdekkende omzetting van de BGT duur met de huidige implementatie ongeveer 2 uur.  Dit kan eventueel sneller gemaakt worden door de code te verbeteren.  Deze 2 uur betreft een éénmalige omzetting.  Dagelijkse updates zouden vervolgens middels delta's kunnen worden toegevoegd.  Dit laatste onderdeel hebben we binnen dit experiment niet geïmplementeerd.

<figure id="bgt-klasse-histogram">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/bgt-klasse-histogram">
  </query>
  <figcaption>
    Figuur 1 ― Object types die voorkomen in de Linked Data BGT.
  </figcaption>
</figure>

## Gebruik van semantiek

We hebben de Linked Data versie van de BGT voorzien van een semantisch model.  Dit betekent dat alle begrippen die in de Linked Data BGT voorkomen gemodelleerd zijn volgens de modernste standaarden.  Dit betreft met name:

<dl>
  <dt>GeoSPARQL</dt>
  <dd>Het door de Open Geospatial Consortium (OGC) gestandaardiseerde datamodel voor geo-spatiële data.</dd>
  <dt>NEN 3610</dt>
  <dd>Het basismodel voor Nederlandse geo-informatiemodellen.</dd>
  <dt>IMGeo</dt>
  <dd>Het objectenhandboek voor de BGT.</dd>
</dl>

<a href="#bgt-klasse-hierarchie">Figuur 2</a> toont een klein deel van dit model, zoals weergegeven in de Linked Data BGT.

<figure id="bgt-klasse-hierarchie">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/bgt-klasse-hierarchie">
  </query>
  <figcaption>
    Figuur 2 ― De BGT is voorzien van semantiek volgens de <a href="https://www.geonovum.nl/geo-standaarden/bgt-imgeo/gegevenscatalogus-imgeo-versie-211" target="_blank">IMGeo gegevenscatalogus</a>: onderverdeling wegdeel.
  </figcaption>
</figure>

## Data integratie: Drie basisregistraties

Nu we de BGT als Linked Data voorhanden hebben, is het eenvoudig om deze te combineren met de volgende basisregistraties die al als Linked Data beschikbaar worden gesteld:

<dl>
  <dt>Basisregistratie Adressen en Gebouwen (BAG)</dt>
  <dd>De officiële registratie voor alle panden en adressen in Nederland.</dd>
  <dt>Basisregistratie Topografie (BRT)</dt>
  <dd>Bevat o.a. gebouwtypes en wegvlakken.</dd>
</dl>

<a href="#3-basisregistraties">Figuur 3</a> geeft een overzicht van de 3 Linked Datasets BAG, BGT, en BRT.  De grootte van de cirkels correspondeert met het aantal instanties.

<figure id="3-basisregistraties">
  <img src="/assets/images/bag-bgt-brt.png">
  <figcaption>
    Figuur 3 ― Drie basisregistraties samengebracht middels Linked Data: BAG, BGT, en BRT.
  </figcaption>
</figure>

## Linked Data: meerdere views op de werkelijkheid

Laten we eens kijken naar een voorbeeld van hoe de 3 basisregistraties hetzelfde object beschrijven.  <a href="#bag-bgt-brt">Figuur 4</a> toont hetzelfde pand volgens de BAG, BGT, en BRT.  Door op de 3 verschillende geometriën te klikken kunnen we naar de respectievelijke basisregistraties doorklikken.  De informatie op één object wordt zo geïntegreerd getoond.

<figure id="bag-bgt-brt">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/bgt-bag-brt-2">
  </query>
  <figcaption>
    Figuur 4 ― Drie Basisregistraties: drie weergaves van hetzelfde gebouw.
  </figcaption>
</figure>

<figure id="foto-havenplein">
  <img src="/assets/images/Havenplein_5.png">
  <figcaption>
    Figuur 4a ― Havenplein 5 Verkeerscentrale Den Helder
  </figcaption>
</figure>

## BGT: de sleutel tot veel databronnen

Maar waarvoor kunnen we die Linked Data BGT nu in de praktijk gebruiken?

De BGT wordt gebruikt in een groot aantal datasets.  <a href="#links" target="_blank">Figuur 5</a> toont de links met andere datasets die in dit experiment zijn gelegd.

<figure id="links">
  <a href="/assets/images/bgt-high3.png" target="_blank">
    <img src="/assets/images/bgt-high3.png">
  </a>
  <figcaption>
    Figuur 5 ― Overzicht van de datasets en links die tijdens de High3 gemaakt en gebruikt zijn.
  </figcaption>
</figure>

## De kwaliteit van wegen (BGT ↔ IMBOR)

Een voorbeeld van zo'n dataset is de IMBOR.  Hierin wordt opgeslagen wat de kwaliteit van proviciale wegdelen is.  De IMBOR dataset is geen open data.  De bevraging in <a href="#kwaliteit-wegdek" target="_blank">Figuur 6</a> kan live worden uitgevoerd door op de afbeelding te klikken, maar alleen als men middels een login-account toegang tot de Linked Data IMBOR heeft.

<figure id="kwaliteit-wegdek">
  <a href="https://data.labs.kadaster.nl/bgt-high3/imbor/queries/kwaliteit-wegdek" target="_blank">
    <img src="/assets/images/noord-holland-kwaliteit-wegdek.png" height="500">
  </a>
  <figcaption>
    Figuur 6 ― Kwaliteit van het wegdek in Noord-Holland.  Bron: Linked Data versie van <a href="https://data.labs.kadaster.nl/bgt-high3/imbor" target="_blank">imbor</a>.
  </figcaption>
</figure>

Naast de kwaliteit van het wegdek wordt in de IMBOR ook opgeslagen wat wanneer wegen zijn aangelegd en wanneer het wegdek voor het laatst vervangen is.  Dit laatste zien we in <a href="#deklaag-vervanging-per-jaar" target="_blank">Figuur 7</a>.

<figure id="deklaag-vervanging-per-jaar">
  <a href="https://data.labs.kadaster.nl/bgt-high3/imbor/queries/deklaag-vervanging-per-jaar" target="_blank">
    <img src="/assets/images/noord-holland-wegdek.png">
  </a>
  <figcaption>
    Figuur 7 ― Aanleg en onderhoud aan het wegdek in Noord-Holland.  Brond: Linked Data versie van <a href="https://data.labs.kadaster.nl/bgt-high3/imbor" target="_blank">imbor</a>.
  </figcaption>
</figure>

## Hoe intensief worden wegen gebruikt? (BGT/BRT ↔ NDW)

Een andere dataset die met de BGT in verband kan worden gebracht is de NDW.  Hierin worden metingen opgeslagen over het weggebruik.

<a href="#intensiteit">Figuur 8</a> geeft een overzicht van enkele wegen in Noord-Holland, waarbij de kleurcode de gemiddelde rijsnelheid om 8 uur 's ochtends aangeeft.  Merk op dat de wegvlakken afkomstig zijn uit de basisregistraties (BGT/BRT).

<figure id="intensiteit">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/ndw">
  </query>
  <figcaption>
    Figuur 8 ― De gemiddelde rijsnelheid op wegen in Noord-Holland om 8 uur 's ochtends.
  </figcaption>
</figure>

## Maatschappelijke problemen oplossen met Linked Data

Omdat de BGT nu als Linked Data beschikbaar is, kunnen we de kwaliteit van de wegen en het gebruik van de wegen gemakkelijk koppelen.  Hierdoor kunnen we drukke wegen identificeren waarvan het wegdek in slechte conditie verkeerd.

Op basis van het combineren van Linked Data kunnen we vaststellen dat het wegdeel in <a href="#werkzaamheden-kaart">Figuur 9</a> moet worden vervangen.  We kunen vervolgens de wettelijke norm hanteren voor het op de hoogte brengen van omwonenden.  In de figuur is te zien welke adressen bij werkzaamheden moeten worden aangeschreven.

<figure id="werkzaamheden-kaart">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/adressen-aanschrijven-kaart">
  </query>
  <figcaption>
    Figuur 9 ― Overzicht van de adressen (BAG) die moeten worden aangeschreven wanneer het geïdentificeerde wegdeel (BGT/BRT) moet worden vervangen.
  </figcaption>
</figure>

Naast de kaart weergave kunnen we ook een tabel weergave maken (<a href="#werkzaamheden-tabel">Tabel 1</a>).  Deze kan direct naar de post afdeling worden gestuurd.

<figure id="werkzaamheden-tabel">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/adressen-aanschrijven-tabel">
  </query>
  <figcaption>
    Tabel 1 ― Overzicht van de adressen (BAG) die moeten worden aangeschreven wanneer het geïdentificeerde wegdeel (BGT/BRT) moet worden vervangen.
  </figcaption>
</figure>

# En dan even iets anders…

Data verlinken gaat niet alleen met data uit de basis registraties. Maar het is ook mogelijk om de data te verrijken met verbindingen uit andere domeinen. In <a href="#bier">Figuur 10</a> zoeken we de dichtstbijzijnde brouwerij op waar na de werkzaamheden het (alcholvrije)-biertje kan worden gedronken.  

<figure id="bier">
  <query data-config-ref="https://data.labs.kadaster.nl/bgt-high3/kennisgraaf/queries/bier">
  </query>
  <figcaption>
    Figuur 10 ― dichtstbijzijnde brouwerij van de werkzaamheden
  </figcaption>
</figure>
