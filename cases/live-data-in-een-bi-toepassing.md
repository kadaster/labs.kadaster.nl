---
banner: /assets/images/tableau-wdc.png
layout: page
title: Use Case ― Live data in een BI-toepassing
---
# Use Case: Live data in een BI-toepassing

<div class="cards-wrapper">
  <a href="/demonstrators/legacydemonstrator/">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/tableau-wdc.png">
      <div class="card-title">Tableau Web Data Connector</div>
      <div class="card-description">Spreek deze demonstrator aan vanuit Tableau om live data te ontvangen van onze demo API.</div>
    </div>
  </a>
  <a href="/demonstrators/live-data-in-een-bi-toepassing/index.html">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/livedatadashboard.png">
      <div class="card-title">Tableau dashboard</div>
      <div class="card-description">Dit is het dashboard dat gebruik maakt van de data in de Tableau WDC</div>
    </div>
  </a>
</div>

## Introductie
Bedrijven worden meer en meer gedwongen om data-gedreven te werken. Niet alleen verzamelen we met zijn allen meer en meer informatie, we raken ook steeds meer gewend aan het gebruik van data in onze 
dagelijkse activiteiten en processen. Een belangrijke stap daarin is het gebruik van een Business Intelligence (BI) toepassing om de data op een intuitieve manier te ontsluiten en visualiseren. 
Deze data kan dan komen van het welbekende Microsoft Excel, database warehouses, triple stores of andere data-opslag methodieken. Bij het Kadaster geloven we dat de data direct bij de bron vandaan moet komen, 
en ontsluiten we deze vaak met Application Programming Interface (APIs). En dus is het de moeite waard om uit te zoeken hoe we live data in een BI-toepassing, Tableau, kunnen realiseren.

<div class="textbox" markdown="1">
## BI Toepassingen en Tableau
Business Intelligende (BI) is, volgens <a href="https://www.gartner.com/it-glossary/business-intelligence-bi/">Gartner</a>, de verzamelnaam voor de applicaties, infrastructuur, tooling en best-practices noodzakelijk voor de analyse van data, met als doel optimale beslissingen te doen en kwaliteit te verbeteren.
Voorbeelden van tooling in deze markt zijn <a href="https://www.qlik.com/us">Qlikview</a>, <a href="https://powerbi.microsoft.com/en-us/">Microsoft PowerBI</a> en <a href="https://www.tableau.com/">Tableau</a>. 
</div>

## Het doel
Het doel van deze use case was om een dashboard te maken op een intern beschikbare API, waarin terugmeldingen op de basisregistraties van het Kadaster kunnen worden opgehaald. Dit dashboard moet informatie bevatten
over de verwerkingstijd en hoeveelheid terugmeldingen die er op enig moment bij de verschillende landelijke voorzieningen staan en kan gebruikt worden om de kwaliteit van dit proces beter in kaart te brengen. 
Omdat deze data ontsloten moet worden met een API, is er geen standaard connector beschikbaar vanuit de meeste BI toepassingen. Er moet dus een manier worden gevonden om deze API aan te spreken vanuit de BI toepassing en de data 
daarmee live beschikbaar te stellen, alsof het een directe connectie met de database betreft.

## Aanpak
Allereerst moet er gekozen worden met welke BI toepassing er gewerkt gaat worden. De keuze valt hierbij al snel op Tableau, dat de mogelijkheid biedt om data op te halen vanuit een <a href="https://help.tableau.com/current/pro/desktop/en-gb/examples_web_data_connector.htm">Web Data Connector</a>. 
Hiervoor is naast kennis van de BI toepassing ook kennis van Javascript vereist. Deze web data connector is een combinatie van een web-pagina met scripting om de relevante data op te halen. 
Wanneer we deze web data connector (lokaal) hebben gebouwd, moet hij tevens beschikbaar worden gesteld naar de buitenwereld. Dit doen we door de web data connector neer te zetten in een <a href="https://www.docker.com/">Docker</a> container en deze te draaien op 
een Virtual Machine in de <a href = "https://azure.microsoft.com/en-us/">Microsoft Azure cloud</a>. Zodra de web data connector beschikbaar is en we de data hiermee kunnen ophalen, bouwen we een dashboard op de opgehaalde data. 

<div class="textbox" markdown="1">
## Docker containers & de cloud
Bij het Data Science team van het Kadaster gebruiken we met enige regelmaat Docker om de gebouwde demonstrators of applicaties beschikbaar te stellen. Docker is een manier om code en dependencies te bundelen als een 
lichtgewicht applicatie dat uitgerold kan worden op een verscheidenheid aan systemen en platformen. Het platform wat wij hiervoor gebruiken is onze Data Science Kadaster Virtual Machine (VM) in de Microsoft Azure cloud omgeving.
Dit is in feite onze eigen server, waar we de verschillende demonstrators gecontroleerd en schaalbaar kunnen hosten. 
</div>

## Het resultaat

In [Figuur 1](#figuur-1) vinden we een beeld van hoe de Terugmelddata web connector er uit ziet. Omdat er geen uitgebreide keuzes zijn in de API over welke data er wel of niet opgehaald moet worden, is er 
voor gekozen om een niet al te uitgebreide web-pagina neer te zetten waar de data simpelweg met één knop binnen gehaald kan worden. 

<figure id="figuur-1">
  <a href="/assets/images/terugmeld-wdc.png">
    <img src="/assets/images/terugmeld-wdc.png">
  </a>
  <figcaption>
    Figuur 1 ― Web-pagina van de Web Data Connector
  </figcaption>
</figure>

Wanneer we op de knop drukken wordt er achtereenvolgens:

<ol>
  <li> De ruwe data binnen gehaald bij de API </li>
  <li> Data transformaties uitgevoerd door Javascript </li>  
  <li> De ge-transformeerde data als relationele data in Tableau ingelezen </li>
</ol>

Uitiendelijk resulteert zich dat in een dataset waarin we - met deze web data connector - de efficientie van ons terugmeldproces in kaart kunnen brengen. Hoe lang lopen bepaalde terugmeldingen al?  En worden deze binnen de targets afgehandeld? Visueel kun je het dashboard vinden in [Figuur 2](#figuur-2).

<figure id="figuur-1">
  <a href="/assets/images/livedatadashboard.png">
    <img src="/assets/images/livedatadashboard.png">
  </a>
  <figcaption>
    Figuur 2 ― Tableau dashboard voor terugmeldingen, gebruik makende van onze web data connector
  </figcaption>
</figure>
