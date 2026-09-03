import type { RichCalculatorContent } from "./types";

export const nzContent: Record<string, RichCalculatorContent> = {
  "new-zealand-income-tax-income-tax-calculator": {
    "overview": {
      "title": "Overview of Income Tax Calculator",
      "html": "<p>New Zealand IRD individual income tax is governed by statutory laws enforced by Inland Revenue Department (IRD New Zealand). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current New Zealand tax rules governed by Inland Revenue Department (IRD New Zealand), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Income Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Income Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in NZ$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for New Zealand:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Taxable Income Bracket (NZ$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">ACC Earner Levy</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$0 to $14,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$14,001 to $48,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$48,001 to $70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30.0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$70,001 to $180,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">33.0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Over $180,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">39.0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "New Zealand Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Inland Revenue Department (IRD New Zealand) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">GST Mode</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Calculation Formula</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Effective Tax Portion</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">GST Inclusive -> GST Amount</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Total × (3 / 23)</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">13.043% of gross price</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">GST Exclusive -> Total Price</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Net Amount × 1.15</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% added to net</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of NZ$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by Inland Revenue Department (IRD New Zealand) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/new-zealand\" class=\"text-primary font-semibold hover:underline\">New Zealand Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/new-zealand\" class=\"text-primary font-semibold hover:underline\">New Zealand Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Inland Revenue Department (IRD New Zealand)</a> — Official New Zealand Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Inland Revenue Department (IRD New Zealand). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Income Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Inland Revenue Department (IRD New Zealand) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "new-zealand-gst-gst-calculator": {
    "overview": {
      "title": "Overview of GST Calculator",
      "html": "<p>New Zealand 15% Goods and Services Tax is governed by statutory laws enforced by Inland Revenue Department (IRD New Zealand). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current New Zealand tax rules governed by Inland Revenue Department (IRD New Zealand), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the GST Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the GST Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in NZ$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for New Zealand:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Taxable Income Bracket (NZ$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">ACC Earner Levy</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$0 to $14,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$14,001 to $48,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17.5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$48,001 to $70,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30.0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">$70,001 to $180,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">33.0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Over $180,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">39.0%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">+1.60% ACC Earner Levy</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "New Zealand Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Inland Revenue Department (IRD New Zealand) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">GST Mode</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Calculation Formula</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Effective Tax Portion</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">GST Inclusive -> GST Amount</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Total × (3 / 23)</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">13.043% of gross price</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">GST Exclusive -> Total Price</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Net Amount × 1.15</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% added to net</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of NZ$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by Inland Revenue Department (IRD New Zealand) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/new-zealand\" class=\"text-primary font-semibold hover:underline\">New Zealand Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/new-zealand\" class=\"text-primary font-semibold hover:underline\">New Zealand Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Inland Revenue Department (IRD New Zealand)</a> — Official New Zealand Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Inland Revenue Department (IRD New Zealand). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the GST Calculator calculate tax?": "It applies official progressive rates and allowances enforced by Inland Revenue Department (IRD New Zealand) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  }
};
