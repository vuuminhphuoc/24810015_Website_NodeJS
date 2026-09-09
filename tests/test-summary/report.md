# Test Summary Report — NodeJS Website (Build 1 → Build 1-fixed)

Mẫu theo softwaretestinghelp.com/test-summary-report-template (12 bước).

## 1. Purpose
Tổng hợp hoạt động kiểm thử website NodeJS trên Build 1 và re-test/regression
trên Build 1-fixed: phạm vi, metrics, defects, exit criteria và kết luận Go-Live.

## 2. Application Overview
NodeJS Website tĩnh: homepage liệt kê 5 bài viết (Design Research, Web & Mobile,
Usability, Our Mission, Customer Support), trang chi tiết `/articles/1..5`,
trang Register/Login (chưa có chức năng). Không có backend mua bán.

## 3. Testing Scope
- In Scope: Functional (navigation, articles, titles, images, auth-placeholder)
  trên cả 2 builds; re-test 5 TC fail; regression 6 TC pass.
- Out of Scope: Performance, Security.
- Items not tested: flow đăng ký/đăng nhập thật (trang báo under construction).

## 4. Metrics
- TC planned vs executed: 11/11 cả 2 builds (Playwright 22 tests).
- Build 1: 6 passed / 5 failed. Build 1-fixed: 9 passed / 2 failed.
- Defects: 3 (Major 2: titles, misson-image; Minor 1: nav-active).
  Status: Closed 2 (BUG-WEB-001, BUG-WEB-003), Open 1 (BUG-WEB-002).
- Module-wise: titles 2 bugs (fixed), static-assets 1 bug (open), navigation 1 (fixed).

## 5. Types of Testing Performed
Functional (11 TC × 2 builds), Re-test (5 TC trên fixed), Regression (6 TC trên fixed).

## 6. Test Environment & Tools
- Build 1: `https://nodejs1.ttbhanh.com/`; Fixed: `https://nodejs1-fixed.ttbhanh.com/`.
- Headless Chromium + Playwright 1.63 (`npx playwright test`, workers 1), Win 11.
- Evidence: `tests/evidence/` (10 ảnh) + `tests/evidence/index.md`.

## 7. Lessons Learned
- Reader-mode 2 builds giống hệt nhau → bắt buộc kiểm live DOM mới thấy title/nav/ảnh khác.
- Ảnh vỡ không sinh HTTP error log (miss cả listener) → phải check `naturalWidth`.

## 8. Recommendations
- Sửa tên file `misson.jpeg` → `mission.jpeg` (hoặc up file đúng tên).
- Thêm `alt` cho ảnh; test title tự động mỗi trang.

## 9. Best Practices
- Tái dùng bộ 5 skills từ project Basic Calculator, chỉ đổi module/SUT.
- Suite retest assert đúng (không `test.fail`) nên sót fix lộ ngay (2 đỏ trung thực).

## 10. Exit Criteria
- All TC executed: Yes (11/11 × 2).
- Critical/Major closed: NO — 1 Major (BUG-WEB-002) còn Open.

## 11. Conclusion / Sign Off
Chưa đạt exit criteria. KHÔNG đề xuất Go Live bản fixed cho tới khi ảnh `misson.jpeg`
được sửa và retest pass. Quyết định cuối thuộc Senior Management/Client.

## 12. Definitions
SUT: System Under Test. TC: Test Case. FR-WEB: Website Requirement.
