---
layout: page
title: Use Case ― Loki voor GEO Informatieverstrekking
---
<script src="/demonstrators/loki-1.0/assets/js/iframeResizer.min.js"></script>
<iframe style=" z-index: 9999; position: fixed; right: 0; bottom: 0; height: 0px; width: 0px;" id="loki-chat"
  scrolling="no" frameborder="0" allowtransparency="true" src="/demonstrators/loki-1.0/index.html" title="loki"> 
</iframe>
<script>
  iFrameResize({ sizeHeight: true, sizeWidth: true, autoResize: false, checkOrigin: false,  heightCalculationMethod: 'grow' }, '#loki-chat')
</script>


# Use Case: Loki voor GEO Informatieverstrekking

## Status

Deze oude versie van Loki is gedeactiveerd. De pagina met de demonstrator is niet meer beschikbaar. De meest recente versie van loki is beschikbaar met het chat-ballonetje rechts onderin op deze pagina en de [hoofdpagina](/).

## Introductie

Loki is een experiment waarbij we de toegevoegde waarde aantonen van een chatbot voor Locatie-gebaseerde Kadaster Informatieverstrekking.  Loki maakt gebruik van natuurlijke taalverwerking voor het beantwoorden van vragen.  De [PDOK Knowledge Graph](/cases/pdok-knowledge-graph.html) is het kloppend hart van Loki. 

Na dit experiment ontstond de wens voor een testbare versie voor de eindgebruiker. Deze versie zou Loki 1.0 heette en is door een student als afstudeeropdracht ontwikkeld. Loki 1.0 is te gebruiken door op het chat-icoon rechts onderaan het scherm te klikken. Meer informatie over Loki 1.0 is onderaan deze pagina te lezen.

Met de opkomst van virtual assistents, zoals Siri, Alexa & de Google Assistent en de ontwikkelingen omtrent de [Kadaster Knowledge Graph](/cases/kadaster-knowledge-graph.html), ontstaan er nieuwe inzichten over hoe de data van de toekomst moet worden ontsloten.  Het resultaat van deze innovatie vind je door op onderstaande demonstrator te klikken! Voor een uitgebreid verhaal over hoe en waarom Loki ontwikkeld is nodigen we de lezer van harte uit om verder te lezen.

<div class="cards-wrapper">
  <!-- <a href="/demonstrators/loki/index.html">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/loki-logo.jpg" alt="Loki logo">
      <div class="card-title">Loki voor Geo Informatieverstrekking</div>
      <div class="card-description">Gebruik spraak en tekst om de databronnen van het Kadaster te bevragen.</div>
    </div>
  </a> -->
  <a href="/cases/pdok-knowledge-graph.html">
    <div class="card">
      <div class="card-type">Use Case</div>
      <img class="card-image" src="/assets/images/pdok-kg-simplified.jpg" alt="Knowledge graph">
      <div class="card-title">PDOK Knowledge Graph</div>
      <div class="card-description">Loki gebruikt de PDOK knowledge graph om de juiste antwoorden bij jouw vraag te zoeken!</div>
    </div>
  </a>
</div>

## Aanpak

Zoals ieder idee begon ook het Loki project met een uitdaging.  Belangrijke vragen om onszelf te stellen zijn:

- “Wat is de huidige situatie?”
- “Wat zijn de huidige uitdagingen?”
- “Wat is de impact van deze uitdagingen?”
- “Hoe gaan we die uitdagingen aanpakken?”
- “Wat voor nut heeft de uiteindelijke oplossing?”

Bij het Kadaster beheren we verschillende (open) databronnen en stellen die ter beschikking van de gebruikers.  Vaste gebruikers van onze data zijn gemeentes, provincies en overheidsinstellingen, maar ook de makelaar, accountant en iedere burger kan altijd op onze data vertrouwen.  Kwaliteit van data staat hoog in ons vaandel.  Tegelijkertijd is zo dat terwijl we onze databronnen al jaren aanbieden, de vraag naar informatie in de huidige digitale wereld meer en meer toeneemt.  Gebruikers hebben vragen over hun huis, hun omgeving of over Nederland als geheel.  Tegelijkertijd moet het gebruiksgemak omhoog.  Niet alleen de techneuten of de experts in het publieke domein willen voorzien worden van informatie, maar ook de burger thuis wil zijn vragen beantwoord kunnen hebben zonder een uitgebreide kennis van APIs, Linked Data, of waar de informatie in de verschillende databronnen (van het Kadaster) te vinden is.

