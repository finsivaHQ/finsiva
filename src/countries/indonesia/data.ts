import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Indonesia under DJP regulations.",
    overview: "Indonesia operates a progressive personal income tax system with resident rates ranging from 5% to 35% across five tax tiers for Year of Assessment 2026. Corporate tax is a flat 22%. Non-residents pay a flat 20% withholding tax (PPh 26).",
    calculators: [
      { slug: "income-tax-calculator", name: "Indonesia Income Tax Calculator (PPh 21)", description: "Calculate your Indonesian personal income tax, PTKP deductions, and net take-home salary.", isPopular: true }
    ],
    guides: [
      {
        slug: "income-tax-guide",
        title: "Complete Indonesia Income Tax Guide",
        description: "Comprehensive guide to Indonesian progressive personal income tax brackets, PTKP thresholds, PPh 21 withholding, and DJP e-Filing.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
        sections: [
          {
            title: "Indonesian Personal Income Tax Structure",
            content: "Individual income tax in Indonesia (PPh 21) is progressive, ranging from 5% for taxable income up to IDR 60 million, up to 35% for taxable income exceeding IDR 5 billion. Tax residents are taxed on global income, while non-residents are taxed only on Indonesian-sourced income."
          },
          {
            title: "Non-Taxable Income (PTKP) Thresholds",
            content: "Taxable income is calculated after deducting Non-Taxable Income (Penghasilan Tidak Kena Pajak / PTKP). Basic PTKP for an individual taxpayer is IDR 54,000,000 per year, with additional allowances for marriage (IDR 4,500,000) and dependent children (IDR 4,500,000 per child, max 3)."
          }
        ],
        steps: [
          { step: 1, title: "Calculate Gross Income", description: "Combine annual salary, bonuses, allowances, and other income." },
          { step: 2, title: "Deduct Occupational Expenses & PTKP", description: "Subtract occupational cost (Biaya Jabatan 5%, max IDR 6M/yr) and applicable PTKP allowance." },
          { step: 3, title: "Apply Progressive Brackets", description: "Apply progressive rates (5% to 35%) to Net Taxable Income." },
          { step: 4, title: "Submit Annual SPT Tahunan", description: "File annual tax return electronically via DJP Online before March 31." }
        ],
        tips: [
          "Ensure your NIK (National ID) is integrated with your NPWP for seamless DJP e-Filing.",
          "Check whether your employer issues Form 1721-A1 for private employees or Form 1721-A2 for civil servants.",
          "File your SPT Tahunan online before March 31 to avoid the IDR 100,000 late filing penalty."
        ]
      },
      {
        slug: "tax-residency-guide",
        title: "Indonesia Tax Residency Guide",
        description: "Understand the 183-day quantitative test, KITAS/KITAP rules, non-resident 20% PPh 26 tax, and tax treaties.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        sections: [
          {
            title: "183-Day Quantitative Residency Test",
            content: "An individual is classified as an Indonesian tax resident if they are present in Indonesia for more than 183 days within any 12-month period, or if they reside in Indonesia with the intention to stay."
          },
          {
            title: "Non-Resident Withholding Tax (PPh 26)",
            content: "Non-residents earning income from Indonesian sources are subject to a flat 20% withholding tax (PPh 26) on gross payment, unless reduced by a Double Taxation Agreement (DTA)."
          }
        ]
      }
    ],
    faqs: [
      { question: "What is the personal tax filing deadline in Indonesia?", answer: "The annual SPT Tahunan deadline for individual taxpayers is March 31." },
      { question: "What is the non-taxable income (PTKP) limit in Indonesia?", answer: "Basic single PTKP is IDR 54,000,000 per year, plus IDR 4,500,000 for married status and IDR 4,500,000 per dependent (up to 3)." },
      { question: "What are the tax brackets in Indonesia for 2026?", answer: "Progressive tax brackets: Up to IDR 60M (5%), IDR 60M–250M (15%), IDR 250M–500M (25%), IDR 500M–5B (30%), Above IDR 5B (35%)." }
    ]
  },
  {
    slug: "vat",
    name: "VAT (PPN)",
    description: "Value Added Tax (Pajak Pertambahan Nilai - PPN) in Indonesia.",
    overview: "VAT in Indonesia is standard rated at 11%. Compulsory registration applies to businesses with annual gross revenue exceeding IDR 4.8 billion.",
    calculators: [
      { slug: "vat-calculator", name: "Indonesia VAT Calculator (11%)", description: "Calculate 11% PPN inclusive and exclusive amounts." }
    ],
    guides: [
      {
        slug: "vat-guide",
        title: "Indonesia VAT (PPN) Compliance Guide",
        description: "Understanding compulsory IDR 4.8B VAT registration threshold, e-Faktur invoicing, and 11% consumption tax.",
        image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80"
      }
    ],
    faqs: [
      { question: "What is the current VAT rate in Indonesia?", answer: "The standard VAT (PPN) rate is 11%." },
      { question: "What is the VAT registration threshold in Indonesia?", answer: "Businesses with gross revenue exceeding IDR 4.8 billion per year must register as a Taxable Entrepreneur (PKP)." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "5%", rate: "5%", threshold: "Up to IDR 60,000,000", notes: "First IDR 60 million of taxable income" },
  { label: "15%", rate: "15%", threshold: "IDR 60,000,001 – IDR 250,000,000", notes: "Next IDR 190 million of taxable income" },
  { label: "25%", rate: "25%", threshold: "IDR 250,000,001 – IDR 500,000,000", notes: "Next IDR 250 million of taxable income" },
  { label: "30%", rate: "30%", threshold: "IDR 500,000,001 – IDR 5,000,000,000", notes: "Next IDR 4.5 billion of taxable income" },
  { label: "35%", rate: "35%", threshold: "Above IDR 5,000,000,000", notes: "Top marginal rate for taxable income exceeding IDR 5 billion" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Basic Single PTKP (TK/0)", description: "IDR 54,000,000 per year non-taxable allowance for single individual taxpayers." },
  { name: "Married Allowance (K/0)", description: "Additional IDR 4,500,000 non-taxable allowance for married status." },
  { name: "Dependent Allowance (K/1, K/2, K/3)", description: "Additional IDR 4,500,000 per dependent child or parent (up to maximum 3 dependents)." },
  { name: "Occupational Cost (Biaya Jabatan)", description: "5% of gross employment income, capped at IDR 500,000 per month (IDR 6,000,000 per year)." },
  { name: "Pension & BPJS Contributions", description: "Employee contributions to BPJS Ketenagakerjaan (JHT & JP) and approved pension funds." }
];

const credits: TaxCredit[] = [
  { name: "PPh 21 Employer Withholding Credit", description: "Tax deducted at source by employers is fully credited against annual SPT Tahunan liability." },
  { name: "Foreign Tax Credit (PPh 24)", description: "Credit for income tax paid overseas on foreign-sourced income, subject to statutory limits." },
  { name: "PPh 22 / PPh 23 Advance Tax Credit", description: "Prepaid withholding taxes on business transactions credited against corporate tax liability." }
];

const officialResources: OfficialResource[] = [
  { name: "Direktorat Jenderal Pajak (DJP)", url: "https://www.pajak.go.id", description: "Official Indonesian tax authority — regulations, forms, and announcements." },
  { name: "DJP Online Portal", url: "https://djponline.pajak.go.id", description: "Official portal for e-Filing annual SPT returns and generating e-Billing payment codes." },
  { name: "Kementerian Keuangan RI (Kemenkeu)", url: "https://www.kemenkeu.go.id", description: "Ministry of Finance Republic of Indonesia official fiscal policy announcements." }
];

const importantDates: ImportantDate[] = [
  { date: "2026-01-01", title: "Tax Year Start", description: "Indonesian tax year follows the calendar year (January 1 – December 31)." },
  { date: "2026-03-31", title: "Individual SPT Tahunan Deadline", description: "Final date for individual taxpayers to file annual tax returns via DJP Online." },
  { date: "2026-04-30", title: "Corporate SPT Tahunan Deadline", description: "Final date for corporate entities to file annual corporate tax returns." },
  { date: "2026-12-31", title: "Tax Year End", description: "End of the Indonesian tax year." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the individual income tax rate in Indonesia for 2026?", answer: "Progressive tax rates range from 5% to 35% across 5 income tiers. Taxable income is calculated after deducting PTKP allowances." },
  { question: "How does Bali income tax work for foreign expats?", answer: "Foreigners living in Bali for 183+ days in a 12-month period are Indonesian tax residents. Under the Job Creation Law, expats with specialized skills pay tax only on Indonesian-sourced income for their first 4 years." },
  { question: "What is the corporate tax rate in Indonesia?", answer: "The headline corporate income tax rate is 22%. Small businesses with annual turnover under IDR 4.8 billion can enjoy a 50% tax rate reduction or 0.5% final turnover tax." },
  { question: "Is there capital gains tax or inheritance tax in Indonesia?", answer: "Capital gains are included in normal taxable income and taxed at progressive personal or corporate rates. Indonesia does not levy a separate inheritance tax." },
  { question: "What is the non-taxable income (PTKP) amount?", answer: "Basic single PTKP is IDR 54,000,000 annually. A married taxpayer with 3 children (K/3) gets a total PTKP of IDR 72,000,000." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Self-Assessment & DJP Online", description: "Taxpayers calculate, report, and pay tax liabilities independently via DJP Online using NIK/NPWP identification." },
  { title: "PTKP Non-Taxable Thresholds", description: "Statutory income exemption applied before computing progressive personal income tax (PPh 21)." },
  { title: "Article 31E SME Discount", description: "50% corporate tax rate reduction on chargeable income up to IDR 4.8 billion for companies with annual revenue under IDR 50 billion." },
  { title: "PPh 26 Non-Resident Tax", description: "Flat 20% withholding tax levied on Indonesian-sourced income paid to non-resident individuals or foreign entities." }
];

export const indonesia: Country = {
  slug: "indonesia",
  name: "Indonesia",
  flag: "/logos/indonesia.png",
  continent: "Asia",
  officialTaxAuthority: "Direktorat Jenderal Pajak (DJP)",
  taxAuthorityUrl: "https://www.pajak.go.id",
  currency: "IDR",
  capital: "Jakarta",
  population: "277 million",
  gdp: "$1.3 trillion",
  officialLanguage: "Bahasa Indonesia",
  overview: "Indonesia operates a progressive self-assessment tax system governed by the Direktorat Jenderal Pajak (DJP). Personal income tax (PPh 21) features five progressive brackets ranging from 5% to 35% after deducting Non-Taxable Income (PTKP) starting at IDR 54,000,000. Corporate income tax is set at a flat 22%, with reduced rates available for small and medium enterprises. Foreigners and expats living in Bali or other Indonesian regions for 183+ days qualify as tax residents, benefiting from territorial provisions under the Job Creation Law.",
  lastUpdated: "2026-08-20",
  taxYear: "Calendar Year (January 1 – December 31)",
  filingDeadline: "March 31 (individuals); April 30 (corporations)",
  paymentDeadline: "Prior to filing annual SPT returns; monthly withholding due 10th-15th",
  taxSystemOverview: {
    incomeTax: "Progressive personal rates from 5% to 35% after PTKP allowance (IDR 54M+). Non-residents taxed at flat 20% (PPh 26) on Indonesian income. Corporate tax is 22%.",
    capitalGainsTax: "Capital gains are included in gross income and taxed at general progressive personal or corporate rates. Real estate sales trigger a 2.5% final income tax.",
    vatGstSalesTax: "Value Added Tax (PPN) is standard rated at 11%. Mandatory registration for businesses exceeding IDR 4.8 billion in turnover.",
    corporateTax: "Headline corporate tax is 22%. Companies with revenue up to IDR 50B receive a 50% tax rate discount on revenue up to IDR 4.8B under Article 31E.",
    payrollTax: "Employers deduct PPh 21 monthly from employee salaries and pay BPJS health and employment contributions."
  },
  taxSystemDetails: {
    howTaxationWorks: "Taxpayers register for an NPWP (integrated with NIK ID), calculate tax using DJP rules, and e-file annual SPT returns online via DJP Online.",
    whoPaysTax: "Tax residents pay tax on global income (with territorial relief for qualifying expats). Non-residents pay 20% withholding tax on Indonesian-sourced income.",
    residentVsNonResident: "Residency is met by physical presence exceeding 183 days in 12 months or holding a permanent abode/KITAS. Non-residents face flat 20% tax without PTKP.",
    personalIncomeTax: "Five progressive brackets: 5% (up to 60M), 15% (60M-250M), 25% (250M-500M), 30% (500M-5B), and 35% (above 5B).",
    businessTaxOverview: "Corporations file annual SPT 1771. Micro-enterprises with revenue under IDR 4.8B can opt for a 0.5% final turnover tax under PP 55/2022.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "Basic PTKP non-taxable allowance of IDR 54,000,000 for single taxpayers, plus IDR 4,500,000 for spouse and IDR 4,500,000 per child (max 3), plus 5% occupational cost (max IDR 6M/yr).",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Indonesia Income Tax Calculator (PPh 21)", category: "income-tax" },
    { slug: "vat-calculator", name: "Indonesia VAT Calculator (11%)", category: "vat" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Indonesian Net Salary Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [
    { slug: "income-tax-calculator", name: "Indonesian Corporate Tax Estimator", category: "income-tax" }
  ],
  relatedCountries: ["singapore", "malaysia", "philippines", "hong-kong"],
  latestUpdates: [
    { date: "2026-01-01", title: "NIK Integration & 2026 DJP Regulations", description: "DJP fully integrated NIK (National ID) as the primary Tax Identification Number (NPWP) for individual taxpayers." },
    { date: "2024-01-01", title: "VAT Rate Standardized at 11%", description: "Standard PPN rate confirmed at 11% across all taxable goods and digital service imports." }
  ],
  countryFAQs,
  taxSystemSummary: "Indonesia operates a progressive self-assessment tax system with personal rates from 5% to 35%, 22% corporate tax, and 11% VAT. Tax residents are granted PTKP deductions starting at IDR 54,000,000.",
  employerWithholding: "Employers withhold PPh 21 monthly from employee salaries and issue annual Form 1721-A1/A2 withholding certificates for SPT Tahunan filing.",
  whoShouldUse: [
    { type: "Salaried Employees", icon: "M20 7h-4V5c0-1.1-.9-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "Employees in Indonesia calculating net monthly salary after PPh 21 withholding and PTKP deductions." },
    { type: "Expats & Digital Nomads in Bali", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Foreigners living in Bali, Jakarta, or major hubs evaluating the 183-day residency rule, KITAS status, and territorial tax rules." },
    { type: "Business Owners & PT PMA Companies", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Company directors calculating 22% corporate tax, Article 31E discounts, and 0.5% final turnover tax for small enterprises." },
    { type: "Freelancers & Consultants", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Independent contractors and freelancers filing SPT 1770 using the Norma Penghitungan Penghasilan Netto (NPPN) scheme." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Gross Annual Income", description: "Input annual gross income earned from employment, business, rental, or professional services." },
    { step: 2, title: "Select PTKP Marital & Dependent Status", description: "Choose your tax status (TK/0 single, K/1 married with 1 child, etc.) to apply the correct non-taxable income deduction." },
    { step: 3, title: "Calculate Net Taxable Income", description: "The tool subtracts occupational costs and PTKP allowances to find your net chargeable income." },
    { step: 4, title: "Apply 2026 Progressive Rates", description: "Progressive rates from 5% to 35% are calculated across each applicable tax bracket." },
    { step: 5, title: "Review Net Income & Taxes", description: "Analyze your effective tax rate, net monthly take-home salary, and PPh 21 withholding credits." }
  ],
  educationalDisclaimer: "Tax information and calculators are provided for educational purposes only and do not constitute legal or tax advice. Consult a qualified Indonesian tax consultant (Konsultan Pajak) or refer to DJP regulations for official filing.",
  dataSources: ["Direktorat Jenderal Pajak (DJP)", "Indonesian Income Tax Law (UU PPh)", "Harmonization of Tax Regulations Law (UU HPP)"],
  calculationMethodology: "Calculations strictly follow DJP PPh 21 progressive brackets for 2026. Chargeable income equals gross income minus occupational cost (Biaya Jabatan 5%, max 6M/yr) and applicable PTKP allowance."
};
