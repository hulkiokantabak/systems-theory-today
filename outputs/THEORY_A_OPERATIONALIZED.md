# THEORY A, OPERATIONALIZED — the adaptation gap as a measurable claim

Version: 1.0 · Status: Ratified baseline (author, Session 4) · still living · Last updated: Session 4

> **Rung labels — APPLIED (Session 4k, the author's ratifying pass; C-034 discharged, C-033 divergence closed).** Under the adapted evidence ladder (`docs/PRESSURE_TESTS_CAUSAL_HYPOTHESIS.md` §9): Theory A's core claim — that the adaptation gap **G = R_c − R_a** drives the symptom-severity composite, with G leading and surviving the wealth-pump control — is labeled **`theory · untested`**. Its measurement design (Q-001) is drafted but unrun; **no claim in this document is `run:survived`.** The decisive D3-discriminator (does G survive controlling for the wealth pump) is coded by the lag-type instrument, which was **re-balanced at S4k (§8) to stop defaulting against D3** — the crux is now codable-in-principle without a built-in tilt, and untested-in-fact per the S4k concession. Flattery-audit: this doc lands nothing above `theory`, which is the honest ceiling for an unrun design.

*The first Phase-1 work product: turning Theory A (the Adaptation Gap, `CANDIDATE_THEORIES.md`) from an evocative frame into a **stated, falsifiable, pre-registerable claim** — the flagship task (`OPEN_QUESTIONS.md` Q-001) and the project's single greatest intellectual liability. Theory A has the best integrative reach and the weakest testability; this document attacks the weakness head-on. It does not claim the theory is **true** — it claims to make the theory **checkable**, which is the precondition for finding out. The honest posture throughout: a gap you cannot measure is a story, not a science (Turchin's standing objection), and this document is the attempt to earn the second word.*

---

## 1. The claim, restated as a measurable proposition

Informal (Theory A): *today's defining condition is that the systems humans build change faster than the humans and institutions inside them can adapt; most symptoms are downstream of that widening gap.*

Measurable restatement:

> Let **R_c** = the rate of change of human-built systems, and **R_a** = the rate at which institutions, cognition, and shared culture adapt to them. Define the **adaptation gap G = R_c − R_a** (or, dimensionless, the ratio R_c / R_a). Theory A predicts that **G, measured independently of its symptoms, positively predicts the severity of the symptom-set (fertility collapse, anomie, populism, epistemic breakdown, coordination failure), cross-sectionally and over time, and retains explanatory power after controlling for rival drivers** — chiefly the wealth pump (D3).

Three things make this a real claim rather than a restatement: G must be built from **proxies chosen and weighted in advance** of looking at the outcomes; the prediction must **survive controls** for at least the strongest rival driver; and there must exist **stated conditions that would prove it wrong** (§5). All three are below.

## 2. The two rates and their candidate proxies

The move is to measure each rate from several domains, each proxy defensible on its own, then composite them (§3). Proxies are *candidates* — the pre-registration (§7) fixes the final set before any outcome is examined.

**R_c — rate of systemic change** (faster = larger):

| Domain | Candidate proxy | Direction |
|---|---|---|
| Technology diffusion | time from invention to mass adoption (years to 25%/50% of population); shortening over cohorts | faster ↑ |
| Compute / capability | growth rate of frontier compute and capability benchmarks | faster ↑ |
| Economic structure | firm turnover in the top index (declining average tenure in the S&P 500 / equivalents) | faster ↑ |
| Information | volume/velocity of new information and of coordination-relevant tools released per year | faster ↑ |
| Labor | rate of occupational churn; share of tasks materially changed per decade | faster ↑ |

**R_a — rate of adaptation** (faster = larger, i.e. the system keeps up better):

| Domain | Candidate proxy | Direction |
|---|---|---|
| Regulation | lag from a technology's emergence to a substantive legal/regulatory response | shorter lag ↑ |
| Legislation | legislative cycle time; time to pass adaptive statute after a shock | shorter ↑ |
| Education | time to update core curricula / professional standards; skill half-life (inverse) | faster ↑ |
| Institutions | speed of institutional trust *recovery* after a shock (resilience, not level) | faster ↑ |
| Culture | rate at which new shared norms and references form and *stabilize* (not merely appear) | faster ↑ |

