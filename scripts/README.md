# scripts/ — the standing checks (Code's permanent tools)

Version: 1.0 · Status: Living · Last updated: Session 4

*The consistency checks Chat had been running by hand, made **permanent** (WORK_ORDER_S4 task 4; `docs/CHAT_CODE_WORKFLOW.md` §8.3, L-006/L-007). Zero external dependencies — Node built-ins only, so they run on a bare clone with no `npm install`. Run them before every commit.*

## Run

```bash
node scripts/run-checks.mjs        # all three gates; exits non-zero if any fails
npm run check                      # same, via package.json

node scripts/check-references.mjs  # every internal reference resolves
node scripts/check-counts.mjs      # counts reconcile with docs/METRICS.md
node scripts/check-diagrams.mjs    # diagrams parse; figure 05 is SVG; counts agree

node scripts/ripple.mjs --list                 # named canonical entities
node scripts/ripple.mjs --entity pressure-tests# who references it + missing dependents
node scripts/ripple.mjs docs/GOALS.md          # who links to a file
node scripts/ripple.mjs "designed disagreement"# any phrase
```

## What each guarantees

- **check-references** — markdown links, HTML `href/src`, and `backtick doc mentions` (the
  dominant cross-reference style) all resolve to a file that exists. External links, anchors,
  fenced-code templates, and a tiny explicit allow-list are skipped. The C-010 fix, permanent.
- **check-counts** — reconciles on-disk reality against the METRICS snapshot: content-file
  baseline (34), catches/learnings/questions/disagreements (12/9/12/6), diagrams (9),
  pressure-tests (13), ground rules (23). Code-layer artifacts (the digest + R3 gist) are
  reported separately so the baseline stays meaningful. *This is the check that catches a stale
  count like the one in the S4 work-order header (32/C-011/L-008 vs the true 34/C-012/L-009).*
- **check-diagrams** — `docs/DIAGRAMS.md` Mermaid blocks parse (known type, balanced
  brackets/quotes, ASCII-only quadrant point names — the C-011/L-007 trap); `viz/diagrams.html`
  is valid JS with 9 figures and figure 05 stays the hand-authored SVG.
- **ripple** — given a changed thing, lists every document that references it (so the ripple is
  applied in the *same* commit) and fails loudly if a declared propagation target has no
  reference at all ("Chat decides *what* changes; Code guarantees it *propagates*").

## Design notes

- `lib/repo.mjs` is the shared library: repo walk, the content baseline, and the Code-layer
  exclusions. Adjust the exclusions there if the canonical set changes.
- The checks are the pre-commit gate in `.github/workflows/pages.yml` too, so a broken reference
  or a diverged count blocks a deploy.
