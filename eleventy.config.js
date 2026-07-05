// Eleventy configuration — the PUBLIC reading website (the reading surface of the
// two-surfaces plan, docs/THE_LIVING_DOCUMENT.md §7). It renders the repo's own
// Markdown in place: the repository IS the site's source (ARCHITECTURE.md §6,
// Phase 2). Understated register; design tokens reused from viz/.
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import markdownIt from 'markdown-it';
import { BY_REL, BY_BASE } from './site/lib/docmap.mjs';

// GitHub Pages project sites are served under /<repo>/. Templates use the `| url`
// filter; this same prefix is applied to the cross-reference links the transform
// generates (a transform runs after the built-in URL handling, so it self-prefixes).
const PATH_PREFIX = process.env.PATH_PREFIX || '/';
const PREFIX = PATH_PREFIX === '/' ? '' : '/' + PATH_PREFIX.replace(/^\/+|\/+$/g, '');

const isExternal = (t) => /^(https?:|mailto:|tel:|data:|#|\/\/)/i.test(t);

function rewriteHref(href) {
  if (isExternal(href)) return null;
  const [path, frag = ''] = href.split('#');
  if (!/\.(md|html)$/i.test(path)) return null;
  const url = BY_REL.get(path) || (path.includes('/') ? null : BY_BASE.get(path));
  return url ? url + (frag ? '#' + frag : '') : null;
}

// A <code> mention resolves only if it is exactly a known doc path/basename.
function xrefLookup(token) {
  if (!/\.(md|html)$/i.test(token)) return null;
  return token.includes('/') ? BY_REL.get(token) || null : BY_BASE.get(token) || null;
}

export default function (eleventyConfig) {
  // Verbatim copies: the interactive figures, the stylesheet + icons, the PWA manifest.
  eleventyConfig.addPassthroughCopy('viz');
  eleventyConfig.addPassthroughCopy({ 'site/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'site/manifest.webmanifest': 'manifest.webmanifest' });

  // Only Markdown and Nunjucks are templates; everything else is left alone.
  eleventyConfig.setTemplateFormats(['md', 'njk']);

  // Markdown: HTML allowed (tables, <br/> in mermaid source), quiet typography.
  const md = markdownIt({ html: true, linkify: false, typographer: true });
  eleventyConfig.setLibrary('md', md);

  // Turn the docs' cross-references into working links:
  //   (1) real Markdown links to *.md/*.html  → the page's site URL
  //   (2) `backtick doc mentions` (the dominant style) → linkified to the page
  eleventyConfig.addTransform('crossReferences', function (content) {
    const out = this.page && this.page.outputPath;
    if (!out || !String(out).endsWith('.html')) return content;
    let html = content;
    html = html.replace(/<a\b([^>]*?)\shref="([^"]+)"([^>]*)>/g, (m, pre, href, post) => {
      const r = rewriteHref(href);
      return r ? `<a${pre} href="${PREFIX}${r}"${post}>` : m;
    });
    html = html.replace(/<code>([^<\s]+)<\/code>/g, (m, inner) => {
      const url = xrefLookup(inner.trim());
      return url ? `<a class="xref" href="${PREFIX}${url}">${m}</a>` : m;
    });
    return html;
  });

  return {
    dir: { input: '.', output: '_site', includes: 'site/_includes', data: 'site/_data' },
    // Docs are rendered as-is (no template syntax processed inside Markdown, so
    // stray braces/quotes in the prose can never break a build); layouts use njk.
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk'],
    pathPrefix: process.env.PATH_PREFIX || '/',
  };
}
