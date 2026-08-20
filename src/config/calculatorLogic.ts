export function calcUSFederalIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const status = inputs.filingStatus || "single";
  const stdDedType = inputs.standardDeduction || "standard";
  const itemized = inputs.itemizedAmount ? parseFloat(inputs.itemizedAmount) : 0;
  const year = inputs.taxYear ? parseInt(inputs.taxYear) : 2025;

  let deduction = itemized;
  if (stdDedType === "standard") {
    if (status === "married_joint") deduction = year >= 2025 ? 30000 : year >= 2024 ? 29200 : 27700;
    else if (status === "head_of_household") deduction = year >= 2025 ? 22500 : year >= 2024 ? 21900 : 20800;
    else if (status === "married_separate") deduction = year >= 2025 ? 15000 : year >= 2024 ? 14600 : 13850;
    else deduction = year >= 2025 ? 15000 : year >= 2024 ? 14600 : 13850;
  }

  const taxable = Math.max(0, income - deduction);
  let tax = 0;

  if (status === "single") {
    if (year >= 2025) {
      tax = pTax(taxable, [[11925, 0.10], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [626350, 0.35], [100000000, 0.37]]);
    } else {
      tax = pTax(taxable, [[11600, 0.10], [47150, 0.12], [100525, 0.22], [191950, 0.24], [243725, 0.32], [609350, 0.35], [100000000, 0.37]]);
    }
  } else if (status === "married_joint") {
    if (year >= 2025) {
      tax = pTax(taxable, [[23850, 0.10], [96950, 0.12], [206700, 0.22], [394600, 0.24], [501050, 0.32], [751600, 0.35], [100000000, 0.37]]);
    } else {
      tax = pTax(taxable, [[23200, 0.10], [94300, 0.12], [201050, 0.22], [383900, 0.24], [487450, 0.32], [731200, 0.35], [100000000, 0.37]]);
    }
  } else if (status === "head_of_household") {
    if (year >= 2025) {
      tax = pTax(taxable, [[17000, 0.10], [64850, 0.12], [103350, 0.22], [197300, 0.24], [250500, 0.32], [626350, 0.35], [100000000, 0.37]]);
    } else {
      tax = pTax(taxable, [[16550, 0.10], [63100, 0.12], [100500, 0.22], [191950, 0.24], [243700, 0.32], [609350, 0.35], [100000000, 0.37]]);
    }
  } else if (status === "married_separate") {
    if (year >= 2025) {
      tax = pTax(taxable, [[11925, 0.10], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [375800, 0.35], [100000000, 0.37]]);
    } else {
      tax = pTax(taxable, [[11600, 0.10], [47150, 0.12], [100525, 0.22], [191950, 0.24], [243725, 0.32], [365600, 0.35], [100000000, 0.37]]);
    }
  }

  const effective = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: taxable, federalTax: tax, effectiveRate: effective, takeHomePay: income - tax };
}

export function calcStateTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const state = inputs.state || "CA";
  const status = inputs.filingStatus || "single";

  const rates: Record<string, number[][]> = {
    CA: status === "married_joint"
      ? [[17618, 0.01], [41726, 0.02], [65306, 0.04], [91538, 0.06], [115648, 0.08], [590742, 0.093], [1000000, 0.103], [100000000, 0.123]]
      : [[10099, 0.01], [23942, 0.02], [37788, 0.04], [52455, 0.06], [68523, 0.08], [406176, 0.093], [1000000, 0.103], [100000000, 0.123]],
    NY: status === "married_joint"
      ? [[17000, 0.04], [26000, 0.045], [44000, 0.0525], [77500, 0.059], [215400, 0.0645], [500000, 0.0685], [100000000, 0.0965]]
      : [[8500, 0.04], [11700, 0.045], [25000, 0.0525], [50000, 0.059], [100000, 0.0645], [250000, 0.0685], [100000000, 0.0965]],
    TX: [[100000000, 0]], FL: [[100000000, 0]], WA: [[100000000, 0]], AZ: [[100000000, 0.025]], CO: [[100000000, 0.044]], GA: [[100000000, 0.0549]], IL: [[100000000, 0.0495]], AL: [[500, 0.02], [3000, 0.04], [100000000, 0.05]]
  };

  const brackets = rates[state] || rates["CA"];
  const stateTax = pTax(income, brackets);
  const effectiveRate = income > 0 ? (stateTax / income) * 100 : 0;
  return { stateTax, effectiveRate, takeHomePay: income - stateTax };
}