Two design notes. (a) R_a measures *adaptive throughput*, not institutional *quality* — a fast-but-bad adaptation still counts as adaptation; the theory is about pace-matching, not goodness. (b) Several R_a proxies are **inverse lags** (shorter is faster), which must be sign-corrected before compositing.

## 3. The gap, and the commensurability problem (the hard part)

The central technical difficulty — and the most likely place the theory fails as *measurement* rather than as *idea* — is that R_c and R_a are gathered in different units across different domains. "Frontier compute doubling" and "years-to-regulate" cannot be subtracted directly. The gap G is only meaningful after **normalization**, and normalization is where a composite index can be quietly tuned to produce any result one likes (the near-tautology risk, C-004's cousin).

Disciplined approach:

1. **Normalize within domain, over time.** Convert each proxy to a standardized series (z-scores against its own history, or an index to a base year), so each is unit-free and comparable across domains.
2. **Composite by a pre-registered rule.** R_c and R_a are each the (pre-declared) weighted mean of their normalized domain proxies. Default: equal weights, because any cleverer weighting invites overfitting; alternative weightings are reported as **robustness checks**, not as the headline.
3. **G = R_c − R_a** on the normalized scale (and R_c / R_a reported alongside).
4. **Pre-register before outcomes.** The proxy list, the sign corrections, and the weights are fixed and published *before* G is correlated with any symptom. This is the single most important methodological guard: it is what turns G from a curve-fit into a test.

If reasonable alternative proxy sets and weightings yield **materially different G trajectories**, that is not a nuisance to smooth over — it is **evidence that G is an artifact of measurement choices**, which is one of the falsification conditions (§5). The theory has to survive its own measurement sensitivity.

## 4. The prediction, and the outcome variables

**Symptom-severity index (the dependent variable):** a pre-registered composite of measurable symptom proxies — e.g. loneliness/anomie indices, populist vote share and affective-polarization measures, institutional-trust decline, and (where measurable) epistemic-fragmentation proxies. Fertility is included with care, since it has strong independent economic drivers.

**Two forms of the prediction:**

- **Cross-sectional.** Across comparable units (≈30 OECD countries, or sectors), units with a **wider G** show **more severe** symptoms, all else equal. Units where R_c and R_a are closer show milder symptoms.
- **Longitudinal.** Within a unit over time, as **G widens, symptoms intensify with a lag** (adaptation and its failures are slow), and where G narrows (slower adoption *or* faster institutional adaptation) symptoms ease. The **lag structure matters**: Theory A predicts G *leads* symptoms; if symptoms lead G, the causal story is wrong (§5).

## 5. Falsification conditions (stated in advance)

Theory A, so operationalized, is **falsified** — not merely strained — if:

1. **Narrow-gap severity.** Symptoms are as severe, or worse, in units/periods where G is *narrow*. The gap would then not be the operative variable.
2. **A rival dominates.** Symptom severity tracks a *specific single driver* — inequality/the wealth pump (D3), a particular technology, a specific policy regime — **better** than the composite G, and G adds no independent explanatory power once that driver is controlled (§6). Theory A would then be a less-good version of that rival.
3. **Measurement artifact.** Reasonable alternative proxy sets and weightings produce **materially different** G trajectories, so "the gap" is an artifact of construction rather than a real quantity.
4. **Wrong lag direction.** Symptoms systematically **lead** G rather than follow it, contradicting the causal ordering (overwhelm-follows-gap).

Stating these in advance is what distinguishes this from a frame that survives every outcome by reinterpretation. If none can be checked, the operationalization has failed even if the idea is appealing.

## 6. The discriminator: Theory A vs Turchin's wealth pump (D3 / D-002 / D-006)

This is the decisive test, and it connects three open items — the single-root-vs-coupled-field disagreement (D-002), the accelerationist objection (D-006), and the status of D3 as a *rival* driver rather than a sub-case of acceleration.

Turchin's structural-demographic theory already carries a **falsifiable** mechanism for several symptoms (elite overproduction + popular immiseration + the wealth pump → instability and populism). Theory A must show that the **adaptation gap explains variance that the wealth pump does not**. Concretely:

> In a model of symptom severity, include **both** G **and** an inequality/wealth-pump measure (Gini, top-income shares, elite-overproduction proxies). Theory A earns its place only if **G carries significant, independent explanatory power** with the wealth pump controlled. If G collapses to noise once inequality is included, D3 is the real driver and Theory A is redundant (falsification condition 2). If both carry independent weight, A and Turchin are **complementary drivers**, not rivals — which would itself resolve part of D-002 empirically rather than by debate.

This is the cleanest way the project can convert a standing *disagreement* into a *test* — exactly the move the whole enterprise is supposed to make (L-005: draw the arrows; don't just name the target).

## 7. A concrete first study (pre-registered, runnable)

Small, honest, shippable (the plan's discipline). Not the whole theory — one bounded, falsifiable slice.

- **Units:** ≈30 OECD countries (data availability; cross-nationally comparable).
- **R_c:** technology-adoption speed + digital-penetration growth + firm-turnover rate (normalized, equal-weighted).
- **R_a:** regulatory-response lag (inverse) + institutional-trust recovery + curriculum/skill-update lag (inverse) (normalized, equal-weighted).
- **G = R_c − R_a**, per country, over the available panel.
- **Outcome:** symptom-severity composite (loneliness + populist vote share + trust decline + affective polarization).
- **Control:** Gini / top-income share (the D3 discriminator).
- **Tests:** (a) cross-sectional correlation of G with the outcome; (b) panel regression with the inequality control and country/year fixed effects; (c) lag/lead structure (does G lead?); (d) robustness across alternative proxy sets and weightings.
- **Pre-registration:** proxy list, signs, weights, and hypotheses fixed and published **before** outcomes are examined.

**This study is also the heavy-Code trigger.** It needs real data ingestion, cleaning, normalization, and panel modeling — the executable, data-pipeline work that `DIAGRAMS.md` §7 gates at Gate 2. So operationalizing Theory A is not only the top *intellectual* task; it is the concrete thing whose arrival would justify heavy Code. Until this study is specified and pre-registered, heavy Code has nothing to compute; once it is, it does.

## 8. What this changes

- **Falsifiability coverage.** D1 (the gap) moves from "not yet" toward a stated, testable claim — the first of the low-coverage tests to be genuinely operationalized (`METRICS.md` §4). It does **not** yet count as *tested*; Q-001 stays open, now with a design attached rather than only an intention.
- **A disagreement becomes a test.** The A-vs-Turchin question (D-002/D-006) is reframed as an empirical horse-race with a control, not a debate to be preserved indefinitely.
- **The causal loop is now drawable.** With G and its couplings specified, Theory A's dynamics can be drawn as a **signed causal-loop diagram** — see `DIAGRAMS.md` §9 — the bridge from prose to any runnable model.

## 9. Known weaknesses of the operationalization itself (skeptical close)

- **The composite could still be tuned.** Pre-registration and robustness checks reduce but do not eliminate the risk that the equal-weight composite hides a fragile result. The defense is transparency: publish the sensitivity analysis, not just the headline.
- **Adaptive-throughput ≠ adaptive-success.** Measuring the *rate* of adaptation, not its *adequacy*, is a deliberate simplification; a society can adapt fast in the wrong direction. The theory is explicitly about pace-matching, but the simplification should be revisited if the results are weak.
- **OECD-only is a narrow world.** The first study inherits exactly the vantage bias the panel flagged (D-005): it measures the crises of rich democracies with good data. Generalization beyond that is a separate, harder question, not a foregone conclusion.
- **Correlation is not the mechanism.** Even a clean G–symptom association with controls establishes that the gap *tracks* the symptoms, not that it *produces* them. The causal claim needs the lag structure, the mechanism (the causal loop), and eventually a runnable model that catches a flaw in its own prose — the Phase-3 bar.

*None of these is fatal; all are stated so the next contributor knows exactly where to push. That is the point: a claim you can attack precisely is worth more than a frame you can only admire.*

---

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0*
