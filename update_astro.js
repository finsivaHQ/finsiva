const fs = require('fs');
let content = fs.readFileSync('astro.config.mjs', 'utf8');

// 1. Hong Kong Fix (reverse the logic)
content = content.replace(
  /\/blogs\/hong-kong-tax-residency\/'\s*:\s*{\s*status:\s*301,\s*destination:\s*'\/knowledge\/hong-kong-tax-residency\/'\s*},/,
  "'/knowledge/hong-kong-tax-residency/': {\n      status: 301,\n      destination: '/blogs/hong-kong-tax-residency/'\n    },"
);

// 2. Pakistan Update old redirects to point to real Masters!
content = content.replace(
  /destination:\s*'\/blogs\/pakistan-salary-tax-guide\/'/g,
  "destination: '/blogs/pakistan-fbr-tax-slabs/'"
);
content = content.replace(
  /destination:\s*'\/blogs\/pakistan-foreign-income-remittance-tax-guide\/'/g,
  "destination: '/blogs/pakistan-freelancer-tax-guide/'"
);

// Add the new redirects
const newRedirects = 
    '/blogs/pakistan-salary-tax-guide/': {
      status: 301,
      destination: '/blogs/pakistan-fbr-tax-slabs/'
    },
    '/blogs/pakistan-income-tax-guide/': {
      status: 301,
      destination: '/blogs/pakistan-fbr-tax-slabs/'
    },
    '/blogs/pakistan-foreign-income-remittance-tax-guide/': {
      status: 301,
      destination: '/blogs/pakistan-freelancer-tax-guide/'
    },
    '/blogs/pakistan-capital-gain-tax-guide/': {
      status: 301,
      destination: '/blogs/pakistan-property-tax-guide/'
    },
    '/blogs/pakistan-token-tax-guide/': {
      status: 301,
      destination: '/blogs/pakistan-vehicle-tax-guide/'
    },
    '/blogs/singapore-gst-registration-accounting-compliance-guide/': {
      status: 301,
      destination: '/blogs/singapore-gst-rate-2026-guide/'
    },
    '/blogs/singapore-zero-gst-warehouse-wgst-customs-guide/': {
      status: 301,
      destination: '/blogs/singapore-gst-rate-2026-guide/'
    },
    '/blogs/nz-income-tax-brackets-rates-history-guide/': {
      status: 301,
      destination: '/blogs/new-zealand-income-tax-rates-brackets-2025-2026/'
    },
    '/blogs/is-new-zealand-tax-free-haven-worldwide-tax-explained/': {
      status: 301,
      destination: '/blogs/new-zealand-income-tax-for-expats-foreigners-non-residents/'
    },
    '/blogs/nz-overseas-income-fif-uk-pension-transfer-tax-guide/': {
      status: 301,
      destination: '/blogs/new-zealand-income-tax-for-expats-foreigners-non-residents/'
    },
    '/blogs/new-zealand-income-tax-act-2007-corporate-property-rental-tax/': {
      status: 301,
      destination: '/blogs/nz-corporate-business-family-trust-tax-guide/'
    },
    '/blogs/nz-rental-property-airbnb-income-tax-guide/': {
      status: 301,
      destination: '/blogs/nz-corporate-business-family-trust-tax-guide/'
    },
;

content = content.replace("redirects: {", "redirects: {\n" + newRedirects);
fs.writeFileSync('astro.config.mjs', content);
