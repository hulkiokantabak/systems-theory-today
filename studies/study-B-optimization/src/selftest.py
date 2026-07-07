"""Study B — SELF-TEST. Runs the full pipeline on the LABELED SYNTHETIC fixtures and
asserts the O/P composites and H2/H3/H1 verdicts have the correct SHAPE and the math is
right (known fixture -> known composite / known regression coefficients / known verdicts).

  SYNTHETIC — pipeline self-test ONLY — NOT real data — NOT a study result

This proves the CODE is correct. It is NOT a study result and touches NO real data:
it reads only `data/fixtures/` and writes only to `outputs/selftest/`, both banner-marked.
The real-data path (ingest -> indices -> analyze over data/raw|interim|processed) is
entirely separate and refuses to run without real data.

Run:  python selftest.py     (from src/)   ·   or:  python analyze.py --selftest
Zero external dependencies — Python 3 standard library only.
"""
from __future__ import annotations

import json
import math
import sys
from pathlib import Path

# Make sibling modules importable no matter the working directory.
_HERE = Path(__file__).resolve().parent
if str(_HERE) not in sys.path:
    sys.path.insert(0, str(_HERE))

import indices as ix
import analyze as az

_ROOT = _HERE.parent
FIXTURES = _ROOT / "data" / "fixtures"
OUT_DIR = _ROOT / "outputs" / "selftest"
BANNER = ix.SYNTHETIC_BANNER

TOL = 1e-9
TOLF = 1e-6


class SelfTestFailure(AssertionError):
    pass


def _check(cond: bool, msg: str, log: list[str]) -> None:
    if not cond:
        raise SelfTestFailure(msg)
    log.append(f"  PASS  {msg}")


def _approx(a: float, b: float, tol: float = TOL) -> bool:
    return abs(a - b) <= tol


def load_fixture(name: str) -> dict:
    path = FIXTURES / name
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    banner = data.get("__SYNTHETIC_BANNER__")
    if banner != BANNER:
        raise SelfTestFailure(
            f"fixture {name} is missing/!= the required SYNTHETIC banner "
            f"(got {banner!r}). Refusing to load an unlabeled fixture.")
    return data


# --------------------------------------------------------------------------- #
# Primitive math checks (independent of the fixtures; hard-coded hand values)  #
# --------------------------------------------------------------------------- #

def check_primitives(log: list[str]) -> None:
    _check(_approx(ix.mean([1, 2, 3, 4]), 2.5), "mean([1,2,3,4]) == 2.5", log)
    _check(_approx(ix.pstdev([-1, 0, 1]), math.sqrt(2.0 / 3.0)),
           "pstdev([-1,0,1]) == sqrt(2/3)", log)
    # z-score of last value vs own history: 1 / sqrt(2/3) = sqrt(3/2) ~ 1.2247449
    _check(_approx(ix.zscore_last([-1, 0, 1]), math.sqrt(1.5), TOLF),
           "zscore_last([-1,0,1]) == sqrt(3/2) ~ 1.2247449", log)
    _check(_approx(ix.zscore_last([0, 1]), 1.0, TOLF),
           "zscore_last([0,1]) == +1.0 (2-pt increasing)", log)
    _check(_approx(ix.zscore_last([1, 0]), -1.0, TOLF),
           "zscore_last([1,0]) == -1.0 (2-pt decreasing)", log)
    _check(_approx(ix.zscore_last([1, 1]), 0.0, TOLF),
           "zscore_last([1,1]) == 0.0 (flat -> no fabricated spread)", log)
    _check(_approx(ix.pearson([0, 1, 2, 3], [0, 1, 2, 3]), 1.0, TOLF),
           "pearson(x, x) == +1.0", log)
    _check(_approx(ix.pearson([0, 1, 2, 3], [3, 2, 1, 0]), -1.0, TOLF),
           "pearson(x, -x) == -1.0", log)


