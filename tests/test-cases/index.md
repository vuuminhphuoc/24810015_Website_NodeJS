# Index test case — NodeJS Website

Nguồn suy ra: quan sát live Build 1 (`https://nodejs1.ttbhanh.com/`, footer `Build 1`)
và Build 1-fixed (`https://nodejs1-fixed.ttbhanh.com/`). Oracle: chuẩn web tĩnh.

| ID | Module | Mô tả | Technique |
|---|---|---|---|
| TC-NAV-001 | navigation | Menu đủ 3 mục, link đúng | EP |
| TC-NAV-002 | navigation | Active menu đúng trang | State-based |
| TC-ART-001 | articles | Homepage đủ 5 bài + link | EP |
| TC-ART-002 | articles | Chi tiết 5 bài đúng nội dung | EP |
| TC-TITLE-001 | titles | Title homepage | EP |
| TC-TITLE-002 | titles | Title 5 trang bài | EP |
| TC-TITLE-003 | titles | Title Register/Login | EP |
| TC-IMG-001 | static-assets | 6 ảnh homepage load được | EP |
| TC-IMG-002 | static-assets | Ảnh bài 4 (`misson.jpeg`) | EP |
| TC-AUTH-001 | auth-placeholder | Register báo bảo trì | EP |
| TC-AUTH-002 | auth-placeholder | Login báo bảo trì | EP |

Playwright mirror: `tests/test-scripts/web/build1.spec.js` + `build1-fixed.spec.js`.
