const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.astro')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Find all href="/countries/... " and add trailing slash if missing
  // Careful not to match things with query params or hash if any, or .pdf etc.
  // We'll just look for /countries/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]+"
  
  const regex = /href="(\/countries\/[a-zA-Z0-9_/-]+[a-zA-Z0-9_-])"/g;
  content = content.replace(regex, 'href="$1/"');
  
  if (originalContent !== content) {
    fs.writeFileSync(file, content);
    console.log("Fixed: " + file);
  }
});
