---
name: traceability-matrix
description: Dựng traceability matrix Requirement-TestCase-Build-Bug kèm đếm coverage và kiểm tra bug mồ côi.
---

# Traceability Matrix

## Vị trí và cột
`tests/traceability-matrix/version-<ten>.md` (1 file/version: online còn lỗi, fixed...), cột:
`Requirement | Test Case | Build | Result | Bug Issue | Status`.
`Result`: Pass/Fail/Blocked/Not Run. `Status`: Done/Open/Ready for Retest/Blocked.
SUT nhiều build thì thêm cột `Build`; bản nộp gọn lấy status xấu nhất theo TC, bản full để ở test-runs.

## Kiểm tra trước khi nhận
- Mọi Requirement có ≥1 TC.
- Mọi dòng Fail có Bug; mọi Bug xuất hiện ≥1 dòng (cross-check với số file `tests/bugs/`).
- Tổng dòng = số TC × số build; đếm Done/Open/Blocked/Chưa chạy khớp tổng.
