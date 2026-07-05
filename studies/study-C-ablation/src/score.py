"""Study C — ablation scoring SKELETON (GATED; refuses to run).

Reads a completed coding-sheet.csv and computes, per arm: the severity-weighted catch
rate, the raw S3 (high-severity) count, catch provenance (fraction from the disagreement
STRUCTURE vs a SOLO voice — the load-bearing measure), and objection-retention. Then it
applies the pre-committed verdict (PROTOCOL §3) and prints the mandatory baseline caveat
(PROTOCOL §4, Q-012).

Only the parser is sketched; scoring is a stub until the gate opens.
Run only after the gate opens:  python score.py coding-sheet.csv --gate-passed
Status: scaffold · Session 4
"""
from __future__ import annotations
import csv
import sys
from pathlib import Path

SEVERITY_WEIGHT = {"S1": 1, "S2": 2, "S3": 3}
STRUCT_PROVENANCE = {"STRUCT-POS", "STRUCT-LEARN", "STRUCT-ADV"}

GATE_NOTICE = (
    "[GATED] Study C is runnable in principle (discipline, not data), but running the\n"
    "   ablation still crosses Gate 2 and needs a finalized, author-ratified protocol +\n"
    "   a fresh work-order. This scaffold does not score. See studies/README.md and\n"
    "   study-C-ablation/PROTOCOL.md.\n"
)
BASELINE_CAVEAT = (
    "NOTE (Q-012): ON and OFF arms are the same underlying model in different prompts.\n"
    "This measures whether a disagreement STRUCTURE beats an unstructured process\n"
    "(reasoner fixed) — NOT whether human plurality beats individual genius. Do not\n"
    "present the narrower result as the grand one.\n"
)


def load_rows(path: Path) -> list[dict]:
    """Parse the coding sheet, skipping comment (#) lines and the EXAMPLE row."""
    rows: list[dict] = []
    with path.open(newline="", encoding="utf-8") as fh:
        lines = [ln for ln in fh if not ln.lstrip().startswith("#")]
    for row in csv.DictReader(lines):
        if row.get("catch_id", "").startswith("EXAMPLE"):
            continue
        rows.append(row)
    return rows


def score(rows: list[dict]) -> dict:
    """Per-arm weighted catch rate, S3 count, structural provenance, objection-retention.
    NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold: implement under a ratified heavy-Code work-order.")


def verdict(scored: dict) -> str:
    """Apply the pre-committed either-way verdict (PROTOCOL §3). NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")


def main(argv: list[str]) -> int:
    if "--gate-passed" not in argv:
        print(GATE_NOTICE)
        return 0
    print(BASELINE_CAVEAT)
    args = [a for a in argv if not a.startswith("--")]
    path = Path(args[0]) if args else Path(__file__).resolve().parent.parent / "coding-sheet.csv"
    rows = load_rows(path)
    print(f"loaded {len(rows)} coded catch row(s) from {path.name}")
    print(verdict(score(rows)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
