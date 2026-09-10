# [BUG][Web] Mọi trang con đều có `<title>NodeJS Website`

## 1. Bug ID
BUG-WEB-001

## 2. Function name
Titles

## 3. Problem summary
Mọi trang con (`/articles/1..5`, `/register`, `/login`) đều có `<title>NodeJS Website` thay vì tên riêng của từng trang, gây nhầm lẫn định danh trang và ảnh hưởng SEO/UX.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/articles/1`.
2. Đọc `document.title` (hoặc xem tab trình duyệt).
3. Lặp lại với `https://nodejs1.ttbhanh.com/articles/2`, `https://nodejs1.ttbhanh.com/register`, `https://nodejs1.ttbhanh.com/login`.

Expected result: mỗi trang hiển thị tên riêng (`Design Research`, `Web & Mobile`, `Usability`, `Our Mission`, `Customer Support`, `Register`, `Login`).
Actual result: mọi trang đều hiển thị `NodeJS Website`.
Evidence: `tests/evidence/B1-title.jpg` (Build 1, bài 1 title sai `NodeJS Website`); `tests/evidence/FIXED-title.jpg` (Build 1-fixed, title đúng tên bài).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận.

## 9. Priority
Low — sai định danh trang, không chặn chức năng chính, sửa khi có thời gian.

## 10. Severity
Cosmetic (weight 1) — nội dung chức năng đúng, chỉ sai tiêu đề hiển thị trên tab trình duyệt.

Found by Test Case: TC-TITLE-002, TC-TITLE-003

Labels: `type: bug`, `module: titles`, `severity: cosmetic`, `priority: low`, `status: fixed`, `found-by: test-case`
