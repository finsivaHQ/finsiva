const fs = require('fs');
const path = require('path');

const dirsToCheck = ['src/pages/blogs', 'src/pages/knowledge'];
const allFiles = [];

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.astro')) {
            allFiles.push(fullPath);
        }
    }
}

dirsToCheck.forEach(walk);

let shortFiles = [];
let potentialDuplicates = new Set();
const titleMap = new Map();
let brokenDarkTheme = 0;

for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check word count (rough estimate by stripping HTML tags)
    const textOnly = content.replace(/<[^>]*>?/gm, '').replace(/---[\s\S]*?---/, '');
    const wordCount = textOnly.split(/\s+/).filter(w => w.length > 0).length;
    
    if (wordCount < 1000 && !file.includes('category') && !file.includes('glossary')) {
        shortFiles.push({ file, wordCount });
    }

    // Check titles for duplicates
    const titleMatch = content.match(/title\s*=\s*["']([^"']+)["']/);
    if (titleMatch) {
        const title = titleMatch[1].toLowerCase().trim();
        if (titleMap.has(title)) {
            potentialDuplicates.add(file);
            potentialDuplicates.add(titleMap.get(title));
        } else {
            titleMap.set(title, file);
        }
    }

    // Check dark mode
    if (content.includes('class="prose') && !content.includes('dark:prose-invert') && !content.includes('dark:prose-p:')) {
        brokenDarkTheme++;
    }
}

console.log("Total Files:", allFiles.length);
console.log("Short Files (< 1000 words):", shortFiles.length);
console.log("Short Files list:");
shortFiles.forEach(f => console.log(` - ${f.file} (${f.wordCount} words)`));
console.log("Potential Duplicates:", Array.from(potentialDuplicates));
console.log("Files missing dark mode text prose settings:", brokenDarkTheme);

