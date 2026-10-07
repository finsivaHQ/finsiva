const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Get all deleted .astro files from git history
const gitOutput = execSync('git log --diff-filter=D --summary', { encoding: 'utf-8' });
const deletedFiles = gitOutput.split('\n')
  .filter(line => line.includes('delete mode') && line.includes('.astro') && line.includes('src/pages/'))
  .map(line => {
    // extract path after 'delete mode ... '
    const match = line.match(/src\/pages\/(.+)\.astro/);
    if (match) return `/${match[1]}/`.replace(/\/index\/$/, '/');
    return null;
  })
  .filter(Boolean);

// Unique deleted URLs
const deletedPages = [...new Set(deletedFiles)];

// 2. Read existing redirects
let existingRedirectsRaw = fs.readFileSync('public/_redirects', 'utf8');
if (existingRedirectsRaw.includes('# Auto-generated redirects')) {
  existingRedirectsRaw = existingRedirectsRaw.split('# Auto-generated redirects')[0];
  fs.writeFileSync('public/_redirects', existingRedirectsRaw);
}

const existingRedirectsList = existingRedirectsRaw.split('\n').filter(line => line.trim() && !line.startsWith('#')).map(line => line.split(' ')[0]);

// 3. Mapping logic (custom for personality)
function mapToAlive(url) {
  // personality types
  if (url.includes('personality-type')) return '/knowledge/';
  if (url.includes('personality-test')) return '/';
  if (url.includes('blog') || url.includes('guide')) return '/blogs/';
  if (url.includes('faq')) return '/about/';
  if (url.includes('premium') || url.includes('shop') || url.includes('profile')) return '/';
  if (url.includes('calculators')) return '/countries/'; // legacy calculators folder
  if (url.includes('malaysia')) return '/countries/malaysia/'; // explicit country
  return '/';
}

function pageExists(urlPath) {
  const cleanPath = urlPath.replace(/^\//, '').replace(/\/$/, '');
  if (cleanPath === '') return true; 
  
  // Exclude dynamic routes like [slug] because they are essentially catch-alls,
  // but if the URL is literally /blog/[slug]/ we skip it anyway.
  if (cleanPath.includes('[')) return true;

  const exactFile = path.join('src/pages', cleanPath + '.astro');
  const indexFile = path.join('src/pages', cleanPath, 'index.astro');
  
  return fs.existsSync(exactFile) || fs.existsSync(indexFile);
}

let newRedirects = '\n# Auto-generated redirects for historically deleted pages\n';
let addedCount = 0;

for (const oldUrl of deletedPages) {
  // Skip dynamic route templates that were deleted
  if (oldUrl.includes('[')) continue;

  if (!existingRedirectsList.includes(oldUrl)) {
    if (!pageExists(oldUrl)) {
      const newUrl = mapToAlive(oldUrl);
      newRedirects += `${oldUrl} ${newUrl} 301\n`;
      addedCount++;
    }
  }
}

if (addedCount > 0) {
  fs.appendFileSync('public/_redirects', newRedirects);
  console.log(`Added ${addedCount} new redirects to public/_redirects`);
} else {
  console.log('No new redirects needed.');
}
