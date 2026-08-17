const fs = require('fs');
const path = require('path');

const countriesDir = 'src/countries';
const countries = fs.readdirSync(countriesDir, {withFileTypes: true}).filter(d => d.isDirectory());

const results = [];
for (const country of countries) {
  const dataPath = path.join(countriesDir, country.name, 'data.ts');
  if (fs.existsSync(dataPath)) {
    const content = fs.readFileSync(dataPath, 'utf8');
    const countryMatch = content.match(/name:\s*["']([^"']+)["']/);
    const cName = countryMatch ? countryMatch[1] : country.name;
    
    // find all calculators
    // The data structure likely has categories -> calculators -> title/name
    // Let's just regex for `title:` or `name:` that are likely calculators.
    // Better way: regex for `calculators: \[` and parse the titles inside.
    const calcs = [];
    const calcMatches = content.matchAll(/title:\s*["']([^"']+)["']/g);
    for (const match of calcMatches) {
        calcs.push(match[1]);
    }
    // But title is also used for categories. Let's filter out known category titles or just list all titles.
    results.push(`${cName} (${calcs.length}): ${calcs.join(', ')}`);
  }
}
console.log(results.join('\n'));
