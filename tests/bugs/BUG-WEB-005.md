# [BUG][Web] `/articles/999` trả HTTP 500 thay vì trang báo không tìm thấy

## 1. Bug ID
BUG-WEB-005

## 2. Function name
Error handling

## 3. Problem summary
Truy cập bài viết không tồn tại `GET /articles/999` trên Build 1 trả HTTP 500 với nội dung `Internal Server Error!` thay vì trang báo không tìm thấy. Build 1-fixed trả HTTP 200 với nội dung `Request NOT found!`.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/articles/999` (GET, id không tồn tại).
2. Quan sát mã trạng thái HTTP và nội dung trang.

Expected result: trang báo bài viết không tồn tại (`Request NOT found!`).
Actual result: HTTP 500, nội dung `Internal Server Error!`.
Evidence: `tests/evidence/B1-err999.jpg` (Build 1: `Internal Server Error!`), `tests/evidence/FIXED-err999.jpg` (Build 1-fixed: `Request NOT found!`), `tests/evidence/http-status-log.txt` (500 vs 200).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận (`https://nodejs1-fixed.ttbhanh.com/articles/999` trả HTTP 200 `Request NOT found!`).

## 9. Priority
High — lỗi 500 với id không tồn tại là đường dùng dễ chạm, cần sửa trong 02–04 ngày.

## 10. Severity
Serious (weight 5) — xử lý lỗi sai: rò rỉ lỗi server ra người dùng thay vì trang báo không tìm thấy.

Found by Test Case: TC-ERR-001

Labels: `type: bug`, `module: error-handling`, `severity: serious`, `priority: high`, `status: fixed`, `found-by: test-case`
