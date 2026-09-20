(function () {
  var menu = document.getElementById('mobile-menu');
  var toggle = document.getElementById('nav-toggle');
  if (!menu || !toggle) return;

  function setOpen(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });
  menu.addEventListener('click', function (e) {
    // Cierra al elegir un link o el botón de cerrar
    if (e.target.closest('a') || e.target.closest('[data-close]')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
