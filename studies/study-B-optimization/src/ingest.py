"""Study B — ingestion: defines the DATA CONTRACT each proxy needs and loads real
inputs from `data/raw/` into `data/interim/` IF (and only if) real files are present.

Sources per PRE_REGISTRATION.md v0.3 §2 (WORK_ORDER_HEAVY_B.md §2):
  O (measured from INPUTS/PARAMETERS):
    - objective-function ...... engineering blogs; exec testimony; SEC 10-K 'engagement'
                                language; DSA Art.15/27 transparency reports
    - personalization-depth ... DSA Art.27 recommender-parameter disclosures; platform docs
    - autonomy-from-user ...... platform settings docs; DSA Art.38 non-profiling availability
  P (measured from OUTCOMES):
    - problematic-use ......... peer-reviewed problematic-use studies & meta-analyses
    - misinfo-diffusion ....... peer-reviewed diffusion studies (platform-specific only)
    - affective-polarization .. ANES/Eurobarometer-type surveys (H2 event-context ONLY)
    - well-being .............. peer-reviewed well-being studies (CONTESTED; range only)

INTEGRITY. `data/raw/` is EMPTY and stays empty (no network in this environment; real
data WILL NEVER be provided here). When there is no real data, ingest REPORTS exactly what
each proxy requires and EXITS WITHOUT fabricating, inferring, or falling back to fixtures.
It records source hashes + access dates for whatever real files exist (none now).

Zero external dependencies — Python 3 standard library only.
"""
from __future__ import annotations

import hashlib
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

_ROOT = Path(__file__).resolve().parent.parent
DATA_RAW = _ROOT / "data" / "raw"
DATA_INTERIM = _ROOT / "data" / "interim"
DATA_FIXTURES = _ROOT / "data" / "fixtures"   # SYNTHETIC — never read by this real-data path


@dataclass(frozen=True)
class ProxyContract:
    """What one proxy REQUIRES from a real source before it can be ingested."""
    proxy: str
    domain: str           # 'O' | 'P'
    source_kind: str      # 'input/parameter' (O) | 'outcome' (P)
    source_type: str      # the specific reproducible source per §2
    unit_grain: str       # e.g. 'platform x product-version x month'
    fields_required: tuple[str, ...]
    cadence: str          # expected time resolution
    normalization: str    # how indices.py will normalize it
    notes: str


CONTRACTS: list[ProxyContract] = [
    # --- O: inputs / parameters ---
    ProxyContract(
        proxy="objective_function", domain="O", source_kind="input/parameter",
        source_type="engineering blogs; exec testimony; SEC 10-K 'engagement' language; "
                    "DSA Art.15/27 transparency reports",
        unit_grain="platform x product-version x date",
        fields_required=("platform", "date", "ordinal_value", "ordinal_scale", "source_url",
                         "source_quote", "access_date"),
        cadence="event/version-dated (irregular)",
        normalization="z-score to own history; higher = more engagement-optimized",
        notes="ordinal 0..k: human-centred metric (low) -> mixed -> engagement/time/DAU (high).",
    ),
    ProxyContract(
        proxy="personalization_depth", domain="O", source_kind="input/parameter",
        source_type="DSA Art.27 recommender-parameter disclosures; platform documentation",
        unit_grain="platform x product-version x date",
        fields_required=("platform", "date", "ordinal_value", "ordinal_scale", "source_url",
                         "access_date"),
        cadence="event/version-dated (irregular)",
        normalization="z-score to own history; higher = deeper per-user personalization",
        notes="ordinal: chronological-only (low) -> ranked/limited (mid) -> per-user ML (high).",
    ),
    ProxyContract(
        proxy="autonomy_from_user_control", domain="O", source_kind="input/parameter",
        source_type="platform settings docs; DSA Art.38 non-profiling-option availability",
        unit_grain="platform x product-version x date",
        fields_required=("platform", "date", "ordinal_value", "ordinal_scale", "source_url",
                         "access_date"),
        cadence="event/version-dated (irregular)",
        normalization="z-score to own history; sign so higher = more autonomy-FROM-user",
        notes="ordinal: no user ranking control (high O) -> opt-out -> chronological default (low O).",
    ),
    # --- P: outcomes ---
    ProxyContract(
        proxy="problematic_use", domain="P", source_kind="outcome",
        source_type="peer-reviewed problematic-use studies & meta-analyses "
                    "(e.g. Bergen Social Media Addiction Scale); published session/return metrics",
        unit_grain="platform x period",
        fields_required=("platform", "period", "measure", "value", "n", "ci_low", "ci_high",
                         "study_doi", "access_date"),
        cadence="study-dated (mostly low frequency)",
        normalization="z-score to own history; higher = more problematic use",
        notes="self-report caveat travels with the value.",
    ),
    ProxyContract(
        proxy="misinfo_diffusion", domain="P", source_kind="outcome",
        source_type="peer-reviewed diffusion studies (e.g. Vosoughi, Roy & Aral 2018), "
                    "PLATFORM-SPECIFIC only",
        unit_grain="platform x period",
        fields_required=("platform", "period", "false_true_spread_differential", "metric_def",
                         "study_doi", "access_date"),
        cadence="study-dated (low frequency)",
        normalization="z-score to own history; higher = larger false>true spread differential",
        notes="kept only where platform-specific data exists; coverage gaps NOTED, never filled.",
    ),
    ProxyContract(
        proxy="affective_polarization", domain="P", source_kind="outcome",
        source_type="ANES / Eurobarometer-type feeling-thermometer surveys",
        unit_grain="event-window (societal, tied to a platform/event by a study)",
        fields_required=("event_key", "period", "thermometer_value", "links_to_platform_event",
                         "study_doi", "access_date"),
        cadence="survey wave (low frequency)",
        normalization="z-score to own history; DEMOTED — H2 event-context ONLY (§2)",
        notes="societal, not per-platform; NEVER in a generic per-platform P composite.",
    ),
    ProxyContract(
        proxy="wellbeing", domain="P", source_kind="outcome",
        source_type="peer-reviewed well-being studies & meta-analyses",
        unit_grain="platform x period (effect-size)",
        fields_required=("platform", "period", "effect_size", "es_low", "es_high",
                         "dispute_flag", "study_doi", "access_date"),
        cadence="study-dated (low frequency)",
        normalization="report effect-size RANGE; DEMOTED & CONTESTED (§2)",
        notes="Haidt vs Odgers dispute stated; NEVER composited into a generic P score.",
    ),
]


