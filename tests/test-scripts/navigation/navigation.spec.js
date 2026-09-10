// Điều hướng: assert hành vi ĐÚNG trên cả 2 build.
// TC-NAV-002 fail trên Build 1 chính là bằng chứng bug (menu Home active sai).
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-NAV-001 menu đủ 3 link đúng href`, async ({ page }) => {
      await page.goto(`${build.base}/`);
      await expect(page.locator('nav a', { hasText: 'Home' }).first()).toHaveAttribute('href', '/');
      await expect(page.locator('nav a', { hasText: 'Register' }).first()).toHaveAttribute('href', '/register');
      await expect(page.locator('nav a', { hasText: 'Login' }).first()).toHaveAttribute('href', '/login');
    });

    test(`[${build.name}] TC-NAV-002 Home không active khi đang ở trang bài`, async ({ page }) => {
      await page.goto(`${build.base}/articles/1`);
      await expect(page.locator('#mainMenu li', { hasText: 'Home' }).first()).not.toHaveClass(/active/);
    });
  });
}
