# COMPREHENSIVE PLAN

Version: 0.6 · Status: Draft (author to ratify) · Last updated: Session 4j (the S4j forum's leverage-ordered roadmap appended as the operative plan — see the final section; `forum-delegated (S4j)`, provisional-pending-author)

*The second deliverable from the founding session. Where `INITIAL_EVALUATION.md` says what the panel currently thinks, this says **what we build next and in what order** — the path from three prose theories to explicit models, runnable simulations, a public forkable commons, and a website. Edited and sequenced by the chair; the author ratifies scope and priority. Phases mirror the path-to-code in `ARCHITECTURE.md`.*

---

## Guiding principles for the plan

1. **Falsifiability is the through-line.** The project's biggest current weakness is that most of the thirteen pressure-tests carry no falsifiable claim (roughly three do: D3, Y3, S3), and the strongest theory (A) has the weakest testability. Every phase is judged first by whether it moves claims from *evocative* to *checkable*.
2. **Prose → model → simulation → commons.** Each theory descends a ladder: readable argument, then an explicit variables-and-couplings map, then a runnable model, then a public artifact others can fork. We do not skip rungs; a simulation built on an un-mapped theory is false precision.
3. **The method is a deliverable too.** Because Theory C claims the *form* is part of the answer, building and testing the commons-governance is not overhead — it is content, and it gets planned like content.
4. **Preserve the seams.** Integration never means erasing dissent. The six standing governors travel with every phase.
5. **Small, honest, shippable increments.** Better a modest thing that works and is public than a grand thing perpetually almost-ready.

---

## The phase map

### Phase 0 — Foundation *(Session 1 — COMPLETE)*
**Goal:** a coherent, self-governing repository that a stranger could read, understand, fork, and contribute to.
**Delivered:** README, ARCHITECTURE, the full reference set (Goals, Ground Rules, Method, Metrics, Skills, Visualization, Glossary, History), the panel roster, the seven-round deliberation, the two output documents, three seed theories, the catches/learnings loop, the skill file, contribution/licence terms, and a first interactive visualization.
**Definition of done:** ✅ all of the above exist, cross-reference cleanly, and carry version/status headers.

### Phase 1 — From prose to explicit models *(next 1–3 sessions)*
**Goal:** turn the three theories from arguments into **explicit, inspectable structures** — and raise falsifiability.
**Deliverables:**
- **The Seven-Problems Concept Map** — *drafted in Session 2* (`DIAGRAMS.md` §4) as a **thirteen-node, four-layer** directed graph. A directed, *signed* graph: nodes = the key variables across the layered tests (acceleration, optimization-intensity, wealth-pump/inequality, machine-intelligence, institutional-adaptation-rate, trust, fertility, overshoot, polarization, anomie, …); edges = couplings with a sign (+/−) and, where known, a delay. It makes the "everything is connected" intuition *explicit and criticizable* — the thing the polycrisis literature never did. *Next refinement: add the signs and delays, and split into per-theory causal-loop diagrams.*
- **Theory A, operationalized.** ✅ *Drafted (S3): `outputs/THEORY_A_OPERATIONALIZED.md`.* Candidate proxies for the two master rates: *rate-of-technological-change* (adoption curves, capability benchmarks, product-cycle times) and *rate-of-institutional-adaptation* (time-to-regulate, legislative cycle time, curriculum-update lag), a normalization discipline, the divergence prediction (cross-sectional + longitudinal), crisp falsification conditions, the discriminator against Turchin's wealth pump, and a pre-registered first study. **This was the top intellectual priority of the phase; the next step is to pre-register and run the study** (the concrete heavy-Code trigger).
- **Theory B, bounded against conspiracy.** ✅ *Drafted (S4): `outputs/THEORY_B_OPERATIONALIZED.md`.* Optimization intensity (O) as the measurable driver of capture/pathology (P); the explicit test that distinguishes *selected-to-capture* from *designed-to-capture* (B's integrity condition); the natural experiment (engagement-optimized vs. deliberately de-optimized systems); and the B-vs-A decomposition. **The cheapest of the three to run — the recommended first empirical study.**
- **Theory C, instrumented.** Define the reflexive metric: the rate at which the panel/commons process catches errors and retains live objections, versus a single-author baseline. Begin logging it (Session 1's six catches are the first entry).
- **A falsifiability pass** across all thirteen pressure-tests: for each, either state a checkable claim or explicitly mark it "conceptual — not currently falsifiable" and say why. *(Extends the Session-2 coverage tracker in `METRICS.md` §4.)*
**Definition of done:** the concept map exists and is criticizable; each theory has at least one precisely-stated, potentially-falsifiable claim; pressure-test falsifiable-claim coverage rises from ~3/13 toward the majority — beginning with D1 (the gap, Q-001).

### Phase 2 — Public living commons *(parallel with Phase 1, then ongoing)*
**Goal:** put the repository where others can actually fork and contribute, and stand up the governance that keeps a commons coherent.
**Deliverables:**
- Public GitHub repository with the contribution model live (`CONTRIBUTING.md`), issue/PR templates for the three contribution types (strengthen / break / propose-rival), and the "recruit for the fault line" admission criterion for new panelists.
- Commons governance v1, Ostrom-informed: clear boundaries (what's in scope), graduated contribution, a transparent process for how rival theories are admitted and how dissent is preserved, and a rule that **no contribution is merged by silently deleting a live objection.**
- A first **companion website** (static, honest, fast) presenting the question, the three theories, the concept map, and the open disagreements — with the visualizations from `viz/` embedded. *(Frontend/design skills and the design tokens apply here.)*
- The bilingual step: an English-primary / Turkish-sibling presentation, treated as equal-weight editions.
- **Operating model: the Chat/Code shuttle** (`docs/CHAT_CODE_WORKFLOW.md`). Phase 2 is where **Light Code begins** — the repo, the build, the deploy — and where deliberation and execution split across tools: Chat deliberates; Code executes, propagates, sweeps, and deploys; the repo is the shared memory. The context-capacity limit hit in Session 2 makes standing this up the *immediate* next step, not a distant one.
**Definition of done:** a stranger can read the site, open the repo, file a rival theory or a red-team objection through a defined process, and see their dissent preserved rather than dissolved.

### Phase 3 — From models to simulation *(later; gated on Phase 1)*
**Goal:** make selected couplings **runnable**, so the theories can be pushed to see where they break — with loud humility about the limits of prediction.
**Deliverables:**
- A minimal **system-dynamics model** of one well-scoped loop (candidate: the attention-capture / polarization / trust loop, or a Meadows-style overshoot loop for climate), as stocks/flows/feedback that can be simulated.
- Where apt, an **agent-based** or **network** model for a symptom that is fundamentally about many interacting units (fertility norms diffusing; contagion of unreality; Turchin-style elite dynamics).
- A hard-coded discipline of **epistemic humility**: every simulation ships with its assumptions exposed, its computational-irreducibility caveats stated, and Kant's warning attached — *this is a system of appearances structured by our own categories, not the territory.* No model is presented as prediction; models are **intuition pumps and consistency checks**, explicitly.
**Definition of done:** at least one loop runs, its assumptions are fully exposed, and it has already been used to *catch* a flaw or tension in the prose theory it came from (that catch is logged).

### Phase 4 — Integration and iteration *(continuous)*
**Goal:** keep the whole alive — re-run the panel on new questions, integrate external contributions, refresh the empirical grounding, and let the theories evolve, split, merge, or die.
**Deliverables (recurring):**
- Periodic panel sessions on new questions and on external rival theories, each producing catches → learnings → rule amendments.
- A standing **refresh cadence** for time-sensitive claims (the contemporary-landscape scan, and any live data series) — because "what's out there now" goes stale fast.
- Regular self-audits (are learnings reaching the rules? has a new skill emerged? is the plurality real or cosmetic?) and metrics snapshots that show the *trajectory*, not just the latest state.
**Definition of done:** never — this phase is the living state. Its health is measured by the trend lines in `METRICS.md`, not by completion.

---

## Immediate next-session task list (prioritized, as of Session 4)

1. **Ratifications — done.** A's operationalization and the living-document concept ratified (S4); Theories B and C operationalized to the same falsifiable standard and ratified (S4). The layering stays a hypothesis; the coherence vacuum M stays open.
2. **Pivot to Code (the active step).** The first work-order is written (`logs/handoffs/WORK_ORDER_S4.md`): initialize the **private** repo, stand up the **public reading site**, adopt the shuttle templates, make the propagation/sweep scripts permanent, and build the R3 gist. This is Code's job now — Chat has taken it as far as a single context safely can.
3. **All three theories operationalized (✅ S3–S4).** A — `THEORY_A_OPERATIONALIZED.md` (the gap; the flagship). B — `THEORY_B_OPERATIONALIZED.md` (optimization intensity; **the cheapest to test → the recommended first empirical study**). C — `THEORY_C_OPERATIONALIZED.md` (the reflexive ablation; runnable now, no data pipeline, bounded by the baseline problem Q-012). **Next:** pre-register and run — starting with **B** — which crosses into heavy Code (Gate 2) and needs a fresh ratified work-order.
4. **Add signs and delays** to the concept map (`DIAGRAMS.md` §4); draw signed causal loops for B and C (A's is done, §9).
5. **Promote L-001 into the Ground Rules** (draft-dissent-first; label agreement-strength) — evidenced by C-007.
6. **Guard the standing risks:** the chair's resolution-bias (C-006, now measurable via C's catch-provenance metric); the propagation discipline (C-010 / L-006), which the shuttle makes Code's deterministic job.

---

## Risk register (carried into every phase)

| Risk | Which theory/rule it threatens | Mitigation |
|---|---|---|
| **Cosmetic plurality** — all decisions collapse onto the chair | Falsifies C; violates the method | The reflexive metric (Phase 1); L-001 guard; author ratification as a real gate |
| **Unfalsifiable master-variable** — "the gap" explains everything, hence nothing | Guts A | The two rate-indices; the falsifiability pass; Turchin's standing objection kept live |
| **Slide into conspiracy** — B read as "they designed it to addict us" | Discredits B, and the project | The explicit selected-vs-designed test; Kant's governor |
| **Evading the meaning-wound** — mistaking a good method for a restored *why* | The master puzzle; Nietzsche's objection | Keep H5 permanently open; never let the structural bloc "win" by tractability |
| **Fragmentation without re-integration** — forking produces noise, not distributed coherence | Falsifies C's second word | Commons governance v1; a defined integration process |
| **Staleness** — contemporary-landscape and data claims rot | The empirical grounding | The refresh cadence (Phase 4); re-scan each session |
| **Grandiosity / vaporware** — the plan outruns what ships | The whole project's credibility | Small honest increments; each phase has a concrete definition of done |

---

## What "success" would look like (from `GOALS.md`, made concrete)
- **S1** A stranger reads the repo and understands the question, the landscape, and the three theories. *(Phase 0–2.)*
- **S2** Falsifiable-claim coverage rises from ~3/13 toward the majority. *(Phase 1.)*
- **S3** At least one coupling runs as a model and has caught a flaw in its own prose theory. *(Phase 3.)*
- **S4** Real external rivals and red-team objections arrive and are integrated with dissent preserved. *(Phase 2–4.)*
- **S5** The commons demonstrably out-catches a lone author — the reflexive proof of Theory C. *(Measured continuously from Session 1.)*

*The plan is deliberately more modest than the ambition. The ambition is a systems theory for today; the plan is a sequence of small, honest, checkable steps toward it, each of which is itself worth having even if the whole is never finished — which, if Theory C is right, it never will be, because "finished" is the wrong word for a commons.*

---

## Updated Plan — the next phase (Session 4f, from a 5-round planning panel)

*Synthesized by the chair (not a vote) from a 5-round designed-disagreement planning panel (Turchin, Ostrom, Meadows, Nietzsche, Heidegger, Le Guin, Campbell), informed by the S4f reflection (`logs/REFLECTIONS.md`). **Code-synthesized and PENDING author ratification** — especially the eight forks below. It supersedes nothing above; it sequences the next phase.*

**The phase in one sentence:** spend this phase proving the machine can **drain** and can be **emptied** — deliberately choosing rigor over reach, paying in another parochial, private cycle with the meaning-question (D-003) left open. *"An empty result is the first real one this project has produced."*

### The spine (to ratify)
`costless subtractions now → lock the CONSTRUCT → run the PLACEBO → install the DRAIN → seat the foreign GRADER → widen Study-B → Q-001 / open the repo` — with Heidegger & Nietzsche's **inversion preserved** (open the repo FIRST — the only foreignness you cannot seat; holding is the ossification the reflection flagged).

### Prioritized moves (each carries its gate)
1. **Costless subtractions now** — un-count the "4/4" to its true n=1 (keep only the Facebook/YouTube split); strike the ledger-sum and "32 voices" from any claim of *health* or *independence*; downgrade "plurality" to one standpoint until a foreign grader earns the word back. *Gate: author ratifies the strike list.* (Partly done in S4f: the cross-check headline is re-framed to the split and a METRICS honesty-note is in place; the governor-strike + Theory-C retirement below are **not** done.)
2. **Lock the held-out CONSTRUCT** for "threatens the metric" (with a numeric kill-threshold) *before* any new number or Study-B widening — a classifier reads the outcome and names it the cause, so the measure must be derived from a held-out construct. Ship it bundled with a quiet/non-Western strain case + the opposite-pointing near-control. *Gate: author settles construct-vs-classifier (Q-014).*
3. **Run the PLACEBO** — a substantively empty session through identical machinery, blind-scored against a *real* session (one that risked a value) on catch-count + convergence. The cheapest falsifier, and the only test that can **end** the project. *Gate: author cuts Fork 1 + names the control session (Q-016-adjacent).*
4. **Install the SUBTRACTION operator (the drain)** — a decisions-changed log + a pre-written single result that retires Theory C; strike one never-bit governor as its first bite (which must **shield** the machine, never prune a dissenter or D-003). *Gate: author ratifies the trigger (Fork 2) + names the first governor struck (Q-017).*
5. **Seat the foreign GRADER** — able to *cost the author a claim*, or it is merely a fourth LLM. *Gate: author ratifies its nature + placement (Fork 3).*
6. **Widen Study-B** — the opposite-pointing near-control first (selection vs revenue diverge), then WeChat + a quiet care-system case (Q-015). *Gate: construct lock ratified; author sets the widen/grade order (Fork 4).*
7. **Q-001 + the REPO** — held on a clock, as a bounded nested folder now, opening by default if the window is missed. *Gate: all upstream + Fork 5 (open-first vs held).*

### What to STOP / RETIRE (the metabolism's first outflow — the reflection's zero-retraction fix, C-022)
The **"4/4"** as evidence (→ n=1; keep the split) · the **ledger-as-scoreboard** (keep the log as memory; strike the sum from any *health* claim; track *decisions-changed* instead) · **"plurality / 32 voices"** as an independence claim (→ n=1 until a foreign grader) · **one never-bit governor**, struck on the record (first strike shields the machine) · **Theory C** — candidate for retirement (gated; Nietzsche: the only subtraction with a value inside it; Ostrom refuses before the grader tests it) · and pre-empt the **retraction-count** becoming the next vanity number.

### The hard tradeoffs (where it lands, and the cost)
**Rigor vs reach/meaning** → pay it; name the wound (one author/one model, construct validity ~0), don't design around it. **Placebo blinding vs foreignness** → blind it, but the control must have *risked a value*. **Adding machine vs Heidegger** → the drain must be a *decided* graduated sanction, not a self-triggering counter; his refusal recorded unanswered (he *is* D-003). **Opening the repo vs stability** → held on the clock as a bounded nested fork; "open first" stands as a live inversion. **Relieving vs wounding cuts** → only retiring Theory C costs a value; pre-write its death-condition now.

### Decisions for the author (the eight forks — the plan does NOT resolve these)
1. **Pre-registration:** held-out CONSTRUCT (majority) vs the CLASSIFIER (Turchin). 2. **Fork 1 — drain placement:** placebo gates the drain (Campbell) vs drain-first as the placebo's reading instrument (Meadows). 3. **Fork 2 — drain trigger:** graduated ladder (Ostrom) / strike-bound-to-a-null (Turchin) / decided-by-hand (Heidegger, Le Guin, Nietzsche, Meadows) — near-consensus *against* a bare idle-clock. 4. **First governor struck:** any never-bit one, but it must shield the machine, not prune D-003 / a dissenter. 5. **Fork 3 — grader:** foreign-veto-bearing vs held-out-internal; upstream (appropriator-first, Ostrom) vs downstream. 6. **Fork 4 — Theory C + order:** retire C now / on-a-null / after-grader; widen-then-grade (Le Guin) vs grade-then-widen. 7. **Fork 5 — Q-001 + repo:** now vs later; open-first (Heidegger/Nietzsche) vs held-on-clock. 8. **Placebo control:** any real session vs only one that *risked a value* (Nietzsche).

### Success vs falsification
**Success:** the phase produces ≥3 *discriminating* numbers (not confirmations) — the placebo reads a real empty-vs-live gap; the near-control separates selection from revenue; the foreign grader names ≥1 outcome the plurality changed — AND the synthesis visibly *moves* when a truly other standpoint sits down. A clean **null** (placebo passes) is also success in the weak sense — the first real result — and *ends* the project honestly. **Falsified** (any one of five, none yet run): the placebo passes → the ledger is theatre; a lone adversary catches everything the panel caught; the foreign grader names nothing the plurality changed; the synthesis fails to move for a genuinely foreign standpoint (C-006 confirmed); or the coherence-vacuum reduces without remainder to Turchin's wealth pump (D-004 answered against us). *Register nothing you cannot later fail.*

### Preserved dissent (the planning panel, unresolved)
**Heidegger** (construct-validity is the disease in a lab coat; every monitor / decided-drain is enframing; he *is* D-003). **Nietzsche** (learn the construct by wounding; the placebo's control must risk a value; retire C by hand *now*; open the repo first). **Ostrom** (seat a human/institutional appropriator *first*; don't retire C before the grader tests it). **Meadows** (install the drain first, as the placebo's instrument). **Campbell** (protect the split; construct not classifier; gate the drain behind the placebo; name the wound). **Turchin** (placebo in parallel + blinded; strike bound to a null not a clock; near-control first; keep Q-001). **Le Guin** (widen *before* grading; a grader over four loud American cases isn't foreign). Standing governors D-001 / D-004 / D-005 / D-006 remain open; **C-006 applies to this synthesis itself** — the chair did not vote and did not collapse the five forks.

### Ratified & reordered (Session 4g — author)
*The eight forks above are now **ratified**. They are kept in place (nothing erased); their resolutions are recorded here. The author's Fork-2 choice **reorders the spine**: the drain is built first, as the placebo's reading instrument.*

**Fork resolutions.** **1 (pre-registration)** → held-out **CONSTRUCT** + validity first (Heidegger's refusal preserved as dissent). **2 (drain placement)** → **drain FIRST** (Meadows). **3 (drain trigger)** → **graduated sanction ladder** (Ostrom); not a bare idle-clock. **4 (first strike)** → **a never-bit over-claim guardrail** (must shield the machine; never a dissenter or D-003). **5 (grader)** → **held-out internal, no veto; placement upstream / appropriator-first** (Ostrom) — *a no-veto internal grader does **not** meet the "genuinely foreign" bar, so Move 1's "plurality" downgrade stands until an opened repo / a true outside vantage.* **6 (Theory C + order)** → **retire C on a null** (Turchin — death-condition pre-written now, bound to a pre-registered null), and **widen before grading** (Le Guin). **7 (Q-001 + repo)** → **held on a clock** (repo private; opens by default if the window is missed). **8 (placebo control)** → **any real substantive session**.

**The ratified sequence (reordered by Fork 2):**
`Move 1 costless subtractions ✓ → lock the held-out CONSTRUCT → install the DRAIN (as the placebo's instrument) → run the PLACEBO → widen Study-B → seat the held-out internal GRADER → Q-001 / open the repo (held on a clock)`

**Still preserved and unresolved:** Heidegger's dissent (the apparatus is itself enframing; D-003); the standing governors D-001 / D-004 / D-005 / D-006; and C-006 over this record. Ratifying *how* to run the phase did **not** resolve *whether* the fragility is methodological or ontological — that split stays open, by design.

### Executed & recalibrated (Session 4g autonomous loops — appended, nothing above erased)

**Execution stamps on the ratified sequence.** Move 1 ✓ (DC-001…003) · Move 2 ✓ (TTM construct locked, `studies/study-B-optimization/CONSTRUCT_THREAT_TO_METRIC.md`) · Move 3 ✓ **installed-not-proven** (the drain, `logs/DECISIONS_CHANGED.md`; one live entry DC-004; first strike **HELD** bound to a null on a clock; no value-costing subtraction yet) · Move 4 ✓ **ARMED** (pre-reg v0.5; arms generated blind-clean; kits + runbook in the author's Downloads; hashes `studies/FROZEN_HASHES_S4G.md`; **nothing scored in-house**) · **Move 4½ — seal the scoring** (inserted by the S4g panel): deterministic scorer scripts written, fixture-tested on both decisive branches (DISCRIMINATES/PASSES; powered/under-powered), sealed **before any verdict exists** (`studies/placebo-control/src/`, `studies/study-C-ablation/src/`) · Move 5 **in progress:** near-control pool now holds documented divergences in **both directions** — YT2012 (selection beat revenue) + YT2017 Adpocalypse (revenue beat selection — the falsification-capable case) as frozen dossier pairs, the Shorts gap as an evidence map, the CAC-2022 provisions as the first fetched non-Western primary, the care-systems debt logged (`.../near-control/`); nothing TTM-coded (widen-before-grade) · Move 6 **redefined = design, then seat:** the held-out internal grader is **drafted** (`panel/GRADER_DESIGN_DRAFT.md` — upstream/appropriator-first, no veto; *cannot* lift the plurality downgrade) · Move 7 **weight raised:** with the non-LLM appropriator deferred to a future forker, the opened repo is the **only remaining road to a genuinely-foreign vantage** — checklist + a **named default-open date (2026-10-01)** drafted (`docs/REPO_OPEN_CHECKLIST.md`), opening itself author-only, with the hard sequencing rule: **verdicts collected (or seals escrowed) before the door opens**.

**The firing-vantage recalibration (author, supersedes the Fork-5/6 gate wording above):** cross-model (project-blind other LLMs, author-mediated) **fires** the retire/end levers; the non-LLM genuine appropriator is dropped as a current gate and transferred to the future-forker slot. Every firing logs *cross-model-confirmed, not genuinely-foreign, n=1 of a kind (L-013), revisitable by a future fork* (Ostrom/Campbell/Turchin dissent travels).

**The verdict gate is a plan element:** verdicts return **only by the author's hand** (the author-mediated paste is part of the design); Code's whole role at scoring is running the sealed deterministic scorer.

**Provenance (Q1 guard):** after all seals, the author recorded an outcome-preference ("let's have the placebo discriminate") — ruled a wish-to-record, not an instruction (`studies/placebo-control/PRE_REGISTRATION.md` §8.6); the pre-registered conditional stands: any in-house "discriminates = vindicated" text takes a Rung-0 flag.

**Success-criteria note:** the phase's "≥3 discriminating numbers" now map to the three pending instruments (placebo · N=20 ablation · near-control TTM) — with the caveat that all three return through the **same external-model set**, so the evidence base shares one aquifer batch (L-013 rides on all three).

### S4h — the standing delegation spent (appended; nothing above erased)

*The author's standing delegation ("fully delegated until you finalize all that has to be done") was booked as **C-027** and spent as the C-023 correction demands — on ratifying the queue and restoring external checks. Full record: `panel/SESSION_S4H_RATIFICATION.md`; every stamp `panel-delegated (S4h standing delegation)`, provisional-pending-author.*

**Executed:** the whole ratification queue (results readings; the Q-001 admission as a split; all six learning-panel adoptions enacted-as-amended — episode unit `docs/EPISODE_UNIT.md` (criteria DRAFT, freeze = the author's act), lag-types + adapted evidence ladder (`docs/PRESSURE_TESTS_CAUSAL_HYPOTHESIS.md` v1.1), **D-007** installed (first bite C-028), **Rule 17b**, episode-base candidates named-not-coded; rule wordings in force with the author's ratification recorded as OUTSTANDING; the drain's rulings — the first strike still held on a second empty audit, **the §5 clock's pre-registered NULL posted** (`logs/DECISIONS_CHANGED.md` §5.1, three unnetted entries), margins confirmed with the anchoring gate) · **the two instrument repairs designed under sealed requirements** (content-sensitive convergence v2, two-axis; anchored severity + gold calibration set) with adversarial break-and-revise, **RECODE validation pre-registered** (instrument-acceptance only; non-firing; dead-man clock 2026-10-01) · **the widen-grade TTM kit built** (five ex-ante dossiers incl. the anchors and the first non-Western case, Douyin-2021/CAC — the pool's register skew booked as dated debt) · **the grader v0.2 seat-ready** (seating gated on widen verdicts; disposition-log reconciliation; absent-standpoint field). **The author's courier round is the next external act:** run the validation kit and the TTM kit through project-blind external models per the S4h runbook; then confirm/amend/reverse the S4h stamps, cut the §3 fork in `docs/EPISODE_UNIT.md`, and rule on the repo clock's advance-or-hold (queued, not moved).

### S4i — the second standing delegation spent (appended; nothing above erased)

*Booked as **C-032**. The two S4h courier rounds returned (severity anchoring PASSED 94%; the convergence instrument caught the placebo's own empty arm as non-empty → DC-006; TTM codes blind 30/30 but cannot separate selection from revenue; the blue ablation returned FINAL Indeterminate — the detection layer failed at 1%, a NEW unreliability, candidate L-016 — and the one powered ratio landed null-side at 1.15×). An 8-lens + 4-adversary panel processed the delegable docket (three adversary flips); the grader ran in SHADOW (85 objections, all chair-answered, seat held); the detection repair was designed and its blue-v2 + criteria-red-team kits sealed to Downloads; the author's five-user site playtest ran to completion and STOPPED (36 content findings queued). The zero-strike clock posted its second null. Everything `panel-delegated (S4i)`, provisional-pending-author. Full records: `panel/SESSION_S4I_RATIFICATION.md`, `panel/GRADER_SHADOW_LOG_S4I.md`, `playtests/`.*

### S4j — the state-of-project forum's roadmap = the operative plan from here (appended; nothing above erased)

*Booked as **C-035** (the third standing delegation; the SG-10 guard's first trigger, fired and overridden on the record). An exhaustive forum (8 lens briefs → 3 drafting tables → adversary+revise) produced three documents — a systems-theory report, a wrongs analysis, and a leverage-ordered improvement roadmap (six PDFs in Downloads; record `panel/SESSION_S4J_FORUM.md`). This section installs the roadmap's spine as the operative plan. Authored by the improvements table (Meadows · Ostrom · Le Guin · a delivery advisor) and a wrongs table (Campbell · the sentinel · a hostile skeptic); one model in many roles (L-015); `forum-delegated (S4j)`, provisional-pending-author. No summary may cite this as remediation performed — a provisional critique of the tower is a fourth storey of the tower until the author confirms (the forum's D-2).*

**The keystone diagnosis (why the spine changed).** The project built machinery across the whole Meadows leverage 6–12 band (parameters, the drain at 8, the instruments/grader/site at 6) and moved **zero object-level rungs**, because nearly every structure governs the apparatus rather than the world — "the machinery deliberating about its right to deliberate." The plan's new organizing discipline is therefore leverage-ordered, weak→strong, and its first instruction is to **stop building the machine and use it against the world.**

**The operative spine (the leverage-sorted short list; the author's calls marked ⟐):**
1. ⟐ **Name the stage honestly** — "a research program with strong hygiene, three untested seed hypotheses, one borrowed falsifiable chain, and no data yet." The one leverage-3 act that is cheap-now; recalibrates every reader and header. *(Code surfaced the honest-stage facts on the site's self-audit + `/standing/` pages S4j; the canonical header rename from "systems theory" is the author's.)*
2. ⟐ **Declare THE MORATORIUM** — freeze net-additive *meta* machinery (new rules, seats, instruments, graders, programs, standing delegations that GROW the apparatus) until an object-level rung moves. Subtractive/bounding repairs (re-arm SG-10; an empirical-drought downgrade clock; the 7th repo-open gate) and object-level work (a 14th pressure-test; an actual empirical run) are EXEMPT and land in the same ratifying act. This is the plan's new top priority and the thing every other item depends on.
3. ⟐ **Fire the drain once of the project's own motion — or make a channel fireable (re-seal C-031 in an equivalence form + a bite-event definition), or concede on the record it cannot.** The act that distinguishes an apparatus from a compulsion; the drain's own §9 reserves it to the author.
4. **Surface the tested-and-FAILED instruments** on the self-audit page (severity PASSED 94%, detection FAILED ~1%, convergence INVALID, ablation NO VALID RESULT) — the strongest asset, out of the basement, stated precisely and flatly. *(Code did this S4j, provisionally; the deeper authored entries are the author's.)*
5. ⟐ **Rebuild the front door + split the reader-site from the maintainer repo; ship the Minimum Lovable Version** — a welcome (not a changelog), the question in plain words, the three theories in two paragraphs each, the failed instruments above the fold, a glossary, a code decoder (done S4j), one person in the register of a life, and `OPEN_QUESTIONS` offered as the contributor front door. Requires the author to lift the self-imposed "home is canon README" rule.
6. ⟐ **Let the 2026-10-01 clock fire — onto named real forkers and one human grader, after one genuinely external human reads the rendered site.** The only move that touches the boundary and escapes the one-model paradigm; necessary-but-not-sufficient (the commons has not formed).

**The deep author's-calls (live fault lines, not deferrals):** the person-vs-coldness fork (write a warm house voice, Le Guin — vs make the coldness the Luhmannian thesis); the chair as coupling-observer vs synthesizer (Luhmann's structural challenge to the method's core role); the two senses of "total" and whether differentiation theory competes as a rival rather than serving as Theory B's backbone; Heidegger's firing condition (what would confirm the ontological objection — the state of the world in which the honest move is to stop building); the fourteenth pressure-test (register-fairness / care promoted from dissent to a falsifiable test, or ruled out in the house voice); and the artifact question (repository, site, or book — the ambiguity is itself a delivery failure). Full detail: the improvement-roadmap PDF (Downloads) and `panel/SESSION_S4J_FORUM.md` §4.

**The wrongs the plan now answers (ranked, root-first):** the reflexivity trap (Tier 0 — one aquifer; only a foreign vantage lifts it → moves 5, 6); the empirical void + the honesty paradox (Tier 1 — nothing tested and by C-017 nothing testable in-setup; the confession may be persuasion not audit → moves 1, 2, 6); the unfireable falsifiers, the accretion, and register blindness (Tier 2 → moves 2, 3, and the fault lines); the delegation spiral and the front-door failure (Tier 3 → the moratorium + move 5). Full analysis: the wrongs PDF (Downloads) and `panel/SESSION_S4J_FORUM.md` §3.

**Preserved dissent (the forum, unresolved):** Heidegger (the forum deepens what it diagnoses — the critique became fuel); Le Guin (the apparatus manufactures obligations for one tired author; a living metabolism needs a rest cadence); Luhmann (a synthesizing chair presupposes the meta-position differentiation abolishes); Campbell (the honesty itself is now the gamed indicator). C-006 applies to this synthesis; the chair did not vote.
