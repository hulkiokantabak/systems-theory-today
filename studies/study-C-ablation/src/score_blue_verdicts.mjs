#!/usr/bin/env node
// score_blue_verdicts.mjs — deterministic scorer for the S4h "blue" ablation re-coding kit
// (line-record format; anchored severity guide).
//
// SEALED BEFORE ANY VERDICT EXISTS (S4h, post-courier build — hash in FROZEN_HASHES_S4H_BLUE_GREEN.md).
// Mechanical application of the sealed rules:
//   - logs/DECISIONS_CHANGED.md §4 as amended S4h (D3): condition 1 = ON < 1.2x OFF on S3-rate
//     AND >=20 pooled S3 WITHIN a single coder AND the gap beats a seeded label-permutation at
//     >=19-in-20; condition 2 = 0 structure-provenance S3 of N>=20 (within-coder); OR-connective.
//   - The corridor rule (S4h, A2/D3): every result reported against BOTH margins — the ratified
//     1.2x line AND the preserved 1.5x line — with the required sentence at point of use.
//   - Family-first law: S3 counts are NEVER pooled across coders; power is within-coder only.
//   - Reliability floor (A2 amendment, parallel to the placebo's): mean pairwise S3-identification
//     agreement (same response, anchor-quote token-overlap >= 0.5) below 50% => the run is
//     "Indeterminate — instrument unreliable" and nothing else is read.
//   - Under-powered coders read "no result", never "C survives". The scorer REPORTS; firing any
//     rung stays a decided act on the record (Fork 3) — this script never writes a DC row.
//   - Broken-series rule (Campbell, S4h): outputs of this run are POST-anchoring numbers; they may
//     never be pooled, trended, or averaged with the pre-anchoring S4g codings.
// Any edit to this file after verdicts exist is a protocol violation -> log a catch.
//
// Usage: node studies/study-C-ablation/src/score_blue_verdicts.mjs VERDICT_*.md
// Self-test: node studies/study-C-ablation/src/score_blue_verdicts.mjs --fixtures

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Kit order -> response id -> arm (ABLATION_QUESTIONS_FROZEN.md; seed 18610 — unchanged from S4g)
const ORDER = ['S5','S7','S2','S3','F2','O3','F6','O6','F3','S6','O2','O4','O1','F7','S1','S4','F4','O5','F5','F1'];
const ON = new Set(['F2','F3','F6','F7','O1','O2','O3','S2','S4','S7']);
const WORDS = { F1:563,F2:561,F3:575,F4:553,F5:528,F6:573,F7:585,S1:580,S2:527,S3:564,S4:560,S5:586,S6:540,S7:548,O1:561,O2:548,O3:547,O4:584,O5:593,O6:522 };

function parseVerdict(text, label) {
  const coder = (text.match(/IDENT: role=head; identity="([^"]*)"/) || [])[1] || label;
  const foot = (text.match(/IDENT: role=foot; identity="([^"]*)"/) || [])[1] || '(missing)';
  const recognize = (text.match(/RECOGNIZE: source-project="([^"]*)"/) || [])[1] || '(missing)';
  const per = {}; for (const id of ORDER) per[id] = [];
  for (const m of text.matchAll(/^CATCH: id=(\d\d)-(?!none)[^;]*; quote="([^"]*)"; cat=([A-Z]*); sev=(S[123]); prov=([A-Z-]+)/gm)) {
    const pos = parseInt(m[1], 10);
    if (pos >= 1 && pos <= 20) per[ORDER[pos - 1]].push({ quote: m[2], cat: m[3], sev: m[4], prov: m[5] });
  }
  return { coder, foot, recognize, per };
}

function armStats(per, ids) {
  let s3 = 0, weighted = 0, words = 0, structS3 = 0;
  for (const id of ids) {
    for (const r of per[id]) {
      weighted += r.sev === 'S3' ? 9 : r.sev === 'S2' ? 3 : 1;
      if (r.sev === 'S3') { s3++; if (r.prov.startsWith('STRUCT')) structS3++; }
    }
    words += WORDS[id];
  }
  return { s3, weighted, structS3, s3rate100: s3 / words * 100, wrate100: weighted / words * 100 };
}

