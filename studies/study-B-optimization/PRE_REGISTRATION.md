# PRE-REGISTRATION — Study B: Optimization Intensity (O) vs Capture/Pathology (P)

Version: 0.3 · Status: **RATIFIED (author, Session 4d) — the four §4 decisions + the §0 reweighting are fixed; Gate 2 is open. Pipeline built + frozen; no data → no empirical result (`RUN_STATUS.md`, `FROZEN_HASHES.md`).** · Last updated: Session 4e (ratification placed by Code)
Source of claim: `outputs/THEORY_B_OPERATIONALIZED.md` (§2–§9) · Heavy-Code commission: `WORK_ORDER_HEAVY_B.md` (v1.1 candidate) · Sources: `SOURCES.md`
Supersedes: v0.2 (Code finalization candidate). This version resolves §7 through the panel, preserves dissent, and records a design reweighting.

> **This pre-registration must be author-ratified before any outcome variable (P) is examined.** Fixing O's proxies or P's composite *after* seeing outcomes would void the test.

---

## 0. What the panel changed (read this first)

The deliberation did not rubber-stamp v0.2; it made three load-bearing changes, each carried into the sections below:

1. **Reweighted the hypotheses.** H1 (cross-section of ~6 platforms) is demoted to **descriptive/suggestive** — at n≈6 with heavy confounding (content type, demographics, network structure), it cannot identify O→P. The **inferential weight moves to H2** (within-unit, before/after a de-optimization event) and **H3** (documented divergence cases). "A result" now means an H2/H3 result; H1 is context.
2. **Named the O/P measurement asymmetry.** **O is now reproducibly sourceable from process/inputs** (DSA Art. 27 recommender-parameter disclosures; Art. 38 non-profiling option; engineering blogs; testimony; filings) — which also makes it **non-circular with P** (inputs vs outcomes), defusing falsifier #4. **P is the hard side** — fragmented, mostly low-frequency, often societal-not-platform, and (for well-being) causally contested. B is **O-easy, P-hard**; expectations are set accordingly.
3. **Dropped what has no reproducible source.** Per the "bind or drop" rule, proxies with no external reproducible source (notably A/B-testing cadence) are **dropped, not approximated** (§2).

Preserved dissent from the panel is recorded in §9 and must travel with any result.

## 1. Hypotheses (fixed in advance; reweighted)

- **H1 (cross-system — DESCRIPTIVE).** Across the fixed unit set, higher **O** is *associated* with higher **P**. Reported as a labeled scatter with confounds named; **not** treated as identifying (n is small, confounds large).
- **H2 (natural experiment — PRIMARY).** Within a unit, when it is **re-optimized toward a human end** (a documented objective change; a chronological/non-profiling option or default; a design-code mandate), **P falls**; when it re-optimizes harder for engagement, **P rises.** Interrupted-time-series (ITS) where a sufficiently high-frequency P series exists around the event; otherwise a pre-registered, lower-power before/after, **labeled as such.**
- **H3 (selection, not design — the INTEGRITY test).** In cases where documented designer **intent** and documented selection **pressure** diverge, the outcome follows the **pressure**, not the stated plan.

## 2. Variables (proxies bound to sources or dropped; O measured from inputs, P from outcomes — no overlap)

**O — optimization intensity** (normalized composite, equal weights; measured from process/inputs, never from outcomes):

| Proxy | Operationalization (from outside) | Candidate reproducible source | Keep? |
|---|---|---|---|
| Objective function | ordinal: primary optimization target = engagement/time/DAU (high) → mixed → human-centered metric (low) | engineering blogs; exec testimony; SEC 10-K "engagement" language; DSA Art. 15/27 transparency reports | **keep** |
| Personalization depth | ordinal: chronological-only (low) → ranked, limited personalization (mid) → per-user ML "For You" (high) | DSA Art. 27 recommender-parameter disclosures; platform documentation | **keep** |
| Autonomy from user control | ordinal: no user ranking control (high O) → opt-out available → chronological default / granular controls (low O) | platform settings docs; DSA Art. 38 non-profiling-option availability | **keep** |
| Iteration speed (A/B cadence) | — | **no reproducible external source** (proprietary) | **DROP** (may appear as a qualitative annotation only, not in the composite) |

**P — capture/pathology** (pre-registered composite; measured from outcomes; each proxy bound or demoted):

