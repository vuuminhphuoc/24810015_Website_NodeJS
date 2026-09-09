---
name: srs-to-testcases
description: Sinh bộ test case Functional theo template TC-[MODULE]-[NUMBER] từ SRS hoặc đặc tả trang web vào tests/test-cases/.
---

# SRS → Test Cases

## Input
File SRS/đặc tả (`SRS.md`, `requirements/`) hoặc URL trang SUT + ảnh GUI. Không có SRS chính thức thì ghi rõ Requirement là "suy ra", lấy hành vi đúng nhất làm oracle.

## Module
Mỗi feature là 1 thư mục con: `tests/test-cases/<module>/TC-<MOD>-NNN.md`.
Ví dụ calculator: `addition/`, `subtraction/`, `multiplication/`, `division/`, `input-validation/`, `concatenation/`, `integer-toggle/`, `clear/`.

## Quy tắc ID
`TC-[MODULE]-[NUMBER]`, không tái dùng ID đã xóa. Liệt kê tất cả vào `tests/test-cases/index.md` để chống trùng.

## Template mỗi file (bắt buộc đủ 7 mục)
`Requirement ID`, `Module / Test type / Technique` (EP/BVA/decision-table/state-based),
`Preconditions` (Build, trạng thái checkbox), `Test data` (giá trị cụ thể),
`Test steps`, `Expected result` (số chính xác, câu lỗi nguyên văn), `Status / Related bugs`.

## Kỹ thuật
- EP: mỗi invalid class 1 TC riêng, valid gộp lại.
- Decision Table cho Operation × Integers-only.
- Dùng phép không giao hoán (`6-2`) để bắt lỗi đảo toán hạng; tính 2 lần liên tiếp để bắt lỗi dùng state cũ; invalid chữ (`Abc`) để bắt lỗi thiếu validate.
