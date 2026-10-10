import re

with open('astro.config.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

new_redirects = """    '/blogs/singapore-tax-for-foreigners-expats-guide/': { status: 301, destination: '/knowledge/singapore-tax-residency/' },
    '/blogs/singapore-income-tax-rates-brackets-2026/': { status: 301, destination: '/knowledge/singapore-income-tax/' },
    '/blogs/indonesia-tax-for-expats-foreigners-bali-guide/': { status: 301, destination: '/knowledge/indonesia-tax-residency/' },
    '/blogs/indonesia-income-tax-rates-brackets-2026/': { status: 301, destination: '/knowledge/indonesia-income-tax/' },
"""

content = content.replace("redirects: {", "redirects: {\n" + new_redirects)

# Fix previously deleted singapore guide that was pointing to the loser!
content = content.replace("'/blogs/singapore-tax-for-foreigners-expats-guide/'", "'/knowledge/singapore-tax-residency/'")

with open('astro.config.mjs', 'w', encoding='utf-8') as f:
    f.write(content)
