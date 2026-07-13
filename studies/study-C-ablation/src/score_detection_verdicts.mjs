#!/usr/bin/env node
// score_detection_verdicts.mjs — sealed mechanical scorer for the S4i detection-
// validation round (kit-detection-s4i). WRITTEN AND FIXTURE-TESTED BEFORE ANY
// VERDICT EXISTS (the round-1 lesson: a post-verdict scorer is a weaker seal).
//
// Reads verdict files (VERDICT_<model>_detection.md) + the sealed gold
// inventories, and computes, per the sealed rules
// (studies/study-C-ablation/detection-repair-s4i/SEALED_COMPANION_DETECTION.md):
//   - per-coder recall on SEEDED gold events (the primary statistic)
//   - per-coder recall on natural-inventory gold (secondary, B6-disclosed)
//   - mandatory-hit check on the commitment-anchored omission golds
//   - false positives on the zero-event clean segments
//   - per-coder granularity ratio vs gold (gold-referenced, never pairwise)
//   - mean pairwise event-alignment on matched spans (the floor statistic)
// NO count-similarity statistic is computed anywhere (sealed: identical counts
// over different events is disagreement wearing a matching total).
//
// MATCHING RULE (sealed): a coder event matches a gold event iff same segment
// AND (for SPAN/SPANSET) token-overlap between the coder's quote (any locus)
// and the gold span is >= 0.5 of the shorter quote's tokens, or one quote
// contains the other; (for OMISSION) the coder's commit quote token-overlaps
// the gold commitment >= 0.5. One-to-one: each gold event consumes at most one
// coder event (best overlap wins); unmatched coder events on gold segments are
// enumeration surplus (granularity), not errors, unless on a clean segment.
//
// Usage: node score_detection_verdicts.mjs <verdictsDir> [--fixtures]
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const GOLD_PATH = resolve(HERE, '..', 'detection-repair-s4i', 'GOLD_INVENTORIES_SEALED.md');

const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
function overlap(a, b) {
  const ta = norm(a), tb = norm(b);
  if (!ta.length || !tb.length) return 0;
  const setB = new Set(tb);
  const inter = ta.filter((t) => setB.has(t)).length;
  const shorter = Math.min(ta.length, tb.length);
  const contained = a && b && ((a.includes(b) || b.includes(a)) ? 1 : 0);
  return Math.max(inter / shorter, contained);
}

export function parseGold(text) {
  const segs = new Map();
  let cur = null;
  for (const line of text.split(/\r?\n/)) {
    const h = line.match(/^## (\w+) \((\w+); ([^)]*)\)/);
    if (h) { cur = { id: h[1], kind: h[2], events: [] }; segs.set(h[1], cur); continue; }
    const e = line.match(/^- (\S+?)( \[OMISSION\])?( \[sev-cand \w+\])?: span="(.*?)" flaw-object="(.*)"$/);
    if (e && cur) cur.events.push({ id: e[1], omission: !!e[2], span: e[4], flaw: e[5] });
  }
  return segs;
}

export function parseVerdict(text) {
  const segs = new Map();
  let cur = null;
  const events = [];
  for (const line of text.split(/\r?\n/)) {
    const s = line.match(/^SEG:\s*id=(\w+)/);
    if (s) { cur = s[1]; segs.set(cur, []); continue; }
    if (/^EVENT:/.test(line) && cur) {
      const kind = (line.match(/kind=(\w+)/) || [])[1] || 'SPAN';
      const quotes = [...line.matchAll(/(?:quote\d*|commit)="(.*?)"/g)].map((m) => m[1]);
      const flaw = (line.match(/flaw="(.*?)"/) || [])[1] || '';
      segs.get(cur).push({ seg: cur, kind, quotes, flaw });
      events.push({ seg: cur, kind, quotes, flaw });
    }
  }
  const identity = (text.match(/MODEL:\s*identity="([^"]*)"/) || [])[1] || 'UNKNOWN';
  const recognize = (text.match(/RECOGNIZE:\s*source(?:-project)?="?([^";\n]*)/) || [])[1] || '';
  return { segs, events, identity, recognize };
}

