# Test Run — Build 1 (2026-09-10)

- SUT: `https://nodejs1.ttbhanh.com/` (footer `Build 1`)
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`, workers 1
- Spec: `tests/test-scripts/<module>/*.spec.js` (mỗi test có tiền tố `[Build 1]`)
- Raw log: `tests/test-runs/raw/sweep.json` (Playwright JSON reporter, chạy thật)

| Test Case ID | Test title | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-NAV-001 | Menu đủ 3 mục, link đúng | `/`, `/register`, `/login` | đúng cả 3 | Pass |  |
| TC-NAV-002 | Home không active ở trang bài | `#mainMenu li` chứa Home không có class `active` | `<li class="active">Home` ở `/articles/1` | Fail | BUG-WEB-003 |
| TC-ART-001 | Trang chủ đủ 5 bài | 5 link `/articles/1..5` | đủ 5 | Pass |  |
| TC-ART-002 | Chi tiết 5 bài đúng nội dung | tiêu đề bài khớp | khớp cả 5 | Pass |  |
| TC-TITLE-001 | Title trang chủ | `NodeJS Website` | `NodeJS Website` | Pass |  |
| TC-TITLE-002 | Title 5 trang bài | `Design Research`, ... | tất cả đều `NodeJS Website` | Fail | BUG-WEB-001 |
| TC-TITLE-003 | Title Register/Login | `Register` / `Login` | cả hai `NodeJS Website` | Fail | BUG-WEB-001 |
| TC-IMG-001 | Ảnh trang chủ tải được | mọi `<img>` `naturalWidth > 0` | `/images/misson.jpeg` vỡ (404) | Fail | BUG-WEB-002 |
| TC-IMG-002 | Ảnh `/articles/4` tải được | ảnh hiển thị | `/images/misson.jpeg` vỡ (404) | Fail | BUG-WEB-002 |
| TC-IMG-003 | Favicon trả HTTP 200 | 200 | `/images/favicon.jpeg` → 404 | Fail | BUG-WEB-004 |
| TC-AUTH-001 | Register báo bảo trì | `under construction` | đúng | Pass |  |
| TC-AUTH-002 | Login báo bảo trì | `under construction` | đúng | Pass |  |
| TC-CMT-001 | Hiển thị danh sách comment | `ul.list-unstyled` tồn tại, render comment | đúng | Pass |  |
| TC-CMT-002 | Thêm comment hợp lệ | comment mới xuất hiện | đúng (đã tự dọn sau test) | Pass |  |
| TC-CMT-003 | Comment rỗng bị từ chối | không được lưu | `302` và comment rỗng ĐƯỢC lưu | Fail | BUG-WEB-009, BUG-WEB-010 |
| TC-CMT-004 | Comment 300 ký tự bị từ chối | không được lưu (giới hạn 255) | `302` và comment ĐƯỢC lưu | Fail | BUG-WEB-009, BUG-WEB-010 |
| TC-CMT-005 | Nút xóa comment hoạt động | có `button.delete-comment`, xóa được | đúng | Pass | BUG-WEB-008 (Rejected) |
| TC-PAG-001 | Phân trang có số trang + active | có `li.active` và nút số trang | chỉ có `Prev`/`Next`, không có số trang | Fail | BUG-WEB-007 |
| TC-PAG-002 | `?page=2` Next trỏ `?page=3` | `?page=3` | `?page=21` (nối chuỗi) | Fail | BUG-WEB-006 |
| TC-PAG-003 | `?page=99` Next trỏ `?page=100` | `?page=100` | `?page=991` | Fail | BUG-WEB-006 |
| TC-ERR-001 | `/articles/999` báo không tìm thấy | status < 500 + thông báo | HTTP `500` `Internal Server Error!` | Fail | BUG-WEB-005 |
| TC-ERR-002 | Route lạ trả 404 | 404 + trang lỗi | đúng | Pass |  |

**Tổng kết: Pass: 10 / Fail: 12 / Tổng: 22.**

## Bugs phát hiện trên Build 1

| Bug ID | Function | Severity | Priority | Status | Tóm tắt |
|---|---|---|---|---|---|
| BUG-WEB-001 | Titles | Cosmetic (1) | Low | Fixed | Mọi trang con đều `<title>NodeJS Website` |
| BUG-WEB-002 | Static assets | Medium (3) | Medium | New | `/images/misson.jpeg` 404 (đúng phải `mission.jpeg`) |
| BUG-WEB-003 | Navigation | Cosmetic (1) | Low | Fixed | Menu `active` luôn ở Home |
| BUG-WEB-004 | Static assets | Cosmetic (1) | Low | Fixed | Favicon `/images/favicon.jpeg` 404 |
| BUG-WEB-005 | Error handling | Serious (5) | High | Fixed | `/articles/999` trả HTTP 500 |
| BUG-WEB-006 | Pagination | Serious (5) | High | Fixed | Link `Next` nối chuỗi (`?page=21`, `?page=991`) |
| BUG-WEB-007 | Pagination | Medium (3) | Medium | Fixed | Thiếu nút số trang và trạng thái `active` |
| BUG-WEB-008 | Comments | N/A (0) | Low | **Rejected** | Nghi thiếu nút xóa — kiểm chứng lại thấy có, không phải defect |
| BUG-WEB-009 | Comments | Medium (3) | Medium | Fixed | Input comment thiếu `required` + `maxlength="255"` |
| BUG-WEB-010 | Comments | Serious (5) | High | New | Thiếu validate phía server (rỗng / khoảng trắng / 300 ký tự đều được lưu) |

Dữ liệu test tự dọn: mọi comment do test tạo (marker `QA-24810015-<timestamp>`) đã được xóa qua `POST /comments/<id>`; đã quét lại `articles/1..5 × page 1..10` trên cả 2 build, không còn rác.