export function calcFICA(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const type = inputs.employmentType || "employed";
  const pretax = inputs.pretaxBenefits ? parseFloat(inputs.pretaxBenefits) : 0;
  const year = inputs.taxYear ? parseInt(inputs.taxYear) : 2025;
  const ssWageBase = year >= 2025 ? 176100 : year >= 2024 ? 168600 : 160200;
  const taxableForSS = Math.max(0, income - pretax);
  const ss = Math.min(taxableForSS, ssWageBase) * (type === "self_employed" ? 0.124 : 0.062);
  const medicare = taxableForSS * (type === "self_employed" ? 0.029 : 0.0145);
  const additionalMedicare = type === "employed" && taxableForSS > 200000 ? (taxableForSS - 200000) * 0.009 : type === "self_employed" && taxableForSS > 200000 ? (taxableForSS - 200000) * 0.018 : 0;
  const totalFICA = ss + medicare + additionalMedicare;
  const employerMatch = type === "employed" ? totalFICA : 0;
  return { socialSecurity: ss, medicare, additionalMedicare, totalFICA, employerMatch };
}

export function calcCorporate(inputs: Record<string, any>) {
  const income = inputs.taxableIncome || 0;
  const entityType = inputs.entityType || "c_corp";
  if (entityType === "c_corp") {
    const corporateTax = income * 0.21;
    return { corporateTax, effectiveRate: 21, afterTaxIncome: income - corporateTax };
  }
  return { corporateTax: 0, effectiveRate: 0, afterTaxIncome: income, note: "Income passes through to owners and is taxed at individual rates." };
}

export function calcCapitalGains(inputs: Record<string, any>) {
  const gain = inputs.gainAmount || 0;
  const ordinary = inputs.ordinaryIncome || 0;
  const status = inputs.filingStatus || "single";
  const holding = inputs.holdingPeriod || "long_term";
  const asset = inputs.assetType || "stock";
  let tax = 0;
  if (holding === "short_term") {
    tax = gain * 0.37;
  } else if (asset === "collectibles") {
    tax = gain * 0.28;
  } else {
    if (status === "single") {
      if (ordinary + gain <= 47025) tax = 0;
      else if (ordinary + gain <= 518900) tax = gain * 0.15;
      else tax = gain * 0.20;
    } else {
      if (ordinary + gain <= 94300) tax = 0;
      else if (ordinary + gain <= 584750) tax = gain * 0.15;
      else tax = gain * 0.20;
    }
  }
  const effectiveRate = gain > 0 ? (tax / gain) * 100 : 0;
  return { capitalGainsTax: tax, effectiveRate, afterTaxGain: gain - tax };
}

export function calcIndiaIncomeTax(inputs: Record<string, any>) {
  const regime = inputs.regime || "new";
  const ageGroup = inputs.ageGroup || "below_60";
  const salary = inputs.annualSalary || 0;
  const otherIncome = inputs.otherIncome ? parseFloat(inputs.otherIncome) : 0;
  const hra = inputs.hraReceived ? parseFloat(inputs.hraReceived) : 0;
  const section80C = inputs.section80C ? parseFloat(inputs.section80C) : 0;
  const section80D = inputs.section80D ? parseFloat(inputs.section80D) : 0;
  const homeLoanInterest = inputs.homeLoanInterest ? parseFloat(inputs.homeLoanInterest) : 0;

  const grossIncome = salary + otherIncome;
  let totalDeductions = 0;
  let taxableIncome = 0;

  if (regime === "new") {
    totalDeductions = 75000;
    taxableIncome = Math.max(0, grossIncome - totalDeductions);
  } else {
    const standardDeduction = 50000;
    let ageExemption = ageGroup === "below_60" ? 250000 : ageGroup === "senior" ? 300000 : 500000;
    totalDeductions = standardDeduction + Math.min(section80C, 150000) + Math.min(section80D, 25000) + Math.min(homeLoanInterest, 200000) + hra;
    taxableIncome = Math.max(0, grossIncome - totalDeductions - ageExemption);
  }

  let incomeTax = 0;
  if (regime === "new") {
    incomeTax = pTax(taxableIncome, [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [100000000, 0.30]]);
    if (taxableIncome <= 700000) {
      incomeTax = 0;
    }
  } else {
    incomeTax = pTax(taxableIncome, [[250000, 0], [500000, 0.05], [1000000, 0.20], [100000000, 0.30]]);
    if (taxableIncome <= 500000) {
      incomeTax = 0;
    }
  }

  const cess = incomeTax * 0.04;
  const totalTax = incomeTax + cess;
  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
  return { grossIncome, totalDeductions, taxableIncome, incomeTax, cess, totalTax, effectiveRate, takeHomePay: grossIncome - totalTax };
}

