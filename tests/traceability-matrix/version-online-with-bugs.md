# Traceability Matrix — version-online-with-bugs (Build 1)

Nguồn: `tests/test-runs/build-1.md`, raw `tests/test-runs/raw/sweep.json`, `tests/bugs-catalog.js`.
SUT: `https://nodejs1.ttbhanh.com/`. Ngày: 2026-09-10.

| Requirement | Test Case | Build | Result | Bug Issue | Status |
|---|---|---|---|---|---|
| FR-WEB-01 Điều hướng | TC-NAV-001 | Build 1 | Pass |  | Done |
| FR-WEB-01 Điều hướng | TC-NAV-002 | Build 1 | Fail | BUG-WEB-003 | Open |
| FR-WEB-02 Danh sách bài | TC-ART-001 | Build 1 | Pass |  | Done |
| FR-WEB-02 + FR-WEB-03 Chi tiết bài | TC-ART-002 | Build 1 | Pass |  | Done |
| FR-WEB-04 Tiêu đề trang | TC-TITLE-001 | Build 1 | Pass |  | Done |
| FR-WEB-04 Tiêu đề trang | TC-TITLE-002 | Build 1 | Fail | BUG-WEB-001 | Open |
| FR-WEB-04 + FR-WEB-06 | TC-TITLE-003 | Build 1 | Fail | BUG-WEB-001 | Open |
| FR-WEB-05 Tài nguyên tĩnh | TC-IMG-001 | Build 1 | Fail | BUG-WEB-002 | Open |
| FR-WEB-05 Tài nguyên tĩnh | TC-IMG-002 | Build 1 | Fail | BUG-WEB-002 | Open |
| FR-WEB-05 Tài nguyên tĩnh | TC-IMG-003 | Build 1 | Fail | BUG-WEB-004 | Open |
| FR-WEB-06 Register/Login | TC-AUTH-001 | Build 1 | Pass |  | Done |
| FR-WEB-06 Register/Login | TC-AUTH-002 | Build 1 | Pass |  | Done |
| FR-WEB-07 Bình luận | TC-CMT-001 | Build 1 | Pass |  | Done |
| FR-WEB-07 Bình luận | TC-CMT-002 | Build 1 | Pass |  | Done |
| FR-WEB-07 Bình luận (validate) | TC-CMT-003 | Build 1 | Fail | BUG-WEB-009, BUG-WEB-010 | Open |
| FR-WEB-07 Bình luận (validate) | TC-CMT-004 | Build 1 | Fail | BUG-WEB-009, BUG-WEB-010 | Open |
| FR-WEB-07 Bình luận (xóa) | TC-CMT-005 | Build 1 | Pass | BUG-WEB-008 (Rejected) | Done |
| FR-WEB-08 Phân trang | TC-PAG-001 | Build 1 | Fail | BUG-WEB-007 | Open |
| FR-WEB-08 Phân trang | TC-PAG-002 | Build 1 | Fail | BUG-WEB-006 | Open |
| FR-WEB-08 Phân trang | TC-PAG-003 | Build 1 | Fail | BUG-WEB-006 | Open |
| FR-WEB-09 Xử lý lỗi | TC-ERR-001 | Build 1 | Fail | BUG-WEB-005 | Open |
| FR-WEB-09 Xử lý lỗi | TC-ERR-002 | Build 1 | Pass |  | Done |

**Tổng: 22 dòng — 10 Done / 12 Open.**

## Kiểm tra tính đầy đủ

| Quy tắc | Kết quả |
|---|---|
| Mọi Requirement có ≥1 Test Case | Đạt — FR-WEB-01..09 đều có TC |
| Mọi dòng Fail có Bug | Đạt — 12/12 dòng Fail đều có Bug ID |
| Mọi Bug xuất hiện ≥1 dòng | Đạt — BUG-WEB-001..010 (008 ghi kèm dòng TC-CMT-005 với trạng thái Rejected) |
| Tổng dòng = số TC × số build | 22 TC × 1 build = 22 dòng ở phiên bản này; bản `version-fixed-partial.md` là 22 dòng của Build 1-fixed |
