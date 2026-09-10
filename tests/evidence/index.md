# Evidence — Website NodeJS (chụp live 2026-09-10, Chromium headless 1280x900)

Mỗi ảnh chụp trực tiếp trên SUT thật; log HTTP đo bằng `fetch`.

## Build 1 (`https://nodejs1.ttbhanh.com/`)

| File | Test Case / Bug | Nội dung |
|---|---|---|
| B1-home.jpg | TC-ART-001 | Trang chủ đủ 5 bài |
| B1-title.jpg | TC-TITLE-002 / BUG-WEB-001 | `/articles/1` nhưng title là `NodeJS Website` |
| B1-nav.jpg | TC-NAV-002 / BUG-WEB-003 | Menu `Home` active nhầm ở trang bài |
| B1-misson.jpg | TC-IMG-001 / BUG-WEB-002 | Trang chủ, ảnh `misson.jpeg` gãy |
| B1-article4.jpg | TC-IMG-002 / BUG-WEB-002 | `/articles/4`, ảnh gãy |
| B1-auth.jpg | TC-AUTH-001 | `/register` báo `under construction` |
| B1-pagination.jpg | TC-PAG-001, TC-PAG-002 / BUG-WEB-006, 007 | `?page=2`: chỉ có Prev/Next, Next trỏ `?page=21` |
| B1-err999.jpg | TC-ERR-001 / BUG-WEB-005 | `/articles/999` → `Internal Server Error!` (HTTP 500) |
| B1-comment-form.jpg | TC-CMT-003, TC-CMT-004 / BUG-WEB-009 | Ô nhập comment không có `required`/`maxlength` |

## Build 1-fixed (`https://nodejs1-fixed.ttbhanh.com/`)

| File | Test Case / Bug | Nội dung |
|---|---|---|
| FIXED-title.jpg | TC-TITLE-002 | Title đúng tên bài → BUG-WEB-001 Fixed |
| FIXED-nav.jpg | TC-NAV-002 | `Home` hết active → BUG-WEB-003 Fixed |
| FIXED-misson.jpg | TC-IMG-001 | Ảnh `misson.jpeg` VẪN gãy → BUG-WEB-002 còn mở |
| FIXED-article4.jpg | TC-IMG-002 | Ảnh vẫn gãy → BUG-WEB-002 còn mở |
| FIXED-pagination.jpg | TC-PAG-001, TC-PAG-002 | Có `1 2 3` + `li.active`, Next trỏ `?page=3` → BUG-WEB-006, 007 Fixed |
| FIXED-err999.jpg | TC-ERR-001 | `/articles/999` → `Request NOT found!` (HTTP 200) → BUG-WEB-005 Fixed |
| FIXED-comment-form.jpg | TC-CMT-003, TC-CMT-004 | Input có `required maxlength="255"` → BUG-WEB-009 Fixed (client) |

## Log HTTP

| File | Nội dung |
|---|---|
| http-status-log.txt | Trạng thái HTTP của `favicon.jpeg` / `favico.jpeg` / `misson.jpeg` / `mission.jpeg` / `/articles/999` trên cả 2 build |

## Raw log tự động

`tests/test-runs/raw/sweep.json` — Playwright JSON reporter, 44 test (28 passed / 16 failed),
là nguồn cho mọi con số trong test run, matrix và report.
