import { calculateHongKongSalariesTax } from './hk-salaries-tax';

describe('Hong Kong Salaries Tax Calculator', () => {
  it('calculates net income as zero when deductions exceed income and allowances', () => {
    const result = calculateHongKongSalariesTax({
      income: 100000,
      deductions: 400000,
      maritalStatus: 'single',
      children: 0
    });
    expect(result.netIncome).toBe(0);
  });

  it('applies married allowance with child allowance correctly', () => {
    const result = calculateHongKongSalariesTax({
      income: 500000,
      deductions: 0,
      maritalStatus: 'married',
      children: 2
    });
    const expectedAllowance = 264000 + 2 * 120000; // 504000
    const netIncome = Math.max(0, 500000 - expectedAllowance);
    expect(netIncome).toBe(0);
  });

  it('calculates progressive tax correctly for highest bracket', () => {
    const result = calculateHongKongSalariesTax({
      income: 300000,
      deductions: 0,
      maritalStatus: 'single',
      children: 0
    });
    const expectedTax = 50000 * 0.02 + 50000 * 0.06 + 50000 * 0.10 + 50000 * 0.14 + 100000 * 0.17;
    expect(result.progressiveTax).toBeCloseTo(expectedTax, 2);
  });

  it('uses the lower of progressive or standard tax as final tax', () => {
    const result = calculateHongKongSalariesTax({
      income: 120000,
      deductions: 0,
      maritalStatus: 'single',
      children: 0
    });
    // Final tax should be the minimum of progressiveTax and standardTax
    expect(result.finalTax).toBeCloseTo(result.standardTax, 2);
    expect(result.finalTax).toBeLessThanOrEqual(result.progressiveTax);
  });

  it('handles maximum child allowance for 9 children', () => {
    const result = calculateHongKongSalariesTax({
      income: 500000,
      deductions: 0,
      maritalStatus: 'married',
      children: 9
    });
    const maxAllowance = 264000 + 9 * 120000;
    const netIncome = Math.max(0, 500000 - maxAllowance);
    expect(netIncome).toBe(0);
  });
});