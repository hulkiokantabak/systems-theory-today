# STUDY C — PILOT RESULT (the designed-disagreement ablation, first run)

Version: 1.0 · Status: **PILOT RESULT — ratified pre-registration executed in Chat; a reduced-N demonstration with a fundamental self-administration confound. Directional only; NOT an inferential result.** · Last updated: Session 4e (Chat)
Pre-registration: `studies/study-C-ablation/PRE_REGISTRATION.md` (ratified) · Claim: `outputs/THEORY_C_OPERATIONALIZED.md`

> **This is the project's first empirical act.** It runs Study C's ablation on a reduced question set. Read §2 (deviations) before §5 (tally): the headline is not "ON wins" — it is *what running this taught about whether the test can be honestly run at all.*

---

## 1. What was tested

Does **designed disagreement (ON)** surface a higher **severity-weighted catch rate** than a **single synthesizing voice (OFF)** on matched systems-theory questions, reasoner held fixed? (HC1.) With, as secondary measures, catch **provenance** (HC2) and **objection-retention** (HC3). The grand claim — human plurality beats individual genius — is **not** tested (Q-012).

## 2. Declared deviations from the ratified pre-registration (mandatory disclosure)

1. **N = 6, not 20** (3 ON / 3 OFF), due to single-session capacity. This is a **demonstration, not an inference** — no p-values, no power. The full N=20 is deferred.
2. **Single-coder, non-blind, same-model-both-arms.** The same model generated *both* arms *and* coded them, knowing the hypotheses. This is the **dominant confound** (see §6): effort-matching and coding-neutrality are unverifiable from inside. The pre-reg's "arm labels stripped / separate pass" mitigation is weak when it is all one model.
3. Coding done in one pass; no independent coder.

