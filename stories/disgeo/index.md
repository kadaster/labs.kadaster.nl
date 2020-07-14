---
banner: /assets/images/2017-cbs-geo2d-afstand.png
layout: story
title: Dis-Geo Data Story
---

# Dis-Geo Data Story

## Perceel

[Figuur 1](#1) toont de perceel informatie voor een specifiek adres
(postcode + huisnummer).

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/perceel-selectie">
  </query>
  <figcaption>
    Figuur 1 ― TBD
  </figcaption>
</figure>

## KvK

[Figuur 2](#2) toont de SBI codes voor een specifieke omgeving
(o.b.v. een geometrisch punt in Nederland).

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/kvk/-/queries/sbi-codes-opzoeken">
  </query>
  <figcaption>
    Figuur 2 ― TBD
  </figcaption>
</figure>

## NDW metingen

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/ndw-metingen">
  </query>
  <figcaption>
    Figuur 3 ― TBD
  </figcaption>
</figure>


## Data Selectie → Data Analyse

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/snelheidsmetingen-nabij-rotterdam-cs">  </query>
  <figcaption>
    Figuur 4 ― TBD
  </figcaption>
</figure>

## Business Intelligence

Linked Data kan op verschillende manieren gebruikt worden binnen
traditionele tools.

- Business Intelligence systeem (BI)
- Geografisch Informatie Systeem (GIS)
- Office applicaties (Microsoft Excel)
- Machine Learning (ML)

In dit geval gebruiken we de bevraging in [Figuur 4](#4) om de NDW
gegevens nabij de locatie in [Figuur 2](#2) te selecteren.  [Figuur
5](#5) laat zien hoe deze linked data selectie vervolgens direct in
een analyse applicatie kan worden ingeladen.  Deze overdracht, van
linked data selectie naar gebruik binnen een analyse omgeving, vindt
plaats op basis van een uitwisselbaar bestand of verloopt via een
connector.

<figure>
  <video controls loop poster="/assets/images/voyager.png" width="1200">
    <source src="/assets/videos/voyager.webm" type="video/webm">
      Helaas, uw browser kan deze webm video niet weergeven.
    </source>
  </video>
  <figcaption>
    Figuur 5 ― Demonstratie van het gebruik van een Linked Data selectie binnen een Business Intelligence (BI) tool (<a href="https://vega.github.io/voyager/" target="_blank">Voyager<a/>).
  </figcaption>
</figure>

