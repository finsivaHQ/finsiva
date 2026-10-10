const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

const faqSectionRegex = /<section id="faq"[^>]*>\s*<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">/;
content = content.replace(faqSectionRegex, '<section id="faq" class="py-16 relative z-10" aria-labelledby="faq-heading">\n      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">');

fs.writeFileSync(path, content);
console.log("FAQ section width reduced.");
