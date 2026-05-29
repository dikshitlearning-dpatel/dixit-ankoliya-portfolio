"use client";

import React from "react";
import { ArrowDown, FileText, ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "../../../components/common/Icons";
import { motion } from "framer-motion";
import { portfolioConstants } from "../../../constants/portfolio";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 text-center sm:px-6">
      
      {/* Decorative gradient meshes */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] sm:h-[550px] sm:w-[550px]" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[280px] w-[280px] rounded-full bg-purple-500/10 blur-[90px]" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Desktop Floating Technology Widgets */}
      <div className="absolute top-1/4 left-10 lg:left-20 -z-10 hidden md:flex flex-col gap-6 select-none pointer-events-none">
        {/* Next.js + Prisma card */}
        <div className="animate-float-slow rounded-xl border border-zinc-800 bg-zinc-950/40 p-4.5 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <span className="font-mono text-xxs font-bold text-zinc-300">Next.js 15 + Prisma</span>
          </div>
          <p className="mt-1 text-[10px] text-zinc-500 text-left">Scale & Type-Safety</p>
        </div>
        
        {/* AWS Staging card */}
        <div className="animate-float-fast translate-x-6 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4.5 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xxs font-bold text-zinc-300">AWS Cloud9</span>
          </div>
          <p className="mt-1 text-[10px] text-zinc-500 text-left">EC2 Sandbox Deploys</p>
        </div>
      </div>

      <div className="absolute top-1/3 right-10 lg:right-20 -z-10 hidden md:flex flex-col gap-6 select-none pointer-events-none">
        {/* OpenAI card */}
        <div className="animate-float-medium rounded-xl border border-zinc-800 bg-zinc-950/40 p-4.5 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-xxs font-bold text-zinc-300">OpenAI API</span>
          </div>
          <p className="mt-1 text-[10px] text-zinc-500 text-left">Structured JSON Mode</p>
        </div>

        {/* SQLite card */}
        <div className="animate-float-slow -translate-x-6 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4.5 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            <span className="font-mono text-xxs font-bold text-zinc-300">JWT Auth Middleware</span>
          </div>
          <p className="mt-1 text-[10px] text-zinc-500 text-left">Stateless Edge Filtering</p>
        </div>
      </div>

      {/* Trust Credibility Availability Banner */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/5 px-4 py-1.5 backdrop-blur-md animate-glow-pulse relative"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span className="text-[10px] font-bold tracking-wider text-indigo-300 uppercase sm:text-xxs">
          Available for Internships & Full-Time Roles
        </span>
      </motion.div>

      {/* Headline & Subheadline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl bg-gradient-to-b from-white via-zinc-200 to-zinc-450 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
      >
        Building AI-Powered Software That Solves Real Problems
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg"
      >
        Hi, I&apos;m <span className="font-semibold text-white">DIXIT ANKOLIYA</span>. An AI Engineer & Full Stack Developer. I bypass typical fresher theory to construct secure, high-uptime digital architectures and smart agentic pipelines.
      </motion.p>

      {/* Credibility Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-2xl"
      >
        {[
          "✓ Live Deployed SaaS",
          "✓ Structured AI Systems",
          "✓ Relational Schema Design",
          "✓ JWT Stateless Middleware"
        ].map((badge) => (
          <span
            key={badge}
            className="rounded-lg border border-zinc-900 bg-zinc-950/40 px-3.5 py-1.5 text-xxs font-bold text-indigo-400 backdrop-blur-md shadow-inner select-none uppercase tracking-wider"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
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
          Contact Me
        </a>
      </motion.div>

      {/* Social anchors quick bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-14 flex items-center gap-6"
      >
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
      </motion.div>

      {/* Bottom Scroll Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 flex flex-col items-center gap-2 text-xxs font-semibold tracking-widest text-zinc-550 uppercase"
      >
        <span>Explore Work Details</span>
        <ArrowDown size={14} className="animate-bounce text-zinc-650" />
      </motion.div>
    </section>
  );
};

export default Hero;
