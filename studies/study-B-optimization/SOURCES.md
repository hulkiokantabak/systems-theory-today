# Study B — PINNED source table (per PRE_REGISTRATION.md v0.3 §2 / §4.4)

> **NOT accessed — no network in this environment; real data is not available and will not
> be provided here.** This table PINS, per retained proxy, the specific reproducible source
> type per §2, with placeholders for the access-date and licence that a future author-ratified,
> gated heavy-Code session must fill when it actually pins and pulls each source. Access-date
> and licence are **UNFILLED on purpose** — filling them would imply access that has not
> happened. `src/ingest.py` records source SHA-256 hashes + access dates for whatever real
> files exist in `data/raw/` (currently none).

The **drop** (iteration-speed) and the two **demotions** (societal affective-polarization;
contested well-being) are recorded below exactly as ratified. A proxy with **no reproducible
source is dropped, not approximated.**

## O — optimization intensity (measured from INPUTS/PARAMETERS; source-kind `input/parameter`)

| Proxy | Retained? | Specific reproducible source (§2) | Access date | Licence | Note |
|---|---|---|---|---|---|
| objective_function | **KEEP** | Engineering blogs; exec testimony; SEC 10-K "engagement" language; DSA Art.15/27 transparency reports | _UNFILLED — not accessed_ | _UNFILLED_ | ordinal, from documented objective language |
| personalization_depth | **KEEP** | DSA Art.27 recommender-parameter disclosures; platform documentation | _UNFILLED — not accessed_ | _UNFILLED_ | ordinal chronological→ranked→per-user ML |
| autonomy_from_user_control | **KEEP** | Platform settings docs; DSA Art.38 non-profiling-option availability | _UNFILLED — not accessed_ | _UNFILLED_ | ordinal, sign so higher = more autonomy-from-user |
| iteration_speed (A/B cadence) | **DROP** | *No reproducible external source (proprietary)* | — | — | qualitative annotation ONLY; never in the composite |

## P — capture/pathology (measured from OUTCOMES; source-kind `outcome`)

| Proxy | Status | Specific reproducible source (§2) | Access date | Licence | Note |
|---|---|---|---|---|---|
| problematic_use | **KEEP** | Peer-reviewed problematic-use studies & meta-analyses (e.g. Bergen Social Media Addiction Scale); published session/return metrics | _UNFILLED — not accessed_ | _UNFILLED_ | self-report caveat travels with the value |
| misinfo_diffusion | **KEEP (platform-specific only)** | Peer-reviewed diffusion studies (e.g. Vosoughi, Roy & Aral 2018 for Twitter) | _UNFILLED — not accessed_ | _UNFILLED_ | kept only where platform-specific; coverage gaps noted, never filled |
| affective_polarization | **DEMOTE — H2 event-context ONLY** | ANES / Eurobarometer-type feeling-thermometer surveys | _UNFILLED — not accessed_ | _UNFILLED_ | societal, not per-platform; used only where a study ties it to a specific platform/event; NEVER in a generic per-platform P score |
| wellbeing | **DEMOTE & label CONTESTED** | Peer-reviewed well-being studies & meta-analyses | _UNFILLED — not accessed_ | _UNFILLED_ | reported as effect-size RANGE with the Haidt/Odgers dispute stated; NEVER composited |

## Natural-experiment events (H2) — fixed BEFORE any P is examined (§4.2)

| Event | Platform | Date | Direction | Sourcing note |
|---|---|---|---|---|
| Meaningful Social Interactions feed change | Facebook | Jan 2018 | stated human-centred reframe (dual H2/H3) | announcement + reporting; access UNFILLED |
| switch to algorithmic feed | Instagram | 2016 | de-optimization in reverse (O↑ → P↑ predicted) | announcement + reporting; access UNFILLED |
| "hide likes" staggered rollout | Instagram | 2019–2021 | cleanest quasi-experiment IF geo-resolved P exists | staggered by geography; access UNFILLED |
| DSA non-profiling recommender option (VLOPs) | multi-platform | from Aug 2023 | exogenous; **weak treatment intensity** (opt-in, low uptake) | regulatory record; access UNFILLED |

Windows are the pre-registered **±12 months** around each event; ITS only where a high-frequency,
platform-attributable P series exists, else a labeled lower-power before/after (§4.2, §6).

## Non-circularity (falsifier #4) — enforced in code

Every O source is tagged `input/parameter`; every P source is tagged `outcome`; **no source id
feeds both O and P.** `src/indices.assert_non_circularity()` fails loudly if this is violated.
O source ids are namespaced `O_SRC:*`, P source ids `P_SRC:*`; the disjointness is checked.

## Guardrails

- Prefer sources with clear licences and reproducible access; a proxy with no reproducible
  source is **dropped, not approximated**.
- **Vantage bias (D-005).** Every unit is a large Western consumer-attention platform; the
  finding, if any, is about *that* ecology — not "optimization" as such (Chinese platforms,
  financial-market optimizers, non-consumer systems are out of scope). Le Guin's preserved
  objection, made operational.
- Every proxy's source + transformation is logged **before** any outcome is examined; the
  frozen `src/*.py` hash is committed before `analyze.py` reads any P.
- **O-from-outside (Kant's caution).** O proxies are *appearances* of the objective function
  (documented parameters), not the function itself; triangulated, with proxy limits stated.
