# STUDY B — APPROACH B2: the documented-case selection test, with an external cross-check

Version: 0.1 · Status: **CODE-PROPOSED INSTANTIATION of the ratified pre-registration §4.3 (H3), author-directed (S4f). Preliminary; external cross-check **COMPLETE** (4 project-blind models → `outputs/CROSSCHECK_RESULT.md`); PENDING Chat/author ratification of the reading. This does NOT change the ratified pre-registration (which stands).** · Last updated: Session 4f (Code)
Governs under: `PRE_REGISTRATION.md` v0.3 (ratified) §4.3 (case-selection rule) + §5 (falsifiers). Discipline: `skills/study-discipline/SKILL.md` §5 (cross-model requirement).

> **Why this exists.** The ratified Study B needs external time-series data (P) that this environment cannot obtain and that will not come — so the O→P *quantitative* run (H1/H2) is frozen-but-unrun (`RUN_STATUS.md`, `FROZEN_HASHES.md`). But B's **integrity test — H3, selection-not-design (§4.3)** — is testable from the **public documentary record** of specific platform decisions, which *can* be found and cited. This approach instantiates §4.3 on real, sourced cases; and because the only coder available in this environment (Claude) is **exposed to this project**, it hands the coding to **project-blind external LLMs** (Gemini, Grok, ChatGPT) as independent cross-coders. That is the study-discipline §5 "different model, blind to arm and hypothesis" requirement, made concrete — and the answer to the C-015 self-administration confound.

## 1. The claim under test (H3, from the ratified pre-reg §4.3)

> In cases where a platform's **documented stated intent** for an algorithm change and the **engagement/commercial selection pressure** it faced point in *different* directions, the **outcome follows the pressure**, not the stated intent — *by selection, not by a designer's plan* (Theory B). The test **admits falsification**: a pattern where outcomes track stated intent (de-optimizations that stuck) would challenge B's strong version — agency prevailed.

## 2. The neutral coding rubric (what a blind coder records per case)

Per case, independent of any theory:
- **G — stated goal:** what the platform *publicly said* the change was for.
- **I — engagement/commercial incentive:** what the platform's revenue/engagement model rewarded.
- **O — documented outcome:** what independent evidence says actually happened.
- **Verdict:** outcome aligned **[more with G] / [more with I] / [genuinely mixed-or-unclear]**, with a **confidence** (low/med/high) and the **evidence** cited.
- **Evidence quality:** strong / moderate / weak-or-contested.

## 3. Pre-registered prediction + falsification (fixed *before* the cross-check)

- **B predicts:** across the divergent cases, the modal blind verdict is **"more with I"** — especially where G is benign/well-being and I is engagement.
- **Challenged/falsified if:** the modal verdict is **"more with G"** (de-optimizations stuck per stated intent), **or** verdicts are so **coder-dependent** that no stable pattern survives cross-model coding (a measurement-artifact flag — study-discipline §5 / pre-reg falsifier #4).
- **The cross-check is the validity guard:** the reading counts only to the degree **independent, project-blind coders agree**. Claude's own coding (§5) is **directional-only** (project-exposed, single coder — the C-015 confound), never the finding.

## 4. The cases (sourced from the public record; WebFetch access date 2026-07-08)

### Case A — Facebook "Meaningful Social Interactions" (MSI) News Feed change, January 2018
- **G (stated goal):** Zuckerberg, Jan 2018 — *"I'm changing the goal I give our product teams from focusing on helping you find relevant content to helping you have more meaningful social interactions"*; prioritize friends/family and credible local news; framed around well-being after a "difficult 2017" of fake-news/interference accusations. `[src: en.wikipedia.org/wiki/News_Feed]`
- **I (incentive):** engagement / time-on-platform; the change up-weighted reshares and comments (which provocative content maximizes).
- **O (documented outcome):** later reporting from leaked internal research (the 2021 **Facebook Files**, *Wall Street Journal*, from Sept 2021) found feed-quality reports declining with **increased anger**; a documented test account's feed filled with **"polarizing and graphic content, hate speech and misinformation"** within ~3 weeks; **leadership reportedly rejected proposed fixes** because they "might cause fewer users to engage." `[src: en.wikipedia.org/wiki/Facebook_Files]`
- *B's predicted verdict:* more with **I**. Evidence quality: **strong**.

### Case B — YouTube "borderline content" recommendation reduction, 25 January 2019
- **G (stated goal):** YouTube, 25 Jan 2019 — reduce recommendations of "borderline content" + harmful misinformation (fake cures, flat earth, false history) because *"limiting the recommendation of these types of videos will mean a better experience for the YouTube community"*; scoped to <1% of content, recommendations only. `[src: blog.youtube/news-and-events/continuing-our-work-to-improve/]`
- **I (incentive):** watch-time / engagement (borderline/sensational content can be high-retention).
- **O (documented outcome):** **UNDER-DETERMINED from the sources gathered here.** YouTube *later self-reported* a large reduction in watch-time from borderline recommendations (a ~70% US figure has been cited), but independent verification is limited and academic assessments are mixed/contested. **This is exactly what the external cross-check should scrutinize** (the blind coders may hold fuller knowledge). Evidence quality: **weak/contested**.
- *B's predicted verdict:* **open** — a genuine test of whether a de-optimization stuck per stated intent (bounding B) or eroded back toward engagement.

## 5. Claude's preliminary coding — DIRECTIONAL ONLY (project-exposed, single coder; C-015)

Recorded for calibration, **not** as a result (study-discipline §5): Case A → **more with I** (high confidence, strong evidence); Case B → **mixed/unclear** (low confidence, weak/contested evidence). This is precisely the biased, single-coder reading the external cross-check exists to correct — do **not** treat it as the finding.

## 6. The external cross-check protocol (the actual test)

- A **project-blind** prompt + dossier (no mention of Theory B, this project, or an expected answer) goes to **≥2 independent LLMs** (Gemini, Grok, ChatGPT), each coding the cases per §2 from the sourced facts + their own knowledge, citing evidence, and free to answer "more with G" or "mixed."
- **Convergence** across project-blind models on "more with I" (Case A) and on a Case-B verdict = a cross-model-robust reading; **divergence** = a measurement-artifact flag.
- Code prepared the package for the author to run this: `study-B-crosscheck-PROMPT.md` + `study-B-crosscheck.zip` (in the author's Downloads). The author collects each model's verdict and returns them; Code/Chat then compares against §3 and logs the result honestly (including a null/mixed as a real result — study-discipline §4).

## 7. Scope, dissent, Campbell (carried from the ratified pre-reg §6/§9)

- **Vantage (D-005):** all cases are large Western consumer-attention platforms; the reading, if any, is about *that* ecology — not "optimization" as such.
- **Preserved dissent (pre-reg §9):** Luhmann (intensity vs selection-differential), Heidegger (disease in its own terms), Kant (proxy ≠ thing), Le Guin (vantage), Nietzsche (behavior ≠ meaning) all still stand; a documented-case H3 reading speaks to *selection-not-design*, not to the whole of B.
- **Campbell's Law (pre-reg §8):** the cases are *chosen by Code* — the pre-committed rubric, the pool's admission of a B-challenging outcome (Case B), and the blind cross-coding are the guards against cherry-picking. **The author/Chat should scrutinize the case *selection* itself**, and can add or swap cases before the cross-check runs.

---

*Code-proposed instantiation (author-directed, S4f); the ratified pre-registration stands. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
