// Audit chéo: TC files ↔ index ↔ matrix ↔ bugs ↔ catalog ↔ specs ↔ evidence.
// Run: node audit.cjs. In MISMATCH nếu vênh, AUDIT_OK nếu khớp.
const fs = require('fs');
const path = require('path');

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!['node_modules', '.git'].includes(e.name)) walk(p, out); }
    else out.push(p);
  }
  return out;
}
const fail = (m) => { console.error('MISMATCH: ' + m); process.exitCode = 1; };

const tcFiles = walk('tests/test-cases').filter((f) => /TC-[A-Z]+-\d+\.md$/.test(f));
const SECTIONS = ['Requirement ID', 'Module / Test type / Technique', 'Preconditions', 'Test data', 'Test steps', 'Expected result', 'Test environment', 'Script', 'Observed result', 'Status', 'Bug ID', 'Comments'];
const tcIds = [];
for (const f of tcFiles) {
  const s = fs.readFileSync(f, 'utf8');
  const id = path.basename(f, '.md');
  tcIds.push(id);
  const h1 = (s.match(/^# (TC-[A-Z]+-\d+)/m) || [])[1];
  if (h1 !== id) fail(`${f} H1=${h1}`);
  for (const sec of SECTIONS) if (!s.includes('## ' + sec)) fail(`${f} thiếu mục ${sec}`);
}

const index = fs.readFileSync('tests/test-cases/index.md', 'utf8');
for (const id of tcIds) if (!index.includes(id)) fail(`index thiếu ${id}`);
for (const id of new Set([...index.matchAll(/\| (TC-[A-Z]+-\d+) \|/g)].map((m) => m[1]))) {
  if (!tcIds.includes(id)) fail(`index thừa ${id}`);
}

const { BUGS } = require('./tests/bugs-catalog.js');
const bugFiles = walk('tests/bugs').filter((f) => /BUG-[A-Z]+-\d+\.md$/.test(f)).map((f) => path.basename(f, '.md'));
for (const b of BUGS) {
  if (!bugFiles.includes(b.id)) { fail(`thiếu file ${b.id}`); continue; }
  const body = fs.readFileSync(path.join('tests', 'bugs', b.id + '.md'), 'utf8');
  for (const tc of b.foundBy) {
    if (!tcIds.includes(tc)) fail(`${b.id} trỏ TC không tồn tại ${tc}`);
    if (!body.includes(tc)) fail(`${b.id} thiếu link ${tc}`);
  }
}
for (const id of bugFiles) if (!BUGS.find((b) => b.id === id)) fail(`bug file thừa ngoài catalog ${id}`);
for (const f of tcFiles) {
  const s = fs.readFileSync(f, 'utf8');
  for (const b of new Set([...s.matchAll(/BUG-[A-Z]+-\d+/g)].map((m) => m[0]))) {
    if (!bugFiles.includes(b)) fail(`${f} trỏ bug không tồn tại ${b}`);
  }
}

for (const mfile of ['tests/traceability-matrix/version-online-with-bugs.md', 'tests/traceability-matrix/version-fixed-partial.md']) {
  const matrix = fs.readFileSync(mfile, 'utf8');
  for (const id of tcIds) if (!matrix.includes(id)) fail(`${mfile} thiếu ${id}`);
  for (const b of bugFiles) if (!matrix.includes(b)) fail(`${mfile} thiếu ${b}`);
}

const specText = walk('tests/test-scripts').filter((f) => f.endsWith('.spec.js')).map((f) => fs.readFileSync(f, 'utf8')).join('\n');
for (const id of tcIds) if (!specText.includes(id)) fail(`không spec nào cover ${id}`);

const evIdx = fs.readFileSync('tests/evidence/index.md', 'utf8');
for (const r of new Set([...evIdx.matchAll(/\b([A-Za-z0-9][A-Za-z0-9-]*\.jpg)\b/g)].map((m) => m[1]))) {
  if (!fs.existsSync(path.join('tests', 'evidence', r))) fail(`evidence index trỏ file không tồn tại ${r}`);
}

console.log(`TCs=${tcIds.length} bugs=${bugFiles.length} matrix+specs+evidence checked`);
if (!process.exitCode) console.log('AUDIT_OK');
