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

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-Apeldoorn-prefix/2">
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

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-WoonplaatsenOpenbareRui/3">
</query>

- In het datamodel (denk aan [de eerdere tutorial](/developer/sparql/tutorial/1-Exploreer-het-datamodel)) is te zien dat de relatie van *openbareruimteRegistratie* naar *woonplaats* gelegen is als *bag:ligtIn*.
- Door gebruik te maken [van de browser](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Woonplaats.3560.1) kan vanuit een simpel praktijkvoorbeeld worden ge-exploreerd hoe de relaties bij dit gegeven object liggen.
- Let op dat we hier de query limiteren op 2.000 records. (*LIMIT 2000*) Voor deze bevraging is dat voldoende. Het SPARQL endpoint ondersteunt standaard maximaal 10.000 records per bevraging.

## Meer objecten en wisselende granulariteit

In bovenstaand voorbeeld maakten we slechts gebruik van twee verschillende objecten in de basisregistratie (openbare ruimte en woonplaats). Zoals we in het datamodel kunnen zien kent de BAG nog een aantal andere objecten, welke allen belangrijk zijn om een brief te kunnen versturen met zogenoemde adresregels, namelijk:

- Postcode
- Huisnummer, huisletter en huisnummertoevoeging
- Straatnaam
- Woonplaatsnaam

Laten we eens alle informatie opvragen die de BAG over één specifiek adres weet (gedefiniëerd door de combinatie postcode-huisnummer). Daarvoor moeten we over een flink aantal objecten heen bewegen.

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-Adresgegevens/4">
</query>

Wat je moet opvallen in deze query (en diens resultaten) is het volgende:

- Ondanks dat we slechts informatie over één object opvragen, komen er twee records terug uit de dataset. Dit heeft te maken met het feit dat we in deze query te maken hebben met een attribuut van wisselende granulariteit (namelijk gebruiksdoel). Bij het opstellen van een query moet je dus continu opletten of de bevraging die je uitvoert potentiëel de granulariteit van je query verhoogt. Dit is vergelijkbaar met SQL wanneer je verschillende tabellen aan elkaar joined.
- Om tussen de objecten de relevante gegevens op te halen maken we een soort *zaagbeweging* tussen objecten en registraties (over deze objecten).
- Als we alle actieve voorkomens willen meenemen zullen we verschillende statussen moeten overwegen. Daarom dat we een IN statement aan het filter hebben toegevoegd.

## Geometrische bevragingen

Bij geometrische datasets is het vaak van belang om de geometriën van de verschillende objecten op te halen. Laten we dat doen. Door YasGUI als playground te gebruiken zijn deze resultaten tevens meteen te zien op de kaart.

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPARQL-Geometrien/3">
</query>

We moeten een aantal stappen zetten om de geometrie uit de data te kunnen ophalen:

- Standaard krijgen we de geometrie terug als string met daarin onder andere het gebruikte coordinatensysteem en de geometrie. Tevens zien we daarbij dat de geometrie in de BAG soms een Z-component heeft (hoogte). Omdat deze coördinaat in de praktijk op 0 staat filteren we deze eruit in de query.
- Door de functie SF_transform toe te passen transformeren we de resultaten meteen naar het WGS-84 coördinatenstelsel. Wanneer je dit niet nodig hebt en liever het rijksdriehoeksysteem gebruikt, hoef je deze stap niet toe te voegen. Alternatief kan je ervoor kiezen dergelijke data transformaties aan de client-side op te lossen.

Deze functionaliteit is benoemd in de open standaard [GeoSPARQL](https://www.ogc.org/standards/geosparql) als de taal waarmee geografische data kan worden bevraagd. Hiermee bieden wij de mogelijkheid om geografische benaderingen te combineren met administratieve verbindingen aanwezig in de data.

## Federatie en gebruik over bronnen heen

Bovenstaande queries relateerden zich nog voor 100% enkel en alleen op de BAG. Alhoewel dit goed is om een basisbegrip te krijgen van SPARQL en de manier waarop we de data beschikbaar stellen, worden echte relevante vragen pas goed te beantwoorden wanneer vershillende bronnen te combineren vallen. Bij Linked Data is het goed mogelijk om verschillende bronnen met elkaar te combineren.

Daarom hebben we ook één endpoint beschikbaar gesteld waar alle data al in één zit. Dit endpoint noemen we de het endpoint met [Registratieve Linked Data](https://data.labs.kadaster.nl/kadaster/Kadaster-Registratieve-Linked-Data/). Wanneer we daar queries over datasets heen uitvoeren en zijn we in staat ingewikkeldere queries uit te voeren. Neem bijvoorbeeld onderstaande query waar we vanuit een CBS Gemeente:

- Eerst alle wijken- en buurten ophalen binnen deze gemeente
- Van alle buurten de actieve Pandregistraties uit de BAG ophalen en hiervan het bouwjaar verzamelen
- Met deze panden de overstap maken naar BRT gebouwen en daar een filter toepassen op het typegebouw "kerk"

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial2-SPAQL-Registratief-Integraal/4">
</query>

Let op dat er bij deze bevraging een potentiële verdubbeling ontstaat van objecten vanwege de n:n relatie tussen BRT gebouwen en BAG panden. Het is belangrijk dit af te vangen aan de client-kant van deze bevraging.

<div class="textbox" markdown="2">
    <b>Uitdaging 3</b>: Met alle kennis van het opzoeken van datamodellen en deze omzetten naar een query over de registratieve datasets, kun jij een bevraging doen waarin je alle Panden binnen een gegeven CBS wijk kunt bevragen, en deze kunt verrijken met de BGT pand geometrie?
</div>

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
