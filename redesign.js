const fs = require('fs');
const path = './src/pages/index.astro';

let content = fs.readFileSync(path, 'utf8');

// Extract the frontmatter
const frontmatterRegex = /^---([\s\S]*?)---/;
const match = content.match(frontmatterRegex);
const frontmatter = match ? match[0] : '';

// The new HTML structure
const newHtml = `
<Layout
  title="Tax Hub | Free Online Tax Estimator | Finsiva"
  description="Free tax calculator to estimate income tax, salary tax, and take-home pay. Accurate, privacy-first results for 10+ countries. Try Finsiva now."
  canonical={baseUrl}
  robots="index,follow"
  schema={homepageSchema}
  image="/og-image.svg"
  imageAlt="Finsiva tax calculator dashboard showing income tax estimates across multiple countries"
>
  <article id="main-content" class="min-h-screen bg-canvas dark:bg-canvas">
    
    <!-- 1. ACTION-ORIENTED HERO SECTION -->
    <section class="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-canvas dark:from-primary/10 dark:to-canvas"></div>
      <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-3xl" aria-hidden="true"></div>

      <div class="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
          <span class="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Tax Tools Built for Clarity
        </span>
        
        <h1 class="text-5xl font-extrabold tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl mb-6">
          Tax Calculators,<br/> <span class="text-primary">Simplified.</span>
        </h1>
        
        <p class="mx-auto max-w-2xl text-xl text-body dark:text-muted mb-10 leading-relaxed">
          Estimate income tax, salary deductions, and take-home pay instantly. No registration, no data collection—just accurate, privacy-first results.
        </p>
        
        <!-- Quick Country Select Widget -->
        <div class="mx-auto max-w-3xl bg-white dark:bg-surface border border-hairline dark:border-overlay-lighter rounded-2xl shadow-xl shadow-primary/5 p-5 sm:p-8 mb-8 text-left relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
          <h2 class="text-sm font-bold text-ink dark:text-on-primary uppercase tracking-wider mb-5">Quick Start: Select Your Country</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {countries.slice(0, 7).map(country => (
              <a href={\`/countries/\${country.slug}/\`} class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-hairline bg-canvas-soft hover:border-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-200 dark:border-overlay-lighter dark:bg-surface dark:hover:border-primary">
                <img src={country.flag} alt={\`\${country.name} flag\`} class="h-8 w-auto object-contain transition-transform group-hover:scale-110" />
                <span class="font-semibold text-ink dark:text-on-primary text-xs text-center">{country.name}</span>
              </a>
            ))}
            <a href="/countries/" class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-dashed border-muted hover:border-primary text-primary transition-colors bg-canvas dark:bg-canvas-soft">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <span class="font-semibold text-xs text-center">View All</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. CONSOLIDATED "WHY FINSIVA" SECTION -->
    <section class="py-12 bg-canvas-soft dark:bg-canvas relative z-10 border-y border-hairline dark:border-overlay-lighter">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="p-4">
             <div class="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
             </div>
             <h3 class="font-bold text-ink dark:text-on-primary mb-2 text-lg">Privacy First</h3>
             <p class="text-sm text-body dark:text-muted">Calculations run locally in your browser. No data collected or stored.</p>
          </div>
          <div class="p-4">
             <div class="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
             </div>
             <h3 class="font-bold text-ink dark:text-on-primary mb-2 text-lg">Instant Results</h3>
             <p class="text-sm text-body dark:text-muted">No sign-ups, no waiting. Get your tax estimates in milliseconds.</p>
          </div>
          <div class="p-4">
             <div class="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
             </div>
             <h3 class="font-bold text-ink dark:text-on-primary mb-2 text-lg">Global Support</h3>
             <p class="text-sm text-body dark:text-muted">Accurate tax slabs and rules for over 10+ countries worldwide.</p>
          </div>
          <div class="p-4">
             <div class="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
             </div>
             <h3 class="font-bold text-ink dark:text-on-primary mb-2 text-lg">Always Updated</h3>
             <p class="text-sm text-body dark:text-muted">Calculators dynamically reflect the latest statutory tax rules.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. HOW IT WORKS (Visual 3-step process) -->
    <section class="py-20 relative z-10" aria-labelledby="how-heading">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="how-heading" class="text-3xl font-extrabold text-ink mb-16 text-center dark:text-on-primary">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          <!-- Connecting Line -->
          <div class="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 -z-10"></div>
          
          <div class="text-center bg-canvas dark:bg-canvas p-6">
            <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-surface border-4 border-primary text-xl font-bold text-primary shadow-lg shadow-primary/20 mb-6">1</span>
            <h3 class="text-xl font-bold text-ink dark:text-on-primary mb-3">Choose Country</h3>
            <p class="text-body dark:text-muted leading-relaxed">Select the country whose tax rules apply to your situation. We tailor all fields locally.</p>
          </div>
          <div class="text-center bg-canvas dark:bg-canvas p-6">
            <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-surface border-4 border-primary text-xl font-bold text-primary shadow-lg shadow-primary/20 mb-6">2</span>
            <h3 class="text-xl font-bold text-ink dark:text-on-primary mb-3">Enter Details</h3>
            <p class="text-body dark:text-muted leading-relaxed">Provide your income, deductions, and filing status safely—no data leaves your device.</p>
          </div>
          <div class="text-center bg-canvas dark:bg-canvas p-6">
            <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-surface border-4 border-primary text-xl font-bold text-primary shadow-lg shadow-primary/20 mb-6">3</span>
            <h3 class="text-xl font-bold text-ink dark:text-on-primary mb-3">Get Estimate</h3>
            <p class="text-body dark:text-muted leading-relaxed">Instantly review your tax liability, effective rate, and exact take-home pay.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. STREAMLINED POPULAR CALCULATORS -->
    <section class="py-20 bg-canvas-soft dark:bg-surface/30 relative z-10 border-t border-hairline dark:border-overlay-lighter" aria-labelledby="calculators-heading">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div class="max-w-2xl">
            <h2 id="calculators-heading" class="text-3xl font-extrabold text-ink mb-4 dark:text-on-primary">Popular Calculators</h2>
            <p class="text-lg text-body dark:text-muted">Choose from our library of tools optimized for regional rules.</p>
          </div>
          <a href="/countries/" class="hidden md:inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover">Explore all tools &rarr;</a>
        </div>
        
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1 -->
          <div class="group flex flex-col bg-white dark:bg-surface border border-hairline dark:border-overlay-lighter rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300">
            <div class="h-12 w-12 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-ink dark:text-on-primary mb-2">Income Tax</h3>
            <p class="text-body dark:text-muted mb-6 flex-grow">Estimate your income tax with the latest slab rates, standard deductions, and regional filing statuses.</p>
            <div class="pt-4 border-t border-hairline dark:border-overlay-lighter">
              <span class="text-xs font-bold text-muted uppercase tracking-wider block mb-3">Top Regions:</span>
              <div class="flex flex-wrap gap-2">
                <a href="/countries/united-states/income-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">US</a>
                <a href="/countries/united-kingdom/income-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">UK</a>
                <a href="/countries/india/income-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">India</a>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group flex flex-col bg-white dark:bg-surface border border-hairline dark:border-overlay-lighter rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300">
            <div class="h-12 w-12 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-ink dark:text-on-primary mb-2">Salary Tax</h3>
            <p class="text-body dark:text-muted mb-6 flex-grow">Calculate tax on gross salary, including allowances, bonuses, and mandatory employer contributions.</p>
            <div class="pt-4 border-t border-hairline dark:border-overlay-lighter">
              <span class="text-xs font-bold text-muted uppercase tracking-wider block mb-3">Top Regions:</span>
              <div class="flex flex-wrap gap-2">
                <a href="/countries/hong-kong/salaries-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">Hong Kong</a>
                <a href="/countries/singapore/income-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">Singapore</a>
                <a href="/countries/malaysia/income-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">Malaysia</a>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group flex flex-col bg-white dark:bg-surface border border-hairline dark:border-overlay-lighter rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300">
            <div class="h-12 w-12 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h3 class="text-xl font-bold text-ink dark:text-on-primary mb-2">Capital Gains</h3>
            <p class="text-body dark:text-muted mb-6 flex-grow">Estimate capital gains tax on stocks, real estate, and crypto for short and long-term investments.</p>
            <div class="pt-4 border-t border-hairline dark:border-overlay-lighter">
              <span class="text-xs font-bold text-muted uppercase tracking-wider block mb-3">Top Regions:</span>
              <div class="flex flex-wrap gap-2">
                <a href="/countries/united-states/capital-gains-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">US</a>
                <a href="/countries/united-kingdom/capital-gains-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">UK</a>
                <a href="/countries/india/capital-gains-tax" class="px-3 py-1 bg-canvas rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors dark:bg-canvas-soft">India</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. FINAL CTA -->
    <section class="py-20 relative z-10" aria-labelledby="conclusion-heading">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="conclusion-heading" class="text-4xl font-extrabold text-ink mb-6 dark:text-on-primary">Ready to optimize your taxes?</h2>
        <p class="text-xl text-body mb-10 dark:text-muted">
          Join thousands of users who plan their finances with Finsiva's accurate, private tax calculators.
        </p>
        <a href="/countries/" class="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-bold text-white shadow-xl shadow-primary/30 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 dark:bg-on-primary dark:text-primary">
          Start Calculating Now &rarr;
        </a>
      </div>
    </section>

  </article>
</Layout>
`;

const finalFileContent = frontmatter + '\n' + newHtml;
fs.writeFileSync(path, finalFileContent);
console.log('Successfully updated index.astro');
