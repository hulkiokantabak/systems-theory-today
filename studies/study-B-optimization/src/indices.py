"""Study B — index construction for O (optimization intensity) and P (capture/pathology).

Implements the PRE-REGISTERED normalization + compositing rule
(PRE_REGISTRATION.md v0.3 §2-§3, WORK_ORDER_HEAVY_B.md §2):

  * O = equal-weighted mean of the THREE retained normalized ordinal O-proxies
        (objective-function, personalization-depth, autonomy-from-user-control).
        Iteration-speed is DROPPED (no reproducible source) — never composited.
  * P = equal-weighted mean of the retained normalized P-proxies
        (problematic-use, platform-specific misinformation-diffusion).
        Demoted proxies are handled EXACTLY per §2:
          - affective-polarization is used ONLY in H2 event context (see analyze.py),
            NEVER in a generic per-platform P composite;
          - well-being is labeled CONTESTED and reported with an effect-size range,
            NEVER composited into a generic per-platform P score.
  * O ∩ P = ∅ (non-circularity, falsifier #4): every O feature is source-kind
        'input/parameter', every P feature is source-kind 'outcome', and no single
        source id may feed both O and P. `assert_non_circularity` fails LOUDLY if violated.

INTEGRITY NOTE. This module contains NO data. It is the *code that would compute the
pre-registered quantities IF real data existed*. It must never invent, recall, or
fabricate any proxy value, O-score, P-score, or result. Real inputs arrive only from
`data/interim/` (produced by ingest.py from `data/raw/`), which is empty and stays empty.

Zero external dependencies — Python 3 standard library only.
"""
from __future__ import annotations

import math
from dataclasses import dataclass

# The one loud banner every SYNTHETIC fixture file and every self-test output must carry.
SYNTHETIC_BANNER = "SYNTHETIC — pipeline self-test ONLY — NOT real data — NOT a study result"


# =============================================================================
# Hand-rolled statistics (stdlib only — no numpy/scipy)
# =============================================================================

def mean(xs: list[float]) -> float:
    xs = list(xs)
    if not xs:
        raise ValueError("mean() of empty series")
    return math.fsum(xs) / len(xs)


def pvariance(xs: list[float]) -> float:
    """Population variance (ddof=0) — matches numpy/scipy zscore default."""
    xs = list(xs)
    if not xs:
        raise ValueError("pvariance() of empty series")
    mu = mean(xs)
    return math.fsum((x - mu) ** 2 for x in xs) / len(xs)


def pstdev(xs: list[float]) -> float:
    """Population standard deviation (ddof=0)."""
    return math.sqrt(pvariance(xs))


def svariance(xs: list[float]) -> float:
    """Sample variance (ddof=1)."""
    xs = list(xs)
    n = len(xs)
    if n < 2:
        raise ValueError("svariance() needs >= 2 points")
    mu = mean(xs)
    return math.fsum((x - mu) ** 2 for x in xs) / (n - 1)


def sstdev(xs: list[float]) -> float:
    """Sample standard deviation (ddof=1)."""
    return math.sqrt(svariance(xs))


def zscore_series(xs: list[float]) -> list[float]:
    """Standardize a whole series to its OWN history (mean 0, population sd 1).

    A constant series has undefined z-scores; we return zeros and the caller is
    expected to flag it (never fabricate spread that is not in the data).
    """
    xs = list(xs)
    sd = pstdev(xs)
    mu = mean(xs)
    if sd == 0.0:
        return [0.0 for _ in xs]
    return [(x - mu) / sd for x in xs]


def zscore_last(xs: list[float]) -> float:
    """z-score of the MOST RECENT value relative to the series' own history.

    This is the pre-registered 'z-score to its own history' read for a snapshot
    (e.g. the event-time / current value of a per-(unit,proxy) time series).
    """
    xs = list(xs)
    if not xs:
        raise ValueError("zscore_last() of empty series")
    sd = pstdev(xs)
    if sd == 0.0:
        return 0.0
    return (xs[-1] - mean(xs)) / sd


def index_to_base(xs: list[float], base_pos: int = 0, scale: float = 100.0) -> list[float]:
    """Index a series to a base-year value (base = `scale`, default 100)."""
    xs = list(xs)
    if not xs:
        raise ValueError("index_to_base() of empty series")
    base = xs[base_pos]
    if base == 0.0:
        raise ValueError("index_to_base() base value is 0 (cannot index)")
    return [x / base * scale for x in xs]


