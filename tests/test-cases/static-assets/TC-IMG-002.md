# TC-IMG-002: Ảnh trang Our Mission (/articles/4)

## Requirement ID
FR-WEB-05 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Static-assets / Functional / Equivalence Partitioning

## Preconditions
- Mở `/articles/4` Build 1: `https://nodejs1.ttbhanh.com/articles/4`

## Test data
Không cần.

## Test steps
1. Mở `/articles/4` trên Build 1.
2. Kiểm tra ảnh `/images/misson.jpeg` (`naturalWidth > 0`).

## Expected result
Ảnh hiện (tên file đúng chính tả `mission` hoặc file tồn tại).

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/static-assets/static-assets.spec.js`

## Observed result
Build 1: `/images/misson.jpeg` → HTTP 404, ảnh vỡ. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-002

## Comments
Cùng gốc với TC-IMG-001 (sai chính tả tên file). Lỗi còn nguyên trên Build 1-fixed.
