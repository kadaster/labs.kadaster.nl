---
layout: page
title: Afstand tot
---

# High 4 “Afstand tot” en “isochrone kaart” API 

## Aanleiding  

Vanuit verschillende hoeken is er de vraag om een afstandsbepaling (over de weg) te kunnen doen tussen twee locaties, bijvoorbeeld een woning en een ziekenhuis, supermarkt of bushalte. Met een isochrone kaart kun je laten zien hoe ver je bijvoorbeeld lopend (fietsend, auto) in een bepaalde tijd vanaf een locatie naar je bestemming kan komen.  

Deze informatie is gevraagd in woningmarktrapportages, maar kan ook nuttig zijn voor het Geodataplein met name gericht op burgers. Ook is er een externe vraag hiervoor, recent vanuit het COA. Zij moeten in korte tijd vele potentiële opvang locaties “schouwen”. De afstand tot voorzieningen en de isochrone kaart zijn daarbij belangrijke componenten. Het huidige proces is daarbij te tijdrovend en kostbaar.  

## Doel van het experiment 

Het doel was een technisch experiment om te beproeven of we in staat zijn om een “Afstand tot en Isochrone kaart” API te maken. Daarbij was het vooral belangrijk welke data we nodig hebben en welk algoritme voor afstandsbepaling bruikbaar is. Want de data en het algoritme beïnvloeden weer de uiteindelijke haalbaarheid. 

## Welke data hebben wij met elkaar gekoppeld 

Als basis hebben we een topologisch netwerk gemaakt op basis van de BRT. Objecttypes om de afstand naar te bepalen, kunnen we uit verschillende bronnen halen, zoals de BRT (Ziekenhuizen), of overheids-opendata (Scholen - DUO), of community open data (Supermarkten - Open Street Map). Het gebruikte algoritme is pgRouting, een open source extensie op PostGIS.  

<figure id="figuur-1">
    <img src="/assets/images/schema_afstand tot verbeterd.png" alt="afstandtot1">
</figure>

## Resultaten 

De gekoppelde data is in een natuurlijke taal/chatbot interface gepresenteerd, waarin de gebruiker een vraag kan stellen zoals “Doe een schouw vanaf Laan van Westenenk 701 te Apeldoorn per fiets in 15 minuten”. De applicatie staat [hier](https://labs.kadaster.nl/demonstrators/overheiddatadirect).

<figure id="figuur-2">
    <img src="/assets/images/high4_afstandtot.jpg" alt="afstandtot2">
</figure>

## Vervolgacties  

Na uitvoering van deze innovatiesprint gaan we toetsen of de API's voldoen aan de wensen van COA, Geodataplein en/of Maatwerk&Advies. Komende weken gaan we de puntjes op de i zetten, resultaten documenteren en met de Data Science Team stuurgroep en het Innovation board over de mogelijkheden van de toepassing brainstormen. 

<figure id="figuur-3">
    <img src="/assets/images/high4_afstandtot_2.jpg" alt="afstandtot2">
</figure>

 