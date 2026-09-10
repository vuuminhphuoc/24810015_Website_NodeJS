// Trang Register/Login đang bảo trì: hiển thị "under construction".
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-AUTH-001 Register báo đang bảo trì`, async ({ page }) => {
      await page.goto(`${build.base}/register`);
      await expect(page.locator('body')).toContainText('under construction');
    });

    test(`[${build.name}] TC-AUTH-002 Login báo đang bảo trì`, async ({ page }) => {
      await page.goto(`${build.base}/login`);
      await expect(page.locator('body')).toContainText('under construction');
    });
  });
}
