---
layout: page
title: GraphQL Tutorial Stap 3 - Gebruik van eigen programmeertaal
---

# Gebruik van eigen programmeertaal

*Incorporeer onze data in je eigen applicatie*

***
In dit deel van de tutorial maken we je wegwijs in het gebruik van GraphQL in combinatie met Python, waarmee jij snel je eerste GraphQL query kan opstellen met Python.

<div class="textbox" markdown="1">
## GraphQL Tutorial

- [Stap 0 - Introductie](/developer/graphql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/graphql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - GraphQL en het GraphQL endpoint](/developer/graphql/tutorial/2-graphql-enpoint)
- **[Stap 3 - Gebruik van eigen programmeertaal](/developer/graphql/tutorial/3-Gebruik-eigen-programmeertaal)**

</div>
## Doel van deze module

Na deze module, stap 3 van de tutorial, kun je aan je collega's uitleggen:

- Hoe je een GraphQL endpoint kunt benaderen met Python
- Hoe je een GraphQL query kan versturen middels Python

## Voordat je begint

Voor deze module is enige vorm van Python kennis noodzakelijk. Tijdens deze module wordt gebruik gemaakt van de requests library van Python om de bevragingen op het endpoint te doen.

***
## Opstellen van een eerste GraphQL query in Python

In [Stap 1 in de tutorial](/developer/graphql/tutorial/1-Exploreer-het-datamodel) werd uitgelegd hoe een enkele GraphQL query doormiddel van nesting meerdere REST queries kan vervangen. Hierbij werd een voorbeeld genoemd waarbij van het bagverblijfsobject, via het maaktdeeluitvan_object de data van het bgtpand kan worden opgehaald. In onderstaande afbeelding is dit uitgewerkt in de vorm van een GraphQL query middels Python.

![Developer Index](/assets/images/python_graphql.png)

Merk hierbij op dat er een peildatum is toegevoegd, dat wil zeggen dat alleen data wordt opgehaald die op of na deze datum nog geldig is.

## Gebruik maken van variabelen in de GraphQL query in Python

Tevens is het mogelijk om gebruik te maken van variabelen in de GraphQL query in Python. In onderstaande voorbeeld zijn "first" en "peilDatum" omgezet in variabelen.

![Developer Index](/assets/images/python_graphql2.png)


<div style="text-align: left">
    <a href="/developer/graphql/tutorial/2-graphql-enpoint">
        &#10094; Vorige stap: Maken van een GraphQL query
    </a>
</div>