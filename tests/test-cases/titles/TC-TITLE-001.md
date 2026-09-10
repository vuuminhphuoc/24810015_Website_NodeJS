# TC-TITLE-001: Tiêu đề trang chủ

## Requirement ID
FR-WEB-04 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Titles / Functional / Equivalence Partitioning

## Preconditions
- Mở homepage Build 1: `https://nodejs1.ttbhanh.com/`

## Test data
Không cần.

## Test steps
1. Mở homepage Build 1.
2. Đọc `document.title`.

## Expected result
`NodeJS Website`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/titles/titles.spec.js`

## Observed result
Build 1: `document.title` = `NodeJS Website`. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
Trang duy nhất có title đúng trên Build 1; mọi trang con đều sai (xem TC-TITLE-002, TC-TITLE-003).
