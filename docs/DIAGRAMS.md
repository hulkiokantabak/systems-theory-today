# DIAGRAMS

Version: 0.1 · Status: Living · Last updated: Session 2

*The project's logic and flows, drawn. Each diagram restates part of the argument in a second notation (the `VISUALIZATION.md` principle: if a coupling can't be drawn, we probably don't understand it yet). These are authored in **Mermaid**, which means two things at once: they **render natively on GitHub** (this file is both the log and the picture), and they live in the repo as **editable text** a contributor can fork and correct. The polished, interactive versions for the website are companions (`viz/`), generated from the same logic.*

> **Every diagram is a claim, and claims can be wrong.** Where a diagram encodes something the panel disputes, the caption says so and points to the open question. A diagram that implies more certainty than we have is a catch (Ground Rule 19).

---

## 1. The logic of the project (governance & session flow)

*How a session runs and how authority is divided: the panel argues, the chair synthesizes but never votes, the author ratifies, and the public extends. This is Theory C in miniature — a procedural totality.*

```mermaid
flowchart TD
    A["Author · founding brief / charge / ratification"] --> P
    subgraph Session["One deliberation session"]
      P["Panel · designed disagreement<br/>propose · argue · rate · vote down · dissent"] --> C["Chair — Claude — synthesizes<br/>does NOT vote<br/>draft dissent first, consensus last (L-001)"]
      C --> O["Outputs · evaluations · theories · plans"]
      C --> Cat["Catches · errors caught in the act"]
    end
    O --> A2{"Author · ratify / amend / reject"}
    Cat --> Lrn["Learnings · distilled patterns"]
    Lrn --> Rules["Ground Rules & Method · updated"]
    Rules -. governs .-> P
    A2 -. next charge .-> P
    A2 --> Pub["Public repo + website · fork · contradict · extend"]
    Pub -. contributions & dissent .-> P
```

**What it asserts:** legitimacy flows in a loop, not a line — no node is sovereign. **The single point of risk** is the chair (all synthesis flows through it), which is why the L-001 guard and this whole `logs/` apparatus exist. **Contested?** No — this is the constitution (`METHOD.md`). But D-004 asks whether running this loop well actually *means* anything, or only *works*.

---

## 2. The document architecture as a flow

*Four layers, and how they feed each other. Reference is stable; deliberation is where the arguing happens; output is the product; learning revises the reference. The arrows are the important part.*

```mermaid
flowchart LR
    subgraph Ref["Reference layer · stable"]
      G["GOALS"]
      GR["GROUND_RULES"]
      H["HISTORY"]
      L["LANDSCAPE"]
      Gl["GLOSSARY"]
    end
    subgraph Del["Deliberation layer"]
      R["PANEL_ROSTER"]
      D["Sessions / discussions"]
    end
    subgraph Out["Output layer"]
      IE["INITIAL_EVALUATION"]
      CT["CANDIDATE_THEORIES"]
      CP["COMPREHENSIVE_PLAN"]
    end
    subgraph Learn["Learning layer"]
      Ca["CATCHES"]
      Le["LEARNINGS"]
      OQ["OPEN_QUESTIONS"]
    end
    Ref --> Del
    Del --> Out
    Out --> Learn
    Learn -. revises .-> Ref
    Out -. tested against .-> Ref
```

**What it asserts:** the project is not a stack of documents but a circuit — outputs are tested back against goals and history, and what's learned rewrites the rules. **Contested?** No, but Q-007 asks whether "tested against" is doing real work or is self-confirming.

---

## 3. The learning loop (does the project actually learn?)

*The reflexive test (Goal S5): a catch becomes a learning becomes a rule change. A learning that never reaches the third box is just an observation.*

```mermaid
flowchart LR
    E["Event · a catch in a session"] --> Ca["CATCHES.md<br/>raw, per-event"]
    Ca -->|"pattern of two or more"| Le["LEARNINGS.md<br/>distilled"]
    Le -->|"promotion proposal<br/>— author ratifies —"| Ru["GROUND_RULES / METHOD<br/>rules that change how we run"]
    Ru -. governs next session .-> E
    Ca -. unresolved splits .-> OQ["OPEN_QUESTIONS.md"]
```

**Worked instance:** in Session 1, catches C-003, C-005, C-006 were the same error three times → distilled into **L-001** → queued as a Ground-Rule amendment. In Session 2, that guard **caught C-007** (the layering smuggling a causal claim) *before* publication. That is the loop closing once — the first evidence the project learns rather than merely accumulates. **Contested?** The mechanism isn't; whether it will keep working under many contributors is `open`.

