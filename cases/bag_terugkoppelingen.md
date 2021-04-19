---
layout: page
title: Bag terugmeldingen story
---

<h1>Introductie</h1>

<p>Via verschillenden kanalen (BAG viewer, verbeterdekaart.nl en OpenStreetMap) worden op dit moment jaarlijks ruim 10.000 terugmeldingen gedaan op de BAG (2019, 2020). Terugmeldingen kunnen worden gedaan door burgers, bedrijven en overheden. In vrijwel alle meldingen is in een "vrij tekstveld" aanvullende informatie over de terugmeldingen meegegeven. Vanuit het BAG team kregen wij de vraag of wij uit deze "vrije tekstvelden" data waardevolle inzichten konden bieden over de terugmelding. Om dit te realiseren hebben wij een export (csv bestand) van de data ontvangen vanuit het terugmeldsysteem. In onderstaande figuur is de verhouding van de terugkoppelingen per kanaal te zien.</p>

![terugmeldingen](/assets/images/BAG_resultaten1.jpg)

<h1>Het doel</h1>

<p>Het doel van dit project was om inzicht te bieden op de volgende onderzoeksvragen;
<br>
1.	Topic extractie : waar gaan de terugmeldingen over (missende of onjuiste informatie)?
<br>
2.	Attributen extractie: op welke attributen vinden de terugmeldingen plaats (oppervlakte, postcode, huisnummer, gebruiksdoel e.d.).
<br>
3.	Onderzoeken of we verbanden kunnen leggen tussen de terugmeldingen op bovenstaande twee punten.
<br>
4.	Vergelijking van de terugmeldingen op bovenstaande 3 onderzoeksvragen tussen 2019 en 2020.
</p>

<h1>Aanpak</h1>

<h2>Werkwijze topic extractie</h2>
<p>
Om een bepaald onderwerp toe te kennen aan een terugkoppeling hebben wij allereerst de tekst vertaald naar het Engels, waarna we text preprocessing hebben gedaan op het tekstveld om zo leestekens te verwijderen. De reden van vertaling naar het Engels is omdat we gebruik gemaakt hebben van een Engelse woordencorpus om clusters van worden te maken die dichtbij het woord 'missend' en 'incorrect' liggen. Dus bij het cluster 'missing data', komen dan met hulp van de corpus woorden zoals 'lacking' en voor het cluster 'incorrect data' komen dan woorden zoals 'false'. Vervolgens hebben we een similarity score (dus een gelijkheidsscore) berekend tussen de BAG terugkoppeling  en de twee clusters 'missende data' en 'incorrecte data'. Om zodoende te berekenen bij welk cluster de terugkoppeling past. Wanneer deze gelijkheidsscore zich niet in het interquartiel bevindt, dat wil zeggen de middelste 50% van de waardes. Dan wordt het gezien als een outlier (terugkoppeling die geen classificatie kan krijgen). Dit was in 18 terugmeldingen het geval. 
</p>

<h2>Werkwijze attributen extractie</h2>
<p>
Voor de attributen extractie hebben wij een lijst met woorden ontvangen die bij de BAG attributen horen. In dit bestand staan onder andere veelgebruikte afkortingen en synoniemen van de attributen. Een voorbeeld hiervan is het attribuut huisnummer; deze wordt ook vaak geschreven als huis nmr. of alleen nmr. (de afkorting van nummer). Met deze lijst hebben wij doormiddel van reguliere expressie gekeken of de woorden voorkomen in het terugkoppeling vrije tekst veld en zodoende er een attribuut aan gekoppeld. Indien er meerdere attributen in een vrij tekstveld voorkomen, pakt het model op dit moment het eerste genoemde attribuut. 
</p>

<h1>Resultaten</h1>
<p>
In onderstaande figuur zijn de resultaten van beide extracties gecombineerd, waarin vooral incorrecte data over het bouwjaar en oppervlakte hoog scoren.
</p>

![terugmeldingen_bag](/assets/images/BAG_resultaten.jpg)

<h1>Voorbeelden attribuut extractie</h1>
<p>
Hieronder zijn twee voorbeelden bijgevoegd van de vrije tekst terugkoppelingen die door het model gekwalificeerd zijn als het atribuut bouwjaar.
</p>
<div class="textbox" markdown="1">
<p><q>
Bouwjaar klopt niet, dit zou 1978 moeten zijn
</q></p>
<p><q>
bouwjaar pand is 1928
</q></p>
</div>

 <h1>Voorbeelden attribuut extractie in combinatie met topic extractie</h1>
<p>
Hieronder zijn twee voorbeelden bijgevoegd van de vrije tekst terugkoppelingen die door het model gekwalificeerd zijn als het atribuut huisnummer en het topic incorrect.
</p>
<div class="textbox" markdown="1">
<p><q>
in 2003 is huisnummer 6 gesplitst in 6a en 6b.
in BAG bekend 6 moet zijn 6a
in BAG bekend 6a moet zijn 6b
Mvgr Paul 
(wij verkopen app index A3 = 6a nu)
</q></p>
<p><q>
Nummeraanduiding (huisnummer) 21 komt niet voor in de BAG.
Volgens onze gegevens zit op dit huisnummer het bedrijf:
SHELL Nederland Raffinaderij BV
https://drimble.nl/bedrijf/europoort/20498497/shell-nederland-raffinaderij-bv.html
</q></p>
</div>