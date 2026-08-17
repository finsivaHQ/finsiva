const fs = require('fs');
const f = 'src/countries/united-states/data.ts';
const content = fs.readFileSync(f, 'utf8');
const slugs = content.match(/slug: "([^"]+)"/g) || [];
const uniqueSlugs = [...new Set(slugs.map(s => s.replace('slug: ', '').replace(/"|\s/g, '')))];
console.log('Total slugs found:', uniqueSlugs.length);
uniqueSlugs.forEach(s => console.log('  ' + s));
