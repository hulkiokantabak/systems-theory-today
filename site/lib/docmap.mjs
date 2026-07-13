// docmap.mjs — the single source of truth for which canonical docs the reading
// site renders, and how each maps to a URL and a title. Imported by the Eleventy
// config (link-rewriter), the computed-data file (permalink/title/layout), and
// the nav data file. Keeping one map here means the site, the navigation, and the
// cross-reference links can never drift apart.
//
// Scope decision (recorded in DIGEST_S4): the reading surface publishes the
// intellectual content + the frontier — root docs, docs/, panel/, outputs/, and
// logs/ (Catches, Learnings, Open-Questions, Reflections). It deliberately EXCLUDES
// logs/handoffs/ (shuttle coordination: work-orders, cooperation log, digests, R3)
// and studies/ (gated scaffolds). Those live in the private repo, not on the site.
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join, basename } from 'node:path';

export const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

// Root-level canonical docs to publish, in a sensible reading order.
const ROOT_DOCS = ['README.md', 'ARCHITECTURE.md', 'SKILL.md', 'CONTRIBUTING.md', 'LICENSE.md'];
// Directories to publish in full (all *.md), except EXCLUDE_DIRS below them.
const DOC_DIRS = ['docs', 'panel', 'outputs'];
// logs/ is published selectively (the frontier + learning layer, not handoffs).
const LOG_DOCS = ['CATCHES.md', 'LEARNINGS.md', 'OPEN_QUESTIONS.md', 'REFLECTIONS.md']
  .map((f) => `logs/${f}`);

// Reading order (mirrors README's "Read in this order"; unlisted docs sort after).
const ORDER = [
  'README.md', 'ARCHITECTURE.md',
  'docs/HISTORY_OF_SYSTEMS_THEORIES.md', 'docs/LANDSCAPE_OF_CONTEMPORARY_SYSTEMS_THEORIES.md',
  'docs/GOALS.md',
  'panel/PANEL_ROSTER.md', 'panel/SEVEN_ROUND_DISCUSSION.md', 'panel/SESSION_2_PRESSURE_TESTS.md',
  'outputs/INITIAL_EVALUATION.md', 'outputs/COMPREHENSIVE_PLAN.md', 'outputs/CANDIDATE_THEORIES.md',
  'outputs/THEORY_A_OPERATIONALIZED.md', 'outputs/THEORY_B_OPERATIONALIZED.md', 'outputs/THEORY_C_OPERATIONALIZED.md',
  'logs/OPEN_QUESTIONS.md',
  'docs/DIAGRAMS.md', 'docs/CHAT_CODE_WORKFLOW.md', 'docs/THE_LIVING_DOCUMENT.md',
  'logs/REFLECTIONS.md',
  'docs/GROUND_RULES.md', 'docs/METHOD.md', 'docs/METRICS.md', 'docs/SKILLS.md',
  'docs/VISUALIZATION.md', 'docs/GLOSSARY.md',
  'logs/CATCHES.md', 'logs/LEARNINGS.md',
  'SKILL.md', 'CONTRIBUTING.md', 'LICENSE.md',
];

const GROUP_OF = (relPath) => {
  if (relPath === 'README.md') return 'Start here';
  if (relPath === 'ARCHITECTURE.md') return 'Start here';
  if (relPath.startsWith('docs/')) return 'Reference';
  if (relPath.startsWith('panel/')) return 'Deliberation';
  if (relPath.startsWith('outputs/')) return 'Output';
  if (relPath.startsWith('logs/')) return 'Learning';
  return 'Root';
};
const GROUP_ORDER = ['Start here', 'Reference', 'Deliberation', 'Output', 'Learning', 'Root'];

