#!/usr/bin/env node
// check-diagrams.mjs — "do the diagrams parse & render?" gate.
//
// Two surfaces are checked:
//   1. docs/DIAGRAMS.md — the Mermaid source that renders natively on GitHub.
//      Each ```mermaid block must open with a known diagram type, have balanced
//      brackets/quotes, and — for quadrantChart — ASCII-only point names (the
//      exact lexer trap that blanked figure 05: catch C-011 / learning L-007).
//   2. viz/diagrams.html — the interactive web render. The embedded DIAGRAMS
//      array must be valid JS, contain exactly 9 figures, and figure 05 must be
//      the hand-authored SVG (the C-011 fix). Any `code` figure is Mermaid-linted
//      like the .md blocks.
//
// This is a static parse + integrity check (no headless browser). It catches the
// failure modes the project has actually hit; a full render is a heavier gate.
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import { read, c, OK, FAIL, WARN } from './lib/repo.mjs';

const KNOWN_TYPES = [
  'flowchart', 'graph', 'sequenceDiagram', 'classDiagram', 'stateDiagram',
  'stateDiagram-v2', 'erDiagram', 'journey', 'gantt', 'pie', 'quadrantChart',
  'mindmap', 'timeline', 'gitGraph', 'requirementDiagram', 'C4Context',
];

const problems = [];

function lintMermaid(src, where) {
  const lines = src.split('\n').map((l) => l.trim()).filter(Boolean);
  if (!lines.length) { problems.push(`${where}: empty mermaid block`); return; }
  const type = lines[0].split(/\s/)[0];
  if (!KNOWN_TYPES.includes(type)) {
    problems.push(`${where}: unknown diagram type "${lines[0]}"`);
  }
  // Bracket / quote balance across the whole block.
  const bal = { '[': 0, '(': 0, '{': 0 };
  const close = { ']': '[', ')': '(', '}': '{' };
  let quotes = 0;
  for (const ch of src) {
    if (ch === '"') quotes++;
    else if (ch in bal) bal[ch]++;
    else if (ch in close) bal[close[ch]]--;
  }
  for (const k of Object.keys(bal)) {
    if (bal[k] !== 0) problems.push(`${where}: unbalanced "${k}" (${bal[k] > 0 ? 'missing close' : 'extra close'})`);
  }
  if (quotes % 2 !== 0) problems.push(`${where}: odd number of double-quotes`);
  // quadrantChart point names must be ASCII (C-011 / L-007).
  if (type === 'quadrantChart') {
    for (const l of lines) {
      const pt = l.match(/^([^:]+):\s*\[\s*[\d.]+\s*,\s*[\d.]+\s*\]\s*$/);
      if (pt && /[^\x00-\x7F]/.test(pt[1])) {
        problems.push(`${where}: non-ASCII quadrant point name "${pt[1].trim()}" (C-011 trap)`);
      }
    }
  }
}

function checkDiagramsMd() {
  const md = read('docs/DIAGRAMS.md');
  const blocks = [...md.matchAll(/```mermaid\n([\s\S]*?)```/g)].map((m) => m[1]);
  console.log(c.dim(`  docs/DIAGRAMS.md: ${blocks.length} mermaid block(s)`));
  blocks.forEach((b, i) => lintMermaid(b, `DIAGRAMS.md block ${i + 1}`));
  return blocks.length;
}

function checkVizHtml() {
  const html = read('viz/diagrams.html');
  const m = html.match(/const\s+DIAGRAMS\s*=\s*(\[[\s\S]*?\n\s*\]);/);
  if (!m) { problems.push('viz/diagrams.html: could not locate the DIAGRAMS array'); return 0; }
  let figures;
  try {
    // The array literal references no DOM/browser globals — safe to evaluate.
    figures = Function('"use strict"; return (' + m[1] + ');')();
  } catch (e) {
    problems.push(`viz/diagrams.html: DIAGRAMS array is not valid JS — ${e.message}`);
    return 0;
  }
  console.log(c.dim(`  viz/diagrams.html: ${figures.length} figure object(s)`));
  if (figures.length !== 9) problems.push(`viz/diagrams.html: expected 9 figures, found ${figures.length}`);
  for (const f of figures) {
    const id = f.n ?? '??';
    if (!f.title || !f.asserts) problems.push(`viz figure ${id}: missing title/asserts`);
    const hasCode = !!f.code, hasSvg = !!f.svg;
    if (hasCode === hasSvg) problems.push(`viz figure ${id}: must have exactly one of code|svg`);
    if (f.code) lintMermaid(f.code, `viz figure ${id}`);
  }
  // Figure 05 is the hand-authored SVG (the C-011 fix) — assert it stays SVG.
  const fig05 = figures.find((f) => f.n === '05');
  if (!fig05) problems.push('viz/diagrams.html: figure 05 not found');
  else if (!fig05.svg) problems.push('viz/diagrams.html: figure 05 must be hand-authored SVG (C-011 fix)');
  // Integrity: the graceful-fallback path must still be present.
  if (!/fallback/.test(html) || !/mermaid/.test(html)) {
    problems.push('viz/diagrams.html: missing mermaid/fallback wiring');
  }
  return figures.length;
}

function main() {
  console.log(c.bold('\nDiagram parse + render check'));
  const nMd = checkDiagramsMd();
  const nViz = checkVizHtml();
  if (nMd !== nViz && nMd && nViz) {
    problems.push(`figure-count mismatch: DIAGRAMS.md has ${nMd}, viz has ${nViz}`);
  }
  if (problems.length === 0) {
    console.log(`  ${OK} all ${nMd} diagrams parse; figure 05 is SVG; counts agree\n`);
    return 0;
  }
  console.log(`  ${FAIL} ${problems.length} diagram problem(s):`);
  for (const p of problems) console.log(c.red(`    - ${p}`));
  console.log('');
  return 1;
}

process.exit(main());
