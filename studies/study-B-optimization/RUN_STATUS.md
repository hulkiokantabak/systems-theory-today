# STUDY B — RUN STATUS (honest terminal state, Session 4e)

Status: **GATE 2 OPEN (ratified) · PIPELINE BUILT + SELF-TESTED + FROZEN · NO EMPIRICAL RESULT (no external data; none will come) · NOTHING FABRICATED.**
Pre-registration: `PRE_REGISTRATION.md` v0.3 (author-ratified S4d) · Work-order: `WORK_ORDER_HEAVY_B.md` (author-ratified S4d) · Freeze: `FROZEN_HASHES.md`
Tractable H3 sub-test (documented cases + project-blind external cross-check, author-directed S4f): `APPROACH_B2_DOCUMENTED_CASES.md` — the O→P *quantitative* run below stays blocked, but B's **selection-not-design** integrity test is being run against the public record.

---

## What happened

Both of Study B's preconditions were met — the pre-registration is finalized + author-ratified, and the heavy-Code work-order is author-ratified — so **Gate 2 is legitimately open**, and Code attempted the run (Session 4e).

**Study B's instrument is external real-world data** (`PRE_REGISTRATION.md` §2): DSA Art. 27/38 recommender disclosures, SEC 10-K filings and engineering blogs for **O**; peer-reviewed problematic-use / misinformation-diffusion / well-being studies and ANES/Eurobarometer survey series for **P**; and a fixed set of dated de-optimization events for H2. The pre-registration itself names **"P-measurement is the binding constraint"** and **"B is O-easy, P-hard."**

**The available Code environment cannot obtain that data, and the author confirmed real data will not be supplied:**
- **no network** (`curl` to the outside world returns a connection failure / `http=000`);
- **no datasets** in the repo, and none provided ("no data in git");
- **no data-science stack** (pandas/scipy not installed, and no network to `pip` one).

A model can only "produce" O and P numbers here by **recalling them from training** — unpinned, unverifiable, non-blind, and stale. That is **fabrication**, and it is precisely the **Campbell's-Law corruption `PRE_REGISTRATION.md` §8 names as this study's chief risk** (*"when a measure becomes a target it gets gamed; the study's risk is the thing it studies"*). **So no O/P values were recalled, inferred, or invented. Study B has no empirical result, and none was fabricated** — logged as catch **C-017** → learning **L-012**.

## What WAS delivered (the honest, data-independent heavy-Code deliverable)

The genuinely achievable and correct contribution — the very thing pre-registration exists to secure — is a **frozen, reproducible analysis pipeline built before any outcome is seen**:

- **`src/indices.py`, `src/analyze.py`, `src/ingest.py`** — a faithful, **zero-dependency (Python 3 stdlib only)** implementation of the pre-registered methodology: **O** from the 3 retained ordinal proxies, **P** from the retained/demoted proxies (with the §2 drops/demotions honored), the **O∩P = ∅ non-circularity check** (falsifier #4), then **H2** (interrupted-time-series / labeled before-after around the fixed events, ±12-month window, with a P-frequency gate) → **H3** (the selection-vs-design divergence classifier, with an anti-rigging guard) → **H1** (descriptive scatter, confounds named, flagged non-identifying). Each test emits its §5 falsifier verdict; a **null is a first-class result**.
- **`SOURCES.md`** — the source table **pinned** per proxy, with access-date/licence deliberately **UNFILLED** (*"not accessed — filling them would imply access that has not happened"*).
- **`src/selftest.py`** — runs the whole pipeline on **clearly-labeled SYNTHETIC fixtures** (`data/fixtures/`, banner-marked *NOT real data — NOT a study result*) and asserts the math (**54/54 checks PASS**): exact ITS coefficient recovery, known-fixture → known-composite, demotion exclusion, a reportable null H2, the H3 anti-rigging guards, and the non-circularity guard. This validates the **code**, never producing a finding.
- **`FROZEN_HASHES.md`** — SHA-256 of the frozen `src/*.py`, recorded **before** any outcome (trivially clean — there is no outcome).
- **The real-data path refuses:** run against the empty `data/raw/`, `ingest.py` and `analyze.py` **exit cleanly with no result** — no fabrication, no fallback to fixtures.

*(One honest engineering caveat, flagged in-code: OLS significance uses a stdlib normal-approximation p-value, not a small-sample-t / autocorrelation-robust SE. It affects only the significance flag a real ITS would refine, never the estimated effect — and there is no real effect to estimate here.)*

## What this means for the theory and the project

- **Study B is not falsified and not confirmed — it is *instrument-built, world-untested*.** Theory B's status is unchanged: operationalized to a falsifiable standard, **not tested**. `docs/METRICS.md` §4 coverage for D2/S2 stays "partial" (moving toward "tested" requires a *genuine* result, per the work-order §5).
- **If a data-capable context ever exists** (a networked run with the datasets, or the author providing pinned data), running **exactly this frozen code** (verify `FROZEN_HASHES.md`) against real inputs would produce the pre-registered result with **zero remaining researcher degrees of freedom** — which is the entire point of freezing it now.
- The honest reckoning: this is a finding *about the project's reach* — a systems theory whose empirical test needs a data infrastructure the executor does not have. Recorded as **C-017 → L-012** (match a study's data needs to the executor's real access before scheduling a run), echoing the Study-C pilot's C-run-3 (the "no-Code study" can still need Code; the "no-data study" can't run without data).

## Preserved dissent (travels with this status; `PRE_REGISTRATION.md` §9)

**Luhmann** (measure spread/selection, not "intensity"); **Heidegger** (measuring the disease in its own terms); **Kant** (O is the *appearance* of the objective function, not the function); **Le Guin** (the unit set is Western Big Tech — D-005 — so any result would not generalize to "optimization" as such); **Nietzsche** (P captures behavioral pathology, never the loss of "why").

---

*Honest terminal state: pipeline frozen, world untested, nothing fabricated. Author: Hulki Okan Tabak — with Claude · License: code MIT · docs CC BY-SA 4.0.*
