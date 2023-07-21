---
layout: page
title: Kadaster's Metadata Infrastructure
---

# Kadaster's Metadata Infrastructure: In Support of the 'Platform of the Future'
Over the course of two years, an [EngD project](https://www.utwente.nl/en/education/tgs/interested-in/engd/what-is-engd/) was focused on the investigation and design of a future metadata infrastructure for Kadaster which supports the increasing need of the organisation to harness the potential that metadata has to improve the findability, accessibility, interoperability and reusability of its data products. The resulting design includes both an organisational and technical architecture supporting more efficient metadata management across three categories of metadata, namely; dataset descriptions, structural metadata and administrative metadata. An extract of the product document detailing on the system architecture defined for Kadaster's metadata infrastructure is available via the tile below. A full publication of thesis will be available here in due course. 

<div class="cards-wrapper">
<a href="/cases/metadata-infrastructure-design">
  <div class="card">
    <div class="card-type">Project Results</div>
    <img class="card-image" src="/assets/images/kadaster-logo.png">
    <div class="card-title">Target Architecture: Kadaster's Metadata Infrastructure</div>
    <div class="card-description">Extract of the target system architecture defined for Kadaster's Metadata Infrastructure</div>
  </div>
  </a>
</div>

Although the project was largely focused on the definition of a system architecture for Kadaster's metadata infrastructure, three proof-of-concepts were presented for the system design. The intention of these demonstrators is to highlight the potential that the system architecture has for realisation on a larger scale and demonstrate the value in making metadata more accessibile for reuse internally to support the innovation work, such as those below, that make Kadaster's data products more accessible to end users. The following provides a brief description of each demonstrator in the context of the metadata infrastructure. 

**Data Waarde Dashboard**
<div class="textbox" markdown="1">
There is a general acceptance that data is a strategic asset and that linking, sharing, enriching and facilitating the reuse of this data only makes data more valuable. The first step in increasing the value of a data asset then, is to communicate the intrinsic value of the asset to end users in order to facilitate reuse. The Data Waarde Dashboard (in English: Data Value) is designed to support users in understanding the intrinsic value of a given data asset from both a social and usability perspective. Offering an alternative perspective to the quality dashboards already made available by Kadaster for business users, the Data Waarde Dashboard visualises both the quantitative quality metrics and qualitative value annotations in such a way that users are able to better understand how a given data asset can be used in various contexts in support of societal issues. The ultimate goal in communicating this value is to increase the reuse of Kadaster’s data. The dashboard visualises quality metrics and value annotations defined for a given data asset. These metrics and annotations are defined as attributes in a metadata record published by the data asset team as part of their metadata generation activities. The dashboard interface does not have its data storage functionality and retrieves the data to be visualised based on a series of services in the form of REST APIs. 	

### Business Impact
Kadaster does not yet have a structured way of measuring and communicating the intrinsic value of her data products. By measuring value in this way, it is possible to decide internally about the ways in which it is possible to improve the accessibility, quality and reusability of data products. In addition, the communication of this intrinsic value externally means that the significance of Kadaster’s data and the potential this data has for further reuse is clear to end users, encouraging further application of our products in broader contexts. In addition to the communication of value to external users, the inclusion of these metrics in the metadata for a product or asset rather than in a specific database for the dashboard supports better management of this information independently of the application itself and supports its retrieval for use in other contexts, both internally and externally. Indeed, the same quality metrics used for the quality dashboards could be reused in this context in the future.
</div>

**Begrippenkader and AI/ML**
<div class="textbox" markdown="1">
Kadaster’s Begrippenkader, or the Kadaster Catalogus, publishes a list of concepts and definitions for each data asset maintained and published by the organisation. This list falls into the scope of the structural metadata sub-system defined by this project. At present, these concept lists are not known to be reused in any way for internal or external purposes beyond providing users of Kadaster’s data with definitions for terms and concepts found in various (data) publications. The begrippenkader offers support in training Loki to answer domain-specific questions in two ways. Firstly, the concept lists and definitions mean that Loki can be easily trained to answer a question such as ‘What is the definition of a Pand?’. Loki is able to directly retrieve the concept Pand from the begrippenlist and return the definition associated. Secondly, where synonyms are available for each of these concepts, Loki can be trained to recognise where synonyms are being used in a given question and to still return the correct answer to the end user in spite of this. To support better accessibility of the complete begrippenkader for this demonstrator, the complete set of concepts is retrieved as a data dump and made available as a single metadata resource with multiple graphs via a SPARQL endpoint, in line with the system architecture defined for this project. A set of additional graphs were then added to the metadata resource to enrich the begrippenkader with relevant synonyms defined by domain experts.

### Business Impact
The begrippenkader in the current baseline architecture serves as an example of a metadata silo because there is limited application independence of the metadata contained within and because the metadata is not easily retrieved in any standardised format. Based on observation, it can also be argued that the findability of the Kadaster Catalogus is low for internal users, perhaps due to the lack of a single, recognised resource for metadata within the organisation. Loki represents a strong business case for improving the accessibility of metadata for internal purposes. This innovation product is able, through a part-implementation of the target system architecture, to easily access existing metadata in support of improved business processes, bringing the organisation closer to achieving the ambition of providing everyone with access to geoinformation. Loki also represents a context in which the reuse of metadata could not be foreseen, highlighting the need for more application independence to improve the findability and reusability of metadata. 
</div>

**BAG Praktijkhandleiding**
<div class="textbox" markdown="1">
In the baseline and system architecture defined for this project, Praktijkhandleidingen (in English: Practical Handbooks) are presented as one of the publication outlets for which metadata is generated. Somewhat unique to this publication outlet, however, is the high level of reuse and enrichment of existing metadata in service of supporting end users in understanding as well as exchanging information and insights, in a low-threshold manner, about a particular data asset. Although various catalogues exist for the data assets documenting similar information, one Praktijkhandleiding is truly innovative in its approach to making use of metadata to communicate with end users. The following proof-of-concept supported Kadaster’s Team Research in combining metadata from various sources in a single, linked-data-based model; making the information available in the BAG Prakijkhandleiding available in both an entirely machine-readable and human-readable format. The BAg Praktijkhandleiding model is organised around different types of pages (modelled in linked data using the schema.org attribute sdo:WebPage), each of which provides specific information about the implementation or practical use of the BAG dataset. The information contained in these pages ranges from mermaid diagrams and extensive text descriptions to structural metadata such as concept lists and information models. In the operationalisation of the model, the former is simply included as text using schema.org attributes and the latter is included based on qualified references between the web pages and the structural metadata it contains. The Praktijkhandleiding in its machine-readable format is available in the same metadata repository as the previous proof-of-concepts and available via a SPARQL endpoint.

### Business Impact
The Praktijkandleiding is not a new concept within the Kadaster. The machine-readability of this publication outlet, however, is. The Praktijkhandleiding contains a lot of practical information which supports better usability of the BAG. Where this information is available as machine-readable metadata, it can be reused to support users in various contexts; including in both scenarios presented above. In addition, the scope of the handbook means that it is well suited to serve as a point of integration for metadata across all categories, with the model perhaps being the first inspiration for the Kadaster Metadata Model. A more integrated approach to metadata supports better findability, accessibility and reusability of both metadata for internal purposes and data used by external users. 
</div>

# Demonstrators

<div class="cards-wrapper">
<a href="/demonstrators/datawaardedashboard">
  <div class="card">
    <div class="card-type">Demonstrator</div>
    <img class="card-image" src="/assets/images/kadaster-logo.png">
    <div class="card-title">Data Waarde Dashboard</div>
    <div class="card-description">A dashboard which supports users in understanding the value of a data asset from a social and usability perspective</div>
  </div>
</a>
<a href="/cases/lokiv3">
  <div class="card">
    <div class="card-type">Loki</div>
    <img class="card-image" src="/assets/images/loki-logo.jpg">
    <div class="card-title">Begrippenkader, AI/ML and the chatbot Loki</div>
    <div class="card-description">Chatbot that answers questions based on the (geo)(meta)data assets of the Kadaster. Test the chatbot here! 
</div>
  </div>
</a>
  <a href="/stories/praktijkhandleiding/index.html">
  <div class="card">
    <div class="card-type">Story</div>
    <img class="card-image" src="/assets/images/geo.jpg">
    <div class="card-title">BAG Praktijkhandleiding</div>
    <div class="card-description">Overview of the schema.org enrichment of the BAG Praktijkhandleiding</div>
  </div>
</a>
</div>
