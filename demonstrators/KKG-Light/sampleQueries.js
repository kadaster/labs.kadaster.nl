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
		  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/bouwjaar55",
		  "o": "?Text55_2",
		  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
		  "oType": "http://www.labs.kadaster.nl/sparnatural/Text55",
		  "values": [
			{
			  "label": "from 1910 to 2023",
			  "start": "1910-01-01T00:00:01.000Z",
			  "stop": "2023-12-31T22:59:59.000Z"
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
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/bouwjaar55",
			  "o": "?Text55_2",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text55",
			  "values": [
				{
				  "label": "from 1910 to 2023",
				  "start": "1910-01-01T00:00:01.000Z",
				  "stop": "2023-12-31T22:59:59.000Z"
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/typeGebouw41",
			  "o": "?Gebouwtype_4",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.kkg.kadaster.nl/kad/model/def/Gebouwtype",
			  "values": [
				{
				  "label": "brandweerkazerne",
				  "uri": "https://data.kkg.kadaster.nl/kad/model/con/brandweerkazerne"
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn3",
			  "o": "?Buurt_6",
			  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw",
			  "oType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Buurt",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Buurt_6",
				  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn7",
				  "o": "?Wijk_8",
				  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Buurt",
				  "oType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Wijk",
				  "values": []
				},
				"children": [
				  {
					"line": {
					  "s": "?Wijk_8",
					  "p": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/ligtIn5",
					  "o": "?Gemeente_10",
					  "sType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Wijk",
					  "oType": "https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gemeente",
					  "values": [
						{
						  "label": "Amsterdam",
						  "uri": "https://data.labs.kadaster.nl/cbs/wbk/id/gemeente/0363"
						}
					  ]
					},
					"children": []
				  }
				]
			  }
			]
		  }
		]
	  }
};