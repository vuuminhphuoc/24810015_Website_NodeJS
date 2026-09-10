---
name: traceability-matrix
description: Skill 4/4 bắt buộc — tạo Traceability Matrix Website NodeJS truy vết Requirement - Test Case - Bug trên 2 build, kèm quy tắc đếm coverage.
---

# Skill 4/4 bắt buộc — tạo Traceability Matrix Website NodeJS truy vết Requirement - Test Case - Bug

> Ánh xạ 1-1 với yêu cầu 4 của giáo viên: **tạo Traceability Matrix truy vết
> Requirement - Test Case - Bug**.

Nguồn: `Slides/En/Test Case.pdf` (To measure test coverage tr.5, Traceable tr.25) và
`Slides/En/Test report.pdf` (Defect Report trong Test Summary Report tr.17).

Tái dùng từ: 24810015_Basic_Calculator (giữ nguyên lý thuyết, thay ví dụ sang SUT Website NodeJS).

## Vị trí và cột

2 phiên bản, mỗi version 1 file:

- `tests/traceability-matrix/version-online-with-bugs.md` — Build 1 (`https://nodejs1.ttbhanh.com/`), còn lỗi.
- `tests/traceability-matrix/version-fixed-partial.md` — sau re-test + regression trên Build 1-fixed
  (`https://nodejs1-fixed.ttbhanh.com/`): 8 bug đã sửa → `Closed`, 2 bug còn nguyên (`BUG-WEB-009`, `BUG-WEB-010`) → `Open`.

Cột: `Requirement | Test Case | Build | Result | Bug Issue | Status`.
`Result`: Pass/Fail/Blocked/Skipped. `Status`: Done/Open/Ready for Retest/Blocked.
SUT có 2 build nên bắt buộc có cột `Build`; bản gọn lấy status xấu nhất theo TC, bản full để ở test-runs
(`tests/test-runs/build-1.md`, `tests/test-runs/build-1-fixed.md`).

Ví dụ dòng (Build 1): `FR-PAG-01 | TC-PAG-002 | Build 1 | Fail | BUG-WEB-005 | Open`.

Sau re-test (Build 1-fixed): `FR-PAG-01 | TC-PAG-002 | Build 1-fixed | Pass | BUG-WEB-005 | Done`.
Dòng fix sót: `FR-IMG-02 | TC-IMG-003 | Build 1-fixed | Fail | BUG-WEB-009 | Open`.

## Quy tắc đếm coverage (bắt buộc, kiểm tra trước khi nhận)

1. Mọi Requirement có ≥1 TC — requirement nào không có TC là thiếu coverage
   (đối chiếu 8 module: navigation, articles, titles, static-assets, auth-placeholder, comments, pagination, error-handling).
2. Mọi dòng Fail có Bug — dòng `Result = Fail` mà không có Bug Issue là sai
   (ví dụ Fail phân trang mà thiếu `BUG-WEB-005` là sai).
3. Mọi Bug xuất hiện ≥1 dòng — bug không được dòng nào trỏ tới là bug mồ côi
   (cross-check với số file `tests/bugs/BUG-WEB-*.md`: đủ 10 bug).
4. Tổng dòng = số TC × số build — bài này: số TC × 2 build (Build 1 + Build 1-fixed).
   Đếm Done/Open/Blocked/Chưa chạy khớp tổng; thiếu dòng là thiếu coverage,
   thừa dòng là trùng lặp.

## Cách dùng

- Dòng nào `Result` xấu nhất của 1 TC (Fail > Blocked > Skipped > Pass) quyết định
  `Status` bản gọn; chi tiết từng build xem file test-run tương ứng.
- So sánh 2 version để chứng minh re-test: bug Build 1 `Open` → Build 1-fixed `Done`
  (8 bug), bug fix sót vẫn `Open` (2 bug `BUG-WEB-009`, `BUG-WEB-010`).
- Matrix là bằng chứng đo coverage (mục 7 của Skill 1) và đầu vào Defect Report
  của Test Summary Report (Skill 5).
