export const profile = {
  name: "Roshan Merugu",
  handle: "RM",
  role: "Full-Stack Developer",
  tagline: "Building secure, futuristic web experiences with modern tech.",
  intro:
    "B.Tech Graduate crafting responsive, user-focused interfaces. I ship clean front-end systems where every interaction is intentional and every pixel is accountable.",
  location: "Hyderabad, IN",
  coords: { lat: "17.3850 N", lng: "78.4867 E" },
  email: "meruguroshan24@gmail.com",
  phone: "+91 79935 80896",
  myresumeUrl: "https://drive.google.com/file/d/1EzeMqGUwU72sJwF2mPZbS4iOfAu9PoGk/view?usp=sharing",
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
    "I'm Roshan — A BTech Graduate from Aurora's Technological and Research Institute. My toolkit is anchored in HTML, CSS, JavaScript, Bootstrap and Flexbox, and I gravitate toward clean, accessible, mobile-first interfaces.",
    "I've shipped responsive websites, API-driven applications, and a series of Frontend Mentor challenges — each one a small lab for sharpening craft. I love the velocity of startup environments: taking ownership, learning fast, and pushing every project a little further than the last.",
    "Long-term, I'm building toward becoming a Full-Stack Developer working on innovative products — and eventually launching a startup of my own around solutions that genuinely matter.",
  ],
  facts: [
    { k: "Graduation", v: "2026" },
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
    index: "PROJ_01",
    title: "Restaurant Website",
    year: "2024",
    description:
      "Responsive restaurant site with a modern menu system and contact pipeline. Built with the team — owned front-end layout, styling, and cross-device responsiveness.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase"],
    demo: "https://restaurant-website-three-gamma.vercel.app/",
    github: "https://github.com/Roshan-Merugu/Restaurant-website",
    status: "LIVE",
  },
  {
    id: "02",
    index: "PROJ_02",
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
    index: "PROJ_03",
    title: "AeroHarvest — Farm to Table in Hours",
    year: "2026",
    description:
      "Smart farm-to-consumer MVP that compresses the agricultural supply chain — direct, intermediary-free delivery from farms to customers within hours. Responsive UI focused on freshness, transparency, and speed.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Vercel", "Tailwind CSS", "React.js", "TypeScript", "Vite", "Supabase"],
    demo: "https://aero-harvest-farm-to-table-in-hours.vercel.app/",
    github: "https://github.com/Roshan-Merugu/AeroHarvest---Farm-to-Table-in-Hours",
    status: "LIVE",
  },
  {
    id: "04",
    index: "PROJ_04",
    title: "Personal Portfolio Website",
    year: "2024",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience. Built with a modern design and optimized for performance.",
    stack: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript"],
    demo: "https://personal-portfolio-phi-liart-75.vercel.app/",
    github: "https://github.com/Roshan-Merugu/Personal-Portfolio",
    status: "LIVE",
  },
  {
    id: "05",
    index: "PROJ_05",
    title: "Frontend Mentor Lab",
    year: "Ongoing",
    description:
      "An evolving collection of Frontend Mentor challenges — sharpening layout precision, component composition, and design-to-code translation.",
    stack: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
    demo: "https://www.frontendmentor.io/profile/Roshan-Merugu",
    status: "WIP",
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  product: string;
  description: string;
  highlights: string[];
  tags: string[];
  location?: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "Aug 2026 - Present",
    role: "Social Media & Product Growth",
    product: "PrepLoom",
    description:
      "Technical interview preparation platform focused on helping students and fresh graduates prepare more effectively.",
    tags: [
      "Content Strategy",
      "Product Marketing",
      "Audience Growth",
      "Data Analytics",
    ],
    highlights: [
      "Developed and published social media content to increase product awareness and communicate PrepLoom's value to students and fresh graduates.",
      "Created promotional reels, product-update creatives, and educational content around technical interview preparation and student pain points.",
      "Used audience engagement, feedback, and content performance insights to refine messaging and identify content opportunities.",
    ],
    location: "Hyderabad, India",
  },
];


export type Certification = {
  title: string;
  org: string;
  year: string;
  detail: string;
  credentials?: string;
};

