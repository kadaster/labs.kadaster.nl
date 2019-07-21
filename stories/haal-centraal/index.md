---
banner: /assets/images/voetbal.jpg
description: In deze dataset is informatie omtrent scholen en leerlingen gecombineerd met informatie over gymlocaties.  Bovengenoemde gegevens zijn omgezet in een experimentele Linked Dataset.  Deze Linked Dataset is gemaakt door het Kadaster, gemeente Den Haag en gemeente Rotterdam tijdens een High 5 in juli 2019.
layout: story
published: true
title: Haal Centraal
---

# Haal Centraal: School- en gymlocaties

## Introductie

Van 8 tot en met 11 juli 2019 heeft het Kadaster samen met de gemeente Rotterdam en de gemeente Den Haag gezamenlijk gewerkt om een data story te maken voor een casus van onderwijshuisvesting.  Dit was in een zogenaamde High 5 week, een pressure cooker setting waar we een werkende demonstratie oplossing hebben gemaakt binnen een week.  Hiervoor is echte data gebruikt en de resultaten zijn ook echt, al plaatsen we hier een aantal kanttekeningen bij in verband met data kwaliteit en beschikbaarheid.  Het project is gestart met de gedacht om aan te sluiten bij het programma [Haal Centraal](https://www.vngrealisatie.nl/nieuws/start-programma-haal-centraal).  In dit programma wordt beoogd om basisregistraties van een landelijke centrale voorziening af te nemen.  Hiervoor worden momenteel API's gebouwd.  In dit data story tonen we aan dat het afnemen van gegevens van basisregistraties kan met Linked Data.  Om data analyses en visualisaties te maken zonder brondata te kopiëren is het nodig om meer flexibiliteit te bieden dan een API normaliter biedt.  Dit doen we met onze Linked Data aanpak.

## De Casus

Vanuit Onderwijshuisvesting bij gemeenten Rotterdam en Den Haag lag er een vraag om betere visualisaties te maken dan hun huidige infrastructuur toelaat.  Beide gemeente willen graag de scholen visualiseren en hun eigen data kunnen inzien op de kaart.  In Rotterdam willen ze graag zien hoe leerlingen stromen lopen van scholen naar gymzalen.  Daarbij willen beide gemeenten (visueel) hun prognoses zien en meer inzicht krijgen in hoe scholen, maar ook wijken zich ontwikkelen volgens de prognoses.  Hier speelt de onderliggende vraag hoe de scholen en wijken of buurten gaan ontwikkelen en om hier beleid op aan te passen.  Dit beleid investeringen in te schatten en aan te duiden waar en waarom nieuwe schoolgebouwen of gymzalen geplaatst kunnen worden.

## Experimentele data

Informatie omtrent scholen en leerlingen is beschikbaar via de website [*scholen op de kaart*](https://www.scholenopdekaart.nl).  *Scholen op de kaart* is ontwikkeld door de PO-Raad en VO-raad in samenwerking met [/Kennisnet/](https://www.kennisnet.nl).  Daarnaast is bij gemeenten informatie beschikbaar omtrent gymlocaties.  Bovengenoemde gegevens zijn omgezet in een experimentele Linked Dataset.  Deze Linked Dataset is gemaakt door het Kadaster, gemeente Den Haag, en gemeente Rotterdam tijdens een High 5 in juli 2019.

Vervolgens is deze Linked Open Data gekoppeld aan bestaande Linked Open Datasets.  Dit zijn de sets [Basisregistratie Adressen en Gebouwen (BAG)](https://www.pdok.nl/introductie/-/article/basisregistratie-adressen-en-gebouwen-ba-1) en [Basisregistratie Topografie (BRT)](https://www.pdok.nl/introductie/-/article/basisregistratie-topografie-brt-topnl).  In deze Data Story kijken we naar scholen en gymlocaties in de gemeente Rotterdam en Den Haag.

## Scholen op de Kaart

<p>We beginnen met het weergeven van alle Rotterdamse scholen (<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" fill="blue" r="9"></circle></svg>) en gymlocaties (<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" fill="yellow" r="9"></circle></svg>) op de kaart.  Door op een van de locaties te klikken worden de gegevens die bekend zijn weergeven.</p>

Om een zo compleet mogelijk beeld te geven van de gemeentelijke data per school tonen we alle scholen op de kaart met de prognoses en gelinkte data.

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/label-scholen">
</query>

## Scholen in de BRT

De [Basisregistratie Topografie](https://www.pdok.nl/introductie/-/article/basisregistratie-topografie-brt-topnl) bevat ook schoolgebouwen.  Onderstaande bevraging toont de Haal Centraal [schoollocaties](https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/browser?resource=https%3A%2F%2Fkadaster.triply.cc%2Fhaal-centraal%2Fscholen-sportlocaties%2Fvocab%2FSchoollocatie) samen met de [BRT scholen](https://www.pdok.nl/datamodel/-/article/basisregistratie-topografie-brt-topnl#School).

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/scholen-brt">
</query>

## Scholen + gymzalen

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/scholen-gymlocaties-3d">
</query>

## BAG bouwjaren

Gemeente houden zelf het bouwjaar van gymlocaties bij.  Het is interessant om te weten in hoeverre de bouwjaren uit de gemeentelijke administratie overeenkomen met de gegevens uit de BAG.  Het vershil duidt aan hoeveel jaar de gemeentelijke data en de BAG verschillen.  Wanneer je met de muis over de grafiek heen beweegt worden de schoolnamen met de precieze afwijking getoond.

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/bouwjaar-bag-vs-gemeente">
</query>

## BAG oppervlakte

We geven weer hoe groot de oppervlakte van alle scholen zijn.  Wanneer je met de muis over de grafiek heen beweegt worden de schoolnamen met de precieze afwijking getoond.

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/schoolgebouw-oppervlakte">
</query>

## Reisafstand en bezettingsgraad

Wat moeten gemeenten doen om het busvervoer van leerlingen van scholen naar gymlocaties te minimaliseren en de gymtijd te maximaliseren? In de volgende kaart is voor iedere schoollocatie de sportlocatie weergeven en de reistijd te voet (blauwe lijn) of per bus (gele lijn).  Er wordt ook weergegeven in een kleurcode hoe hoog de bezettingsgraad is van de gymzalen.

<table class="txt table" style='width:50%'>
  <thead>
    <tr><th>Kleur</th><th>Betekenis</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" fill="red" r="9">
          </circle>
        </svg>
      </td>
      <td>Mogelijk overbelast</td>
    </tr>
    <tr>
      <td>
        <svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" fill="yellow" r="9">
          </circle>
        </svg>
      </td>
      <td>Goed bezet</td>
    </tr>
    <tr>
      <td>
        <svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" fill="green" r="9">
          </circle>
        </svg>
      </td>
      <td>Capaciteit beschikbaar</td>
    </tr>
  </tbody>
</table>

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/schoollocaties-gymlocaties-met-analyse">
</query>

## Prognoses 2030

Voor iedere school zijn de leerling prognoses tot 2030 bekend.  Omdat we inzicht hebben in de huidige bezettingsgraad van gymlocaties kunnen de toekomstige bezettingsgraad als een ratio op de huidige bezettingsgraad worden afgebeeld.  Klik op de scholen voor de precieze
getallen.

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/Nieuw-ratio-calc">
</query>

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/Aantal-leerlingen-per-jaar">
</query>
