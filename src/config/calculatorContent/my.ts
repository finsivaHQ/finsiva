import type { RichCalculatorContent } from "./types";

export const myContent: Record<string, RichCalculatorContent> = {
  "malaysia-income-tax-income-tax-calculator": {
    "overview": {
      "title": "Overview of Malaysia Income Tax Calculator",
      "html": "<p>Malaysia individual income tax is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Malaysia Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Malaysia Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Malaysia Income Tax Calculator",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Malaysia Income Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Malaysia Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "malaysia-sst-sst-calculator": {
    "overview": {
      "title": "Overview of Malaysia SST Calculator",
      "html": "<p>Malaysia Sales and Service Tax (SST 6%/8%/10%) is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Malaysia SST Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Malaysia SST Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Malaysia SST Calculator",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Malaysia SST Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Malaysia SST Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "malaysia-tax-filing-tax-filing-calculator": {
    "overview": {
      "title": "Overview of Tax Filing Assistant",
      "html": "<p>Malaysia MyTax e-Filing & deadlines is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Tax Filing Assistant",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Tax Filing Assistant. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Tax Filing Assistant",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Tax Filing Assistant calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Tax Filing Assistant calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "malaysia-tax-reliefs-tax-reliefs-calculator": {
    "overview": {
      "title": "Overview of Tax Reliefs Calculator",
      "html": "<p>Malaysia LHDN tax reliefs is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Tax Reliefs Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Tax Reliefs Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Tax Reliefs Calculator",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Tax Reliefs Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Tax Reliefs Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "malaysia-foreign-income-foreign-income-calculator": {
    "overview": {
      "title": "Overview of Foreign Income Tax Calculator",
      "html": "<p>Malaysia Foreign-Sourced Income (FSI) is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Foreign Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Foreign Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Foreign Income Tax Calculator",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Foreign Income Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Foreign Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "malaysia-rental-income-rental-income-calculator": {
    "overview": {
      "title": "Overview of Rental Income Tax Calculator",
      "html": "<p>Malaysia rental income tax is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Rental Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Rental Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Rental Income Tax Calculator",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Rental Income Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Rental Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "malaysia-business-income-business-income-calculator": {
    "overview": {
      "title": "Overview of Business Income Tax Calculator",
      "html": "<p>Malaysia SME corporate tax rates is governed by statutory laws enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Malaysia tax rules governed by Lembaga Hasil Dalam Negeri (LHDN Malaysia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Business Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Business Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in RM.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Malaysia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income Tier (RM)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Personal Relief</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 0 – RM 5,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Individual Relief RM 9,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 5,001 – RM 20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">1%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">EPF Relief RM 4,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 20,001 – RM 35,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Life Insurance RM 3,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 35,001 – RM 50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Medical & Lifestyle Reliefs</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 50,001 – RM 70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Relief RM 2,000 - RM 8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 70,001 – RM 100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Non-resident rate flat 30%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 100,001 – RM 400,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Progressive bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 400,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">26%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">RM 600,001 – RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">28%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">High earner bracket</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 2,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Malaysia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Lembaga Hasil Dalam Negeri (LHDN Malaysia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Chargeable Income</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">SME Preferential Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Corporate Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First RM 150,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next RM 150,001 – RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above RM 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of RM50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Business Income Tax Calculator",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Calculates exact obligations based on official statutory rate schedules.</li><li>Clear breakdown of marginal rates vs effective tax burden.</li><li>Includes standard statutory allowances and exemptions.</li></ul>"
    },
    "limitations": {
      "title": "Edge Cases & Analytical Limitations",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Does not calculate specialized cross-border tax treaties.</li><li>Does not compute subjective legal exemptions without custom inputs.</li></ul>"
    },
    "commonMistakes": {
      "title": "Common Pitfalls & Mistakes to Avoid",
      "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying flat rates across entire income instead of progressive tiers.</li><li>Failing to account for mandatory statutory payroll contributions.</li></ul>"
    },
    "faq": [
      {
        "question": "How does the Business Income Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/malaysia\" class=\"text-primary font-semibold hover:underline\">Malaysia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Lembaga Hasil Dalam Negeri (LHDN Malaysia)</a> — Official Malaysia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Lembaga Hasil Dalam Negeri (LHDN Malaysia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Business Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Lembaga Hasil Dalam Negeri (LHDN Malaysia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  }
};
