#!/usr/bin/env node
// build-dashboard.mjs — generate the repository control-room / cockpit.
//
// Produces a SELF-CONTAINED, offline-openable `dashboard/index.html` (+ a
// machine-readable `dashboard/status.json`) from LIVE repo measurement — counts
// are measured, not asserted, and each links to its evidence file. The validation
// status is the ACTUAL result of the standing checks (this script runs them).
//
// The dashboard is a maintainer surface (like logs/handoffs/): it is NOT published
// on the public reading site, and it is EXCLUDED from the content baseline.
//
// Regenerate with:  npm run dashboard   (do NOT hand-edit dashboard/index.html —
// it is generated; edit this file instead.)
//
// Version: 1.0 · Status: Living · Last updated: Session 4b

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, join } from 'node:path';
import { REPO_ROOT, contentBaselineFiles, docFiles, rel, CODE_LAYER_FILES } from './lib/repo.mjs';

const OUT_DIR = resolve(REPO_ROOT, 'dashboard');
const SCRIPTS = resolve(REPO_ROOT, 'scripts');
const SITE_URL = 'https://hulkiokantabak.github.io/systems-theory-today/';

function sh(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: REPO_ROOT, encoding: 'utf8' });
  return { code: r.status ?? 1, out: (r.stdout || '').trim(), err: (r.stderr || '').trim() };
}
function node(script, extra = []) { return sh(process.execPath, [join(SCRIPTS, script), ...extra]); }
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// --- git state ---
const git = {
  branch: sh('git', ['rev-parse', '--abbrev-ref', 'HEAD']).out || '(unknown)',
  commit: sh('git', ['rev-parse', '--short', 'HEAD']).out || '(none)',
  tag: sh('git', ['describe', '--tags', '--abbrev=0']).out || '(none)',
  lastDate: sh('git', ['log', '-1', '--format=%cs']).out || '',
  hasRemote: sh('git', ['remote']).out.length > 0,
};

// --- validation: run the standing checks for real ---
const countsJson = node('check-counts.mjs', ['--json']);
let counts = null;
try { counts = JSON.parse(countsJson.out); } catch { /* leave null */ }
const refs = node('check-references.mjs');
const diags = node('check-diagrams.mjs');
const validation = {
  references: refs.code === 0,
  counts: countsJson.code === 0,
  diagrams: diags.code === 0,
};
validation.overall = validation.references && validation.counts && validation.diagrams;

// --- structure measurement ---
const baseline = contentBaselineFiles().map(rel);
const catByTop = {};
for (const f of baseline) {
  const parts = f.split('/');
  const key = parts.length === 1 ? '(root)' : (parts[0] === 'logs' && parts[1] === 'handoffs' ? 'logs/handoffs' : parts[0]);
  catByTop[key] = (catByTop[key] || 0) + 1;
}
const codeLayer = docFiles().map(rel).filter((r) => CODE_LAYER_FILES.has(r));
const studies = existsSync(resolve(REPO_ROOT, 'studies'));
const r = counts ? counts.reality : {};

const stampNow = new Date();
const generatedAt = stampNow.toISOString();

// ------------------------------------------------------------------ status.json
const status = {
  generatedAt,
  project: 'A Systems Theory for Today',
  git,
  validation,
  counts: {
    contentFiles: r.files, catches: r.catches, learnings: r.learnings,
    openQuestions: r.openQ, disagreements: r.disagreements,
    diagrams: r.diagrams, vizFigures: r.vizFigures,
    pressureTests: r.pressureTests, groundRules: r.groundRules,
  },
  categories: catByTop,
  codeLayerExcluded: codeLayer,
  gates: { lightCode: 'stood up', heavyCode: 'gated (needs a tested Theory-A claim + a fresh ratified work-order)' },
};

// ------------------------------------------------------------------ HTML pieces
const badge = (ok) => ok
  ? '<span class="badge ok">&#10003; pass</span>'
  : '<span class="badge fail">&#10007; FAIL</span>';

const flink = (path, label) => `<a href="../${esc(path)}">${esc(label || path)}</a>`;

