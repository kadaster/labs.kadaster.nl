---
layout: page
title: Sparklis 
---

# Use Case: Sparklis 

## Introductie
Sparklis is een query-builder in natuurlijke taal waarmee mensen SPARQL-eindpunten kunnen verkennen en bevragen met alle kracht van SPARQL en zonder enige kennis van SPARQL, noch van het eindpuntvocabulaire. Het is een open-source client-side applicatie ontwikkeld door [Sébastien Ferré](http://people.irisa.fr/Sebastien.Ferre/). 

<div class="cards-wrapper">
  <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=%0A%09%09%09%09%09%09%09%09BAG%0A%09%09%09%09%09%09%09&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&max_increment_samples=100">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/sparklis.png" alt="sparklis">
      <div class="card-title">Sparklis</div>
      <div class="card-description">Een querybuilder in natuurlijke taal waarmee niet-ervaren gebruikers SPARQL-eindpunten kunnen verkennen en doorzoeken.</div>
	</div>
  </a>
</div>

## Voorbeeldquery's voor Sparklis

### BAG
1. Buildings given a construct year. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BAG&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23Pand%22%29%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23oorspronkelijkBouwjaar%22%2CFwd%2CDet%28Term%28Number%282020.%2C%222020%22%2C%22http%3A//www.w3.org/2001/XMLSchema%23integer%22%29%29%2CNone%29%29%29%29%29&sparklis-path=DD&max_increment_samples=100"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every pand <br/>whose oorspronkelijk bouwjaar is 2020
    </div>

2. Number of buildings given a construct year. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BAG&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&sparklis-query=%5BVId%5DSeq%28Return%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23Pand%22%29%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23oorspronkelijkBouwjaar%22%2CFwd%2CDet%28Term%28Number%282020.%2C%222020%22%2C%22http%3A//www.w3.org/2001/XMLSchema%23integer%22%29%29%2CNone%29%29%29%29%29%2CSAggregList%28TheAggreg%2838%2CModif%28Select%2CUnordered%29%2CNumberOf%2CNone%2C1%29%29%29&sparklis-path=DRD&max_increment_samples=100"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every pand <br/>whose oorspronkelijk bouwjaar is 2020 <br/>And give me the number of pand
    </div>

3. Buildings given a range of construct year. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BAG&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23Pand%22%29%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23oorspronkelijkBouwjaar%22%2CFwd%2CDet%28An%289%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Filter2%28LowerThan%28%221998%22%29%2COnlyIRIs%29%29%29%29%29%29%29&sparklis-path=DDDD&max_increment_samples=100"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every pand whose oorspronkelijk bouwjaar is lower or equal to 1998
    </div>
4. The building with a postcode and housenumber. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BAG&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23Pand%22%29%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23pandrelatering%22%2CBwd%2CDet%28An%2838%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23hoofdadres%22%2CFwd%2CDet%28An%28139%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28And%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23postcode%22%2CFwd%2CDet%28An%28240%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Is%28Det%28Term%28PlainLiteral%28%227311KZ%22%2C%22%22%29%29%2CNone%29%29%29%29%29%2CRel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23huisnummer%22%2CFwd%2CDet%28Term%28Number%28110.%2C%22110%22%2C%22http%3A//www.w3.org/2001/XMLSchema%23integer%22%29%29%2CNone%29%29%29%29%29%29%29%29%29%29%29%29&sparklis-path=DDDDDDDR&max_increment_samples=100"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every pand that is the pandrelatering of something whose hoofdadres <br/>has a postcode that is 7311KZ <br/>and has as a huisnummer 110 
    </div>

5. Buildings in a municipality. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BAG&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/bag/services/bag/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23Pand%22%29%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23pandrelatering%22%2CBwd%2CDet%28An%2838%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23hoofdadres%22%2CFwd%2CDet%28An%28139%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23bijbehorendeOpenbareRuimte%22%2CFwd%2CDet%28An%28175%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23bijbehorendeWoonplaats%22%2CFwd%2CDet%28An%28276%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23naamWoonplaats%22%2CFwd%2CDet%28Term%28PlainLiteral%28%22Apeldoorn%22%2C%22%22%29%29%2CNone%29%29%29%29%29%29%29%29%29%29%29%29%29%29%29%29%29&sparklis-path=DDDDDDDDDD&max_increment_samples=100"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every pand that is the pandrelatering of something whose hoofdadres has a bijbehorende openbare ruimte whose bijbehorende woonplaats has as a naam woonplaats Apeldoorn
    </div>

### Kadaster Knowledge Graph
1. Subtypes of buildings with a postcode. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=Kadaster%20Knowledge%20Graph&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/knowledge-graph/services/knowledge-graph/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23Pand%22%29%29%2CSome%28And%28Rel%28%22http%3A//www.opengis.net/ont/geosparql%23sfOverlaps%22%2CBwd%2CDet%28An%2838%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23type%22%2CFwd%2CDet%28An%2874%2CModif%28Select%2CUnordered%29%2CThing%29%2CNone%29%29%29%29%29%2CRel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23pandrelatering%22%2CBwd%2CDet%28An%28111%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23hoofdadres%22%2CFwd%2CDet%28An%28212%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22http%3A//bag.basisregistraties.overheid.nl/def/bag%23postcode%22%2CFwd%2CDet%28Term%28PlainLiteral%28%227513ER%22%2C%22%22%29%29%2CNone%29%29%29%29%29%29%29%29%29%29%29%29&sparklis-path=DDDRDDDDD&max_increment_samples=100&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every pand <br/>that is the sf overlaps of something that has a type <br/>and that is the pandrelatering of something whose hoofdadres has as a postcode 7513ER
    </div>

### BRT
1. Registerations of prisons. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BRT&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/brt/services/brt/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//brt.basisregistraties.overheid.nl/def/top10nl%23Gevangenis%22%29%29%2CNone%29%29&sparklis-path=D&max_increment_samples=100&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every gevangenis
    </div> 
2. Registerations of castles. <a href="https://labs.kadaster.nl/demonstrators/sparklis/osparklis.html?title=BRT&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/brt/services/brt/sparql&sparklis-query=%5BVId%5DReturn%28Det%28An%281%2CModif%28Select%2CUnordered%29%2CClass%28%22http%3A//brt.basisregistraties.overheid.nl/def/top10nl%23Kasteel%22%29%29%2CNone%29%29&sparklis-path=D&max_increment_samples=100&entity_lexicon_select=http%3A//www.w3.org/2000/01/rdf-schema%23label"><button>open in Sparklis</button></a>
    <div class="textbox" markdown="1">
    give me every kasteel
    </div>      

### Tutorial
Om jullie hiermee op weg te helpen hebben wij twee tutorials voor Sparklis gemaakt. 

#### Video 1
<figure id="1">
  <video controls loop poster="/assets/images/sparklis.png" width="1200">
	<source src="/assets/videos/sparklis_demo_1.mp4" type="video/mp4">
		Helaas, uw browser kan deze mp4 video niet weergeven.
	</source>
  </video>
  <figcaption>
	Figuur 1 ― Video tutorial 1 voor het gebruik van Sparklis.
  </figcaption>
</figure>

#### Video 2
<figure id="2">
  <video controls loop poster="/assets/images/sparklis.png" width="1200">
	<source src="/assets/videos/sparklis_demo_2.mp4" type="video/mp4">
		Helaas, uw browser kan deze mp4 video niet weergeven.
	</source>
  </video>
  <figcaption>
	Figuur 2 ― Video tutorial 2 voor het gebruik van Sparklis.
  </figcaption>
</figure>
   

