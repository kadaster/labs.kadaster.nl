---
banner: /assets/images/handgeschreven_aktes_ai/banner.png
layout: page
---

# Handgeschreven Aktes AI

De handgeschreven aktes van het Kadaster bevatten een schat aan historische informatie, maar zijn lastig doorzoekbaar en vaak moeilijk leesbaar. In dit onderzoek bekijken we hoe nieuwe technieken, zoals Handwritten Text Recognition (HTR), kunnen helpen om deze aktes beter toegankelijk te maken. Dit biedt kansen om onderzoek efficiënter en minder tijdrovend te maken.

## Archiefonderzoek

Het Kadaster beheert een groot archief met oude aktes, waaronder zo’n 5 miljoen handgeschreven exemplaren uit de periode 1838 tot 1950. Deze aktes worden regelmatig gebruikt voor onderzoek, maar omdat ze niet doorzoekbaar zijn, moeten scans stuk voor stuk geopend en gelezen worden. Dit is tijdrovend en vraagt veel expertise, omdat het handschrift vaak lastig te ontcijferen is. Dit maakt het werken met deze aktes niet alleen arbeidsintensief, maar ook vermoeiend.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/data_example-scan.png"
   caption="Voorbeeld van een scan van een oude akte"
   width="700px" %}

Om dit proces te verbeteren, zou het Kadaster deze handgeschreven aktes kunnen omzetten naar doorzoekbare tekstbestanden. Dit opent de deur naar nieuwe mogelijkheden, zoals het automatisch opsporen van specifieke kenmerken of passages binnen de aktes.

### Erfdienstbaarheden

