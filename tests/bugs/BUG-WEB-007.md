# [BUG][Web] Phân trang thiếu nút số trang và trạng thái `active`

## 1. Bug ID
BUG-WEB-007

## 2. Function name
Pagination

## 3. Problem summary
Phân trang comment của Build 1 chỉ có link `Prev`/`Next`, thiếu các nút số trang (`1 2 3`) và thiếu trạng thái `active` (`<li class="active">`) cho trang hiện tại. Người dùng không biết đang ở trang nào và không nhảy trực tiếp tới trang mong muốn được.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/articles/1?page=2`.
2. Quan sát khối phân trang dưới danh sách comment (`<ul class='list-unstyled'>`).

Expected result: phân trang có các nút `1 2 3` và nút trang hiện tại mang `<li class="active">` (như Build 1-fixed).
Actual result: chỉ có `Prev`/`Next`, không có nút số trang, không có `active`.
Evidence: `tests/evidence/B1-pagination.jpg` (chỉ có Prev/Next, không có số trang), `tests/evidence/FIXED-pagination.jpg` (có `1 2 3` + `li.active`).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận (fixed có `1 2 3` + `<li class="active">` đúng trang hiện tại).

## 9. Priority
Medium — thiếu điều hướng trực tiếp và chỉ báo trang hiện tại, cần sửa trong 05–08 ngày.

## 10. Severity
Medium (weight 3) — chức năng phân trang vẫn đi được bằng Prev/Next nhưng thiếu định hướng và lối tắt.

Found by Test Case: TC-PAG-001

Labels: `type: bug`, `module: pagination`, `severity: medium`, `priority: medium`, `status: fixed`, `found-by: test-case`
