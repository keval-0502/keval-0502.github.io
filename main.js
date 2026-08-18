/* main.js — Shared portfolio JS */

// ─── Mobile nav toggle ────────────────────────────────
(function () {
  var btn = document.querySelector('.menu-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      document.getElementById('navlinks').classList.toggle('open');
    });
  }
  document.querySelectorAll('#navlinks a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.getElementById('navlinks').classList.remove('open');
    });
  });
})();

// ─── Auto-highlight active nav link ──────────────────
(function () {
  var path = window.location.pathname.split('/').pop();
  if (!path || path === '') path = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();

// ─── Reveal sections on scroll ────────────────────────
(function () {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('in'); });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function (n) { obs.observe(n); });
})();

// ─── Footer year ──────────────────────────────────────
(function () {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