def sign_correct(xs: list[float], sign: int) -> list[float]:
    """Multiply by +1/-1 so that higher = MORE of the construct."""
    if sign not in (1, -1):
        raise ValueError("sign must be +1 or -1")
    return [x * sign for x in xs]


def pearson(xs: list[float], ys: list[float]) -> float:
    """Pearson product-moment correlation, computed by hand."""
    xs, ys = list(xs), list(ys)
    if len(xs) != len(ys):
        raise ValueError("pearson() length mismatch")
    if len(xs) < 2:
        raise ValueError("pearson() needs >= 2 points")
    mx, my = mean(xs), mean(ys)
    num = math.fsum((x - mx) * (y - my) for x, y in zip(xs, ys))
    dx = math.sqrt(math.fsum((x - mx) ** 2 for x in xs))
    dy = math.sqrt(math.fsum((y - my) ** 2 for y in ys))
    if dx == 0.0 or dy == 0.0:
        raise ValueError("pearson() undefined: a series has zero variance")
    return num / (dx * dy)


# =============================================================================
# Pre-registered proxy registry (FIXED before any outcome is examined)
# =============================================================================

# Normalization methods a proxy may declare.
NORM_ZSCORE = "zscore_to_own_history"
NORM_INDEX = "index_to_base_year"


@dataclass(frozen=True)
class Proxy:
    """A pre-registered proxy.

    source_kind is the non-circularity tag:
      * O proxies MUST be 'input/parameter' (measured from process/inputs);
      * P proxies MUST be 'outcome' (measured from realized outcomes).
    source_id is the reproducible-source identifier. No single source_id may
    appear in both the O set and the P set (that is falsifier #4).
    sign = +1/-1 sign-correction so that higher = more of the construct.
    """
    key: str
    domain: str          # 'O' or 'P'
    source_kind: str     # 'input/parameter' (O) | 'outcome' (P)
    source_id: str
    sign: int            # +1 or -1
    norm: str            # NORM_ZSCORE | NORM_INDEX
    status: str          # 'retained' | 'demoted:event-only' | 'demoted:contested-labelled'
    description: str


# --- O: three retained proxies (equal weight); iteration-speed DROPPED (not present). ---
O_PROXIES: list[Proxy] = [
    Proxy(
        key="objective_function",
        domain="O", source_kind="input/parameter",
        source_id="O_SRC:objective-function-disclosures",
        sign=+1, norm=NORM_ZSCORE, status="retained",
        description=("ordinal: primary optimization target engagement/time/DAU (high) "
                     "-> mixed -> human-centred metric (low). Source: engineering blogs, "
                     "exec testimony, SEC 10-K 'engagement' language, DSA Art.15/27 reports."),
    ),
    Proxy(
        key="personalization_depth",
        domain="O", source_kind="input/parameter",
        source_id="O_SRC:dsa-art27-recommender-params",
        sign=+1, norm=NORM_ZSCORE, status="retained",
        description=("ordinal: chronological-only (low) -> ranked, limited personalization "
                     "(mid) -> per-user ML 'For You' (high). Source: DSA Art.27 recommender-"
                     "parameter disclosures; platform documentation."),
    ),
    Proxy(
        key="autonomy_from_user_control",
        domain="O", source_kind="input/parameter",
        source_id="O_SRC:dsa-art38-nonprofiling-and-settings",
        sign=+1, norm=NORM_ZSCORE, status="retained",
        description=("ordinal: no user ranking control (high O) -> opt-out available -> "
                     "chronological default / granular controls (low O), sign-corrected so "
                     "higher = more autonomy-from-user. Source: settings docs; DSA Art.38 "
                     "non-profiling-option availability."),
    ),
]

