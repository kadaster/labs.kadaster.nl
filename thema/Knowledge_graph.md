---
layout: page
title: Kadaster Knowledge Graph
---

<link rel="stylesheet" href="/assets/css/developer.css">

# Kadaster Knowledge Graph
De oppervlakte en bouwjaar van een gebouw wordt in de Basisregistratie Adressen en Gebouwen (BAG) opgeslagen. Dat gebouw staat op een perceel, en dat perceel heeft ook een oppervlakte, maar die wordt in de Basisregistratie Kadaster (BRK) opgeslagen. Als gebruiker vereist het integreren van deze informatie voor een enkel gebouw of binnen een specifiek geografisch gebied dus domeinkennis van beide bronnen en kennis van hoe deze kunnen worden geïntegreerd. Om de gebruiker te ondersteunen bij het gebruik van geïntegreerde data, onderhoudt het Kadaster de Kadaster Knowledge Graph (KKG). In de KKG zijn deze, en heel veel andere, gegevens met elkaar verbonden. 

Voor deze verbindingen (of 'links') tussen verschillende bronnen wordt linked data principes en technologieën gebruikt. Linked data is een ecosystem van nationale en internationale open standaarden dat de beschikbaarheid van geïntegreerde gegevens op het web vergemakkelijkt. De Kadaster Knowledge Graph maakt gebruik van deze open standaarden (e.g. RDF, OWL en SHACL) en kan door ontwikkelaars met de SPARQL bevraginstaal gebruikt worden. Op deze pagina vindt u informatie over de Kadaster Knowledge Graph. De volgende video geeft een korte introductie van de KKG.

De volgende video geeft een korte introductie van de KKG. 

<div align="center"><iframe width="840" height="473" src="https://www.youtube-nocookie.com/embed/HiuHTMy-A-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Documentatie
Voor een meer gedetailleerd inzicht in de KKG kunt u gebruik maken van de volgende documentatie.
<style>
  button {
    color: #ffffff;
    background-color: #00295d;
    font-size: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 13px;
    padding: 25px 125px;
    cursor: pointer
  }
  button:hover {
    color: #008296;
    background-color: #ffffff;
  }
</style>
<div class="class-wrapper" align="center">
  <a href="https://kadaster.wvr.io/kadaster-knowledge-graph?branch=main&tab=home"><button type="button" name="documentatieButton">Data Model</button></a>
  <a href="https://data.labs.kadaster.nl/dst/kkg/sparql/default"><button type="button" name="documentatieButton">SPARQL Editor</button></a>
  <a href="https://labs.kadaster.nl/developer"><button type="button" name="documentatieButton">Developers</button></a>
</div>

## Bronnen en Actualiteit
De KKG bevat gegevens afkomstig uit verschillende open data bronnen. Deze bronnen omvatten:

- De Landelijke Voorziening van de Basisregistratie Adressen en Gebouwen (BAG).
- De Landelijke Voorziening van de Basisregistratie Grootschalige Topografie (BGT).
- De Top10NL van de Basisregistratie Topografie (BRT).
- Het open deel van de Basisregistratie Kadaster (BRK).
- De Publiekrechtelijke Beperkingen (PB).

De gegevens in de KKG worden regelmatig ververst. Op dit moment 4 keer per jaar in lijn met de kwartaalupdates van de basisregistraties en andere databronnen. Hieronder vindt u een overzicht van hoe vaak de gegevenssets worden vernieuwd en wanneer de laatste update is uitgevoerd:

<div class="textbox" markdown="1">
## Actualiteit van databronnen

- **Basisregistratie Adressen en Gebouwen (BAG)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2023-10-24*.
- **Basisregistratie Grootschalige Topografie (BGT)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2023-11-29*.
- **Basisregistratie Topografie (BRT)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2023-10-26*.
- **Digitale Kadastrale Kaart (DKK)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2023-10-21*.
- **Basisregistratie Kadaster - BRK Adressen (koppeling BRK-BAG)** (per kwartaal vernieuwd) - *Laatst vernieuwd met data van 2023-10-22*.
- **Basisregistratie Kadaster - Publieksrechtelijke Beperkingen (BRK-PB)** (geen reguliere vernieuwing) - *Laatst vernieuwd met data van 2021-03-16*.
- **CBS Wijk- en buurtkaart** (jaarlijks vernieuwd) - *Laatst vernieuwd met data van 2019-11-01*.

De Kadaster Knowledge Graph maakt gebruik van deze datasets en is daarmee qua actualiteit een afgeleide van bovenstaande sets. Voor een compleet overzicht van alle onderliggende datasets en toegang tot hun respectievelijke endpoints werwijzen we de gebruiker naar onze [developer portaal](/developer/sparql/). Voor use cases en data stories specifiek voor deze datasets verwijzen we de gebruiker naar [onze data pagina](/data/).

