const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, exts, fileList);
    } else {
      if (exts.includes(path.extname(file))) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

const htmlFiles = getAllFiles('dist', ['.html']);
console.log('Total HTML files scanned:', htmlFiles.length);

let brokenLinks = [];
let internalLinkRegex = /href=["'](\/[^"'#?]*)/g;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = internalLinkRegex.exec(content)) !== null) {
    let link = match[1];
    if (link.startsWith('//') || link.startsWith('/api/') || link === '') continue;

    // Check if target exists
    let clean = link.replace(/\/$/, '');
    let check1 = path.join('dist', link, 'index.html');
    let check2 = path.join('dist', clean + '.html');
    let check3 = path.join('dist', link);

    if (!fs.existsSync(check1) && !fs.existsSync(check2) && !fs.existsSync(check3)) {
      brokenLinks.push({ file: path.relative('dist', file), link });
    }
  }
}

if (brokenLinks.length > 0) {
  console.error('BROKEN LINKS FOUND:', brokenLinks.length);
  console.log(brokenLinks.slice(0, 20));
  process.exit(1);
} else {
  console.log('✅ ZERO BROKEN LINKS FOUND! All internal links resolve cleanly.');
}
