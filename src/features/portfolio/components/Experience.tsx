"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";
import { portfolioConstants } from "../../../constants/portfolio";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1 w-6 bg-indigo-500 rounded" />
          Practical Lab
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Staged Practical Experience
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          Proven building capabilities backed by direct sandbox applications, API configurations, and cloud deployment pipelines.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative mx-auto max-w-3xl pl-6 sm:pl-8 before:absolute before:top-2 before:left-[11px] before:bottom-2 before:w-[2px] before:bg-zinc-900">
        {portfolioConstants.experience.map((exp, i) => (
          <div key={exp.organization} className="relative mb-12 last:mb-0">
            
            {/* Dot Indicator */}
            <div className="absolute top-1.5 -left-[27px] sm:-left-[31px] flex h-5 w-5 items-center justify-center rounded-full border border-indigo-500 bg-zinc-950 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
              <Briefcase size={10} />
            </div>

            {/* Inner Content Card */}
            <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left" delay={i * 0.1}>
              
              {/* Header Grid */}
              <div className="flex flex-col gap-4 border-b border-zinc-900 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-white sm:text-lg">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-indigo-400">
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-lg border border-zinc-850 bg-zinc-900/30 px-3 py-1 font-mono text-[10px] font-bold text-zinc-400 sm:text-xxs">
                  <Calendar size={11} className="text-zinc-550" />
                  {exp.duration}
                </div>
              </div>

              {/* Highlights List */}
              <div className="mt-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  🎯 Key Contributions
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xxs text-zinc-400 sm:text-xs leading-relaxed">
                      <CheckSquare size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Used */}
              <div className="mt-6 border-t border-zinc-900 pt-5">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  🛠️ Applied Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-zinc-900 bg-zinc-950 px-2.5 py-1 font-mono text-[9px] font-medium text-zinc-450 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </Card>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
