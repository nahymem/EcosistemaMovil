// script.js - Versión mejorada
document.addEventListener('DOMContentLoaded', function () {
  const btnMenu = document.getElementById('btnMenu');
  const nav = document.getElementById('primaryNav');
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();

  // Menu toggle for mobile
  btnMenu.addEventListener('click', function () {
    this.classList.toggle('is-active');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    
    if (!expanded) {
      nav.style.display = 'block';
      // move focus into nav
      const firstLink = nav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      nav.style.display = '';
    }
  });

  // Close mobile nav on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        btnMenu.setAttribute('aria-expanded', 'false');
        btnMenu.classList.remove('is-active');
        nav.style.display = '';
        btnMenu.focus();
      }
    });
  });

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start'