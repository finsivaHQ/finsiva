import re

with open('astro.config.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hong Kong Fix (reverse the logic)
# Find: '/blogs/hong-kong-tax-residency/': { status: 301, destination: '/knowledge/hong-kong-tax-residency/' },
content = re.sub(
    r"'/blogs/hong-kong-tax-residency/':\s*\{\s*status:\s*301,\s*destination:\s*'/knowledge/hong-kong-tax-residency/'\s*\},",
    "'/knowledge/hong-kong-tax-residency/': { status: 301, destination: '/blogs/hong-kong-tax-residency/' },",
    content
)

# 2. Pakistan Update old redirects
content = content.replace("'/blogs/pakistan-salary-tax-guide/'", "'/blogs/pakistan-fbr-tax-slabs/'")
content = content.replace("'/blogs/pakistan-foreign-income-remittance-tax-guide/'", "'/blogs/pakistan-freelancer-tax-guide/'")

new_redirects = """    '/blogs/pakistan-salary-tax-guide/': { status: 301, destination: '/blogs/pakistan-fbr-tax-slabs/' },
    '/blogs/pakistan-income-tax-guide/': { status: 301, destination: '/blogs/pakistan-fbr-tax-slabs/' },
    '/blogs/pakistan-foreign-income-remittance-tax-guide/': { status: 301, destination: '/blogs/pakistan-freelancer-tax-guide/' },
    '/blogs/pakistan-capital-gain-tax-guide/': { status: 301, destination: '/blogs/pakistan-property-tax-guide/' },
    '/blogs/pakistan-token-tax-guide/': { status: 301, destination: '/blogs/pakistan-vehicle-tax-guide/' },
    '/blogs/singapore-gst-registration-accounting-compliance-guide/': { status: 301, destination: '/blogs/singapore-gst-rate-2026-guide/' },
    '/blogs/singapore-zero-gst-warehouse-wgst-customs-guide/': { status: 301, destination: '/blogs/singapore-gst-rate-2026-guide/' },
    '/blogs/nz-income-tax-brackets-rates-history-guide/': { status: 301, destination: '/blogs/new-zealand-income-tax-rates-brackets-2025-2026/' },
    '/blogs/is-new-zealand-tax-free-haven-worldwide-tax-explained/': { status: 301, destination: '/blogs/new-zealand-income-tax-for-expats-foreigners-non-residents/' },
    '/blogs/nz-overseas-income-fif-uk-pension-transfer-tax-guide/': { status: 301, destination: '/blogs/new-zealand-income-tax-for-expats-foreigners-non-residents/' },
    '/blogs/new-zealand-income-tax-act-2007-corporate-property-rental-tax/': { status: 301, destination: '/blogs/nz-corporate-business-family-trust-tax-guide/' },
    '/blogs/nz-rental-property-airbnb-income-tax-guide/': { status: 301, destination: '/blogs/nz-corporate-business-family-trust-tax-guide/' },
"""

content = content.replace("redirects: {", "redirects: {\n" + new_redirects)

with open('astro.config.mjs', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
