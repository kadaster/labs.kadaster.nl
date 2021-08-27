---
layout: page
title: GraphQL Tutorial Stap 1 - Exploreer de data
---

# Exploreer het datamodel

*Breng in kaart welke data beschikbaar is*

***

In dit deel van de GraphQL tutorial helpen we je met het exploreren van een gegeven dataset middels het GraphQL endpoint. Op deze manier kun je inzicht krijgen in de beschikbare data en de potentiële vragen die je met deze dataset zou kunnen beantwoorden.

<div class="textbox" markdown="1">
## GraphQL Tutorial

- [Stap 0 - Introductie](/developer/graphql/tutorial/0-Introductie)
- **[Stap 1 - Exploreer de data](/developer/graphql/tutorial/1-Exploreer-het-datamodel)**
- [Stap 2 - GraphQL en het GraphQL endpoint](/developer/graphql/tutorial/2-graphql-enpoint)
- [Stap 3 - Gebruik van eigen programmeertaal](/developer/graphql/tutorial/3-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 1 van de tutorial, kun je aan je collega's uitleggen:

- Hoe je de beschikbare data binnen een GraphQL endpoint eenvoudig kunt exploreren

## Hoe kun je de data in een GraphQL endpoint exploreren?

### Opzet van een GraphQL endpoint

In GraphQL is vaak een ingebouwde playground die ook geschikt is voor development. Het stelt ontwikkelaars in staat om nieuwe queries te verkennen op een interactieve manier. In GraphQL wordt vaak gebruik gemaakt van schema-gebaseerde interactieve documentatie, zoals Apollo. Hiermee is het mogelijk om GraphQL-endpoints te ontdekken, ontwikkelen en ermee te communiceren.

![Developer Index](/assets/images/graphql_endpoint.png)

In bovenstaande afbeelding ziet u een GraphQL endpoint, deze is te benaderen via de URL die met 1 staat aangegeven (labs.kadaster.nl/haalcentraalanalyse). Het gedeelte dat met 2 is aangegeven is het veld waar de query opgesteld kan worden (tip: het endpoint komt tijdens het typen in het query veld met suggesties, dit kan zeer waardevol zijn tijdens het exploreren van de data). Bij nummer 3 op bovenstaande afbeelding komt indien een query is opgesteld en op de "play" knop is geklikt de output te zien. Bij nummer 4 kunt u terecht voor de uitgebreide documentatie over de beschikbare queries die op dit endpoint bevraagd kunnen worden en de bijbehorende data die van deze specifieke queries kan worden opgehaald. Tevens is in deze documentatie voor elke query en voor elk bijbehorende onderdeel van de data uit deze query een definitie opgenomen. Hieronder zullen we dieper in gaan op hoe de documentatie van een GraphQL endpoint is opgesteld. 

### Documentatie van het GraphQL endpoint
![Developer Index](/assets/images/graphql_endpoint2.png)

In bovenstaande afbeelding ziet u de documentatie van het GraphQL endpoint. Het gedeelte dat met nummer 1 is aangegeven is een lijst met alle mogelijke queries die opgesteld kunnen worden en waarvoor data kan worden opgevraagd op dit specifieke GraphQL endpoint. Wanneer op een van deze queries geklikt wordt (in het geval van de screenshot op de query "bag2verblijfsobject"), opent zich een extra scherm aan de rechterkant. Aan deze rechterkant vindt u helemaal boven aan (met nummer 2 gemarkeerd) de parameters die gebruikt kunnen worden bij het opstellen van een query. Een voorbeeld is de peildatum, deze wordt gebruikt om een vanaf datum in de query in te voeren bij het ophalen van de data. Zo geeft een peildatum van 26-08-2021 alleen alle data terug na of op 26 augustus 2021 en laat alles wat niet actueel is voor deze datum achterwege. Tevens kunnen first en offset gebruikt worden om te filteren op specifieke hoeveelheden data. Bij nummer 3 op de afbeelding vindt u de definitie van de query die u wilt gaan bevragen (in dit geval verblijfsobject). Als laatste, bij nummer 4, staan alle gegevens opgesomd die met de desbetreffende query kunnen worden opgehaald. Deze gegevens zijn tevens aanklikbaar om hiervoor ook weer een definitie te verkrijgen. In de introductie werd de kracht van GraphQL al kort genoemd; een enkele GraphQL query kan in veel gevallen vaak meerdere REST queries vervangen. Dit zal hieronder uitgebreider toegelicht worden.

### Nesting in GraphQL queries
![Developer Index](/assets/images/graphql_endpoint3.png)


In bovenstaande afbeelding is een voorbeeld van hoe een enkele query doormiddel van nesting meerdere REST queries kunnen vervangen. Zo is het mogelijk om van bag2verblijfsobject, via maaktdeeluitvan_object naar de data van "bgtpand" te gaan middels een enkele query. Hoe zo een geneste query kan worden opgesteld zal op de volgende pagina worden toegelicht. 

***

<div style="text-align: left">
    <a href="/developer/graphql/tutorial/0-Introductie">
        &#10094; Vorige stap: Introductie
    </a>
</div>
<div style="text-align: right">
    <a href="/developer/graphql/tutorial/2-graphql-enpoint">
        Volgende stap: Maken van een GraphQL query &#10095;
    </a>
</div>
