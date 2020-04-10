---
layout: story
title: COVID-19 Data Story
---

# COVID-19 Data Story

Deze Data Story voert live bevragingen uit over de Linked Data versie van de COVID-19 statistieken voor Nederland (gepubliceerd in [deze dataset](https://data.labs.kadaster.nl/rivm/covid-19)).

Het landelijke overzicht van COVID-19 ziekenhuisopnames is weergegeven in [Figuur 1](#kaart).

<figure id="kaart">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-ziekenhuisopnames-kaart">
  </query>
  <figcaption>
    Figuur 1 ― Overzicht van het aantal ziekenhuisopnames per gemeente.
  </figcaption>
</figure>

## Locatie

[Figuur 2](#besmettingspercentage) toont de gemeentes met het hoogste COVID-19 besmettingspercentage.  Het aantal besmettingen is het laatste aantal zoals gepubliceerd door het RIVM.  Het inwoneraantal, gebruikt om het besmettingspercentage vast te stellen, is ontleed aan de [CBS Wijk- en Buurtkaart 2019](https://data.labs.kadaster.nl/cbs/wbk) die eveneens als Linked Data gebpuliceerd is.  [Figuur 3](#grootste-gemeenten) toont het aantal COVID-19 infecties voor de 5 grootste gemeenten in Nederland.

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
    Figuur 3 ― Overzicht van het aantal COVID-19 besmettingen in de 5 grootste Nederlandse gemeenten.
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

## Seke

[Figuur 5](#sekse) toont het verschil in het aantal ziekenhuisopnames en overlijdensgevallen tussen mannen en vrouwen.

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-sekse">
  </query>
  <figcaption>
    Figuur 5 ― Overizicht van de verschillen tussen mannen en vrouwen in het aantal ziekenhuisopnames en overlijdensgevallen.
  </figcaption>
</figure>

# Appendix

Deze Data Story voert live bevragingen uit over de Linked Data versie van de COVID-19 statistieken voor Nederland: [dataset](https://data.labs.kadaster.nl/rivm/covid-19)

Deze data zijn gebaseerd op de door het RIVM gepubliceerde statistieken, zoals aangeboden door het [CoronaWatchNL](https://github.com/J535D165/CoronaWatchNL) project.

Voor de Linked Data beschrijvingen wordt gebruik gemaakt van de internationale [DataCube](https://www.w3.org/TR/vocab-data-cube) standaard, in combinatie met door [SDMX]() vastgelegde terminologie.  Dit geldt voor zowel de data, alsook de metadata.  [Figuur 6](#overzicht) toont de verschillende statistiche verzamelingen (Data Cubes) die worden aangeboden.

<figure id="overzicht">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid-19-overzicht">
  </query>
  <figcaption>
    Figure 6 ― Overzicht van de statistische verzamelingen (Data Cubes) die worden aangeboden in de [COVID-19](https://data.labs.kadaster.nl/rivm/covid-19) dataset.
  </figcaption>
</figure>
