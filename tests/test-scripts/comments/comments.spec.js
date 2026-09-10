// Comment bài viết: assert hành vi ĐÚNG (oracle), không assert theo lỗi.
// TC-CMT-003/004 fail trên CẢ 2 build (thiếu validate phía server: comment
// rỗng / 300 ký tự vẫn bị lưu) — fail chính là bằng chứng bug.
// TỰ DỌN: mọi comment do test tạo ra (kể cả SUT lỡ lưu ở case 003/004) đều bị
// xóa trong finally bằng POST <base>/comments/<id> với body articleId=<n>.
const { test, expect } = require('@playwright/test');
const { BUILDS } = require('../_shared/builds');

const ARTICLE = 1;
const SCAN_PAGES = 10;

function marker(suffix) {
  return `QA-24810015-${Date.now()}-${suffix}`;
}

// Chụp nhanh danh sách comment: id (data-id) + số <li> trên các trang.
async function snapshot(request, base) {
  const ids = new Set();
  let lis = 0;
  for (let p = 1; p <= SCAN_PAGES; p++) {
    const res = await request.get(`${base}/articles/${ARTICLE}?page=${p}`);
    const html = await res.text();
    const section = (html.split('list-unstyled')[1] || '').split('pagination')[0];
    lis += (section.match(/<li[ >]/g) || []).length;
    for (const m of section.matchAll(/data-id="(\d+)"/g)) ids.add(m[1]);
  }
  return { ids, lis };
}

// Tìm id của các comment chứa marker trên mọi trang.
async function idsWithMarker(request, base, mark) {
  const ids = [];
  for (let p = 1; p <= SCAN_PAGES; p++) {
    const res = await request.get(`${base}/articles/${ARTICLE}?page=${p}`);
    const html = await res.text();
    for (const block of html.split('<li')) {
      if (block.includes(mark)) {
        const m = block.match(/data-id="(\d+)"/);
        if (m && !ids.includes(m[1])) ids.push(m[1]);
      }
    }
  }
  return ids;
}

async function deleteComment(request, base, id) {
  await request.post(`${base}/comments/${id}`, { form: { articleId: String(ARTICLE) } });
}

// Xóa mọi comment chứa marker (dọn rác của chính test này).
async function cleanupMarker(request, base, mark) {
  for (const id of await idsWithMarker(request, base, mark)) {
    await deleteComment(request, base, id);
  }
}

async function pageHasMarker(page, base, mark) {
  for (let p = 1; p <= SCAN_PAGES; p++) {
    await page.goto(`${base}/articles/${ARTICLE}?page=${p}`);
    if ((await page.content()).includes(mark)) return p;
  }
  return 0;
}

for (const build of BUILDS) {
  test.describe(build.name, () => {
    test(`[${build.name}] TC-CMT-001 trang bài hiển thị khung danh sách comment`, async ({ page }) => {
      await page.goto(`${build.base}/articles/${ARTICLE}`);
      await expect(page.locator('ul.list-unstyled').first()).toBeAttached();
    });

    test(`[${build.name}] TC-CMT-002 thêm comment hợp lệ qua form UI rồi hiển thị`, async ({ page, request }) => {
      const mark = marker('CMT002');
      try {
        await page.goto(`${build.base}/articles/${ARTICLE}`);
        await page.fill('form[action="/comments"] input[name="comment"]', mark);
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'load' }).catch(() => {}),
          page.click('form[action="/comments"] button[type="submit"]'),
        ]);
        expect(await pageHasMarker(page, build.base, mark)).toBeGreaterThan(0);
      } finally {
        await cleanupMarker(request, build.base, mark);
      }
    });

    test(`[${build.name}] TC-CMT-003 comment rỗng không được lưu`, async ({ request }) => {
      const before = await snapshot(request, build.base);
      await request.post(`${build.base}/comments`, { form: { comment: '', articleId: String(ARTICLE) } });
      const after = await snapshot(request, build.base);
      const created = [...after.ids].filter((id) => !before.ids.has(id));
      try {
        expect(after.lis).toBe(before.lis);
        expect(created).toEqual([]);
      } finally {
        for (const id of created) await deleteComment(request, build.base, id);
      }
    });

    test(`[${build.name}] TC-CMT-004 comment 300 ký tự không được lưu`, async ({ request }) => {
      const prefix = marker('CMT004-');
      const long = prefix + 'x'.repeat(300 - prefix.length);
      expect(long).toHaveLength(300);
      await request.post(`${build.base}/comments`, { form: { comment: long, articleId: String(ARTICLE) } });
      try {
        expect(await idsWithMarker(request, build.base, prefix)).toEqual([]);
      } finally {
        await cleanupMarker(request, build.base, prefix);
      }
    });

    test(`[${build.name}] TC-CMT-005 nút xóa tồn tại và xóa được comment`, async ({ page, request }) => {
      const mark = marker('CMT005');
      await request.post(`${build.base}/comments`, { form: { comment: mark, articleId: String(ARTICLE) } });
      try {
        const foundPage = await pageHasMarker(page, build.base, mark);
        expect(foundPage).toBeGreaterThan(0);
        await page.goto(`${build.base}/articles/${ARTICLE}?page=${foundPage}`);
        const btn = page.locator('li:has-text("' + mark + '") button.delete-comment').first();
        await expect(btn).toBeVisible();
        const id = await btn.getAttribute('data-id');
        expect(id).toBeTruthy();
        await deleteComment(request, build.base, id);
        expect(await pageHasMarker(page, build.base, mark)).toBe(0);
      } finally {
        await cleanupMarker(request, build.base, mark);
      }
    });
  });
}
