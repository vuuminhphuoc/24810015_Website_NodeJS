// Bugs catalog — nguồn chân lý duy nhất cho Bug ID (live-verify 2026-09-09).
// Chạy: node tests/bugs-catalog.js
const fs = require('fs');
const path = require('path');

const BUGS = [
  { id: 'BUG-WEB-001', severity: 'Major', foundBy: ['TC-TITLE-002', 'TC-TITLE-003'], fixed: true, symptom: 'Mọi trang con đều <title>NodeJS Website>; bản fixed hiện đúng tên trang' },
  { id: 'BUG-WEB-002', severity: 'Major', foundBy: ['TC-IMG-001', 'TC-IMG-002'], fixed: false, symptom: '/images/misson.jpeg vỡ (homepage + /articles/4), cả 2 builds' },
  { id: 'BUG-WEB-003', severity: 'Minor', foundBy: ['TC-NAV-002'], fixed: true, symptom: 'Trang article nhưng menu Home active; bản fixed hết' },
];

if (require.main === module) {
  const dir = path.join(__dirname, 'bugs');
  let ok = true;
  for (const b of BUGS) {
    const f = path.join(dir, `${b.id}.md`);
    if (!fs.existsSync(f)) { console.error(`MISSING FILE: ${f}`); ok = false; continue; }
    const body = fs.readFileSync(f, 'utf8');
    for (const tc of b.foundBy) {
      if (!body.includes(tc)) { console.error(`${b.id}: thiếu link ${tc} trong file bug`); ok = false; }
    }
  }
  console.log(`bugs: ${BUGS.length}, fixed: ${BUGS.filter((b) => b.fixed).length}`);
  console.log(ok ? 'CATALOG_OK' : 'CATALOG_FAIL');
  process.exit(ok ? 0 : 1);
}

module.exports = { BUGS };
