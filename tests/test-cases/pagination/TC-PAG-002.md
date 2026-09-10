# TC-PAG-002: Link Next ở ?page=2 phải trỏ ?page=3

## Requirement ID
FR-WEB-08: Phân trang (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Pagination / Functional / Equivalence Partitioning

## Preconditions
- Mở `/articles/1?page=2` Build 1: `https://nodejs1.ttbhanh.com/articles/1?page=2`

## Test data
`?page=2` → kỳ vọng link `Next` trỏ `?page=3`.

## Test steps
1. Mở `/articles/1?page=2` trên Build 1.
2. Đọc thuộc tính `href` của link `Next` trong khối phân trang.

## Expected result
Link `Next` trỏ `?page=3` (trang kế tiếp).

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/pagination/pagination.spec.js`

## Observed result
Build 1: ở `?page=2` link `Next` trỏ `?page=21` (nối chuỗi thay vì cộng số). Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-006

## Comments
Cùng gốc nối-chuỗi: `?page=3` → `?page=31`, `?page=99` → `?page=991` (xem TC-PAG-003). Build 1-fixed đã sửa (Next trỏ đúng trang kế tiếp). FR-WEB-08 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
