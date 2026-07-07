# LEARNINGS

Version: 0.4 · Status: Living · Last updated: Session 4e

*Distilled, durable lessons — the signal extracted from the raw feed in `CATCHES.md`. A catch becomes a learning when it names a pattern likely to recur. A learning earns its keep only when it **changes something**: a rule, a procedure, the roster, or the method. Each entry below names the change it caused.*

## Schema

Each entry: **ID** · the lesson (one line) · the evidence (which catches/rounds) · the change it caused · status.

---

## Session 1

### L-001 — The synthesizer's bias runs toward resolution; draft dissent first
- **Lesson:** the single mind that integrates a many-voiced argument (here, the chair) will, left unchecked, drift toward *agreement* — upgrading pluralities to majorities, objections to footnotes, and permanent splits to settled questions. Not from bad faith but from the shape of the task: synthesis *wants* to close, and closing is easier when the mess is tidied away.
- **Evidence:** C-003 (consensus written where there was none), C-005 (plurality reported as a decision), C-006 (nearly resolved the meaning-question because it was tractable). Three instances in one session.
- **Change it caused:** a procedural guard, now standing method — **draft the dissent first and the consensus last.** Before any resolution is recorded, the chair must answer explicitly, in writing: *Who rejects this, and on what ground?* If the honest answer is "no one," that itself is the red flag (Ground Rule 12). Pluralities, majorities, and consensus are labeled distinctly and never used interchangeably. Proposed for promotion into `GROUND_RULES.md` at the next session (author to ratify).
- **Status:** active guard; candidate rule amendment.

### L-002 — A plurality is not a mandate; label the strength of every agreement
- **Lesson:** "the panel decided" is almost always false. Real deliberative bodies produce *distributions*, not verdicts. Collapsing a distribution into a decision discards the exact information a living, forkable project exists to preserve — the shape and location of the disagreement.
- **Evidence:** C-005; the Round-3 vote (plurality of 5 for the Adaptation Gap, with two principled rejecters and a meaning-bloc holding the reverse ordering).
- **Change it caused:** every vote in the record now reports the **full distribution** (median, high/low, who dissents and why), and every claim derived from a vote carries its strength label — *consensus / majority / plurality / chair's synthesis over dissent.* Candidate Theory A is framed as "the most upstream node the panel could plurality-endorse," never as "the answer." This is why the deliverables ship as **three rival theories**, not one.
- **Status:** active; embedded in the output format.

### L-003 — The adversaries did the most work; over-weight the voices that reject the premise
- **Lesson:** the session's most valuable moves came almost entirely from the members who rejected the founder's framing — Heidegger and Nietzsche (the premise is the disease; meaning is the ground), Turchin and Marx (the single-master framing trades testability for a story), Ostrom and Le Guin (procedural and human-scale objections). A panel staffed to agree with the founder would have produced a tidier, emptier result. The disagreement was not friction on the way to the product; it *was* the product.
- **Evidence:** C-002 (Heidegger seated as internal adversary), C-004 (Turchin caught the smuggled cause), C-005 (Ostrom caught the overstated mandate), and the six preserved dissents that structure the final synthesis.
- **Change it caused:** confirms and sharpens the roster principle — **recruit for the fault line, not the fame** (novelty of disagreement is the admission criterion in `CONTRIBUTING.md`), and keep at least one member whose position is that the whole project is a mistake. When a future session shows thin dissent, the correction is to *summon a sharper adversary from the bench*, not to proceed. The meaning-bloc's objection (Nietzsche/Heidegger/Le Guin/Arendt) is retained as a **standing governor** so it cannot be quietly dropped in favor of the tractable structural program.
- **Status:** active; shapes recruitment and session design.

---

## Session 2

### L-004 — Comprehensiveness and parsimony are in tension; layer, don't lengthen
- **Lesson:** the honest response to "your list is incomplete" is **not** a longer flat list — that buys the *feeling* of comprehensiveness at the cost of falsifiability. It is a **typed, layered** structure in which every variable earns its place by naming a distinct causal role (driver / dynamic / symptom) and, ideally, replacing a vague symptom with a measurable driver. Adding is not the same as explaining.
- **Evidence:** C-008 (scope-creep near-miss); the Round-2 admissions (five of eleven) and the Round-3 restructuring.
- **Change it caused:** a **variable-admission criterion** — an addition must (a) name a phenomenon not already covered *and* (b) replace a vague item with a more measurable one, or be cut — plus the shift from an enumerated list to a causal-role layering. The line is not yet principled, so it is kept under review as Q-006 / D-005.
- **Status:** active; embedded in `GOALS.md` and the pressure-test method.

