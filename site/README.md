# site/ — the public reading website (Eleventy)

Version: 1.1 · Status: Living · Last updated: Session 4 (rev b)

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
  client-side (external `assets/mermaid-init.js`) with the same theme as `viz/`, degrading to
  visible source if the CDN is blocked.
- **Analytics.** Cookieless, SRI-pinned **GoatCounter** beacon in `base.njk` → the author's shared
  `hulkiokantabak.goatcounter.com` dashboard (skips localhost automatically; no cookies, no IP logging).
- **Icon / PWA / home screen.** `apple-touch-icon` (180) + `manifest.webmanifest` (192 / 512 / 512-maskable)
  + an SVG favicon + `og.png`, all in `assets/`, so the site installs cleanly to a phone home screen.
  The mark is the project's signed causal loop, rendered from `tools`-free Pillow (see build note below).
- **Content-Security-Policy.** A strict allowlist meta tag: `self` + Google Fonts + the Mermaid CDN
  + the GoatCounter endpoint, and `unsafe-inline` for **styles only** (Mermaid injects them). No inline
  scripts, no `unsafe-eval`.
- **Path prefix.** Templates use Eleventy's `| url` filter and the cross-reference transform
  self-prefixes with `process.env.PATH_PREFIX`, so the site is correct at a root **or** a project
  subpath with no double-prefixing.

```
site/
├── _includes/base.njk        # the layout (masthead, sidebar nav, footer, CSP, icons, analytics)
├── _data/
│   ├── eleventyComputed.js    # layout + permalink + title for every doc
│   ├── nav.js                 # navigation, generated from the doc map
│   └── site.js                # global metadata (incl. deployed origin/url)
├── lib/docmap.mjs             # SINGLE SOURCE OF TRUTH: doc set → url/title/group + link maps
├── manifest.webmanifest       # PWA manifest (relative paths → subpath-safe)
├── assets/
│   ├── styles.css             # design tokens from viz/, understated editorial register
│   ├── mermaid-init.js        # external Mermaid loader (keeps CSP free of inline scripts)
│   ├── favicon.svg · icon-16/32/180/192/512(+maskable).png · og.png   # icon set
└── diagrams.njk               # /diagrams/ — embeds viz/diagrams.html
```

Icons are regenerated from `og`/`icon` source geometry with Pillow (no SVG rasterizer needed); the
design was chosen by a designed-disagreement icon panel (recorded in `logs/handoffs/DIGEST_S4b.md`).

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` runs the standing checks, builds with Eleventy, and deploys to
Pages on push to `main` (dormant until the repo is pushed and Pages is enabled — the **repo stays
private**; only the reading surface is published).

**Subpath.** The Pages workflow defaults `PATH_PREFIX` to `/systems-theory-today/` (the project-page
path `https://hulkiokantabak.github.io/systems-theory-today/`). Every internal link is prefixed at
build time via the `| url` filter (templates) and the self-prefixing cross-reference transform — no
HTML-base plugin. **If the GitHub repo slug differs or you use a custom domain**, set the repo/Actions
variable `PATH_PREFIX` accordingly (a user/org root or custom domain → `/`) **and** update the
`Read it online` link in the top-level `README.md` and `site/_data/site.js` (`origin`/`url`) to match.
Locally, `npm run build` uses `/` so the site previews from the filesystem root.
