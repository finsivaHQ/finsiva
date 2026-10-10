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
  
  // Fix href={`/countries/${country.slug}`} -> href={`/countries/${country.slug}/`}
  // Fix href: `/countries/${country.slug}` -> href: `/countries/${country.slug}/`
  
  // Regex to match `/countries/some-vars` right before the closing backtick or quote
  content = content.replace(/(\/countries\/[^`"]+?)(?<!\/)([`"])/g, '$1/$2');
  
  if (originalContent !== content) {
    fs.writeFileSync(file, content);
    console.log("Fixed dynamic: " + file);
  }
});
