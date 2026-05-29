"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, FileText, Mail, Terminal as TermIcon, ShieldCheck } from "lucide-react";
import { Github, Linkedin } from "../../../components/common/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConstants } from "../../../constants/portfolio";

interface HeroProps {
  onOpenResume: () => void;
}

const CONSOLE_SCRIPT = [
  "$ dixit-cli --init",
  "🚀 Personal system loaded successfully.",
  "Specializations: [AI Pipelines, Full Stack REST]",
  "Staged SaaS: [Krynex, ResumeMind]",
  "Status: Pulse active for Roles & Internships"
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);

  useEffect(() => {
    if (currentLineIdx < CONSOLE_SCRIPT.length) {
      const timer = setTimeout(() => {
        setConsoleLines((prev) => [...prev, CONSOLE_SCRIPT[currentLineIdx]]);
        setCurrentLineIdx((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentLineIdx]);

  return (
    <section className="relative flex min-h-[98vh] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-24 text-center sm:px-6">
      
      {/* Apple-Grade morphing background mesh */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-[450px] w-[450px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-[100px] sm:h-[650px] sm:w-[650px] animate-morph-glow" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Grid wrapper splits Content & Mock Console on Desktop */}
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        
        {/* Left Side: Copywriting Content & Fast-Scanner */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Pulsing Availability Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/5 px-4 py-1.5 backdrop-blur-md animate-glow-pulse"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[9px] font-extrabold tracking-wider text-indigo-300 uppercase sm:text-[10px]">
              Available for Internships & Roles
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            AI Engineer &amp; Full Stack Developer Building Real-World Digital Products
          </h1>

          {/* Subheadline */}
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg max-w-2xl">
            BSc IT (AI/ML) student building production-ready web applications using AI integrations, cloud deployment, and modern engineering workflows.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-[10px] font-bold tracking-wider text-indigo-400 font-mono sm:text-xs">
            <span className="flex items-center gap-1 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
              ✓ Live Deployed Projects
            </span>
            <span className="flex items-center gap-1 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
              ✓ AI Applications
            </span>
            <span className="flex items-center gap-1 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
              ✓ Cloud Deployment
            </span>
            <span className="flex items-center gap-1 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
              ✓ Production Workflow
            </span>
          </div>

          {/* Recruiter 8-Second Fast-Scanner Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4 border-t border-zinc-900/60">
            <div className="border border-zinc-900 bg-zinc-950/20 rounded-xl p-3 backdrop-blur-sm">
              <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">WHO</span>
              <span className="text-[10px] font-extrabold text-white block">Dixit Ankoliya</span>
              <span className="text-[9px] text-zinc-450 block leading-tight mt-0.5">AI & Full Stack</span>
            </div>
            <div className="border border-zinc-900 bg-zinc-950/20 rounded-xl p-3 backdrop-blur-sm">
              <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">WHAT</span>
              <span className="text-[10px] font-extrabold text-white block">AI Web SaaS</span>
              <span className="text-[9px] text-zinc-450 block leading-tight mt-0.5">Secure Databases</span>
            </div>
            <div className="border border-zinc-900 bg-zinc-950/20 rounded-xl p-3 backdrop-blur-sm">
              <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">PROOF</span>
              <span className="text-[10px] font-extrabold text-white block">2+ Staged Apps</span>
              <span className="text-[9px] text-zinc-450 block leading-tight mt-0.5">IBM Certified</span>
            </div>
            <div className="border border-zinc-900 bg-zinc-950/20 rounded-xl p-3 backdrop-blur-sm">
              <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">STATUS</span>
              <span className="text-[10px] font-extrabold text-emerald-400 block flex items-center gap-1">
                Active <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              </span>
              <span className="text-[9px] text-zinc-450 block leading-tight mt-0.5">Ahmedabad Base</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 text-sm font-bold text-white transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 text-sm font-bold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:text-white active:scale-95"
            >
              <FileText size={16} />
              Download Resume
            </button>

            <a
              href="#contact"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-850 bg-zinc-900/10 px-6 text-sm font-bold text-zinc-400 transition-all duration-300 hover:border-zinc-800 hover:text-white active:scale-95"
            >
              Let&apos;s Connect
            </a>
          </div>

        </div>

        {/* Right Side: Floating Avatar & Mock CLI Shell (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Glossy Monogram Badge card */}
          <div className="animate-float-slow mx-auto lg:mx-0 flex h-24 w-full items-center gap-4 rounded-2xl border border-zinc-900 bg-zinc-950/20 p-5 backdrop-blur-md shadow-2xl">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-zinc-950 font-mono text-sm font-black text-white shadow-inner select-none uppercase">
              DA
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 opacity-100" />
            </div>
            <div className="space-y-1 text-left">
              <span className="font-mono text-[9px] font-bold text-indigo-400 uppercase tracking-widest block">
                Engineering Specializer
              </span>
              <h3 className="text-sm font-black text-white leading-snug">DIXIT ANKOLIYA</h3>
              <p className="text-[10px] text-zinc-500 leading-none">BSc Information Technology (AI/ML)</p>
            </div>
          </div>

          {/* Mock developer CLI console */}
          <div className="rounded-2xl border border-zinc-850 bg-zinc-950 p-5 shadow-2xl font-mono text-xxs text-zinc-450 leading-relaxed text-left w-full h-[200px] flex flex-col justify-between">
            <div className="space-y-2 flex-1">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-2">
                <div className="flex items-center gap-1.5">
                  <TermIcon className="text-indigo-400" size={14} />
                  <span className="font-bold text-white text-[10px]">dixit-terminal.sh</span>
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-rose-500/40" />
                  <span className="h-2 w-2 rounded-full bg-amber-500/40" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
                </div>
              </div>

              <div className="space-y-1.5">
                <AnimatePresence>
                  {consoleLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={
                        i === 0
                          ? "text-zinc-500"
                          : i === 1
                          ? "text-emerald-400 flex items-center gap-1"
                          : i === 4
                          ? "text-indigo-300 font-bold"
                          : "text-zinc-300"
                      }
                    >
                      {i === 1 && <ShieldCheck size={11} className="shrink-0" />}
                      {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {currentLineIdx < CONSOLE_SCRIPT.length && (
                  <span className="h-3 w-1.5 bg-indigo-500 inline-block animate-pulse ml-0.5 align-middle" />
                )}
              </div>
            </div>

            <div className="text-[9px] text-zinc-600 border-t border-zinc-900/60 pt-3 flex justify-between">
              <span>GLS University FCAIT</span>
              <span>100% Cloud Sandbox</span>
            </div>
          </div>

        </div>

      </div>

      {/* Social anchors quick bar (Absolute bottom left) */}
      <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-6 z-10">
        <a
          href={`https://github.com/${portfolioConstants.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-white"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href={portfolioConstants.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={`mailto:${portfolioConstants.email}`}
          className="text-zinc-500 transition-colors hover:text-white"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Scroll indicator (Absolute bottom right) */}
      <div className="absolute bottom-6 right-6 hidden sm:flex flex-col items-right gap-1 text-[9px] font-bold tracking-widest text-zinc-550 uppercase z-10">
        <span>Explore Work Details</span>
      </div>

    </section>
  );
};

export default Hero;
