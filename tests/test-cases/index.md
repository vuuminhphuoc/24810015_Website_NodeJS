# Index test case — NodeJS Website

Nguồn suy ra: quan sát live Build 1 (`https://nodejs1.ttbhanh.com/`, footer `Build 1`)
và Build 1-fixed (`https://nodejs1-fixed.ttbhanh.com/`). Oracle: chuẩn web tĩnh.
Kết quả `Status (Build 1)` đo trên Build 1 ngày 2026-09-10 — chi tiết ở từng file TC.

| ID | Module | Mô tả | Technique | Status (Build 1) | Bug ID |
|---|---|---|---|---|---|
| TC-NAV-001 | navigation | Menu đủ 3 mục, link đúng | EP | Pass | None |
| TC-NAV-002 | navigation | Active menu đúng trang | State-based | Fail | BUG-WEB-003 |
| TC-ART-001 | articles | Homepage đủ 5 bài + link | EP | Pass | None |
| TC-ART-002 | articles | Chi tiết 5 bài đúng nội dung | EP | Pass | None |
| TC-TITLE-001 | titles | Title homepage | EP | Pass | None |
| TC-TITLE-002 | titles | Title 5 trang bài | EP | Fail | BUG-WEB-001 |
| TC-TITLE-003 | titles | Title Register/Login | EP | Fail | BUG-WEB-001 |
| TC-IMG-001 | static-assets | 6 ảnh homepage load được | EP | Fail | BUG-WEB-002 |
| TC-IMG-002 | static-assets | Ảnh bài 4 (`misson.jpeg`) | EP | Fail | BUG-WEB-002 |
| TC-IMG-003 | static-assets | Favicon tải được (HTTP 200) | EP | Fail | BUG-WEB-004 |
| TC-AUTH-001 | auth-placeholder | Register báo bảo trì | EP | Pass | None |
| TC-AUTH-002 | auth-placeholder | Login báo bảo trì | EP | Pass | None |
| TC-CMT-001 | comments | Hiển thị danh sách comment | EP | Pass | None |
| TC-CMT-002 | comments | Thêm comment hợp lệ (tự dọn) | EP | Pass | None |
| TC-CMT-003 | comments | Comment rỗng bị từ chối | EP invalid | Fail | BUG-WEB-009, BUG-WEB-010 |
| TC-CMT-004 | comments | Comment 300 ký tự bị từ chối | BVA | Fail | BUG-WEB-009, BUG-WEB-010 |
| TC-CMT-005 | comments | Xóa comment bằng nút delete-comment | State-based | Fail | BUG-WEB-008 |
| TC-PAG-001 | pagination | Nút số trang + active đúng | State-based | Fail | BUG-WEB-007 |
| TC-PAG-002 | pagination | Next ở ?page=2 trỏ ?page=3 | EP | Fail | BUG-WEB-006 |
| TC-PAG-003 | pagination | ?page=99 ngoài phạm vi | EP invalid | Fail | BUG-WEB-006 |
| TC-ERR-002 | error-handling | Route lạ trả 404 | EP invalid | Pass | None |
| TC-ERR-001 | error-handling | /articles/999 không 500 | EP invalid | Fail | BUG-WEB-005 |
22 TC (9 Pass, 13 Fail trên Build 1). Quy ước mã: `TC-[MODULE]-[NUMBER]`, không tái dùng ID đã xóa.

Playwright mirror: `tests/test-scripts/<module>/<module>.spec.js` (mỗi module 1 spec).
