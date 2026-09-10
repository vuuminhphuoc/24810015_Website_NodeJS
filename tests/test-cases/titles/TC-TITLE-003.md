# TC-TITLE-003: Tiêu đề trang Register/Login

## Requirement ID
FR-WEB-04 + FR-WEB-06 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Titles / Functional / Equivalence Partitioning

## Preconditions
- Mở Build 1: `https://nodejs1.ttbhanh.com/`

## Test data
Không cần.

## Test steps
1. Mở `/register` trên Build 1, đọc `document.title`.
2. Mở `/login` trên Build 1, đọc `document.title`.

## Expected result
`Register` và `Login`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/titles/titles.spec.js`

## Observed result
Build 1: `<title>` cả hai trang đều là `NodeJS Website`. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-001

## Comments
Cùng gốc với TC-TITLE-002 (mọi trang con đều hard-code title). Build 1-fixed đã sửa.
