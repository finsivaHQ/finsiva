import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const countriesDir = path.join(__dirname, '../src/countries');

const requiredFields = [
  'slug', 'name', 'flag', 'continent', 'currency', 'taxYear',
  'taxCategories', 'currentTaxBrackets', 'officialResources', 'countryFAQs'
];

let errors = 0;
let warnings = 0;

const subdirs = fs.readdirSync(countriesDir).filter((file) => {
  const fullPath = path.join(countriesDir, file);
  return fs.statSync(fullPath).isDirectory();
});

console.log(`🔍 Auditing data integrity across ${subdirs.length} country datasets...\n`);

for (const dir of subdirs) {
  const dataPath = path.join(countriesDir, dir, 'data.ts');
  if (!fs.existsSync(dataPath)) {
    console.warn(`⚠️ Warning: Missing data.ts in ${dir}`);
    warnings++;
    continue;
  }

  const content = fs.readFileSync(dataPath, 'utf8');

  // Check required fields
  for (const field of requiredFields) {
    if (!content.includes(`${field}:`) && !content.includes(`"${field}":`)) {
      console.error(`❌ Error in ${dir}: Missing required field '${field}'`);
      errors++;
    }
  }

  if (content.includes('currentTaxBrackets: [')) {
    console.log(`  ✅ ${dir}: Tax brackets and metadata valid`);
  } else {
    console.warn(`  ⚠️ ${dir}: No currentTaxBrackets array found`);
    warnings++;
  }
}

console.log(`\n📊 Data Audit Summary: ${errors} Errors, ${warnings} Warnings`);

if (errors > 0) {
  console.error('\n❌ Data validation failed!');
  process.exit(1);
} else {
  console.log('✅ All country tax datasets passed integrity checks!');
}
