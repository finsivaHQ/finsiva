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
    redirects: {
    '/blogs/hong-kong-tax-calculator-expats-guide/': {
      status: 301,
      destination: '/countries/hong-kong/income-tax/income-tax-calculator/'
    },
    '/blogs/nz-take-home-pay-paye-salary-tax-calculator-guide/': {
      status: 301,
      destination: '/countries/new-zealand/income-tax/income-tax-calculator/'
    },
    '/blogs/old-vs-new-tax-regime-calculator/': {
      status: 301,
      destination: '/countries/india/income-tax/income-tax-calculator/'
    },
    '/blogs/singapore-corporate-income-tax-calculator-guide/': {
      status: 301,
      destination: '/countries/singapore/corporate-tax/income-tax-calculator/'
    },
    '/blogs/singapore-expat-employment-pass-tax-calculator-guide/': {
      status: 301,
      destination: '/countries/singapore/income-tax/income-tax-calculator/'
    },
    '/blogs/singapore-hdb-rental-income-tax-calculator-guide/': {
      status: 301,
      destination: '/countries/singapore/income-tax/income-tax-calculator/'
    },
    '/blogs/singapore-income-tax-calculator-take-home-pay-guide/': {
      status: 301,
      destination: '/countries/singapore/income-tax/income-tax-calculator/'
    },
    '/blogs/singapore-income-tax-cpf-calculator-guide/': {
      status: 301,
      destination: '/countries/singapore/income-tax/income-tax-calculator/'
    },
    '/knowledge/hong-kong-tax-calculators/': {
      status: 301,
      destination: '/countries/hong-kong/'
    },
    '/knowledge/indonesia-tax-calculators/': {
      status: 301,
      destination: '/countries/indonesia/'
    },
    '/knowledge/pakistan-tax-calculators/': {
      status: 301,
      destination: '/countries/pakistan/'
    },
    '/knowledge/singapore-tax-calculators/': {
      status: 301,
      destination: '/countries/singapore/'
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

