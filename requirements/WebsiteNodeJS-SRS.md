# Đặc tả yêu cầu — NodeJS Website (suy ra, không phải SRS chính thức)

Nguồn: quan sát live 2 build ngày 2026-09-10 (fetch HTML + so sánh + đo hành vi POST).
- Build 1: `https://nodejs1.ttbhanh.com/` (footer `Build 1`)
- Build 1-fixed: `https://nodejs1-fixed.ttbhanh.com/` (footer `Build 1 (fixed)`)

Oracle: hành vi đúng của một website tin tức tĩnh có bình luận (tiêu đề đúng trang, ảnh
load được, menu active đúng, phân trang đúng, xử lý lỗi thân thiện, validate dữ liệu nhập).

## FR-WEB-01 — Điều hướng
Menu có `Home / Register / Login`, link đúng `/`, `/register`, `/login`.
Mục menu của trang hiện tại phải được đánh dấu `active`; trang bài viết không được
làm `Home` sáng nhầm.

## FR-WEB-02 — Trang chủ liệt kê bài viết
Homepage hiện đủ 5 bài (Design Research, Web & Mobile, Usability, Our Mission,
Customer Support), mỗi bài link đúng `/articles/1..5`.

## FR-WEB-03 — Chi tiết bài viết
`/articles/1..5` mở được (HTTP 200), nội dung đúng bài tương ứng.

## FR-WEB-04 — Tiêu đề trang
`<title>` phản ánh đúng trang: homepage `NodeJS Website`; bài viết theo tên bài;
`/register` → `Register`; `/login` → `Login`.

## FR-WEB-05 — Tài nguyên tĩnh
Mọi `<img>` phải load được (`naturalWidth > 0`); favicon khai báo trong
`link[rel="shortcut icon"]` phải trả HTTP 200.

## FR-WEB-06 — Trang Register/Login
Chưa có chức năng, hiển thị `This page is under construction. Please comeback later!`
kèm tiêu đề trang đúng (theo FR-WEB-04).

## FR-WEB-07 — Bình luận bài viết
- Trang chi tiết có form thêm bình luận: `POST /comments`, field `comment` + hidden `articleId`, nút `Post`.
- Danh sách bình luận hiển thị dưới form (`ul.list-unstyled`), mới nhất lên đầu, kèm thời gian.
- Mỗi bình luận có nút xóa (`button.delete-comment[data-id]`) gọi `POST /comments/<id>`.
- Validate: bình luận rỗng hoặc chỉ khoảng trắng phải bị từ chối; độ dài tối đa 255 ký tự.
  Việc validate phải được thực thi ở **cả client và server** (client-only là không đạt).

## FR-WEB-08 — Phân trang bình luận
- Query `?page=N`, mỗi trang 3 bình luận.
- Thanh phân trang hiển thị số trang và đánh dấu `active` đúng trang hiện tại.
- `Prev` bị vô hiệu ở trang đầu; `Next` phải trỏ tới đúng `page + 1` (phép cộng số học,
  không nối chuỗi).
- Trang ngoài phạm vi không được sinh link rác.

## FR-WEB-09 — Xử lý lỗi
- `/articles/<id không tồn tại>` phải trả trang báo không tìm thấy, KHÔNG trả HTTP 500.
- Route không tồn tại trả HTTP 404 kèm trang lỗi thân thiện.

## Trace
FR-WEB-0X ↔ TC trong `tests/test-cases/index.md` ↔ Bug trong `tests/bugs-catalog.js`
↔ `tests/traceability-matrix/version-*.md`.
