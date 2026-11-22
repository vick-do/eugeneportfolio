// Shared behaviour for Work, Process and About pages

// Menu toggle
const menuBtn = document.getElementById('menuButton');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', menu.classList.toggle('open'));
  });
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) menu.classList.remove('open');
  });
}

// Live Accra clock (any element with data-clock)
const clocks = document.querySelectorAll('[data-clock]');
const tick = () => {
  const t = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Accra'
  }).format(new Date());
  clocks.forEach(c => c.textContent = t);
};
if (clocks.length) { tick(); setInterval(tick, 15000); }

// Footer year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Reveal elements as they scroll into view
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Placeholder images fall back to the local image if offline
// (path worked out from where site.js lives, so it also works in sub-folders)
const SITE_ROOT = document.currentScript ? document.currentScript.src.replace(/site\.js.*$/, '') : '';
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    if (!img.src.endsWith('images/image.png')) img.src = SITE_ROOT + 'images/image.png';
  }, { once: true });
});
