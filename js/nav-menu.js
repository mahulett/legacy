function openCalloutMenu() {
    var navCallout = document.querySelector(".nav-callout-menu");
    navCallout.classList.toggle("nav-callout-active");
}

function openNavMenu() {
    var navMenu = document.querySelector(".nav-links");
    navMenu.classList.toggle("nav-open");
    var navIcon = document.querySelector(".nav-icon");
    navIcon.classList.toggle("nav-close");
}

function openNavSubMenu() {
  var navSubMenu = document.querySelector(".nav-dropdown-list");
  navSubMenu.classList.toggle("nav-active");
  var navSubLink = document.querySelector(".nav-dropdown-link");
  navSubLink.classList.toggle("pressed");
}