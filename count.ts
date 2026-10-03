import { countries } from "./src/countries/index.ts";
let totalCalculators = 0;
let totalCategories = 0;
let totalGuides = 0;
let totalFaqs = 0;
for (const c of countries) {
  totalCategories += c.taxCategories.length;
  for (const cat of c.taxCategories) {
    totalCalculators += cat.calculators?.length || 0;
    totalGuides += cat.guides?.length || 0;
    totalFaqs += cat.faqs?.length || 0;
  }
}
console.log("Calculators:", totalCalculators);
console.log("Categories:", totalCategories);
console.log("Guides (Data):", totalGuides);
console.log("FAQs:", totalFaqs);