</div>

## Use cases

De Kadaster Knowledge Graph wordt gebruikt in een toenemend aantal use cases, waarmee gegevens op een nieuwe manier gekoppeld, bevraagd, en inzichtelijk gemaakt worden. Hieronder volgt een overzicht van deze use cases. 

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/dst/-/stories/algemene-queries-voor-kkg-gebruik">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/eerste-igo.PNG">
    <div class="card-title">Ontwikkelaar</div>
    <div class="card-description">Hoe gebruik ik als ontwikkelaar zelf de Knowledge Graph? En hoe stel ik mijn eerste query op?</div>
  </div>
</a>
<a href="/cases/integralegebruiksoplossing">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/igo-design.PNG" alt="Integraal Bevragen">
    <div class="card-title">Integrale Gebruiksoplossing</div>
    <div class="card-description">In deze use case worden verschillende use cases gecombineerd naar een geheel dat meer waarde bied dan de som van zijn onderdelen</div>
  </div>
</a>
<a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/planologen-per-buurt">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/planologen-screenshot.PNG">
    <div class="card-title">Ruimtelijke Ordening</div>
    <div class="card-description">Planologen en stedenbouwers houden zich bezig met wat mensen waar kunnen doen en hoe dat kan veranderen.</div>
  </div>
</a>
  <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/nutsbedrijven">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/elektriciteitsmast.PNG">
    <div class="card-title">Nutsbedrijven</div>
    <div class="card-description">De nutsbedrijven staan voor grote uitdagingen om hun netten in een steeds voller wordende gebouwde omgeving in te passen.</div>
  </div>
</a>
<a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/openbare-orde-en-veiligheid">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/BRK.jpg" alt="BRK">
    <div class="card-title">Openbare Orde en Veiligheid</div>
    <div class="card-description">Bekijk hier hoe we geodata inzetten ten behoeve van het verbeteren van de openbare orde & veiligheid.</div>
  </div>
</a>
  <!-- <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/Kwaliteitstoezicht-en-Handhaving">
  <div class="card">
    <div class="card-type">Kwaliteitstoezicht & Handhaving</div>
    <img class="card-image" src="/assets/images/bag-bgt-tooltip.PNG" alt="BAG-BGT kwaliteit">
    <div class="card-description">Bekijk hier hoe we de iGO kunnen inzetten tbv kwaliteitsverbetering van de geobasisregistraties</div>
  </div>
</a> -->
<a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/beheer-openbare-ruimte">
  <div class="card">
    <div class="card-type">Use Case</div>
    <img class="card-image" src="/assets/images/story-bor.PNG" alt="Beheer Openbare Ruimte">
    <div class="card-title">Beheer Openbare Ruimte</div>
    <div class="card-description">Bekijk hier hoe we geodata inzetten ten behoeve van het verbeteren van het beheer openbare ruimte.</div>
  </div>
</a>
</div>

## Demonstrators
Naast de use cases zijn er een aantal demonstrators ontwikkeld om gebruikers uit verschillende domeinen te ondersteunen bij het gebruik van de KKG. Meer inzicht in elke demonstrator vindt u door op elke tegel te klikken.

<div class="cards-wrapper">
  <a href="/demonstrators/querybuilder/index.html">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/querybuilder.png">
    <div class="card-title">Querybuilder</div>
    <div class="card-description">Maak je eigen SparQL queries op de KKG-Light</div>
  </div>
</a> 
<a href="/demonstrators/objectviewer">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/bag.png">
    <div class="card-title">Objectviewer</div>
    <div class="card-description">Zoek zelf in de objectviewer op locatie. De informatie is afkomstig uit de knowledge graph.</div>
  </div>
</a>
  <a href="/cases/sparklis">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/sparklis.png" alt="sparklis">
    <div class="card-title">Sparklis</div>
    <div class="card-description">Introductie en voorbeeldvragen van Sparklis.</div>
  </div>
</a>
<a href="/demonstrators/geodatavisitor">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/geodatavisitor.png">
    <div class="card-title">Geo Data Visitor</div>
    <div class="card-description">Een applicatie om de visualisatie van externe datasets op de kaart mogelijk te maken nadat deze zijn verrijkt door de geodatawizard </div>
  </div>
</a>
<a href="/cases/ar-applicatie">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/kadaster-logo.png">
    <div class="card-title">AR Applicatie</div>
    <div class="card-description">Een AR applicatie waarmee gebruikers op een laagdrempelige manier toegang hebben tot en interactie hebben met Kadastergegevens.</div>
  </div>
</a>
<a href="/demonstrators/gruff/index.html">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/gruff.png">
    <div class="card-title">Gruff</div>
    <div class="card-description">Een applicatie waarmee u de knowledge graph van Kadaster kunt visualiseren en doorbladeren</div>
  </div>
</a>
</div>