def check_non_circularity(log: list[str]) -> None:
    rep = ix.assert_non_circularity()
    _check(rep["ok"] is True and rep["overlap"] == [],
           "O∩P = ∅ non-circularity check passes on the pre-registered registry", log)
    # Negative test: a deliberately circular pair MUST raise.
    bad_shared = ix.Proxy(key="bad", domain="P", source_kind="outcome",
                          source_id="O_SRC:objective-function-disclosures",  # an O source!
                          sign=1, norm=ix.NORM_ZSCORE, status="retained", description="x")
    raised = False
    try:
        ix.assert_non_circularity(ix.O_PROXIES, [bad_shared])
    except ix.NonCircularityError:
        raised = True
    _check(raised, "non-circularity check RAISES when a source feeds both O and P", log)
    # Negative test: an O proxy tagged as an outcome MUST raise.
    raised2 = False
    try:
        ix.assert_non_circularity(
            [ix.Proxy("o2", "O", "outcome", "O_SRC:x", 1, ix.NORM_ZSCORE, "retained", "x")],
            ix.P_PROXIES_RETAINED)
    except ix.NonCircularityError:
        raised2 = True
    _check(raised2, "non-circularity check RAISES when an O proxy is not 'input/parameter'", log)


# --------------------------------------------------------------------------- #
# indices: build O and P composites from the cross-section fixture             #
# --------------------------------------------------------------------------- #

def build_composites_from_fixture(cs: dict):
    series = cs["series"]

    def normalized_for(proxy: ix.Proxy) -> dict[str, float]:
        per_unit = series[proxy.key]
        return {unit: ix.normalized_snapshot(vals, proxy) for unit, vals in per_unit.items()}

    o_norm = {p.key: normalized_for(p) for p in ix.O_PROXIES}
    p_norm = {p.key: normalized_for(p) for p in ix.P_PROXIES_RETAINED}
    # demoted proxies are normalized too (available for H2 event context) but MUST NOT enter P
    demoted_norm = {p.key: normalized_for(p) for p in ix.P_PROXIES_DEMOTED}

    O = ix.build_O(o_norm)
    P = ix.build_P(p_norm)
    return O, P, o_norm, p_norm, demoted_norm


def check_indices(cs: dict, log: list[str]):
    O, P, o_norm, p_norm, demoted_norm = build_composites_from_fixture(cs)
    exp = cs["expected_composites_hand_computed"]
    for u, v in exp["O"].items():
        _check(_approx(O[u], v, TOLF), f"O[{u}] == {v} (hand-computed)", log)
    for u, v in exp["P_retained_only"].items():
        _check(_approx(P[u], v, TOLF), f"P[{u}] == {v} (retained proxies only)", log)
    # Demotion invariant: build_P used exactly the retained keys, not the demoted ones.
    _check(set(ix.P_RETAINED_KEYS) == {"problematic_use", "misinfo_diffusion"},
           "P composite uses ONLY {problematic_use, misinfo_diffusion} (demoted excluded)", log)
    _check("wellbeing" in demoted_norm and "affective_polarization" in demoted_norm,
           "demoted proxies (wellbeing, affective_polarization) normalized but NOT composited", log)
    # Equal-weight sanity: composite of a unit equals mean of its per-proxy snapshots.
    hand_alpha = ix.mean([o_norm[k]["UNIT_ALPHA"] for k in ix.O_PROXY_KEYS])
    _check(_approx(O["UNIT_ALPHA"], hand_alpha, TOLF),
           "O composite == equal-weighted mean of per-proxy snapshots", log)
    return O, P


# --------------------------------------------------------------------------- #
# analyze H2 / H3 / H1                                                         #
# --------------------------------------------------------------------------- #

def check_ols_recovery(log: list[str]) -> None:
    # Independent ITS design: known coefficients must be recovered exactly (noiseless).
    pts = [(-6, 102), (-5, 104), (-4, 106), (-3, 108), (-2, 110), (-1, 112),
           (0, 101), (1, 100), (2, 99), (3, 98), (4, 97), (5, 96)]
    X, y = az._its_design(pts)
    fit = az.ols_fit(X, y)
    _check(_approx(fit.coef[0], 100.0, TOLF), "ITS OLS recovers baseline level b0 == 100", log)
    _check(_approx(fit.coef[1], 2.0, TOLF), "ITS OLS recovers baseline slope b1 == 2", log)
    _check(_approx(fit.coef[2], -10.0, TOLF), "ITS OLS recovers level change b2 == -10", log)
    _check(_approx(fit.coef[3], -3.0, TOLF), "ITS OLS recovers slope change b3 == -3", log)
    # Non-degenerate SE path: a design with a residual yields finite, positive SE + p in [0,1].
    Xn = [[1.0, 1.0], [1.0, 2.0], [1.0, 3.0], [1.0, 4.0]]
    yn = [1.0, 2.0, 2.0, 4.0]  # not perfectly linear -> RSS > 0
    fitn = az.ols_fit(Xn, yn)
    _check(fitn.rss > 0 and all(s >= 0 for s in fitn.se) and fitn.se[1] > 0,
           "OLS SE branch: non-perfect fit gives finite positive standard errors", log)
    _check(all(0.0 <= p <= 1.0 for p in fitn.p_normal_approx),
           "OLS normal-approx p-values lie in [0,1]", log)


