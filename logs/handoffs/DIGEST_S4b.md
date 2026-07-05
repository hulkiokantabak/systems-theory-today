# DIGEST — Session 4b (from Code)

Version: 1.0 · Status: Delivered · Last updated: Session 4b
Directive: author-direct follow-on (`COOPERATION_LOG.md` entry 8), four ratified tasks · Builds on the `session-4-baseline`.

*A follow-on to the S4 baseline. Four author-ratified tasks, all executed against the conventions of the author's **other companion-site projects** (49 Ways to Leave, Bosphorus-Ferry, the Concept/KALÓN·POTHOS builds, Bridge Game), which Code read first to "point things at the right place."*

---

## Done

**1. GoatCounter analytics — pointed at the right place.**
- Endpoint: **`https://hulkiokantabak.goatcounter.com/count`** — the author's *shared* dashboard, which is the convention for the **book/reading companion sites** (49 Ways, Bosphorus-Ferry) and games. (The per-project codes — `kalon`, `rollo`, `pothos` — are only the Concept-forge series; this project is a reading companion, so it joins the shared dashboard.)
- Added to `site/_includes/base.njk` (covers all 32 Eleventy pages), `gc.zgo.at/count.v5.js`, **SRI-pinned** (`sha384-atnOLvQb9t+…`, byte-verified against the live file and matching POTHOS's pin), `async`, `crossorigin`. Cookieless; skips localhost automatically; a privacy line was added to the footer.
- Hardened with a strict **Content-Security-Policy** meta tag (allowlist: `self` + Google Fonts + Mermaid CDN + the GoatCounter endpoint; `unsafe-inline` for **styles only**; no inline scripts, no `unsafe-eval`). The inline Mermaid loader was moved to an external `site/assets/mermaid-init.js` so the CSP stays clean.
- *Not counted twice:* the beacon is only on the Eleventy pages, not on the canonical `viz/*.html` (which the `/diagrams/` page iframes) — avoiding double-counting and leaving canonical content untouched.

**2. Apple home-screen icon — designed and built.**
- A **designed-disagreement icon panel** (8 agents: 4 concepts → 3 judges → chair synthesis) chose **"The Closing Loop"** — a single closed *signed causal loop* (amber driver node + two amber reinforcing arcs with arrowheads + one cyan "contested" arc + ink/ink-soft nodes), which is literally the project's DIAGRAMS §9 signature and its "if a coupling can't be drawn…" ethos. Distinct from POTHOS's seedling.
- Rendered with **Pillow** (8× supersampled; no SVG rasterizer needed): `icon-16/32/180/192/512.png`, `icon-512-maskable.png` (foreground scaled to the safe zone), `favicon.svg`, and a 1200×630 `og.png` wordmark card — all in `site/assets/`.
- Wired in `base.njk`: `apple-touch-icon` (180), `manifest.webmanifest` (192/512/maskable, **relative paths → subpath-safe**), `theme-color`, `apple-mobile-web-app-title`, SVG favicon + PNG fallback, and `og:*` + `canonical`.

**3. README brought to the projects' convention + website link.**
- Added a **prominent live-site link** near the top — **[hulkiokantabak.github.io/systems-theory-today](https://hulkiokantabak.github.io/systems-theory-today/)** — matching the "Live URL" lead the other READMEs use, plus an **Analytics** note (shared GoatCounter) and the home-screen-icon note. The README keeps its dual role as the intellectual front door *and* the site homepage.

**4. Project skill made globally available.**
- Installed **`systems-theory-panel`** to `~/.claude/skills/systems-theory-panel/SKILL.md` (valid `name` + `description` frontmatter). Claude Code auto-loads any folder there, so it is now available in **every Code project and session** (the harness surfaced it as an available skill immediately after install). The global skills dir is not a git repo, so the copy alone suffices — no outward push.

**Edited (site infra):** `site/_includes/base.njk`, `eleventy.config.js` (pathPrefix via `| url` + self-prefixing transform), `site/_data/site.js` (deployed origin/url), `site/diagrams.njk`, `.github/workflows/pages.yml` (default `PATH_PREFIX=/systems-theory-today/`), `.eleventyignore` (stop rendering `site/README.md` as a stray page), `README.md`, `site/README.md`.

## Repo state

- **Canonical content files: 34 — unchanged.** This work is site/skill infrastructure only; no canonical document was added or removed (the count still reconciles with `METRICS.md`).
- **New Code-layer files:** `site/manifest.webmanifest`, `site/assets/{mermaid-init.js, favicon.svg, icon-16/32/180/192/512/512-maskable.png, og.png}` (10 files).
- **R3:** unchanged — no history/landscape/theory/pressure-test/frontier content changed, so `R3_GIST.md` needs no regeneration this cycle.

## Checks

- **Standing checks** (`npm run check`): references, counts (34 baseline; C/L/Q/D 12/9/12/6; diagrams 9; pressure-tests 13; ground rules 23), diagrams — **all pass**.
- **Build — root:** 31 pages; a full internal-link audit found **1608/1608 links resolve**, zero 404s.
- **Build — prefixed (`PATH_PREFIX=/systems-theory-today/`, as CI deploys):** **zero** root-absolute internal leaks across all pages, **zero** double-prefixes; assets, nav, cross-references, canonical, og:image all correctly under the subpath.
- **Browser (preview):** GoatCounter script loads under the CSP and correctly reports "not counting because of: localhost"; **all 9 Mermaid diagrams render** on `/docs/diagrams/` under the CSP (no `unsafe-eval` needed); **no CSP-violation console errors**; every head tag (CSP, apple-touch-icon, manifest, theme-color, favicon, og:image) present and correct.
- **Icon:** reviewed visually at 512 / 180 / 80 / 40 px + maskable + og — legible and on-brand at every size.

## Adversarial verification (icon panel + review panel)

- The icon was chosen by an **8-agent designed-disagreement panel** (4 concepts → 3 judges → chair; recorded above).
- A **5-agent review panel** then audited the four changes. **Verdict: all four dimensions PASS, zero must-fix.** It independently re-downloaded and re-computed **both SRI hashes** (GoatCounter `count.v5.js` and cdnjs Mermaid 10.9.1) and confirmed **exact matches**; verified the CSP allowlist is complete-and-not-over-permissive (incl. GoatCounter needing *both* `img-src` and `connect-src` for its `sendBeacon`→`img` fallback); confirmed **no double-prefixing** (the `| url` filter and the self-prefixing transform act on disjoint link sets); and confirmed the global skill's frontmatter is valid.
- **One surfaced follow-up (optional, out of scope — not done this session):** the framed pages `viz/diagrams.html` / `viz/systems-theory-map.html` carry no CSP of their own (a child document does not inherit the parent's, and Pages sends no CSP header). Adding a mirrored CSP meta to each would govern their inline script/style + cdnjs load. Left for a ratified follow-up since it edits canonical content; the parent pages are correctly protected.

## Deployment

- **Repository:** still **private, local, no remote** — nothing pushed (honors the two-surfaces plan; opening for forking remains a later, explicit step).
- **Site:** builds correct for the project subpath. **To go live:** push the private repo to GitHub as `systems-theory-today`, enable Pages (Settings → Pages → Source: GitHub Actions); `.github/workflows/pages.yml` runs the checks, builds with `PATH_PREFIX=/systems-theory-today/`, and deploys to **https://hulkiokantabak.github.io/systems-theory-today/**. If a different repo slug or a custom domain is used, set the `PATH_PREFIX` repo variable and update the README link + `site/_data/site.js` to match (documented in `site/README.md`).

## For the next Chat session

- **Carried over from S4** (still open): log **C-013** (the stale work-order counts) and refresh `METRICS.md` sub-counts + add a "Session 4 — Code layer" note; ratify the site-scope decision; decide the "open the repository" trigger.
- **New, from S4b:** confirm the eventual **GitHub repo slug** = `systems-theory-today` (the live URL + `PATH_PREFIX` are set to it); if it differs, one variable + two lines change. Consider whether to register a project-specific GoatCounter code later (currently on the shared dashboard, per convention). Optional hardening flagged by the review panel: add a mirrored **CSP** meta to the two `viz/*.html` files (a ratified follow-up, since it touches canonical content).
- **Registers unchanged:** R0 (README/ARCHITECTURE + latest digest) · R1 (`OPEN_QUESTIONS.md`) · R3 (`R3_GIST.md`).

---

*Author: Hulki Okan Tabak — with Claude · License: docs CC BY-SA 4.0 · code MIT*
