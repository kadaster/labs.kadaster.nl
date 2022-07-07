# Tijdreizen met GraphQL

## Status
De applicatie is momenteel zichtbaar op (https://labs.kadaster.nl/demonstrators/graphqltijdreizen/).

## Introductie

Het Kadaster beheert en is bronhouder van verschillende geobasisregistraties. Het afgelopen jaar heeft het team stappen genomen om deze data integraal beschikbaar te krijgen in een Knowledge Graph. Het team is nu bezig met het uitvoeren van data-analyses en het ontwikkelen van applicaties van boven op deze Knowledge Graph om hier de meerwaarde van aan te kunnen aantonen voor meer toelichting zie het architectuur plaatje hier (https://labs.kadaster.nl/demonstrators/architectuur-selfservice/Architecture/). Tevens heeft het team stappen genomen om deze data integraal opvraagbaar te maken door middel van GraphQL (https://labs.kadaster.nl/developer/graphql/).

Het concept is/was om een tijdreis applicatie te ontwikkelen op een kaart. Die de gebruiker instaat stelt om objecten uit verschillende basisregistraties over de tijd heen te visualiseren. 

## Het doel

Een webapplicatie ontwikkeld in Angular (Objectviewer) waarbij de gebruiker een tijdreis kan maken over de databronnen van het Kadaster. Met behulp van de Generieke Geo componenten (GGC) en GraphQL als data fundament om de informatie integraal te kunnen bevragen. Tevens moet de eindgebruiker instaat zijn om door middel van een menu te filteren op welke data de tijdreis moet visualiseren.

## Aanpak

### Startpunt

Het Kadaster heeft twee andere Object Viewers ontwikkeld een gebaseerd op SPARQL (https://labs.kadaster.nl/demonstrators/objectviewer)  en de andere op GraphQL (https://labs.kadaster.nl/demonstrators/graphqlviewer/) respectievelijk. Deze viewers hadden andere use cases maar vormde de basis voor het ontwikkelen van deze applicatie.

### Inspiratie

Topotijdreis (https://www.topotijdreis.nl/) heeft als inspiratie gediend voor de ontwikkeling van de applicatie. Deze applicatie heeft een soortgelijke use case de gebruiker kan een tijdreis maken over de topografische kaarten van Nederland. Het grootste verschil tussen Topotijdreis en Tijdreizen met GraphQL zit in de databronnen die worden gebruikt. In Topotijdreis zijn dit statische afbeeldingen en Tijdreizen met GraphQL is dit dynamische geografische informatie. Desondanks is vooral de werking van de slider in Topotijdreis heel waardevol gebleken voor de ontwikkeling van de applicatie.

<figure id="figuur-1">
  <a href="/assets/images/graphqltijdreizen/topotijdreis.png">
    <img src="/assets/images/graphqltijdreizen/topotijdreis.png" alt="Topotijdreis">
  </a>
  <figcaption>
    Figuur 1 ― Topotijdreis.
  </figcaption>
</figure>

### User interface

De Kadaster huisstijl en Angular Material zijn gebruikt voor de styling van de applicatie.  In eerste instantie was ervoor gekozen om een dashboard te bouwen met drie panelen filter-menu, kaart, en resultaten lijst. Zie de onderstaande scherm afbeelding.

<figure id="figuur-2">
  <a href="/assets/images/graphqltijdreizen/user-interface-1.png">
    <img src="/assets/images/graphqltijdreizen/user-interface-1.png" alt="UI iteratie 1">
  </a>
  <figcaption>
    Figuur 2 ― User interface eerste iteratie.
  </figcaption>
</figure>



Dit zorgde echter voor een onoverzichtelijke gebruikerservaring zodoende is er uiteindelijk voor gekozen om de kaart hoogste prioriteit te geven in de user interface dit resulteerde in de volgende uitwerking:

<figure id="figuur-3">
  <a href="/assets/images/graphqltijdreizen/dashlegend.png">
    <img src="/assets/images/graphqltijdreizen/dashlegend.png" alt="UI iteratie 1">
  </a>
  <figcaption>
    Figuur 3 ― User interface iteratie 2.
  </figcaption>
</figure>



In het huidige ontwerp is het filter-menu uitschuifbaar en zit verscholen achter een knop, het resultaat scherm is verwijderd er is ervoor gekozen om het object informatie te weergeven in de legenda links onderin het scherm.  

<figure id="figuur-4">
  <a href="/assets/images/graphqltijdreizen/legenda.png">
    <img src="/assets/images/graphqltijdreizen/legenda.png" alt="legenda">
  </a>
  <figcaption>
    Figuur 4 ― Legenda met object info van een pand.
  </figcaption>
</figure>

### Toelichting data

- Momenteel kunnen alle objecten die NEN3610 compliant zijn en een geometrie hebben worden gevisualiseerd.
- Aanvankelijk werd er in de eerste instantie een end point aangesproken dat extern bereikbaar was: https://labs.kadaster.nl/haalcentraalanalyse.
- Hierbij werden de volgende bronnen aangesproken
  - BAG (Basisregistratie Adressen en Gebouwen)
  - BGT (Basisregistratie Grootschalige Topografie)
- Uiteindelijk is er voor gekozen om een intern endpoint te benaderen hierdoor werden de volgende koppeling mogelijk:
  - BRT (Basisregistratie Topografie) gekoppeld met BAG
  - DKK (De Kadastrale Kaart)
  - BRKPB (Kadastrale kaart + publieke beperkingen)
  - BRK-ADM (Koers)

### Applicatie architectuur

- Angular gebruikt componenten om de structuur van de applicatie te definiëren.
- Zo zijn in de applicatie bijvoorbeeld de componenten opgedeeld in Kaart, Slider, Menu, enz..
- Vervolgens worden HTML templates gedefinieerd om deze componenten te weergeven. 
- De service wordt gebruikt om query's te maken naar de back-end (GraphQL gateway, en de gekoppelde databronnen) voor de visualisatie van de data.

<figure id="figuur-5">
  <a href="/assets/imagesgraphqltijdreizen/application-architecture.jpg">
    <img src="/assets/images/graphqltijdreizen/application-architecture.jpg" alt="applicatie architectuur">
  </a>
  <figcaption>
    Figuur 5 ― Applicatie architectuur.
  </figcaption>
</figure>

### Werking

#### Slider

1. Gebruiker doet een verzoek
2. Apollo service stuurt een GraphQL query door naar de GrapQL gateway die vervolgens een verzoek stuurt naar de bevraagde databron
3. Dit verzoek wordt teruggezonden naar de Apollo service
4. De slider doet een subscriptie op de Apollo service op het minimale bouwjaar om de startwaarde te bepalen
5. De kaart doet een subscriptie op de Apollo service voor de teruggezonden features
6. De kaart luistert ook naar de min en max waarde van de slider om de juiste objecten te kunnen tonen wanneer de slider begint af te spelen of handmatig van waarde veranderd. (De componenten hebben een Parent, Child relatie).
6. 

<figure id="figuur-6">
  <a href="/assets/images/graphqltijdreizen/tijdreizen-clear.png">
    <img src="/assets/images/graphqltijdreizen/tijdreizen-clear.png" alt="werking slider">
  </a>
  <figcaption>
    Figuur 6 ― Werking slider.
  </figcaption>
</figure>

#### Tekenen van polygonen

In de applicatie worden momenteel de volgende twaalf kleuren gebruikt (zie onderstaande figuur) om de polygonen van de Features een kleur te geven.

<figure id="figuur-7">
  <a href="/assets/images/graphqltijdreizen/kleuren.png">
    <img src="/assets/images/graphqltijdreizen/kleuren.png" alt="kleuren">
  </a>
  <figcaption>
    Figuur 7 ― Kleur palette polygonen.
  </figcaption>
</figure>

De kleuren worden op een wiskundige manier toegewezen door een formule die een stap functie bepaald om de individuele kleuren toe te wijzen, de werking is als volgt:

- Er zijn twaalf kleuren die over een range van 120 jaar worden berekend
- Het jongste jaartal krijgt altijd de eerste kleur (#CCF9FF) en het oudste jaartal krijgt altijd de laatste kleur (#FF00FF)
- De overige kleuren worden bepaald door een stap functie.
- In dit voorbeeld is min = 0 en max = 120
- Stap functie wordt bepaald door $\frac{12}{(120-0)} = 0.1$
- Stel dat het eerst volgende gevonden jaartal een verschil van 70 jaar heeft ten opzichten van het eerste jaartal.
- Dan wordt de kleur bepaald door $((70 - 0) \cdot 0.1 - 1) = 6$ kleur #31B8EF word dan dus gekozen.

Zie de onderstaande code voor meer context:

*Code kleur toewijzing*

```typescript
  /**
   * maxColors divided over the range minYear, ..., maxYear
   * Depending on current year function is called which returns a number from 0 to maxColor - 1
   * index 0 is the first index color that is set in the colors array
   * index maxColors - 1 is the index of the last color in the colors array.
   * Next the step/bin is determined for the currentYear index of the colors array
   * For example: maxColors = 12, minYear = 0, maxYear = 120.
   * If then a currentYear of 70 is found, then step = 12/(120-0) = 0.1
   * currentYear = ((70 - 0) * 0.1) - 1 = 6 for the index of the colors array.
   **/
  public getColorRangeIndex(
    currentYear: number,
    minYear: number,
    maxYear: number,
    maxColors: number
  ) {
    if (currentYear > maxYear) {
      return 0;
    }
    if (currentYear - minYear === 0) {
      return maxColors - 1;
    } else {
      let step = maxColors / (maxYear - minYear);
      let res = Math.round((currentYear - minYear) * step - 1);

      res = res < 0 ? 0 : res;

      return maxColors - 1 - res;
    }
  }
```

## Resultaten

### Voorbeeld Query

De applicatie stelt de gebruiker instaat om op een visuele manier GraphQL query's te maken en deze over tijd heen te visualiseren op een kaart. 

Bijvoorbeeld een simpel BAG pand verzoek met pand status in gebruik kan in de applicatie op de volgende manier uitgevoerd worden:

<figure id="figuur-8">
  <a href="/assets/images/graphqltijdreizen/basis-query.png">
    <img src="/assets/images/graphqltijdreizen/basis-query.png" alt="basis query">
  </a>
  <figcaption>
    Figuur 8 ― Basis verzoek BAG panden.
  </figcaption>
</figure>



In de GraphQL playground zou de query er zo uitzien:

*GraphQL query van het onderliggende verzoek dat wordt uitgevoerd.*

```json
  bag2pand(actualiteit: $act, geo_where: $geo, where: {pandstatus_equals: PAND_IN_GEBRUIK}) {
    beginGeldigheid:begingeldigheid,
    eindGeldigheid:eindgeldigheid,
    eindRegistratie:eindregistratie,
    geometrie:geometrie,
    lokaalID:lokaalID,
    oorspronkelijkBouwjaar:oorspronkelijkbouwjaar,
    status:pandstatus,
    tijdstipRegistratie:tijdstipregistratie,
    versie:voorkomenidentificatie,
  }
```

Zie de onderstaande afbeelding voor de uitkomst van dit verzoek.

<figure id="figuur-9">
  <a href="/assets/images/graphqltijdreizen/query-uitkomst.png">
    <img src="/assets/images/graphqltijdreizen/query-uitkomst.png" alt="query uitkomst">
  </a>
  <figcaption>
    Figuur 9 ― Resultaat van de aanvraag nadat de slider helemaal afgespeeld is.
  </figcaption>
</figure>

### Data

Tijdens de ontwikkeling zijn er interessante observaties gedaan met betrekking tot de data die gebruikt wordt in de applicatie. Zo zijn er:

- Discrepantie in datasets zoals de BGT
  - registratie niet bij elke gemeente goed op orde is/was.
  - Daardoor kan het komen dat een object al langer bestaan dan de datum dat het is ingewonnen.
  - Dataset is relatief jong wat het visualiseren minder expressief maakt. Dit maakt de toepassing momenteel wat gelimiteerd, maar het heeft wel potentie voor de toekomst als deze dataset wat volwassenheid heeft gekregen.
  - Door toenemende aandacht worden er steeds meer objecten ingewonnen door gemeentes. Dit heeft ook een positieve invloed om de toepasbaarheid van de dataset te verhogen.
- BAG dataset is het meest expressief gebleken.
  - Dit komt door de leeftijd van de dataset.
  - Vooral de panden zijn goed te visualiseren.
- BAG dataset bevat ook onregelmatigheden zoals:
  - Afwijkingen in oorspronkelijk bouwjaar van panden, e.g. zoals placeholders: 1005, 9000, 0000.
- Overige koppelingen zoals BRT, DKK, BRK, BRKPB en BRK-ADM tonen potentie voor complexere zoekopdrachten en visualisaties bijvoorbeeld:
  - Een koppeling van een verblijfsobject met gebruikers doel kantoor en onderwijs. Gekoppeld aan perceel met een oppervlakte van 9000 vierkante meter.
  - Dit vereist nog veder onderzoek om inzicht te krijgen welke koppelingen en visualisaties nog meer zinvol zijn.

### Technisch

Tijdens de ontwikkeling zijn er enkele technische problemen en beperkingen opgetreden die vooral invloed hebben op de performance. Dit veroorzaakt een trage of soms niet reagerende gebruikersinterface. Zowel de grootte van de aanvraag als de hoeveelheid polygonen die tegelijkertijd getekend worden op het scherm hebben invloed hierop. Er is een poging gedaan om dit op te lossen door middel van web-workers, maar dit bleek te complex om te realiseren binnenin de duur van dit project. De aanbeveling is dan ook om dit veder te onderzoeken buiten de scope van dit project. 