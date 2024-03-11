/**
 * EVENT HANDLERS
 */
// UPON PAGE LOAD
var home, map, events, settings; // booleans for page status

async function pageLoadHandler(event) {
  // Set home to true/visible, all other pages should be hidden
  home = true;
  map = false;
  events = false;
  settings = false;
  // set all other pages to hide
}

document.addEventListener("DOMContentLoaded", pageLoadHandler);

// SHOW PAGES BASED ON NAV
// event listener for each icon

/**
 * SMALL/HELPER FUNCTIONS
 */

// SHOW IF PAGE = TRUE
function showPage() {
  if (home == true) {
    // show lang page, click english to get to home
  }
  // else if etc
}
