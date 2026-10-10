const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// 1. Reduce section padding
content = content.replace(/<section class="py-20 bg-canvas-soft/g, '<section class="py-16 bg-canvas-soft');

// 2. Reduce gap between cards
content = content.replace(/<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">/g, '<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">');

// 3. Shrink card padding
content = content.replace(/rounded-2xl p-6 shadow-sm/g, 'rounded-2xl p-5 shadow-sm');

// 4. Shrink icon boxes
content = content.replace(/<div class="h-12 w-12/g, '<div class="h-10 w-10');
content = content.replace(/flex items-center justify-center mb-6">/g, 'flex items-center justify-center mb-4">');

// 5. Shrink card headings
content = content.replace(/<h3 class="text-xl font-bold text-ink dark:text-on-primary mb-2">/g, '<h3 class="text-lg font-bold text-ink dark:text-on-primary mb-1">');

// 6. Shrink descriptions and margins
content = content.replace(/<p class="text-body dark:text-muted mb-6 flex-grow">/g, '<p class="text-sm text-body dark:text-muted mb-4 flex-grow">');

// 7. Shrink the "Top Regions" divider spacing
content = content.replace(/<div class="pt-4 border-t/g, '<div class="pt-3 border-t');
content = content.replace(/block mb-3">Top Regions:<\/span>/g, 'block mb-2">Top Regions:</span>');

fs.writeFileSync(path, content);
console.log("Successfully shrunk the Popular Calculators section.");