Met Loki proberen we voornamelijk deze laatste groep beter van informatie te kunnen voorzien.  Het Kadaster wil dat iedereen een vraag kan stellen, in spraak of natuurlijke taal, en dat deze vraag niet beantwoord wordt met data, maar met antwoorden.  Deze vragen zijn vaak niet gelimiteerd tot één bron, maar gaan dwars over verschillende databronnen heen.  Een geavanceerd vraag/aanbod systeem, dat live met de bron data communiceert.  Zo verzekeren wij kwaliteit in de data en in de antwoorden die Loki geeft.

Vervolgens is het team gaan sparren over hoe een dergelijke oplossing er in technische componenten uit zou moeten zijn.  Daarbij kwamen we tot de plaat beschreven in [Figuur 1](#figuur-1):

<figure id="figuur-1">
  <a href="/assets/images/architectuur-loki.jpg">
    <img src="/assets/images/architectuur-loki.jpg" width="573" height="511" alt="Architectuur loki">
  </a>
  <figcaption>
    Figuur 1 ― Initiële architectuurplaat voor Loki.
  </figcaption>
</figure>

Belangrijkste uitgangspunt hier is dat het resultaat in een web-interface (deze labs.kadaster website) getoond kan worden.  Visualisaties op de kaart zijn daarbij een absolute pré.  De initiële focus ligt op vragen beantwoorden op basis van natuurlijke taal, waarbij er voor de spraak component gebruik gemaakt kan worden van standaard text-to-speech oplossingen zoals de Speech-to-text API van Microsoft Azure en deze te beoordelen op de kwaliteit van de resultaten op Kadaster specifieke termen, zoals adressen, postcodes en percelen.  Een chatbot interface wordt gebruikt om ambiguïteit op te lossen.  De ingegeven vraag wordt via natuurlijke taal verwerking (ook wel Natural Language Processing of NLP genoemd) omgezet in een SPARQL query op het [PDOK SPARQL endpoint](https://data.pdok.nl/sparql).  Synoniemen worden gebruikt om tekst om te zetten in specifiek Kadaster jargon.  Het resultaat van de query wordt vertaald in een antwoord en (eventueel) getoond op de kaart.  Alle gesprekken met Loki en de acties die Loki op basis hiervan onderneemt worden opgeslagen.  Met deze data kunnen we de herkenning van de vragen die aan Lokin gesteld worden verbeteren en inventariseren waar de behoefte zit bij de gebruikers.

<div class="textbox" markdown="1">
## Kadaster jargon

Niet veel mensen zullen hun huis beschrijven als een Verblijfsobject, zoals hij officieel in de [Basisadministratie Adressen en Gebouwen (BAG)](https://zakelijk.kadaster.nl/basisregistratie-adressen-en-gebouwen) is opgenomen, net als dat weinigen naar het oorspronkelijkBouwjaar van hun huis zullen vragen.  Dergelijk jargon vangen we af met synoniemen en business rules, zodat Loki begrijpt wat je wil weten.
</div>

## Iteratief ontwikkelen

Bij het Kadaster Data Science team werken we volgens het Scrum/Agile proces.  Door concrete doelen te stellen in korte sprints van twee weken kan er snel en dynamisch ontwikkeld worden.  Iedere sprint sluiten we af met een demo waarin we de betrokken collega's op de hoogte houden van onze voortgang.  Dit zorgt er op zijn beurt weer voor dat er een continue druk is om aan het einde van twee weken iets concreets te laten zien.  Ook wordt er op deze manier continu feedback opgehaald en kan er snel bijgestuurd worden als het product een grotere waarde vertegenwoordigd met een kleine wijziging.

### Iteratie 1: Framework en adressen verificatie

We begonnen de eerste sprint door een framework neer te zetten voor een chatbot aangesloten op de relevante databronnen.  De chatbot is gebaseerd op het Open-Source Python platform [Rasa](https://rasa.com/).  Eerste databron in scope is de BAG, een bron die centraal staat in de [PDOK Knowledge Graph](/cases/pdok-knowledge-graph.html) en voor Locatie-gebaseerde Kadaster Informatie (LOKI) een onmisbaar uitgangspunt biedt.  Na de eerste iteratie was het mogelijk om simpele vragen over een adres uit de BAG te stellen (bijv. wat is mijn oppervlakte?).  Adressen en de desbetreffende informatie verifiëren we via de [PDOK Locatieserver](https://github.com/PDOK/locatieserver/wiki/API-Locatieserver).

<div class="textbox" markdown="1">
## PDOK Locatieserver

Adressen en stadsnamen zijn voorbeelden van concepten waar vaak typfouten in ontstaan, maar tegelijkertijd van levensbelang zijn om een (unieke) locatie aan een vraag toe te wijzen.  De Locatieserver van Publieke Dienstverlening Op de Kaart(PDOK) biedt een API om adressen te verifiëren aan de hand van de bestaande adressen in de BAG.  Deze biedt tevens standaardisatie voor de gegevens waarin ze officieel in de bron zitten.  Zo kent hij Den Haag als 's-Gravenshage en maken we mbv deze service van de Kogelaan in Zwolle de Koggelaan, in lijn met het adres wat we daar kunnen vinden.
</div>

### Iteratie 2: Gecompliceerdere vragen en de DKK

Nu we de mogelijkheid hebben om 'simpele' vragen aan Loki te stellen breiden we zijn kennis over de verschillende vragen uit.  Belangrijk speerpunt is het stellen van 'aggregaat' vragen, die je in staat stellen om gemiddeldes, maxima, minima en totalen aan te vragen over een straat, postcode of stad. Dit is in lijn met onze doelstelling om van Loki een Geo-platform voor iedereen te maken, inclusief de burgers geïnteresseerd in self-service analyse op onze databronnen. Tevens hebben we [de Kadastrale Kaart (DKK)](https://zakelijk.kadaster.nl/digitale-kadastrale-kaart-als-open-data) als bron toegevoegd.  Hiermee kunnen de gebruikers informatie over hun perceel opvragen.

### Iteratie 3: BRT, WOZ en doorverwijzingen

Eén van de belangrijkste vragen die burgers hebben relateren zich tot de Wet waardering Onroerende Zaken (WOZ) waarde.  De WOZ is momenteel te bevragen via het <a href="https://www.wozwaardeloket.nl/">WOZ Waardeloket</a> en is verder niet als open data beschikbaar.  Door verwijzingen toe te voegen naar WOZ categoriën, waarmee we je een globaal beeld geven van je WOZ waarde, voorzien we gedeeltelijk aan deze behoefte.  Ook voegen we verwijzingen toe naar vragen die we niet direct kunnen beantwoorden uit onze open databronnen.  Daarnaast voegen we de een geometrische link met de [Basisregistratie Topografie (BRT)](https://labs.kadaster.nl/cases/brt.html) toe, waarmee we de gebruiker in staat stellen afstanden tot de objecten in de BRT te bevragen.

<div class="textbox" markdown="1">
## Geometrische links en de BRT

Niet alle databronnen van het Kadaster zijn momenteel aan elkaar verbonden in onze Knowledge Graph.  Dit is omdat niet iedere databron een administratieve link bevat met de andere bronnen.  De BRT is hier een voorbeeld van.  Door te kijken wat de afstand is tussen objecten in de BRT en een object in de BAG (waarvan we beiden geometriën hebben), zijn we wel in staat op deze manier een geometrische link aan te leggen.  In iteratie 5 tonen we aan wat er mogelijk is als we deze eerder genoemde administratieve links wel hebben, een situatie waar we in de toekomst meer en meer naartoe bewegen.
</div>

### Iteratie 4: De Knowledge Base

Zoals ieder product wat gedreven is door data valt en staat Loki met een gedegen basis aan onderliggende data.  Om het gebruik van Loki te monitoren is er een database opgezet om de gesprekken tussen Loki en zijn gebruikers op te slaan.  Wij gebruiken deze data op onze beurt om het model wat omgaat met de ingegeven natuurlijke taal te verbeteren.  Daarnaast biedt het ons een mooie manier om de klantbehoefte van Loki in kaart te brengen.  Welke vragen stellen gebruikers nu aan ons?  En hoe stellen zij deze?  Het development team heeft een dashboard ontwikkeld waarmee ze antwoorden op deze vragen continu in beeld brengen.

### Afsluiter: Filter vragen en de BRT/BAG link

De laatste iteratie in het Loki innovatie traject richt zich op het implementeren van een databron overstijgende aanpak op een Geo-platform voor iedereen.  Loki moet herkennen als gebruikers een filter toepassen op hun vraag (bijv. alle huizen met een bouwjaar voor 1600).  Deze toepassing passen we ook toe op een set aan data die databron-overstijgend is.  Hierbij gebruiken we een experimentele BAG-BRT link die de BRT objecten aan de panden in de BAG koppelt.  Dit stelt ons in staat om vragen te stellen over de Kerken in Dordrecht (experimentele set) met informatie uit zowel de BAG en de BRT.

Een voorbeeld: “Geef mij alle kerken groter dan 500 vierkante meter in Dordrecht.”

## (Voorlopig) Eindresultaat van innovatie

Na 5 iteraties van twee weken kijken we waar Loki momenteel staat en bereiden we ons voor op volgende stappen in  het implementeren van deze innovatie.  We nodigen iedereen uit om Loki actief te testen en gebruiken en hun feedback achter te laten.  We zijn altijd benieuwd wat er beter kan.  In de huidige versie van Loki zijn dit type de type vragen die Loki kan beantwoorden:

- “Wat is de WOZ waarde van mijn huis?”
- “Wat is het bouwjaar van mijn huis?”
- “Wat is de gemiddelde oppervlakte in mijn straat?”
- “Waar ligt mijn perceel?”
- “Wat zijn de huizen in Oranje gebouwd na 2000?”
- “Wat is het oudste huis in Haarlem?”
- “Geef mij alle kerken gebouwd voor 1500 in Dordrecht.”

En gebruik onderstaande link om meteen te gaan testen!

<div class="cards-wrapper">
  <a href="/demonstrators/loki/index.html">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/loki-logo.jpg" alt="Loki logo">
      <div class="card-title">Loki voor Geo Informatieverstrekking</div>
      <div class="card-description">Gebruik spraak en tekst om de databronnen van het Kadaster te bevragen.</div>
    </div>
  </a>
</div>


## Loki 1.0
Omdat de eerste versie van Loki slechts een experiment was zijn er verschillende “shortcuts” genomen tijdens de ontwikkeling. Hiermee is het concept bewezen maar betekende dit wel dat het niet bruikbaar was voor de eindgebruiker. Dit is wel de vervolg stap die het Kadaster graag met Loki wil zetten. Daarom was de opdracht om Loki door te ontwikkelen tot een testbare versie voor de eindgebruiker ofwel: Loki 1.0. Hierbij was het een vereiste dat er een nieuw front-end gerealiseerd zou worden

#### Onderzoek
Om tot Loki 1.0 te kunnen komen is eerst een onderzoek gedaan waarin de volgende hoofdvraag werd beantwoord:
• Wat is er nodig om Loki beschikbaar te stellen voor eindgebruikers?
Uit dit onderzoek is gebleken dat, Rasa; het chatbot framework waar de experimentele versie van Loki gebruikt van maakte, nog steeds een goede optie was om te blijven gebruiken. De reden hiervoor zijn:
• Er waren geen grote verschillen te zien in performance tussen Rasa en andere frameworks zoals Dialogflow van Google of Watson van IBM.
• Rasa bood meer mogelijkheden voor het configureren van de chatbot en het doen van toevoegingen zoals een kaartweergave.

#### Realisatie
Met de kennis van het onderzoek is begonnen aan de realisatie. Hierbij werd eerst een ontwerp gemaakt dat weergaf hoe Loki 1.0 eruit zou zien en welke functionaliteiten de chatbot zou hebben. Tijdens deze realisatie werd al snel duidelijk dat het veel tijd en werk zou kosten om van de experimentele versie van Loki een robuuste testbare versie te maken voor de eindgebruiker. Dit had de volgende redenen:
• Matige kwaliteit van code
• Keuzes die niet in lijn lagen met wat Rasa beschreef
• Geen documentatie van de code
• Responses speciaal voor Mendix
• Niet gebruikersvriendelijk
Daarom is besloten om net als met de front-end de backend ook opnieuw te maken. Dit betekende dat niet alle functionaliteiten konden worden geïmplementeerd maar zorgde wel voor een betere basis voor de testbare versie waar in de toekomst mogelijk op verder gebouwd kan worden.

#### Afstudeerverslag
Voor meer informatie over deze afstudeeropdracht is <a href="/assets/pdf/Afstudeerverslag - Kadaster - Loki 1.0.pdf">hier</a> het afstudeerverslag te downloaden. 