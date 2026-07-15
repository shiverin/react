export const profile = {
  name: "Zhao Shizhen",
  firstName: "Shizhen",
  initials: "ZS",
  location: "Singapore",
  phone: "+65 9785 5304",
  phoneDisplay: "9785 5304",
  email: "zhaoshizhen04@gmail.com",
  github: "https://github.com/shiverin",
  linkedin: "https://www.linkedin.com/in/zhaoshizhen2004/",
  resume: `${process.env.PUBLIC_URL}/zhaoshizhen_resume.pdf`,
  role: "Computer Scientist & Systems Builder",
  disciplines: ["Computer Science", "Quantitative Finance", "AI / Data Systems"],
  introduction:
    "I build data-driven products, intelligent systems and backend software — then make them useful in the real world.",
  longIntroduction:
    "I am a Computer Science student at the National University of Singapore, double majoring in Quantitative Finance. My work moves across commodity data, agentic AI, quantitative research, product delivery and backend systems.",
  current: "Forward Deployed Engineer Intern at Kpler",
  availability: "Based in Singapore · Open to ambitious technical collaborations",
};

export const homeCards = [
  {
    eyebrow: "About me",
    copy: "Curious about the point where data, systems, markets and people meet.",
    action: "More about me",
    href: "/about",
    className: "home-gateway--about",
  },
  {
    eyebrow: "Work",
    copy: "Selected builds in quant research, real-time software and machine learning.",
    action: "View work",
    href: "/work",
    className: "home-gateway--work",
  },
  {
    eyebrow: "Experience",
    copy: "Kpler, Source Academy and Shopee — the path, lessons and outcomes so far.",
    action: "Read timeline",
    href: "/experience",
    className: "home-gateway--experience",
  },
];

export const stats = [
  { value: "4.85", suffix: "/5.0", label: "NUS GPA" },
  { value: "Top 2", suffix: "", label: "Project Showcase 2026" },
  { value: "90%", suffix: "", label: "Workflow time reduced" },
  { value: "98.97%", suffix: "", label: "CNN test accuracy" },
];

export const education = {
  institution: "National University of Singapore",
  location: "Singapore",
  degree: "Bachelor's Degree in Computer Science",
  secondMajor: "Double Major in Quantitative Finance",
  duration: "2025 — 2029",
  gpa: "4.85 / 5.0",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Discrete Structures",
    "Linear Algebra",
    "Calculus II",
  ],
};

export const achievements = [
  {
    code: "01",
    title: "Dean's List",
    detail: "AY25/26 Semester 2",
  },
  {
    code: "02",
    title: "University Project Showcase",
    detail: "2026 Top 2 Winner",
  },
  {
    code: "03",
    title: "BrainHack by DSTA",
    detail: "2025 Finalist · Top 4",
  },
];

export const certifications = [
  {
    title: "Meta Back-End Developer",
    issuer: "Meta",
    issued: "Aug 2025",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/0YKEF8EQABUP",
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    issuer: "CS50",
    issued: "Jul 2025",
    href: "https://cs50.harvard.edu/certificates/42c9aa25-f8d6-4a9c-b55d-06d851a93a95",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    issued: "Apr 2025",
    href: "https://coursera.org/share/6332d9ea3579946f8f22b6d3f386afae",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    issued: "Apr 2025",
    href: "https://coursera.org/verify/professional-cert/BUBR0COUPDDO",
  },
  {
    title: "CS50's Introduction to Computer Science",
    issuer: "CS50",
    issued: "Apr 2025",
    href: "https://certificates.cs50.io/88c5cb40-8d8f-465e-a9c8-b61c4c8c9d9c.png?size=letter",
  },
  {
    title: "ABRSM Grade 8 Violin — Distinction",
    issuer: "ABRSM",
    issued: "Apr 2021",
    href: "https://portal.abrsm.org/en-GB/validate?certificateNumber=0002205481&contactId=006YG278",
  },
];

