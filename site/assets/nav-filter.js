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

  // Curated keyword layer (cycle 3): the filter matches label text PLUS these
  // per-page keywords, so a topic-driven query ("institutional decay", "Y3")
  // finds its pages. Every keyword occurs verbatim in the target page's rendered
  // text. This affordance stays labeled "Filter contents…" — it finds pages,
  // not passages, and only knows curated vocabulary; it is not search.
  var KEYWORDS = {
    '/topics/': 'coherence vacuum acceleration adaptation gap optimization wealth pump inequality machine intelligence epistemic breakdown post-truth propaganda coordination failure institutional decay ecological overshoot climate fertility collapse births attention economy dopamine populism authoritarianism anomie loneliness M D1 D2 D3 D4 Y1 Y2 Y3 Y4 S1 S2 S3 S4',
    '/docs/pressure_tests_causal_hypothesis/': 'institutional decay wealth pump populism Y3 signed graph arrows',
    '/outputs/theory_a_operationalized/': 'adaptation gap',
    '/outputs/theory_b_operationalized/': 'optimization ecology',
    '/outputs/theory_c_operationalized/': 'distributed coherence commons of sense-making',
    '/docs/glossary/': 'definitions vocabulary terms'
  };
  var KEY_PATHS = Object.keys(KEYWORDS);
  var keyOf = function (li) {
    var a = li.querySelector('a');
    if (!a) return '';
    var href = a.getAttribute('href') || '';
    // Deployed sites may carry a path prefix; match by suffix.
    for (var i = 0; i < KEY_PATHS.length; i++) {
      if (href === KEY_PATHS[i] || href.slice(-KEY_PATHS[i].length) === KEY_PATHS[i]) {
        return KEYWORDS[KEY_PATHS[i]].toLowerCase();
      }
    }
    return '';
  };

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
        var hit = !q || li.textContent.toLowerCase().indexOf(q) !== -1 || keyOf(li).indexOf(q) !== -1;
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