# --- P: retained proxies (equal weight). ---
P_PROXIES_RETAINED: list[Proxy] = [
    Proxy(
        key="problematic_use",
        domain="P", source_kind="outcome",
        source_id="P_SRC:problematic-use-studies",
        sign=+1, norm=NORM_ZSCORE, status="retained",
        description=("validated compulsive-use scales (e.g. Bergen Social Media Addiction "
                     "Scale) and/or published session/return metrics, per platform. "
                     "Source: peer-reviewed problematic-use studies & meta-analyses. "
                     "Self-report caveat travels with the value."),
    ),
    Proxy(
        key="misinfo_diffusion",
        domain="P", source_kind="outcome",
        source_id="P_SRC:diffusion-studies",
        sign=+1, norm=NORM_ZSCORE, status="retained",
        description=("false-vs-true spread differential, PLATFORM-SPECIFIC only. "
                     "Source: peer-reviewed diffusion studies (e.g. Vosoughi, Roy & Aral "
                     "2018 for Twitter). Kept only where platform-specific data exists; "
                     "coverage gaps are noted, never filled."),
    ),
]

# --- P: demoted proxies. NOT in the generic per-platform P composite. ---
#   affective_polarization -> used ONLY in H2 event context (analyze.py), and only where
#     a study links it to the specific platform/event.
#   wellbeing -> labeled CONTESTED, reported as an effect-size RANGE with the Haidt/Odgers
#     dispute stated; never collapsed to a single generic score.
P_PROXIES_DEMOTED: list[Proxy] = [
    Proxy(
        key="affective_polarization",
        domain="P", source_kind="outcome",
        source_id="P_SRC:polarization-surveys",
        sign=+1, norm=NORM_ZSCORE, status="demoted:event-only",
        description=("feeling-thermometer series (ANES / Eurobarometer-type). SOCIETAL, "
                     "not per-platform. Used ONLY inside an H2 event window where a study "
                     "ties it to the specific platform/event. NEVER in a generic P score."),
    ),
    Proxy(
        key="wellbeing",
        domain="P", source_kind="outcome",
        source_id="P_SRC:wellbeing-studies",
        sign=+1, norm=NORM_ZSCORE, status="demoted:contested-labelled",
        description=("use-associated well-being change. CONTESTED (Haidt vs Odgers). "
                     "Reported as an effect-size RANGE with the dispute stated; NEVER "
                     "composited into a generic per-platform P score."),
    ),
]

# Convenience views.
ALL_P_PROXIES: list[Proxy] = P_PROXIES_RETAINED + P_PROXIES_DEMOTED
O_PROXY_KEYS = [p.key for p in O_PROXIES]
P_RETAINED_KEYS = [p.key for p in P_PROXIES_RETAINED]


# =============================================================================
# Normalization dispatch
# =============================================================================

def normalize_series(series: list[float], proxy: Proxy, base_pos: int = 0) -> list[float]:
    """Normalize one proxy's own history per its declared method, then sign-correct."""
    if proxy.norm == NORM_ZSCORE:
        normed = zscore_series(series)
    elif proxy.norm == NORM_INDEX:
        normed = index_to_base(series, base_pos=base_pos)
    else:
        raise ValueError(f"unknown normalization method: {proxy.norm!r}")
    return sign_correct(normed, proxy.sign)


def normalized_snapshot(series: list[float], proxy: Proxy) -> float:
    """The normalized, sign-corrected value at the analysis time point (latest).

    For zscore: z of the latest value vs its own history.
    For index-to-base: the latest indexed value.
    """
    if proxy.norm == NORM_ZSCORE:
        return zscore_last(series) * proxy.sign
    elif proxy.norm == NORM_INDEX:
        return index_to_base(series)[-1] * proxy.sign
    raise ValueError(f"unknown normalization method: {proxy.norm!r}")


# =============================================================================
# Composite construction (equal weights)
# =============================================================================

def equal_weights(proxies: list[Proxy]) -> dict[str, float]:
    if not proxies:
        raise ValueError("cannot weight an empty proxy set")
    w = 1.0 / len(proxies)
    return {p.key: w for p in proxies}


