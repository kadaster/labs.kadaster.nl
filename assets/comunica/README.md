
## Open comunica in browser

Ga naar website http://query.linkeddatafragments.org/

## Voeg bag2 sparql endpoint toe

Bij Datasource voeg je het volgende endpoint toe: https://api.labs.kadaster.nl/datasets/kadaster/bag2/services/default/sparql en klik op GraphQL-LD tab.

## Voeg de volgende JSON-LD Context toe

```
{
  "@context" :  "https://labs.kadaster.nl/assets/comunica/bag2.jsonld"
}
```

# Voorbeeld: laat alle nummeraandudingen voor postcode 7339 AB zien
```
{
     nummeraanduiding(postcode: "7339AB") 
}
```

```
{
     nummeraanduiding(postcode: "7339AB΅) {
         huisnummer
         huisletter
         
     }
}
```

```
{
     nummeraanduiding(postcode: "7339AB΅) {
         huisnummer
         huisletter @optional
         beginGeldigheid
     }
}
```
```
{
    linktvan(type: VBO, status: verblijfsobjectGevormd) {
        oppervlakte
        status
    }
} 
```
