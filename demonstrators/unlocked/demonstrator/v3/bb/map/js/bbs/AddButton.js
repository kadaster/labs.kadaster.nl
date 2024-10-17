var stateChangingButton = L.easyButton({
    states: [{
            stateName: 'zoom-to-forest',        // name the state
            icon:      'fa-minus-circle',               // and define its properties
            title:     'remove previous data when adding new data',      // like its title
            onClick: function(btn, map) {       // and its callback
                document.add=true;
                btn.state('zoom-to-school');    // change state on click!
            }
        }, {
            stateName: 'zoom-to-school',
            icon:      'fa-plus-circle',
            title:     'add extra data to the map',
            onClick: function(btn, map) {
              
                btn.state('zoom-to-forest');
                  document.add=false;
            }
    }]
});
