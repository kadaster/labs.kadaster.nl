// reporting that this extension is active
console.log("example extension active");

// defining a fixed suggestion
// const sugg_a_city = {
//   "type": "IncrType",
//   "uri": "http://www.semwebtech.org/mondial/10/meta#City"
// };
// window.addEventListener(
//     'load',
//     function(ev) {
// 	// inserting a new button
// 	document
// 	    .getElementById("increments")
// 	    .insertAdjacentHTML('beforeend', "<button id=\"a-city\">a city</button>");
// 	var button = document.getElementById("a-city");
// 	// and using it to activate the fixed suggestion
// 	button.onclick =
// 	    function() {
// 		sparklis.activateSuggestion(sugg_a_city);
// 		//var p = sparklis.currentPlace().applySuggestion(sugg_a_city);
// 		//window.alert("The new place has been computed and will now be displayed");
// 		//sparklis.setCurrentPlace(p);
// 	    };
//     });
// example SPARQL hook: adding a dummy PREFIX
// sparklis_extension.hookSparql =
//     function(sparql) {
// 	console.log("endpoint:", sparklis.endpoint());
// 	console.log("permalink:", sparklis.currentPlace().permalink());
// 	console.log("SPARQL query:", sparql);
// 	console.log("Here a dummy PREFIX is added.");
// 	return "PREFIX foo: <http://foo.com/>\n" + sparql
//     };
// // example results hook: keeping only the two first results

// http://localhost:4000/demonstrators/sparklis/osparklis.html?title=%0A%09%09%20%20Sparklis%20Knowledge%20Graph%0A%09%09&endpoint=https%3A//api.labs.kadaster.nl/datasets/kadaster/kg-demo-sparklis/services/default/sparql&sparklis-query=%5BVId%5DReturn%28Det%28Term%28URI%28%22https%3A//data.labs.kadaster.nl/kadaster/kg/id/place/1000%22%29%29%2CSome%28Rel%28%22https%3A//schema.org/containsPlace%22%2CFwd%2CDet%28An%288%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22https%3A//schema.org/geo%22%2CFwd%2CDet%28An%2844%2CModif%28Select%2CUnordered%29%2CThing%29%2CSome%28Rel%28%22https%3A//schema.org/polygon%22%2CFwd%2CDet%28An%2880%2CModif%28Select%2CUnordered%29%2CThing%29%2CNone%29%29%29%29%29%29%29%29%29%29%29&sparklis-path=DDDDDDD&avoid_lengthy_queries=true&concept_lexicons_select=http%3A//www.w3.org/2000/01/rdf-schema%23label&lang=nl
var map = undefined;
var group = undefined;
// $(document).ready( () => {
		
// });


function resetMap(){
	var opts = {
		style: 'standaard',
		target: 'Leaflet-map',
		center: {
			longitude: 5.969900,
			latitude: 52.211200
		},
		overlay: 'gebouwen',
		marker: false,
		zoom: 10,
		minZoom: 1,
		maxZoom: 17,
		search: false
	};
	
	if(map == undefined){
		console.log('creating map object')
		map = nlmaps.createMap(opts);
		setTimeout(() => {  map.invalidateSize(); }, 250);
	}
	console.log('invalidatingSize')
	setTimeout(() => {  map.invalidateSize(); }, 250);
	if(group != undefined){
		//re-adding data if available
		group.addTo(map)

		console.log('Fitting to bounds')
		map.fitBounds(group.getBounds());
	}
	return;
}

sparklis_extension.hookResults =
    function(results) {
	// first clear all old data
	if(group != undefined){
		if(map != undefined){
			map.removeLayer(group)
		}
	}

	console.log("results", results);
	console.log('update the leaflet map with data')
	let columnname = ''
	results.columns.forEach((column) => {
		if(column.includes('polygon')){
			columnname = column;
		}
	})
	if (columnname != ''){
		let polygonid = results.columns.indexOf(columnname);
		let coordinates = []
		results.rows.forEach((row) => {
			//WKT literal
			var wkt_geom = row[polygonid].str
			var wkt = new Wkt.Wkt();
			wkt.read(wkt_geom);
			var feature = { "type": "Feature", 'properties': {}, "geometry": wkt.toJson() };
			var layer = L.geoJson(feature);
			coordinates.push(layer);
			var k;
			var html = "";
        	for (k = 0; k < row.length; k++) {
				if(!String(Object.values(row[k])[1]).includes('POLYGON')){
				html += String(Object.values(row[k])[1])+ "<br>"
				}
			}
			layer.bindPopup(html, {
				maxWidth : 650
			});
			//layer.addTo(map);
		})
		group = new L.featureGroup(coordinates);
		console.log(group.getBounds());
		if (map!= undefined){
			group.addTo(map)
			map.fitBounds(group.getBounds());
		}
	}
	// map.setView(group.getBounds().getCenter());

	// document.getElementById("Leaflet-map-info").innerHTML = JSON.stringify(results);

	// var mymap = L.map('Leaflet-map').setView([51.505, -0.09], 13);
	// let mylayer = nlmaps.leaflet.bgLayer('grijs').addTo(mymap);
	// testing direct SPARQL call to the endpoint
	// sparklis.evalSparql("SELECT * WHERE { ?x a ?c } LIMIT 10",
	// 		    function(res) { console.log("other results:", res); },
	// 		    function(code) { console.log("failed to get the other results, error", code); });
	// console.log("Here the first two rows of the results will be selected.");
	// results.rows = results.rows.slice(0,2);
	return results

    };
// example suggestions hook: looking for suggestions matching 'city'
// flag = true;
// sparklis_extension.hookSuggestions =
//     function(suggestions) {
// 	console.log("2 suggestions", suggestions.type, suggestions.forest.slice(0,2));
// 	if (suggestions.type == "Concepts" && flag) {
// 	    flag = false;
// 	    constr = { "type": "MatchesAll", "kwds": ["city"] };
// 	    sparklis.currentPlace().getConceptSuggestions(
// 		false, constr,
// 		function(partial,suggs) {
// 		    console.log("all suggestions matching 'city'", suggs);
// 		    flag = true;
// 		})
// 	}
//     };
// // example apply-suggestion hook: just logging and applying the suggestion
// sparklis_extension.hookApplySuggestion =
//     function(place,sugg) {
// 	console.log("applied suggestion", sugg);
// 	new_place = place.applySuggestion(sugg);
// 	//console.log("new place", new_place);
// 	return new_place
//     };
