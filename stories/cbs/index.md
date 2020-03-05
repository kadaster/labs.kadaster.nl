---
layout: story
title: CBS/Kadaster Data Story
---

<h1>CBS/Kadaster Data Story</h1>

<h2>Gemeente uitzoeken</h2>

We zijn op zoek naar een geschikte locatie in de Randstad om te gaan wonen. We denken aan Gouda, Waddinxveen, of Zoetermeer, want dat ligt in de buurt van ons werk. De afstand tot een kinderdagverblijf is heel belangrijk, en de afstand tot een school is ook belangrijk, maar in mindere mate. Op basis van de CBS Wijk- en Buurtkaart vergelijken we deze drie gemeenten op basis van deze twee criteria:

<query data-config-ref="https://data.pldn.nl/cbs/-/queries/kadaster-cbs-1">
</query>

We zien dat Zoetermeer als beste uit de bus komt, dus laten we eens
kijken of we want meer over Zoetermeer te weten kunnen komen.

<h2>Bevolkingssamenstelling in Zoetermeer</h2>

Laten we eens kijken naar de bevolkingssamenstelling in Zoetermeer
naar leeftijdscategorie. We kunnen dit per wijk opvragen, samen met
het landelijk gemiddelde:

<query data-config-ref="https://data.pldn.nl/cbs/-/queries/kadaster-cbs-2">
</query>

<h2>Gemiddelde woningwaarde in Zoetermeer</h2>

Wat is de gemiddelde woningwaarde per buurt in Zoetermeer? Op
onderstaande kaart loopt de schaal van blauw (goedkoper), naar geel
(gemiddeld), naar rood (duurder).

<query data-config-ref="https://data.pldn.nl/cbs/-/queries/kadaster-cbs-3">
</query>

We zien dat het stadscentrum van Zoetermeer relatief goedkoop is.
Laten we daar eens verder gaan kijken.

<h2>Stadscentrum Zoetermeer</h2>

We zoomen in op het stadscentrum van Zoetermeer (buurt <a
href="http://betalinkeddata.cbs.nl/regios/2016/id/buurt/BU06370002">BU06370002</a>).
Naast informatie uit de CBS Wijk- en Buurtkaart tonen we nu ook
informatie uit de Basisregistratie Gebouwen (BAG). De kleuren geven
de bouwjaren van de gebouwen weer: van blauw (ouder), naar rood
(nieuwer).

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/knowledge-graph/queries/kadaster-cbs-4">
</query>

<h2>Toegankelijkheid voorzieningen</h2>

Laten we ten slotte nog even terugkeren naar de reden waarom we in
Zoetermeer zijn gaan kijken: de goede toegankelijkheid van
voorzieningen zoals kinderdagopvang en scholen. Laten we daar nog de
toegankelijkheid van huisartsen en supermarkten aan toevoegen. Welke
buurt in Zoetermeer biedt de beste toegang tot deze voorzieningen? De
kleuren op de kaart lopen nu van donkerblauw (dicht bij), via
lichtblauw en geel (iets minder dicht bij), naar rood (ver weg).

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/knowledge-graph/queries/kadaster-cbs-5">
</query>

<h2>Appendix</h2>

Hierboven hebben we een aantal eigenschappen uit de CBS Wijk- en
Buurtkaart bevraagd, soms in combinatie met data van het Kadaster.
Hieronder volgt een volledige lijst van eigenschappen die in deze
dataset beschikbaar is, samen met het aantal observaties per
eigenschap.

