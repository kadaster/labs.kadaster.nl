---
layout: page
title: Internships and Student Assignments
---
# Stage- en afstudeeropdrachten

<div class="textbox">
  If you are interested in internships/assignments at Kadaster, but Dutch is not your native language, please contact <a href="mailto:Erwin.Folmer@kadaster.nl">Erwin Folmer</a> for possibilities or see <a href="/assets/pdf/kadaster-thesis-assignments.pdf">this document</a> for a short summary of topics.
</div>

Een belangrijke voedingsbodem voor nieuwe initiatieven op onze labs omgeving is de samenwerking met Universiteiten en Hogescholen.  Het Data Science team bestaat uit Kadaster medewerkers, medewerkers van Partners en studenten.  Als Data Science team hebben wij tal van aantrekkelijke opdrachten op het gebied van Data Science die Kadaster helpen bij het slimmer maken van de organisatie en onze dienstverlening.  Ben jij een student WO- of HBO-niveau in een technische, geo of bedrijfskunde gerelateerde richting neem dan contact op met het Data Science team voor een inspirerende opdracht.  Via de Kadaster website kun je ook andere opdrachten vinden (Werken bij het Kadaster).

Ben je een ondernemende student en heb je een andere wens en/of idee voor een opdracht dan staat het Data Science team daar zeker voor open.  We formuleren graag samen met jou een opdracht die aansluit bij jouw ambitie/kennis/kunde en tevens relevant is voor het Kadaster Data Science team.

Hieronder een impressie van inhoudelijke thema's die de aandacht hebben van ons Data Science team en de basis vormen voor afstudeeropdrachten:

Enterprise Knowledge Graphs
: Wat is de toegevoegde waarde van de Knowledge Graphs voor Kadaster?

Gamification and Linked Data
: Hoe kunnen we met gamification principes volledigheid en/of kwaliteit van Kadaster data verbeteren?

Linken in Linked Data
: Hoe kunnen we op een efficiënte en effectieve manier gegevenssets koppelen?

GIS en Linked Data
: Hoe kan de GIS en Linked Data wereld elkaar versterken en wat betekent dit voor Kadaster?

SOLID
: Wat is de impact van het nieuwe concept voor het delen van privacygegevens (SOLID)?

BI en Linked Data
: Hoe maken BI-tools gebruik van Linked Data en op welke wijze versterken deze twee stromingen elkaar?

Triple Stores
: Wat is de impact van triple stores op het Kadaster landschap?  Denk hierbij aan Amazone Neptune, Oracle Spatial en andere graph databases.

Toerisme
: Hoe zouden we PDOK data kunnen inzetten voor vraagstukken rondom toerisme?

