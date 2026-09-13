export interface RichCalculatorSection {
  title: string;
  html?: string;
  text?: string;
}

export interface RichFAQItem {
  question: string;
  answer: string;
}

export interface RichCalculatorContent {
  overview?: RichCalculatorSection;
  howToUse?: RichCalculatorSection;
  understandingResults?: RichCalculatorSection;
  formula?: RichCalculatorSection;
  workedExample?: RichCalculatorSection;
  benefits?: RichCalculatorSection;
  limitations?: RichCalculatorSection;
  taxSlabs?: RichCalculatorSection;
  commonMistakes?: RichCalculatorSection;
  faq?: RichFAQItem[];
  relatedCalculators?: RichCalculatorSection;
  suggestedArticles?: RichCalculatorSection;
  officialResources?: RichCalculatorSection;
  educationalDisclaimer?: RichCalculatorSection;
  relatedCountry?: RichCalculatorSection;
  faqSchema?: Record<string, string>;
  [key: string]: unknown;
}
