---
layout: story
title: BAG Data Story
---

# BAG Data Story

De Basisregistratie Adressen en Gebouwen (BAG) bevat informatie over
alle adressen en gebouwen in Nederland.  Deze gegevens worden via
verschillende diensten ontsloten.  Één van deze diensten is Linked
Data, waarmee de BAG bevraagd kan worden.  Hieronder volgen enkele
voorbeeld, waarbij gebruik gemaakt wordt van de SPARQL taal voor
Linked Data bevraging.

## Bevraging op basis van postcode

Een veel voorkomende manier om BAG gegevens op te vragen is door een
postcode en (optioneel) huisnummer op te geven ([Bevraging
1](#postcode)).  Sommige adressen hebben bovendien een huisletter
en/of huisnummertoevoeging.

<figure id="postcode">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-postcode"></query>
  <figcaption>
    Bevraging 1 ― Postcode-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van woonplaats & straat

Een andere veel voorkomende manier om BAG gegevens op te vragen is
door een combinatie van woonplaats, straat en huisnummer op te geven
([Bevraging 2](#woonplaats)).

<figure id="woonplaats">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-woonplaats"></query>
  <figcaption>
    Bevraging 2 ― Woonplaats-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van buurt

Één van de voordelen van Linked Data is dat het mogelijk is om
verschillende gegevensbronnen geïntegreerd te bevragen.  [Bevraging
3](#buurt) laat zien hoe de BAG in combinatie met de CBS Wijk- en
Buurtkaart bevraagd kan worden: voor elke buurt worden de
daarbinnengelegen panden teruggegeven.

<figure id="buurt">
  <query data-row data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-buurt"></query>
  <figcaption>
    Bevraging 3 ― Buurt-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van een numerieke range

[Bevraging 4](#range)

<figure id="range">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-range"></query>
  <figcaption>
    Bevraging 4 ― Bouwjaar- en/of oppervlakte-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van gebruiksfunctie

Adressen in Nederland hebben één of meerdere verblijfsfuncties.  In
[Bevraging 5](#functie) worden alle addressen (verblijfsobjecten)
geretourneerd die een specifieke gebruiksfunctie bezitten.

<figure id="functie">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-functie"></query>
  <figcaption>
    Bevraging 5 ― Gebruiksfunctie-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Zelf Linked Data gebruiken

Mocht u eigen selectiecriteria in gedachte hebben, dan kunt u een
eigen bevraging over de BAG opstellen en uitvoeren.  De bovenstaande
bevraging kunnen hiervoor te inspiratie dienen.  Klik op “Show editor“
om de specifieke SPARQL bevraging in te bekijken.  Daarnaast kunnen de
volgende bronnen behulpzaam zijn:

  - Het officiële SPARQL endpoint voor de BAG: https://bag.basisregistraties.overheid.nl/sparql

  - Slides voor de [Kasaster SPARQL Tutorial](./Kadaster-SPARQL-Tutorial.html).

  - Het [Kadaster SPARQL Webinar](./Kadaster-SPARQL-Webinar.html):

<iframe width="560" height="315" src="https://www.youtube.com/embed/oyH8YFVy37Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
