# Study B — external cross-check: collected raw verdicts (tracked record)

Status: **COMPLETE — all 4 project-blind models in. Synthesis + honest result: `CROSSCHECK_RESULT.md`.**
Blind prompt: `study-B-crosscheck-PROMPT.md` · Approach: `../APPROACH_B2_DOCUMENTED_CASES.md` · Pre-registered prediction: modal blind verdict = "more with I" (engagement incentive).

---

## Verdict 1 — DeepSeek · received Session 4f (2026-07-08) · project-blind ✓

| Case | Verdict | Confidence | Evidence quality |
|---|---|---|---|
| A — Facebook MSI (2018) | **more-with-I** | high | strong |
| B — YouTube borderline (2019) | **mixed** | medium | moderate |
| Added: Twitter/X Community Notes | mixed | medium | moderate |

**Cross-case read:** *divergent* — Case A strongly supports "more-with-I"; Case B genuinely mixed (some real reduction toward the stated goal, but weak/uneven verification). "Does not cleanly confirm the prediction, nor cleanly challenge it."

**Independent evidence DeepSeek brought (beyond the provided facts) — the intended cross-model value; to spot-check:**
- **Case A:** a Polish political party reportedly shifted 50/50 → ~80% negative posts "explicitly as a function of the algorithm change"; EU/Taiwan/India party complaints; a 2022 Italian-survey study linking MSI to increased ideological extremism / affective polarization; internal anti-divisiveness fixes reportedly shelved.
- **Case B:** Hany Farid / Berkeley team found conspiracy-video recommendations fell ~40% from a 2018 peak by early 2020 (independent corroboration of a *partial* reduction); YouTube's 70% (earlier 50%) self-report; effects uneven across misinformation types; substitution concern; login-less-measurement caveat.

**Note for synthesis (later):** DeepSeek supplied its own evidence (Berkeley study, Polish figure). That is exactly the cross-model value — independent corroboration — but the synthesis must (a) distinguish "coded the provided facts" from "supplied independent evidence," and (b) spot-check the independently-cited facts before relying on them.

---

## Verdict 2 — Grok · received Session 4f (2026-07-08) · project-blind ✓

| Case | Verdict | Confidence | Evidence quality |
|---|---|---|---|
| A — Facebook MSI (2018) | **more-with-I** | high | moderate |
| B — YouTube borderline (2019) | **mixed** | medium | weak-or-contested |
| Added: Instagram hiding like counts | mixed | medium | moderate |

**Cross-case read:** where a change boosted/protected high-engagement emotional content (A), **I prevailed despite the G framing**; where the intervention was **narrow, low-cost, low-risk to core metrics** (B), outcomes aligned more readily with G *without clear sacrifice*. Emergent thesis: platforms prefer **targeted, low-friction changes that let them claim responsibility while safeguarding the engagement/ad model**; evidence is strongest where internal leaks exist, weakest where self-reported.

**Independent evidence Grok brought (to spot-check):** Case A internal scoring weights (significant comments/reshares ≈ 30 pts vs 1 for a like); an early-2019 internal review that pure-MSI was no longer effective for growing sessions → strategy pivot. Case B: an arXiv cross-platform-sharing study + a PNAS post-2019 recommendation analysis (recs often *moderate* rather than amplify vs user preference).

---

## Emerging pattern after 2 project-blind models (DeepSeek, Grok) — NOT YET A RESULT

- **Case A: 2/2 → "more-with-I"** (both high confidence). Independent convergence on the benign-intent case.
- **Case B: 2/2 → "mixed"** (both medium). Both took the "contested" flag seriously and found the de-optimization *partly stuck*.
- Both volunteered a **mixed** third case (Community Notes; Instagram hide-likes).
- **A refinement worth carrying to synthesis (both models imply it):** the engagement pressure appears to **win when the stated goal conflicts with engagement (A)**, and to **lose or tie when the change is engagement-neutral / low-risk (B, and both added cases)**. That is not a clean confirm-or-falsify of B — it is a *sharpening*: "selection beats intent" may hold **conditionally on the change actually threatening the engagement metric.** (To be tested, not asserted.)

## ⚠ Anomaly (resolved) — a first "Gemini" paste duplicated Grok verbatim (NOT counted)

A first pasted "GEMINI" response was **byte-for-byte identical** to Verdict 2 (Grok) — same prose, verdicts, and volunteered third case (Instagram hide-likes / "Project Daisy"). Flagged as a paste slip and **not counted**. A genuine, distinct Gemini response then arrived (Verdict 3).

