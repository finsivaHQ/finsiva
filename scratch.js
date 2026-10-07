import { calcGSTOrVAT } from './src/config/calculatorLogic.js';
console.log(calcGSTOrVAT({ amount: 100, gstRate: '0.18' }, 0.18));