Eén soort onderzoek waarbij de handgeschreven aktes worden geraadpleegd is het [Erfdienstbaarhedenonderzoek](https://www.kadaster.nl/producten/woning/erfdienstbaarhedenonderzoek). In het volledige onderzoek worden aktes gelezen tot aan het start van de Kadastrale registratie, omdat elke akte waarin het perceel waar het onderzoek over gaat in genoemd wordt, moet worden gecontroleerd op de vermelding van erfdienstbaarheden, zoals het recht van overpad. Een deel van het werk is het bij elkaar vinden van alle relevante aktes, om vervolgens de aktes te moeten controleren op vermelding van erfdienstbaarheden. Hoewel in hedendaagse akte de erfdienstbaarheden onder een aparte kopje duidelijk aangegeven zijn, moet dat in de oude aktes uit de context opgemaakt worden.

## Vraagstuk

In dit onderzoek willen een beeld krijgen van hoe we met nieuwe technieken het werkproces met de handgeschreven aktes kunnen ondersteunen. De vragen die we willen beantwoorden zijn:

1. Kunnen de handgeschreven aktes herkend worden?

   De leesbaarheid van een akte hangt af van het handschrift en de scankwaliteit van de akte. Beide kunnen in sommige gevallen tegenvallen en het lastig maken de relevante informatie uit de akte te halen. Door de teksten machineleesbaar te maken kunnen de aktes enerzijds in een goed leesbare font getoond worden en anderzijds doorzocht worden op zoektermen.

2. Kunnen erfdienstbaarheden automatisch gedetecteerd worden in de doorzoekbare teksten?

   Aktes bestaan soms uit tientallen pagina's met tekst. Ergens daarin kan een erfdienstbaarheid omschreven staan. Is het mogelijk om de erfdienstbaarheid automatisch te extraheren?

## Vraag 1: Handgeschreven tekstherkenning

Voor het halen van tekst uit scans te halen bestaat de OCR techniek, Optical Character Recognition. Hiervan zijn veel standaardoplossingen beschikbaar, zoals tesseract of ABBYY finereader. Deze technieken onderzochten we al eerder in ons [Akte OCR onderzoek](/cases/akte-ocr/), waarin scans na 1950 werden verwerkt. Anders dan de handgeschreven aktes waren deze met de typmachine opgeschreven.

Hoewel de resultaten voor de getypte akte goed bruikbaar waren, presteren deze technieken een stuk slechter bij de handgeschreven aktes. Dit komt doordat zulke tools vaak niet getraind zijn voor handschrift, maar ook doordat de scankwaliteit van de handgeschreven aktes lager is. Voor dit onderzoek is daarom gekozen om subveld van OCR te onderzoeken, de zogenaamde Handwritten Text Recognition (HTR) technieken, welke zich specifiek richt op handgeschreven teksten.

### Dataverzameling

Om HTR optimaal te laten werken helpt het om de modellen af te stemmen op je eigen data. Het verzamelen van een hoogwaardige dataset is echter een tijdrovend proces en daardoor vaak een bottleneck bij AI projecten. Er is echter een [openbare dataset](https://zenodo.org/records/6414086) waar we gebruik van kunnen maken. Zo zijn er namelijk eerder al 6000 documenten, 17de en 18de -eeuwse VOC aktes en 19de -eeuwse notariële aktes, overgetypt tijdens het Crowd Leert Computer Lezen project ([link](https://www.amsterdam.nl/stadsarchief/organisatie/blog-bronnen-bytes/tekstherkenning-%284%29-crowd-leerde-ai/)).

Daarnaast hebben we gekozen om die dataset aan te vullen eigen annotaties. Zodoende kunnen we de algoritmes verder finetunen en de uiteindelijke modellen evalueren op performance. De annotaties hebben we door interne collega’s die dagelijks met de handgeschreven aktes werken laten maken. Voor de annotaties hebben we gebruik gemaakt van [eScriptorium](https://escriptorium.inria.fr/) v0.14.0.

Er zijn verschillende dingen gedaan tijdens de dataverzameling. Een eerste stap is al het verzamelen van een diverse en representatieve set aktes. We hebben hier gekozen voor aktes uit verschillende decennia, de periode beslaat ruim 100 jaar en layouts en schrijfstijlen kunnen verschillen, en aktes uit verschillende bewaringen (de oorspronkelijke Kadasterlocaties waar de aktes werden ingeschreven in de registers). Ook is er gekeken naar aktes die opnieuw gescand zijn. Als medewerkers tijdens een onderzoek naar erfdienstbaarheden een akte niet kunnen lezen door té slechte scankwaliteit, kunnen de collega’s van het archief een nieuwe scan maken. Door voorbeelden van deze opnieuw gescande aktes toe te voegen weten we in hoeverre het nodig is het hele archief opnieuw te scannen, of dat de huidige scankwaliteit voldoende is. Tot slot hebben we ook gelet op dat er een deel van de aktes erfdienstbaarheden in de tekst bevatten, zodat we daar ook op kunnen testen voor de tweede deelvraag van het onderzoek.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/data_herscan.png"
   caption="Oude en nieuwe scankwaliteit, waarbij de tape opnieuw gedigitaliseerd is in hogere kwaliteit" %}

Tijdens het annoteren van de verzamelde aktes zijn er drie dingen vastgelegd. Zo zijn van 771 scans de tekstregio’s en tekstregels aangegeven. De tekstregio’s laten ons weten wat er semantisch in de scan staat. Niet alleen kunnen we zodoende bijgevoegde tekeningen uit de scan halen, maar ook bepalen wat de rol van tekst is in de akte. Voorbeelden zijn paginanummers, volgnummers of paragrafen. Hoewel dat allemaal tekst is, is de functie zeer verschillend. Door de verschillen aan te geven kunnen we uiteindelijk het zoeken in aktes bijvoorbeeld beperken tot enkel de aktetekst. Gezien aktes achter elkaar door werden geschreven in de boekdelen kunnen aktes halverwege de pagina starten of eindigen. De volgnummer van de akte staat in de kantlijn en geeft aan welke akte het precies is, vooral wel zo handig als er meerdere aktes op één pagina staan.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/data_textRegions.png"
   caption="Annoteren van de tekstregio’s in de scans. Hiermee kunnen we bepalen wat er op de scan staat en de rol van de tekst in de akte" %}

Het tweede wat is aangegeven is waar de tekst precies is in de scan. Dit doen we met het aangeven van de tekstregels. Hoewel er op kleinere schaal (kassabonnetjes bijvoorbeeld) wel AI modellen zijn die de hele foto in één keer kunnen omzetten naar een lap tekst, zijn deze modellen nog niet krachtig genoeg zijn om dat voor een scan van een handgeschreven document te doen. Dat wordt eigenlijk altijd per tekstregel gedaan, waarvoor het dus nodig is om eerst deze tekstregels te vinden. Het is hiervoor mogelijk om de gewenste uitsnede al te annoteren, maar het is eenvoudiger en sneller om alleen een lijntje onder de tekstregel te zetten en achteraf met heuristieken een uitsnede te maken, hierbij gaat geen performance verloren.

Het derde wat tijdens de annotatie aangegeven wordt is het transcriberen van de tekst zelf. Dit was meest tijdsintensieve deel, en kan ook alleen gedaan kon worden door domein experts die daadwerkelijk de scans goed kunnen lezen. Zij hebben uiteindelijk van 54 scans de volledige transcriptie geproduceerd.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/data_transcribing.png"
   caption="Tekstregels in blauw, rechts de bijbehorende transcripties" %}

