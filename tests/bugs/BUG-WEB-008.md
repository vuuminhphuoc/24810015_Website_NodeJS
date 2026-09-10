# [BUG][Web] (REJECTED) Nghi ngờ Build 1 thiếu nút xóa comment

## 1. Bug ID
BUG-WEB-008

## 2. Function name
Comments

## 3. Problem summary
Báo cáo ban đầu: Build 1 không hiển thị nút xóa comment trên UI (HTML không chứa `delete-comment`). Sau khi kiểm chứng lại, kết luận này SAI — trang lúc quan sát không có comment nào nên không có nút xóa nào được render. Bug bị `Rejected` (not a bug).

## 4. How to reproduce it
Environment: Build 1 `https://nodejs1.ttbhanh.com/`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

Quy trình kiểm chứng lại (2026-09-10):
1. `POST https://nodejs1.ttbhanh.com/comments` với body form `comment=QA-24810015-verify-<timestamp> & articleId=1` → trả `302`.
2. `GET https://nodejs1.ttbhanh.com/articles/1`, tìm chuỗi `delete-comment` trong HTML.
3. Gọi `POST https://nodejs1.ttbhanh.com/comments/<id>` với body form `articleId=1` để dọn dữ liệu test.

Expected result (giả thuyết ban đầu): Build 1 không render nút xóa.
Actual result: HTML **có** `<button class="btn btn-danger btn-xs delete-comment" data-id="22">` bên trong `<form action="/comments/22" method="post" id="form22">` → Build 1 CÓ nút xóa và xóa được. Test tự động `TC-CMT-005` cũng Pass trên cả 2 build (`tests/test-runs/raw/sweep.json`).
Khác biệt thật giữa 2 build (không phải defect): Build 1-fixed thêm `onsubmit="onDeleteComment(event)"` để xóa bằng AJAX, Build 1 submit form thường rồi tải lại trang. Cả hai đều đạt yêu cầu FR-WEB-07.

Evidence: `tests/test-runs/raw/sweep.json` (`[Build 1] TC-CMT-005` → ok=true).

## 5. Reported by
24810015

## 6. Date
2026-09-10

## 7. Assign to
Dev team (SUT bên thứ ba)

## 8. Status
Rejected — không phải lỗi sản phẩm mà là lỗi quan sát của tester (kiểm tra sự tồn tại của nút xóa trên bài viết chưa có comment nào). Ghi lại để làm bài học: điều kiện tiền đề của test case phải bảo đảm dữ liệu tồn tại trước khi kết luận thiếu chức năng.

## 9. Priority
Low — không cần sửa vì không phải defect.

## 10. Severity
N/A (weight 0) — bug bị từ chối, không tính vào tổng weighted defect.

Found by Test Case: TC-CMT-005

Labels: `type: bug`, `module: comments`, `status: rejected`, `resolution: not-a-bug`, `found-by: test-case`
