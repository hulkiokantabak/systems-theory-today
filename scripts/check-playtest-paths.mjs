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
// v1.1 (S4i, shadow-grade SG-09 OBJ-1/OBJ-2): the v1.0 whitelist was LOOSER than
// the governance it enforced — site/_data/facts.js (content-level facts: theory
// medians, falsifiability codings) and site/lib/docmap.mjs (which canonical docs
// render at all) passed as PRESENTATION. Fixed: content-bearing data files are
// CANON (byte-for-byte untouchable under the program); nav labels, the docmap,
// site metadata, and every prose-bearing template are SITE-COPY (manifest +
// codable D-007 check + author-visible queue entry required).
//
// Version: 1.1 · Status: Living · Last updated: Session 4i

import { execSync } from 'node:child_process';

const ref = process.argv[2] || 'HEAD';
const out = execSync(`git diff --name-only ${ref}`, { encoding: 'utf8' });
// v1.2 (cycle 1): untracked files are part of a cycle's diff too — `git diff`
// alone missed brand-new pages/scripts, so the scope check saw only edits.
const untracked = execSync('git ls-files --others --exclude-standard', { encoding: 'utf8' });
const paths = [...new Set([...out.split(/\r?\n/), ...untracked.split(/\r?\n/)])].filter(Boolean);

// PRESENTATION: layout, styling, client JS, static assets — no words, no content data.
const PRESENTATION = [
  /^site\/_includes\//, /^site\/assets\//, /^site\/manifest\.webmanifest$/,
  /^\.eleventyignore$/, // site build config (no words; cycle 2 uses it to keep playtests/ off the public site)
];
// SITE-COPY: site-native words and meaning-adjacent wiring — editable ONLY with
// manifest-before-deploy + D-007 check + author-visible queue entry.
const SITE_COPY = [
  // ANY site-root template carries site-native words -> SITE-COPY (manifest +
  // D-007 + queue entry). Enumerating specific pages (v1.1) missed new pages.
  /^site\/[A-Za-z0-9_-]+\.njk$/,
  /^site\/_data\/nav\.js$/, /^site\/_data\/site\.js$/, /^site\/_data\/eleventyComputed\.js$/,
  /^site\/lib\/docmap\.mjs$/,
];
const PROGRAM = [/^playtests\//, /^scripts\/check-playtest-paths\.mjs$/];
// CANON: canonical documents AND content-bearing site data (facts/charts/figures
// derive claim-level content) — byte-for-byte untouchable under the program.
const CANON = [
  /^docs\//, /^outputs\//, /^logs\//, /^panel\//, /^viz\//, /^studies\//,
  /^README\.md$/, /^ARCHITECTURE\.md$/, /^SKILL\.md$/, /^CONTRIBUTING\.md$/, /^LICENSE\.md$/,
  /^site\/_data\/facts\.js$/, /^site\/_data\/charts\.js$/, /^site\/_data\/figures\.js$/,
];

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
  console.log(`  ${c.padEnd(13)} ${p}${c === 'SITE-COPY' ? '   <- requires manifest + D-007 check + queue entry' : ''}${c === 'CANON' || c === 'UNCLASSIFIED' ? '   <- VOIDS the cycle (governance §1)' : ''}`);
}
console.log(voided
  ? '\n  ✗ VOID — the diff touches CANON or unclassifiable paths; the cycle\'s implementations are void per governance §1.\n'
  : '\n  ✓ in scope — all diffed paths are PRESENTATION / SITE-COPY / PROGRAM.\n');
process.exit(voided ? 1 : 0);
