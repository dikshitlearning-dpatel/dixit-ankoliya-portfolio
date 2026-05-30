import { Project, SkillCategory, Certification, Education, ExperienceItem, WhyHireItem, DevStep } from "../types";

export const portfolioConstants = {
  name: "DIXIT ANKOLIYA",
  titles: ["Full Stack Developer (AI Integrations)", "Full Stack Developer", "AI-Focused Developer"],
  location: "Ahmedabad, Gujarat, India",
  email: "ankoliyadixit80@gmail.com",
  phone: "+91-7573940320",
  github: "dikshitlearning-dpatel",
  linkedin: "https://linkedin.com/in/dixit-ankoliya",
  tagline: "Building Practical Full Stack Applications with AI Integrations",
  
  about: {
    story: "I am currently pursuing my BSc in Information Technology (AI/ML) at GLS University. I have focused on building practical, full-stack web applications and deploying them live. I work with Next.js, TypeScript, Prisma ORM, and SQLite, and integrate AI APIs (OpenAI & Claude) to parse data and build useful tools. My goal is to join a collaborative engineering team where I can contribute to shipping code and continue growing my full-stack development skills.",
    bullets: [
      {
        title: "Practical Builder",
        description: "I build web applications that solve real tasks, focusing on functional frontends and clean backend logic."
      },
      {
        title: "AI API Integration",
        description: "Experienced in setting up structured AI outputs, parsing prompt responses, and preventing model format errors."
      },
      {
        title: "Full-Stack Basics",
        description: "Comfortable writing database models with Prisma ORM, managing user sessions, and deploying projects to Vercel."
      }
    ],
    aspirations: "I am actively seeking software engineering, full-stack development, or AI-developer internships and entry-level positions where I can contribute to projects and expand my skills."
  },

  skills: [
    {
      category: "Frontend Engineering",
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Authentication", level: "Advanced" }
      ]
    },
    {
      category: "Databases & ORM",
      skills: [
        { name: "Prisma ORM", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "SQLite", level: "Advanced" }
      ]
    },
    {
      category: "AI & Intelligence",
      skills: [
        { name: "AI API Integration", level: "Advanced" },
        { name: "Prompt Engineering", level: "Expert" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "GitHub", level: "Advanced" }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "C", level: "Intermediate" }
      ]
    },
    {
      category: "CS Fundamentals",
      skills: [
        { name: "OOP", level: "Advanced" },
        { name: "DBMS", level: "Advanced" },
        { name: "Computer Networks", level: "Intermediate" },
        { name: "Data Structures & Algorithms", level: "Intermediate" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "krynex",
      title: "Krynex Technology",
      type: "Full Stack Business Platform",
      description: "A full-stack business website built to manage business information, secure access, and improve client interactions through a responsive web platform.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "SQLite", "JWT Authentication", "Vercel"],
      features: [
        "Authentication system with protected routes",
        "Admin dashboard for internal management",
        "Responsive frontend using Next.js and Tailwind CSS",
        "Database integration using Prisma ORM and SQLite",
        "Contact and email workflows"
      ],
      githubUrl: "https://github.com/dikshitlearning-dpatel/krynex-technology",
      liveUrl: "https://krynex-tech.vercel.app",
      featured: true,
      caseStudy: {
        overview: "Krynex Technology is a full-stack business website built to manage business information, secure access, and improve client interactions through a responsive web platform.",
        problem: "Businesses require secure client portals and responsive dashboards to manage internal operations without introducing latency or authentication bypass vulnerabilities.",
        solution: "Implemented a Next.js platform using Prisma ORM and SQLite, featuring JWT authentication for secure route protection, an admin dashboard, and automated email contact workflows.",
        architecture: [
          "Frontend: Next.js App Router with Tailwind CSS for layout styling.",
          "Backend: Next.js Route Handlers and Server Actions for email and dashboard operations.",
          "Database: Prisma ORM for structured SQLite query mapping.",
          "Hosting: Vercel for high-availability frontend and API endpoints."
        ],
        challenges: [
          "Protecting admin routes: Solved by executing middleware checks on incoming JWT auth tokens.",
          "Streamlining operations: Configured clean server actions to process contact requests and email pipelines."
        ],
        learnings: [
          "Improved understanding of authentication, database management, responsive UI, and deployment workflows."
        ]
      }
    },
    {
      id: "resumemind",
      title: "Resume Mind AI",
      type: "AI Resume Analyzer & Matcher",
      description: "An AI-powered resume analysis tool that compares resumes with job descriptions and provides structured feedback.",
      tech: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS", "Vercel"],
      features: [
        "Resume and job description comparison",
        "Match score generation",
        "AI-powered improvement suggestions",
        "Responsive interface and live deployment"
      ],
      githubUrl: "https://github.com/dikshitlearning-dpatel/resume-mind-ai",
      liveUrl: "https://resumemind-ai.vercel.app",
      featured: true,
      caseStudy: {
        overview: "Resume Mind AI is an AI-powered resume analysis tool that compares resumes with job descriptions and provides structured feedback.",
        problem: "Job seekers struggle to understand how resumes compare against Applicant Tracking Systems (ATS) and job requirements, leading to high rejection rates before interviews.",
        solution: "Developed a Next.js application that integrates LLM APIs to perform conceptual matching, generate match scores, and provide structured feedback to candidates.",
        architecture: [
          "Frontend: Next.js with Tailwind CSS and Framer Motion animations.",
          "AI Processing: Direct API integration with structured prompt schemas.",
          "Hosting: Vercel deployment for serverless performance."
        ],
        challenges: [
          "Structured feedback validation: Solved by requesting JSON outputs from the LLM and matching them against frontend models.",
          "Performance mapping: Streamlined data payload size to bypass serverless function timeout constraints."
        ],
        learnings: [
          "Learned how to integrate AI APIs, structure responses, and build user-focused tools."
        ]
      }
    }
  ] as Project[],

  experience: [
    {
      role: "Practical AI & Full Stack Builder (Independent Lab)",
      organization: "Self-Directed Practical Experience",
      duration: "2024 - Present",
      highlights: [
        "Engineered, tested, and deployed multiple live production web applications using Next.js, React, Node.js, and Prisma ORM.",
        "Integrated public APIs (OpenAI, Claude) to build custom automated text-processing and matching workflows.",
        "Set up local staging databases and deployed live digital products onto AWS EC2 instances, managing configurations via AWS Cloud9.",
        "Maintained structured, Git-versioned code repositories and pushed continuous integration pipelines to Vercel.",
        "Automated mock database seeding, set up JWT-based security layers, and created responsive layouts matching top startup aesthetics."
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "SQLite", "Prisma", "AWS EC2", "Vercel", "Git"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "2025"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2024"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "2024"
    },
    {
      title: "Google Digital Marketing & E-Commerce",
      issuer: "Google (via Coursera)",
      date: "2024"
    }
  ] as Certification[],

  education: [
    {
      degree: "BSc Information Technology (AI/ML)",
      institution: "GLS University (FCAIT)",
      duration: "2024 - 2027",
      score: "Active / Top Tier"
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Commerce",
      institution: "Gujarat Board (GSEB)",
      duration: "Completed 2024",
      score: "91.14%"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Gujarat Board (GSEB)",
      duration: "Completed 2022",
      score: "88.33%"
    }
  ] as Education[]
};

export const whyHireMe: WhyHireItem[] = [
  {
    title: "Practical Full Stack Skills",
    description: "Experienced with Next.js, React, Node.js, and SQL databases. Focused on building clean backend APIs and responsive user interfaces.",
    icon: "Target"
  },
  {
    title: "AI API Integration",
    description: "Implemented structured responses and parsed data with OpenAI APIs. Experienced in handling prompt parameters and formatting inputs.",
    icon: "Cpu"
  },
  {
    title: "Hands-on Development",
    description: "Committed to clean code practices, writing type-safe TypeScript interfaces, and building projects that resolve user challenges.",
    icon: "Zap"
  },
  {
    title: "Database Management",
    description: "Experienced with Prisma ORM and SQLite, including schema migration, writing relational queries, and managing basic data flows.",
    icon: "Layers"
  }
];

export const devProcess: DevStep[] = [
  {
    phase: "01",
    title: "Project Planning",
    description: "Define requirements, scope project features, and outline simple user flows.",
    details: ["Feature Definition", "Wireframing User Paths", "Technology Selection"]
  },
  {
    phase: "02",
    title: "Database & API Design",
    description: "Design relational database tables and map out REST API endpoints.",
    details: ["Type-Safe Prisma Schemas", "Relational Mapping", "API Route Routing"]
  },
  {
    phase: "03",
    title: "Full Stack Development",
    description: "Develop responsive frontend screens and implement clean backend handlers.",
    details: ["Next.js Server Actions", "TypeScript Data Models", "Modular Components"]
  },
  {
    phase: "04",
    title: "AI API Integration",
    description: "Connect to AI models, set up system prompts, and validate data outputs.",
    details: ["Prompt Engineering", "JSON Schema Validation", "Input Text Parsing"]
  },
  {
    phase: "05",
    title: "Testing & Bug Fixing",
    description: "Run TypeScript checks, resolve linter warnings, and test across viewports.",
    details: ["Strict Linter Checking", "Lighthouse Performance", "Viewport Adjustments"]
  },
  {
    phase: "06",
    title: "Deployment",
    description: "Deploy the codebase to Vercel and check dynamic search index configurations.",
    details: ["Vercel Hosting", "robots.txt Setup", "Sitemap Generation"]
  }
];
