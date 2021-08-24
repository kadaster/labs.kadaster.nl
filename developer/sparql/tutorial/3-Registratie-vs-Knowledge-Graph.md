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
- [Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI)
- **[Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph) (dit artikel)**
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 3 van de tutorial, kun je aan je collega's uitleggen:

- Wat het verschil is tussen de registratieve datasets en de Kadaster Knowledge Graph.
- Hoe er met historie moet worden omgegaan in de beschikbare linked data sets.
- Hoe de data lineage van de Knowledge Graph te benaderen is.

## Introductie

Zoals je in de [vorige tutorial](/developer/sparql/tutorial/2-SPARQL-en-YasGUI) hebt kunnen ervaren is er redelijk veel domeinkennis benodigd om te achterhalen hoe je de juiste query moet opstellen op de onderliggende basisregistraties.
Zo hebben we onder andere:

- Rekening moeten houden met lege Z-coördinaten in de BAG.
- Rekening moeten houden met de historie van de objecten in de verschillende registraties en hoe deze te relateren zijn tussen objecten- en registraties.
- Verdubbeling van gegevens door het samenvoegen van verschillende objecten.
- Kennis moeten vergaren over datasets heen hoe deze tot elkaar gerelateerd zijn.

Om deze reden stellen wij sinds kort (zie ook [de Integrale Gebruiksoplossing](/cases/integralegebruiksoplossing)) een Knowledge Graph beschikbaar. Een uitgebreide uitleg over dit concept kun je ook vinden op [onze architectuurpagina](/demonstrators/architectuur-selfservice/KnowledgeGraph/). In het kort maken we een view ("Representatie") van de integrale data beschikbaar met daarin een verwijzing naar de originele brondata waaruit deze is opgebouwd.

Daarvoor maken we in deze tutorial gebruik van de [Kadaster Knowledge Graph gebaseerd op Schema.org](https://data.labs.kadaster.nl/kadaster/kg). Schema.org is een standaard geïntrodueerd door Google en behelst een manier van data omschrijving waarmee moderne zoekmachines goed aan de slag kunnen. Objecten, pagina's en websites die met deze standaard zijn omschreven zijn dan ook over het algemeen goed vindbaar op het web. In onderstaand figuur wordt een voorbeeld van een datamodel in Schema.org gegeven.

![Mermaid schema.org](/assets/images/mermaid-sdo-model.png)

## Datamodel en mapping

Uiteraard is er ook voor de Schema.Org knowledge graph een datamodel beschikbaar. Deze is [visueel beschikbaar in Weaver](https://kadaster.wvr.io/kg-kadaster/home). Zoals je in deze interface kunt zien is een plaats (sdo:Place) de centrale plek in dit model. Places zijn vervolgens weer onderverdeeld in wat vanuit [de Integrale Gebruiksoplossing](/cases/integralegebruiksoplossing) de belangrijkste objecten zijn in de basisregistraties, zoals Waterdelen, Wegdelen en Gebouwen.

Deze hierarchie in de verschillende places is ook terug te vinden in de named graphs van de dataset.

**Deze tutorial wordt nog aangevuld. Nog enkele daagjes geduld.**

***

<div style="text-align: left">
    <a href="/developer/sparql/tutorial/2-SPARQL-en-YasGUI">
        &#10094; Vorige stap: SPARQL en YasGUI
    </a>
</div>
<div style="text-align: right">
    <a href="/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal">
        Volgende stap: Gebruik van eigen programmeertaal &#10095;
    </a>
</div>