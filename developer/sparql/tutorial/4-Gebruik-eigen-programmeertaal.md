---
layout: page
title: SPARQL Tutorial Stap 4 - Gebruik van eigen programmeertaal
---

# Gebruik van eigen programmeertaal

*Incorporeer onze data in je eigen applicatie*

***

In deze tutorial leggen we je uit hoe je ons endpoint kunt gebruiken vanuit je eigen applicatie en favoriete programmeertaal.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- [Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie)
- [Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI)
- [Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph)
- **[Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal) (dit artikel)**

</div>

## Doel van deze module

Na deze module, stap 4 van de tutorial, kun je aan je collega's uitleggen:

- Hoe je een SPARQL endpoint kunt benaderen met Python
- Hoe dit zich vertaald naar andere programmeertalen

***

## Bevragen van een SPARQL endpoint middels HTTPS

SPARQL endpoint zijn te benaderen volgens het HTTPS protocol. Zo kun je de resultaten simpelweg opvragen met een GET operatie.

``` http
GET https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql?query=<query>
```

Alternatief kan de query ook als parameter in de *body* van een POST request worden bijgevoegd.

Onze SPARQL endpoints accepteren de volgende *Accept* headers:

- application/json (standaard)
- application/sparql-results+xml
- application/sparql-results+json
- text/csv

<div class="textbox" markdown="2">
    <b>Uitdaging 1</b>: Kun jij met een standaard HTTP request (bijv. middels Postman) de resultaten van een query in de verschillende formats ophalen? En snap je de verschillen?
</div>

## Bevragen van ons SPARQL endpoint middels Python

Een SPARQL endpoint is op basis van praktisch iedere programmeertaal te benaderen. In de meeste talen zijn er al standaard libraries ontwikkeld waarmee een SPARQL endpoint gemakkelijk bevraagt kan worden. Neem bijvoorbeeld python. Daar kunnen we gebruik maken van de open library sparqlwrapper. Begin door deze library te installeren.

``` ps
pip install sparqlwrapper
```

Wanneer de library is geïnstalleerd kunnen we hem toepassen. Neem een query en sla deze op als **.rq** (de officiële file extension voor SPARQL files) of neem de query rechtstreeks als string op in je code. Daarna kun je het endpoint een request sturen. Middels returnFormat (een wrapper om de *accept-header*) kun je bepalen in welk formaat (Bijv. JSON, XML, CSV) je de gegevens wil ophalen.

``` python
from SPARQLWrapper import SPARQLWrapper, JSON

if __name__ == "__main__":

    query = """
        PREFIX geo: <http://www.opengis.net/ont/geosparql#>
        PREFIX sdo: <https://schema.org/>
        PREFIX bag: <https://bag2.basisregistraties.overheid.nl/bag/def/>
        PREFIX wkb: <https://data.labs.kadaster.nl/cbs/wbk/vocab/>
        PREFIX typeGebouw: <https://brt.basisregistraties.overheid.nl/brt/id/typeGebouw/>
        SELECT ?naamWoonplaats ?buurtNaam ?polygon (MIN(?naamPlace) as ?adres)  (SUM(?oppervlakte) as ?totaleOppervlakte)
        WHERE { ?woonplaats a sdo:AdministrativeArea ;
                sdo:additionalType bag:Woonplaats ;
                sdo:name "Rotterdam"@nl ;
                sdo:name ?naamWoonplaats;
                sdo:containsPlace ?places .
                ?places sdo:name ?naamPlace ;
                sdo:dateCreated ?bouwjaar ;
                sdo:floorSize ?oppervlakte ;
                sdo:geo ?geoObjects;
                sdo:additionalType typeGebouw:politiebureau.
                ?geoObjects a sdo:GeoShape ;
                sdo:name "BRT geometrie" ;
                sdo:polygon ?polygon .
                ?buurtVanPlace sdo:containsPlace ?places ;
                sdo:additionalType wkb:Buurt ;
                sdo:name ?buurtNaam .
        }
        GROUP BY ?naamWoonplaats ?buurtNaam ?polygon
        ORDER BY ASC(?buurtNaam)
        LIMIT 200
    """

    ENDPOINT = "https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql"
    wrapper = SPARQLWrapper(ENDPOINT, returnFormat=JSON)

    wrapper.setQuery(query)
    results = wrapper.query().convert()
```

***

<div style="text-align: left">
    <a href="/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph">
        &#10094; Vorige stap: Registratie vs. Knowledge Graph
    </a>
</div>
