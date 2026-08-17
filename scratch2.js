const fs = require('fs');
const path = require('path');
const countriesDir = 'src/countries';
const countries = fs.readdirSync(countriesDir, {withFileTypes: true}).filter(d => d.isDirectory());
const results = [];
for (const country of countries) {
  const dataPath = path.join(countriesDir, country.name, 'data.ts');
  if (fs.existsSync(dataPath)) {
    const content = fs.readFileSync(dataPath, 'utf8');
    const cNameMatch = content.match(/name:\s*["']([^"']+)["']/);
    const cName = cNameMatch ? cNameMatch[1] : country.name;
    
    const calcs = [];
    const calcsBlockRegex = /calculators:\s*\[([\s\S]*?)\]/g;
    let blockMatch;
    while ((blockMatch = calcsBlockRegex.exec(content)) !== null) {
      const block = blockMatch[1];
      const nameMatch = block.matchAll(/name:\s*["']([^"']+)["']/g);
      for (const m of nameMatch) {
         calcs.push(m[1]);
      }
    }
    const uniqueCalcs = [...new Set(calcs)];
    results.push(`**${cName}** (${uniqueCalcs.length}): ${uniqueCalcs.join(', ')}`);
  }
}
console.log(results.join('\n'));
