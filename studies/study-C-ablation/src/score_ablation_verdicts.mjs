#!/usr/bin/env node
// score_ablation_verdicts.mjs — deterministic scorer for returned ablation verdict templates.
//
// SEALED BEFORE ANY VERDICT EXISTS (Session 4g). Mechanical application of the sealed
// rules: PRE_REGISTRATION.md §0.5/HC1 (length-controlled severity-weighted rate),
// logs/DECISIONS_CHANGED.md §4 (the Theory-C null: condition 1 = ON < 1.2x OFF on
// S3-rate with >=20 pooled S3 and a seeded label-permutation check at 19-in-20;
// condition 2 = 0 structure-provenance S3 of N>=20; connective OR — but firing stays
// governed by the sealed appropriator/cross-model gates, not by this script).
// Any edit after verdicts exist is a protocol violation -> log a catch.
//
// Usage: node studies/study-C-ablation/src/score_ablation_verdicts.mjs VERDICT_*.md

import fs from 'node:fs';

// Kit order -> question id -> arm (ABLATION_QUESTIONS_FROZEN.md; seed 18610)
const ORDER = ['S5','S7','S2','S3','F2','O3','F6','O6','F3','S6','O2','O4','O1','F7','S1','S4','F4','O5','F5','F1'];
const ON = new Set(['F2','F3','F6','F7','O1','O2','O3','S2','S4','S7']);
// Canonical word counts (FROZEN_HASHES_S4G.md)
const WORDS = { F1:563,F2:561,F3:575,F4:553,F5:528,F6:573,F7:585,S1:580,S2:527,S3:564,S4:560,S5:586,S6:540,S7:548,O1:561,O2:548,O3:547,O4:584,O5:593,O6:522 };

function parseVerdict(path) {
  const t = fs.readFileSync(path, 'utf8');
  const coder = (t.match(/Model name\/version:\s*(.+)/) || [])[1]?.trim() || path;
  const per = {};
  for (let i = 1; i <= 20; i++) {
    const nn = String(i).padStart(2, '0');
    const secRe = new RegExp('###\\s*RESPONSE[_ ]' + nn + '[\\s\\S]*?(?=###\\s*RESPONSE|##\\s*Totals|$)', 'i');
    const sec = (t.match(secRe) || [''])[0];
    const rows = [...sec.matchAll(/^\|\s*\d*[-–]?\d*\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/gm)]
      .map(m => ({ quote: m[1].trim(), sev: m[3].trim().toUpperCase(), prov: m[4].trim().toUpperCase() }))
      .filter(r => /S[123]/.test(r.sev));
    per[ORDER[i - 1]] = rows;
  }
  return { path, coder, per };
}

function armStats(per, idsWanted) {
  let s3 = 0, weighted = 0, words = 0, structS3 = 0;
  for (const id of idsWanted) {
    const rows = per[id] || [];
    for (const r of rows) {
      const w = r.sev.includes('S3') ? 9 : r.sev.includes('S2') ? 3 : 1;
      weighted += w;
      if (r.sev.includes('S3')) { s3++; if (r.prov.startsWith('STRUCT')) structS3++; }
    }
    words += WORDS[id];
  }
  return { s3, weighted, structS3, rate100: weighted / words * 100, s3rate100: 0 + (s3 / words * 100) };
}

// seeded permutation test (seed 18610; 10000 shuffles) on the S3-rate gap
function permutationP(per, observedGap) {
  let s = 18610;
  const rand = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  const ids = Object.keys(WORDS);
  let asExtreme = 0; const ITER = 10000;
  for (let k = 0; k < ITER; k++) {
    const shuffled = [...ids];
    for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; }
    const on = shuffled.slice(0, 10), off = shuffled.slice(10);
    const g = armStats(per, on).s3rate100 - armStats(per, off).s3rate100;
    if (g >= observedGap) asExtreme++;
  }
  return asExtreme / ITER;
}

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: node score_ablation_verdicts.mjs VERDICT_*.md'); process.exit(2); }

console.log('# ABLATION SCORING (mechanical; sealed rules)\n');
const onIds = [...ON], offIds = Object.keys(WORDS).filter(id => !ON.has(id));
for (const f of files) {
  const v = parseVerdict(f);
  const on = armStats(v.per, onIds), off = armStats(v.per, offIds);
  const pooledS3 = on.s3 + off.s3;
  const powered = pooledS3 >= 20;
  const ratio = off.s3rate100 > 0 ? on.s3rate100 / off.s3rate100 : Infinity;
  const gap = on.s3rate100 - off.s3rate100;
  const p = powered ? permutationP(v.per, gap) : null;
  const cond1 = powered && ratio < 1.2 && p != null && p > 0.05 ? 'ARMS (ON not better beyond noise)' : powered ? 'not met' : 'INDETERMINATE (under-powered)';
  const structAll = on.structS3 + off.structS3;
  const cond2 = powered ? (structAll === 0 ? 'ARMS (0 structure-provenance S3)' : 'not met (' + structAll + ' struct S3)') : 'INDETERMINATE (under-powered)';
  console.log(`- ${v.coder}: ON S3=${on.s3} w-rate/100w=${on.rate100.toFixed(2)} | OFF S3=${off.s3} w-rate/100w=${off.rate100.toFixed(2)} | pooled S3=${pooledS3}${powered ? '' : ' (<20: UNDER-POWERED)'} | S3-rate ratio ON/OFF=${ratio === Infinity ? 'inf' : ratio.toFixed(2)} | perm p(gap>=obs)=${p == null ? 'n/a' : p.toFixed(3)} | cond1: ${cond1} | cond2: ${cond2}`);
}
console.log('\nReading: HC1 supports C only if ON clearly exceeds OFF on length-controlled S3 rate.');
console.log('An ARMED null NEVER fires Theory C from this script — firing is governed by the sealed');
console.log('cross-model gates (logs/DECISIONS_CHANGED.md §4) and is logged cross-model-confirmed,');
console.log('n=1 of a kind (L-013), revisitable by a future fork. Under-powered = no result, never "C survives".');
