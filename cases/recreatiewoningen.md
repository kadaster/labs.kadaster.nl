# Introductie
Beleidsmakers willen meer zicht op vakantieparken krijgen, zodat onder andere ondermijning kan worden tegengegaan. Tijdens voorgaand onderzoek van het Data Science Team van het Kadaster is onderzocht hoeveel en welke recreatiewoningen binnen vakantieparken en recreatiegebieden bekend zijn binnen de basisregistraties van het Kadaster. Uit dit onderzoek blijkt dat niet alle recreatiewoningen geregistreerd staan in de Basisregistratie Adressen en Gebouwen (BAG), maar dat deze wel te zien zijn vanaf luchtfoto’s.  

De opdrachtgever wil weten hoeveel recreatiewoningen er zijn in Nederland en waar ze zich bevinden. Dit onderzoek richt zich op het automatisch detecteren van recreatiewoningen binnen vakantieparken en recreatiegebieden in Zeeland vanuit luchtfoto’s. Er is specifiek naar Zeeland gekeken, omdat er aantallen in Zeeland bekend zijn vanuit een [onderzoek van HZ Kenniscentrum Kusttoerisme](https://www.kenniscentrumtoerisme.nl/wiki/index.php/KCKT_Publication_PR_00010). De gevonden aantallen konden met elkaar vergeleken worden.  

De volgende vraag is onderzocht:  
> Hoeveel recreatiewoningen, die niet zijn opgenomen in de Basisregistratie Adressen en Gebouwen, zijn er binnen vakantieparken en recreatiegebieden in de provincie Zeeland te vinden op basis van luchtfoto’s?

# Data
## Beschrijving van de data
De luchtfoto’s die gebruikt zijn, zijn gemaakt in de winter van 2022. Met behulp van tegels, die ook gebruikt worden door het Geo Expertise Center, zijn ze opgedeeld in afbeeldingen van 1024 bij 1024 pixels.  

De dataset die gebruikt is, is samengesteld tijdens het vooronderzoek vanuit de basisregistraties. Deze bestaat uit alle panden met een logies- of woonfunctie en standplaatsen, binnen de functionele gebieden ‘bungalowpark’, ‘caravanpark’ of ‘vakantiepark’ of binnen de gebieden met enkelbestemming ‘recreatie’ in Zeeland. Het type functionele gebied ‘camping, kampeerterrein’ is nog extra toegevoegd, omdat op luchtfoto’s ook recreatiewoningen te zien waren op campings en kampeerterreinen. Van de panden en standplaatsen zijn de geometrieën gebruikt voor het objectdetectiemodel.

## Data-analyse
Na het toevoegen van het functionele gebied ‘camping, kampeerterrein’ zijn opnieuw de panden en standplaatsen uit de BAG in Zeeland geteld. Dit zijn er 16.531.  

In figuur 1 zijn enkele voorbeelden te zien van wat opviel bij het analyseren van de data:
* De geometrieën komen vaak niet overeen met de recreatiewoningen die te zien zijn op de luchtfoto’s.
* Standplaatsen geven soms de geometrie van de grond weer en soms de geometrie van de recreatiewoning op de standplaats.
* Standplaatsen waarop geen recreatiewoning staat zijn niet te herkennen vanaf de luchtfoto.
* Panden die al wel ingetekend staan, maar nog niet gebouwd zijn, zijn niet te herkennen vanaf de luchtfoto.
* Recreatiewoningen in bossen zijn slecht zichtbaar.
* Vanaf de luchtfoto is niet te zien of recreatiewoningen bestaan uit meerdere geometrieën of meerdere verblijfsobjecten.

![figuur1](/assets/images/figuur1.png)  
*Figuur 1 – Analyse van de data*

# Methoden
## Datapreparatie
Verder viel op dat met name stacaravans en verplaatsbare chalets niet geregistreerd staan. Deze mogen niet als pand opgenomen zijn, maar wel als standplaats. Daarom zijn alle bekende standplaatsen gebruikt om mee te trainen. Daarnaast zijn alle panden geselecteerd, die een vorm of grootte hebben vergelijkbaar met een stacaravan of chalet, zodat het model beter getraind kon worden om stacaravans en chalets te detecteren.  

De data is als volgt aangepast om te kunnen gebruiken in een objectdetectiemodel:
* Een geometrie die niet overeenkomt met de recreatiewoning op de luchtfoto is gecorrigeerd.
* Geometrieën van de panden en standplaatsen waarop geen recreatiewoningen staan, zijn niet meegenomen tijdens het trainen van het model.
* Alleen geometrieën van recreatiewoningen die nagenoeg volledig zichtbaar zijn op de luchtfoto’s zijn meegenomen tijdens het trainen van het model. 
* Geometrieën van gebouwen die meerdere recreatiewoningen of verblijfsobjecten bevatten zijn niet meegenomen tijdens het trainen van het model.

Omdat er weinig stacaravans en chalets geregistreerd staan, is ervoor gekozen om extra stacaravans en chalets op luchtfoto’s te labelen. Ook zijn er afbeeldingen met achtergrond gebruikt. Zo leert het model dat lege standplaatsen, tenten, campers en caravans geen recreatiewoningen zijn. In totaal zijn er 500 afbeeldingen met 6271 objecten gebruikt voor het trainen van het model.  

Het algoritme dat is gebruikt voor objectdetectie is YOLOv8. De gecorrigeerde geometrieën zijn niet in het juiste format om te kunnen gebruiken voor dit algoritme. De data is omgeschreven naar afbeeldingen en bijbehorende txt-bestanden, waarin de bounding boxen van de gelabelde recreatiewoningen staan. Van de afbeeldingen en txt-bestanden is 80% afgesplitst in een trainset, 10% in een validatieset en nog eens 10% in een testset.  

## Objectdetectiemodellen
Er zijn meerdere modellen getraind met YOLOv8 door hyperparameter tuning toe te passen. Op basis van de literatuur is eerst onderzoek gedaan naar de beste parameterinstellingen met betrekking tot data-augmentatie. Vervolgens zijn met de beste hyperparameters voor data-augmentatie de hyperparameters van de modelgroottes en batch size getuned.  

Het model dat het beste presteert op de validatieset is uiteindelijk gekozen om voorspellingen mee te doen op de testset en op de dataset waarin afbeeldingen zitten met recreatiewoningen die niet bekend zijn vanuit de BAG.  

# Resultaten
## Objectdetectiemodel
Het uiteindelijke model is getraind voor 300 epochs, met een batch size van 8, een resolutie van de afbeeldingen van 1024, een initiële learning rate van 0,001 en een uiteindelijke learning rate van 0,00001. Door de data-augmentatie worden de afbeeldingen in de trainset steeds iets aangepast, door de kleur te veranderen, de afbeelding te verschuiven, bij te snijden en te spiegelen. Ook wordt er gebruikgemaakt van mozaïek-augmentatie, waarbij 4 afbeeldingen worden samengevoegd tot 1 afbeelding. De modelgrootte 'small' presteerde het beste op zowel de validatieset als de testset. Het model heeft een precision van 0,95, een recall van 0,97 en een mean Average Precision (mAP) van 0,99 op de testset. De mAP is een veelgebruikte prestatiemaat voor objectdetectie, met als maximum een 1.  

## Voorspellingen
Het model heeft 22.306 bounding boxen voorspeld op de dataset met recreatiewoningen die niet bekend zijn vanuit de BAG. Een recreatiewoning kan meerdere bounding boxen hebben, doordat hij is afgesneden langs de randen van de afbeeldingen. Deze zijn samengevoegd, om te voorkomen dat een recreatiewoning meerdere keren wordt meegeteld. Ook zijn er recreatiewoningen in de afbeeldingen te zien die wel bekend zijn vanuit de BAG. Uiteindelijk zijn er 18.802 recreatiewoningen in Zeeland gevonden, die niet zijn opgenomen in de BAG.  

De voorspelde recreatiewoningen op de luchtfoto’s zijn vervolgens gecontroleerd aan de hand van hoe goed de voorspellingen zijn en hoeveel recreatiewoningen gemist zijn:
* Op grote vakantieparken met veel recreatiewoningen zijn vrijwel alle recreatiewoningen herkend.
* Campers en caravans worden terecht niet herkend.
* Recreatiewoningen die dicht op elkaar staan of aan elkaar vastzitten zijn soms niet herkend.
* Het model heeft soms moeite met het detecteren van witte stacaravans.
* Het model heeft soms moeite met het detecteren van recreatiewoningen die onder bomen staan.
* Soms wordt een object gedetecteerd als recreatiewoning, terwijl het geen recreatiewoning is, maar bijvoorbeeld een tent, caravan, parkeerplaats, of een ander rechthoekig object.
* Sommige recreatiewoningen, die op de scheidingslijn tussen twee of meerdere afbeeldingen liggen, zijn gedeeltelijk of zelfs helemaal niet herkend.

In figuur 2 zijn correct gedetecteerde recreatiewoningen weergegeven als blauwe rechthoeken, gemiste recreatiewoningen rood omlijnd, correct niet-gedetecteerde campers en caravans groen omlijnd en incorrect gedetecteerde tenten paars omlijnd.  

![figuur2](/assets/images/figuur2.png)  
*Figuur 2 – Analyse van de voorspellingen*

## Vergelijking HZ Kenniscentrum Kusttoerisme
Wanneer het aantal geregistreerde recreatiewoningen wordt opgeteld bij het aantal dat gevonden is met objectdetectie, zijn er 35.333 recreatiewoningen in Zeeland binnen de geselecteerde gebieden gevonden tijdens dit onderzoek. Het onderzoek van HZ Kenniscentrum Kusttoerisme heeft afgerond 43.500 recreatiewoningen opgeleverd. Er is dus een verschil tussen beide onderzoeken van ongeveer 8.167 recreatiewoningen.  

Een verklaring voor het verschil is dat HZ Kenniscentrum Kusttoerisme alle jaarplaatsen heeft meegeteld, terwijl het objectdetectiemodel alleen jaarplaatsen heeft kunnen detecteren waar recreatiewoningen op staan. Een andere verklaring is dat tijdens dit onderzoek uitsluitend is gekeken naar recreatiewoningen binnen vakantieparken en recreatiegebieden, terwijl HZ Kenniscentrum Kusttoerisme ook losse eenheden heeft meegeteld die zich niet op een vakantiepark bevinden.

# Aanbevelingen
Naar aanleiding van dit onderzoek kunnen enkele aanbevelingen gegeven worden:
* Er zijn ook aantallen per gemeente, wijk en buurt bekend bij HZ Kenniscentrum Kusttoerisme. Er zou nog onderzocht kunnen worden waar de afwijkingen op gemeentelijk of regionaal niveau liggen.
* Er zou contact opgenomen kunnen worden met HZ Kenniscentrum Kusttoerisme, zodat de gevonden verschillen nader onderzocht kunnen worden.
* In een vervolgonderzoek het model toegepast worden op luchtfoto’s van Nederland, zodat de recreatiewoningen in heel Nederland gevonden kunnen worden.
* De dataset zou verder uitgebreid kunnen worden om gemiste en foutieve detecties te verminderen, door het toevoegen van foto’s met witte stacaravans, recreatiewoningen die verscholen staan onder bomen, recreatiewoningen die aan elkaar vastzitten, campers, caravans, tenten, airtrampolines, parkeerplaatsen en andere rechthoekige objecten. Ook zouden grote stoorzenders, zoals tenten en caravans, in aparte klassen meegetraind kunnen worden, zodat het model beter kan leren dat deze stoorzenders geen recreatiewoningen zijn.
* Er gebruikgemaakt kunnen worden van overlap van afbeeldingen, zodat mogelijk meer recreatiewoningen, die langs de randen van de afbeeldingen afgesneden zijn, gedetecteerd kunnen worden.
