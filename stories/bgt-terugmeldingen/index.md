---
layout: default
title: BGT terugmeldingen
---

<div style="width:50%; margin:0 auto;">
 
<h1>BGT terugmeldingen analyse </h1>
<br>
<h2> 1. Inleiding </h2>
Gebruikers van de Basisregistratie Grootschalige Topografie (BGT) kunnen bij twijfel aan de juistheid van een gegeven een zogenaamde Terugmelding doen. Hiermee geven ze aan dat ze denken dat dit gegeven niet juist is. Het is aan de bronhouders te beoordelen of deze melding terecht is en zo ja om het gegeven te corrigeren.
<br>
<br>
Terugmeldingen kunnen worden gedaan door burgers, bedrijven en overheden. In vrijwel alle meldingen wordt alleen in een "vrij tekstveld" informatie over de terugmeldingen meegegeven. Vanuit het BGT team kregen wij als Datascience Team de vraag of wij uit deze "vrije tekstvelden" waardevolle inzichten konden bieden over de terugmelding. Om dit te realiseren hebben wij een export (csv bestand) van de data ontvangen vanuit het terugmeldsysteem. 
<br>
<br>
In onderstaande figuur is de verhouding van de terugmeldingen per kanaal te zien.

<br>
<figure id="figuur-3">
  <a href="bron.PNG">
    <img src="bron.PNG">
  </a>
  <figcaption>
    Figuur 1 ― aantal BGT terugmeldingen per kanaal. 
  </figcaption>
</figure>
<br>

<h2> 2. Doel Onderzoek </h2>
Het doel van dit project is om inzicht te bieden op de volgende onderzoeksvragen;
<br>
-	Op welke BGT-objecttypen vinden de terugmeldingen plaats.
<br>
- Wat is de afhandelingstermijn van de terugmeldingen per objecttype.
<br>
- In welke mate komt de afhandelingstermijn van een terugmelding overeen met de actualiteitseis van het BGT-objecttype.
<br>
<br>
<h2> 3. Aanpak </h2>
Op dit moment worden jaarlijks gemiddeld 7000 terugmeldingen gedaan op de BGT. Deze datastory is gebaseerd op analyse van alle, ruim 40.000 terugmeldingen vanaf 2016-06 tot het heden. In onderstaande grafiek is te zien dat, logischerwijs, meer dan driekwart van alle terugmeldingen is afgerond/afgewezen/doorgestuurd of gemarkeerd als spam, slechts een klein gedeelte is nog in progress.
<br>
<figure id="figuur-4">
  <a href="status.PNG">
    <img src="status.PNG">
  </a>
  <figcaption>
    Figuur 2 ― status van BGT terugmeldingen. 
  </figcaption>
</figure>
<br>
Het veld "omschrijving" is gebruikt voor de tekstanalyse. De omschrijving bestaat uit vrije tekst van verschillende lengtes en detaillering, soms bevat het alleen de naam van het object en in andere gevallen de volledige beschrijving van het probleem. Deze teksten hebben we door middel van een zogenoemde Word Cloud weergegeven in onderstaande afbeelding.
<br>
<br>
<figure id="figuur-1">
  <a href="wordcloud.png">
    <img src="wordcloud.png">
  </a>
  <figcaption>
    Figuur 3 ― wordcloud van veel voorkomende woorden in de BGT terugmeldingen. 
  </figcaption>
</figure>
<br>

