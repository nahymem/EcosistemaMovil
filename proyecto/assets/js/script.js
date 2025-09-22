// script.js - Versión mejorada y reparada
document.addEventListener('DOMContentLoaded', function () {
  const btnMenu = document.getElementById('btnMenu');
  const nav = document.getElementById('primaryNav');
  const year = document.getElementById('year');
  const body = document.body;

  // Set current year in footer
  year.textContent = new Date().getFullYear();

  // Mobile menu toggle
  btnMenu.addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    // Toggle menu state
    this.setAttribute('aria-expanded', String(!isExpanded));
    this.classList.toggle('is-active');
    nav.classList.toggle('is-open');
    body.classList.toggle('no-scroll'); // Prevent body scroll when menu is open
    
    // Focus management for accessibility
    if (!isExpanded) {
      const firstLink = nav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      this.focus();
    }
  });

  // Close mobile nav on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      // Only close if menu is active
      if (btnMenu.classList.contains('is-active')) {
        btnMenu.setAttribute('aria-expanded', 'false');
        btnMenu.classList.remove('is-active');
        nav.classList.remove('is-open');
        body.classList.remove('no-scroll');
        btnMenu.focus(); // Return focus to the menu button
      }
    });
  });

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      
      // Calculate position considering fixed header height
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});
