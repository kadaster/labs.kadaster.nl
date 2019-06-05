/**
 * Highlights the current active nav element
 */
function highlightCurrentPage() {
  var navBar = document.getElementsByClassName("navbar-collapsible")[0];
  // Go in reverse so "/" will match last
  for (var i = navBar.children.length - 1; i >= 0; i--) {
    var child = navBar.children[i];
    if (child.children.length > 1) {
      // IF we have more then one child we are in a dropdown menu
      var subMenu = child.getElementsByClassName("dropdown-items")[0];
      for (var j = 0; j < subMenu.children.length; j++) {
        var subChild = subMenu.children[j];
        if (
          document.location.pathname.indexOf(subChild.getAttribute("href")) > -1
        ) {
          // Activate child
          subChild.getElementsByClassName("navbar-title")[0].className +=
            " active";
          // Activate parent
          child.getElementsByClassName("navbar-title")[0].className +=
            " active";

          return;
        }
      }
    }
    if (document.location.pathname.indexOf(child.getAttribute("href")) > -1) {
      child.getElementsByClassName("navbar-title")[0].className += " active";
      return;
    }
  }
}

highlightCurrentPage();
