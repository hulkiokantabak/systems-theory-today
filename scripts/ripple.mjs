#!/usr/bin/env node
// ripple.mjs — structural-change → ripple helper.
//
// "Chat decides WHAT changes; Code guarantees the change PROPAGATES"
// (docs/CHAT_CODE_WORKFLOW.md §3). When a canonical thing changes, this lists
// every document that references it — so the ripple is updated in the SAME
// commit — and fails loudly if a declared dependent carries no reference at all
// (a dangling propagation target, the C-010 failure made detectable).
//
// Usage:
//   node scripts/ripple.mjs <FILE.md>          # who links to / mentions this file
//   node scripts/ripple.mjs --entity <name>    # a named canonical entity (below)
//   node scripts/ripple.mjs "free text"        # any phrase
//   node scripts/ripple.mjs --list             # list named entities
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import { docFiles, rel, read, stripFencedCode, c, OK, FAIL, WARN } from './lib/repo.mjs';

// Named entities: the terms that signal a reference, and the documents that are
// EXPECTED to reference the entity (its propagation targets). Mirrors the
// worked example in CHAT_CODE_WORKFLOW.md §6a.
const ENTITIES = {
  'pressure-tests': {
    terms: ['pressure-test', 'thirteen', '13 test', 'four coupled layer', 'four layer'],
    dependents: [
      'docs/GOALS.md', 'docs/METRICS.md', 'README.md',
      'outputs/CANDIDATE_THEORIES.md', 'outputs/INITIAL_EVALUATION.md',
      'docs/DIAGRAMS.md', 'SKILL.md', 'panel/SESSION_2_PRESSURE_TESTS.md',
    ],
  },
  'theory-a': {
    terms: ['Theory A', 'adaptation gap', 'R_c', 'R_a', 'rate-gap'],
    dependents: [
      'outputs/CANDIDATE_THEORIES.md', 'outputs/THEORY_A_OPERATIONALIZED.md',
      'docs/DIAGRAMS.md', 'outputs/COMPREHENSIVE_PLAN.md', 'logs/OPEN_QUESTIONS.md',
    ],
  },
  'theory-b': {
    terms: ['Theory B', 'optimization intensity', 'optimization ecology', 'autopoietic capture'],
    dependents: [
      'outputs/CANDIDATE_THEORIES.md', 'outputs/THEORY_B_OPERATIONALIZED.md',
      'docs/DIAGRAMS.md', 'logs/OPEN_QUESTIONS.md',
    ],
  },
  'theory-c': {
    terms: ['Theory C', 'distributed coherence', 'commons of sense-making', 'living commons'],
    dependents: [
      'outputs/CANDIDATE_THEORIES.md', 'outputs/THEORY_C_OPERATIONALIZED.md',
      'docs/THE_LIVING_DOCUMENT.md', 'docs/DIAGRAMS.md', 'logs/OPEN_QUESTIONS.md',
    ],
  },
  'shuttle': {
    terms: ['shuttle', 'work-order', 'session digest', 'register', 'Chat/Code', 'Chat ↔ Code'],
    dependents: [
      'docs/CHAT_CODE_WORKFLOW.md', 'logs/handoffs/COOPERATION_LOG.md',
      'docs/DIAGRAMS.md', 'ARCHITECTURE.md',
    ],
  },
};

function findReferences(terms, { filenameMode = false } = {}) {
  const hits = new Map(); // relPath -> [{line, text}]
  const needles = terms.map((t) => t.toLowerCase());
  for (const abs of docFiles()) {
    const relPath = rel(abs);
    const raw = read(relPath);
    const text = relPath.endsWith('.md') ? stripFencedCode(raw) : raw;
    const lines = text.split('\n');
    lines.forEach((ln, i) => {
      const low = ln.toLowerCase();
      if (needles.some((n) => low.includes(n))) {
        if (!hits.has(relPath)) hits.set(relPath, []);
        hits.get(relPath).push({ line: i + 1, text: ln.trim().slice(0, 120) });
      }
    });
  }
  return hits;
}

function report(title, terms, dependents) {
  console.log(c.bold(`\nRipple: ${title}`));
  console.log(c.dim(`  match terms: ${terms.join(' · ')}`));
  const hits = findReferences(terms);
  const referenced = new Set(hits.keys());

  console.log(c.bold(`\n  Documents that reference it (${referenced.size}) — update together:`));
  for (const [file, occ] of [...hits.entries()].sort()) {
    console.log('  ' + c.cyan(file) + c.dim(`  (${occ.length} line${occ.length > 1 ? 's' : ''}, first: L${occ[0].line})`));
  }

  if (dependents && dependents.length) {
    const missing = dependents.filter((d) => !referenced.has(d));
    console.log(c.bold('\n  Declared propagation targets:'));
    for (const d of dependents) {
      console.log('  ' + (referenced.has(d) ? OK : FAIL) + '  ' + d);
    }
    if (missing.length) {
      console.log(`\n  ${FAIL} ${missing.length} declared dependent(s) carry NO reference — propagation gap:`);
      for (const m of missing) console.log(c.red(`    - ${m}`));
      return 1;
    }
    console.log(`\n  ${OK} every declared dependent references the entity`);
  }
  console.log('');
  return 0;
}

function main(argv) {
  const args = argv.slice(2);
  if (!args.length || args[0] === '--help' || args[0] === '-h') {
    console.log('Usage:\n  node scripts/ripple.mjs <FILE.md>\n  node scripts/ripple.mjs --entity <name>\n' +
      '  node scripts/ripple.mjs "free text"\n  node scripts/ripple.mjs --list');
    return 0;
  }
  if (args[0] === '--list') {
    console.log(c.bold('Named entities:'));
    for (const k of Object.keys(ENTITIES)) console.log('  - ' + k + c.dim(`  (${ENTITIES[k].dependents.length} targets)`));
    return 0;
  }
  if (args[0] === '--entity') {
    const name = args[1];
    const ent = ENTITIES[name];
    if (!ent) { console.log(c.red(`Unknown entity "${name}". Try --list.`)); return 2; }
    return report(name, ent.terms, ent.dependents);
  }
  const q = args.join(' ');
  // Filename query: also match the basename as a term.
  const terms = /\.(md|html)$/.test(q) ? [q, q.split('/').pop()] : [q];
  return report(q, terms, null);
}

process.exit(main(process.argv));
