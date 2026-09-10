# [BUG][Web] Menu `active` luôn nằm ở `Home` khi đang ở trang bài viết

## 1. Bug ID
BUG-WEB-003

## 2. Function name
Navigation

## 3. Problem summary
Khi đang ở trang chi tiết `/articles/N`, menu `active` vẫn nằm ở `Home` thay vì mục tương ứng, gây nhầm lẫn vị trí hiện tại cho người dùng.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/articles/2`.
2. Quan sát thanh menu điều hướng (Build 1 dùng `/js/main.js`, không có cơ chế `setActiveMenu`).

Expected result: mục menu tương ứng trang hiện tại được đánh dấu `active`.
Actual result: `Home` luôn giữ trạng thái `active` dù đang ở `/articles/N`.
Evidence: `tests/evidence/B1-nav.jpg` (Build 1, bài 2 nhưng Home active nhầm); `tests/evidence/FIXED-nav.jpg` (Build 1-fixed, active đúng).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận (fixed dùng `js/script.js` + `setActiveMenu("mainMenu")` nên active đúng).

## 9. Priority
Low — chỉ sai chỉ báo vị trí menu, không chặn chức năng.

## 10. Severity
Cosmetic (weight 1) — sai hiển thị trạng thái điều hướng, nội dung trang vẫn đúng.

Found by Test Case: TC-NAV-002

Labels: `type: bug`, `module: navigation`, `severity: cosmetic`, `priority: low`, `status: fixed`, `found-by: test-case`
