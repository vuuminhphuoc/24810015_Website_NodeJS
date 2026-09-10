# Test Summary Report — Website NodeJS

Sinh theo skill `test-summary-report`, cấu trúc 12 bước của mẫu
[softwaretestinghelp](https://www.softwaretestinghelp.com/test-summary-report-template-download-sample/).

## 1. Purpose of the Document

Tài liệu tổng kết toàn bộ hoạt động kiểm thử ứng dụng **Website NodeJS** trên hai bản triển khai
Build 1 và Build 1-fixed: phạm vi, số liệu, defect, tiêu chí kết thúc và kết luận Go-Live,
phục vụ giảng viên và nhóm phát triển.

## 2. Application Overview

Website NodeJS là ứng dụng web giới thiệu dịch vụ, gồm: trang chủ liệt kê 5 bài viết
(Design Research, Web & Mobile, Usability, Our Mission, Customer Support), trang chi tiết
`/articles/1..5` có **bình luận** (thêm/xóa) và **phân trang bình luận** (3 bình luận/trang),
hai trang `Register` / `Login` đang "under construction", và trang lỗi cho route không tồn tại.

- Build 1: `https://nodejs1.ttbhanh.com/`
- Build 1-fixed: `https://nodejs1-fixed.ttbhanh.com/`

## 3. Testing Scope

**In Scope** — Functional testing 8 module: navigation, articles, titles, static-assets,
auth-placeholder, comments, pagination, error-handling. Re-test 12 test case từng Fail và
regression 10 test case từng Pass trên Build 1-fixed.

**Out of Scope** — Performance, security/penetration, load, cross-browser (chỉ Chromium),
kiểm thử trên thiết bị di động thật.

**Items not tested** — Luồng đăng ký/đăng nhập thật (hai trang còn "under construction",
không có chức năng để kiểm thử).

## 4. Metrics

**Test case planned vs executed**

| Chỉ số | Giá trị |
|---|---|
| Test case thiết kế | 22 (8 module) |
| Test case thực thi | 22 × 2 build = 44 lượt |
| Tự động hóa | 100% (Playwright 1.63, 8 spec) |

**Passed / Failed**

| Build | Pass | Fail | Tỷ lệ Pass |
|---|---|---|---|
| Build 1 | 10 | 12 | 45.5% |
| Build 1-fixed | 18 | 4 | 81.8% |
| **Tổng** | **28** | **16** | **63.6%** |

**Defect theo Status**

| Status | Số lượng | Bug ID |
|---|---|---|
| Fixed (đã sửa ở Build 1-fixed) | 7 | BUG-WEB-001, 003, 004, 005, 006, 007, 009 |
| New (còn mở) | 2 | BUG-WEB-002, BUG-WEB-010 |
| Rejected (not a bug) | 1 | BUG-WEB-008 |
| **Tổng ghi nhận** | **10** | |

**Defect theo Severity** (trọng số: Fatal 10, Serious 5, Medium 3, Cosmetic 1; không tính Rejected)

| Severity | Weight | Số defect | W.def |
|---|---|---|---|
| Fatal | 10 | 0 | 0 |
| Serious | 5 | 3 | 15 |
| Medium | 3 | 3 | 9 |
| Cosmetic | 1 | 3 | 3 |
| **Tổng** | | **9** | **27** |

**Defect theo Priority**: Critical 0 — High 3 (005, 006, 010) — Medium 3 (002, 007, 009) — Low 3 (001, 003, 004).

**Defect theo Function/Module**

| Module | Số defect | Bug ID |
|---|---|---|
| Comments | 2 (+1 rejected) | BUG-WEB-009, BUG-WEB-010 (+008) |
| Pagination | 2 | BUG-WEB-006, BUG-WEB-007 |
| Static assets | 2 | BUG-WEB-002, BUG-WEB-004 |
| Titles | 1 | BUG-WEB-001 |
| Navigation | 1 | BUG-WEB-003 |
| Error handling | 1 | BUG-WEB-005 |

## 5. Types of Testing Performed

- **Functional testing**: 22 test case trên Build 1, kỹ thuật Equivalence Partitioning
  (comment rỗng / hợp lệ / vượt 255 ký tự), Boundary Value (trang phân trang đầu/giữa/ngoài phạm vi),
  State-based (thêm rồi xóa bình luận).
- **Re-test**: 12 test case từng Fail, chạy lại trên Build 1-fixed.
- **Regression testing**: 10 test case từng Pass, chạy lại để phát hiện hồi quy — không có hồi quy mới.

## 6. Test Environment & Tools

| Hạng mục | Giá trị |
|---|---|
| SUT | Build 1 `nodejs1.ttbhanh.com`, Build 1-fixed `nodejs1-fixed.ttbhanh.com` |
| Trình duyệt | Chromium headless 1280x900 |
| Hệ điều hành | Windows 11 |
| Công cụ | Playwright 1.63 (`npx playwright test`), workers 1, retries 0 |
| Raw log | `tests/test-runs/raw/sweep.json` (JSON reporter) |
| Quản lý bug | File Markdown `tests/bugs/` + `tests/bugs-catalog.js` (self-check) |

## 7. Lessons Learned

- Reader-mode/HTML thô của hai build gần như giống nhau; chỉ khi **so sánh HTML từng dòng và
  đo hành vi POST thật** mới lộ ra lỗi phân trang nối chuỗi, lỗi 500 và lỗi thiếu validate server.
- Ảnh hỏng không sinh lỗi HTTP trong log trình duyệt → phải kiểm `naturalWidth` của từng `<img>`.
- `BUG-WEB-008` là bài học đắt: kết luận "thiếu nút xóa" khi trang **chưa có bình luận nào**.
  Precondition của test case phải bảo đảm dữ liệu tồn tại trước khi kết luận thiếu chức năng.
  Bug đã được chuyển `Rejected` kèm bằng chứng thay vì xóa lặng lẽ.
- Test tạo dữ liệu trên SUT thật buộc phải **self-cleaning**; dùng marker `QA-24810015-<timestamp>`
  và xóa trong `finally` là cách bảo đảm không để rác lại cho người khác.

## 8. Recommendations

1. Sửa `BUG-WEB-010` trước tiên: thêm validate phía server cho `POST /comments`
   (từ chối chuỗi rỗng/khoảng trắng, giới hạn 255 ký tự) — validate client hiện tại bị vượt qua dễ dàng.
2. Sửa `BUG-WEB-002`: đổi tham chiếu `/images/misson.jpeg` → `/images/mission.jpeg` (file đã tồn tại, trả 200).
3. Bổ sung thuộc tính `alt` cho ảnh và kiểm thử accessibility.
4. Thêm kiểm thử tự động cho `title`, ảnh và phân trang vào pipeline CI để chặn hồi quy.

## 9. Best Practices

- Tái sử dụng nguyên bộ 5 skill từ project `24810015_Basic_Calculator`, chỉ thay phần SUT-specific
  → rút ngắn thời gian thiết kế và giữ thống nhất template.
- Suite tự động chạy **cùng một bộ assert trên cả hai build**, nên kết quả re-test và regression
  lấy trực tiếp từ một lần chạy, không phải làm thủ công hai lần.
- Assert theo hành vi đúng (oracle) thay vì `test.fail`, nên fix sót lộ ra ngay dưới dạng test đỏ.

## 10. Exit Criteria

| Tiêu chí | Kết quả |
|---|---|
| Toàn bộ test case đã thực thi | **Yes** — 44/44 lượt trên 2 build |
| Không còn defect Critical | **Yes** — 0 defect Critical |
| Toàn bộ defect Serious được đóng | **No** — `BUG-WEB-010` (Serious/High) còn mở |
| Toàn bộ defect Medium được đóng | **No** — `BUG-WEB-002` (Medium) còn mở |
| Không có regression mới | **Yes** — 10/10 test case cũ vẫn Pass |
| Dữ liệu test đã dọn sạch khỏi SUT | **Yes** — đã quét lại `articles/1..5 × page 1..10` trên cả 2 build |

## 11. Conclusion / Sign Off

Chưa đạt Exit Criteria: còn **1 defect Serious** (`BUG-WEB-010` — thiếu validate phía server,
cho phép ghi dữ liệu rỗng/quá dài vào cơ sở dữ liệu) và **1 defect Medium** (`BUG-WEB-002` — ảnh hỏng).
Nhóm kiểm thử **KHÔNG đề xuất Go Live** cho Build 1-fixed cho tới khi hai defect này được sửa và
re-test Pass. Quyết định cuối thuộc về Senior Management / Client.

Build 1-fixed đã cải thiện rõ rệt so với Build 1 (Pass 45.5% → 81.8%, đóng 7/9 defect, 0 regression),
đủ điều kiện để tiếp tục vòng sửa lỗi tiếp theo.

## 12. Definitions, Acronyms and Abbreviations

| Thuật ngữ | Ý nghĩa |
|---|---|
| SUT | System Under Test — hệ thống được kiểm thử |
| TC | Test Case |
| FR-WEB-XX | Mã yêu cầu chức năng trong `requirements/WebsiteNodeJS-SRS.md` |
| W.def | Weighted defect — tổng trọng số defect theo Severity |
| Re-test | Chạy lại test case từng Fail sau khi có bản sửa |
| Regression | Chạy lại test case từng Pass để phát hiện hồi quy |
| Rejected | Trạng thái vòng đời bug: báo cáo không phải lỗi sản phẩm |
