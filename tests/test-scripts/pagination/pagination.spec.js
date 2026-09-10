// Phân trang comment: có số trang + trạng thái active, link Next cộng đúng số.
// Cả 3 test fail trên Build 1 (thiếu li.active; Next nối chuỗi ?page=21 / ?page=991).
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-PAG-001 phân trang có số trang và trạng thái active`, async ({ page }) => {
      await page.goto(`${build.base}/articles/1`);
      await expect(page.locator('ul.pagination li.active a').first()).toBeVisible();
    });

    test(`[${build.name}] TC-PAG-002 ở ?page=2 link Next trỏ ?page=3`, async ({ page }) => {
      await page.goto(`${build.base}/articles/1?page=2`);
      await expect(page.locator('ul.pagination a', { hasText: 'Next' }).first()).toHaveAttribute('href', '?page=3');
    });

    test(`[${build.name}] TC-PAG-003 ở ?page=99 link Next trỏ ?page=100`, async ({ page }) => {
      await page.goto(`${build.base}/articles/1?page=99`);
      await expect(page.locator('ul.pagination a', { hasText: 'Next' }).first()).toHaveAttribute('href', '?page=100');
    });
  });
}
