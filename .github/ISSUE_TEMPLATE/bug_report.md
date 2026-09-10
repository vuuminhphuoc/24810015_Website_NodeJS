---
name: Bug Report
about: Dùng khi Test Case Website NodeJS fail — bug phải truy ngược được Test Case (theo slide Test report p.5–12)
title: "[BUG][Web] "
labels: ["type: bug"]
---

# Bug report — 10 trường bắt buộc (đúng thứ tự, mỗi trường một heading `## <số>. <tên trường>`)

## 1. Bug ID
`BUG-WEB-XXX` (`BUG-WEB-001..010`, không tự đặt mã mới).

## 2. Function name
Tên chức năng SUT (chỉ dùng 8 module): navigation (`#mainMenu li.active`) / articles (`/`, `/articles/1..5`) / titles (`<title>`) / static-assets (favicon, `design.jpg`, `mobile.png`, `usability.jpg`, `misson.jpeg`, `customer.jpg`, `logo.png`) / auth-placeholder (`/register`, `/login` "under construction") / comments (`form[action="/comments"]`, `input[name=comment]`, `button.delete-comment[data-id]`, `POST /comments`, `POST /comments/<id>`) / pagination (`ul.pagination`, `?page=N`) / error-handling (`/articles/999`, route lạ → 404).

## 3. Problem summary
1 câu = mục tiêu kiểm thử + actual vs expected. Không dùng tính từ cảm tính, phải có số đo cụ thể.

## 4. How to reproduce it
Các bước đánh số + Expected result + Actual result + dòng `Evidence:` trỏ ảnh có thật trong `tests/evidence/`. Ghi rõ environment: URL + build + browser/version + OS.

```md
1. Mở Build `1` tại `https://nodejs1.ttbhanh.com/articles/3?page=2`.
2. Đọc `href` của link Next trong `ul.pagination` (hoặc nhập comment vào `input[name=comment]`, click `Post`).
3. So với oracle Build 1-fixed `https://nodejs1-fixed.ttbhanh.com/` cùng URL.

Expected result: ...
Actual result: ...
Evidence: `tests/evidence/<file>.jpg`
```

Test tạo comment phải TỰ DỌN: xóa bằng `POST /comments/<id>` với body `articleId=<n>`.

## 5. Reported by
`24810015`

## 6. Date
`2026-09-10` (ngày chạy test chính thức).

## 7. Assign to
`Dev team (SUT bên thứ ba)`

## 8. Status
`New / In-progress / Fixed / Closed / Reopened / Rejected / Deferred / Duplicate`. 8 lỗi chỉ có ở Build 1 → `Fixed`/`Closed` sau re-test trên Build 1-fixed; 2 lỗi còn nguyên cả 2 build (`BUG-WEB-009`, `BUG-WEB-010`) giữ `New`/`Open` + ghi 1 dòng giải thích.

## 9. Priority
`Critical` (sửa ngay hoặc trong 01 ngày) / `High` (02–04 ngày) / `Medium` (05–08 ngày) / `Low` (sửa sau) + 1 câu lý do.

## 10. Severity
`Fatal` (weight 10: crash, mất dữ liệu — ví dụ `/articles/999` HTTP 500) / `Serious` (weight 5: hỏng tính năng chính — ví dụ xóa comment thiếu kiểm soát phía server, comment invalid vẫn được lưu) / `Medium` (weight 3: lệch nhẹ so với đặc tả — ví dụ Next nối chuỗi `?page=21`, thiếu `required`/`maxlength`) / `Cosmetic` (weight 1: ảnh hưởng rất nhỏ — ví dụ favicon 404, ảnh `misson.jpeg` hỏng, `<title>` chung chung) + 1 câu lý do.

---

## Bug Report Characteristics (slide Test report)
Written, Numbered, Simple, Understandable, Reproducible, Legible, Non-judgmental.

## Ví dụ câu xấu → câu tốt
- ❌ `"It does not work!"` → ✅ `"Next on ?page=2 points to ?page=21, expected ?page=3"` (nêu URL + actual + expected cụ thể thay vì cảm tính).
- ❌ `"System is really slow"` → ✅ `"Favicon request returns HTTP 404, expected HTTP 200"` (dùng số đo HTTP status thay vì tính từ mơ hồ).
- ❌ `"Comment bị sai, rất tệ"` → ✅ `"POST /comments with empty comment returns 302 and saves it on Build 1-fixed, expected rejection"` (endpoint + input + actual + expected cụ thể).

## Cuối file (bắt buộc cho audit)
```md
Found by Test Case: TC-<MODULE>-XXX
Labels: `type: bug`, `module: navigation/articles/titles/static-assets/auth-placeholder/comments/pagination/error-handling`, `severity: ...`, `priority: ...`, `status: new`, `found-by: test-case`
```
