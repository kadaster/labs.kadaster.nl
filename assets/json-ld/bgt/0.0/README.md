- nummeraanduidingen checken met de BAG
- bag links checken op null waardes
- foute naamaanduidingreeks: 0141100000093424

# Documentatie BGT LD

Voer het volgende script uit om voor alle BGT types linked data te downloaden:

```sh
./convert.sh
```

De N-Quads bestanden (`NAAM.graphql.nq`)  kunnen worden geupload in de triple store: <https://data.labs.kadaster.nl/bgt-test-omgeving>

Het BGT vocabulaire kan daar worden bijgeladen middels de import functionaliteit: (1) Ga naar "Graphs", (2) Klik op "Import a new graph", (3) Selecteer `kadaster/bgt` in het veld "Add data from an existing dataset".

# Optioneel: Detail stappen

Bovenstaande stappen kunnen ook in meer detail gevolgd worden.

Zie welke types ondersteund worden door naar de GraphQL editor te gaan: <https://labs.kadaster.nl/gateway/>

In onderstaande stappen noemen we zo'n type bijvoorbeeld `NAAM = bak`.

We bouwen een GraphQL query in een file `NAAM.graphql`, op basis van wat we in de GraphQL editor zien.  Kijk naar het bestand `bak.graphql` voor een voorbeeld.

We halen de resultaten van de enhancer op in N-Quads:

```sh
curl -X POST -H "Content-Type: application/json" -H "Accept: application/n-quads" --data-binary @NAAM.graphql https://labs.kadaster.nl/enhancer > NAAM.jsonld
```

We halen de resultaten op van de GraphQL endpoint in reguliere JSON:

```sh
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" --data-binary @NAAM.graphql https://labs.kadaster.nl/gateway/graphql > NAAM.json
```

We kunnen dezelfde resultaten ophalen bij het Enhancer endpoint in JSON-LD:

```sh
curl -X POST -H "Content-Type: application/json" -H "Accept: application/ld+json" --data-binary @NAAM.graphql https://labs.kadaster.nl/enhancer > NAAM.jsonld
```

Volg de installatie instructies op [JSON-LD CLI](https://github.com/digitalbazaar/jsonld-cli).

Van die JSON-LD kan automatisch N-Quads (een RDF formaat) gemaakt worden:

```sh
jsonld format -q NAAM.jsonld > NAAM.nq
```
