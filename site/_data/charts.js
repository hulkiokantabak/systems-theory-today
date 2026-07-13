// charts.js — hand-authored, honest SVG charts for the Facts & Figures page, built at
// build time from site/_data/facts.js. Per the data-viz panel (Tufte/Bertin/Cairo/
// Meadows/Skeptic): lead with the gap, never a bare median, show the zeros, no false
// precision, color never the only channel. SVGs use CSS classes (c-ink, c-amber, …) so
// they adapt to the day/night theme. Version: 1.0 · Session 4c
import facts from './facts.js';

const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

// ── 1. The claim funnel: 14 → ~11 → 3 → 0 ─────────────────────────────
function funnel() {
  const tiers = [
    { label: '14 pressure-tests defined', n: 14, cls: 'ink', hollow: false },
    { label: '~11 with a first-pass account', n: 11, cls: 'ink', hollow: false },
    { label: '3 with a falsifiable claim', n: 3, cls: 'amber', hollow: false },
    { label: '0 tested against data', n: 0, cls: 'ink', hollow: true },
  ];
  const W = 660, x0 = 6, barX = 30, barMax = 380, rowH = 52, top = 14, H = top + tiers.length * rowH + 6;
  let s = `<svg class="fchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Claim funnel: 14 pressure-tests defined, about 11 with a first-pass account, 3 with a falsifiable claim, 0 tested against data.">`;
  tiers.forEach((t, i) => {
    const y = top + i * rowH, w = Math.max(t.n / 14 * barMax, t.n === 0 ? 3 : 0);
    if (t.hollow) {
      s += `<rect x="${barX}" y="${y}" width="${Math.max(w, 26)}" height="30" rx="4" class="fill-none s-soft" stroke-dasharray="4 4"/>`;
    } else {
      s += `<rect x="${barX}" y="${y}" width="${w}" height="30" rx="4" class="c-${t.cls}"/>`;
    }
    s += `<text x="${barX + (t.hollow ? Math.max(w, 26) : w) + 12}" y="${y + 21}" class="c-${t.cls === 'amber' ? 'amber' : 'soft'}" font-size="18" font-weight="600">${t.n}</text>`;
    s += `<text x="${barX}" y="${y + 47}" class="c-faint" font-size="12.5">${esc(t.label)}</text>`;
  });
  return s + '</svg>';
}

// ── 2. Three theories: the vote spread, not the score ─────────────────
function dumbbell() {
  const rows = facts.theories.map((t) => ({
    ...t, weak: t.key === 'A' ? 'weakest: falsifiability' : t.key === 'B' ? 'risk: conspiracy-shape' : 'exposed: the meaning-wound',
  }));
  const W = 660, axX = 150, axW = 330, rowH = 74, top = 30, H = top + rows.length * rowH + 20;
  const X = (v) => axX + (v / 10) * axW;
  let s = `<svg class="fchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Round-7 theory strength as ranges: A median 7 (low 4 Turchin, high 9 Meadows); B median 7 (low 5 Kant, high 9 Zuboff); C median 6 (low 3 Nietzsche, high 9 Ostrom).">`;
  // axis ticks 0,5,10
  [0, 5, 10].forEach((v) => {
    s += `<line x1="${X(v)}" y1="${top - 8}" x2="${X(v)}" y2="${top + rows.length * rowH - 30}" class="s-hair"/>`;
    s += `<text x="${X(v)}" y="${top - 14}" text-anchor="middle" class="c-faint" font-size="11">${v}</text>`;
  });
  rows.forEach((t, i) => {
    const y = top + i * rowH + 14;
    s += `<text x="6" y="${y - 2}" class="c-ink" font-size="15" font-weight="600">${t.key} · ${esc(t.name)}</text>`;
    s += `<text x="6" y="${y + 16}" class="c-faint" font-size="11.5">${esc(t.kind)} · ${esc(t.weak)}</text>`;
    // range bar low→high
    s += `<line x1="${X(t.low[1])}" y1="${y + 6}" x2="${X(t.high[1])}" y2="${y + 6}" class="s-ink" stroke-width="3" stroke-linecap="round"/>`;
    s += `<circle cx="${X(t.low[1])}" cy="${y + 6}" r="4.5" class="c-soft"/>`;
    s += `<circle cx="${X(t.high[1])}" cy="${y + 6}" r="4.5" class="c-soft"/>`;
    s += `<circle cx="${X(t.median)}" cy="${y + 6}" r="6.5" class="c-amber"/>`;
    // endpoint voter labels + median
    s += `<text x="${X(t.low[1])}" y="${y + 26}" text-anchor="middle" class="c-faint" font-size="10.5">${t.low[1]} ${esc(t.low[0])}</text>`;
    s += `<text x="${X(t.high[1])}" y="${y + 26}" text-anchor="middle" class="c-faint" font-size="10.5">${t.high[1]} ${esc(t.high[0])}</text>`;
    s += `<text x="${X(t.median)}" y="${y - 8}" text-anchor="middle" class="c-amber" font-size="12" font-weight="600">med ${t.median}</text>`;
  });
  return s + '</svg>';
}

// ── 3. Four-session trajectory — small multiples of sparklines ────────
function sparklines() {
  const T = facts.trajectory, ticks = T.sessions;
  const series = [
    { title: 'Files', vals: T.files },
    { title: 'Words (k)', vals: T.words, approx: true },
    { title: 'Dissents preserved', vals: T.dissents, note: 'flat since S2' },
    { title: 'Catches', vals: T.catches, note: '13th (C-013) logged post-S4' },
    { title: 'Falsifiable claims', vals: [1, 3, 3, 3], note: 'hand-judged' },
  ];
  return series.map((se) => {
    const w = 150, h = 46, pad = 8, min = 0, max = Math.max(...se.vals);
    const X = (i) => pad + (i / (ticks.length - 1)) * (w - 2 * pad - 22);
    const Y = (v) => h - pad - (v / (max || 1)) * (h - 2 * pad);
    const pts = se.vals.map((v, i) => `${X(i)},${Y(v)}`).join(' ');
    let svg = `<svg class="fchart spark" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(se.title)}: ${se.vals.join(', ')} over sessions 1 to 4.">`;
    svg += `<polyline points="${pts}" class="fill-none s-soft" stroke-width="1.5"/>`;
    se.vals.forEach((v, i) => { svg += `<circle cx="${X(i)}" cy="${Y(v)}" r="${i === se.vals.length - 1 ? 3.2 : 2}" class="${i === se.vals.length - 1 ? 'c-amber' : 'c-soft'}"/>`; });
    svg += `<text x="${X(se.vals.length - 1) + 6}" y="${Y(se.vals[se.vals.length - 1]) + 4}" class="c-amber" font-size="12" font-weight="600">${se.approx ? '~' : ''}${se.vals[se.vals.length - 1]}</text>`;
    svg += '</svg>';
    return { title: se.title, start: (se.approx ? '~' : '') + se.vals[0], end: (se.approx ? '~' : '') + se.vals[se.vals.length - 1], note: se.note || '', svg };
  });
}

export default { funnel: funnel(), dumbbell: dumbbell(), sparklines: sparklines() };
