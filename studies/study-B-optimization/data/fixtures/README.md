# data/fixtures/ — SYNTHETIC self-test fixtures (TRACKED on purpose)

**SYNTHETIC — pipeline self-test ONLY — NOT real data — NOT a study result**

Unlike `data/raw/`, `data/interim/`, and `data/processed/` (which are **git-ignored** so
that no real data or outputs ever enter git), this `data/fixtures/` directory **is tracked**.
It contains ONLY tiny, obviously-schematic, hand-computable fixtures whose sole job is to
let `src/selftest.py` prove the pipeline **runs and computes the pre-registered quantities
correctly**. They are unit-test fixtures, never findings.

Every fixture file carries the banner above in its `__SYNTHETIC_BANNER__` field, and
`src/selftest.py` refuses to load any fixture that does not carry it.

The real-data path (`ingest.py` -> `indices.py` -> `analyze.py`, reading `data/raw|interim|
processed/`) **never reads this directory**. When `data/raw/` is empty, the pipeline reports
what real data each proxy needs and exits without a result — it does not fall back to these
fixtures.
