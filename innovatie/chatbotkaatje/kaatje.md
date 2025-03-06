---
layout: page
---

# Chatbot Kaatje

De afgelopen periode heeft Generatieve AI een vlucht genomen en zijn er bij het Data Science Team verschillende verzoeken gekomen voor de ontwikkeling van een chatbot. Om de uniformiteit en standaardisatie te verhogen is er middels een technische verkenning onderzocht of er een generieke chatbot ontwikkeld kan worden die verschillende use cases kan ondersteunen. Binnen deze verkenning is ook een prototype van zo’n generieke chatbot opgeleverd: chatbot Kaatje.

## Werking van Kaatje

![Technisch overzicht Kaatje](assets/gc_technical-overview.png)

### Buckets / RAG

Onze aanpak voor het gronden van de LLM met Kadaster data is gebaseerd op Retrieval Augmented Generation (RAG):

- **Buckets:**  We hebben meerdere buckets, afzonderlijk bevraagbare sets aan data, ingericht waarin tekstfragmenten uit diverse brondocumenten (bijvoorbeeld de Kadaster Wiki, de Kadaster-website en de ServicePortal Kennisbank) worden opgeslagen.
- **Inladen van Data:**  De brondocumenten worden eerst omgezet van HTML naar Markdown. Hierdoor behouden we de structuur (zoals koppen en tabellen) en zorgen we voor heldere, contextuele tekstchunks. Deze chunks worden niet met een standaard sliding window gemaakt, maar op basis van Markdown-koppen, zodat elk fragment inhoudelijk homogeen blijft.
- **Vectorisatie & Hybrid Search:** Met behulp van embedding modellen (zoals text-embedding-3-small en -large via Azure AI Foundry) zetten we de tekst om in vectoren. Vervolgens passen we een hybride zoekmethode toe, waarbij we zowel vector search combineren met traditionele keyword search (bijvoorbeeld BM25).
- **Reranking:** Om de meest relevante documenten te identificeren, wordt er een extra reranking stap uitgevoerd met een tool als de Cohere reranker. Dit zorgt voor een geoptimaliseerde selectie van de bronnen die als context aan de LLM worden meegegeven.
- **Beveiligde Data Toegang:**  Dankzij Row-level security (RLS) heeft elke gebruiker alleen toegang tot de buckets waar hij of zij toestemming voor heeft.

### Function Calling

Naast het ophalen van relevante documenten hebben we de functionaliteit voor het aanroepen van externe tools geïntegreerd, oftewel 'function calling'. Dit is als volgt geïmplementeerd:

- **Dynamische Tool Selectie:**  Afhankelijk van de vraag van de gebruiker kan de chatbot besluiten dat extra, actuele informatie nodig is. Hiervoor worden vooraf gedefinieerde functies of tools aangeroepen.
- **Voorbeelden van Functies:**
  - **Websearch:** Met behulp van de Bing API haalt de chatbot actuele informatie op voor onderwerpen als wetgeving of marktontwikkelingen.
  - **CBS-tool:** Voor statistische en demografische gegevens wordt er data opgevraagd via de CBS API.
  - **Kadaster & PDOK Tools:** Voor vastgoed- en geografische data worden specifieke tools ingezet, die op basis van de gebruikersvraag de relevante data uit de Kadaster databases of PDOK-datasets ophalen.
- **Integratie & Transparantie:**  De stappen en resultaten van deze function calls worden duidelijk weergegeven in de chat omgeving en verwerkt door de LLM in het antwoord. Deze bronvermelding stelt de gebruiker in staat de herkomst van de data te kunnen verifiëren en vergroot het vertrouwen in het systeem.
- **Beheer van Toegang:**  Ook de toegang tot deze externe tools wordt geregeld via dezelfde autorisatie mechanismen als bij de buckets, zodat alleen geautoriseerde gebruikers de functies kunnen activeren.

### Authenticatie en Autorisatie

Voor een veilige en schaalbare toegang tot de chatbot hebben we een centrale OAuth2-oplossing via Kadaster MAP ingezet. Hierbij verloopt alle inkomende communicatie via een OAuth2-proxy, die:

- **Token Validatie**: Alle binnenkomende verzoeken controleert op een geldige OAuth2-token.
- **Gebruikersinformatie Injectie**: Na succesvolle validatie worden de gebruikersgegevens – zoals e-mailadres en bijbehorende rollen – toegevoegd aan de HTTP-request headers.
- **Rechtenbeheer**: Op basis van deze rollen bepaalt de chatbot welke data en functies beschikbaar zijn. Hierdoor krijgen gebruikers alleen toegang tot de buckets en functionaliteiten waarvoor zij geautoriseerd zijn, zonder dat zij aparte accounts hoeven aan te maken.

## Evaluatie

