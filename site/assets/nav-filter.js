// nav-filter.js — contents-list filter (find-a-page by title). Progressive
// enhancement: without JS the sidebar renders exactly as before (cycle 1, D8).
(function () {
  var box = document.querySelector('.nav-filter');
  var input = document.getElementById('navfilter');
  if (!box || !input) return;
  box.hidden = false;
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var groups = document.querySelectorAll('.nav-inner .nav-group');
    groups.forEach(function (g) {
      var any = false;
      g.querySelectorAll('li').forEach(function (li) {
        var hit = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
        li.hidden = !hit;
        if (hit) any = true;
      });
      g.hidden = !any;
    });
  });
})();
