# [BUG][Web] Ô nhập comment thiếu `required` và `maxlength="255"`

## 1. Bug ID
BUG-WEB-009

## 2. Function name
Comments

## 3. Problem summary
Ô nhập comment của form `POST /comments` trên Build 1 thiếu thuộc tính `required` và `maxlength="255"` nên không chặn được nhập rỗng/quá dài ở phía client. Build 1-fixed đã có đủ `required maxlength="255"`.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Mở `https://nodejs1.ttbhanh.com/articles/1`.
2. Xem source HTML của form thêm comment (`POST /comments`, field `comment` + hidden `articleId`, nút `Post`): kiểm tra thuộc tính của ô nhập `comment`.
3. Đối chiếu với `https://nodejs1-fixed.ttbhanh.com/articles/1`.

Expected result: ô nhập có `required maxlength="255"` (như Build 1-fixed).
Actual result: Build 1 thiếu cả hai thuộc tính.
Evidence: `tests/evidence/B1-comment-form.jpg` (input không có `required`/`maxlength`), `tests/evidence/FIXED-comment-form.jpg` (có `required maxlength="255"`).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Fixed
Re-test trên Build 1-fixed ngày 2026-09-10: PASS → đề xuất Closed sau khi test lead xác nhận (ô nhập đã có `required maxlength="255"`).

## 9. Priority
Medium — thiếu rào chắn client-side, cần sửa trong 05–08 ngày (lưu ý vẫn cần validate server — xem BUG-WEB-010).

## 10. Severity
Medium (weight 3) — thiếu kiểm tra phía client cho trường nhập liệu của chức năng comment.

Found by Test Case: TC-CMT-003, TC-CMT-004

Labels: `type: bug`, `module: comments`, `severity: medium`, `priority: medium`, `status: fixed`, `found-by: test-case`
