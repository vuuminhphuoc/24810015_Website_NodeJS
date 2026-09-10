# TC-CMT-003: Comment rỗng phải bị từ chối

## Requirement ID
FR-WEB-07: Comment (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Comments / Functional / Equivalence Partitioning (lớp invalid: rỗng)

## Preconditions
- Mở `/articles/1` Build 1: `https://nodejs1.ttbhanh.com/articles/1`

## Test data
- Case A: `comment=""` (rỗng), `articleId=1`.
- Case B: `comment="   "` (chỉ khoảng trắng), `articleId=1`.

## Test steps
1. Mở `/articles/1` trên Build 1.
2. Case A: để ô comment trống, bấm `Post`.
3. Case B: nhập 3 khoảng trắng vào ô comment, bấm `Post`.
4. Sau mỗi case: kiểm tra response và xem comment có bị lưu vào danh sách không.
5. (Tự dọn) Nếu comment rác bị lưu (đúng hành vi Build 1), xóa ngay bằng `POST /comments/<id>` với body `articleId=1`.

## Expected result
Cả 2 case đều bị từ chối (4xx hoặc ở lại trang + báo lỗi); comment KHÔNG được lưu.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/comments/comments.spec.js`

## Observed result
Build 1: cả 2 case đều trả `302 → /articles/1` và comment ĐƯỢC LƯU. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-009, BUG-WEB-010

## Comments
Ô nhập thiếu `required` (client, BUG-WEB-009) và server không validate rỗng (BUG-WEB-010); lỗi còn nguyên trên Build 1-fixed. FR-WEB-07 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
