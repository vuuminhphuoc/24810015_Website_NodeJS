# TC-CMT-001: Hiển thị danh sách comment trên /articles/1

## Requirement ID
FR-WEB-07: Comment (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Comments / Functional / Equivalence Partitioning

## Preconditions
- Mở `/articles/1` Build 1: `https://nodejs1.ttbhanh.com/articles/1`

## Test data
Không cần (chỉ đọc danh sách có sẵn, không tạo dữ liệu).

## Test steps
1. Mở `/articles/1` trên Build 1.
2. Kiểm tra khối danh sách comment: `<ul class='list-unstyled'>`, mỗi comment là 1 `<li>`.

## Expected result
Danh sách comment hiển thị, mỗi comment là 1 `<li>` trong `<ul class='list-unstyled'>`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/comments/comments.spec.js`

## Observed result
Build 1: danh sách hiển thị đúng cấu trúc (`<ul class='list-unstyled'>`, mỗi comment 1 `<li>`). Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
TC baseline cho module comment (chỉ đọc, không ghi). FR-WEB-07 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