export function calcGSTOrVAT(inputs: Record<string, any>, defaultRate: number) {
  const amount = inputs.amount || 0;
  const rate = inputs.gstRate || inputs.vatRate || defaultRate;
  const type = inputs.calculationType || "exclusive";
  const rateFloat = parseFloat(rate) || defaultRate;

  let gstAmount = 0, totalAmount = 0, netAmount = 0;
  if (type === "inclusive") {
    gstAmount = amount - (amount / (1 + rateFloat));
    netAmount = amount / (1 + rateFloat);
    totalAmount = amount;
  } else {
    gstAmount = amount * rateFloat;
    netAmount = amount;
    totalAmount = amount * (1 + rateFloat);
  }
  return { gstAmount, totalAmount, netAmount };
}

export function calcSST(inputs: Record<string, any>) {
  const amount = inputs.amount || 0;
  const taxType = inputs.taxType || "sales_10";
  const type = inputs.calculationType || "exclusive";

  const rate = taxType === "sales_5" ? 0.05 : taxType === "sales_10" ? 0.10 : taxType === "service_6" ? 0.06 : 0.08;

  let taxAmount = 0, totalAmount = 0, netAmount = 0;
  if (type === "inclusive") {
    taxAmount = amount - (amount / (1 + rate));
    netAmount = amount / (1 + rate);
    totalAmount = amount;
  } else {
    taxAmount = amount * rate;
    netAmount = amount;
    totalAmount = amount * (1 + rate);
  }
  return { taxAmount, totalAmount, netAmount };
}

export function calcTDS(inputs: Record<string, any>) {
  const amount = inputs.amount || 0;
  const type = inputs.paymentType || "professional";
  const pan = inputs.panAvailable || "yes";

  let rate = 0;
  if (type === "professional" || type === "interest" || type === "rent") rate = pan === "no" ? 0.20 : 0.10;
  else if (type === "contractor") rate = pan === "no" ? 0.20 : 0.02;
  else if (type === "salary" || type === "dividend") rate = 0;

  const tdsAmount = amount * rate;
  const netAmount = amount - tdsAmount;
  return { tdsRate: rate * 100, tdsAmount, netAmount };
}

export function calcUKIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  let personalAllowance = 12570;
  if (income > 100000) {
    personalAllowance = Math.max(0, 12570 - (income - 100000) / 2);
  }

  const taxableIncome = Math.max(0, income - personalAllowance);
  const basic = Math.min(taxableIncome, 37700) * 0.20;
  const higher = Math.min(Math.max(taxableIncome - 37700, 0), 87440) * 0.40;
  const additional = Math.max(0, taxableIncome - 125140 + personalAllowance) * 0.45;
  const incomeTax = basic + higher + additional;

  const effectiveRate = income > 0 ? (incomeTax / income) * 100 : 0;
  return { personalAllowance, taxableIncome, incomeTax, effectiveRate, takeHomePay: income - incomeTax };
}

