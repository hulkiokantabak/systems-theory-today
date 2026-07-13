// nav-filter.js — contents-drawer behavior + contents-list filter.
// The drawer is SERVED OPEN (see base.njk): at desktop widths the summary is
// hidden, so a closed <details> would leave the whole contents list invisible
// in engines that hide closed-details content via content-visibility. JS keeps
// the attribute in sync with the viewport: open at >=901px, collapsed below.
// The filter is progressive enhancement: without JS the sidebar is a plain
// (open) list, exactly as served.
(function () {
  // ── drawer ↔ viewport sync ──
  var drawer = document.querySelector('.sidebar details');
  if (drawer) {
    var mq = window.matchMedia('(min-width: 901px)');
    var sync = function () { drawer.open = mq.matches ? true : false; };
    sync();
    if (mq.addEventListener) mq.addEventListener('change', sync);
    else if (mq.addListener) mq.addListener(sync);
  }

  // ── contents filter ──
  var box = document.querySelector('.nav-filter');
  var input = document.getElementById('navfilter');
  if (!box || !input) return;
  box.hidden = false;

  // Polite status line: announce how many pages the filter leaves visible.
  var status = document.createElement('span');
  status.className = 'visually-hidden';
  status.setAttribute('role', 'status'); // implicit aria-live="polite"
  box.appendChild(status);
  var announce = null;

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    var groups = document.querySelectorAll('.nav-inner .nav-group');
    groups.forEach(function (g) {
      var any = false;
      g.querySelectorAll('li').forEach(function (li) {
        var hit = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
        li.hidden = !hit;
        if (hit) { any = true; shown++; }
      });
      g.hidden = !any;
    });
    if (announce) clearTimeout(announce);
    announce = setTimeout(function () {
      status.textContent = shown === 1 ? '1 page shown' : shown + ' pages shown';
    }, 350);
  });
})();
