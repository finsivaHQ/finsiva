const fs = require('fs');
const path = './src/pages/countries/index.astro';
let content = fs.readFileSync(path, 'utf8');

const oldSection = `<section class="relative overflow-hidden pt-16 pb-20 border-b border-hairline dark:border-overlay-lighter mb-8" aria-labelledby="countries-heading">`;
const newSection = `<section class="relative overflow-hidden rounded-2xl border border-hairline dark:border-overlay-lighter bg-surface dark:bg-surface/30 px-6 py-12 sm:px-10 sm:py-16 mb-8" aria-labelledby="countries-heading">`;

if (content.includes(oldSection)) {
  content = content.replace(oldSection, newSection);
  fs.writeFileSync(path, content);
  console.log("Fixed countries/index.astro hero boxing.");
}
