# METHOD

Version: 0.1 · Status: Draft (author to ratify) · Last updated: Session 1

*How the panel actually runs. This is the operating manual; `GROUND_RULES.md` is the constitution.*

## 1. The two-body pattern

The project runs on two bodies, mirroring the author's established practice across projects:

- **The Panel** — the *deliberative* body: real thinkers, reconstructed as intellectual positions, who argue, rate, and dissent. Ten core members; twenty on-call advisors; an extensible bench.
- **The Chair (Claude)** — the *synthesizing* body: prepares the ground, poses the questions, keeps the record, and integrates the argument into outputs. **The chair does not vote and does not impose a conclusion.**

The **author** stands outside both, and ratifies.

This separation is load-bearing. The panel supplies genuine, uneven, conflicting judgment; the chair supplies structure and synthesis; the author supplies direction and ratification. Collapsing any two of these is a failure mode.

## 2. Designed disagreement — the engine

Consensus is *not* the goal; *illumination through structured conflict* is. Concretely:

- Panelists are composed to disagree **by design** — different eras, disciplines, temperaments, and core commitments, chosen so their fault lines are productive (see `PANEL_ROSTER.md`, which lists, for each member, the fights they bring).
- If a round drifts toward easy agreement, the chair intervenes (Ground Rule 12): assign a devil's advocate, summon an advisor likely to object, or reframe the question until a real fault line opens.
- **Subtractive bias** (Rule 13): a round's best move is often to *delete* a weak idea. We prune aggressively.
- **The author decides** the load-bearing calls; the panel argues them out and records the split.

## 3. The round structure

A deliberation runs in **rounds**. Each round has a question, positions, a clash, and — where evaluative — a vote. The default deliberation length is **seven rounds** (the founding session uses exactly this), but sessions may be shorter for focused questions.

A round produces:
1. **Positions** — each relevant panelist's stance, in their own voice, briefly.
2. **The clash** — the two or three sharpest disagreements, stated as fault lines.
3. **Ratings / votes** — where the round evaluates options, explicit scores and a recorded tally.
4. **Dissent** — any minority position, preserved.
5. **Catches** — any error, drift, or truism caught during the round, sent to `logs/CATCHES.md`.

## 4. Who speaks when

- **Core panel (10):** present at every round of a deliberation.
- **Advisors (20):** summoned for the rounds where their expertise bites (e.g. the neuroscientist for the dopamine question, the commons theorist for coordination and climate, the surveillance-capitalism analyst for propaganda). Summoning is explicit and recorded.
- **Extended bench:** named thinkers not on the standing roster who can be called in for a specific point (e.g. Baudrillard for hyperreality, Habermas for communicative rationality, Morton for hyperobjects). Also recorded.

The chair chooses whom to summon based on the round's question, and errs toward summoning a voice likely to *object* rather than to agree.

## 5. Rating and voting mechanics

When the panel evaluates (e.g. "which of the seven problems is the master problem," "which candidate theory is strongest," "does this claim survive"):

- Each participating member gives a **score** on a stated scale (e.g. 1–10 for "explanatory power," or a yes/no/abstain on survival).
- Scores are **shown individually**, not just averaged — the distribution matters more than the mean.
- A **tally** is recorded, along with the **highest** and **lowest** scorer and *why* (the outliers are usually the informative ones).
- A vote never ends an argument by fiat; it *snapshots* where the panel stands, and the dissent is carried forward.

## 6. From deliberation to output

After a deliberation, the chair writes the outputs (`outputs/`) by:

1. **Synthesizing faithfully** — integrating the argument *including its unresolved disagreements*, not resolving them by preference.
2. **Separating registers** — description, explanation, prescription kept distinct (Rule 8).
3. **Labeling status** — what is grounded, what is inference, what is speculation.
4. **Preserving dissent** — minority reports at the foot of the document.
5. **Handing to the author** — for ratification, amendment, or rejection.

## 7. The learning loop (operational)

- During every round, watch for the five recurring failures: **factual error, persona drift into agreement, flattened dispute, misleading visualization, truism used as slogan.**
- Each is logged in `CATCHES.md` *with its fix*, immediately.
- When catches rhyme, distill a **learning** in `LEARNINGS.md`; if it implies a rule, amend `GROUND_RULES.md` and this file.
- Each session opens by reading the latest learnings, so the method compounds.

## 8. Session lifecycle

- **Start:** state the session's direction; read prior learnings and open questions; decide roster and round-count.
- **Middle:** run the rounds; log catches live; keep the record.
- **End:** write/append outputs; update `METRICS.md`; distill learnings; carry open questions forward; write a one-paragraph handoff for the next session at the foot of `SEVEN_ROUND_DISCUSSION.md`.

## 9. What we deliberately borrow from elsewhere

This method is a *composition* of tools the author already uses and of the systems tradition itself:

- **Designed disagreement + subtractive bias + author-ratifies** — from the author's standing panel practice.
- **Explicit rating/voting with preserved dissent** — from the author's structured-round protocols.
- **Leverage-point thinking** (Meadows) — when we ask *where in a system to intervene*, we use her hierarchy of leverage.
- **Stock/flow/feedback/delay vocabulary** (systems dynamics) — the shared language for describing mechanisms.
- **Retrodiction then prediction** (Turchin) — a candidate mechanism must first fit the past before it is allowed to forecast.
- **"Proto-synthesis" discipline** (metamodernism/Morin) — every synthesis is explicitly provisional and never declared final.

## 10. The method's own hypothesis

The method is not neutral machinery; it is itself a bet — that **structured disagreement among many perspectives, integrated by a synthesizer and continuously revised, can think a whole that exceeds any single mind.** Whether that bet pays off is measured in `logs/` (Ground Rule/Goal S5): does the method demonstrably catch what a lone author would miss? If, over time, it does not, the method is wrong and must change. That test is part of the project.
