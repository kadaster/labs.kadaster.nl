---
layout: page
title: GraphQL Open endpoint
---
# Use Case: GraphQL Open endpoint

Voor de Nederlandse versie, <a href = "/cases/graphql-endpoint">klik hier</a>.

### Disclaimer
This page describes the first open GraphQL endpoint that the Cadastre Land Registry makes available as an experiment. This endpoint is maintained with a "best-effort" service level and only concerns open data sources at the Cadastre Land Registry. For this endpoint, we cannot guarantee that the data is always up-to-date and will occasionally (without announcement) renew the endpoint as part of further development. Do you have any questions or comments about this? Then  <a href="/about">contact us</a>.


<div class="cards-wrapper">
  <a href="/odysseyhackathon">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/graphql-logo.png">
      <div class="card-title">GraphQL endpoint</div>
      <div class="card-description">You use this endpoint to query the (open) data sources of the Land Registry with GraphQL.</div>
    </div>
  </a>
</div>

## Introductie

With GraphQL we overcome a number of common shortcomings of the services we provide on our key registers.

- Delivery of data is **demand-driven** instead of **supply-driven**. We give the user the opportunity to query exactly the data he / she needs
- We make inquiries based on **objects** possible
- Various datasets with an administrative connection can be **integrally** queried

With GraphQL we define a model of our data in so-called objects and their attributes. For this endpoint, this currently only contains data from the Addresses & Buildings Basic Administration (BAG). A full data model of this source can be found in Figure 1.
 
<figure id="figuur-1">
  <a href="/assets/images/schema_bag_ams.png">
    <img src="/assets/images/schema_bag_ams.png">
  </a>
  <figcaption>
    Figuur 1 ― The full datamodel of the BAG (Source: Municipality of Amsterdam)
  </figcaption>
</figure>

The following objects have been made available for this endpoint:
<details>
  <summary>Woonplaats (City)</summary>

  <b>Woonplaats</b> has the following attributes: <br>
  - <b>identificatiecode (Identification Code)</b> <br>
  - <b>uoi</b> <br>
  - <b>woonplaatsnaam (City name)</b> <br>
  - <b>woonplaatsstatus (City status)</b> <br>
  - <b>geovlak (Geometry)</b>; geometry, in the RD (Dutch) coordinate system <br>
  - <b>openbareruimten (Public Areas)</b>; all public areas (streets) in this city <br>
</details>

<details>
  <summary>Openbare Ruimte (Public Area)</summary>

  <b>Openbare ruimte</b> (or: street) has the following attributes: <br>
  - <b>identificatiecode (Identification Code)</b> <br>
  - <b>uoi</b> <br>
  - <b>openbareruimtenaam (Public Area Name)</b> <br>
  - <b>openbareruimtestatus (Public Area Status)</b> <br>
  - <b>openbareruimtetype (Public Area Type)</b> <br>
  - <b>gerelateerdeWoonplaats (Related City)</b>; the city in which this public area resides <br>
  - <b>nummeraanduidingen (Addresses)</b>; all addresses in this public area <br>
</details>

<details>
  <summary>Nummeraanduiding</summary>

  <b>Nummeraanduiding</b> (or: address) has the following attributes: <br>
  - <b>identificatiecode (Identification Code)</b> <br>
  - <b>uoi</b> <br>
  - <b>postcode (Postal Code)</b> <br>
  - <b>huisnummer (House Number)</b> <br>
  - <b>huisletter (House Letter)</b> <br>
  - <b>huisnummertoevoeging (House Number Addition)</b> <br>
  - <b>nummeraanduidingstatus (Address Status)</b> <br>
  - <b>bijbehorendeOpenbareRuimte (Related Public Area)</b>; public area (steet) in which this address resides <br>
  - <b>hoofdadresVan (Main Address of)</b>; the house of which this address is the main address<br>
</details>

<details>
  <summary>Verblijfsobject</summary>

  <b>Verblijfsobject</b> (or: residence/establishment) has the following attributes: <br>
  - <b>identificatiecode (Identification Code)</b> <br>
  - <b>uoi</b> <br>
  - <b>oppervlakteverblijfsobject (Surface Area)</b> <br>
  - <b>verblijfsobjectstatus (Residence Status)</b> <br>
  - <b>geopunt (Geometry)</b>; geometry, in the RD (Dutch) coordinate system <br>
  - <b>hoofdadres (Primary Address)</b>; the primary address of this residence <br>
  - <b>ligtinpand (Resides in building)</b>; the building in which this residence lies <br>
