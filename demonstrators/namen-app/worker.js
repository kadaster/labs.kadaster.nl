this.importScripts('https://cdn.jsdelivr.net/npm/@turf/turf@5/turf.min.js');

this.onmessage = function (e) {
    let res = e.data;

    let map = new Map();

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
    map.forEach((value, key, map) => {
        let mapCounter = 0;

        while (value.length > 0) {
            let eerste = value.shift();
            let cluster = [eerste];

            clusterMap.set(eerste._naam + mapCounter, cluster);
            mapCounter++;

            for (let i = 0; i < cluster.length; i++) {
                for (let j = value.length - 1; j >= 0; j--) {
                    // eslint-disable-next-line no-undef
                    let inter = turf.lineIntersect(cluster[i]._geoJson, value[j]._geoJson);

                    if (inter.features.length > 0) {
                        cluster.push(value[j]);
                        value.splice(j, 1);
                    }
                }
            }
        }
    });

    let clusters = [];

    clusterMap.forEach(value => {
        let first = value[0];
        let geoJSON = [];

        value.forEach(res => {
            let geo;

            if (res._geoJson.type !== "Polygon") {
                // eslint-disable-next-line no-undef
                geo = turf.buffer(res._geoJson, 0.001).geometry;
            } else {
                geo = res._geoJson;
            }

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
        clusters: clusters
    };

    this.postMessage(returnobject);
};