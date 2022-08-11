---
layout: page
title: Kadaster Knowledge Graph
---

<link rel="stylesheet" href="/assets/css/developer.css">

# Kadaster Knowledge Graph

De oppervlakte van een gebouw wordt in de Basisregistratie Adressen en
Gebouwen (BAG) opgeslagen.  Dat gebouw staat op een perceel, en dat
perceel heeft ook een oppervlakte, maar die wordt in Basisregistratie
Kadaster (BRK) opgeslagen.

In de Kadaster Knowledge Graph zijn deze, en heel veel andere,
gegevens met elkaar verbonden.  Voor deze verbindingen (of ‘links’)
wordt linked data gebruikt.  Linked data is een ecosysteem van
nationale en internationale open standaarden.

Op deze pagina vindt u informatie over de Kadaster Knowledge Graph.

## Use cases

De Kadaster Knowledge Graph wordt gebruikt in een toenemend aantal use
cases, waarmee gegevens op een nieuwe manier gekoppeld, bevraagd, en
inzichtelijk gemaakt worden.

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/planologen-per-buurt">
    <div class="card">
      <div class="card-type">Ruimtelijke ordening</div>
      <img class="card-image" src="/assets/images/planologen-screenshot.PNG">
      <div class="card-description">Planologen en stedenbouwers houden zich bezig met wat mensen waar kunnen doen en hoe dat kan veranderen.</div>
    </div>
  </a>
    <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/nutsbedrijven">
    <div class="card">
      <div class="card-type">Nutsbedrijven</div>
      <img class="card-image" src="/assets/images/elektriciteitsmast.PNG">
      <div class="card-description">De nutsbedrijven staan voor grote uitdagingen om hun netten in een steeds voller wordende gebouwde omgeving in te passen.</div>
    </div>
  </a>
  <a href="https://data.labs.kadaster.nl/integrale-gebruiksoplossing-igo/-/stories/openbare-orde-en-veiligheid">
    <div class="card">
      <div class="card-type">Openbare orde en veiligheid</div>
      <img class="card-image" src="/assets/images/BRK.jpg" alt="BRK">
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
      <div class="card-type">Beheer Openbare Ruimte</div>
      <img class="card-image" src="/assets/images/story-bor.PNG" alt="Beheer Openbare Ruimte">
      <div class="card-description">Bekijk hier hoe we geodata inzetten ten behoeve van het verbeteren van het beheer openbare ruimte.</div>
    </div>
  </a>
  </a>
    <a href="https://data.labs.kadaster.nl/dst/-/stories/algemene-queries-voor-kkg-gebruik">
    <div class="card">
      <div class="card-type">Ontwikkelaar</div>
      <img class="card-image" src="/assets/images/eerste-igo.PNG">
      <div class="card-description">Hoe gebruik ik als ontwikkelaar zelf de Knowledge Graph? En hoe stel ik mijn eerste query op?</div>
    </div>
  </a>
</div>

## Tutorials

Deze tutorials zorgen er voor dat je snel zelf aan de slag kunt gaan
met de Kadaster Knowledge Graph.  De tutorials zijn gericht op
ontwikkelaars, maar met name het eerste deel is ook voor een breder
technisch geïnteresseerd publiek bedoeld.

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/edu/-/stories/tutorial-introductie">
    <div class="card">
      <div class="card-type">Tutorial</div>
      <img class="card-image" src="/assets/images/colors.jpg">
      <div class="card-description"><b>Deel 1: Intro Kadaster Knowledge Graph</b><br>Wat is de Kadaster Knowledge Graph en wat kan ik er mee als ontwikkelaar?  Wat is linked data en waarom gebruikt het Kadaster open standaarden?</div>
    </div>
  </a>
  <a href="https://data.labs.kadaster.nl/edu/-/stories/tutorial-verken-data-model">
    <div class="card">
      <div class="card-type">Tutorial</div>
        <img class="card-image" src="/assets/images/red.jpg">
        <div class="card-description"><b>Deel 2: Verken het data model</b><br>Hoe exploreer ik een data model? Hoe verkrijg ik inzicht in de beschikbare data en de potentiële vragen die ik over de data kan stellen?</div>
    </div>
  </a>
  <a href="https://data.labs.kadaster.nl/edu/-/stories/tutorial-sparql">
    <div class="card">
      <div class="card-type">Tutorial</div>
      <img class="card-image" src="/assets/images/green.jpg">
      <div class="card-description"><b>Deel 3: SPARQL Bevragingstaal</b><br>Deze tutorial maakt je wegwijs in de SPARQL bevragingstaal. Hiermee kun je snel je eerste queries uitvoeren over de Kadaster Knowledge Graph.</div>
    </div>
  </a>
  <a href="/developer/sparql/tutorial/4-Gebruik-eigen-programmeertaal">
    <div class="card">
      <div class="card-type">Tutorial</div>
      <img class="card-image" src="/assets/images/white.jpg">
      <div class="card-description"><b>Deel 4: Gebruik een programmeertaal</b><br>Deze tutorial legt uit hoe je een applicatie kunt ontwikkelen in een programmeertaal, waarbij gebruik wordt gemaakt van de gegevens in de Kadaster Knowledge Graph.</div>
    </div>
  </a>
