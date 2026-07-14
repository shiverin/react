export const profile = {
  name: "Zhao Shizhen",
  displayName: "Shizhen",
  initials: "ZS",
  location: "Singapore",
  phone: "+65 9785 5304",
  email: "zhaoshizhen04@gmail.com",
  github: "https://github.com/shiverin",
  linkedin: "https://www.linkedin.com/in/zhaoshizhen2004/",
  resumePdf: "./zhaoshizhen_resume.pdf",
  eyebrow: "NUS Computer Science x Quantitative Finance",
  headline: "I build intelligent systems that survive contact with reality.",
  shortBio:
    "Forward-deployed engineer and computer science student working across commodity data, agentic AI, backend systems, and client-facing technical delivery.",
  longBio:
    "I like problems that refuse to stay inside one discipline. My work moves between data products, AI systems, product judgment, and backend engineering - with a bias toward building tools that are useful outside the demo environment.",
  currentRole: "Forward Deployed Engineer Intern, Commodities",
  currentCompany: "Kpler",
  availability: "Based in Singapore - open to ambitious technical collaborations",
};

export const stats = [
  { value: "4.85", label: "GPA / 5.0" },
  { value: "90%", label: "workflow time reduced" },
  { value: "98.97%", label: "CNN test accuracy" },
  { value: "Top 4", label: "DSTA BrainHack" },
];

export const capabilities = [
  "AI and RAG",
  "Data solutions",
  "Backend systems",
  "Quant research",
  "Product delivery",
  "Full-stack engineering",
];

export const education = {
  institution: "National University of Singapore",
  degree: "Bachelor's Degree in Computer Science",
  secondMajor: "Double Major in Quantitative Finance",
  duration: "2025 - 2029",
  gpa: "4.85 / 5.0",
  coursework: [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Discrete Structures",
    "Linear Algebra",
    "Calculus II",
  ],
};

export const achievements = [
  {
    title: "Dean's List",
    context: "AY25/26 Semester 2",
    code: "DL",
  },
  {
    title: "University Project Showcase",
    context: "2026 Top 2 Winner",
    code: "02",
  },
  {
    title: "DSTA BrainHack",
    context: "2025 Finalist - Top 4",
    code: "04",
  },
];

export const experiences = [
  {
    company: "Kpler",
    role: "Forward Deployed Engineer Intern",
    department: "Commodities",
    duration: "May 2026 - Present",
    location: "Singapore",
    monogram: "KP",
    accent: "#7ff4d6",
    summary:
      "Turning commodity and maritime data into client-ready technical solutions.",
    highlights: [
      "Designed data solutions over commodity and maritime datasets, translating client needs into concrete technical deliverables.",
      "Built Python and SQL backend tools for historical extraction, data processing, and delivery.",
      "Partnered with Product and Sales across the end-to-end sales cycle, owning technical scoping and customized demos.",
    ],
    tags: ["Python", "SQL", "Commodity Data", "Technical Scoping", "Client Delivery"],
  },
  {
    company: "Source Academy",
    role: "DevOps ML Engineer",
    department: "Internal Learning Platform - NUS",
    duration: "Jan 2026 - May 2026",
    location: "Singapore",
    monogram: "SA",
    accent: "#b69cff",
    summary:
      "Built a retrieval-grounded learning assistant for course-specific programming knowledge.",
    highlights: [
      "Built an LLM chatbot with an internal knowledge base and Retrieval-Augmented Generation techniques.",
      "Deployed models on AWS Lambda and Docker for scalable inference.",
      "Improved inference speed and accuracy by more than 50% through efficient chunking methods.",
    ],
    tags: ["LLMs", "RAG", "AWS Lambda", "Docker", "Python"],
  },
  {
    company: "Shopee",
    role: "Product Manager Intern",
    department: "Internal HR Systems",
    duration: "Sep 2025 - Dec 2025",
    location: "Singapore",
    monogram: "SP",
    accent: "#ff9a82",
    summary:
      "Designed agentic workflows that connected language models to real internal systems.",
    highlights: [
      "Designed agentic AI workflows using prompt engineering and tool integration to streamline HR processes.",
      "Integrated LLMs with APIs, databases, and internal systems, reducing processing time by 90%.",
      "Coordinated with the development team to schedule requests within delivery pipelines while balancing user needs and engineering bandwidth.",
    ],
    tags: ["Product Management", "Agentic AI", "APIs", "Prompt Engineering"],
  },
];

