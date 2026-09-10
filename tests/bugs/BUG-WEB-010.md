# [BUG][Web] Thiếu validate phía server cho comment (rỗng / khoảng trắng / 300 ký tự vẫn được lưu)

## 1. Bug ID
BUG-WEB-010

## 2. Function name
Comments

## 3. Problem summary
`POST /comments` thiếu validate phía server: gửi `comment=""`, `comment="   "` (chỉ khoảng trắng), hoặc chuỗi 300 ký tự đều trả `302 -> /articles/<id>` và comment ĐƯỢC LƯU trên CẢ 2 build. Thuộc tính `required`/`maxlength` của Build 1-fixed chỉ chặn ở client, không bảo vệ server.

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/` và Build 1-fixed `https://nodejs1-fixed.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Gửi `POST https://nodejs1.ttbhanh.com/comments` với body form `comment=&articleId=1` (chuỗi rỗng) → quan sát trả `302 -> /articles/1` và comment rỗng được lưu (sau đó TỰ DỌN bằng `POST /comments/<id>` với body `articleId=1`).
2. Gửi `POST https://nodejs1.ttbhanh.com/comments` với body form `comment=%20%20%20&articleId=1` (chỉ khoảng trắng) → `302` và comment được lưu (sau đó tự dọn như trên).
3. Gửi `POST https://nodejs1.ttbhanh.com/comments` với body form `comment=<300 ký tự>&articleId=1` → `302` và comment 300 ký tự được lưu (sau đó tự dọn như trên).
4. Lặp lại cả 3 bước trên `https://nodejs1-fixed.ttbhanh.com/` → kết quả giống hệt.

Expected result: server từ chối (báo lỗi, không lưu) với comment rỗng / chỉ khoảng trắng / vượt 255 ký tự.
Actual result: cả 3 trường hợp đều `302` và comment được lưu trên CẢ 2 build.
Evidence: `tests/evidence/B1-comment-form.jpg`, `tests/evidence/FIXED-comment-form.jpg`, và `tests/test-runs/raw/sweep.json` (`TC-CMT-003`/`TC-CMT-004` Fail trên CẢ 2 build).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
New
Re-test trên Build 1-fixed: FAIL — vẫn tái hiện (fix sót; là phát hiện regression quan trọng nhất: `required`/`maxlength` chỉ chặn ở client).

## 9. Priority
High — dữ liệu không hợp lệ được lưu trực tiếp vào hệ thống trên cả 2 build, cần sửa trong 02–04 ngày.

## 10. Severity
Serious (weight 5) — thiếu kiểm tra dữ liệu đầu vào phía server của chức năng comment.
Found by Test Case: TC-CMT-003, TC-CMT-004

Labels: `type: bug`, `module: comments`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
