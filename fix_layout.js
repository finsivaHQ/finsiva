const fs = require('fs');
const filePath = 'src/layouts/Layout.astro';
let content = fs.readFileSync(filePath, 'utf8');

const oldScript = `<script is:inline>
      (function() {
        try {
          var s = localStorage.getItem('theme');
          var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (s === 'dark' || (!s && p)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();
    </script>`;

const newScript = `<script is:inline>
      const applyTheme = () => {
        try {
          var s = localStorage.getItem('theme');
          var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (s === 'dark' || (!s && p)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      };
      applyTheme();
      document.addEventListener('astro:after-swap', applyTheme);
    </script>`;

content = content.replace(oldScript, newScript);
fs.writeFileSync(filePath, content);
console.log('Layout.astro updated with astro:after-swap');
