# WORK-ORDER — Heavy Code: Study B (Optimization Intensity O → Capture/Pathology P)

Author-ratified: **YES (author, Session 4d).** Running this crosses **Gate 2 (heavy Code)** (`docs/DIAGRAMS.md` §7) — and Gate 2 is now **open** (both preconditions met).
Updated by: Chat · Session 4d · Ratified: author, Session 4d · Supersedes: Code's v1.1 candidate (Session 4c) · Status: **RATIFIED — Gate 2 open. Executed Session 4e; result: no empirical run (no external data, and none will come) — see `RUN_STATUS.md`.**
Source: `outputs/THEORY_B_OPERATIONALIZED.md` · Pre-registration: `PRE_REGISTRATION.md` **v0.3 (ratified)** · Sources: `SOURCES.md`

> This carries the prepared v1.1 forward and folds in the panel's Session-4d changes. Where this and v1.1 differ, **this governs**; everything in v1.1 not contradicted here still holds.

## 0. What changed from v1.1 (the deltas Code must honor)

1. **H2 is the primary test, not H1.** Build and report H2 (within-unit ITS around de-optimization events) and H3 (divergence cases) as the **inferential core**; render H1 as a **descriptive scatter with confounds named**, explicitly *not* identifying (n≈6). Do not lead the report with H1.
2. **O composite has three proxies, not four** — objective-function, personalization-depth, autonomy-from-user-control. **Iteration-speed is DROPPED** (no reproducible source); it may appear only as a qualitative annotation, never in the composite.
3. **P proxies are keeps + demotions** (`PRE_REGISTRATION.md` §2): problematic-use and platform-specific misinformation-diffusion are **kept**; societal affective-polarization is used **only in H2 event context**; well-being is **labeled CONTESTED** and reported with an effect-size range and the Haidt/Odgers dispute noted. Do not composite the demoted proxies as generic per-platform P scores.
4. **Non-circularity is a build-time invariant:** every O feature must derive from a documented input/parameter; every P feature from a measured outcome. Assert this separation in code (a check that no source feeds both O and P) and in the reproducibility note.
5. **P-frequency gate on H2:** run ITS only where a sufficiently high-frequency, platform-attributable P series exists around the event; otherwise emit a labeled, lower-power before/after with an explicit power caveat. Do not manufacture frequency the data lacks.

## 1. Preconditions (all must hold before any code runs)

1. `PRE_REGISTRATION.md` **v0.3** finalized and **author-ratified** — §4.1–4.4 (units, events, case rule, proxy→source bindings) and the §0 reweighting fixed **before** any P is examined.
2. This work-order **author-ratified**.
3. `SOURCES.md` pinned: each source has an access date + licence; only reproducible sources used; unreproducible proxies stay dropped.
4. `npm run check` green at the starting commit.

## 2. Files to create / fill (heavy-Code session only)

- `src/ingest.py` — pull the **ratified** sources into `data/raw/` (git-ignored); normalize into `data/interim/`; record source hashes + access dates. Sources per `PRE_REGISTRATION.md` §2 (DSA Art. 27/38 disclosures, engineering blogs, testimony, SEC filings for O; problematic-use / diffusion / well-being studies for P).
- `src/indices.py` — build **O** from the **three** retained proxies and **P** from the retained/demoted proxies exactly per the pre-registration; normalize within domain, sign-correct, apply equal weights; write `data/processed/`. Encode the O∩P = ∅ non-circularity check.
- `src/analyze.py` — run **H2 first** (ITS or labeled before/after around each fixed event, ±12-month window), then **H3** (blind-coded divergence cases), then **H1** (descriptive scatter, confounds named). Write figures/tables to `outputs/` (git-ignored).
- `requirements.txt` — pin deps actually used; isolated env for that session.

## 3. Discipline (inherited + reinforced)

- **Pre-registration hash recorded before outcomes.** Freeze `src/*.py`, hash them, commit the hash **before** `analyze.py` reads any P. This is the whole game.
- **Robustness reported, not hidden.** Alternative weightings/proxy sets as robustness checks; if reasonable alternatives materially move the result → measurement-artifact flag (falsifier #4).
- **Falsifiers are real results.** Null/reversed H1, **null H2 (the primary test)**, or intent-beats-selection H3 **falsify** B — logged as such, not smoothed. A null is informative.
- **Preserved dissent travels with the result.** Attach `PRE_REGISTRATION.md` §9 (Luhmann/Heidegger/Kant/Le Guin/Nietzsche) to any write-up; the Luhmann "selection-differential vs intensity" objection is flagged as a possible future re-operationalization of O.
- **Vantage named** (D-005). **No data in git** (`data/**`, `outputs/**` git-ignored).

## 4. Checks to run (that session)

- `npm run check` still green (study changes no canonical content).
- Pre-registration hash committed **before** any outcome commit.
- Non-circularity check passes (no source feeds both O and P).
- Reproducibility note written: exact sources, access dates, code hashes, and — new — a per-proxy frequency note (which H2 events supported ITS vs degraded to before/after).

## 5. Propagation — only when a real result exists

- `docs/METRICS.md` §4 coverage: D2 / S2 move from "partial" toward **tested** — **only** on a genuine result; ripple to `site/_data/facts.js`; re-run `npm run check`.
- Log catches; distil learnings; a null updates Theory B's status honestly.
- Regenerate **R3** (Theory B paragraph gains a *tested* line) + dashboard; append a cooperation-log entry + session digest.
- **Log the recommended roster catch** (`PRE_REGISTRATION.md` §10): the panel lacks a standing measurement/causal-inference seat; propose adding Campbell (+ Pearl/Rubin) — for the author to ratify.

## 6. What this work-order does NOT authorize

- It does **not** run now — no data pulled, no index built, no outcome examined.
- It does **not** finalize the pre-registration (a Chat/author act) or open Gate 2.
- It touches **no canonical content** and does not change the file baseline (lives under `studies/`).

---

*Ratified (author, S4d); Gate 2 open; executed S4e — no data, no empirical result (`RUN_STATUS.md`). Author: Hulki Okan Tabak — with Claude · License: code MIT · docs CC BY-SA 4.0.*
