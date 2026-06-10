import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { render } from "../dist-ssr/entry-server.js";

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

console.log("[prerender] wrote SSR HTML to", indexPath);
