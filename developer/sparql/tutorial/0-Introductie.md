---
layout: story
title: SPARQL Tutorial Stap 0 - Introductie
---

# Introductie

*Begin hier met leren over hoe SPARQL en Linked Data te gebruiken.*

***

Welkom! Deze tutorial begeleid je door het eerste gebruik van de Linked Data die wij als Data Science Team van het Kadaster ontsluiten. In deze tutorial nemen we je mee in de basics van Linked Data en diens querytaal SPARQL, en begeleiden we je door de resources die wij bieden om het gebruik voor de developers te vergemakkelijken.

Om jullie als developers zo snel mogelijk het gevoel te geven waarde te kunnen toevoegen met onze data, slaan we de typische "Hello World" tutorial over en duiken we meteen in concrete toepassingen op onze eigen datasets. De belangrijkste zaken die we in de volledige tutorial bespreken zijn:

- Wat is Linked Data? En hoe kijken we hier als Kadaster Data Science Team naar?
- Hoe krijg ik als developer inzicht in het datamodel van een Linked Data set?
- Hoe gebruik ik de querytaal SPARQL?
- Wat wordt er bedoeld als ik de registraties én de Knowledge Graph kan gebruiken?
- Hoe gebruik ik de data in mijn eigen applicatie?

## Voorkennis

Deze tutorial gaat uit van de volgende voorkennis:

- Je hebt vaker gewerkt met data en onderliggende datamodellen.
- Je bent bekend met het bevragen van data middels het HTTP-protocol, bijvoorbeeld door het gebruiken van REST-APIs.
- Kennis van Linked Data en vergelijkbare Semantic Web technologiën is een pré, maar niet noodzakelijk.

<div class="textbox" markdown="1">
## SPARQL Tutorial

- **[Stap 0 - Introductie](/developer/sparql/tutorial/0-Introductie) (dit artikel)**
- [Stap 1 - Exploreer het datamodel](/developer/sparql/tutorial/1-Exploreer-het-datamodel)
- [Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI)
- [Stap 3 - Registratie vs. Knowledge Graph](/developer/sparql/tutorial/3-Registratie-vs-Knowledge-Graph)
- [Stap 4 - Gebruik van eigen programmeertaal](/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal)

</div>

## Doel van deze module

Na deze module, stap 0 van de tutorial, kun je aan je collega's uitleggen:

- Wat Linked Data is
- Wat SPARQL is
- Wat het verschil is tussen objecten, attributen en definities

## Wat is Linked Data?