### Loghi tooling

Voor de HTR tooling hebben we de open-source [Loghi](https://github.com/knaw-huc/loghi) van het KNAW als een startpunt gebruikt. In die tooling zijn reeds getrainde modellen beschikbaar die al gebruik maken van eerdergenoemde openbare dataset, al gebruiken we de tooling vooral voor de pipeline en werkmethode en trainen we de modellen opnieuw voor betere performance.

Eén van de problemen waar we tegenaan liepen is dat de data die gebruikt is om de standaardmodellen te creëren onvoldoende lijkt op onze data, met als gevolg dat de performance achter blijft. Wel kunnen we die data gebruiken om de modellen verder te trainen, maar dan de data te verrijken met augmentaties. Zodoende lijkt het trainingsmateriaal meer op de scans in onze archieven. Dit komt de performance van de modellen op onze data ten goede.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/data_augmentation.png"
   caption="Het toepassen van data augmentaties om de openbare dataset meer op onze data te laten lijken. V.l.n.r.: het origineel, ruis, thresholding, gecombineerd" %}

De tooling bestaat uit twee stappen om de scans om te zetten naar doorzoekbare tekst: 1) layout analyse en 2) tekstherkenning. Voor beide stappen zijn zowel de openbare dataset gebruikt.

### Stap 1: Layout analyse

Om de tekst te kunnen herkennen, moet je eerst weten waar de tekst precies in de scan staat. De eerste stap is dus het lokaliseren van de tekstregels. Dit doen we met een segmentatie model. Hoe beter deze segmentatie gedaan wordt, hoe beter de tekst herkenning zal gaan. Het doel in deze stap is zou weinig mogelijk ruis, terwijl we complete tekstregels houden.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/results_segmentation.png"
   caption="V.l.n.r. scan van een akte, ruisige segmentatie met standaard Loghi tooling, schoner resultaat met data augmentaties en ander model" %}

### Stap 2: Tekstherkenning

Op basis van de gevonden tekstregels kunnen we uitsneden maken. Het is niet nodig om deze verder op te knippen in losse letters, de AI modellen kunnen een volledige zin in één keer omzetten. Van de uitsnede wordt als afbeelding dan door het HTR model gehaald.

Net als de vorige stap is het hiervoor nodig om een AI model te trainen op veel voorbeelden. Vanuit de gelabelde zijn de tekstregels uitgesneden met daarbij de overgetypte tekst. Dit vormen paren van inputdata en ground truth, de gewenste uitkomst van het systeem. Dit stelt ons in staat om andere scans die niet handmatig overgeschreven zijn ook om te zetten naar tekst.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/results_ocr.png"
   caption="Uitsnede van een gevonden tekstregel. De uitkomst van het HTR model geeft de herkende tekst terug met een confidence score" %}

De tekstherkenningsstap valideren we op een aantal van de overgetypte Kadaster aktes, die geen onderdeel waren van de trainingsset. Over deze modellen wordt een voorspelling gedaan door de getrainde modellen, waarna we naar het verschil meten tussen de voorspelde tekst, en de gemaakte transcriptie. Elke letter die tussen beide verschilt is een fout. We halen daarmee een uiteindelijke foutmarge van zo’n 5%.

In de praktijk betekent dit dat hoewel de voorspelde teksten niet perfect zijn, goed te volgen is wat er in de tekst besproken wordt. Ook is het een gemiddelde en zijn er sommige aktes met goede scankwaliteit en leesbaar handschrift die bijna foutloos omgezet worden.

## Vraag 2: Vinden van Erfdienstbaarheden

Eén van de toepassingen waarvoor de handgeschreven aktes is het vinden van erfdienstbaarheden. In hoeverre kunnen we erfdienstbaarheden geautomatiseerd vinden?

