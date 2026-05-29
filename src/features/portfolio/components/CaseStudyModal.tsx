"use client";

import React, { useState } from "react";
import { Project } from "../../../types";
import { X, ShieldAlert, Cpu, Layers, HardDrive, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "research" | "system" | "challenges" | "learnings">("overview");

  const tabs = [
    { id: "overview", name: "Overview", icon: <Layers size={14} /> },
    { id: "research", name: "Research & Strategy", icon: <HelpCircle size={14} /> },
    { id: "system", name: "System Design", icon: <HardDrive size={14} /> },
    { id: "challenges", name: "Technical Obstacles", icon: <ShieldAlert size={14} /> },
    { id: "learnings", name: "Key Takeaways", icon: <Cpu size={14} /> }
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3 }}
        className="relative flex h-full max-h-[85vh] w-full max-w-4xl flex-col rounded-2xl border border-zinc-800 bg-zinc-950 text-left shadow-2xl overflow-hidden"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950 p-6">
          <div>
            <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 font-mono text-[9px] font-bold text-indigo-400 uppercase">
              {project.type}
            </span>
            <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/40 text-zinc-400 transition-all hover:border-zinc-800 hover:text-white"
            aria-label="Close Case Study"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tab Selector Nav bar */}
        <div className="flex border-b border-zinc-900/60 bg-zinc-950/60 overflow-x-auto select-none no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border-b-2 px-6 py-4.5 font-mono text-[10px] font-bold uppercase transition-all duration-300 shrink-0 ${
                activeTab === tab.id
                  ? "border-indigo-500 bg-indigo-500/5 text-indigo-400"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto bg-zinc-950/40 p-6 sm:p-8">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  📌 Business Context
                </h4>
                <p className="text-xs text-zinc-400 sm:text-sm leading-relaxed">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                    🛑 Core Pain Points
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    ✅ Structured Resolution
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  🔍 Target Domain Research & Product Auditing
                </h4>
                <p className="text-xs text-zinc-400 sm:text-sm leading-relaxed">
                  Before writing lines of code, I performed complete strategy audits mapping out standard developer mistakes. Freshers often build simple mock dashboards that lack JWT auth validation or crash under dynamic parameters.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  🚀 Intended Business Impact
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="border-l-2 border-indigo-500 bg-indigo-500/5 p-4 rounded-r-lg">
                    <div className="text-xs font-bold text-white">Security Integrity</div>
                    <div className="mt-1 text-[10px] text-zinc-400">Stateless JWT session cookies ensure absolute security.</div>
                  </div>
                  <div className="border-l-2 border-purple-500 bg-purple-500/5 p-4 rounded-r-lg">
                    <div className="text-xs font-bold text-white">Optimized Queries</div>
                    <div className="mt-1 text-[10px] text-zinc-400">Selective database indexes remove multi-relational roundtrips.</div>
                  </div>
                  <div className="border-l-2 border-pink-500 bg-pink-500/5 p-4 rounded-r-lg">
                    <div className="text-xs font-bold text-white">AI Grading Validity</div>
                    <div className="mt-1 text-[10px] text-zinc-400">Strict schema mapping completely eliminates LLM hallucinations.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  🏗️ System Architecture & Data Flows
                </h4>
                <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-5 overflow-x-auto">
                  <pre className="font-mono text-[9px] text-zinc-400 leading-normal">
                    {project.id === "krynex"
                      ? `[Client UI] ──(Next.js Middleware Validate JWT)──► [Edge Server Actions]
                                                                │
   ┌────────────────────────────────────────────────────────────┘
   ▼
[Prisma Client Mapping] ◄──► [Optimized SQLite Store] ◄──► [AWS Cloud Integration]`
                      : `[Resume Upload PDF] ──► [Client Chunk Stripping] ──► [Structured payload JSON]
                                                                  │
   ┌──────────────────────────────────────────────────────────────┘
   ▼
[Next.js Server API Routes] ──(Context System Prompts)──► [OpenAI API JSON Validation]`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  🗃️ Technology Integrations
                </h4>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.caseStudy.architecture.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xxs text-zinc-400 sm:text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "challenges" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  ⚠️ Advanced Engineering Resolutions
                </h4>
                <p className="text-xs text-zinc-400 sm:text-sm leading-relaxed mb-4">
                  Building complex applications generates severe architectural issues. Here is how I solved core engineering blocks during execution:
                </p>
              </div>

              <div className="space-y-4">
                {project.caseStudy.challenges.map((challenge, index) => (
                  <div key={index} className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5">
                    <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-rose-500/10 font-mono text-[10px] text-rose-400 uppercase">
                        {index + 1}
                      </span>
                      Challenge & Resolving Strategy
                    </div>
                    <p className="text-xs text-zinc-450 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "learnings" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  🎓 Core Architectural Takeaways
                </h4>
                <p className="text-xs text-zinc-400 sm:text-sm leading-relaxed mb-4">
                  Every product deployed increases my code quality and structures my workflows:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {project.caseStudy.learnings.map((learning, index) => (
                  <div key={index} className="rounded-xl border border-zinc-900 bg-zinc-950/20 p-5 text-center flex flex-col justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-850 font-mono text-xs font-bold text-indigo-400 mx-auto mb-3">
                      {index + 1}
                    </div>
                    <p className="text-xxs text-zinc-400 sm:text-xs leading-normal">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col gap-4 border-t border-zinc-900 bg-zinc-950 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xxs text-zinc-550 sm:text-xs">
            © Dixit Ankoliya • Staged Live Deployment Active
          </div>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950/40 px-4 text-xs font-bold text-zinc-300 transition-all hover:border-zinc-700 hover:text-white"
            >
              GitHub Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 text-xs font-bold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Live Demo
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default CaseStudyModal;
