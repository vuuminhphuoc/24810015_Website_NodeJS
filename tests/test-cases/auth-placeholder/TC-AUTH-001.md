# TC-AUTH-001: Trang Register hiện thông báo bảo trì

## Requirement ID
FR-WEB-06 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Auth-placeholder / Functional / Equivalence Partitioning

## Preconditions
- Mở `/register` Build 1: `https://nodejs1.ttbhanh.com/register`

## Test data
Không cần.

## Test steps
1. Mở trang Register trên Build 1.
2. Đọc nội dung chính của trang.

## Expected result
`This page is under construction. Please comeback later!`, không có form dở.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/auth-placeholder/auth-placeholder.spec.js`

## Observed result
Build 1: hiện đúng `This page is under construction. Please comeback later!`, không có form dở. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
Chỉ kiểm tra nội dung placeholder; `<title>` sai là phạm vi của TC-TITLE-003.
