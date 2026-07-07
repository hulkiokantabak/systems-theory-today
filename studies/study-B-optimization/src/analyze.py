"""Study B — analysis: H2 (primary) -> H3 (integrity) -> H1 (descriptive).

Implements the pre-registered tests (PRE_REGISTRATION.md v0.3 §1, §4, §5;
WORK_ORDER_HEAVY_B.md §0, §2) in the REQUIRED ORDER, each emitting the pre-registered
FALSIFIER VERDICT it would return (§5). A NULL is a first-class, reportable result — the
verdict enum includes it; it is never an error or a smoothed-away non-event.

  H2 (PRIMARY — natural experiment). Interrupted-time-series (ITS, segmented regression)
     around each fixed de-optimization event with a +/-12-month window, GATED by P-series
     frequency: ITS only where a sufficiently high-frequency, platform-attributable P
     series exists; otherwise DEGRADE to a labeled lower-power before/after with a power
     caveat. Never manufacture frequency the data lacks.
  H3 (INTEGRITY — selection vs design). The §4.3 divergence-case verdict logic:
     classify documented intent vs documented pressure and return
     follows-pressure / follows-intent / ambiguous. The pool must admit B-FALSIFYING cases.
  H1 (DESCRIPTIVE — cross-section). Simple correlation of O with P across ~6 units,
     confounds NAMED, explicitly NOT identifying (n is small, confounds large).

INTEGRITY NOTE. This module contains NO data and computes NO study result here. It is the
*code that would compute the pre-registered quantities IF real data existed*. It must never
invent, recall, or fabricate any effect size, p-value, verdict, or case coding. Real inputs
arrive only from `data/processed/` (built by indices.py from ingest.py output); that path
is empty and stays empty, and `main()` REFUSES to fabricate when it is empty.

Zero external dependencies — Python 3 standard library only.
"""
from __future__ import annotations

import math
import sys
from dataclasses import dataclass
from pathlib import Path

# Same-package imports work both as `python analyze.py` (cwd=src) and `-m`.
try:
    from indices import mean, pearson
except ImportError:  # pragma: no cover - fallback for package-style import
    from .indices import mean, pearson  # type: ignore

PROCESSED_DIR = Path(__file__).resolve().parent.parent / "data" / "processed"

# --- Falsifier catalogue (PRE_REGISTRATION.md §5). ---
FALSIFIER_1 = "F#1: P rises independent of O"
FALSIFIER_2 = "F#2: de-optimization does nothing (null H2, the PRIMARY test)"
FALSIFIER_3 = "F#3: intent beats selection"
FALSIFIER_4 = "F#4: O not measurable non-circularly / alternatives move the result"

# --- Verdict enum values (a NULL is a real result). ---
V_SUPPORTS = "SUPPORTS-B"
V_NULL = "NULL"
V_REVERSED = "REVERSED"
V_FALSIFIES = "FALSIFIES-B"
V_AMBIGUOUS = "AMBIGUOUS"
V_DESCRIPTIVE = "DESCRIPTIVE-ONLY"

# H2 P-frequency gate thresholds.
ITS_MIN_PER_SIDE = 4                       # >= this many points each side for a 4-param ITS
HIGH_FREQ_CADENCES = {"daily", "weekly", "monthly"}   # 'annual'/'quarterly' -> before/after
ALPHA = 0.05                               # significance threshold for the normal-approx test
WINDOW_MONTHS = 12                         # pre-registered +/-12-month window


# =============================================================================
# Small-matrix linear algebra + OLS (hand-rolled; stdlib only)
# =============================================================================

def _transpose(M: list[list[float]]) -> list[list[float]]:
    return [list(col) for col in zip(*M)]


def _matmul(A: list[list[float]], B: list[list[float]]) -> list[list[float]]:
    Bt = _transpose(B)
    return [[math.fsum(a * b for a, b in zip(row, col)) for col in Bt] for row in A]


