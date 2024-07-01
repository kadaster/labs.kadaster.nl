---
layout: page
title: SPARQL Tutorial Stap 3 - Registrative vs Knowledge Graph
---

# Registrative vs Knowledge Graph

*Het verschil tussen aanbodgedreven en vraaggedreven*

***

In deze tutorial nemen we je mee in het idee van de Kadaster Knowledge Graph en tonen we het verschil tussen deze bron en de onderliggende data registraties.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- [Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - SPARQL bevragingstaal](/developer/sparql/tutorial/2-SPARQL)
- **[Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph) (dit artikel)**
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 3 van de tutorial, kun je aan je collega's uitleggen:

- Wat het verschil is tussen de registratieve datasets en de Kadaster Knowledge Graph.
- Hoe er met historie moet worden omgegaan in de beschikbare linked data sets.
- Hoe de data lineage van de Knowledge Graph te benaderen is.

## Introductie

Zoals je in de [vorige tutorial](/developer/sparql/tutorial/2-SPARQL) hebt kunnen ervaren is er redelijk veel domeinkennis benodigd om te achterhalen hoe je de juiste query moet opstellen op de onderliggende basisregistraties.
Zo hebben we onder andere:

- Rekening moeten houden met lege Z-coördinaten in de BAG.
- Rekening moeten houden met de historie van de objecten in de verschillende registraties en hoe deze te relateren zijn tussen objecten- en registraties.
- Verdubbeling van gegevens door het samenvoegen van verschillende objecten.
- Kennis moeten vergaren over datasets heen hoe deze tot elkaar gerelateerd zijn.

Om deze reden stellen wij sinds kort (zie ook [de Integrale Gebruiksoplossing](/cases/integralegebruiksoplossing)) een Knowledge Graph beschikbaar. Een uitgebreide uitleg over dit concept kun je ook vinden op [onze architectuurpagina](/demonstrators/architectuur-selfservice/KnowledgeGraph/). In het kort maken we een view ("Representatie") van de integrale data beschikbaar met daarin een verwijzing naar de originele brondata waaruit deze is opgebouwd.

