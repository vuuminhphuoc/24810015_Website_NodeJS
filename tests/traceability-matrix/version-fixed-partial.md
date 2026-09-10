# Traceability Matrix — version-fixed-partial (Build 1-fixed, sau re-test)

Nguồn: `tests/test-runs/build-1-fixed.md`, raw `tests/test-runs/raw/sweep.json`, `tests/bugs-catalog.js`.
SUT: `https://nodejs1-fixed.ttbhanh.com/`. Ngày: 2026-09-10. "partial" = fix chưa trọn vẹn, còn 2 defect mở.

| Requirement | Test Case | Build | Result | Bug Issue | Status |
|---|---|---|---|---|---|
| FR-WEB-01 Điều hướng | TC-NAV-001 | Build 1-fixed | Pass |  | Done |
| FR-WEB-01 Điều hướng | TC-NAV-002 | Build 1-fixed | Pass | BUG-WEB-003 | Done (Fixed) |
| FR-WEB-02 Danh sách bài | TC-ART-001 | Build 1-fixed | Pass |  | Done |
| FR-WEB-02 + FR-WEB-03 Chi tiết bài | TC-ART-002 | Build 1-fixed | Pass |  | Done |
| FR-WEB-04 Tiêu đề trang | TC-TITLE-001 | Build 1-fixed | Pass |  | Done |
| FR-WEB-04 Tiêu đề trang | TC-TITLE-002 | Build 1-fixed | Pass | BUG-WEB-001 | Done (Fixed) |
| FR-WEB-04 + FR-WEB-06 | TC-TITLE-003 | Build 1-fixed | Pass | BUG-WEB-001 | Done (Fixed) |
| FR-WEB-05 Tài nguyên tĩnh | TC-IMG-001 | Build 1-fixed | **Fail** | BUG-WEB-002 | Open |
| FR-WEB-05 Tài nguyên tĩnh | TC-IMG-002 | Build 1-fixed | **Fail** | BUG-WEB-002 | Open |
| FR-WEB-05 Tài nguyên tĩnh | TC-IMG-003 | Build 1-fixed | Pass | BUG-WEB-004 | Done (Fixed) |
| FR-WEB-06 Register/Login | TC-AUTH-001 | Build 1-fixed | Pass |  | Done |
| FR-WEB-06 Register/Login | TC-AUTH-002 | Build 1-fixed | Pass |  | Done |
| FR-WEB-07 Bình luận | TC-CMT-001 | Build 1-fixed | Pass |  | Done |
| FR-WEB-07 Bình luận | TC-CMT-002 | Build 1-fixed | Pass |  | Done |
| FR-WEB-07 Bình luận (validate) | TC-CMT-003 | Build 1-fixed | **Fail** | BUG-WEB-010 (BUG-WEB-009 Fixed phần client) | Open |
| FR-WEB-07 Bình luận (validate) | TC-CMT-004 | Build 1-fixed | **Fail** | BUG-WEB-010 (BUG-WEB-009 Fixed phần client) | Open |
| FR-WEB-07 Bình luận (xóa) | TC-CMT-005 | Build 1-fixed | Pass | BUG-WEB-008 (Rejected) | Done |
| FR-WEB-08 Phân trang | TC-PAG-001 | Build 1-fixed | Pass | BUG-WEB-007 | Done (Fixed) |
| FR-WEB-08 Phân trang | TC-PAG-002 | Build 1-fixed | Pass | BUG-WEB-006 | Done (Fixed) |
| FR-WEB-08 Phân trang | TC-PAG-003 | Build 1-fixed | Pass | BUG-WEB-006 | Done (Fixed) |
| FR-WEB-09 Xử lý lỗi | TC-ERR-001 | Build 1-fixed | Pass | BUG-WEB-005 | Done (Fixed) |
| FR-WEB-09 Xử lý lỗi | TC-ERR-002 | Build 1-fixed | Pass |  | Done |

**Tổng: 22 dòng — 18 Done / 4 Open.**

## So sánh 2 phiên bản

| | Build 1 | Build 1-fixed |
|---|---|---|
| Pass / Fail | 10 / 12 | 18 / 4 |
| Bug Open | 9 (+1 Rejected) | 2 (`BUG-WEB-002`, `BUG-WEB-010`) |
| Bug chuyển sang Fixed | — | 7 |
| Regression mới | — | 0 |

## Kiểm tra tính đầy đủ

| Quy tắc | Kết quả |
|---|---|
| Mọi Requirement có ≥1 Test Case | Đạt |
| Mọi dòng Fail có Bug | Đạt — 4/4 dòng Fail trỏ `BUG-WEB-002` / `BUG-WEB-010` |
| Mọi Bug xuất hiện ≥1 dòng | Đạt — `BUG-WEB-001`..`BUG-WEB-010` đều có mặt |
| Tổng dòng = số TC × số build | 22 TC × 1 build = 22 dòng; cộng bản `version-online-with-bugs.md` là 44 lượt, khớp `sweep.json` (44 test) |
