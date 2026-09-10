// Bài viết: trang chủ liệt kê đủ 5 bài, trang chi tiết chứa đúng tiêu đề.
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

const TITLES = {
  1: 'Design Research',
  2: 'Web & Mobile',
  3: 'Usability',
  4: 'Our Mission',
  5: 'Customer Support',
};

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-ART-001 trang chủ có đủ 5 link bài viết`, async ({ page }) => {
      await page.goto(`${build.base}/`);
      for (let n = 1; n <= 5; n++) {
        await expect(page.locator(`a[href="/articles/${n}"]`).first()).toBeVisible();
      }
    });

    test(`[${build.name}] TC-ART-002 trang chi tiết chứa đúng tiêu đề bài`, async ({ page }) => {
      for (let n = 1; n <= 5; n++) {
        await page.goto(`${build.base}/articles/${n}`);
        await expect(page.locator('body')).toContainText(TITLES[n]);
      }
    });
  });
}
