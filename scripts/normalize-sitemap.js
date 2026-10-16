const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const sitemapFiles = ['sitemap.xml', 'sitemap-0.xml'];

// Ensure all page URLs in sitemap have canonical trailing slashes
sitemapFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Ensure standard canonical trailing slashes for directory pages
    content = content.replace(/<loc>(https:\/\/finsiva\.com\/[^<]+?)(?<!\/|\.xml|\.png|\.jpg|\.svg)<\/loc>/g, '<loc>$1/</loc>');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Normalized canonical trailing slashes in ${file}`);
  }
});
