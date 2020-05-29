---
layout: story
title: Bag selectie datastory
---

# Bag-datastory

Vind een of meerdere BAG panden (bv. uw huis) door de criteria in te vullen.

## Eigen huis

De volgende vraag kan gebruikt worden om specifieke panden (inclusief woonhuizen) te vinden. De informatie voor een
specifiek pand kan worden opgevraagd door informatie over het op te vragen pand in het tekst veld hieronder in te
vullen. Met behulp van deze bevraging is het mogelijk om uw eigen huis, of straat op te vragen uit de basis registratie
adressen en gebouwen. Met deze bevraging is het niet alleen mogelijk om een huis op te vragen, het is ook mogelijk om de
gegevens van een hele postcode op te vragen. In het tekstveld hieronder kan de postcode worden ingevuld en worden nu
alle adressen met deze postcode weergegeven in de tabel hieronder.

<figure id="eigen-huis">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-selectie-query-1" > </query>
  <figcaption>
    Figuur 1 ― Eigen huis.
  </figcaption>
</figure>

## Andere criteria

Er zijn ook andere criteria die gebruikt kunnen worden om een selectie op de basis registratie adressen en gebouwen uit
te voeren. In de onderstaande tekst velden kunnen het bouwjaar, de oppervlakte, woonplaats worden
ingevuld. Bijvoorbeeld, geef mij alle gebouwen van voor het jaar 1900 in Dordrecht.

<figure id="woonplaats-oppervlakte-bouwjaar">
  <query data-row data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-selectie-query-2"> </query>
  <figcaption>
    Figuur 2 ― Andere criteria.
  </figcaption>
</figure>

## Eigen buurt

Het is ook mogelijk om met behulp van criteria uit andere bronnen een selectie uit de basis registratie adressen en
gebouwen te halen. Er is namelijk een link gelegd tussen de basis registratie adressen en gebouwen en de CBS gemeentes,
wijken en buurten. Hierdoor is het mogelijk om met een bevraging een buurt uit de CBS te gebruiken als criteria voor de
selectie van de gebouwen uit de basis registratie adressen en gebouwen. In het tekstveld hieronder kunt u de naam van uw
buurt invullen en krijgt u de adressen in die buurt terug.

<figure id="Buurt">
  <query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/-/queries/bag-cbs-selectie-query"> </query>
  <figcaption>
    Figuur 3 ― Eigen buurt.
  </figcaption>
</figure>

## Extra informatie

Mocht u eigen selectie criteria hebben, met behulp van de schakelaar de bevraging zien die op de dataset wordt
uitgevoerd. de bevraging kan worden aangepast worden en opnieuw worden uitgevoerd om een andere selectie terug te
krijgen.