def _matvec(M: list[list[float]], v: list[float]) -> list[float]:
    return [math.fsum(a * b for a, b in zip(row, v)) for row in M]


def gauss_solve(A: list[list[float]], b: list[float]) -> list[float]:
    """Solve A x = b by Gaussian elimination with partial pivoting (square A)."""
    n = len(A)
    M = [list(A[i]) + [b[i]] for i in range(n)]
    for col in range(n):
        piv = max(range(col, n), key=lambda r: abs(M[r][col]))
        if abs(M[piv][col]) < 1e-15:
            raise ValueError("singular matrix in gauss_solve (design is rank-deficient)")
        M[col], M[piv] = M[piv], M[col]
        pivval = M[col][col]
        for r in range(n):
            if r == col:
                continue
            factor = M[r][col] / pivval
            if factor != 0.0:
                for c in range(col, n + 1):
                    M[r][c] -= factor * M[col][c]
    # After full Gauss-Jordan elimination M is diagonal; x[i] = rhs[i] / diag[i].
    return [M[i][n] / M[i][i] for i in range(n)]


def _inverse(A: list[list[float]]) -> list[list[float]]:
    """Inverse of a square matrix via Gauss-Jordan (used for coefficient SEs)."""
    n = len(A)
    M = [list(A[i]) + [1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    for col in range(n):
        piv = max(range(col, n), key=lambda r: abs(M[r][col]))
        if abs(M[piv][col]) < 1e-15:
            raise ValueError("singular matrix in _inverse")
        M[col], M[piv] = M[piv], M[col]
        pivval = M[col][col]
        M[col] = [x / pivval for x in M[col]]
        for r in range(n):
            if r == col:
                continue
            factor = M[r][col]
            if factor != 0.0:
                M[r] = [a - factor * b for a, b in zip(M[r], M[col])]
    return [row[n:] for row in M]


def _normal_cdf(x: float) -> float:
    """Standard-normal CDF via math.erf (stdlib)."""
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2.0)))


@dataclass
class OLSResult:
    coef: list[float]
    se: list[float]
    tstat: list[float]
    p_normal_approx: list[float]
    n: int
    k: int
    rss: float
    dof: int
    perfect_fit: bool
    inference_note: str


def ols_fit(X: list[list[float]], y: list[float]) -> OLSResult:
    """Ordinary least squares via the normal equations (X'X) b = X'y.

    Coefficient standard errors use s^2 (X'X)^-1 with s^2 = RSS/(n-k). The two-sided
    p-values are a NORMAL APPROXIMATION (math.erf), NOT a small-sample t-test and NOT
    autocorrelation-robust. The real pipeline should use a t/HAC (Newey-West) SE for
    ITS residuals; that is stated as a caveat and does not change the estimated effect.
    A perfectly-determined (RSS≈0) synthetic design yields se=0 -> treated as p=0 and
    flagged `perfect_fit` (real data never fits perfectly).
    """
    n = len(X)
    k = len(X[0])
    Xt = _transpose(X)
    XtX = _matmul(Xt, X)
    Xty = _matvec(Xt, y)
    coef = gauss_solve(XtX, Xty)

    resid = [y[i] - math.fsum(c * xij for c, xij in zip(coef, X[i])) for i in range(n)]
    rss = math.fsum(r * r for r in resid)
    dof = n - k

    perfect = rss < 1e-18
    se = [0.0] * k
    tstat = [0.0] * k
    pvals = [0.0] * k
    if perfect:
        note = "perfect fit (RSS≈0, synthetic); se=0, effects exact, p treated as 0."
        for j in range(k):
            tstat[j] = math.inf if coef[j] != 0.0 else 0.0
            pvals[j] = 0.0 if coef[j] != 0.0 else 1.0
    elif dof <= 0:
        note = "n<=k: no residual df; standard errors unavailable (report effect only)."
        se = [math.nan] * k
        tstat = [math.nan] * k
        pvals = [math.nan] * k
    else:
        s2 = rss / dof
        XtX_inv = _inverse(XtX)
        note = ("normal-approximation two-sided p (math.erf); NOT a small-sample t-test "
                "and NOT autocorrelation-robust — real ITS should use t/HAC SEs.")
        for j in range(k):
            var_j = s2 * XtX_inv[j][j]
            se[j] = math.sqrt(var_j) if var_j > 0 else 0.0
            if se[j] == 0.0:
                tstat[j] = math.inf if coef[j] != 0.0 else 0.0
                pvals[j] = 0.0 if coef[j] != 0.0 else 1.0
            else:
                tstat[j] = coef[j] / se[j]
                pvals[j] = 2.0 * (1.0 - _normal_cdf(abs(tstat[j])))
    return OLSResult(coef, se, tstat, pvals, n, k, rss, dof, perfect, note)


