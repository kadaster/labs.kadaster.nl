---
layout: page
title: GraphQL Tutorial Stap 0 - Introductie
---

# Introductie

*Begin hier met leren over hoe GraphQL te gebruiken.*

***

Welkom! In deze tutorial nemen we je mee in de basics van GraphQL en begeleiden we je door de resources die wij bieden om het gebruik voor de developers te vergemakkelijken.

Om jullie als developers zo snel mogelijk het gevoel te geven waarde te kunnen creëren met onze data, slaan we de typische "Hello World" tutorial over en duiken we meteen in concrete toepassingen op onze eigen datasets. De belangrijkste zaken die we in de volledige tutorial bespreken zijn:

- Wat is GraphQL? En hoe kijken we hier als Kadaster Data Science Team naar?
- Hoe gebruik ik de querytaal GraphQL?
- Hoe gebruik ik de data in mijn eigen applicatie?

## Voorkennis

Deze tutorial gaat uit van de volgende voorkennis:

- Je hebt vaker gewerkt met data en onderliggende datamodellen.
- Je bent bekend met het bevragen van data middels het HTTP-protocol, bijvoorbeeld door het gebruiken van REST-APIs.

<div class="textbox" markdown="1">
## GraphQL Tutorial

- **[Stap 0 - Introductie](/developer/graphql/tutorial/0-Introductie)**
- [Stap 1 - Exploreer het datamodel](/developer/graphql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - GraphQL en het GraphQL endpoint](/developer/graphql/tutorial/2-graphql-enpoint)
- [Stap 3 - Gebruik van eigen programmeertaal](/developer/graphql/tutorial/3-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 0 van de tutorial, kun je aan je collega's uitleggen:

- Wat GraphQL is
- wat het verschil is tussen de traditionele REST API en GraphQL

## Wat is GraphQL?

GraphQL is een relatief nieuwe API-standaard die een efficiënter, krachtiger en flexibeler alternatief biedt voor de traditionele REST API. Het is ontwikkeld en open source gemaakt door Facebook en wordt nu onderhouden door een grote community van developers over de hele wereld. GraphQL wordt vaak verward met een databasetechnologie. Dit is een misvatting, GraphQL is een querytaal voor API's - niet voor databases. In die zin is het database-agnostisch en kan het effectief worden gebruikt in elke context waarin een API wordt gebruikt (waarbij een developer precies kan specificeren welke gegevens hij/zij nodig heeft). Echter hoeft bij GraphQL slechts één endpoint beschikbaar gesteld te worden en reageert dit endpoint exact met de gegevens die de developer bevraagd.

## REST API VS GraphQL

GraphQL wisselt gegevens uit op een enkel endpoint, terwijl REST vaak gebruik maakt van meerdere endpoints. GraphQL resolvers halen de gegevens op voor de velden die nodig zijn. Als één resolver faalt, kan de rest van de query nog steeds bruikbare gegevens ophalen en terug geven. Hierdoor kan een enkele GraphQL query in veel gevallen vaak meerdere REST queries vervangen.

GraphQL voorkomt over-fetching en under-fetching van data. Meer specifieker betekent dat, een GraphQL endpoint komt zelden met te veel of te weinig informatie terug. Een voorbeeld van het terug krijgen van te veel data met een REST API is het terugkrijgen van het gehele klantprofiel, terwijl slechts de naam en het e-mailadres van de klant nodig waren. Ook kan het zijn dat er te weinig data wordt opgehaald met een REST API, waardoor de applicatie meerdere API-calls moet maken in plaats van slechts één.

GraphQL maakt gebruik van een aangepaste query-indeling genaamd Schema Definition Language (SDL), en hoewel die aangepaste query taal wordt gebruikt voor het verzoek, wordt de output in JSON terug gegeven. Dit maakt het voor developers eenvoudiger om de verkregen data te gebruiken. GraphQL client libraries hebben native integratie met het ReactJS UI framework (en vele andere libraries) waardoor GraphQL voor veel front-end en back-end developers zeer toegankelijk is.

Om te begrijpen hoe REST API's werken, gebruikt de developer meestal een documentatie omgeving om de API's te ontdekken en ermee te communiceren. In GraphQL, is dit vaak een ingebouwde playground die ook geschikt is voor development (zie: https://labs.kadaster.nl/haalcentraalanalyse). Het stelt ontwikkelaars in staat om nieuwe queries te verkennen op een interactieve manier. De documentatie is ook anders. GraphQL-developers gebruiken meestal schema-gebaseerde interactieve documentatie, zoals Apollo om GraphQL-endpoints te ontdekken, ontwikkelen en ermee te communiceren.

***

<div style="text-align: right">
    <a href="/developer/graphql/tutorial/1-Exploreer-het-datamodel">
        Volgende stap: Exploreer de data &#10095;
    </a>
</div>