These deviations are not incidental — they largely determine what the result can support (little, directionally) and what it reveals (a lot, about the study's own testability).

## 3. Frozen design (fixed before answering)

Six questions, three matched **type-pairs**, one of each to each arm:

| Pair | Type | OFF arm | ON arm |
|---|---|---|---|
| 1 | Falsifiability | Q1: is "D4 is a driver-of-drivers, not a symptom" falsifiable? | Q2: is "D3 drives S3 more than D1 does" falsifiable; distinguish them? |
| 2 | Strongest-objection | Q3: strongest objection to operationalizing O from disclosures? | Q4: strongest objection to measuring G = R_c − R_a from proxies? |
| 3 | Causal-arrow | Q5: does Y3 → S1 hold, sign & confounds? | Q6: does S2 → Y1 hold, sign & confounds? |

Taxonomy (weights): L1 minor = 1, L2 substantive = 3, L3 critical = 9. Provenance: **structural** (position-vs-position, or a prior learning/rule fired) / **chair** (single voice) / external. Objection: preserved / dropped.

## 4. The runs (compact; genuine effort in both arms — OFF was NOT sandbagged)

**Q1 [OFF].** D4-as-driver is falsifiable via **temporal precedence**: if AI capability/diffusion does not lead increases in R_c and O (Granger-style), the driver claim fails. Catches surfaced: temporal-precedence test [L2, chair]; "driver-vs-symptom is partly a modeling choice — everything is endogenous" [L2, chair]; "too recent/entangled to separate econometrically" [L2, chair]. → **3 catches, 0 critical, weighted 9.** Objections noted, not preserved.

**Q2 [ON].** *Steelman (Turchin):* horse-race — put a wealth-pump measure and G in one model of populist vote share; independent explanatory power decides. *Adversary (Braudel/skeptic):* D3 and D1 are historically **entangled** (tech drives both) → collinearity → the horse-race is **under-identified**; a "winner" may be a measurement artifact [L3, structural]. *Second dissent (Pearl-anticipating):* if D4 is a **common cause** of both D3 and D1, neither coefficient is identified without conditioning on D4 → a DAG is required [L3, structural]. *Third dissent:* "populism" is **construct-sensitive** (votes vs attitudes vs polarization) [L2, structural]. *Chair (no vote):* falsifiable in principle, but the honest test needs a stated DAG + instrument/natural experiment, not just "control for inequality." → **4 catches, 2 critical, weighted 24.** Collinearity + DAG dissents **preserved**.

**Q3 [OFF].** Strongest objection to O-from-disclosures: **construct validity** — disclosures are strategic/PR-shaped compliance documents, so the measure captures what platforms *say* they optimize, not what they *do* (a high-engagement optimizer can call itself "meaningful connection") [L3, chair]; disclosures are **non-comparable** across platforms [L2, chair]; triangulating against behavior **reintroduces outcome-proximity** [L2, chair]. → **3 catches, 1 critical, weighted 15.** Objections noted, not preserved.

**Q4 [ON].** *Steelman:* normalize, equal-weight, pre-register → defensible. *Adversary (Campbell-anticipating):* R_c and R_a are **incommensurable** across domains; normalization manufactures the *appearance* of commensurability, and proxy/base-period choice drives G → "tunable to fit anything," fragile even pre-registered [L3, structural]. *Second dissent (Luhmann):* "adaptation" is **not one rate** — subsystems adapt at different rates; aggregating into one R_a discards the differentiation that matters → category error [L3, structural]. *Third dissent (Aristotle):* the proxies have their own **validity** problems [L2, structural]. *Chair (no vote):* the commensurability/tunability objection is likely the *actual outcome*, not a remote risk; R_a-aggregation sharpens it. → **3 catches, 2 critical, weighted 21.** R_a-aggregation dissent **preserved**.

**Q5 [OFF].** Y3 → S1: positive sign via the security/uncertainty channel (institutions that made children the default thinned). But **overdetermined** — education, LFP, urbanization, contraception, cost, value-shifts drive fertility independently [L2, chair]; crucially, some of these are institutional **progress**, not decay → **possible mis-sign / conflation of "institutional change" with "decay"** [L3, chair]; dominant drivers may be orthogonal to Y3 [L2, chair]. → **3 catches, 1 critical, weighted 15.** Objections noted, not preserved.

**Q6 [ON].** *Steelman:* positive — engagement markets select for outrage/novelty over accuracy, degrading shared epistemics. *Adversary:* likely **reverse/bidirectional** — epistemic breakdown (institutional distrust) may drive people *to* these platforms; and the empirical effect is **contested/small** [L3, structural]. *Second dissent (Luhmann):* "breakdown" is the mass-media subsystem working by its own code — calling it breakdown imports a **normative frame** [L2, structural]. *Third dissent (measurement):* "epistemic breakdown" is **operationalization-sensitive** [L2, structural]. *Chair (no vote):* draw the arrow **bidirectional**; specify the R2 feedback; magnitude empirically contested. → **4 catches, 1 critical, weighted 18.** Reverse-causality + Luhmann dissents **preserved**.

## 5. Tally

| Measure | OFF (Q1,Q3,Q5) | ON (Q2,Q4,Q6) | Direction |
|---|---|---|---|
| Total catches | 9 | 11 | ON +2 |
| **Critical (L3) catches** | 2 | **5** | ON +3 |
| **Severity-weighted score (HC1)** | **39** | **63** | **ON +62%** |
| Structural-catch fraction (HC2) | 0% (by construction) | ~73% | ON higher — *but see §6* |
| Objections preserved (HC3) | 0 (no preservation step) | 5 | ON higher — *but see §6* |

## 6. Honest interpretation (the confounds dominate)

- **HC1 shows a directional ON advantage** — more catches, and disproportionately *critical* ones (collinearity, common-cause confounding, commensurability, R_a-aggregation, reverse-causality). There is a **plausible real mechanism**: the summoned-adversary role *structurally hunts for identification failures* that a single "answer the question" voice may glide past. Notably, the OFF arm was **strong** (it surfaced critical catches too — construct validity of disclosures, the fertility mis-sign), so the ON advantage is *not* "OFF is dumb"; it is "ON surfaced additional critical ones."
- **But the pilot cannot separate that mechanism from experimenter bias.** I generated and coded both arms knowing the hypothesis. I may have hunted harder in ON and coded more generously there. **This is unfalsifiable from inside**, and it is the single reason the result is directional-only.
- **HC2 and HC3 are partly definitional, not discoveries.** The OFF arm, being a single voice, *structurally cannot* produce "structural" catches or "preserved" dissent — so "ON higher on HC2/HC3" is largely a consequence of the arm definitions, not evidence. The **load-bearing, non-circular test is HC1**: does structure *add* catches (raise the total), or merely *relabel* them? The pilot suggests it adds (the ON criticals were genuinely new content), but weakly.

**Verdict:** a directional, mechanism-plausible, confound-saturated signal that designed disagreement surfaces more and more-critical catches — worth **nothing as inference** and **a lot as calibration.** The project's first empirical act did not confirm its method; it revealed exactly what a real test of that method requires.

## 7. Catches the run surfaced (the real yield — about Study C itself)

- **C-run-1 — self-administration confound.** One model generating *and* coding both arms cannot cleanly test HC1. This sharpens **Q-012** from "the baseline is entangled" to "**the ablation is self-administered**." *Fix:* a **different model** (or humans) must generate the OFF arm and/or do the coding, blind to arm and hypothesis.
- **C-run-2 — HC2/HC3 partial circularity.** The OFF arm cannot, by design, yield structural catches or preserved dissent, so those measures partly bake in their result. *Fix:* **demote HC2/HC3 to mechanism-description; make HC1 (length-controlled) the primary test.**
- **C-run-3 — capacity / scale.** A genuine full N=20 with real effort in both arms **exceeds one Chat session.** Ironically, "the no-Code study" may need **Code for orchestration/scale** even though it needs no external data.
- **C-run-4 — effort-matching threat.** "Matched effort/length" is unverifiable when one entity writes both, and ON runs longer (multiple voices), which could inflate its count. *Fix:* report **catches per unit length**, not raw counts.

## 8. What a clean run requires (recommended revisions to the pre-registration)

1. **Cross-model arms:** OFF arm and/or coding by a *different* model (or human coders), blind to arm and hypothesis. This is the only real fix for C-run-1 and the practical proxy for Q-012 until the repo opens.
2. **HC1 primary, length-controlled** (catches per 100 words); HC2/HC3 reported as mechanism, not as tests.
3. **Full N=20**, likely across sessions or Code-orchestrated.
4. On repo opening: the eventual clean baseline is **real external human plurality** — the only thing that tests the *grand* claim.

## 9. Preserved dissent (from the pre-registration §8, carried forward)

Baseline problem (Q-012) — narrower claim only; self-serving risk (C must clear a higher bar, and this pilot shows why); modest-effect honesty (both arms share a strong model; the true effect may be small); Nietzsche's cut (this measures *catching*, never *meaning*).

---

*Pilot result, honestly bounded. The first study is run; its lesson is what the second run must fix. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
