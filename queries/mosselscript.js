/* global YASGUI */
document.addEventListener("DOMContentLoaded", function(event) {
const query = `
prefix geo: <http://www.opengis.net/ont/geosparql#>
prefix geof: <http://www.opengis.net/def/function/geosparql/>
prefix uom: <http://www.opengis.net/def/uom/OGC/1.0/>
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
select * {
  graph <http://data.pdok.nl/mossel-en-oesterhabitats> {
    [ geo:hasGeometry/geo:asWKT ?shape ].
    bind(geof:distance(?shape,'Point(5.0 52.0)'^^geo:wktLiteral, uom:metre) as ?afstand)
    bind(strdt(concat('Op ',str(round(?afstand/1000)),' km afstand.'),rdf:HTML) as ?shapeLabel)
  }
}
order by ?afstand
limit 10`;
Yasgui.Yasqe.defaults.value = query;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(location => {
    Yasgui.Yasqe.defaults.value = query.replace(
      'POINT(5 52)', `POINT(${location.coords.longitude} ${location.coords.latitude})`
    );
    Yasgui.stories();
  });
}
});