LinkDale
: Hoe kunnen we [LinkDale](http://linkdale.org) als leeromgeving verbeteren?

Bij interesse kun je meer informatie vragen door een e-mail te sturen naar Erwin Folmer ([Erwin.Folmer@kadaster.nl](mailto:Erwin.Folmer@kadaster.nl)) of direct solliciteren (CV + motivatie) in het Nederlands of Engels.

## Geo Expertise Center


Wij werken ook samen met andere afdelingen binnen het Kadaster.  Zie hieronder de mogelijkheid voor stage- en afstudeerprojecten bij het Geo Expertise Center.

De afdeling Maatwerk en Advies bestaat uit vier teams.  Één daarvan, het Geo Expertise Center, ontwikkelt nieuwe én innoveert bestaande geo-producten en tools, met name op het gebied van 3D, topografie, objectherkenning door middel van Deep Learning, EuroGeographics en Ruimtelijke Plannen.

### 3D

Bij het 3D-project vervaardigen we een actueel 3D-model van Nederland. Hierbij maken we de buitenwereld zo goed mogelijk na in een computermodel. Denk aan gebouwen, wegen, bomen etcetera. Dit model is geschikt  voor visualisatiedoeleinden, maar bijvoorbeeld ook voor geluidsberekeningen. Voor het maken van het 3D-model gebruiken we diverse producten: BGT, BAG, Top10NL en ons eigen hoogtemodel (puntenwolk). Deze puntenwolk maken we door middel van dense matching en kunnen we jaarlijks updaten. Ook gebruiken we hoogtemodellen die met andere technieken, zoals LIDAR, zijn vervaardigd.

Vragen die bij ons rondom dit onderwerp spelen:
- Wat is de kwaliteit van het 3D-model?
- Wat zijn de verschillen tussen hoogtemodellen die op basis van dense matching en LIDAR zijn gemaakt en hoe kunnen we ze zo optimaal mogelijk combineren?
- Welke datasets en technieken kunnen we gebruiken voor het optimaliseren van het 3D-model (binnen en buiten gebouwen)? Denk bijvoorbeeld aan BIMs en ondergrondkaarten.
- Welke mogelijkheden bieden UAV’s (Unmanned Aerial Vehicles) voor hoogtemodellen en wat is de kwaliteit ervan?
- Hoe verschillen de hoogtemodellen als je verschillende percentages overlap gebruikt bij luchtfoto’s (met name bij dakreconstructies)?


### Objectherkenning met deep learning

Bij objectherkenning zijn we op zoek naar specifieke elementen op luchtfoto’s, zoals groen in tuinen, wegen, gebouwen en water. Eerder werden hiervoor segmentatieprogramma’s gebruikt, waarbij we elke keer nieuwe parameters moesten opgegeven om de juiste objecten te vinden. Vanwege de diversiteit in luchtfoto’s is dit op grote schaal vrij lastig te doen. Sinds 2018 segmenteren we beelden met Deep Learning methoden. We gebruiken verschillende methoden die we hebben aangepast om met onze eigen data (RGB + CIR luchtfoto’s, PAN, AHN3 en ons eigen hoogtemodel) te kunnen werken. Ook creëren we extra data door RGB om te zetten in andere kleurruimten en CIR om de NDVI te bepalen.
Vragen die bij ons rondom dit onderwerp spelen:

Vragen die bij ons rondom dit onderwerp spelen:
- Welke objectherkenningsalgoritmes zijn er beschikbaar binnen Deep Learning en wat zijn de specifieke kenmerken van en verschillen tussen de algoritmen?
- Welke algoritmes zijn geschikt voor toepassing op onze beelden en welk type objecten zouden we daar mee kunnen detecteren?
- Wat kunnen we aanpassen aan bestaande algoritmes om betere resultaten te krijgen?
- Wat kunnen we met Change Detection algoritmen?
- Kunnen we onze puntenwolk (hoogtemodel) nog verbeteren met Deep Learning?

### EuroGeographics

EuroGeographics is het Europese samenwerkingsverband voor kadasters en topografische diensten in Europa. De deelnemende landen werken samen aan een aantal Europese producten waaronder de EuroRegionalMap (ERM). Dit is een topografische dataset met een schaal van 1:250.000. Het Kadaster is één van de vijf coördinatoren binnen het ERM-project en verzorgt daarnaast het kwaliteitsmanagement. Hierbij ligt de nadruk op het ontwikkelen van een validatietool waarmee alle ERM-data wordt gecontroleerd.

Vragen die bij ons rondom dit onderwerp spelen:
- Wat is de kwaliteit van de ERM dataset en hoe is deze veranderd na de invoering van de validatietool?
- Hoe kunnen we de kwaliteit van de ERM dataset verbeteren?
- Hoe kunnen we de edge matching tussen landen verbeteren?
- Hoe kunnen we de validatietool verder ontwikkelen?  Denk bijvoorbeeld aan het geschikt maken voor ArcGIS Pro, Open Source, het omgaan met false positives en de visualisatie van fouten.
- Hoe kunnen we een terugmeldsysteem opzetten zodat gebruikers van de data kunnen helpen om de kwaliteit van de data te verbeteren?

### Ruimtelijke plannen

Kadaster is samen met Geonovum verantwoordelijk voor de Landelijke Voorziening Ruimtelijke Plannen. Hier zijn bestemmingsplannen, structuurvisies en algemene regels te vinden die door gemeenten, provincies en het Rijk gemaakt zijn. Door de inwerkingtreding van de Omgevingswet in 2021 zullen deze plannen uiteindelijk onder het Digitaal Stelsel Omgevingswet (DSO) vallen. Binnen ons team ontsluiten we de data van Ruimtelijkeplannen.nl om interne en externe maatwerkvragen te beantwoorden. Zo kunnen we een koppeling maken tussen de ruimtelijke plannen en andere data, bijvoorbeeld de BAG of hoogtedata. Dit doen we door modellen op te stellen en deze op de data los te laten.

Vragen die bij ons rondom dit onderwerp spelen:
- Welke modellen kunnen we opstellen om veelvoorkomende vragen makkelijker te kunnen beantwoorden?
- Wat zijn de verschillen in het datamodel tussen Ruimtelijkeplannen.nl en het DSO?
- Hoe gaan we om met de overgangssituatie van Ruimtelijkeplannen.nl naar het DSO en hoe kunnen we de data uit beide platforms op een goede manier combineren?

### Interesse?
Heb je interesse in één of meerdere van deze onderwerpen van het Geo Expertise Center? Stuur dan een e-mail naar Diede Nijmeijer ([diede.nijmeijer@kadaster.nl](mailto:diede.nijmeijer@kadaster.nl) of Vincent van Altena ([vincent.altenavan@kadaster.nl](mailto:vincent.altenavan@kadaster.nl)). Natuurlijk zijn eigen ideeën ook altijd welkom!



## Hackathon

Elk jaar in december organiseert het Kadaster Data Science team ― in
samenwerking met Universiteit Twente ― een hackathon rondom open
kadastrale data. Neem contact op met <a
href="mailto:Erwin.Folmer@kadaster.nl">Erwin Folmer</a> als je hieraan
wil deelnemen.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yak9OTOrxNU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe>
