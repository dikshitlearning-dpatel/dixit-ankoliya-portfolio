"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { GitBranch, ArrowUpRight, FolderHeart, ShieldCheck } from "lucide-react";
import { Github } from "../../../components/common/Icons";
import { portfolioConstants } from "../../../constants/portfolio";

export const GithubSection: React.FC = () => {
  const languages = [
    { name: "TypeScript", percentage: 72, color: "bg-indigo-500" },
    { name: "CSS/HTML", percentage: 18, color: "bg-purple-500" },
    { name: "Other", percentage: 10, color: "bg-zinc-650" }
  ];

  const repos = [
    {
      name: "resume-mind-ai",
      description: "AI-powered Resume Analyzer SaaS built with Next.js, TypeScript, and AI APIs to analyze resumes, calculate ATS scores, optimize job matching, generate smart resume improvements, and provide recruiter-level insights.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "Gemini API"],
      url: "https://github.com/dikshitlearning-dpatel/resume-mind-ai",
      learned: [
        "Structured AI response parsing utilizing API JSON Mode models.",
        "Server-side PDF and Word binary file parsing buffers."
      ]
    },
    {
      name: "krynex-technology",
      description: "A full-stack business management platform built to manage business information, secure administrative access, and manage client tasks.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "SQLite", "JWT Auth"],
      url: "https://github.com/dikshitlearning-dpatel/krynex-technology",
      learned: [
        "Secure cookie-based JWT validations inside Edge middleware.",
        "Relational Prisma models and cascade deletion parameters."
      ]
    },
    {
      name: "dixit-ankoliya-portfolio",
      description: "Premium developer portfolio showcasing interactive case study walkthroughs, database schemas, and recruiter scanners.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      url: "https://github.com/dikshitlearning-dpatel/dixit-ankoliya-portfolio",
      learned: [
        "JSON-LD structured search engine schema graphs.",
        "Performance optimization yielding Lighthouse scores of 95+."
      ]
    }
  ];

  const currentFocus = [
    { title: "Gemini API Parsers", desc: "Refining JSON output schema validations inside Resume Mind AI to eliminate format exceptions." },
    { title: "SQLite Connection Pools", desc: "Caching Prisma Client singletons inside Krynex Technology to prevent serverless SQLite database locks." },
    { title: "Algorithms & Databases", desc: "Practicing data structures on LeetCode and studying SQL relational indexes." },
    { title: "Next.js Rendering Paths", desc: "Studying App Router request caching mechanisms and Edge middleware execution limits." }
  ];

  return (
    <section id="github" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Engineering Proof
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Real GitHub Showcase
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          Source code repositories, exact tech stack selections, and technical takeaways.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* Left Side: Repositories List (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="text-xs font-bold text-zinc-550 uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
            <Github size={14} /> Pinned Repositories
          </div>
          {repos.map((repo) => (
            <Card
              key={repo.name}
              className="border-zinc-900 bg-zinc-950/20 p-6 text-left flex flex-col justify-between hover:border-zinc-800 transition-all"
              hoverGlow
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderHeart className="text-indigo-400" size={16} />
                    <span className="font-mono text-xs font-bold text-white sm:text-sm">{repo.name}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-[10px] font-mono"
                  >
                    Repository <ArrowUpRight size={12} />
                  </a>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed sm:text-xs">
                  {repo.description}
                </p>

                <div className="rounded-lg border border-zinc-900/60 bg-zinc-950/40 p-4">
                  <span className="text-[9px] font-bold text-indigo-400 font-mono block uppercase mb-1.5">
                    ⚙️ Technical Implementation Focus
                  </span>
                  <ul className="space-y-1.5 font-mono text-[9px] text-zinc-450 leading-relaxed sm:text-[10px]">
                    {repo.learned.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-indigo-500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900/60">
                {repo.tech.map((t) => (
                  <span key={t} className="rounded bg-zinc-900 border border-zinc-850 px-2 py-0.5 font-mono text-[8px] text-zinc-400 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Right Side: What I'm Building & Language index (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* What I'm Currently Building */}
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left flex-1">
            <div className="mb-4 flex items-center gap-2 border-b border-zinc-900 pb-4">
              <ShieldCheck className="text-emerald-400" size={18} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Current Activity
              </span>
            </div>

            <div className="space-y-4">
              <span className="text-[9px] font-bold text-zinc-500 font-mono block uppercase">
                Active Learning & Builds
              </span>
              <div className="space-y-4 font-mono text-[10px] text-zinc-400">
                {currentFocus.map((focus, idx) => (
                  <div key={idx} className="border-b border-zinc-900 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-white font-bold block mb-1 text-[10px] sm:text-xs">
                      ✓ {focus.title}
                    </span>
                    <span className="text-[9px] text-zinc-500 leading-normal block">
                      {focus.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Language Index */}
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left">
            <div className="mb-4 flex items-center gap-2 border-b border-zinc-900 pb-4">
              <GitBranch className="text-indigo-400" size={18} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Language Index
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-zinc-900">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`${lang.color} h-full transition-all duration-500`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                ))}
              </div>
              
              <div className="flex flex-col gap-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between border-b border-zinc-900/40 pb-2 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${lang.color}`} />
                      <span className="text-xxs font-bold text-zinc-300">{lang.name}</span>
                    </div>
                    <span className="font-mono text-[9px] font-bold text-zinc-550">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