### L-005 — The field already names the target; the missing thing is the mechanism
- **Lesson:** the landscape survey shows the serious contemporary frameworks *converge on naming* the condition — polycrisis, metacrisis, the meaning crisis — and several **say outright** that they are "neither a comprehensive theory nor an approach." The gap in the field is therefore not a better *name* for the crisis but a falsifiable, **directed mechanism**: the arrows the buzzwords leave undrawn. The project's distinctive value is *joining* + *form-fit-to-pace*, delivered while honestly **bracketing meaning** rather than faking it (which is how frameworks become unfalsifiable, e.g. Integral Theory).
- **Evidence:** `LANDSCAPE_OF_CONTEMPORARY_SYSTEMS_THEORIES.md` §4 (polycrisis/metacrisis) and §9 (the scored synthesis table showing no framework delivers join + meaning + pace + falsifiability together).
- **Change it caused:** sharpened **Goal S1** (measured against the field at its best, not its memes, with named referents) and committed the project to the **"draw the arrows"** standard for every pressure-test (the Session-2 coverage rule); reframed the value proposition of the deliverables as *mechanism + living form*, not another label.
- **Status:** active; shapes outputs, the coverage tracker, and the public site framing.

### L-006 — A canonical structural change demands a same-session propagation pass
- **Lesson:** when a load-bearing structure changes (here, the pressure-tests going from a flat seven to a layered thirteen), updating the *primary* documents is only half the job; every *dependent* document that references the structure must be updated in the **same cycle**, or the project ships internally contradictory records. Deferring the ripple to "a later pass" is how stale cross-references are born (they were).
- **Evidence:** C-010 — three Session-1 output docs and the skill still said "seven" after the primary docs said "thirteen"; the author redirected the propagation into the same cycle.
- **Change it caused:** a **propagation-pass discipline** — a canonical change triggers an explicit checklist across all dependent files, ending with a reference/consistency sweep that fails loudly on any dangling reference. Under the Chat/Code shuttle (`docs/CHAT_CODE_WORKFLOW.md`) this becomes **Code's deterministic job**, not fallible hand-work — the structural fix for the class of error, not just this instance.
- **Status:** active; embedded in the workflow and the skill.

### L-007 — A load-bearing visual must be validated to render; a broken diagram is worse than none
- **Lesson:** a diagram that fails to render doesn't just lose information — it *misinforms* (a blank or errored figure reads as "nothing here" or "the tool is broken") and it violates Ground Rule 19. Load-bearing visuals therefore need a validation step, and the most robust ones for a fixed figure are **hand-authored SVG or syntax-checked source**, not a fragile DSL relied on blind. Fragile renderers (Mermaid's `quadrantChart` rejects non-ASCII point names) should be fed conservative input and given a non-dependent fallback.
- **Evidence:** C-011 — an em-dash in a Mermaid quadrant point name blanked figure 05 until it was re-authored as SVG and the render loop was made resilient to a missing library.
- **Change it caused:** load-bearing figures are validated before shipping; raw-SVG figures render independent of any CDN; `VISUALIZATION.md` notes the Mermaid-fragility constraint (ASCII-only quadrant point names). Under the shuttle, a "diagrams render" check joins the standard sweep.
- **Status:** active.

---

## Session 3

