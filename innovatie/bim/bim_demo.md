---
layout: page
title: Use Case ― 3D Demonstrator
---

# Use Case: BIM Demonstrator

 De viewer is een webpagina die is samengesteld uit gegevens die het resultaat zijn van bevragingen van de PostGIS database. Voor de geometrie is daarbij gebruik gemaakt van de ondersteuning van het X3D-formaat. De resulterende viewer bestaat daarmee uit een zelfstandig HTML-bestand. In de viewer kan zowel 2D als 3D gekeken worden naar het voorbeeldbouwwerk uit het IFC-bestand. Zichtbaar in eerste instantie zijn de vloerplaten en ruimten van het bouwwerk. Aan de rechterkant worden eigenschappen van het bouwwerk weergegeven. Deze zijn onder meer resultaat van de verrijking zoals aangebracht in Revit. Zo is onder meer zichtbaar dat er een georeferentie aanwezig is in het IfcSite object, dat er referenties naar BAG en BRK zijn opgenomen bij de IfcBuilding en dat er BBL-specifieke eigenschappen zijn toegevoegd.

<div class="cards-wrapper">
  <a href="/demonstrators/bimdemo">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/bimdemo.PNG">
      <div class="card-title">BIM Demo</div>
      <div class="card-description">Bekijk een 3D BIM model en diens relaties naar de basisregistraties. </div>
    </div>
  </a>
</div>

Voor een RO-toets is een confrontatie van de contouren van het bouwwerk met de contouren uit ruimtelijke plannen en de kadastrale registratie relevant. In de ontwikkelde viewer zijn deze contouren voor de locatie van het voorbeeldbouwwerk zichtbaar gemaakt. Deze zijn op handmatige wijze verkregen uit de relevante administraties. Figuur 17 geeft het resultaat weer. De contour van het bouwwerk is weergegeven in het rood. In geel is het kadastrale perceel weergeven. Verder zijn de enkelbestemming (blauw) en maatvoering (oranje) uit het geldige bestemmingsplan gevisualiseerd. Op deze manier is snel zichtbaar hoe het pand zich verhoudt tot de genoemde contouren.
Figuur 17 Contour van het bouwwerk geconfronteerd met bestemmingsplan en perceel.