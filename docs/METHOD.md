# METHOD

Version: 0.3 · Status: **RATIFIED (author, Session 4k) — the S4j refresh and §10's honest-status rewrite, left provisional-pending-author, are confirmed by the author's ratifying contact; §10 gains an S4k coda (the bet set down, the sub-claim retired, the Rule-25 moratorium).** · Last updated: Session 4k

*How the panel actually runs. This is the operating manual; `GROUND_RULES.md` is the constitution.*

> **Refresh note (S4j).** Sections 1–9 below describe the panel-deliberation method as designed in Session 1 — and they remain broadly accurate at the deliberation level. But for four sessions the manual sat at v0.1 while the system it governs grew a whole second half: the Chat/Code shuttle, the studies, the drain, the measurement seat, the grader, the courier rounds, the delegation discipline, and the site playtest. The forum's improvement roadmap named this the stalest document in the canon and the map that no longer matched the river. **Section 0 (added S4j) maps the live machinery; §10 is rewritten to the honest status.** The rest is preserved, not scrubbed.

## 0. The live system, in one map (added S4j)

The method has grown from a single deliberating panel into a two-surface, two-tool, self-metabolizing system. The current operating parts:

- **The two bodies + the author** (§1) — unchanged in principle: the panel argues, the chair synthesizes without voting, the author ratifies from outside.
- **The Chat/Code shuttle** (`docs/CHAT_CODE_WORKFLOW.md`) — Chat deliberates; Code executes, propagates, and sweeps; the repository is the shared memory. Multi-register memory (the always-loaded R3 gist; per-session digests; the append-only cooperation log).
- **The learning loop** (§7) — catches (`logs/CATCHES.md`) → learnings (`logs/LEARNINGS.md`) → ground-rule amendments (`docs/GROUND_RULES.md`), with reflections (`logs/REFLECTIONS.md`) turning the method on itself.
- **The drain** (`logs/DECISIONS_CHANGED.md`) — a decided subtraction operator (retract / reverse / retire / downgrade / strike), installed because the ledger had inflow and no outflow. Its self-initiated channel has fired zero times across two null postings; that null is recorded evidence against Theory C's "the machine subtracts" sub-claim.
- **The studies** (`studies/`, gated) — pre-registered falsifiable tests of the theories and of the method itself (placebo, ablation, the TTM construct), governed by `skills/study-discipline` and the measurement seat (Campbell + Pearl).
- **The instruments and courier rounds** — severity, convergence, and catch-detection scorers, validated by running them past project-blind external LLMs (cross-model, not genuinely foreign — L-013). Fixture-tested before dispatch; no rung fires from an instrument-acceptance run.
- **The grader** (`panel/GRADER_DESIGN_DRAFT.md`) — a held-out upstream monitor, seat-ready, run once in shadow (not seated).
- **The delegation discipline** — a standing delegation (the author asking the machine to run autonomously) is booked as a COST before use (C-023 → C-027 → C-032 → C-035); the SG-10 guard is meant to stop a delegation stacking on unconfirmed ground.
- **The two surfaces** — the private contribution repository and the public reading website (playtested S4i; its content/presentation boundary is governed by `skills/site-playtest`).

The forum's standing warning about all of this (§10 and the wrongs analysis): this machinery has, so far, moved zero object-level rungs. A method is not its apparatus; the apparatus is instrumentally valuable only insofar as it moves the object. The S4j moratorium recommendation freezes net-additive machinery until it does.

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

## 10. The method's own hypothesis — and its honest status at S4j

The method is not neutral machinery; it is itself a bet — that **structured disagreement among many perspectives, integrated by a synthesizer and continuously revised, can think a whole that exceeds any single mind.** Whether that bet pays off is measured in `logs/` (Ground Rule/Goal S5): does the method demonstrably catch what a lone author would miss? If, over time, it does not, the method is wrong and must change. That test is part of the project.

**The status of that bet, stated honestly (S4j; the author's to ratify).** The bet is **not yet demonstrated**, and it is important not to over- or under-state where it stands:

- The one interpretable-enough ablation signal the project owns is **null-compatible**: the S4i blue read (GPT-5, 60 pooled S3) returned a 1.15× ON/OFF ratio, inside the null margin at permutation p=0.24. An earlier S4g read pointed the other way (1.45×, p=0.016, C-favorable) but is a **broken-series, pre-anchoring datum** that may never be pooled or trended with the later one, and carries a Rung-0 flag on any drift toward "the ablation supports C."
- The instrument that would settle the question — catch-**detection** reliability — **has not passed its floor**: it sits at ~1% cross-family agreement on live material (candidate learning L-016), so every ablation ratio is denominated in an unreliable unit and is uninterpretable, in either direction.
- Therefore the honest §10 verdict is neither of the two tempting ones. **Do not write "the method is falsified"** — no valid test has run. **Do not write "the ablation supports the method/Theory C"** — that read is broken-series and Rung-0-flagged. The true statement is: *the method's central bet is not yet demonstrated; the one interpretable ablation signal is null-compatible; and the instrument that would settle it has not passed its reliability floor.*

And the deeper structural caution the forum's measurement seat and the reflexivity trap force onto this section: the ablation is **self-administered** — one model generates and grades both arms (Q-012 / L-015) — so even a clean result would not be inferential until a genuinely foreign vantage (an opened repo, a real external grader) can run it. Until then §10's test is *armed but unfired*: the method has not been shown to catch what a lone author would miss, because the only eyes that have looked are the lone author's own, wearing many masks. Refreshing this section to match that reality — rather than leaving it as an aspirational sentence — is itself an instance of the method's §7 loop turning on the method.

**S4k — the bet is set down, not settled.** At the author's ratifying contact the project ruled that no genuinely foreign vantage will come in *this* build (decision 3). The consequence for §10 is stated plainly, not hedged: the method's central bet is **conclusively untested in this closed setup** — not "the method is falsified" (no valid test has run) and not "the method works" (the one interpretable read is null-compatible and its instrument is below its reliability floor), but *set down*, its confirmation reserved to a future fork with real outside eyes. In the same act the method retired one of its own corollaries — **"the machine subtracts of its own motion"** (DC-007) — on four readings of a null it never discharged: the loop *records* subtractions, it does not *originate* them. And a standing **moratorium** (Rule 25, reversible) now freezes the method from growing further until an object-level rung moves — the method's honest posture at completion is *stop refining the instrument and point it at the world*, and the record shows the world has not yet been touched.
