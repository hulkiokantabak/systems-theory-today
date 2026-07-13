SEGMENT A04 (domain: parcel-sortation-outage-post-mortem)

Incident Post-Mortem — Parcel Sortation Line 4 Outage

Present: Operations Lead, Reliability Engineer, Incident Reviewer (assigned to challenge the findings).

Operations Lead: Line 4 was down for eleven hours. My read is that the sorter firmware update introduced the fault; the stoppages began around the update and the pattern fits a bad build.

Reliability Engineer: The timeline doesn't support that. The event log shows the first hard stoppage at 02:14 Tuesday. The firmware update didn't deploy to Line 4 until Thursday morning — two days later. Whatever caused the Tuesday and Wednesday stoppages, it wasn't a build that hadn't shipped yet.

Operations Lead: Granted, then — if the update landed Thursday it can't be the cause of the Tuesday failures. I'll withdraw the firmware theory.

Reliability Engineer: The logs point instead to the induction belt's photo-eye sensor: its miss-rate climbed steadily from Monday and crossed the jam-trigger threshold Tuesday morning, which matches the first stoppage.

Incident Reviewer: I'll take the assigned contrary position on the impact statement. The draft says the outage had no customer impact. That claim is built only on the count of same-day complaint tickets, which stayed flat. But the outage window rerouted roughly nine thousand parcels to the overflow hub, and those were delivered a day late; late deliveries that generate no ticket are still impact. The no-impact claim is not supported by a ticket count alone.

Operations Lead: Fair. We'll restate that as no complaint-generating impact and report the rerouted volume and the added day.

Reliability Engineer: Root cause is the degrading photo-eye sensor, with the missing preventive-replacement interval as the contributing gap. The firmware update was coincident, not causal.

Actions: replace the photo-eye sensor and add it to the preventive-maintenance schedule; report rerouted-parcel counts in future incident impact statements; close the firmware line of inquiry.
