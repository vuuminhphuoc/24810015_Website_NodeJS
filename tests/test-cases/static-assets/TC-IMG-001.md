# TC-IMG-001: 6 ảnh homepage load được

## Requirement ID
FR-WEB-05

## Module / Test type / Technique
Static-assets / Functional / Equivalence Partitioning

## Preconditions
- Mở homepage Build 1

## Test data
Không cần.

## Test steps
1. Mở homepage
2. Với mỗi `<img>`, kiểm tra `naturalWidth > 0`

## Expected result
Cả 6 ảnh load được, kể cả `/images/misson.jpeg`.

## Status / Related bugs
Not Run / BUG-WEB-002 (`misson.jpeg` vỡ cả 2 builds)
