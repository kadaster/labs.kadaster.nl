---
layout: page
title: Cloud processing for AI
---
# Use Case: Cloud processing for AI



## Achtergrond
Computer Vision, een vorm van Machine Learning, vraagt om veel rekenkracht. Hiervoor heeft het GEC team een slimme infrastructuur opgezet om grote landelijk voorspellingen efficiënt uit te voeren. Op de laptops of desktops duurt het trainen en uitvoeren van Computer Vision modellen te lang om levensvatbaar te zijn. Daarom maakt het GEC gebruik van Cloud Infrastructuur om de werkzaamheden uit te voeren.


## Aanpak
De Azure cloud omgeving biedt mogelijkheden voor het gebruik van zware virtuele machines. Hierop kan alle software tot met betrekking tot  van Machine Learning geïnstalleerd worden. Via deze machines kan er makkelijk verbinding gemaakt worden met de Azure Blob Storage, de cloud storage waarom alle trainingsdata en landelijke luchtfoto's opgeslagen zijn. De landelijke datasets kunnen oplopen tot meerdere terabytes aan data, waardoor het onwenselijk is om dit op de fysieke machines van het Kadaster op te slaan.

Via Kubernetes en Argo Workflows worden verschillende workflows gebruikt om tot resultaten te komen. Kubernetes is een framework om de cloud infrastructuur heen, waardoor er grote hoeveelheden machines gebruikt kunnen worden wanneer ze nodig zijn, en worden uitgezet wanneer ze niet meer gebruikt worden. Deze manier van schaalbarear infrastructuur gebruiken zorgt voor lagere kosten en een efficiëntere werkzaamheden. 
  
<figure id="figuur-1">
  <a href="/innovatie/cloud-processing-for-ai/afbeeldingen/cloud-processing-for-ai_1.png">
    <img src="/innovatie/cloud-processing-for-ai/afbeeldingen/cloud-processing-for-ai_1.png" alt="Met een schaalbare infrastructuur worden luchtfoto’s opgeknipt in kleinere tiles door meerdere machines tegelijkertijd">
  </a>
</figure>

## Python & Open Source
Licentiesoftware leent zich slecht naar voor het schaalbaar opzetten van processen. Daarom is er gekozen om alle tooling in Python te schrijven. Door gebruik te maken van packages zoals Geopandas, Shapely, SQLAlchemy, en Rasterio kunnen alle stappen in het proces goed uitgevoerd worden door open source tooling.

## Spot Instances
Met Kubernetes kan er ook gebruik gemaakt worden van Spot Instances. Spot Instances zijn de rest capaciteit van Azure. Deze machines kunnen met tot wel 90% korting gebruikt worden, met de kanttekening dat de machines op elk moment gebruikt kunnen worden door partijen die de volle prijs willen betalen. Dit brengt een risico met zich mee dat taken niet afgerond kunnen worden voordat een machine wordt afgesloten. Om hiermee om te gaan zijn de workflows van het GEC zo ontworpen dat stappen door kunnen gaan waar een vorige machine is gebleven. Hierdoor wordt er goed gebruik gemaakt van de Spot Instance korting, terwijl er maar een kleine vertraging in de workflows zit door het opnieuw opstarten van een nieuwe machine. Het aanmaken van de machines wordt allemaal door Kubernetes geregeld.

## Resultaten
Door het toepassen van deze paradigma’s zijn er flinke verbeteringen toegepast in de werkzaamheden. Bij het opknippen van luchtfoto’s van één1 jaargang zijn er dusdanige efficiëntieverbeteringen doorgevoerd dat de doorlooptijd van 370 uur naar 13 uur is gedaald.
  
<figure id="figuur-2">
  <a href="/innovatie/cloud-processing-for-ai/afbeeldingen/cloud-processing-for-ai_2.png">
    <img src="/innovatie/cloud-processing-for-ai/afbeeldingen/cloud-processing-for-ai_2.png" alt="Doorlooptijd in uren in het tilingproces">
  </a>
</figure>

De kosten zijn door de vermindering van handmatig werkwerk, automatisering van het proces, en het gebruik van Spot Instances gedaald van €2800,- naar ± €110,-.
  
<figure id="figuur-3">
  <a href="/innovatie/cloud-processing-for-ai/afbeeldingen/cloud-processing-for-ai_2.png">
    <img src="/innovatie/cloud-processing-for-ai/afbeeldingen/cloud-processing-for-ai_2.png" alt="Kosten van het tilen, oude en nieuwe situatie">
  </a>
</figure>
 
## Aanbevelingen
Het gebruik van Kubernetes en moderne Cloud Infrastructuur geeft veel voordelen tegenover de ouderwetse werkzaamheden. Door automatisering van grote opdrachten is er meer tijd vrij gekomen om te besteden aan andere onderdelen van een project. In combinatie met de kostenbesparingen door het gebruik van de Spot Instances is het gebruik van deze technologieën zeer aanbevolen voor grote herhalende handelingen.

## Vragen over dit project? 
Voor meer informatie kun je terecht bij Ditmar Visser (ODR/GEC).
