// Xử lý lỗi: id không tồn tại KHÔNG được 500; route lạ phải 404 có trang lỗi.
// TC-ERR-001 fail trên Build 1 (/articles/999 → 500 Internal Server Error!).
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-ERR-001 id không tồn tại báo không tìm thấy, không 500`, async ({ request }) => {
      const res = await request.get(`${build.base}/articles/999`);
      expect(res.status()).toBeLessThan(500);
      expect(await res.text()).toMatch(/not found/i);
    });

    test(`[${build.name}] TC-ERR-002 route lạ trả 404 có trang lỗi`, async ({ request }) => {
      const res = await request.get(`${build.base}/khong-ton-tai`);
      expect(res.status()).toBe(404);
      expect(await res.text()).toMatch(/not found/i);
    });
  });
}
