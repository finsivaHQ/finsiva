const fs = require('fs');

// 1. Update Header.astro
let headerPath = './src/components/Header.astro';
let header = fs.readFileSync(headerPath, 'utf8');

// Replace Desktop 'Learn' Dropdown
let desktopRegex = /<span>Learn<\/span>([\s\S]*?)<div class="grid grid-cols-1 gap-1">([\s\S]*?)<\/div>/;
let newDesktop = `<span>Resources</span>$1<div class="grid grid-cols-1 gap-1">
                <a href="/knowledge/" class="block px-3 py-2 rounded-lg hover:bg-canvas-soft dark:hover:bg-overlay-light transition-colors">
                  <div class="text-sm font-semibold text-ink dark:text-on-primary">Tax Knowledge Center</div>
                  <div class="text-xs text-muted mt-0.5">Comprehensive tax concept overviews</div>
                </a>
                <a href="/countries/" class="block px-3 py-2 rounded-lg hover:bg-canvas-soft dark:hover:bg-overlay-light transition-colors">
                  <div class="text-sm font-semibold text-ink dark:text-on-primary">All Country Guides</div>
                  <div class="text-xs text-muted mt-0.5">Tax slabs and rules for 10+ countries</div>
                </a>
                <a href="/knowledge/glossary/" class="block px-3 py-2 rounded-lg hover:bg-canvas-soft dark:hover:bg-overlay-light transition-colors">
                  <div class="text-sm font-semibold text-ink dark:text-on-primary">Tax Glossary</div>
                  <div class="text-xs text-muted mt-0.5">Dictionary of common tax terms</div>
                </a>
              </div>`;
header = header.replace(desktopRegex, newDesktop);

// Replace Mobile 'Learn' Section
let mobileRegex = /<div class="text-xs font-bold text-muted uppercase tracking-wider mb-2">Learn<\/div>([\s\S]*?)<\/div>/;
let newMobile = `<div class="text-xs font-bold text-muted uppercase tracking-wider mb-2">Tax Resources</div>
        <a href="/knowledge/" class="mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium text-ink dark:text-on-primary hover:bg-canvas-soft transition-colors mb-1">Tax Knowledge Center</a>
        <a href="/countries/" class="mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium text-ink dark:text-on-primary hover:bg-canvas-soft transition-colors mb-1">All Country Guides</a>
        <a href="/knowledge/glossary/" class="mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium text-ink dark:text-on-primary hover:bg-canvas-soft transition-colors">Tax Glossary</a>
      </div>`;
header = header.replace(mobileRegex, newMobile);

fs.writeFileSync(headerPath, header);

// 2. Update Layout.astro to remove 'Tax Resources' from footer
let layoutPath = './src/layouts/Layout.astro';
let layout = fs.readFileSync(layoutPath, 'utf8');

// The Tax Resources section in the footer is:
// <div class="space-y-4">
//   <h3 class="!text-xs font-bold uppercase tracking-[0.15em] text-ink dark:text-on-primary mb-1">Tax Resources</h3>
//   ...
// </div>
let footerRegex = /<div class="space-y-4">\s*<h3 class="!text-xs font-bold uppercase tracking-\[0\.15em\] text-ink dark:text-on-primary mb-1">Tax Resources<\/h3>\s*<ul class="space-y-3">[\s\S]*?<\/ul>\s*<\/div>/;
layout = layout.replace(footerRegex, ''); // Remove it entirely

fs.writeFileSync(layoutPath, layout);

console.log('Updated Header and Layout.');