### Passages

Wanneer een erfdienstbaarhedenonderzoeken wordt uitgevoerd, worden de relevante passages uit de akte overgetypt die het erfdienstbaarheid omschrijven. Dit kan één zijn per akte, of meerdere. Voor dit onderzoek hebben we 167 passages uit 162 aktes gepakt en met de getrainde AI modellen de tekst geëxtraheerd.

Tegenwoordig staan erfdienstbaarheden netjes onder een eigen kopje vermeld, maar dat was niet altijd zo. In dat geval moet het recht afgeleid worden aan de hand van de omschrijving in de aktetekst. Zo kunnen we een lijstje van zoektermen opstellen:

- Erfdienstbaarheid
- Servituut (ander woord voor erfdienstbaarheid)
- Recht van weg
- Recht van toegang
- Recht van overpad
- …

Simpelweg zoeken in de HTR resultaten werkt niet heel goed, omdat die fouten bevatten. Er worden dan misschien erfdienstbaarheden gevonden die er niet zijn, maar vooral erfdienstbaarheden gemist. Er zijn twee technieken waarmee we slimmer kunnen zoeken.

### Technieken

De eerste onderzochte techniek is een “fuzzy search”. Bij een fuzzy search staan we toe dat er verschillen tussen de zoekterm en de akte mogen zitten, “rech van vveg” kan gevonden worden als we op “recht van weg” zoeken. Dit gaat op basis van de Levenshteinafstand, waarbij elke toevoeging, wijziging en verwijdering van tekens worden opgeteld. Door dit af te laten hangen van de lengte van het woord wordt hier meer verschil in toegestaan dan bij korte woorden. Zodoende voorkomen we teveel foutpositieven, zonder dat langere zoektermen onnodig wegvallen. Op deze manier zoeken geeft goede initiële resultaten, zo wordt in goed leesbare aktes 98% van de omschrijvingen gevonden.

De tweede techniek is het creëren van embeddings. Hierbij wordt de tekst omgezet naar een vector van getallen, die de semantiek van de tekst vat. Het grote voordeel hiervan is dat je vergelijkbare, maar verschillende, omschrijven toch bij elkaar kunt vinden. Zo liggen bijvoorbeeld “vennootschap” en “bedrijf” dicht bij elkaar, en kan ons dit helpen bij het vinden van omschrijvingen van erfdienstbaarheden. Eerste tests geven een percentage van 71%, waardoor het niet beter werkt dan de simpelere fuzzy search. Mogelijke verklaringen voor het lagere percentage zijn de HTR errors als het gebruik van oud-Nederlands in de teksten.

De technieken kunnen elkaar nog wel aanvullen. Bij een aantal lagere kwaliteit akten konden op basis van de embeddings een paar omschrijvingen gevonden worden die werder gemist met de fuzzy search. Deze aantallen waren echter klein.

{% include figure.html
   path="/assets/images/handgeschreven_aktes_ai/results_search.png"
   caption="De omgezette tekst met de gevonden erfdienstbaarheden gehighlight" %}

## Conclusie

Het is mogelijk om in het HTR resultaat te zoeken op bepaalde zoekwoorden, daarmee worden indicaties gevonden voor erfdienstbaarheden. Wat na dit onderzoek nog niet kan zijn de details van de erfdienstbaarheid extraheren, bijvoorbeeld het heersende en dienende perceel. Een volledig erfdienstbaarhedenonderzoek bestaat tevens uit meer dan alleen het raadplegen van de aktetekst: het is een complex onderzoek waarbij een web van verschillende bronnen geraadpleegd worden. Automatisering van het hele proces is daardoor nog een paar stappen te ver.

Toch bieden de onderzochte technieken voldoende voordelen om hier mee verder te gaan. Zo helpen de HTR resultaten al erg met het lezen van de akten, wat daarmee minder vermoeiend wordt. Daarnaast helpen de indicatoren om snel naar de relevante sectie van een akte te gaan. Al met al zien we dit als een waardevolle ondersteuning bij de werkzaamheden. Daarnaast kan de techniek nog verder ingezet worden: zo kunnen we voorspellen welke scans voldoende leesbaar zijn en welke onvoldoende en dus opnieuw gescand moeten worden. Ook kan de datum van inschrijving geëxtraheerd worden.