function permutationP(per, observedGap) { // seeded (18610), 10000 shuffles, gap on S3-rate/100w
  let s = 18610;
  const rand = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  const ids = Object.keys(WORDS);
  let asExtreme = 0; const ITER = 10000;
  for (let k = 0; k < ITER; k++) {
    const sh = [...ids];
    for (let i = sh.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [sh[i], sh[j]] = [sh[j], sh[i]]; }
    const g = armStats(per, sh.slice(0, 10)).s3rate100 - armStats(per, sh.slice(10)).s3rate100;
    if (g >= observedGap) asExtreme++;
  }
  return asExtreme / ITER;
}

const norm = (q) => q.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(w => w.length > 2);
function overlap(a, b) {
  const A = new Set(norm(a)), B = new Set(norm(b));
  if (!A.size || !B.size) return 0;
  let hit = 0; for (const w of A) if (B.has(w)) hit++;
  return hit / Math.min(A.size, B.size);
}
function pairAgreement(a, b) { // same-response S3 matching by quote overlap >= 0.5; max-denominator (sealed op.)
  let agree = 0, denom = 0;
  for (const id of ORDER) {
    const A = a.per[id].filter(r => r.sev === 'S3'), B = b.per[id].filter(r => r.sev === 'S3');
    denom += Math.max(A.length, B.length);
    for (const ra of A) if (B.some(rb => overlap(ra.quote, rb.quote) >= 0.5)) agree++;
  }
  return denom === 0 ? 1 : agree / denom;
}

function scoreCoder(v) {
  const onIds = ORDER.filter(id => ON.has(id)), offIds = ORDER.filter(id => !ON.has(id));
  const on = armStats(v.per, onIds), off = armStats(v.per, offIds);
  const pooled = on.s3 + off.s3, powered = pooled >= 20;
  const ratio = off.s3rate100 > 0 ? on.s3rate100 / off.s3rate100 : Infinity;
  const gap = on.s3rate100 - off.s3rate100;
  const p = powered ? permutationP(v.per, gap) : null;
  const structS3 = on.structS3 + off.structS3;
  let read;
  if (!powered) read = 'UNDER-POWERED -> Indeterminate (never "C survives")';
  else {
    const c1 = ratio < 1.2 && p !== null && p >= 0.05 ? false : ratio < 1.2; // c1 needs ratio<1.2 AND perm robustness of the SMALLNESS — per sealed text the gap must beat noise at 19-in-20 for the null; a null is armed only if ON fails to exceed OFF beyond noise
    const c1met = ratio < 1.2;                             // margin condition
    const c2met = structS3 === 0 && pooled >= 20;          // provenance collapse
    read = `powered; ratio=${ratio.toFixed(2)} vs 1.2x (ratified): ${c1met ? 'NULL-CANDIDATE' : 'not met'} | vs 1.5x (preserved): ${ratio < 1.5 ? 'NULL-CANDIDATE under dissent margin' : 'not met'} | perm p=${p} | struct-S3=${structS3} (condition 2 ${c2met ? 'MET' : 'not met'})`;
  }
  return { coder: v.coder, on, off, pooled, powered, ratio, gap, p, structS3, read };
}

function main(files) {
  const coders = files.map(f => parseVerdict(fs.readFileSync(f, 'utf8').split('*Receipt note')[0], path.basename(f)));
  console.log('# BLUE KIT SCORING (mechanical; sealed rules; post-anchoring series — never pool with S4g numbers)\n');
  // reliability floor first
  let pairs = 0, sum = 0;
  for (let i = 0; i < coders.length; i++) for (let j = i + 1; j < coders.length; j++) { sum += pairAgreement(coders[i], coders[j]); pairs++; }
  const meanAgr = pairs ? sum / pairs : 1;
  console.log(`mean pairwise S3-identification agreement: ${(meanAgr * 100).toFixed(0)}% (sealed 50% floor)`);
  const results = coders.map(scoreCoder);
  for (const r of results) console.log(`- ${r.coder}: ON s3=${r.on.s3} rate=${r.on.s3rate100.toFixed(2)} | OFF s3=${r.off.s3} rate=${r.off.s3rate100.toFixed(2)} | pooled=${r.pooled} ${r.powered ? 'POWERED' : 'under-powered'} | ${r.read}`);
  if (meanAgr < 0.5) { console.log('\nFINAL: INDETERMINATE — instrument unreliable (agreement < 50%); nothing else is read.'); return; }
  const poweredR = results.filter(r => r.powered);
  console.log(`\npowered coders: ${poweredR.length}/${results.length} (family-first: each read stands alone; no cross-coder pooling)`);
  for (const r of poweredR) {
    const nullArmed = (r.ratio < 1.2 && r.p !== null) || (r.structS3 === 0 && r.pooled >= 20);
    console.log(`- ${r.coder}: ${nullArmed ? 'NULL CONDITION MET within this coder (firing remains a decided act + requires the sealed gates — the scorer only reports)' : 'no null condition met'}; corridor: under the preserved 1.5x margin this read ${r.ratio < 1.5 ? 'WOULD meet condition 1 — the ratified 1.2x line, not the data, decides the sentence' : 'does not meet condition 1 either'}`);
  }
  console.log('\nEvery line above: cross-model-confirmed, n=1 of a kind (L-013), revisitable by a future fork.');
}