---

## 4. The pressure-tests as a layered concept map (the Seven-Problems map, expanded)

*The Session-2 restructuring: thirteen tests in four coupled layers, with directed arrows for how drivers produce dynamics produce symptoms — and dashed arrows for the feedback that runs back up. This is the visual we said would out-do "polycrisis": the couplings are **named and directed**, not a blob. It is also a **contested hypothesis**, not a filing system (C-007).*

*The **signed** version of this graph — every load-bearing edge given a direction, a sign, and (where known) a delay, with the R1/R2/B1 loops and the open base-or-summit question drawn — is `docs/PRESSURE_TESTS_CAUSAL_HYPOTHESIS.md` (ratified working hypothesis, Session 4e). That is what turns "everything is connected" into checkable directed claims.*

```mermaid
flowchart TB
    M["M · Coherence vacuum<br/>loss of shared meaning<br/>(base or summit — left open, Q-002)"]

    subgraph L1["Layer 1 · Drivers (deep, slow)"]
      D1["D1 · Acceleration<br/>(the adaptation gap)"]
      D2["D2 · Optimization dynamics"]
      D3["D3 · Wealth pump / inequality"]
      D4["D4 · Machine intelligence"]
    end
    subgraph L2["Layer 2 · Dynamics (couplings & failures)"]
      Y1["Y1 · Epistemic breakdown"]
      Y2["Y2 · Coordination failure"]
      Y3["Y3 · Institutional decay"]
      Y4["Y4 · Ecological overshoot"]
    end
    subgraph L3["Layer 3 · Symptoms (what we feel)"]
      S1["S1 · Fertility collapse"]
      S2["S2 · Attention economy"]
      S3["S3 · Populism"]
      S4["S4 · Anomie / loneliness"]
    end

    D2 --> S2
    D2 --> Y1
    D4 --> Y1
    D4 --> Y2
    D4 --> D1
    D3 --> Y3
    D3 --> S3
    D1 --> Y2
    D1 --> Y3
    D1 --> S1
    Y1 --> Y2
    Y3 --> S3
    Y2 --> Y4
    Y4 --> S1

    S4 -. reacts back .-> D2
    S1 -. reacts back .-> D3
    S3 -. reacts back .-> Y3

    M <--> L1
    M <--> L2
    M <--> L3
```

**What it asserts:** a *specific, testable* causal topology — e.g. optimization dynamics (D2) drive both the attention economy (S2) and epistemic breakdown (Y1); the wealth pump (D3) drives institutional decay (Y3) and populism (S3); anomie (S4) feeds back to intensify the optimization economy that produced it. **Heavily contested:** Marx rejects the driver/symptom cut; Nietzsche inverts M to the top; Le Guin notes the layout itself encodes a worldview (D-005, Q-002). The **arrows are the research program** — each is a hypothesis a contributor can strengthen, redirect, or break. A causal-loop diagram (signed +/−, with delays) for Theory A is the next refinement (`VISUALIZATION.md` D).

---

## 5. The landscape, positioned (where the field sits — and where we aim)

*The contemporary frameworks from `LANDSCAPE_OF_CONTEMPORARY_SYSTEMS_THEORIES.md`, placed on the two axes the project turns on. The rare corner — total ambition **and** testable — is nearly empty, and that emptiness is the niche. The marker for "this project (aim)" shows the target: joining and falsifiable, held provisionally.*

```mermaid
quadrantChart
    title Contemporary systems frameworks
    x-axis "Interpretive / descriptive" --> "Predictive / mechanistic"
    y-axis "Partial slice" --> "Total ambition"
    quadrant-1 "Total & testable (rare)"
    quadrant-2 "Total but descriptive"
    quadrant-3 "Partial & interpretive"
    quadrant-4 "Sharp but narrow"
    Cliodynamics: [0.85, 0.36]
    Complexity science: [0.70, 0.55]
    Luhmann social systems: [0.56, 0.90]
    Polycrisis: [0.20, 0.76]
    Metacrisis: [0.31, 0.82]
    Big History: [0.30, 0.93]
    Metamodernism: [0.24, 0.70]
    Integral Theory: [0.12, 0.96]
    This project: [0.66, 0.72]
```

**What it asserts:** our reading (coarse, arguable) of each framework's register and ambition — and that the top-right quadrant is thinly populated. **Contested?** The exact coordinates are a judgment call, offered to be argued with; the *shape* (rigor and totality rarely co-occur, and meaning-holding frameworks cluster bottom-left and un-falsifiable) is the claim. Note the axes can't show the **meaning** dimension — for that, see the scored table in `LANDSCAPE_OF_CONTEMPORARY_SYSTEMS_THEORIES.md` §9.

