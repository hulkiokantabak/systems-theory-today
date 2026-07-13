// docmeta.js — typographic tightening of the document-metadata line (Version:/
// Founder:) at the top of canonical docs. RENDER-INVARIANT by design: the text
// is byte-identical, the position unchanged (still the first element after the
// H1), nothing truncated, collapsed, or reordered — the amber-edged band makes
// the status line MORE identifiable, not less. Blockquote banners (e.g.
// "Rung-labels pending") are NOT touched.
(function () {
  var prose = document.querySelector('.prose');
  if (!prose) return;
  var ps = prose.querySelectorAll('p');
  for (var i = 0; i < Math.min(ps.length, 3); i++) {
    var t = (ps[i].textContent || '').trim();
    if (t.indexOf('Version:') === 0 || t.indexOf('Founder / author:') === 0) {
      ps[i].classList.add('docmeta');
    }
  }
})();
