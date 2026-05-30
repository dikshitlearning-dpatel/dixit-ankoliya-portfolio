# DIXIT ANKOLIYA — Premium Developer Portfolio Hub

> **Professional Fresher Branding & Engineering Proof Systems**
> Deployed live at: [dixit-ankoliya-portfolio.vercel.app](https://dixit-ankoliya-portfolio.vercel.app)

An interactive, high-fidelity developer portfolio designed to maximize recruiter conversion and provide instant proof of software engineering capabilities. Built on Next.js 16 (App Router), TypeScript, and Tailwind CSS, it features dynamic case study tabs, custom backdrop animations, and live GitHub telemetry integration.

---

## 🛠️ Technology Stack & Architecture

| Layer | Technologies & Frameworks |
| :--- | :--- |
| **Core Framework** | Next.js 16.2 (App Router, Turbopack enabled) |
| **Language** | TypeScript 5 (Strict Mode Type-Safe) |
| **Styling & Theme** | Tailwind CSS 4 + custom backdrop mesh blur styles |
| **Interactivity** | Framer Motion 12 (Hardware-accelerated animations) |
| **Telemetry** | GitHub API integration for dynamic repo metrics |
| **SEO & Standards** | Automated JSON-LD Structured Graphs, Robots.txt, and Dynamic Sitemaps |

---

## ⚡ Core Sections & Conversion Modules

1. **Recruiter 8-Second Fast-Scanner Grid**: Instant visual index representing Who (Dixit Ankoliya), What (Web Apps), Proof (2+ Live Projects), and Status (Active for Internships).
2. **Typewriter Console Simulator**: Simulates high-fidelity terminal bootups showcasing Dixit's specializations and environment setups.
3. **Structured Case Studies Modals**: Interactive 5-tab modals mapping project **Motivation (Why I Built It)**, **Problem Solved**, **Solution & Implementation**, **Technologies Used**, **Technical Challenges**, **Deployment**, and **Learnings**.
4. **Code Tab Simulators**: Pre-rendered file viewer tabs allowing engineering managers to inspect production-level database models (`schema.prisma`) and Edge route handlers (`middleware.ts`) instantly.
5. **Interactive GitHub Heatmap**: Renders custom contributions grids, top-languages percentage gauges, and live repo card links.

---

## 📂 Project Directory Structure

```
dixit-ankoliya-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom glow keyframes, scrollbar styles, backdrop morphs
│   │   ├── layout.tsx          # Font settings, JSON-LD wrapper, OpenGraph metadata
│   │   ├── page.tsx            # Main landing fold
│   │   ├── robots.ts           # Search crawler routes
│   │   └── sitemap.ts          # Search indexing sitemaps
│   ├── components/
│   │   ├── common/
│   │   │   ├── Icons.tsx       # SVG vector asset components
│   │   │   └── StructuredData.tsx # Automated Google Schema graph generator
│   │   └── ui/
│   │       └── Card.tsx        # Frosted glass dynamic shadow panel card wrapper
│   ├── constants/
│   │   └── portfolio.ts        # Unified copy repository (projects lists, experience details, skills)
│   ├── features/
│   │   └── portfolio/
│   │       └── components/
│   │           ├── About.tsx   # Bullets grid outlining developer aspirations
│   │           ├── CaseStudyModal.tsx # 5-tab system design dialog component
│   │           ├── Contact.tsx # Interactive validation message console
│   │           ├── Github.tsx  # Dynamic contribution heatmap and language gauges
│   │           ├── Hero.tsx    # Landing fold featuring Action CTA buttons and typewriter terminal
│   │           └── Projects.tsx # SaaS card grid featuring modal action routes
│   ├── lib/
│   │   └── utils.ts            # Tailwind Class merging helpers
│   └── types/
│       └── index.ts            # Project types & CaseStudy schema type definitions
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Local Installation & Setup

Ensure you have Node.js 18+ installed on your system.

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/dikshitlearning-dpatel/dixit-ankoliya-portfolio.git

# Navigate into directory
cd dixit-ankoliya-portfolio

# Install dependency files
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser. Next.js Turbopack hot reload is enabled automatically.

### 3. Build Verification
```bash
# Runs full static pre-rendering and TypeScript validations
npm run build
```

---

## 🌐 Deployment

The system is configured for automated continuous deployment (CI/CD) on Vercel:
* Commits on `main` trigger live production release compilation.
* Dynamic schema maps allow crawler bots to parse user information instantly.

---

## 📄 License
MIT License — © 2026 Dixit Ankoliya.
