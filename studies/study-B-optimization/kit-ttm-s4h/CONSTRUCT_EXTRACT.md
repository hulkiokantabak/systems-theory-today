# CODING GUIDE — the "expected metric impact" construct (score from the ex-ante dossier only)

You are scoring, for each case, **the degree to which a platform change — judged ONLY from information available before its downstream outcome — would be expected to reduce the platform's core engagement metric** (time watched, sessions, interactions: whatever the dossier shows the platform's ranking/recommendation engine primarily optimizes).

This is a property of **the change and its structural relation to the engagement engine** — never of what actually happened afterward. You must not use any knowledge of subsequent events; a separate section of the response template asks you, *after* coding, what you happen to know about each case's aftermath, so that this limitation can be measured rather than assumed away.

## The four indicators (each scored 0 / 1 / 2 from the dossier)

| # | Indicator | 0 (no threat) | 1 (partial) | 2 (high threat) |
|---|---|---|---|---|
| I1 | **Signal locus** | touches only a peripheral surface (a label, a nudge, an optional setting) | affects a secondary ranking signal | alters the **core ranking/recommendation signal** (e.g. predicted watch-time, reshare/comment probability) |
| I2 | **Breadth of application** | opt-in / a single surface / a small stated fraction of impressions | a bounded default on one product or cohort | **default, all users, all content** |
| I3 | **Projected engagement cost — the platform's OWN pre-decision estimate** | projected neutral/positive, or no core-metric cost stated | projected small/ambiguous cost | **a documented pre-decision projection of a material engagement/time/usage decrease** |
| I4 | **Revenue-model coupling** | affects a non-monetized / peripheral surface | affects a secondary monetized surface | the affected engagement **feeds the primary ad-impression engine (the core feed/recommendations)** |

## Coding rules (binding)

1. **Ex-ante only.** Every score rests on the dossier's dated record. If you find yourself reasoning from what later happened, stop and re-score from the dossier.
2. **Per-indicator citation (mandatory).** Every score must quote, in the response line, the dossier line(s) it rests on. A score without a quote is unusable.
3. **I3 "unknown."** If the dossier documents no pre-decision projection, code I3 as `unknown` (not 0, not 2) — the case is then flagged low-power on this construct; never infer a projection.
4. **Totals.** Raw = I1+I2+I3+I4 (range 0–8; if I3 is `unknown`, report raw over the three scored indicators and mark it `/6`). Normalized = raw ÷ 8 (or ÷ 6 where I3 is unknown). Bands: **HIGH** ≥ 0.75 · **LOW** ≤ 0.25 · the 0.26–0.74 middle is **INDETERMINATE** — report it as such; do not force a band.
5. **Ambiguity rounds toward the middle,** never toward a band edge.
6. You are **not** told what any score will be used for, and you do not name winners, test hypotheses, or compare cases — score each case on its own dossier.
