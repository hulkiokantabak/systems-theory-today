# FROZEN — Study B pipeline hashes (pre-registration integrity record)

Frozen: Session 4e (Code) · Pre-registration: `PRE_REGISTRATION.md` v0.3 (ratified) · Work-order: `WORK_ORDER_HEAVY_B.md` (ratified)

> **The whole game (pre-registration discipline):** the analysis code is frozen and hashed **before** any outcome (P) is read. Because **no real data exists and none will be provided** (catch C-017), no outcome has been or will be read here — so the freeze is trivially clean: this pipeline is committed *in advance* of any data. If a data-capable, author-ratified session ever runs Study B, it must run **exactly this code** (verify these hashes) and record its run against this freeze; changing the analysis after seeing data voids the test.

## SHA-256 (`sha256sum src/*.py`)

| File | SHA-256 |
|---|---|
| `src/ingest.py`   | `b996c82642e4bf9d413e8f2db7ae6298a0d28e47c59aba393fa97f913ed9e8a5` |
| `src/indices.py`  | `68f0b4985a5bdde1b140c12a2c1e36cf8bcce5df82730fc8d33b453732d4e698` |
| `src/analyze.py`  | `128e5b7aaecf3ed0cf736413e54adeada0bb65dcd259c94c7201d6b739b3f0fe` |
| `src/selftest.py` | `a028cda3f998f66faa8e2ce7ca8da2641c5b3d998cdd287c5d9ab0eacdb8efa5` |

Recompute with: `sha256sum src/ingest.py src/indices.py src/analyze.py src/selftest.py`

## What is frozen (faithful to `PRE_REGISTRATION.md` v0.3, ratified)

- **O** = equal-weighted mean of the **3 retained** ordinal proxies (objective-function, personalization-depth, autonomy-from-user-control); iteration-speed **DROPPED** (no reproducible source).
- **P** = equal-weighted mean of the retained proxies (problematic-use, platform-specific misinformation-diffusion); affective-polarization used **H2-event-context only**; well-being **CONTESTED/labeled**, never composited.
- **Non-circularity:** every O feature is `input/parameter`, every P feature is `outcome`, no source feeds both — `assert_non_circularity()` (falsifier #4).
- **Tests:** **H2** (ITS / labeled before-after, ±12-month window, P-frequency gate) → **H3** (divergence-case classifier with an anti-rigging guard) → **H1** (descriptive, confounds named, non-identifying). Each emits its §5 falsifier verdict; a **null is a first-class result**.
- **Zero external dependencies** (Python 3 stdlib only), so the frozen code runs anywhere without network or `pip`.

*Author: Hulki Okan Tabak — with Claude · License: code MIT.*
