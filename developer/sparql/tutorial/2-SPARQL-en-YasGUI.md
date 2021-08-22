---
layout: story
title: SPARQL Tutorial Stap 2 - SPARQL en de YasGUI Playground
---

# SPARQL en de YasGUI playground

*Bevraag de data met een krachtig query-paradigme*

***

In dit onderdeel van de tutorial maken we je wegwijs in het SPARQL queryparadigma en laten we je kennis maken met de YasGUI playground, waarmee jij snel je eerste query kunt testen.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- [Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel)
- **[Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI) (dit artikel)**
- [Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph)
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 2 van de tutorial, kun je aan je collega's uitleggen:

- Hoe je een simpele SPARQL query kunt opbouwen
- Hoe je de YasGUI playground gebruikt om snel queries te kunnen maken

## Voordat je begint

Gedurende deze module zullen we verschillende queries uitoefenen met SPARQL op de [BAG](https://bag2.basisregistraties.overheid.nl/). Om deze query te versturen gebruiken we het SPARQL API endpoint op [deze URL](https://api.labs.kadaster.nl/datasets/kadaster/bag2/services/default/sparql). De queries die als voorbeeld op deze pagina zijn opgenomen kun je openklappen door het de knop voor "Show editor" om te zetten. Het is helaas niet mogelijk om alle functionaliteiten van de YasGUI playground rechtstreeks in deze website te integreren. We raden daarom aan om (bijvoorbeeld op een tweede scherm) de [YasGUI playground van de BAG](https://data.labs.kadaster.nl/kadaster/bag2/sparql/default) open te zetten.

## SPARQL

SPARQL is de ge-uniformeerde standaard voor het bevragen van Resource Description Framework (RDF) data. De standaard wordt beheerd door [het W3C](https://www.w3.org/TR/rdf-sparql-query/) en is een onmisbaar onderdeel van Linked Data. Voor een volledige overzicht in de volledige SPARQL query language raden we de gebruiker aan die standaard dan ook eens rustig door te lezen. In deze tutorial leren we je echter de basis waarmee je je eerste selectie en combinatie vraag kan stellen aan de Kadaster datasets.

Laten we met een simpele query beginnen. We willen graag iedere triple opvragen die de waarde "Apeldoorn" als literal bevat. Omdat dit een nederlandse string is, dienen we een language tag mee te geven (@nl). Dit is één van de krachten, maar tevens lastige onderdelen van de SPARQL taal. Voor specifieke kennis rondom literal matching, zie [de W3C standaard voor SPARQL](https://www.w3.org/TR/rdf-sparql-query/#QSynLiterals).

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-Apeldoorn/4">
</query>

Wat je terugkrijgt zijn 3 records van verschillende registraties die allen een prefLabel relatie hebben met als waarde "Apeldoorn @nl". Wat opvalt is dat in deze resultaten alleen URIs terugkomen. Alhoewel dit gewenst gedrag is vanuit een Linked Data perspectief, maakt het de resultaten wel lastig te lezen. Om die reden staat SPARQL toe om bepaalde prefixes toe te voegen aan je bevraging. Deze PREFIX kan vervolgens zowel in de query als in de resultaten worden teruggezien. Laten we prefixes toevoegen voor de skos standaard en een prefix voor een BAG registratie. Note: Klik de editor open voor een gewijzigd resultaat.

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-Apeldoorn-prefix/1">
</query>

We zien dat de resultaten nu een stuk korter en transparanter zijn! Wanneer je deze query opstelt vanuit de YasGUI playground omgeving zul je tevens zien dat bepaalde prefixes (waaronder skos en registratie, maar ook bekende standaarden als rdf en rdfs) automatisch worden aangevuld. Dit helpt bij het snel kunnen opstellen van een correcte query.

<div class="textbox" markdown="2">
    <b>Uitdaging 1</b>: Kun jij nu ook alle triples genereren met een postcode gelijk aan "2513AA" en daarmee het Torentje van onze premier vinden?
</div>

## Explicieter query-en

Nu we weten wat de absolute basis van SPARQL inhoudt, kunnen we een explicietere query opstellen. Zoals we in het datamodel gezien hebben bestaat er zogenoemde Woonplaatsregistraties en woonplaatsen. Ik wil bovenstaande query deshalve zo aanpassen dat ik alleen de actieve voorkomens krijg. Daarvoor:

- Wil ik alleen woonplaats registraties
- Wil ik alleen woonplaats registraties zonder een waarde voor *prov:invalidatedAtTime*
- Wil ik alleen woonplaats registraties met [*status woonplaatsAangewezen*](https://bag2.basisregistraties.overheid.nl/bag/id/status/woonplaatsAangewezen).

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-ActieveWoonplaatsen/2">
</query>

- In deze query wordt *a* gebruikt. Dit is een afkorting voor rdf:type, wat weer een afkorting is voor [<http://www.w3.org/1999/02/22-rdf-syntax-ns#>](<http://www.w3.org/1999/02/22-rdf-syntax-ns#>).
- In deze query wordt regelmatig een puntkomma (*;*) gebruikt. Dit geeft aan dat het subject (?woonplaatsRegistratie) herhaalt moet worden. Een set aan uitspraken over de woonplaatsRegistratie wordt afgesloten met een punt (*.*).
- *OPTIONAL* geeft aan dat er mogelijk een triple bestaat, maar dat dit niet noodzakelijk is. Als OPTIONAL niet wordt meegegeven, maar er wel om een optionele triple wordt gevraagd, wordt het object in zijn geheel niet teruggegeven.
- *FILTER NOT EXISTS* is het tegenovergestelde hiervan. Enkel als de triple niet bestaat willen we het gehele object terug. Dit is nuttig om alleen registraties terug te krijgen zonder een einddatum. (i.e. enkel actieve registraties)

<div class="textbox" markdown="2">
    <b>Uitdaging 2</b>: Kun jij nu ook alle verblijfsobject registraties vinden die een nevenadres hebben en actief zijn?
</div>

## Relaties tussen objecten

Nu we een selectie hebben gemaakt voor woonplaatsen, en we weten hoe we met historie om moeten gaan, willen we additonele relaties leggen. Kunnen we bijvoorbeeld alle straten in Apeldoorn ophalen die er volgens de BAG gelegen zijn?
Bekijk de volgende query:

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-WoonplaatsenOpenbareRui/2">
</query>

- In het datamodel (denk aan [de eerdere tutorial](/developer/sparql/tutorial/1-Exploreer-het-datamodel)) is te zien dat de relatie van *openbareruimteRegistratie* naar *woonplaats* gelegen is als *bag:ligtIn*.
- Door gebruik te maken [van de browser](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Woonplaats.3560.1) kan vanuit een simpel praktijkvoorbeeld worden ge-exploreerd hoe de relaties bij dit gegeven object liggen.
- Let op dat we hier de query limiteren op 2.000 records. (*LIMIT 2000*) Voor deze bevraging is dat voldoende. Het SPARQL endpoint ondersteunt standaard maximaal 10.000 records per bevraging.

***

<div style="text-align: left">
    <a href="/developer/sparql/tutorial/1-Exploreer-het-datamodel">
        &#10094; Vorige stap: Exploreer het datamodel
    </a>
</div>
<div style="text-align: right">
    <a href="/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph">
        Volgende stap: Registratie vs. Knowledge Graph &#10095;
    </a>
</div>
