---
layout: story
logo: /stories/OpenELS/logo.png
title: OpenELS
---

<img src="en_horizontal_cef_logo_2.png" alt="EU logo">

## Administrative units

Usually, the territory of a country is divided into a number of areas that are administered by local government.  Such areas are called administrative units.  The systems of such administrative division are hierarchical with several levels of progressively smaller units.  Municipalities, regions and provinces are examples of administrative units at different levels.  However, often it is difficult to compare structures of administrative division between countries because they use language-specific names for levels of administrative division.

## “Sorry, *what* do you call that?”

Let's see what names are used to refer to the corresponding administrative levels in the Netherlands, Norway, Spain and Finland.

<div class="textbox">
  <h2>Try it out</h2>
  <p>You can see the exact query used to retrieve the data by clicking the blue arrow button below this box.  The query is running over the 4 national sparql endpoints of the project and retrieving the different names used for the varying administrative levels.  You can view the returned data in different presentation formats by clicking on the options at the bottom of the query.  The data can also be downloaded in CSV format.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/openels/-/queries/open-els-1">
</query>

## Comparing the structures of administrative division

Linked Data brings semantic interoperability by means of ontologies. Ontologies are collections of concepts, and the relations between them, described in a formal way.  With the help of a common ontology (in the case of this project, the INSPIRE ontologies), it's possible to model national systems of administrative units and draw comparisons between them, avoiding misinterpretation caused by language specific notions.  In this example, we'll compare the structure of administrative systems in the Netherlands, Spain, Norway and Finland.

<div class="textbox">
  <h2>Tips</h2>
  <p>Because the data being returning here is numerical, the ‘Google Chart’ option is used by default.  The chart can be customised by clicking on the ‘config chart’ button on the right.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/openels/-/queries/open-els-2">
</query>

## It's linked.  Lets's grab some data

In the example above, we used the power of linked data to map national administrative systems to generic levels.  This was done at the level of concepts or ontological level (similar to T-box in descriptive logic).  Linked Data allows for even more ― interrelating data at the instance level between data sets.  For example, if two different data sets contain information about the same object (e.g information about the same municipality) we can link them and enrich one description of the municipality with attributes coming from the other data set.  The example below uses links between administrative units and corresponding objects in the [DBpedia](https://wiki.dbpedia.org/) data base.  In this case DBpedia serves as a ‘linking node’, providing access to other resources and information.  Therefore we can, for example, traverse those links to retrieve the name of an administrative unit in another language.  Lets find out how to spell what the Dutch call “'s-Gravenhage”, in the other languages of the project.

<div class="textbox">
  <h2>Try it out</h2>
  <p>This query can be changed to obtain the alternative languages for other placenames.  Simply substitute <code>'s-Gravenhage</code> for another placename, for example “Amsterdam”, and click on the ‘play arrow’ on the right of the query box.  If the placename is in a different country, and the Dutch language should be requested, that can be added or replace an existing language, in the <code>bind</code> string.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/openels/-/queries/open-els-3">
</query>

## Holy Geographical Names Batman

People are used to refer to geographical features using names.
Mountains, rivers, lakes, towns, villages and even single trees can have their own names.
The OpenElS project has published more than 20 million place names (toponyms) and locations as Linked Data.
Standardised concepts for describing the meaning of place names enables semantic interoperability between national data sets.
Seamless access to such rich data allows for conducting interesting research. For example,
linguists could potentially use this data to analyse the spatial distribution of common toponym roots.
The following example shows locations of places that have "holy" as part of the name.
Obviously, the root "holy" is spelled differently in different languages.
The Linked Data technology makes it possible to formulate a single query that can interogate the national endpoints in their native
languages.
In the example below, the following spellings are used:

 - *holy* in English
 - *heilige* in Dutch
 - *hellig* in Norwegian
 - *pyhä* in Finnish
 - *sagrado* in Spanish

<div class="textbox">
  <h2>Try it out</h2>
  <p>Since this query returns geometries (they can be viewed in plain text by selecting the 'Table' option), a map visualisation has been chosen. To see the background map for a specific country (Netherlands is the default), click on the blue arrow beneath and then choose the national background map from the dropdown box. Heatmaps and grouped point representations are also available. Again, the query is editable if you wish to search for another name part.</p>
</div>

<query data-config-ref="https://data.labs.kadaster.nl/openels/-/queries/open-els-4">
</query>
