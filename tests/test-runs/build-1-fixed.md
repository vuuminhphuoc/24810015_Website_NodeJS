# Test Run — Build 1-fixed: Re-test + Regression (LIVE + Playwright 2026-09-09)

SUT: `https://nodejs1-fixed.ttbhanh.com/` (footer `Build 1 (fixed)`).
Re-test 5 TC từng fail + regression 6 TC từng pass.
Playwright `build1-fixed.spec.js`: 9 passed, 2 failed.

| Test Case | Build 1 (cũ) | Re-test Actual | Result | Bug status |
|---|---|---|---|---|
| TC-NAV-001 | Pass | Pass | Pass |  |
| TC-NAV-002 | Fail | Home hết active | Pass | BUG-WEB-003 → Closed |
| TC-ART-001 | Pass | Pass | Pass |  |
| TC-ART-002 | Pass | Pass (nội dung y nguyên) | Pass |  |
| TC-TITLE-001 | Pass | Pass | Pass |  |
| TC-TITLE-002 | Fail | đúng tên 5 bài | Pass | BUG-WEB-001 → Closed |
| TC-TITLE-003 | Fail | `Register` / `Login` | Pass | BUG-WEB-001 → Closed |
| TC-IMG-001 | Fail | vẫn vỡ `misson.jpeg` | Fail | BUG-WEB-002 → Open |
| TC-IMG-002 | Fail | vẫn vỡ | Fail | BUG-WEB-002 → Open |
| TC-AUTH-001 | Pass | Pass | Pass |  |
| TC-AUTH-002 | Pass | Pass | Pass |  |

9 Pass / 2 Fail. Fix đúng title + nav, sót ảnh. Evidence: `tests/evidence/FIXED-*.jpg`.
