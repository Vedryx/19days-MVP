# Lighthouse history

Weekly Lighthouse runs (mobile + desktop) against `https://pulse.vedryxtech.com/`.
Committed automatically by `.github/workflows/lighthouse-cron.yml`.

- `mobile/` — `lhci preset: mobile`
- `desktop/` — `lhci preset: desktop`

Each file is the median run of 3 (per Lighthouse CI convention).
File naming: `YYYY-MM-DDTHH-MM-SSZ.json` (UTC).

See `agentic-company/workspace/playbooks/lighthouse-cron.md` for the full setup + how to read the results.

Note: Pulse is currently CSR-only — SEO category will read low until SSR ships. This is expected; the trend over time is what matters.
