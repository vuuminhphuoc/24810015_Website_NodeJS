---
name: testrun-bug-report
description: Skill 3/4 bắt buộc — tạo file Test Run Website NodeJS cho 2 build (ghi kết quả Pass/Fail/Blocked/Skipped) và báo cáo Bugs theo 10 trường chuẩn slide.
---

# Skill 3/4 bắt buộc — tạo Test Run Website NodeJS cho 2 build, thực thi, ghi nhận kết quả và báo cáo Bugs

> Ánh xạ 1-1 với yêu cầu 3 của giáo viên: **tạo các file Test Run, mỗi file gồm các
> test case cho từng Build, thực thi, ghi nhận kết quả và báo cáo Bugs**.

Nguồn: `Slides/En/Test report.pdf` (Bug Report Essentials tr.5, Priority tr.11, Severity tr.12, Characteristics tr.13, Bad Bug Report tr.15–16).

Tái dùng từ: 24810015_Basic_Calculator (giữ nguyên lý thuyết, thay ví dụ sang SUT Website NodeJS).

## A. Test Run — 1 file cho 1 build

- Mỗi build 1 file, không gộp: `tests/test-runs/build-1.md` (Build 1 `https://nodejs1.ttbhanh.com/`)
  và `tests/test-runs/build-1-fixed.md` (Build 1-fixed `https://nodejs1-fixed.ttbhanh.com/`, re-test + regression).
  SUT có 2 biến thể build: 1 dòng = 1 TC × 1 build. Header mỗi file: SUT, Build, ngày chạy, Tester,
  Test environment, spec đã dùng.
- Bảng test case đầy đủ mọi TC, cột:

  `| Test Case ID | Test title | Expected | Actual | Result | Related Bug |`

  `Actual` phải là giá trị đo được thật (tiêu đề `<title>` đọc được, `href` của Next,
  HTTP status favicon/ảnh, nội dung `/articles/999`, comment có được lưu không),
  không viết lại Expected.

- Cột `Result` chỉ nhận đúng một trong 4 giá trị: `Pass` / `Fail` / `Blocked` / `Skipped`.
  (`Not Run` chỉ dùng trong file test case chưa chạy, không dùng trong test run đã thực thi.)
  `Fail`/`Blocked` bắt buộc có Related Bug hoặc lý do cụ thể.
- Cuối mỗi file test run phải có mục `## Bugs` liệt kê các bug phát hiện trong build đó
  (Bug ID + Problem summary 1 dòng + link tới file `tests/bugs/BUG-WEB-NNN.md`).
- Link 2 chiều (bắt buộc): Bug ghi `Found by TC-XXX` + Test Run ghi `Related Bug` +
  file TC cập nhật `Observed result`/`Status`/`Bug ID` + PR fix (nếu có) ghi `Fixes #N`.
  Bug chỉ close khi retest pass trên Build 1-fixed + comment kết quả.

## B. Bug Report — 10 trường bắt buộc, đúng thứ tự (slide tr.5)

Đọc skill này là đủ viết bug report, không cần mở slide. Mỗi bug là 1 file
`tests/bugs/BUG-WEB-NNN.md` (đồng thời là GitHub Issue theo template
`.github/ISSUE_TEMPLATE/bug_report.md`) với đúng 10 trường sau:

1. **Bug ID** — mã duy nhất, khác với Test case ID. Quy ước: `BUG-WEB-[NUMBER]` (`BUG-WEB-001..010`),
   không đổi tên/xóa ID đang có.
2. **Function name** — chức năng chứa bug. Bài này chỉ dùng 8 module:
   `navigation`, `articles`, `titles`, `static-assets`, `auth-placeholder`,
   `comments`, `pagination`, `error-handling`.
3. **Problem summary** — tóm tắt vấn đề = **Test Objective + Actual result (so với
   Expected result)** (slide tr.8). Ví dụ: `Link Next ở ?page=2 trên Build 1 trỏ ?page=21
   thay vì ?page=3 như mong đợi`; `/articles/999 trên Build 1 trả HTTP 500 thay vì thông báo thân thiện`.
4. **How to reproduce it** — các bước tái hiện chi tiết kèm ảnh minh chứng để developer
   reproduce được = **Test steps + Expected result + Actual result** (slide tr.9):
   ghi thao tác bàn phím/chuột, URL mở, giá trị nhập vào `input[name=comment]`, nút `Post` click,
   điểm đọc kết quả (`#mainMenu li.active`, `ul.pagination`, `<title>`, HTTP status),
   ảnh trong `tests/evidence/`.
5. **Reported by** — `24810015`.
6. **Date** — `2026-09-10` (ngày chạy test chính thức).
7. **Assign to** — `Dev team (SUT bên thứ ba)`.
8. **Status** — Bug Life Cycle, chỉ nhận một trong:
   `New` / `In-progress` / `Fixed` / `Closed` / `Reopened` / `Rejected` / `Deferred` / `Duplicate`.
   Luồng chuẩn: `New` → `In-progress` → `Fixed` → `Closed`; fail khi retest trên Build 1-fixed thì `Reopened`.
   8 lỗi chỉ có ở Build 1 → `Fixed`/`Closed` sau re-test; 2 lỗi còn nguyên cả 2 build → vẫn `New`/`Open`.
