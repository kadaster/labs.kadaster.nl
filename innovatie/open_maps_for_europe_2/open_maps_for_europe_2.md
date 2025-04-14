---
layout: page
title: OME2 – Open Maps for Europe
---
# Use Case: OME2 – Open Maps for Europe



## Achtergrond
EuroGeographics is een non-profitorganisatie die als overkoepelende organisatie fungeert voor de Europese nationale geografische instituten en overheidsinstanties die verantwoordelijk zijn voor geografische informatie. Het doel van EuroGeographics is om samen te werken en de uitwisseling van geografische informatie te bevorderen tussen de verschillende nationale instanties binnen Europa. Ze werken aan standaardisatie, interoperabiliteit en het delen van best practices op het gebied van geografische gegevens. Hun inspanningen dragen bij aan het verbeteren van de kwaliteit, toegankelijkheid en bruikbaarheid van geografische informatie in heel Europa.

Open Maps For Europe 2 (OME2) is een nieuw project van Eurogeographics dat een nieuw productieproces en technische specificatie zal ontwikkelen voor vrij te gebruiken, naadloos passende topografische gegevens op een schaal van 1:10.000. Er is momenteel geen homogene 1:10.000 dataset beschikbaar van heel Europa.

## Onderzoeksvraag en/of doelstellingen
Eind 2021 is er een inventarisatie uitgevoerd onder gebruikers van EuroGeographics-producten, waaronder Eurostat en diverse Europese commissies (nog op te zoeken!). Deze inventarisatie resulteerde in een lijst van vereisten waaraan een dataset op Europees niveau moet voldoen. Hieruit bleek onder andere de wens voor een 1:10.000 topografische dataset.

In het begin van 2022 heeft het Geo Expertise Center onderzoek uitgevoerd om een nieuw productieproces te onderzoeken zie afbeelding 1. Dit proces is gericht op het transformeren van nationale datasets op een schaal van 1:10.000, met hun eigen specificaties en dataschema's, naar een Europese 1:10.000 dataset. 

In april 2022 is gestart met het schrijven van een BID om funding te krijgen van de Europese Commissie. Drie landen, te weten België, Frankrijk, Griekenland en Nederland hebben hier aan meegewerkt. Dit zijn tevens landen die in het consortium zitten samen met Eurogeographics voor OME2. In Augusts 2022 is de funding toegewezen aan het consortium. Uiteindelijk moet er een productieproces worden opgeleverd, waarmee data van 10 landen geprocessed kunnen worden, met de thema’s Boundaries, Transport en Hydro. Het project loopt van 2023 tot en met  eind 2025. 
 
<figure id="figuur-1">
  <a href="/innovatie/open_maps_for_europe_2/afbeeldingen/open_maps_for_europe_2.png">
    <img src="/innovatie/open_maps_for_europe_2/afbeeldingen/open_maps_for_europe_2.png" alt="Nieuw productieproces OME2">
  </a>
</figure>

## Aanpak
Het nieuwe productie proces bestaat uit 5 stappen (afbeelding 1). De eerste stap in het proces is om de nationale datasets (schaal 1:5000 – 1:10.000) met hun eigen specificaties en schema’s binnen te halen. Dit kan handmatig gebeuren, maar het moet ook mogelijk zijn om deze automatisch binnen te kunnen halen doormiddel van een API. In de tweede stap moet vind er een conversie plaats van de data en het dataschema en wordt de data in een database geladen, om daar de data verder te harmoniseren, life cyclemanagement toe te passen, en zal de data aan de grenzen automatisch aangesloten worden (edge-matching). Bij stap drie wordt er een 1:10.000 dataset geëxporteerd. Het geheel zal gaan draaien in een cloudomgeving waarbij meerdere toolings, gemaakt met Python in combinatie met een Postgis database.

De eerste drie stappen in het  proces worden momenteel ontwikkeld door IGN France, in samenwerking met NGI Belgium en het Kadaster.  Het Kadaster ontwikkelt de stappen 4 en 5. Namelijk het automatisch generaliseren van een Europese 1:10.000 dataset naar drie andere schalen; 1:50.000, 1:100.000 en een 1:250.000 schaal wederom voor de thema’s Boundaries, Transportation en Hydro. Dit wordt momenteel ontwikkeld in een Postgis omgeving, waarbij bestaande Postgis functies in de database worden aangevuld met Python tooling om de data te kunnen generaliseren. Het gehele project zal in een open source omgeving worden opgebouwd. Dit is één van de vereisten in het project.

## Resultaten
Frankrijk is nu een jaar bezig het ontwikkelen van hun eerste processtappen. Dit is vorig jaar gepresenteerd, en is bevat de stappen voor de Boundaries en Transportation. De data die hier uit komt, de Europese 1:10.000 dataset, is input voor het generalisatieproces waar het Kadaster mee bezig is. Met deze data is in Q1 2024 een eerste versie van gemaakt van de Boundaries van de schalen 50k, 100k en 250k.  Het eerste resultaat ziet er goed uit, en toont aan dat ook met open source te generaliseren is. 

## Vragen over dit project? 
Voor meer informatie kun je terecht bij Konan Pruiksma (ODR/GEC).
