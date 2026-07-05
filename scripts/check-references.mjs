#!/usr/bin/env node
// check-references.mjs — reference-integrity sweep.
//
// This project cross-references files in three ways; all three are checked:
//   1. Markdown links      [text](target)
//   2. HTML attributes     href="…" / src="…"   (in viz/*.html)
//   3. Backtick mentions   `docs/GOALS.md`, `DIAGRAMS.md`   ← the dominant style
//
// A reference resolves if the file exists (path mentions resolve from the repo
// root; bare basenames resolve if a content file of that name exists). External
// links, in-page anchors, fenced-code blocks (illustrative templates), and a
// tiny explicit allow-list of glob/placeholder patterns are skipped.
//
// Fails loudly (exit 1) on any dangling reference — the C-010 fix made permanent
// (docs/CHAT_CODE_WORKFLOW.md §9, L-006/L-007).
//
// Version: 1.1 · Status: Living · Last updated: Session 4

import { existsSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import {
  REPO_ROOT, docFiles, rel, read, stripFencedCode, c, OK, FAIL,
} from './lib/repo.mjs';

// Illustrative / templated references that are allowed to not resolve.
const ALLOW = new Set([
  'SCREAMING_SNAKE_CASE.md', // naming-convention example (ARCHITECTURE §7)
  'NEW_FILE.md', 'FILE.md',  // work-order template placeholders (§6a)
]);
const isGlobOrTemplate = (t) => /[*{}]/.test(t) || t.includes('path/to/');
const isExternal = (t) =>
  /^(https?:|mailto:|tel:|data:|#|\/\/)/i.test(t) || t.startsWith('{{') || t.startsWith('~');

// Set of every content-file basename (for bare-basename resolution).
const BASENAMES = new Set(docFiles().map((f) => basename(f)));

function resolves(target, fromRelPath) {
  const clean = target.split('#')[0].split('?')[0].trim();
  if (!clean) return true; // pure "#anchor"
  if (clean.includes('/')) {
    // Path mention: try repo-root-relative first (the docs' convention),
    // then relative to the referring file (for ../ style links).
    if (existsSync(resolve(REPO_ROOT, clean))) return true;
    if (existsSync(resolve(dirname(resolve(REPO_ROOT, fromRelPath)), clean))) return true;
    return false;
  }
  // Bare basename: resolves if any content file has that name.
  return BASENAMES.has(clean);
}

function main() {
  const files = docFiles();
  let checked = 0;
  const dangling = [];
  const consider = (target, from, kind) => {
    if (isExternal(target) || isGlobOrTemplate(target) || ALLOW.has(target)) return;
    checked++;
    if (!resolves(target, from)) dangling.push({ from, target, kind });
  };

  for (const abs of files) {
    const relPath = rel(abs);
    const raw = read(relPath);
    if (relPath.endsWith('.html')) {
      for (const m of raw.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g)) consider(m[1], relPath, 'html');
      for (const m of raw.matchAll(/`([^`]+?\.(?:md|html))`/g)) consider(m[1], relPath, 'backtick');
    } else {
      const clean = stripFencedCode(raw);
      for (const m of clean.matchAll(/\[[^\]]*\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g)) consider(m[1], relPath, 'md-link');
      for (const m of clean.matchAll(/`([^`]+?\.(?:md|html))`/g)) consider(m[1], relPath, 'backtick');
    }
  }

  console.log(c.bold('\nReference-integrity sweep'));
  console.log(c.dim(`  files scanned: ${files.length} · references checked: ${checked}`));

  if (dangling.length === 0) {
    console.log(`  ${OK} every internal reference resolves\n`);
    return 0;
  }
  console.log(`  ${FAIL} ${dangling.length} dangling reference(s):`);
  for (const d of dangling) console.log(c.red(`    - ${d.from}  →  ${d.target}  [${d.kind}]`));
  console.log('');
  return 1;
}

process.exit(main());
