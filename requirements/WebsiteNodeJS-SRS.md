# Đặc tả yêu cầu — NodeJS Website (suy ra, không phải SRS chính thức)

Nguồn: quan sát live 2 builds ngày 2026-09-09.
- Build 1: `https://nodejs1.ttbhanh.com/` (footer `Build 1`)
- Build 1-fixed: `https://nodejs1-fixed.ttbhanh.com/` (footer `Build 1 (fixed)`)
Oracle: hành vi đúng chuẩn web tĩnh (tiêu đề đúng trang, ảnh load đủ, menu active đúng).

## FR-WEB-01 — Điều hướng
Menu có `Home / Register / Login`, link đúng `/`, `/register`, `/login`.
Mục menu của trang hiện tại phải active (không active nhầm trang khác).

## FR-WEB-02 — Trang chủ liệt kê bài viết
Homepage hiện đủ 5 bài (Design Research, Web & Mobile, Usability, Our Mission,
Customer Support), mỗi bài link đúng `/articles/1..5`.

## FR-WEB-03 — Chi tiết bài viết
`/articles/1..5` mở được, nội dung đúng từng bài.

## FR-WEB-04 — Tiêu đề trang
`<title>` phản ánh đúng trang: homepage `NodeJS Website`; bài viết theo tên bài
(`Design Research`...); `/register` → `Register`; `/login` → `Login`.

## FR-WEB-05 — Ảnh tĩnh
Mọi `<img>` phải load được (naturalWidth > 0), gồm 6 ảnh homepage và ảnh từng bài.

## FR-WEB-06 — Trang Register/Login
Chưa có chức năng (hiện `This page is under construction. Please comeback later!`).
Yêu cầu: thông báo đúng + tiêu đề đúng (FR-WEB-04).

## Trace
FR-WEB-0X ↔ TC trong `tests/test-cases/index.md` ↔ Bug trong `tests/bugs-catalog.js`.
