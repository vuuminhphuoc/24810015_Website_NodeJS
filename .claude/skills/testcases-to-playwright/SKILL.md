---
name: testcases-to-playwright
description: Skill 2/4 bắt buộc — phát sinh Test Scripts Playwright Website NodeJS từ Test Cases, gồm spec mirror từng module và spec sweep chạy mọi TC trên 2 build.
---

# Skill 2/4 bắt buộc — phát sinh Test Scripts Website NodeJS từ Test Cases

> Ánh xạ 1-1 với yêu cầu 2 của giáo viên: **phát sinh Test Scripts từ Test Cases**.

Nguồn: `Slides/En/Test Case.pdf` (Test Case Essentials tr.7 — mục `Script`; Test Procedure & Script tr.16).

Tái dùng từ: 24810015_Basic_Calculator (giữ nguyên lý thuyết, thay ví dụ sang SUT Website NodeJS).

## Nguyên tắc mirror

- **Mỗi module test case có 1 spec mirror cùng tên module:**
  `tests/test-cases/<module>/` ↔ `tests/test-scripts/<module>/<module>.spec.js`.
  Ví dụ: `tests/test-cases/comments/` ↔ `tests/test-scripts/comments/comments.spec.js`;
  `tests/test-cases/pagination/` ↔ `tests/test-scripts/pagination/pagination.spec.js`.
- Mỗi TC là 1 `test()` đặt tên đúng ID + Objective (ví dụ
  `test('TC-PAG-002: Next on ?page=2 goes to ?page=3', ...)`), assert đúng `Expected result` trong file TC.
- **Phải có 1 spec sweep chạy mọi TC trên cả 2 build:**
  `tests/test-scripts/matrix-sweep.spec.js` — lặp mọi TC × 2 build
  (Build 1 `https://nodejs1.ttbhanh.com/` và Build 1-fixed `https://nodejs1-fixed.ttbhanh.com/`),
  là nguồn số liệu cho file test run (`tests/test-runs/build-1.md`, `tests/test-runs/build-1-fixed.md`).

## Selector và endpoint thực tế của SUT (bắt buộc dùng đúng)

- Menu active: `#mainMenu li.active` (Build 1 luôn active `Home`; Build 1-fixed active đúng nhờ `js/script.js` + `setActiveMenu("mainMenu")`).
- Tiêu đề trang: `<title>` (Build 1 mọi trang con đều `NodeJS Website`; fixed hiển thị đúng).
- Form comment: `form[action="/comments"]`, ô nhập `input[name=comment]`, nút `Post`, field hidden `articleId`.
- Nút xóa comment (chỉ Build 1-fixed có trên UI): `button.delete-comment[data-id]` + form `/comments/<id>` + `onDeleteComment`.
- Phân trang: `ul.pagination`, link Prev/Next, nút số trang, `<li class="active">`, query `?page=N` (mỗi trang 3 comment).
- HTTP: `POST /comments` (thêm comment), `POST /comments/<id>` với body `articleId=<n>` (xóa comment, tự dọn dữ liệu test).
- Ảnh: favicon `/images/favico.jpeg` (fixed, HTTP 200), `/images/misson.jpeg` (sai chính tả, HTTP 404), file đúng `/images/mission.jpeg` (HTTP 200).
- Script JS: Build 1 dùng `/js/main.js`; Build 1-fixed dùng `/js/script.js`.

## Cấu trúc Playwright đang dùng

`tests/test-scripts/<module>/<module>.spec.js`, thêm `matrix-sweep.spec.js` cho hồi quy 2 build.
Config: `testDir: tests/test-scripts`, `workers: 1` (SUT ngoài), `timeout: 60000`, reporter `list`.
`baseURL` trỏ đúng build đang chạy; mỗi file test run ghi rõ SUT, Build, ngày chạy, Tester, Test environment, spec đã dùng.

## Suite Build 1-fixed (oracle, phải xanh)

Assert đúng Expected trong file TC: dùng `fill`/`click`/`goto` thật
(đừng set JS trực tiếp để sự kiện form chạy), đợi trang xong (`waitForLoadState` / `waitForTimeout` theo app),
đọc `textContent('title')`, `textContent('#mainMenu li.active')`, `getAttribute('a', 'href')` trong `ul.pagination`,
`response.status()` của ảnh, nội dung `/articles/999` (`Request NOT found!`).

## Suite Build 1 lỗi (xanh nhờ test.fail)

Mỗi lỗi đã biết của Build 1 là 1 `test.fail()` assert oracle Build 1-fixed trên Build 1, comment `BUG-WEB-XXX` tương ứng
(ví dụ Next trỏ `?page=21` thay vì `?page=3` — `BUG-WEB-005`; `/articles/999` trả HTTP 500 `Internal Server Error!` — `BUG-WEB-004`).
Build fix xong test sẽ "unexpected pass" (đỏ) — đúng semantics, lúc đó bỏ `test.fail`.

## Script phải ghi được Observed result

Script không chỉ assert mà còn phải xuất dữ liệu để đổ ngược vào mục
`Observed result` của test case (Skill 1):

- Đọc giá trị thật sau mỗi bước: `textContent('title')`, class active của `#mainMenu li`,
  `href` của Prev/Next, `status()` favicon/ảnh, thân trang `/articles/999`, comment mới có trong `<ul class='list-unstyled'>` không.
- Reporter JSON lưu actual values; khi viết file test-run thì copy
  actual vào cột Actual/Note và cập nhật `Observed result` + `Status` trong file TC tương ứng.
- Quy ước: TC chưa được sweep chạy thì `Observed result` ghi `Chưa chạy`,
  `Status` là `Not Run`.
- Test tạo comment phải tự dọn: xóa bằng `POST /comments/<id>` với body `articleId=<n>` cuối test.

## Chạy và ghi nhận

`npx playwright test` → dán tóm tắt pass/fail vào file test-run của build tương ứng
(`tests/test-runs/build-1.md`, `tests/test-runs/build-1-fixed.md`).
KHÔNG chạy full sweep khi không cần (gọi ra internet thật, tốn thời gian);
dùng kết quả sweep đã lưu làm số liệu chính thức.
