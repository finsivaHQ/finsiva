/**
 * Hong Kong Salaries Tax Calculator
 * Calculates tax using progressive rates and standard rate,
 * returns the lower of the two.
 */

export const STANDARD_RATE = 0.15;

export const ALLOWANCES = {
  BASIC_ALLOWANCE: 132000,
  MARRIED_ALLOWANCE: 264000,
  CHILD_ALLOWANCE: 120000
};

export const PROGRESSIVE_BRACKETS = [
  { threshold: 50000, rate: 0.02 },
  { threshold: 100000, rate: 0.06 },
  { threshold: 150000, rate: 0.10 },
  { threshold: 200000, rate: 0.14 }
];

/**
 * Calculate Hong Kong salaries tax
 * @param {Object} params
 * @param {number} params.income - Annual income (HKD)
 * @param {number} params.deductions - Deductions (HKD)
 * @param {'single'|'married'} params.maritalStatus - Marital status
 * @param {number} params.children - Number of children
 * @returns {{ netIncome: number, progressiveTax: number, standardTax: number, finalTax: number }}
 */
export function calculateHongKongSalariesTax({ income, deductions, maritalStatus, children }) {
  // Step 1: Calculate allowance
  let allowance = maritalStatus === 'married'
    ? ALLOWANCES.MARRIED_ALLOWANCE
    : ALLOWANCES.BASIC_ALLOWANCE;
  allowance += children * ALLOWANCES.CHILD_ALLOWANCE;

  // Step 2: Net Chargeable Income
  const netIncome = Math.max(0, income - deductions - allowance);

  // Step 3: Progressive Tax
  let progressiveTax = 0;
  let prevThreshold = 0;

  for (const bracket of PROGRESSIVE_BRACKETS) {
    if (netIncome > prevThreshold) {
      const taxableInBracket = Math.min(netIncome, bracket.threshold) - prevThreshold;
      progressiveTax += taxableInBracket * bracket.rate;
    }
    prevThreshold = bracket.threshold;
  }

  // Apply top rate for amounts exceeding highest bracket
  if (netIncome > 200000) {
    progressiveTax += (netIncome - 200000) * 0.17;
  }

  // Step 4: Standard Tax
  const standardTax = netIncome * STANDARD_RATE;

  // Step 5: Final Tax
  const finalTax = Math.min(progressiveTax, standardTax);

  return {
    netIncome,
    progressiveTax,
    standardTax,
    finalTax
  };
}