# STUDY B — HELD-OUT CONSTRUCT: "threat to the core engagement metric" (TTM)

Version: 1.0 · Status: **PRE-REGISTERED CONSTRUCT LOCK — resolves Q-014 (construct, not classifier); ratified path S4g. Locks the moderator BEFORE any new case is coded or Study-B is widened.** · Last updated: Session 4g (Code)
Governs under: ratified `PRE_REGISTRATION.md` v0.3 §4.3 (H3) / §5 · Sharpened claim: `outputs/CROSSCHECK_RESULT.md` (Q-013) · Discipline: `skills/study-discipline/SKILL.md` §5 · Plan move: `outputs/COMPREHENSIVE_PLAN.md` (Move 2, "lock the held-out CONSTRUCT").

> **Why this file exists.** The cross-check (`outputs/CROSSCHECK_RESULT.md`) sharpened H3 into a **conditional** (Q-013): *selection beats stated intent **when the change threatens the core engagement metric**, and relaxes when the change is narrow / engagement-neutral.* That conditional is only a test if **"threatens the metric" is defined and coded independently of the outcome it predicts.** Coding it from "engagement fell / leadership reversed the change" would read the moderator off the very outcome — the circularity Campbell warned of (Q-014). This file **locks the construct from ex-ante inputs**, with a numeric kill-threshold and a validity firewall, before the widened pool is touched. Per the ratified fork (S4g): **held-out construct + validity first** — Heidegger's refusal that this is "enframing in a lab coat" is preserved (§7), not enacted-away.

---

## 1. The construct (what TTM is, and is NOT)

**TTM = the degree to which a platform change, judged *only* from information available *before* its downstream outcome, would be expected to reduce the platform's core engagement metric.**

- It is a property of the **change and its structural relation to the engagement engine** — coded from the change's mechanism, breadth, the platform's own pre-decision projections, and revenue coupling.
- It is **NOT** the observed outcome (engagement did/didn't fall; the change was/wasn't reversed). Those live in the *outcome dossier* (§4) and are coded by a different pass.

The moderator's job: partition the H3 case pool into **TTM-high** (the change fights the core metric) and **TTM-low** (the change is engagement-neutral / peripheral) *before* anyone knows what happened, so the conditional prediction can be tested rather than fitted.

## 2. Indicators (all ex-ante, input-side; coded blind to outcome)

Each indicator is scored ordinally **0 / 1 / 2** from the **ex-ante dossier** only (§4). Higher = more threatening to the core metric.

