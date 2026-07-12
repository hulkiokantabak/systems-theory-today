// Shared helpers for the standing check scripts.
// Zero external dependencies — Node built-ins only, so the checks run anywhere
// the repo is cloned, with no `npm install` step required.
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve, relative } from 'node:path';

// scripts/lib/repo.mjs  ->  repo root is two levels up.
export const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

// Directories that are Code-layer infrastructure, not canonical content.
// (Kept out of the content walk and the reference sweep.)
export const CODE_LAYER_DIRS = new Set([
  '.git', 'node_modules', '_site', '.cache',
  'scripts', 'site', 'studies', '.github', 'dashboard', 'skills',
  // playtests/: the S4i author-commissioned site-playtest program (persona files,
  // cycle reports, expert sessions, the content queue). Excluded from the content
  // baseline like studies/. Named cost (Campbell, S4i item 7): a directory the
  // checker cannot see is a directory where drift is invisible — nothing canonical
  // may ever live here, and per-cycle path scope is enforced separately by
  // scripts/check-playtest-paths.mjs.
  'playtests',
]);

// Code-layer artifacts that live *inside* a canonical directory (added by Code
// this session). They are excluded from the 34-file content baseline so the
// count reconciles against the Chat-authored METRICS snapshot.
export const CODE_LAYER_FILES = new Set([
  'logs/handoffs/DIGEST_S4.md',
  'logs/handoffs/DIGEST_S4b.md',
  'logs/handoffs/DIGEST_S4c.md',
  'logs/handoffs/DIGEST_S4e.md',
  'logs/handoffs/DIGEST_S4f.md',
  'logs/handoffs/R3_GIST.md',
]);

// The canonical content baseline (matches METRICS.md categories).
export const CONTENT_ROOT_FILES = [
  'README.md', 'ARCHITECTURE.md', 'SKILL.md', 'CONTRIBUTING.md', 'LICENSE.md',
];
export const CONTENT_DIRS = ['docs', 'panel', 'outputs', 'logs', 'viz']; // logs includes handoffs/

export const CONTENT_EXTS = new Set(['.md', '.html']);

/** Repo-relative POSIX path for an absolute path. */
export function rel(abs) {
  return relative(REPO_ROOT, abs).split('\\').join('/');
}

/** Recursively list files under a repo-relative dir, skipping Code-layer dirs. */
export function walk(startRel = '.') {
  const out = [];
  const start = resolve(REPO_ROOT, startRel);
  if (!existsSync(start)) return out;
  (function rec(abs) {
    for (const name of readdirSync(abs)) {
      if (CODE_LAYER_DIRS.has(name)) continue;
      const full = join(abs, name);
      const st = statSync(full);
      if (st.isDirectory()) rec(full);
      else out.push(full);
    }
  })(start);
  return out;
}

/** All canonical + Code-authored .md/.html files (everything outside Code-layer dirs). */
export function docFiles() {
  return walk('.').filter((f) => CONTENT_EXTS.has(f.slice(f.lastIndexOf('.')).toLowerCase()));
}

/** The 34-file content baseline: doc files minus the Code-layer artifacts. */
export function contentBaselineFiles() {
  return docFiles().filter((f) => !CODE_LAYER_FILES.has(rel(f)));
}

export function read(relPath) {
  return readFileSync(resolve(REPO_ROOT, relPath), 'utf8');
}

/** Strip fenced code blocks (```...```) so illustrative template paths inside
 *  them are not treated as real links. Returns text with fences blanked. */
export function stripFencedCode(md) {
  return md.replace(/```[\s\S]*?```/g, (block) => block.replace(/[^\n]/g, ' '));
}

/** Count unique matches of a regex (with a capture group) in a string. */
export function uniqueMatches(text, re) {
  const set = new Set();
  let m;
  while ((m = re.exec(text)) !== null) set.add(m[1]);
  return set;
}

// --- tiny ANSI helpers (degrade gracefully if not a TTY) ---
const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const wrap = (code) => (s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : String(s));
export const c = {
  green: wrap('32'), red: wrap('31'), yellow: wrap('33'),
  dim: wrap('2'), bold: wrap('1'), cyan: wrap('36'),
};
export const OK = c.green('OK');
export const FAIL = c.red('FAIL');
export const WARN = c.yellow('WARN');