# =============================================================================
# H2 — natural experiment (PRIMARY). ITS or labeled before/after.
# =============================================================================

@dataclass
class Event:
    """A fixed, pre-dated de-optimization (or re-optimization) event.

    predicted_p_direction: what B predicts P should do AFTER the event:
      -1 => P should FALL (a de-optimization toward a human end),
      +1 => P should RISE (a re-optimization harder for engagement, e.g. O up).
    """
    key: str
    platform: str
    date: str
    direction_label: str
    predicted_p_direction: int   # -1 (P falls) | +1 (P rises)


@dataclass
class PSeries:
    """A platform-attributable P series within the +/-12-month event window.

    points: list of (month_offset, value) with month_offset relative to the event
    (negative = pre, 0.. = post; 0 is the first post observation).
    cadence: 'monthly'|'weekly'|'daily' (high-freq -> ITS-eligible) | 'annual'|'quarterly'.
    """
    proxy: str
    cadence: str
    points: list[tuple[float, float]]


def frequency_gate(pre_n: int, post_n: int, cadence: str) -> str:
    """Return 'ITS' if a high-frequency series with enough points each side exists;
    otherwise 'BEFORE_AFTER' (the degraded, labeled, lower-power path)."""
    if (cadence in HIGH_FREQ_CADENCES
            and pre_n >= ITS_MIN_PER_SIDE and post_n >= ITS_MIN_PER_SIDE):
        return "ITS"
    return "BEFORE_AFTER"


def _its_design(points: list[tuple[float, float]]) -> tuple[list[list[float]], list[float]]:
    """Segmented-regression design (Wagner et al.):
        y = b0 + b1*time + b2*intervention + b3*time_after_intervention
      time            : continuous index (we use 1..n in observation order)
      intervention    : 0 pre, 1 post (month_offset >= 0)
      time_after      : 0 pre; 1,2,... counting post observations
    b2 = level change at the event; b3 = slope change after the event.
    """
    ordered = sorted(points, key=lambda p: p[0])
    X, y = [], []
    post_counter = 0
    for i, (offset, val) in enumerate(ordered, start=1):
        post = 1 if offset >= 0 else 0
        if post:
            post_counter += 1
        time_after = post_counter if post else 0
        X.append([1.0, float(i), float(post), float(time_after)])
        y.append(float(val))
    return X, y


def run_its(series: PSeries) -> dict:
    """Interrupted time series around the event; returns level & slope change effects."""
    X, y = _its_design(series.points)
    fit = ols_fit(X, y)
    level_change = {"coef": fit.coef[2], "se": fit.se[2],
                    "t": fit.tstat[2], "p": fit.p_normal_approx[2]}
    slope_change = {"coef": fit.coef[3], "se": fit.se[3],
                    "t": fit.tstat[3], "p": fit.p_normal_approx[3]}
    return {
        "method": "ITS (segmented regression)",
        "baseline_level": fit.coef[0], "baseline_slope": fit.coef[1],
        "level_change": level_change, "slope_change": slope_change,
        "n": fit.n, "dof": fit.dof, "perfect_fit": fit.perfect_fit,
        "inference_note": fit.inference_note,
        # primary effect for the verdict = the immediate level change.
        "primary_effect": level_change["coef"], "primary_p": level_change["p"],
    }