---

## 6. The three candidate theories and how they relate

*Not three guesses at one answer, but three *kinds* of theory — diagnostic, mechanistic, reflexive — that fit together. B is the mechanism beneath A's gap; C is the response to the situation both describe; and two named dangers stalk C.*

```mermaid
flowchart TD
    Cond["Today's condition<br/>(the 13 pressure-tests, §4)"]
    A["Theory A · Adaptation Gap<br/><b>diagnostic</b><br/>master variable:<br/>change-rate minus adaptation-rate"]
    B["Theory B · Optimization Ecology<br/><b>mechanistic</b><br/>autopoietic optimizers<br/>capture human drives as fuel"]
    C["Theory C · Distributed Coherence<br/><b>reflexive / constructive</b><br/>a living commons of sense-making"]

    Cond --> A
    B -->|"supplies the mechanism<br/>beneath A's gap"| A
    A -->|"if no single mind<br/>can hold the whole..."| C
    B -->|"...and optimizers<br/>outrun human ends..."| C
    C -. "the project itself<br/>is the prototype" .-> C

    Nz["Nietzsche's governor:<br/>a method is not a meaning (D-004)"] -. warns .-> C
    Int["the Integral trap:<br/>integrate without<br/>falsifiability = empty (Q-004)"] -. warns .-> C
```

**What it asserts:** the three theories are complementary registers, not competitors — which is why the deliverable ships all three. **Contested?** D-002 (is there one master condition at all?) and D-004 (is C a path or a dodge?) both live here. The self-loop on C is the reflexive wager, and Q-007 asks what would show it to have failed.

---

## 7. The path to Code — a decision tree (answering the author's question)

*When, if ever, does this leave Chat for Code? Two kinds of Code — **light** (repo + static site + deploy) and **heavy** (executable models, data, computational sense-making) — with different gates. The honest branch includes "may never need heavy Code."*

```mermaid
flowchart TD
    Start["Should the project go to Code?"] --> Q1{"Is the document skeleton<br/>stable and ratified?"}
    Q1 -->|No| Stay["Stay in Chat.<br/>The bottleneck is conceptual<br/>coherence, not engineering."]
    Q1 -->|Yes| Q2{"Do you want public forking<br/>and contribution to begin?"}
    Q2 -->|Not yet| Stay
    Q2 -->|Yes| Light["LIGHT CODE — Gate 1<br/>git repo · static-site build · deploy<br/>render docs, diagrams, viz"]
    Light --> Q3{"Does a theory have an<br/>operationalized, falsifiable<br/>claim with a data source? (Q-001)"}
    Q3 -->|No| Hold["Hold at Light Code.<br/>Keep deliberating in Chat;<br/>the site just publishes it."]
    Q3 -->|Yes| Q4{"Demonstrate Theory C as a<br/>working prototype — or only<br/>argue for it?"}
    Q4 -->|Only argue| Never["Heavy Code may never be needed.<br/>Project lives as markdown + light site.<br/>A legitimate endpoint."]
    Q4 -->|Demonstrate| Heavy["HEAVY CODE — Gate 2<br/>models · data pipelines ·<br/>computational sense-making"]
```

**What it asserts:** the decision is gated on *what is bottlenecking*, not on enthusiasm — Chat is correct while the work is thinking; Code becomes correct only when there is a stable thing to build or a real quantity to compute. **Where we are now (revised in Session 2):** the skeleton is stable *enough* (further change is content, not structure), and a second trigger overrides the original gate — **context capacity**: the project hit a compaction and message run-outs, so Chat can no longer reliably hold the whole state. That moves **Light Code + the Chat/Code shuttle to now** (§8); **Heavy Code stays gated on Q-001**. Full plan in `docs/CHAT_CODE_WORKFLOW.md`; the open question is Q-009.

---

## 8. The Chat/Code shuttle (how the project is operated across two tools)

Answering the second half of the author's question — not just *when* to use Code but *how* Chat and Code work together once the deliberation outgrows a single context window.

```mermaid
flowchart LR
    subgraph Chat["CHAT · the deliberation engine"]
      direction TB
      SP["load state pack<br/>map + target docs + open questions + last digest"] --> Del["run the panel<br/>designed disagreement · synthesis"]
      Del --> WO["emit a work-order for Code<br/>files · propagation targets · checks"]
    end
    Repo[("THE REPO · shared memory / git<br/>docs · panel · outputs · logs · viz")]
    subgraph Code["CODE · the executor & librarian"]
      direction TB
      Exec["write files · propagate · sweep<br/>regenerate viz · commit · deploy"] --> Dig["emit a session digest<br/>what changed · tree · counts · catches"]
    end
    WO ==> Exec
    Exec <==> Repo
    Repo -. loads slice .-> SP
    Dig ==> SP
```

