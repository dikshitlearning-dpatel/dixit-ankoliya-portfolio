"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { GraduationCap, Landmark, Trophy } from "lucide-react";
import { portfolioConstants } from "../../../constants/portfolio";

export const Education: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1 w-6 bg-indigo-500 rounded" />
          Academic Foundations
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Education & Milestones
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          A rigid computer science pathway incorporating statistics, database structures, and AI/ML algorithms.
        </p>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {portfolioConstants.education.map((edu, i) => (
          <Card
            key={edu.degree}
            className="flex flex-col justify-between border-zinc-900 bg-zinc-950/20 p-6 text-left hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1 h-full"
            delay={i * 0.1}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-850 shadow-inner">
                  {i === 0 ? (
                    <GraduationCap className="text-indigo-400" size={22} />
                  ) : (
                    <Landmark className="text-purple-400" size={20} />
                  )}
                </div>
                <span className="rounded-full bg-zinc-900 border border-zinc-850 px-3 py-1 font-mono text-[9px] font-bold text-zinc-400">
                  {edu.duration}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-extrabold text-white leading-snug">
                  {edu.degree}
                </h3>
                <p className="font-mono text-[9px] font-bold text-zinc-450 uppercase">
                  {edu.institution}
                </p>
              </div>
            </div>

            {/* Score block */}
            {edu.score && (
              <div className="mt-6 flex items-center gap-2 border-t border-zinc-900/80 pt-4">
                <Trophy size={14} className="text-indigo-400 shrink-0" />
                <span className="text-xxs font-bold text-zinc-300 sm:text-xs">
                  Result Score: <span className="text-white font-black">{edu.score}</span>
                </span>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
