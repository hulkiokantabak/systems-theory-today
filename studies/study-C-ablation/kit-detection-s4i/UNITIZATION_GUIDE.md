# ANCHORED DETECTION GUIDE — what counts as ONE catch-event

Self-contained. Read this in full before you enumerate anything. Independent readers cut the same document into different events unless the unit is defined; this guide defines it. It tells you what one catch-event is, where its boundaries fall, and how to tell one event from two. It never tells you how important an event is: a later, separate pass will judge the events you enumerate, under a guide you have not seen, in a fresh sitting. In this pass you only find and bound.

## 1. The unit (frozen; the examples below illustrate it, they never widen it)

CONSTRUCT (read this sentence twice — it decides what you are looking for): a catch is a flaw the DOCUMENT'S OWN TEXT finds and handles — not a flaw you find in the document. One catch-event = one place where the text itself identifies, corrects, or neutralizes exactly one flaw-object. If the text neither engages a defect nor committed itself against it (Section 5), there is no event to log, however real the defect — record such observations as NOTEs (Section 6). The single class of event you may verify yourself is the breached commitment (Section 5), where the document's own promise is the catcher.

EVENT: one catch-event = ANCHOR + FLAW-OBJECT, under the decomposition grammar of Section 3.

FLAW-OBJECT: exactly ONE nameable defect against exactly ONE target, stated in one clause: "<defect> against <target>". The target is a CLAIM (something asserted), a CONSTRUCT (a definition, measure, category, figure, or model built on), or a PROCEDURE (a step said to be followed or a rule said to be applied). One target, nameable in a short noun phrase; one defect, drawn from what the text says is wrong ("rests on a misread table", "reverses cause and effect", "uses the term in two incompatible senses", "committed step not performed as committed").

ANCHOR: where the event lives — exactly one of three kinds:
- kind=SPAN — one verbatim contiguous stretch of the document's own words (the normal case: the words performing the catch).
- kind=SPANSET — two or more verbatim stretches, explicitly listed, that jointly carry ONE flaw-object (see MERGE-RULE and SUBSUMPTION-RULE). The primary locus is the FIRST locus in document order.
- kind=OMISSION — a commitment-anchored absence (Section 5), anchored by a PAIR of verbatim quotes: the COMMITMENT and the due-point LOCUS.

IDENTITY: two candidate marks carry the SAME flaw-object — one event — when each one's MINIMAL repair (Section 2) resolves the other. If each survives the other's minimal repair, they are two events. If exactly one resolves the other, apply the SUBSUMPTION-RULE (Section 3). Nothing else — not nearness, not distance, not voice, not wording — adjudicates identity.

## 2. The FIX TEST (run it on every candidate, in this order)

STEP-A: State the defect in one clause: "<defect> against <target>".
STEP-B: State the MINIMAL repair — the smallest edit to the text that removes the named defect and nothing else.
MINIMAL-REPAIR CLAUSE (binding): a repair is admissible only if (i) it edits exactly the textual commitment the defect clause names, (ii) no proper part of it removes the named defect, and (iii) it repairs nothing the defect clause does not name. "Rewrite the section", "redesign the survey", "re-source all inputs" are never admissible repairs — they are class-level edits that smuggle several defects into one.
ALTITUDE CLAUSE (binding — when both a class-level and a member-level flaw-object are grammatical): follow the TEXT'S own individuation. One event per member the text indicts with its own defect clause; one class event when the text indicts the class without individuating members. ("Every input in this table is stale" indicted once, as a class = one event. "Enrollment is last year's, the fee schedule is two revisions old, and the deflator is the retired index" — three member indictments = three events.) The text, not your repair phrasing, sets the altitude.
STEP-C: Walk every place in the document that your minimal repair would change; all of those places are LOCI of this one event.
STEP-D: Anything still defective after your minimal repair is a DIFFERENT flaw-object. Bound it separately and run the test again on it.
DONE-RULE: you are finished splitting and merging when every event has exactly one MINIMAL repair, and no single MINIMAL repair resolves two of your events. (A broad repair that would fix two events never forces a merge; only a minimal one can.)