function firstH1(relPath) {
  try {
    const text = readFileSync(resolve(REPO_ROOT, relPath), 'utf8');
    const m = text.match(/^#\s+(.+?)\s*$/m);
    if (m) return m[1].replace(/\s*[—-].*$/, '').trim() || m[1].trim();
  } catch { /* fall through */ }
  return basename(relPath).replace(/\.md$/, '').replace(/_/g, ' ');
}

export function docUrl(relPath) {
  if (relPath === 'README.md') return '/';
  const noext = relPath.replace(/\.(md|html)$/i, '');
  return '/' + noext.split('/').map((s) => s.toLowerCase()).join('/') + '/';
}

function collect() {
  const list = [];
  for (const f of ROOT_DOCS) if (existsSync(resolve(REPO_ROOT, f))) list.push(f);
  for (const d of DOC_DIRS) {
    const abs = resolve(REPO_ROOT, d);
    if (!existsSync(abs)) continue;
    for (const name of readdirSync(abs)) if (name.endsWith('.md')) list.push(`${d}/${name}`);
  }
  for (const f of LOG_DOCS) if (existsSync(resolve(REPO_ROOT, f))) list.push(f);
  return list;
}

const orderIndex = (relPath) => {
  const i = ORDER.indexOf(relPath);
  return i === -1 ? ORDER.length + 1 : i;
};

// The full doc set, ordered, with url + title + group + full-title.
export const DOC_SET = collect()
  .sort((a, b) => orderIndex(a) - orderIndex(b) || a.localeCompare(b))
  .map((relPath) => ({
    relPath,
    url: docUrl(relPath),
    title: firstH1(relPath),
    fullTitle: (() => { try { return (readFileSync(resolve(REPO_ROOT, relPath), 'utf8').match(/^#\s+(.+)$/m) || [])[1] || firstH1(relPath); } catch { return firstH1(relPath); } })(),
    group: GROUP_OF(relPath),
  }));

// Lookup maps for the link-rewriter: by repo-relative path and by unique basename.
export const BY_REL = new Map(DOC_SET.map((d) => [d.relPath, d.url]));
export const BY_BASE = (() => {
  const counts = new Map();
  for (const d of DOC_SET) counts.set(basename(d.relPath), (counts.get(basename(d.relPath)) || 0) + 1);
  const m = new Map();
  for (const d of DOC_SET) if (counts.get(basename(d.relPath)) === 1) m.set(basename(d.relPath), d.url);
  return m;
})();
// The viz artifacts are passthrough-copied verbatim; link mentions point at them.
// The interactive map's mentions land on the framed /map/ page (playtest cycle 1,
// D6: the bare artifact has no way home; the frame adds one and links the original).
for (const [rel, url] of [
  ['viz/diagrams.html', '/viz/diagrams.html'],
  ['viz/systems-theory-map.html', '/map/'],
]) {
  BY_REL.set(rel, url);
  const b = basename(rel);
  if (!BY_BASE.has(b)) BY_BASE.set(b, url);
}
// README's reading table names the three operationalized theories as one
// brace-token; route that exact mention to the site's index of the three
// (playtest cycle 1, D2 — the row was dead text though all three pages exist).
BY_REL.set('outputs/THEORY_{A,B,C}_OPERATIONALIZED.md', '/outputs/theories-operationalized/');

// Nav/crumb/tab display casing: docs titled in ALL CAPS are shown sentence-cased
// in site furniture; the on-page H1 keeps the document's own casing (cycle 1, D13).
export function displayTitle(s) {
  const letters = s.replace(/[^A-Za-z]/g, '');
  const uppers = s.replace(/[^A-Z]/g, '');
  if (!letters.length || uppers.length / letters.length < 0.8) return s; // already mixed-case
  let t = s.charAt(0) + s.slice(1).toLowerCase();
  t = t.replace(/\b[a-z]\b/g, (c) => c.toUpperCase()); // A, B, C
  t = t.replace(/\b([a-z])(\d)/g, (m, c, d) => c.toUpperCase() + d); // B4, S4i, R3
  t = t.replace(/\bs(\d[a-z]?)\b/g, (m, d) => 'S' + d); // session tokens S4h/S4i
  return t;
}

export function navGroups() {
  const groups = new Map(GROUP_ORDER.map((g) => [g, []]));
  for (const d of DOC_SET) {
    if (d.relPath === 'README.md') continue; // home is linked separately
    (groups.get(d.group) || groups.get('Root')).push({ title: displayTitle(d.title), url: d.url });
  }
  return GROUP_ORDER
    .map((g) => ({ group: g, items: groups.get(g) || [] }))
    .filter((x) => x.items.length);
}
