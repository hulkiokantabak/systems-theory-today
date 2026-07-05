# PRE-REGISTRATION — Study A: The Adaptation Gap (G = R_c − R_a)

Version: 0.1 · Status: **DRAFT — not finalized, not ratified** · Last updated: Session 4
Source of claim: `outputs/THEORY_A_OPERATIONALIZED.md` (§2–§7)

> **Fix the proxy list, sign corrections, and weights, and publish them, BEFORE G is correlated with any symptom.** This is the single most important guard — it is what turns G from a curve-fit into a test (§3 of the operationalization).

## 1. Hypotheses (fixed in advance)

- **H1 (cross-sectional).** Across ≈30 OECD countries, wider **G** → more severe symptom composite, all else equal.
- **H2 (longitudinal).** Within a country over time, as **G widens, symptoms intensify with a lag**; where G narrows, symptoms ease. **G leads symptoms** (if symptoms lead G, the causal ordering is wrong).
- **H3 (discriminator vs the wealth pump).** With an inequality/wealth-pump measure controlled, **G retains significant, independent explanatory power**. If G collapses to noise once inequality is included, D3 is the driver and A is redundant.

## 2. Variables (proxies fixed before outcomes)

**R_c — rate of systemic change** (normalized, equal-weighted default):
- technology-adoption speed (years to 25%/50% penetration; shortening over cohorts)
- digital-penetration growth rate
- firm-turnover rate (declining average tenure in the top index)

**R_a — rate of adaptation** (normalized, equal-weighted; inverse-lag proxies sign-corrected):
- regulatory-response lag (inverse)
- institutional-trust recovery speed after a shock (resilience, not level)
- curriculum / skill-update lag (inverse)

**G = R_c − R_a** per country over the available panel (report R_c / R_a alongside).

**Outcome — symptom-severity composite:** loneliness/anomie + populist vote share + institutional-trust decline + affective polarization (fertility included with care, given strong independent economic drivers).

**Control (the discriminator):** Gini / top-income share / elite-overproduction proxy.

## 3. Normalization & compositing rule

1. Normalize each proxy within domain over time (z-score to own history, or index to base year).
2. Sign-correct inverse-lag proxies so higher = faster adaptation.
3. R_c and R_a = pre-declared **equal-weighted** means of their normalized proxies; alternative weightings are **robustness checks**.
4. Pre-register everything before outcomes.

## 4. Design / tests

- (a) cross-sectional correlation of G with the outcome (H1);
- (b) panel regression with the inequality control and country + year fixed effects (H3);
- (c) lag/lead structure — does G lead? (H2);
- (d) robustness across alternative proxy sets and weightings.

## 5. Falsification conditions (from THEORY_A_OPERATIONALIZED §5)

1. **Narrow-gap severity** — symptoms as severe / worse where G is narrow.
2. **A rival dominates** — a single driver (esp. inequality) beats composite G; G adds no independent power once controlled.
3. **Measurement artifact** — reasonable alternative proxy sets/weights give materially different G trajectories.
4. **Wrong lag direction** — symptoms systematically lead G.

## 6. Scope limits stated in advance

- **OECD-only is a narrow world** — measures the crises of rich democracies with good data (**D-005**). Generalization is a separate, harder question.
- **Adaptive throughput ≠ adaptive success** — R_a measures pace, not goodness; a fast-but-bad adaptation still counts. Revisit if results are weak.
- **Correlation ≠ mechanism** — even a clean G–symptom association with controls shows the gap *tracks* symptoms, not that it *produces* them; the causal claim needs the lag structure + the causal loop (`docs/DIAGRAMS.md` §9) + eventually a runnable model.

## 7. Heavy-Code note

This study **is** the heavy-Code trigger: it needs real data ingestion, cleaning, normalization, and panel modeling (Gate 2). Specifying and pre-registering it is the precondition; running it is a separate ratified work-order.

## 8. To finalize before running

- [ ] pin the country list + panel years
- [ ] pin each proxy's data source (`SOURCES.md`) + transformation
- [ ] pin the inequality measure
- [ ] freeze analysis code + record hashes

---

*Scaffold. Running it is gated (see `../README.md`). Author: Hulki Okan Tabak — with Claude.*