def _real_files_in(dirpath: Path) -> list[Path]:
    """Real input files present (excludes .gitkeep and any dotfiles)."""
    if not dirpath.exists():
        return []
    return sorted(p for p in dirpath.iterdir()
                  if p.is_file() and p.name != ".gitkeep" and not p.name.startswith("."))


def _sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def record_source_manifest(files: list[Path]) -> list[dict]:
    """Record source hashes + access dates for whatever real files exist (none now)."""
    access = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    return [{"file": p.name, "sha256": _sha256(p), "bytes": p.stat().st_size,
             "access_date": access} for p in files]


def print_contracts() -> None:
    print("DATA CONTRACT — what each proxy REQUIRES from a real source (per PRE_REG §2):\n")
    for c in CONTRACTS:
        print(f"  [{c.domain}] {c.proxy}  (source-kind: {c.source_kind})")
        print(f"      source_type : {c.source_type}")
        print(f"      unit_grain  : {c.unit_grain}")
        print(f"      fields      : {', '.join(c.fields_required)}")
        print(f"      cadence     : {c.cadence}")
        print(f"      normalize   : {c.normalization}")
        print(f"      notes       : {c.notes}\n")


REFUSAL = (
    "[NO DATA] data/raw/ contains NO real input files.\n"
    "  Study B ingest produces NO interim data and NO result. It will NOT fabricate,\n"
    "  infer, recall, or fall back to the SYNTHETIC fixtures in data/fixtures/.\n"
    "  There is no network in this environment and real data will not be provided here.\n"
    "  Below is exactly what each proxy needs; supply real files to data/raw/ matching the\n"
    "  contract, then re-run. To exercise the CODE only, run:  python selftest.py\n"
)


def main(argv: list[str]) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except Exception:
        pass
    raw_files = _real_files_in(DATA_RAW)
    if not raw_files:
        print(REFUSAL)
        print_contracts()
        return 0
    # Real files present: record provenance, then (in a ratified run) normalize to interim.
    manifest = record_source_manifest(raw_files)
    DATA_INTERIM.mkdir(parents=True, exist_ok=True)
    print(f"[ingest] {len(raw_files)} real file(s) found in data/raw/. Provenance recorded:")
    for m in manifest:
        print(f"    {m['file']}  sha256={m['sha256'][:16]}...  accessed {m['access_date']}")
    print("[ingest] Normalization to data/interim/ runs here under a ratified, frozen pipeline "
          "(validated against the per-proxy CONTRACTS above).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
