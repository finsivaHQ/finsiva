import re

with open('astro.config.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the BAD redirects
bad_redirects = [
    "'/knowledge/singapore-tax-residency/': { status: 301, destination: '/knowledge/singapore-tax-residency/' },",
    "'/blogs/singapore-income-tax-rates-brackets-2026/': { status: 301, destination: '/knowledge/singapore-income-tax/' },",
    "'/blogs/indonesia-tax-for-expats-foreigners-bali-guide/': { status: 301, destination: '/knowledge/indonesia-tax-residency/' },",
    "'/blogs/indonesia-income-tax-rates-brackets-2026/': { status: 301, destination: '/knowledge/indonesia-income-tax/' },"
]

for br in bad_redirects:
    content = content.replace(br, "")

# 2. Add the CORRECT redirects
new_redirects = """    '/blogs/hong-kong-corporate-tax-rate/': { status: 301, destination: '/countries/hong-kong/' },
    '/blogs/hong-kong-net-salary-take-home-pay-guide/': { status: 301, destination: '/countries/hong-kong/' },
    '/blogs/uk-ev-company-car-tax-bik-guide/': { status: 301, destination: '/knowledge/glossary/uk-bik-company-car-tax/' },
"""

content = content.replace("redirects: {", "redirects: {\n" + new_redirects)

with open('astro.config.mjs', 'w', encoding='utf-8') as f:
    f.write(content)