export const experiences = [
  {
    company: "Kpler",
    monogram: "K",
    role: "Forward Deployed Engineer Intern",
    team: "Commodities",
    period: "May 2026 — Present",
    location: "Singapore",
    intro:
      "Turning commodity and maritime data into client-ready technical solutions.",
    bullets: [
      "Designed data solutions over commodity and maritime datasets, translating client needs into concrete technical deliverables.",
      "Built Python and SQL backend tools for historical extractions, data processing and delivery.",
      "Partnered with Product and Sales across the end-to-end sales cycle, owning technical scoping and customised demos.",
    ],
    tags: ["Python", "SQL", "Commodity Data", "Technical Scoping", "Client Delivery"],
  },
  {
    company: "Source Academy",
    monogram: "SA",
    role: "DevOps ML Engineer",
    team: "Internal Learning Platform",
    period: "Jan 2026 — May 2026",
    location: "Singapore",
    intro:
      "Built a retrieval-grounded learning assistant for course-specific programming knowledge.",
    bullets: [
      "Built an LLM chatbot with an internal knowledge base and Retrieval-Augmented Generation techniques.",
      "Deployed models on AWS Lambda and Docker for scalable inference.",
      "Improved inference speed and accuracy by more than 50% through efficient chunking methods.",
    ],
    tags: ["LLMs", "RAG", "AWS Lambda", "Docker", "Python"],
  },
  {
    company: "Shopee",
    monogram: "S",
    role: "Product Manager Intern",
    team: "Internal HR Systems",
    period: "Sep 2025 — Dec 2025",
    location: "Singapore",
    intro:
      "Designed agentic workflows connecting language models to real internal systems.",
    bullets: [
      "Designed agentic AI workflows using prompt engineering and tool integration to streamline HR processes.",
      "Integrated LLMs with APIs, databases and internal systems, reducing processing time by 90%.",
      "Coordinated delivery pipelines while balancing user needs and engineering bandwidth.",
    ],
    tags: ["Product Management", "Agentic AI", "APIs", "Prompt Engineering"],
  },
];

export const projects = [
  {
    slug: "trippi-ai",
    code: "01",
    title: "Trippi.ai",
    subtitle: "AI Trip Planner & Collaborative Travel Workspace",
    category: "Full-stack · AI",
    year: "2026",
    visual: "trippi",
    github: "https://github.com/shiverin/Trippi.ai",
    filters: ["full-stack", "ai-agents"],
    oneLiner:
      "One shared workspace for collaborative itineraries, maps, budgets, reservations, journals and OAuth-secured AI automation.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Real-time sync", "OAuth 2.1", "MCP", "PWA"],
  },
  {
    slug: "o-alpha",
    code: "02",
    title: "O(Alpha)",
    subtitle: "Paper-Trading & Portfolio Agent Platform",
    category: "Full-stack · Quant",
    year: "2026",
    visual: "oalpha",
    github: "https://github.com/shiverin/O-Alpha",
    filters: ["full-stack", "quant-systems"],
    oneLiner:
      "A Go and Next.js platform that runs approved strategies through persisted paper fills, positions, snapshots and alerts.",
    tech: ["Go", "Gin", "Next.js", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "Docker"],
  },
  {
    slug: "applypilot",
    code: "03",
    title: "ApplyPilot",
    subtitle: "Guardrailed Job-Application Agent",
    category: "Full-stack · AI",
    year: "2026",
    visual: "applypilot",
    github: "https://github.com/shiverin/applypilot",
    filters: ["full-stack", "ai-agents"],
    oneLiner:
      "A fail-closed application agent that discovers roles, ranks them against evidence and pauses before unknown or consequential decisions.",
    tech: ["TypeScript", "Next.js", "Python", "Oracle", "Temporal", "Playwright", "Chrome Extension"],
  },
  {
    slug: "signal",
    code: "04",
    title: "SIGNAL",
    subtitle: "Cultural Forecasting Game",
    category: "Full-stack · Product",
    year: "2026",
    visual: "signal",
    github: "https://github.com/shiverin/SIGNAL",
    filters: ["full-stack"],
    oneLiner:
      "A points-only forecasting product where people make immutable calls before consensus and build public, evidence-backed track records.",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Oracle", "PWA"],
  },
  {
    slug: "brainrot-idle-defense",
    code: "05",
    title: "Brainrot Idle Defense",
    subtitle: "Roblox Idle Defense Experience",
    category: "Game dev · Roblox",
    year: "2026",
    visual: "brainrot",
    github: "https://github.com/shiverin/BrainrotIdleDefense",
    filters: ["game-dev"],
    oneLiner:
      "A Roblox/Luau idle-defense project with authored lobbies, battle maps, live Rojo workflows and production-minded asset tooling.",
    tech: ["Luau", "Roblox Studio", "Rojo", "Python", "Game Systems"],
  },
  {
    slug: "bloxlands",
    code: "06",
    title: "BloxLands",
    subtitle: "Roblox Social Sandbox",
    category: "Game dev · Roblox",
    year: "2026",
    visual: "bloxlands",
    github: "https://github.com/shiverin/BloxLands",
    filters: ["game-dev"],
    oneLiner:
      "A cube-world social sandbox with named-world travel, tiered ownership locks, mining, planting, harvesting and persistent inventories.",
    tech: ["Luau", "Roblox Studio", "Rojo", "DataStore", "TestEZ", "Procedural Worlds"],
  },
  {
    slug: "lane-clash",
    code: "07",
    title: "Lane Clash",
    subtitle: "Deterministic Browser Tower Battler",
    category: "Game dev · Full-stack",
    year: "2026",
    visual: "laneclash",
    github: "https://github.com/shiverin/lane-clash",
    filters: ["full-stack", "game-dev"],
    oneLiner:
      "A card-driven two-lane battler with deterministic simulation, Canvas rendering, bots, deck building and WebSocket PvP.",
    tech: ["React", "TypeScript", "Canvas 2D", "Colyseus", "WebSockets", "Vitest"],
  },
  {
    slug: "kpler-api-expert",
    code: "NDA",
    title: "Kpler API Expert",
    subtitle: "Guardrailed Commodity API Agent",
    category: "AI & agents · Confidential",
    year: "2026",
    visual: "kpler",
    filters: ["ai-agents"],
    oneLiner:
      "A guardrailed agent workflow that routes analyst questions to validated commodity-data endpoints, executes bounded direct API queries and returns analysis-ready tables.",
    tech: ["Python", "API Safety", "Endpoint Routing", "Evaluation", "Commodity Data"],
  },
];

