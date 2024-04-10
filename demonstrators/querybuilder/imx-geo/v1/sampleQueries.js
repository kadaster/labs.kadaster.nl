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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#hasDefaultGeometry70",
			  "o": "?Map72_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Map72",
			  "values": [
				{
				  "label": "AreaSelected",
				  "coordinates": [
					[
					  {
						"lat": 52.09689371475378,
						"lng": 4.255785996485796
					  },
					  {
						"lat": 52.11355271328238,
						"lng": 4.255785996485796
					  },
					  {
						"lat": 52.11355271328238,
						"lng": 4.281878528436947
					  },
					  {
						"lat": 52.09689371475378,
						"lng": 4.281878528436947
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#bouwjaar111",
			  "o": "?Text111_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text111",
			  "values": [
				{
				  "label": "from 1985 to 1995",
				  "start": "1984-12-31T23:00:01.000Z",
				  "stop": "1995-12-31T22:59:59.000Z"
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel",
			  "o": "?Text113_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text113",
			  "values": [
				{
				  "label": "celfunctie",
				  "rdfTerm": {
					"type": "literal",
					"value": "celfunctie",
					"xml:lang": "nl"
				  }
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel",
			  "o": "?Text113_4",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text113",
			  "values": [
				{
				  "label": "kantoorfunctie",
				  "rdfTerm": {
					"type": "literal",
					"value": "kantoorfunctie",
					"xml:lang": "nl"
				  }
				}
			  ]
			},
			"children": []
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#hasDefaultGeometry70",
			  "o": "?Map72_6",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Map72",
			  "values": [
				{
				  "label": "AreaSelected",
				  "coordinates": [
					[
					  {
						"lat": 52.17824263924946,
						"lng": 5.955951350271325
					  },
					  {
						"lat": 52.182518782666996,
						"lng": 5.955951350271325
					  },
					  {
						"lat": 52.182518782666996,
						"lng": 5.963611739997115
					  },
					  {
						"lat": 52.17824263924946,
						"lng": 5.963611739997115
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
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#heeftAlsAdres7",
			  "o": "?Adres_2",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://modellen.geostandaarden.nl/def/imx-geo#Adres",
			  "values": []
			},
			"children": [
			  {
				"line": {
				  "s": "?Adres_2",
				  "p": "http://modellen.geostandaarden.nl/def/imx-geo#plaatsnaam",
				  "o": "?Text102_4",
				  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Adres",
				  "oType": "http://www.labs.kadaster.nl/sparnatural/Text102",
				  "values": [
					{
					  "label": "Schiphol",
					  "rdfTerm": {
						"type": "literal",
						"value": "Schiphol",
						"xml:lang": "nl"
					  }
					}
				  ]
				},
				"children": []
			  }
			]
		  },
		  {
			"line": {
			  "s": "?Gebouw_1",
			  "p": "http://modellen.geostandaarden.nl/def/imx-geo#gebruiksdoel",
			  "o": "?Text113_6",
			  "sType": "http://modellen.geostandaarden.nl/def/imx-geo#Gebouw",
			  "oType": "http://www.labs.kadaster.nl/sparnatural/Text113",
			  "values": [
				{
				  "label": "kantoorfunctie",
				  "rdfTerm": {
					"type": "literal",
					"value": "kantoorfunctie",
					"xml:lang": "nl"
				  }
				}
			  ]
			},
			"children": [],
			"notExists": true
		  }
		]
	  }
};