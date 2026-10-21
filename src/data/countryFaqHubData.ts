export interface FaqItem {
  question: string;
  answer: string;
  keyPoints?: string[];
  example?: string;
}

export interface FaqCategorySection {
  slug: string;
  name: string;
  description: string;
  calculator?: {
    slug: string;
    name: string;
    description: string;
  };
  faqs: FaqItem[];
}

export interface TaxBracketRow {
  bracket: string;
  rate: string;
  notes: string;
}

export interface CountryFaqHub {
  countrySlug: string;
  countryName: string;
  flag: string;
  currency: string;
  taxYear: string;
  officialTaxAuthority: string;
  taxAuthorityUrl: string;
  filingDeadline: string;
  paymentDeadline: string;
  metaTitle: string;
  metaDescription: string;
  executiveSummary: string;
  residencyRuleSummary: string;
  taxBracketsIntro: string;
  taxBrackets: TaxBracketRow[];
  sections: FaqCategorySection[];
  filingPortalName: string;
  filingPortalUrl: string;
  filingProcessSteps: string[];
  penaltySummary: string;
}

export const countryFaqHubs: Record<string, CountryFaqHub> = {
  "united-states": {
    countrySlug: "united-states",
    countryName: "United States",
    flag: "🇺🇸",
    currency: "USD ($)",
    taxYear: "2025/2026",
    officialTaxAuthority: "Internal Revenue Service (IRS)",
    taxAuthorityUrl: "https://www.irs.gov",
    filingDeadline: "April 15, 2026 (or October 15 with Form 4868 extension)",
    paymentDeadline: "April 15, 2026 (extensions apply to filing only, not payments)",
    metaTitle: "United States Tax FAQs (2025/2026): IRS Slabs, Brackets & Filing Answers | Finsiva",
    metaDescription: "Exhaustive US Federal tax FAQ hub for 2025/2026. Authoritative answers on IRS progressive brackets (10%-37%), standard vs itemized deductions, FICA, capital gains, and expat filing rules.",
    executiveSummary: "The United States enforces a progressive federal income tax system alongside state and municipal taxes across 50 jurisdictions. Tax obligations are determined by worldwide citizenship-based taxation for US citizens and green card holders, while non-resident aliens are taxed exclusively on US-sourced income. Tax year 2025 introduces updated inflation-adjusted bracket thresholds and higher standard deductions under IRS Revenue Procedure 2024-40.",
    residencyRuleSummary: "US citizens and lawful permanent residents (green card holders) are subject to US taxation on their worldwide earnings, regardless of where they live. Foreign nationals are treated as resident aliens for tax purposes if they satisfy the Substantial Presence Test (at least 31 days during the current year and 183 weighted days over the three-year period). Non-residents must file Form 1040-NR.",
    taxBracketsIntro: "Federal income tax for tax year 2025 is calculated using seven marginal tax brackets. Your taxable income is taxed in tranches, meaning moving into a higher bracket only increases the tax rate on dollars earned above that threshold.",
    taxBrackets: [
      { bracket: "Up to $11,925 (Single) / Up to $23,850 (Joint)", rate: "10%", notes: "Lowest marginal rate on basic taxable earnings" },
      { bracket: "$11,926 – $48,475 (Single) / $23,851 – $96,950 (Joint)", rate: "12%", notes: "Applies to majority of entry and mid-tier earners" },
      { bracket: "$48,476 – $103,350 (Single) / $96,951 – $206,700 (Joint)", rate: "22%", notes: "Common bracket for professional salaries" },
      { bracket: "$103,351 – $197,300 (Single) / $206,701 – $394,600 (Joint)", rate: "24%", notes: "Upper-middle income bracket" },
      { bracket: "$197,301 – $250,525 (Single) / $394,601 – $501,050 (Joint)", rate: "32%", notes: "High earner federal bracket" },
      { bracket: "$250,526 – $626,350 (Single) / $501,051 – $751,600 (Joint)", rate: "35%", notes: "Executive and high net-worth bracket" },
      { bracket: "Over $626,350 (Single) / Over $751,600 (Joint)", rate: "37%", notes: "Top statutory marginal rate" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Federal Income Tax & Filing Rules",
        description: "Core rules governing Form 1040, progressive marginal brackets, and standard vs itemized deduction strategies.",
        calculator: {
          slug: "federal-income-tax",
          name: "Federal Income Tax Calculator",
          description: "Estimate your exact federal tax liability and effective tax rate under 2025 IRS brackets."
        },
        faqs: [
          {
            question: "When is the federal tax filing deadline for tax year 2025?",
            answer: "For most US taxpayers, the federal income tax filing deadline is Wednesday, April 15, 2026. If you live in Maine or Massachusetts, state holidays (Patriots' Day and Emancipation Day) typically extend this deadline by one or two business days. If you require additional time to organize your documents, you can submit IRS Form 4868 on or before April 15 to secure an automatic six-month extension until October 15, 2026. However, an extension of time to file is not an extension of time to pay: any estimated tax owed must be remitted by April 15 to avoid failure-to-pay penalties and compounding daily interest under IRC Section 6651.",
            keyPoints: [
              "Filing deadline: April 15, 2026 for most taxpayers.",
              "Automatic 6-month extension to October 15 via Form 4868.",
              "Payment deadline remains April 15 even with an extension."
            ]
          },
          {
            question: "What is the standard deduction for tax year 2025 versus itemizing?",
            answer: "For tax year 2025, the IRS standard deduction amounts adjusted for inflation are $15,000 for single filers, $30,000 for married couples filing jointly, and $22,500 for heads of household. Taxpayers aged 65 or older or blind receive an additional standard deduction of $1,600 (for married individuals) or $2,000 (for unmarried filers). You should only itemize deductions on Schedule A if your combined qualified deductions—including mortgage interest on up to $750,000 of principal debt, state and local taxes (SALT capped at $10,000), qualifying medical expenses exceeding 7.5% of AGI, and charitable donations—exceed your standard deduction limit.",
            keyPoints: [
              "Single filers: $15,000.",
              "Married filing jointly: $30,000.",
              "Head of household: $22,500.",
              "SALT deduction remains strictly capped at $10,000."
            ]
          },
          {
            question: "Do US citizens and Green Card holders living abroad need to file US taxes?",
            answer: "Yes. The United States is one of only two nations that enforces citizenship-based worldwide taxation. If you are a US citizen or lawful permanent resident (Green Card holder) residing outside the country, you must file an annual Form 1040 if your worldwide gross income exceeds the standard filing threshold. To prevent double taxation, eligible expats can utilize the Foreign Earned Income Exclusion (FEIE, Form 2555), which excludes up to $130,000 (2025 indexed threshold) of foreign earned wages, or claim the Foreign Tax Credit (FTC, Form 1116) dollar-for-dollar against taxes paid to a foreign government. Expats receive an automatic two-month filing extension to June 15.",
            keyPoints: [
              "Worldwide income must be reported regardless of residence.",
              "FEIE Form 2555 excludes over $126,000+ of foreign salary.",
              "FTC Form 1116 gives tax credits for income tax paid overseas.",
              "FBAR (FinCEN 114) required if foreign bank balances exceed $10,000."
            ]
          }
        ]
      },
      {
        slug: "payroll-tax",
        name: "Payroll & FICA Withholding Taxes",
        description: "Social Security, Medicare, and Additional Medicare taxes deducted from W-2 wages and self-employment earnings.",
        calculator: {
          slug: "effective-tax-rate",
          name: "Effective Tax Rate Calculator",
          description: "Calculate your overall tax bite including federal income tax, state tax, and FICA payroll deductions."
        },
        faqs: [
          {
            question: "What is the FICA tax rate and the 2025 Social Security wage base cap?",
            answer: "FICA (Federal Insurance Contributions Act) tax consists of two components: Social Security and Medicare. For employees, the Social Security tax rate is 6.2% on gross earnings up to the annual wage base limit of $176,100 for 2025. Any wages earned above $176,100 are exempt from the 6.2% Social Security levy. The Medicare tax rate is 1.45% on all earnings with no upper income cap. Employers match both contributions equally (6.2% and 1.45%), bringing the total FICA contribution to 15.3%. Self-employed individuals pay the full 15.3% as Self-Employment (SE) tax via Schedule SE, but can deduct the employer-equivalent half (50%) above the line on Form 1040.",
            keyPoints: [
              "Social Security: 6.2% up to $176,100 wage cap.",
              "Medicare: 1.45% uncapped on all earned wages.",
              "Employer matches 7.65%, making total statutory contribution 15.3%."
            ]
          },
          {
            question: "Who is subject to the 0.9% Additional Medicare Tax?",
            answer: "Under Section 3101(b) of the Internal Revenue Code, an Additional Medicare Tax of 0.9% applies to wages, compensation, and self-employment income exceeding statutory thresholds: $200,000 for single taxpayers and heads of household, $250,000 for married couples filing jointly, and $125,000 for married taxpayers filing separately. Employers are required to begin withholding this 0.9% once an individual employee's wages surpass $200,000 in a calendar year, regardless of the employee's filing status or spouse's income. Reconciliation is completed on IRS Form 8959.",
            keyPoints: [
              "Single/Head of Household threshold: $200,000.",
              "Married filing jointly threshold: $250,000.",
              "Reported and reconciled on IRS Form 8959."
            ]
          }
        ]
      },
      {
        slug: "corporate-tax",
        name: "Corporate & Business Taxation",
        description: "C-Corporation flat rates, S-Corporation pass-through rules, and self-employment business obligations.",
        calculator: {
          slug: "state-income-tax",
          name: "State Income Tax Calculator",
          description: "Compare business and individual income tax liabilities across all 50 states."
        },
        faqs: [
          {
            question: "What is the US federal corporate income tax rate for C-Corporations?",
            answer: "Under the Tax Cuts and Jobs Act (TCJA), the US federal corporate income tax rate is a flat 21% on taxable income for domestic C-Corporations. C-Corps are separate legal entities that file Form 1120. Profits are subject to corporate tax at 21%, and when distributed as dividends to individual shareholders, they face a second layer of taxation (qualified dividends are taxed at 0%, 15%, or 20%), creating the classic double taxation model. Additionally, corporations must consider state corporate income taxes, which vary from 0% (e.g., Texas, Washington, Wyoming, South Dakota) to over 9% (e.g., California, New Jersey, Minnesota).",
            keyPoints: [
              "Federal C-Corp tax rate: Flat 21%.",
              "Subject to dividend distribution taxation at the shareholder level.",
              "State corporate taxes range from 0% to 11.5%."
            ]
          },
          {
            question: "How does pass-through taxation work for LLCs and S-Corporations?",
            answer: "LLCs and S-Corporations are pass-through entities for US tax purposes. The entity itself pays no federal corporate income tax. Instead, business profits, losses, credits, and deductions flow directly to the owners' personal tax returns via Schedule K-1. Single-member LLCs are disregarded entities taxed on Schedule C. S-Corporations allow owner-employees to split net profit between a 'reasonable salary' (subject to FICA and payroll withholding) and shareholder distributions (exempt from FICA), generating substantial tax savings while preserving the Section 199A Qualified Business Income (QBI) deduction of up to 20%.",
            keyPoints: [
              "No corporate entity-level federal income tax.",
              "Profits flow through to personal Form 1040 via Schedule K-1.",
              "S-Corp structure allows reduction of self-employment tax on distributions."
            ]
          }
        ]
      },
      {
        slug: "capital-gains-tax",
        name: "Capital Gains & Investment Income",
        description: "Short-term vs long-term capital gains rates, Net Investment Income Tax (NIIT), and loss harvesting.",
        calculator: {
          slug: "effective-tax-rate",
          name: "Effective Tax Rate Calculator",
          description: "Model capital gains liabilities and determine exact blended tax on investment returns."
        },
        faqs: [
          {
            question: "What are the 2025 long-term capital gains tax brackets and rates?",
            answer: "Long-term capital gains apply to profitable assets held for more than one year before sale. For tax year 2025, long-term capital gains rates are 0%, 15%, and 20% based on taxable income thresholds. For single filers, the 0% rate applies up to $48,350; the 15% rate applies from $48,351 to $533,400; and the 20% rate applies to taxable income exceeding $533,400. For married filing jointly, the 0% threshold extends to $96,700, and the 20% rate starts at $600,050. Assets held for one year or less are treated as short-term capital gains and taxed as ordinary income at your highest marginal rate (up to 37%).",
            keyPoints: [
              "Holding period: Over 12 months qualifies for preferential 0%/15%/20% rates.",
              "0% bracket extends up to $48,350 (single) / $96,700 (joint).",
              "Short-term gains are taxed at ordinary income rates up to 37%."
            ]
          },
          {
            question: "What is the Net Investment Income Tax (NIIT) of 3.8%?",
            answer: "The Net Investment Income Tax (NIIT) is a 3.8% surtax levied under Section 1411 of the Internal Revenue Code. It applies to individuals, estates, and trusts that have net investment income (including capital gains, dividends, interest, royalties, and passive rental income) and modified adjusted gross income (MAGI) exceeding statutory thresholds: $200,000 for single filers, $250,000 for married couples filing jointly, and $125,000 for married filing separately. The 3.8% tax applies to the lesser of net investment income or the amount by which MAGI exceeds the threshold.",
            keyPoints: [
              "3.8% surtax on passive investment gains and dividends.",
              "Triggered at $200k MAGI (single) / $250k MAGI (joint).",
              "Top federal tax rate on long-term capital gains reaches 23.8%."
            ]
          }
        ]
      }
    ],
    filingPortalName: "IRS Free File & Direct File / IRS e-File",
    filingPortalUrl: "https://www.irs.gov/filing",
    filingProcessSteps: [
      "Gather W-2, 1099-NEC/MISC/INT, and 1098 mortgage interest statements.",
      "Calculate Adjusted Gross Income (AGI) and evaluate Standard Deduction ($15,000/$30,000) versus Itemizing.",
      "Prepare Form 1040 and necessary schedules (Schedule 1, Schedule A, Schedule C, Schedule D).",
      "E-file through IRS Free File, authorized tax software, or a licensed CPA/EA by April 15.",
      "Direct deposit tax refunds within 21 days or remit balance due via IRS Direct Pay."
    ],
    penaltySummary: "The failure-to-file penalty is 5% of unpaid taxes for each month a return is late, capped at 25%. The failure-to-pay penalty is 0.5% per month plus statutory federal interest."
  },

  "united-kingdom": {
    countrySlug: "united-kingdom",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP (£)",
    taxYear: "2024/2025 & 2025/2026",
    officialTaxAuthority: "HM Revenue & Customs (HMRC)",
    taxAuthorityUrl: "https://www.gov.uk/government/organisations/hm-revenue-customs",
    filingDeadline: "January 31 following tax year (online) / October 31 (paper)",
    paymentDeadline: "January 31 for balancing payment and 1st payment on account; July 31 for 2nd payment",
    metaTitle: "UK Tax FAQs (2024/2025 & 2025/2026): HMRC Slabs, PAYE & Self Assessment | Finsiva",
    metaDescription: "Exhaustive UK Tax FAQ hub. Expert answers on HMRC tax bands (20%, 40%, 45%), Personal Allowance tapering, National Insurance, Section 24, and Self Assessment filing deadlines.",
    executiveSummary: "The United Kingdom operates a Pay As You Earn (PAYE) cumulative withholding system for employees and a Self Assessment regime for sole traders, landlords, and directors. The UK tax year runs from April 6 to April 5 of the following calendar year. Statutory residence is governed by the Statutory Residence Test (SRT). The standard tax-free Personal Allowance remains frozen at £12,570 through 2028.",
    residencyRuleSummary: "UK tax residency is determined objectively by the Statutory Residence Test (SRT), which assesses physical presence (183+ days in the tax year automatically makes you resident), automatic overseas tests, and sufficient ties tests (family, accommodation, 90-day work ties). UK residents are taxed on worldwide income, while the traditional non-domicile regime is undergoing statutory reform.",
    taxBracketsIntro: "Income tax in England, Wales, and Northern Ireland is calculated progressively after deducting your tax-free Personal Allowance. Scotland enforces a devolved six-tier income tax structure.",
    taxBrackets: [
      { bracket: "Up to £12,570", rate: "0%", notes: "Tax-free Personal Allowance (frozen until 2028)" },
      { bracket: "£12,571 to £50,270", rate: "20%", notes: "Basic Rate income tax" },
      { bracket: "£50,271 to £125,140", rate: "40%", notes: "Higher Rate income tax" },
      { bracket: "Over £125,140", rate: "45%", notes: "Additional Rate income tax" },
      { bracket: "£100,000 to £125,140", rate: "Effective 60%", notes: "Personal Allowance tapers by £1 for every £2 earned above £100k" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Income Tax, PAYE & The 60% Tax Trap",
        description: "HMRC progressive tax bands, Personal Allowance tapering above £100,000, and employment tax codes.",
        calculator: {
          slug: "uk-income-tax-calculator",
          name: "UK Salary & Take-Home Pay Calculator",
          description: "Calculate your net monthly take-home pay after PAYE income tax, Student Loan, and National Insurance."
        },
        faqs: [
          {
            question: "What is the UK Personal Allowance and how does the 60% tax trap work?",
            answer: "The standard UK Personal Allowance is £12,570, allowing individuals to earn up to this amount tax-free each year. However, under Section 35 of the Income Tax Act 2007, once your adjusted net income exceeds £100,000, your Personal Allowance is reduced by £1 for every £2 of income above £100,000. It disappears completely at £125,140. Because you lose £1 of tax-free allowance for every £2 earned while paying 40% higher rate tax on that income, the effective marginal tax rate between £100,000 and £125,140 is 60% (40% tax + 20% lost allowance clawback), excluding National Insurance. Many professionals make pension contributions or charitable gift aid donations to keep adjusted net income at or below £100,000.",
            keyPoints: [
              "Tax-free Personal Allowance: £12,570.",
              "Allowance reduces by £1 for every £2 earned above £100k.",
              "Effective marginal rate between £100k and £125k is 60%.",
              "Pension contributions restore lost Personal Allowance."
            ]
          },
          {
            question: "When is the Self Assessment tax return deadline and payment due date?",
            answer: "The UK tax year ends on April 5th. For taxpayers required to submit a Self Assessment return (self-employed sole traders, company directors, individuals with untaxed rental or foreign income, or child benefit claimants earning over threshold), the online filing deadline is midnight on January 31 following the end of the tax year (October 31 for paper returns). January 31 is also the strict deadline to pay your balancing tax bill for the preceding year and make your first 'Payment on Account' (50% of your projected tax bill for the following year). The second Payment on Account is due on July 31.",
            keyPoints: [
              "Online return deadline: January 31.",
              "Paper return deadline: October 31.",
              "Balancing payment and 1st Payment on Account due January 31.",
              "2nd Payment on Account due July 31."
            ]
          }
        ]
      },
      {
        slug: "national-insurance",
        name: "National Insurance & Freelancer Obligations",
        description: "Class 1 employee contributions, Class 2/4 self-employment NI, and state pension qualification.",
        calculator: {
          slug: "uk-self-assessment-calculator",
          name: "UK Self Assessment Tax Calculator",
          description: "Calculate sole trader profits, Class 4 National Insurance, and balancing payments."
        },
        faqs: [
          {
            question: "What are the current Employee Class 1 National Insurance rates?",
            answer: "Employee Class 1 National Insurance contributions (NICs) are deducted from gross earnings via PAYE. Following recent legislative cuts, employees pay 8% on earnings between the Primary Threshold of £1,048 per month (£12,570 per year) and the Upper Earnings Limit (UEL) of £4,189 per month (£50,270 per year). Earnings above £4,189 per month are taxed at 2%. Employers pay secondary Class 1 NICs on employee earnings above the secondary threshold.",
            keyPoints: [
              "Main rate on earnings between £12,570 and £50,270: 8%.",
              "Upper earnings rate over £50,270: 2%.",
              "Zero NICs on earnings below £12,570."
            ]
          },
          {
            question: "How are sole traders and self-employed individuals taxed on NI?",
            answer: "Self-employed sole traders pay Class 4 National Insurance on taxable business profits exceeding £12,570 at a rate of 6% up to £50,270, and 2% on profits exceeding £50,270. Compulsory Class 2 NICs have been effectively abolished for most self-employed earners, although individuals with profits below the Small Profits Threshold can make voluntary Class 2 contributions to preserve their State Pension qualifying years.",
            keyPoints: [
              "Class 4 NI: 6% between £12,570 and £50,270.",
              "Class 4 NI over £50,270: 2%.",
              "Class 2 NI effectively abolished for profitable sole traders."
            ]
          }
        ]
      },
      {
        slug: "property-tax",
        name: "Property, Section 24 & Capital Gains Tax",
        description: "Buy-to-let rental taxation under Section 24, Stamp Duty Land Tax (SDLT), and CGT on residential property.",
        calculator: {
          slug: "uk-capital-gains-tax-calculator",
          name: "UK Capital Gains Tax Calculator",
          description: "Calculate capital gains tax on residential property and shares under current annual exemption limits."
        },
        faqs: [
          {
            question: "What is Section 24 mortgage interest relief restriction for landlords?",
            answer: "Under Section 24 of the Finance (No. 2) Act 2015, individual landlords can no longer deduct mortgage interest and financing costs from rental income before calculating tax. Instead, landlords are taxed on their gross rental turnover less allowable direct running expenses, and then receive a basic rate tax reduction equal to 20% of their finance costs. For higher-rate (40%) and additional-rate (45%) taxpayers, this creates an effective tax penalty, as financing relief is capped at 20%, frequently pushing landlords into higher tax brackets and turning cash-positive properties into tax-negative assets.",
            keyPoints: [
              "Mortgage interest cannot be deducted as an expense.",
              "Relief restricted to a flat 20% basic rate tax credit.",
              "Higher and additional rate landlords face significant tax increases.",
              "Has driven massive shift toward SPV limited company ownership."
            ]
          },
          {
            question: "What is the Capital Gains Tax allowance and residential property rate in the UK?",
            answer: "The UK annual Capital Gains Tax (CGT) exempt amount is £3,000 for individuals. Any capital gains realized above £3,000 from investments, second properties, or business assets are taxable. For residential property gains (such as buy-to-let or second homes not covered by Private Residence Relief), the basic rate is 18% and the higher rate is 24%. For non-residential assets (like company shares), standard CGT rates apply. Gains on residential property sales must be reported and paid to HMRC within 60 days of completion via the UK Property Account.",
            keyPoints: [
              "Annual tax-free CGT allowance: £3,000.",
              "Residential property CGT rates: 18% (basic) / 24% (higher).",
              "60-day reporting and payment window on UK residential sales."
            ]
          }
        ]
      }
    ],
    filingPortalName: "HMRC Online Services / Government Gateway",
    filingPortalUrl: "https://www.gov.uk/log-in-register-hmrc-online-services",
    filingProcessSteps: [
      "Register for Self Assessment and obtain a 10-digit Unique Taxpayer Reference (UTR).",
      "Log into HMRC Government Gateway using your credentials and 2FA.",
      "Complete the SA100 main return along with supplementary pages (SA103 for self-employment, SA105 for UK property, SA108 for capital gains).",
      "Submit online by midnight on January 31.",
      "Pay your tax bill via approved debit card, bank transfer, or direct debit by January 31."
    ],
    penaltySummary: "An immediate £100 late filing penalty applies for missing January 31, even if you owe no tax. After 3 months, daily penalties of £10/day apply up to £900, plus 5% surcharges at 6 and 12 months."
  },

  "india": {
    countrySlug: "india",
    countryName: "India",
    flag: "🇮🇳",
    currency: "INR (₹)",
    taxYear: "AY 2025-2026 (FY 2024-2025)",
    officialTaxAuthority: "Income Tax Department / Central Board of Direct Taxes (CBDT)",
    taxAuthorityUrl: "https://www.incometax.gov.in",
    filingDeadline: "July 31 of assessment year for salaried/non-audit taxpayers; October 31 for tax audit",
    paymentDeadline: "Advance tax due in 4 quarterly installments (June 15, Sept 15, Dec 15, March 15); self-assessment tax due before filing",
    metaTitle: "India Tax FAQs (AY 2025-26): Old vs New Regime Slabs, 87A Rebate & 80C | Finsiva",
    metaDescription: "Comprehensive Indian Income Tax FAQ hub for AY 2025-26 (FY 2024-25). Detailed breakdown of New vs Old Tax Regime, ₹7.75 Lakh zero-tax threshold, Section 87A rebate, standard deduction, and ITR deadlines.",
    executiveSummary: "India enforces a dual-regime direct taxation framework governed by the Income-tax Act, 1961. The New Tax Regime under Section 115BAC is the default framework, featuring reduced slab rates, an enhanced standard deduction of ₹75,000, and a full Section 87A tax rebate for taxable income up to ₹7,00,000 (making income up to ₹7,75,000 effectively zero-tax for salaried individuals). The Old Tax Regime allows chapter VI-A deductions including 80C, 80D, and HRA.",
    residencyRuleSummary: "An individual is a Resident in India under Section 6 if they stay for 182 days or more in the financial year, or 60 days in the year plus 365 days across the preceding 4 years. Residents and Ordinarily Residents (ROR) are taxed on worldwide income, while Non-Residents (NR) and Residents but Not Ordinarily Residents (RNOR) are taxed strictly on Indian-sourced income.",
    taxBracketsIntro: "Under Finance Act updates for FY 2024-25 (AY 2025-26), the default New Tax Regime provides wider slabs and lower marginal rates.",
    taxBrackets: [
      { bracket: "Up to ₹3,00,000", rate: "NIL (0%)", notes: "Basic exemption limit under New Tax Regime" },
      { bracket: "₹3,00,001 to ₹7,00,000", rate: "5%", notes: "Full Section 87A rebate makes this effectively 0% for income up to ₹7 Lakh" },
      { bracket: "₹7,00,001 to ₹10,00,000", rate: "10%", notes: "Progressive middle-tier slab" },
      { bracket: "₹10,00,001 to ₹12,00,000", rate: "15%", notes: "Middle management and tech professional bracket" },
      { bracket: "₹12,00,001 to ₹15,00,000", rate: "20%", notes: "Upper middle income slab" },
      { bracket: "Above ₹15,00,000", rate: "30%", notes: "Highest statutory slab rate under New Regime (plus surcharge and 4% cess)" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Income Tax Regimes & Slabs Comparison",
        description: "New Tax Regime vs Old Tax Regime evaluation, Section 87A rebate math, and salary standard deductions.",
        calculator: {
          slug: "income-tax-calculator",
          name: "Old vs New Tax Regime Calculator",
          description: "Compare tax liability under both Indian tax regimes and discover your exact breakeven deduction threshold."
        },
        faqs: [
          {
            question: "How is salary income up to ₹7.75 Lakh completely tax-free under the New Tax Regime?",
            answer: "Under the New Tax Regime for FY 2024-25 (AY 2025-26), salaried individuals receive an enhanced Standard Deduction of ₹75,000 (under Section 16(ia)). When subtracted from a gross salary of ₹7,75,000, your net taxable income becomes exactly ₹7,00,000. Under Section 115BAC, income between ₹3,00,001 and ₹7,00,000 incurs a calculated tax of ₹20,000 (5% of ₹4,00,000). However, Section 87A provides a full tax rebate of up to ₹25,000 for any resident individual whose net taxable income does not exceed ₹7,00,000. Therefore, the ₹20,000 tax liability is reduced to zero, resulting in zero tax payable.",
            keyPoints: [
              "Gross salary: ₹7,75,000.",
              "Standard deduction: ₹75,000 reduces taxable income to ₹7,00,000.",
              "Section 87A rebate wipes out the ₹20,000 tax completely.",
              "Net income tax payable: ₹0."
            ]
          },
          {
            question: "When should a taxpayer choose the Old Tax Regime over the New Regime?",
            answer: "The Old Tax Regime is advantageous only if your total eligible exemptions and deductions exceed the breakeven threshold of approximately ₹3.75 Lakh to ₹4.25 Lakh (depending on gross income). Under the Old Regime, you can claim: Section 80C deductions up to ₹1,50,000 (EPF, PPF, ELSS, life insurance, home loan principal), Section 80D health insurance up to ₹25,000-₹50,000, Section 24(b) home loan interest deduction up to ₹2,00,000, House Rent Allowance (HRA) exemptions under Section 10(13A), and Section 80CCD(1B) NPS up to ₹50,000. If your investments and home loan interest are below this threshold, the New Tax Regime yields lower tax.",
            keyPoints: [
              "Breakeven deduction threshold is ~₹3.75 Lakh to ₹4.25 Lakh.",
              "Old Regime permits 80C (₹1.5L), 80D (₹25k-₹50k), and HRA exemptions.",
              "Home loan interest up to ₹2,00,000 deductible under Section 24(b).",
              "Salaried taxpayers can switch regimes annually at ITR filing time."
            ]
          },
          {
            question: "What are the ITR filing deadlines and late filing consequences in India?",
            answer: "For individual taxpayers, salaried employees, and non-audit business entities, the deadline to file the annual Income Tax Return (ITR-1, ITR-2, ITR-3, or ITR-4) is July 31 following the financial year. If you miss this deadline, you can file a 'Belated Return' under Section 139(4) up until December 31. However, filing late incurs a late fee under Section 234F: ₹5,000 if total income exceeds ₹5,00,000 (or ₹1,00,000 if income is under ₹5,00,000), plus penal interest of 1% per month under Section 234A on any unpaid tax balance. Crucially, late filers forfeit the ability to carry forward business and capital losses.",
            keyPoints: [
              "Standard ITR deadline: July 31.",
              "Tax audit deadline: October 31.",
              "Belated return deadline: December 31.",
              "Section 234F penalty: ₹5,000 (or ₹1,000 for income below ₹5L)."
            ]
          }
        ]
      },
      {
        slug: "capital-gains-tax",
        name: "Capital Gains & TDS (Tax Deducted at Source)",
        description: "Budget 2024 revised capital gains rates for equity and property, Form 26AS reconciliation, and AIS/TIS.",
        calculator: {
          slug: "capital-gain-tax-calculator",
          name: "Capital Gains Tax Calculator India",
          description: "Calculate STCG and LTCG on listed shares, mutual funds, and real estate under revised Budget 2024 rates."
        },
        faqs: [
          {
            question: "What are the revised capital gains tax rates on shares and real estate post-Budget 2024?",
            answer: "Under the Finance (No. 2) Act 2024, capital gains tax rates were restructured: Short-Term Capital Gains (STCG) on listed equity shares and equity-oriented mutual funds (Section 111A) increased from 15% to 20%. Long-Term Capital Gains (LTCG) on listed equity (Section 112A) increased from 10% to 12.5%, while the annual tax-free exemption limit was raised from ₹1,00,000 to ₹1,25,000. For unlisted assets and real estate, LTCG is taxed at a flat 12.5% without indexation benefit for properties acquired on or after July 23, 2024 (with a grandfathering option allowing taxpayers selling pre-July 2024 residential property to pay either 20% with indexation or 12.5% without indexation).",
            keyPoints: [
              "Listed equity STCG: 20% (Section 111A).",
              "Listed equity LTCG: 12.5% on gains above ₹1.25 Lakh (Section 112A).",
              "Real estate LTCG: 12.5% without indexation (or 20% with indexation for pre-July 2024 properties).",
              "Holding period for listed equity LTCG is 12 months; for real estate it is 24 months."
            ]
          },
          {
            question: "How do I claim a refund for excess TDS deducted by employers or banks?",
            answer: "If Tax Deducted at Source (TDS) under Section 192 (salary) or Section 194A (bank interest) exceeds your actual total income tax liability, you claim a refund by filing your annual ITR on the e-filing portal. Before filing, download Form 26AS and your Annual Information Statement (AIS) / Taxpayer Information Summary (TIS) from the portal to verify that all TDS entries match your Form 16. Once verified, report your total income and TDS credits. If the refund is approved, the Income Tax Department processes it under Section 143(1) and deposits the refund with interest directly into your pre-validated bank account.",
            keyPoints: [
              "Cross-verify TDS credits in Form 26AS and AIS before filing.",
              "Refund is claimed automatically via ITR filing.",
              "Bank account must be pre-validated and PAN-linked on the e-filing portal.",
              "Interest at 0.5% per month is granted on refunds under Section 244A."
            ]
          }
        ]
      }
    ],
    filingPortalName: "Income Tax Department e-Filing Portal 2.0",
    filingPortalUrl: "https://www.incometax.gov.in/iec/foportal/",
    filingProcessSteps: [
      "Log in using your PAN (User ID) and password on incometax.gov.in.",
      "Navigate to e-File > Income Tax Return > File Income Tax Return.",
      "Select Assessment Year (AY 2025-26) and choose between Online ITR-1, ITR-2, or ITR-4.",
      "Pre-fill personal details, salary income, Form 16 figures, and cross-check AIS/TIS.",
      "Compute tax, confirm zero or balance tax, and e-Verify via Aadhaar OTP within 30 days."
    ],
    penaltySummary: "Section 234F imposes a mandatory late filing penalty of ₹5,000 for returns filed after July 31. Unpaid taxes accrue 1% per month interest under Section 234A/B/C."
  },

  "hong-kong": {
    countrySlug: "hong-kong",
    countryName: "Hong Kong",
    flag: "🇭🇰",
    currency: "HKD (HK$)",
    taxYear: "2024/2025 & 2025/2026",
    officialTaxAuthority: "Inland Revenue Department (IRD)",
    taxAuthorityUrl: "https://www.ird.gov.hk",
    filingDeadline: "June 2 (or July 2 for online eTAX filers); 3 months for sole proprietors",
    paymentDeadline: "Two installments: typically January and April of the following year",
    metaTitle: "Hong Kong Tax FAQs (2024/2025): Salaries Tax, Profits Tax & IRD Rules | Finsiva",
    metaDescription: "Exhaustive Hong Kong Tax FAQ hub. Authoritative answers on Salaries Tax progressive rates (2%-17%), two-tiered standard rate, Profits Tax, MPF exemptions, and territorial source rules.",
    executiveSummary: "Hong Kong enforces one of the most streamlined, business-friendly tax frameworks worldwide under the Inland Revenue Ordinance (IRO). Tax liability is based strictly on the territorial source principle: only income and profits arising in or derived from Hong Kong are subject to tax. There is no capital gains tax, no dividend withholding tax, no inheritance tax, and no Goods and Services Tax (GST/VAT). Salaries tax is assessed at progressive rates or standard rate, whichever is lower.",
    residencyRuleSummary: "Hong Kong does not distinguish between residents and non-residents for salaries tax liability. Anyone who renders services in Hong Kong is subject to Salaries Tax under the territorial source principle. A 60-day rule applies: individuals visiting Hong Kong for not more than 60 days in a tax year of assessment are completely exempt from Salaries Tax on their employment income.",
    taxBracketsIntro: "Salaries Tax is computed at progressive rates on net chargeable income (after deductions and personal allowances) or at the standard rate on net total income (after deductions only), whichever results in lower tax.",
    taxBrackets: [
      { bracket: "First HK$50,000", rate: "2%", notes: "First progressive band" },
      { bracket: "Next HK$50,000 (HK$50,001 – HK$100,000)", rate: "6%", notes: "Second progressive band" },
      { bracket: "Next HK$50,000 (HK$100,001 – HK$150,000)", rate: "10%", notes: "Third progressive band" },
      { bracket: "Next HK$50,000 (HK$150,001 – HK$200,000)", rate: "14%", notes: "Fourth progressive band" },
      { bracket: "Remainder over HK$200,000", rate: "17%", notes: "Top marginal progressive rate" },
      { bracket: "Standard Rate Alternative", rate: "15% / 16%", notes: "15% on net income up to HK$5M; 16% on portion above HK$5M" }
    ],
    sections: [
      {
        slug: "salaries-tax",
        name: "Salaries Tax & Progressive vs Standard Rate",
        description: "Employment income taxation, personal allowances (HK$132,000), and MPF deductions.",
        calculator: {
          slug: "hong-kong-tax-calculator-for-expats",
          name: "Hong Kong Salaries Tax Calculator",
          description: "Calculate your Hong Kong net tax liability comparing progressive rates against the standard rate."
        },
        faqs: [
          {
            question: "How does Hong Kong decide between Progressive Tax Rates and the Standard Rate?",
            answer: "The Inland Revenue Department (IRD) automatically calculates your tax liability using both methods and charges you the lower amount. Method 1 (Progressive Rates) applies graduated rates of 2%, 6%, 10%, 14%, and 17% to your Net Chargeable Income, which is your gross income minus allowable deductions and personal allowances (e.g., Basic Allowance of HK$132,000, Married Person's Allowance of HK$264,000, and Child Allowance of HK$130,000). Method 2 (Standard Rate) applies a flat 15% (or two-tiered 15% on first HK$5M, 16% on excess) to your Net Total Income (gross income minus deductions, but without personal allowances). High earners whose progressive tax exceeds the standard rate calculation automatically pay the lower standard rate.",
            keyPoints: [
              "IRD computes both formulas automatically and charges the lesser amount.",
              "Progressive rates: 2% to 17% applied after personal allowances.",
              "Standard rate: Flat 15% (16% above HK$5M) applied without personal allowances.",
              "Basic allowance is HK$132,000 for single taxpayers."
            ]
          },
          {
            question: "What is the 60-day rule for business travelers and expats in Hong Kong?",
            answer: "Under Section 8(1A)(b) of the Inland Revenue Ordinance, an individual who visits Hong Kong for not more than 60 days during a year of assessment is completely exempt from Hong Kong Salaries Tax on income derived from services rendered during those visits. Both arrival and departure days count as full days under IRD practice. This exemption applies strictly to visits: if you hold a Hong Kong employment contract or maintain permanent residence, the rule requires careful apportionment under Double Taxation Agreements.",
            keyPoints: [
              "Exemption applies if physical presence is ≤60 days in a tax year.",
              "Arrival and departure days both count as full days.",
              "Completely eliminates Salaries Tax liability for short-term business visitors."
            ]
          }
        ]
      },
      {
        slug: "profits-tax",
        name: "Profits Tax & Two-Tiered System",
        description: "Corporate taxation, two-tier concessionary rates (8.25%/16.5%), and territorial offshore claims.",
        calculator: {
          slug: "hong-kong-profits-tax-calculator",
          name: "Hong Kong Profits Tax Calculator",
          description: "Estimate corporate profits tax under the two-tiered regime and evaluate offshore claim eligibility."
        },
        faqs: [
          {
            question: "How does Hong Kong's two-tiered Profits Tax rate system work?",
            answer: "Introduced to support SMEs, Hong Kong's two-tiered profits tax regime taxes the first HK$2,000,000 of assessable profits of qualifying corporations at a halved rate of 8.25%. Any assessable profits exceeding HK$2,000,000 are taxed at the standard corporate rate of 16.5%. For unincorporated businesses (partnerships and sole proprietorships), the two rates are 7.5% and 15%. Connected entities in a corporate group can only nominate one single entity to benefit from the reduced 8.25% bracket, preventing artificial group splitting.",
            keyPoints: [
              "First HK$2,000,000 of profit taxed at 8.25%.",
              "Profits exceeding HK$2,000,000 taxed at 16.5%.",
              "Unincorporated entities: 7.5% on first HK$2M, 15% on remainder.",
              "Connected entity anti-fragmentation rule permits only 1 entity per group."
            ]
          },
          {
            question: "How does the territorial source principle allow offshore tax claims in Hong Kong?",
            answer: "Hong Kong does not tax worldwide corporate profits. Under Section 14 of the IRO, only profits arising in or derived from a trade, profession, or business carried on in Hong Kong are taxable. If a Hong Kong registered company conducts its profit-generating activities entirely outside Hong Kong (e.g., contracts negotiated and signed abroad, goods sourced and delivered abroad without passing through Hong Kong, and operations managed overseas), it can apply for an Offshore Profits Claim. If granted by the IRD, qualifying offshore profits are taxed at 0%. However, under the Foreign Source Income Exemption (FSIE) regime, passive income (interest, dividends, disposal gains) must satisfy economic substance requirements to remain exempt.",
            keyPoints: [
              "Only Hong Kong-sourced profits are taxable.",
              "Qualifying offshore business profits are taxed at 0%.",
              "FSIE regime imposes economic substance tests on passive offshore income."
            ]
          }
        ]
      }
    ],
    filingPortalName: "eTAX / GovHK Online Services",
    filingPortalUrl: "https://www.gov.hk/en/residents/taxes/etax/",
    filingProcessSteps: [
      "Receive Tax Return for Individuals (Form BIR60) issued by IRD (typically early May).",
      "Log into eTAX account on GovHK using digital ID or Taxpayer Identification Number (TIN).",
      "Complete employment income, rental property details, and personal allowance claims.",
      "Submit online (eTAX provides an automatic 1-month extension from standard June deadline).",
      "Receive Notice of Assessment stating final tax and provisional tax due in two installments."
    ],
    penaltySummary: "Late filing incurs court summons, fines up to HK$10,000, and treble tax penalties under Section 80(2). A 5% penalty is charged on tax unpaid by the due date, rising to 10% after 6 months."
  },

  "singapore": {
    countrySlug: "singapore",
    countryName: "Singapore",
    flag: "🇸🇬",
    currency: "SGD (S$)",
    taxYear: "YA 2025/2026",
    officialTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
    taxAuthorityUrl: "https://www.iras.gov.sg",
    filingDeadline: "April 18 for e-Filing; April 15 for paper returns",
    paymentDeadline: "Within 1 month from date of Notice of Assessment (GIRO allows up to 12 monthly interest-free deductions)",
    metaTitle: "Singapore Tax FAQs (YA 2025/2026): IRAS Slabs, Corporate Tax & CPF | Finsiva",
    metaDescription: "Exhaustive Singapore Tax FAQ hub for YA 2025/2026. Detailed answers on progressive personal income tax (0%-24%), Employment Pass expat taxation, 17% corporate tax, 9% GST, and CPF.",
    executiveSummary: "Singapore operates a modified territorial tax system characterized by competitive marginal rates, no capital gains tax, and a one-tier corporate tax framework where distributed dividends are tax-exempt for shareholders. Personal income tax rates for tax residents range from 0% to 24%. Non-residents are taxed at a flat 15% or progressive resident rates (whichever is higher) on employment income. Central Provident Fund (CPF) contributions provide mandatory retirement savings with substantial tax relief.",
    residencyRuleSummary: "An individual is a tax resident in Singapore for a Year of Assessment (YA) if they are a Singapore Citizen or Permanent Resident residing in Singapore, or a foreigner who stayed or worked in Singapore for 183 days or more in the calendar year preceding the YA. The 183-day rule includes weekends, public holidays, and temporary absences for business.",
    taxBracketsIntro: "Tax residents pay progressive personal income tax on chargeable income after deducting personal reliefs and Central Provident Fund (CPF) contributions.",
    taxBrackets: [
      { bracket: "First S$20,000", rate: "0%", notes: "Tax-free threshold for all tax residents" },
      { bracket: "Next S$10,000 (S$20,001 – S$30,000)", rate: "2%", notes: "Lowest progressive rate" },
      { bracket: "Next S$10,000 (S$30,001 – S$40,000)", rate: "3.5%", notes: "Early career tax bracket" },
      { bracket: "Next S$40,000 (S$40,001 – S$80,000)", rate: "7%", notes: "Middle-income salary band" },
      { bracket: "Next S$40,000 (S$80,001 – S$120,000)", rate: "11.5%", notes: "Professional and managerial tier" },
      { bracket: "Next S$40,000 (S$120,001 – S$160,000)", rate: "15%", notes: "Senior management tier" },
      { bracket: "Next S$40,000 (S$160,001 – S$200,000)", rate: "18%", notes: "Upper salary bracket" },
      { bracket: "S$200,001 – S$500,000 (Multiple bands)", rate: "19% – 22%", notes: "High earner progressive brackets" },
      { bracket: "Above S$500,000", rate: "24%", notes: "Top statutory marginal rate (raised from 22%)" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Personal Income Tax & Employment Pass (EP) Rules",
        description: "IRAS progressive tax slabs, non-resident flat rates, and Employment Pass tax clearance (IR21).",
        calculator: {
          slug: "income-tax-calculator",
          name: "Singapore Income Tax Calculator",
          description: "Calculate your exact IRAS tax bill and take-home pay under YA 2025 progressive tax brackets."
        },
        faqs: [
          {
            question: "How are Employment Pass (EP) holders and foreign expats taxed in Singapore?",
            answer: "Expats holding an Employment Pass (EP) or S Pass are taxed based on their physical presence in Singapore during the calendar year. If an expat resides or works in Singapore for 183 days or more in a calendar year, they are classified as a tax resident for that Year of Assessment. As a tax resident, they benefit from progressive tax rates starting at 0% (first S$20,000 is tax-free) up to 24%, and can claim eligible personal reliefs. If an expat works in Singapore for between 61 and 182 days, they are treated as a non-resident and taxed at a flat 15% or the progressive resident rate, whichever yields the higher tax amount (with no personal reliefs). If physical presence is 60 days or less, employment income is completely exempt under the short-term employment rule.",
            keyPoints: [
              "183+ days qualifies for progressive resident rates (0% to 24%).",
              "61 to 182 days taxed at flat 15% or resident rate (whichever is higher).",
              "60 days or fewer: Employment income is completely tax-exempt.",
              "Director fees, consultant fees, and non-employment income taxed at 24%."
            ]
          },
          {
            question: "What is tax clearance (Form IR21) when leaving employment in Singapore?",
            answer: "Under Section 68(7) of the Singapore Income Tax Act, when a non-Singapore citizen employee ceases employment, plans to leave Singapore for more than three months, or transfers to an overseas post, the employer is legally obligated to notify IRAS and file Form IR21 at least one month before cessation. The employer must withhold all monies due to the employee (including salary, bonuses, and severance) until IRAS issues a Tax Clearance Directive (typically within 7–21 days). Once IRAS calculates and deducts any outstanding income tax, the employer releases the remaining balance.",
            keyPoints: [
              "Mandatory for all non-citizen employees terminating employment.",
              "Employer must file Form IR21 at least 1 month before departure.",
              "Monies withheld until IRAS issues Clearance Directive."
            ]
          }
        ]
      },
      {
        slug: "corporate-tax",
        name: "Corporate Income Tax & 9% GST",
        description: "17% headline corporate rate, Start-up Tax Exemption (SUTE), and Goods and Services Tax compliance.",
        calculator: {
          slug: "singapore-corporate-tax-calculator",
          name: "Singapore Corporate Tax Calculator",
          description: "Calculate corporate tax liability factoring in Start-up Tax Exemption and partial tax relief."
        },
        faqs: [
          {
            question: "What is the corporate income tax rate and Start-up Tax Exemption (SUTE) in Singapore?",
            answer: "Singapore's headline corporate tax rate is a flat 17% under a single-tier territorial framework. Distributed dividends are completely tax-exempt in the hands of shareholders. To foster entrepreneurship, the Start-Up Tax Exemption (SUTE) scheme grants qualifying new companies (for their first three consecutive YAs): a 75% tax exemption on the first S$100,000 of normal chargeable income (effective tax rate 4.25%), and a 50% exemption on the next S$100,000 (effective tax rate 8.5%). For non-qualifying companies, the Partial Tax Exemption (PTE) grants 75% relief on the first S$10,000 and 50% on the next S$190,000.",
            keyPoints: [
              "Headline corporate tax rate: Flat 17%.",
              "Single-tier system: Dividends are completely tax-free to shareholders.",
              "SUTE gives 75% exemption on first S$100k, 50% on next S$100k.",
              "Partial Tax Exemption (PTE) applies to all other corporate entities."
            ]
          },
          {
            question: "What is the Goods and Services Tax (GST) rate and registration threshold?",
            answer: "The Singapore Goods and Services Tax (GST) rate is 9%. Registration is mandatory for any business whose taxable turnover exceeds S$1,000,000 at the end of any calendar year, or if turnover is reasonably expected to exceed S$1,000,000 in the next 12 months. Businesses with turnover below S$1M can register voluntarily. GST-registered businesses collect 9% output tax and offset input tax paid on legitimate business purchases via quarterly GST returns filed on myTax Portal.",
            keyPoints: [
              "Standard GST rate: 9%.",
              "Mandatory registration threshold: S$1,000,000 annual taxable turnover.",
              "Quarterly e-filing required via IRAS myTax Portal."
            ]
          }
        ]
      }
    ],
    filingPortalName: "IRAS myTax Portal",
    filingPortalUrl: "https://mytax.iras.gov.sg",
    filingProcessSteps: [
      "Log into IRAS myTax Portal using Singpass with 2-Factor Authentication.",
      "Select 'Individuals' > 'File Income Tax Return'.",
      "Verify pre-filled employment income submitted automatically by employers under the Auto-Inclusion Scheme (AIS).",
      "Declare non-employment income and verify eligible deductions (CPF, SRS, course fees, life insurance).",
      "Submit by April 18 and receive instant digital filing acknowledgement."
    ],
    penaltySummary: "Late filing incurs an initial S$150 fine, escalating up to S$5,000 with potential court summons. Unpaid tax incurs a 5% late payment penalty, plus an additional 1% monthly penalty up to 12%."
  },

  "malaysia": {
    countrySlug: "malaysia",
    countryName: "Malaysia",
    flag: "🇲🇾",
    currency: "MYR (RM)",
    taxYear: "YA 2025/2026",
    officialTaxAuthority: "Lembaga Hasil Dalam Negeri (LHDN / Inland Revenue Board)",
    taxAuthorityUrl: "https://www.hasil.gov.my",
    filingDeadline: "April 30 (Form BE manual) / May 15 (e-Filing); June 30 / July 15 for business income (Form B)",
    paymentDeadline: "April 30 / May 15 for individual balancing payment; monthly PCB withholding for employees",
    metaTitle: "Malaysia Tax FAQs (YA 2025/2026): LHDN Slabs, MyTax e-Filing & Reliefs | Finsiva",
    metaDescription: "Exhaustive Malaysia Tax FAQ hub for YA 2025/2026. Authoritative answers on LHDN progressive tax rates (0%-30%), non-resident 30% flat tax, SST, e-Filing Form BE, and personal tax reliefs.",
    executiveSummary: "Malaysia operates a progressive direct taxation model administered by the Inland Revenue Board of Malaysia (Lembaga Hasil Dalam Negeri / LHDN). Tax residents are taxed at graduated rates ranging from 0% to 30%, whereas non-residents are subject to a flat 30% rate without entitlement to personal reliefs. Monthly Tax Deductions (Potongan Cukai Bulanan / PCB) are withheld at source by employers. Tax returns are filed electronically via the MyTax portal.",
    residencyRuleSummary: "An individual is regarded as a tax resident in Malaysia under Section 7 of the Income Tax Act 1967 if they are in Malaysia for 182 days or more in a basis year, or satisfy linking provisions (such as staying for fewer than 182 days linked to a period of 182+ consecutive days in the adjoining year). Residents qualify for personal reliefs of RM 9,000 and progressive rates; non-residents pay flat 30%.",
    taxBracketsIntro: "Tax residents pay progressive personal income tax on chargeable income after deducting statutory personal tax reliefs.",
    taxBrackets: [
      { bracket: "RM 0 – RM 5,000", rate: "0%", notes: "Tax-free base tier" },
      { bracket: "RM 5,001 – RM 20,000", rate: "1%", notes: "Entry rate" },
      { bracket: "RM 20,001 – RM 35,000", rate: "3%", notes: "Lower middle tier" },
      { bracket: "RM 35,001 – RM 50,000", rate: "6%", notes: "Middle bracket" },
      { bracket: "RM 50,001 – RM 70,000", rate: "11%", notes: "Professional salary tier" },
      { bracket: "RM 70,001 – RM 100,000", rate: "19%", notes: "Senior executive tier" },
      { bracket: "RM 100,001 – RM 400,000", rate: "25%", notes: "High earner band" },
      { bracket: "RM 400,001 – RM 600,000", rate: "26%", notes: "Upper high earner band" },
      { bracket: "Over RM 2,000,000", rate: "30%", notes: "Top statutory marginal rate" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Personal Income Tax & MyTax e-Filing",
        description: "LHDN progressive slabs, Form BE deadlines, PCB reconciliation, and personal tax reliefs.",
        calculator: {
          slug: "malaysia-personal-income-tax-calculator",
          name: "Malaysia Income Tax Calculator",
          description: "Calculate your annual tax liability, PCB deductions, and tax refund under LHDN brackets."
        },
        faqs: [
          {
            question: "How do personal tax reliefs reduce taxable income in Malaysia?",
            answer: "In Malaysia, tax is calculated on Chargeable Income, which is your Total Gross Income minus allowable tax reliefs. Key statutory reliefs include: Individual relief of RM 9,000 (granted automatically to all tax residents); EPF and life insurance relief up to RM 7,000 (split between RM 4,000 EPF and RM 3,000 life insurance); Medical expenses for self, spouse, or child up to RM 10,000 (including dental and mental health examinations); Lifestyle relief up to RM 2,500 (books, smartphones, computers, internet subscriptions, and gym memberships); and SSPN education savings up to RM 8,000. Fully maximizing these reliefs can reduce your chargeable income by over RM 30,000, moving you into a much lower tax bracket.",
            keyPoints: [
              "Individual automatic relief: RM 9,000.",
              "EPF & life insurance: Up to RM 7,000 combined.",
              "Lifestyle relief: Up to RM 2,500 for tech, books, and gym.",
              "Medical relief: Up to RM 10,000."
            ]
          },
          {
            question: "How are expats and non-residents taxed in Malaysia?",
            answer: "An individual who spends fewer than 182 days in Malaysia in a calendar year and does not qualify under linking rules is classified as a non-resident. Non-residents are taxed at a flat rate of 30% on all employment income and are not entitled to claim the RM 9,000 personal relief or any lifestyle, medical, or family reliefs. However, if an expat works in Malaysia for 60 days or fewer during a calendar year, their employment income is completely exempt from Malaysian tax under the short-term employee exemption (provided the employer is not a Malaysian tax resident).",
            keyPoints: [
              "Non-resident tax rate: Flat 30%.",
              "Non-residents cannot claim personal reliefs.",
              "Short-term rule: 60 days or fewer is completely tax-exempt."
            ]
          }
        ]
      },
      {
        slug: "corporate-tax",
        name: "Corporate Income Tax & Sales/Service Tax (SST)",
        description: "SME concessionary corporate tax rates (15%/17%/24%) and 6%/8% SST compliance.",
        calculator: {
          slug: "malaysia-corporate-tax-calculator",
          name: "Malaysia Corporate Tax Calculator",
          description: "Estimate company tax under SME preferential slabs and standard corporate tax."
        },
        faqs: [
          {
            question: "What is the corporate tax rate for SMEs vs standard companies in Malaysia?",
            answer: "For Micro, Small, and Medium Enterprises (MSMEs)—defined as resident companies with paid-up capital of RM 2.5 million or less and gross annual business income not exceeding RM 50 million—the corporate income tax rate is tiered: 15% on the first RM 150,000 of chargeable income, 17% on chargeable income from RM 150,001 to RM 600,000, and 24% on any chargeable income exceeding RM 600,000. Non-SME corporations and foreign branches pay a flat rate of 24% on all chargeable profits.",
            keyPoints: [
              "First RM 150,000 taxed at 15% for qualifying SMEs.",
              "Next RM 450,000 (RM 150k–RM 600k) taxed at 17%.",
              "Remaining profits above RM 600,000 taxed at 24%.",
              "Standard non-SME corporate rate: Flat 24%."
            ]
          },
          {
            question: "What are the Sales Tax and Service Tax (SST) rates in Malaysia?",
            answer: "Malaysia abolished GST in 2018 and reinstated the single-stage Sales and Service Tax (SST). Sales Tax is levied on manufactured goods in Malaysia and imported goods, typically at 5% or 10% (with petroleum products taxed at specific rates). Service Tax is charged on prescribed taxable services provided by registered businesses. Under recent reforms, the Service Tax rate was adjusted to 8% for most services, while essential services (food & beverage, telecommunications, vehicle parking, and domestic logistics) remain preserved at the 6% rate.",
            keyPoints: [
              "Sales Tax: 5% or 10% on manufactured/imported goods.",
              "Service Tax: 8% standard rate for most professional services.",
              "Food, beverages, and telecommunications preserved at 6% Service Tax."
            ]
          }
        ]
      }
    ],
    filingPortalName: "LHDN MyTax Portal (ezHasil)",
    filingPortalUrl: "https://mytax.hasil.gov.my",
    filingProcessSteps: [
      "Access MyTax portal at mytax.hasil.gov.my and log in with your digital certificate or IC number.",
      "Navigate to ezHasil > e-Filing > e-BE (Residents without business source).",
      "Verify pre-populated EA Form figures submitted by your employer.",
      "Fill in allowable tax reliefs (individual, medical, lifestyle, EPF, child allowances).",
      "Verify tax calculation, electronically sign, and submit before May 15."
    ],
    penaltySummary: "Failure to file incurs penalties under Section 112(3) of the Income Tax Act ranging from 10% to 300% of tax payable. Late payment accrues a 10% statutory penalty."
  },

  "indonesia": {
    countrySlug: "indonesia",
    countryName: "Indonesia",
    flag: "🇮🇩",
    currency: "IDR (Rp)",
    taxYear: "2025/2026",
    officialTaxAuthority: "Direktorat Jenderal Pajak (DJP)",
    taxAuthorityUrl: "https://www.pajak.go.id",
    filingDeadline: "March 31 for individuals (SPT 1770/1770S); April 30 for corporations (SPT 1771)",
    paymentDeadline: "Monthly PPh 21 withheld by employers; annual tax balance due before filing SPT",
    metaTitle: "Indonesia Tax FAQs (2025/2026): DJP PPh 21 Slabs, PTKP & Expat Tax | Finsiva",
    metaDescription: "Exhaustive Indonesia Tax FAQ hub for 2025/2026. Authoritative answers on DJP PPh 21 progressive rates (5%-35%), non-taxable PTKP thresholds, Bali digital nomads, and annual SPT filing.",
    executiveSummary: "Indonesia enforces a progressive direct taxation system governed by the Harmonized Tax Law (Undang-Undang Harmonisasi Peraturan Perpajakan / UU HPP No. 7/2021). Indonesian tax residents are taxed on their worldwide income under Article 21 (PPh 21) across five progressive brackets ranging from 5% to 35%. Non-residents are subject to a flat 20% withholding tax (PPh 26). Resident taxpayers are entitled to statutory non-taxable income allowances (PTKP).",
    residencyRuleSummary: "An individual is a tax resident in Indonesia if they reside in Indonesia, are physically present for more than 183 days within any 12-month period, or are present in Indonesia during a tax year with the intent to reside. Tax residents must obtain a Tax Identification Number (NPWP / integrated NIK) and report worldwide assets and income on their annual SPT Tahunan.",
    taxBracketsIntro: "Income tax for resident individuals (PPh 21) is calculated on taxable net income after deducting statutory non-taxable allowances (PTKP) and occupational costs.",
    taxBrackets: [
      { bracket: "Rp 0 – Rp 60,000,000", rate: "5%", notes: "Lowest progressive bracket (expanded under UU HPP)" },
      { bracket: "Rp 60,000,001 – Rp 250,000,000", rate: "15%", notes: "Middle income tier" },
      { bracket: "Rp 250,000,001 – Rp 500,000,000", rate: "25%", notes: "Professional and managerial tier" },
      { bracket: "Rp 500,000,001 – Rp 5,000,000,000", rate: "30%", notes: "High earner bracket" },
      { bracket: "Above Rp 5,000,000,000", rate: "35%", notes: "Top marginal bracket for ultra-high earners" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Personal Income Tax (PPh 21) & PTKP",
        description: "UU HPP progressive brackets, PTKP non-taxable income thresholds, and occupational expense deductions.",
        calculator: {
          slug: "indonesia-pph21-calculator",
          name: "Indonesia PPh 21 Tax Calculator",
          description: "Calculate your monthly and annual PPh 21 income tax taking into account PTKP status and TER rates."
        },
        faqs: [
          {
            question: "What is PTKP (Penghasilan Tidak Kena Pajak) and how does it reduce tax?",
            answer: "PTKP is the statutory non-taxable income threshold in Indonesia. It is deducted from your net annual income before tax brackets are applied. The basic PTKP for an individual taxpayer (TK/0 - single, no dependents) is Rp 54,000,000 per year. Additional allowances include: Rp 4,500,000 for a legally married taxpayer, and Rp 4,500,000 for each legitimate dependent (by blood or adoption, up to a maximum of 3 dependents). For example, a married taxpayer with 3 children (K/3 status) receives a total PTKP of Rp 72,000,000 (Rp 54M + Rp 4.5M + Rp 13.5M). Any annual income below your PTKP is completely free of income tax.",
            keyPoints: [
              "Single taxpayer (TK/0): Rp 54,000,000/year.",
              "Married allowance: Additional Rp 4,500,000.",
              "Per dependent (max 3): Additional Rp 4,500,000 each.",
              "Maximum PTKP (K/3): Rp 72,000,000/year."
            ]
          },
          {
            question: "How are foreign expats and digital nomads living in Bali taxed?",
            answer: "Under Article 2 of the Indonesian Income Tax Law, any foreign national who is physically present in Indonesia for more than 183 days within any 12-month period automatically becomes an Indonesian tax resident. Once classified as a tax resident, you are legally required to obtain an NPWP (Tax ID), file an annual SPT Tahunan by March 31, and report your worldwide income and assets. Under the Job Creation Law, qualifying foreign experts with specialized skills can be taxed exclusively on Indonesian-sourced income for their first 4 years, provided they do not claim foreign tax treaty benefits. Remote workers and digital nomads staying on visitor or tourist visas who exceed 183 days risk retroactive assessment under standard resident PPh 21 progressive rates.",
            keyPoints: [
              "Exceeding 183 days in 12 months triggers tax residency.",
              "Residents must register for NPWP and report worldwide assets.",
              "Foreign territorial concession applies for 4 years to qualifying certified specialists."
            ]
          }
        ]
      },
      {
        slug: "corporate-tax",
        name: "Corporate Tax (PPh 25/29) & Value Added Tax (PPN)",
        description: "Corporate flat rate 22%, small business final tax (PP 23 0.5%), and 11%/12% VAT.",
        calculator: {
          slug: "indonesia-corporate-tax-calculator",
          name: "Indonesia Corporate Tax Calculator",
          description: "Estimate corporate income tax for PT PMA and local companies."
        },
        faqs: [
          {
            question: "What is the corporate income tax rate and small business 0.5% final tax in Indonesia?",
            answer: "The standard corporate income tax rate for domestic corporations and permanent establishments (PT and PT PMA) in Indonesia is a flat 22%. Publicly listed companies with at least 40% public ownership meeting specific liquidity criteria receive a 3% rate reduction, paying 19%. For small and micro-businesses (MSMEs) with gross turnover not exceeding Rp 4.8 billion per year, Government Regulation (PP 23/2018) provides an optional final income tax rate of just 0.5% of gross monthly turnover, available for up to 3 years for PTs and 7 years for individual entrepreneurs.",
            keyPoints: [
              "Standard corporate rate: Flat 22%.",
              "Public listed companies: Concessionary 19%.",
              "MSME final tax: 0.5% of gross revenue for turnover under Rp 4.8 Billion."
            ]
          },
          {
            question: "What is the Value Added Tax (PPN) rate in Indonesia?",
            answer: "Under the Harmonized Tax Law (UU HPP), the standard Value Added Tax (Pajak Pertambahan Nilai / PPN) rate is 11%, scheduled by statute to adjust to 12%. PPN applies to the delivery of taxable goods and taxable services within the Indonesian customs area, as well as the import of digital services and goods from abroad. Businesses with gross annual revenue exceeding Rp 4.8 billion must register as a Taxable Enterprise (Pengusaha Kena Pajak / PKP) to issue electronic tax invoices (e-Faktur).",
            keyPoints: [
              "Standard PPN rate: 11% (moving toward 12%).",
              "Mandatory PKP registration threshold: Rp 4.8 Billion turnover.",
              "Electronic invoices must be submitted via DJP e-Faktur."
            ]
          }
        ]
      }
    ],
    filingPortalName: "DJP Online / e-Filing",
    filingPortalUrl: "https://djponline.pajak.go.id",
    filingProcessSteps: [
      "Obtain Electronic Filing Identification Number (EFIN) from a local tax office (KPP).",
      "Log into djponline.pajak.go.id using your NPWP/NIK and password.",
      "Select e-Filing and choose Form SPT 1770 S (for employees earning over Rp 60M) or SPT 1770 (for freelancers/business owners).",
      "Input 1721-A1 withholding slips provided by employers and list global assets/liabilities.",
      "Submit with token verification sent via email or SMS before March 31."
    ],
    penaltySummary: "Late filing of individual SPT incurs an automatic Rp 100,000 fine (Rp 1,000,000 for corporate returns). Unpaid tax balances accrue monthly interest penalties determined by the Ministry of Finance."
  },

  "pakistan": {
    countrySlug: "pakistan",
    countryName: "Pakistan",
    flag: "🇵🇰",
    currency: "PKR (Rs)",
    taxYear: "Tax Year 2025/2026",
    officialTaxAuthority: "Federal Board of Revenue (FBR)",
    taxAuthorityUrl: "https://www.fbr.gov.pk",
    filingDeadline: "September 30 for salaried individuals, business individuals, and AOPs",
    paymentDeadline: "Advance tax quarterly; balance due before e-filing via Iris CPR (Computerized Payment Receipt)",
    metaTitle: "Pakistan Tax FAQs (2025/2026): FBR Slabs, Salary Tax & ATL Filers | Finsiva",
    metaDescription: "Exhaustive Pakistan Tax FAQ hub for Tax Year 2025/2026. Detailed breakdown of FBR salaried tax slabs (0%-35%), PKR 600,000 tax-free slab, Active Taxpayer List benefits, and Iris filing.",
    executiveSummary: "Pakistan's direct taxation is administered centrally by the Federal Board of Revenue (FBR) under the Income Tax Ordinance, 2001. Under the Finance Act 2024/2025, salaried individuals enjoy a tax-free threshold of PKR 600,000, with progressive slabs rising to 35% (plus a 10% super surcharge for high earners). Pakistan strictly enforces a dual-status system: Active Taxpayer List (ATL) filers receive 50% or higher reductions in advance withholding taxes compared to non-filers.",
    residencyRuleSummary: "An individual is a tax resident in Pakistan under Section 82 of the Income Tax Ordinance if they are physically present in Pakistan for 183 days or more in the tax year (July 1 to June 30). Residents are taxed on worldwide income, while non-residents are taxed exclusively on Pakistan-sourced income. Foreign remittance transferred through formal banking channels by non-resident overseas Pakistanis is exempt under Section 111(4).",
    taxBracketsIntro: "Under the Finance Act 2024/2025, salaried individuals (defined as individuals whose salary constitutes more than 75% of total taxable income) are taxed according to six progressive slabs.",
    taxBrackets: [
      { bracket: "Up to PKR 600,000", rate: "0%", notes: "Completely tax-free slab for salaried individuals" },
      { bracket: "PKR 600,001 – PKR 1,200,000", rate: "5%", notes: "5% of amount exceeding PKR 600,000" },
      { bracket: "PKR 1,200,001 – PKR 2,200,000", rate: "15%", notes: "PKR 30,000 + 15% of excess over PKR 1.2M" },
      { bracket: "PKR 2,200,001 – PKR 3,200,000", rate: "25%", notes: "PKR 180,000 + 25% of excess over PKR 2.2M" },
      { bracket: "PKR 3,200,001 – PKR 4,100,000", rate: "30%", notes: "PKR 430,000 + 30% of excess over PKR 3.2M" },
      { bracket: "Above PKR 4,100,000", rate: "35%", notes: "PKR 700,000 + 35% of excess over PKR 4.1M (+10% surcharge on high earners)" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Salary Income Tax & FBR Progressive Slabs",
        description: "Section 149 employer withholding, monthly salary tax calculation, and tax-free allowances.",
        calculator: {
          slug: "salary-tax-calculator",
          name: "Pakistan Salary Tax Calculator",
          description: "Calculate monthly salary deductions under current FBR slabs and estimate take-home pay."
        },
        faqs: [
          {
            question: "How is monthly salary tax calculated under FBR rules in Pakistan?",
            answer: "Under Section 149 of the Income Tax Ordinance 2001, employers calculate monthly withholding tax by estimating the employee's total annual taxable income for the fiscal year (July 1 to June 30). Medical allowances up to 10% of basic pay are exempt if not reimbursed by the employer. The employer applies the progressive FBR salaried tax slabs to the net annual figure to determine total annual tax liability, and divides by 12 (or remaining months) to deduct equal monthly installments from your salary slip. If you earn PKR 100,000 per month (PKR 1.2M annually), your annual tax is PKR 30,000 (5% of PKR 600,000), making monthly withholding exactly PKR 2,500.",
            keyPoints: [
              "Tax-free annual threshold: PKR 600,000.",
              "Medical allowance up to 10% of basic salary is exempt.",
              "Employer divides annual calculated tax by 12 equal monthly tranches.",
              "Withholding statements filed by employers via Iris monthly."
            ]
          },
          {
            question: "What are the legal benefits of being on the FBR Active Taxpayer List (ATL)?",
            answer: "Being listed on the FBR Active Taxpayer List (ATL) provides massive financial advantages. Non-filers are penalized with double or triple withholding tax rates across everyday financial activities: Cash withdrawals from banks, vehicle registration and token tax (non-filers pay 100% to 200% higher rates), property purchase and sale withholding under Section 236K/236C (active filers pay 3%, while non-filers pay up to 10.5%), and dividend withholding tax (15% for filers vs 30% for non-filers). Being an active filer avoids punitive withholding and eliminates tax audit notices.",
            keyPoints: [
              "Property purchase tax: 3% for filers vs up to 10.5% for non-filers.",
              "Vehicle registration & token tax: 50% discount for ATL filers.",
              "Dividend tax: 15% for filers vs 30% for non-filers.",
              "Protection against FBR non-compliance notices."
            ]
          }
        ]
      },
      {
        slug: "sales-tax",
        name: "Sales Tax on Goods & Provincial Service Tax",
        description: "18% federal sales tax on goods, STRN registration, and provincial services tax (PRA/SRB).",
        calculator: {
          slug: "sales-tax-calculator",
          name: "Pakistan Sales Tax & GST Calculator",
          description: "Calculate 18% federal sales tax inclusive and exclusive amounts and input tax credits."
        },
        faqs: [
          {
            question: "What is the standard Sales Tax rate in Pakistan and who must register?",
            answer: "The federal standard sales tax rate on taxable goods under the Sales Tax Act 1990 is 18%. Mandatory registration for a Sales Tax Registration Number (STRN) applies to all manufacturers, importers, wholesalers, distributors, and Tier-1 retailers. Services are taxed at the provincial level: Punjab Revenue Authority (PRA) charges 16%, Sindh Revenue Board (SRB) charges 13%–15%, and Khyber Pakhtunkhwa Revenue Authority (KPRA) charges 15%. Monthly sales tax returns must be filed electronically through Iris by the 18th of each month.",
            keyPoints: [
              "Federal sales tax on goods: Standard 18%.",
              "Provincial services tax: PRA 16%, SRB 13%-15%, KPRA 15%.",
              "Monthly return filing deadline: 18th of each calendar month."
            ]
          },
          {
            question: "How are IT freelancers and software export earnings taxed in Pakistan?",
            answer: "Computer software, IT services, and IT-enabled services (ITeS) exported from Pakistan enjoy significant tax incentives. Under Section 154A of the Income Tax Ordinance, foreign proceeds remitted through banking channels (PRC/e-PRC) by freelancers or IT companies registered with the Pakistan Software Export Board (PSEB) are subject to a final concessionary withholding tax of 0.25% (or 1% if non-compliant with PSEB registration), provided that at least 80% of export proceeds are brought into Pakistan through formal banking channels.",
            keyPoints: [
              "PSEB-registered IT export earnings taxed at final 0.25%.",
              "Unregistered IT exports taxed at 1%.",
              "Foreign remittance must be channeled through official bank e-PRC."
            ]
          }
        ]
      }
    ],
    filingPortalName: "FBR Iris Portal",
    filingPortalUrl: "https://iris.fbr.gov.pk",
    filingProcessSteps: [
      "Access FBR Iris portal (iris.fbr.gov.pk) and log in with CNIC/NTN and password.",
      "Select 'Declaration' > '114(1) Return of Income (for persons earning salary/business)'.",
      "Enter annual salary under Code 1000 and reconcile medical and exempt allowances.",
      "Reconcile tax deducted by employer under Code 9201 using withholding certificates.",
      "Complete the mandatory Wealth Statement (Section 116) detailing personal assets and liabilities.",
      "Submit with your 4-digit PIN code before September 30."
    ],
    penaltySummary: "Section 182 imposes a late filing penalty of 0.1% of tax payable per day (minimum PKR 1,000, maximum 25% of tax). Non-filers are immediately dropped from the Active Taxpayer List (ATL)."
  },

  "philippines": {
    countrySlug: "philippines",
    countryName: "Philippines",
    flag: "🇵🇭",
    currency: "PHP (₱)",
    taxYear: "2025/2026",
    officialTaxAuthority: "Bureau of Internal Revenue (BIR)",
    taxAuthorityUrl: "https://www.bir.gov.ph",
    filingDeadline: "April 15 for Annual Income Tax Return (Form 1700 / 1701 / 1701A)",
    paymentDeadline: "April 15 for annual balancing tax; quarterly advance payments for self-employed",
    metaTitle: "Philippines Tax FAQs (2025/2026): BIR Slabs, TRAIN Law & 8% Freelancer Tax | Finsiva",
    metaDescription: "Exhaustive Philippines Tax FAQ hub for 2025/2026. Detailed answers on BIR graduated rates (0%-35%), ₱250k tax-free bracket, 8% gross income tax for freelancers, 13th month pay, and Form 1701.",
    executiveSummary: "The Philippines operates a progressive individual income tax system overhauled under the Tax Reform for Acceleration and Inclusion (TRAIN) Law (Republic Act No. 10963). Individual income up to ₱250,000 is completely tax-exempt. Self-employed individuals and professionals with gross sales/receipts below ₱3,000,000 can elect a simplified 8% flat income tax in lieu of graduated rates and percentage taxes. Employees have taxes withheld at source under the substituted filing system.",
    residencyRuleSummary: "Resident citizens are taxed on worldwide income from all sources. Non-resident citizens (including Overseas Filipino Workers / OFWs) and resident aliens are taxed exclusively on Philippine-sourced income. Foreign individuals are treated as resident aliens if they reside in the Philippines with no definite intention as to their stay.",
    taxBracketsIntro: "Under the TRAIN Law progressive schedule, income tax for employees and purely compensation earners is calculated after deducting mandatory statutory contributions (SSS, PhilHealth, Pag-IBIG).",
    taxBrackets: [
      { bracket: "Up to ₱250,000", rate: "0%", notes: "Tax-free bracket for all compensation earners" },
      { bracket: "₱250,001 – ₱400,000", rate: "15%", notes: "15% of the excess over ₱250,000" },
      { bracket: "₱400,001 – ₱800,000", rate: "₱22,500 + 20%", notes: "20% of the excess over ₱400,000" },
      { bracket: "₱800,001 – ₱2,000,000", rate: "₱102,500 + 25%", notes: "25% of the excess over ₱800,000" },
      { bracket: "₱2,000,001 – ₱8,000,000", rate: "₱402,500 + 30%", notes: "30% of the excess over ₱2,000,000" },
      { bracket: "Above ₱8,000,000", rate: "₱2,202,500 + 35%", notes: "Top statutory marginal rate" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Compensation Income Tax & Substituted Filing",
        description: "TRAIN Law progressive brackets, 13th month pay ₱90k exemption, and Form 2316 compliance.",
        calculator: {
          slug: "income-tax-calculator",
          name: "Philippines Income Tax Calculator",
          description: "Calculate your net monthly take-home salary after TRAIN income tax, SSS, PhilHealth, and Pag-IBIG."
        },
        faqs: [
          {
            question: "How does the ₱250,000 tax-free bracket and 13th-month pay exemption work?",
            answer: "Under the TRAIN Law, the first ₱250,000 of taxable compensation income earned by an employee in a calendar year is taxed at 0%. Furthermore, Section 32(B)(7)(e) of the National Internal Revenue Code exempts 13th-month pay and other benefits (including Christmas bonuses, productivity incentives, and loyalty awards) from gross income up to a statutory ceiling of ₱90,000. Additionally, mandatory employee contributions to the Social Security System (SSS), Government Service Insurance System (GSIS), PhilHealth, and the Home Development Mutual Fund (Pag-IBIG) are completely non-taxable and deducted before applying tax brackets.",
            keyPoints: [
              "First ₱250,000 of compensation is 100% tax-free.",
              "13th-month pay and holiday bonuses exempt up to ₱90,000.",
              "Mandatory SSS, PhilHealth, and Pag-IBIG contributions are excluded from taxable gross."
            ]
          },
          {
            question: "What is substituted filing (BIR Form 2316) for employees in the Philippines?",
            answer: "Substituted filing is an administrative relief where an employee is not required to file an annual individual income tax return (BIR Form 1700). An employee qualifies if: they receive purely compensation income from only one employer in the Philippines during the calendar year, their tax has been correctly withheld by that employer, and their spouse (if employed) also qualifies. In this case, the employer issues BIR Form 2316 (Certificate of Compensation Payment/Tax Withheld), which serves as the employee's unfiled return once signed and submitted to the BIR.",
            keyPoints: [
              "Applies to employees with only 1 employer during the calendar year.",
              "Employer files BIR Form 2316 directly on the employee's behalf.",
              "Individuals with 2+ employers or mixed income must file Form 1700/1701 by April 15."
            ]
          }
        ]
      },
      {
        slug: "freelancer-tax",
        name: "Freelancers, Professionals & The 8% Tax Option",
        description: "Special 8% gross income tax regime, 3% percentage tax exemption, and quarterly BIR Form 1701Q.",
        calculator: {
          slug: "freelancer-tax-calculator",
          name: "Philippines 8% Freelancer Tax Calculator",
          description: "Compare the flat 8% income tax option against graduated rates and 3% percentage tax."
        },
        faqs: [
          {
            question: "How does the optional 8% gross income tax work for freelancers and professionals?",
            answer: "Under the TRAIN Law, self-employed individuals and professionals whose gross sales or gross receipts do not exceed the VAT threshold of ₱3,000,000 can elect to be taxed at a flat 8% rate on gross receipts exceeding ₱250,000. Choosing the 8% option is highly advantageous because it is paid in lieu of both graduated income tax rates (up to 35%) and the 3% percentage tax under Section 116. For purely self-employed earners, the first ₱250,000 is deducted from gross receipts before multiplying by 8%. If you earn ₱1,000,000 in freelancing revenue, your tax is 8% of ₱750,000 = ₱60,000.",
            keyPoints: [
              "Available to self-employed with gross receipts ≤₱3,000,000.",
              "Flat 8% applied on receipts above ₱250,000.",
              "Replaces both graduated income tax and 3% percentage tax.",
              "Election must be made on the 1st quarter return (Form 1701Q)."
            ]
          },
          {
            question: "What is the Value Added Tax (VAT) rate in the Philippines?",
            answer: "The standard Value-Added Tax (VAT) rate in the Philippines is 12%. Mandatory VAT registration applies to any business, sole proprietor, or corporation whose annual gross sales or receipts exceed ₱3,000,000. Businesses below this threshold pay percentage tax (standard 3%) or the 8% income tax option.",
            keyPoints: [
              "Standard VAT rate: 12%.",
              "Mandatory registration threshold: ₱3,000,000 gross annual revenue.",
              "Businesses below ₱3M pay 3% percentage tax or elect 8% flat rate."
            ]
          }
        ]
      }
    ],
    filingPortalName: "BIR eFPS / eBIRForms Portal",
    filingPortalUrl: "https://www.bir.gov.ph/index.php/eservices.html",
    filingProcessSteps: [
      "Download and install the official Offline eBIRForms Package from bir.gov.ph.",
      "Select BIR Form 1700 (compensation only) or Form 1701/1701A (self-employed/mixed).",
      "Enter personal TIN, RDO code, gross income, and deductions.",
      "Validate the form and submit online to generate a confirmation receipt.",
      "Pay balance tax online via Landbank, GCash, Maya, or authorized agent banks by April 15."
    ],
    penaltySummary: "Late filing or payment incurs a 25% surcharge on basic tax due, 12% annual interest, and compromise penalties based on gross tax due under RMO 7-2015."
  },

  "new-zealand": {
    countrySlug: "new-zealand",
    countryName: "New Zealand",
    flag: "🇳🇿",
    currency: "NZD ($)",
    taxYear: "2025/2026 (Runs April 1 – March 31)",
    officialTaxAuthority: "Inland Revenue Department (IRD / Te Tari Taake)",
    taxAuthorityUrl: "https://www.ird.govt.nz",
    filingDeadline: "July 7 following end of tax year (or March 31 of following year with approved tax agent)",
    paymentDeadline: "Terminal tax due February 7 (or April 7 with tax agent); provisional tax in 3 installments",
    metaTitle: "New Zealand Tax FAQs (2025/2026): IRD Slabs, PAYE, GST & Bright-Line | Finsiva",
    metaDescription: "Exhaustive New Zealand Tax FAQ hub for 2025/2026. Detailed breakdown of updated IRD income tax thresholds (10.5%-39%), 15% GST, KiwiSaver, 2-year Bright-line test, and myIR filing.",
    executiveSummary: "New Zealand's tax system is governed by the Income Tax Act 2007 and administered by Inland Revenue (Te Tari Taake). Effective July 31, 2024, personal income tax thresholds were expanded to relieve bracket creep. New Zealand operates a comprehensive Pay As You Earn (PAYE) withholding system for wage earners. There is no comprehensive capital gains tax, no inheritance tax, and no payroll tax. Property sales are monitored under the Bright-Line property rule.",
    residencyRuleSummary: "An individual is a tax resident in New Zealand if they have a permanent place of abode in New Zealand, or are physically present in New Zealand for more than 183 days in any 12-month period. Tax residents are taxed on worldwide income, though new migrants and returning Kiwis can qualify for a 4-year transitional residency exemption on foreign passive income.",
    taxBracketsIntro: "Income tax is calculated progressively on taxable income across five marginal tax thresholds updated under recent statutory adjustments.",
    taxBrackets: [
      { bracket: "Up to NZD $15,600", rate: "10.5%", notes: "Expanded from previous $14,000 threshold" },
      { bracket: "NZD $15,601 – NZD $53,500", rate: "17.5%", notes: "Expanded from previous $48,000 threshold" },
      { bracket: "NZD $53,501 – NZD $78,100", rate: "30%", notes: "Expanded from previous $70,000 threshold" },
      { bracket: "NZD $78,101 – NZD $180,000", rate: "33%", notes: "Higher income tax band" },
      { bracket: "Above NZD $180,000", rate: "39%", notes: "Top marginal income tax rate" }
    ],
    sections: [
      {
        slug: "income-tax",
        name: "Income Tax, PAYE & KiwiSaver",
        description: "Expanded 2024/2025 IRD tax brackets, PAYE employee deductions, ACC earners' levy, and KiwiSaver contributions.",
        calculator: {
          slug: "income-tax-calculator",
          name: "New Zealand PAYE Salary Calculator",
          description: "Calculate your take-home pay after PAYE income tax, ACC earners levy, and KiwiSaver contributions."
        },
        faqs: [
          {
            question: "What are the updated New Zealand income tax brackets for 2025/2026?",
            answer: "Effective from July 31, 2024 (and applying across tax year 2025/2026), New Zealand's personal tax thresholds were increased to counter bracket creep: The 10.5% rate now applies to income up to $15,600 (previously $14,000); the 17.5% rate applies from $15,601 to $53,500 (previously $48,000); the 30% rate applies from $53,501 to $78,100 (previously $70,000); the 33% rate applies from $78,101 to $180,000; and the top rate of 39% applies to all income exceeding $180,000. Employees also pay the ACC Earners' Levy of 1.60% on income up to the maximum cap of $142,283.",
            keyPoints: [
              "10.5% on income up to NZD $15,600.",
              "17.5% from NZD $15,601 to NZD $53,500.",
              "30% from NZD $53,501 to NZD $78,100.",
              "33% from NZD $78,101 to NZD $180,000; 39% over $180,000.",
              "ACC Earners' Levy: 1.60% capped at $142,283."
            ]
          },
          {
            question: "How does the PAYE system and KiwiSaver deduction work for employees?",
            answer: "Under New Zealand's Pay As You Earn (PAYE) system, employers automatically deduct income tax, ACC Earners' Levy, student loan repayments, and KiwiSaver contributions from each paycheck before depositing your net wages. KiwiSaver is a voluntary work-based retirement savings scheme. New employees are automatically enrolled and can choose a contribution rate of 3%, 4%, 6%, 8%, or 10% of their gross salary. If you contribute at least 3%, your employer is legally required to contribute an additional minimum 3% (subject to Employer Superannuation Contribution Tax / ESCT). The government also provides an annual Government Contribution (Member Tax Credit) of up to $521.43 if you contribute at least $1,042.86 between July 1 and June 30.",
            keyPoints: [
              "PAYE handles tax and ACC withholding automatically.",
              "KiwiSaver employee rates: 3%, 4%, 6%, 8%, or 10%.",
              "Compulsory employer match: 3% minimum.",
              "Government contribution: Up to $521.43 annually."
            ]
          }
        ]
      },
      {
        slug: "gst",
        name: "Goods and Services Tax (GST) & Property Rules",
        description: "Broad-based 15% GST compliance, registration thresholds, and the 2-year Bright-Line property rule.",
        calculator: {
          slug: "gst-calculator",
          name: "New Zealand GST Calculator",
          description: "Calculate 15% GST inclusive and exclusive pricing and determine net GST refund/payment."
        },
        faqs: [
          {
            question: "What is the Goods and Services Tax (GST) rate and registration threshold?",
            answer: "Goods and Services Tax (GST) in New Zealand is a broad-based consumption tax of 15% charged on most goods and services supplied in New Zealand, as well as imported items. Unlike VAT in many countries, New Zealand GST has virtually no exemptions: it applies to groceries, clothing, services, and commercial transactions (financial services and residential rent are exempt). You must register for GST with Inland Revenue if your gross business turnover exceeded $60,000 over the past 12 months, or is expected to exceed $60,000 over the next 12 months. GST returns can be filed monthly, two-monthly, or six-monthly via myIR.",
            keyPoints: [
              "Standard GST rate: 15%.",
              "Mandatory registration threshold: NZD $60,000 annual turnover.",
              "Few exemptions: Applies to food, retail, and commercial goods.",
              "Filed online via myIR on a 1-month, 2-month, or 6-month cycle."
            ]
          },
          {
            question: "What is the 2024/2025 Bright-Line property test and is there capital gains tax?",
            answer: "New Zealand has no general capital gains tax on shares, business sales, or personal assets. However, under the Bright-Line test, profits from the sale of residential property may be treated as taxable income. Effective July 1, 2024, the Bright-Line period was shortened to 2 years for all residential property sales (reducing the previous 5-year or 10-year holding requirements). If you sell a residential property within 2 years of acquisition, net profits are taxed as ordinary income at your marginal tax rate (up to 39%), unless the property qualifies for the 'main home' exemption or was inherited.",
            keyPoints: [
              "No general capital gains tax in New Zealand.",
              "Bright-line period shortened to 2 years effective July 1, 2024.",
              "Profits from residential sales within 2 years taxed as ordinary income.",
              "Main home exemption excludes family residences from Bright-Line tax."
            ]
          }
        ]
      }
    ],
    filingPortalName: "Inland Revenue myIR Portal",
    filingPortalUrl: "https://www.ird.govt.nz/myir",
    filingProcessSteps: [
      "Log into your myIR account using your IRD number and password at ird.govt.nz.",
      "Most wage earners with only PAYE income receive an automated tax assessment in May/June with zero filing needed.",
      "Individuals with self-employed, rental, or overseas income must complete the Individual Income Tax Return (IR3).",
      "Declare income, attach business financial statements or Bright-Line disclosure forms.",
      "Submit online by July 7 (or March 31 with an approved tax agent) and pay terminal tax by February 7."
    ],
    penaltySummary: "Late filing incurs penalties ranging from $50 to $250. Late payments incur a 1% initial penalty, plus 4% after 7 days, and 1% compounding monthly interest."
  }
};