def load_h2(cs_events: dict):
    events_and_series = []
    for rec in cs_events["events"]:
        ev = rec["event"]
        event = az.Event(key=ev["key"], platform=ev["platform"], date=ev["date"],
                         direction_label=ev["direction_label"],
                         predicted_p_direction=ev["predicted_p_direction"])
        s = rec["series"]
        series = az.PSeries(proxy=s["proxy"], cadence=s["cadence"],
                            points=[(float(o), float(v)) for o, v in s["points"]])
        events_and_series.append((event, series, rec.get("expected", {})))
    return events_and_series


def check_h2(cs_events: dict, log: list[str]):
    loaded = load_h2(cs_events)
    results = az.analyze_h2([(e, s) for e, s, _ in loaded])
    by_key = {r["event"]: r for r in results}
    for rec, r in zip(cs_events["events"], results):
        exp = rec.get("expected", {})
        key = r["event"]
        _check(r["route"] == exp["route"], f"H2 {key}: route == {exp['route']}", log)
        _check(r["verdict"]["verdict"] == exp["verdict"],
               f"H2 {key}: verdict == {exp['verdict']}", log)
        if r["route"] == "ITS":
            lc = r["estimate"]["level_change"]["coef"]
            _check(_approx(lc, exp["level_change_coef"], TOLF),
                   f"H2 {key}: level change coef == {exp['level_change_coef']}", log)
        if r["route"] == "BEFORE_AFTER":
            _check(_approx(r["estimate"]["primary_effect"], exp["diff"], TOLF),
                   f"H2 {key}: before/after diff == {exp['diff']}", log)
            _check("power_caveat" in r["estimate"],
                   f"H2 {key}: before/after carries a LOW-POWER caveat", log)
    # Verify a NULL is emitted as a first-class result (falsifier #2), not an error.
    null_r = by_key["EVT_HIGHFREQ_NULL_SCHEMATIC"]
    _check(null_r["verdict"]["verdict"] == az.V_NULL
           and "F#2" in (null_r["verdict"]["falsifier"] or ""),
           "H2 NULL is reportable as a real result and maps to falsifier #2", log)
    # Verify the +/-12-month window and the frequency gate are actually applied.
    supp = by_key["EVT_HIGHFREQ_DEOPT_SCHEMATIC"]
    _check(supp["verdict"]["verdict"] == az.V_SUPPORTS and supp["route"] == "ITS",
           "H2 high-frequency de-optimization -> ITS -> SUPPORTS-B (predicted fall)", log)
    return results


def load_h3(cs_cases: dict):
    return [az.H3Case(key=c["key"], intent_direction=c["intent_direction"],
                      pressure_direction=c["pressure_direction"], coding=c["coding"],
                      outcome_direction=c["outcome_direction"],
                      is_b_falsifying_candidate=c.get("is_b_falsifying_candidate", False),
                      note=c.get("note", "")) for c in cs_cases["cases"]]


def check_h3(cs_cases: dict, log: list[str]):
    cases = load_h3(cs_cases)
    res = az.analyze_h3(cases)
    exp = cs_cases["expected"]
    got = {r["case"]: r["classification"] for r in res["per_case"]}
    for k, v in exp["per_case"].items():
        _check(got.get(k) == v, f"H3 {k}: classification == {v}", log)
    _check(res["overall"]["verdict"] == exp["overall_verdict"],
           f"H3 overall verdict == {exp['overall_verdict']}", log)
    for k, v in exp["counts"].items():
        _check(res["counts"][k] == v, f"H3 count {k} == {v}", log)
    # The B-falsifying case classified follows-intent maps to falsifier #3 at case level.
    intent_case = next(r for r in res["per_case"] if r["case"] == "CASE_INTENT_WINS_SCHEMATIC")
    _check(intent_case["classification"] == "follows-intent",
           "H3 pool ADMITS a B-falsifying case and classifies it follows-intent (F#3 candidate)", log)
    # Guard: a pool with no B-falsifying candidate must raise (rigged-pool protection).
    raised = False
    try:
        az.analyze_h3([az.H3Case("only", "human", "capture", "divergent", "capture", False)])
    except ValueError:
        raised = True
    _check(raised, "H3 raises when the pool admits NO B-falsifying candidate (anti-rigging)", log)
    return res


