let currentLanguage = "";

// Set the default page to 'home'
changePage("home");

function changeLanguage(language) {
  currentLanguage = language;
  // You can add logic to update content based on the selected language
  document.getElementById("language-selection").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("header").style.display = "none"; // Hide header on language selection
  document.getElementById("gallery-header").style.display = "none"; // Hide gallery header on language selection

  // route to homepage
  changePage(home);
}

function changePage(page) {
  // Hide all pages
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  // Show the selected page
  document.getElementById(page).classList.add("active");

  // Show or hide the gallery header based on the page
  document.getElementById("gallery-header").style.display = "block";
}