def build_composite(
    proxies: list[Proxy],
    normalized_by_proxy: dict[str, dict[str, float]],
    weights: dict[str, float] | None = None,
) -> dict[str, float]:
    """Equal-weighted (default) mean composite per unit.

    `normalized_by_proxy` maps proxy_key -> {unit -> normalized snapshot value}.
    Returns {unit -> composite}. A unit missing a proxy uses re-normalized weights
    over the proxies it DOES have (never imputes a fabricated value).
    """
    keys = [p.key for p in proxies]
    for k in keys:
        if k not in normalized_by_proxy:
            raise ValueError(f"missing normalized values for proxy {k!r}")
    w = weights or equal_weights(proxies)

    units: set[str] = set()
    for k in keys:
        units.update(normalized_by_proxy[k].keys())

    out: dict[str, float] = {}
    for u in sorted(units):
        num = 0.0
        wsum = 0.0
        for k in keys:
            if u in normalized_by_proxy[k]:
                num += w[k] * normalized_by_proxy[k][u]
                wsum += w[k]
        if wsum == 0.0:
            continue  # no data for this unit — omit, never fabricate
        out[u] = num / wsum
    return out


def build_O(normalized_by_proxy: dict[str, dict[str, float]]) -> dict[str, float]:
    """O composite from the THREE retained O-proxies, equal weight."""
    return build_composite(O_PROXIES, normalized_by_proxy)


def build_P(normalized_by_proxy: dict[str, dict[str, float]]) -> dict[str, float]:
    """Generic per-platform P composite from the RETAINED P-proxies ONLY.

    Demoted proxies (affective-polarization, well-being) are intentionally excluded
    here — they are handled in H2 event context / as a CONTESTED range, per §2.
    """
    return build_composite(P_PROXIES_RETAINED, normalized_by_proxy)


# =============================================================================
# O ∩ P = ∅ non-circularity check (falsifier #4) — an explicit, loud assertion
# =============================================================================

class NonCircularityError(AssertionError):
    """Raised when the input/outcome separation between O and P is violated."""


def assert_non_circularity(
    o_proxies: list[Proxy] | None = None,
    p_proxies: list[Proxy] | None = None,
) -> dict[str, object]:
    """Fail LOUDLY if the O/P separation is violated.

    Enforces, per PRE_REGISTRATION.md §2 / WORK_ORDER_HEAVY_B.md §4:
      1. every O proxy is source-kind 'input/parameter';
      2. every P proxy is source-kind 'outcome';
      3. NO single source id feeds both O and P.
    Returns a small report dict on success (for logging in the reproducibility note).
    """
    o_proxies = O_PROXIES if o_proxies is None else o_proxies
    p_proxies = ALL_P_PROXIES if p_proxies is None else p_proxies

    for p in o_proxies:
        if p.domain != "O":
            raise NonCircularityError(f"O set contains non-O proxy {p.key!r} (domain={p.domain})")
        if p.source_kind != "input/parameter":
            raise NonCircularityError(
                f"O proxy {p.key!r} is not source-kind 'input/parameter' "
                f"(got {p.source_kind!r}) — O must be measured from inputs.")
    for p in p_proxies:
        if p.domain != "P":
            raise NonCircularityError(f"P set contains non-P proxy {p.key!r} (domain={p.domain})")
        if p.source_kind != "outcome":
            raise NonCircularityError(
                f"P proxy {p.key!r} is not source-kind 'outcome' "
                f"(got {p.source_kind!r}) — P must be measured from outcomes.")

    o_sources = {p.source_id for p in o_proxies}
    p_sources = {p.source_id for p in p_proxies}
    overlap = o_sources & p_sources
    if overlap:
        raise NonCircularityError(
            "NON-CIRCULARITY VIOLATED (falsifier #4): the following source id(s) feed "
            f"BOTH O and P: {sorted(overlap)}. O (inputs) and P (outcomes) must not share "
            "a source.")

    return {
        "ok": True,
        "o_sources": sorted(o_sources),
        "p_sources": sorted(p_sources),
        "overlap": [],
        "note": "O∩P = ∅ (input/parameter vs outcome; no shared source id).",
    }


if __name__ == "__main__":
    # Running this module standalone only self-checks the (data-free) invariants.
    import sys as _sys
    try:
        _sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass
    rep = assert_non_circularity()
    print("indices.py — pre-registered proxy registry loaded (NO DATA).")
    print(f"  O proxies (retained, equal weight): {O_PROXY_KEYS}")
    print(f"  P proxies (retained, equal weight): {P_RETAINED_KEYS}")
    print(f"  P proxies (demoted, NOT composited): "
          f"{[p.key + ' [' + p.status + ']' for p in P_PROXIES_DEMOTED]}")
    print(f"  Non-circularity check: {rep['note']}")
    print("  (This module holds no data and produces no study result.)")
