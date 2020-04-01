---
banner: /assets/images/bag-in-lod-cloud.png
layout: story
title: PDOK Knowledge Graph
---

<h1>PDOK Knowledge Graph</h1>

<p>In deze Data Story bevragen we de Knowledge Graph, en in het bijzonder de combinaties in datasets.  We laten daarmee de toegevoegde waarde van een Knowledge Graph zien.</p>

<h2>Casus 1: Mogelijkheden voor projectontwikkeling</h2>

<p>We willen dat er meer huizen worden verkocht.  Één manier om dat voor elkaar te krijgen is door meer huizen te bouwen.  Buitenstedelijk bouwen is echter lastig: dit tast groen aan en is mogelijk minder duurzaam.  Randstedelijk en binnenstedelijk bouwen is ook lastig, want vaak moeten bestaande woningen eerst worden afgebroken alvorens verbeterde nieuwbouw kan worden gepleegd.  Daarom deze Data Story: we combineren data uit verschillende PDOK bronnen en gebruiken de PDOK Knowledge Graph om te zoeken naar die plekken in Nederland waar de meeste potentie voor projectontwikkeling is.</p>

<h3>Bevraging 1A: Vind een geschikte buurt</h3>

<p>We beginnen te zoeken naar buurten in Nederland waar de omstandigheden gunstig zijn voor verbeterde nieuwbouw.  Het CBS houdt gedetailleerde statistieken bij van alle Nederlandse buurten.  We beginnen met het in beeld brengen van alle buurten waar matige stedelijkheid is: daarmee sluiten we groengebieden waar niet gebouwd mag worden en sterk stedelijke gebieden waar niet gebouwd kan worden uit.</p>

<div class="textbox">
  <h2>Probeer het uit</h2>
  <p>Op deze kaart zijn de kandidaat buurten gegroepeerd weergegeven.  Door op de met getallen aangeduide groepen te klikken worden de buurten binnen die groepering zichtbaar gemaakt.  Op het laagste niveau worden de individuele buurten zichtbaar.  Door op deze buurten te klikken kan de naam van de buurten getoond worden.</p>
</div>

<query data-config-ref="https://data.pldn.nl/cbs/-/queries/pdok-kg-1">
</query>

<h3>Bevraging 1B: Voeg meer criteria toe</h3>

<p>Laten we hier nog enkele zoekcriteria aan toevoegen:</p>

<ul>
  <li>De buurt moet woningen met een lage gemiddelde woningwaarde bevatten.</li>
  <li>De buurt moet een relatief hoge woningvoorraad hebben.</li>
  <li>De buurt moet woningen bevatten die vóór 2000 gebouwd zijn.</li>
</ul>

<p>Wanneer we alle buurten in Nederland op basis van deze criteria sorteren komen de volgende buurten boven drijven:</p>

<query data-config-ref="https://data.pldn.nl/cbs/-/queries/pdok-kg-2">
</query>

<h3>Bevraging 1C: Kandidaat buurten in Dordrecht</h3>

<p>Twee van de kandidaat buurten blijken in Dordrecht te liggen, dus laten we daar eens verder kijken.  Dit zijn de buurten in Dordrecht met in de weergave hun gemiddelde woningwaardes.  Deze waardes zijn afkomstig van het Centraal Bureau van de Statistiek (CBS).</p>

<div class="textbox">
  <h2>Probeer het uit</h2>
  <p>In deze 3D omgeving zijn de kandidaat buurten weergegeven.  De hoogte en kleur van de buurten duidt de hoogte van de gemiddelde woningwaarde aan.  Door op de 3D objecten te klikken wordt de naam van de buurt getoond samen met de gemiddelde woningwaarde voor die buurt.  Navigatie binnen de 3D omgeving functioneert door gebruik te maken van de muis en de <kbd>Ctrl</kbd> toets.</p>
</div>

<query data-config-ref="https://data.pldn.nl/cbs/-/queries/pdok-kg-3">
</query>

<h3>Bevraging 1D: BAG panden die aan de criteria voldoen</h3>

<p>Dan gecombineerd met BAG panden van vóór 1970, WOZ waarde in de
laagste klasse (t/m € 150.000,-), en energielabel D of hoger.  De
‘hete’ deleten van de kaart duiden aan waar de potentie het hoogst is.

<div class="textbox">
  <h2>Probeer het uit</h2>
  <p>Deze heatmap maakt in één oogopslag duidelijk waar de meeste
  kandidaat panden gelokaliseerd zijn.  Het is ook mogelijk om
  dezelfde informatie op andere manieren te visualiseren, bijvoorbeeld
  door de editor te openen en weergave optie “Gallery” te kiezen.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/knowledge-graph-1d"
</query>

<h2>Casus 2: Herbenutten van schoolgebouwen</h2>

<p>Een andere mogelijkheid voor het realiseren van nieuwe woningen
zijn leegstaande schoolgebouwen.</p>

<h3>Bevraging 2A: BAG panden met onderwijsfunctie door de tijd heen</h3>

