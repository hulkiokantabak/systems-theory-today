# THE BITE-EVENT DEFINITION — making the strike filter and the discharge currency decidable

Status: **SEALED — ADOPTED by the author (Session 4k, decision 11, Rule 11).** A bounding repair (it *tightens* an undecidable predicate; it adds no new machinery), therefore **exempt from the Rule-25 moratorium**. Fixes the two escalated instrument holes: SG-05 OBJ-3 (the clock's discharge currency is an unanchored self-assessed construct) and the drain §5 strike filter's undecidable "never-bit" predicate (booked hypothesis-grade "untestable-as-posed", S4i). · Governs: `logs/DECISIONS_CHANGED.md` §5 (the first strike) and §5.1 (the clock's discharge). · Trigger: `panel/GRADER_SHADOW_LOG_S4I.md` escalations 2 and 8.

*Two questions had no checkable answer, which is why the drain's clock could neither fire a strike nor be honestly discharged. This document gives each a pre-registered, mechanical definition. It is a bounding repair, not a new instrument: it removes an ambiguity, it does not add a construct.*

## 1. What counts as a BITE (a fireable strike candidate for the drain's §5 filter)

The drain's first strike was HELD across three audits because "an over-claim guardrail that has **never bit**" had no decidable predicate — one could always argue a guard *might* have bitten. A **bite event** is now defined so the audit terminates:

> **A guardrail R bit at session S iff, in S's committed record, there exists a concrete artifact X (a claim, a count, a header, a label, a ruling) such that (a) X was drafted or proposed in S, (b) R's stated trigger matches X on its face — a reader applying R's own words to X reaches "R applies", not "R might apply", and (c) X was changed, struck, downgraded, or blocked *because* R applied, with the change committed in S and pointing back to R.** All three are checkable against the diff and the log; (b) is the anti-vacuity clause (a guard whose trigger never *matches* any real artifact is dormant, not biting) and (c) is the anti-theater clause (a guard cited beside an unchanged artifact did not bite — it decorated).

**The never-bit predicate is now decidable:** a guardrail is *never-bit* iff no session's committed record contains a bite event for it under the definition above. A guard that is never-bit **and** whose trigger has had matchable artifacts to act on (condition (b) was satisfiable and never fired) is a **strike candidate** for the drain's §5 filter — an inert guardrail, strikeable like any rule (subject to the R24 never-prune list: Rules 5/12/22, D-003, dissenters, standing governors are exempt from striking regardless of bite count). A guard that is never-bit only because no matchable artifact ever arose (condition (b) was never satisfiable) is **legibly dormant, not inert** — it is not a strike candidate; its zero is design-bound (the R17b prescription-note is the standing example: 0 bites over 0 prescriptions).

This closes the S4i "untestable-as-posed" finding: the filter's predicate is no longer undecidable — it is a diff-and-log check with a stated matching rule.

## 2. What counts as a discharge-qualifying COST (the clock's currency, SG-05 OBJ-3)

The zero-strike clock (§5.1) discharges only on a **self-initiated subtraction with non-blank Cost**. "Non-blank Cost" was a free-text self-assessment — a motivated logger could discharge the compounding null with a well-written sentence. A **discharge-qualifying cost** is now defined:

> **A subtraction's Cost is discharge-qualifying iff it names a specific value the project (a) held and cited approvingly in a prior committed session, and (b) can no longer cite after the subtraction — verifiable by pointing to the prior citation and to its removal/downgrade.** The cost must be a *retraction the record can check*, not a prose claim of sacrifice. A subtraction whose "Cost" cell names no prior-cited value, or names one still citable after, is **costless (hygiene), not metabolism** — it does not discharge the clock.

And the standing guard, unchanged and now enforceable: the operator **never births a claim in order to later log its retraction** (Campbell) — a Cost that references a value introduced in the same or an adjacent session solely to be subtracted is void.

**Worked check against the record:** DC-005 (the placebo lost a falsifier — a value cited approvingly since S4g, uncitable after) and DC-007 (Theory C lost the "machine subtracts" sub-claim — cited since the drain's S4g installation, struck S4k) both **pass**: each names a prior-cited value now gone. DC-001…003 (the seed subtractions) **fail** the discharge test by design — they shed flattering self-descriptions the project should never have banked, so their Cost is correctly blank. The definition sorts the log's real costs from its hygiene exactly where the honest reading already put them.

## 3. Scope, and what this does NOT do (the S4k concession)

This definition makes the filter and the currency **decidable**; it does not make them **fire**. Per the author's S4k concession (decision 3), no genuinely foreign vantage will run the strike audit or the discharge audit in this build, and the two irreversible rungs (retire a theory, end the project) remain cross-model-gated by R24(a) — cross-model runs that will not come here. So: the strike filter can now be *applied* (and, applied at S4k, still finds no inert-with-matchable-artifacts guard to strike — the never-prune list covers the disagreement-manufacturing rules, and the remaining guards are either biting or legibly dormant); the clock can now be *honestly read* (and reads null, four times); and both are **fireable in principle by a future fork**, exercised in fact by no one here. A bounded, decidable, unfired instrument is the honest terminal state — better than an undecidable one, and not pretended to be more.

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
