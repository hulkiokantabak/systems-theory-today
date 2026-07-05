# Study A — The Adaptation Gap (G = R_c − R_a)

Status: **Scaffold — GATED (do not run)** · Session 4 · The **flagship**; the heaviest data lift.

Turns `outputs/THEORY_A_OPERATIONALIZED.md` §7 into a runnable-later pipeline: an
≈30-OECD-country panel with an inequality control (the decisive discriminator vs Turchin's
wealth pump).

```
study-A-adaptation-gap/
├── PRE_REGISTRATION.md   # DRAFT — finalize + ratify BEFORE G touches any symptom
├── SOURCES.md            # candidate data sources (nothing pulled)
├── requirements.txt      # deps for the future heavy-Code session (not installed now)
├── src/
│   ├── ingest.py         # panel ingestion skeleton (gated; refuses to run)
│   ├── gap.py            # R_c, R_a, G construction (pre-registered, sign-corrected, equal-weighted)
│   └── analyze.py        # H1 cross-section · H2 lead/lag · H3 inequality-controlled panel · robustness
├── data/{raw,interim,processed}/   # git-ignored (kept by .gitkeep)
└── outputs/                        # git-ignored
```

**This study is the heavy-Code trigger** (`docs/DIAGRAMS.md` §7): it needs real data
ingestion, cleaning, normalization, and panel modeling. Specifying + pre-registering it is
the precondition; **running it requires a fresh, author-ratified work-order.**
