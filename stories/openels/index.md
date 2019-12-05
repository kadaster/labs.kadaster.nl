---
endpoint: https://data.labs.pdok.nl/openels/sparql
layout: story
logo: /stories/OpenELS/logo.png
output: leaflet
title: OpenELS
---

<link rel="stylesheet" type="text/css" href="leaflet/leaflet.css">
<link rel="stylesheet" type="text/css" href="/assets/css/datatables.min.css">
<link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css">
<script type="text/javascript" src="leaflet/leaflet.js"></script>
<script type="text/javascript" src="/assets/js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/js/datatables.min.js"></script>
<script type="text/javascript" src="geolocator.js"></script>
<img src="en_horizontal_cef_logo_2.png" alt="EU logo">

## Administrative units

Usually, the territory of a country is divided into a number of areas that are administered by local government.  Such areas are called administrative units.  The systems of such administrative division are hierarchical with several levels of progressively smaller units.  Municipalities, regions and provinces are examples of administrative units at different levels.  However, often it is difficult to compare structures of administrative division between countries because they use language-specific names for levels of administrative division.

### “Sorry, *what* do you call that?”

Let's see what names are used to refer to the corresponding administrative levels in the Netherlands, Norway, Spain and Finland.

<div class="alert alert-info txt" role="alert">
  <h2>Try it out</h2>
  <p>You can see the exact query used to retrieve the data by clicking the blue arrow button below this box.  The query is running over the 4 national sparql endpoints of the project and retrieving the different names used for the varying administrative levels.  You can view the returned data in different presentation formats by clicking on the options at the bottom of the query.  The data can also be downloaded in CSV format.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/openels/queries/q1">
</query>

### Comparing the structures of administrative division

Linked Data brings semantic interoperability by means of ontologies. Ontologies are collections of concepts, and the relations between them, described in a formal way.  With the help of a common ontology (in the case of this project, the INSPIRE ontologies), it's possible to model national systems of administrative units and draw comparisons between them, avoiding misinterpretation caused by language specific notions.  In this example, we'll compare the structure of administrative systems in the Netherlands, Spain, Norway and Finland.

<div class="alert alert-info txt" role="alert">
  <h2>Tips</h2>
  <p>Because the data being returning here is numerical, the ‘Google Chart’ option is used by default.  The chart can be customised by clicking on the ‘config chart’ button on the right.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/openels/queries/q2">
</query>

### It's linked.  Lets's grab some data

In the example above, we used the power of linked data to map national administrative systems to generic levels.  This was done at the level of concepts or ontological level (similar to T-box in descriptive logic).  Linked Data allows for even more ― interrelating data at the instance level between data sets.  For example, if two different data sets contain information about the same object (e.g information about the same municipality) we can link them and enrich one description of the municipality with attributes coming from the other data set.  The example below uses links between administrative units and corresponding objects in the [DBpedia](https://wiki.dbpedia.org/) data base.  In this case DBpedia serves as a ‘linking node’, providing access to other resources and information.  Therefore we can, for example, traverse those links to retrieve the name of an administrative unit in another language.  Lets find out how to spell what the Dutch call “'s-Gravenhage”, in the other languages of the project.

<div class="alert alert-info txt" role="alert">
  <h2>Try it out</h2>
  <p>This query can be changed to obtain the alternative languages for other placenames.  Simply substitute <code>'s-Gravenhage</code> for another placename, for example “Amsterdam”, and click on the ‘play arrow’ on the right of the query box.  If the placename is in a different country, and the Dutch language should be requested, that can be added or replace an existing language, in the <code>bind</code> string.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/kadaster-dev/openels/queries/q3">
</query>

## Geolocator: a URI gazetteer

The SPARQL query language is a very powerful and flexible way to retrieve data based on graph patterns.  However, SPARQL lacks functionality for a fuzzy search of literal values.  In other words, if there is a need to find the location of Amsterdam, SPARQL requires proper spelling of this name.  It is not possible to retrieve the location of Amsterdam if there is a typo (e.g “Asterdam”) in the spelling of the name.  In addition, for lay users it is very difficult to master SPARQL.  For these reasons, we have created a gazetteer service that returns enriched data with Linked Data URIs for toponyms.

<div class="alert alert-info txt" role="alert">
  <h2>Tips</h2>
  <p>The background maps can be turned on and off by clicking on the ‘layers’ button in the top right corner of the map.  Clicking on the name in the accompanying table will retrieve additional data from the relevant national service if the uri is dereferenceable.</p>
</div>

<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <label for="topoName" class="font-weight-normal">Here you can search for toponyms:</label>
    <input type="text" class="form-control" id="topoName" placeholder="e.g. Amsterdam">
    <button type="submit" id="submitButton" class="btn btn-info">Search</button>
  </form>
</nav>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <div id="geolocator" style="width: 570px; height: 280px;"></div>
    </div>
    <div class="col-sm-5">
      <table id="table" class="table">
      </table>
    </div>
  </div>
</div>