### L-008 — When a design choice looks binary, hold multiple registers rather than choosing
- **Lesson:** faced with an apparent either/or (here: should the memory slice be *thin* or *thick*?), the better first move is often neither — it is a **tiered structure that holds several registers at once**, each at a different resolution, composed per use. The binary is usually an artifact of assuming a single representation must serve every need. Optionality, deliberately structured, beats a forced commitment that will be wrong for half the cases.
- **Evidence:** Q-010 — the thin-vs-thick slice question, resolved not by picking a thickness but by the multi-register memory model (pointer + frontier + a maintained gist-of-the-whole always; working set per task; deep text on demand) in `docs/CHAT_CODE_WORKFLOW.md` §5.
- **Change it caused:** the register model for the Chat/Code shuttle; and a **standing heuristic** — when a decision presents as A-vs-B, first ask whether a tiered structure can hold both, chosen per use, before taking a side. (This matches the author's stated working preference for optionality.)
- **Status:** active; a general design heuristic, not only a shuttle detail.

---

## Session 4

### L-009 — Promote a ratified learning in the session that ratifies it
- **Lesson:** the learning loop's value is *latency-sensitive*. A learning that implies a rule should change the rules **immediately**, not sit "queued" across sessions. The habit of *naming* a promotion ("L-001 remains queued") is not the same as *doing* it, and the gap between the two is dead time in which the project is not actually learning at the rule level. A living rule-set is proven by changing *when* it learns.
- **Evidence:** C-012 — L-001 was distilled in Session 1 and only promoted (to Rule 22) in Session 4, three sessions late.
- **Change it caused:** promoted to **Rule 23** ("promote learnings promptly"); and a standing practice — every session that ratifies a rule-implying learning folds it into `GROUND_RULES.md` the same session. The reflexive self-audit (this reflection) is the backstop that catches any promotion that slips.
- **Status:** active; a rule about how the rules get updated.

---

## Session 4d–4e

### L-010 — A reflexive/ablation study cannot be self-administered by one model
- **Lesson:** to test whether a reasoning *structure* improves a model's own output, the compared arms and/or the coding must come from a **different model or human coders, blind to arm and hypothesis.** A single model generating and grading both arms is confounded beyond repair for inference — it can calibrate, not confirm. Also: elevate the **non-circular** hypothesis (does structure *add*, not *relabel*?) and control for length.
- **Evidence:** C-015 (the Study-C pilot).
- **Change it caused:** the new `skills/study-discipline/SKILL.md` §5; a standing requirement of cross-model/human validation for reflexive studies; the Study-C pre-reg revision (HC1 primary, length-controlled, cross-model arm), applied S4e.
- **Status:** active.

### L-011 — Institute the measurement seat before empirical work
- **Lesson:** a roster built for philosophical deliberation lacks the competence to *test* claims (construct validity, causal identification). Add and **summon** a measurement/causal-inference seat (Campbell + Pearl) whenever a study or a causal claim is on the table.
- **Evidence:** C-014 (the roster gap, exposed by the empirical turn).
- **Change it caused:** the roster amendment (ratified S4e; `panel/PANEL_ROSTER_AMENDMENT-measurement.md`); `skills/study-discipline/SKILL.md` §7.
- **Status:** active.

### L-012 — Match a study's data needs to the executor's real access before scheduling its run
- **Lesson:** an empirical study is only runnable where its **data is reachable**. Ratifying a run (opening Gate 2) does not create data; a run scheduled into an environment without network/datasets/deps cannot produce a result — and the one thing it must never do is **fabricate one from model memory**. Confirm the executor can actually obtain the pre-registered sources *before* scheduling the run; otherwise the honest deliverable is the **frozen pre-registered pipeline**, and the result waits for a data-capable context.
- **Evidence:** C-017 (Study B un-runnable without external data); echoes the Study-C pilot's C-run-3 (scale/orchestration mismatch).
- **Change it caused:** a pre-run **data-feasibility check** folded into the study discipline; `studies/study-B-optimization/RUN_STATUS.md` as the honest terminal artifact when data is unavailable; Study B's pipeline frozen pending data.
- **Status:** active.

---

## How learnings feed forward

```
   CATCHES.md            LEARNINGS.md              GROUND_RULES.md / METHOD.md
  (raw, per-event)  ──►  (distilled patterns)  ──►  (rules that actually change how we run)
        │                       │                            │
        └── pattern of 3 ───────┘                            │
            (C-003/005/006 → L-001)                          │
                                └── promotion proposal ──────┘
                                    (author ratifies)
```

A learning that never reaches the third column is just an observation. The test of whether this project is *actually* learning — and not merely accumulating documents — is whether the rules and the roster measurably change in response to what the catches reveal (Goal S5). At Session 1, L-001 was queued for promotion into the constitution. In **Session 2 the loop demonstrably closed**: the L-001 guard caught **C-007** (the layering smuggling a causal order) *before* it reached an output — a prior learning preventing a repeat of a prior error. L-001 was **promoted into `GROUND_RULES.md` as Rule 22 in Session 4** (author to ratify the wording) — the loop finally closing at the rule level, three sessions after the learning was distilled. That delay was itself caught (C-012) and turned into a rule against future delay (L-009 → Rule 23). Session 2 also showed the loop running *through the author*: C-010 (stale cross-references) and C-011 (a broken diagram) were both author-caught and immediately converted into standing discipline — L-006 (same-session propagation, soon Code's job) and L-007 (validate that visuals render). The ratifier is part of the error-catching apparatus, not outside it — and in Session 4 the loop caught a flaw in *itself* (the promotion latency), which is the most on-thesis catch the project has produced.
