//haal de turf lib op
this.importScripts('https://cdn.jsdelivr.net/npm/@turf/turf@5/turf.min.js');

this.onmessage = function (e) {
    let res = e.data.res;

    //dit is de code om Resultaat.js objecten te clusteren.
    let map = new Map();

    //cluster eerst op basis van naam en class.
    for (let i = res.length - 1; i >= 0; i--) {
        let naam = res[i]._type === "Waterloop" ? res[i]._naam + res[i]._type : res[i]._naam + res[i]._objectClass;

        if (res[i]._type === "Waterloop" || res[i]._objectClass === "Wegdeel") {
            if (map.has(naam)) {
                map.get(naam).push(res[i]);
            } else {
                map.set(naam, [res[i]]);
            }

            res.splice(i, 1);
        }
    }

    let clusterMap = new Map();

    //hierna cluster op basis van locatie. Kijk of de objecten wel aanliggend zijn.
    map.forEach((value, key, map) => {
        let mapCounter = 0;

        //terwijl er nog objecten zijn die nog niet een naaste object hebben gevonden.
        while (value.length > 0) {
            //pak de eerste
            let eerste = value.shift();
            let cluster = [eerste];

            //zet deze in de cluster.
            clusterMap.set(eerste._naam + mapCounter, cluster);
            mapCounter++;

            //kijk of er objecten zijn in het lijstje met overgebleven objecten die naast het huidige cluster object
            //liggen
            for (let i = 0; i < cluster.length; i++) {
                for (let j = value.length - 1; j >= 0; j--) {
                    // eslint-disable-next-line no-undef
                    let inter = turf.lineIntersect(cluster[i]._geoJson, value[j]._geoJson);

                    //als het er naast ligt
                    if (inter.features.length > 0) {
                        //voeg het toe aan het cluster lijstje
                        cluster.push(value[j]);
                        //haal het uit de originele lijst.
                        value.splice(j, 1);
                    }
                }
            }
        }
    });

    //voor elke cluster
    let clusters = [];

    clusterMap.forEach(value => {
        let first = value[0];
        let geoJSON = [];

        //voeg de geojson van alle objecten samen
        value.forEach(res => {
            let geo;

            //als het geen polygoon is, doe er een buffer omheen zodat het wel een polygoon wordt.
            if (res._geoJson.type !== "Polygon") {
                // eslint-disable-next-line no-undef
                geo = turf.buffer(res._geoJson, 0.001).geometry;
            } else {
                geo = res._geoJson;
            }

            //maak er features van anders werkt union niet.
            geoJSON.push({
                    type: 'Feature',
                    geometry: geo
                }
            )
        });

        // eslint-disable-next-line no-undef
        geoJSON = turf.union(...geoJSON).geometry;

        clusters.push({
            _naam: first._naam,
            _type: first._type,
            _geoJson: geoJSON,
            _values: value,
            _color: first._color,
            _objectClass: first._objectClass
        });
    });

    let returnobject = {
        resultaat: res,
        clusters: clusters,
        text : e.data.text
    };

    this.postMessage(returnobject);
};