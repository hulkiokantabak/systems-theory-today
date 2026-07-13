// Applies layout, permalink, and title to every canonical Markdown doc WITHOUT
// editing the doc itself (the docs carry no front matter — they are the private
// repo's canonical content, rendered in place). Front-matter values on the site's
// own .njk templates are respected.
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import { readFileSync } from 'node:fs';
import { docUrl, displayTitle } from '../lib/docmap.mjs';

const relOf = (inputPath) => inputPath.replace(/^\.[\\/]/, '').split('\\').join('/');

export default {
  layout: (data) => data.layout || 'base.njk',

  permalink: (data) => {
    const ip = data.page.inputPath;
    // Markdown docs: always compute the URL (Eleventy pre-fills data.permalink
    // with the input-path default, so we must override it, not defer to it).
    // The site's own .njk templates carry an explicit front-matter permalink.
    return ip.endsWith('.md') ? docUrl(relOf(ip)) : data.permalink;
  },

  title: (data) => {
    if (data.title) return data.title;
    const ip = data.page.inputPath;
    if (!ip.endsWith('.md')) return data.title;
    try {
      const m = readFileSync(ip, 'utf8').match(/^#\s+(.+)$/m);
      if (m) return displayTitle(m[1].trim());
    } catch { /* fall through */ }
    return relOf(ip);
  },
};
