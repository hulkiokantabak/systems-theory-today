#!/usr/bin/env node
// run-checks.mjs — run every standing check; exit non-zero if any fails.
// This is the pre-commit gate the work-order asks for (WORK_ORDER_S4 "Checks to run").
//
// Version: 1.0 · Status: Living · Last updated: Session 4

import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CHECKS = ['check-references.mjs', 'check-counts.mjs', 'check-diagrams.mjs'];

let failed = 0;
for (const check of CHECKS) {
  const r = spawnSync(process.execPath, [join(here, check)], { stdio: 'inherit' });
  if (r.status !== 0) failed++;
}

console.log('\n' + '─'.repeat(60));
if (failed === 0) {
  console.log('\x1b[32m✓ all standing checks passed\x1b[0m');
  process.exit(0);
} else {
  console.log(`\x1b[31m✗ ${failed} standing check(s) failed\x1b[0m`);
  process.exit(1);
}
