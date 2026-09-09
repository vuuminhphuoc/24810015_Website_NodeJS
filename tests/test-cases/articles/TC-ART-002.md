# TC-ART-002: Chi tiết 5 bài viết mở được, nội dung đúng

## Requirement ID
FR-WEB-02 + FR-WEB-03

## Module / Test type / Technique
Articles / Functional / Equivalence Partitioning

## Preconditions
- Mở Build 1

## Test data
`/articles/1..5`.

## Test steps
1. Mở lần lượt `/articles/1` đến `/articles/5`
2. Đối chiếu tiêu đề + đoạn mở đầu với homepage

## Expected result
Cả 5 trang mở được (HTTP 200), tiêu đề và nội dung khớp bài tương ứng.

## Status / Related bugs
Not Run / None
