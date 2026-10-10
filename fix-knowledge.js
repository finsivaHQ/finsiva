const fs = require('fs');
const path = './src/pages/knowledge/index.astro';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the stock image
const imgRegex = /\s*<img src="https:\/\/images\.unsplash\.com[^>]*>\s*/;
content = content.replace(imgRegex, '\n\n');

// 2. Extract "Why Tax Education Matters" section
const educationRegex = /(\s*<section[^>]*aria-labelledby="intro-heading"[\s\S]*?<\/section>\s*)/;
const eduMatch = content.match(educationRegex);
const eduBlock = eduMatch ? eduMatch[1] : '';
content = content.replace(educationRegex, '');

// 3. Insert it back at the bottom, just before the closing </article>
const endRegex = /(<\/article>)/;
content = content.replace(endRegex, eduBlock + '$1');

fs.writeFileSync(path, content);
console.log('Successfully reordered knowledge/index.astro');
