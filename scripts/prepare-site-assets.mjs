import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const appSource =
  process.env.RYNTRA_APP_SOURCE ??
  path.resolve(root, "..", "..", "rinthy");
const screenshotDir = path.join(root, "public", "screenshots");
await mkdir(screenshotDir, { recursive: true });

const screenshotJobs = [
  ["developer-panel.png", "hero-mobile.webp"],
  ["glass-theme.png", "android.webp"],
];

const pngScreenshotJobs = [
  ["developer-panel.png", "projects.png"],
  ["analytics.png", "analytics.png"],
  ["teams.png", "teams.png"],
];

await Promise.all([
  ...screenshotJobs.map(([source, target]) =>
    sharp(path.join(appSource, "docs", "screenshots", source))
      .resize({ width: 810, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(screenshotDir, target)),
  ),
  ...pngScreenshotJobs.map(([source, target]) =>
    sharp(path.join(appSource, "docs", "screenshots", source))
      .resize({ width: 810, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(path.join(screenshotDir, target)),
  ),
]);

function placeholderSvg(label, note) {
  return Buffer.from(`
    <svg width="810" height="1800" viewBox="0 0 810 1800" xmlns="http://www.w3.org/2000/svg">
      <rect width="810" height="1800" rx="48" fill="#0C0C0E"/>
      <rect x="2" y="2" width="806" height="1796" rx="46" fill="none" stroke="#2C2C2E" stroke-width="4"/>
      <path d="M0 1210L810 820V1800H0Z" fill="#111D15"/>
      <circle cx="405" cy="670" r="86" fill="#1C1C1E" stroke="#30D158" stroke-width="3"/>
      <path d="M368 671h74M405 634v74" stroke="#30D158" stroke-width="8" stroke-linecap="round"/>
      <text x="405" y="835" fill="#F5F5F7" font-family="-apple-system, Segoe UI, sans-serif" font-size="42" font-weight="700" text-anchor="middle">${label}</text>
      <text x="405" y="893" fill="#98989D" font-family="-apple-system, Segoe UI, sans-serif" font-size="24" text-anchor="middle">${note}</text>
      <text x="405" y="1640" fill="#30D158" font-family="-apple-system, Segoe UI, sans-serif" font-size="22" font-weight="700" text-anchor="middle" letter-spacing="4">RYNTRA · ASSET PLACEHOLDER</text>
    </svg>
  `);
}

await sharp(placeholderSvg("Notifications", "Official screenshot needed"))
  .png({ compressionLevel: 9 })
  .toFile(path.join(screenshotDir, "notifications.png"));

const logo = sharp(path.join(root, "public", "logo.png"));
await Promise.all([
  logo.clone().resize(192, 192).png().toFile(path.join(root, "public", "icon-192.png")),
  logo.clone().resize(512, 512).png().toFile(path.join(root, "public", "icon-512.png")),
  logo.clone().resize(180, 180).png().toFile(path.join(root, "public", "apple-touch-icon.png")),
]);

const ogBackground = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#000000"/>
    <path d="M0 630L1200 180V630Z" fill="#0C160F"/>
    <circle cx="1010" cy="95" r="360" fill="none" stroke="#30D158" stroke-opacity=".18" stroke-width="2"/>
    <text x="88" y="270" fill="#F5F5F7" font-family="-apple-system, Segoe UI, sans-serif" font-size="108" font-weight="800" letter-spacing="-6">Ryntra</text>
    <text x="92" y="350" fill="#98989D" font-family="-apple-system, Segoe UI, sans-serif" font-size="34">Your Modrinth workspace, wherever you are.</text>
    <text x="92" y="518" fill="#30D158" font-family="-apple-system, Segoe UI, sans-serif" font-size="24" font-weight="700" letter-spacing="3">ANDROID · IOS</text>
  </svg>
`);

await sharp(ogBackground)
  .composite([{ input: await logo.clone().resize(142, 142).png().toBuffer(), left: 958, top: 384 }])
  .png()
  .toFile(path.join(root, "public", "og-image.png"));