Voor de volgende stap hebben we een lijst met BGT-objecttypen ontvangen. In dit bestand staan onder andere veelgebruikte afkortingen en synoniemen van de objecttypen. Een voorbeeld hiervan is het objecttype pand; deze wordt ook vaak geschreven als huis, gebouw, woning etc. Met deze lijst hebben wij doormiddel van reguliere expressie gekeken of de woorden voorkomen in het “vrije tekstveld” en zodoende er een objecttype aan gekoppeld. Indien er meerdere woorden in een vrij tekstveld voorkomen, pakt het model op dat moment het objecttype met de hoogste hiërarchie.
<br>
<br>
Niet redelijk veel gevallen is er in het “vrije tekstveld” geen objecttype of synoniem gevonden. In de tabel onder Hoofdstuk 4 staat dan ‘geen classificatie’.  Van deze terugmeldingen hebben we een speciale wordcloud gemaakt; figuur 4. Dit is gedaan om te beoordelen of er toch nog informatie uit die terugmeldingen gehaald kan worden.
<br>
<br>
<figure id="figuur-5">
  <a href="geen_class.PNG">
    <img src="geen_class.PNG">
  </a>
  <figcaption>
    Figuur 4 ― wordcloud van veel voorkomende woorden in de BGT terugmeldingen die niet geclassificeerd zijn bij een objecttypen. 
  </figcaption>
</figure>
<br>

Wanneer een melding wordt geregistreerd in het systeem krijgt het een tijdstipregistratie en een bronhouder naam en code toegewezen. De bronhouder handelt de melding af door de status te wijzigen met eventueel een korte toelichting. De melding is afgehandeld als deze de status ‘afgerond’, ‘afgewezen’ of ‘doorgestuurd naar andere basisregistratie’ heeft bereikt. De afhandelingstermijn van een terugmelding is berekend door het verschil in dagen te berekenen tussen tijdstipregistratie en het tijdstip van afronding/afwijzing/doorgestuurd.

<br>
<br>
<h2> 4.	Resultaten </h2>
In onderstaande figuur zijn de resultaten van de eerste twee onderzoeksvragen gecombineerd, waarin is te zien dat de meest voorkomende objecten in de terugmeldingen panden en wegen zijn en dat deze gemiddeld binnen 159 en respectievelijk 157 dagen zijn afgehandeld.

<br> 
<br>
<table>
  <tr>
    <th style="padding-right: 120px;">objecttypen</th>
    <th style="padding-right: 120px;">aantal</th>
    <th style="padding-right: 120px;">doorlooptijd in dagen </th>
    <th>actualiteitseis in maanden</th>
  </tr>
  <tr>
    <td>pand</td>
    <td>16069</td>
    <td>159</td>
    <td>6</td>
  </tr>
  <tr>
    <td>wegdeel</td>
    <td>14257</td>
    <td>157</td>
    <td>6</td>
  </tr>
    <tr>
    <td> geen classificatie</td>
    <td>12788</td>
    <td>192</td>
    <td>6</td>
  </tr>
    <tr>
    <td>waterdeel</td>
    <td>4312</td>
    <td>163</td>
    <td>18</td>
  </tr>
    <tr>
    <td>begroeid terreindeel</td>
    <td>4153</td>
    <td>154</td>
    <td>18</td>
  </tr>
   <tr>
    <td>vegetatieobject</td>
    <td>1670</td>
    <td>122</td>
    <td>18</td>
  </tr>
    <tr>
    <td>overig bouwwerk</td>
    <td>1494</td>
    <td>155</td>
    <td>18</td>
  </tr>
    <tr>
    <td>ondersteunend wegdeel</td>
    <td>987</td>
    <td>69</td>
    <td>18</td>
  </tr>
    <tr>
    <td>onbegroeid terreindeel</td>
    <td>969</td>
    <td>128</td>
    <td>18</td>
  </tr>
    <tr>
    <td>overbruggingsdeel</td>
    <td>520</td>
    <td>169</td>
    <td>6</td>
  </tr>
    <tr>
    <td>kunstwerkdeel</td>
    <td>421</td>
    <td>262</td>
    <td>18</td>
  </tr>
    <tr>
    <td>scheiding</td>
    <td>281</td>
    <td>170</td>
    <td>18</td>
  </tr>
    <tr>
    <td>spoor</td>
    <td>104</td>
    <td>121</td>
    <td>18</td>
  </tr>
    <tr>
    <td>ondersteunend waterdeel  </td>
    <td>62</td>
    <td>132</td>
    <td>18</td>
  </tr>
   <tr>
    <td>tunneldeel</td>
    <td>51</td>
    <td>294</td>
    <td>6</td>
  </tr>
</table>


<br>
</div>





