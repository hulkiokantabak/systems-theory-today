# VISUALIZATION

Version: 0.3 · Status: Draft (author to ratify) · Last updated: Session 3

*How we turn the project's ideas into graphics, charts, and networks — so the findings can be seen, not only read, and so a stranger can grasp the shape of the argument in a minute. Mirrors the author's incremental visual practice: a base map first, then layers of detail.*

## 1. Why visualization is load-bearing here (not decoration)

A systems theory is, structurally, a claim about **entities, relationships, and dynamics**: which things exist, how they are coupled, and how they change over time. That is exactly what graphs, networks, and time-series *are for*. For this project, visualization is not illustration added at the end; it is a second notation for the theory itself. If a coupling can't be drawn, we probably don't understand it yet.

There is also a discipline in it: a misleading chart is a *catch* (Ground Rule 19). Visuals can lie faster than prose. So every visual carries its data source and its caveats, and we prefer honest ugliness to seductive distortion (the Tufte standard: maximize the ratio of information to ink; never let the graphic imply more certainty than the data holds).

## 2. The core visual types and what each is for

**A. The Landscape Map (intellectual history as a network).**
A timeline-cum-network of total explanatory systems (Part I–V of the history), showing lineage (who built on whom), rupture (Nietzsche, Gödel, Lyotard), and migration (the ambition moving from philosophy → systems science → social theory → contemporary synthesis). Nodes = systems/thinkers; edges = "built on," "inverted," "refused," "migrated into." *First artifact built: `viz/systems-theory-map.html`.*

**B. The Panel Map (the deliberating body as a network).**
The 10 core + 20 advisory + bench, positioned by discipline and era, with edges for their **productive disagreements** (the fault lines from the roster) and their **alliances**. Lets a viewer see the structure of the argument space — where the panel clusters and where it splits. *Also in `viz/systems-theory-map.html`.*

**C. The Seven-Problems Concept Map.** *(Drafted, Session 2 — `DIAGRAMS.md` §4.)*
The pressure-tests as nodes, with edges showing how they *cause and amplify one another* (e.g. optimization dynamics → epistemic breakdown → coordination failure; wealth pump → institutional decay → populism). This is the visual form of the "polycrisis," but — unlike the buzzword — with the *couplings named and directed*. This is where we out-do "polycrisis": we draw the arrows. As of Session 2 it is a **thirteen-node, four-layer** graph (the expanded pressure-test set), authored in Mermaid so it renders on GitHub and lives as editable text; it is presented as a *contested causal hypothesis*, not a settled map (C-007).

**D. Causal-Loop Diagrams (per candidate theory).**
For each candidate theory (A/B/C), a system-dynamics causal-loop diagram: named variables, arrows signed + or − (reinforcing or balancing), loops labeled R (reinforcing) or B (balancing), and delays marked. This is the bridge to Phase-3 executable models — a causal-loop diagram is one formalization step away from a runnable simulation.

**E. Leverage-Point Overlays (Meadows).**
On each causal-loop diagram, mark the leverage points — where in the system an intervention would matter, ranked by Meadows's hierarchy (from weak leverage like adjusting parameters to strong leverage like changing goals and paradigms). This turns diagnosis into a map of *where to push*.

