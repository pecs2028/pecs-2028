const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
const config = window.PECS_CONFIG || {};
try {
  const url = new URL(config.conferencePlatformUrl);
  if (url.protocol === 'https:') {
    const link = document.querySelector('.platform-link');
    link.href = url.href; link.hidden = false;
    document.querySelector('.platform-note').hidden = true;
  }
} catch { /* No official platform yet: keep the link hidden. */ }
if (typeof config.contactEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail)) {
  const link = document.querySelector('.contact-link');
  link.href = 'mailto:' + config.contactEmail; link.hidden = false;
  const text = document.querySelector('#contact p:not(.eyebrow)');
  text.textContent = document.documentElement.lang === 'es'
    ? 'Para consultas sobre la conferencia, escribe al correo oficial del equipo organizador.'
    : 'For conference enquiries, contact the organizing team using the official email below.';
}
