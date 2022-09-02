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
    <h2>“Het Perceeltje”</h2>
    <p>
    Het Perceeltje is een unieke collab (samenwerking) brouwsel van het Kadaster en de Brouwtoren. Hier zullen we het hoe en waarom van deze samenwerking uitleggen, en veel meer informatie over het bier zelf geven. Het initiatief is ontstaan bij het Kadaster Data Science Team, waarin veel Data, IT en AI kennis is verenigd binnen het Kadaster. Op basis van het artikel op <a href="https://medium.com/@koenvandenheuvel/how-to-brew-a-beer-with-artificial-intelligence-6c742f5fd843">Medium</a> en de door het Uiltje gebrouwen <a href="https://www.uiltjebrewing.com/en/product/data-driven-neipa/">data-driven-neipa</a> kwam de gedachte: Dat kunnen wij ook….en beter…in ieder geval meer data-gedreven! Daarbij zochten we nog naar een mogelijkheid van een team-uitje, en was er ook behoefte aan een origineel relatiegeschenk. Samenvattend als Data Science Team willen we zelf eenmalig bier gaan brouwen op basis van een recept automatisch gegenereerd dat lekker is en voldoet aan moderne waardes, en we kunnen gebruiken als relatie-geschenk.
    </p>
    <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Lees meer..
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">“Het Perceeltje”</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            
            
            <b>Wat betekent dat nou een automatisch gegeneerd recept?
            Of in andere woorden: data gedreven bier, en de inzet van kunstmatige intelligentie?</b>
            <br>
            Zoals in het <a href="https://medium.com/@koenvandenheuvel/how-to-brew-a-beer-with-artificial-intelligence-6c742f5fd843">artikel</a> beschreven zijn de Brewdog recepten open beschikbaar. Helaas zijn ze 1 van de weinige brouwers die dit doen. Daarnaast weten we de scores van drinkers van dit biertje op basis van Untappd beoordelingen. Op basis hiervan kunnen we een AI model trainen, en een miljoen recepten genereren en daarbij een voorspelling doen van een potentiele untappd score. De recepten van de hoogste scores hebben we meegenomen naar de Brouwer.
            Maar we hebben nog meer AI toegepast op het Etiket. Het plaatje op de voorkant van het etiket is gegenereerd middels <a href="https://openai.com/dall-e-2/">DALL-E-2</a>. Een nieuw AI-systeem dat realistische afbeeldingen en kunst kan maken van een beschrijving in natuurlijke taal.
            <br>
            <b>Meer Kadaster inbreng</b>
            <br>
            Daarnaast hadden we ook andere Kadaster gerelateerde uitgangspunten:
            <br>
            •	Duurzaam: Een lage emissie voetafdruk door de inzet van lokale grondstoffen. We hebben de ingedrienten uit het recept vertaald naar         Nederlandse equivalenten. Zodat we ook kunnen spreken van een Lokaal Nederlands bier.
            <br>
            •	Transparantie, openheid: We zijn volledig open en transparant over het bier. Ook het recept is open beschikbaar, en we nodigen iedereen uit om dit recept verder te verbeteren.
            <br>
            •	Herkomst transparantie: De voedselketen zou volledig transparant moeten zijn; dat zijn we dus ook over de herkomst van de ingedrienten.
            <br>
            •	Innovatief: Door samen te werken met een jonge innovatieve brouwerij.
            <br>
            
            <b>De rol van Brouwtoren</b>
            <br>
            Brouwtoren heeft geholpen om het idee verder uit te werken, en belangrijker om op basis van hun vakmanschap het recept fijn te slijpen naar een lekker drinkbaar bier. Bij deze jonge en innovatieve brouwer konden we de Data/IT wereld van het Kadaster laten samensmelten met het vakmanschap van een bierbrouwerij. Brouwtoren heeft de leiding genomen in het proces om doormiddel van een proefbrouwsel, een proeverij met scores, en vervolgens in het productieproces te komen tot dit biertje.
            <br>
            <br>
             De ingredienten: 
             <br>
             Het recept: 
             <br>
             Untappd 
             <br>
             Map applicatie
            
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
        const mapHolder = document.getElementById('map-holder');
        mapHolder.style.height = '70vh';

        const map = L.map('map-holder', {
            // Set latitude and longitude of the map center (required)
            center: [52.370216, 4.895168],
            // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
            zoom: 8,
        });

        L.control.scale().addTo(map);

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
        if (urlParams.get('location') === 'qr') {
            getLocation();
        }
    }

    window.onload = main;
  </script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
