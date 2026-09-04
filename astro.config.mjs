import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://finsiva.com',
  trailingSlash: 'always',
  redirects: {
    '/personality-test': '/',
    '/knowledge': '/',
    '/knowledge/hong-kong': '/',
  },
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
    filter: (page) => !page.includes('/405/') && !page.includes('/404/'),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
