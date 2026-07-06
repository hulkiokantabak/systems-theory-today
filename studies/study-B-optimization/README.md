# Study B — Optimization Intensity (O) vs Capture/Pathology (P)

Status: **Scaffold — GATED (do not run)** · Session 4 (pre-reg finalization-candidate + heavy-Code work-order prepared, S4c) · Recommended **first** empirical test.

Turns `outputs/THEORY_B_OPERATIONALIZED.md` §7 into a runnable-later pipeline.

```
study-B-optimization/
├── PRE_REGISTRATION.md   # FINALIZATION CANDIDATE (v0.2) — author/Chat ratifies §7 before examining outcomes
├── WORK_ORDER_HEAVY_B.md # heavy-Code commission — PREPARED, GATED (author-ratified: NO)
├── SOURCES.md            # candidate data sources (nothing pulled)
├── requirements.txt      # deps for the future heavy-Code session (not installed now)
├── src/
│   ├── ingest.py         # data-ingestion skeleton (gated; refuses to run)
│   ├── indices.py        # O and P composite construction (pre-registered proxies)
│   └── analyze.py        # H1 cross-system · H2 natural experiment · H3 selection-not-design
├── data/{raw,interim,processed}/   # git-ignored (kept by .gitkeep) — no data in git
└── outputs/                        # git-ignored — figures/tables land here when run
```

**To open the gate:** finalize `PRE_REGISTRATION.md` §7 (author/Chat ratifies units, events, proxies, case rule), then the author ratifies the prepared `WORK_ORDER_HEAVY_B.md` (`docs/CHAT_CODE_WORKFLOW.md` §6a). Until both happen the scripts print the gate notice and exit.

Why B is first: much of the input already exists (platform research, well-being studies, documented de-optimization events), so B is the **cheapest and fastest** of the three to test — even though A is the flagship theory.
