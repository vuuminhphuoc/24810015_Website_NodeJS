# [BUG][Web] Ảnh `/images/misson.jpeg` vỡ (sai chính tả, phải là `mission.jpeg`)

## 1. Bug ID
BUG-WEB-002

## 2. Function name
Static assets

## 3. Problem summary
Ảnh `/images/misson.jpeg` (sai chính tả, thiếu chữ `i`) trả HTTP 404 trên cả Build 1 và Build 1-fixed; file đúng là `/images/mission.jpeg` (trả HTTP 200). Ảnh hỏng xuất hiện ở trang chủ (`/`) và trang `/articles/4`.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Build 1-fixed `https://nodejs1-fixed.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/` và quan sát khối ảnh trang chủ (ảnh `design.jpg`, `mobile.png`, `usability.jpg`, `misson.jpeg` (hỏng), `customer.jpg`, `logo.png`).
2. Mở `https://nodejs1.ttbhanh.com/articles/4` và quan sát ảnh bài viết.
3. Truy cập trực tiếp `https://nodejs1.ttbhanh.com/images/misson.jpeg` → HTTP 404; truy cập `https://nodejs1.ttbhanh.com/images/mission.jpeg` → HTTP 200.
4. Lặp lại các bước trên với `https://nodejs1-fixed.ttbhanh.com/` → kết quả giống hệt.

Expected result: mọi ảnh hiển thị đầy đủ, không có ảnh gãy.
Actual result: ảnh `misson.jpeg` gãy (icon ảnh hỏng) ở trang chủ và `/articles/4` trên CẢ 2 build.
Evidence: `tests/evidence/B1-misson.jpg` (Build 1, homepage ảnh `misson.jpeg` gãy); `tests/evidence/B1-article4.jpg` (Build 1, bài 4 ảnh gãy); `tests/evidence/FIXED-misson.jpg` (Build 1-fixed, ảnh vẫn gãy); `tests/evidence/FIXED-article4.jpg` (Build 1-fixed, bài 4 ảnh vẫn gãy).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
New
Re-test trên Build 1-fixed: FAIL — vẫn tái hiện (ảnh `misson.jpeg` vẫn 404, ảnh vẫn gãy ở trang chủ và `/articles/4`).

## 9. Priority
Medium — ảnh minh họa hỏng ở trang chủ và bài viết, cần sửa trong 05–08 ngày.

## 10. Severity
Medium (weight 3) — chức năng chính vẫn dùng được nhưng giao diện hiển thị thiếu nội dung hình ảnh.

Found by Test Case: TC-IMG-001, TC-IMG-002

Labels: `type: bug`, `module: static-assets`, `severity: medium`, `priority: medium`, `status: new`, `found-by: test-case`
