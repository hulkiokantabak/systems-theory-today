"""Study A — analysis SKELETON (GATED; refuses to run).

Pre-registered tests (THEORY_A_OPERATIONALIZED §7, PRE_REGISTRATION §4):
  (a) cross-sectional G~symptoms (H1);
  (b) panel regression with inequality control + country & year fixed effects (H3);
  (c) lag/lead structure — does G lead? (H2);
  (d) robustness across alternative proxy sets / weightings.
Each reports the falsification verdict (§5) it would return.

Status: scaffold · Session 4
"""
from __future__ import annotations
import sys

GATE_NOTICE = (
    "[GATED] Study A analysis is a scaffold; it does not run in this session.\n"
    "   Open the gate with a finalized, author-ratified pre-registration + a fresh\n"
    "   heavy-Code work-order, then implement the panel model below. See studies/README.md.\n"
)


def cross_sectional(gap, outcome):  # H1
    raise NotImplementedError("Gated scaffold: cross-sectional corr of G with symptom composite.")


def panel_with_inequality_control(panel):  # H3 — the decisive discriminator vs Turchin's D3
    raise NotImplementedError("Gated scaffold: FE panel regression, symptoms ~ G + inequality.")


def lead_lag(gap, outcome):  # H2
    raise NotImplementedError("Gated scaffold: does G lead symptoms? (cross-correlation / Granger-style).")


def robustness(alt_specs):  # (d)
    raise NotImplementedError("Gated scaffold: re-run under alternative proxy sets/weights.")


def main(argv: list[str]) -> int:
    if "--gate-passed" not in argv:
        print(GATE_NOTICE)
        return 0
    raise NotImplementedError("Gated scaffold: implement under a ratified heavy-Code work-order.")


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
