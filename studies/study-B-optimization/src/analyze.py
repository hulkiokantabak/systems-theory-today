"""Study B — analysis SKELETON (GATED; refuses to run).

Three pre-registered tests (THEORY_B_OPERATIONALIZED §7, PRE_REGISTRATION §4):
  (a) cross-system correlation of O with P (H1);
  (b) interrupted-time-series around de-optimization events (H2);
  (c) intent-vs-selection case coding (H3).
Every test also reports the falsification verdict (§5) it would return.

Status: scaffold · Session 4
"""
from __future__ import annotations
import sys

GATE_NOTICE = (
    "[GATED] Study B analysis is a scaffold. It does not run in this session.\n"
    "   Open the gate with a finalized, author-ratified pre-registration + a fresh\n"
    "   heavy-Code work-order, then implement the tests below. See studies/README.md.\n"
)


def test_cross_system(o_table, p_table):  # H1
    raise NotImplementedError("Gated scaffold: OLS/robust corr of O~P with controls.")


def test_natural_experiment(events, p_panel):  # H2
    raise NotImplementedError("Gated scaffold: interrupted time-series around events.")


def code_intent_vs_selection(cases):  # H3
    raise NotImplementedError("Gated scaffold: verdict per curated case.")


def main(argv: list[str]) -> int:
    if "--gate-passed" not in argv:
        print(GATE_NOTICE)
        return 0
    raise NotImplementedError("Gated scaffold: implement under a ratified heavy-Code work-order.")


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
