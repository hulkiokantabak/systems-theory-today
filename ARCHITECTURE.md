# ARCHITECTURE

*The structural backbone of the project. When any other document and this one disagree about how the project is organized, this one is the reference — until the author ratifies a change here.*

Version: 0.4 · Last updated: Session 4

---

## 1. What the architecture has to hold

This project is unusual in three ways, and the architecture is shaped to hold all three at once:

1. **It is a work of ideas** (a systems theory) — so it needs rigorous, readable, source-grounded intellectual content.
2. **It is run as designed disagreement** (a panel) — so it needs a faithful record of who argued what, what was voted down, and what dissent survived.
3. **It is a living public commons** (destined for GitHub + a website, forkable) — so it needs to be legible to a stranger, versioned, and structured so that a contributor can find where to add without breaking anything.

Everything below serves those three requirements.

## 2. Directory map

```
systems-theory-today/
├── README.md                     # Front door
├── ARCHITECTURE.md               # This file — the structural reference
├── SKILL.md                      # The systems-theory-panel skill (how to run this)
├── CONTRIBUTING.md               # How outsiders fork, contribute, and dissent
├── LICENSE.md                    # CC BY-SA 4.0 (docs) + MIT (code)
│
├── docs/                         # The stable reference layer
│   ├── GOALS.md                  # What we are trying to do
│   ├── GROUND_RULES.md           # Independence, do-no-harm, the catches loop
│   ├── METHOD.md                 # The designed-disagreement process
│   ├── METRICS.md                # Everything we count
│   ├── SKILLS.md                 # Primary + secondary skills, and which others we tap
│   ├── VISUALIZATION.md          # How outputs become graphics / charts / networks
│   ├── GLOSSARY.md               # Living definitions (esp. the contested three)
│   ├── HISTORY_OF_SYSTEMS_THEORIES.md   # The intellectual spine (what came before)
│   ├── LANDSCAPE_OF_CONTEMPORARY_SYSTEMS_THEORIES.md  # What's out there now (the field surveyed)
│   ├── DIAGRAMS.md               # The project's logic & flows, drawn (Mermaid; renders on GitHub)
│   ├── CHAT_CODE_WORKFLOW.md     # Operating across Chat & Code (the shuttle) — repo as memory
│   └── THE_LIVING_DOCUMENT.md    # What makes this live vs static — metabolism, test, failure modes
│
├── panel/                        # The deliberating body
│   ├── PANEL_ROSTER.md           # Core 10 + advisory 22 + extended bench
│   ├── SEVEN_ROUND_DISCUSSION.md # Founding seven-round deliberation
│   └── SESSION_2_PRESSURE_TESTS.md  # S2: re-debate & expand the pressure-tests (7→13, layered)
│
├── outputs/                      # What the panel + chair produce
│   ├── INITIAL_EVALUATION.md     # Preliminary hypotheses
│   ├── COMPREHENSIVE_PLAN.md     # The build plan toward code
│   ├── CANDIDATE_THEORIES.md     # Our own seeded theories (A, B, C…)
│   ├── THEORY_A_OPERATIONALIZED.md  # Theory A (the gap) as a measurable, falsifiable claim (Q-001)
│   ├── THEORY_B_OPERATIONALIZED.md  # Theory B (optimization intensity) — the cheapest to test
│   └── THEORY_C_OPERATIONALIZED.md  # Theory C (the reflexive ablation) — turned on the project itself
│
├── logs/                         # The learning loop
│   ├── CATCHES.md                # Mistakes caught, with fixes
│   ├── LEARNINGS.md              # Patterns distilled from catches
│   ├── OPEN_QUESTIONS.md         # Live disagreements & open questions (the revealing record)
│   ├── REFLECTIONS.md            # The project's honest retrospective on itself (append-only)
│   └── handoffs/                 # Versioned Chat↔Code shuttle handoffs
│       ├── WORK_ORDER_S4.md      # First Chat→Code work-order (repo + site + study scaffolds)
│       └── COOPERATION_LOG.md    # Append-only ledger of the Chat↔Code collaboration
│
└── viz/                          # Visual artifacts
    ├── systems-theory-map.html   # Interactive landscape + panel map
    └── diagrams.html             # Interactive render of the logic diagrams
```

