# TC-IMG-003: Favicon phải tải được

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
2. Đọc URL favicon trong `<head>`.
3. GET trực tiếp URL favicon, ghi nhận HTTP status.

## Expected result
Favicon tải được (HTTP 200).

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/static-assets/static-assets.spec.js`

## Observed result
Build 1: favicon trỏ `/images/favicon.jpeg` → HTTP 404. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-004

## Comments
Build 1-fixed đã sửa (trỏ `/images/favico.jpeg` → HTTP 200).
