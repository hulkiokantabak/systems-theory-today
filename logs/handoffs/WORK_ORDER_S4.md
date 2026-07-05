# WORK-ORDER — Session 4 (Chat → Code)

Version: 1.1 · Status: Ready for Code · Author-ratified: **yes** (A, B, C operationalizations + the living-document concept all ratified) · Last updated: Session 4

*The first real work-order under the Chat/Code shuttle (`docs/CHAT_CODE_WORKFLOW.md` §6a). Chat has taken the project as far as deliberation-in-a-single-context can safely go; this hands the executor the concrete build. Code executes **only what is ratified** — everything below is ratified except the items explicitly marked GATED, which Code prepares but does not run. Code closes by emitting a session digest (§6b of the workflow) back to Chat.*

---

## Context (what Chat just ratified)

- Theory A's operationalization (`outputs/THEORY_A_OPERATIONALIZED.md`) — **ratified**.
- The living-document concept (`docs/THE_LIVING_DOCUMENT.md`) — **ratified**.
- Theories B and C operationalized to the same falsifiable standard (`outputs/THEORY_B_OPERATIONALIZED.md`, `outputs/THEORY_C_OPERATIONALIZED.md`) — **ratified (author, Session 4)**.
- Decisions in force: multi-register memory (workflow §5); private repo + public website until ready (workflow §8, `THE_LIVING_DOCUMENT.md` §7); heavy Code gated on a *tested* operationalized claim.

Repo state at handoff: **32 files**; IDs reconcile (C-011, L-008, Q-012, D-006); all diagrams render; all cross-references resolve except the known template/illustrative placeholders.

## Files to create
- *(No canonical content files.)* Code's job here is infrastructure, not authorship. All substantive documents exist and are consistent.
- `README` at repo root may need a short "how this repo is built and run" preamble pointing at `docs/CHAT_CODE_WORKFLOW.md` — Code's discretion.

## Files to edit
- None required for consistency. If the static-site build needs front-matter or path adjustments, make them **non-destructively** and record them in the digest.

## Propagation targets (the ripple)
- None outstanding — Chat completed the Session-4 propagation (plan, metrics, README read-order, architecture tree, open questions). Code should **verify**, not redo.

## Tasks (ratified)

1. **Initialize the git repository — private.** From the current file tree (clean, Phase-2-ready per `ARCHITECTURE.md`). Private remains the *contribution* surface until the skeleton is ratified stable. Preserve the directory structure exactly (`docs/ panel/ outputs/ logs/ logs/handoffs/ viz/`).
2. **Stand up the public reading website.** Static-site build over `docs/` + the outputs and the frontier, using the author's proven Eleventy → GitHub Pages pattern. This is the *reading* surface (public); it must render the Markdown and embed `viz/diagrams.html` (nine figures, one hand-authored SVG). Honor the design discipline (understated register; the design tokens already used in `viz/`).
3. **Adopt the shuttle mechanics.** Put the work-order and session-digest templates (`docs/CHAT_CODE_WORKFLOW.md` §6) into use; this file is the first work-order. Keep all handoffs under `logs/handoffs/` so the shuttle is versioned.
4. **Write the standing scripts** (the checks Chat has been running by hand — make them permanent, per L-006/L-007):
   - reference-integrity (every `*.md`/`*.html` link resolves; allow the known placeholders);
   - count-reconciliation against `METRICS.md` (files; C/L/Q/D IDs; diagrams);
   - Mermaid-parse + a "diagrams render" check;
   - a **structural-ripple** helper (given "X changed," list and update every dependent document).
5. **Build R3 — the gist of the whole.** Generate and maintain the standing one-paragraph compression of history + landscape + each theory + the current pressure-test set (workflow §5, register R3). Regenerate it as part of every digest. This is the artifact that keeps future Chat sessions inside their context budget.

## GATED — prepare, do not run (heavy-Code on-ramp)

6. **Scaffold the three pre-registered studies** — set up the data-ingestion and analysis skeletons, but **do not run analyses** until each pre-registration is finalized and ratified:
   - **B first (cheapest, data largely exists):** optimization-intensity (O) vs capture/pathology (P) across platforms + the de-optimization natural experiment (`THEORY_B_OPERATIONALIZED.md` §7).
   - **A (the flagship):** the ≈30-OECD-country R_c/R_a panel with the inequality control (`THEORY_A_OPERATIONALIZED.md` §7).
   - **C (runnable now, no data pipeline):** the designed-disagreement **ablation** with a pre-registered severity-weighted catch taxonomy (`THEORY_C_OPERATIONALIZED.md` §6) — this one needs discipline, not data, and can be scaffolded as a protocol + coding sheet.
   - Running any of these crosses **Gate 2** (heavy Code) and requires a fresh ratified work-order.

## Checks to run (before commit)
- File count == `METRICS.md` snapshot; C/L/Q/D IDs reconcile; every reference resolves (minus known placeholders); Mermaid blocks parse; `viz/diagrams.html` JS syntax-checks and all nine figures render.

## Commit
- Message: `Session 4: operationalize Theories B and C; initialize private repo + public reading site; first shuttle work-order.`
- Branch/PR: Code's convention. Tag the repo state as the ratified Session-4 baseline.

## Digest back to Chat (what Code returns)
- Per `docs/CHAT_CODE_WORKFLOW.md` §6b: what was created/edited; repo + site status and URLs; updated counts; any catches Code found during execution (e.g. a dangling reference the scripts caught); the regenerated R3 gist; and the suggested registers for the next Chat session.

---

*This work-order is itself the shuttle in motion — Chat deciding, Code executing, the repo remembering. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0*
