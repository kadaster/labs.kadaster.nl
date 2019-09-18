---
banner: /assets/images/avatar_control.jpg
layout: page
title: Use Case ― Grondmarkt
---
# Use Case: 3D Maptable
<div class="cards-wrapper">
    <a href="/demonstrators/3d-map/3d-map.html">
    <div class="card">
      <div class="card-type">Demonstrator</div>
      <img class="card-image" src="/assets/images/full_brt_map.png">
      <div class="card-title">Achtergrondkaart voor de Maptable</div>
      <div class="card-description">Gebruik de Augmented Reality app van het Kadaster op deze ondergrondkaart en krijg een uniek beeld van de wijk Ughelen Buiten in Apeldoorn.</div>
    </div>
  </a>
  <a href="/download/KadasterMapTable_InnovationHub.apk">
    <div class="card">
      <div class="card-type">Download</div>
      <img class="card-image" src="/assets/images/android_icon.png">
      <div class="card-title">Android Augmented Reality App</div>
      <div class="card-description">Download hier de Augmented Reality app voor Android. Voor instructies, zie onder.</div>
    </div>
  </a>
</div>

## Introductie
Voor de opening van de innovation hub hebben we gewerkt aan een Augmented Reality app waarmee we de 3D modellen van Nederland gebruiken om informatie laagdrempelig beschikbaar te stellen. 
Het doel is uiteraard een toffe en innovatieve demonstrator, maar biedt ook een vergezicht voor waar het Kadaster naartoe wil. Het Kadaster gelooft dat data in de vorm van informatie voor iedereen laagdrempelig 
beschikbaar moet zijn. Het Kadaster wil het platform bieden waarmee iedereen met (geo-)informatie altijd en overal aan de slag kan. In 2D, 3D of zelfs vanuit een spraakgestuurde vraag. Voor een idee hoe dat laatste eruit ziet, bekijk ook vooral
<a href = "/cases/loki">Loki</a>, de geo-informatie chatbot van het Kadaster.

Daarvoor stellen wij als Data Science Team een app beschikbaar voor Android telefoons, waarmee een 3D model van de wijk Ughelen-Buiten te Apeldoorn in augmented reality kan worden bekeken. Wanneer de camera gericht is op de 
kaart bovenaan dit artikel, komen de gebouwen (en ondergrond) je vanzelf tegemoet. Door op de gebouwen te klikken, biedt de app ook de nodige informatie, zoals energielabels en bouwjaren. Deze demo komt pas echt tot zijn recht 
in de <a href = "https://innovationhub.kadaster-registratie.nl/">Kadaster Innovation Hub</a>, waar je deze demo op een 42 inch scherm kan uittesten! 

## Installatie instructies (Android)
<ol>
	<li> Download de APK (Android Package) bovenaan deze pagina of <a href = "/download/KadasterMapTable_InnovationHub.apk">door op deze link te klikken</a></li>
	<li> Omdat dit een package is die niet uit de Google Play Store komt, zul je bij je Android telefoon moeten aangeven dat het OK is om de app te installeren. 
	Dit doe je door de functionaliteit "Allow installation of apps from sources other than the Play Store" aan te zetten (NL: Installeren van apps met onbekende bronnen toestaan). 
	Voor oudere versies van android software (Voor Android 8.0) kun je dit doen door <b>Settings-->Security-->Unknown sources</b> aan te zetten. Zie ook Figuur 1. Let op dat de precieze instelling afhankelijk is van het model van je telefoon. Indien deze stap lukt, sla de volgende stap over. 
	Zoniet, ga naar de volgende stap.
		<figure id="figuur-1">
		  <a href="/assets/images/unknown_sources_settings.jpg">
			<img src="/assets/images/unknown_sources_settings.jpg">
		  </a>
		  <figcaption>
			Figuur 1 ― Settings voor unknown sources in Android
		  </figcaption>
		</figure></li>
	<li> Mocht je de instelling niet kunnen vinden op bovenstaande plekken, dan kan dat komen doordat je over een nieuwere versie van  Android beschikt. Sinds Android 8.0 (Oreo) moet je de toestemming om onbekende apps
	te installeren verlenen aan de exacte app vanaf waar je de APK hebt gedownload. Download je de APK bijvoorbeeld met Google Chrome, dan moet je de machtiging om onbekende apps te installeren verlenen aan Chrome. Zie ook de foutmelding in Figuur 2 (Links). 
	Door op instellingen te drukken brengen de meeste Android telefoons je hiervoor direct naar de juiste plek. Alternatief kun je deze machtinging vinden onder <b>Apps en meldingen-->Speciale app-toegang-->Onbekende Apps Installeren</b>. 
	Daar verleen je de toegang aan de specifieke app waarmee je de APK installeert (bijv. Chrome), zoals getoond in Figuur 2 (Rechts).  
		<figure id="figuur-2">
		  <a href="/assets/images/error-chrome-install.jpg">
			<img src="/assets/images/error-chrome-install.jpg" width="30%" height="30%">
			     
			<img src="/assets/images/allow-chrome-access.jpg" width="30%" height="30%">
		  </a>
		  <figcaption>
			Figuur 2 ― Foutmelding die Chrome geeft als het installeren van onbekende apps nog niet is toegestaan en het scherm waarin je dat kunt toestaan. 
		  </figcaption>
		</figure>
	</li>
	<li> Installeer de applicatie.</li>
	<li> Open de applicatie en richt je camera op <a href="/demonstrators/3d_map/3d-map.html">de kaart</a>. Enjoy! </li>
</ol>
			
