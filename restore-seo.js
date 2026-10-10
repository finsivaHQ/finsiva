const fs = require('fs');

const oldContent = fs.readFileSync('old_index.astro', 'utf8');
const newContentPath = 'src/pages/index.astro';
let newContent = fs.readFileSync(newContentPath, 'utf8');

// Extract everything from <section id="why-millions-use" up to the end of the <section id="faq">
const startIndex = oldContent.indexOf('<section id="why-millions-use"');
const endMarker = '<section id="conclusion"';
const endIndex = oldContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const seoBlocks = oldContent.substring(startIndex, endIndex);
  
  // Wrap them in a div so they are visually separated but present
  const injection = `
    <!-- RESTORED SEO CONTENT -->
    <div class="mt-24 pt-16 border-t border-hairline dark:border-overlay-lighter">
      ${seoBlocks}
    </div>
  `;
  
  // Insert before the last <section class="py-20 relative z-10" aria-labelledby="conclusion-heading"> or </article>
  const insertTarget = '<!-- 5. FINAL CTA -->';
  const insertIndex = newContent.indexOf(insertTarget);
  
  if (insertIndex !== -1) {
    newContent = newContent.slice(0, insertIndex) + injection + '\n    ' + newContent.slice(insertIndex);
    fs.writeFileSync(newContentPath, newContent);
    console.log("Restored SEO sections into index.astro.");
  } else {
    console.log("Could not find insert target.");
  }
} else {
  console.log("Could not extract blocks from old_index.astro");
}
