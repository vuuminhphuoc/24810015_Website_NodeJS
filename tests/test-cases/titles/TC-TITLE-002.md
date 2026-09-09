# TC-TITLE-002: Tiêu đề 5 trang bài viết

## Requirement ID
FR-WEB-04

## Module / Test type / Technique
Titles / Functional / Equivalence Partitioning

## Preconditions
- Mở Build 1

## Test data
`/articles/1..5` → expect `Design Research`, `Web & Mobile`, `Usability`, `Our Mission`, `Customer Support`.

## Test steps
1. Mở lần lượt 5 trang bài viết
2. Đọc `document.title` mỗi trang

## Expected result
Title đúng tên từng bài.

## Status / Related bugs
Not Run / BUG-WEB-001 (Build 1: tất cả đều `NodeJS Website`)
