"use client";

import React, { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { portfolioConstants } from "../../../constants/portfolio";

export const Skills: React.FC = () => {
  const categories = portfolioConstants.skills.map((c) => c.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeSkillsList = portfolioConstants.skills.find(
    (c) => c.category === activeCategory
  )?.skills || [];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      case "Advanced":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Intermediate":
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Technical Stack
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Core Skills & Capabilities
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          A modern tech stack focused on building secure databases, compiling reactive code, and deploying fast.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-bold tracking-tight transition-all duration-300 ${
              activeCategory === cat
                ? "border-indigo-500 bg-indigo-500/10 text-indigo-300 shadow-md shadow-indigo-500/5"
                : "border-zinc-900 bg-zinc-950/20 text-zinc-400 hover:border-zinc-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Display Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {activeSkillsList.map((skill, i) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-between border-zinc-900 bg-zinc-950/20 p-5 text-center transition-all duration-300 hover:scale-[1.02]"
            delay={i * 0.05}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-850 font-mono text-[10px] font-bold text-zinc-400 shadow-inner select-none uppercase">
              {skill.name.substring(0, 3)}
            </div>
            <div className="mt-4 space-y-2">
              <div className="text-xs font-bold text-white sm:text-sm tracking-tight">
                {skill.name}
              </div>
              <span
                className={`inline-block rounded-full border px-2 py-0.5 font-mono text-[8px] font-bold uppercase ${getLevelBadge(
                  skill.level
                )}`}
              >
                {skill.level}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