Daarvoor maken we in deze tutorial gebruik van de [Kadaster Knowledge Graph gebaseerd op Schema.org](https://data.labs.kadaster.nl/kadaster/kg). Schema.org is een standaard geïntrodueerd door Google en behelst een manier van data omschrijving waarmee moderne zoekmachines goed aan de slag kunnen. Objecten, pagina's en websites die met deze standaard zijn omschreven zijn dan ook over het algemeen goed vindbaar op het web. In onderstaand figuur wordt een voorbeeld van een datamodel in Schema.org gegeven.

![Mermaid schema.org](/assets/images/mermaid-sdo-model.png)

## Datamodel en mapping

Uiteraard is er ook voor de Schema.Org knowledge graph een datamodel beschikbaar. Deze is [visueel beschikbaar in Triply Insights](https://data.labs.kadaster.nl/dst/kkg/schema). Zoals je in deze interface kunt zien is een plaats (sdo:Place) de centrale plek in dit model. Places zijn vervolgens weer onderverdeeld in wat vanuit [de Integrale Gebruiksoplossing](/cases/integralegebruiksoplossing) de belangrijkste objecten zijn in de basisregistraties, zoals Waterdelen, Wegdelen en Gebouwen.

Deze hierarchie in de verschillende places is ook terug te vinden in de named graphs van de dataset, waar op basis van verschillende invalshoeken de data in verschillende graven is opgedeeld.

![Graphs schema.org](/assets/images/graphs-kkg.PNG)

Hoe we tot deze verschillende invalshoeken zijn gekomen is uitgebreid vastgelegd in [deze documenterende pagina over de Knowledge Graph](/demonstrators/architectuur-selfservice/KnowledgeGraph/). Daar beschrijven we ook de hoe de nieuwe objecten (gebaseerd op schema.org) terug relateren naar de originele basisregistraties. Neem als voorbeeld de transformatie die wij toepassen om Places te genereren op basis van adressen, panden en gebouwen. Op basis van deze translatie creëren wij op basis van ieder Verblijfsobject in Nederland een place volgens de transformatie vastgelegd in [deze documentatie](https://labs.kadaster.nl/demonstrators/architectuur-selfservice/KnowledgeGraph/#41-van-gebouwpand-naar-schemaorg-place-visuele-weergave).

Om een beter beeld te krijgen van zo'n Place, kijken we naar [onderstaand resultaat](https://data.labs.kadaster.nl/kadaster/kg/id/place/0307010000402601):

![Voorbeeld Adres Place](/assets/images/Voorbeeld-place-kkg.PNG)

Een gevonden plaats heeft deshalve een aantal belangrijke kenmerken:

- De registraties uit de originele registraties waar deze van zijn afgeleid.
- Additionele types die verwijzen naar typeringen uit de bron, maar waar Schema.org niet expressief genoeg voor is.
- Verwijzingen naar geografische objecten in een gestandaardiseerd formaat.
- Attributen uit de objecten waarvan dit nieuwe object is opgebouwd.

**Tip:** Wil je weten hoe een place in jouw omgeving is opgenomen in de data? Kijk dan eens in onze [Objectviewer](https://labs.kadaster.nl/demonstrators/objectviewer) en klik op het object waarnaar jij op zoek bent. Of zoek eens rechtstreeks [in onze Elastic Search ingang](https://data.labs.kadaster.nl/kadaster/kg/search/search) naar het object van jouw interesse.

<div class="textbox" markdown="2">
    <b>Uitdaging 1</b>: Places afgeleid van gebouwen zijn direct gerelateerd aan (verschillende) AdministrativeAreas. Kun jij een dergelijk Administrative Area naar boven halen in de Triple store?
</div>

## Gebruik van SPARQL

Nu we een beetje een beeld hebben van de Knowledge Graph en hoe deze is opgebouwd, kunnen we het endpoint ook gaan bevragen middels SPARQL. Om te beginnen met een simpele query proberen we in eerste instantie om met adresgegevens (de postcode) alle objecten op te halen.

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial3-KnowledgeGraph-Adresgegevens/4">
</query>

- In tegenstelling tot de registratieve endpoints hoeven we nu geen rekening te houden met historie. Deze versie van de Knowledge Graph heeft alleen de actuele situatie weer. Datzelfde geldt voor inactieve statussen.
- Er hoeven slechts drie objecten bij elkaar te komen om de geometrie, adresgegevens en objectgegevens respectievelijk te benaderen. In de reguliere combinatie tussen BAG, BRT en BGT zouden dit er vele malen meer zijn om dezelfde informatie op te halen.
- We hoeven niet zelf te zoeken naar connecties over datasets heen. Objecten die direct te integreren zijn zijn in deze weergave van de data reeds samengebracht.

Meer dergelijke eenvoudige queries hebben we voor de geïnteresseerde lezer samengebracht in een [Data Story](https://data.labs.kadaster.nl/dst/-/stories/algemene-queries-voor-kkg-gebruik).

We kunnen de query ook nog iets complexer maken. Veel vragen die men wil beantwoorden vanuit een bepaalde (geografische afkadering). Daarbij gaat de voorkeur uit naar het gebruiken van administratieve links zoals deze in de data liggen.

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial3-KnowledgeGraph-ComplexeQuery/2">
</query>

In deze query:

- Maken we sprongetjes heen en weer tussen Places en Administrative area om te demonstreren hoe deze objecten verschillend, maar toch te onderscheiden zijn.
- Filteren we binnen een bepaalde woonplaats om alle adressen op te halen met een bepaalde typering (hier: Politiebureau)
- Grouperen we de resultaten op het onderliggende BRT polygoon zodat adressen worden geaggregeerd tot één object.

**Tip:** Wil je geholpen worden met je eerste query en deze op basis van natuurlijke taal opstellen? Probeer dan ook eens de [Sparklis omgeving die we daarvoor hebben klaargezet](https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=%0A%09%09%09%09%09%09%09%09%20%20SDO%20Knowledge%20Graph%0A%09%09%09%09%09%09%09%20%20&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/kg-demo-sparklis/services/default/sparql&avoid_lengthy_queries=true&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&lang=nl).

<div class="textbox" markdown="2">
    <b>Uitdaging 2</b>: Kun jij alle places achterhalen binnen de buurt "De Spaanse Polder" in Rotterdam met een industriefunctie en een oppervlakte groter dan 200 vierkante meter?
</div>

## Herleiden naar de bron


***

<div style="text-align: left">
    <a href="/developer/sparql/tutorial/2-SPARQL">
        &#10094; Vorige stap: SPARQL bevragingstaal
    </a>
</div>
<div style="text-align: right">
    <a href="/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal">
        Volgende stap: Gebruik van eigen programmeertaal &#10095;
    </a>
</div>
