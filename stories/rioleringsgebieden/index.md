---
description: Data Story waarin gegevensbronnen in de afvalwaterketen op nieuwe manieren gecombineerd worden..
layout: story
output: geo
published: false
title: Rioleringsgebieden
---

<h1>Combineren van gegevensbronnen in de afvalwaterketen</h1>

<p>Gemeenten en waterschappen maken gebruik van veel verschillende
informatiebronnen bij de inzameling, het transport en de zuivering van
afvalwater.  Is het mogelijk om deze bronnen met behulp van Linked
Data en SPARQL 'on the fly' bijeen te garen? Dat zou een flinke
verbetering zijn ten opzichte van de huidige werkwijze, waarbij
handmatig gegevens van verschillende partijen verzameld en
gecombineerd worden.  Deze data story verkent de mogelijkheden om
'federatief' vanuit verschillende bronnen informatie te vergaren
rondom het thema afvalwaterketen.</p>

<h2>Rioleringsgebied Castricum</h2>

<p>Een zuiveringsgebied omvat een rioolwaterzuiveringsinstallatieequiv
(RWZI) en een aantal rioleringsgebieden die afwateren naar die RWZI.
Vaak zitten hier gemalen bij om het transport een handje te
helpen.</p>

<p>De datasets gebaseerd op het Gegevenswoordenboek Stedelijk
Water <a href="https://data.gwsw.nl" target="_blank">GWSW</a> bevatten
informatie rondom het thema inzameling en transport.  We bekijken hier
het rioleringsgebied van Castricum en vragen dit gebied op met de
bijbehorende uitlaten en pompen uit het toegangspunt van het GWSW.
Hieronder wordt een selectie van de beschikbare gegevens getoond.
Onder de groene, rode en blauwe markers staat informatie over
respectievelijk het rioleringsgebied, het rioolgemaal en de
overstorten.</p>

<query data-endpoint="https://sparql.gwsw.nl/repositories/TestDatastory"
       data-output="geo"
       data-query-ref="rioleringsgebied.rq">
</query>

<h2>Zuiveringsinstallaties in de regio</h2>

<p>De Basisregistratie
Topografie <a href="https://brt.basisregistraties.overheid.nl"
target="_blank">BRT</a>, die door het Kadaster ontsloten wordt, biedt
informatie omtrent de RWZI's.  Het rioleringsgebied Castricum kent
zelf geen waterzuiveringsinstallaties, we kennen de geometrie van het
zuiveringsgebied niet, maar we kunnen wel de dichtstbijzijnde
opvragen.  Zo ook voor deze locatie, de directe omgeving van het
zuiveringsgebied kent twee zuiveringsinstallaties in de BRT:</p>

<query data-endpoint="https://api.labs.kadaster.nl/datasets/kadaster/brt/services/brt/sparql"
       data-output="geo"
       data-query-ref="zuiveringsinstallaties-in-buurt-van-gebied.rq">
</query>

<h2>Gemeentes rond het rioleringsgebied</h2>

<p>We kunnen snel aan de slag om informatie uit andere bronnen te
benutten.  De waterschappen zijn niet gebonden aan gemeentegrenzen,
dus in welke gemeente(s) ligt het rioleringsgebied Castricum
eigenlijk?  Aangezien de toegang tot gemeentenamen worden geleverd via
de Basisregistratie Topografie (BRT), vragen we de bijbehorende
gemeentes op.  Als je goed inzoomt, blijkt dat er naast Castricum een
kleine overlap is met de gemeentes Bergen, Heemskerk en Uitgeest:</p>

<query data-endpoint="https://api.labs.kadaster.nl/datasets/kadaster/brt/services/brt/sparql"
       data-output="geo"
       data-query-ref="gemeentes-bij-regio.rq">
</query>

<h2>Afvalwater vanuit het rioleringsgebied</h2>

<p>Voor het beheer en de capaciteit van rioolstelsels, rioolgemalen en
RWZI is het van belang de stand van zaken en de ontwikkelingen van
grondgebruik en inwoneraantallen te kennen.  Die combinatie van
gegevens wordt in het vakgebied de ‘kengetallen’ van het
rioleringsgebied genoemd.  Voor het verzamelen van de kengetallen doen
we een beroep op diverse gegevensbronnen (BAG, BGT, CBS, GWSW) die
afzonderlijk (zonder duplicatie) worden bijgehouden.  Het gaat ons om
de afvoer binnen de afvalwaterketen, de belasting van de RWZI.  Die
gegevens over bedrijven en inwoners vinden we onder andere bij het
CBS.</p>

<h3>CBS Statistieken</h3>

<p>De combinatie is met behulp van locatiegegevens gevonden: het zijn
de buurten die binnen het rioleringsgebied vallen en die daarmee
afwateren via rioolstelsels naar de RWZI.  Het CBS verzamelt per buurt
vele statistieken, waaronder gegevens over het landgebruik en het
aantal mensen dat er woont.  We vragen bij het CBS de buurten op die
het rioleringsgebied overlappen:</p>

<query  data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-output="geo"
       data-query-ref="buurten-in-rioleringsgebied.rq">
</query>

<h2>Combineren van data naar kengetallen met het GWSW</h2>

<p>Door genoemde data met elkaar te combineren kunnen we een rapport
genereren met informatie uit verschillende bronnen.  Stichting RIONED
onderhoudt en ontwikkelt GWSW Geo, dat zijn GIS-toepassingen op het
GWSW.  Daarmee worden de datasets van gemeentes volgens meerdere
thema's (per doelgroep) geografisch gepresenteerd.  Deze data story
vormt de inspiratiebron voor het GWSW Geo-thema ‘Kengetallen’, waarin
de federatieve query-vorm verdergaand is toegepast.</p>

<p>De GIS presentatie van de hier gebruikte GWSW-dataset staat
op <a href="https://qgiscloud.com/RIONED/Datastory"
target="_blank">https://qgiscloud.com/RIONED/Datastory</a>.  GIS
gebruikers kunnen deze testcase conform WFS opvragen
op: <a href="https://geodata.gwsw.nl/TestDatastory/kengetallen"
target="_blank">https://geodata.gwsw.nl/TestDatastory/kengetallen</a>.</p>

<h2>Meer mogelijkheden met de BAG</h2>

<p>Uit de Basisregistraties Adressen en Gebouwen (BAG) kunnen we nog
veel meer relevante gegevens destilleren.</p>

<h3>Woonplaatsen rond het rioleringsgebied</h3>

<p>Gewapend met de kennis over de gemeentes rond het rioleringsgebied
kunnen we de bijbehorende plaatsnamen opvragen.  Dit doen we door een
kleine buffer (in oranje) om de gemeente te leggen en alleen die
woonplaatsgebieden te selecteren die hier volledig binnen vallen.  Het
gaat om enkel Castricum, wat Bakkum (volgens de BAG) omvat:</p>

<query data-endpoint="https://api.labs.kadaster.nl/datasets/kadaster/brt/services/brt/sparql"
       data-output="geo"
       data-query-ref="woonplaatsen-in-rioleringsgebied.rq">
</query>

<p>De CBS Statistieken worden verzameld per buurt.  Zoals de eerdere
selectie laat zien is de overlap tussen de buurten en rioleringsgebied
lang niet altijd volledig.</p>