## 3. The four layers

The project has four layers, and the discipline is to keep them from bleeding into one another.

**Layer 1 — Reference (`docs/`).** Slow-changing. The history, the goals, the rules, the method, the glossary. A contributor should be able to read this layer and understand the project without reading a single deliberation. Changes here require author ratification.

**Layer 2 — Deliberation (`panel/`).** The living argument. Append-only in spirit: new sessions are added, old ones are not silently rewritten (if a past claim is overturned, that is recorded, not erased). This is where disagreement lives and is preserved.

**Layer 3 — Output (`outputs/`).** What the deliberation produces once the chair synthesizes and the author ratifies. Evaluations, plans, and the candidate theories. These *do* get revised as the theory matures — but every revision bumps a version and notes what changed and why.

**Layer 4 — Learning (`logs/`).** The reflexive layer. Every time the project catches itself in an error — a factual mistake, a persona that drifted into agreement, a visualization that misled — it goes in `CATCHES.md`. When enough catches rhyme, the pattern is distilled into `LEARNINGS.md` and fed back into `METHOD.md` and `GROUND_RULES.md`. This is what makes the document "live and learn."

## 4. Document contract (what every document must declare)

Every file in `docs/`, `panel/`, and `outputs/` carries a small header:

- **Version** (semantic-ish: bump the minor for revisions, the major for restructures)
- **Last updated** (which session)
- **Status** (Draft / Ratified / Superseded)

And, where relevant:

- **Dissent** — if the panel did not reach consensus, the minority position is recorded at the foot of the document, never deleted.
- **Open questions** — carried forward, not buried.

## 5. The workflow, in one paragraph

The author sets a direction. The chair (Claude) prepares the ground (research, framing, roster, prompts). The panel deliberates in rounds — arguing, rating, voting things down, dissenting. The chair synthesizes the deliberation into an output *without casting a vote of its own*. The author ratifies, amends, or rejects. Catches are logged; learnings are distilled; the reference layer is updated. Then the next direction. This is the same two-body pattern the author uses across projects (a thinking/advisory body and an executing/synthesizing body), adapted here so that the "panel" is the advisory body and "Claude-as-chair" is the synthesizer.

## 6. Path to code

The project is designed to migrate from prose to software without re-architecting:

- **Phase 0 (now):** Markdown reference + deliberation + seeded theories. Human-run panel simulated by the chair.
- **Phase 1:** Structure the candidate theories as explicit *models* — named variables, proposed couplings, feedback loops — in machine-readable form (YAML/JSON alongside the prose).
- **Phase 2:** A public website (static-site generator over this same `docs/` tree, so the repo *is* the site's source). Interactive versions of the `viz/` artifacts.
- **Phase 3:** Executable models — system-dynamics / agent-based / network simulations of the candidate theories, so a claim like "complexity outruns adaptive capacity" becomes a runnable, falsifiable model, not just a sentence.
- **Phase 4:** An open contribution pipeline — forks propose new variables, couplings, or whole rival theories; the panel method is the review process.

The directory map above is already Phase-2-ready: `docs/` is the content, `viz/` is the interactive layer, `outputs/CANDIDATE_THEORIES.md` is the thing Phase 3 turns into runnable models.

## 7. Naming and versioning conventions

- Files: `SCREAMING_SNAKE_CASE.md` for reference/output documents; lowercase for web/code artifacts.
- Sessions are numbered (Session 1, 2, …); every deliberation and every metrics snapshot is stamped with its session.
- Candidate theories are lettered (A, B, C…) and never renumbered once public — a retired theory is marked *Superseded*, not deleted, so that forks referencing it don't break.
- Panelists are referred to by surname in deliberations; the roster is the source of truth for who is core vs. advisory vs. bench.

## 8. The one rule that governs the rest

**Nothing that was genuinely argued is silently erased.** Overturned claims are marked overturned. Minority reports survive. Catches are permanent. A living document earns trust by showing its scars, not by hiding them. Every other convention here is negotiable; this one is the spine.
