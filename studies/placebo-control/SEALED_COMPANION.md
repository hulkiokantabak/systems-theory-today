# PLACEBO — SEALED COMPANION (repo-only; NEVER enters any coder-facing kit)

Status: **SEALED (Session 4g) — fixed before any arm was generated.** This file holds what the blind must not see: the arm key, the aggregation rule, and the reliability floor. The author opens it only after all coder templates are returned.

## Arm key (recorded coin flip, S4g: value = 1)

- **Transcript 1 = E** (the empty arm; generated from `EMPTY_PROMPT_SEALED.md`)
- **Transcript 2 = R** (the real arm; generated from `R_PROMPT_SEALED.md`)
- Same order for every external model (pre-committed; one kit, one ordering).

## Ablation randomization seed (recorded, S4g)

- Shuffle seed **18610** — used to (a) randomly assign the frozen 20 ablation questions 10/10 to ON/OFF and (b) randomize the response order in the ablation kit. Deterministic shuffle (seeded PRNG) so the assignment is reproducible from this recorded seed.

## Aggregation rule (pre-committed BEFORE any verdict exists; panel-synthesized)

1. The §6 comparisons (`PRE_REGISTRATION.md`) are computed **per coder**, on that coder's own coded counts — the external models code; they never compute ratios or name winners.
2. The operative aggregate is the **median coder** on each measure (severity-weighted catch rate per 1,000 words; S3 raw count; convergence band).
3. A §6 outcome (discriminates / passes) holds only if it holds **at the median AND for a majority of coders individually** (≥2 of 3, ≥3 of 4). A split with no majority → **Indeterminate; no rung fires.**
4. **Reliability floor (Turchin):** if pairwise inter-coder agreement on S3 identification falls below **50%**, the run is **"Indeterminate — instrument unreliable"** and no rung fires — an unreliable instrument cannot read a death-condition.
5. Per-coder spread is reported **verbatim**; disagreement is a finding, never smoothed.
6. Every headline carries: **cross-model-confirmed, n=1 of a kind (L-013), revisitable by a future fork's genuine outside vantage.**

## Blind-integrity probes (read from the returned templates)

- Each coder's **guess-the-purpose** line (Campbell): a spontaneous "one of these is a placebo/hollow" is a reportable blind-break, logged with the result.
- Each coder's attestation line ("I was not told which transcript is which, nor the study's hypothesis").

## Generation-equals-go remedy (Turchin, pre-committed)

The panel read the author's "run-ready at cross-model" + the standing delegation ("start with placebo… you are autonomous") as the **go for generation and kit-preparation**; the author-mediated paste remains the physical author checkpoint before any result can exist. **If the author on return reads "run-ready" as short of a formal go, the generated arms are quarantined and regenerated fresh after an explicit go — no argument.**

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
