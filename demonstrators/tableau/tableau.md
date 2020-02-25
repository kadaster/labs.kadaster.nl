---
layout: page
title: When was your neighbourhood built?
---

<script type="text/javascript" src="tableauwdc-2.3.latest.js"></script>
<script type="text/javascript" src="wicket.js"></script>
<script type="text/javascript" src="moment.min.js"></script>
<script type="text/javascript" src="awesomplete.min.js"></script>
<script type="text/javascript" src="jquery.js"></script>

# Get Building Footprints for a Neighbourhood 
                
This is a Web Data Connector that helps to consume BAG data from within Tableau Desktop. 
In order ot access the data in Tableau Desktop:

  1. Navigate to <em>Data>New Data Source>WebDataConnector</em> or just press <em>Ctr+D</em>.
  2. In the Web Data Connector window enter the URL of current page (https://data.labs.pdok.nl/apps/TableauWDC.html) and press <em>Enter</em>
  3. Scroll dawn the page to see the form and the <em>Get The Buildings!</em> button
  4. Type name of a neighbourhood you are interested in, e.g <em>Twekkelerveld</em> and click the button


<div class="container container-table">
        <div class="row vertical-center-row">
            <div class="text-center col-md-4 col-md-offset-4">
                <form>
                    <div class="form-inline">
                        <label for="buurtNaam" class="text-center">Type the name of a neighbourhood</label>
				    <div class="form-inline">
				        <input type="text" class="form-control" id="buurtNaam" value="Twekkelerveld">
				    </div>
                <button type = "button" id = "submitButton" class = "btn btn-success" style = "margin: 10px;">Get The Buildings!</button>
                <div id="errorMsg"></div>
            </div>

<script type="text/javascript" src="connector.js"></script>