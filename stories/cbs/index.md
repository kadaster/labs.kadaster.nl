---
layout: story
title: CBS/Kadaster Data Story
---

<h1>CBS/Kadaster Data Story</h1>

<h2>Gemeente uitzoeken</h2>

We zijn op zoek naar een geschikte locatie in de Randstad om te gaan wonen. We denken aan Gouda, Waddinxveen, of Zoetermeer, want dat ligt in de buurt van ons werk. De afstand tot een kinderdagverblijf is heel belangrijk, en de afstand tot een school is ook belangrijk, maar in mindere mate. Op basis van de CBS Wijk- en Buurtkaart vergelijken we deze drie gemeenten op basis van deze twee criteria:

<query data-config-ref="https://data.labs.kadaster.nl/cbs/-/queries/kadaster-cbs-1">
</query>

We zien dat Zoetermeer als beste uit de bus komt, dus laten we eens
kijken of we want meer over Zoetermeer te weten kunnen komen.

<h2>Bevolkingssamenstelling in Zoetermeer</h2>

Laten we eens kijken naar de bevolkingssamenstelling in Zoetermeer
naar leeftijdscategorie. We kunnen dit per wijk opvragen, samen met
het landelijk gemiddelde:

<query data-config-ref="https://data.labs.kadaster.nl/cbs/-/queries/kadaster-cbs-2">
</query>

<h2>Gemiddelde woningwaarde in Zoetermeer</h2>

Wat is de gemiddelde woningwaarde per buurt in Zoetermeer? Op
onderstaande kaart loopt de schaal van blauw (goedkoper), naar geel
(gemiddeld), naar rood (duurder).

<query data-config-ref="https://data.labs.kadaster.nl/cbs/-/queries/kadaster-cbs-3">
</query>

We zien dat het stadscentrum van Zoetermeer relatief goedkoop is.
Laten we daar eens verder gaan kijken.

<h2>Stadscentrum Zoetermeer</h2>

We zoomen in op het stadscentrum van Zoetermeer (buurt <a
href="https://data.labs.kadaster.nl/cbs/wbk/id/buurt/06370002">06370002</a>).
Naast informatie uit de CBS Wijk- en Buurtkaart tonen we nu ook
informatie uit de Basisregistratie Gebouwen (BAG). De kleuren geven de
bouwjaren van de gebouwen weer: van blauw (ouder), naar rood
(nieuwer).

<query data-config-ref="https://data.labs.kadaster.nl/cbs/-/queries/kadaster-cbs-4">
</query>

<h2>Toegankelijkheid voorzieningen</h2>

Laten we ten slotte nog even terugkeren naar de reden waarom we in
Zoetermeer zijn gaan kijken: de goede toegankelijkheid van
voorzieningen zoals kinderdagopvang en scholen. Laten we daar nog de
toegankelijkheid van huisartsen en supermarkten aan toevoegen. Welke
buurt in Zoetermeer biedt de beste toegang tot deze voorzieningen? De
kleuren op de kaart lopen nu van donkerblauw (dicht bij), via
lichtblauw en geel (iets minder dicht bij), naar rood (ver weg).

<query data-config-ref="https://data.labs.kadaster.nl/cbs/-/queries/kadaster-cbs-5">
</query>

<h2>Appendix</h2>

Hierboven hebben we een aantal eigenschappen uit de CBS Wijk- en
Buurtkaart bevraagd, soms in combinatie met data van het Kadaster.
Hieronder volgt een volledige lijst van eigenschappen die in deze
dataset beschikbaar is, samen met het aantal observaties per
eigenschap.

<query data-config-ref="https://data.labs.kadaster.nl/cbs/-/queries/wbk-overzicht">
</query>
