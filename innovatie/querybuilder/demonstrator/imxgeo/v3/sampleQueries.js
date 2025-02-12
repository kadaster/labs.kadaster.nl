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
			  "p": "https://modellen.kkg.kadaster.nl/def/imxgeo-ext#gebouwType__125__",
			  "o": "?Text125_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text125",
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bouwjaar",
			  "o": "?Text3_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text3",
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bevindtZichOpPerceel__87__",
			  "o": "?Perceel_6",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Perceel_6",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#ligtInRegistratieveRuimte__468__",
				  "o": "?Gemeentegebied_8",
				  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
				  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Gemeentegebied",
				  "values": []
				},
				"children": [
				  {
					"line": {
					  "s": "?Gemeentegebied_8",
					  "p": "http://modellen.geostandaarden.nl/def/imx-geo#naam__75__",
					  "o": "?Text75_10",
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel__119__",
			  "o": "?Text119_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text119",
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bevindtZichOpPerceel__87__",
			  "o": "?Perceel_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Perceel_4",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#ligtInRegistratieveRuimte__468__",
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
						  "label": "Middelburg",
						  "rdfTerm": {
							"type": "literal",
							"value": "Middelburg"
						  }
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
			  "p": "https://modellen.kkg.kadaster.nl/def/imxgeo-ext#regio__447__",
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
				  "o": "?Text282_4",
				  "sType": "http://purl.org/linked-data/cube#Observation",
				  "oType": "http://www.labs.kadaster.nl/sparnatural/Text282",
				  "values": [
					{
					  "label": "greater than 4",
					  "min": 4
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel__119__",
			  "o": "?Text119_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text119",
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bevindtZichOpPerceel__87__",
			  "o": "?Perceel_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Perceel_4",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#ligtInRegistratieveRuimte__469__",
				  "o": "?Buurt_8",
				  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Perceel",
				  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Buurt",
				  "values": []
				},
				"children": [
				  {
					"line": {
					  "s": "?Buurt_8",
					  "p": "http://www.opengis.net/ont/geosparql#sfWithin__457__",
					  "o": "?Wijk_10",
					  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Buurt",
					  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Wijk",
					  "values": [
						{
						  "label": "Schiphol",
						  "rdfTerm": {
							"type": "uri",
							"value": "https://data.kkg.kadaster.nl/id/wijk/WK039416/1"
						  }
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
	}