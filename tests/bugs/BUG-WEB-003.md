# [BUG][Web] Menu Home active nhầm ở trang bài viết

## Found by Test Case
TC-NAV-002

## Requirement liên quan
FR-WEB-01

## Severity / Priority
Minor / P2 (định hướng sai nhưng không mất chức năng)

## Environment
Build 1: `https://nodejs1.ttbhanh.com/articles/1`

## Steps to reproduce
1. Mở `/articles/1`
2. Kiểm tra class `active` trong menu

## Expected result
`Home` không active ở trang bài viết.

## Actual result
`LI.active[Home]` — Home sáng nhầm (thiếu `setActiveMenu`, dùng `js/main.js`).

## Evidence
`tests/evidence/B1-nav.jpg`

## Retest (Build 1-fixed)
Pass — Home hết active (`js/script.js` + `setActiveMenu`). → Closed.

Labels: `type: bug`, `module: navigation`, `severity: minor`, `found-by: test-case`
