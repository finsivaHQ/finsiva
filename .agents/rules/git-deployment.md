# Git Deployment Workflow Rule

## Automated GitHub Push & Cloudflare Pages Deployment

Whenever the user requests code changes, bug fixes, feature additions, or UI updates to the project, follow these automatic deployment steps upon completing and verifying the changes:

1. **Verify Code Accuracy**: Run typecheck (`ASTRO_TELEMETRY_DISABLED=1 npx tsc --noEmit`) and build (`ASTRO_TELEMETRY_DISABLED=1 npm run build`) to ensure there are no compilation errors.
2. **Stage & Commit**: Stage all modified and untracked files:
   ```bash
   git add .
   git commit -m "<descriptive commit message>"
   ```
3. **Push to Remote**: Push the commit to the `main` branch on GitHub:
   ```bash
   git push origin main
   ```
4. **Cloudflare Deployment**: Cloudflare Pages is configured with Git Integration and will automatically build and deploy the site upon receiving the push to `main`.
