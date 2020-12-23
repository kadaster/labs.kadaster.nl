---
banner: /assets/images/covid-19.jpg
layout: story
title: Corona (COVID-19) Data Story
---

# Corona (COVID-19) Data Story

Deze Data Story voert live bevragingen uit over de Corona statistieken voor Nederland (gepubliceerd in [deze dataset](https://data.labs.kadaster.nl/rivm/covid-19)).  Deze statistieken worden dagelijks up-to-date gehouden.

## Landelijk overzicht

[Figuur 1a](#kaart-a) geeft het totale aantal Corona ziekenhuisopnames per gemeente weer.  Hiervoor wordt de gemeente waarin het ziekenhuis gevestigd is gebruikt.  [Figuur 1b](#kaart-b) geeft het aantal infecties per gemeente weer, waarbij de gemeente waarin de geïnfecteerde patiënt woonachtig is is gebruikt.

<figure id="kaart-a">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-ziekenhuisopnames-kaart">
  </query>
  <figcaption>
    Figuur 1a ― Overzicht van het totale aantal ziekenhuisopnames per gemeente.  De kleurcodering loopt van koud/blauw voor lage aantallen naar warm/rood voor hoge aantallen: <img src="/assets/images/jet.png" alt="jet">
  </figcaption>
</figure>

<figure id="kaart-b">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-infecties-kaart">
  </query>
  <figcaption>
    Figuur 1b ― Overzicht van het totale aantal infecties per gemeente.  De kleurcodering loopt van koud/blauw voor lage aantallen naar warm/rood voor hoge aantallen: <img src="/assets/images/jet.png" alt="jet">
  </figcaption>
</figure>

## Locatie

Het aantal Corona besmettingen verschilt sterk per locatie.  [Figuur 2](#besmettingspercentage) toont de Nederlandse gemeentes met het hoogste Corona besmettingspercentage.  Het aantal besmettingen is gebaseerd op de laatste door het RIVM gepubliceerde statistieken.  Het inwoneraantal, gebruikt om het besmettingspercentage mee vast te stellen, is ontleed aan de [CBS Wijk- en Buurtkaart 2019](https://data.labs.kadaster.nl/cbs/wbk) die eveneens als Linked Data gepubliceerd is.

<figure id="besmettingspercentage">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-besmettingspercentage">
  </query>
  <figcaption>
    Figuur 2 ― Overzicht van de gemeentes met het hoogste besmettingspercentage.
  </figcaption>
</figure>

[Figuur 3](#grootste-gemeenten) toont het aantal Corona infecties voor de 5 grootste gemeenten in Nederland door de tijd heen.  Zoals zichtbaar is in de figuur neemt het aantal besmettingen per gemeente steeds in stapjes toe of af.  Deze ‘getrapte’ weergave is afkomstig uit de brondata, waardoor het soms lijkt alsof verschillende gemeentes hetzelfde aantal besmettingen hebben.

<figure id="grootste-gemeenten">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-grootste-gemeenten">
  </query>
  <figcaption>
    Figuur 3 ― Overzicht van het aantal Corona besmettingen in de 5 grootste Nederlandse gemeenten.
  </figcaption>
</figure>

## Leeftijd

[Figuur 4](#leeftijd) geeft een overzicht van het aantal overleden patiënten van 50 jaar of ouder.

<figure id="covid19-leeftijd-gebaseerd">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-leeftijd">
  </query>
  <figcaption>
    Figure 4 ― Overzicht van het aantal overleden patiënten per leeftijdscategorie.
  </figcaption>
</figure>

## Sekse

[Figuur 5](#sekse) toont het verschil in het aantal overlijdensgevallen tussen mannen en vrouwen.

<figure>
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid19-sekse">
  </query>
  <figcaption>
    Figuur 5 ― Overzicht van de verschillen tussen mannen en vrouwen in het aantal ziekenhuisopnames en overlijdensgevallen.
  </figcaption>
</figure>

## Kadaster data

In het geval van een epidemie is het mogelijk dat ziekenhuizen overbelast raken en capaciteitsproblemen krijgen.  In zulke gevallen kan het interessant zijn om te kijken naar nabijgelegen leegstaande gebouwen van een specifiek type.  [Figuur 6](#hotel) toont het meest nabijgelegen hotel voor ieder ziekenhuis in Nederland.  Het *gebouwtype* (bijv. ziekenhuis, hotel) word door het Kadaster bijgehouden in de [Basisregistratie Topografie (BRT)](https://data.labs.kadaster.nl/kadaster/brt).

<div class="textbox">
  <h2>Probeer het uit</h2>
  <p>Open de query door op de blauwe pijl te klikken.  Onderaan in de tekstuele query, verander het getal `offset 0` om een ander resultaat te bekijken.</p>
</div>

<figure id="hotel">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/hotels-nabij-ziekenhuizen">
  </query>
  <figcaption>
    Figuur 6 ― Hotels nabij ziekenhuizen.
  </figcaption>
</figure>

Naast het gebouwtype wordt tevens de *status* van een gebouw (o.a. of het wel of niet leeg staat) door het Kadaster bijgehouden in de [Basisregistratie Adressen en Gebouwen (BAG)](https://data.labs.kadaster.nl/kadaster/bag).  [Figuur 7](#kantoorpanden) geeft de leegstaande kantoorpanden in terug die het dichtst bij een ziekenhuis in de huurt liggen.

<figure id="kantoorpanden">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/leegstaande-kantoren-nabij-ziekenhuizen">
  </query>
  <figcaption>
    Figuur 7 ― Leegstaande kantoorpanden nabij ziekenhuizen.
  </figcaption>
</figure>

# Appendix

Deze Data Story voert live bevragingen uit over de Linked Data versie van de Corona statistieken voor Nederland: [dataset](https://data.labs.kadaster.nl/rivm/covid-19)

Deze data zijn gebaseerd op de door het RIVM gepubliceerde statistieken, zoals aangeboden door het [CoronaWatchNL](https://github.com/J535D165/CoronaWatchNL) project.

Voor de Linked Data beschrijvingen wordt gebruik gemaakt van de internationale [DataCube](https://www.w3.org/TR/vocab-data-cube) standaard, in combinatie met door SDMX vastgelegde terminologie.  Dit geldt voor zowel de data, alsook de metadata.  [Figuur 6](#overzicht) toont de verschillende statistische verzamelingen (Data Cubes) die worden aangeboden.

Je kunt zelf (her)gebruik maken van de door ons gepubliceerde Linked Data bronnen.  De queries in de deze Data Story kunnen worden aangepast door op de blauwe pijl te klikken.  Zie ook de <a href="/dissemination/Kadaster-SPARQL-Tutorial.html">Kadaster SPARQL Tutorial</a>.

<figure id="overzicht">
  <query data-config-ref="https://data.labs.kadaster.nl/rivm/-/queries/covid-19-overzicht">
  </query>
  <figcaption>
    Figure 6 ― Overzicht van de statistische verzamelingen (Data Cubes) die worden aangeboden in de <a href="https://data.labs.kadaster.nl/rivm/covid-19" target="_blank">Corona</a> dataset.
  </figcaption>
</figure>
