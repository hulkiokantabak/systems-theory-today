// figures.js — the nine figures, parsed from viz/diagrams.html at build time so the
// site's /diagrams/ page and the standalone viz page never drift (single source).
// Version: 1.0 · Last updated: Session 4b
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const html = readFileSync(resolve(root, 'viz/diagrams.html'), 'utf8');
const m = html.match(/const\s+DIAGRAMS\s*=\s*(\[[\s\S]*?\n\s*\]);/);
// The array literal references no browser globals — safe to evaluate at build time.
const figures = m ? Function('"use strict"; return (' + m[1] + ');')() : [];

export default figures;
