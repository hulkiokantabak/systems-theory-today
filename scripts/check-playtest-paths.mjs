#!/usr/bin/env node
// check-playtest-paths.mjs — per-cycle path-scope enforcement for the S4i
// site-playtest program (playtests/PROGRAM_GOVERNANCE.md §1).
//
// Usage: node scripts/check-playtest-paths.mjs [<git ref to diff against, default HEAD>]
//
// Classifies every path in the working-tree diff into the program's three file
// classes. Exit 1 (VOID) if any diffed path is CANON or unclassifiable —
// per governance §1 a diff outside the editable set voids the cycle's
// implementations. SITE-COPY paths are listed so the cycle record can carry
// their manifest + D-007 check. Default-deny: unknown paths code as CONTENT.
//
// Version: 1.0 · Status: Living · Last updated: Session 4i

import { execSync } from 'node:child_process';

const ref = process.argv[2] || 'HEAD';
const out = execSync(`git diff --name-only ${ref}`, { encoding: 'utf8' });
const paths = out.split(/\r?\n/).filter(Boolean);

const PRESENTATION = [
  /^site\/_includes\//, /^site\/assets\//, /^site\/_data\//, /^site\/lib\//,
  /^site\/diagrams\.njk$/, /^site\/history\.njk$/, /^site\/summary\.njk$/,
  /^site\/manifest\.webmanifest$/,
];
const SITE_COPY = [/^site\/about\.njk$/, /^site\/colophon\.njk$/];
const PROGRAM = [/^playtests\//];
const CANON = [/^docs\//, /^outputs\//, /^logs\//, /^panel\//, /^README\.md$/, /^ARCHITECTURE\.md$/, /^SKILL\.md$/, /^CONTRIBUTING\.md$/, /^LICENSE\.md$/, /^viz\//];

const cls = (p) => {
  const posix = p.split('\\').join('/');
  if (CANON.some((r) => r.test(posix))) return 'CANON';
  if (SITE_COPY.some((r) => r.test(posix))) return 'SITE-COPY';
  if (PRESENTATION.some((r) => r.test(posix))) return 'PRESENTATION';
  if (PROGRAM.some((r) => r.test(posix))) return 'PROGRAM';
  return 'UNCLASSIFIED'; // default-deny -> CONTENT
};

let voided = false;
console.log('\nPlaytest-cycle path scope (vs ' + ref + ')');
if (!paths.length) console.log('  (no diffed paths)');
for (const p of paths) {
  const c = cls(p);
  if (c === 'CANON' || c === 'UNCLASSIFIED') voided = true;
  console.log(`  ${c.padEnd(13)} ${p}${c === 'SITE-COPY' ? '   <- requires manifest + D-007 check' : ''}${c === 'CANON' || c === 'UNCLASSIFIED' ? '   <- VOIDS the cycle (governance §1)' : ''}`);
}
console.log(voided
  ? '\n  ✗ VOID — the diff touches CANON or unclassifiable paths; the cycle\'s implementations are void per governance §1.\n'
  : '\n  ✓ in scope — all diffed paths are PRESENTATION / SITE-COPY / PROGRAM.\n');
process.exit(voided ? 1 : 0);
