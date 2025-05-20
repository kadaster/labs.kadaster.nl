---
layout: page
title: BRT.Next
---
# Use Case: BRT.Next



## Achtergrond
De Basisregistratie Topografie (BRT) is de verzameling digitale topografische producten die door de Nederlandse overheid gemaakt wordt op basis van eigen ingewonnen data. Jaarlijks wordt door het ministerie zo’n 12 miljoen euro vrijgemaakt voor de productie van de BRT. Het Kadaster besteedt dit geld aan de inwinning en het beheer van het topografisch basisbestand TOP10NL. Dit inwinnen gebeurt op basis van onder andere luchtfoto’s en panoramafoto’s.

Het ministerie heeft besloten het budget met een kwart terug te dringen. Hierdoor moet de huidige productie herzien worden. Sinds de invoering van de BRT zijn andere basisregistraties als BGT en BAG ingevoerd, die ook gedetailleerd (delen van) het areaal van Nederland beschrijven. Met het oog op het beleidsprincipe ‘eenmalig inwinnen, meervoudig gebruik’ en het streven van de directie om middels innovatie productieprocessen efficiënter in te richten, is het project BRT.Next gestart.  

## Onderzoeksvraag en/of doelstellingen
Het voornaamste doel is het realiseren van een structurele besparing op de maakkosten van de BRT. Daarbij is als voorwaarde gesteld dat daarvoor gebruik wordt gemaakt van innovatieve technieken zoals bijvoorbeeld automatische generalisatie en beeldherkenning, als ook het hergebruik van reeds ingewonnen objectinformatie vanuit andere basisregistraties.

Hiermee wordt een nieuwe productieomgeving voor een nieuwe BRT opgeleverd. Deze bestaat enerzijds uit een omgeving waarin een zogenoemd werkbestand opgebouwd en bijgehouden wordt, anderzijds uit een omgeving waarin op basis van het werkbestand de topografische producten worden samengesteld.
De impact is dat met de productie ook het eindproduct gaat veranderen. Er volgen aanpassingen voor een product met meer detail, een andere actualiteit en een betere relatie tot de gebruikte bronnen. Daardoor zal er ook een trendbreuk zijn in de lijn van de huidige producten en gebruikers zullen daar mee te maken krijgen. Intern is de impact vooral dat de huidige productiemethode compleet gaat veranderen waardoor ook het werk voor de betrokken medewerkers verandert.  
 
## Aanpak (inclusief techniek) 
Het idee achter de BRT.Next is om de topografische producten in de BRT af te leiden uit andere datasets. In een initiële fase wordt de eerste versie van het BRT-werkbestand gegenereerd uit deze datasets. Voor daaropvolgende releases van de BRT wordt dan gekeken naar mutaties in de input-datasets. Deze input-mutaties worden verwerkt tot mutaties in in het werkbestand. Dit laatste heet de bijhoudingsfase. Wanneer het werkbestand up-to-date is start de assemblagefase waarin de producten worden samengesteld en/of gegeneraliseerd.

Uit een eerdere verkenning is gebleken dat het volledig automatisch afleiden van een BRT uit de BGT niet haalbaar is. Daarom worden aanvullende bronnen gebruikt. De BAG is daarvan de belangrijkste en vormt samen met de BGT de basis voor de BRT.Next. Daarnaast wordt gebruik gemaakt van andere bronnen met een formele status, zoals bijvoorbeeld NWB, AHN of de 3D BAG LoD1.2. Elementen waarvoor geen formele bron beschikbaar is volgen uit een vorm van eigen inwinning.

De beschikbare bronnen zijn niet in staat volledig in de BRT-inhoud te voorzien. Er is daarom binnen de BRT.Next ruimte om toevoegingen te doen ten behoeve van het eindproduct. Maar omdat we ons in de toekomst voornamelijk willen baseren op mutaties vanuit de bronnen, zullen we de toevoegingen moeten relateren aan objecten uit bron. Om dit te faciliteren introduceren we het ‘canvasprincipe’. 

Het canvasprincipe gaat uit van de bron, met name voor wat betreft het gebruik van de geometrie. De geometrie wordt gezien als drager van informatie. Het toevoegen van de juiste informatie gebeurt vervolgens in een proces waarin meerdere bronnen tegen elkaar afgewogen worden. Ook het aanpassen van geometrieën is onder bepaalde voorwaarden mogelijk door het splitsen van objecten. Wijzigingen zoals samenvoegen of verschuiven van geometrieën zijn niet toegestaan. 

Voor de ontwikkeling worden virtuele machines (AVD) gebruikt. De overall procesflow ligt vast in Esri Workflow Manager in combinatie met ArcGIS Enterprise en FME Flow. De data wordt opgeslagen in een PostGIS database. Geautomatiseerde bewerkingen worden gedaan via combinaties van FME, Python en ArcPy. Interacties (handmatige stappen) worden gedaan binnen Esri Sweet. 
 
<figure id="figuur-1">
  <a href="/innovatie/brt-next/afbeeldingen/brt-next_1.png">
    <img src="/innovatie/brt-next/afbeeldingen/brt-next_1.png" alt="Voorlopige visualisatie van kaartproduct 1:10.000">
  </a>
</figure>
Figuur 1. Voorlopige visualisatie van kaartproduct 1:10.000

## Resultaten
Er is een nieuw datamodel vastgesteld voor de BRT, ook de productfamilie is gedefinieerd. De nieuwe productiestraat wordt momenteel gebouwd. 
Inmiddels heeft een proefrun plaatsgevonden waarin voor een aantal proefgebieden de initiële fase is doorlopen. Met de resultaten hiervan kunnen de processen voor de volgende fasen verder ontwikkeld worden. Ook wordt er gewerkt aan de visualisatie voor een nieuw te ontwikkelen topografische kaart op schaal 1:10.000 en zijn de eerste resultaten daarvan zichtbaar. Het proces voor de BRT-achtergrondkaart is ontwikkeld evenals een eerste aanzet voor de kaart op schaal 1:25.000.

   
<figure id="figuur-2">
  <a href="/innovatie/brt-next/afbeeldingen/brt-next_2.png">
    <img src="/innovatie/brt-next/afbeeldingen/brt-next_2.png" alt="Voorlopige visualiatie van de BRT-achtergrondkaart">
  </a>
</figure>
Figuur 2. Voorlopige visualiatie van de BRT-achtergrondkaart

## Conclusies/aanbevelingen/vervolg 
De producten worden anders dan men gewend is, over de kwaliteit kunnen nog geen uitspraken gedaan worden, de doorlooptijd van een update-cyclus past binnen een jaar. 
Als het project opgeleverd wordt zijn de nieuwe productieomgeving en de producten een feit. Deze zullen in de toekomst doorontwikkeld moeten worden. Ook biedt de opzet van de productieomgeving ruimte voor het bijplaatsen van nieuwe bronnen en/of technieken.

## Vragen over dit project? 
Voor meer informatie kun je terecht bij Marc Post of Jan Bakermans (ODR/GEC).