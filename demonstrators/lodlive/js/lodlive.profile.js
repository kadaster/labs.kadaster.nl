$.jStorage
        .set(
                'profile',
                {
                    // parametri di connessione agli endpoint
                    'connection' : {
			'http://bag.basisregistraties.overheid.nl,http://archief.nl,http://brk.basisregistraties.overheid.nl,http://www.w3.org,https://data.labs.kadaster.nl,http://www.opengis.net,http://data.labs.kadaster.nl,http://bgt.basisregistraties.overheid.nl,http://api.labs.kadaster.nl,https://api.labs.kadaster.nl,http://data.informatiehuisruimte.nl' : {
			description : {
				en : 'Dit is de BAG!' 
			},
			    endpointType: 'all',
                            sparql : {
                                allClasses : 'SELECT DISTINCT ?object WHERE {[] a ?object}',
                                findSubject : `select distinct ?s { ?s a <{CLASS}>; ?p ?o.  filter(isLiteral(?o) && regex(str(?o),'{VALUE}','i')) } limit 1`,
//abc : '				    SELECT DISTINCT ?subject WHERE { {?subject a <{CLASS}>;<http://purl.org/dc/elements/1.1/title> ?object. FILTER(regex(str(?object),\'{VALUE}\',\'i\'))} UNION {?subject a <{CLASS}>;<http://www.w3.org/2000/01/rdf-schema#label> ?object. FILTER(regex(str(?object),\'{VALUE}\',\'i\'))} UNION {?subject a <{CLASS}>;<http://www.w3.org/2004/02/skos/core#prefLabel> ?object. FILTER(regex(str(?object),\'{VALUE}\',\'i\'))} }  LIMIT 1  ',
                                documentUri : 'SELECT DISTINCT * WHERE {<{URI}> ?property ?object} ORDER BY ?property',
                                document : 'SELECT DISTINCT * WHERE {<{URI}> ?property ?object}',
                                bnode : 'SELECT DISTINCT *  WHERE {<{URI}> ?property ?object}',
                                inverse : 'SELECT DISTINCT * WHERE {?object ?property <{URI}>} LIMIT 100',
                                inverseSameAs : 'SELECT DISTINCT * WHERE {?object <http://www.w3.org/2002/07/owl#sameAs> <{URI}>}'
                            },
			useForInverseSameAs : true,
			endpoint : 'https://api.labs.kadaster.nl/datasets/kadaster/knowledge-graph/services/knowledge-graph/sparql',
			examples : [{
				label : 'Hoog Soeren',
				uri : 'http://bag.basisregistraties.overheid.nl/bag/id/woonplaats/3564'
			}
				, {
				label : 'Woonplaats',
				uri : 'http://bag.basisregistraties.overheid.nl/def/bag#Woonplaats'
			} 
				, {
				label : 'Verblijfsobject',
				uri : 'http://bag.basisregistraties.overheid.nl/def/bag#Verblijfsobject'
			} 
				, {
				label : 'OpenbareRuimte',
				uri : 'http://bag.basisregistraties.overheid.nl/def/bag#OpenbareRuimte'
			} 
			]
		},
		},
                    arrows : {
                        'http://www.w3.org/2002/07/owl#sameAs' : 'isSameAs',
                        'http://purl.org/dc/terms/isPartOf' : 'isPartOf',
                        'http://purl.org/dc/elements/1.1/type' : 'isType',
                        'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' : 'isType'
                    },
                    // custom labels on arcs
                    labeler : {
	                    'http://dbpedia.org/ontology/currency' : 'currency'
                    },
                    uriSubstitutor : [ {
                        findStr : 'mpii.de/yago/resource/',
                        replaceStr : 'yago-knowledge.org/resource/'
                    } ],

                    // configurazione standard per la rappresentazione di un documento
                    // utilizzata nel caso manchi una specifica configurazione per la classe
                    'default' : {
                        sparql : {
                            allClasses : 'SELECT DISTINCT ?object WHERE {[] a ?object}',
                            findSubject : `select distinct ?s { ?s a <{CLASS}>; ?p ?o.  filter(isLiteral(?o) && regex(str(?o),'{VALUE}','i')) } limit 1`,
                            documentUri : 'SELECT DISTINCT * WHERE {<{URI}> ?property ?object.} ORDER BY ?property',
                            document : 'SELECT DISTINCT * WHERE {<{URI}> ?property ?object}',
                            bnode : 'SELECT DISTINCT *  WHERE {<{URI}> ?property ?object}',
                            inverse : 'SELECT DISTINCT * WHERE {?object ?property <{URI}>.} LIMIT 100',
                            inverseSameAs : 'SELECT DISTINCT * WHERE {?object ?t <{URI}> } '
                        },
			endpointType: 'all',
			useForInverseSameAs : true,
			endpoint : 'https://api.labs.kadaster.nl/datasets/kadaster/knowledge-graph/services/knowledge-graph/sparql',
                        document : {
                            className : 'standard',
                            titleProperties : [
                                    'http://www.w3.org/2004/02/skos/core#notation',
                                    'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
				    'http://www.opengis.net/ont/geosparql#', 
                                    'http://www.geonames.org/ontology#name',
                                    'http://purl.org/dc/elements/1.1/title',
                                    'http://purl.org/dc/terms/title',
                                    'http://www.w3.org/2000/01/rdf-schema#label',
				    'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
				    'http://bag.basisregistraties.overheid.nl/def/bag#naamWoonplaats',
				    'https://data.labs.kadaster.nl/kadaster/woz/vocab/wozobjectnummer',
				    'http://data.labs.kadaster.nl/kadaster/woz/vocab/wozobjectnummer',
				    'http://bag.basisregistraties.overheid.nl/def/bag#naamOpenbareRuimte',
				    'http://bag.basisregistraties.overheid.nl/def/bag#huisnummer',
				    'http://brt.basisregistraties.overheid.nl/def/top10nl#naam',
				    'http://brt.basisregistraties.overheid.nl/def/top10nl#naamNL',
				    'http://brt.basisregistraties.overheid.nl/def/top10nl#naamOfficieel',
				    'http://brk.basisregistraties.overheid.nl/def/brk#kadastraleGemeente',
                                    'http://www.w3.org/2004/02/skos/core#prefLabel',
                                    'http://rdf.freebase.com/ns/type.object.name', 
				    'http://xmlns.com/foaf/0.1/firstName',
                                    'http://xmlns.com/foaf/0.1/lastName', 
				    'http://xmlns.com/foaf/0.1/surname', 
				    'http://xmlns.com/foaf/0.1/name',
                                    'http://purl.org/dc/terms/description', 
				    'http://www.geonames.org/ontology/officialName',
                                    'http://d-nb.info/standards/elementset/gnd#preferredName', 
				    'http://d-nb.info/standards/elementset/gnd#preferredNameForTheFamily',
                                    'http://d-nb.info/standards/elementset/gnd#preferredNameForThePerson',
                                    'http://d-nb.info/standards/elementset/gnd#preferredNameForThePlaceOrGeographicName',
                                    'http://d-nb.info/standards/elementset/gnd#preferredNameForTheConferenceOrEvent',
                                    'http://d-nb.info/standards/elementset/gnd#preferredNameForTheWork',
                                    'http://d-nb.info/standards/elementset/gnd#preferredNameForTheSubjectHeading' ]
                        },
                        images : {
	                        properties : [ 'http://www.w3.org/2006/vcard/ns#photo', 
					       'http://xmlns.com/foaf/0.1/depiction', 
					       'http://dbpedia.org/ontology/thumbnail',
	                                       'http://dbpedia.org/property/logo', 
				               'http://linkedgeodata.org/ontology/schemaIcon' 
				             ]
                        },
                        maps : {
                            longs : [ 'http://www.w3.org/2003/01/geo/wgs84_pos#long' ],
                            lats : [ 'http://www.w3.org/2003/01/geo/wgs84_pos#lat' ],
                            points : [ 'http://www.georss.org/georss/point' ]
                        },
                        weblinks : {
	                        properties : [ 'http://www.w3.org/ns/dcat#accessURL', 
					       'http://xmlns.com/foaf/0.1/mbox', 
					       'http://rdfs.org/sioc/ns#links_to',
					       'http://it.dbpedia.org/property/url', 
					       'http://data.nytimes.com/elements/search_api_query', 
					       'http://www.w3.org/2000/01/rdf-schema#isDefinedBy',
	                                       'http://xmlns.com/foaf/0.1/page', 
					       'http://xmlns.com/foaf/0.1/homepage', 
					       'http://purl.org/dc/terms/isReferencedBy',
	                                       'http://purl.org/dc/elements/1.1/relation', 
					       'http://dbpedia.org/ontology/wikiPageExternalLink', 
					       'http://data.nytimes.com/elements/topicPage' 
				             ]
                        }
                    },

                    'http://www.w3.org/2002/07/owl#Class' : {
	                    document : {
		                    className : 'Class'
	
	 , titleProperties : ['http://www.openfix.net/ont/geosparql#', 'http://www.w3.org/2000/01/rdf-schema#label']
	                    }
                    },
                    'http://www.w3.org/2002/07/owl#ObjectProperty' : {
	                    document : {
		                    className : 'ObjectProperty'
	                    }
                    },
                    'http://www.w3.org/2002/07/owl#Restriction' : {
	                    document : {
		                    className : 'DatatypeProperty'
	                    }
                    },
                    'http://www.w3.org/2002/07/owl#DatatypeProperty' : {
	                    document : {
		                    className : 'DatatypeProperty'
	                    }
                    },
                    'http://www.w3.org/2002/07/owl#Property' : {
	                    document : {
		                    className : 'Property'
	                    }
                    },
                    'http://data.oceandrilling.org/core/1/ODP' : {
	                    document : {
		                    titleProperties : [ 'expedition', 'http://data.oceandrilling.org/core/1/expedition', 
					                      'site', 'http://data.oceandrilling.org/core/1/site', 
					                      'hole', 'http://data.oceandrilling.org/core/1/hole' 
				                      ]
	                    }
                    },
                    'http://www.w3.org/ns/locn#Address' : {
	                    document : {
		                    titleProperties : [ 'http://www.w3.org/ns/locn#fullAddress' ]
	                    }
                    },
                    'http://www.cnr.it/ontology/cnr/personale.owl#UnitaDiPersonaleInterno' : {
	                    document : {
		                    titleProperties : [ 'http://www.cnr.it/ontology/cnr/personale.owl#cognome', 
					                ' ', 
					                'http://www.cnr.it/ontology/cnr/personale.owl#nome' 
				                      ]
	                    }
                    }

                });
if (!document.lodliveVars) {
	document.lodliveVars = {};
}

$.jStorage.set('boxTemplate', '<div class="boxWrapper" id="first"><div class="box sprite"></div></div>');
$.jStorage.set('relationsLimit', 25);
$.jStorage.set('doStats', $.jStorage.get('doStats', true));
$.jStorage.set('doInverse', $.jStorage.get('doInverse', true));
$.jStorage.set('doAutoExpand', $.jStorage.get('doAutoExpand', true));
$.jStorage.set('doAutoSameas', $.jStorage.get('doAutoSameas', true));
$.jStorage.set('doCollectImages', $.jStorage.get('doCollectImages', true));
$.jStorage.set('doDrawMap', $.jStorage.get('doDrawMap', true));
$.jStorage.set('showInfoConsole', $.jStorage.get('showInfoConsole', true));

$.jStorage.set('endpoints', {
    all : 'output=json&format=application/json&timeout=0',
    arcSparql : 'output=json&jsonp=lodlive',
    sesame : 'Accept=application/sparql-results%2Bjson'
});
