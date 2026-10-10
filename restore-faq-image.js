const fs = require('fs');
const path = './src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

const target = `<div class="p-6">
                <h3 class="text-xl font-bold text-ink dark:text-on-primary">Still Have Questions?</h3>`;

const imageHtml = `
              <img 
                src="/images/faq-support.jpg" 
                alt="Finsiva Tax Support & Financial Guidance" 
                class="w-full h-auto object-cover max-h-[240px] hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="600"
                height="400"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-ink dark:text-on-primary">Still Have Questions?</h3>`;

if (content.includes(target)) {
  content = content.replace(target, imageHtml);
  fs.writeFileSync(path, content);
  console.log("Successfully restored FAQ image.");
} else {
  console.log("Could not find target to restore image.");
}
