const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests/test-scripts',
  timeout: 60000,
  workers: 1,
  expect: { timeout: 5000 },
  reporter: 'list',
  retries: 0,
  use: { headless: true },
});
