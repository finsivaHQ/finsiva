import type { RichCalculatorContent } from "./types";

export const hkContent: Record<string, RichCalculatorContent> = {
  "hong-kong-salaries-tax-salaries-tax-calculator": {
    "overview": {
      "title": "Overview of Salaries Tax Calculator",
      "html": "<p>Hong Kong Salaries Tax is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Salaries Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Salaries Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Salaries Tax Calculator",
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
        "question": "How does the Salaries Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Salaries Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-salaries-tax-salary-tax-computation": {
    "overview": {
      "title": "Overview of Salary Tax Computation",
      "html": "<p>Hong Kong Net Chargeable Income is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Salary Tax Computation",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Salary Tax Computation. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Salary Tax Computation",
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
        "question": "How does the Salary Tax Computation calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Salary Tax Computation calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-salaries-tax-hk-net-salary-calculator": {
  "definitionBox": "<p><strong>Hong Kong Net Salary &amp; Take-Home Pay:</strong> In Hong Kong, your net take-home salary is your gross employment earnings minus <strong>5% Mandatory Provident Fund (MPF)</strong> contributions (capped at HK$1,500/month or HK$18,000/year) and <strong>Inland Revenue Department (IRD) Salaries Tax</strong>, calculated under progressive rates (2% to 17%) or a flat 15% standard rate.</p>",
  "overview": {
    "title": "Overview of Hong Kong Net Salary, Salaries Tax & MPF Deductions",
    "html": "<p>Hong Kong boasts one of the most competitive, employee-friendly personal tax environments in the world. Administered by the <a href=\"https://www.ird.gov.hk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Inland Revenue Department (IRD)</a>, Salaries Tax is levied under a strictly territorial principle: you are only taxed on employment income arising in or derived from Hong Kong. Hong Kong levies <strong>0% capital gains tax</strong>, 0% dividend withholding tax, and 0% sales tax (GST/VAT).</p>\n<p>When calculating your monthly and annual take-home pay, two mandatory statutory deductions apply:\n<ul class=\"list-disc pl-6 my-2 space-y-1\">\n  <li><strong>Mandatory Provident Fund (MPF):</strong> Under regulations set by the <a href=\"https://www.mpfa.org.hk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">MPFA</a>, employees contribute <strong>5%</strong> of relevant monthly income (capped at HK$1,500/month or HK$18,000/year). Mandatory MPF contributions are 100% tax-deductible against your employment income.</li>\n  <li><strong>Salaries Tax:</strong> The IRD uses an advantageous dual-calculation system. Tax is computed under both <strong>Progressive Rates (2% to 17%)</strong> with generous personal allowances, and the <strong>Standard Rate (15%)</strong> without allowances. The IRD automatically bills you the <em>lower</em> of the two amounts!</li>\n</ul></p>\n<p>Whether you are evaluating a new job offer in Central, relocating as an expatriate, or planning your annual tax reserve, this calculator accurately models your take-home pay. For in-depth strategies, explore our <a href=\"/blogs/hong-kong-salaries-tax-guide/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Salaries Tax Comprehensive Guide</a>, review deduction rules in the <a href=\"/blogs/hong-kong-mpf-tax-deduction-mandatory-voluntary/\" class=\"text-primary font-semibold hover:underline\">MPF Tax Deduction &amp; TVC Guide</a>, compare marginal brackets in <a href=\"/blogs/hong-kong-progressive-vs-standard-tax-rates/\" class=\"text-primary font-semibold hover:underline\">Progressive vs Standard Rates Explained</a>, and learn how to optimize housing in the <a href=\"/blogs/hong-kong-rental-reimbursement-scheme-guide/\" class=\"text-primary font-semibold hover:underline\">Rental Reimbursement Scheme Guide</a>.</p>"
  },
  "howToUse": {
    "title": "How to Use the Hong Kong Net Salary Calculator",
    "html": "<p>Estimate your exact monthly and annual take-home pay in Hong Kong Dollars (HK$) with our step-by-step tool:</p>\n<ol class=\"list-decimal pl-6 space-y-3\">\n  <li><strong>Enter Annual Employment Income (HK$):</strong> Input your gross annual compensation, including base salary, annual wage supplement (13th-month double pay), performance bonuses, and contractual commissions.</li>\n  <li><strong>Verify MPF Contributions (HK$):</strong> The default is 5% of your income up to the statutory cap of <strong>HK$18,000/year</strong> (HK$1,500/month). If enrolled in an approved ORSO scheme, enter your actual mandatory contribution.</li>\n  <li><strong>Select Marital Status:</strong>\n    <ul class=\"list-disc pl-5 mt-1 space-y-1\">\n      <li><strong>Single:</strong> Entitled to the Basic Allowance of <strong>HK$132,000</strong>.</li>\n      <li><strong>Married:</strong> Entitled to the Married Person's Allowance of <strong>HK$264,000</strong> (provided your spouse has no assessable income or you elect joint assessment).</li>\n    </ul>\n  </li>\n  <li><strong>Enter Dependent Children:</strong> Input the number of eligible children (each child grants an allowance of <strong>HK$130,000</strong>, plus an additional HK$130,000 in the year of birth).</li>\n  <li><strong>Click Calculate:</strong> Instantly inspect your Net Chargeable Income, IRD Salaries Tax Liability, Effective Tax Rate, and Net Take-Home Pay.</li>\n  <li><strong>Review the Visual Breakdown Bar:</strong> Examine the interactive split between Take-Home Cash, IRD Tax, and MPF Savings.</li>\n</ol>"
  },
  "understandingResults": {
    "title": "Understanding Your Hong Kong Net Salary Breakdown",
    "html": "<p>The calculation output provides the four core metrics essential for personal budgeting and payroll verification in Hong Kong:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6\">\n  <div class=\"p-4 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-muted\">Gross Earnings</span>\n    <h4 class=\"text-lg font-bold text-ink dark:text-on-primary mt-1\">Total Income</h4>\n    <p class=\"text-xs text-muted mt-2\">Total assessable remuneration from your employer prior to statutory pension or tax deductions.</p>\n  </div>\n  <div class=\"p-4 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-muted\">Statutory Pension</span>\n    <h4 class=\"text-lg font-bold text-ink dark:text-on-primary mt-1\">Mandatory MPF</h4>\n    <p class=\"text-xs text-muted mt-2\">5% employee contribution capped at HK$1,500/month. Deducted pre-tax and credited to your MPF account.</p>\n  </div>\n  <div class=\"p-4 rounded-xl border border-primary/20 bg-primary/5 dark:border-primary/20 dark:bg-primary/5\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-primary\">IRD Liability</span>\n    <h4 class=\"text-lg font-bold text-primary mt-1\">Salaries Tax</h4>\n    <p class=\"text-xs text-muted mt-2\">Tax computed under progressive or standard rates (whichever is lower), minus the annual tax rebate.</p>\n  </div>\n  <div class=\"p-4 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400\">Actual Retained</span>\n    <h4 class=\"text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1\">Take-Home Pay</h4>\n    <p class=\"text-xs text-muted mt-2\">The net cash amount deposited directly into your bank account (Gross Salary minus Salaries Tax minus MPF).</p>\n  </div>\n</div>\n<p class=\"text-sm text-body dark:text-muted\"><strong>Provisional Tax Note:</strong> Hong Kong does not operate a monthly PAYE withholding system for tax (except for MPF). The IRD issues an annual Demand Note requiring payment of final tax for the past year plus <strong>Provisional Tax</strong> for the upcoming year in two installments (typically in January and April).</p>"
  },
  "formula": {
    "title": "Statutory Hong Kong Tax Formulas & MPF Calculation Rules",
    "html": "<p>The calculation of take-home pay in Hong Kong follows a precise two-stage statutory methodology:</p>\n<div class=\"grid grid-cols-1 lg:grid-cols-2 gap-6 my-6\">\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary mb-2\">1. Mandatory Provident Fund (MPF) Formula</h4>\n    <p class=\"text-xs text-muted mb-3\">Governed by the MPF Schemes Ordinance for monthly earnings:</p>\n    <div class=\"bg-canvas dark:bg-surface/80 p-3 rounded-lg border border-hairline dark:border-overlay-light font-mono text-xs space-y-1 text-primary\">\n      <div>If Monthly Income &lt; HK$7,100: MPF = HK$0 (Exempt)</div>\n      <div>If Monthly Income HK$7,100 – HK$30,000: MPF = Monthly Income &times; 5%</div>\n      <div>If Monthly Income &gt; HK$30,000: MPF = HK$1,500/month (Cap)</div>\n      <div>Annual MPF Deduction Cap = HK$18,000</div>\n    </div>\n  </div>\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas-soft dark:border-overlay-lighter dark:bg-surface\">\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary mb-2\">2. Salaries Tax Dual-Track Formula</h4>\n    <p class=\"text-xs text-muted mb-3\">IRD computes both and assesses whichever is lower:</p>\n    <div class=\"bg-canvas dark:bg-surface/80 p-3 rounded-lg border border-hairline dark:border-overlay-light font-mono text-xs space-y-1 text-primary\">\n      <div>Track A (Progressive): Tax on (Income - MPF - Allowances)</div>\n      <div>Track B (Standard): (Income - MPF) &times; 15%</div>\n      <div>Salaries Tax = Min(Track A, Track B) - Tax Concession</div>\n      <div>Take-Home Pay = Gross Income - Salaries Tax - MPF</div>\n    </div>\n  </div>\n</div>\n<div class=\"overflow-x-auto my-6\">\n  <table class=\"w-full text-sm text-left border-collapse border border-hairline dark:border-overlay-lighter\">\n    <thead>\n      <tr class=\"bg-canvas-soft dark:bg-surface\">\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Net Chargeable Income Bracket (HK$)</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Marginal Rate (%)</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Tax on Slab (HK$)</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Cumulative Tax (HK$)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">First HK$50,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-emerald-600\">2%</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">HK$1,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold\">HK$1,000</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Next HK$50,000 (HK$50,001 – HK$100,000)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold\">6%</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">HK$3,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold\">HK$4,000</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Next HK$50,000 (HK$100,001 – HK$150,000)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold\">10%</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">HK$5,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold\">HK$9,000</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Next HK$50,000 (HK$150,001 – HK$200,000)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold\">14%</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">HK$7,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold\">HK$16,000</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Remainder Exceeding HK$200,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-primary\">17%</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">17% on excess</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold\">HK$16,000 + 17%</td></tr>\n    </tbody>\n  </table>\n</div>"
  },
  "workedExample": {
    "title": "Worked Salary Scenarios: Professional vs Executive",
    "html": "<p>To demonstrate the high retention rate of Hong Kong salaries, examine these two real-world compensation cases:</p>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 my-6\">\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas p-6 dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2\">Scenario A: Mid-Level Professional</span>\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary\">HK$50,000/month (HK$600,000/year)</h4>\n    <p class=\"text-sm text-body dark:text-muted mt-2\">A single marketing manager earning HK$50,000 per month with standard MPF contributions.</p>\n    <ul class=\"text-xs space-y-1.5 mt-4 text-muted dark:text-muted border-t border-hairline dark:border-overlay-lighter pt-3\">\n      <li class=\"flex justify-between\"><span>Gross Annual Salary:</span><strong class=\"text-ink dark:text-on-primary\">HK$600,000</strong></li>\n      <li class=\"flex justify-between\"><span>Mandatory MPF (HK$1.5k/mo):</span><strong class=\"text-ink dark:text-on-primary\">-HK$18,000</strong></li>\n      <li class=\"flex justify-between\"><span>Basic Personal Allowance:</span><strong class=\"text-ink dark:text-on-primary\">-HK$132,000</strong></li>\n      <li class=\"flex justify-between\"><span>Net Chargeable Income:</span><strong class=\"text-ink dark:text-on-primary\">HK$450,000</strong></li>\n      <li class=\"flex justify-between\"><span>Gross Salaries Tax:</span><strong class=\"text-ink dark:text-on-primary\">HK$58,500</strong></li>\n      <li class=\"flex justify-between\"><span>Less Tax Concession (Cap HK$3,000):</span><strong class=\"text-emerald-600 dark:text-emerald-400\">-HK$3,000</strong></li>\n      <li class=\"flex justify-between border-t border-hairline dark:border-overlay-lighter pt-1 text-sm\"><span class=\"font-bold text-ink dark:text-on-primary\">Final Salaries Tax:</span><strong class=\"text-primary font-bold\">HK$55,500</strong></li>\n      <li class=\"flex justify-between border-t border-hairline dark:border-overlay-lighter pt-1 text-sm\"><span class=\"font-bold text-emerald-600\">Net Annual Take-Home Pay:</span><strong class=\"text-emerald-600 font-bold\">HK$526,500</strong></li>\n      <li class=\"flex justify-between text-xs text-muted\"><span>Monthly Take-Home Cash:</span><strong class=\"text-ink dark:text-on-primary font-bold\">HK$43,875 / month</strong></li>\n      <li class=\"flex justify-between text-xs text-muted\"><span>Overall Retention Ratio:</span><strong class=\"text-emerald-600 font-bold\">87.75% Retained</strong></li>\n    </ul>\n  </div>\n  <div class=\"p-5 rounded-xl border border-hairline bg-canvas p-6 dark:border-overlay-lighter dark:bg-surface\">\n    <span class=\"inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2\">Scenario B: Married Senior Director</span>\n    <h4 class=\"text-base font-bold text-ink dark:text-on-primary\">HK$1,200,000/year (1 Dependent Child)</h4>\n    <p class=\"text-sm text-body dark:text-muted mt-2\">A finance director with a non-working spouse and one dependent child claiming family allowances.</p>\n    <ul class=\"text-xs space-y-1.5 mt-4 text-muted dark:text-muted border-t border-hairline dark:border-overlay-lighter pt-3\">\n      <li class=\"flex justify-between\"><span>Gross Annual Salary:</span><strong class=\"text-ink dark:text-on-primary\">HK$1,200,000</strong></li>\n      <li class=\"flex justify-between\"><span>Mandatory MPF:</span><strong class=\"text-ink dark:text-on-primary\">-HK$18,000</strong></li>\n      <li class=\"flex justify-between\"><span>Married Person's Allowance:</span><strong class=\"text-ink dark:text-on-primary\">-HK$264,000</strong></li>\n      <li class=\"flex justify-between\"><span>Child Allowance (1 Child):</span><strong class=\"text-ink dark:text-on-primary\">-HK$130,000</strong></li>\n      <li class=\"flex justify-between\"><span>Net Chargeable Income:</span><strong class=\"text-ink dark:text-on-primary\">HK$788,000</strong></li>\n      <li class=\"flex justify-between\"><span>Track A (Progressive Tax):</span><strong class=\"text-primary\">HK$115,960</strong></li>\n      <li class=\"flex justify-between\"><span>Track B (Standard 15% on Net):</span><strong class=\"text-ink dark:text-on-primary\">HK$177,300</strong></li>\n      <li class=\"flex justify-between border-t border-hairline dark:border-overlay-lighter pt-1 text-sm\"><span class=\"font-bold text-ink dark:text-on-primary\">Tax Payable (Lower Track A - Rebate):</span><strong class=\"text-primary font-bold\">HK$112,960</strong></li>\n      <li class=\"flex justify-between border-t border-hairline dark:border-overlay-lighter pt-1 text-sm\"><span class=\"font-bold text-emerald-600\">Net Annual Take-Home Pay:</span><strong class=\"text-emerald-600 font-bold\">HK$1,069,040</strong></li>\n      <li class=\"flex justify-between text-xs text-muted\"><span>Effective Tax Burden:</span><strong class=\"text-emerald-600 font-bold\">9.41%</strong></li>\n    </ul>\n  </div>\n</div>\n<!-- Visual Salary Split SVG -->\n<div class=\"my-8 rounded-2xl border border-hairline bg-canvas p-6 text-center dark:border-overlay-lighter dark:bg-surface\">\n  <h4 class=\"text-sm font-bold uppercase tracking-wider text-muted mb-4\">Visual Compensation Allocation (HK$600,000 Salary)</h4>\n  <svg class=\"w-full max-w-xl mx-auto h-auto\" viewBox=\"0 0 600 160\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Net Take-Home (87.75%) -->\n    <rect x=\"20\" y=\"30\" width=\"460\" height=\"42\" rx=\"8\" fill=\"#10b981\" fill-opacity=\"0.2\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"250\" y=\"56\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\">Net Cash Take-Home: HK$526,500 (87.8%)</text>\n    \n    <!-- Salaries Tax (9.25%) -->\n    <rect x=\"485\" y=\"30\" width=\"65\" height=\"42\" rx=\"8\" fill=\"#3b82f6\" fill-opacity=\"0.2\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n    <text x=\"517\" y=\"56\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\">Tax: 9.3%</text>\n    \n    <!-- MPF (3.0%) -->\n    <rect x=\"555\" y=\"30\" width=\"25\" height=\"42\" rx=\"8\" fill=\"#f59e0b\" fill-opacity=\"0.2\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"567\" y=\"56\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\">3%</text>\n    \n    <!-- Connector Lines -->\n    <path d=\"M 250 78 L 250 110 M 517 78 L 517 110 M 567 78 L 567 110\" stroke=\"currentColor\" stroke-dasharray=\"3 3\" opacity=\"0.4\"/>\n    \n    <!-- Summary Indicator -->\n    <rect x=\"20\" y=\"115\" width=\"560\" height=\"26\" rx=\"6\" fill=\"#f8fafc\" fill-opacity=\"0.05\" stroke=\"currentColor\" stroke-opacity=\"0.2\" stroke-width=\"1\"/>\n    <text x=\"300\" y=\"132\" fill=\"currentColor\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"600\">Net Pay = HK$43,875/mo | Salaries Tax = HK$4,625/mo | MPF Savings = HK$1,500/mo</text>\n  </svg>\n  <p class=\"text-xs text-muted mt-3\">Hong Kong's maximum standard rate of 15% ensures professionals retain the vast majority of their earnings.</p>\n</div>"
  },
  "taxSlabs": {
    "title": "Hong Kong Tax Allowances & Deductions Schedule",
    "html": "<p>Under the Inland Revenue Ordinance, taxpayers in Hong Kong can claim substantial statutory allowances and allowable deductions to lower their net chargeable income:</p>\n<div class=\"overflow-x-auto my-6\">\n  <table class=\"w-full text-sm text-left border-collapse border border-hairline dark:border-overlay-lighter\">\n    <thead>\n      <tr class=\"bg-canvas-soft dark:bg-surface\">\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Allowance / Deduction Category</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Statutory Amount (HK$)</th>\n        <th class=\"p-3 border border-hairline dark:border-overlay-lighter font-semibold text-ink dark:text-on-primary\">Eligibility &amp; Claim Conditions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Basic Allowance</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-primary\">HK$132,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Granted automatically to all single, divorced, or separated taxpayers</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Married Person's Allowance</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">HK$264,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Claimable if married and spouse has no taxable income, or if electing joint assessment</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Child Allowance (Per Child)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-ink dark:text-on-primary\">HK$130,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">For each unmarried dependent child below 18, or 18–25 studying full-time</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Child Allowance (Year of Birth)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">HK$260,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Includes HK$130k regular allowance + HK$130k additional one-off allowance in birth year</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Dependent Parent / Grandparent (60+)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-ink dark:text-on-primary\">HK$50,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Parent ordinarily resident in HK; increased to HK$100,000 if residing together continuously</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Single Parent Allowance</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-ink dark:text-on-primary\">HK$132,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">For single or divorced parents solely or primarily responsible for child upbringing</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Mandatory MPF Contributions</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-primary\">Up to HK$18,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Statutory mandatory employee contributions to registered MPF or ORSO schemes</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Domestic Rental Deduction</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-emerald-600 dark:text-emerald-400\">Up to HK$100,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Rent paid by tenant for primary domestic residence (must have stamped tenancy agreement)</td></tr>\n      <tr><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-medium text-ink dark:text-on-primary\">Home Loan Interest (HLI)</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter font-bold text-ink dark:text-on-primary\">Up to HK$100,000</td><td class=\"p-3 border border-hairline dark:border-overlay-lighter\">Interest paid on mortgage for owner-occupied residence; available for up to 20 tax years</td></tr>\n    </tbody>\n  </table>\n</div>"
  },
  "commonMistakes": {
    "title": "Common Pitfalls & Mistakes in Hong Kong Net Salary Planning",
    "html": "<ul class=\"list-disc pl-6 space-y-3\">\n  <li><strong>Overlooking the Rental Reimbursement Scheme (RRS):</strong> If you rent your home in Hong Kong, having your employer pay or reimburse your rent under an official RRS contract taxes the housing benefit at a deemed rate of only <strong>10% of salary</strong>, rather than the full cash rental amount. This can easily save HK$30,000 to HK$80,000 in salaries tax annually!</li>\n  <li><strong>Assuming MPF Has No Statutory Cap:</strong> Mandatory MPF employee deductions are capped at 5% of monthly salary or HK$1,500/month (HK$18,000/year). Any employer or employee contributions exceeding HK$18,000 are voluntary and non-deductible for tax unless paid through a Tax-Deductible Voluntary Contribution (TVC) account.</li>\n  <li><strong>Failing to Budget for Provisional Tax:</strong> Many new arrivals in Hong Kong are shocked by their first tax bill because the IRD charges both final tax for the prior year and 100% provisional tax for the upcoming year simultaneously. You must reserve roughly 10% to 15% of your monthly pay for annual tax settlement.</li>\n  <li><strong>Double-Claiming Deductions on Domestic Rent and Home Loan Interest:</strong> A taxpayer cannot claim both Home Loan Interest and the Domestic Rental Deduction for the same property during the same Year of Assessment.</li>\n  <li><strong>Not Claiming the Additional Child Birth Allowance:</strong> In the year your child is born, the child allowance doubles from HK$130,000 to <strong>HK$260,000</strong>. Many parents mistakenly claim only the standard single allowance on Form BIR60.</li>\n</ul>"
  },
  "benefits": {
    "title": "Benefits of Using the Finsiva HK Net Salary Calculator",
    "html": "<ul class=\"list-disc pl-6 space-y-2\">\n  <li><strong>Automatic Progressive vs Standard Comparison:</strong> Models both IRD computation methods to guarantee you view the lowest statutory tax liability.</li>\n  <li><strong>Integrated 5% MPF Deduction Engine:</strong> Accurately computes mandatory employee pension deductions capped at HK$18,000/year.</li>\n  <li><strong>Real-Time Net Take-Home Visualization:</strong> Interactive retention chart displays your true cash take-home pay on both annual and monthly bases.</li>\n  <li><strong>1-Click Export &amp; Copy:</strong> Easily copy and paste salary breakdowns into budgeting spreadsheets, job offer evaluations, or HR compensation models.</li>\n  <li><strong>Direct Cross-Linking:</strong> Deep connections to our flagship companion guides on <a href=\"/blogs/hong-kong-salaries-tax-guide/\" class=\"text-primary font-semibold hover:underline\">Salaries Tax Rules</a>, <a href=\"/blogs/hong-kong-mpf-tax-deduction-mandatory-voluntary/\" class=\"text-primary font-semibold hover:underline\">MPF Tax Deductions</a>, and <a href=\"/blogs/hong-kong-rental-reimbursement-scheme-guide/\" class=\"text-primary font-semibold hover:underline\">Rental Reimbursement Tax Savings</a>.</li>\n</ul>"
  },
  "limitations": {
    "title": "Statutory Scope & Limitations",
    "html": "<ul class=\"list-disc pl-6 space-y-2\">\n  <li><strong>Voluntary MPF Contributions:</strong> Voluntary employee MPF contributions beyond the HK$18,000 mandatory cap are non-deductible unless contributed through a Tax-Deductible Voluntary Contribution (TVC) account (up to HK$60,000 cap).</li>\n  <li><strong>Specialized Allowances:</strong> Specialized deductions (Dependent Brother/Sister Allowance, Disabled Dependent Allowance, Elderly Residential Care Expenses) can be added to your workpapers as outlined in our allowances guide.</li>\n  <li><strong>Director's Remuneration:</strong> Director fees are subject to salaries tax under the standard rules but are exempt from mandatory MPF scheme contributions.</li>\n</ul>"
  },
  "faq": [
    {
      "question": "How is net take-home salary calculated in Hong Kong?",
      "answer": "Net take-home salary is calculated by subtracting Mandatory Provident Fund (MPF) contributions (5% of monthly salary capped at HK$1,500/month or HK$18,000/year) and IRD Salaries Tax from your gross annual employment income. Unlike many Western nations, Hong Kong does not have payroll social security deductions or state healthcare taxes, resulting in average salary retention rates above 85% to 92%."
    },
    {
      "question": "What is the Mandatory Provident Fund (MPF) deduction limit for employees?",
      "answer": "Under the MPF Schemes Ordinance, employees earning between HK$7,100 and HK$30,000 per month contribute 5% of their monthly income, matched by a 5% employer contribution. For monthly earnings exceeding HK$30,000, the employee contribution is capped at HK$1,500 per month (HK$18,000 per year). Employees earning below HK$7,100 per month are exempt from contributing, though employers must still contribute 5%."
    },
    {
      "question": "How does the IRD choose between Progressive Tax Rates and the Standard Tax Rate?",
      "answer": "The Inland Revenue Department automatically calculates your salaries tax under both methods and charges whichever results in a lower tax bill. Under Progressive Rates (2% to 17%), you can deduct all personal allowances (Basic Allowance HK$132,000, Married Person's Allowance HK$264,000, Child Allowance HK$130,000). Under the Standard Rate (15%), tax is applied directly to net assessable income without personal allowances. Progressive rates typically benefit low- and middle-income earners, while the standard rate caps tax for high earners."
    },
    {
      "question": "What personal allowances can I claim to reduce Hong Kong salaries tax?",
      "answer": "Taxpayers can claim the Basic Allowance (HK$132,000 for singles), Married Person's Allowance (HK$264,000 for married couples), Child Allowance (HK$130,000 per child, plus an extra HK$130,000 in the year of birth), Dependent Parent/Grandparent Allowance (HK$50,000 to HK$100,000 per parent aged 60+), and Single Parent Allowance (HK$132,000). Allowable deductions also include mandatory MPF (up to HK$18,000) and Domestic Rent (up to HK$100,000)."
    },
    {
      "question": "How does the Rental Reimbursement Scheme (RRS) legally reduce salaries tax?",
      "answer": "Under Hong Kong tax law, if your employer provides accommodation or reimburses your rent under a structured Rental Reimbursement Scheme (RRS), the housing benefit is taxed as a deemed 'Rental Value' of only 10% of your remaining salary, rather than the actual cash rent paid. This significantly lowers your net assessable income and can reduce annual salaries tax by 30% to 50% for renters."
    },
    {
      "question": "Are bonuses, commissions, and double-pay (13th month) subject to MPF and Salaries Tax?",
      "answer": "Yes. Annual wage supplements (13th-month pay), performance bonuses, and sales commissions are considered assessable employment income and are fully subject to Salaries Tax. For MPF purposes, bonuses are included in the relevant income for the month paid; however, the monthly employee MPF deduction remains capped at HK$1,500 regardless of the bonus amount."
    }
  ],
  "relatedCalculators": {
    "title": "Related Hong Kong Tax & Financial Calculators",
    "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n  <a href=\"/countries/hong-kong/salaries-tax/salaries-tax-calculator/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <h3 class=\"font-semibold text-ink dark:text-on-primary\">Hong Kong Salaries Tax Calculator</h3>\n    <p class=\"text-xs text-muted mt-1\">Detailed progressive vs standard tax calculation with full allowance toggles.</p>\n  </a>\n  <a href=\"/countries/hong-kong/salaries-tax/hong-kong-tax-calculator-for-expats/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <h3 class=\"font-semibold text-ink dark:text-on-primary\">Hong Kong Expat Tax Calculator</h3>\n    <p class=\"text-xs text-muted mt-1\">Expat remuneration, housing benefits, and foreign tax credit estimator.</p>\n  </a>\n  <a href=\"/countries/hong-kong/profits-tax/profits-tax-calculator/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <h3 class=\"font-semibold text-ink dark:text-on-primary\">Hong Kong Profits Tax Calculator</h3>\n    <p class=\"text-xs text-muted mt-1\">Estimate two-tiered corporate profits tax (8.25% on first HK$2M, 16.5% standard).</p>\n  </a>\n</div>"
  },
  "suggestedArticles": {
    "title": "Essential Hong Kong Salary & Tax Guides",
    "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n  <a href=\"/blogs/hong-kong-salaries-tax-guide/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-primary\">Salaries Tax</span>\n    <h3 class=\"font-semibold text-ink dark:text-on-primary mt-1\">Hong Kong Salaries Tax Complete Guide</h3>\n    <p class=\"text-xs text-muted mt-1\">Comprehensive breakdown of IRD progressive brackets, standard rates, and allowances.</p>\n  </a>\n  <a href=\"/blogs/hong-kong-mpf-tax-deduction-mandatory-voluntary/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400\">Pension &amp; MPF</span>\n    <h3 class=\"font-semibold text-ink dark:text-on-primary mt-1\">MPF Tax Deductions: Mandatory vs TVC Guide</h3>\n    <p class=\"text-xs text-muted mt-1\">Maximize mandatory HK$18k deductions and voluntary TVC retirement tax shelters.</p>\n  </a>\n  <a href=\"/blogs/hong-kong-rental-reimbursement-scheme-guide/\" class=\"block rounded-xl border border-hairline bg-canvas p-4 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n    <span class=\"text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400\">Housing Tax Hack</span>\n    <h3 class=\"font-semibold text-ink dark:text-on-primary mt-1\">Rental Reimbursement Scheme (RRS) Guide</h3>\n    <p class=\"text-xs text-muted mt-1\">How employees legally cut Hong Kong tax bills by up to 50% using housing perks.</p>\n  </a>\n</div>"
  },
  "officialResources": {
    "title": "Official Hong Kong Government Resources",
    "html": "<ul class=\"space-y-2 text-sm\">\n  <li><a href=\"https://www.ird.gov.hk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Inland Revenue Department (IRD Hong Kong)</a> — Official Tax Authority</li>\n  <li><a href=\"https://www.mpfa.org.hk/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">Mandatory Provident Fund Schemes Authority (MPFA)</a> — Official MPF Regulatory Authority</li>\n  <li><a href=\"https://www.gov.hk/en/residents/taxes/etax/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">GovHK eTAX Portal</a> — Online Tax Return Filing (Form BIR60) &amp; Notice of Assessment</li>\n</ul>\n<p class=\"text-xs text-muted mt-3\">Always verify allowance amounts and statutory contribution ceilings with official publications from the Inland Revenue Department.</p>"
  },
  "relatedCountry": {
    "title": "Hong Kong Tax System Overview",
    "html": "<a href=\"/countries/hong-kong/\" class=\"block rounded-lg border border-hairline bg-canvas p-6 hover:border-primary transition dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary\">\n  <h3 class=\"text-lg font-semibold text-ink dark:text-on-primary\">Hong Kong Tax Overview &amp; All Calculators</h3>\n  <p class=\"text-sm text-muted mt-1 dark:text-muted\">Explore salaries tax, profits tax, property stamp duty (AVD/BSD), and car registration tax tools for Hong Kong.</p>\n</a>"
  },
  "educationalDisclaimer": {
    "title": "Educational & Accuracy Disclaimer",
    "text": "This calculator provides financial estimates based on the Inland Revenue Ordinance (Cap. 112) and MPF Schemes Ordinance guidelines issued by the Inland Revenue Department and MPFA Hong Kong. Tax legislation is subject to annual budget amendments. For personalized corporate tax structuring or complex cross-border employment arrangements, consult a Certified Public Accountant (CPA) or authorized Hong Kong tax practitioner."
  },
  "faqSchema": {
    "How is net take-home salary calculated in Hong Kong?": "Net take-home salary is calculated by subtracting Mandatory Provident Fund (MPF) contributions (5% of monthly salary capped at HK$1,500/month or HK$18,000/year) and IRD Salaries Tax from your gross annual employment income.",
    "What is the Mandatory Provident Fund (MPF) deduction limit for employees?": "Employees earning between HK$7,100 and HK$30,000 per month contribute 5%. For monthly earnings exceeding HK$30,000, employee contributions are capped at HK$1,500 per month (HK$18,000 per year). Employees earning below HK$7,100 are exempt from contributing.",
    "How does the IRD choose between Progressive Tax Rates and the Standard Tax Rate?": "The IRD automatically computes tax under both progressive rates (2% to 17% with personal allowances) and standard rates (15% without personal allowances) and bills the lower amount.",
    "What personal allowances can I claim to reduce Hong Kong salaries tax?": "Taxpayers can claim the Basic Allowance (HK$132,000), Married Person's Allowance (HK$264,000), Child Allowance (HK$130,000 per child, plus HK$130,000 in birth year), and MPF deductions (up to HK$18,000).",
    "How does the Rental Reimbursement Scheme (RRS) legally reduce salaries tax?": "Under the RRS, housing reimbursed by an employer is taxed at a deemed Rental Value of only 10% of salary, rather than the actual cash rent, reducing salaries tax by up to 30% to 50% for renters.",
    "Are bonuses, commissions, and double-pay (13th month) subject to MPF and Salaries Tax?": "Yes. Bonuses and commissions are assessable for Salaries Tax and MPF, though monthly employee MPF contributions remain capped at HK$1,500."
  }
},
  "hong-kong-salaries-tax-hong-kong-tax-calculator-for-expats": {
    "overview": {
      "title": "Overview of Hong Kong Tax Calculator for Expats",
      "html": "<p>Hong Kong expat housing & allowances is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Hong Kong Tax Calculator for Expats",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Hong Kong Tax Calculator for Expats. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Hong Kong Tax Calculator for Expats",
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
        "question": "How does the Hong Kong Tax Calculator for Expats calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Hong Kong Tax Calculator for Expats calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-salaries-tax-hong-kong-income-tax-for-foreigners-calculator": {
    "overview": {
      "title": "Overview of HK Income Tax for Foreigners Calculator",
      "html": "<p>Hong Kong territorial source principle is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the HK Income Tax for Foreigners Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the HK Income Tax for Foreigners Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This HK Income Tax for Foreigners Calculator",
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
        "question": "How does the HK Income Tax for Foreigners Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the HK Income Tax for Foreigners Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-profits-tax-profits-tax-calculator": {
    "overview": {
      "title": "Overview of Profits Tax Calculator",
      "html": "<p>Hong Kong corporate profits tax is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Profits Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Profits Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Profits Tax Calculator",
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
        "question": "How does the Profits Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Profits Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-profits-tax-hk-corporate-tax-calculator": {
    "overview": {
      "title": "Overview of HK Corporate Tax Calculator",
      "html": "<p>Hong Kong two-tiered profits tax is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the HK Corporate Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the HK Corporate Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This HK Corporate Tax Calculator",
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
        "question": "How does the HK Corporate Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the HK Corporate Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-profits-tax-profit-tax-computation": {
    "overview": {
      "title": "Overview of Profit Tax Computation",
      "html": "<p>Hong Kong deductible business expenses is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Profit Tax Computation",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Profit Tax Computation. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Profit Tax Computation",
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
        "question": "How does the Profit Tax Computation calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Profit Tax Computation calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-stamp-duty-hk-property-stamp-duty-calculator": {
    "overview": {
      "title": "Overview of HK Property Stamp Duty Calculator",
      "html": "<p>Hong Kong Ad Valorem Stamp Duty (AVD) is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the HK Property Stamp Duty Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the HK Property Stamp Duty Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This HK Property Stamp Duty Calculator",
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
        "question": "How does the HK Property Stamp Duty Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the HK Property Stamp Duty Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-stamp-duty-stamp-duty-calculator": {
    "overview": {
      "title": "Overview of Stamp Duty Calculator",
      "html": "<p>Hong Kong stamp duty is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Stamp Duty Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Stamp Duty Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Stamp Duty Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-stamp-duty-rental-stamp-duty-calculator": {
    "overview": {
      "title": "Overview of Rental Stamp Duty Calculator",
      "html": "<p>Hong Kong tenancy stamp duty is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Rental Stamp Duty Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Rental Stamp Duty Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This Rental Stamp Duty Calculator",
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
        "question": "How does the Rental Stamp Duty Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Rental Stamp Duty Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-stamp-duty-first-registration-tax-calculator": {
    "overview": {
      "title": "Overview of First Registration Tax Calculator",
      "html": "<p>Hong Kong vehicle First Registration Tax (FRT) is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the First Registration Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the First Registration Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This First Registration Tax Calculator",
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
        "question": "How does the First Registration Tax Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the First Registration Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-property-tax-property-tax-calculator": {
    "overview": {
      "title": "Overview of Property Tax Calculator",
      "html": "<p>Hong Kong 15% Property Tax is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the Property Tax Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the Property Tax Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
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
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the Property Tax Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  },
  "hong-kong-property-tax-hk-rental-tax-deduction-calculator": {
    "overview": {
      "title": "Overview of HK Rental Tax Deduction Calculator",
      "html": "<p>Hong Kong rental statutory allowance is governed by statutory laws enforced by the Inland Revenue Department (IRD). This tool provides real-time, precise financial estimates using current rate schedules, thresholds, and allowances.</p><p>This tool incorporates current Hong Kong tax rules governed by the Inland Revenue Department (IRD), applying accurate tax rates, thresholds, and statutory allowances to provide an instant, reliable calculation.</p>"
    },
    "howToUse": {
      "title": "How to Use the HK Rental Tax Deduction Calculator",
      "html": "<p>Enter your earned salary, revenue, or assessable transaction value into the HK Rental Tax Deduction Calculator. Select your tax year and filing parameters to compute exact tax liability.</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Input your total gross income, transaction value, or assessable metric in HK$.</li><li>Select your tax year, filing status, or applicable tax slab tier.</li><li>Specify eligible deductions, reliefs, or statutory exemptions.</li><li>Review the itemized tax breakdown, marginal rates, and net take-home output.</li></ol>"
    },
    "understandingResults": {
      "title": "Understanding Your Calculation Results",
      "html": "<p>The results summary highlights gross input, taxable base, calculated tax owed, effective tax percentage, and remaining net take-home earnings.</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Gross Metric:</strong> Total unadjusted financial baseline prior to statutory calculations.</li><li><strong>Taxable Base:</strong> Net amount subject to tax after subtracting standard exemptions.</li><li><strong>Calculated Tax Owed:</strong> Total monetary liability across all applicable progressive tiers.</li><li><strong>Effective Tax Rate:</strong> Realized overall tax percentage relative to gross input.</li><li><strong>Net Output:</strong> Final post-tax retained amount or net payable obligation.</li></ul>"
    },
    "formula": {
      "title": "Calculation Methodology & Formula Breakdown",
      "html": "<p>The calculation is executed using the official statutory formula for Hong Kong:</p><p class=\"my-3 font-mono bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm\">Tax Liability = Σ (Progressive Rate × Tier Income) - Exemptions</p><p>Review the primary rate and metric structure applied during computation:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Net Chargeable Income (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Progressive Rate</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Standard Rate Benchmark</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">First HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">2%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">15% / 16% Standard Rate</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">6%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Applied if progressive tax exceeds standard tax</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">10%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance HK$132,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Next HK$50,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">14%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance HK$264,000</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Remainder</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">17%</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Highest progressive tier</td></tr></tbody></table></div>"
    },
    "taxSlabs": {
      "title": "Hong Kong Tax Brackets & Rate Structure",
      "html": "<p>The official rates and thresholds applied by the Inland Revenue Department (IRD) for current assessment periods are detailed below:</p><div class=\"overflow-x-auto my-6\"><table class=\"w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700\"><thead><tr><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Allowance Type</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">2024/2025 Amount (HK$)</th><th class=\"p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white\">Rules</th></tr></thead><tbody><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Basic Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$132,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Single taxpayers</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$264,000</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Married couples</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Child Allowance</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$130,000 per child</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">Up to 9 children</td></tr><tr><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">MPF Contribution Cap</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">HK$18,000 / year</td><td class=\"p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300\">5% mandatory contribution cap</td></tr></tbody></table></div>"
    },
    "workedExample": {
      "title": "Step-by-Step Worked Calculation Example",
      "html": "<p>For an assessable metric of HK$50,000 under current rules, subtracting standard statutory allowances yields your net taxable baseline. Applying progressive tiers results in an itemized breakdown of your total liability and net retained earnings.</p>"
    },
    "benefits": {
      "title": "Benefits of Using This HK Rental Tax Deduction Calculator",
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
        "question": "How does the HK Rental Tax Deduction Calculator calculate tax?",
        "answer": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input."
      },
      {
        "question": "Is this updated for the current tax year?",
        "answer": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
      }
    ],
    "relatedCalculators": {
      "title": "Related Calculators",
      "html": "<p>Explore complementary tools: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Overview</a>.</p>"
    },
    "suggestedArticles": {
      "title": "Educational Tax Guides",
      "html": "<p>Read comprehensive guides: <a href=\"/countries/hong-kong/\" class=\"text-primary font-semibold hover:underline\">Hong Kong Tax Guide</a>.</p>"
    },
    "officialResources": {
      "title": "Official Government Resources",
      "html": "<ul class=\"space-y-2\"><li><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary font-semibold hover:underline\">the Inland Revenue Department (IRD)</a> — Official Hong Kong Tax Authority</li></ul>"
    },
    "relatedCountry": {
      "title": "International Tax Hubs",
      "html": "<p>Compare with other global jurisdictions: <a href=\"/countries/\" class=\"text-primary font-semibold hover:underline\">All Countries Overview</a>.</p>"
    },
    "educationalDisclaimer": {
      "title": "Educational & Accuracy Disclaimer",
      "text": "This calculator provides financial estimates based on public tax rules from the Inland Revenue Department (IRD). Tax legislation is subject to change. For complex corporate or cross-border filings, consult a certified tax practitioner."
    },
    "faqSchema": {
      "How does the HK Rental Tax Deduction Calculator calculate tax?": "It applies official progressive rates and allowances enforced by the Inland Revenue Department (IRD) to your net assessable input.",
      "Is this updated for the current tax year?": "Yes, all rates, thresholds, and statutory allowances are updated for the current tax assessment period."
    }
  }
};
