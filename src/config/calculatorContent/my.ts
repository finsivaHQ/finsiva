import type { RichCalculatorContent } from "./types";

export const myContent: Record<string, RichCalculatorContent> = {
  "malaysia-income-tax-income-tax-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia Income Tax Calculator",
      "steps": [
        "Select your tax residency status (Resident or Non-Resident individual).",
        "Enter your total gross annual employment income (basic salary, contractual allowances, bonuses, and commissions).",
        "Verify your statutory personal relief (RM 9,000 automatically claimed for residents) and standard deductions.",
        "Click Calculate to view chargeable income, progressive bracket breakdown (0% to 30%), and net take-home salary."
      ]
    },
    "overview": {
      "title": "Malaysia Personal Income Tax System (LHDN Form BE/B)",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia Income Tax Calculator computes statutory tax liability under the Lembaga Hasil Dalam Negeri (LHDN) for Year of Assessment 2025/2026. Evaluating progressive resident rates from 0% to 30% after personal relief (RM 9,000) versus flat 30% non-resident tax, it delivers precision calculations under the Income Tax Act 1967.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        Administered by the <strong>Inland Revenue Board of Malaysia (LHDN)</strong>, personal income tax applies to all income accruing in or derived from Malaysia. Tax residents qualify for progressive tiered tax brackets ranging from 0% to 30%, generous statutory reliefs, and tax rebates (RM 400 for chargeable income up to RM 35,000), while non-residents pay a flat 30% rate without relief entitlement.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Malaysia LHDN Income Tax Computation Flow</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">1. Gross Earnings</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Employment Remuneration</text>\n          <text x=\"125\" y=\"135\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Base + Allowances + Bonus</text>\n          <text x=\"125\" y=\"160\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Monthly PCB Withholding</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Credited to annual liability</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">2. Statutory Reliefs</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Personal: RM 9,000</text>\n          <text x=\"340\" y=\"135\" fill=\"#f59e0b\" font-size=\"12\" text-anchor=\"middle\">EPF / PRS / Life Ins.</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Medical &amp; Lifestyle</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">= Chargeable Income</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">3. Final Tax Payable</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Tiered 0% to 30%</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Less: Rebate (RM 400)</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Less: PCB Advance Paid</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">= Net Refund / Balance Due</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "LHDN Resident Tax Slabs (YA 2025/2026)",
      "html": "<p>Progressive tax schedule applicable to tax resident individuals under the Income Tax Act 1967:</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>RM 0 – RM 5,000:</strong> 0% (Tax = RM 0)</p>\n        <p><strong>RM 5,001 – RM 20,000:</strong> 1% (Max Tax = RM 150)</p>\n        <p><strong>RM 20,001 – RM 35,000:</strong> 3% (Max Tax = RM 450)</p>\n        <p><strong>RM 35,001 – RM 50,000:</strong> 6% (Max Tax = RM 900)</p>\n        <p><strong>RM 50,001 – RM 70,000:</strong> 11% (Max Tax = RM 2,200)</p>\n        <p><strong>RM 70,001 – RM 100,000:</strong> 19% (Max Tax = RM 5,700)</p>\n        <p><strong>RM 100,001 – RM 400,000:</strong> 25% (Max Tax = RM 75,000)</p>\n        <p><strong>RM 400,001 – RM 600,000:</strong> 26% (Max Tax = RM 52,000)</p>\n        <p><strong>RM 600,001 – RM 2,000,000:</strong> 28% (Max Tax = RM 392,000)</p>\n        <p><strong>Exceeding RM 2,000,000:</strong> 30%</p>\n        <p class=\"mt-2 text-emerald-600 dark:text-emerald-400\"><strong>Tax Rebate:</strong> RM 400 rebate applies if Chargeable Income does not exceed RM 35,000.</p>\n      </div>"
    },
    "benefits": {
      "title": "Malaysian Income Tax Benchmark Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: Entry-Level Executive (RM 36,000 Annual Salary)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 36,000 (RM 3,000/mo).<br/>\n            <strong>Reliefs:</strong> Basic Personal Relief RM 9,000.<br/>\n            <strong>Chargeable Income:</strong> RM 27,000.<br/>\n            <strong>Tax Computation:</strong> First RM 20k = RM 150 + next RM 7,000 @ 3% (RM 210) = RM 360.<br/>\n            <strong>Tax Rebate:</strong> Chargeable &le; RM 35k &rarr; RM 400 rebate eliminates full liability.<br/>\n            <strong>Net Tax Payable:</strong> <strong>RM 0</strong> (Effective Rate: 0.0%).\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: Mid-Level Manager (RM 90,000 Annual Salary)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 90,000 (RM 7,500/mo).<br/>\n            <strong>Reliefs:</strong> Basic Relief RM 9,000.<br/>\n            <strong>Chargeable Income:</strong> RM 81,000.<br/>\n            <strong>Tax Computation:</strong> First RM 70k = RM 3,700 + remaining RM 11k @ 19% (RM 2,090) = <strong>RM 5,790</strong>.<br/>\n            <strong>Effective Tax Rate:</strong> <strong>6.43%</strong> (Take-Home: RM 84,210).\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Senior Director (RM 240,000 Annual Salary)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 240,000 (RM 20,000/mo).<br/>\n            <strong>Reliefs:</strong> Basic Relief RM 9,000.<br/>\n            <strong>Chargeable Income:</strong> RM 231,000.<br/>\n            <strong>Tax Computation:</strong> First RM 100k = RM 9,400 + remaining RM 131k @ 25% (RM 32,750) = <strong>RM 42,150</strong>.<br/>\n            <strong>Effective Tax Rate:</strong> <strong>17.56%</strong> (Take-Home: RM 197,850).\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "Tax Residency Criteria (182-Day Rule)",
      "html": "<p>Determining tax residency under Section 7 of the Income Tax Act 1967:</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>Physical Presence:</strong> Taxpayer must be present in Malaysia for 182 days or more in the basis calendar year.</li>\n        <li><strong>Linking Periods:</strong> Presence of less than 182 days may qualify as resident if linked to a contiguous period of 182+ consecutive days in the preceding or following year.</li>\n        <li><strong>Non-Resident Tax:</strong> Non-residents are taxed at a flat 30% rate on employment income with no entitlement to personal reliefs or rebates.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "What is the basic personal relief for individuals in Malaysia?",
        "answer": "Every tax resident individual in Malaysia automatically receives a statutory personal relief of RM 9,000 on their annual LHDN return."
      },
      {
        "question": "How does the RM 400 individual tax rebate work in Malaysia?",
        "answer": "If your chargeable income after all reliefs does not exceed RM 35,000, LHDN grants a statutory individual tax rebate of RM 400, which directly reduces your final tax bill to zero in many cases."
      },
      {
        "question": "What is Monthly Tax Deduction (PCB) and how does it relate to final tax?",
        "answer": "Potongan Cukai Bulanan (PCB) is mandatory monthly payroll tax withholding deducted by employers. When filing your annual Form BE/B, PCB payments are credited against your final tax, resulting in a refund or final balance payment."
      },
      {
        "question": "How is non-resident employment income taxed in Malaysia?",
        "answer": "Non-residents who work in Malaysia are subject to a flat 30% tax rate on gross Malaysian employment earnings and cannot claim personal reliefs or tax rebates."
      },
      {
        "question": "What are the tax brackets for Malaysian residents in 2025/2026?",
        "answer": "Resident tax rates range progressively from 0% on the first RM 5,000 up to 30% for chargeable income exceeding RM 2,000,000 across 10 progressive brackets."
      },
      {
        "question": "What is the deadline for filing Malaysian personal tax returns via MyTax?",
        "answer": "For individuals without business income (Form BE), the MyTax e-Filing deadline is typically April 30, with a grace period to May 15. For business individuals (Form B), the deadline is June 30."
      }
    ],
    "faqSchema": {
      "What is the basic personal relief for individuals in Malaysia?": "Every tax resident individual in Malaysia automatically receives a statutory personal relief of RM 9,000 on their annual LHDN return.",
      "How does the RM 400 individual tax rebate work in Malaysia?": "If your chargeable income after all reliefs does not exceed RM 35,000, LHDN grants a statutory individual tax rebate of RM 400, which directly reduces your final tax bill to zero in many cases.",
      "What is Monthly Tax Deduction (PCB) and how does it relate to final tax?": "Potongan Cukai Bulanan (PCB) is mandatory monthly payroll tax withholding deducted by employers. When filing your annual Form BE/B, PCB payments are credited against your final tax, resulting in a refund or final balance payment.",
      "How is non-resident employment income taxed in Malaysia?": "Non-residents who work in Malaysia are subject to a flat 30% tax rate on gross Malaysian employment earnings and cannot claim personal reliefs or tax rebates.",
      "What are the tax brackets for Malaysian residents in 2025/2026?": "Resident tax rates range progressively from 0% on the first RM 5,000 up to 30% for chargeable income exceeding RM 2,000,000 across 10 progressive brackets.",
      "What is the deadline for filing Malaysian personal tax returns via MyTax?": "For individuals without business income (Form BE), the MyTax e-Filing deadline is typically April 30, with a grace period to May 15. For business individuals (Form B), the deadline is June 30."
    }
  },
  "malaysia-sst-sst-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia SST Calculator",
      "steps": [
        "Enter the gross amount or net invoice value in Ringgit (MYR).",
        "Select the applicable SST regime (Sales Tax at 5% or 10%, or Service Tax at 6% or expanded 8%).",
        "Choose whether the calculation is Exclusive (adding SST to base amount) or Inclusive (extracting embedded SST).",
        "Click Calculate to view statutory tax amount, subtotal, and final total invoice payable."
      ]
    },
    "overview": {
      "title": "Malaysia Sales & Service Tax (SST) & 8% Expansion Regime",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia SST Calculator computes statutory Sales Tax (5% or 10%) and Service Tax (6% or expanded 8%) administered by the Royal Malaysian Customs Department (JKDM). Supporting both tax-inclusive and tax-exclusive calculations, it ensures complete compliance with Service Tax Act 2018 amendments.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        Unlike a broad-based VAT or GST, Malaysia operates a single-stage consumption tax framework governed by the <strong>Sales Tax Act 2018</strong> and <strong>Service Tax Act 2018</strong>, administered by the <strong>Royal Malaysian Customs Department (JKDM)</strong>. Effective March 1, 2024, the standard service tax rate was expanded from 6% to <strong>8%</strong> across most taxable services—including logistics, consulting, and digital services—while maintaining 6% on food &amp; beverage and telecommunications.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Malaysia Single-Stage SST Rate Architecture (JKDM)</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Sales Tax (Goods)</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">5% or 10%</text>\n          <text x=\"125\" y=\"135\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Manufactured &amp; Imported</text>\n          <text x=\"125\" y=\"160\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">5%: Building materials</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">10%: Standard goods</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Service Tax (Essential)</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">6.0%</text>\n          <text x=\"340\" y=\"140\" fill=\"#f59e0b\" font-size=\"11\" text-anchor=\"middle\">Food &amp; Beverage (F&amp;B)</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Telecommunications</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Vehicle parking &amp; logistics</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Service Tax (Expanded)</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">8.0%</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">IT, Consulting &amp; Legal</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Hotels &amp; Digital Services</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Effective 1 March 2024</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "SST Computation Formulas",
      "html": "<p>Formulas for tax-exclusive addition and tax-inclusive extraction:</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>Tax Exclusive Formula:</strong> SST Amount = Base Amount × Rate</p>\n        <p><strong>Total Bill Payable:</strong> Total = Base Amount + SST Amount</p>\n        <p class=\"mt-2\"><strong>Tax Inclusive Extraction Formula:</strong></p>\n        <p><strong>SST Amount (Inclusive):</strong> Total Bill × [Rate / (1 + Rate)]</p>\n        <p><strong>Net Amount Before SST:</strong> Total Bill / (1 + Rate)</p>\n        <p class=\"mt-2\"><em>Example at 8% Service Tax on RM 108 invoice:</em> SST = RM 108 &times; (0.08 / 1.08) = RM 8.00; Net = RM 100.00.</p>\n      </div>"
    },
    "benefits": {
      "title": "SST Billing Benchmark Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: Restaurant Dining Bill (RM 250 Net, 6% F&amp;B Service Tax)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Food &amp; Beverage Total:</strong> RM 250.00.<br/>\n            <strong>Service Tax (6%):</strong> RM 250 &times; 0.06 = <strong>RM 15.00</strong>.<br/>\n            <strong>Final Total Payable:</strong> <strong>RM 265.00</strong> (Note: 10% service charge if applicable is assessed separately).\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: Corporate IT Consulting Invoice (RM 10,000 Net, 8% Service Tax)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Professional Services:</strong> RM 10,000.<br/>\n            <strong>Expanded Service Tax Rate:</strong> 8% (effective March 2024).<br/>\n            <strong>Service Tax Added:</strong> RM 10,000 &times; 0.08 = <strong>RM 800.00</strong>.<br/>\n            <strong>Total Invoice Billed:</strong> <strong>RM 10,800.00</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Tax-Inclusive Hotel Booking (RM 540 Total Bill)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Total Paid by Guest:</strong> RM 540.00 inclusive of 8% Service Tax.<br/>\n            <strong>Extracted Service Tax:</strong> RM 540 &times; (0.08 / 1.08) = <strong>RM 40.00</strong>.<br/>\n            <strong>Net Room Tariff:</strong> <strong>RM 500.00</strong>.\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "SST Registration Thresholds & Single-Stage Rules",
      "html": "<p>Registration compliance mandates issued by Royal Malaysian Customs (JKDM):</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>RM 500,000 General Threshold:</strong> Manufacturers of taxable goods and service providers with annual taxable turnover exceeding RM 500,000 must register for SST within 30 days.</li>\n        <li><strong>F&amp;B Threshold (RM 1,500,000):</strong> Operators of restaurants, cafes, and catering services are subject to a higher registration threshold of RM 1,500,000 per year.</li>\n        <li><strong>No Input Tax Credit Mechanism:</strong> Unlike GST/VAT systems, SST is a single-stage tax with no input tax credit mechanism; businesses cannot offset SST paid on purchases against SST collected on sales.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "What is the current Service Tax rate in Malaysia for 2025/2026?",
        "answer": "Effective March 1, 2024, the standard service tax rate is 8% for most services (including IT, legal, consulting, and hotels), while food and beverages (F&B) and telecommunications remain at 6%."
      },
      {
        "question": "How does Sales Tax differ from Service Tax in Malaysia?",
        "answer": "Sales Tax (5% or 10%) applies to taxable goods manufactured in Malaysia or imported from overseas. Service Tax (6% or 8%) applies to prescribed taxable services provided by registered businesses."
      },
      {
        "question": "Can businesses claim back SST paid on operating purchases?",
        "answer": "No. Unlike GST or VAT, Malaysia's SST does not allow businesses to claim input tax credits; SST incurred on business expenses becomes a direct cost of doing business."
      },
      {
        "question": "What is the mandatory SST registration threshold in Malaysia?",
        "answer": "The general annual threshold for mandatory SST registration is RM 500,000 in taxable turnover. For food and beverage (F&B) operators, the threshold is RM 1,500,000."
      },
      {
        "question": "How do I extract embedded SST from a tax-inclusive total receipt?",
        "answer": "To extract 8% service tax from an inclusive total, multiply the total by 0.08 / 1.08 (or approximately 7.407%). To extract 6%, multiply by 0.06 / 1.06."
      },
      {
        "question": "How frequently must registered businesses submit SST returns to Customs?",
        "answer": "Registered businesses must submit SST-02 returns and remit collected taxes to the Royal Malaysian Customs Department bi-monthly (every two months)."
      }
    ],
    "faqSchema": {
      "What is the current Service Tax rate in Malaysia for 2025/2026?": "Effective March 1, 2024, the standard service tax rate is 8% for most services (including IT, legal, consulting, and hotels), while food and beverages (F&B) and telecommunications remain at 6%.",
      "How does Sales Tax differ from Service Tax in Malaysia?": "Sales Tax (5% or 10%) applies to taxable goods manufactured in Malaysia or imported from overseas. Service Tax (6% or 8%) applies to prescribed taxable services provided by registered businesses.",
      "Can businesses claim back SST paid on operating purchases?": "No. Unlike GST or VAT, Malaysia's SST does not allow businesses to claim input tax credits; SST incurred on business expenses becomes a direct cost of doing business.",
      "What is the mandatory SST registration threshold in Malaysia?": "The general annual threshold for mandatory SST registration is RM 500,000 in taxable turnover. For food and beverage (F&B) operators, the threshold is RM 1,500,000.",
      "How do I extract embedded SST from a tax-inclusive total receipt?": "To extract 8% service tax from an inclusive total, multiply the total by 0.08 / 1.08 (or approximately 7.407%). To extract 6%, multiply by 0.06 / 1.06.",
      "How frequently must registered businesses submit SST returns to Customs?": "Registered businesses must submit SST-02 returns and remit collected taxes to the Royal Malaysian Customs Department bi-monthly (every two months)."
    }
  },
  "malaysia-tax-filing-tax-filing-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia Tax Filing Assistant",
      "steps": [
        "Select your residency status (Resident vs Non-Resident).",
        "Select your marital status and enter your total annual earnings.",
        "Choose the Year of Assessment (YA 2024, YA 2025, or YA 2026).",
        "Click Calculate to view your Form BE/B chargeable income, final tax liability, and effective tax rate."
      ]
    },
    "overview": {
      "title": "Malaysia Tax Filing & MyTax e-Filing Preparation",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia Tax Filing Assistant estimates annual tax liabilities and prepares taxpayers for official MyTax e-Filing under LHDN guidelines. Modelling resident deductions (RM 9,000 personal relief), non-resident 30% rates, and statutory tax rebates, it ensures complete accuracy before submitting Form BE or Form B.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        Filing annual taxes in Malaysia is executed through the <strong>MyTax online portal</strong> maintained by LHDN. Individual employees file <strong>Form BE</strong> (deadline April 30 / May 15 e-Filing), while sole proprietors, freelancers, and business partners submit <strong>Form B</strong> (deadline June 30). Accurate pre-computation avoids late filing penalties ranging from 10% to 300% under Section 112 of the Income Tax Act 1967.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">MyTax e-Filing Preparation &amp; Assessment Workflow</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Step 1: Collate Documents</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Form EA / EC from Employer</text>\n          <text x=\"125\" y=\"135\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">EPF / Insurance Statements</text>\n          <text x=\"125\" y=\"160\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Medical &amp; Lifestyle Receipts</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Keep receipts for 7 years</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Step 2: Pre-Compute</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Finsiva Tax Filing Tool</text>\n          <text x=\"340\" y=\"135\" fill=\"#f59e0b\" font-size=\"12\" text-anchor=\"middle\">Verify Chargeable Income</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Compare with PCB Total</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Know refund in advance</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Step 3: Submit MyTax</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Log in via e-Daftar</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Submit Form BE / B</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Receive Notice of Assessment</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Auto-refund via DuitNow</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "Filing Formulas & LHDN Thresholds",
      "html": "<p>Statutory assessment calculation under the Inland Revenue Board of Malaysia:</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>Resident Individual:</strong> Chargeable Income = Gross Income - Personal Relief (RM 9,000) - Approved Deductions</p>\n        <p><strong>Tax on Chargeable Income:</strong> Applied across 10 progressive brackets from 0% to 30%</p>\n        <p><strong>Low Income Rebate:</strong> If Chargeable Income &le; RM 35,000 &rarr; Tax = Max(0, Calculated Tax - RM 400)</p>\n        <p><strong>Non-Resident Individual:</strong> Final Tax = Gross Malaysian Income × 30% (Zero Reliefs)</p>\n      </div>"
    },
    "benefits": {
      "title": "Tax Filing Preparation Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: Resident Filing Form BE (RM 60,000 Annual Salary)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 60,000 (Form EA).<br/>\n            <strong>Personal Relief:</strong> RM 9,000.<br/>\n            <strong>Chargeable Income:</strong> RM 51,000.<br/>\n            <strong>Tax Breakdown:</strong> First RM 50k = RM 1,500 + remainder RM 1,000 @ 11% (RM 110) = <strong>RM 1,610</strong>.<br/>\n            <strong>PCB Comparison:</strong> If RM 2,000 was withheld via monthly PCB, LHDN issues a refund of <strong>RM 390</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: High-Earner Filing Form BE (RM 150,000 Annual Salary)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 150,000.<br/>\n            <strong>Personal Relief:</strong> RM 9,000.<br/>\n            <strong>Chargeable Income:</strong> RM 141,000.<br/>\n            <strong>Tax Breakdown:</strong> First RM 100k = RM 9,400 + remainder RM 41k @ 25% (RM 10,250) = <strong>RM 19,650</strong>.<br/>\n            <strong>Effective Rate:</strong> <strong>13.10%</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Non-Resident Foreign Specialist (RM 120,000 Contract)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 120,000.<br/>\n            <strong>Residency:</strong> Present &lt; 182 days (Non-Resident).<br/>\n            <strong>Tax Computation:</strong> RM 120,000 &times; 30% flat = <strong>RM 36,000</strong>.<br/>\n            <strong>Reliefs Allowed:</strong> None (Section 109 ITA 1967).\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "Statutory Filing Deadlines & Document Retention",
      "html": "<p>Legal obligations for taxpayers under the Income Tax Act 1967:</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>7-Year Audit Rule:</strong> Under Section 82A, you must keep all supporting receipts, invoices, and bank statements for 7 years from the end of the year in which the return is filed.</li>\n        <li><strong>Form EA Requirement:</strong> Employers must provide Form EA by the last day of February each year.</li>\n        <li><strong>Late Filing Penalties:</strong> Penalties of 10% apply immediately on unpaid balances after the due date, with an additional 5% if unpaid after 60 days.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "When should I start preparing my Malaysian tax filing?",
        "answer": "You should begin in March once your employer provides your Form EA. The MyTax e-Filing system opens around March 1 each year for Form BE."
      },
      {
        "question": "Who is required to file taxes in Malaysia?",
        "answer": "Any individual whose annual employment income after EPF exceeds RM 34,000 (or approximately RM 2,833 per month) is legally required to register with LHDN and file an annual tax return."
      },
      {
        "question": "How do I receive my tax refund from LHDN?",
        "answer": "LHDN processes refunds directly into your Malaysian bank account via electronic fund transfer or DuitNow, typically within 14 to 30 working days after successful e-Filing submission."
      },
      {
        "question": "Can I amend my submitted MyTax Form BE if I made an error?",
        "answer": "Yes. You can file an Amended Return Form (e-Borang Pindaan) within the permitted window, or submit an appeal with receipts to your nearest LHDN branch."
      },
      {
        "question": "What is the difference between Form BE and Form B in Malaysia?",
        "answer": "Form BE is for individuals who earn strictly employment income. Form B is for individuals who earn business, trade, freelance, or partnership income."
      },
      {
        "question": "Are non-residents required to file a tax return in Malaysia?",
        "answer": "Yes. Non-resident individuals earning employment or service income in Malaysia must file Form M by April 30."
      }
    ],
    "faqSchema": {
      "When should I start preparing my Malaysian tax filing?": "You should begin in March once your employer provides your Form EA. The MyTax e-Filing system opens around March 1 each year for Form BE.",
      "Who is required to file taxes in Malaysia?": "Any individual whose annual employment income after EPF exceeds RM 34,000 (or approximately RM 2,833 per month) is legally required to register with LHDN and file an annual tax return.",
      "How do I receive my tax refund from LHDN?": "LHDN processes refunds directly into your Malaysian bank account via electronic fund transfer or DuitNow, typically within 14 to 30 working days after successful e-Filing submission.",
      "Can I amend my submitted MyTax Form BE if I made an error?": "Yes. You can file an Amended Return Form (e-Borang Pindaan) within the permitted window, or submit an appeal with receipts to your nearest LHDN branch.",
      "What is the difference between Form BE and Form B in Malaysia?": "Form BE is for individuals who earn strictly employment income. Form B is for individuals who earn business, trade, freelance, or partnership income.",
      "Are non-residents required to file a tax return in Malaysia?": "Yes. Non-resident individuals earning employment or service income in Malaysia must file Form M by April 30."
    }
  },
  "malaysia-tax-reliefs-tax-reliefs-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia Tax Reliefs Calculator",
      "steps": [
        "Enter your total annual gross income.",
        "Input your EPF employee contributions (relievable up to RM 4,000 statutory cap).",
        "Enter eligible life insurance premiums (capped at RM 3,000).",
        "Add allowable education fees for yourself/children (up to RM 7,000) and parental medical expenses (up to RM 10,000).",
        "Click Calculate to see total allowable reliefs, reduced chargeable income, and exact tax saved."
      ]
    },
    "overview": {
      "title": "Malaysia Statutory Tax Reliefs & Deductions Framework",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia Tax Reliefs Calculator computes maximum tax savings from allowable deductions under LHDN guidelines for Year of Assessment 2025/2026. Evaluating EPF, life insurance, medical, education, and lifestyle reliefs against progressive brackets, it quantifies cash tax saved from legitimate relief optimization.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        Maximizing tax reliefs is the most effective legal method to reduce personal income tax in Malaysia. Under the <strong>Income Tax Act 1967</strong>, every Ringgit of tax relief reduces your <em>chargeable income</em> from your highest marginal tax bracket, directly returning cash to your pocket. LHDN provides over 20 distinct statutory relief categories spanning personal, family, healthcare, education, and investments.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">LHDN Statutory Relief Optimization Hierarchy</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Personal &amp; Family</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Basic Individual: RM 9,000</text>\n          <text x=\"125\" y=\"135\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Spouse Relief: RM 4,000</text>\n          <text x=\"125\" y=\"160\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Child Relief: RM 2k - 8k</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Disabled Individual: +RM 6k</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">EPF &amp; Insurance</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">EPF Mandatory: RM 4,000</text>\n          <text x=\"340\" y=\"135\" fill=\"#f59e0b\" font-size=\"12\" text-anchor=\"middle\">Life Insurance: RM 3,000</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Private Retirement: RM 3,000</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Total Retirement: RM 7k - 10k</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Medical &amp; Lifestyle</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Medical &amp; Parents: RM 10,000</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Self Education: RM 7,000</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Lifestyle (Books/Tech): RM 2,500</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Direct Tax Saved at Top Tier</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "Key Statutory Relief Limits (YA 2025/2026)",
      "html": "<p>Statutory limits prescribed under the annual Budget by the Ministry of Finance and LHDN:</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>Basic Individual:</strong> RM 9,000 (Automatic for all resident filers)</p>\n        <p><strong>EPF Employee Contributions:</strong> Up to RM 4,000 per year</p>\n        <p><strong>Life Insurance / Takaful:</strong> Up to RM 3,000 per year</p>\n        <p><strong>Private Retirement Scheme (PRS):</strong> Up to RM 3,000 per year</p>\n        <p><strong>Medical Treatment (Parents 60+ / Serious Diseases):</strong> Up to RM 10,000</p>\n        <p><strong>Education Fees (Self):</strong> Up to RM 7,000 for approved tertiary courses</p>\n        <p><strong>Lifestyle (Books, Internet, Tech devices, Gym):</strong> Up to RM 2,500 (+ RM 500 sports)</p>\n        <p><strong>Child Relief (Under 18 / Higher Education):</strong> RM 2,000 / RM 8,000 per child</p>\n      </div>"
    },
    "benefits": {
      "title": "Tax Relief Savings Benchmark Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: Executive with EPF &amp; Life Insurance (RM 75,000 Income)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 75,000.<br/>\n            <strong>Reliefs Claimed:</strong> Basic RM 9,000 + EPF RM 4,000 + Life Ins. RM 3,000 = RM 16,000.<br/>\n            <strong>Chargeable Income:</strong> Reduced from RM 66,000 to RM 59,000.<br/>\n            <strong>Tax Savings:</strong> Saves RM 7,000 &times; 11% marginal rate = <strong>RM 770 in cash tax saved</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: Professional with Family &amp; Medical (RM 120,000 Income)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 120,000.<br/>\n            <strong>Reliefs Claimed:</strong> Basic RM 9k + EPF RM 4k + Life Ins RM 3k + Parental Medical RM 6k + Education RM 5k = RM 27,000.<br/>\n            <strong>Chargeable Income:</strong> Reduced from RM 111,000 to RM 93,000.<br/>\n            <strong>Tax Savings:</strong> Drops out of the 25% bracket into 19%, saving <strong>RM 3,870 in direct tax</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Senior Leader Maximizing All Reliefs (RM 250,000 Income)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Income:</strong> RM 250,000.<br/>\n            <strong>Total Reliefs Claimed:</strong> RM 33,000 across all statutory caps.<br/>\n            <strong>Marginal Tax Bracket:</strong> 25%.<br/>\n            <strong>Direct Tax Savings:</strong> (RM 33,000 - RM 9,000 base) &times; 25% = <strong>RM 6,000 cash saved annually</strong>.\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "Audit Proof & Receipt Retention Rules",
      "html": "<p>Mandatory compliance guidelines issued by LHDN:</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>Original Invoices:</strong> Credit card slips alone are not acceptable proof during an LHDN tax audit; official tax invoices with itemized details are mandatory.</li>\n        <li><strong>Separate vs Joint Relief:</strong> For married couples, separate assessment allows both husband and wife to claim separate individual relief (RM 9k each) and separate EPF/lifestyle allowances.</li>\n        <li><strong>False Claims Penalties:</strong> Claiming ineligible reliefs incurs penalties up to RM 20,000 or imprisonment under Section 113 of the Income Tax Act.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "Can I claim both EPF and Life Insurance reliefs together?",
        "answer": "Yes. LHDN separates these into two statutory categories: up to RM 4,000 for mandatory EPF employee contributions and up to RM 3,000 for life insurance or family takaful premiums."
      },
      {
        "question": "What items qualify under the RM 2,500 lifestyle tax relief?",
        "answer": "Qualified items include books, journals, magazines, personal computers, smartphones, tablets, home internet subscription bills, and gym memberships."
      },
      {
        "question": "Can both husband and wife claim child relief in Malaysia?",
        "answer": "Only one parent can claim 100% of child relief, or the parents may formally elect to split the deduction 50% each on their respective tax returns."
      },
      {
        "question": "How long must I keep receipts for tax relief claims?",
        "answer": "Under Malaysian tax law (Section 82A), you must safely retain all official receipts and proof of purchase for a minimum of seven (7) years from the end of the year the return was filed."
      },
      {
        "question": "Does employer-contributed EPF qualify for employee tax relief?",
        "answer": "No. The RM 4,000 relief applies strictly to the employee's own salary deduction (typically 11%), not the employer's statutory 12% or 13% contribution."
      },
      {
        "question": "What is the tax relief limit for medical expenses incurred for elderly parents?",
        "answer": "Taxpayers can claim up to RM 10,000 for medical treatment, dental treatment, and full-time care expenses incurred for biological or legally adoptive parents."
      }
    ],
    "faqSchema": {
      "Can I claim both EPF and Life Insurance reliefs together?": "Yes. LHDN separates these into two statutory categories: up to RM 4,000 for mandatory EPF employee contributions and up to RM 3,000 for life insurance or family takaful premiums.",
      "What items qualify under the RM 2,500 lifestyle tax relief?": "Qualified items include books, journals, magazines, personal computers, smartphones, tablets, home internet subscription bills, and gym memberships.",
      "Can both husband and wife claim child relief in Malaysia?": "Only one parent can claim 100% of child relief, or the parents may formally elect to split the deduction 50% each on their respective tax returns.",
      "How long must I keep receipts for tax relief claims?": "Under Malaysian tax law (Section 82A), you must safely retain all official receipts and proof of purchase for a minimum of seven (7) years from the end of the year the return was filed.",
      "Does employer-contributed EPF qualify for employee tax relief?": "No. The RM 4,000 relief applies strictly to the employee's own salary deduction (typically 11%), not the employer's statutory 12% or 13% contribution.",
      "What is the tax relief limit for medical expenses incurred for elderly parents?": "Taxpayers can claim up to RM 10,000 for medical treatment, dental treatment, and full-time care expenses incurred for biological or legally adoptive parents."
    }
  },
  "malaysia-foreign-income-foreign-income-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia Foreign Income Tax Calculator",
      "steps": [
        "Enter your total gross foreign-source income (FSI) remitted into Malaysia in Ringgit (MYR).",
        "Select the category of foreign earnings (Foreign Dividends, Employment Remuneration, or Offshore Business Income).",
        "Specify if qualifying conditions for bilateral tax exemption under LHDN guidelines are met.",
        "Click Calculate to view taxable foreign income, applicable headline tax vs statutory exemption, and double taxation relief."
      ]
    },
    "overview": {
      "title": "Malaysia Foreign Source Income (FSI) Tax Regime",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia Foreign Income Tax Calculator evaluates tax liability on foreign-source income (FSI) remitted into Malaysia under Finance Act amendments and LHDN guidelines. It computes statutory exemptions on foreign dividends and employment income through December 31, 2026, and bilateral foreign tax credits under Section 132.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        Historically, Malaysia operated on a strictly territorial tax system under Paragraph 28, Schedule 6 of the Income Tax Act 1967. Following EU Code of Conduct requirements, foreign income remitted into Malaysia became taxable effective January 1, 2022. However, the Ministry of Finance established a comprehensive <strong>5-year exemption concession (from January 1, 2022 to December 31, 2026)</strong> for resident individuals receiving foreign dividends and income, provided bilateral tax conditions and economic substance requirements are satisfied.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Malaysia Foreign-Source Income (FSI) Decision Matrix</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Offshore Generation</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Foreign Shares &amp; Assets</text>\n          <text x=\"125\" y=\"135\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Overseas Dividends</text>\n          <text x=\"125\" y=\"160\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Foreign Employment</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Kept offshore = RM 0 Tax</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Remittance to MY</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Funds Transferred to MYR</text>\n          <text x=\"340\" y=\"135\" fill=\"#f59e0b\" font-size=\"12\" text-anchor=\"middle\">Exemption Concession</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Valid until 31 Dec 2026</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Subject to headline tax test</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Final Tax Outcome</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Exempt: 0% Tax</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">If non-exempt: Slabs</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Section 132 DTA Credit</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Offsets foreign tax paid</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "FSI Tax Rates & Exemption Conditions",
      "html": "<p>Regulatory framework issued by the Ministry of Finance and LHDN under statutory orders:</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>Exemption Period:</strong> 1 January 2022 to 31 December 2026</p>\n        <p><strong>Resident Individuals:</strong> 100% Tax Exemption on foreign dividend income received in Malaysia from all territories</p>\n        <p><strong>Resident Companies / LLPs:</strong> Foreign dividend income exempt provided: (1) Headline tax rate of source territory &ge; 15%, and (2) Dividends have been subjected to foreign tax</p>\n        <p><strong>Non-Exempt Foreign Income:</strong> Aggregated with total Malaysian income and taxed at progressive resident rates (0% to 30%)</p>\n        <p><strong>Bilateral Tax Relief (Sec 132):</strong> Maximum relief = MIN(Foreign Tax Paid, Malaysian Tax Attributable to Foreign Income)</p>\n      </div>"
    },
    "benefits": {
      "title": "Foreign-Source Income Benchmark Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: US Stock Dividends Remitted (RM 45,000 / $10,000 USD)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Foreign Income:</strong> RM 45,000 in dividends from US equities.<br/>\n            <strong>US Withholding:</strong> 30% IRS withholding deducted at source.<br/>\n            <strong>Malaysian Tax Concession:</strong> Individual resident receiving foreign dividends through 2026.<br/>\n            <strong>Malaysian Tax Payable:</strong> <strong>RM 0 (100% Statutory Exemption)</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: Singapore Employment Remittance (RM 180,000 / $50,000 SGD)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Foreign Income:</strong> RM 180,000 earned from employment physically exercised in Singapore.<br/>\n            <strong>Tax Status:</strong> Employment was exercised outside Malaysia; tax paid to IRAS.<br/>\n            <strong>Remittance Treatment:</strong> Remitted by resident individual.<br/>\n            <strong>Malaysian Tax:</strong> <strong>RM 0</strong> (Non-taxable under LHDN guidelines on overseas employment).\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Non-Qualifying Foreign Income (RM 100,000 Remitted)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Income:</strong> RM 100,000 offshore freelance services remitted.<br/>\n            <strong>Foreign Tax Paid:</strong> RM 5,000 paid to source country.<br/>\n            <strong>Gross Malaysian Tax:</strong> RM 100k @ resident rates = RM 9,400.<br/>\n            <strong>Section 132 DTA Credit:</strong> Less RM 5,000 foreign tax.<br/>\n            <strong>Net Malaysian Tax Payable:</strong> <strong>RM 4,400</strong>.\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "Economic Substance Requirements & Exemption Expiry",
      "html": "<p>Critical statutory restrictions governing FSI in Malaysia:</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>December 31, 2026 Sunset:</strong> The current tax exemption on foreign dividends is a temporary concession expiring on 31 December 2026 unless extended by Parliament.</li>\n        <li><strong>Headline Tax Test:</strong> For companies and non-individual residents, the country where the foreign income originated must have a headline corporate tax rate of at least 15%.</li>\n        <li><strong>Offshore Funds Unremitted:</strong> Foreign income kept in overseas accounts and never remitted to a Malaysian bank account is completely outside Malaysian tax scope.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "Is foreign income remitted into Malaysia taxable in 2025/2026?",
        "answer": "For resident individuals, foreign dividend income remitted into Malaysia is 100% tax-exempt until December 31, 2026, under official Ministry of Finance concession orders."
      },
      {
        "question": "What happens if foreign income is kept in an overseas bank account?",
        "answer": "Foreign earnings that remain in overseas bank accounts and are never brought into or remitted into Malaysia are not subject to Malaysian tax."
      },
      {
        "question": "How do I claim Double Taxation Agreement (DTA) relief in Malaysia?",
        "answer": "Under Section 132 of the Income Tax Act 1967, you claim a bilateral tax credit on your Form BE/B by providing proof of foreign tax paid to offset your Malaysian tax liability."
      },
      {
        "question": "Are capital gains on foreign stocks taxable when brought into Malaysia?",
        "answer": "Capital gains on foreign stock sales received by individuals are generally exempt from personal income tax in Malaysia unless classified as active trading business income."
      },
      {
        "question": "Do non-residents pay tax on foreign income remitted into Malaysia?",
        "answer": "No. Non-resident individuals are completely exempt from Malaysian tax on foreign-source income received in Malaysia."
      },
      {
        "question": "What is the headline tax requirement for corporate foreign dividend exemption?",
        "answer": "The source territory where the foreign dividend originates must have a statutory headline corporate income tax rate of at least 15%."
      }
    ],
    "faqSchema": {
      "Is foreign income remitted into Malaysia taxable in 2025/2026?": "For resident individuals, foreign dividend income remitted into Malaysia is 100% tax-exempt until December 31, 2026, under official Ministry of Finance concession orders.",
      "What happens if foreign income is kept in an overseas bank account?": "Foreign earnings that remain in overseas bank accounts and are never brought into or remitted into Malaysia are not subject to Malaysian tax.",
      "How do I claim Double Taxation Agreement (DTA) relief in Malaysia?": "Under Section 132 of the Income Tax Act 1967, you claim a bilateral tax credit on your Form BE/B by providing proof of foreign tax paid to offset your Malaysian tax liability.",
      "Are capital gains on foreign stocks taxable when brought into Malaysia?": "Capital gains on foreign stock sales received by individuals are generally exempt from personal income tax in Malaysia unless classified as active trading business income.",
      "Do non-residents pay tax on foreign income remitted into Malaysia?": "No. Non-resident individuals are completely exempt from Malaysian tax on foreign-source income received in Malaysia.",
      "What is the headline tax requirement for corporate foreign dividend exemption?": "The source territory where the foreign dividend originates must have a statutory headline corporate income tax rate of at least 15%."
    }
  },
  "malaysia-rental-income-rental-income-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia Rental Income Tax Calculator",
      "steps": [
        "Enter your gross annual rental income received from residential or commercial properties.",
        "Input allowable direct property expenses: assessment tax (cukai pintu), quit rent (cukai tanah), fire insurance, and mortgage interest on the loan.",
        "Include tenant replacement costs, advertising, and property maintenance repairs.",
        "Click Calculate to view net taxable rental income (Section 4d) and progressive income tax payable."
      ]
    },
    "overview": {
      "title": "Malaysia Rental Income Tax (Section 4d vs Section 4a)",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia Rental Income Tax Calculator computes net chargeable rental income under Section 4(d) of the Income Tax Act 1967. Evaluating statutory allowable expenses—including mortgage interest, cukai pintu, cukai tanah, and maintenance—it models legal tax deductions against personal progressive tax slabs.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        In Malaysia, rental earnings are classified under <strong>Section 4(d) of the Income Tax Act 1967</strong> for passive property leasing, or <strong>Section 4(a)</strong> if comprehensive maintenance and business-like commercial management services are actively provided. Unlike passive interest or dividends, property owners are entitled to deduct genuine direct operating expenses wholly and exclusively incurred in producing rental income.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Malaysia Rental Income Tax Deduction Architecture</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">1. Gross Rental Inflow</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Monthly Tenancy Rents</text>\n          <text x=\"125\" y=\"135\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Parking &amp; Storage Leases</text>\n          <text x=\"125\" y=\"160\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Tenancy Deposits</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Security deposits not taxable</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">2. Allowable Expenses</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Mortgage Loan Interest</text>\n          <text x=\"340\" y=\"135\" fill=\"#f59e0b\" font-size=\"12\" text-anchor=\"middle\">Cukai Pintu &amp; Cukai Tanah</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Fire Insurance &amp; Repairs</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Tenant renewal legal fees</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">3. Net Chargeable Rent</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Gross - Allowable Exp</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Aggregated on Form BE/B</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Taxed at marginal slab</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">Losses carried forward (Sec 4a)</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "Allowable vs Non-Allowable Rental Deductions",
      "html": "<p>Guidelines prescribed by Public Ruling No. 12/2018 (Income from Letting of Real Property):</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>ALLOWABLE EXPENSES (Fully Deductible):</strong></p>\n        <p>&bull; Assessment Tax (Cukai Pintu) paid to local municipal councils (DBKL, MBPJ, etc.)</p>\n        <p>&bull; Quit Rent (Cukai Tanah / Parcel Rent) paid to State Land Registry</p>\n        <p>&bull; Mortgage Interest on loan taken specifically to acquire the property (principal repayment is non-deductible)</p>\n        <p>&bull; Fire, storm, and property insurance premiums</p>\n        <p>&bull; Routine maintenance, painting, and plumbing repairs to maintain existing state</p>\n        <p>&bull; Renewal legal fees and stamp duty for existing tenancy extension</p>\n        <p class=\"mt-2\"><strong>NON-ALLOWABLE EXPENSES:</strong></p>\n        <p>&bull; Initial advertising, initial agent commission, and initial tenancy agreement legal fees (capital nature)</p>\n        <p>&bull; Renovation, expansion, or improvements that increase property capital value</p>\n      </div>"
    },
    "benefits": {
      "title": "Rental Income Benchmark Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: Condominium Rental (RM 24,000 Annual Gross Rent)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Rent:</strong> RM 24,000 (RM 2,000/month).<br/>\n            <strong>Expenses:</strong> Cukai Pintu RM 800 + Quit Rent RM 100 + Fire Ins. RM 300 + Mortgage Interest RM 8,000 + Maintenance RM 1,200 = RM 10,400.<br/>\n            <strong>Net Taxable Rental Income:</strong> RM 24,000 - RM 10,400 = <strong>RM 13,600</strong>.<br/>\n            <strong>Tax Impact:</strong> Taxpayer with existing RM 60k salary pays 11% marginal tax = <strong>RM 1,496</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: Commercial Shoplot (RM 72,000 Annual Gross Rent)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Rent:</strong> RM 72,000 (RM 6,000/month).<br/>\n            <strong>Expenses:</strong> Assessment RM 3,600 + Quit Rent RM 600 + Mortgage Interest RM 22,000 + Roof Repair RM 4,800 = RM 31,000.<br/>\n            <strong>Net Chargeable Rent:</strong> <strong>RM 41,000</strong>.<br/>\n            <strong>Tax Savings from Deductions:</strong> RM 31,000 deductions save over <strong>RM 5,890 in cash tax</strong>.\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Negatively Geared Property (Rental Loss)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Gross Rent:</strong> RM 18,000.<br/>\n            <strong>Allowable Expenses:</strong> RM 21,500 (High mortgage interest and repair).<br/>\n            <strong>Net Result:</strong> RM 3,500 rental deficit.<br/>\n            <strong>Tax Payable:</strong> <strong>RM 0</strong> under Section 4(d). Note: Passive rental losses under Sec 4(d) cannot offset employment salary.\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "Passive Rental vs Active Business Rules",
      "html": "<p>Important tax distinctions established under LHDN rulings:</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>Section 4(d) Passive Letting:</strong> Rental losses from one property can offset rental profits from another property, but rental losses CANNOT offset employment salary or business profit.</li>\n        <li><strong>Section 4(a) Business Letting:</strong> If you provide active cleaning, laundry, or hospitality services (like full-service homestays or commercial serviced offices), rental income is treated as business income, allowing losses to offset other income and qualify for capital allowances.</li>\n        <li><strong>Security Deposit Exclusion:</strong> Security and utility deposits received from tenants are not taxable as income, provided they are refundable upon tenancy completion.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "Is rental income taxed separately or combined with my salary in Malaysia?",
        "answer": "Net rental income after allowable expenses is aggregated with your employment salary and other earnings on your annual Form BE/B and taxed at your applicable progressive tax bracket."
      },
      {
        "question": "Can I deduct my entire monthly housing loan repayment against rental income?",
        "answer": "No. You can only deduct the interest portion of your housing loan. The principal repayment portion represents capital investment and is strictly non-deductible."
      },
      {
        "question": "What property expenses are legally tax-deductible in Malaysia?",
        "answer": "Allowable deductions include assessment tax (cukai pintu), quit rent (cukai tanah), fire/property insurance, mortgage interest, tenancy renewal legal fees, and routine maintenance/repairs."
      },
      {
        "question": "Can I deduct the cost of initial renovations and interior design?",
        "answer": "No. Initial renovations, furniture purchases, and property improvements are deemed capital expenditures and cannot be deducted against Section 4(d) rental income."
      },
      {
        "question": "What happens if my rental property makes a net financial loss?",
        "answer": "Under Section 4(d), rental losses can be carried forward to offset future rental income from the same or other rental properties, but cannot offset your salary income."
      },
      {
        "question": "Are Airbnb and short-term rental earnings taxed as rental income?",
        "answer": "If active ancillary services (such as daily housekeeping, meals, or concierge services) are provided, LHDN classifies Airbnb as business income under Section 4(a) rather than passive rental under Section 4(d)."
      }
    ],
    "faqSchema": {
      "Is rental income taxed separately or combined with my salary in Malaysia?": "Net rental income after allowable expenses is aggregated with your employment salary and other earnings on your annual Form BE/B and taxed at your applicable progressive tax bracket.",
      "Can I deduct my entire monthly housing loan repayment against rental income?": "No. You can only deduct the interest portion of your housing loan. The principal repayment portion represents capital investment and is strictly non-deductible.",
      "What property expenses are legally tax-deductible in Malaysia?": "Allowable deductions include assessment tax (cukai pintu), quit rent (cukai tanah), fire/property insurance, mortgage interest, tenancy renewal legal fees, and routine maintenance/repairs.",
      "Can I deduct the cost of initial renovations and interior design?": "No. Initial renovations, furniture purchases, and property improvements are deemed capital expenditures and cannot be deducted against Section 4(d) rental income.",
      "What happens if my rental property makes a net financial loss?": "Under Section 4(d), rental losses can be carried forward to offset future rental income from the same or other rental properties, but cannot offset your salary income.",
      "Are Airbnb and short-term rental earnings taxed as rental income?": "If active ancillary services (such as daily housekeeping, meals, or concierge services) are provided, LHDN classifies Airbnb as business income under Section 4(a) rather than passive rental under Section 4(d)."
    }
  },
  "malaysia-business-income-business-income-calculator": {
    "howToUse": {
      "title": "How to Use the Malaysia Business Income Tax Calculator",
      "steps": [
        "Enter your total annual gross business turnover or revenue.",
        "Input allowable business operating expenses (staff payroll, office rental, utilities, inventory costs, and professional services).",
        "Select your legal business entity type (Sole Proprietorship, Partnership, SME Company, or Large Corporation).",
        "Click Calculate to view net chargeable business profit, applicable statutory corporate/progressive tax rates, and effective tax liability."
      ]
    },
    "overview": {
      "title": "Malaysia Business & SME Corporate Tax Architecture",
      "html": "<div class=\"bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4\">\n        <p class=\"text-sm font-semibold text-emerald-800 dark:text-emerald-200\">\n          The Malaysia Business Income Tax Calculator computes statutory tax liabilities for sole proprietors, partnerships, and companies under LHDN regulations for Year of Assessment 2025/2026. Evaluating progressive individual rates (0% to 30%) versus preferential SME corporate tiers (15% on first RM 150k, 17% on next RM 450k, 24% on excess), it models complete business tax liability.\n        </p>\n      </div>\n      <p class=\"mt-3\">\n        In Malaysia, enterprise taxation is divided into two primary statutory frameworks based on legal structure:\n        <strong>Sole proprietors and conventional partnerships</strong> are taxed at personal progressive income tax rates (0% to 30%) on net business profit via <strong>Form B</strong>. In contrast, <strong>incorporated companies (Sdn Bhd)</strong> pay corporate income tax via <strong>Form C</strong> under preferential SME tiers (15% on first RM 150k, 17% up to RM 600k, and 24% on excess) provided paid-up capital is RM 2.5 million or less.\n      </p>\n      <div class=\"my-6 flex justify-center\">\n        <svg viewBox=\"0 0 680 230\" class=\"w-full max-w-2xl h-auto font-sans\">\n          <rect width=\"680\" height=\"230\" rx=\"12\" fill=\"#0f172a\" />\n          <text x=\"340\" y=\"30\" fill=\"#f8fafc\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Malaysia Business Entity Taxation Comparison</text>\n          \n          <rect x=\"35\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n          <text x=\"125\" y=\"90\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Sole Prop / Partnership</text>\n          <text x=\"125\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Filing: Form B</text>\n          <text x=\"125\" y=\"135\" fill=\"#38bdf8\" font-size=\"12\" text-anchor=\"middle\">Progressive 0% to 30%</text>\n          <text x=\"125\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Personal Reliefs Allowed</text>\n          <text x=\"125\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Deadline: 30 June</text>\n\n          <rect x=\"250\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n          <text x=\"340\" y=\"90\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">SME Company (Sdn Bhd)</text>\n          <text x=\"340\" y=\"115\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Capital &le; RM 2.5M</text>\n          <text x=\"340\" y=\"135\" fill=\"#f59e0b\" font-size=\"12\" text-anchor=\"middle\">First RM 150k @ 15%</text>\n          <text x=\"340\" y=\"160\" fill=\"#f8fafc\" font-size=\"11\" text-anchor=\"middle\">Next RM 450k @ 17%</text>\n          <text x=\"340\" y=\"180\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Remainder @ 24%</text>\n\n          <rect x=\"465\" y=\"65\" width=\"180\" height=\"135\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\" />\n          <text x=\"555\" y=\"90\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Large Enterprise</text>\n          <text x=\"555\" y=\"115\" fill=\"#10b981\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">24.0%</text>\n          <text x=\"555\" y=\"140\" fill=\"#f8fafc\" font-size=\"12\" text-anchor=\"middle\">Flat Statutory Corporate Rate</text>\n          <text x=\"555\" y=\"160\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Capital Allowances Deductible</text>\n          <text x=\"555\" y=\"180\" fill=\"#10b981\" font-size=\"11\" text-anchor=\"middle\">CP204 Bi-monthly Estimates</text>\n        </svg>\n      </div>"
    },
    "formula": {
      "title": "Business Tax Slabs & Corporate Tier Schedules",
      "html": "<p>Statutory corporate and enterprise tax schedules for Year of Assessment 2025/2026:</p>\n      <div class=\"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg my-3 font-mono text-xs\">\n        <p><strong>SME COMPANY (Sdn Bhd with paid-up capital &le; RM 2.5M &amp; gross business &le; RM 50M):</strong></p>\n        <p>&bull; First RM 150,000 Chargeable Income: 15% (Tax = RM 22,500)</p>\n        <p>&bull; Next RM 450,000 (RM 150,001 to RM 600,000): 17% (Tax = RM 76,500)</p>\n        <p>&bull; Chargeable Income exceeding RM 600,000: 24%</p>\n        <p class=\"mt-2\"><strong>NON-SME / LARGE CORPORATE:</strong></p>\n        <p>&bull; Flat 24% on all chargeable income</p>\n        <p class=\"mt-2\"><strong>SOLE PROPRIETORSHIPS &amp; PARTNERSHIPS:</strong></p>\n        <p>&bull; Net business profits assessed at individual progressive rates from 0% to 30%</p>\n      </div>"
    },
    "benefits": {
      "title": "Business Income Tax Benchmark Scenarios",
      "html": "<div class=\"space-y-4\">\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario A: Sole Proprietor Freelance Agency (RM 120,000 Net Profit)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Revenue:</strong> RM 200,000 | <strong>Expenses:</strong> RM 80,000.<br/>\n            <strong>Chargeable Profit:</strong> RM 120,000.<br/>\n            <strong>Filing:</strong> Form B (Resident Progressive Rates).<br/>\n            <strong>Tax Breakdown:</strong> First RM 100k = RM 9,400 + remaining RM 20k @ 25% (RM 5,000) = <strong>RM 14,400</strong> (Effective Rate: 12.0%).\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario B: Growing Tech SME Sdn Bhd (RM 500,000 Net Profit)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Chargeable Income:</strong> RM 500,000.<br/>\n            <strong>SME Tiers:</strong> First RM 150k @ 15% (RM 22,500) + remaining RM 350k @ 17% (RM 59,500).<br/>\n            <strong>Total Corporate Tax:</strong> <strong>RM 82,000</strong>.<br/>\n            <strong>Effective Rate:</strong> <strong>16.40%</strong> (Saves RM 38,000 compared to 24% standard rate).\n          </p>\n        </div>\n        <div class=\"border border-slate-200 dark:border-slate-700 rounded-lg p-4\">\n          <h4 class=\"font-bold text-slate-800 dark:text-slate-100 text-sm\">Scenario C: Established Enterprise Sdn Bhd (RM 1,500,000 Net Profit)</h4>\n          <p class=\"text-xs text-slate-600 dark:text-slate-300 mt-1\">\n            <strong>Chargeable Income:</strong> RM 1,500,000.<br/>\n            <strong>Tax Computation:</strong> First RM 150k @ 15% (RM 22.5k) + next RM 450k @ 17% (RM 76.5k) + remaining RM 900k @ 24% (RM 216k).<br/>\n            <strong>Total Tax:</strong> <strong>RM 315,000</strong> (Effective Rate: 21.0%).\n          </p>\n        </div>\n      </div>"
    },
    "limitations": {
      "title": "CP204 Tax Estimates & Statutory Deductibility",
      "html": "<p>Mandatory tax compliance requirements for Malaysian businesses:</p>\n      <ul class=\"list-disc pl-5 mt-2 space-y-1 text-sm\">\n        <li><strong>CP204 Bi-Monthly Installments:</strong> Incorporated companies must furnish an estimate of tax payable (Form CP204) 30 days before the start of their financial year and pay monthly installments.</li>\n        <li><strong>Capital Allowances:</strong> Depreciation charged in accounting statements is not tax-deductible; instead, LHDN statutory capital allowances (Initial &amp; Annual Allowance) must be claimed on qualifying plant and machinery.</li>\n        <li><strong>SME Qualification Rule:</strong> To qualify for 15%/17% SME rates, the company must not be affiliated with or owned more than 20% by a non-SME corporation.</li>\n      </ul>"
    },
    "faq": [
      {
        "question": "What is the corporate tax rate for SME companies in Malaysia?",
        "answer": "For SMEs with paid-up capital up to RM 2.5 million, the preferential tax rate is 15% on the first RM 150,000, 17% on the next RM 450,000, and 24% on all chargeable income exceeding RM 600,000."
      },
      {
        "question": "How is a sole proprietorship taxed differently from an Sdn Bhd?",
        "answer": "A sole proprietorship is taxed on net business profit at individual progressive rates (0% to 30%) on Form B, whereas an Sdn Bhd is a separate legal entity paying corporate tax at 15%/17%/24% on Form C."
      },
      {
        "question": "What expenses are tax-deductible for a Malaysian business?",
        "answer": "Operating expenses wholly and exclusively incurred in the production of income—such as staff salaries, EPF/SOCSO, commercial rental, utilities, marketing, and professional fees—are fully deductible."
      },
      {
        "question": "What is Form CP204 in Malaysia?",
        "answer": "Form CP204 is the mandatory notification of estimated tax payable that companies must submit to LHDN annually, followed by monthly advance tax installment payments."
      },
      {
        "question": "Can business losses be carried forward in Malaysia?",
        "answer": "Yes. Unabsorbed business losses can be carried forward for up to ten (10) consecutive years of assessment to offset future business income under Section 44(5) of the Income Tax Act."
      },
      {
        "question": "What is the filing deadline for Malaysian business tax returns?",
        "answer": "Sole proprietors and partnerships must file Form B by June 30. Incorporated companies must file Form C within seven (7) months from the close of their accounting financial period."
      }
    ],
    "faqSchema": {
      "What is the corporate tax rate for SME companies in Malaysia?": "For SMEs with paid-up capital up to RM 2.5 million, the preferential tax rate is 15% on the first RM 150,000, 17% on the next RM 450,000, and 24% on all chargeable income exceeding RM 600,000.",
      "How is a sole proprietorship taxed differently from an Sdn Bhd?": "A sole proprietorship is taxed on net business profit at individual progressive rates (0% to 30%) on Form B, whereas an Sdn Bhd is a separate legal entity paying corporate tax at 15%/17%/24% on Form C.",
      "What expenses are tax-deductible for a Malaysian business?": "Operating expenses wholly and exclusively incurred in the production of income—such as staff salaries, EPF/SOCSO, commercial rental, utilities, marketing, and professional fees—are fully deductible.",
      "What is Form CP204 in Malaysia?": "Form CP204 is the mandatory notification of estimated tax payable that companies must submit to LHDN annually, followed by monthly advance tax installment payments.",
      "Can business losses be carried forward in Malaysia?": "Yes. Unabsorbed business losses can be carried forward for up to ten (10) consecutive years of assessment to offset future business income under Section 44(5) of the Income Tax Act.",
      "What is the filing deadline for Malaysian business tax returns?": "Sole proprietors and partnerships must file Form B by June 30. Incorporated companies must file Form C within seven (7) months from the close of their accounting financial period."
    }
  }
};
