const fs = require('fs');
const path = 'src/pages/compare/[comparison].astro';
let content = fs.readFileSync(path, 'utf8');

// Replace any URL that doesn't end with a slash (excluding quotes)
content = content.replace(/url: "([^"]+)(?<!\/)"/g, 'url: "$1/"');

fs.writeFileSync(path, content);
console.log("Fixed trailing slashes in comparison tools list!");