<table class="table">
  <thead>
    <tr><th>Statistic</th><th>№ observations</th></tr>
  </thead>
  <tbody>
    <tr><td>bevolking_AantalInwoners</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Gehuwd</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Gescheiden</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Ongehuwd</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Verweduwd</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_GeboorteRelatief</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_GeboorteTotaal</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_SterfteRelatief</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_SterfteTotaal</td><td>16194</td></tr>
    <tr><td>bevolking_Geslacht_Mannen</td><td>16194</td></tr>
    <tr><td>bevolking_Geslacht_Vrouwen</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_0Tot15Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_15Tot25Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_25Tot45Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_45Tot65Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_65JaarOfOuder</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_Eenpersoonshuishoudens</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_HuishoudensMetKinderen</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_HuishoudensTotaal</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_HuishoudensZonderKinderen</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Bedrijfsmotorvoertuigen</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Motorfietsen</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_sTotaal</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Brandstoftype_Personenauto_s_BrandstofBenzine</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Brandstoftype_Personenauto_s_OverigeBrandstof</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Leeftijd_Personenauto_s_6JaarEnOuder</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Leeftijd_Personenauto_s_JongerDan6Jaar</td><td>16194</td></tr>
    <tr><td>oppervlakte_OppervlakteLand</td><td>16194</td></tr>
    <tr><td>oppervlakte_OppervlakteTotaal</td><td>16194</td></tr>
    <tr><td>oppervlakte_OppervlakteWater</td><td>16194</td></tr>
    <tr><td>wonen_Woningvoorraad</td><td>16194</td></tr>
    <tr><td>stedelijkheid_MateVanStedelijkheid</td><td>16134</td></tr>
    <tr><td>stedelijkheid_Omgevingsadressendichtheid</td><td>16134</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenTotaal</td><td>15998</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_GemiddeldeHuishoudensgrootte</td><td>15882</td></tr>
    <tr><td>bevolking_Bevolkingsdichtheid</td><td>15596</td></tr>
    <tr><td>nabijheidVoorzieningen_AfstandTotGroteSupermarkt</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_AfstandTotHuisartsenpraktijk</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_AfstandTotKinderdagverblijf</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_Basisonderwijs_AfstandTotSchool</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_Basisonderwijs_ScholenBinnen3Km</td><td>15520</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_GemiddeldElektriciteitsverbruikTotaal</td><td>15033</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_GemiddeldAardgasverbruikTotaal</td><td>14847</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarEigendom_EigenWoning</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Ao</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Aow</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Bijstand</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Ww</td><td>14814</td></tr>
    <tr><td>wonen_WoningenNaarBewoning_PercentageBewoond</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarBewoning_PercentageOnbewoond</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarBouwjaar_BouwjaarVanaf2000</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarBouwjaar_BouwjaarVoor2000</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarType_PercentageEengezinswoning</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarType_PercentageMeergezinswoning</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_EigendomOnbekend</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Huurwoningen_HuurwoningenTotaal</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Huurwoningen_InBezitOverigeVerhuurders</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Huurwoningen_InBezitWoningcorporatie</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Koopwoningen</td><td>14721</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarEigendom_EigenWoning</td><td>14624</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_ALandbouw_BosbouwEnVisserij</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_B-fNijverheidEnEnergie</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_G_p_IHandelEnHoreca</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_H_p_JVervoer_InformatieEnCommunicatie</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_K-lFinancieleDiensten_OnroerendGoed</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_M-nZakelijkeDienstverlening</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_R-uCultuur_Recreatie_OverigeDiensten</td><td>13896</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_sNaarOppervlakte</td><td>13268</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_sPerHuishouden</td><td>13268</td></tr>
    <tr><td>wonen_GemiddeldeWoningwaarde</td><td>13018</td></tr>
    <tr><td>postcode_Dekkingspercentage</td><td>12766</td></tr>
    <tr><td>postcode_MeestVoorkomendePostcode</td><td>12766</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_VrijstaandeWoning</td><td>12694</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_VrijstaandeWoning</td><td>12595</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarEigendom_Huurwoning</td><td>12439</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarEigendom_Huurwoning</td><td>12223</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Twee-onder-een-kap-woning</td><td>11159</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Twee-onder-een-kap-woning</td><td>11027</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Tussenwoning</td><td>10524</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Tussenwoning</td><td>10334</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Hoekwoning</td><td>10270</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Hoekwoning</td><td>10094</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Appartement</td><td>9099</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Appartement</td><td>8908</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_PercentageWoningenMetStadsverwarming</td><td>866</td></tr>
  </tbody>
</table>
