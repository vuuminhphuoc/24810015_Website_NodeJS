# TC-ERR-002: Route lạ /khong-ton-tai trả 404

## Requirement ID
FR-WEB-09: Xử lý lỗi (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Error-handling / Functional / Equivalence Partitioning (lớp invalid: route không tồn tại)

## Preconditions
- Mở `/khong-ton-tai` Build 1: `https://nodejs1.ttbhanh.com/khong-ton-tai`

## Test data
Route `/khong-ton-tai` (không tồn tại trên site).

## Test steps
1. Mở `/khong-ton-tai` trên Build 1.
2. Ghi nhận HTTP status và nội dung trang.

## Expected result
HTTP 404 kèm trang lỗi (không rơi vào HTTP 500).

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/error-handling/error-handling.spec.js`

## Observed result
Build 1: trả HTTP 404, không rơi vào 500. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
Cặp đối chứng với TC-ERR-001 (route lạ xử lý đúng, nhưng id bài không tồn tại lại 500). FR-WEB-09 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
