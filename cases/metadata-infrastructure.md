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

**Begrippenkader and AI/ML**
<div class="textbox" markdown="1">
Kadaster’s Begrippenkader, or the Kadaster Catalogus, publishes a list of concepts and definitions for each data asset maintained and published by the organisation. This list falls into the scope of the structural metadata sub-system defined by this project. At present, these concept lists are not known to be reused in any way for internal or external purposes beyond providing users of Kadaster’s data with definitions for terms and concepts found in various (data) publications. The begrippenkader offers support in training Loki to answer domain-specific questions in two ways. Firstly, the concept lists and definitions mean that Loki can be easily trained to answer a question such as ‘What is the definition of a Pand?’. Loki is able to directly retrieve the concept Pand from the begrippenlist and return the definition associated. Secondly, where synonyms are available for each of these concepts, Loki can be trained to recognise where synonyms are being used in a given question and to still return the correct answer to the end user in spite of this. To support better accessibility of the complete begrippenkader for this demonstrator, the complete set of concepts is retrieved as a data dump and made available as a single metadata resource with multiple graphs via a SPARQL endpoint, in line with the system architecture defined for this project. A set of additional graphs were then added to the metadata resource to enrich the begrippenkader with relevant synonyms defined by domain experts.

### Business Impact
The begrippenkader in the current baseline architecture serves as an example of a metadata silo because there is limited application independence of the metadata contained within and because the metadata is not easily retrieved in any standardised format. Based on observation, it can also be argued that the findability of the Kadaster Catalogus is low for internal users, perhaps due to the lack of a single, recognised resource for metadata within the organisation. Loki represents a strong business case for improving the accessibility of metadata for internal purposes. This innovation product is able, through a part-implementation of the target system architecture, to easily access existing metadata in support of improved business processes, bringing the organisation closer to achieving the ambition of providing everyone with access to geoinformation. Loki also represents a context in which the reuse of metadata could not be foreseen, highlighting the need for more application independence to improve the findability and reusability of metadata. 
</div>

# Demonstrators

<div class="cards-wrapper">
<a href="/cases/metadata-begrippenkader">
  <div class="card">
    <div class="card-type">Begrippenkader</div>
    <img class="card-image" src="/assets/images/loki-logo.jpg">
    <div class="card-title">Begrippenkader, AI/ML and the chatbot Loki</div>
    <div class="card-description">This demonstrator explains how the Kadaster Begrippenkader is used by AI/ML models to train Loki.  
</div>
  </div>
</a>
</div>
