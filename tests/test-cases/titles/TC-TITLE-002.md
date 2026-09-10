# TC-TITLE-002: Tiêu đề 5 trang bài viết

## Requirement ID
FR-WEB-04 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Titles / Functional / Equivalence Partitioning

## Preconditions
- Mở Build 1: `https://nodejs1.ttbhanh.com/`

## Test data
`/articles/1..5` → kỳ vọng `Design Research`, `Web & Mobile`, `Usability`, `Our Mission`, `Customer Support`.

## Test steps
1. Mở lần lượt 5 trang bài viết trên Build 1.
2. Đọc `document.title` của mỗi trang.

## Expected result
Title đúng tên từng bài.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/titles/titles.spec.js`

## Observed result
Build 1: `<title>` cả 5 trang đều là `NodeJS Website`. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-001

## Comments
Build 1-fixed đã sửa (hiển thị đúng tên từng bài).
