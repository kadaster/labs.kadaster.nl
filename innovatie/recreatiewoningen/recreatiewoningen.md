---
layout: page
title: Recreatiewoningen
---
# Use Case: Recreatiewoningen



## Achtergrond
Voor Nederland bestaat momenteel geen totaaloverzicht van recreatiewoningen. Voor een deel zijn deze vastgelegd in basisregistraties als Kadaster en BAG. Verder zijn recreatieparken wel deels terug te vinden in de BRT of in de registraties bij de Omgevingswet maar die bieden geen inzicht in individuele recreatiewoningen. Gemeentes, handhavingsorganisaties en hulp- en opsporingsdiensten hebben behoefte aan een overzicht van de locaties van recreatiewoningen. Het gaat daarbij om thema’s als het voorkomen van permanente bewoning, (brand)veiligheid en voorkomen van ondermijning en criminaliteit. Door het beschikbaar hebben van een totaaloverzicht van recreatiewoningen kan voor deze thema’s beter nagegaan worden op welke locaties (extra) inspanning nodig is.

## Onderzoeksvraag en/of doelstellingen
Is het mogelijk om met AI voor heel Nederland recreatiewoningen te detecteren in luchtfoto’s? 

## Aanpak
In het recente verleden is voor een stageopdracht bij het Kadaster een AI-model getraind dat in staat bleek een deel van de recreatiewoningen in Zeeland al met een redelijke betrouwbaarheid te kunnen detecteren. Dit model was getraind met een kleine set voorbeelden en was gebruikt om recreatiewoningen te vinden in gebieden waarvan al bekend was dat hier dergelijke woningen voorkwamen.
Voor dit project is het model eerst gebruikt om recreatiewoningen in heel Nederland te detecteren. Dit maakte duidelijk waar het model al sterkt was maar ook voor welke situaties meer training nodig was. Met deze bevindingen is een hele nieuw set voorbeelden opgebouwd waarbij de locatie (met een zogenaamde boundingbox) is getraind.
  
<figure id="figuur-1">
  <a href="/innovatie/recreatiewoningen/afbeeldingen/recreatiewoningen_1.png">
    <img src="/innovatie/recreatiewoningen/afbeeldingen/recreatiewoningen_1.png" alt="Gedetecteerde recreatiewoningen op BRT-vakantiepark">
  </a>
</figure>

## Resultaten
Het model dat vervolgens met deze date getraind is bleek voldoende nauwkeurig te zijn om te combineren met een aantal basisregistraties (BAG en BGT) en hiermee op de kaart te visualiseren waar de registraties gebreken vertonen. Wel werden nog de nodige objecten door het model gemist, of normale huizen door het model verward met een recreatiewoning. Maar omdat gemiddeld de kwaliteit van de voorspellingen redelijk tot goed was bleken de uitkomsten geschikt om de kaart visualisatie mee op te zetten. Vooral zichtbaar is dat in de BAG verschillen zijn in hoe gemeentes omgaan met standplaatsen. Vanuit de visualisatie konden al diverse terugmeldingen gemaakt worden voor de BAG. Verder is goed te zien waar de BRT nog bijgewerkt kan worden om de grenzen van recreatieparken verder te verbeteren.
 
  
<figure id="figuur-2">
  <a href="/innovatie/recreatiewoningen/afbeeldingen/recreatiewoningen_2.png">
    <img src="/innovatie/recreatiewoningen/afbeeldingen/recreatiewoningen_2.png" alt="Onvolledig bijhouden van BAG?">
  </a>
</figure>

## Conclusies/aanbevelingen
De resultaten van het model zijn al geschikt om samen met de BAG/BRT te visualiseren en zo afwijkingen in deze registraties te duiden. Om een volledig overzicht van alle recreatiewoningen in Nederland te leveren zal het model nog wel verder verbeterd moeten worden. Dit kan door niet alleen de locatie (boundingbox) maar de vorm (segmentatie) te detecteren. Mogelijk kan het model ook verbeterd door meer soorten vakantiewoningen te onderscheiden. 

## Vragen over dit project? 
Voor meer informatie kun je terecht bij Simone Wanning (ODR/GEC).