def run_before_after(series: PSeries) -> dict:
    """Degraded, LOWER-POWER before/after (difference of pre vs post means)."""
    pre = [v for off, v in series.points if off < 0]
    post = [v for off, v in series.points if off >= 0]
    if not pre or not post:
        raise ValueError("before/after needs at least one pre and one post point")
    diff = mean(post) - mean(pre)
    return {
        "method": "before/after (LOWER POWER — pre-registered degrade path)",
        "pre_mean": mean(pre), "post_mean": mean(post),
        "primary_effect": diff, "primary_p": None,
        "power_caveat": ("LOW POWER: only low-frequency / few-point P data around this "
                         "event; no ITS. Direction reported; significance not asserted."),
        "n_pre": len(pre), "n_post": len(post),
    }


def h2_verdict(effect: float, predicted_direction: int, p_value, method_is_its: bool) -> dict:
    """Map an observed P effect + its predicted direction to a falsifier verdict.

    Predicted direction: -1 => B predicts P falls; +1 => B predicts P rises.
    Sign match + significant  -> SUPPORTS-B.
    Not significant           -> NULL  (satisfies falsifier #2 — the PRIMARY-test null).
    Significant, wrong sign   -> REVERSED (satisfies falsifier #1/#2 — B strained/falsified).
    Before/after (no p)       -> direction only, flagged low-power (never 'significant').
    """
    predicted_sign = "fall" if predicted_direction < 0 else "rise"
    observed_sign = "fall" if effect < 0 else ("rise" if effect > 0 else "flat")
    matches = (effect < 0 and predicted_direction < 0) or (effect > 0 and predicted_direction > 0)

    if not method_is_its or p_value is None:
        # Degraded before/after: report direction, do NOT claim significance.
        if effect == 0.0:
            return {"verdict": V_NULL, "falsifier": FALSIFIER_2,
                    "detail": "before/after: no pre/post difference (low-power null)."}
        return {"verdict": V_AMBIGUOUS,
                "falsifier": None,
                "detail": (f"before/after: P moved {observed_sign} (predicted {predicted_sign}); "
                           "LOW POWER — direction only, significance not asserted.")}

    significant = (p_value is not None) and (p_value < ALPHA)
    if not significant:
        return {"verdict": V_NULL, "falsifier": FALSIFIER_2,
                "detail": (f"no significant change (p≈{p_value:.4g} >= {ALPHA}). A null H2 is "
                           "the PRIMARY-test result and satisfies falsifier #2.")}
    if matches:
        return {"verdict": V_SUPPORTS, "falsifier": None,
                "detail": (f"P {observed_sign} as predicted ({predicted_sign}), "
                           f"significant (p≈{p_value:.4g}). Consistent with B.")}
    return {"verdict": V_REVERSED, "falsifier": FALSIFIER_1,
            "detail": (f"P {observed_sign} but B predicted {predicted_sign} "
                       f"(p≈{p_value:.4g}). Reversed — satisfies falsifier #1/#2.")}


def analyze_h2(events_and_series: list[tuple[Event, PSeries]]) -> list[dict]:
    """Run H2 for each fixed event; ITS or degraded before/after per the frequency gate."""
    results = []
    for event, series in events_and_series:
        # Enforce the +/-12-month window (drop anything outside; never widen it).
        inwin = [(off, v) for off, v in series.points if abs(off) <= WINDOW_MONTHS]
        series = PSeries(series.proxy, series.cadence, inwin)
        pre_n = sum(1 for off, _ in series.points if off < 0)
        post_n = sum(1 for off, _ in series.points if off >= 0)
        route = frequency_gate(pre_n, post_n, series.cadence)
        if route == "ITS":
            est = run_its(series)
            verdict = h2_verdict(est["primary_effect"], event.predicted_p_direction,
                                 est["primary_p"], method_is_its=True)
        else:
            est = run_before_after(series)
            verdict = h2_verdict(est["primary_effect"], event.predicted_p_direction,
                                 est["primary_p"], method_is_its=False)
        results.append({
            "event": event.key, "platform": event.platform, "date": event.date,
            "direction_label": event.direction_label,
            "predicted_p_direction": event.predicted_p_direction,
            "route": route, "estimate": est, "verdict": verdict,
            "window_months": WINDOW_MONTHS, "pre_n": pre_n, "post_n": post_n,
        })
    return results


