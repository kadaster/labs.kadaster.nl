---
banner: /assets/images/bag-in-lod-cloud.png
layout: page
title: Use Case ― PDOK Knowledge Graph
---
# Use Case: PDOK Knowledge Graph

Om het belang van verbonden data duidelijk te maken, en daarmee het belang van een Knowledge Graph, hebben we datasets experimenteeel met elkaar verbonden en vervolgens gebruiken we die in zowel een Data Story als een Demonstrator.  De datasets die we met elkaar verbonden hebben staan weergegeven in [Figuur 1](#figuur-1).  [Figuur 2](#figuur-2) geeft in meer detail aan hoe de koppelingen tussen de datasets te leggen zijn.  De Knowledge Graph is experimenteel en hopelijk als opmaat om uiteindelijk een Geo/Kadaster/PDOK Knowledge Graph te kunnen bouwen.  De ontwikkelde Demonstrator is een zogenaamde Instance Browser; je begint bij 1 object en gaat vervolgens de Graph door browsen om steeds meer informatie uit verschillende bronnen erbij te halen. Deze demonstrator is niet online beschikbaar.

<figure id="figuur-1">
  <a href="/assets/images/pdok-kg-simplified.jpg">
    <img src="/assets/images/pdok-kg-simplified.jpg">
  </a>
  <figcaption>
    Figuur 1 ― Overzicht van de datasets die in de PDOK Knowledge Graph met elkaar verbonden zijn.
  </figcaption>
</figure>

<figure id="figuur-2">
  <div style="width:2000px">
    <img src="/assets/images/pdok-kg.png" usemap="#imgmap">
      <map name="imgmap">
        <area shape="rect" coords="745.00583657587532,661.67295622079258,945.0058365758753,701.6729562207926" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbag-adresseerbaarObject">
        <area shape="rect" coords="934.67615313923737,577.31595232974208,1134.6761531392374,617.3159523297421" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbag-nummeraanduiding">
        <area shape="rect" coords="745.00583657587537,836.57567995620148,945.0058365758754,876.5756799562015" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbag-openbareRuimte">
        <area shape="rect" coords="383.06225680933847,835.62820913908048,583.0622568093385,875.6282091390805" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbag-pand">
        <area shape="rect" coords="1093.77042801556407,836.57567995620148,1293.770428015564,876.5756799562015" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbag-woonplaats">
        <area shape="rect" coords="1712.67898832684837,277.00174999511174,1912.6789883268484,317.00174999511177" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbbi-gemeente">
        <area shape="rect" coords="509.51912285161234,221.05775961519658,709.5191228516123,261.0577596151966" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrk-appartement">
        <area shape="rect" coords="1339.85408560311287,277.00174999511174,1539.854085603113,317.00174999511177" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrk-gemeentegebied">
        <area shape="rect" coords="1093.77042801556397,91.79357878888607,1293.770428015564,131.79357878888607" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrk-kadastraleGemeente">
        <area shape="rect" coords="634.47460062960707,118.02887980759829,782.3740981170442,158.0288798075983" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrk-onroerendeZaak">
        <area shape="rect" coords="745.00583657587537,492.95894843869153,945.0058365758754,532.9589484386916" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrk-perceel">
        <area shape="rect" coords="15,835.62820913908058,215,875.6282091390806" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrt-gebouw">
        <area shape="rect" coords="1219.85408560311287,587.86945427526748,1419.854085603113,627.8694542752675" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fbrt-gemeente">
        <area shape="rect" coords="1624.71984435797677,836.57567995620148,1824.7198443579769,876.5756799562015" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fcbs-buurt">
        <area shape="rect" coords="1624.71984435797677,543.26634143480081,1824.7198443579769,583.2663414348008" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fcbs-gemeente">
        <area shape="rect" coords="1624.71984435797677,689.92101069550118,1824.7198443579769,729.9210106955012" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fcbs-wijk">
        <area shape="rect" coords="745.00583657587537,15,945.0058365758754,55" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fceo-perceel">
        <area shape="rect" coords="360.30738321960007,15,560.3073832196001,55" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fceo-rijksmonument">
        <area shape="rect" coords="213.81128404669255,661.67295622079258,413.81128404669255,701.6729562207926" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fnen3610-gebouw">
        <area shape="rect" coords="213.81128404669255,214.055684551160458,413.81128404669255,254.05568455116045" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fnen3610-planologischGebied">
        <area shape="rect" coords="1093.77042801556397,492.95894843869153,1293.770428015564,532.9589484386916" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fnen3610-registratiefGebied">
        <area shape="rect" coords="1712.67898832684837,91.79357878888607,1912.6789883268484,131.79357878888607" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fowms-Gemeente">
        <area shape="rect" coords="947.21886670707657,292.37626361378881,1122.1334395713982,332.3762636137888" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fowms-kadastraleGemeente">
        <area shape="rect" coords="213.81128404669255,303.58248929472262,413.81128404669255,343.5824892947226" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fro-bestemmingsvlak">
        <area shape="rect" coords="213.81128404669255,409.27176739729785,413.81128404669255,449.2717673972978" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Frvo-energielabel">
        <area shape="rect" coords="213.81128404669255,528.34298437713848,413.81128404669255,568.3429843771385" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Frvo-woning">
        <area shape="rect" coords="213.81128404669258,111.52887980759829,413.81128404669255,164.5288798075983" href="http://linkeddata.ordina.nl/pdkg/query/shape?subject=http%3A%2F%2Fdata.pdok.nl%2Fdef%2Fkkg%2Fwoz-object">
      </map>
    </div>
  </a>
  <figcaption>
    Figuur 2 ― Gedetailleerd overzicht van de verbindingen tussen concepten, zoals gebruikt binnen de PDOK Knowledge Graph.
  </figcaption>
</figure>

<div class="cards-wrapper">
  <a href="/stories/pdok-knowledge-graph/">
    <div class="card">
      <div class="card-type">Story</div>
      <img class="card-image" src="/assets/images/kadaster-logo.png">
      <div class="card-title">PDOK Knowledge Graph</div>
      <div class="card-description">In deze Data Story bevragen we combinaties van datasets.  Hiermee laten we de toegevoegde waarde van een Knowledge Graph zien.</div>
    </div>
  </a>
  <a href="http://linkeddata.ordina.nl/pdkg/resource?subject=https%3A%2F%2Flinkeddata.cultureelerfgoed.nl%2Fcho-kennis%2Fid%2Frijksmonument%2F19157">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/bag-in-lod-cloud.png">
      <div class="card-title">PDOK Knowledge Graph Browser</div>
      <div class="card-description"></div>
    </div>
  </a>
</div>