</div>

## Overzicht

De volgende tabel bevat de linked datasets die door het Kadaster worden ontsloten.  Voor iedere dataset zijn links opgenomen naar het SPARQL endpoint, de use cases, het data model en de SPARQL editor.

<div class="endpointContainer mobileHidden">
  <div><b>Dataset</b></div>
  <div><b>SPARQL endpoint</b></div>
  <div><b>Use cases</b></div>
  <div><b>Data model</b></div>
  <div><b>SPARQL editor</b></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BAG</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/bag2/">Basisregistratie Adressen en Gebouwen</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://bag2.basisregistraties.overheid.nl/sparql"><code>https://api.labs.kadaster.nl/datasets/kadaster/bag2/services/default/sparql</code></a></div>
  <div class="endpointContainer_center"><a href="/cases/bag-ld">Use cases</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/bag2-0">Data model</a></div>
  <div class="endpointContainer_center"><a href="https://bag2.basisregistraties.overheid.nl/sparql">SPARQL editor</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BGT</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/bgt">Basisregistratie Grootschalige Topografie</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://bgt.basisregistraties.overheid.nl/sparql">https://api.labs.kadaster.nl/datasets/kadaster/bgt/services/bgt/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/bgt-ld">Use cases</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/bgt">Data model</a></div>
  <div class="endpointContainer_center"><a href="https://bgt.basisregistraties.overheid.nl/sparql">SPARQL editor</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BRK</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/brk">Basisregistratie Kadaster (open deel)</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://bgt.basisregistraties.overheid.nl/sparql">https://api.labs.kadaster.nl/datasets/kadaster/brk/services/brk/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/brk-ld">Use cases</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/brk-pb/home">Data model (WIP)</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/brk/sparql/default">SPARQL editor</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">BRT</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/brt-2">Basisregistratie Topografie</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql">https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql</a></div>
  <div class="endpointContainer_center"><a href="/cases/brt-ld">Use cases</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/brt-ld">Data model</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/brt-2/sparql/brt">SPARQL editor</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">CBS KWB</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/cbs/wbk/">CBS Kerncijfers Wijken- en Buurten</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/cbs/wbk/services/wbk/sparql">https://api.labs.kadaster.nl/datasets/cbs/wbk/services/wbk/sparql</a></div>
  <div class="endpointContainer_center">-</div>
  <div class="endpointContainer_center">-</div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/cbs/wbk/sparql/wbk">SPARQL editor</a></div>
</div>
<div class="endpointContainer">
  <div class="endpointContainer_title mobileSpan">
    <img class="endpointContainerTitle_image" src="/assets/images/linked-data_icon.png">
    <div>
      <div class="endpointContainerTitle_maintext">KG</div>
      <div class="endpointContainerTitle_subtext"><a href="https://data.labs.kadaster.nl/kadaster/kg/">Knowledge Graph</a></div>
    </div>
  </div>
  <div class="mobileSpan"><a href="https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql">https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/igo/-/stories/user-story">Use cases</a></div>
  <div class="endpointContainer_center"><a href="https://kadaster.wvr.io/kg-kadaster/home">Data model</a></div>
  <div class="endpointContainer_center"><a href="https://data.labs.kadaster.nl/kadaster/kg/sparql/default">SPARQL editor</a></div>
</div>

## Data bronen en actualiteit

