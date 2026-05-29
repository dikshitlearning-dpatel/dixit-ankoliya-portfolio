import { Project, SkillCategory, Certification, Education, ExperienceItem, WhyHireItem, DevStep } from "../types";

export const portfolioConstants = {
  name: "DIXIT ANKOLIYA",
  titles: ["AI Engineer", "Full Stack Developer", "Software Developer"],
  location: "Ahmedabad, Gujarat, India",
  email: "ankoliyadixit80@gmail.com",
  phone: "+91-7573940320",
  github: "dikshitlearning-dpatel",
  linkedin: "https://linkedin.com/in/dixit-ankoliya",
  tagline: "Building AI-Powered Web Applications & Scalable Digital Products",
  
  about: {
    story: "I am a BSc Information Technology (AI/ML) student at GLS University with a profound passion for software engineering, full-stack architectures, and AI-driven products. My entry into the developer space was sparked by a curiosity to make machines think and act intelligently, which quickly evolved into a love for building complete, user-centric web applications. Rather than focusing purely on theory, I learn by building—designing clean frontend interfaces, drafting robust backend APIs, orchestrating database models, and deploying production products. I am relentlessly curious, an agile learner, and I embrace modern AI development workflows to ship scalable code faster and more securely.",
    bullets: [
      {
        title: "Problem Solver",
        description: "Focus on creating software that addresses real-world business and user pain points rather than just writing academic code."
      },
      {
        title: "AI-Native Builder",
        description: "Proficient in orchestrating LLM APIs, building automated intelligence pipelines, and using AI tools to boost developer velocity."
      },
      {
        title: "Full-Stack Mindset",
        description: "Comfortable spanning database queries, server route logic, secure user authentication, and high-performance user interfaces."
      }
    ],
    aspirations: "I am actively seeking software development, full-stack, or AI engineering internships and entry-level positions where I can bring my proactive builder mindset, rapid prototyping speed, and rigorous work ethic to a high-growth team."
  },

  skills: [
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
      category: "Frontend Engineering",
      skills: [
        { name: "Next.js 15", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" }
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "JWT Authentication", level: "Advanced" }
      ]
    },
    {
      category: "Databases & ORM",
      skills: [
        { name: "Prisma ORM", level: "Advanced" },
        { name: "SQLite", level: "Advanced" },
        { name: "SQL", level: "Intermediate" }
      ]
    },
    {
      category: "AI & Modern Workflows",
      skills: [
        { name: "OpenAI API", level: "Advanced" },
        { name: "Claude API", level: "Advanced" },
        { name: "AI Dev Workflows", level: "Advanced" },
        { name: "Prompt Engineering", level: "Expert" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS EC2", level: "Intermediate" },
        { name: "AWS Cloud9", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" }
      ]
    },
    {
      category: "CS Fundamentals",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
        { name: "Database Management Systems (DBMS)", level: "Advanced" },
        { name: "Computer Networks", level: "Intermediate" },
        { name: "Data Structures & Algorithms (DSA)", level: "Intermediate" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "krynex",
      title: "Krynex Technology",
      type: "Full Stack Business Platform",
      description: "A secure, enterprise-grade business management portal engineered to streamline operations, manage client data, track projects, and offer robust administrative tools with role-based access control.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "SQLite", "JWT Auth", "AWS EC2", "Vercel"],
      features: [
        "Advanced Admin Dashboard with system stats and telemetry graphs",
        "Secure JSON Web Token (JWT) cookie-based authentication",
        "Protected routing logic and middleware-level user permission validation",
        "Complete User Management CRUD suite (create, read, update, delete)",
        "Premium glassmorphic dashboard design optimized for heavy data workloads",
        "Fully responsive, mobile-first design deployed on high-availability cloud servers"
      ],
      githubUrl: "https://github.com/dikshitlearning-dpatel/krynex-technology",
      liveUrl: "https://krynex-tech.vercel.app",
      featured: true,
      caseStudy: {
        overview: "Krynex Technology is a sophisticated business platform designed to centralize administration, project tracking, and client management. Created to serve as a high-performance business hub, it integrates deep architectural patterns, secure backend routes, and structured database orchestration.",
        problem: "Modern SaaS platforms require high security, fast loading times, and a unified interface for system admins and clients. Creating a custom dashboard that remains fully responsive while executing heavy database queries and maintaining secure user sessions can easily bottleneck fresher-built applications.",
        solution: "I implemented a Next.js App Router project leveraging Prisma ORM to connect to a highly-optimized SQLite instance. JWT cookies were utilized for stateless, secure session validation, accompanied by a custom Next.js middleware that filters incoming requests before they hit server-side pages, preventing unauthorized access.",
        architecture: [
          "Frontend: Next.js App Router components with local React state and Tailwind styling.",
          "Backend: Next.js Server Actions and Route Handlers for transactional operations.",
          "Database: Prisma ORM acts as the type-safe link mapping data schemas to an optimized local SQLite structure.",
          "Hosting: Deployed on Vercel with server operations running under cloud edge instances, and connected to AWS services."
        ],
        challenges: [
          "Securing sub-routes from manual URL typing: Solved by writing custom middleware that decrypts JWTs and verifies the user's role on the edge layer.",
          "Optimizing multi-relational queries in Prisma: Solved by creating efficient indexes and utilizing eager loading selectively to prevent N+1 database roundtrips."
        ],
        learnings: [
          "Deepened understanding of HTTP-only cookies, CORS policies, and server-side authentication practices.",
          "Mastered the configuration of Next.js middleware and dynamic route segments.",
          "Gained extensive experience deploying and testing applications under simulated production workloads on AWS."
        ]
      }
    },
    {
      id: "resumemind",
      title: "Resume Mind AI",
      type: "AI Resume Analyzer & Matcher",
      description: "An intelligent, high-converting AI-powered application designed to analyze resumes, compare them against active job descriptions, calculate match scores, and provide hyper-specific feedback to beat ATS filters.",
      tech: ["AI APIs", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Instant resume parsing and structured information extraction",
        "Intelligent text-matching engine mapping resume skills to job descriptions",
        "Accurate ATS-style Match Score calculations",
        "AI-generated bullet-point suggestions, missing keyword alerts, and layout reviews",
        "Fully interactive visual scoring gauge and download-friendly assessment reports",
        "Premium glassmorphic card interface featuring smooth canvas animations"
      ],
      githubUrl: "https://github.com/dikshitlearning-dpatel/resume-mind-ai",
      liveUrl: "https://resumemind-ai.vercel.app",
      featured: true,
      caseStudy: {
        overview: "Resume Mind AI is an advanced AI utility targeted at bridging the gap between job seekers and Applicant Tracking Systems (ATS). It processes text, parses resumes, and performs deep contextual evaluation using state-of-the-art LLM prompts.",
        problem: "Over 75% of resumes are filtered out by ATS before a human recruiter even reviews them. Standard resume tools only search for exact keyword matches, failing to understand conceptual synonyms or evaluate real skill relevance, which frustrates applicants.",
        solution: "I developed a highly responsive, glassmorphic Next.js interface that leverages OpenAI's structured JSON output mode to run detailed comparisons. By designing a specialized system prompt, the AI reads both files, performs semantic analysis, generates an objective matching percentage, and lists exactly what the user needs to add or rephrase to pass filters.",
        architecture: [
          "Core Engine: Next.js API Routes routing authenticated payloads to AI endpoints.",
          "AI Orchestration: Chained system prompting designed to produce rigid JSON models ensuring predictable frontend renders.",
          "Animations: Framer Motion provides fluid, continuous feedback states while the AI analyses datasets (loading skeletons, pulse meters)."
        ],
        challenges: [
          "Preventing LLM hallucinations during grading: Overcome by implementing strict schema validation on the client-side and validating returned JSON keys against an interface.",
          "Handling large text inputs in API payloads: Resolved by stripping non-standard characters and chunking input data before passing it to LLM endpoints."
        ],
        learnings: [
          "Gained expertise in prompt engineering, model temperature tuning, and structured JSON parsing.",
          "Understood the constraints and best practices of serverless API timeouts on platforms like Vercel.",
          "Developed rich animations in Framer Motion to make long AI processing intervals feel pleasant and lightning-fast."
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
    title: "AI-Native Velocity",
    description: "I integrate state-of-the-art LLM capabilities, structured output schemas, and automated text parsing. I build features at rapid pace using modern agentic systems.",
    icon: "Cpu"
  },
  {
    title: "Full-Stack Capability",
    description: "From designing schema relations using Prisma ORM to executing secure HTTP-only cookie validation and deploying static assets, I manage the full request lifecycle.",
    icon: "Layers"
  },
  {
    title: "High-Caliber Focus",
    description: "I spend my days architecting dashboard tools, profiling indexing queries, and testing screen viewports. I approach software engineering as an exact science.",
    icon: "Zap"
  },
  {
    title: "Product Mindset",
    description: "I write clean code that drives business metrics. I structure products to load instantly, convert visitor trust, and offer premium interactive experiences.",
    icon: "Target"
  }
];

export const devProcess: DevStep[] = [
  {
    phase: "01",
    title: "Domain & UX Research",
    description: "Map out client workflows, analyze common product deficits, outline strict requirement sets, and conceptualize visual visual flows.",
    details: ["SaaS Landscape Auditing", "Pain Point Syntheses", "Feature Scope Specifying"]
  },
  {
    phase: "02",
    title: "System Design & Schemas",
    description: "Draft database model relationships, verify index keys, structure server route boundaries, and write secure authentication rules.",
    details: ["Type-Safe Prisma Relational ERDs", "JWT Stateless Auth Layouts", "Next.js Middleware Routers"]
  },
  {
    phase: "03",
    title: "Engineered Development",
    description: "Create component structures using strict type safety, implement dynamic state controllers, and write modular API handlers.",
    details: ["Next.js App Server Actions", "Performance-Focused Grids", "Reusable Design Tokens"]
  },
  {
    phase: "04",
    title: "AI Orchestration Layer",
    description: "Chain system context prompts, configure model temperatures, and implement schema parsing to ensure 100% predictable client rendering.",
    details: ["Structured JSON Mode Tuning", "Zero-Hallucination Schemas", "System Message Engineering"]
  },
  {
    phase: "05",
    title: "Rigorous QA Checklist",
    description: "Verify TypeScript compliance, resolve ESLint feedback, check cross-device sizing grids, and audit performance metrics.",
    details: ["Full Compile Checks", "Lighthouse Compliance Audits", "Multi-Viewport Fluidity Checks"]
  },
  {
    phase: "06",
    title: "Cloud & Production Deploy",
    description: "Deploy production targets, configure sitemaps and sitemap headers, map custom DNS paths, and activate serverless telemetry.",
    details: ["Vercel Staging Deployments", "SEO Meta & Schema Injections", "Edge Node Orchestration"]
  }
];
