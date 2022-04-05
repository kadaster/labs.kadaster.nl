---
layout: page
title: Kadaster SPARQL Endpoint
---

<head>
  <link href="https://unpkg.com/@triply/yasgui/build/yasgui.min.css" rel="stylesheet" type="text/css" />
  <script src="https://unpkg.com/@triply/yasgui/build/yasgui.min.js"></script>
</head>
<body>
  <div id="yasgui"></div>
  <script>
    const yasgui = new Yasgui(document.getElementById('yasgui'), {
      autofocus: true,
      copyEndpointOnNewTab: false,
      endpointCatalogueOptions: {
        getData: () => {
          return [
            { endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/bag2/services/default/sparql' },
            { endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/bgt/services/default/sparql' },
            { endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/brk/services/default/sparql' },
            { endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/default/sparql' },
            { endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql' },
            { endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/Kadaster-Registratieve-Linked-Data/services/registraties/sparql' },
          ]
        }
      },
      requestConfig: {
        endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/Kadaster-Registratieve-Linked-Data/services/registraties/sparql',
        method: 'post',
      },
      resizeable: true,
    })
    yasgui.yasr.pluginOrder = ["response", "table"]
    const tab1 = yasgui.addTab(false, {
      //endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/kg/services/default/sparql',
      name: '3D gebouw',
    })
    tab1.setQuery(`prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix sdo: <https://schema.org/>
select * {
  ?place sdo:name 'Laan van Westenenk 701, 7334DP Apeldoorn'.
  optional {
    ?place sdo:geo [ sdo:name "BAG vlakgeometrie"@nl; sdo:polygon ?bag ].
    bind('#FF202080' as ?bagColor)
    bind('6' as ?bagZ)
    bind('12' as ?bagHeight)
    bind(strdt(concat('<h3><a href="',str(?place),'">BAG</a></h3>'),rdf:HTML) as ?bagLabel)
  }
  optional {
    ?place sdo:geo [ sdo:name "BGT maaiveld geometrie"@nl; sdo:polygon ?bgt ].
    bind('#00FF2080' as ?bgtColor)
    bind('0' as ?bgtZ)
    bind('6' as ?bgtHeight)
    bind(strdt(concat('<h3><a href="',str(?place),'">BGT</a></h3>'),rdf:HTML) as ?bgtLabel)
  }
  optional {
    ?place sdo:geo [ sdo:name "BRT geometrie"@nl; sdo:polygon ?brt ].
    bind('#F0FF0080' as ?brtColor)
    bind('12' as ?brtZ)
    bind('18' as ?brtHeight)
    bind(strdt(concat('<h3><a href="',str(?place),'">BRT</a></h3>'),rdf:HTML) as ?brtLabel)
  }
}
limit 1`)
    const tab2 = yasgui.addTab(false, {
      //endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/default/sparql',
      name: 'Bunkers in NL',
    })
    tab2.setQuery(`prefix bif: <http://www.openlinksw.com/schemas/bif#>
prefix geo: <http://www.opengis.net/ont/geosparql#>
prefix brt: <https://brt.basisregistraties.overheid.nl/brt/def/>
prefix typeGebouw: <https://brt.basisregistraties.overheid.nl/brt/id/typeGebouw/>
select ?pointOfInterest ?wgs ('red' as ?wgsColor) {
  ?pointOfInterest
    brt:typeGebouw typeGebouw:bunker;
    brt:geometriePunt|brt:geometrieLijn|brt:geometrieVlak ?rd.
  bind(bif:ST_Transform(?rd, 4326) as ?wgs)
}`)
    const tab3 = yasgui.addTab(false, {
      //endpoint: 'https://api.labs.kadaster.nl/datasets/kadaster/bgt/services/default/sparql',
      name: 'Taxonomie'
    })
    tab3.setQuery(`prefix bgt: <https://data.labs.kadaster.nl/kadaster/bgt/def/>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix skos: <http://www.w3.org/2004/02/skos/core#>
select ?childLabel ?parentLabel {
  [ rdfs:subClassOf ?parent;
    skos:prefLabel ?childLabel ].
  ?parent
    rdfs:subClassOf*/skos:prefLabel ?root;
    skos:prefLabel ?parentLabel.
}`)
    const tab4 = yasgui.addTab(false, {
      name: 'Federatief (Wikidata)'
    })
    tab4.setQuery(`prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix wde: <http://www.wikidata.org/entity/>
prefix wdt: <http://www.wikidata.org/prop/direct/>
select * {
  service <https://query.wikidata.org/sparql> {
    ?windfarm
      wdt:P31 wde:Q194356; # windfarm
      wdt:P17 wde:Q55; # Netherlands
      wdt:P625 ?shape;
      rdfs:label ?label.
    optional { ?windfarm wdt:P18 ?image. }
  }
  bind(if(
    bound(?image),
    concat('<figure><img src="',str(?image),'"><figcaption>',str(?label),'</figcaption></figure>'),
    str(?label)) as ?content)
  bind('''<a href="{{windfarm}}" target="_blank">{{content}}</a>'''^^rdf:HTML as ?shapeLabel)
}`)
  </script>
</body>
