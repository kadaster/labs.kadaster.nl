---
layout: page
title: Use Case ― 3D Demonstrator
---

# Use Case: 3D Demonstrator

## Introductie

Sinds Juni 2020 stelt Kadaster als onderdeel van zijn service de 3D basisregistratie voor heel Nederland beschikbaar. Voor deze registratie wordt op basis van puntenwolken technologie in combinatie met dense matching een 3D representatie van Nederland gegenereerd. Hierbij combineren we de Topografie uit de Basisregistratie Grootschalige Topografie (bijv. water en wegen) met gebouwen uit de Basisregistratie Adressen & Gebouwen.

Recent zijn ook deze twee basisregistratie als Linked Data gepubliceerd (BAG en BGT). Dit betekent dat de 3D modellen die eerder door het Kadaster besteld zijn gesteld verrijkt kunnen worden met deze linked data bronnen en de Knowledge Graph die hier aan vast hangt.

In dit kader hebben Kadaster, NDW (Nationaal Dataportaal Wegverkeer) en CGI een samenwerking gestart om te laten zien wat er mogelijk is als verschillende databronnen vanuit verschillende domeinen in combinatie met 3D wordt gebruikt. Dit uit zich in een demonstrator die wij ook wel de 3D (mobiliteits-)demonstrator noemen. 

## Aanpak & Uitdagingen

In deze demonstrator richten we ons op een belangrijke use case voor het NDW. Met de data van het NDW wordt een scala aan maatschappelijke uitdagingen beetgepakt zoals stadsplanning, fileproblematiek of vraagstukken rondom verduurzaming. In deze specifieke use case richten we ons op de fileproblematiek binnen de ring van Rotterdam. Hierbij combineren we (lus-)data van het NDW (de gemeten snelheid van voortuigen over een wegsegment) met de wegen in de BGT. De impact van file (lage snelheden) op de omgeving wordt weergegeven door Kadaster en CBS data op de gebouwen te projecteren. Hiervoor gelden een aantal uitdagingen:

- Lusdata is niet per definitie gelinkt aan BGT wegen, maar aan NDW objecten die ook wegen beschrijven. Er moet dus een omzetting gebeuren om de BGT en NDW wegen bij elkaar te brengen. Ook moesten de NDW gegevens nog worden omgezet naar Linked Data.
- De 3D data die door het Kadaster beschikbaar wordt gesteld is intens gedetailleerd. Dit betekent echter ook dat het een flinke klap kan zijn op de performance van een demonstrator. Om die reden versimpelen we de 3D modellen van het Kadaster, zonder al te veel detail kwijt te raken.

## Resultaat & conclusies

Uiteindelijk levert deze exercisie een demonstrator op waarbij Linked Data en 3D gegevens perfect samenkomen. Een video van de demonstrator vindt je hieronder:

 <figure id="figuur-1">
  <video controls loop width="1200">
    <source src="/innovatie/3ddemonstrator/videos/Mobiliteits-Demonstrator.mp4" type="video/mp4">
      Helaas, uw browser kan deze video niet weergeven.
    </source>
  </video>
  <figcaption>
    Figuur 1 ― Video van de 3D Demonstrator.
  </figcaption>
</figure>

**Note**: Speelt de video niet goed af in de browser, dan kun je hem ook <a href="/innovatie/3ddemonstrator/videos/Mobiliteits-Demonstrator.mp4">hier</a> bekijken.

Hierbij leveren we de volgende conclusies voor de toekomst van 3D in samenhang met Linked data:

1. Het kan voor de 3D levering waardevol zijn een 'light' versie van de 3D basisregistratie beschikbaar te stellen met iets minder detail, zodat een developer / gebruiker er gemakkelijker mee kan werken.
2. Bij het leveren van de 3D data is het van essentieel belang een 'identifier' mee te geven naar de objecten waarvandaan de 3D data komt. Tegelijkertijd hoeven er geen additionele karakteristieken meegegeven te worden aan deze objecten. Middels de identifier kan deze data immers live (bij de bron) bevraagd en verrijkt worden.
3. Nu het fundament rond Linked Data steeds groter wordt en er meer en meer bronnen zijn die op een goede manier aan elkaar te relateren valt (als een echte Knowledge Graph) zijn de mogelijkheden voor een *Digital Twin* nagenoeg onbeperkt.
