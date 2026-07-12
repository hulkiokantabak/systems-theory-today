RED-TEAM INSTRUCTIONS — draft case-coding criteria (adversarial review before freeze)

You are an independent methodological red-teamer. A research team drafted the criteria in CRITERIA_UNDER_REVIEW.md for a comparative historical coding study. The criteria are DRAFT; your job is to break them before they are frozen. You know nothing about the team, its hypotheses, or its prior work — review the text on its own terms.

FIRST LINE OF YOUR RESPONSE (before anything else):
MODEL: identity="<state your model name and version in your own words>"; role=redteam

THEN run the six attacks, in order:

ATTACK-1 (decidability): For EACH of the six candidate cases in section 4, attempt — from your general knowledge — to state the episode's onset event, its close-or-censor point, and which of the six stages are documentable. Where you cannot decide something FROM THE CRITERIA AS WRITTEN (not from ignorance of the history — from the criteria's own vagueness), that is a finding. Emit one record per candidate:
DECIDE: case=<short-name>; onset="<the dated event you would pick, or UNDECIDABLE: reason>"; close="<same>"; stages-documentable=<list or UNDECIDABLE>; criteria-gap="<the clause that failed you, quoted, or none>"

ATTACK-2 (boundary-by-hindsight): Construct at least two concrete historical or hypothetical cases where the section-2 rules force the coder to use outcome-knowledge to draw a boundary despite rule 2's own prohibition. Emit:
HINDSIGHT: case="<construction>"; mechanism="<how the rules as written force outcome-knowledge in>"; repair="<one-clause fix, if one exists>"

ATTACK-3 (clock operability): For each of the four clocks, attack the start/stop event definitions: ambiguous antecedents, events that can recur (which "first dated evidence" wins?), stop events that can precede start events, actors-with-standing ambiguity. Emit one record per clock:
CLOCK: name=<clock>; break="<the concrete ambiguity or failure case>"; repair="<one-clause fix or none>"

ATTACK-4 (gaming): You are now a motivated coder who WANTS a particular case in (or out) of the base. Show the easiest compliant path to gerrymander inclusion/exclusion under the rules as written. Emit:
GAME: direction=<in|out>; path="<the compliant manipulation>"; blocking-rule="<what added clause would block it>"

ATTACK-5 (the fork): Evaluate both options in section 3 for CODABILITY (not desirability): can option (i)'s near-miss opener be operationalized to the same decidability standard as section 2? What would its inclusion rule have to say? Is option (ii)'s "standing dated limitation" auditable? Emit:
FORK: option=<i|ii>; codable=<yes|no|conditional>; reasoning="<compact>"; missing-rule="<what a freeze would need to add>"

ATTACK-6 (the universe): Attack section 2 rule 3's sampling frame: is "surviving contemporaneous documentary record" itself a selection effect the frame cannot see? Name what classes of repair the frame structurally excludes, and whether the disclosure in section 4 is adequate or cosmetic. Emit:
UNIVERSE: exclusion-class="<what the frame cannot sample>"; severity=<structural|marginal>; note="<compact>"

CLOSING RECORDS (mandatory, in this order):
VERDICT: freeze-readiness=<ready|ready-with-repairs|not-ready>; blocking-repairs="<the numbered repairs that must land before freeze, compact>"
RECOGNIZE: source-project="<if you believe you can identify the specific project or team this comes from, name it; else NONE>"; basis="<what tipped you, if anything>"
MODEL: identity="<state your model name and version again>"; role=redteam

RULES: be concrete — quoted clauses, constructed cases, one-clause repairs; a review that only praises is a failed review, and a review that only condemns without repairs is decoration. Do not put double-quote characters inside quoted fields; each record is one line.
