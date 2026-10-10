const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/<\/section>\n\n    <\/section>/g, '</section>');
fs.writeFileSync(path, content);
console.log("Fixed double section!");
