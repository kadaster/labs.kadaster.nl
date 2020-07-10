var React = require('react');
var ReactDOM = require('react-dom');

/**
 * import our node template replacements, referenced in the template resolver
 */
import { DefaultTemplate } from  './templates/defaulttemplate'
import { TestTemplate } from  './templates/testtemplate'

/**
 * Ontodia import
 */
var Ontodia = require('ontodia')

/**
 * we fixed some sizing issues in the CSS container.
 */
import '../css/explorer.css'

/**
 * This function returns a color and icon (null everywhere now) to canvas
 *  so that icons can be drawn in the list boxes
 */
const TestTypeStyleBundle = types => {
    if (types.indexOf('http://www.w3.org/2002/07/owl#Class') !== -1 ||
        types.indexOf('http://www.w3.org/2000/01/rdf-schema#Class') !== -1
    ) {
        return {color: '#eaac77', icon: null};
    } else if (types.indexOf('http://www.w3.org/2002/07/owl#ObjectProperty') !== -1) {
        return {color: '#34c7f3', icon: null};
    } else if (types.indexOf('http://www.w3.org/2002/07/owl#DatatypeProperty') !== -1) {
        return {color: '#34c7f3', icon: null};
    } else if (
        types.indexOf('http://xmlns.com/foaf/0.1/Person') !== -1 ||
        types.indexOf('http://www.wikidata.org/entity/Q5') !== -1
    ) {
        return {color: '#eb7777', icon: null};
    } else if (types.indexOf('http://www.wikidata.org/entity/Q6256') !== -1) {
        return {color: '#77ca98', icon: null};
    } else if (
        types.indexOf('http://schema.org/Organization') !== -1 ||
        types.indexOf('http://dbpedia.org/ontology/Organisation') !== -1 ||
        types.indexOf('http://xmlns.com/foaf/0.1/Organization') !== -1 ||
        types.indexOf('http://www.wikidata.org/entity/Q43229') !== -1
    ) {
        return {color: '#77ca98', icon: null};
    } else if (
        types.indexOf('http://www.wikidata.org/entity/Q618123') !== -1 ||
        types.indexOf('http://www.w3.org/2003/01/geo/wgs84_pos#Point') !== -1
    ) {
        return {color: '#bebc71', icon: null};
    } else if (
        types.indexOf('http://www.wikidata.org/entity/Q1190554') !== -1 
    )
    {
        return {color: '#b4b1fb', icon: null};
    } else if (types.indexOf('http://www.wikidata.org/entity/Q488383') !== -1) {
        return {color: '#53ccb2', icon: null};
   
    } else {
        return undefined;
    }
}; 

/**
 * ontodia function fired when the workspace is mounted, this is the point where the 
 * data initialization takes place
 */
function onWorkspaceMounted(workspace) {
    if (!workspace) { return; }

    /**
     * the internal model ( not related to rdf-js)
     */
    const model = workspace.getModel();
    /**
     * see https://github.com/metaphacts/ontodia/blob/master/src/ontodia/data/sparql/sparqlDataProviderSettings.ts
     * 
     * we pickup the OWLRDFSSetting and replace some of the queries with stardog variants
     */
     let SparqlDialect = Ontodia.OWLRDFSSettings
     /**
      * user Stardog defined functions, requires FT search to be enabled
      */
     SparqlDialect.fullTextSearch = {
            prefix: '',
            queryPattern: `
            ?inst rdfs:label ?searchLabel.
            (?searchLabel ?score) <tag:stardog:api:property:textMatch> "\${text}".
        `}
    /**
     * replace filter type for performance improvements
     */
    SparqlDialect.filterTypePattern = '?inst a ?class'
  
    /**
     * Add public endpoint and refer to our modified dialect
     */
    model.importLayout({
        dataProvider: new Ontodia.SparqlDataProvider({
            endpointUrl: 'https://api.labs.kadaster.nl/datasets/kadaster/knowledge-graph/services/knowledge-graph/sparql',
            queryMethod: Ontodia.SparqlQueryMethod.GET
        }, SparqlDialect),
    });
    
    /**
     * get the '?resource' search param and load that resource.
     */
    let url = new URL(window.location.href);
    let resource = url.searchParams.get("resource");
    if(resource != null)
    {
    	let elm = workspace.getModel().dataProvider.elementInfo({elementIds: [resource]});
        elm.then(function(arg){
            workspace.getModel().createElement(arg[resource])
            workspace.forceLayout();
        });
    }
}

/**
 * properties for the ReactJS componente creation
 */
const props = {
    // function to call when workspace is mounted
    ref: onWorkspaceMounted,
    // Typestyleresolver ( see above )
    typeStyleResolver: TestTypeStyleBundle,
    // resolver for templates ( see below )
    elementTemplateResolver: templateResolver,
    languages: [
        {code: 'en', label: 'English'},
    ],
    language: 'en'
};
// ReactJS way of adding components
 document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(React.createElement(Ontodia.Workspace, props), document.getElementById('onto-container'))
    });
 
 /**
  * based on a type return a template to render the specific type
  */
 function templateResolver(types) {
        // if we have geos:Geometry then use the test template to draw a map, all other default
        if (types.indexOf('http://www.opengis.net/ont/geosparql#Geometry') !== -1) {
            // see templates/testtemplate.tsx
	        return TestTemplate;
	    } else {
            // see defaulttemplate.tsx
	        return DefaultTemplate
	    }
	}
