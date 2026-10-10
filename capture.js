const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4322');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshot_updated.png', fullPage: true });
  await browser.close();
})();
