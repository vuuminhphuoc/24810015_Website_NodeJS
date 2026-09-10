# TC-AUTH-002: Trang Login hiện thông báo bảo trì

## Requirement ID
FR-WEB-06 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Auth-placeholder / Functional / Equivalence Partitioning

## Preconditions
- Mở `/login` Build 1: `https://nodejs1.ttbhanh.com/login`

## Test data
Không cần.

## Test steps
1. Mở trang Login trên Build 1.
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
