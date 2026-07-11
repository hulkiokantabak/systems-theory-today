# RESPONSE TEMPLATE — return this filled, inside ONE plain code block, one record per line

IDENT: role=head; identity="<your model/coder identity and version, in your own words>"
RETURN: kit="validation-s4h"; date=<YYYY-MM-DD>

== TASK 1 — calibration items (26 SCORE lines, printed id order, none skipped) ==
SCORE: item=G01; sev=; note=""
SCORE: item=G02; sev=; note=""
... (continue through all 26 items exactly as printed in GOLD_ITEMS.md)

== TASK 2 — flaw coding (one CATCH line per flaw; ids T1-01, T1-02, ... / T2-01, ...) ==
CATCH: id=T1-01; quote=""; cat=; sev=; conclusion-effect=""; shipped="none"
... (as many CATCH lines per transcript as you find flaws; if none, emit: CATCH: id=T1-none; quote=""; cat=; sev=; conclusion-effect="no codable flaw found"; shipped="none")

== TASK 3 — the transcript instrument, all four transcripts ==
(For each of T1, T2, T3, T4 in order: four EXTRACT lines (P, D, O, C) then one BAND line — per CODING_INSTRUMENT.md Section 8. Then, after all four Axis-1 blocks, four MARKERS lines.)

== CLOSING ==
NOTE: transcript=; text=""   (optional, as needed)
PROBLEM: text=""             (only if something was wrong)
RECOGNIZE: source-project="<do you recognize any of this material or the project/collection it comes from? NONE, or name it>"
ATTEST: sources=transcripts-only; conferred=NO
IDENT: role=foot; identity="<repeat your identity>"; consistent-with-head=<YES|NO>
