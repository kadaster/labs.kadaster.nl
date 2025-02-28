---
layout: page
title: Use Case ― Kwaliteit BAG-BRK koppeling
---
# Introductie: Kwaliteit BAG-BRK koppeling

Stel je voor dat je als burger je eigendom niet kunt vinden op het adres dat erbij hoort. Of dat je de eigendommen van tig anderen vindt omdat er een probleem is met de koppeling tussen het adres en de Basisregistratie Kadaster (BRK). Met verschillende use cases zijn kwaliteitsissues in de koppeling tussen de BAG (Basisregistratie Adressen en Gebouwen) en de BRK inzichtelijk gemaakt. Dit is van belang voor onder andere de betrouwbaarheid van de kadastrale registratie en de vindbaarheid van objecten en rechten. Uiteindelijk is een adres een van de eenvoudigste ingangen voor zoeken in de registratie. 
Bekijk de use cases 'KBI adressen' en 'Vermenigvuldigingsprobleem'.

## Use Case 'KBI Adressen matchen'

### Achtergrond
In aktes wordt door notarissen bij rechtspersonen een adres vermeld. Dit adres kent geen vormvereisten, actualiteit of controle op bestaan en juistheid. Bij inschrijven van de akte door het kadaster wordt het adres dan meegenomen en gekoppeld aan de BAG. Als dit niet niet lukt wordt van dit adres een 'KBI adres' gemaakt. Een KBI adres is dus een adres waar het Kadaster zelf een registratie van bijhoudt. Dit is onwenselijk omdat er al een basisadministratie is die leidinggevend moet zijn, i.e. de BAG. 
Reden voor het niet lukken van koppeling zijn onder andere spelfouten en niet sluitende huisnummering (bijvoorbeeld 104BII vs 104b2). Verder kan het zijn dat het adres in de BAG nog niet bestaat ten tijde van het passeren van de akte (bijv. bij een nieuwbouwwoning). Tot slot zijn er veel oude KBI adressen uit de periode voor de BAG-BRK koppeling. 

### Uitvoering
Al deze KBI adressen samen vormen een verzameling adressen die niet 1 op 1 makkelijk aan de BAG te koppelen is. Het data science team heeft door inzetten van onder andere 'fuzzy matching' en business logica, regels gemaakt waarmee een deel alsnog aan een BAG locatie kan worden gekoppeld. 

De regels maken onderscheid in verschillende 'cases' voor wat betreft de beschikbare gegevens: de kwaliteit van de koppeling met de BAG in administratief (ADMIN), geometrisch (GEO) of administratie én geometrisch (ADMIN_GEO) en of andere informatie zoals postcodes en huisnummers en -letters aanwezig zijn en wel 1 - op - 1 te matchen zijn. De volledige logica is uitgewerkt in figuur 1.

<figure id="figuur-1">
  <a href="/dataanalyse/koppelingbagbrk/afbeeldingen/BRKBAG_KBI_FLOWCHART.png">
    <img src="/dataanalyse/koppelingbagbrk/afbeeldingen/BRKBAG_KBI_FLOWCHART.png" alt="businesslogica">
  </a>
  <figcaption>
    Figuur 1 ― Logica KBI adressen matchen 
  </figcaption>
</figure>

Met deze wijze van koppelen kunnen nu ca 300 op de 5000 KBI adressen worden gematcht. 
De ontwikkeling van het aantal KBI adressen is weeergegeven in onderstaand figuur. Duidelijk is dat er nog altijd adressen bijkomen die de koppeling tussen de BAG en BRK vertroebelen.

<figure id="figuur-2">
  <a href="/dataanalyse/koppelingbagbrk/afbeeldingen/BRKBAG_AANTAL_KBI_ADRESSEN.png">
    <img src="/dataanalyse/koppelingbagbrk/afbeeldingen/BRKBAG_AANTAL_KBI_ADRESSEN.png" alt="Aantal adressen">
  </a>
  <figcaption>
    Figuur 2 ― Aantal KBI adressen door de tijd
  </figcaption>
</figure>

## Use Case 'Vermenigvuldigingsprobleem'

### Achtergrond
In de beginjaren van de applicatie SPLITS werden bij de splitsing van een perceel alle adressen die aan dat perceel gekoppeld waren ook aan de nieuw ontstane percelen gekoppeld. Zo kan het dus zijn dat een perceel met 8 adressen gesplitst wordt in 8 afzonderlijke percelen met elk één huis of verblijfsobject. De koppeling met de andere adressen blijft echter bestaan. Er zijn dus nu 8 percelen met per perceel 8 koppelingen en dus 64 koppelingen waarvan er maar 8 kloppen. Deze fout is wel hersteld in SPLITS zodat er geen nieuwe vermenigvuldigingsgevallen kunnen ontstaan maar de oude fouten zitten nog wel in de registratie. 

Een voorbeeld is een adres in Wijk bij Duurstede waar bij zoeken in KOL (Kadaster OnLine) de adressen Dirk Fockstraat nr 15 en 17 zijn gezocht. Op deze adressen zijn meerdere percelen gekoppeld die elk ook aan andere adresen gekoppeld zijn. Dit kan worden gezien in het kaartje naast de zoekresultaten waarin duidelijk is te zien welke percelen welke adressen bevatten en waar dus een koppeling tussen zou moeten zijn.

<figure id="figuur-3">
  <a href="/dataanalyse/koppelingbagbrk/afbeeldingen/BAGBRK_VMV_EXAMPLE_1.png">
    <img src="/dataanalyse/koppelingbagbrk/afbeeldingen/BAGBRK_VMV_EXAMPLE_1.png" alt="voorbeeld van een vermenigvuldigingsprobleem">
  </a>
  <figcaption>
    Figuur 3 ― Voorbeeld vermenigvuldigingsprobleem
  </figcaption>
</figure>

### Uitvoering

De regels voor het vinden van een dergelijke situatie zijn inzichtelijk gemaakt in het volgende diagram. Op deze wijze worden de incorrecte koppelingen tussen perceel en adres als lijst teruggegeven. Deze gaat uit van de termen uit het datamodel. Dus een adres wordt gezien als een 'nummeraanduiding', de koppeling kan net zoals bij de KBI adressen een ADMIN, GEO of ADMIN_GEO kwaliteit hebben en en kadastraal ID kan worden gezien als een perceelnummer.

<figure id="figuur-4">
  <a href="/dataanalyse/koppelingbagbrk/afbeeldingen/BRKBAG_VMV_FLOWCHART.PNG">
    <img src="/dataanalyse/koppelingbagbrk/afbeeldingen/BRKBAG_VMV_FLOWCHART.PNG" alt="logica">
  </a>
  <figcaption>
    Figuur 4 ― Logica voor het vinden van vermenigvuldigingsproblemen
  </figcaption>
</figure>

## En nu verder

Het doel is dat alle uitgevoerde onderzoeken rondom de BAG-BRK koppeling bijdragen aan een hogere kwaliteit en betrouwbaarheid door o.a. het toevoegen van nieuwe koppelingen en het opschonen van foute koppelingen. Verder helpen de inzichten bij het opstellen van eisen aan de BAG-BRK koppeling.
