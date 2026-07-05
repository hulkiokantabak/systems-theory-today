// Client-side Mermaid render for any ```mermaid blocks in the docs (e.g. DIAGRAMS).
// Loaded only when such a block exists; degrades to visible source if the CDN is blocked.
// Theme mirrors viz/diagrams.html so the two surfaces match. Kept external (not inline)
// so the site's Content-Security-Policy needs no script 'unsafe-inline'.
// Version: 1.0 · Last updated: Session 4
(function () {
  var blocks = Array.prototype.slice.call(document.querySelectorAll('pre > code.language-mermaid'));
  if (!blocks.length) return;
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js';
  s.integrity = 'sha384-WmdflGW9aGfoBdHc4rRyWzYuAjEmDwMdGdiPNacbwfGKxBW/SO6guzuQ76qjnSlr';
  s.crossOrigin = 'anonymous';
  s.referrerPolicy = 'no-referrer';
  s.onload = function () {
    mermaid.initialize({
      startOnLoad: false, securityLevel: 'loose', theme: 'base',
      flowchart: { curve: 'basis', htmlLabels: true, useMaxWidth: true, padding: 14 },
      fontFamily: '"IBM Plex Mono", monospace',
      themeVariables: {
        background: '#0c0d18', primaryColor: '#171a33', primaryTextColor: '#e9e7f2',
        primaryBorderColor: '#5b5e86', lineColor: '#8a88ab', secondaryColor: '#141631',
        tertiaryColor: '#101226', clusterBkg: '#10121f', clusterBorder: '#2f3252',
        titleColor: '#e9e7f2', edgeLabelBackground: '#0c0d18',
        fontFamily: '"IBM Plex Mono", monospace', fontSize: '14px', nodeTextColor: '#e9e7f2',
        quadrant1Fill: '#141733', quadrant2Fill: '#121529', quadrant3Fill: '#101226',
        quadrant4Fill: '#12142c', quadrant1TextFill: '#a3a1c0', quadrant2TextFill: '#a3a1c0',
        quadrant3TextFill: '#a3a1c0', quadrant4TextFill: '#a3a1c0',
        quadrantPointFill: '#f0b24a', quadrantPointTextFill: '#e9e7f2',
        quadrantXAxisTextFill: '#a3a1c0', quadrantYAxisTextFill: '#a3a1c0',
        quadrantTitleFill: '#e9e7f2', quadrantInternalBorderStrokeFill: '#2f3252',
        quadrantExternalBorderStrokeFill: '#5b5e86'
      }
    });
    (async function () {
      for (var i = 0; i < blocks.length; i++) {
        var code = blocks[i], pre = code.parentElement;
        try {
          var res = await mermaid.render('mmd-site-' + i, code.textContent);
          var fig = document.createElement('div');
          fig.className = 'figure';
          fig.innerHTML = res.svg;
          pre.replaceWith(fig);
        } catch (e) { console.error('mermaid render failed', e); }
      }
    })();
  };
  document.head.appendChild(s);
})();
