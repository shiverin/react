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
    slug: "o-alpha",
    code: "01",
    title: "O(Alpha)",
    subtitle: "Quant Research & Agentic Trading Platform",
    category: "Quant Systems",
    year: "2026",
    featured: true,
    visual: "oalpha",
    github: "https://github.com/shiverin/O-Alpha",
    oneLiner:
      "A paper-trading platform that turns approved portfolio strategies into observable, database-backed execution loops.",
    description:
      "O(Alpha) combines a Go trading backend, a Next.js dashboard, PostgreSQL / TimescaleDB storage, Redis and containerised workflows for portfolio research and paper execution.",
    challenge:
      "Quant research often lives far away from the operational systems needed to inspect and safely run a strategy. The project needed one coherent path from approved strategy to persisted portfolio state.",
    response:
      "Built a full-stack platform around a paper-only portfolio agent, with deterministic fills, positions, snapshots, alerts and dashboard state read from backend APIs.",
    impact: [
      "Implemented validation and paper-trading loops with walk-forward testing and cost stress checks.",
      "Persisted fills, positions, portfolio snapshots, alerts and regime labels for an auditable workflow.",
      "Separated the Next.js interface, Go API, strategy domain, PostgreSQL layer and Redis orchestration.",
    ],
    contributions: [
      "Backend and system architecture",
      "Portfolio-agent workflow",
      "Data model and execution state",
      "Dashboard integration",
      "Containerised developer experience",
    ],
    tech: ["Go", "Gin", "Next.js", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "Docker"],
  },
  {
    slug: "messenger",
    code: "02",
    title: "Messenger",
    subtitle: "Real-Time Full-Stack Messaging App",
    category: "Full Stack",
    year: "2025",
    featured: true,
    visual: "messenger",
    github: "https://github.com/shiverin/messenger",
    oneLiner:
      "A private chat product built around persistent WebSocket connections and a custom SPA-style interface.",
    description:
      "A full-stack messaging application using Django Channels, WebSockets, secure authentication, persistent storage and a custom single-page-style interface.",
    challenge:
      "Messaging feels simple until connection state, authentication, unread state, persistence and responsive interaction all have to remain coherent at once.",
    response:
      "Designed a custom interface and connected it to Django Channels so conversations update in real time while remaining backed by a relational data model.",
    impact: [
      "Delivered real-time private messaging over WebSockets.",
      "Implemented secure authentication, chat persistence and user profile flows.",
      "Built read states, archiving and responsive conversation views.",
    ],
    contributions: ["Full-stack architecture", "WebSocket event flow", "Authentication", "Database modelling", "Interface design"],
    tech: ["Python", "Django", "Django Channels", "WebSockets", "PostgreSQL", "JavaScript"],
  },
  {
    slug: "traffic-sign-cnn",
    code: "03",
    title: "Traffic Sign CNN",
    subtitle: "GTSRB Image Classification",
    category: "Machine Learning",
    year: "2025",
    featured: true,
    visual: "cnn",
    github: "https://github.com/shiverin/CNNTraffic",
    oneLiner:
      "A systematic CNN architecture study reaching 98.97% test accuracy on German traffic signs.",
    description:
      "A TensorFlow computer-vision project comparing multiple convolutional architectures on the German Traffic Sign Recognition Benchmark.",
    challenge:
      "The goal was not only to obtain a strong score, but to understand how depth, pooling, dense capacity and dropout changed accuracy and generalisation.",
    response:
      "Trained and evaluated six architectures, progressively increasing convolutional depth and tuning dropout while keeping the experiment setup consistent.",
    impact: [
      "Reached 98.97% test accuracy with a three-stage convolution and pooling architecture.",
      "Compared six model variants using test loss, accuracy and inference time.",
      "Documented the effect of depth and over-regularisation on performance.",
    ],
    contributions: ["Model design", "Experiment framework", "Training and evaluation", "Architecture comparison", "Technical documentation"],
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision", "GTSRB"],
  },
  {
    slug: "gotalk",
    code: "04",
    title: "GoTalk",
    subtitle: "Community Forum Platform",
    category: "Full Stack",
    year: "2025",
    featured: false,
    visual: "gotalk",
    github: "https://github.com/shiverin/GoTalk",
    oneLiner:
      "A Reddit-inspired forum for communities, posts, threaded discussion, voting and discovery.",
    description:
      "A full-stack forum that lets users create communities, publish posts, join discussions and browse trending content.",
    challenge:
      "Community products need a data model supporting identity, membership, content and nested interaction without making navigation feel heavy.",
    response:
      "Built a React interface backed by a Go REST API and SQLite, with modular flows for authentication, communities, posts, comments, voting and discovery.",
    impact: [
      "Created community and discussion workflows.",
      "Implemented a React and Go architecture with JWT authentication.",
      "Added content discovery and responsive navigation.",
    ],
    contributions: ["Frontend", "Go API", "SQLite schema", "Authentication", "Product flows"],
    tech: ["React", "Go", "Chi", "SQLite", "JWT", "Tailwind CSS"],
  },
  {
    slug: "offline-leetcode",
    code: "05",
    title: "OfflineLeetcode",
    subtitle: "Desktop Coding Practice",
    category: "Desktop",
    year: "2025",
    featured: false,
    visual: "offline",
    github: "https://github.com/shiverin/OfflineLeetcode",
    oneLiner:
      "A distraction-free desktop app for practising coding problems without an internet connection.",
    description:
      "A local environment for offline algorithm practice, designed around portability and focused problem solving.",
    challenge:
      "Most coding-practice tools assume constant connectivity and a browser-first workflow.",
    response:
      "Connected a React and Tailwind interface to a local FastAPI judging service, then packaged the workflow in Electron.",
    impact: [
      "Enabled offline practice.",
      "Created a desktop-first coding interface with a local code runner.",
      "Reduced dependency on browser tabs and network access.",
    ],
    contributions: ["Electron shell", "React UI", "FastAPI service", "Local judging workflow"],
    tech: ["React", "Electron", "FastAPI", "Python", "Tailwind CSS"],
  },
  {
    slug: "pdfiledit",
    code: "06",
    title: "PDFiledit",
    subtitle: "Browser PDF Utility",
    category: "Web Utility",
    year: "2024",
    featured: false,
    visual: "pdf",
    github: "https://github.com/shiverin/PDFILEdit",
    oneLiner:
      "A Flask application for editing, signing, merging and converting PDF documents.",
    description:
      "A browser-based PDF workflow with session-aware file management and common document operations.",
    challenge:
      "Document tools are often fragmented across separate products and require uploading the same files repeatedly.",
    response:
      "Combined editing, signing, merging and conversion into one Flask-based workflow.",
    impact: ["Unified common PDF operations.", "Implemented session-based file handling.", "Created a simple browser interface around document processing."],
    contributions: ["Flask backend", "File processing", "Browser UI"],
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "finance-simulator",
    code: "07",
    title: "Finance Simulator",
    subtitle: "Portfolio & Trading App",
    category: "Finance",
    year: "2024",
    featured: false,
    visual: "finance",
    github: "https://github.com/shiverin/finance",
    oneLiner:
      "A Flask and PostgreSQL application for quotes, portfolio tracking and simulated buy / sell flows.",
    description:
      "A finance web application centred on stock lookup, position management and transaction-backed portfolio state.",
    challenge:
      "A trading simulator needs consistent cash, position and transaction accounting across every action.",
    response:
      "Built a server-rendered Flask product with PostgreSQL-backed portfolio and trade records.",
    impact: ["Implemented quote lookup and simulated trading.", "Maintained portfolio state in PostgreSQL.", "Created buy, sell and position views."],
    contributions: ["Flask backend", "Portfolio model", "Database flows"],
    tech: ["Python", "Flask", "PostgreSQL", "HTML", "CSS"],
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
