# AI-gestuurde Aktevoorspellingen 

## Hoe kunnen we het akteaanbod nauwkeuriger voorspellen met AI? 
 
### Introductie 
Het Kadaster probeert het werkaanbod van akten zo nauwkeurig mogelijk te voorspellen, zodat de planning van werkzaamheden hierop afgestemd kan worden. Tot 2023 werd die voorspelling uitgevoerd met excel modellen. Het Data Science Team heeft onderzocht of de voorspelling verbeterd kan worden met behulp van AI. 
 
>"Kunnen we het aanbod aan aktes accuraat en realtime voorspellen om zo de bemensing goed te plannen?" 

### Context 
Binnen het Rechtszekerheid domein worden dagelijks honderden aktes verwerkt. De aktes vallen onder 30 segmenten die worden verwerkt in onze basisregistraties. De verwerking van aktes is grotendeels geautomatiseerd (o.a. met Akte AI) maar de wat complexere aktes worden altijd nog handmatig verwerkt door juridische medewerkers die hier speciaal voor zijn opgeleid. 

>"Voorheen konden we 5 dagen vooruit voorspellen met Excel. Met AI kunnen we minimaal 5 weken vooruit voorspellen." 

Het voorspellen van akten en hypotheken is al langer een wens van het RZ domeinvanuit de business. Het voorspellen gebeurde al wel met allerlei ingewikkelde modellen in Excel die dagelijks aangevuld moest worden met historische aantallen per dag en waarbij de formules met variabelen handmatig gefinetuned moest worden. Dit handmatige werk resulteerde in een voorspelling voor de komende vijf dagen. Hiermee konden alleen geaggregeerde totalen voorspeld worden voor hypotheken en akten en niet afzonderlijk per segment. Dit was lastig en tijdrovend om dagelijks te onderhouden. 

Tijdens het onderzoek zijn eerst de huidige Excel modellen nagebouwd en zijn de patronen in de data herkend waarna er een zelflerend AI model is ontwikkeld.  

### Waarom de inzet van AI?  

Het doel van de inzet van AI is het beter voorspellen van de aantallen per segment i.p.v. geaggregeerde aantallen. Het AI model wordt getraind op basis van historische data en de data die er dagelijks binnenkomt waardoor de voorspelling steeds nauwkeuriger wordt. De gemiddelde dagelijkse afwijking is ook een stuk lager dan het oude excel-gebaseerde model. Een ander voordeel is dat er langer vooruit voorspeld kan worden en dat per type segment duidelijk is hoeveel aktes er binnenkomen. Hier kan de planning en het opleidingsniveau van de medewerkers op afgestemd worden.   

Het toevoegen van marktscenario's maakt het model nog krachtiger. Bijvoorbeeld o.b.v. externe factoren zoals de rente-ontwikkeling en het BBP wordt de voorspelling bijgesteld.   

### Taak AI model  

- Het zo accuraat mogelijk voorspellen van akten en hypotheken. Uitgangspunten hierbij zijn:  
- Gegeven genoeg data kan het model de trend leren voorspellen zonder handmatige decompositie  
- Er is een onderzoek gedaan naar AI-architecturen zoals sarimax / lstm/ transformer modellen. Voor de beste resultaten hebben we een neuraal netwerk o.b.v. een time2vec en LSTM- architectuur gekozen. 
- Flexibel inzetbaar voor de verschillende segmenten  
- Vanuit de voorspellingen wordt kan de bemensing worden afgeleid  

### Wat is een tijdsreeks?  

In het voorspelmodel wordt een tijdreeks voorspeld. Dat is het aantal aangeboden aktes dat bij ons binnenkomt, verdeelt over een tijdsperiode. Dat willen we voor de toekomst gaan voorspellen.  

<figure id="figuur-1">
  <a href="/innovatie/voorspelmodellen/afbeeldingen/voorspelmodellen1.PNG">
    <img src="/innovatie/voorspelmodellen/afbeeldingen/voorspelmodellen1.PNG" alt="Proces">
  </a>
</figure>

### Seizoenaliteit  

Binnen elk segment akten heb je een andere seizoenaliteit. Er zijn wekelijks en maandelijks terugkerende patronen. Bij hypotheken en akten zien we bijvoorbeeld aan het begin en aan het eind van de week een piek en aan het einde van de maand. 

Indien beter voorspeld kan worden hoeveel en wat voor soort aktes er de komende 8 maanden binnen komen, kan daar beter op gepland worden en de juiste capaciteit (FTE’s) voor worden ingezet.  

<figure id="figuur-1">
  <a href="/innovatie/voorspelmodellen/afbeeldingen/voorspelmodellen2.PNG">
    <img src="/innovatie/voorspelmodellen/afbeeldingen/voorspelmodellen2.PNG" alt="Proces">
  </a>
</figure>
 
*Maandelijkse seizoenspatronen binnen het segment hypotheekakte* 

### Resultaat 

In het afgelopen jaar zijn de uitkomsten van het AI-voorspellingsmodel naast die van de traditionele Excel-voorspellingen gelegd. Uit de validatie blijkt dat de foutmarge van het AI-model bij het voorspellen van de volgende dag recentelijk ongeveer 6 procent bedraagt, wat een verbetering is ten opzichte van het voorgaande model gebaseerd op Excel. Bovendien verbetert de nauwkeurigheid van het model naarmate er meer data beschikbaar komt.

<figure id="figuur-1">
  <a href="/innovatie/voorspelmodellen/afbeeldingen/voorspelmodellen3.PNG">
    <img src="/innovatie/voorspelmodellen/afbeeldingen/voorspelmodellen3.PNG" alt="Proces">
  </a>
</figure>

*Voorspelling van het werkaanbod voor de komende 30 dagen* 

 
