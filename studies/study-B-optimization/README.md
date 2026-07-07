# Study B — Optimization Intensity (O) vs Capture/Pathology (P)

Status: **Pipeline implemented; NO real data, NO result.** The code is the *correct pipeline
that WOULD compute the pre-registered result IF real data existed* — it computes nothing from
memory and refuses to fabricate. Pre-registration: `PRE_REGISTRATION.md` **v0.3** (RATIFIED, author
S4d; Gate 2 open). Work-order: `WORK_ORDER_HEAVY_B.md` (ratified).

Turns `outputs/THEORY_B_OPERATIONALIZED.md` §7 into a runnable pipeline. **Zero external
dependencies — Python 3 standard library only** (z-scoring, means, correlation, OLS /
interrupted-time-series, and matrix algebra are all hand-rolled; see `requirements.txt`).

```
study-B-optimization/
├── PRE_REGISTRATION.md   # v0.3 — the authoritative methodology (§1-§5)
├── WORK_ORDER_HEAVY_B.md # heavy-Code commission (author-ratified: YES, S4d; Gate 2 open)
├── SOURCES.md            # PINNED source table (NOT accessed — no network; no real data)
├── requirements.txt      # ZERO external deps — stdlib only, by design
├── src/
│   ├── ingest.py         # data CONTRACT per proxy; loads data/raw/ -> data/interim/ IF present;
│   │                     #   refuses + prints the contract when data/raw/ is empty (it is)
│   ├── indices.py        # O (3 retained proxies) & P (retained only; demoted handled per §2);
│   │                     #   normalization + equal-weight composite + O∩P=∅ non-circularity check
│   ├── analyze.py        # H2 (ITS/before-after) FIRST, then H3 (divergence), then H1 (descriptive);
│   │                     #   each emits its §5 falsifier verdict; NULL is a first-class result
│   └── selftest.py       # runs the full pipeline on the SYNTHETIC fixtures and asserts the math
├── data/
│   ├── fixtures/         # TRACKED — SYNTHETIC self-test fixtures ONLY (loud banner in each)
│   └── {raw,interim,processed}/   # git-ignored (.gitkeep) — EMPTY; no real data, ever, here
└── outputs/              # git-ignored — self-test writes outputs/selftest/ (banner-marked)
```

## Running it

- **Self-test the CODE (no result, synthetic only):** `python src/selftest.py`
  (or `python src/analyze.py --selftest`). Asserts known-fixture → known composite,
  exact ITS coefficient recovery, the H2/H3/H1 verdicts (including a reportable NULL), and the
  non-circularity guard. Writes `outputs/selftest/` with the `SYNTHETIC — … — NOT a study
  result` banner. Exit 0 = PASS.
- **Real-data path (produces NOTHING here):** `python src/ingest.py` and `python src/analyze.py`
  detect that `data/raw/` / `data/processed/` are empty and **exit cleanly with no result** —
  no fabrication, no fallback to fixtures. `ingest.py` prints the exact data contract each proxy
  needs.

## Integrity invariants (built into the code)

- **No real data, no fabricated data, no result.** Nothing is recalled or invented; the real
  path refuses when `data/raw/` is empty.
- **O ∩ P = ∅ (falsifier #4).** Every O feature is `input/parameter`, every P feature is
  `outcome`, and no source id feeds both — asserted loudly in `indices.assert_non_circularity()`.
- **Demotions honored (§2).** Iteration-speed is DROPPED (not composited). Affective-polarization
  is H2-event-context only. Well-being is CONTESTED (effect-size range), never composited.
- **Falsifiers are real results (§5).** A null H2 (the primary test) is reported as a finding.

**Freeze + honest status (done, Session 4e):** `src/*.py` frozen + hashed (`FROZEN_HASHES.md`); the
honest terminal status is `RUN_STATUS.md`. The pre-registration and work-order are **author-ratified**
(Gate 2 open); a real outcome still requires **real external data**, which is unavailable and will not
come — so Study B has **no empirical result** and nothing was fabricated (catch C-017 → L-012).
