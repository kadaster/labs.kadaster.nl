---
layout: story
title: Demonstrator ― Huischeck
---

# Huischeck Demonstrator

Op deze pagina is het mogelijk om nadere informatie te krijgen over uw huis en buurt op basis van onder andere de PDOK Locatieserver.  De informatie over uw huis wordt zowel als tekst weergegeven, maar ook door middel van een QR-code die eenvoudig gescand kan worden.

Vul in onderstaande zoekbalk uw adres(straatnaam+huisnummer, woonplaats) in om uw huis te checken!

<div>
  <input name="q" id="adres" value="">
  <button id='huischeck_now'>Check uw huis</button>
  <script src="/assets/js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="fetch.js">
  </script>
</div>

## Informatie over uw huis

Als u uw adres heeft ingevoerd, vindt u hieronder de informatie over uw huis:

<div id="AdressInfo">
</div>

## QR-code

De onderstaande QR-code bevat de link naar de URI(Uniform Resource Identifier) van uw huis. Wanneer u deze code scant komt u uit op een pagina met informatie over uw huis uit de basisregistraties van het Kadaster.

<div id="qrcode">
  <script src="qrious.min.js"></script>
  <script src="qr-code-with-logo.browser.min.js"></script>
  <canvas id="qrcodeCanvas">
  </canvas>
</div>
<button id="printQRcode">Print de QR-code</button>

## SPARQL bevraging

Een andere manier om informatie van uw huis op te vragen is via SPARQL-queries. Dit kan door uw adres in te vullen bij de `values` operatoren in de onderstaande query.

<query data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="huischeck_sparql.rq"
       data-output="geo">
</query>
