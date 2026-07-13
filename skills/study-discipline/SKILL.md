---
name: study-discipline
version: v1.1
status: RATIFIED v1.0 (author, Session 4f) — live; §10 appended S4i (panel-delegated, provisional-pending-author); companion to systems-theory-panel
description: >
  How the "A Systems Theory for Today" project runs FALSIFIABLE STUDIES — the discipline for taking a
  theory's claim from operationalized-on-paper to actually tested. Distinct from systems-theory-panel
  (which runs the deliberation): this governs pre-registration, panel-finalization of a study's open
  decisions, execution, and honest reporting. Use whenever a study is being designed, finalized, run,
  or reported (studies A/B/C and any future test of a pressure-test arrow). Carries the hard lessons
  learned by actually running the first study: non-circularity, bind-or-drop, falsifiers-as-results,
  the self-administration confound, Campbell's Law, and the cross-model requirement.
---

# STUDY DISCIPLINE — running falsifiable studies

*Distilled Session 4d–4e from finalizing Study B, finalizing Study C, and running the first C ablation pilot. The panel skill decides **what is true**; this skill decides **how a claim gets tested without fooling ourselves.** The chair proposes and runs; the **author ratifies**; a study runs only on a ratified pre-registration.*

## 0. The one rule everything else serves

**Fix the test before you see the outcome.** Variables, proxies, hypotheses, units, events, and coding schemes are frozen *before* any outcome (data, result, catch-count) is examined. Changing them after seeing outcomes voids the test — this is the whole game, and every discipline below is in service of it.

## 1. Pre-registration is mandatory, and finalizing it is a Chat/panel act

- Every study carries a **pre-registration**: hypotheses, variables + proxies, normalization/compositing rule, design, falsification conditions, scope limits, and preserved dissent.
- **Finalizing** the open decisions (which units, which events, which proxy→source bindings, which case-selection rule) is a **deliberation act**, not a mechanical one — run each decision through **designed disagreement** (the panel), **preserve dissent**, and hand the settled version to the **author to ratify**. Code proposes candidates so there is something concrete to ratify; Code does not finalize.
- The status ladder: *candidate → panel-finalized candidate → author-ratified → (Chat-run or Gate-2/heavy-Code run)*. Emitting a work-order does **not** open the gate; the author does.

## 2. Non-circularity — measure the predictor and the outcome from different sources

Measure the **predictor from inputs/process** and the **outcome from outcomes**; **no source feeds both.** (Study B: optimization intensity O from documented objective functions and recommender-parameter disclosures — inputs — and pathology P from problematic-use and diffusion studies — outcomes.) Assert the separation as a build-time check, not a hope. This is what defuses the "the measure smuggles in the thing it predicts" falsifier.

## 3. Bind-or-drop, and report robustness

- **Bind every proxy to a reproducible source or drop it** — do not approximate a proxy that has no source. A study is only as real as its weakest sourced proxy.
- **Composites are tunable.** Pre-declare weights (default equal); report alternative weightings/proxy sets as **robustness checks**. If reasonable alternatives materially move the result, that is evidence the construct is a **measurement artifact**, not a finding.

## 4. Falsifiers are results, not failures

State falsification conditions **in advance**. When one is met — a null, a reversal, intent-beats-selection — **log it as a real result**, not a disappointment to be smoothed. A theory that cannot return a null has failed its first principle. A clean null is informative and publishable.

## 5. The self-administration confound (the hardest lesson — C pilot)

