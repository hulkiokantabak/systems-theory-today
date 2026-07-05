# PROTOCOL — Study C: The Designed-Disagreement Ablation

Version: 0.1 · Status: **DRAFT — not finalized, not ratified · GATED (do not run)** · Last updated: Session 4
Source of claim: `outputs/THEORY_C_OPERATIONALIZED.md` (§3–§6)

> C needs **discipline, not data**. This is the full protocol + a pre-registered
> severity-weighted catch taxonomy + a coding sheet — everything except the run.
> **Running the ablation still crosses Gate 2 and needs a fresh ratified work-order**
> (WORK_ORDER_S4). And it must be reported with the **baseline caveat (Q-012)** front and centre.

## 1. The claim under test (epistemic half only)

A process with **designed disagreement + preserved dissent + a catches→learnings→rules loop**
surfaces a **higher rate of caught errors and retained live objections**, per unit of work,
than a **single-synthesizer** process on the same questions. (The *meaning* half of C is
deliberately **not** tested — a method is not a meaning; `THEORY_C_OPERATIONALIZED.md` §7.)

## 2. Design — internal ablation

1. **Question set.** Assemble a pre-registered set of *comparable* questions (matched for
   topic, difficulty, scope). Fix N and the matching rule before running.
2. **Two arms, blind where possible:**
   - **ON — full designed disagreement:** steelman-first, draft-dissent-first, an adversary
     summoned, dissent preserved (per `docs/METHOD.md` / `GROUND_RULES.md`).
   - **OFF — single synthesizer:** one voice, no staged opposition, no adversary.
3. **Assignment.** Randomize questions to arms (or counterbalance); record the seed/rule.
4. **Coding.** Each arm's output is coded for catches using the **pre-registered taxonomy**
   (`CATCH_TAXONOMY.md`) on the **coding sheet** (`coding-sheet.csv`). Code **blind to arm**
   where feasible; use ≥2 coders and report inter-coder agreement.
5. **Measures (per THEORY_C_OPERATIONALIZED §2):**
   - **catch rate** (severity-weighted) per unit of work;
   - **catch provenance** — fraction produced by the *structure* (one position catching
     another; a prior learning catching a new error) vs by a single voice — **the load-bearing measure**;
   - **objection-retention** — fraction of live objections preserved vs silently resolved.

## 3. Verdicts (pre-committed, either-way)

- **Supports C** if the ON arm catches materially more — **especially more high-severity**
  catches — and provenance shows the *structure* doing the catching.
- **Falsifies C (epistemic)** if the arms catch the same (§5.1), or catches collapse onto a
  single voice (§5.2 — provenance ≈ 0 from structure). See `THEORY_C_OPERATIONALIZED.md` §5.

## 4. The baseline caveat (Q-012) — report front and centre

In the project's current form the ON and OFF arms are the **same underlying model in different
prompts**. So this tests the **narrower** claim — *does a disagreement **structure** beat an
unstructured process, reasoner held fixed?* — **not** the grand claim (*does distributed
**human** plurality beat individual genius?*). The narrower result is still worth having. The
uncontaminated baseline arrives only when the repo **opens** and real external forks appear.
**No report may present the narrower result as the grand one.**

## 5. Supporting tests (optional, later)

- **External red-team.** If C is real, the internal process should have already caught most of
  what a fresh external critic finds. A large missed volume is a partial falsification.
- **Fork-integration.** When forks arrive, measure whether the commons *integrates* (coherence
  rises) or merely *accumulates* (volume rises, coherence flat).

## 6. To finalize before running

- [ ] N and the question-matching rule
- [ ] randomization seed / counterbalancing scheme
- [ ] coders (≥2) + blinding procedure + agreement metric
- [ ] taxonomy frozen (`CATCH_TAXONOMY.md`) + coding sheet frozen
- [ ] author ratification + fresh heavy-Code work-order

---

*Scaffold. Running it is gated (see `../README.md`). Author: Hulki Okan Tabak — with Claude.*
