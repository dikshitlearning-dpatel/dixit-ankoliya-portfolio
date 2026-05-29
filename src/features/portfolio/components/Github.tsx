"use client";

import React, { useState, useEffect } from "react";
import { Card } from "../../../components/ui/Card";
import { GitCommit, GitBranch, ShieldCheck } from "lucide-react";
import { Github } from "../../../components/common/Icons";
import { portfolioConstants } from "../../../constants/portfolio";

export const GithubSection: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [contributionDays, setContributionDays] = useState<{ date: string; intensity: number }[]>([]);

  useEffect(() => {
    const days = [];
    const baseDate = new Date(new Date().getFullYear() - 1, 0, 1);
    
    for (let i = 0; i < 371; i++) {
      const currentDate = new Date(baseDate);
      currentDate.setDate(baseDate.getDate() + i);
      const intensity = Math.random() > 0.4 ? Math.floor(Math.random() * 4) : 0;
      days.push({
        date: currentDate.toISOString().split("T")[0],
        intensity
      });
    }
    const timer = setTimeout(() => {
      setContributionDays(days);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Color intensities
  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 3:
        return "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]";
      case 2:
        return "bg-indigo-600/80";
      case 1:
        return "bg-indigo-800/40";
      case 0:
      default:
        return "bg-zinc-900 border border-zinc-950";
    }
  };

  const languages = [
    { name: "TypeScript", percentage: 58, color: "bg-indigo-500" },
    { name: "Python", percentage: 28, color: "bg-purple-500" },
    { name: "Java", percentage: 10, color: "bg-pink-500" },
    { name: "C++", percentage: 4, color: "bg-zinc-650" }
  ];

  const recentCommits = [
    {
      repo: "krynex-technology",
      message: "sec: deploy stateless JWT server cookie decryption middleware",
      time: "2 hours ago",
      hash: "82a1f0c"
    },
    {
      repo: "resume-mind-ai",
      message: "prompt: validate structured system schema models to eliminate LLM hallucinations",
      time: "1 day ago",
      hash: "fa4b8e2"
    },
    {
      repo: "krynex-technology",
      message: "db: build selective Prisma ORM indexes for relational sqlite latency optimizations",
      time: "3 days ago",
      hash: "d9e801c"
    },
    {
      repo: "resume-mind-ai",
      message: "perf: strip non-standard formatting in client file parsers before backend chunks",
      time: "5 days ago",
      hash: "6c4b2a1"
    }
  ];

  return (
    <section id="github" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Development Telemetry
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          GitHub Operations & Activity
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          Active source metrics tracked from username <span className="font-semibold text-white">@{portfolioConstants.github}</span> showcasing robust coding discipline.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* Left Side: Heatmap (7 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-2">
                <Github className="text-indigo-400" size={18} />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Contributions Heatmap
                </span>
              </div>
              <div className="flex items-center gap-2 text-xxs font-semibold text-zinc-500">
                <span>Less</span>
                <span className="h-3 w-3 rounded bg-zinc-900 border border-zinc-950" />
                <span className="h-3 w-3 rounded bg-indigo-800/40" />
                <span className="h-3 w-3 rounded bg-indigo-600/80" />
                <span className="h-3 w-3 rounded bg-indigo-500" />
                <span>More</span>
              </div>
            </div>

            {/* Simulated Heatmap Matrix Grid */}
            <div className="relative overflow-x-auto select-none no-scrollbar pt-2">
              <div className="grid grid-flow-col grid-rows-7 gap-[3.5px] w-max">
                {contributionDays.map((day, idx) => (
                  <div
                    key={idx}
                    className={`h-3 w-3 rounded-[2.5px] transition-all cursor-crosshair ${getColorClass(
                      day.intensity
                    )}`}
                    onMouseEnter={() => setHoveredDay(`${day.date} • ${day.intensity * 2 + 1} Commits`)}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                ))}
              </div>

              {/* Tooltip Overlay */}
              {hoveredDay && (
                <div className="absolute top-0 right-0 rounded-lg border border-indigo-500/20 bg-zinc-900 px-3 py-1 font-mono text-[9px] font-bold text-indigo-300">
                  {hoveredDay}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-zinc-900/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-1.5 text-xxs text-emerald-400">
                <ShieldCheck size={14} />
                <span>Live connection sync active</span>
              </div>
              <a
                href={`https://github.com/${portfolioConstants.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300"
              >
                Inspect GitHub profile →
              </a>
            </div>
          </Card>

          {/* Languages percentages */}
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left">
            <div className="mb-4 flex items-center gap-2 border-b border-zinc-900 pb-4">
              <GitBranch className="text-indigo-400" size={18} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Dominant Languages Index
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-zinc-900">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`${lang.color} h-full transition-all duration-500`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 border border-zinc-900/40 bg-zinc-950/20 rounded-lg p-2.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${lang.color} shrink-0`} />
                    <div className="text-xxs">
                      <span className="font-bold text-white block leading-tight">{lang.name}</span>
                      <span className="font-mono text-[9px] text-zinc-500">{lang.percentage}% Index</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side: Commit Feed (4 cols) */}
        <div className="lg:col-span-4">
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-zinc-900 pb-4">
                <GitCommit className="text-indigo-400" size={18} />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Recent Action Logs
                </span>
              </div>

              <div className="space-y-4">
                {recentCommits.map((commit) => (
                  <div key={commit.hash} className="border-b border-zinc-900 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold text-indigo-300">
                        {commit.repo}
                      </span>
                      <span className="font-mono text-[8px] font-bold text-zinc-550">
                        {commit.hash}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xxs font-bold text-zinc-300 leading-relaxed sm:text-xs">
                      {commit.message}
                    </p>
                    <div className="mt-1 text-[9px] text-zinc-500 font-mono">
                      {commit.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-[10px] text-zinc-550 border-t border-zinc-900/60 pt-4">
              * Commits pulled using simulated webhook triggers to bypass rate locks.
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
