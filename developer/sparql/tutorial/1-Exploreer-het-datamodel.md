---
layout: page
title: SPARQL Tutorial Stap 1 - Exploreer het datamodel
---

# Exploreer het datamodel

*Breng in kaart welke data beschikbaar is*

***

In dit deel van de SPARQL tutorial helpen we je om te kunnen exploreren door het datamodel van een gegeven dataset. Op deze manier kun je inzicht verkrijgen in de beschikbare data en de potentiële vragen die je met deze dataset zou kunnen exploreren.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- [Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie)
- **[Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel) (dit artikel)**
- [Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI)
- [Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph)
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 1 van de tutorial, kun je aan je collega's uitleggen:

- Hoe je het datamodel van een gegeven dataset kunt exploreren
- Hoe je de functionaliteit van onze triplestore gebruikt om snelle inzichten in de dataset te genereren

## Alle facetten van een dataset op één plek

Op [onze SPARQL developer pagina](/developer/sparql/) vind je een overzicht van alle datasets welke wij middels Linked Data beschikbaar stellen. Daar vind je tevens een aantal verwijzingen naar relevante resources. Zie onderstaand figuur.

![Developer Index](/assets/images/developer-index.png)

Onder iedere dataset staat bij **1)** een verwijzing naar de overzichtspagina van de dataset in onze Triple store. Hier vind je metadata, changelogs en updates van de desbetreffende dataset. De toepassingen van deze pagina komen verderop in deze module verder aan bod. Onder **2)** staat het SPARQL endpoint waar de data bevraagd kan worden met een SPARQL interface. Onder **3)** vind je - indien beschikbaar - een verzamelpagina op onze labs.kadaster.nl website waar interessante use cases met deze dataset worden opgelost. Onder **4)** vind je een visueel overzicht van de dataset in onze Weaver tool. Daarover lichten we verderop in deze module meer toe. Onder **5)** vind je de YasGUI playground omgeving waarover we in [de volgende tutorial](/developer/sparql/tutorial/2-SPARQL-en-YasGUI) meer zullen toelichten.

## Datamodel visueel inzichtelijk via Weaver

Wij streven ernaar iedere dataset die wij beschikbaar stellen in een visuele interface beschikbaar te stellen. Hiervoor gebruiken we momenteel de tooling van Weaver. Pak bijvoorbeeld [het datamodel van de BAG](https://kadaster.wvr.io/bag2-0/home). Een screenshot vanuit de omgeving is hieronder toegevoegd.

![Weaver BAG](/assets/images/weaver-bag.PNG)

Je wordt binnen de omgeving standaard naar een view ("weergave") gebracht die door onze modelleurs - in samenwerking met de domeinexperts van de betroffen dataset - is klaargezet. In de praktijk is dit vaak een subset van alle beschikbare data in de dataset. Echter, om te voorkomen dat een gebruiker verdwaald raakt in een grote verbonden graaf aan objecten en relaties bieden we slechts deze subset als standaard view aan. Er kan echter meer data achter een object schuil gaan in de Weaver omgeving. Door te dubbelklikken op een object kunnen er additionele relaties en nodes verschijnen. De Weaver omgeving geeft vaak een eerste hoogover view van de objecten en relaties die in de data zitten.

<div class="textbox" markdown="2">
    <b>Uitdaging 1</b>: Kenners van de BAG weten dat er ook een Objecttype <b>Adresseerbaar Object</b> bestaat. Kun jij deze vinden in de Weaver omgeving?
</div>

## Datamodel en snelle inzichten via de Triple Store

Om de verschillende datasets beschikbaar te stellen maken wij gebruik van de triple store [TriplyDB](https://triplydb.com/). Om echt handen en voeten te geven aan het concept Linked **Open** Data beschouwen wij deze triple store echter niet als puur de locatie waar wij onze data opslaan, maar tevens als een manier om snel en open functionaliteiten te bieden die gelden voor iedere dataset. Daarom is een groot gedeelte van de Triple Store publiek toegankelijk, zonder te hoeven inloggen.

Een gedeelte van die functionaliteiten gaan we meteen toepassen. Open bijvoorbeeld de [datasetpagina van de BAG](https://bag2.basisregistraties.overheid.nl/).

![Triplestore BAG](/assets/images/triplestore-bag.PNG)

Onder **1)** vind je de homepagina, welke tevens rechts op beeld te vinden is. Hier staan changelogs, metadata, de licentie en de actualiteit van een dataset. Onder **2)** vind je twee verschillende manieren om door de beschikbare data te "browsen". Onder **3)** vind je de beschikbare services op deze dataset. In de praktijk zal dit altijd een SPARQL endpoint zijn en additioneel - afhankelijk van de dataset - een [Elastic Search](/developer/elasticsearch/) endpoint. Onder **4)** vind je een overzicht van de ingeschakelde services, de set aan named graphs waaruit de dataset bestaat en potentiëel assets (zoals PDFs of andere brondocumentatie die bij de dataset hoort). Een gemiddelde gebruiker heeft deze functionaliteit veelal niet nodig. Onder **5)** vind je een knop waarmee quick insights uit een dataset gehaald kunnen worden. Deze zullen wij hieronder verder toelichten.