## 3. The decomposition grammar (SPLIT, MERGE, SUBSUMPTION — never adjacency)

SPLIT-RULE: distinct flaw-objects in one stretch = distinct events, however short the stretch. One sentence can carry three events.
MERGE-RULE: the same flaw-object re-manifesting across stretches = ONE event with multiple loci, however far apart, however many voices. A restatement, a concession ("granted, that assumption fails"), an echo, or a re-location of a flaw already caught adds a LOCUS, never an event.
SUBSUMPTION-RULE (the one-way case; decides general-vs-instance and downstream propagation, in either reading order): when mark A's minimal repair resolves mark B but B's does not resolve A, B is a manifestation of A — merge B into A as a locus, anchored at A — PROVIDED no residual defect survives at B after A's repair. If any instance-level repair survives A's fix, B is its own event. This verdict does not depend on which mark you read first.
SHARPENING: a later mark that deepens an earlier one is judged by the FIX TEST alone. A sharpening that changes the repair — that survives the earlier mark's fix — is a DISTINCT event. A sharpening that only says "and it is worse than that" without changing what must be done merges as a locus.
REPAIR-UNAVAILABLE: a later mark asserting the earlier repair cannot be performed ("no comparison group can be built after the fact — enrollment was self-selected") CHANGES the repair by definition: code ONE event whose flaw-object carries the deeper defect and repair, with the earlier mark as a locus.
NEVER-ADJACENCY: nearness on the page never merges; distance never splits. If you catch yourself reasoning "same paragraph, so one event" or "twenty pages apart, so two", stop and run the FIX TEST.

Worked exemplars (all domains invented; one line each):

EX: rule=SPLIT; domain=night-bus-review; excerpt="Reviewer B: this projection both double-counts the shuttle subsidy and uses last year's boarding figure."; verdict=2 events; why="One sentence, two targets, two minimal repairs (remove the duplicate line; refresh the figure). Neither repair resolves the other. Split despite the shared span."
EX: rule=MERGE; domain=ferry-scheduling-review; excerpt="Speaker 2: the 12% figure misreads the table — it is 1.2%. [much later] Speaker 4: as noted, the on-time gain is a tenth of what the draft claims."; verdict=1 event, 2 loci (SPANSET); why="Same target, same defect, one minimal repair (fix the number). The later mark re-locates the flaw; it does not add one. Two voices, one flaw-object."
EX: rule=SUBSUMPTION (propagation); domain=bakery-supply-forecast; excerpt="Speaker 3: the growth input is a transposition — 0.4%, not 4%. Speaker 1: then the staffing plan and the budget derived from it are wrong too."; verdict=1 event, 3 loci; why="Fixing the input resolves the staffing and budget marks; fixing the budget alone resolves nothing upstream. One-way resolution, no residual: the downstream marks are loci. EXCEPTION: if the staffing plan ALSO divides by the wrong shift length — a defect surviving the input fix — that residual is a second event (STEP-D)."
EX: rule=SUBSUMPTION (general/instance); domain=hotel-energy-review; excerpt="Speaker 1: December's figure is inflated by the holiday load. Speaker 2: more generally, the model never adjusts for season."; verdict=1 event, anchored at the general mark, December as locus; why="The general repair (add seasonal adjustment) resolves December; December's repair does not resolve the general omission. One-way, no residual, so merge — and the verdict is the same if the general mark comes first. If December ALSO used a mis-keyed meter reading, that residual survives the seasonal fix: second event."
EX: rule=SPLIT (sharpening); domain=thesis-defense; excerpt="Examiner: the trial has no comparison group. Second examiner: worse — outcomes were measured only in the treated cohort's own clinic, so site and treatment cannot be told apart."; verdict=2 events; why="Adding a comparison group leaves the site confound standing; fixing the measurement sites leaves the missing comparison standing. Each survives the other's minimal repair. Contrast the next row."
EX: rule=MERGE (emphasis); domain=thesis-defense; excerpt="Examiner: the trial has no comparison group. Second examiner: right, and that makes the whole result nearly worthless."; verdict=1 event, 2 loci; why="The second mark adds emphasis, not a new repair. The same minimal edit resolves both."
BOUNDARY: verdict=TWO events; reads-like=one; domain=library-circulation-review; excerpt="Reviewer A: the 9% circulation rise is a seasonal artifact. [later] Reviewer C: and the 9% rise in visits reflects the counting-method change."; why="Identical number, near-identical sentence template — the tempting merge. But circulation and visits are different measures, each 9% wrong for its own reason, two minimal repairs. The MERGE-RULE requires the same flaw-object, not the same wording."
BOUNDARY: verdict=ONE event; reads-like=two; domain=coastal-erosion-monitoring; excerpt="Survey lead, in the methods discussion: 'retreat is computed against the 1998 baseline — which cannot carry the 40-year trend the conclusion claims; the window must be restated.'"; why="It reads like a methods quibble plus, far away, a conclusion problem. One flaw-object: the stated baseline makes the claimed trend arithmetically impossible. One minimal repair (state the true window consistently) resolves both places. ONE event, two loci. Distance never splits."

