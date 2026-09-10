// Tài nguyên tĩnh: mọi ảnh phải tải được, favicon phải trả HTTP 200.
// TC-IMG-001/002 fail trên CẢ 2 build (fix sót /images/misson.jpeg);
// TC-IMG-003 fail trên Build 1 (favicon.jpeg 404).
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

async function brokenImages(page) {
  await page.waitForFunction(() => [...document.images].every((img) => img.complete));
  return page.evaluate(() =>
    [...document.images].filter((img) => img.naturalWidth === 0).map((img) => img.getAttribute('src')),
  );
}

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-IMG-001 mọi ảnh trang chủ đều tải được`, async ({ page }) => {
      await page.goto(`${build.base}/`);
      expect(await brokenImages(page)).toEqual([]);
    });

    test(`[${build.name}] TC-IMG-002 mọi ảnh trang bài 4 đều tải được`, async ({ page }) => {
      await page.goto(`${build.base}/articles/4`);
      expect(await brokenImages(page)).toEqual([]);
    });

    test(`[${build.name}] TC-IMG-003 favicon trả HTTP 200`, async ({ page, request }) => {
      await page.goto(`${build.base}/`);
      const href = await page.getAttribute('link[rel="shortcut icon"]', 'href');
      expect(href).toBeTruthy();
      const res = await request.get(`${build.base}${href}`);
      expect(res.status()).toBe(200);
    });
  });
}
