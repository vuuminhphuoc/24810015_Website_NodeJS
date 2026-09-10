# [BUG][Web] Favicon trỏ `/images/favicon.jpeg` trả HTTP 404

## 1. Bug ID
BUG-WEB-004

## 2. Function name
Static assets

## 3. Problem summary
Thẻ favicon của Build 1 trỏ tới `/images/favicon.jpeg` và trả HTTP 404 (file không tồn tại), nên tab trình duyệt không hiển thị biểu tượng site. Build 1-fixed đã trỏ sang `/images/favico.jpeg` và trả HTTP 200.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/` và xem source HTML, tìm thẻ `<link rel="icon">` trỏ `/images/favicon.jpeg`.
2. Truy cập trực tiếp `https://nodejs1.ttbhanh.com/images/favicon.jpeg` → HTTP 404.
3. Lặp lại trên Build 1-fixed: `https://nodejs1-fixed.ttbhanh.com/images/favico.jpeg` → HTTP 200.

Expected result: favicon tải thành công (HTTP 200), tab trình duyệt hiển thị biểu tượng site.
Actual result: Build 1 favicon 404, tab không có biểu tượng.
Evidence: `tests/evidence/http-status-log.txt` (Build 1 `GET /images/favicon.jpeg` → HTTP 404; Build 1-fixed `GET /images/favico.jpeg` → HTTP 200).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận (favicon `favico.jpeg` trả HTTP 200).

## 9. Priority
Low — ảnh hưởng nhỏ tới nhận diện tab, không chặn chức năng.

## 10. Severity
Cosmetic (weight 1) — tài nguyên tĩnh thiếu, nội dung trang vẫn đầy đủ.

Found by Test Case: TC-IMG-003

Labels: `type: bug`, `module: static-assets`, `severity: cosmetic`, `priority: low`, `status: fixed`, `found-by: test-case`