Wij hebben de RAG-functionaliteit systematisch geëvalueerd door middel van een gestructureerde benchmarkopzet. Hierbij hebben we een synthetische vraag-antwoord dataset ontwikkeld, gebaseerd op 50 willekeurige documenten per bucket (totaal 150 paren), met behulp van DeepEval Synthesizer. Deze dataset stelde ons in staat om, met vooraf gedefinieerde grondwaarheden, de output van de chatbot te vergelijken via meerdere metrieken, waaronder semantische gelijkenis (SS), antwoordrelevantie (AR), feitelijke correctheid (FC), context recall (CR), context precisie (CP) en factuality (F).

In onze experimenten hebben we verschillende configuraties getest, zoals het effect van hybrid search met of zonder reranking, varianten in embedding modellen (small vs. large) en generatie modellen (GPT-4o tegenover GPT-4o-mini), alsook de toegevoegde waarde van extra metadata bij de chunking van documenten. De evaluatieresultaten gaven aan dat het toepassen van reranking in combinatie met hybrid search een bescheiden verbetering (ongeveer 2 %) opleverde. Tevens bleek dat GPT-4o-mini vergelijkbare prestaties leverde als GPT-4o en dat er geen doorslaggevend verschil werd waargenomen tussen small en large embeddings.

Deze gestructureerde evaluatie was cruciaal om de effectiviteit van onze RAG-aanpak te meten, de impact van diverse parameters inzichtelijk te maken en gerichte optimalisaties door te voeren voor toekomstige doorontwikkeling. Tevens benadrukt de evaluatie het belang van een robuuste benchmark als basis voor het vergelijken van verschillende modellen en instellingen, ondanks dat de huidige dataset nog verder uitgebreid kan worden voor nog representatievere tests.

## Conclusie

Middels het prototype “Kaatje” is aangetoond dat er een generieke chatbot ontwikkeld kan worden die de basis kan bieden voor diverse use cases. Bij de ontwikkeling van Kaatje is gekozen voor een eigen chatbot opzet, maar met gebruik van OpenAI modellen die gehost worden door Azure .

Kaatje is een interface waarbinnen gebruikers antwoord krijgen op een breed scala aan vragen. Documenten uit verschillende bronnen kunnen worden ingeladen en afzonderlijk worden bevraagd. Ook is de chatbot uitbreidbaar met verschillende functionaliteiten en kan deze gekoppeld worden met andere systemen middels APIs. Hoewel door het gebruik van generatieve taalmodellen en het open domein onjuistheden en hallucinaties mogelijk zijn, worden die geminimaliseerd door het raadplegen van de verschillende buckets en het toevoegen van bronvermelding.

Het huidige prototype leent zich daarmee voor doorontwikkeling tot volledig product. Deze generieke dienst zou dan ingezet en geconfigureerd kunnen worden voor verschillende producten en diensten binnen en buiten het Kadaster.

## Showcase Prototype

### Chat Pagina

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/startscherm_met_chat.png"
   caption="Het startscherm, met het chat-window en de recept, bucket en functie selectors"
   width="1100px"
   shadow="true" %}

---

### Bronvermelding RAG

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/bronvermelding.png"
   caption="Bronvermelding van opgehaalde tekststukken"
   width="600px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/bronvermelding_uitgeklapt.png"
   caption="Bronvermelding uitgeklapt"
   width="600px"
   shadow="true" %}

---

### Bronvermelding Functies

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/status_messages_funcs.gif"
   caption="Status berichten over het uitvoeren van functies"
   width="1100px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/bronvermelding_loki_func.gif"
   caption="Bronvermelding van API calls"
   width="1100px"
   shadow="true" %}

---

### Multimodaliteit

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/multimodality.gif"
   caption="Support voor afbeeldingen"
   width="1100px"
   shadow="true" %}

---

### UI Overig

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/a_b_test.gif"
   caption="A/B tests voor evaluatie verschillende settings"
   width="1100px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/advanced_settings.png"
   caption="Geavanceerde instellingen voor de chatbot"
   width="600px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/toegankelijkheid.png"
   caption="Toegankelijkheid opties"
   width="600px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/plugin_info.png"
   caption="Info over de buckets en functies"
   width="600px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/tooltips.png"
   caption="Tooltips"
   width="600px"
   shadow="true" %}

---

### Admin Page

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/admin_recipes.png"
   caption="Aanmaak van en inzicht in globale recepten"
   width="1100px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/admin_users.png"
   caption="Aanmaak van en inzicht autorisaties gebruikers"
   width="1100px"
   shadow="true" %}

---

### User Setting Page

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/user_settings.png"
   caption="Aanmaak van persoonlijke recepten"
   width="1100px"
   shadow="true" %}

{% include figure.html
   path="/innovatie/chatbotkaatje/assets/model_settings.png"
   caption="Aanpassen instellingen voor RAG en LLM"
   width="1100px"
   shadow="true" %}
