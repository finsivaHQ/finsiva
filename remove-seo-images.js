const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// Remove any img tags that link to unsplash
const imgRegex = /\s*<img src="https:\/\/images\.unsplash\.com[^>]*>\s*/g;
content = content.replace(imgRegex, '\n\n');

fs.writeFileSync(path, content);
console.log('Successfully removed stock images from index.astro');
