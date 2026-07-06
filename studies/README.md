# STUDIES — pre-registered empirical scaffolds (GATED)

Version: 0.1 · Status: **Scaffold only — GATED (do not run)** · Last updated: Session 4c

> ## ⛔ GATE
> These are **skeletons**, prepared under `WORK_ORDER_S4` task 6. **No analysis is run in this session, and no data is ingested.** Running any study crosses **Gate 2 (heavy Code)** in the path-to-Code decision tree (`docs/DIAGRAMS.md` §7) and requires a **fresh, author-ratified work-order** plus a **finalized pre-registration**. The scripts here refuse to run until that gate is passed (they print the gate notice and exit).

*Each candidate theory has been operationalized to a falsifiable standard (`outputs/THEORY_A_OPERATIONALIZED.md`, `..._B_...`, `..._C_...`). This directory turns each operationalization's "first study" section into a runnable-later scaffold: a pre-registration to finalize, a data-ingestion skeleton, and an analysis skeleton — so that when the gate opens, the heavy-Code session builds on a settled structure instead of starting cold.*

## The order (ratified)

The build order is **B → A → C**, deliberately cheapest-first:

| # | Study | Directory | Why this order | Needs |
|---|---|---|---|---|
| 1 | **B — Optimization intensity (O) vs capture/pathology (P)** | `study-B-optimization/` | **Cheapest; data largely already exists** (platform research, well-being studies, documented de-optimization events). B is the recommended first *empirical test* even though A is the flagship *theory*. | a data pipeline |
| 2 | **A — The adaptation gap (G = R_c − R_a)** | `study-A-adaptation-gap/` | The flagship. Needs a real ≈30-OECD-country panel with an inequality control — the heaviest data lift. | a data pipeline |
| 3 | **C — The designed-disagreement ablation** | `study-C-ablation/` | **Runnable now, no data pipeline** — needs discipline, not data. A protocol + a pre-registered severity-weighted catch taxonomy + a coding sheet. | discipline only |

## The discipline every study inherits

1. **Pre-registration before outcomes.** The proxy list, sign corrections, weights, composites, and hypotheses are fixed and published **before** any outcome variable is examined. This is the single guard that turns a composite index from a curve-fit into a test (`THEORY_A_OPERATIONALIZED.md` §3).
2. **Falsification conditions stated in advance.** Each `PRE_REGISTRATION.md` restates the theory's stated falsifiers; a null or reversed result is a real result.
3. **Robustness reported, not hidden.** Alternative proxy sets / weightings are reported as robustness checks; if reasonable alternatives materially change the result, that is evidence the quantity is a measurement artifact.
4. **Vantage named.** The OECD/large-Western-platform bias (D-005) is stated as a scope limit, not smoothed over.
5. **No data in git.** `data/raw`, `data/interim`, `data/processed`, and `outputs/` are git-ignored (kept by `.gitkeep`); `SOURCES.md` lists candidate sources without pulling them.

## Status of each pre-registration

Study **B**'s pre-registration is now a **FINALIZATION CANDIDATE** (Code-proposed specifics for author/Chat to ratify or amend; not yet finalized/ratified), and its first **heavy-Code work-order** is prepared and gated (`study-B-optimization/WORK_ORDER_HEAVY_B.md`, author-ratified: **NO**). Studies **A** and **C** remain **DRAFT — not finalized, not ratified.** Finalizing and ratifying a pre-registration is a Chat/author act; running it is a subsequent heavy-Code work-order. See each study's `PRE_REGISTRATION.md` / `PROTOCOL.md`.

---

*Author: Hulki Okan Tabak — with Claude · License: code MIT · docs CC BY-SA 4.0*
