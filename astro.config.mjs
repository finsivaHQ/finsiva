import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const noIndexPages = []; // all pages rewritten to be >800 words

export default defineConfig({
  site: 'https://finsiva.com',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
    filter: (page) => {
      if (page.includes('/405') || page.includes('/404')) return false;
      if (page.endsWith('/malaysia') || page.endsWith('/malaysia/')) return false;
      const isNoIndex = noIndexPages.some(noIndexPage => page.includes(noIndexPage));
      if (isNoIndex) return false;
      return true;
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
