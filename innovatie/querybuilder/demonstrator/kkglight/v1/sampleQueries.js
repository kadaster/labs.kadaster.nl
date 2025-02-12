var sampleQueries = {
	"example.1":{
		"distinct": true,
		"variables": [
		  "Gebouw_1"
		],
		"order": null,
		"branches": [
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/gebruiksdoel",
			  "o": "?Text48_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text48",
			  "values": [
				{
				  "label": "winkelfunctie",
				  "rdfTerm": {
					"type": "uri",
					"value": "https://data.kkg.kadaster.nl/sor/model/con/winkelfunctie"
				  }
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn43",
			  "o": "?Gemeente_4",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gemeente",
			  "values": [
				{
				  "label": "'s-Hertogenbosch",
				  "rdfTerm": {
					"type": "uri",
					"value": "https://data.labs.kadaster.nl/cbs/wbk/id/gemeente/0796"
				  }
				}
			  ]
			},
			"children": []
		  }
		]
	  },
	"example.2":
	{
		"distinct": true,
		"variables": [
		  "Gebouw_1"
		],
		"order": null,
		"branches": [
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/gebruiksdoel",
			  "o": "?Text48_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text48",
			  "values": [
				{
				  "label": "industriefunctie",
				  "rdfTerm": {
					"type": "uri",
					"value": "https://data.kkg.kadaster.nl/sor/model/con/industriefunctie"
				  }
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/geometrie78",
			  "o": "?Map80_4",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Map80",
			  "values": [
				{
				  "label": "AreaSelected",
				  "coordinates": [
					[
					  {
						"lat": 52.17877020367248,
						"lng": 5.956606864929199
					  },
					  {
						"lat": 52.18766401412979,
						"lng": 5.956606864929199
					  },
					  {
						"lat": 52.18766401412979,
						"lng": 5.973687171936035
					  },
					  {
						"lat": 52.17877020367248,
						"lng": 5.973687171936035
					  }
					]
				  ]
				}
			  ]
			},
			"children": []
		  }
		]
	  },
	  "example.3":{
		"distinct": true,
		"variables": [
		  "Gebouw_1"
		],
		"order": null,
		"branches": [
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/typeGebouw",
			  "o": "?Text51_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text51",
			  "values": [
				{
				  "label": "kerk",
				  "rdfTerm": {
					"type": "uri",
					"value": "https://data.kkg.kadaster.nl/kad/model/con/kerk"
				  }
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/bouwjaar73",
			  "o": "?Text73_4",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text73",
			  "values": []
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn43",
			  "o": "?Gemeente_6",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gemeente",
			  "values": [
				{
				  "label": "Apeldoorn",
				  "rdfTerm": {
					"type": "uri",
					"value": "https://data.labs.kadaster.nl/cbs/wbk/id/gemeente/0200"
				  }
				}
			  ]
			},
			"children": []
		  }
		]
	  }
};