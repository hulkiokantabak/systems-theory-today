# THE CHAT / CODE WORKFLOW

Version: 0.2 · Status: Draft (author to ratify) · Last updated: Session 3

*How this project is operated across two tools — the deliberation engine (Chat) and the executor (Code) — with the repository itself as the shared memory. This document exists because the project has outgrown a single tool: by the end of Session 2 the work had already triggered a context compaction and message run-outs. That is not a nuisance to route around; it is a **signal that the architecture must change**, and this is the change.*

---

## 1. The problem, stated plainly

There are two distinct pressures, and the author named both:

1. **Code is needed for the build.** A public, forkable project needs a real git repository, a website build (static-site generator over `docs/`), a sane folder structure, and durable storage — none of which a chat can provide. This is the *stated destiny* of the project and the natural home of Theory C's "living commons."

2. **More importantly, Chat cannot hold the context.** The deliberation, the growing document set, and the surrounding state have exceeded what a single Chat context window can carry — hence the compaction and the run-outs. The failure is not of *thinking* (Chat's reasoning is fine) but of *memory and load*: Chat is being asked to be both the mind and the filing cabinet, and the filing cabinet is overflowing.

The first pressure is about *capability*; the second is about *capacity*. The second is the more urgent, because it degrades the work **now** — and it reframes the earlier "when do we go to Code?" answer (see `OPEN_QUESTIONS.md` Q-009, revised).

---

## 2. The principle

> **Separate the deliberation from the persistence. Chat is the mind; the repo is the memory; Code is the hands.**

The mistake that produced the compaction was making Chat carry the whole project in its head. It shouldn't. A well-run research group does not hold the entire archive in one person's working memory — the archive sits on shelves, and each meeting pulls down only the folders it needs. The repository is those shelves. Chat should hold only the *slice* a given deliberation requires; Code should be the one that reads and writes the *whole* shelf, because Code reads files from disk on demand and never needs the whole project resident in a context window at once.

This is not new machinery. It is the **two-Claude workflow already in use on the Vera novel** — Chat as advisor and prompt-shaper, Code as executor-in-repo, with HANDOFF documents passed between them — applied to this project. The four-document learning loop (`CATCHES` / `LEARNINGS` / metrics / handoff) is the same discipline. What follows just makes it explicit for *A Systems Theory for Today*.

---

## 3. Division of labor

| | **CHAT** — the deliberation engine | **CODE** — the executor & librarian | **THE REPO** — shared memory |
|---|---|---|---|
| **Owns** | reasoning, designed disagreement, synthesis, judgment | the filesystem, git, the build, the checks | the canonical state (all files) |
| **Does** | runs panel sessions; produces prose, decisions, dissent; shapes the next work-order | writes/edits files; runs the **propagation pass**; runs consistency **sweeps**; regenerates `viz/`; commits; deploys the site | holds truth; is read from and written to by both |
| **Holds in context** | only a **slice** (see §5) + the last digest | whatever it reads from disk, on demand — never the whole repo at once | everything, on disk (no context limit) |
| **Strength** | fresh, high-quality reasoning; the collision of vantages | determinism, scale, persistence, no context ceiling | durability, forkability, versioned history |
| **Must not** | try to hold the whole project; commit to the repo; run mechanical propagation by hand | make intellectual/architectural decisions; vote; overrule the panel or author | — |

The key reassignment: **propagation and consistency-sweeps move to Code.** The stale-output-docs problem this session (logged as C-010) happened precisely because a structural change was made in Chat and its ripple across dependent files was done by hand and nearly missed. Under this workflow that ripple is Code's deterministic job — a script that, given "the pressure-tests changed," updates every file that references them and fails loudly if any reference dangles. Chat decides *what* changes; Code guarantees the change *propagates*.

---

## 4. The shuttle (the loop)

A single repeatable cycle. Neither side ever holds the whole project.

```
   ┌─────────────────────────── THE REPO (git) ───────────────────────────┐
   │   canonical files · versioned history · the shared memory            │
   └───────▲───────────────────────────────────────────────────▲─────────┘
           │ (1) load slice                          (4) read full repo,
           │                                              write, commit, deploy
   ┌───────┴────────┐   (2) work-order   ┌──────────────────────┴──────────┐
   │   CHAT         │ ─────────────────► │   CODE                          │
   │ deliberate,    │                    │ execute, propagate, sweep,      │
   │ synthesize,    │ ◄───────────────── │ regenerate, commit, deploy      │
   │ shape order    │   (3) digest back  │                                 │
   └────────────────┘                    └─────────────────────────────────┘
```

1. **Chat opens** by loading its **registers** (§5) — not the whole repo, but the pointer, the frontier, the maintained gist, and this session's working documents, plus the last digest.
2. **Chat deliberates** and closes by emitting two things: the **substantive output** (new/changed prose, decisions, preserved dissent) and a **work-order for Code** (§6a) — an explicit instruction set: files to create/edit, propagation targets, checks to run, commit message.
3. **Code executes** the work-order against the *full* repo, then emits a **session digest** back to Chat (§6b): what changed, the new file tree, updated counts, and any catches it found during execution.
4. **The next Chat session** opens with that digest + a fresh slice. Repeat. Because the digest is compact and the slice is bounded, Chat's context never fills the way it did in Session 2.

**Directionality of authority is preserved.** The panel (in Chat) proposes; the chair synthesizes without voting; the author ratifies; Code executes only what the author has ratified. Code is hands, not head — it never makes an intellectual or architectural decision.

---

## 5. Registers, not a single slice (the memory, held at many resolutions)

The obvious question — *how thin or thick should the slice be?* — is a false binary. Too thin and the panel cannot deliberate (a pressure-test debate that cannot see the theory it bears on reasons badly); too thick and the context ceiling returns. The resolution is **not to choose a thickness but to hold several registers of the document at once**, each a different *compression* of the whole, and let a session compose its context from them. The repository is held at many resolutions simultaneously; a session reads the resolution each part needs.

The registers — a session loads **R0 + R1 + R3 always**, adds **R2** for its task, and pulls **R4** only when it must:

- **R0 — The pointer (always).** `README` + `ARCHITECTURE` + the last Code digest. Tiny. *Where everything is, and what just changed.*
- **R1 — The frontier (always).** `logs/OPEN_QUESTIONS.md`. Small. *What is unsettled — where the work is.*
- **R2 — The working set (per session).** The one to three documents this session actually edits, at full resolution. *The material in front of you.*
- **R3 — The gist of the whole (always, maintained by Code).** A short, standing **digest of the canon** — one-paragraph compressions of the history, the landscape, and each theory's claim, plus the current pressure-test set. This is the artifact that makes multi-register work: it gives every session the *shape* of the whole project cheaply, so nothing is ever fully out of view even when its full text is on the shelf. Code regenerates R3 as part of each digest.
- **R4 — Deep context (rare, explicit pull).** A full document fetched from Code when a session genuinely needs the complete text (re-reading a whole deliberation, auditing a full record). Requested, not pre-loaded.

So a session **simultaneously** holds the map (R0), the frontier (R1), its working documents at full resolution (R2), and the gist of everything else (R3) — four registers at once, at different resolutions — reaching for deep text (R4) only on demand. That is how the document stays whole *in view* without any worker holding it whole *in context*. The thin/thick question dissolves: the answer is **both, at different resolutions, at the same time.**

*(This generalizes to **L-008**: when a design choice looks binary, first ask whether a tiered structure can hold both registers at once, chosen per use — optionality over a forced single choice. It also sharpens the Vera HANDOFF practice: not one briefing but a layered one — pointer, frontier, working set, and a maintained gist.)*

---

## 6. The two handoff artifacts

### 6a. Chat → Code: the work-order

Emitted at the end of a Chat session. A worked template:

```markdown
# WORK-ORDER — Session N
Author-ratified: [yes/no — Code executes only ratified orders]

## Files to create
- path/to/NEW_FILE.md — one-line purpose

## Files to edit
- path/to/FILE.md — what changes (precise enough to apply)

## Propagation targets (the ripple)
- "The pressure-tests changed" → update every file referencing them:
  GOALS, METRICS coverage tracker, README, CANDIDATE_THEORIES, INITIAL_EVALUATION, DIAGRAMS §4, SKILL
- Fail loudly if any cross-reference dangles.

## Checks to run
- file count == METRICS snapshot
- every `*.md`/`*.html` reference resolves (allow the known illustrative example)
- catch / learning / question ID counts reconcile with METRICS
- Mermaid blocks parse; viz JS syntax-checks

## Regenerate
- viz/diagrams.html (if diagrams changed); rebuild site

## Commit
- message: "Session N: <summary>"; branch/PR: <name>
```

### 6b. Code → Chat: the session digest

Emitted after Code executes. Compact by design (this is what keeps Chat's context small):

```markdown
# DIGEST — Session N (from Code)
## Done
- created: … · edited: … · propagated: …
## Repo state
- files: NN (was MM) · tree delta: …
- counts: catches NN · learnings NN · open-Qs NN · pressure-tests 13
## Checks
- all references resolve ✓ · counts reconcile ✓ · diagrams render ✓
## Catches Code found during execution
- C-0NN: <e.g. a dangling reference the propagation caught>
## Deployed
- site: <url/status> · commit: <hash>
## For the next Chat session
- suggested registers (R2 for the next session): …
- open threads: …
```

These two artifacts live in the repo (e.g. under `logs/handoffs/`) so the shuttle itself is versioned and auditable — the project's continuity is a first-class, forkable object, not something trapped in a chat that will scroll away.

---

## 7. Timing: stay in Chat while it holds; the shuttle is limit-triggered

The earlier decision tree (`DIAGRAMS.md` §7) gated Light Code on a *stable, ratified skeleton*. Two refinements now govern:

- **The trigger is capacity, not preference.** Deliberation is best done in Chat, and there is no virtue in leaving it early — *while Chat holds the working context, stay in Chat.* What forces the move is the **context ceiling**: the project has already hit a compaction and message run-outs, the signal that the repo must become the memory. The rule: **stay in Chat until the limit bites; the shuttle exists for when it does — and it now does.**
- **Light Code — stand it up now, keep the center of gravity in Chat.** Because the ceiling has been reached, initialize the repo + site now so the memory is durable and the shuttle is ready. This is **not a migration away from Chat**: deliberation stays in Chat, running *over* the shuttle and drawing registers (§5) instead of the whole archive. The skeleton is stable *enough* (further change is content, not structure), so anyone reading the public site is reading a settling shape.
- **Heavy Code — unchanged, still gated on Q-001.** Executable models and data pipelines wait until a theory has an operationalized, falsifiable claim. That claim now exists **in draft** (`outputs/THEORY_A_OPERATIONALIZED.md`) but is **not yet tested**, so the gate is *approaching, not passed*. The "maybe never" branch stays honest.

Sequence: **stand up Light Code now for durable memory; keep deliberating in Chat over the shuttle for as long as Chat holds; enter Heavy Code only when Theory A's operationalized claim is ready to run.**

---

## 8. Standing it up — concrete next steps

1. **Code initializes the repo — private — plus a public reading site (two surfaces).** Create the git repo from the current file tree (already clean and Phase-2-ready per `ARCHITECTURE.md`); keep the **repository private for now** — the *contribution* surface (forking, pull requests) stays gated until the skeleton is stable, so contributors branch a settling shape, not a molten one. Stand up a **public website** over `docs/` — the same Eleventy → GitHub Pages pattern proven on the author's other sites — as the *reading* surface, so the ideas are legible, attributable, and evolving in public from the start. **Open the repository for forking when ready.** (The two-surfaces logic is in `docs/THE_LIVING_DOCUMENT.md` §7.)
2. **Adopt the two templates** (§6) and a `logs/handoffs/` folder; make the first digest the seed of the next Chat session.
3. **Write the propagation + sweep scripts** as Code's standing tools: a reference-integrity check, a count-reconciliation check against `METRICS`, a Mermaid-parse check, and a "structural change → ripple" helper. (Several of these already exist as one-off bash in the session logs; Code makes them permanent.)
4. **Fix the state-pack convention in the skill** (`SKILL.md`) so every future Chat session knows what to load and what to leave on the shelf.
5. **From then on, run the loop** (§4): deliberate → work-order → execute/propagate/sweep/commit/deploy → digest → repeat.

---

## 9. What this buys, and what to watch

**Buys:** the context ceiling stops degrading the work (Chat holds a slice, not the archive); propagation and consistency become deterministic Code jobs rather than fallible hand-work (the C-010 fix, made structural); the build, storage, and folder discipline land in their native tool; and Theory C's "living commons" gets the real, forkable repository it was always meant to inhabit.

**Watch (logged in `OPEN_QUESTIONS.md`):** slice **granularity is now resolved by the register model** (§5; Q-010 → answered) — hold R0/R1/R3 always, R2 per task, R4 on demand. What remains open is **divergence** — when Chat's intended change and Code's on-disk state disagree, resolve it deliberately, never by silently overwriting one with the other (Q-011; the author's own branching-and-reconciliation discipline, applied to the shuttle). The **two surfaces** (public reading site / private-until-ready contribution repo) are set (§8; `THE_LIVING_DOCUMENT.md` §7).

---

*This workflow is itself an instance of the project's thesis: no single vantage — not even a single tool — holds the whole; coherence is maintained by structured composition across many, with the seams made explicit. The shuttle is Theory C, operating on the project's own body.*

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0*
