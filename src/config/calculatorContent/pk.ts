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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
    "overview": {
      "title": "Overview of Sales Tax Calculator",
      "html": "<p>Pakistan 18% sales tax is governed by statutory laws enforced by the Federal Board of Revenue (FBR Pakistan). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Pakistan tax rules governed by the Federal Board of Revenue (FBR Pakistan), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Sales Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Sales Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in PKR.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
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
      "title": "Benefits of Using This Sales Tax Calculator",
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
        "question": "How does the Sales Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Federal Board of Revenue (FBR Pakistan). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Sales Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Federal Board of Revenue (FBR Pakistan) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
      "html": "<p>Explore complementary tools: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/pakistan\" class=\"text-primary font-semibold hover:underline\">Pakistan Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Federal Board of Revenue (FBR Pakistan)</a> — Official Pakistan Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
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
