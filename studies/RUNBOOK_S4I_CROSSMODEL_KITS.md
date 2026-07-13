# RUNBOOK — S4i cross-model kits (repo sibling of the Downloads copy)

*This is the in-repo copy of `RUNBOOK_S4I_CROSSMODEL_KITS.md` (the author-facing copy lives in Downloads beside the three kit zips). Kept here so the runbook survives a Downloads cleanup — the S4h round kept a repo sibling for the same reason. The archive names it references (`coding-kit-echo.zip`, `coding-kit-foxtrot.zip`, `criteria-review-kit.zip`) are the content-neutral names; the kit SOURCES live in `study-C-ablation/kit-detection-s4i/`, `study-C-ablation/kit-blue2-s4i/`, and `episode-unit/kit-criteria-redteam-s4i/`; hashes in `FROZEN_HASHES_S4I.md`.*

## Kit 1 — `coding-kit-echo.zip` (the DETECTION validation — dispatch NOW)

The catch-DETECTION repair's acceptance round: 20 gold segments + the new unitization guide; coders enumerate events only (no severities). This is the repair the blue round demanded (1% identification agreement; candidate L-016: anchoring a judgment's scale is not anchoring its detection).

1. Fresh chat per model; dispatch to **≥4 families** for attrition headroom — ≥3 parseable from ≥2 families make a run.
2. Write your one-line dispatch manifest BEFORE pasting (model, UI, timestamp, file-vs-zip).
3. Attach the zip (or paste all 22 files). Preamble only: "Please complete the coding task in INSTRUCTIONS.md."
4. Save each reply verbatim as `VERDICT_<model>_detection.md`.
5. Return the verdicts to Code. Scoring is mechanical (`study-C-ablation/src/score_detection_verdicts.mjs` — written and fixture-tested before this kit was sealed; floors in `study-C-ablation/detection-repair-s4i/SEALED_COMPANION_DETECTION.md`).

## Kit 2 — `coding-kit-foxtrot.zip` (the blue-v2 two-pass re-run — GATED; do NOT dispatch yet)

The ablation re-coding under BOTH validated instruments (enumerate per the unitization guide, then band per the severity guide). The frozen N=20 arms are byte-identical to the S4h blue kit.

**Dispatch ONLY after both gates clear (the R8 sequencing gate — sealed):**
- Gate A: kit 1's verdicts pass the sealed detection floors, AND
- Gate B: the author re-seals C-031 (candidate at `study-C-ablation/C031_RESEAL_CANDIDATE_S4I.md`).
Dispatching foxtrot early burns the frozen arms on an unvalidated instrument — they cannot be re-used once coders have seen them.

## Kit 3 — `criteria-review-kit.zip` (the EPISODE_UNIT criteria red-team — dispatch before the freeze)

Project-blind adversarial review of the draft episode criteria (`docs/EPISODE_UNIT.md` §4 gate 3 — queued before the freeze act). Fresh chats, ≥4 families; save replies as `VERDICT_<model>_criteria.md`. Code collates mechanically; no repair is applied in-house — the author cuts the external repairs in with the freeze (rules: `episode-unit/SEALED_COMPANION_CRITERIA_REDTEAM.md`).

## Standing rules (all kits)

Fresh chat per kit per model — never two kits in one chat (the DeepSeek cross-kit contamination lesson). Verbatim saves; MALFORMED never hand-repaired; a manifest line before each paste. Every kit's own filename is part of its blind (neutral names — do not rename). Nothing here fires any rung in either direction; the validation rounds are instrument acceptance only.

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