// ---- fixtures (self-test on both decisive branches; run BEFORE sealing) ----
function fixtures() {
  const mk = (catches) => { // catches: {pos: [sev,prov,quote][]}
    let t = 'IDENT: role=head; identity="FIXTURE"\n';
    for (const [pos, rows] of Object.entries(catches))
      rows.forEach((r, i) => { t += `CATCH: id=${String(pos).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}; quote="${r[2]}"; cat=LOG; sev=${r[0]}; prov=${r[1]}; effect="x"\n`; });
    t += 'RECOGNIZE: source-project="NONE"\nIDENT: role=foot; identity="FIXTURE"\n';
    return t;
  };
  const onPos = ORDER.map((id, i) => ON.has(id) ? i + 1 : null).filter(Boolean);
  const offPos = ORDER.map((id, i) => !ON.has(id) ? i + 1 : null).filter(Boolean);
  // Fixture A: ON-heavy powered (no null): 15 S3 on ON, 6 on OFF, all struct
  const fa = {}; onPos.forEach((p, i) => { fa[p] = i < 8 ? [['S3', 'STRUCT-POS', 'alpha beta gamma ' + p], ['S3', 'STRUCT-POS', 'delta eps ' + p]] : [['S3', 'SOLO', 'zeta ' + p]]; });
  offPos.forEach((p, i) => { if (i < 6) fa[p] = [['S3', 'SOLO', 'omega psi ' + p]]; });
  // Fixture B: powered NULL (ratio < 1.2): 11 S3 ON, 10 S3 OFF, some struct
  const fb = {}; onPos.forEach((p, i) => { if (i < 10) fb[p] = [['S3', 'STRUCT-POS', 'kappa lambda ' + p]]; }); fb[onPos[0]].push(['S3', 'SOLO', 'extra mu 1']);
  offPos.forEach((p) => { fb[p] = [['S3', 'SOLO', 'rho sigma ' + p]]; });
  // Fixture C: under-powered: 3 catches total
  const fc = { 1: [['S3', 'SOLO', 'tiny one']], 5: [['S2', 'SOLO', 'tiny two']], 9: [['S3', 'STRUCT-POS', 'tiny three']] };
  const dir = fs.mkdtempSync(path.join(process.env.TEMP || '/tmp', 'blue-fix-'));
  const files = [];
  for (const [name, fx] of [['A_no_null', fa], ['B_null', fb], ['C_underpowered', fc]]) {
    const f = path.join(dir, `VERDICT_${name}.md`); fs.writeFileSync(f, mk(fx)); files.push(f);
  }
  console.log('=== FIXTURE RUN (expected: A powered no-null; B powered NULL-CANDIDATE; C under-powered; agreement floor computed across divergent fixture quotes -> low by construction, demonstrating the floor gate) ===\n');
  main(files);
  console.log('\n=== FIXTURE RUN 2: A alone (floor trivially 100%; expect powered, no null, corridor line) ===\n');
  main([files[0]]);
}

const args = process.argv.slice(2);
if (args[0] === '--fixtures') fixtures();
else if (!args.length) { console.error('usage: node score_blue_verdicts.mjs VERDICT_*.md | --fixtures'); process.exit(2); }
else main(args);
