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
/**
 * Closes menu when clicked anywhere in the document
 */
var contextItems = [];
function closeContextMenu(event) {
  for (var i = 0; i < contextItems.length; i++) {
    var checkBox = document.getElementById(contextItems[i]);
    if (event.target.id === checkBox.id) {
      return;
    }
    if (event.target.id !== checkBox.id && checkBox.checked) {
      var currTarget = event.target;
      var calledOnLabel = false;
      while (currTarget) {
        if (currTarget.id === checkBox.id || currTarget.tagName === "LABEL") {
          calledOnLabel = true;
          break;
        }
        currTarget = currTarget.parentElement;
      }
      if (!calledOnLabel) {
        checkBox.checked = false;
      }
    }
  }
}
var inputs = document.getElementsByTagName("input");

// Add ID's for context-menu's
contextItems.push("buildingBlockMenu");
contextItems.push("mobileNav");
contextItems.push("educationMenu");
document.addEventListener("click", closeContextMenu, true);

highlightCurrentPage();
