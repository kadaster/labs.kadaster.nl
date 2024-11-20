---
layout: page
title: Brondata
nav_order: 2
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

Voor de Kadaster Knowledge Graph komt 'data bij de bron' het meest overeen met optie 3. Hierbij worden alle data die getransformeerd zijn naar linked data bij voorkeur benaderd in DataHub en, indien (nog) niet beschikbaar in de DataHub, opgehaald uit PDOK. De DataHUB is de centrale data voorziening voor Kadaster en is toegankelijk voor deze use case via Azure's Databricks. Mochten de gegevens niet beschikbaar zijn in datahub, dan is een voorbereidingsproces gedefinieerd om de informatie uit PDOK te halen. Dit wordt in de volgende sectie [beschreven](pipeline.md).

- **DataHub:** De DataHub als dienst binnen Kadaster kopieert bron data naar een DataHub catalog in Databricks. Zodra de bron beschikbaar is in een Databricks catalog, het is mogelijk om de generatie workflow op deze bron uitvoeren.
- **PDOK + Databricks:** Als de gegevens nog niet beschikbaar zijn in Databricks, worden de gegevens vanuit de bron in PDOK in een Databricks catalog geladen. Deze tweede optie creëert meer afstand tot de broninformatie vergeleken met de eerste optie en blijft daarom een ​​tussenoplossing.

Beide benaderingen worden [hier](pipeline.md) uitgebreider uitgelegd.

## Bronnen

De onderstaande tabel geeft een overzicht van alle bronnen die zijn gebruikt bij het genereren van de KKG en bevat informatie over de bron van de gegevens.

| Registratie | Bron | Type bestand | URL |
| ----- | ---- | ---- | ---- |
| Basisregistratie Adressen en Gebouwen (BAG) | Databricks DataHUB catalog | Unity catalog table | 
| Basisregistratie Grootschalige Topografie (BGT) | PDOK | GML | [PDOK API](https://api.pdok.nl/lv/bgt/download/v1_0/full/predefined/bgt-citygml-nl-nopbp.zip) |
| Bestuurlijkge gebieden (BG) | Databricks DataHUB catalog | Unity catalog table |
| Basisregistratie Topografie (BRT) | Databricks DataHUB catalog | Unity catalog table |
| Basisregistratie Kadaster - Publieksrechtelijke Beperkingen (BRK-PB) | PDOK | GPKG | [PDOK Service](https://service.pdok.nl/kadaster/wkpb/atom/v1_0/downloads/wkpb.zip) |
| Digitale Kadastrale Kaart (DKK) | PDOK | GML | [PDOK API](https://api.pdok.nl/kadaster/kadastralekaart/download/v5_0/delta/predefined/kadastralekaart-gml-nl.zip) |
| CBS Wijk- en buurtcijfers (CBS) | PDOK | GPKG | [PDOK Service](https://service.pdok.nl/cbs/wijkenbuurten/2023/atom/downloads/wijkenbuurten_2023_v1.gpkg) |
| Nationaal Wegen Bestand (NWB) | PDOK | GPKG | [PDOK Service](https://service.pdok.nl/rws/nwbwegen/atom/downloads/nwb_wegen.gpkg) |
