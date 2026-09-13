const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const sitemapFiles = ['sitemap.xml', 'sitemap-0.xml'];

// Non-slash canonical primary URLs according to GSC evidence constraints
const nonSlashPrimaryUrls = [
  'https://finsiva.com/countries/malaysia/rental-income/rental-income-calculator',
  'https://finsiva.com/countries/hong-kong/salaries-tax/hk-net-salary-calculator'
];

sitemapFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    nonSlashPrimaryUrls.forEach(targetUrl => {
      const slashUrl = `${targetUrl}/`;
      content = content.replaceAll(`<loc>${slashUrl}</loc>`, `<loc>${targetUrl}</loc>`);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Normalized non-slash primary URLs in ${file}`);
  }
});
