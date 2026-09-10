# TC-CMT-005: Xóa comment bằng nút delete-comment

## Requirement ID
FR-WEB-07: Comment (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Comments / Functional / State-based (trạng thái tồn tại của comment trước/sau xóa)

## Preconditions
- Mở `/articles/1` Build 1: `https://nodejs1.ttbhanh.com/articles/1`

## Test data
Comment probe tạo ở bước setup: `TC-CMT-005 probe 2026-09-10`, `articleId=1`.

## Test steps
1. (Setup) Tạo comment probe qua `POST /comments` (`articleId=1`) với marker duy nhất.
2. Mở `/articles/1`, tìm nút xóa `button.delete-comment[data-id]` của comment probe.
3. Bấm nút xóa (hoặc gọi `POST /comments/<id>` với body `articleId=1`), tải lại trang.
4. (Tự dọn) Xác nhận comment probe đã biến mất; nếu còn thì xóa qua endpoint.

## Expected result
Có nút xóa trên UI; bấm nút → comment bị xóa khỏi danh sách.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/comments/comments.spec.js`

## Observed result
Cả 2 build đều có `<button class="btn btn-danger btn-xs delete-comment" data-id="...">` trong `<form action="/comments/<id>">`; bấm xóa thì comment biến mất khỏi danh sách. Khớp Expected result.

## Status
Pass

## Bug ID
None (BUG-WEB-008 đã bị `Rejected` — xem lý do trong `tests/bugs/BUG-WEB-008.md`)

## Comments
Lần quan sát đầu kết luận sai là "Build 1 thiếu nút xóa" vì bài viết lúc đó không có comment nào nên không có nút nào được render. Bài học: precondition phải bảo đảm dữ liệu tồn tại trước khi kết luận thiếu chức năng. Khác biệt thật giữa 2 build chỉ là fixed dùng `onsubmit="onDeleteComment(event)"` (AJAX), không phải defect. FR-WEB-07 đã được bổ sung vào `requirements/WebsiteNodeJS-SRS.md`.
