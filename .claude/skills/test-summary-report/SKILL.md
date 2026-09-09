---
name: test-summary-report
description: Sinh file test-summary/report.md theo mẫu 12 bước softwaretestinghelp từ test runs, matrix và bugs.
---

# Test Summary Report (softwaretestinghelp 12-step)

## Nguồn số liệu (đọc trước khi viết)
`tests/test-runs/build-*.md` (pass/fail), `tests/traceability-matrix/version-*.md`
(status Done/Open), `tests/bugs-catalog.js` (severity, fixed), `tests/evidence/index.md`.

## Mẫu 12 mục trong tests/test-summary/report.md
1. Purpose — mục đích tài liệu.
2. Application Overview — app gì, module nào.
3. Testing Scope — In Scope / Out of Scope / Items not tested (ghi rõ cái chưa test và vì sao).
4. Metrics — TC planned vs executed; passed/failed; defects theo Status và Severity; phân bố theo Module.
5. Types of Testing Performed — functional, re-test, regression (mô tả ngắn từng loại đã làm).
6. Test Environment & Tools — URL từng build, browser + framework + lệnh chạy (`npx playwright test`).
7. Lessons Learned — sự cố gặp và cách giải quyết.
8. Recommendations — đề xuất sửa/quy trình.
9. Best Practices — việc làm tốt ngoài test thường (automation, tái dùng skills).
10. Exit Criteria — từng tiêu chí Yes/No trung thực (đếm từ matrix, không đoán).
11. Conclusion / Sign Off — Go Live hay không, căn cứ exit criteria; chưa đạt thì nói rõ.
12. Definitions — TC, SUT, FR và từ viết tắt dùng trong báo cáo.

## Quy tắc
Mọi con số phải truy được về run/matrix; bug Open thì Conclusion không được Go Live.
