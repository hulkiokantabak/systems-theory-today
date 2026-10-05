// Dependency advisory gate: `npm audit --audit-level=high` with an explicit,
// expiring allowlist. Every high or critical advisory fails the gate unless an
// entry below names its exact GHSA id and package and has not expired. The gate
// fails closed: an audit that cannot run, cannot be parsed, or reports a high or
// critical finding that cannot be traced to a listed advisory is a failure.
// Keep this file identical in every site repository.
import { spawnSync } from 'node:child_process';

const ALLOWLIST = [
  {
    ghsa: 'GHSA-vfj7-8cjw-p6xm',
    package: 'braces',
    reason:
      'No patched braces release exists (every version <=3.0.3 is affected). braces is reached only through build and CLI tooling that expands repository-authored glob patterns, never visitor input, and it ships in no public output. Remove this entry once a patched release or a braces-free upstream chain is available.',
    expires: '2027-01-31',
  },
];

const BLOCKING = new Set(['high', 'critical']);
const failures = [];
const fail = (message) => failures.push(message);

for (const entry of ALLOWLIST) {
  const valid =
    /^GHSA(-[23456789cfghjmpqrvwx]{4}){3}$/.test(entry.ghsa) &&
    typeof entry.package === 'string' &&
    entry.package.length > 0 &&
    typeof entry.reason === 'string' &&
    entry.reason.length > 0 &&
    /^\d{4}-\d{2}-\d{2}$/.test(entry.expires) &&
    !Number.isNaN(Date.parse(`${entry.expires}T23:59:59Z`));
  if (!valid) fail(`Malformed allowlist entry: ${JSON.stringify(entry)}`);
}

// Under `npm run`, reuse the running npm; otherwise resolve npm from PATH.
const npmCli = process.env.npm_execpath;
const options = { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 };
const run =
  npmCli && /\.c?js$/i.test(npmCli)
    ? spawnSync(process.execPath, [npmCli, 'audit', '--json'], options)
    : spawnSync('npm audit --json', { ...options, shell: true });

let report;
try {
  if (run.error) throw run.error;
  report = JSON.parse(run.stdout);
} catch (error) {
  console.error(run.stderr || '');
  console.error(
    `Audit gate: npm audit did not produce a readable report (${error.message}).`,
  );
  process.exit(1);
}
if (
  report.error ||
  report.auditReportVersion !== 2 ||
  typeof report.vulnerabilities !== 'object' ||
  report.vulnerabilities === null
) {
  console.error(
    JSON.stringify(
      report.error ?? { auditReportVersion: report.auditReportVersion },
      null,
      2,
    ),
  );
  console.error(
    'Audit gate: npm audit reported an error or an unsupported report format.',
  );
  process.exit(1);
}

const ghsaOf = (advisory) =>
  String(advisory.url ?? '').match(/GHSA(-[0-9a-z]{4}){3}/i)?.[0] ??
  `npm-${advisory.source}`;
const vulnerabilities = report.vulnerabilities;

// Resolve each finding to the advisories it inherits through its `via` chain.
function advisoriesOf(name, seen = new Set()) {
  if (seen.has(name)) return [];
  seen.add(name);
  const entry = vulnerabilities[name];
  if (!entry) return [];
  return (entry.via ?? []).flatMap((via) =>
    typeof via === 'string' ? advisoriesOf(via, seen) : [via],
  );
}

const now = Date.now();
const matched = new Set();
const tolerated = new Map();
const blocked = new Map();
for (const [name, entry] of Object.entries(vulnerabilities)) {
  if (!BLOCKING.has(entry.severity)) continue;
  const advisories = advisoriesOf(name).filter((advisory) =>
    BLOCKING.has(advisory.severity),
  );
  if (!advisories.length) {
    fail(
      `${name}: ${entry.severity} finding cannot be traced to a high or critical advisory.`,
    );
    continue;
  }
  for (const advisory of advisories) {
    const id = ghsaOf(advisory);
    const key = `${id} ${advisory.name}`;
    const allowed = ALLOWLIST.find(
      (item) => item.ghsa === id && item.package === advisory.name,
    );
    if (!allowed) {
      blocked.set(
        key,
        `${advisory.severity} ${id} in ${advisory.name} ${advisory.range}: ${advisory.title}`,
      );
      continue;
    }
    matched.add(allowed);
    if (now > Date.parse(`${allowed.expires}T23:59:59Z`)) {
      blocked.set(
        key,
        `${advisory.severity} ${id} in ${advisory.name}: allowlist entry expired on ${allowed.expires}; review it again.`,
      );
    } else {
      if (!tolerated.has(key))
        tolerated.set(key, { allowed, paths: new Set() });
      tolerated.get(key).paths.add(name);
    }
  }
}
for (const message of blocked.values()) fail(message);

const counts = report.metadata?.vulnerabilities ?? {};
console.log(
  `npm audit: ${counts.critical ?? 0} critical, ${counts.high ?? 0} high, ${counts.moderate ?? 0} moderate, ${counts.low ?? 0} low.`,
);
for (const [key, { allowed, paths }] of tolerated) {
  console.log(
    `Tolerated until ${allowed.expires}: ${key} (affects ${[...paths].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).join(', ')}). ${allowed.reason}`,
  );
}
for (const item of ALLOWLIST) {
  if (!matched.has(item)) {
    console.log(
      `Note: allowlist entry ${item.ghsa} ${item.package} no longer matches any finding; remove it.`,
    );
  }
}
if (failures.length) {
  console.error('Audit gate failed:');
  for (const message of failures) console.error(`- ${message}`);
  process.exitCode = 1;
} else {
  console.log('Audit gate passed: no unlisted high or critical advisories.');
}
