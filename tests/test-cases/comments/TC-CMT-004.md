# TC-CMT-004: Comment 300 ký tự (> giới hạn 255) phải bị từ chối

## Requirement ID
FR-WEB-07: Comment (tạm đặt — SRS hiện chỉ có FR-WEB-01..06)

## Module / Test type / Technique
Comments / Functional / Boundary Value Analysis (biên `maxlength="255"`: 255 Pass, 300 Fail)

## Preconditions
- Mở `/articles/1` Build 1: `https://nodejs1.ttbhanh.com/articles/1`

## Test data
| comment | Chuỗi 300 ký tự (`"a"` lặp 300 lần, vượt giới hạn 255) |
| articleId | `1` |

## Test steps
1. Mở `/articles/1` trên Build 1.
2. Nhập chuỗi 300 ký tự vào ô comment, bấm `Post`.
3. Kiểm tra response và xem comment có bị lưu vào danh sách không.
4. (Tự dọn) Nếu comment rác bị lưu (đúng hành vi Build 1), xóa ngay bằng `POST /comments/<id>` với body `articleId=1`.

## Expected result
Bị từ chối (vượt `maxlength="255"`); comment KHÔNG được lưu.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

## Script
- `tests/test-scripts/comments/comments.spec.js`

## Observed result
Build 1: trả `302 → /articles/1` và comment 300 ký tự ĐƯỢC LƯU. Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-WEB-009, BUG-WEB-010

## Comments
Ô nhập thiếu `maxlength="255"` (client, BUG-WEB-009) và server không validate độ dài (BUG-WEB-010); lỗi còn nguyên trên Build 1-fixed. FR-WEB-07 chưa có trong `requirements/WebsiteNodeJS-SRS.md` — cần bổ sung vào SRS (ngoài slice test-cases).
