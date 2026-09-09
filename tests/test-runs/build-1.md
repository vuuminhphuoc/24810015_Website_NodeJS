# Test Run — Build 1 (LIVE + Playwright 2026-09-09)

SUT: `https://nodejs1.ttbhanh.com/` (footer `Build 1`).
Thực thi: 11 TC live (browser) + Playwright `build1.spec.js` (6 passed, 5 failed).

| Test Case | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|
| TC-NAV-001 | menu đủ, link đúng | đủ 3 mục, href đúng | Pass |  |
| TC-NAV-002 | Home không active ở bài viết | `LI.active[Home]` | Fail | BUG-WEB-003 |
| TC-ART-001 | đủ 5 bài + link | đủ 5, link /articles/1..5 | Pass |  |
| TC-ART-002 | 5 bài đúng nội dung | khớp cả 5 | Pass |  |
| TC-TITLE-001 | `NodeJS Website` | `NodeJS Website` | Pass |  |
| TC-TITLE-002 | title theo tên bài | tất cả `NodeJS Website` | Fail | BUG-WEB-001 |
| TC-TITLE-003 | `Register` / `Login` | cả hai `NodeJS Website` | Fail | BUG-WEB-001 |
| TC-IMG-001 | 6 ảnh load được | vỡ `/images/misson.jpeg` | Fail | BUG-WEB-002 |
| TC-IMG-002 | ảnh bài 4 | `misson.jpeg` vỡ | Fail | BUG-WEB-002 |
| TC-AUTH-001 | báo bảo trì | `under construction` | Pass |  |
| TC-AUTH-002 | báo bảo trì | `under construction` | Pass |  |

6 Pass / 5 Fail → 3 bugs. Evidence: `tests/evidence/B1-*.jpg`.
