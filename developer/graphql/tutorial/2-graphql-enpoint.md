---
layout: page
title: GraphQL Tutorial Stap 2 - Maken van een GraphQL query
---

# Maken van een GraphQL query

*Bevraag de data met een krachtig query-paradigme*

***

In dit onderdeel van de tutorial maken we je wegwijs in het GraphQL queryparadigma en laten we je kennis maken met het GraphQL endpoint, waarmee jij snel je eerste query kunt testen.

<div class="textbox" markdown="1">
## GraphQL Tutorial

- [Stap 0 - Introductie](/developer/graphql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/graphql/tutorial/1-Exploreer-het-datamodel)
- **[Stap 2 - GraphQL en het GraphQL endpoint](/developer/graphql/tutorial/2-graphql-enpoint)**
- [Stap 3 - Gebruik van eigen programmeertaal](/developer/graphql/tutorial/3-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 2 van de tutorial, kun je aan je collega's uitleggen:

- Hoe je een simpele GraphQL query kunt opbouwen
- Hoe je het GraphQL endpoint gebruikt om snel queries te kunnen maken

## Voordat je begint

Gedurende deze module zullen we verschillende queries uitoefenen met GraphQL op de [BAG](https://bag2.basisregistraties.overheid.nl/). Om deze queries te versturen gebruiken we het GraphQL endpoint op [deze URL](https://labs.kadaster.nl/haalcentraalanalyse).

## GraphQL

GraphQL is een relatief nieuwe API-standaard die een efficiënter, krachtiger en flexibeler alternatief biedt voor de traditionele REST API. In deze tutorial leren we je de basis waarmee je je eerste selectie en combinatie vraag kan stellen aan de Kadaster datasets.

## Opstellen van een eerste GraphQL query

Laten we met een simpele query beginnen. We gaan voor de eerste 10 BAG verblijfsobjecten het oppervlakte en de geometrie ophalen. Dit doen we op onderstaande manier.

![Developer Index](/assets/images/graphql_endpoint4.png)

Een GraphQL query begint met het opstellen van een query naam (op de eerste regel), deze is zelf in te vullen. De regels daaronder zijn opgesteld aan de hand van de informatie uit de documentatie.

<div class="textbox" markdown="2">
    <b>Uitdaging 1</b>: Kun je voor 10 BAG verblijfsobjecten het oppervlakte en de geometrie ophalen, waarbij de eerste 10 resultaten worden overgeslagen?
</div>

In [Stap 1 in de tutorial](/developer/graphql/tutorial/1-Exploreer-het-datamodel) werd uitgelegd hoe een enkele GraphQL query doormiddel van nesting meerdere REST queries kunnen vervangen. Hierbij werd een voorbeeld genoemd waarbij van het bagverblijfsobject, via het maaktdeeluitvan_object de data van het bgtpand kan worden opgehaald. In onderstaande afbeelding is dit uitgewerkt in de vorm van een query.

![Developer Index](/assets/images/graphql_endpoint5.png)

Merk hierbij op dat er een peildatum is toegevoegd, dat wil zeggen dat alleen de data wordt opgehaald die op of na deze datum nog geldig is.

<div class="textbox" markdown="2">
    <b>Uitdaging 2</b>: Kun je alle andere nesting vanuit de bagverblijfsobjecten query vinden? Tip: probeer via het bagverblijfsobject en vervolgens het bgtpand, bij de data van het bagpand te komen.
</div>

***

<div style="text-align: left">
    <a href="/developer/graphql/tutorial/1-Exploreer-het-datamodel">
        &#10094; Vorige stap: Exploreer het datamodel
    </a>
</div>
<div style="text-align: right">
    <a href="/developer/graphql/tutorial/3-Gebruik-eigen-programmeertaal">
        Volgende stap: Gebruik eigen programmeertaal &#10095;
    </a>
</div>
