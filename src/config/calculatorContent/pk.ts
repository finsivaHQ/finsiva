import type { RichCalculatorContent } from "./types";

export const pkContent: Record<string, RichCalculatorContent> = {
  "pakistan-income-tax-income-tax-calculator": {
    "overview": {
      "title": "Overview of Income Tax Calculator",
      "html": "<p>Pakistan FBR income tax slabs is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-income-tax-salary-tax-calculator": {
    "overview": {
      "title": "Overview of Salary Tax Calculator",
      "html": "<p>Pakistan salaried tax slabs FY 2024-25 is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Salary Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Salary Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Salary Tax Calculator",
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
        "question": "How does the Salary Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Salary Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-income-tax-business-income-tax-calculator": {
    "overview": {
      "title": "Overview of Business Income Tax Calculator",
      "html": "<p>Pakistan non-salaried & business tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Business Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Business Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Business Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-income-tax-capital-gain-tax-calculator": {
    "overview": {
      "title": "Overview of Capital Gain Tax Calculator",
      "html": "<p>Pakistan FBR capital gains tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Capital Gain Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Capital Gain Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Capital Gain Tax Calculator",
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
        "question": "How does the Capital Gain Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Capital Gain Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-sales-tax-sales-tax-calculator": {
  "definitionBox": "<p><strong>Pakistan Sales Tax (GST):</strong> Under the <em>Sales Tax Act, 1990</em> administered by the <strong>Federal Board of Revenue (FBR)</strong>, the standard federal sales tax rate is <strong>18%</strong> on the manufacture, import, wholesale, and retail of taxable goods. Supplies to unregistered commercial purchasers incur an additional <strong>3% Further Tax</strong> (Section 3(1A)), elevating total tax to <strong>21%</strong>, while zero-rated export supplies incur <strong>0%</strong>.</p>",
  "overview": {
    "title": "Overview of Pakistan Sales Tax & Federal GST (18%)",
    "html": "<p>Sales tax in Pakistan is a multi-stage indirect consumption tax governed primarily by the <strong>Sales Tax Act, 1990</strong> and administered at the federal level by the <a href=\"https://fbr.gov.pk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Federal Board of Revenue (FBR)</a>. The standard statutory sales tax rate across Pakistan is <strong>18%</strong> on taxable goods, imports, and manufacturing outputs.</p>\n<p>Unlike personal income taxes, sales tax is charged on the value of goods at each stage of production and distribution. Registered businesses operate under a value-added mechanism where they collect <strong>Output Sales Tax</strong> on their sales and deduct <strong>Input Sales Tax</strong> paid on eligible business purchases and raw materials under Section 7. To combat the informal economy, FBR enforces a strict two-tier regime: active tax filers on the Active Taxpayer List (ATL) pay the standard 18%, whereas supplies made to unregistered commercial entities incur an additional <strong>3% Further Tax</strong> under Section 3(1A), resulting in an effective tax rate of <strong>21%</strong>.</p>\n<p>For cross-border service providers, IT exporters, and corporate entities, understanding sales tax distinctions is essential. While federal sales tax applies to goods, services are taxed provincially by provincial revenue authorities (SRB in Sindh, PRA in Punjab, KPRA in Khyber Pakhtunkhwa, and BRA in Balochistan). Learn more in our comprehensive <a href=\"/blogs/pakistan-sales-tax-guide/\" class=\"text-primary font-semibold hover:underline\">Pakistan Sales Tax &amp; GST Invoicing Guide</a>, explore <a href=\"/blogs/pakistan-freelancer-tax-guide/\" class=\"text-primary font-semibold hover:underline\">Freelancer &amp; Remote Worker FBR Guidelines</a>, and check your compliance under the <a href=\"/blogs/pakistan-tax-filing-guide/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Filing & Active Taxpayer Guide</a>.</p>"
  },
  "howToUse": {
    "title": "How to Use the Pakistan Sales Tax Calculator",
    "html": "<p>This calculator allows manufacturers, distributors, retailers, and consumers to calculate exact sales tax amounts, extract embedded taxes, and verify commercial invoice totals in Pakistani Rupees (PKR).</p>\n<ol class=\"list-decimal pl-6 space-y-3\">\n  <li><strong>Enter Transaction Amount (PKR):</strong> Type the total commercial price or baseline value of the goods.</li>\n  <li><strong>Select Calculation Mode:</strong>\n    <ul class=\"list-disc pl-5 mt-1 space-y-1\">\n      <li><strong>Add Sales Tax (Tax Exclusive):</strong> Use this when you have a net base price and need to compute the 18% FBR tax and final customer invoice total.</li>\n      <li><strong>Remove Sales Tax (Tax Inclusive):</strong> Use this when you have a retail shelf price or gross invoice receipt and need to isolate the embedded 18% sales tax from the merchant's net revenue.</li>\n    </ul>\n  </li>\n  <li><strong>Click Calculate:</strong> Instantly view the itemized breakdown, including Net Base Amount, 18% Sales Tax Amount, and Gross Invoice Total.</li>\n  <li><strong>Inspect the Visual Ratio Bar:</strong> Review the dynamic visual breakdown showing the exact proportion of Net Retained Value versus Tax Obligation.</li>\n  <li><strong>Export or Copy:</strong> Use the <strong>Copy</strong> or <strong>Print</strong> utility buttons at the top to paste the breakdown into your accounting software, purchase order, or tax filing workpapers.</li>\n</ol>"
  },
  "understandingResults": {
    "title": "Understanding Your Sales Tax Calculation Results",
    "html": "<p>The calculation output provides three critical figures needed for statutory commercial invoicing under Sales Tax Rules:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 my-6\">\n  <div class=\"p-4 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-muted\">Baseline Value</span>\n    <h4 class=\"text-lg font-bold text-ink dark:text-on-primary mt-1\">Net Amount</h4>\n    <p class=\"text-xs text-muted mt-2\">The taxable value of the supply before indirect taxation. This represents the vendor's actual retained commercial revenue.</p>\n  </div>\n  <div class=\"p-4 rounded-xl border border-primary/20 bg-primary/5 dark:border-primary/20 dark:bg-primary/5\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-primary\">Statutory Levy (18%)</span>\n    <h4 class=\"text-lg font-bold text-primary mt-1\">Sales Tax Amount</h4>\n    <p class=\"text-xs text-muted mt-2\">The 18% federal indirect tax collected on behalf of the FBR. In tax-exclusive mode, this is added to the base; in tax-inclusive mode, it is extracted.</p>\n  </div>\n  <div class=\"p-4 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-muted\">Gross Payable</span>\n    <h4 class=\"text-lg font-bold text-ink dark:text-on-primary mt-1\">Total Amount</h4>\n    <p class=\"text-xs text-muted mt-2\">The total invoice price payable by the purchaser, inclusive of statutory federal sales tax.</p>\n  </div>\n</div>\n<p class=\"text-sm text-body dark:text-muted\"><strong>Note on Commercial Invoicing:</strong> If the buyer is an unregistered commercial entity (not registered for sales tax), sellers are legally required under Section 3(1A) to add an additional <strong>3% Further Tax</strong> to the invoice, increasing the total indirect tax from 18% to 21%.</p>"
  },
  "formula": {
    "title": "Statutory Formulas & Calculation Methodology",
    "html": "<p>Pakistan federal sales tax calculations depend on whether transactions are priced on a <em>Tax-Exclusive</em> (standard B2B) or <em>Tax-Inclusive</em> (retail consumer) basis:</p>\n<div class=\"grid grid-cols-1 lg:grid-cols-2 gap-6 my-6\">\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary mb-2\">1. Tax-Exclusive Formula (Adding 18% GST)</h4>\n    <p class=\"text-xs text-muted mb-3\">Applied when a net price is quoted and tax is billed on top:</p>\n    <div class=\"bg-canvas dark:bg-surface/80 p-3 rounded-lg border border-hairline dark:border-overlay-light font-mono text-xs space-y-1 text-primary\">\n      <div>Sales Tax = Net Amount &times; 0.18</div>\n      <div>Total Invoice = Net Amount &times; 1.18</div>\n    </div>\n  </div>\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary mb-2\">2. Tax-Inclusive Formula (Extracting 18% GST)</h4>\n    <p class=\"text-xs text-muted mb-3\">Applied when total shelf price includes tax and you must isolate base revenue:</p>\n    <div class=\"bg-canvas dark:bg-surface/80 p-3 rounded-lg border border-hairline dark:border-overlay-light font-mono text-xs space-y-1 text-primary\">\n      <div>Net Base Amount = Total Price / 1.18</div>\n      <div>Sales Tax Amount = Total Price - (Total Price / 1.18)</div>\n    </div>\n  </div>\n</div>\n<div class=\"overflow-x-auto my-6\">\n  <table class=\"w-full text-sm text-left border-collapse border border-hairline dark:border-overlay-lighter\">\n    <thead>\n      <tr class=\"bg-canvas-soft dark:bg-surface\">\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Purchaser Classification</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Standard Rate</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Further Tax (Sec 3(1A))</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Effective Total Tax</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Input Tax Claimable</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Active Tax Filer (STRN Registered)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-emerald-600 dark:text-emerald-400 font-semibold\">18%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">0%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-ink dark:text-on-primary\">18%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-emerald-600 dark:text-emerald-400 font-semibold\">Yes (Subject to Sec 8B)</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Unregistered Commercial Buyer (Non-Filer)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-emerald-600 dark:text-emerald-400 font-semibold\">18%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-amber-600 dark:text-amber-400 font-semibold\">3%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-amber-600 dark:text-amber-400\">21%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-danger font-semibold\">No (Inadmissible)</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Exporter / Zero-Rated Sector (Fifth Sched.)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-primary font-semibold\">0%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">0%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-primary\">0%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter text-emerald-600 dark:text-emerald-400 font-semibold\">Yes (Full Refund Claims)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  "workedExample": {
    "title": "Practical Invoicing Examples & Visual Flow",
    "html": "<p>To illustrate how statutory FBR sales tax rules apply in real commercial operations, consider the following two practical scenarios:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 my-6\">\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas p-6 dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2\">Scenario A: B2B Registered Sale</span>\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary\">Commercial Supply to Active Filer</h4>\n    <p class=\"text-sm text-body dark:text-muted mt-2\">A manufacturer supplies taxable packaging materials with a net commercial value of <strong>PKR 100,000</strong> to an active sales tax registered distributor.</p>\n    <ul class=\"text-xs space-y-1.5 mt-4 text-muted dark:text-muted border-t border-hairline dark:border-overlay-lighter pt-3\">\n      <li class=\"flex justify-between\"><span>Base Taxable Amount:</span><strong class=\"text-ink dark:text-on-primary\">PKR 100,000</strong></li>\n      <li class=\"flex justify-between\"><span>Federal Sales Tax (18%):</span><strong class=\"text-primary\">PKR 18,000</strong></li>\n      <li class=\"flex justify-between\"><span>Further Tax (Section 3(1A)):</span><strong class=\"text-ink dark:text-on-primary\">PKR 0 (Exempt)</strong></li>\n      <li class=\"flex justify-between border-t border-hairline dark:border-overlay-lighter pt-1 text-sm\"><span class=\"font-bold text-ink dark:text-on-primary\">Total Commercial Invoice:</span><strong class=\"text-primary font-bold\">PKR 118,000</strong></li>\n    </ul>\n    <p class=\"text-[11px] text-muted mt-3 italic\">The distributor can claim the PKR 18,000 as Input Tax credit on their monthly FBR electronic sales tax return (e-FBR Annexure C).</p>\n  </div>\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas p-6 dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2\">Scenario B: Unregistered Supply</span>\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary\">Supply to Unregistered Purchaser</h4>\n    <p class=\"text-sm text-body dark:text-muted mt-2\">A wholesaler sells the same <strong>PKR 100,000</strong> worth of taxable goods to an unregistered shopkeeper who has no STRN on the Active Taxpayer List.</p>\n    <ul class=\"text-xs space-y-1.5 mt-4 text-muted dark:text-muted border-t border-hairline dark:border-overlay-lighter pt-3\">\n      <li class=\"flex justify-between\"><span>Base Taxable Amount:</span><strong class=\"text-ink dark:text-on-primary\">PKR 100,000</strong></li>\n      <li class=\"flex justify-between\"><span>Federal Sales Tax (18%):</span><strong class=\"text-primary\">PKR 18,000</strong></li>\n      <li class=\"flex justify-between\"><span>Further Tax (3% Sec 3(1A)):</span><strong class=\"text-amber-600 dark:text-amber-400\">PKR 3,000</strong></li>\n      <li class=\"flex justify-between border-t border-hairline dark:border-overlay-lighter pt-1 text-sm\"><span class=\"font-bold text-ink dark:text-on-primary\">Total Commercial Invoice:</span><strong class=\"text-amber-600 dark:text-amber-400 font-bold\">PKR 121,000</strong></li>\n    </ul>\n    <p class=\"text-[11px] text-muted mt-3 italic\">The unregistered buyer pays PKR 121,000 and cannot claim any input tax deduction, absorbing the full 21% as a dead business cost.</p>\n  </div>\n</div>\n<!-- Visual SVG Invoicing Flowchart -->\n<div class=\"my-8 rounded-2xl border border-hairline bg-canvas p-6 text-center dark:border-overlay-lighter dark:bg-surface\">\n  <h4 class=\"text-sm font-bold uppercase tracking-wider text-muted mb-4\">Visual Invoicing Breakdown (PKR 100,000 Base)</h4>\n  <svg class=\"w-full max-w-xl mx-auto h-auto\" viewBox=\"0 0 600 180\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Base Net -->\n    <rect x=\"20\" y=\"30\" width=\"300\" height=\"40\" rx=\"8\" fill=\"#3b82f6\" fill-opacity=\"0.2\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n    <text x=\"170\" y=\"55\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\">Base Net: PKR 100,000 (82.6%)</text>\n    \n    <!-- Sales Tax 18% -->\n    <rect x=\"325\" y=\"30\" width=\"180\" height=\"40\" rx=\"8\" fill=\"#10b981\" fill-opacity=\"0.2\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"415\" y=\"55\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\">18% GST: PKR 18k</text>\n    \n    <!-- Further Tax 3% -->\n    <rect x=\"510\" y=\"30\" width=\"70\" height=\"40\" rx=\"8\" fill=\"#f59e0b\" fill-opacity=\"0.2\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"545\" y=\"55\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\">+3% (PKR 3k)</text>\n    \n    <!-- Arrow & Labels -->\n    <path d=\"M 170 80 L 170 120 M 415 80 L 415 120 M 545 80 L 545 120\" stroke=\"currentColor\" stroke-dasharray=\"3 3\" opacity=\"0.4\"/>\n    \n    <!-- Summary Comparison Bars -->\n    <rect x=\"20\" y=\"130\" width=\"485\" height=\"30\" rx=\"6\" fill=\"#10b981\" fill-opacity=\"0.15\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n    <text x=\"262\" y=\"150\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"600\">Registered Filer Total: PKR 118,000 (18% Effective)</text>\n    \n    <rect x=\"510\" y=\"130\" width=\"70\" height=\"30\" rx=\"6\" fill=\"#f59e0b\" fill-opacity=\"0.15\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <text x=\"545\" y=\"150\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\">21% Total</text>\n  </svg>\n  <p class=\"text-xs text-muted mt-3\">Comparison: Active Filer Invoice (18% standard) vs Unregistered Non-Filer Invoice (18% + 3% Further Tax).</p>\n</div>"
  },
  "taxSlabs": {
    "title": "Pakistan Sales Tax Schedules & Provincial Services Comparison",
    "html": "<p>In Pakistan's constitutional structure following the 18th Constitutional Amendment, the taxation of <strong>goods</strong> remains under federal jurisdiction (FBR), while the taxation of <strong>services</strong> is administered by four provincial revenue authorities and the Islamabad Capital Territory (ICT):</p>\n<div class=\"overflow-x-auto my-6\">\n  <table class=\"w-full text-sm text-left border-collapse border border-hairline dark:border-overlay-lighter\">\n    <thead>\n      <tr class=\"bg-canvas-soft dark:bg-surface\">\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Jurisdiction &amp; Authority</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Scope of Taxation</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Standard Rate</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Governing Legislation</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Federal (FBR Pakistan)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Taxable Goods, Imports, Manufacturing</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-primary\">18%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Sales Tax Act, 1990</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Sindh (SRB)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Taxable Services rendered in Sindh</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">13%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Sindh Sales Tax on Services Act, 2011</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Punjab (PRA)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Taxable Services rendered in Punjab</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">16%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Punjab Sales Tax on Services Act, 2012</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Khyber Pakhtunkhwa (KPRA)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Taxable Services rendered in KP</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">15%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">KP Finance Act, 2013</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Balochistan (BRA)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Taxable Services rendered in Balochistan</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">15%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Balochistan Sales Tax on Services Act, 2015</td>\n      </tr>\n      <tr>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Islamabad Capital Territory</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Services rendered within ICT (FBR administered)</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">15%</td>\n        <td class=\"p-3 border border-hairline dark:border-overlay-lighter\">ICT (Tax on Services) Ordinance, 2001</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  "commonMistakes": {
    "title": "Common Pitfalls & Mistakes in Pakistan Sales Tax Compliance",
    "html": "<ul class=\"list-disc pl-6 space-y-3\">\n  <li><strong>The Reverse Extraction Error:</strong> Multiplying a tax-inclusive total price by 18% instead of dividing by 1.18. For instance, on a PKR 118,000 inclusive invoice, multiplying by 0.18 yields PKR 21,240 (incorrect), whereas the true embedded tax is PKR 18,000 (PKR 118,000 - 118,000/1.18).</li>\n  <li><strong>Ignoring the 3% Further Tax Requirement:</strong> Making supplies of taxable goods to unregistered commercial distributors without charging the statutory 3% Further Tax under Section 3(1A). During FBR audits, sellers are held personally liable to deposit the uncollected Further Tax plus default surcharges under Section 34.</li>\n  <li><strong>Violating Section 8B Input Tax Limits:</strong> Section 8B of the Sales Tax Act restricts registered persons from adjusting more than <strong>90%</strong> of output sales tax using input tax credits in any single tax period. The remaining 10% must be paid in cash to the national exchequer, with excess input carried forward.</li>\n  <li><strong>Confusing Zero-Rated (Fifth Schedule) with Exempt (Sixth Schedule):</strong> Zero-rated goods carry 0% sales tax and allow businesses to claim full cash refunds on input tax. Exempt goods carry 0% sales tax but strictly prohibit any input tax deductions, converting input taxes into unrecoverable operating overhead.</li>\n  <li><strong>Tier-1 Retailer POS Non-Integration:</strong> Tier-1 retailers (stores in shopping malls, departmental chains, or retailers with annual commercial electricity bills over statutory thresholds) who fail to integrate their Point-of-Sale cash registers with FBR's computerized system face severe penalties, disallowance of 60% input tax credits, and physical sealing of business premises.</li>\n</ul>"
  },
  "benefits": {
    "title": "Benefits of Using the Finsiva Sales Tax Calculator",
    "html": "<ul class=\"list-disc pl-6 space-y-2\">\n  <li><strong>Dual-Mode Invoicing Engine:</strong> Seamlessly switch between Tax-Exclusive (adding 18% to net price) and Tax-Inclusive (extracting 18% from gross shelf price) with zero rounding errors.</li>\n  <li><strong>Strict Statutory Alignment:</strong> Fact-checked against the Sales Tax Act, 1990 and latest Finance Act statutory amendments enforced by FBR Pakistan.</li>\n  <li><strong>Real-Time Visual Ratio Breakdown:</strong> Live interactive breakdown bar immediately reveals the exact proportion of Net Merchant Revenue versus FBR Tax Obligation.</li>\n  <li><strong>Instant 1-Click Utilities:</strong> Built-in <strong>Copy</strong>, <strong>Print</strong>, and structured CSV/PDF export options for accountants, tax advisors, and commercial invoicing workflows.</li>\n  <li><strong>Comprehensive Cross-Linking:</strong> Deep connections to our companion guides on <a href=\"/blogs/pakistan-sales-tax-guide/\" class=\"text-primary font-semibold hover:underline\">FBR Sales Tax Invoicing</a>, <a href=\"/blogs/pakistan-freelancer-tax-guide/\" class=\"text-primary font-semibold hover:underline\">Freelancer Tax Filings</a>, and <a href=\"/blogs/pakistan-tax-filing-guide/\" class=\"text-primary font-semibold hover:underline\">Active Taxpayer List (ATL) Surcharges</a>.</li>\n</ul>"
  },
  "limitations": {
    "title": "Statutory Scope & Limitations",
    "html": "<ul class=\"list-disc pl-6 space-y-2\">\n  <li><strong>Federal Goods Focus:</strong> This calculator applies the standard 18% federal sales tax on taxable goods under the Sales Tax Act, 1990. For provincial services (consulting, advertising, software development rendered locally), consult the respective provincial rate charts (SRB 13%, PRA 16%, KPRA 15%, BRA 15%).</li>\n  <li><strong>Reduced Rate Schedules:</strong> Goods specifically classified under the Eighth Schedule (e.g. specialized agricultural machinery, EV components, or raw dairy) may qualify for concessionary rates (8.5% or 10%) rather than standard 18%.</li>\n  <li><strong>Withholding Rules:</strong> Sales tax withholding agents (government entities, large corporate filers, public listed companies) must deduct sales tax at source under SRO 1324(I)/2020 at specified withholding ratios.</li>\n</ul>"
  },
  "faq": [
    {
      "question": "What is the standard Sales Tax / GST rate in Pakistan for 2025–2026?",
      "answer": "Under the Sales Tax Act, 1990, the Federal Board of Revenue (FBR) imposes a standard federal sales tax rate of 18% on the manufacture, import, wholesale, and retail of taxable goods across Pakistan. Provincial services are taxed separately by provincial authorities (SRB in Sindh at 13%, PRA in Punjab at 16%, KPRA in Khyber Pakhtunkhwa at 15%, and BRA in Balochistan at 15%)."
    },
    {
      "question": "What is Further Tax (3%) and who has to pay it in Pakistan?",
      "answer": "Under Section 3(1A) of the Sales Tax Act 1990, an additional 3% 'Further Tax' is levied on taxable supplies made to persons who have not acquired a sales tax registration number (STRN) or are not active tax filers on the FBR Active Taxpayer List (ATL). This increases the effective sales tax rate from 18% to 21% for unregistered commercial buyers."
    },
    {
      "question": "How do I calculate Sales Tax Inclusive vs Exclusive amounts?",
      "answer": "For Tax-Exclusive prices (adding tax): Multiply the net base price by 0.18 to determine the sales tax amount, then add it to get the total invoice price (Total = Net × 1.18). For Tax-Inclusive prices (extracting tax): Divide the total gross invoice price by 1.18 to find the net base amount, and subtract the net from the total to isolate the sales tax (Tax = Total - (Total / 1.18))."
    },
    {
      "question": "Which goods are zero-rated (0%) or exempt from Pakistan Sales Tax?",
      "answer": "Zero-rated goods under the Fifth Schedule of the Sales Tax Act include export goods, supplies to export processing zones, and select duty-free sectors (allowing full input tax refund claims). In contrast, exempt goods listed under the Sixth Schedule (such as unprocessed agricultural foodstuffs, basic health items, and holy books) do not charge sales tax but sellers cannot claim input tax credits."
    },
    {
      "question": "Can registered businesses adjust Input Sales Tax against Output Sales Tax?",
      "answer": "Yes. Under Section 7 and Section 8B of the Sales Tax Act 1990, registered sales tax filers can deduct input tax paid on raw materials and business purchases from the output tax collected from customers. However, Section 8B caps monthly input tax adjustments at 90% of output tax for most corporate filers, with the remaining 10% carried forward or audited."
    },
    {
      "question": "What are the POS integration requirements for Tier-1 retailers in Pakistan?",
      "answer": "Under SRO 1006(I)/2021 and Sales Tax Rules, Tier-1 retailers (stores located in air-conditioned shopping malls, supermarket chains, or those with electricity bills exceeding threshold limits) must integrate their Point of Sale (POS) cash registers real-time with the FBR computerized system to issue QR-code verified sales tax invoices."
    }
  ],
  "relatedCalculators": {
    "title": "Related Pakistan Tax & Financial Calculators",
    "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n  <a href=\"/countries/pakistan/sales-tax/gst-calculator/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <h3 class=\"font-semibold text-ink dark:text-on-primary\">Pakistan GST Calculator</h3>\n    <p class=\"text-xs text-muted mt-1\">General sales tax calculator with inclusive and exclusive rate options.</p>\n  </a>\n  <a href=\"/countries/pakistan/income-tax/salary-tax-calculator/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <h3 class=\"font-semibold text-ink dark:text-on-primary\">Pakistan Salary Tax Calculator</h3>\n    <p class=\"text-xs text-muted mt-1\">Calculate monthly and annual personal income tax under current FBR slabs.</p>\n  </a>\n  <a href=\"/countries/pakistan/vehicle-tax/vehicle-tax-calculator/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <h3 class=\"font-semibold text-ink dark:text-on-primary\">Pakistan Vehicle Token Tax Calculator</h3>\n    <p class=\"text-xs text-muted mt-1\">Estimate annual road tax and motor vehicle token fees across provinces.</p>\n  </a>\n</div>"
  },
  "suggestedArticles": {
    "title": "Essential Pakistan Tax & Compliance Guides",
    "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n  <a href=\"/blogs/pakistan-sales-tax-guide/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-primary\">Invoicing &amp; GST</span>\n    <h3 class=\"font-semibold text-ink dark:text-on-primary mt-1\">Pakistan Sales Tax &amp; GST Comprehensive Guide</h3>\n    <p class=\"text-xs text-muted mt-1\">Complete breakdown of 18% standard rate, provincial services tax, and FBR POS rules.</p>\n  </a>\n  <a href=\"/blogs/pakistan-freelancer-tax-guide/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400\">Freelancers &amp; IT</span>\n    <h3 class=\"font-semibold text-ink dark:text-on-primary mt-1\">Pakistan Freelancer Tax Rate &amp; FBR Registration Guide</h3>\n    <p class=\"text-xs text-muted mt-1\">PSEB registration, 0.25% concessionary rate, and foreign remittance tax exemptions.</p>\n  </a>\n  <a href=\"/blogs/pakistan-tax-filing-guide/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400\">Withholding Tax</span>\n    <h3 class=\"font-semibold text-ink dark:text-on-primary mt-1\">Pakistan Filer vs Non-Filer WHT &amp; ATL Rates Guide</h3>\n    <p class=\"text-xs text-muted mt-1\">Updated withholding tax rate chart, banking cash withdrawals, and property transfer penalties.</p>\n  </a>\n</div>"
  },
  "officialResources": {
    "title": "Official Government Resources & Portals",
    "html": "<ul class=\"space-y-2 text-sm\">\n  <li><a href=\"https://fbr.gov.pk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Federal Board of Revenue (FBR Pakistan)</a> — Official Federal Tax Authority</li>\n  <li><a href=\"https://e.fbr.gov.pk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">e-FBR Active Taxpayer List (ATL) Verification</a> — Online STRN and Tax Filer Status Verification</li>\n  <li><a href=\"https://fbr.gov.pk/acts-ordinances-rules/131011/131013\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Sales Tax Act, 1990 Statutory Text</a> — Official Legislation, Rules, and SROs</li>\n</ul>\n<p class=\"text-xs text-muted mt-3\">Always verify sales tax rates and statutory exemptions with the latest official notifications from the Federal Board of Revenue.</p>"
  },
  "relatedCountry": {
    "title": "Pakistan Tax System Overview",
    "html": "<a href=\"/countries/pakistan/\" class=\"block rounded-lg border border-hairline bg-canvas p-6 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n  <h3 class=\"text-lg font-semibold text-ink dark:text-on-primary\">Pakistan Tax Overview &amp; All Calculators</h3>\n  <p class=\"text-sm text-muted mt-1 dark:text-muted\">Explore salary tax, sales tax, vehicle token tax, and property capital gains tax tools for Pakistan.</p>\n</a>"
  },
  "educationalDisclaimer": {
    "title": "Educational & Accuracy Disclaimer",
    "text": "This calculator provides financial estimates based on publicly available statutory provisions under the Sales Tax Act, 1990 and notifications issued by the Federal Board of Revenue (FBR Pakistan). Tax legislation and provincial rules are subject to amendment. For commercial contracts, corporate filings, or audit representations, consult an authorized Chartered Accountant or certified tax practitioner in Pakistan."
  },
  "faqSchema": {
    "What is the standard Sales Tax / GST rate in Pakistan for 2025–2026?": "Under the Sales Tax Act, 1990, the Federal Board of Revenue (FBR) imposes a standard federal sales tax rate of 18% on the manufacture, import, wholesale, and retail of taxable goods across Pakistan. Provincial services range from 13% to 16%.",
    "What is Further Tax (3%) and who has to pay it in Pakistan?": "Under Section 3(1A) of the Sales Tax Act 1990, an additional 3% 'Further Tax' is levied on taxable supplies made to persons who have not acquired a sales tax registration number (STRN) or are not active tax filers on the FBR Active Taxpayer List (ATL). This increases the effective sales tax rate from 18% to 21% for unregistered commercial buyers.",
    "How do I calculate Sales Tax Inclusive vs Exclusive amounts?": "For Tax-Exclusive prices: Multiply net amount by 0.18 to determine sales tax, then add it to get total price (Total = Net × 1.18). For Tax-Inclusive prices: Divide total gross price by 1.18 to find net base amount, and subtract net from total to isolate sales tax (Tax = Total - Total / 1.18).",
    "Which goods are zero-rated (0%) or exempt from Pakistan Sales Tax?": "Zero-rated goods under the Fifth Schedule include export goods and supplies to export processing zones (allowing full input tax refund claims). Exempt goods listed under the Sixth Schedule (such as unprocessed food, books, health items) carry 0% tax but sellers cannot claim input tax credits.",
    "Can registered businesses adjust Input Sales Tax against Output Sales Tax?": "Yes, under Section 7 and Section 8B of the Sales Tax Act 1990. However, Section 8B caps monthly input tax adjustments at 90% of output tax for most corporate filers, with the remaining 10% carried forward or audited.",
    "What are the POS integration requirements for Tier-1 retailers in Pakistan?": "Under SRO 1006(I)/2021, Tier-1 retailers (stores located in shopping malls, supermarket chains, or those with electricity bills exceeding threshold limits) must integrate their POS systems real-time with FBR to issue QR-code verified sales tax invoices."
  }
},
  "pakistan-sales-tax-gst-calculator": {
    "overview": {
      "title": "Overview of GST Calculator",
      "html": "<p>Pakistan GST sales tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the GST Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the GST Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the GST Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-property-tax-property-tax-calculator": {
    "overview": {
      "title": "Overview of Property Tax Calculator",
      "html": "<p>Pakistan provincial property tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Property Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Property Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Property Tax Calculator",
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
        "question": "How does the Property Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Property Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-property-tax-capital-gain-tax-calculator": {
    "overview": {
      "title": "Overview of Property CGT Calculator",
      "html": "<p>Pakistan immovable property CGT is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Property CGT Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Property CGT Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Property CGT Calculator",
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
        "question": "How does the Property CGT Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Property CGT Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-property-tax-token-tax-calculator": {
    "overview": {
      "title": "Overview of Token Tax Calculator",
      "html": "<p>Pakistan vehicle token tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Token Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Token Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Token Tax Calculator",
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
        "question": "How does the Token Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Token Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-property-tax-rental-income-tax-calculator": {
    "overview": {
      "title": "Overview of Rental Income Tax Calculator",
      "html": "<p>Pakistan rental income tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Rental Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Rental Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Rental Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-vehicle-tax-vehicle-tax-calculator": {
    "overview": {
      "title": "Overview of Vehicle Tax Calculator",
      "html": "<p>Pakistan motor vehicle registration tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Vehicle Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Vehicle Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Vehicle Tax Calculator",
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
        "question": "How does the Vehicle Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Vehicle Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-vehicle-tax-sindh-vehicle-tax-calculator": {
    "overview": {
      "title": "Overview of Sindh Vehicle Tax Calculator",
      "html": "<p>Pakistan Sindh excise vehicle tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Sindh Vehicle Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Sindh Vehicle Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Sindh Vehicle Tax Calculator",
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
        "question": "How does the Sindh Vehicle Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Sindh Vehicle Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "pakistan-vehicle-tax-islamabad-vehicle-tax-calculator": {
    "overview": {
      "title": "Overview of Islamabad Vehicle Tax Calculator",
      "html": "<p>Pakistan ICT Islamabad vehicle tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Islamabad Vehicle Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Islamabad Vehicle Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Pakistan:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Salaried Income Slab (PKR / Year)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (FY 2024-25)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Fixed Base Tax</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to PKR 600,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 600,001 to 1,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% of amount > 600k</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 0</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 1,200,001 to 2,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000 + 15% > 1.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 30,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 2,200,001 to 3,200,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000 + 25% > 2.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 180,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 3,200,001 to 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000 + 30% > 3.2M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 430,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above PKR 4,100,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 35% > 4.1M</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PKR 700,000 + 10% Surcharge (>10M)</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Pakistan Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Federal Board of Revenue (FBR Pakistan) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Filer Status Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Non-Filer Status Rate</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Sales Tax / GST</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">18% + 3% Further Tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Property Transfer WHT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">3%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Securities CGT</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">45%</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of PKR50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Islamabad Vehicle Tax Calculator",
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
        "question": "How does the Islamabad Vehicle Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan/\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Islamabad Vehicle Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  }
};
