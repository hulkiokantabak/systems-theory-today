CODING TASK — enumerate catch-events in 20 document segments

You are one of several independent coders. Work alone, in this chat only, from these files only.

1. Read UNITIZATION_GUIDE.md IN FULL before touching any segment. It defines what one catch-event is, how events split and merge, how omission-events are anchored, and the exact one-record-per-line response formats (its Section 8). Apply it exactly; do not widen or narrow it.
2. Code the segments in filename order: SEGMENT_A01 … SEGMENT_A10, then SEGMENT_B01 … SEGMENT_B10. Treat EACH segment as one document under the guide. This is PASS 1 ONLY — enumeration. Do NOT assign severities, grades, or importance ratings; a later, separate pass under a different guide does that. In this pass you only find and bound events.
3. Response structure — the guide's Section 8 format, bridged per segment:
   - FIRST line of your whole response: the guide's opening MODEL line.
   - Then, for each segment in order: one line `SEG: id=<A01…B10>` followed by that segment's EVENT records, its NOTE records (if any), and its `COUNT: events=<n>; notes=<m>` line, exactly per the guide. Event ids restart at E01 within each segment. A segment where you find nothing gets zero EVENT records and `COUNT: events=0; notes=0` — "nothing here" is a legitimate, expected answer for some segments.
   - Then the guide's closing block ONCE for the whole response: PROBLEM / RECOGNIZE / ATTEST / closing MODEL line.
4. Format discipline (your return is scored mechanically): fields separated by "; "; every quoted field wrapped in double quotes with no double-quote characters inside; echo segment ids EXACTLY as printed (A01, not a1); one record per line; no tables; no prose outside the records.
