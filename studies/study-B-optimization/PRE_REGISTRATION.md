# PRE-REGISTRATION — Study B: Optimization Intensity (O) vs Capture/Pathology (P)

Version: 0.2 · Status: **FINALIZATION CANDIDATE — Code-proposed specifics for author/Chat to ratify or amend; NOT yet finalized, NOT ratified; nothing runs until it is** · Last updated: Session 4c
Source of claim: `outputs/THEORY_B_OPERATIONALIZED.md` (§2–§7) · Heavy-Code commission: `WORK_ORDER_HEAVY_B.md` (prepared, gated)

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

## 7. Finalization decisions — Code-proposed candidates (author/Chat ratifies or amends)

*Finalizing a pre-registration is a Chat/author act (`../README.md`); Code only proposes the candidates below — grounded in `outputs/THEORY_B_OPERATIONALIZED.md` and `SOURCES.md` — so there is a concrete artifact to ratify. **None is fixed until the author ratifies; no outcome (P) is examined until it is.** Each item gives Code's proposed candidate and the decision the author/Chat must confirm. No O or P values are asserted here — only which units/events/rules enter the study.*

1. **Unit list (which platforms / product-versions).** *Proposed candidate:* a small, comparable set of large digital platforms with documented ranking regimes and available P-proxies — e.g. a feed-ranked social platform, a short-video platform, and a video-recommendation platform — **plus at least one deliberately low-O comparison** (a chronological-by-default or non-recommender service) so H1 has variance in O. Product-*versions over time* of a single platform double as H2 units. *Decision:* author/Chat fixes the exact set and the low-O anchor.
2. **De-optimization events + date windows (H2).** *Proposed candidate:* publicly documented ranking-objective changes, chronological-feed introductions/mandates, and design-code enforcement dates (`SOURCES.md`, "Natural-experiment events"), each with a dated, sourced record and a pre-set pre/post window. *Decision:* author/Chat fixes which events and the window length **before** any P series is examined.
3. **Case-selection rule for §4(c) — selection-vs-design (H3).** *Proposed candidate:* include only cases with a *documented* designer intent (public roadmap/testimony) **and** an independently *documented* selection pressure, coded **blind to the outcome**; exclude any case where either is inferred from the outcome. *Decision:* author/Chat ratifies the inclusion rule — this rule *is* the integrity of H3 and must be fixed in advance.
4. **Final proxy operationalizations + data sources.** *Proposed candidate:* the §2 proxy list bound to specific `SOURCES.md` entries, each with a sign correction and a normalization base year; a proxy with no reproducible source is **dropped, not approximated**. *Decision:* author/Chat ratifies the proxy→source binding; `SOURCES.md` is pinned (access dates + licences) in the heavy-Code session.
5. **Analysis code frozen + hashes recorded.** *Mechanical — heavy-Code session, not now:* freeze `src/ingest.py` / `indices.py` / `analyze.py` and record their hashes **before** any outcome (P) is read. Specified in `WORK_ORDER_HEAVY_B.md`.

## 8. Status & gate

This document is a **finalization candidate**, not a finalized or ratified pre-registration. The sequence to a result is: **(a)** author/Chat ratifies §7 (fixing units, events, proxies, case rule) → the pre-registration is *finalized*; **(b)** the author ratifies `WORK_ORDER_HEAVY_B.md` → **Gate 2 (heavy Code)** opens; **(c)** only then is any data pulled, any index built, any P examined. The scripts in `src/` refuse to run until then. Fixing O's proxies or P's composite *after* seeing outcomes would void the test.

---

*This is a scaffold. Running it is gated (see `../README.md`). Author: Hulki Okan Tabak — with Claude.*
