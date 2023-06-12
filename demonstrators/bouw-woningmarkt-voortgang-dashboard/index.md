---
layout: page
title: bouw-woningmarkt-voortgang dashboard
---
# Bouw-Woningmarkt-Voortgang Dashboard (prototype)
In samenwerking met ICTU (opdrachtgever en sparringpartner). 

## Inleiding 
In het regeerakkoord 2022 is een ambitieuze woningbouwopgave opgenomen. De minister voor Wonen, Hugo de Jonge, is aangesteld om deze opgave te realiseren en heeft daarvoor stuurinformatie nodig om tijdig te kunnen bijsturen als projecten niet volgens planning worden gerealiseerd. 

## Waarom
Op dit moment worden bestuurders en bewindspersonen aan het einde van projecten vaak geconfronteerd en verrast met uitkomsten. Ze willen graag de mogelijkheid hebben om tijdig bij te sturen en stap voor stap in elke fase (mijlpalen) van het woningbouwproces inzicht hebben in de werkelijke voortgang, ten opzichte van de planning en gemaakte afspraken.  

## Wat 
Een dashboard voor Minister, wethouder, bestuurders, beslissers op basis van samenhangende (geo) data, waarin de plannen en afspraken worden vergeleken met de actuele voortgang (bereikte mijlpalen) van de bouw. De beoogde stuurinformatie zou bestaan uit overzichten van de daadwerkelijke voortgang, van de verschillende fases/mijlpalen die bouwprojecten doorlopen. 

In eerste instantie ligt de focus  op de provincie Utrecht omdat we van die provincie de complete data set hebben van de woningbouwafspraken per project tussen 2023 en 2030. De data is afkomstig van: https://planregistratie-wonen-utrecht.hub.arcgis.com/

## Hoe
De voortgang meten we aan de hand van mijlpalen die elk woningbouwproject moet doorlopen. De bron is de BAG data. Door de gemiddelde termijnen die per mijlpaal gelden, te vergelijken met de daadwerkelijke voortgang van de bouw, kunnen we een prognose doen wanneer welk project waarschijnlijk opgeleverd zal worden. Er is dan voldoende inzicht en tijd om eventueel in te grijpen en/of maatregelen te treffen.

## Doel Prototype 
Het doel van dit prototype is om te laten zien wat er wel en niet mogelijk is, waar liggen de uitdagingen, welke data is er (nog) nodig etc.

## Link (alleen beschikbaar binnen Kadaster)
https://labs.dst.kadaster.nl/bouwvoortgang/

# Screenshots dashboard: deze bevat de voortgang, aanpak en uitdagingen.

## Voortgang:

Voortgang gemeente niveau op basis van aantal verblijfsobjecten:

<figure id="figuur-3">
  <a href="/assets/images/bwv_Voortgang_Gemeente_objecten.PNG">
    <img src="/assets/images/bwv_Voortgang_Gemeente_objecten.PNG">
  </a>
</figure>
\
Voortgang project niveau op basis van aantal verblijfsobjecten:

<figure id="figuur-5">
  <a href="/assets/images/bwv_Voortgang_Leeuwesteyn_objecten.PNG">
    <img src="/assets/images/bwv_Voortgang_Leeuwesteyn_objecten.PNG">
  </a>
</figure>
\
Visualisatie op map:

<figure id="figuur-7">
  <a href="/assets/images/bwv_map_leeuwensteyn.PNG">
    <img src="/assets/images/bwv_map_leeuwensteyn.PNG">
  </a>
</figure>

## Aanpak:

### Koppeling planning aan actuele BAG data

De actuele informatie is gebaseerd op BAG data. Hierbij is gefilterd op bouwjaar na 2020. Dit om geen (minder) data meetenemen dat niet gerelateerd is aan het nieuwbouwproject. 
De BAG data wordt opgehaald op basis van de polygonen van de planning. Dit is de enig mogelijke koppeling. Het is bijvoorbeeld niet mogelijk om plan "veld 1.1" te koppelen aan BAG items.

De polygonen zijn niet altijd een correcte weergave van het polygoon van het plan. Het zijn vaak cirkels.
Dit zorgt voor onvolledigheid in de data opgehaald uit de BAG. Dit kunnen bijvoorbeeld meer objecten zijn (cirkel te groot), of objecten van andere nieuwbouwprojecten door overlap.

<figure id="figuur-11">
  <a href="/assets/images/Planning_polygonen.PNG">
    <img src="/assets/images/Planning_polygonen.PNG">
  </a>
</figure>

### Polygoon geen hit in BAG

Niet alle planning polygonen vinden een waarden in de BAG (bouwjaar na 2020). Dit kan verschillende oorzaken hebben. 
In theorie is het mogelijk dat de BAG panden het planning polygoon (nog) niet raken. 
Bijvoorbeeld als de bouw begonnen is in een hoek van een groot project met een groot perceel. Of wanneer het polygoon op een incorrecte locatie is geplaatst. Onduidelijk of en hoe vaak dit voorkomt.
Het zal vaker voorkomen dat de bouw nog niet begonnen is. Dit kan in overeenstemming zijn met de planning of al achterlopen. (*In een volgende versie van het dashboard is het mogelijk om dit onderscheid te maken in status, als hier behoefte aan is.*)

