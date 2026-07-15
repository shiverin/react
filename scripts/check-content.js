const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "src/App.jsx",
  "src/index.js",
  "src/data/portfolio.js",
  "src/pages/HomePage.jsx",
  "src/pages/AboutPage.jsx",
  "src/pages/WorkPage.jsx",
  "src/pages/ProjectPage.jsx",
  "src/pages/ExperiencePage.jsx",
  "src/pages/ResumePage.jsx",
  "src/pages/ContactPage.jsx",
  "src/styles/index.css",
  "src/styles/field-notes.css",
  "src/assets/portrait.webp",
  "public/zhaoshizhen_resume.pdf",
  "docs/design-reference/field-notes-approved.png",
  "CONTENT_AUDIT.md",
  "DESIGN_SPEC.md",
  "ROUTE_COMPONENT_MAP.md",
];

const requiredText = [
  "Zhao Shizhen",
  "Kpler",
  "Source Academy",
  "Shopee",
  "O(Alpha)",
  "Messenger",
  "Traffic Sign CNN",
  "4.85 / 5.0",
  "zhaoshizhen04@gmail.com",
  "zhaoshizhen2004",
  "Meta Front-End Developer",
  "Field Notes",
];

const forbiddenText = [
  "Alex Carter",
  "Lorem ipsum",
  "TODO:",
  "your@email.com",
  "example.com/your",
];

const failures = [];
for (const relative of requiredFiles) {
  const absolute = path.join(root, relative);
  if (!fs.existsSync(absolute)) failures.push(`Missing required file: ${relative}`);
}

const sourceFiles = [];
function collect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(absolute);
    else if (/\.(js|jsx|css|html|md|json)$/.test(entry.name)) sourceFiles.push(absolute);
  }
}
collect(path.join(root, "src"));
sourceFiles.push(path.join(root, "public", "index.html"));
sourceFiles.push(path.join(root, "README.md"));

const corpus = sourceFiles.filter(fs.existsSync).map((file) => fs.readFileSync(file, "utf8")).join("\n");
for (const text of requiredText) {
  if (!corpus.includes(text)) failures.push(`Required content not found: ${text}`);
}
for (const text of forbiddenText) {
  if (corpus.includes(text)) failures.push(`Placeholder content found: ${text}`);
}

const dataFile = fs.readFileSync(path.join(root, "src", "data", "portfolio.js"), "utf8");
const slugs = [...dataFile.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
if (slugs.length !== 7) failures.push(`Expected 7 project slugs, found ${slugs.length}`);
if (new Set(slugs).size !== slugs.length) failures.push("Duplicate project slug detected");

const railFile = fs.readFileSync(path.join(root, "src", "components", "NotebookRail.jsx"), "utf8");
const railPages = [...railFile.matchAll(/number:\s*"\d+"/g)];
if (railPages.length !== 6) failures.push(`Expected 6 notebook rail pages, found ${railPages.length}`);

const resumeSize = fs.existsSync(path.join(root, "public", "zhaoshizhen_resume.pdf"))
  ? fs.statSync(path.join(root, "public", "zhaoshizhen_resume.pdf")).size
  : 0;
if (resumeSize < 10000) failures.push("Resume PDF appears to be empty or invalid");

if (failures.length) {
  console.error("Portfolio checks failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Portfolio checks passed: ${requiredFiles.length} core files, ${slugs.length} projects, ${(resumeSize / 1024).toFixed(1)} KB resume.`);
