const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests/test-scripts',
  timeout: 60000,
  workers: 1,
  use: { headless: true },
  reporter: 'list',
});
