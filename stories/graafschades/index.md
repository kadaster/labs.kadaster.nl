---
banner: graafschades.webp
layout: story
title: Graafschades in Nederland
---

# Graafschades in Nederland 2019

## Graafschades in Nederland

Via KLIC verstrekt het Kadaster informatie over de ligging van kabels en leidingen. Het doel van KLIC is graafschade te voorkomen. In elk geval in januari geven netbeheerders aan of zij in het voorgaande jaar wel of geen schade heeft gehad aan hun net(ten). In 2019 zijn er bijna 41.000 schademeldingen ontvangen.

De schadegegevens van alle netbeheerders worden verzameld om te kijken of de Wet informatie-uitwisseling bovengrondse en ondergrondse netten en netwerken (WIBON) ook echt zorgt voor het verminderen van graafschade.

De hieronder weergegeven visualisaties zijn een proof of concept en gemaakt in samenwerking met het Agentschap Telecom. Ze hebben als doel te onderzoeken of er andere manieren zijn om de schadecijfers te presenteren.


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

De dataset bevat 13 van de 15 KLIC thema’s. Het thema met de grootste aantal gemelde schades is datatransport ([Figuur 2](#2)).  Hieronder vallen alle netten voor het elektrische overbrengen van signaalinformatie. Denk hierbij aan: Internet, telefonie en televisie. 
Het kleinste aantal schademeldingen is gerelateerd aan het thema buisleiding gevaarlijke inhoud. Dit zijn leidingen bedoeld voor de transport van aardgas, brandbare vloeistoffen of andere gevaarlijke stoffen. 

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
tabel gebruikt om een eventueel verband tussen thema's en
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
de grote gemeenten (steden) naar voren, mogelijk omdat daar meer
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

## Aantal schademelding per week van het jaar & per dag van de week

In onderstaande figuren wordt het aantal schademeldingen per dag van de week (maandag t/m zondag,  [Figuur 5a](#5a)), alsook het aantal schademeldingen per week van het jaar weergegeven (week 1 t/m 52, [Figuur 5b](#5b)).

Hierdoor is goed te zien wanneer de meeste graafschades worden veroorzaakt. In het overzicht in weken kunnen de lage aantal verklaard worden door de vakanties die in die weken plaatsvinden, o.a. de dip in de mei vakantie en de bouwvak.
De meeste schades worden gemaakt op dinsdag, woensdag en donderdag. Op maandag en vrijdag is het aantal schades duidelijk lager.


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

## Schadejaar Vs. Jaar KLIC-melding

Niet alle KLIC-meldingen waar schade op geregistreerd is zijn uit 2019. Figuur 6 [Figuur 6](#6) laat zien dat er soms grote verschillen zitten tussen het jaar waarop de schade gemeld wordt en het jaar waarin de KLIC-melding is gedaan. 

<figure id="6">
  <query data-config-ref="https://data.labs.kadaster.nl/agentschap-telecom/-/queries/Delay-taartdiagram">
  </query>
  <figcaption>
    Figuur 6 ― Leeftijd van KLIC-meldingen waarop in 2019 schade is geregistreerd.
  </figcaption>
</figure>
