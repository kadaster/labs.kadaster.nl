---
layout: page
title: Use Case ― Akte OCR
---
<script src="/demonstrators/loki-1.0/assets/js/iframeResizer.min.js"></script>
<iframe style=" z-index: 9999; position: fixed; right: 0; bottom: 0; height: 0px; width: 0px;" id="loki-chat"
  scrolling="no" frameborder="0" allowtransparency="true" src="/demonstrators/loki-1.0/index.html" title="Loki"> 
</iframe>
<script>
  iFrameResize({ sizeHeight: true, sizeWidth: true, autoResize: false, checkOrigin: false,  heightCalculationMethod: 'grow' }, '#loki-chat')
</script>


# Grip op BRK data met events 

## Het probleem: Ongecontroleerde decentrale kopieën 
Het Kadaster biedt op dit moment een abonnement aan om wijzigingen van de BRK te ontvangen: BRK Levering. Vele gebruikers van BRK data maken hier gebruik van om een kopie van de BRK op te bouwen voor eigen gebruik. De service van het Kadaster reikt tot het beschikbaar stellen van de data als BRK Levering en documentatie hoe deze data te interpreteren. Gebruikers zijn zelf verantwoordelijk en op zichzelf aangewezen voor het juist verwerken van de berichten tot een valide BRK stand. Daarbij is het niet mogelijk om in de BRK Levering data te filteren op alleen relevante informatie én het Kadaster biedt geen mogelijkheid om te valideren dat de verwerking juist wordt uitgevoerd. Sterker nog, het Kadaster kán die mogelijkheid niet bieden op dit moment omdat deze verwerking niet transparant is. 

<figure id="figuur-0">
  <a href="/assets/images/ldes1.jpg">
    <img src="/assets/images/ldes1.jpg">
  </a>
</figure>

## Oplossing: Gecontroleerde decentrale kopieën
Het Kadaster gaat de wijzigingen als veranderingen van de data beschrijven en publiceren. Dit is bekend als ‘events’. Daarbij levert het Kadaster een open source project op waarin de verwerking van events naar BRK stand is gerealiseerd. Deze is vervolgens 1-op-1 te gebruiken voor afnemers om een kopie van de BRK op te bouwen in hun eigen data center. Dit kan samengevat worden met Grip op BRK data met events. 

<figure id="figuur-1">
  <a href="/assets/images/ldes2.jpg">
    <img src="/assets/images/ldes2.jpg">
  </a>
</figure>


## Toekomst: Gecontroleerde decentrale toegepaste kopieën 
Toekomstperspectief hiervan kan zijn, dat afnemers een kopie maken van het open source project waarin de BRK events verwerkt worden tot de BRK stand. In deze kopie kan een afnemer een eigen selectie maken van relevante data en toegesneden verwerking en aanvulling met eigen data maken. Als afnemers dit ook als open source projecten publiceren, kan het Kadaster deze verwerking van BRK data reviewen en zo niet alleen grip op data verkrijgen maar ook grip op gebruik. En afnemers krijgen juridische en technische ondersteuning voor het gebruik van de BRK en mogelijk kan hier zelfs enige vorm van certificering aan toegevoegd worden. 

<figure id="figuur-2">
  <a href="/assets/images/ldes3.jpg">
    <img src="/assets/images/ldes3.jpg">
  </a>
</figure>

### Uitwerking
Wat is hiervoor nodig? In uitvoering liggen hier een aantal zaken op elkaar gestapeld. Het betekent open source ontwikkeling zodat kennis deling en samenwerking op BRK data mogelijk en bevorderd wordt. Ten tweede wordt event sourcing gebruikt voor het modelleren en publiceren van veranderingen in de BRK. Het Kadaster maakt hier intern al gebruik van maar publiceert deze data (nog) niet. Door gebruik te maken van Linked Data en specifiek voor events Linked Data Event Streams, kan agnostisch van techniek worden gewerkt, terwijl hoge mate van semantiek en modellering afgedwongen worden. 

## High 5 – Linked Data Event Streams (LDES) 
In de week van 27-06-2022 tot 01-07-2022 hebben wij een High 5 gedaan waarbij wij een LDES hebben beproefd op geanonimiseerde KOERS data.  LDES is een open standaard voor het uitwisselen van gegevens, waarbij de gegevens worden ontsloten als een doorlopende stroom van gebeurtenissen of events. Dit heeft verschillende voordelen; allereerst de mogelijkheid om doorlopend updates te krijgen (altijd up-to-date zijn), daarnaast de mogelijkheid om "á-la-carte" een abonnement samen te stellen (dataminimalisatie) en als laatste is het ontwikkeld op basis van open standaarden (geen lock-in). Daarnaast heeft een LDES ook voordelen voor een data leverancier; data hoeft alleen beschikbaar gesteld te worden middels één generieke dienst (geen customisatie). Er is beter zicht op betrouwbare verwerking bij de abonnee, er is zekerheid dat uitgegeven gegevens up-to-date zijn en het sluit aan bij de Interbestuurlijke Data Strategie (open standaarden, dataminimalisatie). 

## Tijdens deze high 5 hebben wij verschillende stappen genomen: 

- omzetten van de geanonimiseerde KOERS data van XML naar JSON 
- Omzetten van de KOERS data in JSON naar JSON-LD 
- Ontwikkelen van een pipeline om de KOERS data in JSON-LD te uploaden naar de triple store (van Triply) 
- Vervolgens hebben wij een LDES service gebruikt op deze data (ontwikkeld door Triply) 
- Mogelijkheid ontwikkelt om te abonneren (subcribe) op de LDES voor een specifieke periode (middels een startdatum en einddatum) 
- De streaming events die via deze service binnen komen worden verwerkt naar een eigen datamodel – in dit geval gebaseerd op het BRK informatiemodel – en gepubliceerd als linked data en kunnen tevens worden weggeschreven in een eigen triple store 

Ter illustratie zijn de stappen uitgewerkt in onderstaande architectuurplaat: 

<figure id="figuur-3">
  <a href="/assets/images/ldes4.png">
    <img src="/assets/images/ldes4.png">
  </a>
</figure>

Tijdens de high 5 zijn mooie resultaten behaald. KOERS kan als LDES gepubliceerd worden en gebruikers (bijv. gemeenten) kunnen zich hierop abonneren om vervolgens te uploaden in bijv. een eigen triple store. Technisch zijn alle stappen mogelijk en dat is een prachtig resultaat! 

Echter, is er nog voldoende ruimte voor verbetering. Event-sourcing patronen zijn nog niet zo standaard en bekend en worden in of rondom LDES nog niet duidelijk toegepast. Het is onduidelijk hoe uitbreiden van de event stream dataset voor de producerende / publicerende kant zou moeten werken. Daar zijn diverse mogelijkheden, maar nog geen duidelijke keuzes of voorkeuren. Ook het abonneren is nog redelijk rudimentair. Abonneren op verschillende selectiecriteria lijkt wel mogelijk te zijn,  maar is nog niet standaard en zeker niet toegankelijk uitgewerkt. Ook het technisch abonneren op een LDES heeft nog onduidelijkheden in mogelijkheden en onmogelijkheden. Hier zijn nog geen standaarden of voorkeuren in beschikbaar op dit moment. In een later stadium zouden wij graag nog willen kijken naar de data stroom aanpak en het eenvoudiger maken van de abonnementen. 