"""Study A — data ingestion SKELETON (GATED: does not run or pull data).

Assembles the ≈30-OECD-country panel inputs for R_c, R_a, the symptom composite, and
the inequality control (THEORY_A_OPERATIONALIZED §7, PRE_REGISTRATION §2). Every fetch
is a stub; the entry point refuses to run until the gate is passed.

Run only after the gate opens:  python ingest.py --gate-passed
Status: scaffold · Session 4
"""
from __future__ import annotations
import sys
from pathlib import Path

DATA_RAW = Path(__file__).resolve().parent.parent / "data" / "raw"

GATE_NOTICE = (
    "[GATED] Study A is the heavy-Code trigger, but this is only a scaffold\n"
    "   (WORK_ORDER_S4 task 6). No data is ingested and no analysis runs here. Opening\n"
    "   the gate needs a finalized, author-ratified pre-registration + a fresh heavy-Code\n"
    "   work-order. See studies/README.md and study-A-adaptation-gap/PRE_REGISTRATION.md.\n"
)


def fetch_Rc_inputs() -> None:
    """technology-adoption speed + digital-penetration growth + firm-turnover. STUB."""
    raise NotImplementedError("Gated scaffold.")


def fetch_Ra_inputs() -> None:
    """regulatory-response lag (inv) + trust recovery + curriculum/skill lag (inv). STUB."""
    raise NotImplementedError("Gated scaffold.")


def fetch_symptom_inputs() -> None:
    """loneliness/anomie + populist vote share + trust decline + affective polarization. STUB."""
    raise NotImplementedError("Gated scaffold.")


def fetch_inequality_control() -> None:
    """Gini / top-income share / elite-overproduction proxy (the D3 discriminator). STUB."""
    raise NotImplementedError("Gated scaffold.")


def main(argv: list[str]) -> int:
    if "--gate-passed" not in argv:
        print(GATE_NOTICE)
        return 0
    DATA_RAW.mkdir(parents=True, exist_ok=True)
    fetch_Rc_inputs(); fetch_Ra_inputs(); fetch_symptom_inputs(); fetch_inequality_control()
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
