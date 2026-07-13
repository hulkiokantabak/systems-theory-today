// diagrams.js — render the nine figures inline on /diagrams/ and make each one
// exportable as SVG (vector) or PNG (raster). External (not inline) so the CSP
// needs no script 'unsafe-inline'. Mermaid renders with htmlLabels:false so the
// SVG has no <foreignObject> — which keeps both the SVG and the PNG export clean.
// Version: 1.0 · Last updated: Session 4b
(function () {
  var FIELD = '#0c0d18';
  var mermaidBlocks = Array.prototype.slice.call(document.querySelectorAll('.fig-art[data-kind="mermaid"]'));

  // The hand-authored SVG (figure 05) carries only a viewBox; give it explicit
  // width/height so it renders at natural size (and scrolls) like the Mermaid figures.
  document.querySelectorAll('.fig-art[data-kind="svg"] svg').forEach(function (svg) {
    if (!svg.getAttribute('width')) {
      var vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
      if (vb.length === 4) { svg.setAttribute('width', vb[2]); svg.setAttribute('height', vb[3]); }
    }
  });

  // Text alternative for a rendered diagram: expose it as role="img" named by the
  // figure's visible h2 + one-sentence assertion (Mermaid's default is a bare
  // graphics-document with no accessible name at all).
  function labelSvg(host) {
    var svg = host.querySelector('svg');
    var fig = host.closest('.fig');
    if (!svg || !fig) return;
    var t = fig.querySelector('.fig-head h2');
    var a = fig.querySelector('.fig-assert');
    var ids = [t && t.id, a && a.id].filter(Boolean).join(' ');
    svg.setAttribute('role', 'img');
    if (ids) svg.setAttribute('aria-labelledby', ids);
    else svg.setAttribute('aria-label', 'Diagram');
  }

  function wireTools() {
    document.querySelectorAll('.fig-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var n = btn.getAttribute('data-fig');
        var kind = btn.getAttribute('data-dl');
        var svg = document.querySelector('#fig-' + n + ' .fig-canvas svg');
        if (!svg) return;
        if (kind === 'svg') exportSVG(svg, n);
        else exportPNG(svg, n);
      });
    });
  }

  // Return a serialized, standalone SVG string: xmlns set, explicit width/height
  // from the viewBox, and a dark background rect so light strokes stay visible.
  function standalone(svg) {
    var clone = svg.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.removeAttribute('style');
    var vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
    var x = 0, y = 0, w, h;
    if (vb.length === 4 && vb[2] && vb[3]) { x = vb[0]; y = vb[1]; w = vb[2]; h = vb[3]; }
    else { var b = svg.getBoundingClientRect(); w = Math.round(b.width) || 800; h = Math.round(b.height) || 600; }
    clone.setAttribute('width', w);
    clone.setAttribute('height', h);
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x); rect.setAttribute('y', y);
    rect.setAttribute('width', w); rect.setAttribute('height', h);
    rect.setAttribute('fill', FIELD);
    clone.insertBefore(rect, clone.firstChild);
    return { str: new XMLSerializer().serializeToString(clone), w: w, h: h };
  }

  function download(blob, name) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  function exportSVG(svg, n) {
    var out = standalone(svg);
    var blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + out.str], { type: 'image/svg+xml;charset=utf-8' });
    download(blob, 'systems-theory-today-fig-' + n + '.svg');
  }

  function exportPNG(svg, n) {
    var out = standalone(svg);
    var scale = 2;
    var img = new Image();
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = out.w * scale; canvas.height = out.h * scale;
      var ctx = canvas.getContext('2d');
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.drawImage(img, 0, 0, out.w, out.h);
      canvas.toBlob(function (blob) { if (blob) download(blob, 'systems-theory-today-fig-' + n + '.png'); }, 'image/png');
    };
    img.onerror = function () { /* leave the on-page figure; export just no-ops */ };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(out.str);
  }

  function renderMermaid() {
    if (typeof mermaid === 'undefined') { mermaidBlocks.forEach(fallback); wireTools(); return; }
    mermaid.initialize({
      startOnLoad: false, securityLevel: 'loose', theme: 'base',
      flowchart: { curve: 'basis', htmlLabels: true, useMaxWidth: false, padding: 16 },
      fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
      themeVariables: {
        background: '#0c0d18', primaryColor: '#171a33', primaryTextColor: '#e9e7f2',
        primaryBorderColor: '#5b5e86', lineColor: '#8a88ab', secondaryColor: '#141631',
        tertiaryColor: '#101226', clusterBkg: '#10121f', clusterBorder: '#2f3252',
        titleColor: '#e9e7f2', edgeLabelBackground: '#0c0d18',
        fontFamily: '"IBM Plex Mono", ui-monospace, monospace', fontSize: '15px', nodeTextColor: '#e9e7f2'
      }
    });
    (async function () {
      for (var i = 0; i < mermaidBlocks.length; i++) {
        var host = mermaidBlocks[i];
        var src = host.querySelector('.fig-src');
        var code = src ? src.textContent : '';
        try {
          var res = await mermaid.render('figmmd-' + host.getAttribute('data-fig'), code);
          host.innerHTML = res.svg;
          labelSvg(host);
        } catch (e) { console.error('figure render failed', host.getAttribute('data-fig'), e); fallback(host); }
      }
      wireTools();
    })();
  }

  function fallback(host) {
    host.innerHTML = '<p class="fig-err">This figure renders from Mermaid, which could not load here. ' +
      'It renders on GitHub — see docs/DIAGRAMS.md.</p>';
    var tools = host.closest('.fig') && host.closest('.fig').querySelector('.fig-tools');
    if (tools) tools.style.display = 'none';
  }

  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js';
  s.integrity = 'sha384-WmdflGW9aGfoBdHc4rRyWzYuAjEmDwMdGdiPNacbwfGKxBW/SO6guzuQ76qjnSlr';
  s.crossOrigin = 'anonymous';
  s.referrerPolicy = 'no-referrer';
  s.onload = renderMermaid;
  s.onerror = function () { mermaidBlocks.forEach(fallback); wireTools(); };
  document.head.appendChild(s);
})();
