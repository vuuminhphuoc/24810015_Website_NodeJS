# TC-PAG-003: ?page=99 ngoài phạm vi phải xử lý hợp lý

## Requirement ID
FR-WEB-08: Phân trang (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Pagination / Functional / Equivalence Partitioning (lớp invalid: trang ngoài phạm vi)

## Preconditions
- Mở `/articles/1?page=99` Build 1: `https://nodejs1.ttbhanh.com/articles/1?page=99`

## Test data
`?page=99` (vượt quá số trang comment hiện có).

## Test steps
1. Mở `/articles/1?page=99` trên Build 1.
2. Kiểm tra nội dung danh sách comment và các link trong khối phân trang.

## Expected result
Link `Next` trỏ `?page=100` (cộng số đúng, không nối chuỗi); trang ngoài phạm vi xử lý hợp lý (danh sách rỗng hoặc chuyển về trang hợp lệ), KHÔNG sinh link phân trang vô nghĩa.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/pagination/pagination.spec.js`

## Observed result
Build 1: link `Next` trỏ `?page=991` (nối chuỗi, link rác). Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-006

## Comments
Cùng gốc với TC-PAG-002 (Next nối chuỗi thay vì cộng số). FR-WEB-08 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
