# [BUG][Web] Mọi trang con đều <title>NodeJS Website</title>

## Found by Test Case
TC-TITLE-002, TC-TITLE-003

## Requirement liên quan
FR-WEB-04

## Severity / Priority
Major / P1 (sai định danh trang, ảnh hưởng SEO/UX)

## Environment
Build 1: `https://nodejs1.ttbhanh.com/`

## Steps to reproduce
1. Mở `/articles/1` (hoặc `/register`, `/login`)
2. Đọc `document.title`

## Expected result
`Design Research` (tên đúng từng trang)

## Actual result
`NodeJS Website` trên mọi trang.

## Evidence
`tests/evidence/B1-title.jpg`

## Retest (Build 1-fixed)
Pass — title đúng từng trang. → Closed.

Labels: `type: bug`, `module: titles`, `severity: major`, `found-by: test-case`
