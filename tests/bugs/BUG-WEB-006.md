# [BUG][Web] Phân trang: link `Next` nối chuỗi thay vì cộng số (`?page=2` → `?page=21`)

## 1. Bug ID
BUG-WEB-006

## 2. Function name
Pagination

## 3. Problem summary
Link `Next` của phân trang comment nối chuỗi thay vì cộng số: ở `?page=2` Next trỏ `?page=21`, ở `?page=3` trỏ `?page=31`, ở `?page=99` trỏ `?page=991`. Người dùng không thể đi tới trang kế tiếp đúng.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/articles/1?page=2`.
2. Xem thuộc tính `href` của link `Next`.
3. Lặp lại với `https://nodejs1.ttbhanh.com/articles/1?page=3` và `?page=99`.

Expected result: Next trỏ đúng trang kế tiếp (`?page=3`, `?page=4`, `?page=100`).
Actual result: Next trỏ `?page=21`, `?page=31`, `?page=991` (nối chuỗi `"2" + 1 = "21"`).
Evidence: `tests/evidence/B1-pagination.jpg` (Build 1 tại `?page=2`, Next trỏ `?page=21`), `tests/evidence/FIXED-pagination.jpg` (Build 1-fixed trỏ `?page=3`).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận (Next trỏ đúng trang kế tiếp).

## 9. Priority
High — phân trang hỏng từ trang 2 trở đi, cần sửa trong 02–04 ngày.

## 10. Severity
Serious (weight 5) — điều hướng phân trang sai, người dùng không tới được trang mong muốn.

Found by Test Case: TC-PAG-002

Labels: `type: bug`, `module: pagination`, `severity: serious`, `priority: high`, `status: fixed`, `found-by: test-case`