export function calcNIContributions(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const type = inputs.employmentType || "employed";
  const year = inputs.taxYear ? parseInt(inputs.taxYear.split("-")[0]) : 2024;

  const primaryThreshold = year >= 2025 ? 13000 : 12570;
  const upperThreshold = year >= 2025 ? 52300 : 50270;

  let ni = 0;
  if (type === "employed") {
    if (income <= primaryThreshold) ni = 0;
    else ni = Math.min(income - primaryThreshold, upperThreshold - primaryThreshold) * 0.08 + Math.max(0, income - upperThreshold) * 0.02;
  } else {
    const class2 = 52 * 3.45;
    const class4 = Math.max(0, income - primaryThreshold) * 0.06 + Math.max(0, income - upperThreshold) * 0.02;
    ni = class2 + class4;
  }
  const rate = income > 0 ? (ni / income) * 100 : 0;
  return { niContributions: ni, effectiveRate: rate };
}

export function calcHKSalariesTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const mpfInput = inputs.mpfContributions ? parseFloat(inputs.mpfContributions) : (income * 0.05);
  const mpf = Math.min(mpfInput, 18000);
  const marital = inputs.maritalStatus || "single";
  const children = inputs.dependentChildren ? parseInt(inputs.dependentChildren) : 0;

  const allowance = marital === "married" ? 264000 : 132000;
  const childAllowance = Math.min(children, 9) * 130000;
  const totalAllowances = allowance + childAllowance;

  const netChargeableIncome = Math.max(0, income - mpf - totalAllowances);
  const progressive = pTax(netChargeableIncome, [[50000, 0.02], [100000, 0.06], [150000, 0.10], [200000, 0.14], [100000000, 0.17]]);
  const standard = Math.max(0, income - mpf) * 0.15;
  let salariesTax = Math.min(progressive, standard);
  salariesTax = Math.max(0, salariesTax - 3000); // IRD 100% Tax reduction capped at HK$3,000

  const effectiveRate = income > 0 ? (salariesTax / income) * 100 : 0;
  return { totalIncome: income, mpf, allowances: totalAllowances, netChargeableIncome, salariesTax, effectiveRate, takeHomePay: income - salariesTax };
}

export function calcHKSalariesTax202526(inputs: Record<string, any>) {
  return calcHKSalariesTax(inputs);
}

export function calcHKProfitsTax(inputs: Record<string, any>) {
  const profits = inputs.assessableProfits || 0;
  const businessType = inputs.businessType || "corporation";
  let profitsTax = 0;
  if (businessType === "corporation") {
    profitsTax = Math.min(profits, 2000000) * 0.0825 + Math.max(0, profits - 2000000) * 0.165;
  } else {
    profitsTax = Math.min(profits, 2000000) * 0.075 + Math.max(0, profits - 2000000) * 0.15;
  }
  const effectiveRate = profits > 0 ? (profitsTax / profits) * 100 : 0;
  return { profitsTax, effectiveRate };
}

export function calcSGIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const resident = inputs.residentStatus !== "non_resident";
  const donations = inputs.donations ? parseFloat(inputs.donations) : 0;

  let taxableIncome = income;
  if (resident && donations > 0) {
    taxableIncome = Math.max(0, income - donations * 2.5);
  }

  let incomeTax = 0;
  if (resident) {
    incomeTax = pTax(taxableIncome, [
      [20000, 0],
      [30000, 0.02],
      [40000, 0.035],
      [80000, 0.07],
      [120000, 0.115],
      [160000, 0.15],
      [200000, 0.18],
      [240000, 0.19],
      [280000, 0.205],
      [320000, 0.22],
      [100000000, 0.24]
    ]);
    // IRAS 50% Tax Rebate capped at S$200
    incomeTax = Math.max(0, incomeTax - Math.min(incomeTax * 0.50, 200));
  } else {
    incomeTax = taxableIncome * 0.24;
  }

  const effectiveRate = income > 0 ? (incomeTax / income) * 100 : 0;
  return { incomeTax, effectiveRate, takeHomePay: income - incomeTax };
}

export function calcSGStampDuty(inputs: Record<string, any>) {
  const price = inputs.propertyPrice || 0;
  const buyer = inputs.buyerType || "citizen";
  const propType = inputs.propertyType || "residential";

  let bsd = 0;
  if (propType === "residential") {
    bsd = 0.01 * Math.min(price, 180000) +
          0.02 * Math.max(0, Math.min(price, 360000) - 180000) +
          0.03 * Math.max(0, Math.min(price, 1000000) - 360000) +
          0.04 * Math.max(0, Math.min(price, 1500000) - 1000000) +
          0.05 * Math.max(0, Math.min(price, 3000000) - 1500000) +
          0.06 * Math.max(0, price - 3000000);
  } else {
    bsd = price * 0.04;
  }

  let absd = 0;
  if (propType === "residential") {
    if (buyer === "pr") absd = price * 0.05;
    else if (buyer === "foreigner") absd = price * 0.60;
  }

  const stampDuty = bsd + absd;
  return { stampDuty, totalCost: price + stampDuty };
}

