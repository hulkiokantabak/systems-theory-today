#!/usr/bin/env node
// check-counts.mjs — count-reconciliation against docs/METRICS.md.
//
// Reconciles the repo's on-disk reality against the numbers the Chat-authored
// METRICS snapshot claims: content file count, catch/learning/question/
// disagreement IDs, diagrams, pressure-tests, ground rules. Fails loudly on any
// mismatch (this is the check that would have caught the stale count in the
// Session-4 work-order header: 32/C-011/L-008 vs the true 34/C-012/L-009).
//
// The 34-file baseline excludes Code-layer artifacts (see lib/repo.mjs); those
// are reported separately so the reconciliation stays meaningful after Code adds
// the digest + R3 gist to logs/handoffs/.
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import {
  read, rel, contentBaselineFiles, docFiles, CODE_LAYER_FILES,
  uniqueMatches, c, OK, FAIL, WARN,
} from './lib/repo.mjs';

const METRICS = read('docs/METRICS.md');

// Last value METRICS gives for a labelled table row (most-recent snapshot wins).
function metricLast(label) {
  const re = new RegExp('\\|\\s*' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    '\\s*\\|\\s*([^|]+?)\\s*\\|', 'g');
  let m, last = null;
  while ((m = re.exec(METRICS)) !== null) last = m[1].trim();
  return last;
}
const firstInt = (s) => (s == null ? null : parseInt((s.match(/-?\d+/) || [])[0], 10));

// --- expected (from METRICS) ---
const clRow = metricLast('Catches / Learnings') || '';
const clNums = (clRow.match(/\d+/g) || []).map(Number);
const expected = {
  files: firstInt(metricLast('Files created')),
  catches: clNums[0] ?? firstInt(metricLast('Catches logged')),
  learnings: clNums[1] ?? firstInt(metricLast('Learnings distilled')),
  openQ: firstInt(metricLast('Open questions')),
  disagreements: firstInt(metricLast('Live disagreements logged')),
  diagrams: firstInt(metricLast('Diagrams')),
  pressureTests: firstInt(metricLast('Pressure-tests defined')) ??
                 firstInt(metricLast('\\*\\*Pressure-tests defined\\*\\*')),
  groundRules: firstInt(metricLast('Ground rules')),
};

// --- reality (from disk) ---
const catchesFile = read('logs/CATCHES.md');
const learningsFile = read('logs/LEARNINGS.md');
const oq = read('logs/OPEN_QUESTIONS.md');
const diagramsMd = read('docs/DIAGRAMS.md');
const vizHtml = read('viz/diagrams.html');
const goals = read('docs/GOALS.md');
const groundRules = read('docs/GROUND_RULES.md');

const baseline = contentBaselineFiles();
const codeLayerPresent = docFiles().map(rel).filter((r) => CODE_LAYER_FILES.has(r));

const reality = {
  files: baseline.length,
  catches: uniqueMatches(catchesFile, /\bC-0(\d{2})\b/g).size,
  learnings: uniqueMatches(learningsFile, /\bL-0(\d{2})\b/g).size,
  openQ: (oq.match(/^### Q-0\d{2}/gm) || []).length,
  disagreements: (oq.match(/^### D-0\d{2}/gm) || []).length,
  diagrams: (diagramsMd.match(/^```mermaid/gm) || []).length,
  // M + D1-4 + Y1-4 + S1-4 = 13 layered tests; + R (the S4k cross-cutting register/care
  // test) = 14. Bounded to 1-4 so the Goal success-criteria S5 is never miscounted; R\b
  // matches only the bare "**R " token, never "**Register"/"**Read" (no word boundary).
  pressureTests: uniqueMatches(goals, /\*\*(M|D[1-4]|Y[1-4]|S[1-4]|R)\b/g).size,
  groundRules: Math.max(0, ...[...groundRules.matchAll(/\*\*(\d+)\.\s/g)].map((m) => +m[1])),
};
const vizFigures = (vizHtml.match(/\bn:\s*"(\d{2})"/g) || []).length;

const ROWS = [
  ['Content files (baseline)', reality.files, expected.files],
  ['Catches  (C-0NN)', reality.catches, expected.catches],
  ['Learnings (L-0NN)', reality.learnings, expected.learnings],
  ['Open questions (Q-0NN)', reality.openQ, expected.openQ],
  ['Disagreements (D-0NN)', reality.disagreements, expected.disagreements],
  ['Diagrams (DIAGRAMS.md ```mermaid)', reality.diagrams, expected.diagrams],
  ['Pressure-tests', reality.pressureTests, expected.pressureTests],
  ['Ground rules (max #)', reality.groundRules, expected.groundRules],
];

function main() {
  // Machine-readable mode for the dashboard generator (single source of truth).
  if (process.argv.includes('--json')) {
    const rows = ROWS.map(([label, got, exp]) => ({ label, got, exp, ok: exp != null && got === exp }));
    const figOk = vizFigures === reality.diagrams;
    const ok = rows.every((r) => r.ok) && figOk;
    process.stdout.write(JSON.stringify({ ok, reality, expected, vizFigures, rows }));
    return ok ? 0 : 1;
  }
  console.log(c.bold('\nCount-reconciliation against docs/METRICS.md'));
  let failed = 0;
  const pad = (s, n) => String(s).padEnd(n);
  console.log(c.dim('  ' + pad('metric', 34) + pad('on-disk', 9) + pad('METRICS', 9) + 'status'));
  for (const [label, got, exp] of ROWS) {
    const ok = exp != null && got === exp;
    if (!ok) failed++;
    const status = exp == null ? c.yellow('no METRICS value') : ok ? OK : FAIL;
    console.log('  ' + pad(label, 34) + pad(got, 9) + pad(exp ?? '—', 9) + status);
  }

  // Cross-check: DIAGRAMS.md mermaid blocks vs viz figures (both should be 9).
  const figOk = vizFigures === reality.diagrams;
  console.log('  ' + pad('viz/diagrams.html figures', 34) + pad(vizFigures, 9) +
    pad(reality.diagrams, 9) + (figOk ? OK : FAIL));
  if (!figOk) failed++;

  if (codeLayerPresent.length) {
    console.log(c.dim(`\n  Code-layer artifacts (excluded from baseline): ` +
      codeLayerPresent.join(', ')));
  }
  console.log(c.dim(`  Total .md/.html on disk: ${docFiles().length} ` +
    `(= ${reality.files} baseline + ${docFiles().length - reality.files} Code-layer)`));

  if (failed === 0) {
    console.log(`\n  ${OK} all counts reconcile with METRICS\n`);
    return 0;
  }
  console.log(`\n  ${FAIL} ${failed} count(s) do not reconcile — update the losing side deliberately\n`);
  return 1;
}

process.exit(main());