function matchCoder(gold, verdict) {
  const perGold = [];
  const usedCoder = new Set();
  for (const [segId, seg] of gold) {
    const coderEvents = verdict.segs.get(segId) || [];
    for (const g of seg.events) {
      let best = null, bestScore = 0;
      coderEvents.forEach((c, i) => {
        const key = segId + ':' + i;
        if (usedCoder.has(key)) return;
        const q = g.omission ? (c.kind === 'OMISSION' ? c.quotes[0] : null) : c.quotes.map((x) => x).join(' ');
        if (q == null) return;
        const sc = Math.max(...c.quotes.map((cq) => overlap(cq, g.span)), 0);
        if (sc >= 0.5 && sc > bestScore) { best = key; bestScore = sc; }
      });
      if (best) usedCoder.add(best);
      perGold.push({ seg: segId, gold: g, hit: !!best, segKind: seg.kind });
    }
  }
  return perGold;
}

export function score(goldText, verdicts) {
  const gold = parseGold(goldText);
  const rows = [];
  const perCoderMatched = new Map();
  for (const [name, text] of verdicts) {
    const v = parseVerdict(text);
    const pg = matchCoder(gold, v);
    const seeded = pg.filter((x) => x.segKind === 'seeded');
    const natural = pg.filter((x) => x.segKind === 'natural' || x.segKind === 'boundary');
    const omis = pg.filter((x) => x.gold.omission);
    const goldSegs = new Set([...gold.keys()]);
    let cleanFP = 0;
    for (const [segId, seg] of gold) if (seg.kind === 'clean') cleanFP += (v.segs.get(segId) || []).length;
    const goldTotal = pg.length;
    const coderTotalOnGold = [...v.segs.entries()].filter(([s]) => goldSegs.has(s)).reduce((n, [, e]) => n + e.length, 0);
    perCoderMatched.set(name, pg);
    rows.push({
      coder: name, identity: v.identity, recognize: v.recognize.trim(),
      seededRecall: seeded.length ? seeded.filter((x) => x.hit).length / seeded.length : null,
      seededN: seeded.length,
      naturalRecall: natural.length ? natural.filter((x) => x.hit).length / natural.length : null,
      omissionHits: omis.filter((x) => x.hit).length, omissionN: omis.length,
      cleanFalsePositives: cleanFP,
      granularityRatio: goldTotal ? +(coderTotalOnGold / goldTotal).toFixed(2) : null,
    });
  }
  // pairwise alignment on gold-matched events (same gold event hit by both coders)
  const names = [...perCoderMatched.keys()];
  const pairs = [];
  for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) {
    const a = perCoderMatched.get(names[i]), b = perCoderMatched.get(names[j]);
    let both = 0, either = 0;
    for (let k = 0; k < a.length; k++) {
      if (a[k].hit || b[k].hit) either++;
      if (a[k].hit && b[k].hit) both++;
    }
    pairs.push({ pair: names[i] + '×' + names[j], alignment: either ? +(both / either).toFixed(2) : null });
  }
  return { rows, pairs };
}

