# TC-ERR-001: /articles/999 (id không tồn tại) không được trả HTTP 500

## Requirement ID
FR-WEB-09: Xử lý lỗi (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Error-handling / Functional / Equivalence Partitioning (lớp invalid: id không tồn tại)

## Preconditions
- Mở `/articles/999` Build 1: `https://nodejs1.ttbhanh.com/articles/999`

## Test data
`id=999` (không tồn tại; site chỉ có bài `1..5`).

## Test steps
1. Mở `/articles/999` trên Build 1.
2. Ghi nhận HTTP status và nội dung trang.

## Expected result
Trả trang báo không tìm thấy (`Request NOT found!`), KHÔNG trả HTTP 500.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/error-handling/error-handling.spec.js`

## Observed result
Build 1: trả HTTP 500, nội dung `Internal Server Error!`. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-005

## Comments
Build 1-fixed đã sửa (trả HTTP 200, nội dung `Request NOT found!`). FR-WEB-09 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
