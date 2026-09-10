# TC-PAG-001: Trang 1 có nút số trang và đánh dấu active đúng

## Requirement ID
FR-WEB-08: Phân trang (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Pagination / Functional / State-based (trạng thái `active` của nút số trang theo trang hiện tại)

## Preconditions
- Mở `/articles/1` Build 1 (trang 1): `https://nodejs1.ttbhanh.com/articles/1`

## Test data
Không cần.

## Test steps
1. Mở `/articles/1` trên Build 1 (mặc định `?page=1`).
2. Kiểm tra khối phân trang: các nút số trang và mục mang `<li class="active">`.

## Expected result
Có nút số trang `1 2 3`, nút `1` mang `<li class="active">` đúng trang hiện tại.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/pagination/pagination.spec.js`

## Observed result
Build 1: phân trang chỉ có `Prev`/`Next`, thiếu nút số trang và thiếu trạng thái `active`. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-007

## Comments
Build 1-fixed đã sửa (có `1 2 3` + `<li class="active">` đúng trang). FR-WEB-08 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
