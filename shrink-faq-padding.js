const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// Reduce the padding on all FAQ details tags from p-4 to px-4 py-3
content = content.replace(/<details class="(.*?) p-4 (.*?)"/g, '<details class="$1 px-4 py-3 $2"');

// Reduce the text size of the questions from text-base to text-sm
content = content.replace(/<h3 class="text-base font-semibold/g, '<h3 class="text-sm font-semibold');

fs.writeFileSync(path, content);
console.log("FAQ padding and text reduced further.");
