---
layout: page
title: When was your neighbourhood built?
---

<script type="text/javascript" src="tableauwdc-2.3.latest.js"></script>
<script type="text/javascript" src="wicket.js"></script>
<script type="text/javascript" src="moment.min.js"></script>
<script type="text/javascript" src="awesomplete.min.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<link href="./index.css" rel="stylesheet"> 


# Getting Building Footprints for a Neighbourhood 
                
This is a Web Data Connector that helps to consume BAG data from within Tableau Desktop. 

Follow the steps, in order ot access the data in Tableau Desktop:
  
 - **Step1.** Navigate to <em>Data>New Data Source>WebDataConnector</em> or just press <em>Ctr+D</em>.
 - **Step2.** In the Web Data Connector window enter the URL of current page (https://labs.kadaster.nl/demonstrators/tableau/tableau.html) and press <em>Enter</em>
 - **Step3.** Scroll dawn the page to see the form and the <em>Get The Buildings!</em> button
 - **Step4.** Type name of a neighbourhood you are interested in, e.g <em>Twekkelerveld</em> and click the button
 

 <form class="form-inline">
   <input type="text" id="buurtNaam" value="Twekkelerveld">
   <button type = "button" id = "submitButton">Get The Buildings!</button>
 </form>


<script type="text/javascript" src="connector.js"></script> 
