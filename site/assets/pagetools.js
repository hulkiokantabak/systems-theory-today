// pagetools.js — per-page "Save as PDF" (via print) and "Share" (Web Share API, with a
// copy-link fallback). Lets a reader export a page to PDF or send it to WhatsApp / Peech / etc.
// on mobile. External (not inline) so the CSP stays strict.
// Version: 1.0 · Last updated: Session 4b
(function () {
  var pdf = document.querySelector('.pt-pdf');
  var share = document.querySelector('.pt-share');

  if (pdf) {
    pdf.addEventListener('click', function () { window.print(); });
  }

  if (share) {
    var title = (document.querySelector('h1') && document.querySelector('h1').textContent.trim()) || document.title;
    var url = (document.querySelector('link[rel="canonical"]') && document.querySelector('link[rel="canonical"]').href) || location.href;
    var canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
    if (!canShare) share.textContent = '⧉ Copy link';
    share.addEventListener('click', function () {
      if (canShare) {
        navigator.share({ title: title, text: title + ' — A Systems Theory for Today', url: url })
          .catch(function () { /* user cancelled */ });
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          var t = share.textContent; share.textContent = '✓ Copied'; setTimeout(function () { share.textContent = t; }, 1600);
        });
      } else {
        window.prompt('Copy this link:', url);
      }
    });
  }
})();