9. **Priority** — mức độ khẩn cấp của việc sửa (slide tr.11):

   | Priority | Thời hạn sửa | Mô tả |
   |---|---|---|
   | Critical | sửa ngay hoặc trong 01 ngày | có thể gây thiệt hại lớn cho sản phẩm (ví dụ xóa comment không cần kiểm soát phía server) |
   | High | 02–04 ngày | ảnh hưởng tính năng chính (ví dụ `/articles/999` crash HTTP 500, phân trang Next sai) |
   | Medium | 05–08 ngày | lệch nhẹ so với đặc tả (ví dụ `<title>` sai, menu active sai, thiếu nút số trang) |
   | Low | sửa sau | ảnh hưởng rất nhỏ tới vận hành sản phẩm (ví dụ favicon 404, ảnh `misson.jpeg` hỏng) |

10. **Severity** — mức độ ảnh hưởng tới ứng dụng (slide tr.12):

    | Severity | Weight (trọng số) | Mô tả |
    |---|---|---|
    | Fatal | 10 | hỏng nặng: system crash, lost data (ví dụ `/articles/999` trả HTTP 500 `Internal Server Error!`) |
    | Serious | 5 | hỏng tính năng chính (ví dụ endpoint `POST /comments/<id>` xóa được mà không kiểm soát phía server; comment invalid vẫn được lưu) |
    | Medium | 3 | lệch nhẹ so với đặc tả (ví dụ link Next nối chuỗi `?page=21`, thiếu `required`/`maxlength="255"`) |
    | Cosmetic | 1 | ảnh hưởng rất nhỏ (ví dụ sai tab order, thiếu default focus, favicon 404, ảnh hỏng, `<title>` chung chung...) |

- Kèm theo 10 trường: `Environment` cụ thể (URL + build + browser/OS, ví dụ
  `https://nodejs1.ttbhanh.com/, Build 1, Chrome/Chromium headless
  1280x900, Windows 11, Playwright 1.63`), `Found by Test Case` (TC nào phát hiện),
  `Requirement liên quan` (ví dụ `FR-PAG-01`), `Evidence` (ảnh `tests/evidence/`, log).
- `Severity` nói về **impact**, `Priority` nói về **urgency** — hai trục độc lập
  (bug Cosmetic vẫn có thể Priority High nếu cần sửa gấp cho demo và ngược lại).

## C. 7 đặc tính của bug report tốt (slide tr.13)

**Written, Numbered, Simple, Understandable, Reproducible, Legible, Non-judgmental.**

- Viết ra (không báo miệng), đánh số, đơn giản, dễ hiểu, tái hiện được, dễ đọc,
  không phán xét.
- **Non-judgmental**: cấm dùng tính từ cảm tính/phán xét, phải dùng số đo và nêu rõ
  environment cụ thể (browser + version + OS + build).

## D. Các bug report xấu cần tránh (slide tr.15–16)

1. Không file bug ở đâu cả (`Isn't filed at all`).
2. Báo qua email thay vì hệ thống tracking (`Is filed via email`).
3. Không có thông tin cụ thể: `It does not work!` → phải viết
   `Next on ?page=2 points to ?page=21, expected ?page=3`.
4. Chỉ báo symptom, không cho cách reproduce: `I just clicked and it crashes` →
   phải viết `HTTP 500 Internal Server Error! when opening /articles/999 on Build 1`.
5. Environment mơ hồ: `Windows` → phải viết `Windows 11, Chrome/Chromium headless 1280x900`
   (bài này thêm build: `Build 1, https://nodejs1.ttbhanh.com/`).
6. Dùng tính từ thay vì con số: `System is really slow` → phải viết
   `Favicon request returns HTTP 404, expected HTTP 200`.
7. Dùng lời phán xét: `Error message is stupid` → phải viết `Error message is unclear`.

## E. Danh mục 10 bug Website NodeJS (tham chiếu nhanh)

- `BUG-WEB-001` titles: `<title>` mọi trang con đều `NodeJS Website` (Build 1; fixed đúng).
- `BUG-WEB-002` navigation: menu `active` luôn ở `Home` khi ở `/articles/N` (Build 1; fixed đúng).
- `BUG-WEB-003` static-assets: favicon `/images/favicon.jpeg` → HTTP 404 (fixed trỏ `/images/favico.jpeg` → 200).
- `BUG-WEB-004` error-handling: `/articles/999` → HTTP 500 `Internal Server Error!` (fixed → 200 `Request NOT found!`).
- `BUG-WEB-005` pagination: Next nối chuỗi (`?page=2` → `?page=21`).
- `BUG-WEB-006` pagination: thiếu nút số trang + trạng thái `<li class="active">`.
- `BUG-WEB-007` comments: không nút xóa trên UI nhưng `POST /comments/<id>` vẫn xóa (thiếu kiểm soát phía server).
- `BUG-WEB-008` comments: ô nhập thiếu `required` và `maxlength="255"`.
- `BUG-WEB-009` static-assets: `/images/misson.jpeg` → HTTP 404 cả 2 build (fix sót; file đúng `/images/mission.jpeg` → 200).
- `BUG-WEB-010` comments: thiếu validate phía server — comment rỗng / chỉ khoảng trắng / 300 ký tự vẫn được lưu (302) cả 2 build.