// ── fixtures (run with --fixtures; must pass before any live verdict is read) ──
function fixtures() {
  const goldText = ['## T01 (seeded; test-domain) — 2 gold event(s)',
    '- G1: span="the projection double-counts the shuttle subsidy" flaw-object="double-count against the projection"',
    '- G2 [OMISSION]: span="we will verify each figure against the ledger" flaw-object="committed verification not performed"',
    '## T02 (clean; test-domain) — 0 gold event(s)', ''].join('\n');
  const perfect = ['MODEL: identity="fixture-perfect"; role=enumerator', 'SEG: id=T01',
    'EVENT: id=E01; kind=SPAN; cat=EVID; prov=SOLO; quote="the projection double-counts the shuttle subsidy"; target="projection"; flaw="double-count against the projection"; fix="remove the duplicate"',
    'EVENT: id=E02; kind=OMISSION; cat=CONS; prov=SOLO; commit="we will verify each figure against the ledger"; locus="figures section"; missing="the verification"; fix="perform the check"',
    'COUNT: events=2; notes=0', 'SEG: id=T02', 'COUNT: events=0; notes=0',
    'RECOGNIZE: source="NONE"', 'MODEL: identity="fixture-perfect"; role=enumerator; consistent-with-head=YES'].join('\n');
  const random = ['MODEL: identity="fixture-random"; role=enumerator', 'SEG: id=T01',
    'EVENT: id=E01; kind=SPAN; cat=LOG; prov=SOLO; quote="completely unrelated words about weather patterns"; target="nothing"; flaw="imaginary"; fix="none"',
    'COUNT: events=1; notes=0', 'SEG: id=T02',
    'EVENT: id=E01; kind=SPAN; cat=LOG; prov=SOLO; quote="phantom flaw in the clean segment"; target="nothing"; flaw="invented"; fix="none"',
    'COUNT: events=1; notes=0', 'RECOGNIZE: source="NONE"', 'MODEL: identity="fixture-random"; role=enumerator; consistent-with-head=YES'].join('\n');
  const shifted = ['MODEL: identity="fixture-split-grain"; role=enumerator', 'SEG: id=T01',
    'EVENT: id=E01; kind=SPAN; cat=EVID; prov=SOLO; quote="the projection double-counts"; target="projection"; flaw="double-count (part 1)"; fix="remove"',
    'EVENT: id=E02; kind=SPAN; cat=EVID; prov=SOLO; quote="double-counts the shuttle subsidy"; target="subsidy line"; flaw="double-count (part 2)"; fix="remove"',
    'EVENT: id=E03; kind=OMISSION; cat=CONS; prov=SOLO; commit="we will verify each figure against the ledger"; locus="figures"; missing="verification"; fix="perform"',
    'COUNT: events=3; notes=0', 'SEG: id=T02', 'COUNT: events=0; notes=0',
    'RECOGNIZE: source="NONE"', 'MODEL: identity="fixture-split-grain"; role=enumerator; consistent-with-head=YES'].join('\n');
  const r = score(goldText, [['perfect', perfect], ['random', random], ['split', shifted]]);
  const P = r.rows.find((x) => x.coder === 'perfect'), R = r.rows.find((x) => x.coder === 'random'), S = r.rows.find((x) => x.coder === 'split');
  const checks = [
    ['perfect coder: full seeded recall + omission hit + zero clean FPs', P.seededRecall === 1 && P.omissionHits === P.omissionN && P.cleanFalsePositives === 0],
    ['random enumerator FAILS (zero recall) and fires on the clean segment', R.seededRecall === 0 && R.cleanFalsePositives === 1],
    ['granularity-shifted clone: recall preserved, flagged as granularity divergence (ratio > 1), never as detection failure', S.seededRecall === 1 && S.granularityRatio > 1],
    ['no count-similarity statistic exists anywhere in the output', !JSON.stringify(r).includes('countSimilarity')],
  ];
  let ok = true;
  for (const [name, pass] of checks) { console.log((pass ? 'PASS' : 'FAIL') + '  ' + name); if (!pass) ok = false; }
  return ok ? 0 : 1;
}

const args = process.argv.slice(2);
if (args.includes('--fixtures')) process.exit(fixtures());
const dir = args[0];
if (!dir || !existsSync(dir)) { console.error('usage: node score_detection_verdicts.mjs <verdictsDir> | --fixtures'); process.exit(2); }
const files = readdirSync(dir).filter((f) => /^VERDICT_.*\.md$/i.test(f));
const verdicts = files.map((f) => [f.replace(/^VERDICT_|\.md$/gi, ''), readFileSync(join(dir, f), 'utf8')]);
const result = score(readFileSync(GOLD_PATH, 'utf8'), verdicts);
console.log(JSON.stringify(result, null, 2));
