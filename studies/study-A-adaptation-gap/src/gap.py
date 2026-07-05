"""Study A — R_c, R_a, and G = R_c - R_a construction SKELETON (GATED; no execution).

Implements the pre-registered normalization + compositing (THEORY_A_OPERATIONALIZED §3,
PRE_REGISTRATION §2-§3): normalize within domain, sign-correct inverse lags, equal-weight
composites, G on the normalized scale (report R_c/R_a alongside). Stubs until gated open.

Status: scaffold · Session 4
"""
from __future__ import annotations

# FIXED before outcomes (pre-registration). Inverse-lag proxies are sign-corrected.
RC_PROXIES = ["tech_adoption_speed", "digital_penetration_growth", "firm_turnover_rate"]
RA_PROXIES = ["regulatory_response_lag_inv", "trust_recovery_speed", "curriculum_update_lag_inv"]
INVERSE_LAG = {"regulatory_response_lag_inv", "curriculum_update_lag_inv"}


def normalize_within_domain(series) -> None:
    """z-score to own history (or index to base year). NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")


def sign_correct(series, is_inverse_lag: bool) -> None:
    """Flip inverse-lag proxies so higher = faster adaptation. NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")


def composite(proxies: list[str], normalized_table) -> None:
    """Equal-weighted mean of normalized proxies. NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")


def compute_gap(rc_table, ra_table) -> None:
    """G = R_c - R_a per country/year (report R_c / R_a alongside). NOT IMPLEMENTED (gated)."""
    raise NotImplementedError("Gated scaffold.")
