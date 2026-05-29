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
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 text-center sm:px-6">
      {/* Decorative gradient meshes */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-[80px]" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Trust Credibility Banner */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 px-4 py-1.5 backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span className="text-[10px] font-semibold tracking-wider text-indigo-300 uppercase sm:text-xxs">
          Seeking Internships & Entry-Level Roles
        </span>
      </motion.div>

      {/* Headline & Subheadline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl bg-gradient-to-b from-white via-zinc-150 to-zinc-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Building AI-Powered Web Applications & Scalable Digital Products
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg"
      >
        Hi, I&apos;m <span className="font-semibold text-white">DIXIT ANKOLIYA</span>. An AI Engineer & Full Stack Developer focused on building secure databases, orchestrating LLM interfaces, and shipping production-grade digital products.
      </motion.p>

      {/* Credibility Anchors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 flex flex-wrap justify-center gap-2.5"
      >
        {["Next.js 15 & React", "Prisma ORM & SQLite", "OpenAI & Claude API Integration", "AWS Staging"].map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-zinc-900 bg-zinc-950/40 px-3 py-1.5 text-xxs font-medium text-zinc-400 backdrop-blur-md"
          >
            {tag}
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
          View My Projects
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <button
          onClick={onOpenResume}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 text-sm font-bold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:text-white active:scale-95"
        >
          <FileText size={16} />
          View Digital Resume
        </button>
      </motion.div>

      {/* Social anchors quick bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 flex items-center gap-6"
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
        className="absolute bottom-6 flex flex-col items-center gap-2 text-xxs font-semibold tracking-widest text-zinc-500 uppercase"
      >
        <span>Scroll to Explore</span>
        <ArrowDown size={14} className="animate-bounce text-zinc-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
