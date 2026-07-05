"""Study B — index construction SKELETON for O and P (GATED; no execution).

Implements the pre-registered normalization + compositing rule
(THEORY_B_OPERATIONALIZED §2–§3, PRE_REGISTRATION §2–§3). Weights default to equal;
alternative weightings are robustness checks, never the headline. All functions are
stubs until the gate opens.

Status: scaffold · Session 4
"""
from __future__ import annotations
from dataclasses import dataclass, field

# Proxy definitions are FIXED here before any outcome is examined (pre-registration).
O_PROXIES = ["objective_engagement_vs_human", "personalization_depth",
             "iteration_speed", "autonomy_from_human_ends"]
P_PROXIES = ["compulsive_use", "affective_polarization",
             "false_true_spread_differential", "wellbeing_decrement"]


@dataclass
class CompositeSpec:
    name: str
    proxies: list[str]
    weights: dict[str, float] = field(default_factory=dict)  # empty => equal weights

    def resolved_weights(self) -> dict[str, float]:
        if self.weights:
            return self.weights
        w = 1.0 / len(self.proxies)
        return {p: w for p in self.proxies}


O_SPEC = CompositeSpec("O", O_PROXIES)
P_SPEC = CompositeSpec("P", P_PROXIES)


def normalize_within_domain(series) -> None:
    """z-score each proxy to its own history (or index to a base year); sign-correct
    so higher = more of the construct. NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")


def build_composite(spec: CompositeSpec, normalized_table) -> None:
    """Weighted mean of the normalized proxies per the pre-registered spec.
    NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")
