# DIGEST — Session 4f (from Code)

Version: 1.0 · Status: Delivered · Last updated: Session 4f
Directive: author-direct (`logs/handoffs/COOPERATION_LOG.md` entry 30) — skill go-live + Study B new approach + external cross-check package · Builds on tag `session-4e`.

*A short follow-on: the `study-discipline` skill went **live**, and Study B was **redesigned** around findable public data — the selection-not-design (H3) test on documented cases — with the coding handed to **project-blind external LLMs** as the cross-model guard.*

## Done

1. **`study-discipline` skill → RATIFIED (v1.0), live.** Repo skill header/footer + `SKILL.md` pointer + `docs/METRICS.md` updated; installed to `~/.claude/skills/study-discipline/` (available in every Code session).
2. **Study B — APPROACH B2 (documented-case H3 sub-test).** `studies/study-B-optimization/APPROACH_B2_DOCUMENTED_CASES.md` instantiates the ratified pre-reg §4.3 (selection-not-design) on two **sourced public cases** — Facebook "Meaningful Social Interactions" (2018; fully sourced — benign stated intent, engagement-driven outrage outcome) and YouTube "borderline content" reduction (2019; intent sourced, outcome flagged **contested**). Includes a neutral coding rubric, a pre-registered directional prediction + falsification, and preserved dissent. Evidence gathered via WebFetch (real, cited; access 2026-07-08) — **nothing fabricated**.
3. **External cross-check package** (author's Downloads): a **blind, self-contained prompt** (study-B-crosscheck-PROMPT.md, no mention of the project/theory/expected answer) + a **kit zip** (study-B-crosscheck.zip: prompt + README + response template) — to carry to Gemini/Grok/ChatGPT. Their independent, project-blind coding is the real test (the L-010 cross-model guard against Claude's project-exposure).

## Why this is honest

Claude is exposed to the project, so its own coding is **directional-only** (C-015). The test's validity rests on **independent, project-blind coders agreeing** — hence the external cross-check. The **ratified pre-registration stands**; APPROACH_B2 is a Code-proposed instantiation **pending the external run + Chat/author ratification** of the coding. The B O→P *quantitative* run remains frozen-but-unrun (no data — S4e); B2 tests only the *selection-not-design* integrity claim, which the public record *can* speak to.

## Repo state / checks

- Canonical baseline **37** unchanged (APPROACH_B2 + the live skill live in excluded dirs). `npm run check` green; R3 + dashboard regenerated. Tag `session-4f`; site live; repo private.

## For the author

- **Run the cross-check:** paste study-B-crosscheck-PROMPT.md into fresh **Gemini / Grok / ChatGPT** chats (keep them blind — don't mention the project or theory), collect the verdicts into RESPONSE_TEMPLATE.md, and return them. Then Code/Chat compares to the prediction and logs the result honestly — a "mixed" or "more-with-stated-intent" outcome is a **real result**, not a failure.
- **Scrutinize the case selection** (Campbell's-Law guard): Code chose the two cases; add or swap cases before the run if you want a broader or more balanced pool.

---

*Author: Hulki Okan Tabak — with Claude · License: docs CC BY-SA 4.0 · code MIT*