**F. Time-Series Dashboards (from Phase 1, once data is enlisted).**
The empirical backbone: fertility rates, inequality / the "wealth pump," emissions and atmospheric CO₂, trust-in-institutions, political-violence indices (Turchin's political-stress indicators), attention-economy metrics. Small multiples, honestly scaled, each with source and caveats. These are what make claims *checkable*.

**G. The Model Provenance Graph (from Phase 3).**
As candidate theories become runnable models and contributors fork them, a graph of model lineage — which model derives from which, which forks were merged, which rival theories branched off. The living commons, made visible.

## 3. Design principles

1. **The graphic is a notation, not an ornament.** Every visual restates part of the theory in a second language. If it adds nothing the prose didn't, cut it (subtractive bias applies to charts too).
2. **Directed and signed.** Systems claims are about *directed* influence (A drives B) and its *sign* (up or down). Undirected "these things are related" blobs are banned — they are the visual form of the polycrisis buzzword we are trying to improve on.
3. **Honesty over seduction.** Source and caveats on every data visual. No 3-D pie charts, no truncated axes that dramatize noise, no implied precision the data doesn't support. A misleading visual is logged as a catch.
4. **Layered, like a base map.** Build the base (nodes, or the empty axes) first; add detail in reviewable layers. This matches the author's established workflow and keeps each visual auditable.
5. **Legible cold.** A stranger with no context should grasp the *shape* of each visual in under a minute; depth rewards the patient reader without gating the casual one.
6. **Accessible.** Color is never the only channel (shape/label/pattern also carry meaning); text alternatives accompany every figure; contrast meets a readable floor. A visual that excludes readers is a catch.
7. **Reproducible.** Every generated visual is produced from data/definitions in the repo, so a contributor can regenerate and modify it. The repo is the source of the site and of the figures.

## 4. Toolchain (proposed)

- **Phase 0–1 (now):** self-contained **HTML/SVG** artifacts (no external dependencies where possible), so they open anywhere and seed the eventual site directly. Network layouts and concept maps drawn as SVG or with a lightweight in-page library. *(First artifact: `viz/systems-theory-map.html`.)*
- **Diagrams (logic, flows, concept maps, causal loops):** authored in **Mermaid**, a text-based notation, so they live in the repo as diff-able, forkable source *and* render natively on GitHub with no build step (the `DIAGRAMS.md` file is both the log and the picture). Interactive web versions are generated for the site (`viz/diagrams.html`).
- **Mermaid fragility (learned — L-007, catch C-011):** Mermaid's `quadrantChart` lexer rejects **non-ASCII characters in point names** (an em-dash blanked a figure). Keep quadrant point names plain ASCII. For a *fixed* figure where robustness matters, prefer a **hand-authored SVG** with no lexer to trip over — as figure 05 now is — and make the web render inject raw-SVG figures independently, so a blocked CDN cannot blank them. A load-bearing visual is validated to render before shipping.
- **Phase 2 (website):** a static-site generator over the same `docs/` tree, with the visuals as interactive components; the repository *is* the site's source.
- **Phase 3 (models):** system-dynamics / agent-based / network-simulation outputs rendered back into the same visual grammar (causal loops, dashboards, provenance graphs), so the pictures stay continuous from prose to code.

## 5. The visualization backlog (build order)

1. ✅ **Landscape Map + Panel Map** — `viz/systems-theory-map.html` (Session 1).
2. ✅ **Project-logic & flow diagrams** — governance/session flow, document-architecture flow, learning loop — `DIAGRAMS.md` §1–3 + `viz/diagrams.html` (Session 2).
3. ✅ **Seven-Problems Concept Map** — now the thirteen-node, four-layer directed graph — `DIAGRAMS.md` §4 (Session 2). *Next refinement: the signed +/− causal-loop version.*
4. ✅ **Landscape-positioning quadrant** — the contemporary frameworks on the two project axes — `DIAGRAMS.md` §5 (Session 2).
5. ✅ **Candidate-theory relationships + path-to-Code decision tree + the Chat/Code shuttle** — `DIAGRAMS.md` §6–8 (Session 2). Figure 05 (landscape quadrant) re-authored as hand-drawn SVG after a Mermaid render catch (C-011).
6. ✅ **Signed causal-loop diagram for Theory A** (Adaptation Gap) — `DIAGRAMS.md` §9 (Session 3): variables, +/− arrows, the reinforcing trap R1 and the balancing hope B1, delays marked — the bridge to any executable model, paired with `outputs/THEORY_A_OPERATIONALIZED.md`. *(Next: leverage-point overlay; signed loops for B and C.)*
7. **Causal-loop diagrams for B and C; leverage-point overlays (Meadows) on all three.**
8. **Time-series dashboard** (once data tools are enlisted, Phase 1).
9. **Model provenance graph** (Phase 3).

Each new visual is registered in `METRICS.md` (viz artifact count / diagrams authored) and, if it ever misleads, corrected with a note in `logs/CATCHES.md`. Mermaid diagrams render natively on GitHub — `DIAGRAMS.md` is both the log and the picture — while `viz/*.html` are the interactive web renders.
