/**
 * Highlights the current active nav element
 */
function highlightCurrentPage() {
  var navBar = document.getElementsByClassName("navbar-collapsible")[0];
  for (var i = 0; i < navBar.children.length; i++) {
    var child = navBar.children[i];
    if (document.location.pathname.indexOf(child.getAttribute("href")) > -1) {
      child.getElementsByClassName("navbar-title")[0].className += " active";
      return;
    }
  }
}

highlightCurrentPage();
