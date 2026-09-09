---
name: testcases-to-playwright
description: Biến test case Markdown thành Playwright specs chạy thật trên SUT, gồm suite Prototype và suite builds lỗi dùng test.fail.
---

# Test Cases → Playwright

## Cấu trúc mirror test-cases
`tests/test-scripts/<module>/<module>.spec.js`, thêm `builds.spec.js` cho hồi quy.
Config: `testDir: tests/test-scripts`, `workers: 1` (SUT ngoài), `timeout: 60000`, reporter `list`.

## Suite Prototype (phải xanh)
Mỗi TC là 1 `test()` assert đúng Expected trong file TC: dùng `selectOption`/`fill`/`click` thật
(đừng set JS trực tiếp, để `onchange` chạy), đợi app xong (`waitForTimeout` theo app),
đọc `inputValue('#numberAnswerField')` + `textContent('#errorMsgField')`.

## Suite builds lỗi (xanh nhờ test.fail)
Mỗi build lỗi là 1 `test.fail()` assert oracle Prototype trên build đó, comment `BUG-XXX` tương ứng.
Build fix xong test sẽ "unexpected pass" (đỏ) — đúng semantics, lúc đó bỏ `test.fail`.

## Chạy và ghi nhận
`npx playwright test` → dán tóm tắt pass/fail vào file test-run của sprint.
