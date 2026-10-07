const fs = require('fs');
const path = require('path');

const dirsToCheck = ['src/pages/blogs', 'src/pages/knowledge', 'src/pages/countries'];

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.astro')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('class="prose') || content.includes("class='prose")) {
                if (!content.includes('dark:prose-invert')) {
                    // Inject dark mode classes into the prose element
                    content = content.replace(/class="prose([^"]*)"/g, 'class="prose$1 dark:prose-invert dark:text-body"');
                    content = content.replace(/class='prose([^']*)'/g, 'class=\'prose$1 dark:prose-invert dark:text-body\'');
                    fs.writeFileSync(fullPath, content);
                    console.log(`Fixed prose in: ${fullPath}`);
                }
            }
        }
    }
}

dirsToCheck.forEach(walk);
console.log('Prose classes fixed.');