<p>Het volgende diagram toont een overzicht van het aantal BAG panden
met een onderwijsfunctie, geteld per jaar en per status categorie.  We
zien dat de afgelopen jaren een groot aantal BAG panden met een
onderwijsfunctie van status is veranderd.</p>

<query data-config="https://stories.triply.cc/kadaster/pdok-kg/#query=prefix%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20begrip%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fid%2Fbegrip%2F%3E%0Aselect%0A%20%20(str(%3Fyear)%20as%20%3Fx)%0A%20%20%3FbouwGestart%20(str(%3FbouwGestart)%20as%20%3FbouwGestartLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FbouwGestart)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22bouw%20gestart%22.')%20as%20%3FbouwGestartHover)%0A%20%20%3FbouwvergunningVerleend%20(str(%3FbouwvergunningVerleend)%20as%20%3FbouwvergunningVerleendLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FbouwvergunningVerleend)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22bouwvergunning%20verleend%22.')%20as%20%3FbouwvergunningVerleendHover)%0A%20%20%3FpandInGebruik%20(str(%3FpandInGebruik)%20as%20%3FpandInGebruikLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FpandInGebruik)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22pand%20in%20gebruik%22.')%20as%20%3FpandInGebruikHover)%0A%20%20%3FpandInGebruikNietIngemeten%20(str(%3FpandInGebruikNietIngemeten)%20as%20%3FpandInGebruikNietIngemetenLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FpandInGebruikNietIngemeten)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22pand%20in%20gebruik%2C%20niet%20ingemeten%22.')%20as%20%3FpandInGebruikNietIngemetenHover)%0A%20%20%3FsloopvergunningVerleend%20(str(%3FsloopvergunningVerleend)%20as%20%3FsloopvergunningVerleendLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FsloopvergunningVerleend)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22sloopvergunning%20verleend%22.')%20as%20%3FsloopvergunningVerleendHover)%0A%7B%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FbouwGestart0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3ABouwGestart.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FbouwvergunningVerleend0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3ABouwvergunningVerleend.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FpandInGebruik0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3APandInGebruik.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FpandInGebruikNietIngemeten0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3APandInGebruik_nietIngemeten.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FsloopvergunningVerleend0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3ASloopvergunningVerleend.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20bind(if(bound(%3FbouwGestart0)%2C%3FbouwGestart0%2C0)%20as%20%3FbouwGestart)%0A%20%20bind(if(bound(%3FbouwvergunningVerleend0)%2C%3FbouwvergunningVerleend0%2C0)%20as%20%3FbouwvergunningVerleend)%0A%20%20bind(if(bound(%3FpandInGebruik0)%2C%3FpandInGebruik0%2C0)%20as%20%3FpandInGebruik)%0A%20%20bind(if(bound(%3FpandInGebruikNietIngemeten0)%2C%3FpandInGebruikNietIngemeten0%2C0)%20as%20%3FpandInGebruikNietIngemeten)%0A%20%20bind(if(bound(%3FsloopvergunningVerleend0)%2C%3FsloopvergunningVerleend0%2C0)%20as%20%3FsloopvergunningVerleend)%0A%7D%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22dataTable%22%3A%7B%22cols%22%3A%5B%7B%22id%22%3A%22%22%2C%22label%22%3A%22x%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwGestart%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwGestartLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwGestartHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwvergunningVerleend%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwvergunningVerleendLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwvergunningVerleendHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruik%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikNietIngemeten%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikNietIngemetenLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikNietIngemetenHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22sloopvergunningVerleend%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22sloopvergunningVerleendLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22sloopvergunningVerleendHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%5D%2C%22rows%22%3A%5B%7B%22c%22%3A%5B%7B%22v%22%3A%222010%22%7D%2C%7B%22v%22%3A5%7D%2C%7B%22v%22%3A%225%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%205%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A7%7D%2C%7B%22v%22%3A%227%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%207%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A54%7D%2C%7B%22v%22%3A%2254%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%2054%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A4%7D%2C%7B%22v%22%3A%224%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%204%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A9%7D%2C%7B%22v%22%3A%229%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%209%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222011%22%7D%2C%7B%22v%22%3A15%7D%2C%7B%22v%22%3A%2215%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2015%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A12%7D%2C%7B%22v%22%3A%2212%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2012%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A49%7D%2C%7B%22v%22%3A%2249%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2049%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A7%7D%2C%7B%22v%22%3A%227%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%207%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A13%7D%2C%7B%22v%22%3A%2213%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2013%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222012%22%7D%2C%7B%22v%22%3A14%7D%2C%7B%22v%22%3A%2214%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%2014%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A8%7D%2C%7B%22v%22%3A%228%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%208%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A45%7D%2C%7B%22v%22%3A%2245%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%2045%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A17%7D%2C%7B%22v%22%3A%2217%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%2017%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A8%7D%2C%7B%22v%22%3A%228%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%208%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222013%22%7D%2C%7B%22v%22%3A7%7D%2C%7B%22v%22%3A%227%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%207%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A3%7D%2C%7B%22v%22%3A%223%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%203%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A40%7D%2C%7B%22v%22%3A%2240%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%2040%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A18%7D%2C%7B%22v%22%3A%2218%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%2018%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A4%7D%2C%7B%22v%22%3A%224%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%204%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222014%22%7D%2C%7B%22v%22%3A1%7D%2C%7B%22v%22%3A%221%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%201%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A2%7D%2C%7B%22v%22%3A%222%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%202%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A40%7D%2C%7B%22v%22%3A%2240%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%2040%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A9%7D%2C%7B%22v%22%3A%229%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%209%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A0%7D%2C%7B%22v%22%3A%220%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%200%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%5D%7D%2C%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22curveType%22%3A%22%22%2C%22booleanRole%22%3A%22certainty%22%2C%22lineWidth%22%3A2%2C%22series%22%3A%7B%220%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%221%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%222%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%223%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%224%22%3A%7B%22hasAnnotations%22%3Atrue%7D%7D%2C%22legend%22%3A%22right%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3A%5B0%2C1%2C%7B%22sourceColumn%22%3A2%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22bouwGestartLabel%22%7D%2C%7B%22sourceColumn%22%3A3%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22bouwGestartHover%22%7D%2C4%2C%7B%22sourceColumn%22%3A5%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22bouwvergunningVerleendLabel%22%7D%2C%7B%22sourceColumn%22%3A6%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22bouwvergunningVerleendHover%22%7D%2C7%2C%7B%22sourceColumn%22%3A8%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22pandInGebruikLabel%22%7D%2C%7B%22sourceColumn%22%3A9%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22pandInGebruikHover%22%7D%2C10%2C%7B%22sourceColumn%22%3A11%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22pandInGebruikNietIngemetenLabel%22%7D%2C%7B%22sourceColumn%22%3A12%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22pandInGebruikNietIngemetenHover%22%7D%2C13%2C%7B%22sourceColumn%22%3A14%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22sloopvergunningVerleendLabel%22%7D%2C%7B%22sourceColumn%22%3A15%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22sloopvergunningVerleendHover%22%7D%5D%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22LineChart%22%7D%7D"
       data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="scholen-bag-mutaties-diagram.rq"
       data-output="gchart">
