import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const html = pathToFileURL("/workspace/.grok/og-card.html").href;
const chrome =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await chromium.launch({
  executablePath: chrome,
  args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(250);
await page.screenshot({
  path: "/workspace/.grok/card-raw.png",
  type: "png",
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log("wrote /workspace/.grok/card-raw.png");
