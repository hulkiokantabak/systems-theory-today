# PLAYTEST CYCLE 2 — MARGARET (assistive-technology / low-vision reader)

Status: author-commissioned, panel-executed (S4i standing delegation) · self-administered (L-015) · Cycle stamp: **playtest-cycle-2, panel-delegated (S4i standing delegation), provisional-pending-author, wholesale-revertible** · Site under test: commit `a767436` (post-cycle-1) · Full report and decision record verbatim in the session transcript.

## 1. The user session (headline findings)

Margaret (fresh context; browser automation with instrumentation honesty — screenshots failed; everything from the accessibility tree, computed styles, DOM geometry, and live key events, each marked as such). **HEADLINE DEFECT: the Contents sidebar did not exist at desktop widths ≥901px** — the served `<details>` was closed while its summary was `display:none`, and modern Chrome's `::details-content{content-visibility:hidden}` killed the CSS force-open trick: 48 links and the filter invisible, unclickable, unfocusable, while the a11y tree still announced them (a screen-reader/sighted mismatch). Also: primary-nav and footer faint text **fail AA contrast on both themes** (3.93:1 / 3.15:1 measured); the nine figure canvases' keyboard scrollability unproven, no focus rule; 18 download buttons indistinguishable ("↓ SVG" ×9); the filter announces to no one (no live region); sidebar auto-titles mislabel spines ("The repair", "Move 6", "Seven", and one page titled identically to the site). Praise: clean heading/landmark structure everywhere, honest titles, working skip link, 15/15 live focus rings on the amber rule, the Summary "a document respecting its reader." **EXPECTED-FAIL measure: did NOT fail on the route** (every stop ringed) — "the real failure sits beside the route": the dead drawer. Not persona-capture: the report is the cycle's most defect-dense.

**What this playtest cannot see (hers, verbatim):** "real screen-reader announcement order and verbosity …; whether JAWS/NVDA actually surface the dead sidebar's links …; true Enter/Space activation semantics …; rendered pixels of any kind this session …; arthritis fatigue across 41 real tab stops on a bad wrist day; 200% browser zoom as distinct from viewport reflow; print styles; performance on an old machine."

## 2. The expert session and implementation

Experts (register-fairness, structure, measurement-honesty) + advisors (accessibility engineer, editorial web designer). Ten decisions, one declined (the map keyhole at zoom — "it says so honestly"). **Process deviation, logged per the program's named-actor rule:** the expert session implemented its own decisions directly rather than handing them to the implementer role; the roles are one model either way (L-015), the manifests and D-007 checks below were produced as required, and the chair verified the results live and re-ran the scope check before committing. Acting roles per act are named in the session transcript.

Implemented (all verified in the built output; live-verified by the chair: drawer open at 1280px, height 1884, filter focusable, 48 links reachable, both nav landmarks present, new spine labels rendering):

1. **D2-01 (the dead drawer — PRESENTATION):** the sidebar is now a real `<nav aria-label="Contents">` landmark whose `<details>` is **served open**; JS syncs it to the viewport (open ≥901px, collapsed below); a `::details-content{content-visibility:visible!important}` defense rule at desktop. Works without JS in every engine by HTML semantics.
2. **D2-02 (AA contrast, token-level — PRESENTATION):** dark faint `#6f6d90`→`#8a88ab` (5.70/5.21/5.40:1 across fields); light faint `#8b8799`→`#6b6779` (4.93/4.52:1); light amber `#a45e0d`→`#985409` (5.25/4.81:1) with matching underline tint. Full recomputed ledger in the transcript; every measured pair now ≥4.5:1 on both themes. *(Designer's dissent preserved: the darkened light-mode amber trades a sliver of warmth.)*
3. **D2-03 (focus ledger):** summary focus rule added; `.fig-canvas` gains `tabindex="0" role="region"` + per-figure aria-label + focus ring (SITE-COPY on diagrams.njk: attributes only, D-007 holds); the filter's focus rule already existed — unreachable only because of the dead drawer.
4. **D2-04 (diagram text alternatives — PRESENTATION):** every Mermaid SVG gets `role="img"` + `aria-labelledby` pointing at its visible title + one-sentence assertion; in-doc diagrams labeled from their nearest heading. *(A11y engineer's limitation preserved: a summary, not a node-by-node equivalent; hand-written long descriptions would be CONTENT for the author.)*
5. **D2-05 (download buttons — SITE-COPY):** `aria-label="Download figure N (title) as SVG/PNG"`; visible text unchanged; D-007 holds.
6. **D2-06 (filter live region — PRESENTATION):** polite `role="status"` announcing "N pages shown", debounced.
7. **D2-07 (mislabeled spines — SITE-COPY, manifest in the transcript):** `firstH1()` stripped at plain hyphens, shearing compound words — now strips only at spaced em-dashes; bare sequence tokens ("Move 6") carry their descriptive segment; one curated override (`docs/REPORT.md` → "Project report" — a strict weakening: the page no longer borrows the site title). 9 labels change; canon H1s untouched; D-007 holds-or-weakens per label.
8. **D2-08 (crumb → nav landmark — PRESENTATION).**
9. **D2-10 (the session's own catch — governance rule 5 breach):** the program's own files were being PUBLISHED at `/playtests/*` on the public site — unlinked but crawlable, violating "the site never mentions being playtested." Fixed: `.eleventyignore` excludes `playtests/`; served assets purged of playtest mentions (provenance preserved repo-side); `_site/playtests/` confirmed gone. *(Measurement-honesty dissent preserved: served-comment provenance removal is a de-emphasis of a kind; resolved — the render-invariance rule protects reader-facing honesty markers, which build comments are not.)* Logged as the program's third self-caught defect; the checker gains `.eleventyignore` as classified build config.

## 3. Queued for the author (verbatim, filed by the chair per the session's filing note)

- "docs/metrics/ carries several snapshots simultaneously marked current: 'Snapshot — Session 2 (current)', 'Snapshot — Session 3 (current)', 'Snapshot — Session 4 (current)'. Only one thing can be current." *(Session note: seven headings carry "(current)", S2 through S4i.)*
- "/panel/session_s4h_ratification/: Nothing on the page says what S4h IS in plain words."

## 4. Her exit line (verbatim)

"Whoever built this cares; whoever built this tested at one window size. Fix the drawer, brighten the little grey type, give the diagrams their spoken descriptions, and I would hand this site to any patron I've ever served." — All three named fixes shipped this cycle.

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