# =============================================================================
# H3 — selection vs design (INTEGRITY). Divergence-case verdict logic (§4.3).
# =============================================================================

@dataclass
class H3Case:
    """A pre-committed case, coded BLIND to outcome (the rubric substitutes for
    independent blind coders in this pipeline).

      intent_direction   : 'human' | 'capture'  (documented, dated, PRECEDING the outcome)
      pressure_direction : 'human' | 'capture'  (independently documented selection pressure)
      coding             : 'aligned' | 'divergent'  (intent vs pressure, coded blind)
      outcome_direction  : 'human' | 'capture' | 'ambiguous'  (independent outcome measure)
      is_b_falsifying_candidate: True for documented de-optimizations-that-stuck admitted
             into the pool by the SAME rule (so the pool is not rigged toward B).
    """
    key: str
    intent_direction: str
    pressure_direction: str
    coding: str
    outcome_direction: str
    is_b_falsifying_candidate: bool = False
    note: str = ""


def h3_classify_case(case: H3Case) -> dict:
    """Classify a single case: follows-pressure / follows-intent / ambiguous.

    Only DIVERGENT cases discriminate. Aligned cases can't tell pressure from intent
    (both point the same way) and are reported as 'aligned-not-a-test'.
    """
    if case.coding == "aligned":
        return {"case": case.key, "classification": "aligned-not-a-test",
                "discriminating": False,
                "detail": "intent and pressure point the same way; cannot separate them."}
    # divergent
    if case.outcome_direction == "ambiguous":
        return {"case": case.key, "classification": V_AMBIGUOUS, "discriminating": True,
                "detail": "divergent case but outcome measure is ambiguous."}
    if case.outcome_direction == case.pressure_direction:
        return {"case": case.key, "classification": "follows-pressure", "discriminating": True,
                "detail": "outcome tracked the selection pressure, not the stated intent "
                          "(consistent with B)."}
    if case.outcome_direction == case.intent_direction:
        return {"case": case.key, "classification": "follows-intent", "discriminating": True,
                "detail": "outcome tracked the stated intent against pressure — agency "
                          "prevailed (candidate falsifier #3)."}
    return {"case": case.key, "classification": V_AMBIGUOUS, "discriminating": True,
            "detail": "outcome matched neither documented direction."}


def analyze_h3(cases: list[H3Case]) -> dict:
    """Aggregate the divergence test. Returns per-case classifications + overall verdict.

    Guard: the pool MUST admit at least one B-falsifying candidate, else the test is
    rigged (per §4.3). We assert that and surface it.
    """
    if not any(c.is_b_falsifying_candidate for c in cases):
        raise ValueError(
            "H3 pool is rigged: no B-falsifying candidate case present. §4.3 requires the "
            "pool to admit documented de-optimizations-that-stuck by the same rule.")
    per_case = [h3_classify_case(c) for c in cases]
    disc = [r for r in per_case if r["discriminating"]]
    n_pressure = sum(1 for r in disc if r["classification"] == "follows-pressure")
    n_intent = sum(1 for r in disc if r["classification"] == "follows-intent")
    n_amb = sum(1 for r in disc if r["classification"] == V_AMBIGUOUS)

    if not disc:
        overall = {"verdict": V_NULL, "falsifier": None,
                   "detail": "no discriminating (divergent, resolved) case — no H3 signal."}
    elif n_intent > n_pressure:
        overall = {"verdict": V_FALSIFIES, "falsifier": FALSIFIER_3,
                   "detail": (f"intent beat selection in {n_intent} vs {n_pressure} "
                              "divergent cases — satisfies falsifier #3.")}
    elif n_pressure > n_intent:
        overall = {"verdict": V_SUPPORTS, "falsifier": None,
                   "detail": (f"outcome followed pressure in {n_pressure} vs {n_intent} "
                              "divergent cases — consistent with B.")}
    else:
        overall = {"verdict": V_AMBIGUOUS, "falsifier": None,
                   "detail": (f"split {n_pressure}-{n_intent} (amb={n_amb}); no clear H3 "
                              "direction.")}
    return {"per_case": per_case,
            "counts": {"follows_pressure": n_pressure, "follows_intent": n_intent,
                       "ambiguous": n_amb, "discriminating": len(disc)},
            "overall": overall}


