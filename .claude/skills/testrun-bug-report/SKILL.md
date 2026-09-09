---
name: testrun-bug-report
description: Ghi test run và tạo bug report link 2 chiều Found-by-Test-Case/Related-Bug theo workflow GitHub Issues.
---

# Test Run ↔ Bug Report

## Test run (1 file/sprint trong tests/test-runs/)
Bảng: `Test Case ID | Module | Tester | Result | Related Bug | Note`.
`Result` chỉ dùng `Pass/Fail/Blocked/Not Run`. `Fail/Blocked` bắt buộc có Related Bug hoặc lý do.
SUT nhiều biến thể (build/môi trường): 1 dòng = 1 TC × 1 build, KHÔNG gộp.

## Bug report (1 Issue/file, template .github/ISSUE_TEMPLATE/bug_report.md)
`Found by Test Case`, Requirement, `Severity/Priority`, Environment (URL + build + browser/OS),
Steps to reproduce, `Expected/Actual`, Evidence (ảnh `tests/evidence/`, log).

## Link 2 chiều (bắt buộc)
Bug ghi `Found by TC-XXX` + Test Run ghi `Related Bug` + file TC bổ sung `Related bugs`
+ PR fix ghi `Fixes #N`. Bug chỉ close khi PR merged + retest pass + comment kết quả.
