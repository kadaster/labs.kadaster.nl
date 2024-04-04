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
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/gebruiksdoel47",
			  "o": "?Gebruiksdoel_2",
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
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn43",
			  "o": "?Gemeente_4",
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
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/geometrie85",
			  "o": "?Map_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Map",
			  "values": [
				{
				  "label": "AreaSelected",
				  "coordinates": [
					[
					  {
						"lat": 52.1709418062932,
						"lng": 5.959565163357184
					  },
					  {
						"lat": 52.17936350875696,
						"lng": 5.959565163357184
					  },
					  {
						"lat": 52.17936350875696,
						"lng": 5.98239612649195
					  },
					  {
						"lat": 52.1709418062932,
						"lng": 5.98239612649195
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
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/gebruiksdoel47",
			  "o": "?Gebruiksdoel_4",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.kkg.kadaster.nl/sor/model/def/Gebruiksdoel",
			  "values": [
				{
				  "label": "industriefunctie",
				  "uri": "https://data.kkg.kadaster.nl/sor/model/con/industriefunctie"
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
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/bouwjaar81",
			  "o": "?Text81_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text81",
			  "values": [
				{
				  "label": "Until 1950",
				  "start": null,
				  "stop": "1950-12-31T22:59:59.000Z"
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/typeGebouw49",
			  "o": "?Gebouwtype_4",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.kkg.kadaster.nl/kad/model/def/Gebouwtype",
			  "values": [
				{
				  "label": "kerk",
				  "uri": "https://data.kkg.kadaster.nl/kad/model/con/kerk"
				}
			  ]
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
				  "uri": "https://data.labs.kadaster.nl/cbs/wbk/id/gemeente/0200"
				}
			  ]
			},
			"children": []
		  }
		]
	  }
};