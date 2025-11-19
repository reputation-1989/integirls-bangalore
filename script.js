// script.js — small helpers: menu toggle, set current year
document.addEventListener("DOMContentLoaded", function() {
  // menu toggle
  var menuToggle = document.getElementById("menu-toggle");
  var siteNav = document.getElementById("site-nav");
  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function() {
      siteNav.classList.toggle("active");
    });
  }

  // set current year in footer
  var y = new Date().getFullYear();
  var el = document.getElementById("current-year");
  if (el) el.textContent = y;
});
