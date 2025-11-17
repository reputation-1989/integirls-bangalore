/* script.js — small helpers for nav and footer year */

(function(){
  // Mobile menu toggle
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');

  btn && btn.addEventListener('click', function(){
    if(nav.style.display === 'block'){
      nav.style.display = '';
      btn.setAttribute('aria-label', 'Open navigation');
    } else {
      nav.style.display = 'block';
      btn.setAttribute('aria-label', 'Close navigation');
    }
  });

  // Close nav when a link is clicked (mobile)
  if(nav){
    nav.addEventListener('click', function(e){
      if(e.target.tagName === 'A' && window.innerWidth < 880){
        nav.style.display = '';
      }
    });
  }

  // Fill current year in footer
  var y = new Date().getFullYear();
  var el = document.getElementById('current-year');
  if(el) el.textContent = y;

  // Smooth scrolling for anchor links
  document.addEventListener('click', function(e){
    if(e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')){
      var id = e.target.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }
  });

})();