**What it asserts:** **Chat is the mind, the repo is the memory, Code is the hands.** Neither side holds the whole project in one context — Chat loads only a *slice*, Code reads the full repo from disk — the direct fix for the context-window limit that forced Session 2's compaction. Propagation and consistency-sweeps become Code's deterministic job (the C-010 / L-006 fix), so a structural change can no longer leave stale records. Authority is unchanged: the panel proposes, the chair never votes, the author ratifies, Code executes only ratified work-orders. This is the author's existing two-Claude writing workflow applied here. Full plan: `docs/CHAT_CODE_WORKFLOW.md`; open watch-items Q-010 (slice granularity) and Q-011 (divergence reconciliation).

---

## 9. Theory A as a signed causal loop (the gap, drawn)

The first bridge from prose to a runnable model (`outputs/THEORY_A_OPERATIONALIZED.md`): Theory A's variables and their signed couplings, with the two loops that decide whether the gap is a trap or self-correcting.

```mermaid
flowchart TD
    D4["D4 Machine intelligence"] -->|"+"| Rc["R_c · rate of systemic change"]
    Rc -->|"+"| G["G · the adaptation gap"]
    Ra["R_a · rate of adaptation"] -->|"-"| G
    G -->|"+"| OV["Overwhelm · incomprehensibility"]
    OV -->|"-"| TR["Institutional trust"]
    OV -->|"+"| AN["Anomie / loneliness"]
    OV -->|"+"| PO["Populism · demand for a simple story"]
    D3["D3 Wealth pump · rival driver"] -.->|"+"| PO
    PO -->|"-"| IC["Institutional capacity"]
    TR -->|"+"| IC
    IC -->|"+"| Ra
    OV -->|"+ (delay)"| RF["Adaptive reform · institution-building"]
    RF -->|"+"| Ra
```

**What it asserts.** Two exogenous drivers push the rate of change up (D4 machine intelligence directly; the wealth pump D3 enters as a *rival* driver of populism, dashed — the discriminator of §6 in the operationalization). The gap G is the difference of the two rates; it drives Overwhelm, which drives the symptoms. Two loops decide the system's fate:

- **R1 — the reinforcing trap (vicious cycle):** Overwhelm → Populism (+) → Institutional capacity (−) → adaptation rate (slower) → Gap (wider) → Overwhelm (+). Populism degrades governance, which slows adaptation, which widens the gap — Theory A's core worry.
- **B1 — the balancing hope (self-correction, delayed):** Overwhelm → Adaptive reform (+, with delay) → adaptation rate (+) → Gap (−) → Overwhelm (−). Overwhelm eventually provokes institution-building that closes the gap. This is the **accelerationist / techno-optimist counter** (D-006) made visible as a real loop: if B1 is fast and strong, the gap is a transitional feature; if R1 dominates and B1 is too slow, it is a trap. **Which loop wins is an empirical question, not a foregone one** — exactly what the operationalization is built to test.

*Signs are +/−; the dashed edge is the rival driver; "(delay)" marks the slow balancing path. A first, criticizable draft — the signs and especially the delays are hypotheses to test, not settled facts (Ground Rule 19; Q-001).*

---

## Diagram backlog

1. ✅ Governance/session flow · document-architecture flow · learning loop (§1–3).
2. ✅ Layered pressure-test concept map (§4) — the expanded Seven-Problems map.
3. ✅ Landscape positioning quadrant (§5).
4. ✅ Candidate-theory relationships (§6) · path-to-Code decision tree (§7) · the Chat/Code shuttle (§8).
5. ✅ **Signed causal-loop diagram for Theory A** (§9) — variables, +/− arrows, the reinforcing trap R1 and the balancing hope B1, delays marked — the bridge to any executable model.
6. **Next:** leverage-point overlay (Meadows) on the Theory-A loop; signed causal-loops for B and C.
7. **Phase 1+:** time-series dashboard once data is enlisted; model-provenance graph once forks exist.

*Each diagram is registered in `METRICS.md`; if one ever misleads, it is corrected with a note in `logs/CATCHES.md`. Interactive web renders live in `viz/` (`systems-theory-map.html`; `diagrams.html`).*

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0 (docs) / MIT (any code)*
