---
layout: page
title: Brondata
---

# Brondata

Zowel bij het Kadaster als bij veel ontwikkelingen om ons heen (Denk aan Common Ground en DiS-Geo) erkennen we dat het belangrijk is dat we Data bij de bron als belangrijk uitgangspunt hanteren. Dit wordt expliciet benoemd in de Datastrategie voor het Kadaster. Maar wat betekent dat?

## Data bij de bron

- Data wordt zo dicht mogelijk uit de bron beschikbaar gesteld.
- Er zijn geen onnodige kopiëen.
- De actualiteit van data is hierdoor (near) real-time.

Het gebruik van de bron is in discussies vaak ambivalent. Immers, de bron kan betekenen:

- Data rechtstreeks bij de absolute bron (bijvoorbeeld voor de BAG het gemeentelijke systeem waar deze wordt ingevoerd).
- Data rechtstreeks bij de Landelijke Voorziening.
- Data in een centrale informatie voorziening welke verantwoordelijk is voor de levering van data (zoals Datahub, PDOK).

Voor de Kadaster Knowledge Graph komt 'data bij de bron' het meest overeen met optie 3. Hierbij worden alle data die getransformeerd zijn naar linked data bij voorkeur benaderd in DataHub en, indien (nog) niet beschikbaar in de DataHub, opgehaald uit PDOK. De DataHUB is de centrale data voorziening voor Kadaster en is toegankelijk voor deze use case via Azure's Databricks. Mochten de gegevens niet beschikbaar zijn in datahub, dan is een voorbereidingsproces gedefinieerd om de informatie uit PDOK te halen.

- **DataHub:** De DataHub als dienst binnen Kadaster kopieert bron data naar een DataHub catalog in Databricks. Zodra de bron beschikbaar is in een Databricks catalog, het is mogelijk om de generatie workflow op deze bron uitvoeren.
- **PDOK + Databricks:** Als de gegevens nog niet beschikbaar zijn in Databricks, worden de gegevens vanuit de bron in PDOK in een Databricks catalog geladen. Deze tweede optie creëert meer afstand tot de broninformatie vergeleken met de eerste optie en blijft daarom een ​​tussenoplossing.

## Bronnen

De onderstaande tabel geeft een overzicht van alle bronnen die zijn gebruikt bij het genereren van de KKG en bevat informatie over de bron van de gegevens.

<table border="1">
  <thead>
    <tr>
      <th>Registratie</th>
      <th>Bron</th>
      <th>Type bestand</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basisregistratie Adressen en Gebouwen (BAG)</td>
      <td>Databricks DataHUB catalog</td>
      <td>Unity catalog table</td>
      <td></td>
    </tr>
    <tr>
      <td>Basisregistratie Grootschalige Topografie (BGT)</td>
      <td>PDOK</td>
      <td>GML</td>
      <td><a href="https://api.pdok.nl/lv/bgt/download/v1_0/full/predefined/bgt-citygml-nl-nopbp.zip">PDOK API</a></td>
    </tr>
    <tr>
      <td>Bestuurlijkge gebieden (BG)</td>
      <td>Databricks DataHUB catalog</td>
      <td>Unity catalog table</td>
      <td></td>
    </tr>
    <tr>
      <td>Basisregistratie Topografie (BRT)</td>
      <td>Databricks DataHUB catalog</td>
      <td>Unity catalog table</td>
      <td></td>
    </tr>
    <tr>
      <td>Basisregistratie Kadaster - Publiekrechtelijke Beperkingen (BRK-PB)</td>
      <td>PDOK</td>
      <td>GPKG</td>
      <td><a href="https://service.pdok.nl/kadaster/wkpb/atom/v1_0/downloads/wkpb.zip">PDOK Service</a></td>
    </tr>
    <tr>
      <td>Digitale Kadastrale Kaart (DKK)</td>
      <td>PDOK</td>
      <td>GML</td>
      <td><a href="https://api.pdok.nl/kadaster/kadastralekaart/download/v5_0/delta/predefined/kadastralekaart-gml-nl.zip">PDOK API</a></td>
    </tr>
    <tr>
      <td>CBS Wijk- en buurtcijfers (CBS)</td>
      <td>PDOK</td>
      <td>GPKG</td>
      <td><a href="https://service.pdok.nl/cbs/wijkenbuurten/2023/atom/downloads/wijkenbuurten_2023_v1.gpkg">PDOK Service</a></td>
    </tr>
    <tr>
      <td>Nationaal Wegen Bestand (NWB)</td>
      <td>PDOK</td>
      <td>GPKG</td>
      <td><a href="https://service.pdok.nl/rws/nwbwegen/atom/downloads/nwb_wegen.gpkg">PDOK Service</a></td>
    </tr>
  </tbody>
</table>

