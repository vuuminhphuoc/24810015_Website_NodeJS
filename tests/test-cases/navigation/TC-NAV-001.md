# TC-NAV-001: Menu điều hướng đủ và link đúng

## Requirement ID
FR-WEB-01 (requirements/WebsiteNodeJS-SRS.md)

## Module / Test type / Technique
Navigation / Functional / Equivalence Partitioning

## Preconditions
- Mở homepage Build 1: `https://nodejs1.ttbhanh.com/` (footer `Build 1`)

## Test data
Không cần.

## Test steps
1. Mở homepage Build 1.
2. Đọc 3 mục menu và thuộc tính `href` của từng mục.

## Expected result
Menu đủ 3 mục: `Home → /`, `Register → /register`, `Login → /login`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/navigation/navigation.spec.js`

## Observed result
Build 1: đủ 3 mục `Home / Register / Login`, `href` đúng `/`, `/register`, `/login`. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
TC baseline cho điều hướng. Cặp đối chứng với TC-NAV-002 (đủ mục/link nhưng sai trạng thái `active`).
