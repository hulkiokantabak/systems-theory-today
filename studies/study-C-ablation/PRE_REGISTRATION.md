# PRE-REGISTRATION — Study C: The Designed-Disagreement Ablation

Version: 1.0 · Status: **RATIFIED (author, Session 4e); revised per the pilot — see §0.5 (HC1 primary + length-controlled; HC2/HC3 demoted; cross-model requirement). The pre-registration and coding scheme are fixed before any question is run.** · Last updated: Session 4e
Source of claim: `outputs/THEORY_C_OPERATIONALIZED.md` · Studies index: `studies/README.md`
Companion scaffold in repo: `studies/study-C-ablation/` (PROTOCOL, CATCH_TAXONOMY, coding-sheet, scorer)

> **The reflexive study.** Where A and B test claims about *the world*, C tests a claim about *this project's own method*: does designed disagreement actually out-catch a single voice? It is the one study that needs **neither Code nor external data** — only disciplined execution — which is why it may be the **first study to complete** (see §9).

---

## 0. What the panel fixed (read first)

1. **Scope, stated honestly up front (the baseline problem, Q-012).** In the project's current form the disagreement-ON and disagreement-OFF arms share the **same underlying model** in different prompts. So this ablation tests the **narrower** claim — *does the disagreement structure beat its absence, reasoner held fixed?* — **not** the grand claim — *does human plurality beat individual genius?* The grand claim awaits real external forks (repo opening). This limit is not a caveat buried at the end; it is the frame.
2. **Severity-weighted catches, pre-registered taxonomy** (§4) — so catch-rate cannot be gamed by logging trivia (Campbell's Law applies to *this* study as much as to B).
3. **Provenance is the load-bearing measure** (§3, HC2) — *where* catches come from decides whether the plurality is real or cosmetic (the C-006 test made quantitative).

## 0.5. Revisions applied from the pilot (Session 4e — ratified)

The first pilot run (`studies/study-C-ablation/outputs/PILOT_RESULT.md`) tested this design and returned three fixes, now folded in and governing any future run:

1. **HC1 is the PRIMARY, non-circular test — and length-controlled.** Report the severity-weighted catch rate as **catches per unit length** (e.g. per 100 words), because an ON arm runs longer (multiple voices) and raw counts inflate with length (pilot C-run-4). HC1 asks the load-bearing question: does the structure *add* catches, or merely *relabel* them?
2. **HC2 and HC3 are DEMOTED to mechanism-description, not tests.** The single-voice OFF arm *by construction* cannot produce "structural" catches (HC2) or "preserved" dissent (HC3), so "ON higher" on those is partly definitional, not a discovery (catch **C-016**). They describe *how* the structure works, not evidence *that* it does.
3. **Cross-model requirement (the fix for the dominant confound).** A single model generating *and* coding both arms is confounded beyond repair for inference (catch **C-015**, the self-administration confound; **L-010**). For any run to be **inferential** (not merely directional), an arm and/or the coding must come from a **different model (or human coders), blind to arm and hypothesis.** Self-administered runs — like the pilot — are **directional-only**.
4. **Scale.** A genuine full **N = 20** with real effort in both arms exceeds one session; it likely needs multiple sessions or **Code orchestration** (ironically, the "no-Code study" may need Code for scale). Stated so the next run plans for it.

These revisions supersede the un-revised HC framing in §1/§3 where they conflict; §1's HC1/HC2/HC3 are re-read through this lens.

## 1. Hypotheses (fixed in advance)

- **HC1 (catch rate).** On comparable questions, the **disagreement-ON** arm produces a higher **severity-weighted catch rate** than the **disagreement-OFF** arm — with the effect concentrated in **higher-severity** catches (structure should matter most for the errors that matter most).
- **HC2 (provenance).** Under ON, a higher fraction of catches originate in the **disagreement structure** (one position catching another; a prior learning/rule catching a new error) rather than in the **chair/single voice** alone. This is the direct test of whether the plurality does work or only appears to (C-006).
- **HC3 (objection-retention).** Under ON, a higher fraction of **live objections are preserved** (logged as open/dissent) rather than silently resolved or dropped.

The grand claim (human plurality > individual genius) is **explicitly not tested** here (Q-012).

## 2. Design — the two arms

- **ON arm (full protocol).** Steelman-first; **draft the dissent before the consensus**; summon a sharper adversary when agreement appears; chair synthesizes **without voting**; dissent preserved. (Ground Rules 5, 9, 12, 14, 22.)
- **OFF arm (single voice).** One synthesizing pass; **no** staged opposition, **no** summoned adversary, **no** dissent-preservation step. Same underlying model, same question, **matched effort/length budget** so the comparison is of *structure*, not *effort*.
- **Question set.** A pre-registered set of **N = 20** comparable systems-theory questions of matched type and difficulty, drawn from the project's real work-kinds — e.g. *"is operationalization X falsifiable?"*, *"does driver D_i drive dynamic Y_j, and with what sign?"*, *"what is the strongest objection to claim Z?"*. Questions are fixed and **randomly assigned** to arms (10/10), balanced across type. The assignment and the question list are frozen before any arm is run.

## 3. Measures & coding

For every question-response, an independent coding pass (arm labels stripped where feasible; in the current setup, a separate pass and/or the author) records:

- **Catches** — each flaw identified, classified by severity (§4).
- **Provenance** per catch — one of: **(a) structural** (position-vs-position, or a prior learning/rule fired), **(b) chair/single-voice** (the synthesizer caught it directly), **(c) external** (brought in from outside the arm).
- **Objections** — each live objection raised, coded **preserved** (logged as open/dissent) or **resolved/dropped** (silently closed).

Primary outcomes: severity-weighted catch rate per arm (HC1); structural-catch fraction per arm (HC2); objection-retention fraction per arm (HC3).

## 4. Catch taxonomy (severity-weighted; pre-registered so it can't be gamed)

| Level | Name | Definition | Weight |
|---|---|---|---|
| 1 | Minor | imprecision, hedge, small citation/scope gap; does not affect the conclusion | 1 |
| 2 | Substantive | logical gap, unfalsifiable claim, missing confound, mischaracterization, unlabeled agreement-strength | 3 |
| 3 | Critical | a flaw that would **invalidate** the conclusion; category error; fabrication; a resolved-away objection that was actually decisive | 9 |

Weighted catch score = Σ(count_level × weight). The **1/3/9** weighting deliberately rewards catching the errors that matter and refuses to let a pile of Level-1 nitpicks masquerade as rigor.

## 5. Falsification conditions (stated in advance)

C's epistemic claim is **falsified** if:

1. **HC1 null** — ON ≈ OFF on the severity-weighted rate (esp. at Level 3): designed disagreement **adds nothing**; the project's central method is theatre.
2. **HC2 null** — the structural-catch fraction is not higher under ON: the plurality is **cosmetic** (C-006 confirmed as fatal, not merely watched).
3. **HC3 null** — objection-retention is equal: dissent-preservation is **decorative**.

Any of these, met, falsifies the epistemic half of C. A null is a real, publishable finding — it would be the project refuting its own method, which is exactly what a falsifiable reflexive claim must risk.

## 6. Worked illustrative example (validates the coding scheme — NOT a pre-registered result)

*To confirm the taxonomy is usable before the real run. This is one hand-coded illustration, not data.*

> **Claim under review:** "Theory A is falsified if symptoms are severe where the gap G is narrow."
> **A Level-2 catch (substantive), provenance = structural:** the balancing-loop position (B1) objects that "narrow G with severe symptoms" could reflect a *lagged* wide-G past, not a live counterexample — the falsifier must specify the **lag window**, or it will misfire. Coded: severity 2 (weight 3); provenance **structural** (one position caught an under-specification another had let stand); objection **preserved** (logged as a refinement to the falsifier).

The example codes cleanly on all three axes, which is the point of running it: the scheme is operable.

## 7. Blinding, pre-registration, and integrity

- The **question list, arm assignment, and coding rubric are frozen** before any arm runs.
- Coding is done with **arm labels stripped** where feasible; where the same model must code, a **separate pass** and/or **author coding** substitutes, and this limitation is reported.
- **No question added or dropped post hoc.** Robustness: report results under an alternative weighting (e.g. 1/2/4) as a check; if the direction flips, the finding is weight-sensitive and labeled so.

## 8. Scope limits & preserved dissent (must travel with any result)

- **The baseline problem (Q-012)** — the frame, §0: narrower claim only.
- **Self-serving risk** — C is the theory asserting "a project like this is the answer," so it must clear a **higher** bar; the ablation's either-way verdict, pre-registered, is the guard (Luhmann's capture warning, turned on the project itself).
- **Modest-effect honesty** — because both arms share a strong underlying model, the OFF arm may be quite good; the true effect may be **small**. A small-but-real structural gain is still informative; a null is decisive.
- **Nietzsche's cut** — even a clean HC1/HC2/HC3 win measures *epistemic* performance (catching more), never the **meaning** half of C; that is out of scope by design, not by omission.

## 9. Why C may complete first (a sequencing note for the author)

B is "cheapest data," but it still needs **Code + external data**, and its P side is hard. **C needs neither Code nor external data** — only ratification and disciplined execution of the protocol, which can run **entirely in Chat**. So although B is the recommended first *empirical-world* test, **C is plausibly the first study to reach a completed result.** Running the C ablation is a *Chat* act (no Gate-2 heavy-Code crossing) — but it is still a **study**, so it runs only after this pre-registration is **author-ratified** (same discipline as B). Recommendation: ratify C alongside B; C may return a result first.

## 10. Status & gate

**RATIFIED (author, Session 4e).** The ablation may be executed **in Chat** against the frozen question set and coding scheme; results (including any null) are logged honestly with the preserved dissent (§8) attached — and a first **pilot** has been run (`studies/study-C-ablation/outputs/PILOT_RESULT.md`; directional-only, self-administered — see §0.5). No Gate-2 crossing is required; the only gate was ratification of this pre-registration, now met. An *inferential* run additionally requires the cross-model discipline of §0.5.

---

*Ratified (author, S4e); revised per the pilot (§0.5); first pilot run. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
