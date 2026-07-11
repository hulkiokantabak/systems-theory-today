#!/usr/bin/env node
// score_placebo_verdicts.mjs — deterministic scorer for returned placebo verdict templates.
//
// SEALED BEFORE ANY VERDICT EXISTS (Session 4g). This script is the mechanical
// application of the sealed rules — PRE_REGISTRATION.md §6 margins + SEALED_COMPANION.md
// aggregation (median + majority; reliability floor) — so no chair judgment touches
// scoring. Committed and hashed pre-verdict; any later edit to this file after verdicts
// exist is a protocol violation and must be logged as a catch.
//
// Usage:  node studies/placebo-control/src/score_placebo_verdicts.mjs VERDICT_*.md
//   (each file: a coder's filled RESPONSE_TEMPLATE, saved verbatim)
//
// Arm key (SEALED_COMPANION.md): Transcript 1 = E (empty), Transcript 2 = R (real).
// Canonical lengths (FROZEN_HASHES_S4G.md): E = 3526 words, R = 3325 words.
//
// Sealed margins (PRE_REGISTRATION.md §6):
//   DISCRIMINATES: E_S3 <= 0.5 * R_S3  AND  E_band <= R_band - 1
//   PASSES:        E_S3 >= 0.8 * R_S3  AND  |E_band - R_band| <= 1
//   otherwise INDETERMINATE. (R_S3 = 0 handled: ratio undefined -> Indeterminate.)
// Aggregation (SEALED_COMPANION.md): per-coder verdicts; operative = the verdict that
//   holds at the MEDIAN coder on each measure AND for a majority of coders individually
//   (>=2 of 3, >=3 of 4); split/no-majority -> Indeterminate; reliability floor: mean
//   pairwise S3-identification agreement (anchor-quote token-overlap >= 0.5 = same
//   catch) below 50% -> "Indeterminate — instrument unreliable".
//
// Pre-committed operationalization note (fixed here, pre-verdict): S3-identification
// agreement between two coders = |matched S3 catches| / max(|S3_a|, |S3_b|), matching
// by same-transcript + normalized token overlap of anchor quotes >= 0.5.

import fs from 'node:fs';

const E_WORDS = 3526, R_WORDS = 3325;

function parseVerdict(path) {
  const t = fs.readFileSync(path, 'utf8');
  const coder = (t.match(/Model name\/version:\s*(.+)/) || [])[1]?.trim() || path;
  const guess = (t.match(/believe this exercise is[^:]*:\s*(.+)/i) || [])[1]?.trim() || '(none)';
  const attest = /Attestation[\s\S]{0,200}?(YES|NO)/i.exec(t)?.[1] || '(missing)';
  const out = { path, coder, guess, attest, T1: null, T2: null };
  for (const tr of ['1', '2']) {
    // section = from "Transcript N" heading to the next "Transcript" heading or end
    const secRe = new RegExp('##\\s*Transcript ' + tr + '[\\s\\S]*?(?=##\\s*Transcript|##\\s*Word counts|$)', 'i');
    const sec = (t.match(secRe) || [''])[0];
    const rows = [...sec.matchAll(/^\|\s*T?\d*[-–]?\d*\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/gm)]
      .map(m => ({ quote: m[1].trim(), cat: m[2].trim().toUpperCase(), sev: m[3].trim().toUpperCase(), prov: m[4].trim().toUpperCase() }))
      .filter(r => /S[123]/.test(r.sev));
    const s3rows = rows.filter(r => r.sev.includes('S3'));
    const weighted = rows.reduce((a, r) => a + (r.sev.includes('S3') ? 9 : r.sev.includes('S2') ? 3 : 1), 0);
    const band = parseInt((sec.match(/convergence band[^:]*:\s*\**\s*(\d)/i) || [])[1], 10);
    out['T' + tr] = { rows, s3: s3rows.length, s3rows, weighted, band: Number.isFinite(band) ? band : null };
  }
  return out;
}