</details>

<details>
  <summary>Pand</summary>

  <b>Pand</b> (or: building) has the following attributes: <br>
  - <b>identificatiecode (Identification Code)</b> <br>
  - <b>uoi</b> <br>
  - <b>bouwjaar (Building Year)</b> <br>
  - <b>pandstatus (Building status)</b> <br>
  - <b>geovlak (Geometry)</b>; geometry, in the RD (Dutch) coordinate system<br>
  - <b>vbosinpand (Residences in Building)</b>; all residences residing in this building <br>
</details>

These objects cover the entire country. Queries can therefore be conducted throughout the Netherlands on the available data through this endpoint.

<div class="textbox" markdown="1">
## Kadaster terms

Not many people will describe their house as a residence object ('Verblijfsobject'), as it is officially included in the [Basisadministratie Addresses en Gebouwen (BAG)](https://zakelijk.kadaster.nl/basisregistratie-adressen-en-gebouwen). For a good description of the objects and what they represent, we refer the reader to a reliable source such as that of the [Municipality of Amsterdam](https://www.amsterdam.nl/stelselpedia/bag-index/informatiemodel-bag/) .
</div>

## GraphQL Introspection
When you use the [GraphQL Playground](https://labs.kadaster.nl/odysseyhackathon/) to set up a query in GraphQL, the user interface supports you in setting up the correct queries. For this step, the endpoint uses the [GraphQL Introspection query](https://graphql.org/learn/introspection/). As you type, this shows the objects and attributes available in a query. This data model can also be found in **Docs** on the right of the screen. The data model can also be visualized with [GraphQL Voyager](https://apis.guru/graphql-voyager/). Use [this SDL file](/assets/graphql/schema-bag-uoi.graphql) for that. Within the GraphQL Voyager demo environment you can change the scheme with this SDL file with 'Change Schema'.

# Bevragingen middels een identificatiecode
Each object within the BAG has its own identification code (a 16-digit 'string' containing, among other things, references to the municipality involved and the type of object being described). Looking for the identification code of your address or public space? Take a look at the [BAGViewer](https://bagviewer.kadaster.nl/lvbag/bag-viewer/).

Using GraphQL, a query can be performed in two ways, by means of an identification code or by means of a first / offset / filter combination. Take as an example a query in which we query the information of a number designation (address) with identification code **0307200000495314**. See, for example, the query below.

``` graphql
query informatieVoorEenIdentificatiecode {
  bagnummeraanduiding(identificatiecode: "0307200000495314", peilDatum: "2020-11-13") {
    identificatiecode
    postcode
    huisnummer
    huisletter
    huisnummertoevoeging
    uoi
  }
}
``` 

In fact, this query behaves like a simple REST API interface on a Number indication, showing all information (attributes) given this object.

### Peildatums
We have provided an explicit reference date in the above specific survey. This means that we only retrieve the objects valid at this specific moment. If this reference date is not included, the endpoint takes the current date as the reference date by default. It is therefore currently not possible to query history through this endpoint.

<div class="textbox" markdown="1">
## UOI

Kadaster recently worked on a Unique Object Identifier (UOI) in collaboration with the Ministry of the Interior and Kingdom Relations 
and Fibree. This is integrated in the BAG dataset for this open endpoint.

<figure id="figuur-2">
  <a href="/assets/images/uoi-schema.PNG">
    <img src="/assets/images/uoi-schema.PNG">
  </a>
  <figcaption>
    Figuur 2 ― The structure of the  Unique Object Identificer (UOI)
  </figcaption>
</figure>
An object can therefore be used as identification code by means of the same query with an uoi. An example of a query around the same object as in the above query is done as follows.

``` graphql
query informatieVoorEenUOI {
  bagnummeraanduiding(uoi: "NL.550e8400-e29b-na0a-0307-200000495314", peilDatum: "2020-11-13")
  {
    uoi
    postcode
    huisnummer
    huisletter
    huisnummertoevoeging    
    identificatiecode
    
  }
}
```
</div>

# Bevragingen middels first/offset en filter

It may happen that the user is not interested in querying a single object, but that a user wants to query a set of objects from, for example, a residence or public space (street). In that case you can use the **first** and **offset** arguments. This will query the first (first) objects, starting from the (offset) object. An example survey can be found below. This query queries the first 3 public spaces (streets) for a given place of residence with identification code 1245 (*The Hague*) and five number designations (addresses) of these public spaces are queried there, starting with number 11.

**Note: To limit extreme load on the endpoint, a query should not take longer than 60 seconds. After that, it will give a timeout error. This means that the number chosen for first should not be too high (because this makes the number of retrieved elements very large). The style rule that we use here is not to request batches larger than 1000 at the same time. By working with first and offset, these can be queried in several batches consecutively.**

``` graphql
query AdressenInDenHaag 
 {
  ## Deze query bevraagt verschillende adressen in Den Haag (code: 1245) op basis van de eerste openbare ruimten 
 bagwoonplaats(identificatiecode: "1245", peilDatum: "2020-11-13") {
    woonplaatsnaam
    woonplaatsstatus
    uoi
    peilDatum
    openbareruimten(first: 3) {
      openbareruimtenaam
      identificatiecode
      uoi
      nummeraanduidingen(first: 5, offset: 10) {
        identificatiecode
        uoi
        postcode
        huisnummer
        huisletter
        huisnummertoevoeging
      }
    }
  }
}
```

## Bevragingen middels een filter
The starting point with this open GraphQL endpoint is that we want to make a transition with Kadaster from supply-driven to demand-driven surveys. This means that the user chooses which data he / she wants to see, within the data model of the available data. For this reason, we do not filter data from the source in advance. Only the use of a reference date (the default or a chosen variant) is forced.

The user can add a filter himself. Almost every object has an argument **filter** with which a certain selection can be made. The available columns that can be filtered in the object are all attributes that are also in the object itself. Multiple filters are separated with an **'and'**.
An example query with the use of a filter looks like this:

``` graphql
query InfoVoorEenAdres {
 ## Deze query bevraagt alle informatie uit de BAG voor het hoofdkantoor van de politie in Den Haag 
 bagnummeraanduiding(filter: "postcode='2585BG' and huisnummer=35") {
    identificatiecode
    uoi
    postcode
    huisnummer
    huisletter
    hoofdadresVan {
      identificatiecode
      uoi
      oppervlakteverblijfsobject
      ligtinpand {
        identificatiecode
        uoi
        bouwjaar
      }
    }
  }
}
``` 
This query queries (a set of bag number designations) without first and offset. It takes the two attributes of a bag number indication (**zip code** and **house number**) and places a filter on these attributes. Note that because zip code is a string, quotation marks ('') are required in the filter. Because house number is a number, this is not necessary here. This query therefore queries all number designations with postcode 2585BG and house number 35. From this number designation, the relevant residence object and building are also searched for, including the attributes of these objects relevant to us.

## Bevragingen in een programmeertaal (Python)
Do you want to query the above endpoint with something other than the user interface? Which can! The endpoint also serves as a traditional HTTP endpoint where GET requests can be executed to retrieve the necessary data. An example in Python on how to do this can be found below:

``` python
from six.moves import urllib
import json

class GraphQLClient:
    """
    In deze class wordt connectie gelegd met onze GraphQL endpoint en kan een bevraging worden uitgevoerd
    """
    def __init__(self, endpoint):
        self.endpoint = endpoint
        self.token = None
        self.headername = None

    def execute(self, query, variables=None, return_json = True):
        return self._send(query, variables, return_json)

    def inject_token(self, token, headername='Authorization'):
        self.token = token
        self.headername = headername

    def _send(self, query, variables, return_json = True):
        data = {'query': query,
                'variables': variables}
        headers = {'Accept': 'application/json',
                   'Content-Type': 'application/json'}

        if self.token is not None:
            headers[self.headername] = '{}'.format(self.token)

        req = urllib.request.Request(self.endpoint, json.dumps(data).encode('utf-8'), headers)

        try:
            response = urllib.request.urlopen(req)
            if return_json:
                return json.loads(response.read().decode('utf-8'))
            else:
                return response.read().decode('utf-8')
        except urllib.error.HTTPError as e:
            raise e

```
Import the above class into a new script and execute the following statements.

``` python
GRAPHQL_ENDPOINT = "https://labs.kadaster.nl/odysseyhackathon"
client = GraphQLClient(GRAPHQL_ENDPOINT)
graphql_query = """ query informatieVoorEenUOI {
                      bagnummeraanduiding(uoi: "NL.550e8400-e29b-na0a-0307-200000495314", peilDatum: "2020-11-13")
                      {
                        uoi
                        postcode
                        huisnummer
                        huisletter
                        huisnummertoevoeging    
                        identificatiecode
                        
                      }
                    }"""
result = client.execute(graphql_query)
print(result['data'])

```
