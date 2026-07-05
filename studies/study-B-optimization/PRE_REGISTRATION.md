# PRE-REGISTRATION — Study B: Optimization Intensity (O) vs Capture/Pathology (P)

Version: 0.1 · Status: **DRAFT — not finalized, not ratified** · Last updated: Session 4
Source of claim: `outputs/THEORY_B_OPERATIONALIZED.md` (§2–§7)

> **This pre-registration must be finalized and author-ratified before any outcome variable (P) is examined.** Fixing O's proxies and P's composite *after* seeing outcomes would void the test.

## 1. Hypotheses (fixed in advance)

- **H1 (cross-system).** Across comparable digital platforms/products, higher **optimization intensity O** predicts higher **capture/pathology P**, controlling for audience and content type.
- **H2 (natural experiment).** When a system is **re-optimized toward a human end** (ships a "time-well-spent" objective; offers/defaults a chronological feed; is subject to a design-code mandate), **P falls**; when it re-optimizes harder for engagement, **P rises**.
- **H3 (selection, not design — the integrity test).** In cases where a designer's **intent** and the **selection pressure** diverge, the outcome follows the **pressure**, not the stated plan.

## 2. Variables (proxies fixed before outcomes)

**O — optimization intensity** (normalized composite, equal weights unless amended here):
- objective function: engagement/time-on-platform vs human-centered metric (declared or inferred)
- personalization depth: recommender aggressiveness / feed fit-per-user
- iteration speed: rate of A/B testing / model re-optimization
- autonomy from human ends: share of ranking by learned objective vs user-chosen controls (chronological, opt-outs)

**P — capture/pathology** (pre-registered composite):
- compulsive-use metrics (session length, return frequency, self-reported loss of control)
- affective-polarization measures
- spread-rate differential of false vs true claims
- use-associated well-being decrements

**Controls:** audience size, content type/category.

## 3. Normalization & compositing rule

1. Normalize each proxy within domain over time (z-score to its own history, or index to a base year); sign-correct so higher = more.
2. O = pre-declared weighted mean of normalized O-proxies (default equal weights). Same for P.
3. Alternative weightings are **robustness checks**, not the headline.

## 4. Design

- (a) cross-system correlation of O with P (H1);
- (b) before/after P around real de-optimization events (H2), interrupted-time-series where possible;
- (c) curated case analysis on documented intent-vs-selection cases (H3).

## 5. Falsification conditions (from THEORY_B_OPERATIONALIZED §6)

1. **P rises independent of O** — pathologies grow where O is low.
2. **De-optimization does nothing** — re-optimized systems show no P reduction.
3. **Intent beats selection** — outcomes track stated plans better than selection pressures.
4. **O is not measurable non-circularly** — every O measure smuggles in P.

Any of these, met, falsifies (does not merely strain) the claim.

## 6. Scope limits stated in advance

- Documented cases and datasets skew to large Western platforms (**D-005** vantage bias). Generalization beyond that is a separate question.
- O is measured from **outside** proprietary systems; external proxies are imperfect shadows of the true objective function. Triangulate; state proxy limits.

## 7. What is NOT pre-registered here yet (to finalize before running)

- [ ] the exact unit list (which platforms / product-versions)
- [ ] the exact de-optimization events and their date windows
- [ ] the case-selection rule for §4(c)
- [ ] final proxy operationalizations + data sources (`SOURCES.md`)
- [ ] analysis code frozen + hashes recorded

---

*This is a scaffold. Running it is gated (see `../README.md`). Author: Hulki Okan Tabak — with Claude.*
