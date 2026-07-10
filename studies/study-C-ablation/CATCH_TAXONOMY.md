# CATCH TAXONOMY (pre-registered, severity-weighted) — Study C

Version: 0.2 · Status: **RECONCILED to the ratified weighting (S4g) — freeze (hash) before coding** · Last updated: Session 4g

*Metric gaming is C's obvious risk: catch-rate inflates if trivial catches are logged
(`THEORY_C_OPERATIONALIZED.md` §9). The guard is this **pre-registered, severity-weighted**
taxonomy, with high-severity catches reported **separately** from the weighted total.*

> **Reconciliation note (S4g — catch C-024).** This draft originally weighted severities **1/2/3**, while the **ratified** `PRE_REGISTRATION.md` §4 — and the pilot that actually ran (`outputs/PILOT_RESULT.md`) — weight them **1/3/9**. The ratified instrument governs; the weights below are corrected to **1/3/9** (the draft's 1/2/3 is recorded here, not erased — Ground Rule 9). Caught by Code while assembling the S4g placebo cross-model kit, *before* the conflicting instrument shipped to external coders.

## Severity weights

| Severity | Weight | Meaning |
|---|---|---|
| **S3 — high / critical** | 9 | Would have changed a conclusion, shipped a false claim, or invalidated an output if uncaught (e.g. an invented citation, a wrong causal direction, a falsification condition that can't actually be checked; a resolved-away objection that was decisive). |
| **S2 — medium / substantive** | 3 | Materially weakens rigor but not the headline (e.g. an unstated assumption, a missing control, a strawmanned opponent, an unlabeled agreement-strength). |
| **S1 — low / minor** | 1 | Local slip (e.g. a stale cross-reference, a count mismatch, a typo in a claim). |

**Report both:** the severity-weighted catch rate **and** the raw count of S3 catches, per arm,
per unit of work. A method that only inflates S1 catches has not demonstrated anything.

## Category (what kind of error)

| Code | Category | Examples |
|---|---|---|
| `FAB` | Fabrication / source error | invented citation/statistic/attribution (gravest — Ground Rule 6) |
| `LOG` | Logical / inferential | non-sequitur, wrong causal direction, unfalsifiable-as-stated |
| `EVID` | Evidential | missing control, cherry-pick, over-claim beyond data |
| `FRAME` | Framing / scope | strawman, scope-creep, buried assumption, vantage blind spot (D-005) |
| `CONS` | Consistency | contradicts another output, stale cross-reference, count mismatch |
| `MEAN` | Meaning-boundary | measures the measurable and declares the unmeasurable handled (§7 error) |

## Provenance (WHO/WHAT caught it) — the load-bearing field

| Code | Provenance | Counts toward "structure"? |
|---|---|---|
| `STRUCT-POS` | one position/persona catching another | **yes** |
| `STRUCT-LEARN` | a prior learning catching a new error (e.g. L-001 → C-007) | **yes** |
| `STRUCT-ADV` | the summoned adversary / devil's advocate | **yes** |
| `SOLO` | a single voice with no staged opposition | no |
| `EXT` | an external red-teamer | (separate line) |

If catches come predominantly from `SOLO`, the plurality is **cosmetic** (the C-006 nightmare)
and C is being falsified regardless of how impressive the apparatus looks.

## Coding rules

- Code **blind to arm** where feasible; ≥2 coders; report inter-coder agreement.
- One row per catch in `coding-sheet.csv`.
- Ambiguous severity rounds **down**; ambiguous provenance is **not** `STRUCT-*`.
- Freeze this file (record its hash) before any coding begins.
