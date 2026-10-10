const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// The block we want to extract
const blockToExtractRegex = /<div class="lg:col-span-2 mt-4">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="mt-12 rounded-xl border border-hairline/g;

const match = blockToExtractRegex.exec(content);
if (match) {
  const extractedItems = match[1];
  
  // Replace the original block to just close the grid, leaving the disclaimer in the trust section
  content = content.replace(blockToExtractRegex, '</div>\n        <div class="mt-12 rounded-xl border border-hairline');
  
  // Create a new section for the extracted items
  const newSection = `
    </section>
    
    <section id="our-approach" class="py-16 relative z-10" aria-labelledby="approach-heading">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="approach-heading" class="text-3xl font-semibold text-ink mb-12 text-center dark:text-on-primary">Our Approach</h2>
        <div class="space-y-12">
          ${extractedItems.replace(/mt-8 mb-8/g, 'mt-4').replace(/flex gap-4/g, 'flex flex-col sm:flex-row gap-6 items-start')}
        </div>
      </div>
  `;
  
  // Insert the new section right after the end of why-trust-finsiva
  const trustSectionEndRegex = /<\/div>\s*<\/section>\s*<section id="tax-planning-tips"/;
  content = content.replace(trustSectionEndRegex, `</div>\n    </section>\n${newSection}\n    <section id="tax-planning-tips"`);
  
  fs.writeFileSync(path, content);
  console.log("Successfully separated the sections.");
} else {
  console.log("Could not find the target block.");
}
