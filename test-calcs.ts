import { calculatorLogic } from './src/config/calculatorLogic';

const testCases = {
  annualIncome: 100000,
  taxableIncome: 100000,
  gainAmount: 10000,
  ordinaryIncome: 50000,
  annualSalary: 1000000,
  assessableProfits: 100000,
  propertyPrice: 500000,
  price: 500,
  goodsValue: 1000,
  invoiceAmount: 10000,
  contractValue: 5000,
  amount: 2000
};

let errors = 0;
let nanResults = 0;
const results: Record<string, any> = {};

for (const [name, fn] of Object.entries(calculatorLogic)) {
  try {
    const res = (fn as any)(testCases);
    const hasNaN = JSON.stringify(res).includes('null') || Object.values(res).some((v: any) => Number.isNaN(v));
    if (hasNaN) {
      console.error(`❌ ${name} returned NaN or null:`, res);
      nanResults++;
    } else {
      console.log(`✅ ${name} works fine.`);
    }
    results[name] = res;
  } catch (err) {
    console.error(`❌ ${name} threw an error:`, err);
    errors++;
  }
}
console.log(`\nSummary: ${errors} errors, ${nanResults} NaN results.`);
