const fs = require('fs');
const path = './src/pages/countries/index.astro';
let content = fs.readFileSync(path, 'utf8');

// 1. Extract the frontmatter and opening Layout
const topRegex = /^([\s\S]*?<CountryLayout[^>]*>)/;
const topMatch = content.match(topRegex);
const top = topMatch ? topMatch[1] : '';
content = content.replace(topRegex, '');

// 2. Extract Title block
const titleRegex = /(\s*<div class="mb-8">\s*<h1 class="text-4xl[^>]*>[\s\S]*?<\/div>)/;
const titleMatch = content.match(titleRegex);
const titleBlock = titleMatch ? titleMatch[1] : '';
content = content.replace(titleRegex, '');

// 3. Remove Image entirely
const imgRegex = /\s*<img src="https:\/\/images\.unsplash\.com[^>]*>\s*/;
content = content.replace(imgRegex, '');

// 4. Extract "Why Tax Info Matters" block
const whyRegex = /(\s*<div class="mb-12">\s*<h2 class="text-2xl font-semibold[^>]*>Why Tax Information Matters<\/h2>[\s\S]*?<\/div>)/;
const whyMatch = content.match(whyRegex);
const whyBlock = whyMatch ? whyMatch[1] : '';
content = content.replace(whyRegex, '');

// 5. The rest is the search block, grid, script, and bottom SEO text.
// Let's separate the final closing tag
const endTag = '\n</CountryLayout>\n';
content = content.replace(/<\/CountryLayout>\s*$/, '');

// Now we construct the new order:
// Top -> Title -> Search + Grid + Script -> WhyBlock -> BottomSEOText -> EndTag

const newContent = `${top}
${titleBlock}

<!-- Search and Grid moved to the top -->
${content.trim()}

<!-- SEO Content moved to the bottom -->
<div class="mt-16 pt-12 border-t border-hairline dark:border-overlay-lighter">
  ${whyBlock.trim()}
</div>

${endTag}`;

fs.writeFileSync(path, newContent);
console.log('Successfully reordered countries/index.astro');