const countRow = (label, value, evidence) =>
  `<tr><td>${esc(label)}</td><td class="num">${value ?? '—'}</td><td>${flink(evidence)}</td></tr>`;

const CANONICAL = [
  ['docs/', 'Reference layer — history, landscape, goals, method, metrics, glossary, the diagrams source, the shuttle, the living-document. Author ratifies changes.', 'docs/'],
  ['panel/', 'Deliberation — the roster and the enacted sessions. Append-only in spirit; overturned claims are marked, not erased.', 'panel/'],
  ['outputs/', 'Output — the seeded candidate theories and each theory operationalized (A/B/C), plans, evaluation. Revisions bump a version.', 'outputs/'],
  ['logs/', 'Learning loop — Catches -> Learnings -> rule changes; Open-Questions (the frontier); Reflections.', 'logs/'],
  ['logs/handoffs/', 'The Chat/Code shuttle — work-orders, the append-only cooperation log, the digests, and R3 (the gist).', 'logs/handoffs/'],
  ['viz/', 'HAND-AUTHORED interactive figures (edit directly). One SVG (figure 05) + Mermaid renders of DIAGRAMS.md.', 'viz/'],
  ['(root docs)', 'README, ARCHITECTURE, SKILL, CONTRIBUTING, LICENSE — the front door + structural reference.', 'README.md'],
];

const GENERATED = [
  ['_site/', 'The public reading site, built by Eleventy. <strong>Do not edit</strong> — edit the docs or <code>site/</code>. Git-ignored; built by CI.', true],
  ['dashboard/index.html', 'This cockpit. <strong>Do not hand-edit</strong> — edit <code>scripts/build-dashboard.mjs</code> and run <code>npm run dashboard</code>.', true],
  ['logs/handoffs/R3_GIST.md', 'Code-maintained gist of the whole — regenerated each digest.', false],
  ['node_modules/', 'Dependencies. Git-ignored.', true],
];

const COMMANDS = [
  ['npm run build', 'Render the reading site to _site/'],
  ['npm run serve', 'Local dev server with live reload'],
  ['npm run check', 'Standing checks: references + counts + diagrams (run before every commit)'],
  ['npm run dashboard', 'Regenerate this cockpit from live repo state'],
  ['node scripts/ripple.mjs --entity pressure-tests', 'Structural-change -> ripple helper (who references X; missing dependents)'],
  ['node scripts/ripple.mjs --list', 'List the named canonical entities the ripple helper knows'],
];

const GUARDRAILS = [
  'Nothing genuinely argued is silently erased. Overturned claims are marked overturned; minority reports survive; the logs are append-only (ARCHITECTURE &sect;8).',
  'The chair (Claude) does not vote. The author (Hulki Okan Tabak) ratifies. Code executes only ratified work-orders.',
  'Two surfaces: the repository is PRIVATE (contribution surface, until the skeleton is stable); the website is PUBLIC (reading surface). Do not make the repo public without ratification (THE_LIVING_DOCUMENT &sect;7).',
  'Propagation is Code&#39;s job: a canonical structural change must ripple to every dependent document in the same commit (C-010 / L-006). Use scripts/ripple.mjs, and fail loudly on a dangling reference.',
  'The content baseline is 34 files and reconciles with docs/METRICS.md. Code-layer files (digests, R3, this dashboard) are excluded from that count.',
  'The three studies are GATED: prepared, not run. Running any of them crosses Gate 2 (heavy Code) and requires a fresh ratified work-order.',
  'Do not edit generated output (_site/, dashboard/index.html). viz/*.html ARE hand-authored — edit them directly.',
  'Every doc carries a versioned header (Version &middot; Status &middot; Last updated: Session N). Append to the cooperation log on every Chat&harr;Code exchange.',
];