</query>

<h3>Bevraging 2B: Mutaties voor BAG panden met onderwijsfunctie</h3>

<p>We kunnen deze panden op de kaart zetten, samen met hun recente
mutaties volgens de BAG, en in relatie tot hun bijbehorende perceel
volgens de BRK.  Dit laatste is van belang omdat het laat zien hoeveel
bouwgrond er mogelijk vrij zou kunnen komen wanneer een voormalig
schoolgebouw vrijkomt voor nieuwbouw.</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/knowledge-graph-2b">
</query>

<h3>Bevraging 2C: BRT school én BAG pand met onderwijsfunctie</h3>

<p>De BRT bevat ook schoolgebouwen, maar deze set is onvolledig.
Slechts één van de BAG panden met een onderwijsfunctie komt ook als
zodanig in de BRT voor.</p>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/knowledge-graph-2c">
</query>

<h2>Casus 3: Energielabel verplichting kantoren</h2>

<p>Vanaf 2023 moet ieder kantoorpand in Nederland met een oppervlakte
groter dan 100 m² minimaal energielabel C hebben.  Een kantoor dat per
1 januari 2023 energielabel E of slechter heeft mag dan niet meer als
zodanig worden gebruikt.  Deze bepaling is een wijziging van het
Bouwbesluit 2012 en is op 2 november
<!-- 2018 <a href="https://zoek.officielebekendmakingen.nl/stb-2018-380.html"
target="_blank">gepubliceerd in het Staatsblad</a>. -->

<table class="txt table" style='width:50%'>
  <thead>
    <tr><th>Kleur</th><th>Energielabel</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#22b14c"></circle>
      </svg>
      </td>
      <td>A, A+, A++, A+++</td>
    </tr>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#8ff334"></circle>
      </svg>
      </td>
      <td>B</td>
    </tr>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#bdfc2c"></circle>
      </svg>
      </td>
      <td>C</td>
    </tr>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#fff200"></circle>
      </svg>
      </td>
      <td>D</td>
    </tr>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#ff9a35"></circle>
      </svg>
      </td>
      <td>E</td>
    </tr>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#ff7f27"></circle>
      </svg>
      </td>
      <td>F</td>
    </tr>
    <tr>
      <td>
      <svg width="18px" height="18px">
        <circle cx="9" cy="9" r="9" stroke="black" fill="#ed1c24"></circle>
      </svg>
      </td>
      <td>G</td>
    </tr>
  </tbody>
</table>

<p>Soms bevinden zich in één pand meerdere kantoren, die mogelijk
verschillende energielabels hebben.  In dat geval is de kleur van het
pand bepaald door het slechtste enrgielabel dat binnen dat pand
aanwezig is.</p>

<div class="textbox">
  <h2>Probeer het uit</h2>
  <p>Door op de panden te klikken wordt een overzicht getoond van de
  kantoren en daarbij behorende energielabels binnen dat pand.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster/-/queries/knowledge-graph-3">
</query>
