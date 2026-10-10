const fs = require('fs');
const path = './src/components/Header.astro';
let content = fs.readFileSync(path, 'utf8');

const compareDropdownHtml = `
          <div class="relative group">
            <button id="compare-picker-btn" class="nav-link rounded-pill px-3 py-2 text-sm font-medium transition inline-flex items-center gap-1 text-ink dark:text-on-primary" aria-expanded="false" aria-haspopup="true">
              <span>Compare</span>
              <svg class="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="compare-picker-menu" class="hidden group-hover:block absolute left-0 z-50 mt-1 w-64 origin-top-left rounded-xl border border-hairline bg-canvas/95 backdrop-blur-md p-2 shadow-xl dark:border-overlay-lighter dark:bg-surface/95 transition-all duration-200">
              <div class="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-muted dark:text-muted mb-1">Popular Comparisons</div>
              <div class="grid grid-cols-1 gap-1">
                <a href="/compare/uk-vs-us/" class="block px-3 py-2 rounded-lg hover:bg-canvas-soft dark:hover:bg-overlay-light transition-colors">
                  <div class="text-sm font-semibold text-ink dark:text-on-primary">UK vs US</div>
                  <div class="text-xs text-muted mt-0.5">Compare income tax and rates</div>
                </a>
                <a href="/compare/singapore-vs-hong-kong/" class="block px-3 py-2 rounded-lg hover:bg-canvas-soft dark:hover:bg-overlay-light transition-colors">
                  <div class="text-sm font-semibold text-ink dark:text-on-primary">Singapore vs Hong Kong</div>
                  <div class="text-xs text-muted mt-0.5">Compare Asian financial hubs</div>
                </a>
                <a href="/compare/india-vs-us/" class="block px-3 py-2 rounded-lg hover:bg-canvas-soft dark:hover:bg-overlay-light transition-colors">
                  <div class="text-sm font-semibold text-ink dark:text-on-primary">India vs US</div>
                  <div class="text-xs text-muted mt-0.5">NRI and expat tax differences</div>
                </a>
              </div>
              <div class="mt-1 pt-1 border-t border-hairline dark:border-overlay-light text-center">
                <a href="/compare/" class="block py-1 text-xs font-semibold text-primary hover:underline">Compare All Countries →</a>
              </div>
            </div>
          </div>
`;

// Insert the new dropdown right before the Resources dropdown
const targetAnchor = '<div class="relative group">\n            <button id="learn-picker-btn"';
content = content.replace(targetAnchor, compareDropdownHtml + '\n          ' + targetAnchor);

fs.writeFileSync(path, content);
console.log("Successfully added Compare dropdown to Desktop header.");
