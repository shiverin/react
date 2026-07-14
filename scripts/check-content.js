const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const required = [
  "src/App.js",
  "src/index.css",
  "src/data/portfolioData.js",
  "src/pages/HomePage.js",
  "src/pages/WorkPage.js",
  "src/pages/ExperiencePage.js",
  "src/pages/AboutPage.js",
  "src/pages/ContactPage.js",
  "src/pages/ResumePage.js",
  "src/assets/myself.jpg",
  "public/index.html",
  "public/social-card.png",
  "public/zhaoshizhen_resume.pdf",
  ".github/workflows/deploy-pages.yml",
];

const failures = [];

for (const relativePath of required) {
  if (!fs.existsSync(path.join(root, relativePath))) {
    failures.push(`Missing required file: ${relativePath}`);
  }
}

const dataPath = path.join(root, "src/data/portfolioData.js");
const data = fs.readFileSync(dataPath, "utf8");
const app = fs.readFileSync(path.join(root, "src/App.js"), "utf8");
const css = fs.readFileSync(path.join(root, "src/index.css"), "utf8");

const requiredFacts = [
  "Zhao Shizhen",
  "Kpler",
  "Source Academy",
  "Shopee",
  "4.85 / 5.0",
  "O(Alpha)",
  "Messenger",
  "Traffic Sign CNN",
  "BrainHack by DSTA",
  "https://www.linkedin.com/in/zhaoshizhen2004/",
  "./zhaoshizhen_resume.pdf",
];

for (const fact of requiredFacts) {
  if (!data.includes(fact)) failures.push(`Missing expected portfolio fact: ${fact}`);
}

const slugs = [...data.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicateSlugs.length) failures.push(`Duplicate project slugs: ${[...new Set(duplicateSlugs)].join(", ")}`);

const stalePhrases = ["semi-finalist", "year 1 student", "2023 - present"];
for (const phrase of stalePhrases) {
  if (data.toLowerCase().includes(phrase)) failures.push(`Stale phrase found: ${phrase}`);
}

if (!app.includes("useHashRoute")) failures.push("Hash router is not wired into App.js");
if (!css.includes("prefers-reduced-motion")) failures.push("Reduced-motion CSS is missing");
if (!css.includes("@media print")) failures.push("Resume print styles are missing");

if (failures.length) {
  console.error("Portfolio content check failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Portfolio content check passed (${slugs.length} project routes).`);
