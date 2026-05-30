"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { Cpu, Layers, Zap, Target } from "lucide-react";
import { whyHireMe } from "../../../constants/portfolio";

export const WhyHireMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="text-indigo-400" size={24} />;
      case "Layers":
        return <Layers className="text-purple-400" size={24} />;
      case "Zap":
        return <Zap className="text-pink-400" size={24} />;
      case "Target":
      default:
        return <Target className="text-emerald-400" size={24} />;
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title block */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Conversion Grid
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Why I Bring Value to Your Team
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          A BSc IT student who builds real applications, learns by shipping code, and brings practical full stack skills to engineering teams.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyHireMe.map((item, i) => (
          <Card
            key={item.title}
            className="flex flex-col gap-4 border-zinc-900 bg-zinc-950/20 p-6 text-left transition-all duration-300 hover:border-zinc-800 hover:-translate-y-1"
            delay={i * 0.1}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
              {getIcon(item.icon)}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white sm:text-base">{item.title}</h3>
              <p className="text-xxs text-zinc-400 sm:text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyHireMe;
