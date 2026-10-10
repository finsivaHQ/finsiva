const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match href={`/something`} where it doesn't end in /
      let updated = content.replace(/href=\{`(\/[^`#?]+?[^\/])`\}/g, "href={`$1/`}");
      
      if (content !== updated) {
        console.log("Updated", fullPath);
        fs.writeFileSync(fullPath, updated, 'utf8');
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
