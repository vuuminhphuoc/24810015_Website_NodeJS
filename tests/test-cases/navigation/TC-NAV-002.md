# TC-NAV-002: Menu active đúng trang hiện tại

## Requirement ID
FR-WEB-01 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Navigation / Functional / State-based (trạng thái `active` của menu theo trang hiện tại)

## Preconditions
- Mở `https://nodejs1.ttbhanh.com/articles/1` (Build 1)

## Test data
Không cần.

## Test steps
1. Mở `https://nodejs1.ttbhanh.com/articles/1`.
2. Kiểm tra mục menu nào mang class `active`.

## Expected result
`Home` KHÔNG active khi đang ở trang bài viết (không mục nào active sai).

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/navigation/navigation.spec.js`

## Observed result
Build 1: class `active` luôn nằm ở `Home` kể cả khi đang ở `/articles/1`. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-003

## Comments
Build 1-fixed đã sửa (dùng `js/script.js` + `setActiveMenu("mainMenu")` nên active đúng).