const NEXT_MOVES = [
  ['Deploy the reading site', 'Push the private repo to GitHub as <code>systems-theory-today</code>, enable Pages (Source: GitHub Actions). CI builds with PATH_PREFIX=/systems-theory-today/ and deploys to <a href="https://hulkiokantabak.github.io/systems-theory-today/">hulkiokantabak.github.io/systems-theory-today</a>. Repo stays private.'],
  ['Work the frontier', 'Start at ' + flink('logs/OPEN_QUESTIONS.md', 'OPEN_QUESTIONS.md') + ' — Q-001 (operationalize the gap into a tested claim) is the flagship; Q-012 (C&#39;s entangled baseline) is next.'],
  ['Toward Heavy Code (gated)', 'Finalize ' + flink('studies/study-B-optimization/PRE_REGISTRATION.md', 'Study B&#39;s pre-registration') + ' (cheapest) and emit a fresh ratified work-order. Running a study is Gate 2.'],
  ['Regenerate this cockpit', 'After any change to the repo&#39;s shape, run <code>npm run dashboard</code> and commit; the counts/status above will refresh.'],
];

// ------------------------------------------------------------------ assemble
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; base-uri 'none'; form-action 'none'">
<title>Console &middot; A Systems Theory for Today</title>
<!-- GENERATED FILE — do not hand-edit. Source: scripts/build-dashboard.mjs · npm run dashboard -->
<!-- PRIVATE, SOLO, SINGLE-PROJECT working dashboard for the author + Claude. Not public.
     Not the cross-project reporting control-room. Just the two of us, running this one repo. -->
<style>
:root{
  --field:#0c0d18; --field-2:#141631; --panel:#111327; --ink:#e9e7f2; --ink-soft:#a3a1c0;
  --ink-faint:#6f6d90; --amber:#f0b24a; --cyan:#49c7d8; --ok:#5fd08a; --fail:#f0685a;
  --hair:rgba(255,255,255,.10); --hair-2:rgba(255,255,255,.055);
  --serif:"Newsreader",Georgia,"Times New Roman",serif;
  --mono:ui-monospace,"Cascadia Mono","Consolas","SF Mono",Menlo,monospace;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(1200px 720px at 50% -10%, var(--field-2) 0%, var(--field) 60%) fixed,var(--field);
  color:var(--ink);font-family:var(--sans);font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased}
