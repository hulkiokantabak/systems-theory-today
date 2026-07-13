# THE PRESSURE-TEST CAUSAL HYPOTHESIS — drawing the arrows

Version: 1.1 · Status: **The v1.0 body below retains its RATIFIED (author, Session 4e) status unmodified. Sections 8–9 are bounded S4h additions — the lag-type decomposition and the adapted evidence ladder with edge labels — stamped inline `panel-delegated (S4h standing delegation)`, provisional-pending-author, so a reader always sees which parts carry the author's ratification and which carry only the panel's.** · Last updated: Session 4h
Source: `docs/GOALS.md`, `panel/SESSION_2_PRESSURE_TESTS.md`, `docs/DIAGRAMS.md` §4 (the thirteen tests). Companion to `outputs/THEORY_A_OPERATIONALIZED.md` §9 (Theory-A loop) and the operationalizations of A/B/C.

> The project has always said the **arrows between the layers are the research program** — that "everything is connected" only becomes criticizable once you commit to *which* thing drives *which*, with *what sign* and *what delay*. This document does that: it proposes a specific **signed causal hypothesis** over the thirteen pressure-tests. It is deliberately falsifiable and deliberately contestable. Drawing it is what separates this project from the polycrisis literature, which names the entanglement but never commits the graph.

---

## 1. The signed graph (load-bearing edges only)

*Not every conceivable edge — the strongest proposed couplings. "+" = same-direction; the dashed node **M** and its edges mark the open base-or-summit question (Q-002).*

```mermaid
flowchart TD
    D4["D4 · machine intelligence"] -->|"+"| D1["D1 · acceleration"]
    D4 -->|"+"| D2["D2 · optimization"]
    D1 -->|"+"| Y1["Y1 · epistemic breakdown"]
    D1 -->|"+"| Y2["Y2 · coordination failure"]
    D1 -->|"+"| Y3["Y3 · institutional decay"]
    D2 -->|"+"| S2["S2 · attention economy"]
    D2 -->|"+"| Y1
    D3["D3 · wealth pump / inequality"] -->|"+"| Y3
    D3 -->|"+"| S3["S3 · populism"]
    Y1 -->|"+"| S3
    Y1 -->|"+"| S4["S4 · anomie / loneliness"]
    Y2 -->|"+"| Y4["Y4 · ecological overshoot"]
    Y3 -->|"+"| S1["S1 · fertility collapse"]
    Y3 -->|"+"| S3
    Y3 -->|"+"| S4
    S2 -->|"+"| Y1
    S2 -->|"+"| S3
    S3 -->|"+"| Y3
    M(["M · coherence vacuum — base or summit?"]) -.->|"±"| S4
    S4 -.->|"+"| M
```

## 2. The load-bearing pathways (why each arrow)

**Machine intelligence as a driver of drivers.** D4 → D1 and D4 → D2: AI is not a peer symptom but an **amplifier** — it accelerates the rate of change and hands the optimizers sharper tools. This is why "AI" appears as a driver-of-drivers, not a symptom: its causal role is to multiply two other drivers.

**Acceleration surfaces in the dynamics.** D1 → {Y1, Y2, Y3}: when the built world changes faster than institutions, cognition, and shared culture can absorb it, the capacity to *check* falls behind the capacity to *fabricate* (Y1), coupled systems fragment faster than they can be governed (Y2), and institutions built for a slower world lose fit and legitimacy (Y3). This trio *is* Theory A's gap, distributed across subsystems.

