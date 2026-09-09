# [BUG][Web] Ảnh /images/misson.jpeg vỡ (sai chính tả tên file)

## Found by Test Case
TC-IMG-001, TC-IMG-002

## Requirement liên quan
FR-WEB-05

## Severity / Priority
Major / P1 (ảnh gãy lộ trên homepage + bài 4)

## Environment
Cả 2 builds.

## Steps to reproduce
1. Mở homepage, kiểm tra `naturalWidth` từng `<img>`
2. Mở `/articles/4`, kiểm tra ảnh `misson.jpeg`

## Expected result
Mọi ảnh load được (`naturalWidth > 0`).

## Actual result
`/images/misson.jpeg` vỡ (`naturalWidth === 0`) ở cả homepage và bài 4,
cả Build 1 và Build 1-fixed.

## Evidence
`tests/evidence/B1-misson.jpg`, `tests/evidence/FIXED-misson.jpg`

## Retest (Build 1-fixed)
Vẫn Fail — fix sót. → Open (regression).

Labels: `type: bug`, `module: static-assets`, `severity: major`, `found-by: test-case`
