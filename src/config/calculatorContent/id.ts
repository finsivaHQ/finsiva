import type { RichCalculatorContent } from "./types";

export const idContent: Record<string, RichCalculatorContent> = {
  "indonesia-income-tax-income-tax-calculator": {
    "overview": {
      "title": "Overview of Indonesia Income Tax Calculator (PPh 21)",
      "html": "<p>Indonesia PPh 21 progressive income tax is governed by statutory laws enforced by Direktorat Jenderal Pajak (DJP Indonesia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Indonesia tax rules governed by Direktorat Jenderal Pajak (DJP Indonesia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Indonesia Income Tax Calculator (PPh 21)",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Indonesia Income Tax Calculator (PPh 21). Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in Rp.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Indonesia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Taxable Income Layer (PPh 21)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">PTKP Exemption (TK/0)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to Rp 60,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 54,000,000 Non-taxable</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 60,000,001 to Rp 250,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Additional Rp 4.5M per dependent</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 250,001,000 to Rp 500,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Max 3 dependents</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 500,000,001 to Rp 5,000,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Resident tax rules</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above Rp 5,000,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">35%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top rate tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Indonesia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Direktorat Jenderal Pajak (DJP Indonesia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Key Note</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PPN (VAT)</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Standard rate across Indonesia</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PTKP Single (TK/0)</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 54,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Annual baseline deduction</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Occupational Deduction</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% up to Rp 6M/yr</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Jabatan deduction</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of Rp50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Indonesia Income Tax Calculator (PPh 21)",
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
        "question": "How does the Indonesia Income Tax Calculator (PPh 21) calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Direktorat Jenderal Pajak (DJP Indonesia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/indonesia\" class=\"text-primary font-semibold hover:underline\">Indonesia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/indonesia\" class=\"text-primary font-semibold hover:underline\">Indonesia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Direktorat Jenderal Pajak (DJP Indonesia)</a> — Official Indonesia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Direktorat Jenderal Pajak (DJP Indonesia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Indonesia Income Tax Calculator (PPh 21) calculate tax?": "It applies official progressive rates and allowances enforced by Direktorat Jenderal Pajak (DJP Indonesia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "indonesia-vat-vat-calculator": {
    "overview": {
      "title": "Overview of Indonesia VAT Calculator (11%)",
      "html": "<p>Indonesia 11% PPN Value Added Tax is governed by statutory laws enforced by Direktorat Jenderal Pajak (DJP Indonesia). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Indonesia tax rules governed by Direktorat Jenderal Pajak (DJP Indonesia), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Indonesia VAT Calculator (11%)",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Indonesia VAT Calculator (11%). Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in Rp.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Indonesia:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Taxable Income Layer (PPh 21)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Rate (%)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">PTKP Exemption (TK/0)</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to Rp 60,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 54,000,000 Non-taxable</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 60,000,001 to Rp 250,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Additional Rp 4.5M per dependent</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 250,001,000 to Rp 500,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">25%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Max 3 dependents</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 500,000,001 to Rp 5,000,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">30%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Resident tax rules</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Above Rp 5,000,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">35%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Top rate tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Indonesia Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by Direktorat Jenderal Pajak (DJP Indonesia) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Tax Category</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Key Note</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PPN (VAT)</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">11%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Standard rate across Indonesia</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">PTKP Single (TK/0)</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Rp 54,000,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Annual baseline deduction</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Occupational Deduction</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% up to Rp 6M/yr</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Jabatan deduction</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of Rp50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Indonesia VAT Calculator (11%)",
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
        "question": "How does the Indonesia VAT Calculator (11%) calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by Direktorat Jenderal Pajak (DJP Indonesia) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/indonesia\" class=\"text-primary font-semibold hover:underline\">Indonesia Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/indonesia\" class=\"text-primary font-semibold hover:underline\">Indonesia Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Direktorat Jenderal Pajak (DJP Indonesia)</a> — Official Indonesia Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from Direktorat Jenderal Pajak (DJP Indonesia). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Indonesia VAT Calculator (11%) calculate tax?": "It applies official progressive rates and allowances enforced by Direktorat Jenderal Pajak (DJP Indonesia) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  }
};
