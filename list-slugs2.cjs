const fs = require('fs');
const f = 'src/countries/united-states/data.ts';
let content = fs.readFileSync(f, 'utf8');
const matches = content.match(/slug: "([^"]+)"/g) || [];
const uniqueSlugs = [...new Set(matches.map(s => s.replace('slug: ', '').replace(/"|\s/g, '')))];
console.log('Total slugs found:', uniqueSlugs.length);
uniqueSlugs.forEach(s => console.log('  ' + s));
