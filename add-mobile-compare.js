const fs = require('fs');
const path = './src/components/Header.astro';
let content = fs.readFileSync(path, 'utf8');

const compareMobileHtml = `      <div class="px-4 py-2">
        <div class="text-xs font-bold text-muted uppercase tracking-wider mb-2">Compare Tax</div>
        <a href="/compare/uk-vs-us/" class="mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium text-ink dark:text-on-primary hover:bg-canvas-soft transition-colors mb-1">UK vs US</a>
        <a href="/compare/singapore-vs-hong-kong/" class="mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium text-ink dark:text-on-primary hover:bg-canvas-soft transition-colors mb-1">Singapore vs Hong Kong</a>
        <a href="/compare/" class="mobile-nav-link block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-canvas-soft transition-colors">Compare All Countries &rarr;</a>
      </div>`;

content = content.replace('<div class="px-4 py-2">', compareMobileHtml + '\n      <div class="px-4 py-2">');

fs.writeFileSync(path, content);
console.log("Added Compare to Mobile Nav");
