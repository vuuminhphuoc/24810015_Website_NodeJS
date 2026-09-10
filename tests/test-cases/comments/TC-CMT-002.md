# TC-CMT-002: Thêm comment hợp lệ qua POST /comments

## Requirement ID
FR-WEB-07: Comment (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Comments / Functional / Equivalence Partitioning (lớp hợp lệ)

## Preconditions
- Mở `/articles/1` Build 1: `https://nodejs1.ttbhanh.com/articles/1`

## Test data
| comment | `TC-CMT-002 probe 2026-09-10` + giờ-phút (duy nhất, dễ nhận diện) |
| articleId | `1` |

## Test steps
1. Mở `/articles/1` trên Build 1, ghi nhận danh sách comment hiện tại.
2. Điền ô comment chuỗi probe trên, bấm `Post` (form `POST /comments`, field `comment` + hidden `articleId`).
3. Tải lại `/articles/1`, kiểm tra comment probe xuất hiện ở đầu danh sách.
4. (BẮT BUỘC — tự dọn) Xóa comment vừa tạo bằng `POST /comments/<id>` với body `articleId=1`, tải lại trang xác nhận đã mất.

## Expected result
`POST /comments` trả `302 → /articles/1`, comment mới hiện ở đầu danh sách; sau bước 4 không còn comment rác.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/comments/comments.spec.js`

## Observed result
Build 1: `POST /comments` trả `302 → /articles/1`, comment ĐƯỢC LƯU và hiện ở đầu danh sách. Khớp Expected result (bước 4 dọn sạch theo quy ước tự dọn).

## Status
Pass

## Bug ID
None

## Comments
Form thêm comment đã kiểm chứng: `POST /comments`, field `comment` (text) + hidden `articleId`, nút `Post`. FR-WEB-07 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
