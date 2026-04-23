export const profile = {
  name: "Roshan Merugu",
  handle: "RM",
  role: "Full-Stack Developer",
  tagline: "Building secure, futuristic web experiences with modern tech.",
  intro:
    "Final-year B.Tech CSE (Cybersecurity) engineer crafting responsive, user-focused interfaces. I ship clean front-end systems where every interaction is intentional and every pixel is accountable.",
  location: "Hyderabad, IN",
  coords: { lat: "17.3850 N", lng: "78.4867 E" },
  email: "meruguroshan24@gmail.com",
  phone: "+91 79935 80896",
  resumeUrl:
    "https://drive.google.com/file/d/1d-R6B4b31GDlruaHSdIiutJiMzTSu5Fb/view?usp=sharing",
  socials: {
    github: "https://github.com/Roshan-Merugu",
    linkedin: "https://www.linkedin.com/in/roshanmerugu/",
    instagram: "https://www.instagram.com/_roshan__patel__07_/?hl=en",
    frontendmentor: "https://www.frontendmentor.io/profile/Roshan-Merugu",
  },
  status: "AVAILABLE FOR WORK",
};

export const about = {
  body: [
    "I'm Roshan — a final-year B.Tech student at Aurora's Technological and Research Institute, specializing in Computer Science with a focus on Cybersecurity. My toolkit is anchored in HTML, CSS, JavaScript, Bootstrap and Flexbox, and I gravitate toward clean, accessible, mobile-first interfaces.",
    "I've shipped responsive websites, API-driven applications, and a series of Frontend Mentor challenges — each one a small lab for sharpening craft. I love the velocity of startup environments: taking ownership, learning fast, and pushing every project a little further than the last.",
    "Long-term, I'm building toward becoming a Full-Stack Developer working on innovative products — and eventually launching a startup of my own around solutions that genuinely matter.",
  ],
  facts: [
    { k: "Year", v: "B.TECH IV" },
    { k: "Stream", v: "CSE / CS" },
    { k: "Base", v: "HYDERABAD" },
    { k: "Status", v: "ACTIVE" },
  ],
};

export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
  status: "LIVE" | "WIP" | "ARCHIVED";
};

export const projects: Project[] = [
  {
    id: "01",
    index: "PROJ_001",
    title: "Restaurant Website",
    year: "2024",
    description:
      "Responsive restaurant site with a modern menu system and contact pipeline. Built with the team — owned front-end layout, styling, and cross-device responsiveness.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase"],
    demo: "https://roshan-merugu.github.io/Restaurant-website/",
    github: "https://github.com/Roshan-Merugu/Restaurant-website",
    status: "LIVE",
  },
  {
    id: "02",
    index: "PROJ_002",
    title: "Live Weather App",
    year: "2024",
    description:
      "Real-time weather client wired to the OpenWeather API. Dynamic UI updates, JSON parsing, and a responsive layout tuned for mobile-first delivery.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "OpenWeather API"],
    demo: "https://roshan-merugu.github.io/Live-weather-app/",
    github: "https://github.com/Roshan-Merugu/Live-weather-app",
    status: "LIVE",
  },
  {
    id: "03",
    index: "PROJ_003",
    title: "AeroHarvest — Farm to Table in Hours",
    year: "2026",
    description:
      "Smart farm-to-consumer MVP that compresses the agricultural supply chain — direct, intermediary-free delivery from farms to customers within hours. Responsive UI focused on freshness, transparency, and speed.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Vercel, Tailwind CSS, React.js, TypeScript, Vite, Supabase"],
    demo: "https://aero-harvest-farm-to-table-in-hours.vercel.app/",
    github: "https://github.com/Roshan-Merugu/AeroHarvest---Farm-to-Table-in-Hours",
    status: "LIVE",
  },
  {
    id: "04",
    index: "PROJ_004",
    title: "Personal Portfolio Website",
    year: "2026",
    description:
      "A modern, responsive portfolio website showcasing my work and skills as a developer.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Vercel, Tailwind CSS, React.js, TypeScript, Vite"],
    demo: "https://personal-portfolio-xi-three-61.vercel.app/",
    github: "https://github.com/Roshan-Merugu/Personal-Portfolio.git",
    status: "LIVE",
  },
  {
    id: "05",
    index: "PROJ_005",
    title: "Frontend Mentor Lab",
    year: "Ongoing",
    description:
      "An evolving collection of Frontend Mentor challenges — sharpening layout precision, component composition, and design-to-code translation.",
    stack: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
    demo: "https://www.frontendmentor.io/profile/Roshan-Merugu",
    status: "WIP",
  },
];