.wrap{max-width:1080px;margin:0 auto;padding:0 clamp(18px,4vw,40px)}
a{color:var(--amber);text-decoration:none;border-bottom:1px solid rgba(240,178,74,.32)}
a:hover{border-bottom-color:var(--amber)}
header.top{border-bottom:1px solid var(--hair);padding:clamp(26px,5vw,44px) 0 22px;margin-bottom:8px}
.eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--ink-faint);margin:0 0 12px}
h1{font-family:var(--serif);font-weight:600;font-size:clamp(26px,4.5vw,40px);letter-spacing:-.015em;margin:0}
.tagline{font-family:var(--serif);font-style:italic;color:var(--ink-soft);font-size:15.5px;line-height:1.5;max-width:66ch;margin:12px 0 0}
.tagline b{font-style:normal;color:var(--ink);font-weight:600}
.meta{font-family:var(--mono);font-size:12.5px;color:var(--ink-faint);margin:16px 0 0;line-height:1.9}
.meta b{color:var(--ink-soft);font-weight:500}
.statusbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:18px 0 0}
.badge{font-family:var(--mono);font-size:12px;padding:3px 10px;border-radius:20px;border:1px solid var(--hair);white-space:nowrap}
.badge.ok{color:var(--ok);border-color:rgba(95,208,138,.4);background:rgba(95,208,138,.08)}
.badge.fail{color:var(--fail);border-color:rgba(240,104,90,.45);background:rgba(240,104,90,.10)}
.badge.big{font-size:13px;padding:5px 14px}
section{padding:26px 0;border-top:1px solid var(--hair-2)}
h2{font-family:var(--serif);font-weight:600;font-size:clamp(18px,3vw,23px);margin:0 0 4px}
.sub{color:var(--ink-faint);font-size:13px;margin:0 0 16px}
.grid{display:grid;grid-template-columns:1fr;gap:12px}
@media(min-width:720px){.grid.two{grid-template-columns:1fr 1fr}}
.card{background:linear-gradient(180deg,rgba(255,255,255,.022),rgba(255,255,255,0));border:1px solid var(--hair);border-radius:12px;padding:16px 18px}
.card h3{font-family:var(--mono);font-size:12.5px;letter-spacing:.04em;color:var(--amber);margin:0 0 6px;text-transform:none}
.card p{margin:0;color:var(--ink-soft);font-size:13.5px}
.tag{display:inline-block;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;padding:1px 7px;border-radius:4px;margin-left:6px}
.tag.gen{color:var(--cyan);border:1px solid rgba(73,199,216,.35)}
.tag.hand{color:var(--amber);border:1px solid rgba(240,178,74,.35)}
table{width:100%;border-collapse:collapse;font-size:14px}
th{text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint);border-bottom:1px solid var(--hair);padding:7px 12px}
td{border-bottom:1px solid var(--hair-2);padding:7px 12px;color:var(--ink-soft);vertical-align:top}
td.num{font-family:var(--mono);color:var(--ink);text-align:right;width:64px}
code,pre{font-family:var(--mono)}
pre.cmd{background:var(--panel);border:1px solid var(--hair);border-radius:8px;padding:9px 12px;margin:0;overflow-x:auto;color:var(--ink);font-size:13px}
.cmdrow{display:grid;grid-template-columns:1fr;gap:3px;margin:0 0 10px}
.cmdrow small{color:var(--ink-faint);font-size:12px}
ul.rules{margin:0;padding:0;list-style:none}
ul.rules li{padding:9px 0 9px 22px;border-bottom:1px solid var(--hair-2);position:relative;color:var(--ink-soft);font-size:13.5px}
ul.rules li:before{content:"\\00A7";position:absolute;left:0;color:var(--ink-faint);font-family:var(--serif)}
.moves .card p{color:var(--ink-soft)}
footer{padding:30px 0 60px;color:var(--ink-faint);font-family:var(--mono);font-size:12px;line-height:1.9;border-top:1px solid var(--hair)}
</style>
</head>
<body>
<div class="wrap">
<header class="top">
  <p class="eyebrow">Our working console &middot; internal &middot; solo project</p>
  <h1>A Systems Theory for Today</h1>
  <p class="tagline">The dashboard for <b>the author and Claude</b> to run <b>this one project</b>. Private and practical &mdash; not public-facing, and not the cross-project reporting control-room. Just the two of us, this repo.</p>
  <p class="meta">
    branch <b>${esc(git.branch)}</b> &middot; commit <b>${esc(git.commit)}</b> &middot; tag <b>${esc(git.tag)}</b> &middot; last commit <b>${esc(git.lastDate)}</b> &middot; repo <b>${git.hasRemote ? 'pushed (private)' : 'local only'}</b><br>
    public reading site: ${git.hasRemote ? '<a href="' + SITE_URL + '">' + esc(SITE_URL) + '</a> (Pages)' : '<b>not yet deployed</b>'} &middot; the repo stays <b>private</b><br>
    generated <b>${esc(generatedAt)}</b> from live repo measurement &middot; <code>npm run dashboard</code> to refresh
  </p>
  <div class="statusbar">
    <span class="badge big ${validation.overall ? 'ok' : 'fail'}">${validation.overall ? '&#10003; all standing checks pass' : '&#10007; standing checks FAILING'}</span>
    ${badge(validation.references)} references
    ${badge(validation.counts)} counts
    ${badge(validation.diagrams)} diagrams
  </div>
</header>

<section>
  <h2>Validation status</h2>
  <p class="sub">The live result of the standing checks (this page ran them). Every number links to its evidence file — the file on disk is the truth.</p>
  <table>
    <thead><tr><th>Measured</th><th>Count</th><th>Evidence</th></tr></thead>
    <tbody>
      ${countRow('Content files (baseline = METRICS)', r.files, 'docs/METRICS.md')}
      ${countRow('Catches (C-0NN)', r.catches, 'logs/CATCHES.md')}
      ${countRow('Learnings (L-0NN)', r.learnings, 'logs/LEARNINGS.md')}
      ${countRow('Open questions (Q-0NN)', r.openQ, 'logs/OPEN_QUESTIONS.md')}
      ${countRow('Live disagreements (D-0NN)', r.disagreements, 'logs/OPEN_QUESTIONS.md')}
      ${countRow('Diagrams (Mermaid + SVG)', r.diagrams, 'docs/DIAGRAMS.md')}
      ${countRow('Pressure-tests', r.pressureTests, 'docs/GOALS.md')}
      ${countRow('Ground rules', r.groundRules, 'docs/GROUND_RULES.md')}
    </tbody>
  </table>
