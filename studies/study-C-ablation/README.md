# Study C — The Designed-Disagreement Ablation

Status: **Scaffold — GATED (do not run)** · Session 4 · Needs **discipline, not data**.

Turns `outputs/THEORY_C_OPERATIONALIZED.md` §3–§6 into a runnable-later protocol. Unlike A
and B, C has **no data pipeline** — it turns the project's falsifiability discipline on the
project itself, measuring whether designed disagreement **out-catches** a single synthesizer.

```
study-C-ablation/
├── PROTOCOL.md         # the ablation design (ON vs OFF arms, measures, pre-committed verdicts)
├── CATCH_TAXONOMY.md   # pre-registered, severity-weighted catch taxonomy (+ provenance field)
├── coding-sheet.csv    # one row per catch (delete the EXAMPLE row before coding)
└── src/
    └── score.py        # scores a completed coding sheet (gated; prints the Q-012 caveat)
```

**The load-bearing measure is provenance** — the fraction of catches produced by the
*disagreement structure* vs a single voice. If catches collapse onto one voice, the plurality
is cosmetic (the C-006 nightmare) and C is falsified regardless of how impressive the apparatus
looks.

**Report with the baseline caveat (Q-012) front and centre:** because the ON/OFF arms are the
same underlying model in different prompts, this tests the *narrower* claim (structure beats
no-structure, reasoner fixed), not the *grand* one (human plurality beats individual genius).
The clean baseline arrives only when the repo opens.

**Running it is gated** — even though C is "runnable now," running the ablation still requires a
finalized, author-ratified protocol and a fresh work-order.
