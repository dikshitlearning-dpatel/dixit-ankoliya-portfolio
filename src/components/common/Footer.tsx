"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioConstants } from "../../constants/portfolio";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-zinc-950/80 py-12 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {portfolioConstants.name}
            </div>
            <p className="text-center text-xs text-zinc-500 md:text-left">
              AI Engineer & Full Stack Developer • {portfolioConstants.location}
            </p>
          </div>

          {/* Social Anchors */}
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${portfolioConstants.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/40 text-zinc-400 transition-all duration-300 hover:border-zinc-800 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioConstants.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/40 text-zinc-400 transition-all duration-300 hover:border-zinc-800 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${portfolioConstants.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/40 text-zinc-400 transition-all duration-300 hover:border-zinc-800 hover:text-white"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 rounded-full border border-zinc-850 bg-zinc-900/30 px-3.5 py-1.5 text-xxs font-medium text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:text-white"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp
              size={11}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-zinc-900/80 pt-8 text-center text-[10px] text-zinc-650 md:flex-row">
          <p>© {new Date().getFullYear()} Dixit Ankoliya. Crafted with elite precision using Next.js & TailwindCSS v4.</p>
          <p className="mt-2 md:mt-0">Open-source under MIT license.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
