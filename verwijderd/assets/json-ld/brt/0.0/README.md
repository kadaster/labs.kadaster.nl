# Hoe te gebruiken?

1. Kopieer de instantie gegevens uit `voorbeeld.json` in de JSON-LD Playground: <https://json-ld.org/playground>

2. Kopieer ook de inhoud van `brt.jsonld` in de JSON-LD Playground.  Deze moet onder de `@context` key terecht komen.

3. Zorg er voor dat er geen fouten in de JSON staan (geen rode error berichten).

4. Klik op tab "N-Quads" om de linked data te zien.


# Met Ontwikkel VPN

1. Vanaf CMD of POWERSHELL doe bijvoorbeeld:  
     - curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/gebouw/1/2 

2. Opslaan in file: 
     - curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/gebouw/1/2 -o gebouw.nq

3. Dan de file uploaden naar de triple store


Voorbeelden van alle features:

- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/functioneelgebied/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/gebouw/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/geografischgebied/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/hoogte/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/inrichtingselement/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/plaats/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/plantopografie/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/registratiefgebied/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/relief/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/spoorbaandeel/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/relief/1/2 
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/terrein/1/2
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/waterdeel/1/2
- curl -H "accept: application/nquads"  http://dba-graphql.so.kadaster.nl:8070/enhancer/brt/wegdeel/1/2
