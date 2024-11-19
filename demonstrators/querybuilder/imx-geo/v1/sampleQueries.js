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
			  "p": "https://modellen.kkg.kadaster.nl/def/imxgeo-ext#gebouwType__128__",
			  "o": "?Text128_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text128",
			  "values": [
				{
				  "label": "kerk",
				  "rdfTerm": {
					"type": "literal",
					"value": "kerk"
				  }
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bevindtZichOpPerceel__90__",
			  "o": "?Perceel_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Perceel_4",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#ligtInRegistratieveRuimte__464__",
				  "o": "?Gemeentegebied_6",
				  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
				  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Gemeentegebied",
				  "values": []
				},
				"children": [
				  {
					"line": {
					  "s": "?Gemeentegebied_6",
					  "p": "http://modellen.geostandaarden.nl/def/imx-geo#naam__75__",
					  "o": "?Text75_8",
					  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gemeentegebied",
					  "oType": "http://www.labs.kadaster.nl/sparnatural/Text75",
					  "values": [
						{
						  "label": "Apeldoorn",
						  "rdfTerm": {
							"type": "literal",
							"value": "Apeldoorn"
						  }
						}
					  ]
					},
					"children": []
				  }
				]
			  }
			]
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bouwjaar",
			  "o": "?Text5_10",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text5",
			  "values": [
				{
				  "label": "Until 1950",
				  "start": null,
				  "stop": "1950-12-31T22:59:59.000Z"
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel__122__",
			  "o": "?Text122_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text122",
			  "values": [
				{
				  "label": "winkelfunctie",
				  "rdfTerm": {
					"type": "literal",
					"value": "winkelfunctie"
				  }
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bevindtZichOpPerceel__90__",
			  "o": "?Perceel_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Perceel_4",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#ligtInRegistratieveRuimte__471__",
				  "o": "?Gemeentegebied_6",
				  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
				  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Gemeentegebied",
				  "values": []
				},
				"children": []
			  }
			]
		  }
		]
	  },
	  "example.3":{
		"distinct": true,
		"variables": [
		  "Buurt_1"
		],
		"order": null,
		"branches": [
		  {
			"line": {
			  "s": "?Buurt_1",
			  "p": "https://modellen.kkg.kadaster.nl/def/imxgeo-ext#regio__450__",
			  "o": "?Observation_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Buurt",
			  "oType": "http://purl.org/linked-data/cube#Observation",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Observation_2",
				  "p": "https://modellen.kkg.kadaster.nl/cbs/wijken-buurten/def/kerncijfers#grote_supermarkt_gemiddeld_aantal_binnen_5_km",
				  "o": "?Text285_4",
				  "sType": "http://purl.org/linked-data/cube#Observation",
				  "oType": "http://www.labs.kadaster.nl/sparnatural/Text285",
				  "values": [
					{
					  "label": "greater than 3",
					  "min": 3
					}
				  ]
				},
				"children": []
			  }
			]
		  }
		]
	  },
	  "example.4":{
		"distinct": true,
		"variables": [
		  "Gebouw_1"
		],
		"order": null,
		"branches": [
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel__122__",
			  "o": "?Text122_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text122",
			  "values": [
				{
				  "label": "kantoorfunctie",
				  "rdfTerm": {
					"type": "literal",
					"value": "kantoorfunctie"
				  }
				}
			  ]
			},
			"children": [],
			"notExists": true
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bevindtZichOpPerceel__90__",
			  "o": "?Perceel_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Perceel_4",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#ligtInRegistratieveRuimte__472__",
				  "o": "?Buurt_6",
				  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
				  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Buurt",
				  "values": []
				},
				"children": [
				  {
					"line": {
					  "s": "?Buurt_6",
					  "p": "http://www.opengis.net/ont/geosparql#sfWithin__460__",
					  "o": "?Wijk_8",
					  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Buurt",
					  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Wijk",
					  "values": []
					},
					"children": [
					  {
						"line": {
						  "s": "?Wijk_8",
						  "p": "http://modellen.geostandaarden.nl/def/imx-geo#naam__71__",
						  "o": "?Text71_10",
						  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Wijk",
						  "oType": "http://www.labs.kadaster.nl/sparnatural/Text71",
						  "values": [
							{
							  "label": "Schiphol",
							  "regex": "Schiphol"
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
		]
	  }
};