| Proxy | Operationalization | Candidate reproducible source | Status |
|---|---|---|---|
| Problematic / compulsive use | validated scales (e.g. Bergen Social Media Addiction Scale) and/or published session/return metrics, per platform | peer-reviewed problematic-use studies & meta-analyses | **keep** (self-report caveat) |
| Misinformation diffusion differential | false-vs-true spread differential, per platform | peer-reviewed diffusion studies (e.g. Vosoughi, Roy & Aral 2018 for Twitter) | **keep where platform-specific data exists; note coverage gaps** |
| Affective polarization | feeling-thermometer series | ANES / Eurobarometer-type surveys | **demote:** societal, not per-platform → used **only** in H2 event context where a study links it to the specific platform/event; not a generic per-platform score |
| Well-being decrement | use-associated well-being change | peer-reviewed well-being studies & meta-analyses | **demote & label CONTESTED** (Haidt/Odgers dispute); reported with effect-size range and the dispute stated |

**Controls (H1):** audience size, content type/category. **Non-circularity check (falsifier #4):** every O proxy derives from a documented *input/parameter*; every P proxy from a measured *outcome*; no proxy feeds both. This separation is a pre-registered requirement, not a post-hoc hope.

## 3. Normalization & compositing rule

1. Normalize each proxy within domain over time (z-score to its own history, or index to a base year); sign-correct so higher = more.
2. O = pre-declared equal-weighted mean of the **three** retained normalized O-proxies. P = pre-declared equal-weighted mean of the retained normalized P-proxies (with demoted proxies used only as specified).
3. Alternative weightings / proxy sets are **robustness checks**, not the headline. If reasonable alternatives materially move the result, that is evidence O (or P) is a measurement artifact (falsifier #4 / a measurement flag).

## 4. Design & the four finalized decisions (panel-recommended; author to ratify)

### 4.1 — DECISION 1: Unit list + low-O contrast
- **Fixed unit set (H1 descriptive + H2 hosts):** Facebook, Instagram, YouTube, TikTok, X/Twitter, and **Reddit** (community-ranked, lower personalization) as a lower-O point. These are the platforms with *both* documented ranking regimes (DSA disclosures) *and* published P-proxies.
- **Low-O contrast comes primarily from WITHIN-platform de-optimized states** (chronological/non-profiling modes; pre-algorithmic eras) — see 4.2 — because **no pure low-O platform with full per-platform P data exists.** A same-modality low-O anchor (a chronological/non-optimized social feed, e.g. Mastodon) is included **only** for the O side and any P proxy that happens to exist; its thin P data is stated as a limit.
- *Ratify:* the six-unit set, Reddit as the lower-O point, and reliance on within-platform states for the low-O contrast.

### 4.2 — DECISION 2: De-optimization events + windows (H2, the primary test)
Fixed event set (each dated, documented, sourced **before** any P series is examined):
- **Facebook "Meaningful Social Interactions" feed change (Jan 2018)** — a *stated* human-centered reframe; a strong dual H2/H3 case because the pressure plausibly pushed the opposite way.
- **Instagram switch to algorithmic feed (2016)** — de-optimization *in reverse* (O ↑ → H2 predicts P ↑).
- **Instagram "hide likes" staggered rollout (2019–2021)** — **the cleanest quasi-experiment** (staggered by geography), *if* a geo-resolved P series exists.
- **DSA non-profiling recommender option for VLOPs (from Aug 2023)** — exogenous, multi-platform, dated; **weak treatment intensity** (opt-in, low uptake) — stated as such.
- **Windows:** a pre-registered **±12-month** window around each event for ITS; where only low-frequency survey P exists, degrade to a labeled before/after with a power caveat. **Windows and event dates are fixed here, before outcomes.**
- *Ratify:* the event set, the ±12-month window, and the ITS-or-labeled-before/after rule.

### 4.3 — DECISION 3: Case-selection rule for H3 (selection-vs-design — make-or-break)
Inclusion criteria (**all** must hold), with a **pre-committed case pool** fixed before coding:
1. **Documented intent** — a public, dated statement of design intent *preceding* the outcome (roadmap, testimony, engineering blog, released internal doc).
2. **Documented pressure** — an independently documented selection/market pressure, from a source **not** derived from the outcome.
3. **A-priori divergence coding** — intent and pressure are classified aligned/divergent **blind to the outcome**.
4. **Independent outcome measure** — the drift-toward-capture (or not) is measured from a source independent of 1–2.
- **The test uses the divergent cases**, especially **benign/human-centered intent + capture-ward pressure**: if the outcome follows pressure → supports B; if it follows intent (benign intent, benign outcome) → agency prevailed, challenging B's strong version. **The pool must be constructed to admit both**, or the test is rigged — so candidate B-*falsifying* cases (documented de-optimizations that stuck per stated intent) are included by the same rule.
- **No post-hoc case addition or exclusion.** In the real study, intent/pressure are coded by independent coders blind to outcome; here the pre-committed rubric substitutes.
- *Ratify:* this inclusion rule, the blind-coding requirement, and the pre-committed, falsification-admitting pool.

### 4.4 — DECISION 4: Proxy → source bindings
As tabulated in §2 (keeps/drops/demotions). `SOURCES.md` is pinned (access dates + licences) in the heavy-Code session; a proxy with no reproducible source is dropped, not approximated.
- *Ratify:* the §2 bindings, the **drop of iteration-speed**, and the **demotion of societal-polarization and (contested) well-being** to event-context / labeled roles.

## 5. Falsification conditions (unchanged in substance; from THEORY_B_OPERATIONALIZED §6)

1. **P rises independent of O** — pathologies grow where O is low (esp. in the within-unit and event tests).
2. **De-optimization does nothing** — re-optimized systems show no P reduction (a **null H2**, the primary test, is a real result).
3. **Intent beats selection** — divergent-case outcomes track stated plans better than pressures.
4. **O is not measurable non-circularly** — the input/outcome separation (§2) fails, or reasonable alternative O constructions materially move the result.

Any of these, met, **falsifies** (does not merely strain) B. A null result is informative — B is falsifiable, so a clean null is a finding, not a failure.

## 6. Scope limits stated in advance

- **P-measurement is the binding constraint.** Most P proxies are low-frequency, survey-based, and often societal-not-platform; ITS is feasible only where a high-frequency, platform-attributable P series exists. Where it is not, H2 degrades to a low-power before/after — stated, not smoothed.
- **Vantage bias (D-005).** Every unit is a large Western consumer-attention platform. The finding, if any, is about *that* ecology — not about "optimization" as such (Chinese platforms, financial-market optimizers, and non-consumer systems are out of scope). This is Le Guin's preserved objection made operational.
- **O-from-outside (Kant's caution).** O proxies are *appearances* of the objective function (documented parameters), not the function itself; triangulated, with proxy limits stated.

## 7. Status & gate

**RATIFIED (author, Session 4d).** Both preconditions are met — this pre-registration is finalized + author-ratified, and `WORK_ORDER_HEAVY_B.md` is author-ratified — so **Gate 2 (heavy Code) is open.** The freeze-before-outcomes rule was honored: `src/*.py` is frozen and hashed (`FROZEN_HASHES.md`) before any outcome — trivially clean, because **no real data exists and none will come**, so no outcome was read; the pipeline is built and self-tested but produced **no empirical result and fabricated nothing** (`RUN_STATUS.md`; catch C-017). Fixing O's proxies or P's composite *after* seeing outcomes would still void the test.

## 8. Reflexive note (kept, not hidden)

**Campbell's Law is the phenomenon.** "When a measure becomes a target, it gets gamed" is *both* this study's chief methodological risk (do not let O become a target we optimize toward) *and* Theory B's mechanism in the world (optimization ecologies corrupt the metrics they chase). The study's risk is the thing it studies. Naming it is part of the discipline — the medium is, again, the thesis.

## 9. Preserved dissent (must travel with any result — anti-C-006)

- **Luhmann** (B's parent, dissenting on method): "optimization *intensity*" reintroduces the optimizing *subject* B denies. The cleaner construct is a **selection differential** — systems that capture *reproduce and spread* — measured by spread, not by "how hard someone optimizes." If a future revision can operationalize spread/reproduction, it may **replace** the O composite. Live, unresolved.
- **Heidegger**: the study measures the disease in the disease's own terms (enframing); a clean O→P result would still leave his question standing.
- **Kant**: O is the appearance of the objective function, not the function; beware taking the proxy for the thing (built into §6).
- **Le Guin (D-005)**: the unit set is entirely Western Big Tech; the result does not generalize to "optimization" as such (built into §6).
- **Nietzsche**: P captures behavioral pathology, never the loss of "why"; even a clean result is silent on the master puzzle (M).

## 10. Recommended catch (for Code to log on execution)

The panel was composed for **philosophical** deliberation; **empirical methodology** (causal identification, construct validity, quasi-experimentation) has no dedicated seat — Turchin partly covers it, and Campbell had to be summoned ad hoc. **Recommendation:** add a standing measurement/causal-inference advisor to the bench (Donald Campbell — quasi-experimentation + Campbell's Law; and a causal-identification voice, Pearl or Rubin) before further empirical studies. Flagged here for Code to log as a catch and for the author to ratify the roster addition.

---

*Ratified (author, S4d); Gate 2 open; pipeline built + frozen; no data → no result (`RUN_STATUS.md`). Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
