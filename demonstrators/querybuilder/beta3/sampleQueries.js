var sampleQueries = {
	"example.1":{
		"distinct": true,
		"variables": [
		  "Gebouw_4"
		],
		"order": null,
		"branches": [
		  {
			"line": {
			  "s": "?Gebouw_4",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/gebruiksdoel45",
			  "o": "?Gebruiksdoel_5",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.kkg.kadaster.nl/sor/model/def/Gebruiksdoel",
			  "values": [
				{
				  "label": "winkelfunctie",
				  "uri": "https://data.kkg.kadaster.nl/sor/model/con/winkelfunctie"
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_4",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/bouwjaar79",
			  "o": "?Text79_7",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text79",
			  "values": [
				{
				  "label": "from 1900 to 1940",
				  "start": "1900-01-01T00:00:01.000Z",
				  "stop": "1940-12-31T21:59:59.000Z"
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_4",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn43",
			  "o": "?Gemeente_9",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gemeente",
			  "values": [
				{
				  "label": "'s-Hertogenbosch",
				  "uri": "https://data.labs.kadaster.nl/cbs/wbk/id/gemeente/0796"
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
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/geometrie83",
			  "o": "?Map_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Map",
			  "values": [
				{
				  "label": "AreaSelected",
				  "coordinates": [
					[
					  {
						"lat": 52.180816090710955,
						"lng": 5.936151982750744
					  },
					  {
						"lat": 52.18928854272934,
						"lng": 5.936151982750744
					  },
					  {
						"lat": 52.18928854272934,
						"lng": 5.947567464318126
					  },
					  {
						"lat": 52.180816090710955,
						"lng": 5.947567464318126
					  }
					]
				  ]
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
				  "label": "Apeldoorn",
				  "uri": "https://data.labs.kadaster.nl/cbs/wbk/id/gemeente/0200"
				}
			  ]
			},
			"children": []
		  }
		]
	  }
};