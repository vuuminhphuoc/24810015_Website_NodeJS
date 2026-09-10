---
name: test-summary-report
description: Skill 5 Website NodeJS — sinh tests/test-summary/report.md theo cấu trúc 12 bước softwaretestinghelp từ test runs, matrix và bugs.
---

# Skill 5 — yêu cầu 3 của bài Website NodeJS: sinh `tests/test-summary/report.md`

> Skill này sinh báo cáo tổng kết `tests/test-summary/report.md` cho bài Website NodeJS
> từ số liệu test runs, traceability matrix và bugs.

Nguồn: mẫu 12 bước của softwaretestinghelp (Test Summary Report) + `Slides/En/Test report.pdf` (Defect Report, Severity có trọng số).

Tái dùng từ: 24810015_Basic_Calculator (giữ nguyên khung lý thuyết, thay ví dụ sang SUT Website NodeJS).

## Nguồn số liệu (đọc trước khi viết, không bịa số)

- `tests/test-runs/build-1.md` (kết quả Build 1 `https://nodejs1.ttbhanh.com/`).
- `tests/test-runs/build-1-fixed.md` (re-test + regression trên Build 1-fixed `https://nodejs1-fixed.ttbhanh.com/`).
- `tests/traceability-matrix/version-online-with-bugs.md` và `version-fixed-partial.md` (status Done/Open).
- `tests/bugs/BUG-WEB-*.md` (10 bug: Status, Priority, Severity, module).
- `tests/evidence/` (ảnh minh chứng).

## Cấu trúc 12 mục của `tests/test-summary/report.md` (đủ 12, đúng thứ tự)

1. **Purpose** — mục đích của tài liệu: tổng kết hoạt động kiểm thử Website NodeJS
   (Build 1 và Build 1-fixed), đối tượng đọc (giáo viên, dev team), phạm vi thời gian.
2. **Application Overview** — ứng dụng web tin tức NodeJS: trang `/` (danh sách 5 bài),
   `/articles/1..5` (chi tiết + comment + phân trang mỗi trang 3 comment),
   `/register` + `/login` (đang "under construction"), route lạ → 404.
   Liệt kê 8 module: navigation, articles, titles, static-assets, auth-placeholder,
   comments, pagination, error-handling.
3. **Testing Scope** — 3 mục con bắt buộc:
   - **In Scope**: các module/trang đã test trên cả 2 build (menu `#mainMenu li.active`,
     `<title>`, form `form[action="/comments"]` + `input[name=comment]`, `ul.pagination`,
     `/articles/999`, favicon/ảnh).
   - **Out of Scope**: chức năng ngoài phạm vi (đăng ký/đăng nhập thật — SUT chỉ là placeholder).
   - **Items not tested**: cái chưa test và vì sao (ví dụ môi trường mobile riêng, tải hiệu năng).
4. **Metrics** — số liệu đếm được, truy được về run/matrix:
   - TC planned vs executed (tổng TC, đã chạy/chưa chạy).
   - Kết quả passed / failed / blocked / skipped trên từng build.
   - Defect theo Status (New / Fixed / Closed / Reopened...) và theo Severity
     (Fatal×10 + Serious×5 + Medium×3 + Cosmetic×1, ghi công thức W.def).
   - Defect theo module (8 module, bug nào thuộc module nào).
5. **Types of Testing Performed** — mô tả ngắn từng loại đã làm: Functional testing
   (UI + form + phân trang), re-test (8 bug Build 1 trên Build 1-fixed), regression
   (chạy lại toàn bộ TC trên Build 1-fixed để bắt fix sót `BUG-WEB-009`, `BUG-WEB-010`).
6. **Test Environment & Tools** — URL từng build, browser + framework + lệnh chạy:
   `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`, `npx playwright test`.
   Ghi rõ selector/endpoint đã dùng (`button.delete-comment[data-id]`, `POST /comments`, `POST /comments/<id>`).
7. **Lessons Learned** — sự cố gặp và cách giải quyết (ví dụ phân trang nối chuỗi số,
   test comment phải tự dọn bằng `POST /comments/<id>` để không để rác trên site giáo viên).
8. **Recommendations** — đề xuất sửa (validate phía server cho comment, sửa chính tả
   `misson.jpeg`, kiểm soát xóa phía server) và đề xuất quy trình.
9. **Best Practices** — việc làm tốt ngoài test thường (automation Playwright mirror,
   tái dùng bộ skills, traceability 2 chiều, tự dọn dữ liệu test).
10. **Exit Criteria** — từng tiêu chí Yes/No trung thực, đếm từ matrix, không đoán
    (ví dụ "100% TC executed", "không còn defect Critical/Serious mở").
11. **Conclusion / Sign Off** — kết luận Go Live hay không, căn cứ exit criteria.
    Quy tắc bắt buộc: còn defect Critical/Major (Fatal/Serious) chưa đóng
    (`BUG-WEB-009`, `BUG-WEB-010` còn mở) thì Conclusion KHÔNG được đề xuất Go Live —
    phải ghi `Not ready for Go Live` và nêu điều kiện còn thiếu.
12. **Definitions / Acronyms** — TC, SUT, FR, W.def, Pass/Fail/Blocked/Skipped/Not Run
    và mọi từ viết tắt dùng trong báo cáo.

## Quy tắc

- Mọi con số phải truy được về run/matrix; không bịa số liệu, không bịa hành vi.
- Bug Open thì Conclusion không được Go Live (xem mục 11).
- Báo cáo viết TIẾNG VIỆT, giữ thuật ngữ ISTQB tiếng Anh
  (Pass/Fail/Blocked/Skipped, Fatal/Serious/Medium/Cosmetic, New/Fixed/Closed/Reopened...).
