# COMPREHENSIVE PLAN

Version: 0.4 · Status: Draft (author to ratify) · Last updated: Session 4f (updated Plan appended from the S4f planning panel — see the final section)

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
