---
banner: /assets/images/disgeo-banner.png
layout: story
title: Doorontwikkeling in Samenhang van de geo-basisregistraties (Dis-Geo)
---

# Doorontwikkeling in Samenhang van de geo-basisregistraties (Dis-Geo)

De afgelopen jaren is er hard gewerkt aan de opbouw van maatschappelijk waardevolle basisregistraties en andere voorzieningen in het geo-informatiedomein. Het resultaat van deze inspanningen mag er zijn.  Zie de [Dis-Geo website](https://www.geobasisregistraties.nl/basisregistraties/doorontwikkeling-in-samenhang) voor meer informatie over dit initiatief.

## Omgeving selecteren in linked data

[Figuur 1](#1) toont de linked data bevraging waarmee de 3D omgeving
kan worden opgevraagd op basis van gegevens uit de [Basisregistratie
Adressen en Gebouwen
(BAG)](https://data.labs.kadaster.nl/kadaster/bag).  De kleurcode
geeft de voor dat gebouw meest voorkomende gebruiksfunctie weer.  Voor
alle BAG panden in Nederland is een gedetailleerde omtrek bekend, en
voor de meeste BAG panden is ook de hoogste hoogte bekend.  Vooralsnog
is voor de meeste gebouwen nog geen verder detail (bijvoorbeeld
dakconstructie) bekend. geen verder detail.  van BAG panden is kan
worden opgevraagd.  Kadaster.  SBI codes voor een specifieke omgeving
(o.b.v. een geometrisch punt in Nederland).

<table>
<tbody>
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="yellow" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met onderwijsfunctie.
    </td>
  </tr>
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="lightblue" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met bijeenkomstfunctie
    </td>
  </tr>
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="orange" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met kantoorfunctie
    </td>
  </tr>
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="grey" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met industriefunctie
    </td>
  </tr>
  <!--
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="green" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met sportfunctie
    </td>
  </tr>
  -->
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="blue" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met winkelfunctie
    </td>
  </tr>
  <tr>
    <td>
      <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" fill="green" r="10"/>
      </svg>
    </td>
    <td>
      Verblijfsobject met woonfunctie
    </td>
  </tr>
</tbody>
</table>

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/3d-selectie-rotterdam">
  </query>
  <figcaption>
    Figuur 1 ― Overzicht van de omgevingsinformatie voor een punt in Rotterdam.  De gegevens zijn afkomstig van het Kadaster en de Kamer van Koophandel.
  </figcaption>
</figure>

## NDW metingen

Welke gegevens zijn er nog meer beschikbaar voor deze regio?  De
Nationale Databank Wegverkeersgegevens (NDW) bevat een groot aantal
verkeersmetingen.  Hiermee is het mogelijk om het gebruik van wegen
inzichtelijk te maken en te analyseren.  De meetpunten die op dit
moment voor Rotterdam voorhanden zijn worden in [Figuur 2](#2)
weergegeven.

<figure id="2">
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/ndw-metingen">
  </query>
  <figcaption>
    Figuur 2 ― Locaties van de verkeersmetingen die het Nationale Databank Wegverkeersgegevens (NDW) verricht binnen Rotterdam.
  </figcaption>
</figure>


## Data Selectie → Data Analyse

We nemen de meetlocatie die het dichtste in de buurt ligt van de
locatie in [Figuur 1](#1).  Voor die meetlocatie vragen we vervolgens
alle metingen op.  Metingen zijn verricht op verschillende dagen in de
maart 2020.  [Figuur 3](#3) toont de volledige tabel met meetgegevens
voor dat punt.

<figure id="3">
  <query data-config-ref="https://data.labs.kadaster.nl/disgeo/-/queries/snelheidsmetingen-nabij-rotterdam-cs">
  </query>
  <figcaption>
    Figuur 3 ― Tabel met de verkeersmetingen voor één specifieke locatie binnen Rotterdam.
  </figcaption>
</figure>

## Data Analyse

Linked data kunnen op verschillende manieren gebruikt worden binnen
verschillende applicaties.  Denk hierbij aan de volgende applicatie
categorieën:

- Business Intelligence systeem (BI)
- Geografisch Informatie Systeem (GIS)
- Office applicaties (Microsoft Excel)
- Machine Learning (ML)

In [Figuur 4](#4) tonen we een korte gebruikssessie waarbij de
gegevens uit [Figuur 3](#3) worden ingeladen in een Business
Intelligence (BI) applicatie.  Merk op dat de linked data direct
kunnen worden ingelezen in de applicatie.  Linked data kan in
verschillende formaten worden uitgewisseld, waardoor het direct
bruikbaar is in de meeste applicaties.  (Linked data uitwisselformaten
zoals CSV, JSON, XML, en RDF worden ondersteund.)

<figure id="4">
  <video controls loop poster="/assets/images/voyager.png" width="1200">
    <source src="/assets/videos/voyager.webm" type="video/webm">
      Helaas, uw browser kan deze webm video niet weergeven.
    </source>
  </video>
  <figcaption>
    Figuur 4 ― Demonstratie van het gebruik van een Linked Data selectie binnen een Business Intelligence (BI) tool (<a href="https://vega.github.io/voyager/" target="_blank">Voyager</a>).
  </figcaption>
</figure>
