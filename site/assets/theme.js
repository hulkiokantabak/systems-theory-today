// theme.js — day/night toggle. Loaded synchronously in <head> so the saved theme is
// applied before first paint (no flash). External (not inline) so the CSP stays strict.
// Version: 1.0 · Last updated: Session 4b
(function () {
  var KEY = 'st-theme';
  var root = document.documentElement;
  function apply(t) { root.setAttribute('data-theme', t); }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  apply(saved || (prefersLight ? 'light' : 'dark'));

  function wire() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    function paint() {
      var cur = root.getAttribute('data-theme');
      var toLight = cur !== 'light';
      btn.setAttribute('aria-label', toLight ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', String(cur === 'light'));
      btn.textContent = cur === 'light' ? '☾' : '☀'; // moon / sun
    }
    paint();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      var m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute('content', next === 'light' ? '#f6f3ec' : '#0c0d18');
      paint();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
