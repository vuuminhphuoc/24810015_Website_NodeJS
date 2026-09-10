---
name: srs-to-testcases
description: Skill 1/4 bắt buộc — phát sinh Test Cases Website NodeJS từ Requirements (SRS) vào tests/test-cases/ theo template 12 mục chuẩn slide.
---

# Skill 1/4 bắt buộc — phát sinh Test Cases Website NodeJS từ Requirements

> Ánh xạ 1-1 với yêu cầu 1 của giáo viên: **phát sinh Test Cases từ Requirements**.

Nguồn: `Slides/En/Test Case.pdf` (Test Case Essentials tr.7, Objective/Title tr.8, Vì sao phải viết test case tr.5).

Tái dùng từ: 24810015_Basic_Calculator (giữ nguyên lý thuyết, thay ví dụ sang SUT Website NodeJS).

## Input

File SRS/đặc tả (`SRS.md`, `requirements/`) hoặc URL SUT + ảnh GUI. SUT bài này:

- Build 1: `https://nodejs1.ttbhanh.com/` (footer `Build 1`).
- Build 1-fixed: `https://nodejs1-fixed.ttbhanh.com/` (footer `Build 1 (fixed)`).
- Trang: `/` (danh sách 5 bài), `/articles/1..5` (chi tiết + comment + phân trang), `/register`, `/login` (đang "under construction"), route lạ → 404.

Không có SRS chính thức thì ghi rõ Requirement là "suy ra", lấy hành vi Build 1-fixed làm oracle.

## Vì sao phải viết test case (slide tr.5)

1. **Accountability** — rõ ai test gì, chịu trách nhiệm được.
2. **Reproducibility** — người khác chạy lại ra cùng kết quả.
3. **Tracking** — theo dõi tiến độ, biết case nào đã chạy/chưa chạy.
4. **Automation** — có test case mới tự động hóa được (đưa cho automation team).
5. **To find bugs** — thiết kế để tìm lỗi, không chỉ để "chạy cho xanh".
6. **To verify tests executed correctly** — xác minh test đã được thực thi đúng cách.
7. **To measure test coverage** — đo độ bao phủ so với requirements.

## Template test case 12 mục (bắt buộc — Test Case Essentials, slide tr.7)

Mỗi test case là 1 file `tests/test-cases/<module>/TC-<MOD>-NNN.md` với đúng cấu trúc sau.
Đọc skill này là đủ viết test case, không cần mở slide:

```markdown
# TC-XXX-NNN: <Objective/Title>

## Requirement ID
## Module / Test type / Technique
## Preconditions
## Test data
## Test steps
## Expected result
## Test environment
## Script
## Observed result
## Status
## Bug ID
## Comments
```

Giải thích từng mục:

1. **Tiêu đề `# TC-XXX-NNN: <Objective/Title>`** — gồm Test case ID + Objective/Title.
   **Objective/Title là trường quan trọng nhất** (slide tr.8): cho người đọc biết ngay
   test này kiểm tra gì; tên tốt giúp review dễ, dễ bàn giao cho người khác/automation team;
   nhiều khi đây là phần duy nhất được đọc. Viết dạng `Validate that...` (ví dụ
   `Validate that Next on ?page=2 goes to ?page=3`, `Validate that /articles/999 shows friendly message`).
2. **Requirement ID** — truy vết tới SRS (ví dụ `FR-PAG-01`, `FR-CMT-02`, `FR-TITLE-01`).
   Không có SRS chính thức thì ghi `Suy ra từ hành vi Build 1-fixed (oracle)`.
3. **Module / Test type / Technique** — module (navigation, articles, titles, static-assets,
   auth-placeholder, comments, pagination, error-handling), test type (Functional, UI...)
   và kỹ thuật thiết kế (EP, BVA, Decision Table, State-based).
4. **Preconditions** — điều kiện trước khi chạy: build nào (Build 1 / Build 1-fixed),
   trang đã mở (`/`, `/articles/3?page=2`, `/register`...), dữ liệu comment có sẵn.
5. **Test data** — dữ liệu vào/ra cụ thể: nội dung comment (rỗng, chỉ khoảng trắng,
   300 ký tự, hợp lệ), `articleId`, số trang `?page=N`, URL ảnh. Không để người chạy tự tìm test data.
