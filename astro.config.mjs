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
    '/blogs/hong-kong-tax-residency/': {
      status: 301,
      destination: '/knowledge/hong-kong-tax-residency/'
    },
    '/blogs/singapore-tax-for-malaysian-indian-expats-guide/': {
      status: 301,
      destination: '/blogs/singapore-tax-for-foreigners-expats-guide/'
    },
    '/blogs/pakistan-salary-income-tax-slabs-evolution-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-salary-tax-guide/'
    },
    '/blogs/pakistan-business-tax-slabs-corporate-aop-withholding-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-corporate-tax-guide/'
    },
    '/blogs/pakistan-foreign-income-remittance-freelancer-tax-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-foreign-income-remittance-tax-guide/'
    },
    '/blogs/pakistan-property-sale-tax-capital-gain-inherited-property-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-property-tax-guide/'
    },
    '/blogs/pakistan-rental-property-income-agricultural-tax-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-property-tax-guide/'
    },
    '/blogs/pakistan-sales-tax-gst-rate-exemptions-retailer-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-sales-tax-guide/'
    },
    '/blogs/pakistan-services-sales-tax-it-software-sindh-islamabad-guide-2026/': {
      status: 301,
      destination: '/blogs/pakistan-sales-tax-guide/'
    },
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