In 2006 werd de term Linked Data als eerst geöpperd door Tim Berners-Lee, door velen bekend als de bedenker van het internet. [bron](https://www.w3.org/DesignIssues/LinkedData.html). De termen Linked Data en het *Semantic Web* zijn onlosmakelijk met elkaar verbonden. In deze tutorial zullen we voornamelijk de term Linked Data toepassen. Hierbij focussen we op ons de volgende kernprincipes achter Linked Data:

- Data is beschreven in het [Resource Description Framework (RDF)](https://www.w3.org/RDF/).
- De beschreven data bevat Uniform Resource Identifiers (URIs).
- De data maakt zoveel mogelijk gebruik van open standaarden beschikbaar in de wereld.

### Triples en RDF

Linked Data stelt data beschikbaar zoals beschreven in het [Resource Description Framework (RDF)](https://www.w3.org/RDF/). In de praktijk betekent dit dat data als zogenoemde triples beschikbaar worden gesteld. Triples bestaan uit een *subject*, *predicate* en een *object*. Een gesimplificeerd voorbeeldje:

![Triples](/assets/images/triples.PNG)

Wanneer we een hele hoop dergelijke triples samenvoegen, ontstaat er beetje bij beetje een volledige dataset.

### Uniform Resource Identifiers (URIs)

In de praktijk zal een triple niet verwijzen naar "de Jumbo" wat "een bedrijf is". Immers, wat betekenen deze termen? Om deze reden beschrijven we gegevens met behulp van HTTP(s) URIs. Dit zorgt ervoor dat gegevens in Linked Data uniek identificeerbaar zijn op het web. Om dit naar onze eigen Basisregistratie Adressen & Gebouwen (BAG) te relateren, zie bijvoorbeeld

[https://bag2.basisregistraties.overheid.nl/bag/id/object/NL.IMBAG.Pand.0003100000117489](https://bag2.basisregistraties.overheid.nl/bag/id/object/NL.IMBAG.Pand.0003100000117489)

Het beschreven object (een pand in de BAG) leidt dus middels zijn URI naar een plek op het internet waar dit pand beschreven staat. (Het zogenoemde *dereferencen*)

Wanneer we dit voorbeeld één stap verder brengen komen we bij de volgende triple uit:

***

[https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Pand.0003100000117489.1](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Pand.0003100000117489.1) [https://bag2.basisregistraties.overheid.nl/bag/def/status](https://bag2.basisregistraties.overheid.nl/bag/def/status) [https://bag2.basisregistraties.overheid.nl/bag/id/status/pandInGebruik](https://bag2.basisregistraties.overheid.nl/bag/id/status/pandInGebruik)

***

Het subject ([deze registratie van een pand](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Pand.0003100000117489.1)) heeft dus een predicaat/attribuut [status zoals beschreven in de BAG](https://bag2.basisregistraties.overheid.nl/bag/def/status) met als waarde de status [pand in gebruik zoals beschreven door de BAG](https://bag2.basisregistraties.overheid.nl/bag/id/status/pandInGebruik).

**N.B.:** Momenteel ondersteunen wij dereferencing van de datasets BAG, BGT en datasets die worden omschreven onder een data.labs.kadaster HTTP URI. Dit betekent helaas dat URIs van bijvoorbeeld de BRT en BRK momenteel nog niet kunnen worden gevonden via hun URI.

### Objecten, Attributen & Definities

Binnen Linked Data valt er ruwweg een splitsing te maken tussen de definities/metadatering van een gegeven dataset en de instantiedata. De definities beschrijven het datamodel en de type objecten en attributen die de dataset kan bevatten. Voor de verschillende onderdelen geldt:

**Objecten**:

- Zijn vaak het subject van een triple en bevatten één of meerdere predicates.
- Is vindbaar op het web via zijn unieke URI.
- Is van een bepaalde klasse (type) dat beschreven is in de definities.
- Voorbeelden:
  1. [Deze registratie van de woonplaats Appingedam](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Woonplaats.3386.1)
  2. [Deze openbare ruimte](https://bag2.basisregistraties.overheid.nl/bag/id/object/NL.IMBAG.Openbareruimte.0003300000117021)

**Attributen**:

Een attribuut zegt iets over een bepaald subject. Dit kan een attribuut zijn dat is gedefiniëerd in de definities van de dataset zelf of in een externe (open standaard). De waarde kan gelijk zijn aan een ander object of aan een literal. (Bijvoorbeeld een getal of stuk tekst).

- Beschrijft de predicate en object van een gegeven subject.
- Het type attribuut (predicate) is vindbaar op het web via zijn unieke URI. (de definitie)
- Het predicate beschrijft een relatie naar een ander object of naar een literal waarde.
- Voorbeelden:
  1. [Deze registratie van een nummeraanduiding](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Nummeraanduiding.0003200000141013.2) heeft als attribuut [postcode](https://bag2.basisregistraties.overheid.nl/bag/def/postcode) de literal "9903BA" van het type [string](http://www.w3.org/2001/XMLSchema#string).
  2. [Deze registratie van een ligplaats](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Ligplaats.0003020000000013.1) heeft als [primair onderwerp](http://xmlns.com/foaf/0.1/primaryTopic) deze [ligplaats in de BAG](https://bag2.basisregistraties.overheid.nl/bag/id/object/NL.IMBAG.Ligplaats.0003020000000013).
  3. [Deze registratie van een verblijfsobject](https://bag2.basisregistraties.overheid.nl/bag/id/registratie/NL.IMBAG.Verblijfsobject.0003010000125997.1) heeft als [hoofdadres](https://bag2.basisregistraties.overheid.nl/bag/def/hoofdadres) deze [nummeraanduiding in de BAG](https://bag2.basisregistraties.overheid.nl/bag/id/object/NL.IMBAG.Nummeraanduiding.0003200000134069).

**Definities**:

- Beschrijft de semantische betekenis van een object of attribuut.
- De definities zijn zelf ook vindbaar op het web via zijn unieke URI.
- Voorbeelden:
  1. [De definitie van een nummeraanduiding](https://bag2.basisregistraties.overheid.nl/bag/def/Nummeraanduiding).
  2. [De definitie van het attribuut statusVerblijfsobject van een Verblijfsobject Registratie](https://bag2.basisregistraties.overheid.nl/bag/def/StatusVerblijfsobject).

## Wat is SPARQL?

SPARQL is de standaard querytaal waarmee een Linked Dataset bevraagd kan worden. Voor een gebruiker nieuw in de Linked Data wereld zal SPARQL het meest vergelijkbaar zijn met het alom bekende SQL. Deze querytaal kan gebruikt worden om een zogenoemd SPARQL endpoint te bevragen. Net als met SQL is de gebruiker in staat ingewikkelde selecties en combinaties met deze bevragingstaal te maken.

Zie hieronder de meest eenvoudige query die SPARQL te bieden heeft. Door onderstaande query af te vuren op het SPARQL endpoint van de BAG krijgen we de eerste 10 queries te zien die er in de BAG te vinden zijn. (*Hint*: Klik op Show Editor om de SPARQL bevraging zelf te zien).

<query data-config-ref="https://data.labs.kadaster.nl/dst/-/queries/Tutorial0-SPARQL-101/1">
</query>

Om meer te weten te komen over SPARQL en de playground interface die we hieronder bieden bieden we een uitgebreide uitleg in [Stap 2 - SPARQL en de YasGUI Playground](/developer/sparql/tutorial/2-SPARQL-en-YasGUI) van de tutorial.

***

<div style="text-align: right">
    <a href="/developer/sparql/tutorial/1-Exploreer-het-datamodel">
        Volgende stap: Exploreer het datamodel &#10095;
    </a>
</div>
