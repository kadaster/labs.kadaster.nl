<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css"/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>

  </head>
  <body>
    <h2>'t Perceeltje</h2>
    <p>
      De unieke samenwerking tussen het Kadaster Data Science Team en de brouwers van Brouwtoren heeft geresulteerd in ’t Perceeltje. Een modern bier in vele opzichten.
    </p>
    <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Lees meer
  </button>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    Sfeerimpressie
  </button>
  <p>
  <br/> 
Onderstaande kaart toont de locaties waar ‘t Perceeltje is gedronken, en de herkomst van ingrediënten. Drink locaties worden toegevoegd door middel van de “Deel mijn drink locatie” knop. We zijn trots op ons unieke biertje en willen graag weten wat jij ervan vindt. Geef 't Perceeltje daarom een beoordeling op Untappd.
  </p>
  <button onclick="location.href='https://untp.beer/375ecb09fc'" type="button" class="btn btn-primary">
    Untappd Check-in
  </button>
  <button onclick="getLocation()" type="button" class="btn btn-primary">
    Deel mijn drink locatie
  </button>
  <br>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">'t Perceeltje</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <b> Een modern bier, met de smaak van AI - hoe dan? </b>
          <br>
          Het Kadaster heeft een Data Science Team die zich richt op de toepassing van kunstmatige intelligentie op Kadaster gerelateerde data, zoals notariële aktes en luchtfoto's. Dit met als doel om de kwaliteit van de data te verbeteren en bruikbare data producten te leveren. Voor meer informatie, bezoek https://labs.kadaster.nl/. Naast deze inspanningen ontstond het idee om de kennis van AI te gebruiken voor iets waar we allemaal van houden: bier. Dat idee hebben we gerealiseerd in samenwerking met Brouwtoren, een jonge en innovatieve brouwerij in Nijmegen.
          <br>
          <br>
          <b>Het recept:</b>
          <br>
          Als je bier wilt maken, heb je een recept nodig, en daar ligt een kans voor het toepassen van AI. Dat is mooi beschreven in dit <a href="https://medium.com/@koenvandenheuvel/how-to-brew-a-beer-with-artificial-intelligence-6c742f5fd843">artikel</a>, onze inspiratiebron.  Het startpunt zijn de 201 recepten van de Schotse brouwer Brewdog die open beschikbaar zijn (helaas zijn ze 1 van de weinige brouwers die dit doen). Daarnaast weten we de scores van deze biertjes op basis van Untappd beoordelingen. Dit is de basis waarop we het AI model trainen, en daarbij een miljoen recepten genereren met daarbij een voorspelling van de potentiële Untappd score. De recepten van de hoogste scores hebben we meegenomen naar de brouwers van Brouwtoren. Want naast AI komt er toch ook wel wat vakmanschap kijken bij het maken van bier: we hadden bijvoorbeeld wel de ingrediënten en de hoeveelheden maar nog niet op welk moment welke hop toegevoegd moest worden. Dat hebben de brouwers bepaald.
          <br>
          <br>
          <b>Proefbrouw - meer data:</b>
          <br>
          Vervolgens hebben we als Data Science Team het recept gebrouwen onder begeleiding van de Brouwtoren brouwers. Het resultaat hiervan is op de tap gekomen in het Proeflokaal van Brouwtoren. Met behulp van evaluatieformulieren is meer data verzameld en op basis daarvan is het recept nog licht bijgesteld, met name om de nasmaak minder bitter te maken.
          <br>
          <br>
          <b>Duurzame aanpassingen:</b>
          <br>
          Mede omdat de basisrecepten vanuit Brewdog komen, maar ook omdat (helaas) de meesten mouten en hoppen uit het buitenland komen, bevatte het basisrecept ook deze mouten en hoppen. Dat kan beter en duurzamer vinden wij! Alle mouten en hoppen hebben we vervangen voor duurzame lokale vervangers: Brabanthop heeft de cascade, chinook en centennial hops gekweekt. De pilsmout, tarwemout, carafa type 1 mout, chocolademout zijn Nederlandse granen en door Vloermouterij Masterveld (Winterswijk) gemout en geleverd. Alleen de BlackSwaen-BlackExtra is een Duits graan, en in Nederland gemout. Al met al kunnen we dus spreken over een lokaal en duurzaam bier.
          <br>
          <br>
          <b>Nog meer AI toegepast:</b>
          <br>
          Er zijn nog meer mogelijkheden om AI toe te passen: het etiket. Het plaatje (de landmeter met een biertje)  op de voorkant van het etiket is gegenereerd middels DALL-E-2. Een nieuw AI-systeem dat realistische afbeeldingen en kunst kan maken van een beschrijving in natuurlijke taal. Op de achterkant van het etiket staat de tekst: "Onze machine learning-technologie heeft bier gebrouwen zo lekker, dat je denkt dat robots de brouwmeesters zijn. Maar geen zorgen, er is geen kans dat het bier opstandig wordt en de wereld overneemt, tenzij je te veel drinkt natuurlijk." Deze tekst is geschreven door ChatGPT.
          <br>
          <br>
          <b>Nog meer Kadaster:</b>
          <br>
          Naast duurzaamheid hebben we nog meer “Kadaster”  waarden geprobeerd te vertalen naar dit project. Allereerst transparantie en openheid: We zijn volledig open en transparant over het bier, dat betekent dat het recept openbaar beschikbaar is, en we nodigen iedereen uit om dit recept verder te verbeteren.
          Als Kadaster zijn we van de topografische kaarten, en zijn we trots op PDOK (www.pdok.nl) waar heel veel kaartdata beschikbaar is. Het is dan ook vanzelfsprekend dat we de kaartdata van de Basisregistratie Topografie (nlmaps.nl) hebben gebruikt als achtergrondkaart om te kunnen tonen waar dit biertje in Nederland wordt gedronken. En als we dan toch een achtergrondkaart hebben kunnen we ook transparant de herkomst van de ingrediënten op deze kaart tonen.
          <br>
          <br>
          <b>Samenwerking met Brouwtoren:</b>
          <br>
          Brouwtoren heeft geholpen om het idee verder uit te werken, en belangrijker om op basis van hun vakmanschap het recept fijn te slijpen naar een lekker drinkbaar bier. Bij deze jonge en innovatieve brouwer konden we de data-wereld van het Kadaster laten samensmelten met het vakmanschap van een bierbrouwerij.  Alle stappen van brouwen tot etiketteren zijn uitgevoerd door Brouwtoren en het Data Science Team. ‘t Perceeltje wordt als relatiegeschenk verspreid door het Kadaster.
          <br>
          <br>
          <b>De grote vraag:</b>
          <br>
          Nu blijft over de grote vraag: is de voorspelde Untappd score ook gelijk aan de gerealiseerde Untappd score?
          Maar eigenlijk hopen we vooral dat het een lekker biertje is!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  
  <div id="map-holder"></div>


  <!-- Modal -->
  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">'t Perceeltje</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="impressie1.jpg" style="width: 40%"/>
        <img src="impressie3.jpg" style="width: 40%"/>
        <img src="impressie2.jpg" style="width: 40%"/>
        <img src="impressie4.jpg" style="width: 40%"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  
  <div id="map-holder"></div>
  
  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(postPosition);
        console.log('Je locatie is gedeeld. Proost!')
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  
    function postPosition(position) {
      const lat = position.coords.latitude;  
      const long = position.coords.longitude;
      
      var xhr = new XMLHttpRequest();
      xhr.open("POST", 'https://labs.kadaster.nl/bier/insertlocations', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({lat, long}));
    }

    function main() {

      var beer = L.icon({
          iconUrl: 'beer.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      var hop = L.icon({
          iconUrl: 'hop.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

            var bottle = L.icon({
          iconUrl: 'bottle.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
            var hq = L.icon({
          iconUrl: 'hq.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
            var label = L.icon({
          iconUrl: 'label.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
            var wheat = L.icon({
          iconUrl: 'wheat.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
            var wheatdark = L.icon({
          iconUrl: 'wheatdark.png',

          iconSize:     [30, 65], // size of the icon
          iconAnchor:   [30, 65], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
        const mapHolder = document.getElementById('map-holder');
        mapHolder.style.height = '70vh';

        const map = L.map('map-holder', {
            // Set latitude and longitude of the map center (required)
            center: [52.370216, 4.895168],
            // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
            zoom: 8,
        });

        L.control.scale().addTo(map);
        L.marker([51.66580, 5.76812], {icon: hop}).addTo(map).bindPopup("<a href='https://www.brabanthop.nl/'>Brabanthop</a>, de hopleverancier");
        L.marker([51.99501, 6.78765], {icon: wheat}).addTo(map).bindPopup("<a href='https://www.vloermouterijmasterveld.nl/'>Vloermouterij Masterveld</a>, de moutleverancier");
        L.marker([51.84160, 5.86958], {icon: beer}).addTo(map).bindPopup("<a href='https://www.brouwtoren.nl/'>Brouwtoren</a>, de brouwerij");
        L.marker([52.17980, 5.96026], {icon: hq}).addTo(map).bindPopup("<a href='https://labs.kadaster.nl/'>de bedenkers</a> van 't Perceeltje");
        L.marker([51.398348942219926, 4.015671100074213], {icon: wheatdark}).addTo(map).bindPopup("<a href='https://www.theswaen.com/'>The Swaen</a>, leverancier van donkere mout");
        L.marker([52.0437155729037, 6.622461750935971], {icon: label}).addTo(map).bindPopup("<a href='https://www.hofprint.nl/'>Hofprint</a>, leverancier van de etiketten");
        L.marker([52.02145243196288, 5.172450944809401], {icon: bottle}).addTo(map).bindPopup("<a href='https://www.berlinpackaging.nl/'>Berlin Packaging</a>, leverancier van de flessen");


        L.tileLayer('https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?service=WMTS&request=GetTile&version=1.0.0&layer=standaard&style=default&tilematrixset=EPSG%3A3857&format=image%2Fpng&height=256&width=256&tilematrix={z}&tilecol={x}&tilerow={y}').addTo(map);

        let clusterGroup;
        function getData() {
            try {
                fetch('https://labs.kadaster.nl/bier/getlocations')
                .then(response => response.json())
                .then(locations => {
                    if (clusterGroup) map.removeLayer(clusterGroup);
                    clusterGroup = L.markerClusterGroup();
                    for (const location of locations) {
                        clusterGroup.addLayer(L.marker(new L.LatLng(location.Latitude, location.Longitude)));
                    }
                    map.addLayer(clusterGroup);
                })
            } finally {
                setTimeout(getData, 10000);
            }
        }
        
        getData();

        const urlParams = new URLSearchParams(window.location.search);

    }

    window.onload = main;
  </script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
