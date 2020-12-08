---
layout: story
title: BAG Data Story
---

# BAG Data Story


De Basisregistratie Adressen en Gebouwen (BAG) bevat informatie over
alle adressen en gebouwen in Nederland.  De data uit de BAG wordt op
verschillende manieren ontsloten.  Één van deze manier is Linked Data,
waarmee de BAG bevraagd kan worden.  Linked Data is een nieuwe manier
om gegevens te representeren, combineren, en op het Internet te
ontsluiten.  Om Linked Data te kunnen bevragen maken wij gebruik van
SPARQL.  SPARQL is de gestandaardiseerde bevragingstaal voor Linked
Data.

Hieronder zijn enkele voorbeelden van bevragingen over de BAG.  Het
mogelijk is om de bevraging aan te passen door waardes in te vullen in
de invoervelden.  Het is ook mogelijk om de bevraging direct aan te
passen, door de ‘editor’ component te openen.

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

## Bevraging op basis van een numerieke filter

Gevens kunnen op verschillende manieren worden opgevraagd.  In
[Bevraging 2](#filter) is het ook mogelijk om adressen en gebouwen met
een specifieke oppervlakte of met een specifiek bouwjaar te op te
vragen.

<figure id="filter">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-range">
  </query>
  <figcaption>
    Bevraging 2 ― Bouwjaar- en/of oppervlakte-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van woonplaats & straat

Een andere veel voorkomende manier om BAG gegevens op te vragen is
door een combinatie van woonplaats, straat en huisnummer op te geven
([Bevraging 3](#woonplaats)).

<figure id="woonplaats">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-woonplaats">
  </query>
  <figcaption>
    Bevraging 3 ― Woonplaats-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van buurt

Één van de voordelen van Linked Data is dat het mogelijk is om
verschillende gegevensbronnen geïntegreerd te bevragen.  [Bevraging
4](#buurt) laat zien hoe de BAG in combinatie met de CBS Wijk- en
Buurtkaart bevraagd kan worden: voor elke buurt worden de
daarbinnengelegen panden teruggegeven.

<figure id="buurt">
  <query data-row data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-functie-cbs-buurt">
  </query>
  <figcaption>
    Bevraging 4 ― Buurt-gebaseerde bevraging van de BAG.
  </figcaption>
</figure>

## Bevraging op basis van gebruiksfunctie

Adressen in Nederland hebben één of meerdere verblijfsfuncties.  In
[Bevraging 5](#functie) worden alle addressen (verblijfsobjecten)
geretourneerd die een specifieke gebruiksfunctie bezitten.

<figure id="functie">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-functie">
  </query>
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

  - Het officiële SPARQL endpoint voor de BAG: <https://data.labs.kadaster.nl/kadaster/bag/sparql/bag>

  - Slides voor de [Kasaster SPARQL Tutorial](/dissemination/Kadaster-SPARQL-Tutorial.html).

  - Het [Kadaster SPARQL Webinar](/dissemination/Kadaster-SPARQL-Webinar.html):

<iframe width="560" height="315" src="https://www.youtube.com/embed/oyH8YFVy37Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
