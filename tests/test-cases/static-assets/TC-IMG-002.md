# TC-IMG-002: Ảnh trang Our Mission (/articles/4)

## Requirement ID
FR-WEB-05

## Module / Test type / Technique
Static-assets / Functional / Equivalence Partitioning

## Preconditions
- Mở `/articles/4` Build 1

## Test data
Không cần.

## Test steps
1. Mở trang bài 4
2. Kiểm tra ảnh `/images/misson.jpeg` (`naturalWidth > 0`)

## Expected result
Ảnh hiện (tên file đúng chính tả `mission` hoặc file tồn tại).

## Status / Related bugs
Not Run / BUG-WEB-002 (vỡ cả 2 builds)