### Bepalen status project 

De BAG data voor een project kan meerdere statussen bevatten. De keuze is gemaakt om de meest voorkomende status (aantal verblijfsobjecten) te nemen als projectstatus. 

<figure id="figuur-11">
  <a href="/assets/images/Tabel_aanpak.PNG">
    <img src="/assets/images/Tabel_aanpak.PNG">
  </a>
</figure>

### Prognose bepaling

De prognose is gebaseerd op 2 rekenregels:

* Het startmoment van de huidige status plus de verwachte doorlooptijd vanaf die startdatum voor die status. 
    + Voorbeeld: een project heeft de status "Bouw gestart" gekregen op 2022-04-01, dan is de prognose op basis van deze regel 2022-04-01 + 12 maanden doorlooptijd = 2023-04-01.  
* De status van het project op dit moment plus de gemiddelde doorlooptijd van de opvolgende statussen.  
    + Voorbeeld: een project heeft de status "Bouw gestart" op 2023-04-01. Dan is de verwachting dat het nog minimaal 2 maanden duurt (gemiddelde duur 'Pand in gebruik (Niet ingemeten)' voordat het project is afgerond.

De laatste datum van beide rekenregels bepaald de prognose.     

### Gebruikte gemiddelde doorlooptijden:
Op dit moment worden onderstaande termijnen gebruikt tot de realisatie van de woningbouwproject. Dit zijn dummy waarden. De [CBS] (https://www.cbs.nl/nl-nl/cijfers/detail/82213NED#GemiddeldeDoorlooptijd_12/) bevat statistieken voor de doorlooptijd van 'Bouwvergunning verleend' tot realisatie, maar niet voor de andere mijlpalen.  
  
Bouwvergunning verleend:  17 maanden

Bouw gestart: 12 maanden

Pand in gebruik (Niet ingemeten): 2 maanden

## Uitdagingen


* De planning polygonen zijn niet altijd een correcte weergave van het daadwerkelijke project. Het zijn voor enkele gemeenten cirkels.
                            
* Dit zorgt voor onvolledigheid in de data opgehaald bij BAG. Dit kunnen bijvoorbeeld meer objecten zijn (cirkel te groot), of te weinig (cirkel te klein.)
* Dit haalt mogelijk data op dat niet gerelateerd is aan het project. 
    + Bijvoorbeeld 1 verblijfsobject met status 'pand in gebruik', dat niet gerelateerd is aan project. 
    + Mocht het project nog niet begonnen zijn, dan is dit het enige en meest voorkomende resultaat binnen het polygoon.
    + Kan dus voor verkeerde status bepaling zorgen van project. Mogelijk dit effect te verkleinen door extra logica.    

                              
* Meerdere BAG statussen aanwezig binnen één polygoon. Voor bepaling van de prognose is gekozen om de meeste voorkomende status van de verblijfsobjecten binnen het polygoon te selecteren. Dit zorgt voor een verlies aan informatie, bijvoorbeeld als de oplevering in meerdere fases binnen project is. 

* Project plannen hebben aantallen per jaar. Prognose hele project bepaald op basis van meest voorkomende verblijfsobject en dichtsbijzijnde jaargang. 
Bijvoorbeeld plan 2023: 10 verblijfsobjecten, 2024: 20 verblijfsobjecten. Dan wordt gekeken naar 2023.   

* Gebruik gemiddelde doorlooptijden voor bouwstatussen. Dit verschilt per type woningen, locatie etc. Bewust zijn gemiddelde. Plus nog geen gebruik geverfieerde waarden.

* Gebruik BAG data. Onduidelijk hoe correct, up-to-date en bruikbaar. 

* Planning aantallen verdeeld over periode en niet een voorspelling per jaar. Zie bijvoorbeeld projecten 'Rijnvliet'. 
+ Een plan van 20 objecten in 2023-2027, wordt verdeeld als 2023: 4, 2024: 4, 2025: 4, 2026: 4, 2027: 4
+ In realiteit worden deze projecten niet verdeeld over 5 jaar opgeleverd, maar als geheel of in enkele fasen binnen een jaar.  


* Planning bevat de niveau's provincie, gemeente en plan. Hebben manueel het niveau 'project' toegevoegd.
+ De stad Utrecht heeft meerdere nieuwbouwprojecten bestaande uit meerdere plannen. 
+ Bijvoorbeeld plan 'Leeuwesteyn bouwveld 12b', 'Leeuwesteyn bouwveld 13b', 'Leeuwesteyn bouwveld 14a' zijn samengevoegd binnen het manueel aangemaakt 'project' niveau 'Leeuwesteyn'.