def check_h1(O, P, log: list[str]):
    confounds = ["audience size", "content type/category"]
    res = az.analyze_h1(O, P, confounds)
    _check(res["identifying"] is False, "H1 is flagged NON-identifying (descriptive only)", log)
    _check(res["verdict"] == az.V_DESCRIPTIVE, "H1 verdict == DESCRIPTIVE-ONLY", log)
    _check(res["confounds_named"] == confounds, "H1 names the pre-registered confounds", log)
    # r must equal an independent recomputation over the same units.
    units = res["units"]
    r_indep = ix.pearson([O[u] for u in units], [P[u] for u in units])
    _check(_approx(res["r"], r_indep, TOLF), "H1 r matches an independent pearson recomputation", log)
    _check(res["r"] > 0, "H1 r > 0 on this fixture (O and P co-vary positively)", log)
    return res


# --------------------------------------------------------------------------- #
# Driver                                                                       #
# --------------------------------------------------------------------------- #

def run_selftest() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass
    log: list[str] = []
    status = "PASS"
    failure = None
    payload: dict = {}
    try:
        cs = load_fixture("cross_section.json")
        ev = load_fixture("h2_events.json")
        h3 = load_fixture("h3_cases.json")

        check_primitives(log)
        check_non_circularity(log)
        O, P = check_indices(cs, log)
        check_ols_recovery(log)
        h2_res = check_h2(ev, log)
        h3_res = check_h3(h3, log)
        h1_res = check_h1(O, P, log)

        payload = {
            "O_composite": O, "P_composite_retained_only": P,
            "H2": [{"event": r["event"], "route": r["route"],
                    "verdict": r["verdict"]["verdict"],
                    "falsifier": r["verdict"]["falsifier"]} for r in h2_res],
            "H3": {"overall": h3_res["overall"]["verdict"], "counts": h3_res["counts"]},
            "H1": {"r": h1_res["r"], "n": h1_res["n"], "identifying": h1_res["identifying"]},
        }
    except SelfTestFailure as e:
        status = "FAIL"
        failure = str(e)
    except Exception as e:  # pragma: no cover - unexpected
        status = "FAIL"
        failure = f"{type(e).__name__}: {e}"

    _write_outputs(status, failure, log, payload)

    print(BANNER)
    print(f"Study B self-test: {status}  ({len(log)} checks)")
    if failure:
        print(f"  FAILURE: {failure}")
    else:
        for line in log:
            print(line)
    print(f"  outputs -> {OUT_DIR}")
    return 0 if status == "PASS" else 1


def _write_outputs(status: str, failure, log: list[str], payload: dict) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    report = {
        "__SYNTHETIC_BANNER__": BANNER,
        "what_this_is": ("Output of src/selftest.py on the LABELED SYNTHETIC fixtures in "
                         "data/fixtures/. Proves the CODE computes the pre-registered "
                         "quantities correctly. NOT a study result. NO real data involved."),
        "status": status,
        "failure": failure,
        "n_checks": len(log),
        "checks": [ln.strip() for ln in log],
        "computed_on_synthetic_fixture": payload,
    }
    with (OUT_DIR / "selftest_report.json").open("w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    lines = [
        BANNER,
        "=" * len(BANNER),
        f"Study B pipeline self-test — {status}",
        "",
        "This file is SYNTHETIC self-test output. It is NOT a study result and involves NO",
        "real data. It only proves src/*.py computes the pre-registered quantities correctly.",
        "",
        f"Checks run: {len(log)}",
    ]
    if failure:
        lines += ["", f"FAILURE: {failure}"]
    else:
        lines += [""] + [ln.strip() for ln in log]
        lines += ["", "Computed on the synthetic fixture (NOT a result):",
                  json.dumps(payload, indent=2, ensure_ascii=False)]
    with (OUT_DIR / "selftest_report.txt").open("w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")


if __name__ == "__main__":
    raise SystemExit(run_selftest())