Wanneer je op [insights klikt](https://data.labs.kadaster.nl/kadaster/bag2/insights/classFrequency?graph=https%3A%2F%2Fbag2.basisregistraties.overheid.nl%2Fbag%2Fgraphs%2Finstanties) krijg je al snel een overzicht met de zogenoemde Class Frequency van een dataset. Dit overzicht geeft in één oogopslag weer welke type objecten er beschikbaar zijn in een gegeven dataset. Tevens kan er van ieder object type worden bekeken welke attributen bestaan voor deze objecten en hoe vaak deze objecten gevuld zijn.

![Triplestore Insights](/assets/images/triplestore-insights.PNG)

<div class="textbox" markdown="2">
    <b>Uitdaging 2</b>: Er wordt vaak gedacht dat een postcode in de BAG altijd gevuld is. Het kan echter voorkomen dat er een Nummeraanduiding Registratie wordt ingediend waarin het postcode veld leeg is, bijvoorbeeld omdat deze op het moment van vergunnen nog niet beschikbaar was. Kun jij met de triplestore insights ophalen hoeveel historische voorkomens er zijn geweest met een lege postcode?
</div>

Dit overzicht met behulp van Insights is beschikbaar per named graph. Binnen de linked data sets die ontsloten worden vanuit het Data Science Team worden de named graphs gebruikt om onderscheid te maken tussen instantie gegevens, metadata en definities. Ook kan het voorkomen dat er een specifieke selectie is aan instantiegegevens die onderdeel kan zijn van een andere datalevering (omdat deze bijvoorbeeld uit een andere bron komen). Denk bijvoorbeeld aan een linkset [tussen de BAG en de BRT](https://data.labs.kadaster.nl/kadaster/brt-2/table?graph=https%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fbrt%2Fid%2Fgraph%2Fbrt-2-bag).

**N.B.** In het Resource Description Framework (RDF) worden named graphs ook regelmatig gebruikt om bijvoorbeeld historie aan te duiden. Wij kiezen daar in de momenteel ontsloten datasets niet voor. Voor een beter inzicht over hoe wij historische gegevens toepassen, verwijzen we de lezer naar [Stap 3 in de tutorial](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph).

***

<div style="text-align: left">
    <a href="/developer/sparql/tutorial/0-Introductie">
        &#10094; Vorige stap: Introductie
    </a>
</div>
<div style="text-align: right">
    <a href="/developer/sparql/tutorial/2-SPARQL-en-YasGUI">
        Volgende stap: SPARQL en YasGUI &#10095;
    </a>
</div>
