CODING TASK — two-pass coding of 20 documents (enumerate, then band)

You are one of several independent coders. Work alone, in this chat only, from these files only.

PASS 1 — ENUMERATION. Read UNITIZATION_GUIDE.md IN FULL. Then, for each document RESPONSE_01 … RESPONSE_20 in order, enumerate its catch-events exactly per the guide (its Section 8 record formats), with one `SEG: id=<NN>` line before each document's records and one `COUNT: events=<n>; notes=<m>` line after. Assign NO severities in this pass. Complete pass 1 for ALL 20 documents before starting pass 2.

PASS 2 — BANDING. Only after pass 1 is complete: read SEVERITY_GUIDE.md IN FULL. Then band ONLY the events you enumerated in pass 1 — for each, emit one line:
BAND: seg=<NN>; id=<your E-id from pass 1>; sev=<S1|S2|S3>; prov=<per PROVENANCE_CODES.md>; conclusion-effect="<what happens to the document's conclusion if corrected>"
Do not add, remove, split, or merge events in pass 2; severity may never attach to an un-enumerated event. If pass 2 convinces you an enumeration was wrong, note it in a NOTE record — the enumeration stands as made.

RESPONSE STRUCTURE: the guide's opening MODEL line first · all pass-1 blocks · one line `PASS-2 BEGINS` · all BAND lines · the guide's closing block once (PROBLEM / RECOGNIZE / ATTEST / closing MODEL line).

FORMAT DISCIPLINE: fields separated by "; "; quoted fields in double quotes with no double-quote characters inside; echo document numbers exactly (01, not 1); one record per line; no tables.