6. **Test steps** — các bước numbered, đủ chi tiết để người khác reproduce được, kèm bước
   verify cuối (đọc kết quả ở selector nào: `#mainMenu li.active`, `ul.pagination`, `<title>`...).
7. **Expected result** — nội dung chính xác hoặc câu lỗi nguyên văn (ví dụ tiêu đề trang
   `Usability`, link Next trỏ `?page=3`, ảnh trả HTTP 200), là căn cứ Pass/Fail.
8. **Test environment** — browser + version + OS + build (ví dụ
   `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63, Build 1`).
9. **Script** — đường dẫn spec Playwright mirror (ví dụ
   `tests/test-scripts/comments/comments.spec.js`) hoặc pseudo-code nếu chưa automate.
10. **Observed result** — kết quả quan sát được khi chạy (do script đổ về, xem Skill 2).
    Lúc mới viết test case để trống hoặc ghi `Chưa chạy`.
11. **Status** — chỉ nhận đúng một trong 5 giá trị: `Pass` / `Fail` / `Blocked` / `Skipped` / `Not Run`.
12. **Bug ID** — điền khi Status là Fail (ví dụ `BUG-WEB-005`); Pass thì để `Không có`.
13. **Comments** — ghi chú thêm (trường hợp biên, nghi ngờ, cần retest...).

## Module

Mỗi feature là 1 thư mục con: `tests/test-cases/<module>/TC-<MOD>-NNN.md`.
Bài Website NodeJS dùng 8 module:

- `navigation/` → `TC-NAV` (menu `#mainMenu li.active` trên các trang).
- `articles/` → `TC-ART` (danh sách 5 bài ở `/`, nội dung `/articles/1..5`).
- `titles/` → `TC-TITLE` (`<title>` từng trang con).
- `static-assets/` → `TC-IMG` (favicon, `design.jpg`, `mobile.png`, `usability.jpg`, `misson.jpeg`, `customer.jpg`, `logo.png`).
- `auth-placeholder/` → `TC-AUTH` (`/register`, `/login` "under construction").
- `comments/` → `TC-CMT` (form `form[action="/comments"]`, `input[name=comment]`, nút `Post`, nút `button.delete-comment[data-id]`, `POST /comments`, `POST /comments/<id>`).
- `pagination/` → `TC-PAG` (`ul.pagination`, Prev/Next, nút số trang, `?page=N`).
- `error-handling/` → `TC-ERR` (`/articles/999`, route lạ → 404, comment invalid).

## Quy tắc ID

`TC-[MODULE]-[NUMBER]`, không tái dùng ID đã xóa, không đổi tên ID đang có.
Liệt kê tất cả vào `tests/test-cases/index.md` để chống trùng.

## Kỹ thuật thiết kế

- EP: comment invalid mỗi class 1 TC riêng (rỗng, chỉ khoảng trắng, 300 ký tự), valid gộp lại.
- BVA: biên `maxlength="255"` (255 vs 256 ký tự), biên phân trang (`?page=1`, `?page=99`).
- Decision Table cho Build × trang (Build 1 / Build 1-fixed × `/`, `/articles/N`, `/register`, `/login`).
- State-based: tạo comment bằng `POST /comments` rồi xóa bằng `POST /comments/<id>` để bắt lỗi state cũ; đi Prev/Next nhiều trang liên tiếp để bắt lỗi nối chuỗi số trang.
- Dùng dữ liệu phân biệt được (comment có timestamp/UUID) để bắt lỗi nhầm comment; dùng id không tồn tại (`/articles/999`) để bắt lỗi thiếu xử lý lỗi.

## Quy tắc tự dọn dữ liệu (bắt buộc với SUT live)

Test dữ liệu phải TỰ DỌN (self-cleaning): comment nào test tạo ra thì phải xóa bằng
`POST /comments/<id>` với body `articleId=<n>`. KHÔNG để lại rác trên site của giáo viên.

## Tiêu chí nhận

- Mỗi Requirement có ≥1 TC (đối chiếu bằng Traceability Matrix — Skill 4).
- Không có test case "xấu": thiếu test data, bước chung chung, thiếu bước verify Pass/Fail,
  test nhiều điều kiện trong 1 case, trùng lặp với case khác.
