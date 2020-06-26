---
banner: graafschades.webp
layout: story
title: Graafschades in Nederland
---

# Graafschades in Nederland

## Graafschades in Nederland

In Nederland ligt er ongeveer 1.7 miljoen kilometer aan kabels,
buizen, en leidingen onder de grond verspreid.  Het gaat hier om
leidingen voor het transport van olie, water, gas en riolering, maar
ook om datatransport en electriciteit.  Tijdens graafwerkzaamheden in
Nederland kunnen deze kabels en leidingen beschadigen.  Om schade
hieraan te voorkomen, heeft de overheid regels opgesteld met
betrekking to deze graafwerkzaamheden.

In Nederland zijn er bijna 41.000 schademeldingen gedaan in 2019.
Deze hoeveelheid schademeldingen kost niet alleen veel geld, maar kan
ook overlast veroorzaken aan omwonenden, bij bijvoorbeeld schade aan
internet- of electriciteitskabels.

## Schademelding per provincie

Op de kaart in [Figuur 1](#1) zijn de provincies van Nederland
afgebeeld, en wordt het aantal schades per provincie getoond.  De
meeste schademeldingen worden gedaan in de provincie Noord-Brabant,
met 7.661 meldingen 2019.  In datzelfde jaar zijn slechts 664
graafschades gemeld in Flevoland, het kleinste aantal van alle
provinciën.

<figure id="1">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/Per-Provincie">
  </query>
  <figcaption>
    Figuur 1 ― Het aantal schademeldingen per provincie in 2019.
  </figcaption>
</figure>

## Het aantal schademeldingen per thema

De dataset bevat 10 verschillende thema's.  Deze hebben betrekking tot
het type leiding of buis waar de schade over gemeld is.  Het grootste
aantal schades wordt gemeld met betrekking tot het beschadigen van
datatransportkabels ([Figuur 2](#2)).  Hieronder vallen alle kabels
die data transporteren, zoals internet, telefonie en televisie.  Het
kleinste aantal schademeldingen is gerelateerd aan gevaarlijke
leidingen en hoogspanning.

<figure id="2">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/Per-Thema">
  </query>
  <figcaption>
    Figuur 2 ― Het aantal schademeldingen per thema in 2019. De Y-as gebruikt een logaritmische schaal om het aantal meldingen voor elk thema goed zichtbaar te maken.
  </figcaption>
</figure>

## Thema's uitgezet tegenover oorzaken

Naast thema's zijn graafschades voorzien van oorzaken.  Deze geven aan
hoe de graafschades veroorzaakt zijn.  In [Figuur 3](#3) wordt een
Pivot Table gebruikt om een eventueel verband tussen thema's en
oorzaken inzichtelijk te maken.  De kleurcode rood geeft een grote
relatief verband aan.

<figure id="3">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/oorzaak-vs-thema">
  </query>
  <figcaption>
    Figuur 3 ― De thema's voor graafschades uitgezet tegenover de oorzaken (Pivot Table).
  </figcaption>
</figure>

## Schademelding per gemeente

Graafschades kunnen ook per gemeente getoond worden. Hiervoor linken
we de graafschades aan de [CBS Wijk- en buurtkaart
2019](https://data.labs.kadaster.nl/cbs/wbk).  In [Figuur 4](#4) komen
de grote gemeenten (steden) naar voren, mogelijk omdat daar met
werkzaamheden worden verricht, en de situatie in de ondergrond over
het algemeen complexer is (meer kabels en leidingen binnen een klein
gebied).  Het is interessant om te zien dat het aantal meldingen in
Eindhoven relatief laag is, met slechts 19 schademeldingen in 2019.

<figure id="4">
  <query data-row data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/aantal-meldingen-per-gemeente">
  </query>
  <figcaption>
    Figuur 4 ― Het aantal schademeldingen per gemeente.
  </figcaption>
</figure>

## Aantal melding per week van het jaar & per dag van de week

We willen inzicht verkrijgen in de fluctuatie in het aantal meldingen
door de tijd. In onderstaande figuren wordt het aantal meldingen per
dag van de week (maandag t/m zondag, [Figuur 5a](#5a)), alsook het
aantal meldingen per week van het jaar weergegeven (week 1 t/m 52,
[Figuur 5b](#5b)).

Hierdoor is goed te zien wanneer de meeste graafschades worden
veroorzaakt.  In het overzicht in weken kunnen de lage aantal
verklaard worden door de vakanties die in die weken plaatsvinden,
o.a. de dip in de mei vakantie en de bouwvak.

De meeste meldingen worden gedaan op dinsdag, woensdag en
donderdag. Op maandag en vrijdag is het aantal meldingen duidelijk
lager.

<figure id="5a">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/meldingen-door-de-tijd-dag">
  </query>
  <figcaption>
    Figuur 5a ― Het aantal meldingen van graafschades per dag in de week.
  </figcaption>
</figure>

<figure id="5b">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/meldingen-door-de-tijd-week">
  </query>
  <figcaption>
    Figuur 5b ― Het aantal meldingen van graafschades per week in het jaar.
  </figcaption>
</figure>

## Niet altijd op tijd gemeld

Niet alle meldingen van graafschades worden op tijd doorgegeven.
[Figuur 6](#6) laat zien dat soms zit er meerdere jaren vertraging zit
tussen het tijdstip van de werkzaamheden en het tijdstip van de
schademelding.  In het ergste geval wordt een graafschade 19 jaar
later pas gemeld.

<figure id="6">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/Delay-taartdiagram">
  </query>
  <figcaption>
    Figuur 6 ― Het aantal graafschades voor elk aantal jaren verschil tussen het veroorzaken en melden van de graafschade (van 0 tot 19 jaar).  De schaal is logarithmisch.
  </figcaption>
</figure>
