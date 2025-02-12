---
layout: page
title: Kadaster's Metadata Infrastructure
---

# Begrippenkader, AI/ML and Loki
In the scope of the GDP project, however, the chatbot Loki has been developed as a way for users to quickly find answers to questions about their living environment. Indeed, Loki is able to answer questions in a wide range of subjects, with a focus on data questions about housing or residential areas as well as developments, permits and real estate. Loki is trained to answer these questions using a machine-learning model wherein predefined SPARQL and GraphQL queries are mapped to natural language questions. These questions are defined by the Kadaster Data Science Team in collaboration with stakeholders across the organisation. To support the conversationality of Loki, it is important for Loki to recognise when synonyms are being used in a question that can otherwise be mapped to a predefined SPARQL or GraphQL query. Although synonym models specifically for training such a model do exist, domain-specific synonyms are, arguably, best provided by Kadaster’s own metadata. As such, the following proof-of-concept was defined to highlight how this particular structural metadata can support ongoing innovation projects and why such metadata should be easily accessible to internal users. 

## Functionality
The begrippenkader offers support in training Loki to answer domain-specific questions in two ways. Firstly, the concept lists and definitions mean that Loki can be easily trained to answer a question such as ‘What is the definition of a Pand?’. Loki is able to directly retrieve the concept Pand from the begrippenlist and return the definition associated. Secondly, where synonyms are available for each of these concepts, Loki can be trained to recognise where synonyms are being used in a given question and to still return the correct answer to the end user in spite of this. 

## Construction
To realise this proof-of-concept, a number of changes to the baseline architecture were required. At present, concepts and definitions in the Kadaster Catalogus are only retrievable per concept as individual turtle files. To support better accessibility of the complete begrippenkader for this demonstrator, the complete set of concepts is retrieved as a data dump and made available as a single metadata resource with multiple graphs via a SPARQL endpoint, in line with the system architecture defined for this project. A set of additional graphs were then added to the metadata resource to enrich the begrippenkader with relevant synonyms defined by domain experts. These lists of synonyms are easily updated without altering the begrippenkader graphs themselves. This endpoint is then routinely accessed by Loki for training purposes, preserving the application independence of the metadata itself.

# Demonstrators
<div class="cards-wrapper">
<a href="https://data.labs.kadaster.nl/dst/begrippenkader">
  <div class="card">
    <div class="card-type">Begrippenkader</div>
    <img class="card-image" src="/innovatie/metadata/metadata_begrippenkader.jpg">
    <div class="card-title">Kadaster's Begrippenkader</div>
    <div class="card-description">The complete list of terms and definitions, as well as an accessible SPARQL endpoint, is available here. 
</div>
  </div>
</a>
<a href="/innovatie/lokiv3/loki_v3">
  <div class="card">
    <div class="card-type">Loki</div>
    <img class="card-image" src="/innovatie/lokiv3/loki_v3.jpg">
    <div class="card-title">Begrippenkader, AI/ML and the chatbot Loki</div>
    <div class="card-description">Chatbot that answers questions based on the (geo)(meta)data assets of the Kadaster. Test the chatbot here! 
</div>
  </div>
</a>
</div>
