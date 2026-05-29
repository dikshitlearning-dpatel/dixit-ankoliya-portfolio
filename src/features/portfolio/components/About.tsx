"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { BrainCircuit, Code2, Target } from "lucide-react";
import { portfolioConstants } from "../../../constants/portfolio";

export const About: React.FC = () => {
  const bulletIcons = [
    <Target className="text-indigo-400" size={20} key="solver" />,
    <BrainCircuit className="text-purple-400" size={20} key="native" />,
    <Code2 className="text-pink-400" size={20} key="mindset" />
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Header Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-start">
        
        {/* Left Side: Title & Narrative */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
            <span className="h-1 w-6 bg-indigo-500 rounded" />
            About Me
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Journey as a Digital Architect
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            {portfolioConstants.about.story}
          </p>
          <div className="rounded-xl border border-indigo-500/10 bg-indigo-500/5 p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
              ⚡ Career Objective
            </div>
            <p className="mt-2 text-xs text-zinc-400 sm:text-sm leading-relaxed">
              {portfolioConstants.about.aspirations}
            </p>
          </div>
        </div>

        {/* Right Side: Visual Strengths Grids */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {portfolioConstants.about.bullets.map((bullet, i) => (
            <Card
              key={bullet.title}
              className="flex items-start gap-4 border-zinc-900 bg-zinc-950/20 p-5 text-left transition-all hover:translate-x-1"
              delay={i * 0.1}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800">
                {bulletIcons[i]}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white sm:text-sm">{bullet.title}</h3>
                <p className="text-[10px] text-zinc-400 sm:text-xs leading-normal">
                  {bullet.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
