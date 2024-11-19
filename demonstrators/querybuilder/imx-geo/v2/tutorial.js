function waitFor(millis) {
  return new Promise(function(resolve) {
    setTimeout( function () { resolve(); }, millis);
  });
}

var tour;
var StepToWait3;

function initTour() {
  tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      scrollTo: false,
      popperOptions: {
        modifiers: [{ name: 'offset', options: { offset: [20, 20] } }]
        }
    }
  });
  tour.addStep({
    id: 'step-home',
    text: 'Welkom. Dit is de KKG querybuilder handleiding. Samen gaan we een simpele vraag samenstellen.',
    classes: 'example-step-extra-class',
    buttons: [
      {
        text: 'Start !',
        action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'step-0',
    text: 'Deze regel wordt gebruikt om een deel van de vraag weer te geven.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup',
      on: 'bottom'
    },
    canClickTarget: false,
    classes: 'example-step-extra-class',
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'step--1',
    text: '<p>De eerste stap is om te selecteren waarin je geinteresseerd bent.</p><p>Bijvoorbeeld <em>Gebouwen</em>.</p>',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.StartClassGroup ul.list',
      on: 'right'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'step--2',
    text: 'Zoek het Object Gebouw en selecteer het uit de lijst.',
    attachTo: {
      element: 'li[data-value="http://modellen.geostandaarden.nl/def/imx-geo#Gebouw"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.StartClassGroup li[data-value="http://modellen.geostandaarden.nl/def/imx-geo#Gebouw"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });

  tour.addStep({
    id: 'step--3',
    text: 'Selecteer nu gebouwtype uit deze lijst.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.EndClassGroup ul.list',
      on: 'right'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ],
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });



  



  tour.addStep({
    id: 'step--5',
    text: 'Nu kun je een gebouwtype specificeren .',
    attachTo: {
      element: '.EndClassGroup li[data-value="http://www.labs.kadaster.nl/sparnatural/Text125"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.EndClassGroup li[data-value="http://www.labs.kadaster.nl/sparnatural/Text125"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });


  tour.addStep({
    id: 'step--4',
    text: 'open de lijst van gebouwtypes',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.WidgetWrapper>.list-widget',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    canClickTarget: true,
    advanceOn: {
      selector: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.WidgetWrapper>.list-widget',
      event: 'click'
    },
    beforeShowPromise: function() {
      return waitFor(1000) ;
    }
  });


  StepToWait3 = tour.addStep({
    id: 'step--5',
    text: 'selecteer een gebouwtype uit de lijst, bijvoorbeeld Kerk',
    attachTo: {
      // element: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.ObjectPropertyTypeWidget .list-widget',
      element: '.select2-dropdown',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    canClickTarget: true,
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });




 

  tour.addStep({
    id: 'step--10',
    text: 'Je hebt nu een eerste regel aangemaakt. Gefeliciteerd. Je kunt nog meer regels toevoegen. Door op deze knop te drukken wordt de zoekvraag gesteld aan de KKG en worden de antwoorden in de kaart weergegeven.',
    attachTo: {
      element: '.submitSection a',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    advanceOn: {
      selector: '.submitSection a',
      event: 'click'
    },
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });

  tour.start();
}