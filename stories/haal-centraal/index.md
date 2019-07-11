---
banner: /assets/images/voetbal.jpg
description: In deze dataset is informatie omtrent scholen en leerlingen gecombineerd met informatie over gymlocaties. Bovengenoemde gegevens zijn omgezet in een experimentele Linked Dataset. Deze Linked Dataset is gemaakt door het Kadaster, gemeente Den Haag en gemeente Rotterdam tijdens een High 5 in juli 2019.
layout: story
logo: /assets/images/kadaster-logo.png
published: true
title: Haal Centraal
---

# Haal Centraal: School- en gymlocaties

KORTE INTRO TEKST

[Link](/vocab/haal-centraal/index-en.html) naar de documentatie van
het vocabulaire.
[Link](https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties)
naar de database.

## Experimentele data

Informatie omtrent scholen en leerlingen is beschikbaar via de website
[*scholen op de kaart*](https://www.scholenopdekaart.nl).  *Scholen op
de kaart* is ontwikkeld door de PO-Raad en VO-raad in samenwerking met
[/Kennisnet/](https://www.kennisnet.nl).  Daarnaast is bij gemeenten
informatie beschikbaar omtrent gymlocaties.  Bovengenoemde gegevens
zijn omgezet in een experimentele Linked Dataset.  Deze Linked Dataset
is gemaakt door het Kadaster, gemeente Den Haag, en gemeente Rotterdam
tijdens een High5 in juli 2019.

Vervolgens is deze Linked Open Data gekoppeld aan bestaande Linked
Open Datasets.  Dit zijn de sets [Basisregistratie Adressen en
Gebouwen
(BAG)](https://www.pdok.nl/introductie/-/article/basisregistratie-adressen-en-gebouwen-ba-1)
en [Basisregistratie Topografie
(BRT)](https://www.pdok.nl/introductie/-/article/basisregistratie-topografie-brt-topnl).
In deze Data Story kijken we naar scholen en gymlocaties in de
gemeente Rotterdam en Den Haag.

## Scholen op de Kaart

<p>We beginnen met het weergeven van alle Rotterdamse scholen (<svg
height="18" viewBox="0 0 18 18"
xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" fill="blue"
r="9"></circle></svg>) en gymlocaties (<svg height="18" viewBox="0 0
18 18" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9"
fill="yellow" r="9"></circle></svg>) op de kaart.  Door op een van de
locaties te klikken worden de gegevens die bekend zijn weergeven.</p>

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/scholen-gymlocaties-3d">
</query>
<!--soortzaal,gem_afstand-->

## BAG bouwjaren

Gemeente houden zelf het bouwjaar van gymlocaties bij.  Het is
interessant om te weten in hoeverre de bouwjaren uit de gemeentelijke
administratie overeenkomen met de gegevens uit de BAG.  Onderstaande
grafiek toont het verschil tussen het BAG bouwjaar en het Haal
Centraal bouwjaar voor gymlocaties.  We zien in de grafiek dat het
bouwjaar voor veel gymlocaties correct is (verschil 0) en voor veel
gymlocaties afwezig is (verschil >1950).  Daar tussenin zitten
verschillen die interessant kunnen zijn vanuit het oogpunt van data
kwaliteit.

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/bouwjaar-bag-vs-gemeente">
</query>

## BAG oppervlakte

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/schoolgebouw-oppervlakte">
</query>

## Reisafstand

Wat moeten gemeenten doen om het busvervoer van leerlingen van scholen
naar gymlocaties te minimaliseren en de gymtijd te maximaliseren?  In
de volgende kaart is voor iedere schoollocatie de sportlocatie
weergeven en de reistijd te voet (blauwe lijn) of per bus (gele lijn).

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

## Prognoses 2040

Voor iedere school zijn de leerling prognoses tot 2040 bekend.  Omdat
we inzicht hebben in de huidige bezettingsgraad van gymlocaties kunnen
de toekomstige bezettingsgraad van gymlocaties weergeven.

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/Nieuw-ratio-calc">
</query>

## Scholen BRT

De [Basisregistratie
Topografie](https://www.pdok.nl/introductie/-/article/basisregistratie-topografie-brt-topnl)
bevat ook schoolgebouwen.  Onderstaande bevraging toont de Haal
Centraal
[schoollocaties](https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/browser?resource=https%3A%2F%2Fkadaster.triply.cc%2Fhaal-centraal%2Fscholen-sportlocaties%2Fvocab%2FSchoollocatie)
samen met de [BRT
scholen](https://www.pdok.nl/datamodel/-/article/basisregistratie-topografie-brt-topnl#School).

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/scholen-brt">
</query>

## Scholen Rotterdam

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/label-scholen">
</query>

## Gymzalen Rotterdam

<query data-config-ref="https://kadaster.triply.cc/haal-centraal/scholen-sportlocaties/queries/schoollocaties-gymlocaties">
</query>
