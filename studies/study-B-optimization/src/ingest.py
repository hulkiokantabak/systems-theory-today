"""Study B — data ingestion SKELETON (GATED: does not run analyses or pull data).

Turns the candidate sources in ../SOURCES.md into local tables under ../data/raw/.
Every fetch is a stub: the functions describe *what* to pull and *how* to shape it,
but the entry point refuses to execute until the gate is passed (a finalized,
author-ratified pre-registration + a fresh heavy-Code work-order).

Run only after the gate opens:  python ingest.py --gate-passed
Status: scaffold · Session 4
"""
from __future__ import annotations
import sys
from pathlib import Path

DATA_RAW = Path(__file__).resolve().parent.parent / "data" / "raw"

GATE_NOTICE = (
    "[GATED] This is a scaffold (WORK_ORDER_S4 task 6). No data is ingested and no\n"
    "   analysis is run in this session. Running study B crosses Gate 2 (heavy Code)\n"
    "   and requires a finalized, author-ratified pre-registration + a fresh work-order.\n"
    "   See studies/README.md and studies/study-B-optimization/PRE_REGISTRATION.md.\n"
)


def fetch_platform_optimization_signals() -> None:
    """Assemble O-proxy inputs (objective, personalization depth, iteration speed,
    ranking-control availability) per platform/product-version. NOT IMPLEMENTED."""
    raise NotImplementedError("Gated scaffold: implement under a ratified heavy-Code work-order.")


def fetch_pathology_signals() -> None:
    """Assemble P-proxy inputs (compulsive-use, affective polarization, false/true
    spread differential, well-being decrements). NOT IMPLEMENTED."""
    raise NotImplementedError("Gated scaffold: implement under a ratified heavy-Code work-order.")


def fetch_deoptimization_events() -> None:
    """Assemble the natural-experiment event table (event, platform, date window,
    direction). NOT IMPLEMENTED."""
    raise NotImplementedError("Gated scaffold: implement under a ratified heavy-Code work-order.")


def main(argv: list[str]) -> int:
    if "--gate-passed" not in argv:
        print(GATE_NOTICE)
        return 0
    # Even with the flag, the fetchers are unimplemented on purpose in this scaffold.
    DATA_RAW.mkdir(parents=True, exist_ok=True)
    fetch_platform_optimization_signals()
    fetch_pathology_signals()
    fetch_deoptimization_events()
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
