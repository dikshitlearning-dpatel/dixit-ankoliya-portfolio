"use client";

import React, { useState } from "react";
import { Project } from "../../../types";
import { Card } from "../../../components/ui/Card";
import { CaseStudyModal } from "./CaseStudyModal";
import { ArrowUpRight, FolderGit2, Info, Timer, ShieldCheck, Zap } from "lucide-react";
import { Github } from "../../../components/common/Icons";
import { portfolioConstants } from "../../../constants/portfolio";
import { AnimatePresence } from "framer-motion";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectMetrics = (id: string) => {
    if (id === "krynex") {
      return [
        { label: "Staged Uptime", value: "99.9%", icon: <ShieldCheck size={12} className="text-emerald-400" /> },
        { label: "Edge Latency", value: "0ms Filter", icon: <Timer size={12} className="text-indigo-400" /> }
      ];
    } else {
      return [
        { label: "ATS Match Score", value: "85+ Target", icon: <Zap size={12} className="text-amber-400" /> },
        { label: "LLM Processing", value: "1.2s Return", icon: <Timer size={12} className="text-pink-400" /> }
      ];
    }
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title block */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Featured Products
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          SaaS Case Studies
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          A collection of high-performance business networks and AI-powered systems engineered for strict production compliance.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {portfolioConstants.projects.map((project, i) => (
          <Card
            key={project.id}
            className="flex flex-col justify-between border-zinc-900 bg-zinc-950/20 p-6 text-left hover:border-zinc-800 transition-all duration-500 hover:-translate-y-1 h-full"
            delay={i * 0.15}
          >
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 font-mono text-[9px] font-bold text-indigo-400 uppercase">
                    {project.type}
                  </span>
                  <h3 className="mt-2.5 text-lg font-black text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-850 shadow-inner">
                  <FolderGit2 className="text-indigo-400" size={20} />
                </div>
              </div>

              {/* Glowing Performance Metrics Bar */}
              <div className="flex items-center gap-3">
                {getProjectMetrics(project.id).map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-900 bg-zinc-950/60 px-3 py-1.5 select-none"
                  >
                    {metric.icon}
                    <div className="text-[9px]">
                      <span className="text-zinc-500 block leading-none">{metric.label}</span>
                      <span className="font-mono font-bold text-white block mt-0.5 leading-none">{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed sm:text-sm">
                {project.description}
              </p>

              {/* Problem/Solution Indicators */}
              <div className="rounded-xl border border-zinc-900/60 bg-zinc-950 p-4.5 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  🛑 Core Problem Resolved
                </div>
                <p className="text-xxs text-zinc-450 leading-relaxed sm:text-xs">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-zinc-900 bg-zinc-950 px-2.5 py-1 font-mono text-[9px] font-medium text-zinc-450 uppercase"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="rounded-lg border border-zinc-900 bg-zinc-950 px-2.5 py-1 font-mono text-[9px] font-medium text-zinc-550 uppercase">
                    +{project.tech.length - 5} More
                  </span>
                )}
              </div>

            </div>

            {/* Action Triggers */}
            <div className="mt-8 flex items-center justify-between border-t border-zinc-900/80 pt-5">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-1.5 text-xxs font-bold uppercase tracking-wider text-indigo-400 transition-colors hover:text-indigo-300 sm:text-xs"
              >
                <Info size={14} />
                System Case Study
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-white"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xxs font-bold uppercase tracking-wider text-white transition-colors hover:text-indigo-400 sm:text-xs"
                >
                  Staging Demo
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Case Study Modals Container */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
