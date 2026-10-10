const fs = require('fs');
const file = 'src/pages/countries/[country]/[category]/[calculator].astro';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the header section
content = content.replace(
  /<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">\s*<div>\s*<h1 class="text-4xl font-bold text-ink dark:text-on-primary" data-i18n=\{calculator.name\}>\{calculator.name\}<\/h1>\s*<p class="mt-2 text-lg text-body dark:text-muted" data-i18n=\{calculator.description\}>\{calculator.description\}<\/p>\s*<\/div>\s*<\/div>/,
  `<div class="relative overflow-hidden rounded-2xl bg-canvas p-8 sm:p-12 mb-8 border border-hairline shadow-sm dark:bg-surface dark:border-overlay-lighter">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-50 blur-[100px] dark:bg-primary/10"></div>
    <div class="relative z-10 max-w-3xl">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-ink dark:text-on-primary" data-i18n={calculator.name}>{calculator.name}</h1>
      <p class="mt-4 text-lg text-body dark:text-muted" data-i18n={calculator.description}>{calculator.description}</p>
    </div>
  </div>`
);

// 2. Wrap the calculator form and results in a grid
// Currently:
// <div class="mx-auto max-w-4xl">
//   <div class="rounded-xl border border-hairline bg-canvas p-4 sm:p-8 dark:border-overlay-lighter dark:bg-surface">
//     <div class="mb-2">
//       <h2 class="text-2xl font-semibold text-ink mb-6 dark:text-on-primary" data-i18n="calculator.input_heading">Calculator Input</h2>

content = content.replace(
  /<div class="mx-auto max-w-4xl">\s*<div class="rounded-xl border border-hairline bg-canvas p-4 sm:p-8 dark:border-overlay-lighter dark:bg-surface">\s*<div class="mb-2">\s*<h2 class="text-2xl font-semibold text-ink mb-6 dark:text-on-primary" data-i18n="calculator.input_heading">Calculator Input<\/h2>/,
  `<div class="mx-auto max-w-7xl">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <div class="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
      <div class="rounded-2xl border border-hairline bg-canvas p-6 shadow-sm dark:border-overlay-lighter dark:bg-surface/50 backdrop-blur-sm">
        <h2 class="text-xl font-bold text-ink mb-6 flex items-center gap-2 dark:text-on-primary" data-i18n="calculator.input_heading">
          <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          Calculator Input
        </h2>`
);

// 3. Move calc-error inside the form column, before the result wrapper starts
content = content.replace(
  /<\/form>\s*\}\)\s*:\s*\(\s*<form id="calc-form" class="space-y-6" onsubmit="event.preventDefault\(\)">\s*<p class="text-body dark:text-muted" data-i18n="calculator.no_inputs">No calculator inputs are configured for this page. Please select a different calculator.<\/p>\s*<\/form>\s*\)\}\s*<div id="result-wrapper"/,
  `</form>
      )}
      <div id="calc-error" class="mt-4 hidden" role="alert">
         <p class="text-sm text-danger mt-4" data-i18n="calculator.error">Please enter valid values for all required fields</p>
      </div>
      </div>
    </div>
    
    <div class="lg:col-span-7 xl:col-span-8">
      <div id="result-wrapper"`
);

// 4. Update the empty state UI
content = content.replace(
  /<div id="result-empty" class="empty-state rounded-xl border-2 border-dashed border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface">/,
  `<div id="result-empty" class="empty-state flex flex-col justify-center min-h-[400px] rounded-2xl border-2 border-dashed border-hairline bg-canvas-soft/50 py-16 px-6 dark:border-overlay-lighter dark:bg-surface/30">`
);

// 5. Update the result card wrapper styling
content = content.replace(
  /<div class="card dark:border-overlay-lighter dark:bg-surface">/,
  `<div class="rounded-2xl border border-hairline bg-canvas p-6 shadow-sm dark:border-overlay-lighter dark:bg-surface">`
);

// 6. Make the grid tighter
content = content.replace(
  /<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">/g,
  `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">`
);

// 7. Remove the old calc-error and close the new grid correctly
content = content.replace(
  /<\/div>\s*<\/div>\s*<div id="calc-error" class="mt-4 hidden" role="alert">\s*<p class="text-sm text-danger mt-4" data-i18n="calculator.error">Please enter valid values for all required fields<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<section id="calc-overview"/,
  `</div>
      </div>
    </div>
  </div>
</div>
  <section id="calc-overview"`
);

fs.writeFileSync(file, content);
console.log('Patched layout!');
