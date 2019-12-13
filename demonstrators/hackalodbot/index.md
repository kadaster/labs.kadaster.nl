---
layout: page
title: Use Case ― HackaLOD-Bot
---

<div class="cards-wrapper">
    <a href="https://telegram.me/HackaLODBot">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/telegram.png">
      <div class="card-title">HackaLOD-Bot</div>
      <div class="card-description">Hier laten we een bot zien welke op basis van linked data routes genereert langs stolpersteine. </div>
    </div>
  </a>
</div>

# Use Case: HackaLOD-Bot

## Introductie

Het idee is eenvoudig: Kunnen we een gebruiker op basis van zijn of haar locatie een route voorschotelen langs points-of-interests. 
En specifieker voor de Hackalod willen we toeristen in Zutphen op basis van de locatie een route aanbieden langs stolpersteine. 

Telegram-gebruikers kunnen een gesprek aan gaan met de bot door te zoeken in Telegram op @HackaLODBot, maar handiger is om een hyperlink te gebruiken: https://telegram.me/HackaLODBot

Vervolgens: 
1.	Als een gebruiker al Telegram gebruikt / de URL herkend wordt: opent de Telegram applicatie
2.	Als een gebruiker geen Telegram heeft, zien mensen een webpagina waarin ook een link staat om Telegram te kunnen installeren:
 
 
## Werking
Nadat de gebruiker "in gesprek" is met de bot, werkt het ongeveer zo:
1.	Gebruiker tikt een bericht in de Telegram client
2.	Dat bericht wordt naar een Telegram server gestuurd
3.	Die detecteert dat er een bot in de chat participeert
4.  En stuurt vervolgens de informatie door naar de URL die ingesteld is als WebHook
5.  In dit geval de URL bij Heroku waar de webapplicatie draait
6.  De webapplicatie verwerkt de informatie en stuurt een antwoord terug
7.	De Telegram server stuurt het antwoord door naar de Telegram client 
 
 
## Verbeteringen
De bot is het resultaat van de 20-uurs Hackalod: de huidige antwoorden van de bot zijn erg basic / debug-achtig. Daarnaast mist er functionaliteit, bijvoorbeeld het oproepen van extra informatie over een struikelsteentje / Point-of-Interest.
 
Ook draait de applicatie op een gratis server/container (dit noemt Heroku een "dyno"), welke als eigenschap hebben dat ze na 30 minuten inactiviteit uitgeschakeld worden. Het opnieuw opstarten van de dyno duurt zo'n 10 seconden. Gevolg hiervan is dus dat de eerste request van een gebruiker richting de bot wat langer kan duren. Vervolgrequests worden sneller afgehandeld omdat de dyno nu up-and-running is.
 
## Toekomst

Er zijn genoeg ideeen om dit "chatbot" kanaal verder te gebruiken om open data te ontsluiten, denk dan aan:
1.	Naast struikelsteentjes andere Points-of-Interests laten verkennen. Het leuke is dat het werkt via SPARQL, dus andere POI's zoals kerken, monumenten, etc. zijn eenvoudig toe te voegen. 
2.	Naast de Telegram bot ook andere bots ondersteunen (Skype, Facebook, Slack, WhatsApp)
3.	Op basis van "live locatie delen" laten werken
4.	Op basis van spraakcommando's laten werken
5.	Webapplicatie serverless maken.
 
## Dank
Met dank aan lead developer Menno Holtkamp.

<div class="cards-wrapper">
    <a href="https://telegram.me/HackaLODBot">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/telegram.png">
      <div class="card-title">Hack-a-LOD-Bot</div>
      <div class="card-description">Hier laten we een bot zien welke obv linked data routes genereert langs stolpersteine. </div>
    </div>
  </a>
</div>
