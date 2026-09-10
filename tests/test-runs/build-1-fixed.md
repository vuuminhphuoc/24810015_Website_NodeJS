# Test Run — Build 1-fixed: Re-test + Regression (2026-09-10)

- SUT: `https://nodejs1-fixed.ttbhanh.com/` (footer `Build 1 (fixed)`)
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`, workers 1
- Spec: `tests/test-scripts/<module>/*.spec.js` (mỗi test có tiền tố `[Build 1-fixed]`)
- Raw log: `tests/test-runs/raw/sweep.json`
- Loại kiểm thử: **Re-test** 12 TC từng Fail ở Build 1 + **Regression** 10 TC từng Pass

| Test Case ID | Loại | Build 1 | Actual trên Build 1-fixed | Result | Bug status |
|---|---|---|---|---|---|
| TC-NAV-001 | Regression | Pass | menu đúng | Pass |  |
| TC-NAV-002 | Re-test | Fail | Home hết `active` ở trang bài (`js/script.js` + `setActiveMenu`) | Pass | BUG-WEB-003 → Fixed |
| TC-ART-001 | Regression | Pass | đủ 5 bài | Pass |  |
| TC-ART-002 | Regression | Pass | nội dung 5 bài giữ nguyên | Pass |  |
| TC-TITLE-001 | Regression | Pass | `NodeJS Website` | Pass |  |
| TC-TITLE-002 | Re-test | Fail | đúng tên 5 bài | Pass | BUG-WEB-001 → Fixed |
| TC-TITLE-003 | Re-test | Fail | `Register` / `Login` | Pass | BUG-WEB-001 → Fixed |
| TC-IMG-001 | Re-test | Fail | `/images/misson.jpeg` VẪN 404 | **Fail** | BUG-WEB-002 → còn New |
| TC-IMG-002 | Re-test | Fail | `/images/misson.jpeg` VẪN 404 | **Fail** | BUG-WEB-002 → còn New |
| TC-IMG-003 | Re-test | Fail | favicon `/images/favico.jpeg` → 200 | Pass | BUG-WEB-004 → Fixed |
| TC-AUTH-001 | Regression | Pass | `under construction` | Pass |  |
| TC-AUTH-002 | Regression | Pass | `under construction` | Pass |  |
| TC-CMT-001 | Regression | Pass | hiển thị 3 comment/trang | Pass |  |
| TC-CMT-002 | Regression | Pass | thêm comment hiển thị đúng (đã tự dọn) | Pass |  |
| TC-CMT-003 | Re-test | Fail | comment rỗng VẪN được lưu (302) | **Fail** | BUG-WEB-010 → còn New; BUG-WEB-009 → Fixed phần client |
| TC-CMT-004 | Re-test | Fail | comment 300 ký tự VẪN được lưu | **Fail** | BUG-WEB-010 → còn New; BUG-WEB-009 → Fixed phần client |
| TC-CMT-005 | Regression | Pass | nút xóa hoạt động | Pass | BUG-WEB-008 Rejected |
| TC-PAG-001 | Re-test | Fail | có `1 2 3` + `li.active` đúng trang | Pass | BUG-WEB-007 → Fixed |
| TC-PAG-002 | Re-test | Fail | `?page=2` → Next `?page=3` | Pass | BUG-WEB-006 → Fixed |
| TC-PAG-003 | Re-test | Fail | `?page=99` → Next `?page=100` | Pass | BUG-WEB-006 → Fixed |
| TC-ERR-001 | Re-test | Fail | HTTP 200 `Request NOT found!` | Pass | BUG-WEB-005 → Fixed |
| TC-ERR-002 | Regression | Pass | 404 + trang lỗi | Pass |  |

**Tổng kết: Pass: 18 / Fail: 4 / Tổng: 22.** (Build 1: 10/12 → Build 1-fixed: 18/4)

## Cập nhật trạng thái Bug sau re-test

| Bug ID | Status trước | Status sau | Căn cứ |
|---|---|---|---|
| BUG-WEB-001 | New | **Fixed** | TC-TITLE-002, TC-TITLE-003 Pass |
| BUG-WEB-002 | New | **New (chưa fix)** | TC-IMG-001, TC-IMG-002 vẫn Fail — `misson.jpeg` còn 404 |
| BUG-WEB-003 | New | **Fixed** | TC-NAV-002 Pass |
| BUG-WEB-004 | New | **Fixed** | TC-IMG-003 Pass |
| BUG-WEB-005 | New | **Fixed** | TC-ERR-001 Pass |
| BUG-WEB-006 | New | **Fixed** | TC-PAG-002, TC-PAG-003 Pass |
| BUG-WEB-007 | New | **Fixed** | TC-PAG-001 Pass |
| BUG-WEB-008 | New | **Rejected** | Kiểm chứng lại: Build 1 vẫn có nút xóa, không phải defect |
| BUG-WEB-009 | New | **Fixed** | HTML fixed có `required maxlength="255"` |
| BUG-WEB-010 | New | **New (chưa fix)** | TC-CMT-003, TC-CMT-004 vẫn Fail trên bản fixed |

## Regression analysis

- Không có regression mới: 10/10 TC từng Pass ở Build 1 vẫn Pass ở Build 1-fixed.
- Fix **sót 2 defect**: `BUG-WEB-002` (ảnh `misson.jpeg`) và `BUG-WEB-010` (validate phía server).
  `BUG-WEB-009` chỉ được sửa ở tầng client (`required`, `maxlength`) nên dữ liệu bẩn vẫn vào được DB qua request trực tiếp — đây là lý do TC-CMT-003/004 vẫn Fail.
- Dữ liệu test đã tự dọn trên cả 2 build (marker `QA-24810015-<timestamp>`).
