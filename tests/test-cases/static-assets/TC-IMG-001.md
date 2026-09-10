# TC-IMG-001: 6 ảnh homepage load được

## Requirement ID
FR-WEB-05 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Static-assets / Functional / Equivalence Partitioning

## Preconditions
- Mở homepage Build 1: `https://nodejs1.ttbhanh.com/`

## Test data
Không cần.

## Test steps
1. Mở homepage Build 1.
2. Với mỗi `<img>`, kiểm tra `naturalWidth > 0`.

## Expected result
Cả 6 ảnh load được, kể cả `/images/misson.jpeg`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/static-assets/static-assets.spec.js`

## Observed result
Build 1: 5/6 ảnh load được; `/images/misson.jpeg` → HTTP 404 (sai chính tả, file đúng là `/images/mission.jpeg` → HTTP 200). Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-002

## Comments
Lỗi còn nguyên trên Build 1-fixed (fix sót). Cặp đối chứng với TC-IMG-002 (cùng file hỏng ở `/articles/4`).
