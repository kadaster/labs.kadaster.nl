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
    text: 'Welcome to Sparnatural tutorial. We will guide you to write your first query.',
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
    text: 'This line is a query criteria and will allow you to express what you are looking for, like a sentence.',
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
    text: '<p>The first step is to choose what you are looking for in this list.</p><p>Let\'s imagine you are interested in <em>Gebouw</em>.</p>',
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
    text: 'What you are looking for are Persons. Select Gebouw from the list.',
    attachTo: {
      element: 'li[data-value="https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.StartClassGroup li[data-value="https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Gebouw"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });

  tour.addStep({
    id: 'step--3',
    text: 'Then you need to select the kind of thing the Buurt is connected to, from this list.',
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
    id: 'step--4',
    text: 'As you are interested in <em>Gebouwen in een Buurt</em>, you are looking for a connection between the Gebouw and a Buurt. Click on Buurt.',
    attachTo: {
      element: '.EndClassGroup li[data-value="https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Buurt"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.EndClassGroup li[data-value="https://data.labs.kadaster.nl/kadaster/kkg-light/model/def/Buurt"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });


  tour.addStep({
    id: 'step--5',
    text: 'The next step is to indicate <em>how</em> the Gebouw is related to the Buurt, by selecting from this list. (Sometimes there is only one possible choice, it will be selected automatically).',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.ObjectPropertyGroup ul.list',
      on: 'bottom'
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
    id: 'step--6',
    text: 'As you are interested in Italian Painters, this means Persons <em>born in</em> the Country Italy. Select born in from the list.',
    attachTo: {
      element: '.ObjectPropertyGroup li[data-value="http://ontologies.sparna.fr/sparnatural-demo-dbpedia#bornIn"]',
      on: 'right'
    },
    advanceOn: {
      selector: '.ObjectPropertyGroup li[data-value="http://ontologies.sparna.fr/sparnatural-demo-dbpedia#bornIn"]',
      event: 'click'
    },
    classes: 'example-step-extra-class',
  });

  /*
  tour.addStep({
    id: 'step--7',
    text: 'And then you will be able to indicate that the Country you are interested in is <em>Italy</em>',
    attachTo: {
      element: 'spar-natural .CriteriaGroup>.EndClassGroup>.EditComponents>.ObjectPropertyTypeWidget',
      on: 'left'
    },
    classes: 'example-step-extra-class',
    canClickTarget: false,
    buttons: [
      {
      text: 'Next >',
      action: tour.next()
      }
    ],
    beforeShowPromise: function() {
      return waitFor(300) ;
    }
  });
  */

  tour.addStep({
    id: 'step--7',
    text: 'And then you will be able to indicate that the Country you are interested in is <em>Italy</em>. Click to unfold the list.',
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
    id: 'step--8',
    text: 'Then search or select <em>Italy</em> in the list (or any other country, actually !)',
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
    id: 'step--9',
    text: 'You have written your first criteria to search for <em>Persons born in the Country Italy</em> (or whichever you chose from the list) ! Now you need to execute the query.',
    attachTo: {
      element: 'spar-natural .CriteriaGroup',
      on: 'bottom'
    },
    classes: 'example-step-extra-class',
    buttons: [
      {
      text: 'Next >',
      action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'step--10',
    text: 'Click here to execute the query. This will successfully conclude this tutorial. Congratulations ! You can keep playing with Sparnatural and try to add more criterias to your query.',
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