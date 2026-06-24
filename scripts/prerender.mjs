import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { render } from "../dist-ssr/entry-server.js";
import { buildTypes, faqs, outcomes, phases, timeline, whyCards } from "../src/data/index.js";

/**
 * Mirrors `vedryx-contract-FE/scripts/prerender.mjs`. Takes the SSR-built
 * `entry-server.js`, renders the app shell to a string, and injects it into
 * the empty `<div id="root"></div>` of the client build's `index.html`.
 *
 * Pulse is a single-page landing, so we only prerender `/`. Add more routes
 * here when the site grows.
 */
const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const template = await readFile(indexPath, "utf8");
const appHtml = render("/");

if (!template.includes('<div id="root"></div>')) {
  throw new Error("Expected empty root element in built index.html");
}

await writeFile(
  indexPath,
  template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
);

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

const markdown = `# Vedryx Pulse

Turn a founder idea into a launched product in 19 days.

Vedryx Pulse acts as the entire technical department for non-technical and pre-CTO founders. The team plans, designs, builds, refines, and launches a focused first product in 19 days.

## Who Vedryx Pulse Is For

Founders who have a product idea but do not yet have an internal engineering team, CTO, or technical operating system.

## 19-Day Delivery Path

${timeline.map((item) => `- **${item.day} — ${item.title}:** ${item.detail}`).join("\n")}

## Build Phases

${list(phases.map((phase) => phase.label))}

## Why Founders Use Vedryx Pulse

${whyCards.map((card) => `### ${card.title}\n${card.text}`).join("\n\n")}

## Product Types

${outcomes
  .map((outcome) => {
    const points = outcome.points ? `\n${list(outcome.points)}` : "";
    return `### ${outcome.title}\n${outcome.text}${points}`;
  })
  .join("\n\n")}

## Build Type Options

${list(buildTypes)}

## FAQ

${faqs.map((item) => `### ${item.q}\n${item.a}`).join("\n\n")}

## Request A Launch Callback

Founders can request a callback through the site form. The WebMCP tool \`request_callback\` is also exposed in browsers that support \`navigator.modelContext.provideContext()\`.
`;

await writeFile(resolve(distDir, "index.md"), markdown);

console.log("[prerender] wrote SSR HTML to", indexPath);
