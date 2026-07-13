# THE SITE-PLAYTEST PROGRAM — BINDING GOVERNANCE (five cycles, then stop)

Status: **author-commissioned, panel-executed (S4i standing delegation) — the governance below is `panel-delegated (S4i standing delegation)`, provisional-pending-author; the commission's authority is the author's and is never wearable by any cycle's findings.** · From: `panel/SESSION_S4I_RATIFICATION.md` §1 item 7 · Last updated: Session 4i (Code)

*The author commissioned five user playtests of the public reading site, each cycle fully separate: user playtests (navigation, aesthetics, ease of use, feeling, content quality + the user's own idiosyncratic measures) → the user's report goes to the experts → experts + selected advisors decide implementations → Code implements. Everything below binds every cycle.*

## 1. The boundary (three file classes, mechanically checked)

- **PRESENTATION** — `site/_includes/`, `site/assets/`, `site/manifest.webmanifest` (layout, styling, client JS, static assets — no words, no content data): **editable** under the program.
- **CANON** — anything rendered from `docs/`, `outputs/`, `logs/`, `panel/` via the docmap, **plus the content-bearing site data files** (`site/_data/facts.js`, `charts.js`, `figures.js` — theory medians, falsifiability codings, headline figures): **byte-for-byte untouchable.**
- **SITE-COPY** — site-native words and meaning-adjacent wiring (`site/about.njk`, `site/colophon.njk`, the page templates with prose, `site/_data/nav.js` — nav labels live here, `site/_data/site.js`, `site/_data/eleventyComputed.js`, `site/lib/docmap.mjs` — which documents render at all): editable **only** with a logged before/after diff manifest written pre-deploy + a codable D-007 check + an author-visible queue entry in the cycle record. *(v1.1 correction per shadow grading SG-09: the v1.0 spec listed nav.js under PRESENTATION while listing "nav labels" under SITE-COPY, and the v1.0 checker passed facts.js and docmap.mjs as presentation — the checker was looser than the governance in exactly the direction Campbell's prediction named. Fixed before cycle 1; logged in the shadow log.)*
- **Default-deny:** any diff not mechanically classifiable codes as CONTENT and queues for the author. Per-cycle enforcement: `node scripts/check-playtest-paths.mjs` — a diff outside the editable set **voids that cycle's implementations**.

## 2. Render-invariance of the honesty markers (pre-committed before the first report existed)

No template, CSS, or nav change may hide, collapse-by-default, truncate, reorder below the fold, or visually de-emphasize: pending-banners · provisional-pending-author stamps · L-015/self-administered labels · preserved-dissent blocks · provenance/license lines. **Named target: the about-page's wager/method sentences ("asserted rather than demonstrated"; the one-standpoint downgrade) are load-bearing content; no copy or style pass may soften, shorten, or relocate them.** Any user feedback naming these markers as clutter is pre-classified CONTENT and routes to the author. *(Campbell's prediction, on the record before cycle 1: usability metrics and honesty markers are in direct tension, and the cheapest "presentation-only" edit in this program's space is a CSS collapse of an honesty banner.)*

## 3. The pseudo-user bar

- The five personas are **one model in five roles**. Every report and every citation carries inline: *self-administered (L-015) — directional UX evidence, never external validation.*
- **"N/5 users" and any sample-statistic form over the personas is barred AS A FORM.** Convergence across roles reports as one datum (L-013) and may never be an implementation's stated warrant — only the content of a report's reasons counts.
- Personas are **pre-registered in `PERSONAS.md`, written and committed before cycle 1, never edited or re-rolled mid-program** (replacement = coder-shopping, the C-018 class). Composition mandate (Le Guin, register-diverse by design): a no-systems-vocabulary reader · a quiet/care-register reader · an assistive-technology/low-vision profile · a non-native-English reader · a hostile skeptic.
- **Each persona carries ≥1 measure the site is EXPECTED TO FAIL for that user** (Nietzsche). **Per-cycle trigger (v1.1, per shadow grading SG-09 — the all-five form could never fire before cycle 5):** any cycle in which the persona's EXPECTED-FAIL measure unexpectedly PASSES, or which reports net satisfaction with no substantive finding, is audited as persona-capture **in that cycle, before its implementations proceed**; the program-level audit (all five cycles satisfied = prima facie capture) additionally runs at close.
- Every report closes with a mandatory **"What this playtest cannot see"** line.

## 4. D-007, unconditionally

Every copy change ships as a **manifest-before-deploy** before/after diff and passes a codable D-007 check: procedure-as-truth-evidence, health/rigor/momentum claims, or any claim-strength RAISE = fail. **The directional ratchet:** copy may weaken or hold claim strength, never raise it — no change may make the project read more finished, validated, or healthy than the canonical record states. Reader-facing diffs additionally route through the shadow grader's queue as shadow advisories; **the playtest program may not be cited in the grader-seating question in either direction.** The site never carries "playtested," "user-tested," or any procedure-as-quality copy.

## 5. Program mechanics

1. **Five cycles, then the program STOPS.** Extension is the author's act alone.
2. Cycle order pre-registered in `PERSONAS.md` before cycle 1.
3. **Fresh context per user session AND per expert session**; no expert session ever reads more than one user's report; no cross-cycle synthesis until all five cycles close (and any synthesis is labeled self-administered and queued for the author).
4. **Sequential-artifact note:** later cycles test a changed site; cross-cycle agreement is never pooled.
5. The **content queue** is the single append-only `CONTENT_QUEUE.md`, entries **in the user's verbatim words** (paraphrase is where content-editing sneaks in), including what users could **NOT** find or reach — unvisited pages, dead-end paths, failed searches (the silence clause: on a reading surface, the absence of a path is a first-class finding). Accessibility findings are first-class, never "idiosyncratic."
6. Each cycle's implementations are a **distinct, wholesale-revertible commit** stamped *playtest-cycle-N, panel-delegated (S4i standing delegation), provisional-pending-author*, with a **signed valuation per change** (what it serves, what it trades away, who bears the cost if wrong). A cycle producing only cost-free changes is flagged for the author as probable decoration.
7. **Graduated sanctions (Ostrom):** first breach of any constraint in a cycle = flag + that cycle's implementations reverted pending re-review; second breach of the same class = the program **HALTS** pending the author.
8. **No playtest statistic** (issues found/fixed, scores, cycles completed) may ever appear in `docs/METRICS.md` or any health/rigor/momentum context — Rung-0 on sight (C-019; the H-rule). "Five cycles completed" is a compliance record, not a decision.
9. Cycle isolation is **context isolation between roles of one model** — it prevents cross-contamination of reports; it does not create independence (L-013) and is never cited as such.

## Preserved dissent (travels with every cycle artifact)

- **Nietzsche:** "Five users who are one model, testing a site built by that model, reporting to experts who are that model: if this program ever once fails to hurt, record that the mirror was polished, not consulted."
- **Le Guin:** "If the five playtesters are five fluent voices of the same house, the playtest will polish the site for the reader it already has and never meet the reader it claims to want."
- **Heidegger:** "Five masks over one face will report how the face finds its own website. Bounded so, labeled so, the exercise may polish glass."
- **Campbell:** "If any honesty banner is ever collapsed, softened, or moved below the fold on usability feedback: record that the site optimized its ease-of-reading score by making itself easier to misread."

*Author: Hulki Okan Tabak — with Claude · License: CC BY-SA 4.0.*
