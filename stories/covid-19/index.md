---
layout: story
title: Corona (COVID-19) Data Story
---

# Corona (COVID-19) Data Story

Deze Data Story voert live bevragingen uit over de Linked Data versie van de Corona statistieken voor Nederland (gepubliceerd in [deze dataset](https://data.labs.kadaster.nl/rivm/covid-19)).

[Figuur 1a](#kaart-a) geeft het aantal Corona ziekenhuisopnames per gemeente weer.  [Figuur 1b](#kaart-b) toont het aantal infecties per gemeente.
<!--
Hier wordt het aantal in het ziekenhuis opgenomen patiënten weegegeven per gemeente waar de patiënten woonachtig zijn.
-->

De kleurcodering loopt van koud/blauw voor lage aantallen naar warm/rood voor hoge aantallen:

<table><tr><td>minimum</td><td><img src="/assets/images/jet.png"></td><td>maximum</td></tr></table>

<figure id="kaart-a">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-ziekenhuisopnames-kaart">
  </query>
  <figcaption>
    Figuur 1a ― Overzicht van het aantal ziekenhuisopnames per gemeente.
  </figcaption>
</figure>

<figure id="kaart-b">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-ziekenhuisopnames-kaart">
  </query>
  <figcaption>
    Figuur 1b ― Overzicht van het aantal infecties per gemeente.
  </figcaption>
</figure>

## Locatie

[Figuur 2](#besmettingspercentage) toont de gemeentes met het hoogste Corona besmettingspercentage.  Het aantal besmettingen is het laatste aantal zoals gepubliceerd door het RIVM.  Het inwoneraantal, gebruikt om het besmettingspercentage vast te stellen, is ontleed aan de [CBS Wijk- en Buurtkaart 2019](https://data.labs.kadaster.nl/cbs/wbk) die eveneens als Linked Data gepubliceerd is.  [Figuur 3](#grootste-gemeenten) toont het aantal Corona infecties voor de 5 grootste gemeenten in Nederland.

<figure id="besmettingspercentage">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-besmettingspercentage">
  </query>
  <figcaption>
    Figuur 2 ― Overzicht van de gemeentes met het hoogste besmettingspercentage.
  </figcaption>
</figure>

<figure id="grootste-gemeenten">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-grootste-gemeenten">
  </query>
  <figcaption>
    Figuur 3 ― Overzicht van het aantal Corona besmettingen in de 5 grootste Nederlandse gemeenten.
  </figcaption>
</figure>

## Leeftijd

[Figuur 4](#leeftijd) geeft een overzicht van het aantal overleden patiënten per leeftijdscategorie.

<figure id="covid19-leeftijd-gebaseerd">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-leeftijd">
  </query>
  <figcaption>
    Figure 4 ― Overzicht van het aantal overleden patiënten per leeftijdscategorie.
  </figcaption>
</figure>

## Sekse

[Figuur 5](#sekse) toont het verschil in het aantal ziekenhuisopnames en overlijdensgevallen tussen mannen en vrouwen.

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-sekse">
  </query>
  <figcaption>
    Figuur 5 ― Overzicht van de verschillen tussen mannen en vrouwen in het aantal ziekenhuisopnames en overlijdensgevallen.
  </figcaption>
</figure>

# Appendix

Deze Data Story voert live bevragingen uit over de Linked Data versie van de Corona statistieken voor Nederland: [dataset](https://data.labs.kadaster.nl/rivm/covid-19)

Deze data zijn gebaseerd op de door het RIVM gepubliceerde statistieken, zoals aangeboden door het [CoronaWatchNL](https://github.com/J535D165/CoronaWatchNL) project.

Voor de Linked Data beschrijvingen wordt gebruik gemaakt van de internationale [DataCube](https://www.w3.org/TR/vocab-data-cube) standaard, in combinatie met door SDMX vastgelegde terminologie.  Dit geldt voor zowel de data, alsook de metadata.  [Figuur 6](#overzicht) toont de verschillende statistische verzamelingen (Data Cubes) die worden aangeboden.

<figure id="overzicht">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid-19-overzicht">
  </query>
  <figcaption>
    Figure 6 ― Overzicht van de statistische verzamelingen (Data Cubes) die worden aangeboden in de <a href="https://data.labs.kadaster.nl/rivm/covid-19" target="_blank">Corona</a> dataset.
  </figcaption>
</figure>
