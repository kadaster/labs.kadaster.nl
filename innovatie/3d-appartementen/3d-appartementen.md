---
layout: page
title: 3D Appartementen
---
# Use Case: 3D Appartementen



## Achtergrond
Het Kadaster registreert de gegevens van gebouwen in 2D: met teksten in aktes en - in het geval van meerdere eigenaren - ook plattegronden. Deze plattegronden, ook wel splitsingstekeningen genoemd, laten zien welke eigenaar recht heeft om welke ruimtes binnen een gebouw te gebruiken. Het analyseren van deze splitsingstekeningen bij ruimtelijke vraagstukken kost tijd, aangezien de rechten vooral in de aktetekst omschreven staan.
  
<figure id="figuur-1">
  <a href="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_1.png">
    <img src="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_1.png" alt="Voorbeeld splitsingstekening">
  </a>
</figure>
 
Een 3D visualisatie van gebouwen op basis van de splitsingstekeningen kan in een oogopslag rechten inzichtelijk maken. Zo is het bijvoorbeeld direct te zien welke ruimtes nou precies een woon- of werkfunctie hebben, of wat onder ‘gemeenschapsruimte’ valt. BIM Legal verkent deze mogelijkheden voor nieuwbouw, maar splitsingstekeningen kunnen dit voor bestaande gebouwen mogelijk maken.
In een geval van een melding, kunnen 3D modellen politie en brandweer helpen om precies te weten op welke verdieping ze moeten zijn aan welke kant van het gebouw. Ook de ligging van trappenhuizen is hierbij nuttige informatie.  
Van maart tot december 2022 vond er een pilot plaats binnen het Kadaster om splitsingstekeningen geautomatiseerd om te zetten naar 3D gebouwmodellen.

## Aanpak
 In totaal kent de pilot 3 stappen:
1.	Vectorisatie
2.	Reconstructie
3.	Visualisatie

**Vectorisatie** is het automatisch detecteren van lijnen en teksten uit een splitsingstekening.  Hiervoor wordt zoveel mogelijk gebruik gemaakt van bestaande AI-algoritmes die worden ingezet bij het project Kadastrale Kaart Next. Het eindresultaat van deze stap zijn de vormen van verdiepingen.
  
<figure id="figuur-2">
  <a href="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_2.png">
    <img src="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_2.png" alt="Vectorisatie">
  </a>
</figure>
  
**Reconstructie** is het netjes schalen en oriënteren van verdiepingen. Verdiepingen krijgen hierbij ook de juiste hoogte en coördinaten toegewezen, zodat ze op een kaart op de juiste plek in Nederland komen te liggen. Voor het bepalen van de hoogte van verdiepingen wordt gebruik gemaakt van het 3D Hoogtestatistieken Gebouwen bestand uit de 3D Basisvoorziening. Ook wordt er gebruik gemaakt van de BAG, BGT, DKK en luchtfoto’s om de verdiepingen op de juiste plek te krijgen.
  
<figure id="figuur-3">
  <a href="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_3_4.png">
    <img src="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_3_4.png" alt="Reconstructie">
  </a>
</figure>
    
**Visualisatie** experimenteert met manieren om relevante informatie in 3d te tonen. Er wordt gezocht naar de beste manier om informatie inzichtelijk te maken.
  
<figure id="figuur-4">
  <a href="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_5_6.png">
    <img src="/innovatie/3d-appartementen/afbeeldingen/3d-appartementen_5_6.png" alt="Visualisatie">
  </a>
</figure>
               
## Resultaten
Binnen de pilot is een semi-automatische pijplijn opgezet om splitsingstekeningen om te zetten naar 3D gebouwmodellen. In totaal zijn er binnen deze pijplijn 36 splitsingstekeningen gevectoriseerd, waarvan er 3 uitgewerkt zijn tot een volledig 3D gebouwmodel. Het is hiermee mogelijk om splitsingstekeningen om te zetten naar 3D, maar wegens de beperkte tijd binnen de pilot was het niet mogelijk om alle stappen te automatiseren. De reconstructiestap is uiteindelijk uit praktische overweging handmatig uitgevoerd. Het eindresultaat zelf is daarmee nog niet productiegeschikt. De uitgewerkte gebouwen geven echter een goed beeld van wat er van 3D gebouwmodellen voor analyse bij ruimtelijke vraagstukken verwacht kan worden.

## Onderzoeksvragen
1.	In hoeverre is het mogelijk om gegevens uit splitsingstekeningen om te zetten naar een 3D gebouwmodel met de juiste schaal, oriëntatie en opbouw?
2.	Wat is de tijdsinvestering hiervoor (in tijd per akte) die dit in de praktijk zal vragen?

## Conclusies/aanbevelingen
- Er is meer trainingsdata nodig om de AI-algoritmen beter te trainen en meer tijdswinst te behalen. 
- Splitsingstekeningen kennen een vast aantal onderdelen, maar hebben geen standaard wat betreft het formaat of de scankwaliteit. Aktes uit verschillende tijdsperioden kunnen er heel verschillend uitzien. Omdat er geen enkele akte hetzelfde is, blijft reconstructie een complex onderwerp. Vooraf de splitsingstekeningen categoriseren kan hierdoor de verwerking verbeteren.
- Gebouwen kunnen ook gereconstrueerd worden op basis van de 3DBAG. Dit geeft mooiere gebouwvormen en de etagebepaling kan hiermee automatisch bepaald worden.
- Afhankelijk van de gebruiker kan de visualisatie sterk verschillen. Voor de pilot was met name behoefte aan visualisaties per verdieping.
Voorlopig is er nog geen vervolgtraject gepland.

## Vragen over dit project? 
Voor meer informatie kun je terecht bij Vera Hoogslag-Liem (ODR/GEC).
