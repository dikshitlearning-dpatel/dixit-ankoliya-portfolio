import { Project, SkillCategory, Certification, Education, ExperienceItem, WhyHireItem, DevStep } from "../types";

export const portfolioConstants = {
  name: "DIXIT ANKOLIYA",
  titles: ["Full Stack Developer", "AI Integrations", "AI-Focused Full Stack Developer"],
  location: "Ahmedabad, Gujarat, India",
  email: "ankoliyadixit80@gmail.com",
  phone: "+91-7573940320",
  github: "dikshitlearning-dpatel",
  linkedin: "https://linkedin.com/in/dixit-ankoliya",
  tagline: "Building AI-Powered Applications & Scalable Web Products",
  
  about: {
    story: "I am currently pursuing my BSc in Information Technology (AI/ML) at GLS University. While many developers focus purely on academic theory, I have spent the last two years building hands-on full-stack web applications and deploying them directly to production. I specialize in Next.js 15, TypeScript, Prisma ORM, and SQLite, and I integrate state-of-the-art LLM APIs (OpenAI & Claude) using structured output modes to deliver real business solutions. My goal is to work with ambitious engineering teams where I can bring my rapid building velocity, proactive problem-solving mindset, and rigorous work ethic.",
    bullets: [
      {
        title: "Practical Builder",
        description: "I focus on creating software that addresses real-world user pain points and administrative overhead, deploying sandbox systems to cloud environments."
      },
      {
        title: "AI Integrations",
        description: "Proficient in designing strict schema validations to bypass LLM hallucinations and using AI tooling workflows to double developer output speeds."
      },
      {
        title: "Full-Stack Autonomy",
        description: "Comfortable writing relational SQLite database models with Prisma ORM, configuring secure Next.js edge middlewares, and staging clean deployments."
      }
    ],
    aspirations: "I am actively seeking software engineering, full-stack development, or AI-developer internships and entry-level positions where I can bring immediate value and scale my skills."
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
      date: "2025",
      credentialUrl: "https://www.coursera.org/verify/ibm-ml-python"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      credentialUrl: "https://www.coursera.org/verify/ibm-python-ds"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "2024",
      credentialUrl: "https://www.coursera.org/verify/ibm-ai-fundamentals"
    },
    {
      title: "Google Digital Marketing & E-Commerce",
      issuer: "Google (via Coursera)",
      date: "2024",
      credentialUrl: "https://www.coursera.org/verify/google-marketing-ecommerce"
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
    title: "Practical Intern Focus",
    description: "I bypass generic academic toy codes and focus on staging production-ready relational schemas, secure auth cookies, and full request-response lifecycles.",
    icon: "Target"
  },
  {
    title: "AI-Native Prototyping",
    description: "I implement strict JSON modes, OpenAI system prompt parameters, and token chunking filters, executing intelligent automated systems at rapid pace.",
    icon: "Cpu"
  },
  {
    title: "High Agency & Velocity",
    description: "I approach engineering as a continuous craft. I spend my days profiling index latencies, reading documentation, and writing zero-error static pipelines.",
    icon: "Zap"
  },
  {
    title: "Scalable Full-Stack Core",
    description: "Equipped to handle SQL migrations, Next.js API server handlers, and Vercel edge telemetry maps without requiring continuous supervision.",
    icon: "Layers"
  }
];

export const devProcess: DevStep[] = [
  {
    phase: "01",
    title: "Domain & UX Research",
    description: "Audit existing SaaS systems, discover user paint points, establish rigid project scope, and construct initial wireframes.",
    details: ["Administrative Friction Mapping", "Requirements Spec Drafting", "Feature Cost Benchmarking"]
  },
  {
    phase: "02",
    title: "Schema & Architecture design",
    description: "Draft database entity relational diagrams (ERDs), map API routes, index keys, and design authentication middleware guidelines.",
    details: ["Type-Safe Prisma Models", "Stateless Session Cookie Middleware", "REST Endpoint Telemetry Map"]
  },
  {
    phase: "03",
    title: "Engineered Building",
    description: "Construct clean typescript models, modular layout sections using cards, and secure server actions.",
    details: ["Next.js Server Actions", "Performance UI Frameworks", "Modular Code Segments"]
  },
  {
    phase: "04",
    title: "AI Integration Pipelines",
    description: "Configure OpenAI JSON mode guidelines, engineering temperature metrics, and build input safety filters.",
    details: ["Structured AI Prompts", "Hallucination Resolving Checks", "Token Payload Optimization"]
  },
  {
    phase: "05",
    title: "TypeScript & Spacing Audits",
    description: "Verify typescript compilation parameters, solve lint warnings, and run cross-device spacing tests down to 320px.",
    details: ["Strict Type Checking", "Zero-Warning Linter Compilations", "Viewport Scale Refinements"]
  },
  {
    phase: "06",
    title: "Staged Live Deployment",
    description: "Configure robots crawl instructions, dynamic sitemap indexes, staging routes, and edge cache telemetry.",
    details: ["Vercel Edge Cloud Deployment", "Google Schema Injection", "robots.txt & sitemap.xml Indexes"]
  }
];