export function calcMYIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const resident = inputs.residentStatus !== "non_resident";

  let taxableIncome = income;
  let incomeTax = 0;

  if (resident) {
    const personalRelief = 9000;
    taxableIncome = Math.max(0, income - personalRelief);

    incomeTax = pTax(taxableIncome, [
      [5000, 0.00],
      [20000, 0.01],
      [35000, 0.03],
      [50000, 0.06],
      [70000, 0.11],
      [100000, 0.19],
      [400000, 0.25],
      [600000, 0.26],
      [2000000, 0.28],
      [100000000, 0.30]
    ]);

    if (taxableIncome <= 35000) {
      incomeTax = Math.max(0, incomeTax - 400);
    }
  } else {
    incomeTax = taxableIncome * 0.30;
  }

  const effectiveRate = income > 0 ? (incomeTax / income) * 100 : 0;
  return { taxableIncome, incomeTax, effectiveRate, takeHomePay: income - incomeTax };
}

export function calcNZIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  const tax = pTax(income, [
    [15600, 0.105],
    [53500, 0.175],
    [78100, 0.30],
    [180000, 0.33],
    [100000000, 0.39]
  ]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate, takeHomePay: income - tax };
}

export function calcPKIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  const tax = pTax(income, [
    [600000, 0.00],
    [1200000, 0.05],
    [2200000, 0.15],
    [3200000, 0.25],
    [4100000, 0.30],
    [100000000, 0.35]
  ]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate, takeHomePay: income - tax };
}

export function calcPHIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  const tax = pTax(income, [
    [250000, 0.00],
    [400000, 0.15],
    [800000, 0.20],
    [2000000, 0.25],
    [8000000, 0.30],
    [100000000, 0.35]
  ]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate, takeHomePay: income - tax };
}

export function calcIDIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const ptkpStatus = inputs.ptkpStatus || "TK/0";

  let ptkp = 54000000;
  if (ptkpStatus === "TK/1" || ptkpStatus === "K/0") ptkp = 58500000;
  else if (ptkpStatus === "TK/2" || ptkpStatus === "K/1") ptkp = 63000000;
  else if (ptkpStatus === "TK/3" || ptkpStatus === "K/2") ptkp = 67500000;
  else if (ptkpStatus === "K/3") ptkp = 72000000;

  const taxableIncome = Math.max(0, income - ptkp);

  const tax = pTax(taxableIncome, [
    [60000000, 0.05],
    [250000000, 0.15],
    [500000000, 0.25],
    [5000000000, 0.30],
    [100000000000, 0.35]
  ]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { grossIncome: income, ptkp, taxableIncome, incomeTax: tax, effectiveRate, takeHomePay: income - tax };
}

function pTax(income: number, brackets: number[][]) {
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < brackets.length; i++) {
    const lim = brackets[i][0];
    const r = brackets[i][1];
    if (income > prev) {
      const taxable = Math.min(income, lim) - prev;
      tax += taxable * r;
    }
    prev = lim;
  }
  return tax;
}

export const calculatorLogic = {
  calcUSFederalIncomeTax,
  calcStateTax,
  calcFICA,
  calcCorporate,
  calcCapitalGains,
  calcIndiaIncomeTax,
  calcGSTOrVAT,
  calcSST,
  calcTDS,
  calcUKIncomeTax,
  calcNIContributions,
  calcHKSalariesTax,
  calcHKSalariesTax202526,
  calcHKProfitsTax,
  calcSGIncomeTax,
  calcSGStampDuty,
  calcMYIncomeTax,
  calcNZIncomeTax,
  calcPKIncomeTax,
  calcPHIncomeTax,
  calcIDIncomeTax,
};

export type CalculatorFunction = keyof typeof calculatorLogic;
