const fs = require('fs');
const path = './src/pages/countries/index.astro';
let content = fs.readFileSync(path, 'utf8');

const oldHeader = `<div class="mb-8">
     <h1 class="text-4xl font-bold text-ink dark:text-on-primary"><span data-i18n="countries.heading">Countries</span></h1>
     <p class="mt-2 text-lg text-body dark:text-muted" data-i18n="countries.comprehensive_tax_info" data-i18n-vars={JSON.stringify({ count: countries.length })}>
       Explore comprehensive tax information for {countries.length} countries.
     </p>
   </div>`;

const newHeader = `<section class="relative overflow-hidden pt-16 pb-20 border-b border-hairline dark:border-overlay-lighter mb-8" aria-labelledby="countries-heading">
  <!-- Subtle Grid Pattern -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  <!-- Ambient Glowing Orbs -->
  <div class="pointer-events-none absolute inset-0 flex justify-center" aria-hidden="true">
    <div class="absolute top-[-20%] left-[15%] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]"></div>
    <div class="absolute top-[10%] right-[15%] h-[250px] w-[250px] rounded-full bg-indigo-500/20 blur-[100px]"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <span class="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-light mb-6 shadow-sm backdrop-blur-md">Global Tax Coverage</span>
    <h1 id="countries-heading" class="text-4xl font-extrabold tracking-tight text-ink dark:text-on-primary sm:text-5xl lg:text-6xl mb-6">
      <span data-i18n="countries.heading">Countries</span>
    </h1>
    <p class="text-lg text-body dark:text-muted leading-relaxed max-w-2xl mx-auto" data-i18n="countries.comprehensive_tax_info" data-i18n-vars={JSON.stringify({ count: countries.length })}>
      Explore comprehensive tax information for {countries.length} countries.
    </p>
  </div>
</section>`;

if (content.includes(oldHeader)) {
  content = content.replace(oldHeader, newHeader);
  fs.writeFileSync(path, content);
  console.log("Successfully updated header in countries/index.astro");
} else {
  console.log("Could not find the exact old header block in countries/index.astro");
}
