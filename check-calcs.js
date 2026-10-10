const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function getCalculatorUrls() {
  const urls = [];
  const content = fs.readFileSync(path.join(__dirname, 'src', 'config', 'taxRules.ts'), 'utf-8');
  
  // Extract id, countrySlug, categorySlug, calculatorSlug
  const regex = /countrySlug:\s*"([^"]+)",\s*categorySlug:\s*"([^"]+)",\s*calculatorSlug:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(`http://localhost:4321/countries/${match[1]}/${match[2]}/${match[3]}/`);
  }
  return [...new Set(urls)]; // unique
}

(async () => {
  const urls = await getCalculatorUrls();
  console.log(`Found ${urls.length} calculators to test.`);
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let errors = 0;

  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 5000 });
      
      // Fill all number inputs with 50000
      const numberInputs = await page.$$('input[type="number"]');
      for (const input of numberInputs) {
        await input.fill('50000');
      }

      // Click calculate
      await page.click('#calc-btn');
      
      // Wait a tiny bit for JS to execute
      await page.waitForTimeout(100);

      // Check results
      const resultTexts = await page.$$eval('[id^="result-"]', els => els.map(el => el.textContent.trim()));
      
      let hasError = false;
      for (const text of resultTexts) {
        if (text.includes('NaN') || text === '') {
          hasError = true;
          break;
        }
      }

      if (hasError) {
        console.error(`❌ FAILED: ${url} (NaN or empty result) - Results: ${resultTexts.join(', ')}`);
        errors++;
      } else {
        // Also check for exactly "0" or "₹0" for tax fields just to be safe, but 0 might be valid for 50000 income in some places.
        console.log(`✅ PASSED: ${url}`);
      }
    } catch (err) {
      console.error(`❌ ERROR on ${url}: ${err.message}`);
      errors++;
    }
  }

  await browser.close();
  console.log(`\nValidation complete. ${errors} errors found.`);
  process.exit(errors > 0 ? 1 : 0);
})();
