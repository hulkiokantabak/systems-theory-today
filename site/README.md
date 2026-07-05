# site/ — the public reading website (Eleventy)

Version: 1.0 · Status: Living · Last updated: Session 4

*The **reading surface** of the two-surfaces plan (`docs/THE_LIVING_DOCUMENT.md` §7): the repo's
own Markdown, rendered in place — the repository **is** the site's source (`ARCHITECTURE.md` §6,
Phase 2). Understated register; design tokens carried over from `viz/`.*

## Build & preview

```bash
npm install          # once: Eleventy + markdown-it (dev deps)
npm run build        # renders the site to _site/
npm run serve        # local dev server with live reload
npm run clean        # remove _site/
```

`_site/` is git-ignored; it is built by CI, never committed.

## How it works

- **Input is the repo root** (`eleventy.config.js`, `dir.input: "."`). Which docs render is decided
  by `site/lib/docmap.mjs` — the **single source of truth** shared by the nav, the computed
  permalinks/titles, and the cross-reference link-rewriter, so they can never drift.
- **Scope:** root docs + `docs/` + `panel/` + `outputs/` + `logs/` (Catches, Learnings,
  Open-Questions, Reflections). Excludes `logs/handoffs/` (shuttle coordination) and `studies/`
  (gated) — those live only in the private repo.
- **No front matter is added to the canonical docs.** `site/_data/eleventyComputed.js` applies the
  layout, permalink (lowercased path; `README.md` → `/`), and title (first `# H1`) at build time.
- **Cross-references become links.** A transform rewrites real `*.md` links and linkifies the docs'
  `backtick path mentions` (e.g. `docs/GOALS.md`) to the right page URL.
- **Figures.** `viz/` is passthrough-copied; `/diagrams/` embeds `viz/diagrams.html` (nine figures,
  one hand-authored SVG). Any `` ```mermaid `` block in a doc (e.g. `DIAGRAMS.md`) is rendered
  client-side with the same theme as `viz/`, degrading to visible source if the CDN is blocked.

```
site/
├── _includes/base.njk        # the layout (masthead, sidebar nav, footer, mermaid loader)
├── _data/
│   ├── eleventyComputed.js    # layout + permalink + title for every doc
│   ├── nav.js                 # navigation, generated from the doc map
│   └── site.js                # global metadata
├── lib/docmap.mjs             # SINGLE SOURCE OF TRUTH: doc set → url/title/group + link maps
├── assets/styles.css          # design tokens from viz/, understated editorial register
└── diagrams.njk               # /diagrams/ — embeds viz/diagrams.html
```

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` runs the standing checks, builds with Eleventy, and deploys to
Pages on push to `main` (dormant until the repo is pushed and Pages is enabled — the **repo stays
private**; only the reading surface is published).

**Subpath note:** for `https://<user>.github.io/<repo>/`, set the repo/Actions variable
`PATH_PREFIX` to `/<repo>/` and add the Eleventy HTML-base plugin. For a user/org root or custom
domain, the default `/` is correct.