---

## Verdict 3 — Gemini · received Session 4f (2026-07-08) · project-blind ✓ (genuine — distinct from Grok)

| Case | Verdict | Confidence | Evidence quality |
|---|---|---|---|
| A — Facebook MSI (2018) | **more-with-I** | high | strong |
| B — YouTube borderline (2019) | **mixed** | medium | moderate-to-contested |
| Added: Twitter/X Creator Ads revenue-sharing (2023) | **more-with-I** | high | strong |

**Cross-case read:** neither platform **altered its foundational business model** (the attention economy / ad revenue), so the algorithms "defaulted to maximizing raw engagement"; quantifiable engagement served as a "crude proxy for 'good' interactions," and "the business incentive almost always overpowered or diluted the stated goal."

**Independent evidence Gemini brought (to spot-check):** Case A — Haugen whistleblower testimony + WSJ verification. Case B — **split** evidence: Brendan Nyhan / ADL (downranking steered users from extremes) vs **Mozilla** (algorithm still served borderline content, esp. non-logged-in / non-English). Added case — X reply-section "engagement farming" / rage-bait tied to impression-based payouts.

---

## Emerging pattern after 3 genuinely-independent project-blind models (DeepSeek, Grok, Gemini) — NOT YET A RESULT

- **Case A: 3/3 → "more-with-I"** (all high confidence; evidence strong/moderate/strong). Robust convergence on the benign-intent case.
- **Case B: 3/3 → "mixed"** (all medium). Convergence on *mixed*: a real but narrow/contested de-optimization.
- **Added cases** (each model's own): Community Notes (mixed), Instagram hide-likes (mixed), X Creator Ads (more-with-I) — all read through the same lens.
- **The refinement holds across all three:** engagement pressure wins **when the change conflicts with the core engagement metric / the business model is untouched** (A; X Creator Ads), and relaxes when the change is **narrow / engagement-neutral / low-risk** (B; Community Notes; hide-likes). This is Theory B *sharpened*, not merely confirmed: **selection beats stated intent conditionally on the change threatening the metric.**

### ⚠ Caveat to carry into synthesis (do NOT skip): are these models *really* independent?
Three LLMs agreeing is **weaker** than three independent humans or datasets agreeing — they may share **training corpora and the same widely-reported public narrative** (the "Facebook Files" story is ubiquitous). So the convergence shows the *public documentary record* reads one way, not that three independent *evidence bases* do. This is the Q-012 entanglement worry, now applied to the cross-check. The synthesis must state this, and the strongest guard is **spot-verifying the independently-cited facts** (Polish 50→80%; Farid/Berkeley ~40%; Mozilla; Nyhan/ADL; the Italian study) against primary sources.

---

## Verdict 4 — ChatGPT · received Session 4f (2026-07-08) · project-blind ✓ (richest sourcing)

| Case | Verdict | Confidence | Evidence quality |
|---|---|---|---|
| A — Facebook MSI (2018) | **more-with-I** | high | moderate |
| B — YouTube borderline (2019) | **mixed, leaning more-with-G** | medium | weak-or-contested |
| Added: TikTok "safeguard/diversify" recs (2021+) | **more-with-I** | medium | weak-or-contested |

**Sourcing (real URLs, several spot-verified):** FB 2018 10-K ($55.01B ad rev; DAU as engagement metric); WSJ Facebook Files + WIRED; blog.youtube "raise and reduce" (**70% U.S. drop — verified verbatim, self-reported**); Alphabet 10-K (YouTube ads $11.16B→$15.15B); **Mozilla** (71% of regrets from recs, 60% worse non-English — verified); Internet Policy Review systematic review (14/7/2 split); arXiv post-2019 causal-bot (recs may moderate on average); TikTok Newsroom / WSJ / WaPo / CCDH (39-second harmful-content cadence) / Guardian.
**Cross-case:** "when the mechanism optimizes social engagement directly, outcomes track I; when the platform adds explicit quality/safety demotions, outcomes can track G, but transparency limits confidence."

---

## FINAL TALLY — 4 genuinely-independent project-blind models

- **Case A: 4/4 → more-with-I** (all high confidence). Unanimous.
- **Case B: 4/4 → mixed** (all medium; ChatGPT leans-G). Unanimous on *mixed*.
- **The conditional refinement is unanimous:** selection wins where the change threatens the engagement metric; relaxes where the change is narrow / engagement-neutral.
- Independence caveat + spot-checks: see `CROSSCHECK_RESULT.md` §3. **Result written; preliminary pending ratification.**