function coderVerdict(c) {
  const e = c.T1, r = c.T2; // arm key: T1=E, T2=R
  if (!e || !r || e.band == null || r.band == null) return 'MALFORMED';
  if (r.s3 === 0) return 'INDETERMINATE';
  const ratio = e.s3 / r.s3;
  if (ratio <= 0.5 && e.band <= r.band - 1) return 'DISCRIMINATES';
  if (ratio >= 0.8 && Math.abs(e.band - r.band) <= 1) return 'PASSES';
  return 'INDETERMINATE';
}

const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(w => w.length > 2);
function quoteOverlap(a, b) {
  const A = new Set(norm(a)), B = new Set(norm(b));
  if (!A.size || !B.size) return 0;
  let hit = 0; for (const w of A) if (B.has(w)) hit++;
  return hit / Math.min(A.size, B.size);
}
function pairAgreement(a, b) {
  let agrees = 0, denom = 0;
  for (const tr of ['T1', 'T2']) {
    const A = a[tr].s3rows, B = b[tr].s3rows;
    denom += Math.max(A.length, B.length);
    for (const ra of A) if (B.some(rb => quoteOverlap(ra.quote, rb.quote) >= 0.5)) agrees++;
  }
  return denom === 0 ? 1 : agrees / denom;
}

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: node score_placebo_verdicts.mjs VERDICT_*.md'); process.exit(2); }
const coders = files.map(parseVerdict);
const median = a => { const s = [...a].sort((x, y) => x - y); return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2; };

console.log('# PLACEBO SCORING (mechanical; sealed rules)\n');
for (const c of coders) {
  console.log(`- ${c.coder}: E(T1) S3=${c.T1?.s3} w=${c.T1?.weighted} band=${c.T1?.band} rate/1k=${(c.T1?.weighted / E_WORDS * 1000).toFixed(1)} | R(T2) S3=${c.T2?.s3} w=${c.T2?.weighted} band=${c.T2?.band} rate/1k=${(c.T2?.weighted / R_WORDS * 1000).toFixed(1)} -> ${coderVerdict(c)} | attest=${c.attest} | guess="${c.guess}"`);
}
const verdicts = coders.map(coderVerdict).filter(v => v !== 'MALFORMED');
const counts = {}; for (const v of verdicts) counts[v] = (counts[v] || 0) + 1;
const majorityNeeded = coders.length >= 4 ? 3 : 2;
const majority = Object.entries(counts).find(([, n]) => n >= majorityNeeded)?.[0] || null;

// median-side check on the two measures
const medRatio = median(coders.filter(c => c.T2?.s3 > 0).map(c => c.T1.s3 / c.T2.s3));
const medBandGap = median(coders.filter(c => c.T1?.band != null && c.T2?.band != null).map(c => c.T1.band - c.T2.band));
const medianVerdict = (medRatio <= 0.5 && medBandGap <= -1) ? 'DISCRIMINATES' : (medRatio >= 0.8 && Math.abs(medBandGap) <= 1) ? 'PASSES' : 'INDETERMINATE';

// reliability floor
let pairs = 0, agrSum = 0;
for (let i = 0; i < coders.length; i++) for (let j = i + 1; j < coders.length; j++) { agrSum += pairAgreement(coders[i], coders[j]); pairs++; }
const meanAgr = pairs ? agrSum / pairs : 1;

console.log(`\nmedian E/R S3 ratio = ${medRatio?.toFixed(2)} | median band gap (E-R) = ${medBandGap} | median-verdict = ${medianVerdict}`);
console.log(`majority verdict (>=${majorityNeeded}/${coders.length}) = ${majority || 'NONE'} | mean pairwise S3 agreement = ${(meanAgr * 100).toFixed(0)}%`);

let FINAL;
if (meanAgr < 0.5) FINAL = 'INDETERMINATE — instrument unreliable (agreement < 50%)';
else if (majority && majority === medianVerdict) FINAL = majority;
else FINAL = 'INDETERMINATE — no median+majority alignment';
console.log(`\nFINAL (cross-model-confirmed, n=1 of a kind — L-013; revisitable by a future fork): ${FINAL}`);
console.log('Reminder: a self-administered run may NOT use this output as a result (C-015).');
