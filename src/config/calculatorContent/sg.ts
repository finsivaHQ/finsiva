import type { RichCalculatorContent } from "./types";

export const sgContent: Record<string, RichCalculatorContent> = {
  "singapore-income-tax-income-tax-calculator": {
    "overview": {
      "title": "Overview of Income Tax Calculator",
      "html": "<p>Singapore individual income tax is governed by statutory laws enforced by the Inland Revenue Authority of Singapore (IRAS). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Singapore tax rules governed by the Inland Revenue Authority of Singapore (IRAS), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in S$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Singapore:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income (S$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Gross Tax Payable (S$)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$350</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">7%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$2,800</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$4,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$6,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">20%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$500,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">22%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$110,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above S$1,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Singapore Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Authority of Singapore (IRAS) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Corporate Tax Feature</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Partial Tax Exemption (PTE)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Start-Up Exemption (SUTE)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$190,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Flat Corporate Rate</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of S$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Income Tax Calculator",
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
        "question": "How does the Income Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Authority of Singapore (IRAS)</a> — Official Singapore Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Authority of Singapore (IRAS). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "singapore-corporate-tax-income-tax-calculator": {
    "overview": {
      "title": "Overview of Corporate Tax Estimator",
      "html": "<p>Singapore 17% corporate tax & exemptions is governed by statutory laws enforced by the Inland Revenue Authority of Singapore (IRAS). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Singapore tax rules governed by the Inland Revenue Authority of Singapore (IRAS), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Corporate Tax Estimator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Corporate Tax Estimator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in S$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Singapore:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income (S$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Gross Tax Payable (S$)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$350</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">7%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$2,800</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$4,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$6,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">20%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$500,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">22%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$110,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above S$1,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Singapore Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Authority of Singapore (IRAS) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Corporate Tax Feature</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Partial Tax Exemption (PTE)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Start-Up Exemption (SUTE)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$190,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Flat Corporate Rate</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of S$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Corporate Tax Estimator",
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
        "question": "How does the Corporate Tax Estimator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Authority of Singapore (IRAS)</a> — Official Singapore Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Authority of Singapore (IRAS). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Corporate Tax Estimator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "singapore-gst-gst-calculator": {
    "overview": {
      "title": "Overview of GST Calculator",
      "html": "<p>Singapore 9% Goods and Services Tax is governed by statutory laws enforced by the Inland Revenue Authority of Singapore (IRAS). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Singapore tax rules governed by the Inland Revenue Authority of Singapore (IRAS), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the GST Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the GST Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in S$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Singapore:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income (S$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Gross Tax Payable (S$)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$350</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">7%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$2,800</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$4,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$6,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">20%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$500,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">22%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$110,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above S$1,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Singapore Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Authority of Singapore (IRAS) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Corporate Tax Feature</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Partial Tax Exemption (PTE)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Start-Up Exemption (SUTE)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$190,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Flat Corporate Rate</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of S$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This GST Calculator",
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
        "question": "How does the GST Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Authority of Singapore (IRAS)</a> — Official Singapore Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Authority of Singapore (IRAS). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the GST Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "singapore-stamp-duty-stamp-duty-calculator": {
    "overview": {
      "title": "Overview of Stamp Duty Calculator",
      "html": "<p>Singapore Buyer's & Additional Buyer Stamp Duty (BSD/ABSD) is governed by statutory laws enforced by the Inland Revenue Authority of Singapore (IRAS). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Singapore tax rules governed by the Inland Revenue Authority of Singapore (IRAS), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Stamp Duty Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Stamp Duty Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in S$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Singapore:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Chargeable Income (S$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Resident Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Gross Tax Payable (S$)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$20,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$350</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">7%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$2,800</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$4,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$6,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,200</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">19%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$7,600</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$40,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">20%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$8,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$500,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">22%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">S$110,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above S$1,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">24%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top bracket</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Singapore Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Authority of Singapore (IRAS) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Corporate Tax Feature</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Partial Tax Exemption (PTE)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Start-Up Exemption (SUTE)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First S$10,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">75% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next S$190,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">50% Exemption</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Flat Corporate Rate</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of S$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Stamp Duty Calculator",
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
        "question": "How does the Stamp Duty Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/singapore\" class=\"text-primary font-semibold hover:underline\">Singapore Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Authority of Singapore (IRAS)</a> — Official Singapore Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Authority of Singapore (IRAS). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Stamp Duty Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Authority of Singapore (IRAS) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  }
};