# =============================================================================
# H1 — cross-section (DESCRIPTIVE only; not identifying).
# =============================================================================

def analyze_h1(o_by_unit: dict[str, float], p_by_unit: dict[str, float],
               named_confounds: list[str]) -> dict:
    """Descriptive correlation of O with P across the ~6 units.

    Explicitly NOT identifying: n is small, confounds large. Reported as a labeled
    scatter/correlation with confounds NAMED. A positive r is consistent-with, never
    evidence-for, O -> P.
    """
    units = sorted(set(o_by_unit) & set(p_by_unit))
    if len(units) < 2:
        return {"verdict": V_DESCRIPTIVE, "r": None, "n": len(units),
                "detail": "fewer than 2 units with both O and P — no correlation.",
                "confounds": named_confounds, "identifying": False}
    xs = [o_by_unit[u] for u in units]
    ys = [p_by_unit[u] for u in units]
    try:
        r = pearson(xs, ys)
        rdetail = f"Pearson r = {r:.4f} across n={len(units)} units."
    except ValueError as e:
        r = None
        rdetail = f"correlation undefined: {e}"
    return {
        "verdict": V_DESCRIPTIVE, "r": r, "n": len(units), "units": units,
        "identifying": False,
        "confounds_named": named_confounds,
        "detail": (rdetail + " DESCRIPTIVE ONLY — n small, confounds large; this does NOT "
                   "identify O->P. Inferential weight is on H2/H3."),
    }


# =============================================================================
# Real-data entry point — REFUSES to fabricate when data/processed is empty.
# =============================================================================

def _has_real_processed() -> bool:
    if not PROCESSED_DIR.exists():
        return False
    for p in PROCESSED_DIR.iterdir():
        if p.name == ".gitkeep":
            continue
        if p.is_file():
            return True
    return False


REFUSAL = (
    "[NO RESULT] Study B analysis found NO real data in data/processed/.\n"
    "  This pipeline will NOT fabricate, infer, recall, or fall back to fixtures.\n"
    "  No O-score, P-score, effect size, p-value, or H-verdict is produced.\n"
    "  A real result requires: (1) a finalized, author-ratified pre-registration; "
    "(2) real inputs pulled by ingest.py into data/raw/ and normalized to data/interim/, "
    "then composited to data/processed/ by indices.py.\n"
    "  To exercise the CODE (not produce a result), run the labeled synthetic self-test:\n"
    "      python selftest.py\n"
)


def main(argv: list[str]) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass
    if "--selftest" in argv:
        try:
            from selftest import run_selftest
        except ImportError:  # pragma: no cover
            from .selftest import run_selftest  # type: ignore
        return run_selftest()
    if not _has_real_processed():
        print(REFUSAL)
        return 0
    # If real processed data ever exists, the ratified run is wired here (H2 -> H3 -> H1).
    print("[analyze] Real processed data detected. The ratified run (H2->H3->H1) executes "
          "here once the pre-registration is finalized and src/*.py is frozen+hashed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
