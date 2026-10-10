const fs = require('fs');
const path = './src/pages/knowledge/glossary/index.astro';
let content = fs.readFileSync(path, 'utf8');

// Remove the stock image
const imgRegex = /\s*<img src="https:\/\/images\.unsplash\.com[^>]*>\s*/;
content = content.replace(imgRegex, '\n\n');

fs.writeFileSync(path, content);
console.log('Successfully removed image from glossary/index.astro');
