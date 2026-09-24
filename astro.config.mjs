import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const noIndexPages = [
  '/blogs/hong-kong-net-salary-take-home-pay-guide',
  '/blogs/pakistan-sales-tax-guide',
  '/blogs/pakistan-token-tax-guide',
  '/blogs/singapore-income-demographics-tax-guide',
  '/blogs/uk-capital-gains-tax-rental-income-property-guide',
  '/blogs/uk-self-assessment-sole-trader-dividend-corporate-tax-guide'
];

export default defineConfig({
  site: 'https://finsiva.com',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
    filter: (page) => {
      // Exclude 404 pages
      if (page.includes('/405') || page.includes('/404')) return false;
      // Exclude incomplete country hubs
      if (page.endsWith('/malaysia') || page.endsWith('/malaysia/')) return false;
      
      // Exclude thin content / noindex pages from the sitemap
      const isNoIndex = noIndexPages.some(noIndexPage => page.includes(noIndexPage));
      if (isNoIndex) return false;

      return true;
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
