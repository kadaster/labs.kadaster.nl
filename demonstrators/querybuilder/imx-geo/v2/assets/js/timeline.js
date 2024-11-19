
class Timeline {

  constructor(yasr) {
    this.yasr = yasr;
  }
  
  draw() {

     const container = document.createElement("div");
     container.setAttribute("id", "timeResult");
     container.setAttribute("style", "margin-top:1em;");

     this.yasr.resultsEl.appendChild(container);

     var element = document.getElementById('timeResult');
     var itemsList=[];  

     var bindings = this.yasr.results.getBindings();
     if (!bindings || bindings.length === 0) {
    	 return [];
     }
    
     var dateVars = this.getDateVariables();
     for (var i = 0; i < bindings.length; i++) {
      
          var binding 	= bindings[i];
          var label		= null;
          var stringFirstDate = null;
          var stringSecondDate= null;
          var uri=null; 
          
          for (var bindingVar in binding) {
                //check if value is a date              
        	    if(dateVars.indexOf(bindingVar) >= 0) {
                    if(stringFirstDate == null) {
                    	stringFirstDate = binding[bindingVar].value;
                    } else {
                    	stringSecondDate = binding[bindingVar].value;
                    }
              } else if (binding[bindingVar].type == 'literal') {
                  label = binding[bindingVar].value;
              } else if(binding[bindingVar].type == 'uri') {
            	  uri=binding[bindingVar].value;
              }   
          }
          
          // parse the dates
          var start =	(stringFirstDate !== null)?this.parseDate(stringFirstDate):null;
          var end   =	(stringSecondDate !== null)?this.parseDate(stringSecondDate):null;
          
          // generate a default label if null
          if(label == null) {
        	  label = stringFirstDate+' / '+stringSecondDate;
          }
          
          // if we have start and end date
          if(stringFirstDate != null && stringSecondDate != null){
                if(start.getTime() < end.getTime()){
                  itemsList.push({
                    id: 		i+1,
                    content: 	'<a href="'+uri+'" target="_blank" style="text-decoration:none; cursor:pointer;" title="'+uri+'">'+label+'</a>', 
                    start: 		start, 
                    end: 		end, 
                    title: 		label + ' ('+ stringFirstDate+' / '+stringSecondDate+ ')'
                  });
                } else {
                  itemsList.push({
                    id: 		i+1, 
                    content: 	'<a href="'+uri+'" style="text-decoration:none; cursor:pointer;" target="_blank" title="'+uri+'">'+label+'</a>', 
                    start: 		end, 
                    end: 		start, 
                    title:		label + ' (' + stringSecondDate+' / '+stringFirstDate + ')'
                  });
                }
          }

          // if we have only one date
          if(stringFirstDate != null && stringSecondDate == null){  
            itemsList.push({
              id: 		i+1, 
              content: 	'<a href="'+uri+'" style="text-decoration:none; cursor:pointer;" target="_blank" title="'+uri+'">'+label+'</a>', 
              start: 	start,
              title: 	label + ' (' + stringFirstDate + ')'
            });
          }
      
    }

    var items = new vis.DataSet(itemsList);
    var options = {
    		limitSize : false,
    		showTooltips: true,
    		tooltip: {
		      followMouse: true,
		      overflowMethod: 'cap'
		    }
    };

    // Create a Timeline
    var timeline = new vis.Timeline(element, items, options);

  }
  
  parseDate(value) {
  	var dateParts = value.match(/(-?\d\d?\d?\d?)-(\d\d?)-(\d\d?)T(\d\d?):(\d\d?):(\d\d?)Z?/);

  	if(dateParts == null) {
  		var dateParts = value.match(/(-?\d\d?\d?\d?)-(\d\d?)-(\d\d?)/);
  		
  		if(dateParts == null) {
  			dateParts = value.match(/(-?\d\d?\d?\d?)/);
  			dateParts[2] = "01";
  			dateParts[3] = "01";
  		}
  	}
	
  	dateParts[2] -= 1; //months are zero-based
  	// use 3 variables constructor for proper handling of negative dates
  	// see https://stackoverflow.com/questions/41340836/why-does-date-accept-negative-values
  	return new Date(dateParts[1], dateParts[2], dateParts[3]);
  }

  canHandleResults() {
	 var dateVars = this.getDateVariables();
	 return dateVars.length == 1 || dateVars.length == 2;
  }


  getDateVariables() {
    if (!this.yasr.results) return [];
    var bindings = this.yasr.results.getBindings();
    if (!bindings || bindings.length === 0) {
      return [];
    }
    var dateVars = [];
    var checkedVars = [];
    for (var i = 0; i < bindings.length; i++) {
      var binding = bindings[i];
      for (var bindingVar in binding) {
        if (checkedVars.indexOf(bindingVar) === -1 && binding[bindingVar].value) {
          checkedVars.push(bindingVar);
          if (this.hasDateTimeDatatype(binding[bindingVar]) || this.hasDateDatatype(binding[bindingVar]) || this.hasGYearDatatype(binding[bindingVar])) {
        	  dateVars.push(bindingVar);
          }
        }
      }
      
      if (checkedVars.length === this.yasr.results.getVariables().length) {
        //checked all vars. can break now
        break;
      }
    }
    
    return dateVars;
  }
  
  hasDateDatatype(value) {
    if(value.datatype == 'http://www.w3.org/2001/XMLSchema#date'){
      return true;
    }else{
      return false;
    }
  }
  
  hasDateTimeDatatype(value) {
    if(value.datatype == 'http://www.w3.org/2001/XMLSchema#dateTime'){
      return true;
    }else{
      return false;
    }
  }
  
  hasGYearDatatype(value) {
    if(value.datatype == 'http://www.w3.org/2001/XMLSchema#gYear'){
      return true;
    }else{
      return false;
    }
  }

  getIcon() {
    const textIcon = document.createElement("div");
    textIcon.setAttribute("class", "svgImg");
    textIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M8 128h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm496 112H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-64 144H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z"></path></svg>';
    return textIcon;
  }

};