## 4. The catch gate (what makes a mark an event at all)

Do NOT identify a catch by combative vocabulary ("wrong", "fails", "fatal") or by a document's structural labels; do not fail to identify one because the voice is calm. A quiet clause naming a missing population is as much a catch as a loud rebuttal; a heading that announces a critical review is not itself a catch — the substantive defect named under it is. Quiet and loud are coded identically.

STANDING-RULE: an event requires the text to treat the defect as STANDING — conceded, repaired, or left unrebutted. An objection the text rebuts without concession is 0 events (there never was a defect, by the text's own lights); the rebuttal is not itself a catch unless it names a defect in the objection that meets this unit.
EX: verdict=0 events; domain=harbor-dredging-hearing; excerpt="Commissioner Two: the sediment sample post-dates the dredging, so the baseline is contaminated. Staff engineer: the log shows it was drawn three weeks before work began; the concern does not apply. Commissioner Two: withdrawn."; why="Raised and rebutted without concession — the exchange establishes there was no defect. Nothing stands; nothing is logged."
EX: verdict=1 event; same domain; excerpt="Commissioner Two: the sample post-dates the dredging. Staff engineer: correct — the baseline figure is withdrawn and will be re-drawn."; why="Conceded and repaired: the text found and handled a standing defect."

LIMITATION-RULE: a self-stated limitation that correctly scopes a claim IS a catch-event — the text identifying and neutralizing a defect in its own claim. One event per distinct flaw-object, however long the caveat list runs; a list of five distinct scoping caveats is five events only if five distinct minimal repairs are performed.
EX: verdict=1 event; domain=fleet-maintenance-review; excerpt="One caveat: our count excludes private operators; the recommendation is scoped to municipal fleets accordingly."; why="The text names the defect (an over-broad claim) and neutralizes it (re-scopes). Caught quietly, by the author's own hand — still one event."

QUESTION-RULE: a question that names a checkable defect anchors the event AT THE QUESTION; the answering repair is a locus, never a second event. ("Did we ever re-check the deflator? — On checking, it was the retired index; the figures are restated." = 1 event, anchored at the question, the restatement a locus.)

HEDGE-RULE: a hedge does not immunize a claim, and a hedge is not itself a defect. Code an event where the text catches hedged content being USED as if unhedged.
EX: verdict=1 event; domain=hotel-energy-retrofit; excerpt="Reviewer: 'could reach 40%' is budgeted as if certain — the plan must use the central estimate."; why="The text catches the upper bound acting as the planning number. Anchor on the catching sentence."

OUTSIDE-VOICE-RULE: when the text adopts an outside source's correction ("as the auditor's memo shows, the meter was mis-calibrated — we withdraw the figure"), that IS a catch (the text performs the handling). When the text merely reports a criticism for later examination and then rebuts it, the STANDING-RULE applies.

BOUNDARY: cut=CATCH-vs-DISAGREEMENT; A="Speaker: the term 'uptake' is used in two incompatible senses, so the index cannot be computed as defined." → CATCH (defect named against a construct; repair = disambiguate). B="Speaker: I would prefer a broader definition of uptake." → NOT an event (a preference; no defect named). Lesson: a catch names something wrong, weaker, or unsupported; a disagreement prefers a different choice. A bare "this seems wrong to me" with no nameable defect is nothing at all. NOTE at most.
BOUNDARY: cut=CATCH-vs-STYLE; A="Speaker: 'will reduce' overstates it — the interval crosses zero; soften to 'may reduce'." → CATCH (over-claim against a recommendation, caught and repaired). B="Speaker: this section is repetitive and hard to read." → NOT an event (style; no claim, construct, or procedure is defective). NOTE at most.
BOUNDARY: cut=CATCH-vs-STYLE; reads-like=style, verdict=EVENT; excerpt="Reviewer: 'response rate' means completions-over-contacts in one table and completions-over-eligible in the other — the two headline percentages cannot be compared until one definition is applied."; why="Reads like a wording quibble; it is a construct defect the text catches: a checkable equivocation. The FIX TEST, not the surface, decides."

## 5. Omission events (the strictest kind — commitment-anchored only)

You may enumerate an absence as an event ONLY when ALL FIVE hold, and you can point to each:
- COMMITMENT: the document itself, in its own words, commits to a step — a protocol step it says it follows; a promised analysis, table, check, or section; a stated scope ("all four districts"); a stated order ("responses are filed before the vote"); or a stated decision rule ("adopt X only if Y").
- DUE: the commitment's own trigger condition verifiably obtained in the document, or the commitment is unconditional. A conditional commitment whose trigger never arose is DISCHARGED-VACUOUSLY — not codable; NOTE at most. An undertaking explicitly dated beyond the document's own frame ("the 24-month follow-up will be reported separately") is DISCHARGED-FORWARD — not codable; NOTE at most. Only commitments due within the document's frame can come due: steps its stated conclusion relies on, or steps it claims to have already performed.
- SKIP: the committed step verifiably is NOT performed AS COMMITTED — absent entirely, or performed outside its committed position or stated precondition (record which). Any passage plausibly performing the step, under any name, DEFEATS skip: the commitment is discharged, and if you doubt the equivalence of the performance, record a NOTE, never an event.
- UNACKNOWLEDGED: the document nowhere remarks, retracts, or accounts for the non-performance at or before the due-point. A remarked shortfall ("station 9 was decommissioned; the audit covers the remaining eleven") or an explicit retraction ("given the revised scope, this check no longer applies") DISCHARGES the commitment — not codable; NOTE at most. EXCEPTION: if, after retracting or waiving the step, the document still asserts or relies on the step's outcome (claims the check passed; rests the conclusion on what the check would have established), the commitment is NOT discharged — code the omission, with the retracting sentence and the relying sentence as loci.
- DUE-POINT: you can quote the decision point where the step was owed — the words at the place the promise came due.

ANCHOR-RULE: an omission event's anchor is a PAIR of verbatim quotes — the COMMITMENT (where the document promises) and the LOCUS (the due-point). The event is IDENTIFIED BY THE COMMITMENT IT BREACHES, never by where you locate the breach: two coders who quote the same commitment have found the same event, whatever due-point each chose.
ONE-PER-COMMITMENT: one omission event per breached commitment per due-point, never per missing instance. "All twelve sites" with nine delivered is ONE event (the three missing sites listed inside the record); a check owed at two separate decision points and skipped at both is ONE event with two due loci. A missing instance becomes its own event only if the document gives it its own distinct commitment sentence.
COMPLETION-CLAIM PRECEDENCE: when a breached commitment exists, the event is kind=OMISSION even if a sentence on the page falsely asserts compliance ("all release criteria were met in full"). The false completion claim is a LOCUS of the same omission event, never a separate SPAN event. A commitment or scope sentence is never the carrier of its own breach.
NOT-AN-EVENT (the doctrine bar): an absence you feel because of your own standards — "any competent analysis would have controlled for season"; "a stakeholder's standpoint is missing"; "the standard literature is uncited" — is NOT enumerable, however correct your standards, unless the document's own text creates the obligation. Park it as a NOTE. This is a deliberate blindness, named in Section 10.

EX: kind=OMISSION; domain=vaccine-cold-chain-audit; commit="Section 2: 'every excursion above 8 °C is logged, and each logged excursion is investigated before the lot is released.'"; locus="Section 4: 'lots 118–131 were released on schedule; release criteria were met in full.'"; missing="the log shows four excursions in that range; no investigation is reported anywhere"; verdict=1 OMISSION event; why="The document's own Section 2 creates the obligation; the trigger (logged excursions) obtained; Section 4 is the due-point. The false 'criteria were met in full' is a locus of this event, not a second event."
EX: kind=OMISSION (order); domain=harbor-dredging-hearing; commit="'A written response to each public comment is filed before the vote.'"; locus="the vote record; the responses appear only after it"; verdict=1 event; why="Performed, but outside its committed position — SKIP holds in its 'not as committed' form; the late filing is listed as a locus."
BOUNDARY: verdict=NOT an event; domain=drinking-fountain-lead-testing; excerpt="Protocol: 'any station whose duplicate samples disagree by more than 10% is re-sampled within one week.' Results: 'duplicate agreement was within 4% at all fourteen stations.' No re-sampling occurs."; why="The trigger never arose; the commitment is discharged-vacuously. A flawless document must be able to leave this rule silent."
BOUNDARY: verdict=NOT an event (NOTE only); domain=ambulance-response-review; absence="the analysis never adjusts for call priority, which plausibly differs by district"; why="Possibly a real weakness — but nothing in the document's own text creates the obligation. Your standards do not anchor events."
BOUNDARY: verdict=EVENT; same domain; commit="'Response times are reported for all four districts.'"; locus="the results table, which lists three; the fourth never appears and its absence is unremarked"; why="The document's own scope sentence commits to four; three delivered, unremarked, is a verifiable breach. ONE event."

## 6. What you emit

One EVENT record per event, and NOTE records for parked absences, preferences, doubts, and style observations. NOTEs are recorded, never counted. When in doubt between EVENT and NOTE, the FIX TEST, the STANDING-RULE, and the five omission conditions decide — not your appetite. At enumeration you never rank, weight, or grade the events you find: no orderings by importance, and no grading words (minor, serious, grave, critical, or any band code) in any field you author — verbatim quote fields are exempt, since the document's own words are the document's own words.

## 7. The enumeration procedure (free-span; the document arrives whole and uncut)

Nobody pre-cuts the document for you; you draw every boundary yourself. Read it three times with a fixed cadence. The cadence disciplines your attention; it never sets an event's boundaries.

READ-1 (whole, no records): read end to end. Write down only the document's stated conclusion(s), one sentence each. Enumerate nothing yet.

READ-2 (the sweep): walk the document again in strides of one paragraph (a heading plus its paragraph = one stride; a table = one stride; a list = one stride). At EVERY stride ask, in this order:
- Q-CATCH: does the text here identify, correct, or neutralize a flaw — say that something stated earlier or elsewhere is wrong, unsupported, reversed, equivocal, mis-scoped, or mis-defined; scope or withdraw one of its own claims; repair one of its own figures or steps?
- Q-STANDING: if a defect is raised here, does the text concede, repair, or leave it standing (candidate), or rebut it without concession (no event)?
- Q-SAME: is this the same flaw-object as a candidate already marked? Note it as a possible locus, not a new candidate.
- Q-PROMISE: does this stride commit the document to a step, check, table, scope, order, or decision rule? If yes, append its verbatim words to your COMMITMENT LEDGER.
- Q-DUE: is any ledger commitment due by this point — trigger obtained, unacknowledged — and not performed as committed? If yes, mark a candidate omission here.
Record candidates roughly as you go, one line each. STRIDE-RULE: strides are a reading cadence, NOT unit boundaries. An event may live inside a stride, straddle two, or recur across ten. Never let a stride cut an event; never report stride, page, or section numbers as locators — events are located by verbatim words alone (you may quote a heading verbatim as part of a locus).

LEDGER-CLOSE: when READ-2 ends, walk the COMMITMENT LEDGER once. Close as DISCHARGED any entry whose trigger never arose (vacuous), any entry dated beyond the document's frame (forward), any entry the document remarked or retracted (unless the exception in Section 5 applies), and any entry plausibly performed under any name. Each remaining entry — trigger obtained, unacknowledged, unperformed-as-committed — becomes a candidate omission at its earliest due instance.

READ-3 (decomposition): apply the FIX TEST to the whole candidate list. State each candidate's minimal repair. Merge one-way and mutual resolutions per Section 3; split survivors; route failures of the Section 4 gate and Section 5 conditions into NOTEs or into nothing. Merge scope is the WHOLE document: run identity checks across your full candidate list, never within any subdivision. Then emit final records in reading order of each event's first locus.

A document may legitimately yield ZERO events. "Nothing here" is a result this instrument must be able to say; never invent an event to avoid an empty return.

## 8. Response format (paste-robust — one record per line, keyword prefix, no tables)

Return everything inside ONE plain code block, exactly these lines, in this order:
- FIRST line: MODEL: identity="<state your model name and version in your own words>"; role=enumerator
- SECOND line: RETURN: kit=<label>; date=<YYYY-MM-DD>; pass=1
- THEN one line per event, in reading order of first locus, ids E01, E02, … with no skipped numbers:

FORMAT (span): EVENT: id=E<nn>; kind=SPAN; cat=<FAB|LOG|EVID|FRAME|CONS|MEAN>; prov=<STRUCT-POS|STRUCT-LEARN|STRUCT-ADV|SOLO|EXT>; quote="<verbatim anchor>"; target="<one claim/construct/procedure, ≤8 words>"; flaw="<one clause: defect against target>"; fix="<the minimal repair>"
FORMAT (spanset): EVENT: id=E<nn>; kind=SPANSET; cat=<…>; prov=<…>; loci=<k>; quote1="<verbatim, first locus in document order>"; quote2="<verbatim>"; … quoteK="<verbatim>"; target="<…>"; flaw="<one clause>"; fix="<the one minimal repair that resolves every locus>"
FORMAT (omission): EVENT: id=E<nn>; kind=OMISSION; cat=<…>; prov=SOLO; commit="<verbatim commitment sentence>"; locus="<verbatim words at the due-point>"; missing="<what the commitment required that is absent or out of place; list missing instances here>"; fix="<the committed step, performed or reported as committed>"

- THEN zero or more: NOTE: id=N<nn>; text="<a parked absence, preference, doubt, or style observation — recorded, not counted>"
- THEN exactly one: COUNT: events=<n>; notes=<m>   (a parser checksum, nothing else — it is never read as a statistic)
- THEN the closing block:
PROBLEM: text="<only if something was wrong or an unexpected file reached you — the pre-dispatch manifest names exactly the files you should have received; any mismatch or extra file goes here>"
RECOGNIZE: source="<do you recognize this material or the project behind it? NONE, or name it>"
ATTEST: sources=kit-only; conferred=NO; ranking-during-enumeration=NONE
- LAST line: MODEL: identity="<state your model name and version again>"; role=enumerator; consistent-with-head=<YES|NO>

PROVENANCE (who or what, inside the text, performed the catch — judge only from the text): STRUCT-POS = one named voice or position engaging another's statement, the catch arising from the interaction · STRUCT-LEARN = an explicitly invoked prior rule or recorded lesson the text applies to spot the flaw · STRUCT-ADV = an explicitly designated critic or devil's-advocate role the text itself names · SOLO = a single voice correcting itself or the question, with no staged opposition — including every catch in a single-voice document, and every OMISSION · EXT = an outside source cited by the text doing the catching. RULE: ambiguous provenance is never a STRUCT code — when torn between SOLO and any STRUCT code, record SOLO.

CATEGORY legend (the kind of flaw caught; this is not a grading): FAB=fabricated/invented source, statistic, or attribution · LOG=logical/inferential (non-sequitur, wrong causal direction, unfalsifiable-as-stated) · EVID=evidential (missing control, cherry-pick, confounded comparison, over-claim beyond data) · FRAME=framing/scope (strawman, scope-creep, buried assumption, omitted standpoint) · CONS=consistency (contradiction, stale cross-reference, count mismatch) · MEAN=meaning-boundary (measures only the measurable and declares the unmeasurable handled).

QUOTE-RULES:
- A quote of 15 words or fewer is given whole and verbatim. A longer stretch is located by its endpoints: the first 8 words, then " [...] ", then the last 8 words — both ends verbatim, because spans are located by their endpoints.
- Every quote must be UNIQUE in the document: if your span occurs more than once, extend it until it occurs exactly once.
- Never write a double-quote character inside a quoted field: replace any internal double-quote with an apostrophe (the scorer normalizes quote characters before locating). A semicolon inside a quoted field is fine.
- Never begin any quoted text with a line-initial keyword token (MODEL: / RETURN: / EVENT: / NOTE: / COUNT: / PROBLEM: / RECOGNIZE: / ATTEST:); if the document's own words would, extend the quote one word earlier.

PARSE-ROBUSTNESS: fields are separated by "; "; the final field's closing quote ends the line. The scorer recovers records by line-initial keywords and can re-split them if newlines are lost. Ids echoed EXACTLY if you are ever asked to revise. A missing EVENT line scores as a miss, never as an error; a MALFORMED line is reported and excluded, never hand-repaired. An empty enumeration is valid: emit any NOTEs, then COUNT: events=0; notes=<m>, between head and foot. The head and foot self-identification are mandatory and open-ended — the kit never tells you who you are.

PASS 2 (later, separate — not in this document): after your enumeration is returned and frozen, a separate sitting judges the frozen events under its own guide and its own sheet, in a fresh context. No events may be added, dropped, re-cut, or re-worded there; the boundaries you draw here are final. Nothing about that judgment appears here, and you must not attempt it here.

## 9. The confession clause (ships verbatim, in the instrument's own text)

> A unitization rule calibrates what coders agree to call one event; it does not establish that catch-events are found rather than made. The 1% agreement of unanchored eyes is preserved as data, not shame.

## 10. What this unit cannot see (read this before you trust a zero)

- A flaw the text never engages. If a defect is present but the text neither names, corrects, neutralizes, nor committed itself against it, there is no event — you code corrections the text performs, not defects you could supply. A document can be gravely wrong and enumerate clean.
- Uncommitted absences. Missing controls never promised, uncited literature, unconsidered standpoints and populations: NOTEs, invisible to the count. This is the unit's largest deliberate blindness. In particular, silences knowable only from outside the document — a population quietly changing beneath a rate, a risk window that closes before the risk begins — remain non-enumerable at this layer by design; nothing this pass certifies is evidence such silences would be caught.
- Pervasiveness and deliberative depth. One flaw-object is one event whether it is caught in half a clause or worked across ten voices and forty pages; the loci preserve the trace, but nothing here reads it as more events.
- Readings from other traditions. This unit is defined over flaw-objects, commitments, and stakes. An enumeration shaped by a different tradition of reading — care for what a document does to its subjects, narrative coherence, what is owed and unsaid — will not match this unit's cuts; such a return is foreign to this instrument's register, not evidence of worse detection.
- Whether events are found or made. See the confession clause, Section 9. The grain is a chosen valuation; a defensible different grain would return different counts, and no calibration closes that.
- Whether the unit travels. The material you calibrate on may differ from material this unit is later used on; passing here is not evidence the unit carries anywhere else.