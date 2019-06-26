
function detectIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');
  // IE =< 10
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  const trident = ua.indexOf('Trident/');
  // IE 11
  if (trident > 0) {
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  return false;
}

const version = detectIE();
if (version && version <= 11) {
  const div = document.createElement('div');
  div.innerHTML = "There could be compatability issues with Internet Explorer. Triply supports any modern browser as an alternative, such as Chromium, Chrome, Firefox or Edge."
  // better to use CSS though - just set class
  div.setAttribute('class', 'alert'); // and make sure myclass has some styles in css
  const span = document.createElement('span')
  span.setAttribute('class', 'closebtn-warning-IE11')
  span.setAttribute('onclick', "this.parentElement.style.display='none';")
  span.innerHTML = "&times;"
  div.appendChild(span)
  document.body.insertAdjacentElement('afterbegin', div);
}
