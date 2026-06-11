/**
 * One-shot OG image rasterizer. Reads `public/og-image.svg`, renders it
 * at 1200x630 via a headless Chromium, and writes `public/og-image.png`.
 *
 * Requires Playwright's chromium binary to be available. We import
 * `playwright` from the contract repo's `node_modules` to avoid adding a
 * new dependency to Pulse (CFO sub-freeze, weekly sync 2026-06-10).
 *
 * Run manually when the SVG source changes:
 *   node scripts/generate-og.mjs
 *
 * TODO: replace with final OG once Design Lead delivers (planned Wed of
 * the 2026-06-10 sprint).
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";

const here = dirname(new URL(import.meta.url).pathname);
const repoRoot = resolve(here, "..");
const svgPath = resolve(repoRoot, "public/og-image.svg");
const pngPath = resolve(repoRoot, "public/og-image.png");

const contractRepo = resolve(repoRoot, "../vedryx-contract-FE");
const contractPlaywright = resolve(contractRepo, "node_modules/playwright");

if (!existsSync(contractPlaywright)) {
  console.error(
    `[og] Could not find Playwright at ${contractPlaywright}. ` +
      `Either install Playwright in the contract repo or wire one in here.`,
  );
  process.exit(1);
}

const requireFromContract = createRequire(resolve(contractPlaywright, "package.json"));
const { chromium } = requireFromContract("playwright");

const svg = await readFile(svgPath, "utf8");
const html = `<!doctype html><html><head><style>
  html,body { margin:0; padding:0; background:#05060c; }
  svg { display:block; width:1200px; height:630px; }
</style></head><body>${svg}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
const buf = await page.locator("svg").screenshot({ type: "png", omitBackground: false });
await writeFile(pngPath, buf);
await browser.close();
console.log("[og] wrote", pngPath, `(${buf.length} bytes)`);