**Optimization is its own driver, with a home symptom.** D2 → S2 (the attention economy is optimization's direct product) and D2 → Y1 (engagement-optimization is a **selection environment** that structurally rewards unreality — the reason "post-truth" undershoots). This is Theory B's territory.

**The wealth pump drives decay and revolt.** D3 → Y3 and D3 → S3: Turchin's mechanism — elite overproduction plus popular immiseration erode state legitimacy (Y3) and fuel populist revolt (S3) — enters as a **rival driver**, not a special case of acceleration. Whether D3 or D1 better explains S3 is exactly the A-vs-Turchin discriminator in Theory A's study.

**Dynamics surface as symptoms.** Y1 → {S3, S4} (fragmented truth breeds simple stories and disorientation); Y3 → {S1, S3, S4} (institutional thinning removes the frames that made children the default, that make institutions feel responsive, and that locate people); Y2 → Y4 (a world that cannot coordinate on long-horizon collective action overshoots its ecological limits).

## 3. The loops (where the system's fate is decided)

- **R1 — the reinforcing trap (Y3 ⇄ S3).** Institutional decay breeds populism (Y3 → S3), and populism degrades institutional capacity (S3 → Y3): a vicious cycle. Extended through D1 → Y3, this is Theory A's reinforcing loop — the gap widening because the response to it makes adaptation *slower*.
- **R2 — the capture loop (D2 → S2 → Y1 ⟶ D2).** Optimization produces the attention economy, which degrades shared epistemics, which **weakens the collective capacity to regulate optimization** — so D2 persists and deepens. Theory B's autopoietic self-reinforcement, drawn.
- **B1 — the balancing hope (delayed).** Acute crisis or overshoot (Y4, or a sharp symptom) can provoke **adaptive reform** that restores institutional capacity (reduces Y3), damping the symptoms — Theory A's delayed balancing loop, and the accelerationist's counter (D-006): *if B1 is fast and strong, the gap is transitional; if R1/R2 dominate and B1 is too slow, it is a trap.* Which loop wins is empirical, not assumed.

## 4. The master condition M — drawn as a question, not an answer

**M (the coherence vacuum)** is deliberately drawn with dashed, bidirectional edges because its position is **open (Q-002)**:
- **M-as-base:** the loss of a shared "why" comes first and makes everything downstream easier — the meaning-vacuum lowers resistance to capture (Nietzsche's Last Man is pre-adapted to the dopamine economy), so **M → S2, S4** with a weakening effect on resistance.
- **M-as-summit:** the drivers, dynamics, and symptoms **hollow out** shared meaning as their aggregate residue, so **{everything} → M**.

The graph refuses to commit, because the panel has not resolved it and pretending otherwise would violate the project's own honesty. The dashed edges *are* the open question.

## 5. How the three theories live on this graph

- **Theory A** is the claim that the whole graph is powered by **D1** (with D4 amplifying it), read through the D1 → {Y1,Y2,Y3} → symptoms pathways and the R1/B1 loops. Its test: does a measured gap predict the symptom set, controlling for D3?
- **Theory B** is the claim that **D2** (with D4 amplifying it) and the R2 capture loop are the operative mechanism, read through D2 → S2 → Y1. Its test: does optimization intensity predict capture, and does de-optimization reverse it?
- **Theory C** is not a node — it is the claim that **a graph like this can only be built and corrected by a plural, self-correcting commons**, and that the arrows must stay revisable. C is the *method that drew the graph*, held to its own ablation test.

The theories are therefore **not exclusive**: A and B name different power sources for overlapping pathways; where they make *different* predictions (wide-gap/low-optimization vs narrow-gap/high-optimization domains) is exactly where their studies distinguish them.

## 6. What this buys, and what to test next

Drawing the graph converts "the polycrisis" from a mood into a set of **checkable directed claims**. The near-term research program is, literally, to test the arrows: the A study tests the D1-pathways and the D3 discriminator; the B study tests the D2 → S2 → Y1 pathway and the R2 loop via de-optimization events; the strongest single crux is **D3-vs-D1 into S3/Y3** (is populism driven more by the wealth pump or by the adaptation gap?), which both studies bear on. A signed causal loop for B and for C (paralleling A's §9) is the next diagramming step.

## 7. Preserved contestation (the structure itself is disputed — do not treat as settled)

- **Marx:** the driver/symptom cut is **ideology**. What the graph calls "symptoms" (populism, anomie, fertility) are the system **working as designed for whoever benefits** (D3 is not one driver among four — it is the point). The graph should perhaps be redrawn with the wealth pump as the root, not a peer.
- **Nietzsche:** **M belongs at the summit**, not floating dashed at the side — the coherence vacuum is the central fact, and a graph that makes it one node among fourteen has already missed it.
- **Le Guin:** any ordering **encodes a worldview**. Choosing D1/D2 as roots (a technological framing) rather than, say, a relational or ecological root is itself a value-posit; the graph is not neutral and should not pretend to be.
- **Luhmann:** the arrows imply steering and causation between subsystems that, on his account, **cannot directly steer one another** — the couplings may be structural resonances, not causal pushes, and "→" may be the wrong primitive.
- **Heidegger (standing):** drawing the whole as an optimizable causal diagram is *itself* the enframing the project is trying to understand — the map may be a symptom.

These objections are **not resolved**. They are the reason the graph is versioned, contestable, and forkable — and the reason the signs and delays are hypotheses, not facts.

---

## 8. Lag-type decomposition on the Y-layer edges *(S4h addition — `panel-delegated (S4h standing delegation)`, provisional-pending-author; from the S4g learning panel, adoption 2)*

Every edge into or out of the Y-layer may carry a **lag-type annotation**: *what kind of failure-to-adapt the edge asserts*. This is the decomposition that makes the **A-vs-D3 crux** codable at the episode level — "the system cannot adapt" (Theory A) versus "capacity exists, an interest blocks it" (the wealth pump) are currently indistinguishable in the graph.

**Coding semantics (resolved on the record, S4h):** **multi-label with a named PRIMARY type** — real episodes will be multi-typed (obstruction operates *through* political channels and manifests *as* coordination failure), so mutual exclusivity would guarantee uncodability; the primary type is selected by the tie-break rule: *the type whose removal would most have changed the outcome, coded from the episode record's own evidence* (Campbell's tie-break repurposed as primary-selection). All five types enter **label-only — not yet codable** until an inter-coder trial on real episode records clears a pre-registered agreement floor; there exist zero coded episodes today (`docs/EPISODE_UNIT.md` gates all coding), so **no present-tense codability claim is made — the crux *becomes* codable only when the episode base exists.** In-house codings of any real episode are directional-only; evidential weight requires the project-blind cross-model standard (Campbell).

| Lag type | One-line codable indicator (what a coder looks for in an episode record) |
|---|---|
| **epistemic** | the acting institutions demonstrably lacked accurate, shared knowledge of the destabilization (contemporaneous records show misdiagnosis or contested facts) |
| **capacity** | knowledge present, but the material/administrative/fiscal means to respond were absent or exhausted (budget, staff, enforcement reach) |
| **coordination** | knowledge and capacity present in the parts, but no mechanism bound the parts to act together (documented inter-body deadlock, free-riding, veto chains) |
| **political** | a response was available and coordinable but lost a documented contest for authority or legitimacy (votes, purges, succession fights) |
| **obstruction** | documentary evidence that capacity EXISTED **and** an identifiable interest blocked its deployment (the wealth-pump signature). **Coded affirmatively on its own two-part evidence** — NOT as a residual. |
| **unregistered** | the lag does not fit the five types — free-text description **mandatory** (Le Guin, S4h: the five were derived from loud, institutional, largely Western cases; this bin exists so coders never manufacture a clean bin where the instrument merely fails to see) |

**⚠ The S4k re-balance (the author's ruling, decision 9 — SG-02 OBJ-1, sev 9).** The S4h form of this table carried a directional thumb on the scale: obstruction required a high two-part documentary bar while *"absent that, code capacity, never obstruction"* made **capacity the default sink** for every ambiguous episode — which is Theory A's read winning by construction over the wealth pump (D3), the project's own strongest crux, in exactly the cases that discriminate them. That default is **struck.** The corrected rule is symmetric: **capacity** requires its own affirmative evidence (knowledge present, means absent/exhausted); **obstruction** requires its own (capacity present, an interest blocked it); and an episode for which *neither* affirmative case is documented is coded **unregistered/ambiguous — never defaulted to either theory's favor.** And the **D3→S3 and D3→Y3 edges are brought into the episode-codable frame** (they were §9 "cross-case, external-provenance, untested-by-this-project" only): the wealth-pump channel is now coded at the episode level by the same lag-type instrument, so the A-vs-D3 crux is tested on both arms with no built-in tilt. *(This is a subtractive bias-repair — removing a default, widening a scope — and is therefore exempt from the Rule-25 moratorium. It fixes the instrument; it does not fire it: with no episode base coded and no foreign vantage, the crux is codable-in-principle and untested-in-fact, per the S4k concession.)*

*Preserved: Nietzsche — "the system cannot adapt" and "an interest blocks it" must never again be the same sentence in this project. Ostrom — obstruction coded by feel becomes a mirror; the ex-ante discriminator is binding. Heidegger (AWR) — "five lag-types on the arrows of a map whose arrows I refuse; my objection is to the cartography, not the legend."*

## 9. The evidence ladder (adapted) and the edge labels *(S4h addition — same stamp; from the S4g learning panel, adoption 4)*

**The ladder (governing every claim-bearing document — panel-confirmed under delegation, the author's ratification outstanding; the word "canonical" corrected S4i per the shadow-grade pass, Rule 11/C-028 class):** each claim carries a **rung label** — `fact` (a dated, sourced particular) · `mechanism` (a named causal pathway with at least one documented instance) · `cross-case` (a pattern across cases — **valid only with stated N and provenance; a cross-case label without them is void on sight**) · `theory` (a proposed integration whose warrant is coherence, not yet cases) · `normative` (a value-commitment — **a different KIND of claim, not a lesser degree**: placing it at the ladder's far end must never teach a reader that a value-claim is a fact that failed — Le Guin, binding gloss) — **plus an orthogonal test-status tag**: `untested` · `pre-registered` · `run:survived` · `run:falsified`. **Silent rung-merge** — presenting a claim at a higher rung than its evidence, or merging rungs in one sentence — is a **codable catch category** from this session. *(Theory-doc labeling is deferred to the author-present session under three binding conditions: every theory doc carries a pending-banner and no rung status may be cited from it until labeled; the labeling is due by the next substantive session's close, else an automatic C-012-class latency catch, with the repo-open backstop; and the first labeling pass is audited against flattery — a pass in which every edge lands mechanism-or-better is itself examined as a rung-merge. Recorded per Meadows: the deferral was chosen under the standing delegation with the cheap surface labeled first; this line exists so the deferral can never later be read as pure prudence.)*

**The §1 edges, labeled (first pass, S4h — deliberately bottom-heavy; that is what an honest first pass of an untested graph looks like):**

| Edge | Rung | Test-status | Note |
|---|---|---|---|
| D4→D1, D4→D2 | theory | untested | amplifier claims; no project-coded instance |
| D1→Y1, D1→Y2, D1→Y3 | theory | untested | Theory A's distributed gap — Q-001's design exists, unrun |
| D2→S2 | mechanism | untested | the attention economy as optimization's direct product — documented instances exist (Study-B anchors), not project-run |
| D2→Y1 | mechanism | untested | selection-environment-rewards-unreality; the B pipeline is frozen-unrun |
| D3→Y3, D3→S3 | cross-case | untested *(by this project)* | external corpus: Turchin's structural-demographic studies (N ≈ dozens of polity-periods across Seshat/CrisisDB-based work) — stated provenance, not project-verified |
| Y1→S3, Y1→S4 · Y2→Y4 · Y3→S1, Y3→S3, Y3→S4 · S2→Y1, S2→S3 · S3→Y3 | theory | untested | proposed pathways; the episode base (`docs/EPISODE_UNIT.md`) is the instrument that could raise them |
| M-edges (all dashed) | theory | untested | and contested by design (Q-002) |

*No edge in this graph is `run:survived`. One first-pass count, honest: 2 mechanism, 2 cross-case (external provenance), the rest theory/untested. The flattery guard passes by inspection.*

**S4k update — the theory-doc rung labels applied (C-034 discharged; the author's ratifying pass).** The §9 deferral (theory-doc labeling due by the next substantive session, else an automatic C-012-class latency catch) is met: at the author's S4k contact, each of `outputs/THEORY_A_OPERATIONALIZED.md`, `outputs/THEORY_B_OPERATIONALIZED.md`, and `outputs/THEORY_C_OPERATIONALIZED.md` received a **rung + test-status header**. The first-pass **flattery audit** required by this section: **no theory doc lands every claim mechanism-or-better** — A is labeled `theory · untested` (its gap is drafted-not-run), B `mechanism · pre-registered · frozen-unrun` on its anchors and `theory · untested` on O→P, C `theory · untested` with its one ablation read `run: null-compatible, instrument-unreliable`. The distribution is bottom-heavy, which is what an honest first pass of an untested program looks like; a pass in which every theory had climbed to mechanism-or-better would itself have been the rung-merge this section warns against, and it did not occur. The re-balanced D3 instrument above (§8) is the one object-level channel whose bias was corrected in the same act.

---

*Ratified working hypothesis (author, S4e); §8–9 panel-delegated (S4h), provisional-pending-author; contestation preserved. Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
