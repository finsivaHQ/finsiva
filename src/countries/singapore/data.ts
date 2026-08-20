import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and progressive personal income tax in Singapore for residents and non-residents.",
    overview: "Singapore operates a progressive personal income tax system with resident rates ranging from 0% to 24% for Year of Assessment 2026. Non-residents are taxed at flat rates of 15% (for employment income) or 24% (for other income).",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Singapore personal income tax, effective rate, and net salary after tax.", isPopular: true }
    ],
    guides: [
      {
        slug: "income-tax-guide",
        title: "Complete Singapore Income Tax Guide",
        description: "Comprehensive guide to personal income tax brackets, rates, filing rules, and exemptions in Singapore.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
        sections: [
          {
            title: "Singapore Personal Income Tax Structure",
            content: "Singapore taxes personal income on a progressive scale for residents, starting at 0% for the first S$20,000 of assessable income and topping out at 24% for income exceeding S$500,000. Non-residents are generally taxed at a flat rate of 15% on employment income or the progressive resident rates, whichever yields a higher tax amount."
          },
          {
            title: "Tax Residency & 183-Day Rule",
            content: "An individual is treated as a Singapore tax resident if they are a Singapore Citizen or Permanent Resident residing in Singapore, or a foreigner who has stayed or worked in Singapore for 183 days or more in a calendar year."
          }
        ],
        steps: [
          { step: 1, title: "Determine Assessable Income", description: "Calculate total salary, bonuses, allowances, and director fees received in the tax year." },
          { step: 2, title: "Deduct Allowable Expenses", description: "Subtract employment expenses directly incurred in producing your income." },
          { step: 3, title: "Apply Personal Reliefs", description: "Deduct eligible reliefs including Earned Income Relief, CPF top-ups, SRS, and parent relief (capped at S$80,000 total)." },
          { step: 4, title: "Compute Tax Payable", description: "Apply YA 2026 progressive tax rates to Chargeable Income and subtract government tax rebates." }
        ],
        tips: [
          "Max out your SRS (Supplementary Retirement Scheme) contributions to reduce taxable income by up to S$15,300 for citizens/PRs and S$35,700 for foreigners.",
          "Check if your employer participates in the Auto-Inclusion Scheme (AIS) so income details are pre-filled in myTax Portal.",
          "Always file tax returns by April 18 via myTax Portal to avoid non-filing penalties."
        ]
      },
      {
        slug: "tax-residency-guide",
        title: "Singapore Tax Residency Guide",
        description: "Determine your tax residency status, understand the 183-day rule, 60-day rule, and non-resident tax rates.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
        sections: [
          {
            title: "The Quantitative 183-Day Rule",
            content: "If you physically stay or work in Singapore for 183 days or more over a calendar year, you are considered a tax resident for that Year of Assessment. Physical presence includes weekends, public holidays, and short business trips abroad."
          },
          {
            title: "The 60-Day Short-Term Employment Exemption",
            content: "Foreigners who exercise employment in Singapore for 60 days or less in a calendar year are exempt from Singapore income tax on employment income, provided they are not company directors or public entertainers."
          }
        ],
        steps: [
          { step: 1, title: "Count Physical Days in Singapore", description: "Calculate total calendar days of physical presence and employment in Singapore during the tax year." },
          { step: 2, title: "Assess 2-Year or 3-Year Administrative Rules", description: "If stay spans 2 continuous years across calendar years totaling 183+ days, residency applies to both years." },
          { step: 3, title: "Confirm Tax Relief Eligibility", description: "Tax residents qualify for personal reliefs, CPF relief, and progressive tax rates starting at 0%." }
        ]
      }
    ],
    faqs: [
      { question: "What is the tax filing deadline in Singapore?", answer: "The filing deadline is April 15 for paper returns and April 18 for e-filing via myTax Portal." },
      { question: "What is the minimum taxable income in Singapore?", answer: "Residents paying tax start at S$20,000 annual chargeable income. Income up to S$20,000 is taxed at 0%." },
      { question: "How are non-residents taxed in Singapore?", answer: "Non-residents are taxed at 15% flat on employment income (or progressive resident rates if higher) and 24% on other income without personal reliefs." }
    ]
  },
  {
    slug: "corporate-tax",
    name: "Corporate Income Tax",
    description: "Corporate taxation, startup tax exemptions, CIT rebates, and ECI filing in Singapore.",
    overview: "Singapore maintains a single-tier flat corporate tax rate of 17% on chargeable income. Partial tax exemptions and startup tax exemption schemes significantly lower effective rates for small and medium enterprises.",
    calculators: [
      { slug: "income-tax-calculator", name: "Corporate Tax Estimator", description: "Estimate corporate income tax and eligible partial tax exemptions for Singapore companies." }
    ],
    guides: [
      {
        slug: "corporate-tax-guide",
        title: "Singapore Corporate Income Tax Guide",
        description: "Complete overview of Singapore's 17% corporate tax rate, startup tax exemptions, CIT rebates, and ECI filing.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        sections: [
          {
            title: "Single-Tier Corporate Tax System",
            content: "Singapore operates a 1-tier corporate tax framework. Tax paid by a company on its profits is final. Dividends distributed to shareholders are completely tax-exempt."
          },
          {
            title: "Startup Partial Tax Exemption (SOTE)",
            content: "Qualifying new Singapore start-up companies enjoy a 75% exemption on the first S$100,000 of normal chargeable income and a 50% exemption on the next S$100,000 for their first 3 consecutive Years of Assessment."
          }
        ]
      }
    ],
    faqs: [
      { question: "What is the corporate tax rate in Singapore?", answer: "Singapore corporate tax rate is a flat 17% on taxable income, reduced further by partial tax exemptions and CIT rebates." },
      { question: "What is ECI in Singapore corporate tax?", answer: "Estimated Chargeable Income (ECI) must be filed with IRAS within 3 months of the company's financial year end." }
    ]
  },
  {
    slug: "gst",
    name: "GST (Goods and Services Tax)",
    description: "Goods and Services Tax rules, compulsory registration, and input tax claims in Singapore.",
    overview: "GST is a broad-based consumption tax levied on the supply of goods and services in Singapore and imported goods. The standard rate is 9%.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive, exclusive, and net tax amounts at the prevailing 9% rate." }
    ],
    guides: [
      {
        slug: "gst-guide",
        title: "Singapore GST Registration & Filing Guide",
        description: "Understanding compulsory S$1 million GST registration threshold, F5 returns, and 9% consumption tax.",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80"
      }
    ],
    faqs: [
      { question: "What is the GST rate in Singapore?", answer: "The GST rate is 9% as of 2024." },
      { question: "When is GST registration compulsory in Singapore?", answer: "Registration is mandatory if your taxable turnover exceeds S$1 million at the end of any calendar year or is expected to exceed S$1 million in the next 12 months." }
    ]
  },
  {
    slug: "stamp-duty",
    name: "Stamp Duty",
    description: "Buyer's Stamp Duty (BSD), Additional Buyer's Stamp Duty (ABSD), and lease stamp duty in Singapore.",
    overview: "Stamp duty applies to property acquisitions, shares, and tenancy agreements. Rates depend on property classification, purchase price, and buyer citizenship status.",
    calculators: [
      { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", description: "Calculate BSD and ABSD for residential and commercial property purchases in Singapore." }
    ],
    guides: [
      {
        slug: "stamp-duty-guide",
        title: "Singapore Property Stamp Duty Guide",
        description: "Comprehensive guide to Buyer's Stamp Duty (BSD) and Additional Buyer's Stamp Duty (ABSD) tiers.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
      }
    ],
    faqs: [
      { question: "When is stamp duty payable in Singapore?", answer: "Stamp duty must be paid within 14 days of executing the document if signed in Singapore, or within 30 days if executed overseas." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "First S$20,000", notes: "First S$20,000 of chargeable income is tax-free for resident individuals." },
  { label: "2%", rate: "2%", threshold: "Next S$10,000 (S$20,001 – S$30,000)", notes: "Tax payable: S$200 on S$30,000 income." },
  { label: "3.5%", rate: "3.5%", threshold: "Next S$10,000 (S$30,001 – S$40,000)", notes: "Tax payable: S$550 on S$40,000 income." },
  { label: "7%", rate: "7%", threshold: "Next S$40,000 (S$40,001 – S$80,000)", notes: "Tax payable: S$3,350 on S$80,000 income." },
  { label: "11.5%", rate: "11.5%", threshold: "Next S$40,000 (S$80,001 – S$120,000)", notes: "Tax payable: S$7,950 on S$120,000 income." },
  { label: "15%", rate: "15%", threshold: "Next S$40,000 (S$120,001 – S$160,000)", notes: "Tax payable: S$13,950 on S$160,000 income." },
  { label: "18%", rate: "18%", threshold: "Next S$40,000 (S$160,001 – S$200,000)", notes: "Tax payable: S$21,150 on S$200,000 income." },
  { label: "19%", rate: "19%", threshold: "Next S$40,000 (S$200,001 – S$240,000)", notes: "Tax payable: S$28,750 on S$240,000 income." },
  { label: "19.5%", rate: "19.5%", threshold: "Next S$40,000 (S$240,001 – S$280,000)", notes: "Tax payable: S$36,550 on S$280,000 income." },
  { label: "20%", rate: "20%", threshold: "Next S$40,000 (S$280,001 – S$320,000)", notes: "Tax payable: S$44,550 on S$320,000 income." },
  { label: "22%", rate: "22%", threshold: "Next S$180,000 (S$320,001 – S$500,000)", notes: "Tax payable: S$84,150 on S$500,000 income." },
  { label: "23%", rate: "23%", threshold: "Next S$500,000 (S$500,001 – S$1,000,000)", notes: "Upper income threshold introduced in recent tax year adjustments." },
  { label: "24%", rate: "24%", threshold: "Above S$1,000,000", notes: "Top marginal resident rate applied to income exceeding S$1,000,000." }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Earned Income Relief", description: "Automatic relief for individuals earning employment or trade income. Up to S$1,000 (below 55 yrs), S$6,000 (55-59 yrs), and S$8,000 (60+ yrs)." },
  { name: "CPF Top-up Relief (SA / RA / MA)", description: "Tax relief for cash top-ups to your own or family members' Central Provident Fund accounts, capped at S$8,000 for self and S$8,000 for family." },
  { name: "Supplementary Retirement Scheme (SRS)", description: "Tax-deductible contribution up to S$15,300 per year for Citizens/PRs and S$35,700 for foreign employment pass holders." },
  { name: "Parent & Grandparent Relief", description: "Relief ranging from S$4,500 to S$9,000 per dependent parent/grandparent residing in Singapore with minimal income." },
  { name: "Course Fees Relief", description: "Up to S$5,600 per year for fees paid for courses, seminars, or tertiary education relevant to current employment or trade." },
  { name: "NSman Relief", description: "Relief for active national servicemen, key appointment holders, and their wives or parents, ranging from S$750 to S$5,000." }
];

const credits: TaxCredit[] = [
  { name: "Personal Income Tax Rebate", description: "Annual government tax rebates (e.g., 50% rebate capped at S$200 for YA 2024 / YA 2025/2026 adjustments)." },
  { name: "Corporate Income Tax (CIT) Rebate", description: "Corporate tax rebate (50% capped at S$40,000 with cash payout components for qualifying active companies)." },
  { name: "Foreign Tax Credit (FTC)", description: "Double taxation relief for income earned overseas and remitted into Singapore from DTA partner jurisdictions." }
];

const officialResources: OfficialResource[] = [
  { name: "Inland Revenue Authority of Singapore (IRAS)", url: "https://www.iras.gov.sg", description: "Official Singapore tax authority portal for rates, filing, and policy announcements." },
  { name: "myTax Portal", url: "https://mytax.iras.gov.sg", description: "Secure online service to e-file individual income tax returns, view notices of assessment, and set up GIRO payments." },
  { name: "IRAS Individual Tax Rates & Reliefs", url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates", description: "Official IRAS rules on resident and non-resident tax rates and personal relief caps." },
  { name: "Ministry of Finance Singapore (MOF)", url: "https://www.mof.gov.sg", description: "Budget announcements, economic fiscal policy updates, and statutory changes." }
];

const importantDates: ImportantDate[] = [
  { date: "2026-03-01", title: "myTax Portal Opens", description: "E-filing period opens for individual income tax returns for Year of Assessment 2026." },
  { date: "2026-04-15", title: "Paper Filing Deadline", description: "Final date to submit physical paper tax forms to IRAS." },
  { date: "2026-04-18", title: "E-Filing Deadline", description: "Final date to submit individual income tax returns online via myTax Portal." },
  { date: "2026-05-31", title: "Notice of Assessment (NOA) Issued", description: "IRAS begins issuing tax bills (NOA) for the current Assessment Year." },
  { date: "2026-11-30", title: "Corporate Form C-S/C Filing Deadline", description: "E-filing deadline for corporate income tax returns for companies." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the personal income tax rate in Singapore for 2026?", answer: "Tax residents pay progressive rates from 0% to 24%. Non-residents pay a flat 15% on employment income (or progressive resident rates if higher) and 24% on other income." },
  { question: "How does the 183-day rule work for Singapore tax residency?", answer: "Foreigners who work or stay in Singapore for 183 days or more in a calendar year are considered tax residents and can claim personal tax reliefs." },
  { question: "Does Singapore tax capital gains or foreign dividends?", answer: "No. Singapore does not levy capital gains tax on investments or property flips. Foreign-sourced dividends and income remitted by individuals are generally exempt from tax." },
  { question: "What is the maximum personal tax relief cap in Singapore?", answer: "The total personal income tax relief you can claim is capped at S$80,000 per Year of Assessment." },
  { question: "How do Employment Pass (EP) holders pay income tax in Singapore?", answer: "EP holders are taxed as residents if employed for 183+ days. If leaving Singapore, employers must submit Form IR21 for tax clearance at least one month before departure." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Territorial Tax Basis", description: "Only income earned in Singapore or derived from Singapore sources is subject to tax. Overseas income earned by individuals is generally exempt." },
  { title: "1-Tier Dividend System", description: "Corporations pay corporate tax on net profits, and all dividend distributions to shareholders are completely tax-free." },
  { title: "Overall Relief Cap (S$80,000)", description: "The maximum aggregate amount of personal tax relief an individual taxpayer can claim in any Year of Assessment is S$80,000." },
  { title: "Form IR21 Tax Clearance", description: "Employers must notify IRAS and withhold all monies due to non-citizen employees leaving Singapore or terminating employment." }
];

export const singapore: Country = {
  slug: "singapore",
  name: "Singapore",
  flag: "/logos/singapore.png",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
  taxAuthorityUrl: "https://www.iras.gov.sg",
  currency: "SGD",
  capital: "Singapore",
  population: "5.9 million",
  gdp: "$397 billion",
  officialLanguage: "English, Malay, Mandarin, Tamil",
  overview: "Singapore is globally recognized for its simple, low-rate, and progressive tax system. Operating under a territorial tax framework, Singapore taxes only income sourced in Singapore while exempting foreign-sourced personal income and capital gains. Resident personal tax rates range from 0% to 24%, while corporate tax is capped at a flat 17% with generous startup partial exemptions. Foreign professionals, expats, and business owners benefit from extensive double-taxation avoidance agreements (DTAs) and attractive personal tax relief schemes.",
  lastUpdated: "2026-08-20",
  taxYear: "Calendar Year (January 1 – December 31)",
  filingDeadline: "April 15 (paper); April 18 (e-filing)",
  paymentDeadline: "Within 30 days of receiving the Notice of Assessment (NOA)",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 24% for residents across 13 income tiers. Non-residents pay flat 15% on employment income or resident progressive rates (whichever is higher). Personal relief cap is S$80,000.",
    capitalGainsTax: "0% capital gains tax. Gains from stocks, cryptocurrency, foreign property sales, and capital assets are completely non-taxable.",
    vatGstSalesTax: "Goods and Services Tax (GST) is standard rated at 9%. Registration is mandatory for businesses with annual taxable turnover exceeding S$1 million.",
    corporateTax: "Flat headline corporate tax rate of 17%. Qualifying startups receive a 75% partial tax exemption on the first S$100,000 of chargeable income and 50% on the next S$100,000.",
    payrollTax: "Central Provident Fund (CPF) contributions apply to Singapore Citizens and PRs. Employer contribution rate is up to 17% and employee contribution rate is up to 20% of monthly wages."
  },
  taxSystemDetails: {
    howTaxationWorks: "Singapore operates a self-assessment system administered by IRAS. Employers under the Auto-Inclusion Scheme (AIS) transmit remuneration data directly to IRAS, enabling pre-filled e-returns on myTax Portal.",
    whoPaysTax: "Tax residents pay tax on Singapore-sourced income at progressive rates after personal reliefs. Non-residents pay tax on Singapore employment income at 15% or progressive rates without personal reliefs.",
    residentVsNonResident: "Residency is established by Citizenship, Permanent Residency, or staying/working in Singapore for 183+ days in a calendar year. Non-residents face flat rates and are ineligible for personal reliefs.",
    personalIncomeTax: "Progressive tiers start at 0% for the first S$20,000 of income, reaching 24% for income above S$1,000,000. Popular reliefs include Earned Income Relief, CPF top-ups, SRS, and parent relief.",
    businessTaxOverview: "Corporations are taxed at a flat 17%. The single-tier corporate tax framework ensures dividends paid to shareholders are free of withholding or personal income tax.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "Singapore provides annual personal tax rebates (e.g., 50% rebate up to S$200 for eligible YA). Rather than a single standard deduction, taxpayers claim specific personal reliefs up to an aggregate cap of S$80,000.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Singapore Personal Income Tax Calculator", category: "income-tax" },
    { slug: "gst-calculator", name: "Singapore GST Calculator (9%)", category: "gst" },
    { slug: "stamp-duty-calculator", name: "Singapore Property Stamp Duty Calculator", category: "stamp-duty" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Singapore Net Salary & Income Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [
    { slug: "income-tax-calculator", name: "Singapore Corporate Tax & SOTE Estimator", category: "corporate-tax" }
  ],
  relatedCountries: ["hong-kong", "malaysia", "indonesia", "philippines"],
  latestUpdates: [
    { date: "2026-01-01", title: "Year of Assessment 2026 Tax Rates & Relief Rules", description: "IRAS confirmed current progressive tax brackets up to 24% top rate for income exceeding S$1,000,000 and reinforced the S$80,000 personal relief cap." },
    { date: "2024-01-01", title: "GST Rate Standardized at 9%", description: "Singapore GST rate reached 9% following the two-step budget adjustment." }
  ],
  countryFAQs,
  taxSystemSummary: "Singapore operates a competitive, territorial tax system with zero capital gains tax, zero dividend tax, and low corporate tax rates. Resident individuals pay progressive rates between 0% and 24%, while non-residents pay flat rates.",
  employerWithholding: "Employers participate in IRAS Auto-Inclusion Scheme (AIS) to report Form IR8A salary details. Employers of foreign workers must execute Form IR21 tax clearance before employee departure.",
  whoShouldUse: [
    { type: "Salaried Employees & EP Holders", icon: "M20 7h-4V5c0-1.1-.9-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "Employment Pass and S Pass holders wanting to compute take-home pay, progressive tax rates, and tax residency under the 183-day rule." },
    { type: "Expats & Foreign Professionals", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Foreign nationals evaluating Singapore tax brackets, Form IR21 clearance, non-resident 15% employment tax, and DTA tax exemption rules." },
    { type: "Self-Employed & Sole Proprietors", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Freelancers, taxi drivers, and gig economy workers calculating Net Trade Income, simplified expense claims, and Form B submission." },
    { type: "Business Owners & Founders", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Company directors estimating 17% corporate tax, 1-tier dividend exemption, startup partial exemptions, and ECI filing obligations." },
    { type: "Property Buyers & Investors", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", description: "Property buyers calculating BSD and ABSD tiers for private residential homes and commercial real estate." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Employment & Trade Income", description: "Input gross annual salary, bonus, director fees, commissions, and net trade income earned during the tax year." },
    { step: 2, title: "Claim Personal Reliefs & SRS", description: "Enter eligible personal reliefs (Earned Income, CPF, SRS top-ups, Parent, Spouse, Child, Course fees) up to the S$80,000 maximum cap." },
    { step: 3, title: "Apply YA 2026 Progressive Rates", description: "The calculator computes your exact Chargeable Income and applies the resident progressive tax brackets (0% to 24%)." },
    { step: 4, title: "Deduct Tax Rebates", description: "Subtract annual government personal income tax rebates to calculate your final tax payable." },
    { step: 5, title: "Analyze Effective Tax Rate", description: "Review your effective tax rate, net monthly take-home salary, and explore additional SRS or CPF top-up savings." }
  ],
  educationalDisclaimer: "The tax information and calculators on this page are provided for educational and informational purposes only and do not constitute legal or tax advice. Tax laws change frequently. Refer to IRAS or consult a certified tax professional for official tax planning.",
  dataSources: ["Inland Revenue Authority of Singapore (IRAS)", "Singapore Income Tax Act 1947", "Singapore Budget 2024 / 2025 / 2026 Guidelines"],
  calculationMethodology: "Calculations strictly follow the IRAS progressive income tax schedule for Year of Assessment 2026. Chargeable income equals gross income minus allowable expenses and total personal tax reliefs (capped at S$80,000). Tax liability is calculated per bracket and reduced by statutory tax rebates."
};