export const projects = [
  {
    slug: "o-alpha",
    title: "O(Alpha)",
    subtitle: "Quant Research and Agentic Trading Platform",
    oneLiner:
      "A paper-trading platform that turns approved portfolio strategies into observable, database-backed execution loops.",
    description:
      "O(Alpha) combines a Go trading backend, a Next.js dashboard, TimescaleDB-compatible storage, Redis, and containerized workflows for portfolio research and paper execution.",
    challenge:
      "Quant research often lives far away from the operational systems needed to test, inspect, and safely run a strategy. The project needed one coherent path from catalog strategy to persisted portfolio state.",
    response:
      "Built a full-stack platform around a paper-only portfolio agent, with deterministic fills, positions, snapshots, alerts, strategy catalog flows, and dashboard state read from backend APIs.",
    impact: [
      "Implemented validation and paper-trading loops with walk-forward testing and cost stress checks.",
      "Persisted fills, positions, portfolio snapshots, alerts, and regime labels for an auditable workflow.",
      "Separated the Next.js interface, Go API, strategy domain, PostgreSQL data layer, and Redis orchestration.",
    ],
    contributions: [
      "Backend and system architecture",
      "Portfolio-agent workflow",
      "Data model and execution state",
      "Dashboard integration",
      "Containerized developer experience",
    ],
    tech: [
      "Go",
      "Gin",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/shiverin/O-Alpha",
    featured: true,
    code: "01",
    visual: "oalpha",
    year: "2026",
    category: "Quant Systems",
  },
  {
    slug: "messenger",
    title: "Messenger",
    subtitle: "Real-Time Full-Stack Messaging App",
    oneLiner:
      "A private chat product built around persistent WebSocket connections and a custom SPA-style interface.",
    description:
      "A full-stack messaging application using Django Channels, WebSockets, secure authentication, persistent storage, and a custom single-page-style interface.",
    challenge:
      "Messaging feels simple until connection state, authentication, unread state, persistence, and responsive interaction all have to stay coherent at the same time.",
    response:
      "Designed a custom single-page interface and connected it to Django Channels so conversations update in real time while remaining backed by a relational data model.",
    impact: [
      "Delivered real-time private messaging over WebSockets.",
      "Implemented secure authentication, chat persistence, and user profile flows.",
      "Built interaction details including read state, archiving, and responsive conversation views.",
    ],
    contributions: [
      "Full-stack architecture",
      "WebSocket event flow",
      "Authentication",
      "Database modeling",
      "Custom interface design",
    ],
    tech: ["Python", "Django", "Django Channels", "WebSockets", "PostgreSQL", "JavaScript"],
    github: "https://github.com/shiverin/messenger",
    featured: true,
    code: "02",
    visual: "messenger",
    year: "2025",
    category: "Full Stack",
  },
  {
    slug: "traffic-sign-cnn",
    title: "Traffic Sign CNN",
    subtitle: "GTSRB Image Classification",
    oneLiner:
      "A systematic CNN architecture study that reached 98.97% test accuracy on German traffic signs.",
    description:
      "A TensorFlow computer-vision project comparing multiple convolutional architectures on the German Traffic Sign Recognition Benchmark.",
    challenge:
      "The goal was not only to obtain a strong score, but to understand how depth, pooling, dense capacity, and dropout changed accuracy and generalization.",
    response:
      "Trained and evaluated six architectures, progressively increasing convolutional depth and tuning dropout while keeping the experiment setup consistent.",
    impact: [
      "Reached 98.97% test accuracy with a three-stage convolution and pooling architecture.",
      "Compared six model variants using test loss, accuracy, and inference time.",
      "Documented the effect of depth and over-regularization on performance.",
    ],
    contributions: [
      "Model design",
      "Experiment framework",
      "Training and evaluation",
      "Architecture comparison",
      "Technical documentation",
    ],
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision", "GTSRB"],
    github: "https://github.com/shiverin/CNNTraffic",
    featured: true,
    code: "03",
    visual: "cnn",
    year: "2025",
    category: "Machine Learning",
  },
  {
    slug: "gotalk",
    title: "GoTalk",
    subtitle: "Community Forum Platform",
    oneLiner:
      "A Reddit-inspired forum for communities, posts, threaded discussion, voting, and content discovery.",
    description:
      "A full-stack forum that lets users create communities, publish posts, join discussions, and browse trending content.",
    challenge:
      "Community products need a data model that supports identity, membership, content, and nested interaction without making navigation feel heavy.",
    response:
      "Built a React interface backed by a Go REST API and SQLite, with modular flows for authentication, communities, posts, comments, voting, and discovery.",
    impact: [
      "Created community and discussion workflows.",
      "Implemented a React and Go full-stack architecture with JWT authentication.",
      "Added content discovery and responsive navigation.",
    ],
    contributions: ["Frontend", "Go API", "SQLite schema", "Authentication and product flows"],
    tech: ["React", "Go", "Chi", "SQLite", "JWT", "Tailwind CSS"],
    github: "https://github.com/shiverin/GoTalk",
    featured: false,
    code: "04",
    visual: "gotalk",
    year: "2025",
    category: "Full Stack",
  },
  {
    slug: "offline-leetcode",
    title: "OfflineLeetcode",
    subtitle: "Desktop Coding Practice",
    oneLiner:
      "A distraction-free Electron app for practicing coding problems without an internet connection.",
    description:
      "A desktop environment for offline algorithm practice, designed around portability and focused problem solving.",
    challenge:
      "Most coding-practice tools assume constant connectivity and a browser-first workflow.",
    response:
      "Connected a React and Tailwind interface to a local FastAPI judging service, then packaged the workflow in Electron for desktop use.",
    impact: [
      "Enabled offline practice.",
      "Created a desktop-first coding interface with a local code runner.",
      "Reduced dependency on browser tabs and network access.",
    ],
    contributions: ["Electron shell", "React UI", "FastAPI service", "Local judging workflow"],
    tech: ["React", "Electron", "FastAPI", "Python", "Tailwind CSS"],
    github: "https://github.com/shiverin/OfflineLeetcode",
    featured: false,
    code: "05",
    visual: "offline",
    year: "2025",
    category: "Desktop",
  },
  {
    slug: "pdfiledit",
    title: "PDFiledit",
    subtitle: "Browser PDF Utility",
    oneLiner:
      "A Flask application for editing, signing, merging, and converting PDF documents.",
    description:
      "A browser-based PDF workflow with session-aware file management and common document operations.",
    challenge:
      "Document tools are often fragmented across separate products and require uploading the same files repeatedly.",
    response:
      "Combined editing, signing, merging, and conversion into one Flask-based workflow.",
    impact: [
      "Unified common PDF operations.",
      "Implemented session-based file handling.",
      "Created a simple browser interface around document processing.",
    ],
    contributions: ["Flask backend", "File processing", "Browser UI"],
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/shiverin/PDFILEdit",
    featured: false,
    code: "06",
    visual: "pdf",
    year: "2024",
    category: "Web Utility",
  },
  {
    slug: "finance-simulator",
    title: "Finance Simulator",
    subtitle: "Portfolio and Trading App",
    oneLiner:
      "A Flask and PostgreSQL application for quotes, portfolio tracking, and simulated buy/sell flows.",
    description:
      "A finance web application centered on stock lookup, position management, and transaction-backed portfolio state.",
    challenge:
      "A trading simulator needs consistent cash, position, and transaction accounting across every action.",
    response:
      "Built a server-rendered Flask product with PostgreSQL-backed portfolio and trade records.",
    impact: [
      "Implemented quote lookup and simulated trading.",
      "Maintained portfolio state in PostgreSQL.",
      "Created buy, sell, and position views.",
    ],
    contributions: ["Flask backend", "Portfolio model", "Database flows"],
    tech: ["Python", "Flask", "PostgreSQL", "HTML", "CSS"],
    github: "https://github.com/shiverin/finance",
    featured: false,
    code: "07",
    visual: "finance",
    year: "2024",
    category: "Finance",
  },
];

export const hackathon = {
  title: "BrainHack by DSTA",
  achievement: "Finalist - Top 4",
  duration: "Jun 2025",
  description:
    "A multi-domain AI sprint spanning speech, computer vision, OCR, and reinforcement learning.",
  modules: [
    {
      title: "Speech",
      metric: "0.98% WER",
      detail: "Fine-tuned Whisper on 4,500 audio samples.",
    },
    {
      title: "Vision",
      metric: "67% accuracy",
      detail: "Trained YOLOv8 on 10,000 labelled military-vehicle images.",
    },
    {
      title: "OCR",
      metric: "99% character accuracy",
      detail: "Built a ResNet18 and CRNN model on 6,000 scanned text samples.",
    },
    {
      title: "Multi-agent RL",
      metric: "Custom DQN",
      detail: "Implemented a single-policy multi-agent DQN in PettingZoo.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "Go", "TypeScript", "JavaScript", "Java", "C", "R"],
  },
  {
    title: "Backend and APIs",
    items: [
      "REST APIs",
      "Gin",
      "FastAPI",
      "Django",
      "Flask",
      "WebSockets",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
    ],
  },
  {
    title: "Data and Analytics",
    items: ["Snowflake", "AWS Athena", "ETL Workflows", "Pandas", "Scikit-learn", "Tableau", "R Studio"],
  },
  {
    title: "AI and ML",
    items: ["LLMs", "RAG", "TensorFlow", "PyTorch", "YOLOv8", "Whisper"],
  },
  {
    title: "Cloud and Tools",
    items: ["AWS Lambda", "Docker", "Docker Compose", "Git", "Postman", "Render", "Supabase"],
  },
];

export const interests = [
  "Classical musician - piano and violin",
  "Orchestral performance",
  "Leetcode",
  "Watch collecting",
  "Chinese chess",
];

export const routeMeta = {
  home: {
    title: "Zhao Shizhen - AI, Data and Backend Systems",
    description: profile.shortBio,
  },
  work: {
    title: "Selected Work - Zhao Shizhen",
    description: "Quant systems, full-stack products, and machine-learning experiments by Zhao Shizhen.",
  },
  experience: {
    title: "Experience - Zhao Shizhen",
    description: "Experience across Kpler, Source Academy, and Shopee.",
  },
  about: {
    title: "About - Zhao Shizhen",
    description: "Education, technical skills, achievements, and interests.",
  },
  contact: {
    title: "Contact - Zhao Shizhen",
    description: "Contact Zhao Shizhen for technical and product collaborations.",
  },
  resume: {
    title: "Resume - Zhao Shizhen",
    description: "Current resume for Zhao Shizhen.",
  },
};
