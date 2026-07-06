# WORK-ORDER — Heavy Code: Study B (Optimization Intensity O → Capture/Pathology P)

Author-ratified: **NO — prepared proposal, awaiting author ratification.** Running this crosses **Gate 2 (heavy Code)** in the path-to-Code decision tree (`docs/DIAGRAMS.md` §7).
Prepared by: Code · Session 4c · Status: **GATED — does not run until ratified**
Source of claim: `outputs/THEORY_B_OPERATIONALIZED.md` · Pre-registration: `PRE_REGISTRATION.md` (finalization candidate v0.2) · Sources: `SOURCES.md`

> **This is the first heavy-Code work-order, emitted as a proposal so the author has a concrete thing to ratify.** It is *not executed*. No data is pulled, no index is built, no outcome is examined until **(a)** the pre-registration is finalized + author-ratified **and (b)** this work-order is author-ratified. Emitting it does not open the gate.

## 0. Why B first

B is the cheapest and fastest of the three studies — much of the input already exists (platform research, well-being studies, documented de-optimization events). A is the flagship *theory*; B is the recommended first *empirical test* (`outputs/THEORY_B_OPERATIONALIZED.md` §7; `../README.md`).

## 1. Preconditions (all must hold before any code runs)

1. `PRE_REGISTRATION.md` §7 finalized and **author-ratified** — units, de-optimization events, case-selection rule, and proxy→source bindings fixed **before** any P is examined.
2. This work-order **author-ratified** (a fresh ratified order, per the gate).
3. `SOURCES.md` pinned: each source has an access date + licence; only reproducible sources are used.
4. `npm run check` green at the starting commit (no canonical drift going in).

## 2. Files to create / fill (heavy-Code session only)

- `src/ingest.py` — implement the currently-gated ingestion: pull the ratified sources into `data/raw/` (git-ignored), normalize into `data/interim/`; record source hashes + access dates.
- `src/indices.py` — build the **O** and **P** composites from the pre-registered proxies (`PRE_REGISTRATION.md` §2): normalize each proxy within domain, sign-correct, apply the pre-declared weights; write `data/processed/`.
- `src/analyze.py` — run **H1** (cross-system O→P, controlling for audience/content type), **H2** (before/after P around de-optimization events, interrupted-time-series where possible), **H3** (documented intent-vs-selection case analysis); write figures/tables to `outputs/` (git-ignored).
- `requirements.txt` — pin the deps actually used; install in an isolated env for that session only.

## 3. Discipline (inherited from `../README.md` and the pre-registration)

- **Pre-registration hash recorded before outcomes.** Freeze `src/*.py` and hash them; commit the hash **before** `analyze.py` reads any P. Fixing proxies/composite after seeing outcomes voids the test.
- **Robustness reported, not hidden.** Alternative weightings/proxy sets as robustness checks; if reasonable alternatives materially move the result, that is evidence O is a measurement artifact (falsifier #4).
- **Falsifiers are real results.** A null/reversed H1, a null H2, or intent-beats-selection H3 **falsifies** B (`PRE_REGISTRATION.md` §5) — logged as such, not smoothed.
- **Vantage named.** Large-Western-platform bias (D-005) stated as a scope limit.
- **No data in git.** `data/**` and `outputs/**` stay git-ignored (kept by `.gitkeep`).

## 4. Checks to run (that session)

- `npm run check` still passes (the study changes no canonical content).
- The pre-registration hash is committed **before** any outcome commit.
- A reproducibility note is written: exact sources, access dates, code hashes.

## 5. Propagation — only when a real result exists

- `docs/METRICS.md` §4 coverage: D2 (optimization) and S2 (attention economy) move from "partial" toward **tested** — **only** on a genuine result; ripple to `site/_data/facts.js` coverage and re-run `npm run check`.
- Log any catches; distil learnings; a null result updates the theory's status honestly (Theory B is *falsifiable*, so a null is informative, not a failure).
- Regenerate **R3** (Theory B paragraph gains a *tested* line) and the dashboard; append a cooperation-log entry + a session digest.

## 6. What this work-order does NOT authorize

- It does **not** run now. It does not pull data, build indices, or examine outcomes.
- It does **not** finalize the pre-registration (a Chat/author act) or open Gate 2.
- It touches **no canonical content** and does not change the 34-file baseline (it lives under `studies/`, an excluded Code-layer directory).

---

*Prepared, gated, awaiting ratification. Author: Hulki Okan Tabak — with Claude · License: code MIT · docs CC BY-SA 4.0.*
