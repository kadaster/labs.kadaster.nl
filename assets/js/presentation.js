var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '/assets/reveal.js-3.9.2/css/print/pdf.css' : '/assets/reveal.js-3.9.2/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );

function getQuery(catalogUrl, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', catalogUrl, true);
  request.setRequestHeader('Accept', 'application/json')

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      try {
        cb(null,JSON.parse(this.response));
      } catch(e) {
        cb(e);
      }
    } else {
      cb(new Error('Could not fetch query information from ' + catalogUrl))
    }
  };

  request.onerror = function() {
    cb(new Error('Request error when fetching query information from ' + catalogUrl))
  };

  request.send();
}
function populateQueriesFromQueryCatalogue() {
  var numDone = 0;
  var codeItems = document.querySelectorAll('code[data-config-ref]')
  codeItems.forEach(function(el) {
    var url = el.getAttribute("data-config-ref");
    getQuery(url, function(err, json) {
      numDone++;
      if (err) return console.error(err);
      el.innerHTML = Prism.highlight(json.requestConfig.payload.query, Prism.languages.sparql, 'sparql');
    })
  })
}

window.addEventListener('load', function() {
    populateQueriesFromQueryCatalogue()
})