export type Achievement = {
  year: string;
  title: string;
  org: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    title: "DSA CodeVerse — Weekly Contest #32",
    org: "NxtWave CCBP 4.0",
    detail:
      "Secured Rank 2 in the DSA CodeVerse weekly contest, demonstrating consistent problem-solving speed and algorithmic precision under pressure.",
  },
  {
    year: "2026",
    title: "DSA CodeVerse — Weekly Contest #31",
    org: "NxtWave CCBP 4.0",
    detail:
      "Secured Rank 5 in the DSA CodeVerse weekly contest — sharpening data structures, time complexity, and competitive coding instincts.",
  },
  {
    year: "2026",
    title: "JavaScript Essentials",
    org: "NxtWave CCBP 4.0",
    detail:
      "Achievement certificate covering core JavaScript: DOM manipulation, async patterns, ES6+ features, and the foundations behind every dynamic interface I build.",
  },
  {
    year: "2026",
    title: "Build Your Own Dynamic Web Application",
    org: "NxtWave CCBP 4.0",
    detail:
      "Hands-on certification for engineering a fully dynamic web app — wiring JavaScript logic, state, and user flows end-to-end.",
  },
  {
    year: "2025",
    title: "India's Greatest GenAI Buildathon",
    org: "OpenAI Academy × NxtWave",
    detail:
      "Certificate of Appreciation for participating in India's largest Generative AI buildathon — shipping a working AI-powered build under live constraints.",
  },
  {
    year: "2025",
    title: "MCP Project — Model Context Protocol",
    org: "NxtWave CCBP 4.0",
    detail:
      "Project completion certificate for building with the Model Context Protocol — integrating Cursor IDE, Pipedream, and MCP servers for AI-assisted development workflows.",
  },
  {
    year: "2025",
    title: "Introduction to Databases & SQL",
    org: "NxtWave CCBP 4.0",
    detail:
      "Achievement certificate covering relational modeling, normalized schema design, and the SQL fundamentals needed to power real applications.",
  },
  {
    year: "2025",
    title: "Python (Basic) Certified",
    org: "HackerRank",
    detail:
      "Accomplishment certificate validating core Python proficiency through evaluated, timed problem-solving challenges.",
  },
  {
    year: "2024",
    title: "Programming Foundations with Python",
    org: "NxtWave CCBP 4.0",
    detail:
      "End-to-end Python foundations: data structures, control flow, and idiomatic problem solving — the analytical baseline behind everything I ship.",
  },
  {
    year: "2024",
    title: "Generative AI Mastery Workshop",
    org: "NxtWave CCBP 4.0",
    detail:
      "Certificate of Participation for completing an intensive workshop on generative AI tooling, prompt design, and applied model workflows.",
  },
  {
    year: "2024",
    title: "Build Your Own Responsive Website",
    org: "NxtWave CCBP 4.0",
    detail:
      "Achievement certificate for engineering a fully responsive website using Bootstrap and Flexbox — mobile-first, fluid, accessible across breakpoints.",
  },
  {
    year: "2024",
    title: "Build Your Own Static Website",
    org: "NxtWave CCBP 4.0",
    detail:
      "Hands-on certification for shipping a production-grade static website with HTML5, CSS3, and Bootstrap — clean markup and intentional styling.",
  },
  {
    year: "2024",
    title: "XPM 4.0 Fundamentals",
    org: "NxtWave CCBP 4.0",
    detail:
      "Certification covering Experiential Performance Mindset fundamentals — personal identity, integrity, goal setting, and operating with intent.",
  },
  {
    year: "2024",
    title: "UI Design Workshop with Flutter",
    org: "S.D.V.V.L CAD Centre",
    detail:
      "Workshop certificate for hands-on UI design fundamentals using Flutter — layout primitives, theming, and component composition.",
  },
];

export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  detail: string;
  score?: string;
};

export const education: EducationEntry[] = [
  {
    period: "2022 — 2026",
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Aurora's Technological and Research Institute, Medchal",
    detail:
      "Specialization in Cybersecurity. Coursework spans secure systems, networking, and applied front-end engineering — paired with a continuous personal project pipeline.",
    score: "Final Year",
  },
  {
    period: "2019 — 2022",
    degree: "Intermediate — MPC Stream",
    institution: "Little Flowers Junior College, Uppal",
    detail:
      "Mathematics, Physics & Chemistry foundation — the analytical baseline that powers everything from algorithmic thinking to UI math.",
  },
  {
    period: "2019",
    degree: "Matriculation — Class X",
    institution: "Sri Sai Vidyalay High School, Seethaphalmandi",
    detail:
      "Completed secondary education with a focus on building the curiosity and discipline that later pulled me into engineering.",
  },
];

export const skills = [
  {
    category: "Core Stack",
    items: ["React.js", "Vite", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "REST APIs", "Authentication", "Firebase", "Python", "SQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Bootstrap", "Flexbox", "Responsive Design"],
  },
];