**A single model cannot cleanly A/B-test its own reasoning structure by generating *and* grading both arms.** Effort-matching and coding-neutrality are unverifiable from inside, and the grader knows the hypothesis. For any **reflexive / ablation** study (does structure X improve the model's own output?):

- The compared arms and/or the **coding must come from a *different* model (or human coders), blind to arm and hypothesis.** Self-administered runs are **directional-only**, never inferential.
- Beware **partially-circular hypotheses**: if the control arm *by construction* cannot exhibit the measured property (a single voice has no "other position," so it can produce no "structural" catch), that hypothesis is a definition, not a discovery. Elevate the **non-circular** hypothesis (does the structure *add*, not merely *relabel*?) to primary.
- **Effort/length control:** when one entity produces the compared outputs, report the measure **per unit length** (e.g. catches per 100 words), because a longer arm inflates raw counts.
- **Reduced-N pilots** are demonstrations, not inferences — declare every deviation from the pre-registered N.

## 6. Campbell's Law is both a guard and a mirror

*"When a measure becomes a target, it gets gamed."* Two uses: **(a)** never let a study's own metric (O, P, a catch-count) become a target you optimize toward — pre-register and severity-weight so it can't be inflated by trivia; **(b)** notice when the metric *is* the phenomenon — for Theory B, the study's central methodological risk **is** the optimization-corruption it studies. Name the resonance; don't hide it.

## 7. Summon the measurement seat

Whenever a study or a causal claim is on the table, summon the measurement/causal-inference advisors (roster amendment, ratified S4e): **Campbell** (construct validity — does the proxy measure the thing? — quasi-experiment, threats to validity) and **Pearl** (causal identification — what is your DAG, what is identifiable from this data?). They disagree productively; together they cover what the philosophical roster does not.

## 8. Which studies run where

- **Reflexive / internal studies (C-type)** run **in Chat** — no external data, no Gate-2 crossing; the only gate is pre-registration ratification. But a *clean* run needs a **different model** for an arm/coding (§5), and a *full-scale* run may need **Code for orchestration** (the "no-Code study" can still need Code for scale).
- **Empirical-world studies (A/B-type)** need **Code + external data** and cross **Gate 2 (heavy Code)** — a fresh ratified work-order, `SOURCES.md` pinned, analysis code **frozen and hashed before any outcome is read**, no data in git.

## 9. Reporting

Report the pre-registered falsifiers as results; attach the **preserved dissent** to any write-up; state the scope limits (vantage bias, construct caveats) up front, not buried; and **log the catches the *run itself* surfaces about the study** — running a study is also a test of the study's design, and those catches are often the real yield.

## 10. The courier-round lessons (S4g–S4i — `panel-delegated (S4i standing delegation)`, provisional-pending-author; §§0–9 are the ratified core and are untouched)

The three cross-model courier rounds (placebo/ablation S4g; validation/TTM + blue/green S4h; detection S4i) taught what running external coders actually costs:

1. **Requirements before design, design before kit, kit before run.** Seal the repair/instrument REQUIREMENTS (with an adversarial break pass) before any design exists; the E1/E2/detection repairs all passed this way.
2. **The scorer is written and fixture-tested BEFORE dispatch** — on all decisive branches, including a constructed true null. A scorer implemented after verdicts exist is a weaker seal (logged as such in the S4h validation round). Include an ACHIEVABILITY fixture at realistic live scale: a clause that fires only at N the instrument never attains is decoration.
3. **Instruments are LAYERED; validate the lowest layer first.** Severity banding passed at 94% while catch-DETECTION sat at 1% — a floor passed at one layer says nothing about the layer beneath (candidate L-016, unminted). Every layer gets its own unit definition, gold set, and floor; enumeration is scored separately from banding and never pooled with it.
4. **Transport is a channel with its own failure modes (E3):** one-record-per-line paste-robust formats; open-ended self-ID at head AND foot verified against a pre-dispatch manifest; mismatch/absence = headline-exclusion + dual-report; MALFORMED never hand-repaired; fresh chat per kit per model (the cross-kit contamination lesson); **content-neutral archive FILENAMES** — the leak audit covers every byte on the kit, not just in it (C-030); a post-coding recognition probe with its disposition sealed pre-dispatch.
5. **Gold sets:** seeded events (planted, ground-truth-by-construction) are the primary acceptance statistic — but only their LOCATION is construction-true; their event-COUNT is the seeder's judgment and gets a blind-application check. Include zero-event clean material (a detector must be able to say "nothing here"), boundary pairs at every cut, and quiet/omission-shaped items as MANDATORY HITS (passing agreement while unanimously missing the quiet items is register-bias, a FAIL). No exemplar derives from any prior coder's verdicts; no bound is tuned to a named coder's profile.
6. **Statistics discipline:** never compute count-similarity as agreement (identical totals over disjoint events is disagreement in a matching costume); granularity is gold-referenced per coder, never pairwise between coders; per-coder raw counts stay visible; floors are justified against the task's own chance baseline, never imported from a different task's precedent.
7. **Broken series and incommensurability:** a repaired instrument starts a NEW series — no pre/post numeric comparison, ever; when a unit definition changes, every margin denominated in that unit is re-derived and re-sealed (by the author) before any run reads it. Preserve what unanchored eyes saw — the anchored eyes will never see it again.
8. **Family-first + the corridor:** power within one coder's construct (constructs below the reliability floor cannot share a numerator); every margin-adjacent result reports against both the ratified and the preserved dissent lines. Under-powered or below-floor = Indeterminate — never "the theory survives."
9. **The direction of a test must match the direction of its claim** (C-031): a null is affirmed by BOUNDING the noise envelope inside the margin, never by failing to beat noise. Check every sealed clause against the case its drafters did not run.
10. **Delegations are costs, booked at receipt, before use** (C-023 → C-027 → C-032) — and a second standing delegation stacked on unconfirmed stamps books its own catch; no later enactment cites an earlier delegated stamp as settled authority. A held-out shadow review (the grader run pre-seating, binding nothing) buys the content of a check without performing its authority.

---

*Ratified core (author, S4f) + §10 provisional (S4i). Companion to `systems-theory-panel`. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