De Kadaster Knowledge Graph bevat gegevens afkomstig uit verschillende
open data bronnen.  De gegevens in de Kadaster Knowledge Graph worden
regelmatig ververst.  Op dit moment 4 keer per jaar.

- De Landelijke Voorziening van de Basisregistratie Adressen en Gebouwen (BAG).
- De Landelijke Voorziening van de Basisregistratie Grootschalige Topografie (BGT).
- De Top10NL van de Basisregistratie Topografie (BRT).
- Het open deel van de Basisregistratie Kadaster (BRK).
- De Publiekrechtelijke Beperkingen (PB).

De Kadaster Kennisgraaf maakt gebruik van linked data standaarden, en
kan door ontwikkelaars met de SPARQL bevragingstaal gebruikt worden.

De data die beschikbaar wordt gesteld vanuit de Integrale Gebruiksoplossing wordt op een regelmatige basis ververst. Momenteel bevat de integrale gebruiksoplossing de volgende datasets:

<table>
  <thead>
    <tr>
      <th>Dataset</th>
      <th>Verversingsfrequentie</th>
      <th>Huidige versie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basisadministratie Adressen en Gebouwen</td>
      <td>Kwartaal</td>
      <td>2022-05-20</td>
    </tr>
    <tr>
      <td>Basisadministratie Grootschalige Topografie</td>
      <td>Kwartaal</td>
      <td>2022-04-30</td>
    </tr>
    <tr>
      <td>Basisregistratie Topografie</td>
      <td>Kwartaal</td>
      <td>2022-04-21</td>
    </tr>
    <tr>
      <td>Digitale Kadastrale Kaart</td>
      <td>Kwartaal</td>
      <td>2022-01-14</td>
    </tr>
    <tr>
      <td>Basisregistratie Kadaster - Publieksrechtelijke Beperkingen</td>
      <td>geen reguliere vernieuwing</td>
      <td>2021-03-16</td>
    </tr>
    <tr>
      <td>Basisregistratie Kadaster - BRK Adressen (koppeling BRK-BAG)</td>
      <td>Kwartaal</td>
      <td>2022-05-04</td>
    </tr>
    <tr>
      <td>CBS Wijk- en buurtkaart</td>
      <td>Jaarlijks</td>
      <td>2019-11-01</td>
    </tr>
  </tbody>
</table>

Specifieke details over de wijzigingen tussen leveringen kunnen worden
geraadpleegd vanuit de individuele dataset pagina's. Vaak betreft dit
kleine quality-of-life verbeteringen of fixes op basis van observaties
van gebruikers.

De Kadaster Knowledge Graph (op basis van Schema.org) maakt gebruik
van deze onderliggende datasets en is daarmee qua actualiteit een
afgeleide van bovenstaande sets.

## Additionele resources

Om jullie als developer een beetje op weg te helpen stellen wij reeds een scala aan voorbeeld queries en andere resources beschikbaar die jullie kunnen helpen om snel met onze data aan de slag te gaan. Kijk daarom ook eens in de resources hieronder:

<div class="cards-wrapper">
  <a href="https://data.labs.kadaster.nl/kadaster/-/stories/algemene-queries-voor-kg-gebruik">
    <div class="card">
      <div class="card-type">Data Story</div>
      <img class="card-image" src="/assets/images/knowledge_graph.png" alt="Knowledge Graph">
      <div class="card-description">In deze data story nemen we je aan de hand om je eerste SPARQL query op onze Knowledge Graph op te stellen!</div>
    </div>
  </a>
</div>

## Integrale Gebruiksoplossing (IGO)

De Kadaster Knowledge Graph is gebaseerd op dezelfde aanpak die is verkend tijdens het traject van de Integrale Gebruiksoplossing (IGO).  De Integrale Gebruiksoplossing is een Proof of Concept dat binnen het DiS-Geo programma tot stand is gebracht in samenwerking met het Kadaster Data Science Team.  Het doel van de IGO is het combineren en integreren van geospatiële gegevensbronnen ten behoeve van innovatieve nieuwe use cases.  De IGO bevat naast Kadastrale bronnen ook een aantal niet-Kadastrale bronnen (bijvoorbeeld CBS wijken en buurten).  Bekijk onderstaande video om meer te weten te komen over de IGO.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IEsmV4q2Ai0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>