export const hackathon = {
  title: "BrainHack by DSTA",
  result: "Finalist · Top 4",
  period: "June 2025",
  description:
    "A multi-domain AI sprint spanning speech, computer vision, OCR and reinforcement learning.",
  modules: [
    { label: "Speech", metric: "0.98% WER", detail: "Fine-tuned Whisper on 4,500 audio samples." },
    { label: "Vision", metric: "67% accuracy", detail: "Trained YOLOv8 on 10,000 labelled military-vehicle images." },
    { label: "OCR", metric: "99% character accuracy", detail: "Built a ResNet18 + CRNN model on 6,000 scanned text samples." },
    { label: "Multi-agent RL", metric: "Custom DQN", detail: "Implemented a single-policy multi-agent DQN in PettingZoo." },
  ],
};

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "Go", "TypeScript", "JavaScript", "Java", "C", "R"] },
  { title: "Backend & APIs", items: ["REST APIs", "Gin", "FastAPI", "Django", "Flask", "WebSockets", "PostgreSQL", "TimescaleDB", "Redis"] },
  { title: "Data & Analytics", items: ["Snowflake", "AWS Athena", "ETL Workflows", "Pandas", "Scikit-learn", "Tableau", "R Studio"] },
  { title: "AI & ML", items: ["LLMs", "RAG", "TensorFlow", "PyTorch", "YOLOv8", "Whisper"] },
  { title: "Cloud & Tools", items: ["AWS Lambda", "Docker", "Docker Compose", "Git", "Postman", "Render", "Supabase"] },
];

export const interests = [
  "Classical musician — piano & violin",
  "Orchestral performance",
  "Leetcode",
  "Watch collecting",
  "Chinese chess",
];

export const principles = [
  {
    number: "01",
    title: "Make the system legible",
    copy: "The best technical work can be explained, inspected and operated — not merely demoed.",
  },
  {
    number: "02",
    title: "Stay close to reality",
    copy: "I like feedback loops with users, data and constraints. They turn clever ideas into useful products.",
  },
  {
    number: "03",
    title: "Cross the boundary",
    copy: "Engineering, product and research are stronger when they inform one another instead of living in silos.",
  },
];

export const routeMeta = {
  home: {
    title: "Zhao Shizhen — Systems, intelligence & products",
    description: profile.introduction,
  },
  about: {
    title: "About — Zhao Shizhen",
    description: "Education, principles, skills and the person behind the systems.",
  },
  work: {
    title: "Selected Work — Zhao Shizhen",
    description: "Quant systems, full-stack products and machine-learning experiments.",
  },
  experience: {
    title: "Experience — Zhao Shizhen",
    description: "Experience across Kpler, Source Academy and Shopee.",
  },
  resume: {
    title: "Resume — Zhao Shizhen",
    description: "Current resume, education, experience and technical skills.",
  },
  contact: {
    title: "Contact — Zhao Shizhen",
    description: "Get in touch for technical, product and research collaborations.",
  },
  notFound: {
    title: "Page not found — Zhao Shizhen",
    description: "The requested page could not be found.",
  },
};