| # | Indicator | 0 (no threat) | 1 (partial) | 2 (high threat) | Source class (ex-ante) |
|---|---|---|---|---|---|
| I1 | **Signal locus** | touches only a peripheral surface (a label, a nudge, an optional setting) | affects a secondary ranking signal | alters the **core ranking/recommendation signal** (predicted watch-time, reshare/comment probability) | engineering blogs; DSA Art. 27 recommender-parameter disclosures; testimony |
| I2 | **Breadth of application** | opt-in / a single surface / <1% of impressions | a bounded default on one product | **default, all users, all content** | product docs; rollout announcements (dated pre-outcome) |
| I3 | **Projected engagement cost (the platform's *own* pre-decision estimate)** | projected neutral/positive, or no core-metric cost | projected small/ambiguous cost | **documented pre-decision projection of a material engagement/DAU/time decrease** | internal docs released in discovery; roadmap; testimony — *dated before the outcome* |
| I4 | **Revenue-model coupling** | affects a non-monetized / peripheral surface | affects a secondary monetized surface | the affected engagement **feeds the primary ad-impression engine (the core feed/recs)** | 10-K revenue-segment language; ad-load disclosures |

- **TTM raw** = I1 + I2 + I3 + I4 (range 0–8).
- **TTM normalized** = TTM raw / 8 (range 0–1).
- I3 is scored **only** from the platform's *ex-ante* projection. If no pre-decision projection is documented, I3 is coded **"unknown"** and the case is flagged **low-power for TTM** (the construct leans on I1/I2/I4); it is *not* back-filled from the outcome.

**"Reversibility framing" is deliberately NOT an indicator.** Whether a change was framed as a test vs a commitment is an *intent* signal (it belongs in the intent/pressure divergence coding of §4.3 of the pre-reg), not in TTM. Keeping it out preserves discriminant validity between "what the change is" (TTM) and "what the platform said it wanted" (intent).

## 3. The numeric kill-threshold (what settles, and what falsifies)

**Bands (pre-committed):** **TTM-high** = normalized ≥ **0.75** (raw ≥ 6/8). **TTM-low** = normalized ≤ **0.25** (raw ≤ 2/8). The **0.26–0.74 middle band is "indeterminate"** and is reported but **excluded from the confirmatory test** (it cannot adjudicate the conditional; keeping it out of the headline is a guard against gerrymandering the cut after seeing cases).

The conditional (Q-013), pre-registered over the pool:

- **Prediction:** TTM-high cases → outcome follows **pressure** (the human-centered intent is defeated/reversed/diluted). TTM-low cases → outcome may follow **intent** (a de-optimization can stick).
- **Confirms** the conditional iff, across a pool of **≥ 6 adjudicable cases (≥ 3 per band)**: TTM-high cases follow pressure in **≥ 80%**, **AND** the pressure-follow rate is **≥ 40 percentage points higher** in TTM-high than in TTM-low (the moderator must *do work*, not just co-occur).
- **KILLS the conditional** (Turchin's "name the number or strike the governor") on **any one** of:
  1. **A clean TTM-high → intent case** — a change that threatened the core metric on I1/I2/I4 (with I3 not contradicting) and *stuck toward the stated human-centered goal*. One such case refutes "selection beats intent *when* the metric is threatened."
  2. **No moderation** — TTM-low cases follow pressure about as often as TTM-high (gap < 40 pts): TTM is not moderating; the "conditional" is spurious and H3 reverts to its unconditional (already-fragile, n=2) form.
  3. **The construct is not codeable blind** — inter-coder agreement on TTM from ex-ante-only dossiers falls below the §5 bar: the moderator cannot be measured without the outcome, so the conditional is untestable as posed.

A kill is a **result**, not a failure (the pre-reg §5 discipline). It would trigger the drain's Theory-relevant machinery only where a ratified null is bound to it (Fork 6: Theory C retires *on a null*, not this one — TTM's death bounds H3's conditional, not Theory C).

## 4. The anti-circularity firewall (the "held-out" in held-out construct)

Every case carries **two physically separate dossiers**, assembled and dated:

1. **Ex-ante dossier** — the intent statement, the change mechanism, breadth, the platform's pre-decision projections, and revenue coupling. **Everything in it predates the outcome.** Used to code: intent/pressure divergence (pre-reg §4.3) **and** TTM (§2 here).
2. **Outcome dossier** — what happened downstream (engagement change, reversal, independent measures of drift-toward-capture). Used **only** to code the outcome.

**Rule:** the coder assigning TTM and the intent/pressure divergence sees **only** the ex-ante dossier. The outcome is coded by a **separate pass** (ideally a different coder; in the project-blind external cross-check, a different model instance) that never sees the ex-ante scoring. Neither pass is told the conditional under test. This is the operational meaning of "held out."

## 5. Validity requirements (construct-first — the ratified order)

Before the conditional is reported on any widened case:

- **Content validity.** I1–I4 jointly cover the *ex-ante mechanism* by which a change can threaten engagement (what the signal is, how broadly it applies, what the platform itself expected, whether it touches the money). Reviewed against the pre-reg §2 O-construct so TTM does not silently duplicate O.
- **Discriminant validity (the load-bearing one).** TTM must be **codeable from ex-ante materials alone.** Test: **≥ 2 project-blind coders** score TTM from the ex-ante dossier; require **≥ 0.6 agreement** (ordinal, e.g. weighted κ or exact-band agreement) on the two anchor cases + each widened case. Below the bar → the construct is not held-out in practice (kill condition 3, §3).
- **Predictive validity (out-of-sample).** The conditional must hold on cases **not** used to build the construct. The two anchors (§6) motivated the construct; they are **in-sample** and do **not** count toward confirmation. Confirmation requires the **widened pool** (Move 5 (widen)).
- **No post-hoc band editing.** The 0.75 / 0.25 cuts and the 80% / 40-pt thresholds are fixed here, before the widened cases are sourced.

## 6. Application to the two anchor cases (IN-SAMPLE — motivating, not confirming)

Coded from the already-sourced record (`APPROACH_B2_DOCUMENTED_CASES.md`, `CROSSCHECK_VERDICTS.md`); shown to demonstrate the construct, **explicitly excluded from confirmation** (they built it):

| Case | I1 locus | I2 breadth | I3 proj. cost | I4 revenue | TTM raw / norm | Band | Predicted | Observed outcome |
|---|---|---|---|---|---|---|---|---|
| **Facebook MSI (2018)** | 2 (core reshare/comment signal) | 2 (default, all users) | 2 (documented internal projection of reduced sessions/time) | 2 (core ad feed) | **8 / 1.00** | HIGH | pressure | followed pressure (unanimous cross-read) ✓ |
| **YouTube borderline demotion (2019)** | 1 (recs, but a narrow <1% slice) | 0 (<1% of impressions) | 0 (framed engagement-neutral) | 1 (recs feed, but marginal volume) | **2 / 0.25** | LOW | intent-possible | mixed / partly stuck ✓ |

Consistent with the conditional — but **n=2, in-sample, one corpus (L-013).** This table earns the construct the right to be *tested*, nothing more.

## 7. The widened pool this construct will be applied to (slots; sourced in Move 5 (widen), "widen before grading")

Per the ratified widen-then-grade order (Le Guin), the confirmatory pool is built **before** the grader runs. Slots, each requiring the two-dossier firewall (§4) and inclusion by the pre-reg §4.3 rule:

- **The opposite-pointing near-control** — a documented case where **selection pressure and revenue point in *opposite* directions** (the near-control the study currently lacks). This is the single most informative slot: it separates "selection" from "revenue," which the four loud anchors conflate.
- **A non-Western case** — e.g. WeChat / Douyin (D-005): does TTM→pressure hold outside the Western ad-funded model?
- **A quiet / care-system case** — a mutual-aid, mental-health, or public-service platform where the "engagement metric" may not be the core objective at all. If TTM is undefined there, that is itself a scope finding (the construct is parochial to attention-market platforms).

**These slots are named, not filled.** Filling them is Move 5 (widen) (real sourcing via the project-blind external route, L-010) — deliberately downstream of this lock so the cases are coded under a construct they could not have shaped.

## 8. Preserved dissent (travels with any TTM result — anti-C-006)

- **Heidegger (D-003).** Defining and coding "threat to the metric" is enframing wearing a lab coat; a clean TTM→pressure result measures the disease in the disease's own terms and leaves the world-as-optimizable question exactly where it stood. Recorded, not answered.
- **Luhmann (pre-reg §9).** TTM, like O, smuggles the optimizing *subject* back in. The cleaner construct is a **selection differential** (what reproduces/spreads), not "how much a change threatens a metric." If a future revision operationalizes spread, it may **replace** TTM. Live.
- **Campbell.** The moment TTM becomes a target, it will be gamed — including by the project, to make its own conditional look confirmed. The firewall (§4) and the out-of-sample rule (§5) are the guards; they are not proof against a motivated coder.
- **Nietzsche.** Even a perfectly moderated conditional is silent on the master puzzle (M) and stakes no value.

## 9. What this changes (proposed — records the ratified resolution of Q-014)

- **Q-014 is resolved** to *pre-register the held-out construct + its validity first* (majority + Campbell), Heidegger's refusal preserved — enacted by this file (`logs/OPEN_QUESTIONS.md` Q-014 → answered, S4g).
- H3's conditional (Q-013) now has a **locked, out-of-sample-testable moderator** with a numeric kill-threshold; it is **not yet tested** (the confirmatory pool is unsourced — Move 5 (widen)).
- Nothing in the ratified `PRE_REGISTRATION.md` v0.3 is rewritten; this file **governs under** it and fixes the one construct §4.3 left to the coder's judgment.

---

*A pre-registered construct lock, authored before the cases that would test it — the discipline the cross-check's independence caveat (L-013) demands. The ratified pre-registration stands; this instantiates its §4.3 make-or-break. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
