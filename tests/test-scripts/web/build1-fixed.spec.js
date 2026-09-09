// Retest trên Build 1-fixed: assert hành vi ĐÚNG cho cả 11 TC.
// Kết quả thật: 9 pass; TC-IMG-001/002 FAIL vì /images/misson.jpeg vẫn vỡ
// → fix sót, BUG-WEB-002 giữ Open (regression có giá trị).
const { test, expect } = require('@playwright/test');

const BASE = 'https://nodejs1-fixed.ttbhanh.com';
const TITLES = { 1: 'Design Research', 2: 'Web & Mobile', 3: 'Usability', 4: 'Our Mission', 5: 'Customer Support' };

test('TC-NAV-001 menu đủ link đúng', async ({ page }) => {
  await page.goto(BASE + '/');
  await expect(page.locator('nav a', { hasText: 'Home' }).first()).toHaveAttribute('href', '/');
  await expect(page.locator('nav a', { hasText: 'Register' }).first()).toHaveAttribute('href', '/register');
  await expect(page.locator('nav a', { hasText: 'Login' }).first()).toHaveAttribute('href', '/login');
});

test('TC-NAV-002 Home không active ở trang bài', async ({ page }) => {
  await page.goto(BASE + '/articles/1');
  await expect(page.locator('nav li', { hasText: 'Home' }).first()).not.toHaveClass(/active/);
});

test('TC-ART-001 homepage đủ 5 bài', async ({ page }) => {
  await page.goto(BASE + '/');
  for (let n = 1; n <= 5; n++) {
    await expect(page.locator(`a[href="/articles/${n}"]`).first()).toBeVisible();
  }
});

test('TC-ART-002 chi tiết 5 bài đúng nội dung', async ({ page }) => {
  for (let n = 1; n <= 5; n++) {
    await page.goto(`${BASE}/articles/${n}`);
    await expect(page.locator('body')).toContainText(TITLES[n]);
  }
});

test('TC-TITLE-001 title homepage', async ({ page }) => {
  await page.goto(BASE + '/');
  await expect(page).toHaveTitle('NodeJS Website');
});

test('TC-TITLE-002 title 5 trang bài', async ({ page }) => {
  for (let n = 1; n <= 5; n++) {
    await page.goto(`${BASE}/articles/${n}`);
    await expect(page).toHaveTitle(TITLES[n]);
  }
});

test('TC-TITLE-003 title Register/Login', async ({ page }) => {
  await page.goto(BASE + '/register');
  await expect(page).toHaveTitle('Register');
  await page.goto(BASE + '/login');
  await expect(page).toHaveTitle('Login');
});

test('TC-IMG-001 6 ảnh homepage load được', async ({ page }) => {
  await page.goto(BASE + '/');
  const broken = await page.evaluate(() =>
    [...document.querySelectorAll('img')].filter((m) => m.naturalWidth === 0).map((m) => m.getAttribute('src')));
  expect(broken).toEqual([]);
});

test('TC-IMG-002 ảnh bài 4', async ({ page }) => {
  await page.goto(BASE + '/articles/4');
  const ok = await page.evaluate(() => {
    const m = [...document.querySelectorAll('img')].find((i) => (i.getAttribute('src') || '').includes('misson'));
    return m ? m.naturalWidth > 0 : false;
  });
  expect(ok).toBe(true);
});

test('TC-AUTH-001 Register báo bảo trì', async ({ page }) => {
  await page.goto(BASE + '/register');
  await expect(page.locator('body')).toContainText('under construction');
});

test('TC-AUTH-002 Login báo bảo trì', async ({ page }) => {
  await page.goto(BASE + '/login');
  await expect(page.locator('body')).toContainText('under construction');
});
