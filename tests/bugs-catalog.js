// Bugs catalog — nguồn chân lý duy nhất cho Bug ID (live-verify 2026-09-10).
// Mỗi defect đã kiểm chứng live trên Build 1 và Build 1-fixed (headless Chromium 1280x900).
// Matrix và test-run đối chiếu vào đây: mọi dòng Fail phải có Bug,
// mọi Bug phải xuất hiện ≥1 dòng (xem skill traceability-matrix).
// Thang severity (theo slide Test report): Fatal (weight 10) / Serious (weight 5) / Medium (weight 3) / Cosmetic (weight 1).
// Chạy: node tests/bugs-catalog.js  → kiểm tra file bug tồn tại + mọi foundBy xuất hiện trong file bug + in bảng.
const fs = require('fs');
const path = require('path');

const SEVERITY_WEIGHT = { Fatal: 10, Serious: 5, Medium: 3, Cosmetic: 1, 'N/A': 0 };

const BUGS = [
  { id: 'BUG-WEB-001', functionName: 'Titles', severity: 'Cosmetic', weight: 1, priority: 'Low', status: 'Fixed', foundBy: ['TC-TITLE-002', 'TC-TITLE-003'], fixedInBuild1Fixed: true, symptom: 'Mọi trang con đều <title>NodeJS Website>; bản fixed hiện đúng tên trang' },
  { id: 'BUG-WEB-002', functionName: 'Static assets', severity: 'Medium', weight: 3, priority: 'Medium', status: 'New', foundBy: ['TC-IMG-001', 'TC-IMG-002'], fixedInBuild1Fixed: false, symptom: '/images/misson.jpeg 404 (đúng phải mission.jpeg), vỡ ở homepage + /articles/4, cả 2 builds' },
  { id: 'BUG-WEB-003', functionName: 'Navigation', severity: 'Cosmetic', weight: 1, priority: 'Low', status: 'Fixed', foundBy: ['TC-NAV-002'], fixedInBuild1Fixed: true, symptom: 'Trang article nhưng menu Home active; bản fixed active đúng' },
  { id: 'BUG-WEB-004', functionName: 'Static assets', severity: 'Cosmetic', weight: 1, priority: 'Low', status: 'Fixed', foundBy: ['TC-IMG-003'], fixedInBuild1Fixed: true, symptom: 'Favicon /images/favicon.jpeg 404; bản fixed dùng favico.jpeg 200' },
  { id: 'BUG-WEB-005', functionName: 'Error handling', severity: 'Serious', weight: 5, priority: 'High', status: 'Fixed', foundBy: ['TC-ERR-001'], fixedInBuild1Fixed: true, symptom: '/articles/999 trả HTTP 500 Internal Server Error!; bản fixed trả 200 Request NOT found!' },
  { id: 'BUG-WEB-006', functionName: 'Pagination', severity: 'Serious', weight: 5, priority: 'High', status: 'Fixed', foundBy: ['TC-PAG-002'], fixedInBuild1Fixed: true, symptom: 'Link Next nối chuỗi: ?page=2 → ?page=21, ?page=99 → ?page=991' },
  { id: 'BUG-WEB-007', functionName: 'Pagination', severity: 'Medium', weight: 3, priority: 'Medium', status: 'Fixed', foundBy: ['TC-PAG-001'], fixedInBuild1Fixed: true, symptom: 'Thiếu nút số trang và trạng thái active; chỉ có Prev/Next' },
  { id: 'BUG-WEB-008', functionName: 'Comments', severity: 'N/A', weight: 0, priority: 'Low', status: 'Rejected', foundBy: ['TC-CMT-005'], fixedInBuild1Fixed: false, symptom: 'REJECTED (not a bug): nghi Build 1 thiếu nút xóa comment — kiểm chứng lại thấy có button.delete-comment[data-id], quan sát đầu sai vì bài chưa có comment nào' },
  { id: 'BUG-WEB-009', functionName: 'Comments', severity: 'Medium', weight: 3, priority: 'Medium', status: 'Fixed', foundBy: ['TC-CMT-003', 'TC-CMT-004'], fixedInBuild1Fixed: true, symptom: 'Ô nhập comment thiếu required và maxlength="255"; bản fixed có đủ' },
  { id: 'BUG-WEB-010', functionName: 'Comments', severity: 'Serious', weight: 5, priority: 'High', status: 'New', foundBy: ['TC-CMT-003', 'TC-CMT-004'], fixedInBuild1Fixed: false, symptom: 'Thiếu validate phía server: rỗng / khoảng trắng / 300 ký tự đều 302 và được lưu, cả 2 builds' },
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
    if (b.weight !== SEVERITY_WEIGHT[b.severity]) { console.error(`${b.id}: weight ${b.weight} không khớp severity ${b.severity}`); ok = false; }
  }
  const active = BUGS.filter((b) => b.status !== 'Rejected');
  const wDef = active.reduce((s, b) => s + b.weight, 0);
  const bySev = {};
  for (const b of active) bySev[b.severity] = (bySev[b.severity] || 0) + 1;
  const fixed = active.filter((b) => b.fixedInBuild1Fixed).length;
  const open = active.length - fixed;
  const rejected = BUGS.length - active.length;
  console.log(`bugs: ${BUGS.length} (hợp lệ: ${active.length}, rejected: ${rejected})`);
  console.log(`W.def (weighted defect, không tính Rejected): ${wDef}`);
  console.log(`Severity: ${Object.entries(bySev).map(([k, v]) => `${k}=${v}`).join(', ')}`);
  console.log(`Đã fix (Build 1-fixed): ${fixed}, còn mở: ${open}`);
  console.table(BUGS.map((b) => ({ id: b.id, function: b.functionName, severity: b.severity, weight: b.weight, priority: b.priority, status: b.status, foundBy: b.foundBy.join(', ') })));
  console.log(ok ? 'CATALOG_OK' : 'CATALOG_FAIL');
  process.exit(ok ? 0 : 1);
}

module.exports = { BUGS };