</section>

<section>
  <h2>Canonical sources</h2>
  <p class="sub">Where the truth lives. Changes here follow the layer discipline (ARCHITECTURE &sect;3-4).</p>
  <div class="grid two">
    ${CANONICAL.map(([dir, desc, link]) => `<div class="card"><h3>${flink(link, dir)} <span class="tag hand">${dir === 'viz/' ? 'hand-authored' : catByTop[dir === '(root docs)' ? '(root)' : dir.replace(/\/$/, '')] != null ? catByTop[dir === '(root docs)' ? '(root)' : dir.replace(/\/$/, '')] + ' files' : ''}</span></h3><p>${desc}</p></div>`).join('\n    ')}
  </div>
</section>

<section>
  <h2>Generated outputs</h2>
  <p class="sub">Do not edit these directly (unless tagged hand-authored). Edit the source and regenerate.</p>
  <div class="grid two">
    ${GENERATED.map(([path, desc, gen]) => `<div class="card"><h3>${esc(path)} <span class="tag ${gen ? 'gen' : 'hand'}">${gen ? 'generated' : 'maintained'}</span></h3><p>${desc}</p></div>`).join('\n    ')}
  </div>
</section>

<section>
  <h2>Key commands</h2>
  <p class="sub">Zero-dependency Node checks; Eleventy for the site. Run <code>npm run check</code> before every commit.</p>
  ${COMMANDS.map(([cmd, desc]) => `<div class="cmdrow"><pre class="cmd">${esc(cmd)}</pre><small>${desc}</small></div>`).join('\n  ')}
</section>

<section>
  <h2>Guardrails</h2>
  <p class="sub">Project-specific disciplines. Break one and the project stops being what it claims to be.</p>
  <ul class="rules">
    ${GUARDRAILS.map((g) => `<li>${g}</li>`).join('\n    ')}
  </ul>
</section>

<section class="moves">
  <h2>Next moves</h2>
  <p class="sub">The cockpit hands you a move, not just numbers.</p>
  <div class="grid two">
    ${NEXT_MOVES.map(([t, body]) => `<div class="card"><h3>${esc(t)}</h3><p>${body}</p></div>`).join('\n    ')}
  </div>
</section>

<footer>
  <b style="color:var(--ink-soft)">A private, solo, single-project working dashboard</b> &mdash; for the author + Claude to run <em>this</em> repo. Not published on the public reading site; not a public-facing page; not the cross-project / multi-project reporting control-room. A maintainer surface, like logs/handoffs/.<br>
  Generated by <code>scripts/build-dashboard.mjs</code> from live repo measurement &middot; self-contained, no external resources &middot; counts link to their evidence files. What is not tracked here (site traffic, GitHub stars) is not available offline.<br>
  A Systems Theory for Today &middot; Hulki Okan Tabak &mdash; with Claude &middot; docs CC BY-SA 4.0 / code MIT.
</footer>
</div>
</body>
</html>
`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'status.json'), JSON.stringify(status, null, 2));
writeFileSync(join(OUT_DIR, 'index.html'), html);

console.log('dashboard: wrote dashboard/index.html + dashboard/status.json');
console.log(`  validation: ${validation.overall ? 'PASS' : 'FAIL'} (refs ${validation.references ? 'ok' : 'FAIL'}, counts ${validation.counts ? 'ok' : 'FAIL'}, diagrams ${validation.diagrams ? 'ok' : 'FAIL'})`);
console.log(`  counts: files ${r.files} · C ${r.catches} · L ${r.learnings} · Q ${r.openQ} · D ${r.disagreements} · diagrams ${r.diagrams} · pressure-tests ${r.pressureTests} · rules ${r.groundRules}`);
console.log(`  git: ${git.branch} @ ${git.commit} (tag ${git.tag})`);
