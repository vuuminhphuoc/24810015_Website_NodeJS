# TC-ART-002: Chi tiết 5 bài viết mở được, nội dung đúng

## Requirement ID
FR-WEB-02 + FR-WEB-03 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Articles / Functional / Equivalence Partitioning

## Preconditions
- Mở Build 1: `https://nodejs1.ttbhanh.com/`

## Test data
`/articles/1..5`.

## Test steps
1. Mở lần lượt `/articles/1` đến `/articles/5` trên Build 1.
2. Đối chiếu tiêu đề + đoạn mở đầu mỗi trang với bài tương ứng trên homepage.

## Expected result
Cả 5 trang mở được (HTTP 200), tiêu đề và nội dung khớp bài tương ứng.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/articles/articles.spec.js`

## Observed result
Build 1: cả 5 trang trả HTTP 200, nội dung khớp từng bài. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
Chỉ kiểm tra nội dung bài viết; `<title>` sai là phạm vi của TC-TITLE-002.
