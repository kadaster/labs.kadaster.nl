---
layout: page
title: Data-driven Beer
---
## Data-Gedreven Bier: Deel je locatie waar je drinkt

<html>
<body>
<style>
  .hide { position:absolute; top:-1px; left:-1px; width:1px; height:1px; }
</style>
<iframe name="hiddenFrame" class="hide"></iframe>
<form action="http://localhost:8080/example" method="POST" target="hiddenFrame">

  <input type = "hidden" id="lat" name="Latitude"><br>
  <input type = "hidden" id="long" name="Longitude"><br>
 <button class="button" type="submit">Send location</button>
</form>
<button class="button" onclick="getLocation()">Get Location</button>
<script>
var x=document.getElementById("lat");
var y=document.getElementById("long");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  x.value=position.coords.latitude;  
  y.value=position.coords.longitude;    
  }
</script>
</body>
</html>


## “Het Perceeltje”
Het Perceeltje is een unieke collab (samenwerking) brouwsel van het Kadaster en de Brouwtoren. Hier zullen we het hoe en waarom van deze samenwerking uitleggen, en veel meer informatie over het bier zelf geven. 

## Het ontstaan
Het initiatief is ontstaan bij het Kadaster Data Science Team, waarin veel Data, IT en AI kennis is verenigd binnen het Kadaster. Op basis van het artikel op [Medium](https://medium.com/@koenvandenheuvel/how-to-brew-a-beer-with-artificial-intelligence-6c742f5fd843) en de door het Uiltje gebrouwen [data-driven-neipa](https://www.uiltjebrewing.com/en/product/data-driven-neipa/) kwam de gedachte: Dat kunnen wij ook….en beter…in ieder geval meer data-gedreven! Daarbij zochten we nog naar een mogelijkheid van een team-uitje, en was er ook behoefte aan een origineel relatiegeschenk. Samenvattend als Data Science Team willen we zelf eenmalig bier gaan brouwen op basis van een recept automatisch gegenereerd dat lekker is en voldoet aan moderne waardes, en we kunnen gebruiken als relatie-geschenk.


## Wat betekent dat nou een automatisch gegeneerd recept?
Of in andere woorden: data gedreven bier, en de inzet van kunstmatige intelligentie?
Zoals in het [artikel](https://medium.com/@koenvandenheuvel/how-to-brew-a-beer-with-artificial-intelligence-6c742f5fd843) beschreven zijn de Brewdog recepten open beschikbaar. Helaas zijn ze 1 van de weinige brouwers die dit doen. Daarnaast weten we de scores van drinkers van dit biertje op basis van Untappd beoordelingen. Op basis hiervan kunnen we een AI model trainen, en een miljoen recepten genereren en daarbij een voorspelling doen van een potentiele untappd score. De recepten van de hoogste scores hebben we meegenomen naar de Brouwer.

Maar we hebben nog meer AI toegepast op het Etiket. Het plaatje op de voorkant van het etiket is gegenereerd middels [DALL-E-2](https://openai.com/dall-e-2/). Een nieuw AI-systeem dat realistische afbeeldingen en kunst kan maken van een beschrijving in natuurlijke taal.


## Meer Kadaster inbreng
Daarnaast hadden we ook andere Kadaster gerelateerde uitgangspunten:

•	Duurzaam: Een lage emissie voetafdruk door de inzet van lokale grondstoffen. We hebben de ingedrienten uit het recept vertaald naar         Nederlandse equivalenten. Zodat we ook kunnen spreken van een Lokaal Nederlands bier.

•	Transparantie, openheid: We zijn volledig open en transparant over het bier. Ook het recept is open beschikbaar, en we nodigen iedereen uit om dit recept verder te verbeteren.

•	Herkomst transparantie: De voedselketen zou volledig transparant moeten zijn; dat zijn we dus ook over de herkomst van de ingedrienten.

•	Innovatief: Door samen te werken met een jonge innovatieve brouwerij.


## De rol van Brouwtoren
Brouwtoren heeft geholpen om het idee verder uit te werken, en belangrijker om op basis van hun vakmanschap het recept fijn te slijpen naar een lekker drinkbaar bier. Bij deze jonge en innovatieve brouwer konden we de Data/IT wereld van het Kadaster laten samensmelten met het vakmanschap van een bierbrouwerij. Brouwtoren heeft de leiding genomen in het proces om doormiddel van een proefbrouwsel, een proeverij met scores, en vervolgens in het productieproces te komen tot dit biertje.


## De ingredienten: 

## Het recept: 

## Untappd 

## Map applicatie
