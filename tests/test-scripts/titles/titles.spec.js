// Tiêu đề trang: assert hành vi ĐÚNG (oracle).
// TC-TITLE-002/003 fail trên Build 1 chính là bằng chứng bug (mọi trang con đều "NodeJS Website").
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
    test(`[${build.name}] TC-TITLE-001 title trang chủ là NodeJS Website`, async ({ page }) => {
      await page.goto(`${build.base}/`);
      await expect(page).toHaveTitle('NodeJS Website');
    });

    test(`[${build.name}] TC-TITLE-002 title 5 trang bài đúng tên bài`, async ({ page }) => {
      for (let n = 1; n <= 5; n++) {
        await page.goto(`${build.base}/articles/${n}`);
        await expect(page).toHaveTitle(TITLES[n]);
      }
    });

    test(`[${build.name}] TC-TITLE-003 title Register và Login`, async ({ page }) => {
      await page.goto(`${build.base}/register`);
      await expect(page).toHaveTitle('Register');
      await page.goto(`${build.base}/login`);
      await expect(page).toHaveTitle('Login');
    });
  });
}
