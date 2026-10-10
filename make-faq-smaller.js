const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the faq-support image
const faqImgRegex = /<img\s+src="\/images\/faq-support\.jpg"[\s\S]*?\/>\s*/;
content = content.replace(faqImgRegex, '');

// 2. Reduce the padding on all FAQ details tags from p-5 to p-4
content = content.replace(/<details class="(.*?) p-5 (.*?)"/g, '<details class="$1 p-4 $2"');

// 3. Reduce the text size of the questions from text-lg to text-base
content = content.replace(/<h3 class="text-lg font-semibold/g, '<h3 class="text-base font-semibold');

fs.writeFileSync(path, content);
console.log("Successfully made FAQ smaller.");