export const certifications: Certification[] = [
  {
    year: "2026",
    title: "Developer Foundations",
    org: "NxtWave CCBP 4.0",
    detail: "Completion Certificate for the git, Git-Hub, version-control, Command line mastery.",
    credentials: "https://drive.google.com/file/d/1HtKL92zpvPdrtR1xXaH0nuYXfzMpCcDP/view?usp=drive_link",
  },

  {
    year: "2026",
    title: "Node.js",
    org: "NxtWave CCBP 4.0",
    detail:"Completion certificate for the Node.js course — mastering server-side JavaScript, Express.js, and API development.",
    credentials: "https://drive.google.com/file/d/1_ByIdfXmItYmFWJOmlkZnHO7hBnYlME6/view?usp=sharing",
  },
  {
    year:"2026",
    title:"Node.js (Basic)",
    org:"HackerRank",
    detail:"Completion certificate for the Node.js (Basic) course — covering fundamental server-side JavaScript concepts and basic API development.",
    credentials: "https://drive.google.com/file/d/1L8RnlqQZgsTVCcSzmMKwYkL2NdSUTtaR/view?usp=drive_link",
  },
  {
    year:"2026",
    title:"SQL (Basic)",
    org:"HackerRank",
    detail:"Completion certificate for the SQL courses — covering fundamental, intermediate, and advanced SQL concepts and techniques.",
    credentials: "https://drive.google.com/file/d/1CTDWN3cg1mC1SyWFzl2RkG8fwn7iikKN/view?usp=drive_link",
  },
  {
    year:"2026",
    title:"SQL (Intermediate)",
    org:"HackerRank",
    detail:"Completion certificate for the SQL courses — covering fundamental, intermediate, and advanced SQL concepts and techniques.",
    credentials: "https://drive.google.com/file/d/1KPEEsf_jwp44ATHCGYBFtpLQmCtslfIJ/view?usp=drive_link",
  },  
  {
    year:"2026",
    title:"SQL (Advanced)",
    org:"HackerRank",
    detail:"Completion certificate for the SQL courses — covering fundamental, intermediate, and advanced SQL concepts and techniques.",
    credentials: "https://drive.google.com/file/d/1hjlacAW625qAoO_P0FiEzP1okMYLBydD/view?usp=drive_link",
  },
  {
    year: "2026",
    title: "JavaScript Essentials",
    org: "NxtWave CCBP 4.0",
    detail:
      "Achievement certificate covering core JavaScript: DOM manipulation, async patterns, ES6+ features, and the foundations behind every dynamic interface I build.",
    credentials: "https://drive.google.com/file/d/1SlQ_V_MoMHeg-UU_XwVsBF7u-kurgpuL/view?usp=drive_link",
  },
  {
    year: "2026",
    title: "Build Your Own Dynamic Web Application",
    org: "NxtWave CCBP 4.0",
    detail:
      "Hands-on certification for engineering a fully dynamic web app — wiring JavaScript logic, state, and user flows end-to-end.",
    credentials: "https://drive.google.com/file/d/1DBtiHNwRsdejYdP2DXoPT_vpzwzMiawJ/view?usp=drive_link",
  },
  {
    year: "2025",
    title: "India's Greatest GenAI Buildathon",
    org: "OpenAI Academy × NxtWave",
    detail:
      "Certificate of Appreciation for participating in India's largest Generative AI buildathon — shipping a working AI-powered build under live constraints.",
    credentials: "https://drive.google.com/file/d/1i4pbMuvEMNFoFtWRbTkRTxHO3qZwBBRt/view?usp=drive_link",
  },
  {
    year: "2025",
    title: "MCP Project — Model Context Protocol",
    org: "NxtWave CCBP 4.0",
    detail:
      "Project completion certificate for building with the Model Context Protocol — integrating Cursor IDE, Pipedream, and MCP servers for AI-assisted development workflows.",
    credentials: "https://drive.google.com/file/d/1xJz_M-J_OraYJborcVnoLUGrkrwX1Ro9/view?usp=drive_link",
  },
  {
    year: "2025",
    title: "Introduction to Databases & SQL",
    org: "NxtWave CCBP 4.0",
    detail:
      "Achievement certificate covering relational modeling, normalized schema design, and the SQL fundamentals needed to power real applications.",
    credentials: "https://drive.google.com/file/d/1fDHnyB5oKrCclgpRIhBpMxarCD0KaYpw/view?usp=drive_link",
  },
  {
    year: "2025",
    title: "Python (Basic) Certified",
    org: "HackerRank",
    detail:
      "Accomplishment certificate validating core Python proficiency through evaluated, timed problem-solving challenges.",
    credentials: "https://drive.google.com/file/d/1AicWT4FP6CZBtBRNke9LL_RUmKpel9gH/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Programming Foundations with Python",
    org: "NxtWave CCBP 4.0",
    detail:
      "End-to-end Python foundations: data structures, control flow, and idiomatic problem solving — the analytical baseline behind everything I ship.",
    credentials: "https://drive.google.com/file/d/1Reh7wWZJi0xvEQ_9i1Yu_HKste-_dO_P/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Generative AI Mastery Workshop",
    org: "NxtWave CCBP 4.0",
    detail:
      "Certificate of Participation for completing an intensive workshop on generative AI tooling, prompt design, and applied model workflows.",
    credentials: "https://drive.google.com/file/d/1wC34uz7x38VzoOVQ4HPDIuV5F_9UF4WN/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Build Your Own Responsive Website",
    org: "NxtWave CCBP 4.0",
    detail:
      "Achievement certificate for engineering a fully responsive website using Bootstrap and Flexbox — mobile-first, fluid, accessible across breakpoints.",
    credentials: "https://drive.google.com/file/d/1PfHXkXYlHsP9XDYwwmF6SibZdjOPnvqQ/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Build Your Own Static Website",
    org: "NxtWave CCBP 4.0",
    detail:
      "Hands-on certification for shipping a production-grade static website with HTML5, CSS3, and Bootstrap — clean markup and intentional styling.",
    credentials: "https://drive.google.com/file/d/1AkwhsMTe37zeeZj9R_T-i-QQI8NR-s19/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "XPM 4.0 Fundamentals",
    org: "NxtWave CCBP 4.0",
    detail:
      "Certification covering Experiential Performance Mindset fundamentals — personal identity, integrity, goal setting, and operating with intent.",
    credentials: "https://drive.google.com/file/d/1tJ5yYif7x4lyB4FSu2BDrbVgxDHN8v5l/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "UI Design Workshop with Flutter",
    org: "S.D.V.V.L CAD Centre",
    detail:
      "Workshop certificate for hands-on UI design fundamentals using Flutter — layout primitives, theming, and component composition.",
    credentials: "https://drive.google.com/file/d/1X4eXTzmyygx3jwzVT3xsE2oVtKsiTcP6/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Cybersecurity Analyst Job Simulation",
    org: "Tata x Forage",
    detail:
    "Completed a practical cybersecurity job simulation covering IAM fundamentals, IAM strategy assessment, IAM solutions, and platform integration.",
    credentials: "https://drive.google.com/file/d/1IZay3Z9nfPqZ088MZQ1ErnMupqc8IchO/view?usp=drive_link",
},
  
]
export type Achievement = {
  year: string;
  title: string;
  org: string;
  detail: string;
  credentials?: string;
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    title: "DSA CodeVerse — Weekly Contest #32",
    org: "NxtWave CCBP 4.0",
    detail:
      "Secured Rank 2 in the DSA CodeVerse weekly contest, demonstrating consistent problem-solving speed and algorithmic precision under pressure.",
    credentials: "https://drive.google.com/file/d/1eSwIpxvvNdGDH0p4IcWYEPB5r0xdBt70/view?usp=drive_link",
  },
  {
    year: "2026",
    title: "DSA CodeVerse — Weekly Contest #31",
    org: "NxtWave CCBP 4.0",
    detail:
      "Secured Rank 5 in the DSA CodeVerse weekly contest — sharpening data structures, time complexity, and competitive coding instincts.",
    credentials: "https://drive.google.com/file/d/11FIkDh4knVaGXv5PnqCAXcHQx7dzuvES/view?usp=drive_link",
  },
  {
    year: "2026",
    title: "Intro to AI/ML",
    org: "NxtWave CCBP 4.0",
    detail: 
    "Completed the foundation course on the artificial intelligence and machine learning",
    credentials: "https://drive.google.com/file/d/1C_IDwQDUE3B2lbXByFLnG8S0AG9XDWsc/view?usp=drive_link",
  },
  {  
    year: "2026",
    title: "Intro to OS",
    org: "NxtWave CCBP 4.0",
    detail: 
    "Completed the foundation course on the Operating Systems",
    credentials: "https://drive.google.com/file/d/1eLNXlV2PPZQuE4szm3S8L1Qoy_OIQjLe/view?usp=drive_link",
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
    score: "CGPA: 6.81/10",
  },
  {
    period: "2020 — 2022",
    degree: "Intermediate — MPC Stream",
    institution: "Little Flowers Junior College, Uppal",
    detail:
      "Mathematics, Physics & Chemistry foundation — the analytical baseline that powers everything from algorithmic thinking to UI math.",
    score: "Percentage: 66%",
  },
  {
    period: "2019 — 2020",
    degree: "Matriculation — Class X",
    institution: "Sri Sai Vidyalay High School, Seethaphalmandi",
    detail:
      "Completed secondary education with a focus on building the curiosity and discipline that later pulled me into engineering.",
    score: "CGPA: 9.7/10",
  },
];

export const skills = [
  {
    category: "Core Stack",
    items: ["React.js", "Vite", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Node.js", "Express.js"],
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

