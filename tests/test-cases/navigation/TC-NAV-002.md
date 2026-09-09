# TC-NAV-002: Menu active đúng trang hiện tại

## Requirement ID
FR-WEB-01

## Module / Test type / Technique
Navigation / Functional / State-based

## Preconditions
- Mở `/articles/1`

## Test data
Không cần.

## Test steps
1. Mở `https://nodejs1.ttbhanh.com/articles/1`
2. Kiểm tra mục menu nào có class `active`

## Expected result
`Home` KHÔNG active khi đang ở trang bài viết.

## Status / Related bugs
Not Run / BUG-WEB-003 (Build 1: `LI.active[Home]` sai)
