# TC-ART-001: Homepage liệt kê đủ 5 bài viết

## Requirement ID
FR-WEB-02 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Articles / Functional / Equivalence Partitioning

## Preconditions
- Mở homepage Build 1: `https://nodejs1.ttbhanh.com/`

## Test data
Không cần.

## Test steps
1. Mở homepage Build 1.
2. Đếm số bài viết và đọc link của từng bài.

## Expected result
Đủ 5 bài (Design Research, Web & Mobile, Usability, Our Mission, Customer Support), link đúng `/articles/1..5`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/articles/articles.spec.js`

## Observed result
Build 1: đủ 5 bài, link đúng `/articles/1..5`. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
TC baseline cho danh sách bài viết. Cặp đối chứng với TC-ART-002 (chi tiết từng bài).
