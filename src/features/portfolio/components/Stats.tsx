"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { Cpu, Award, Terminal, Cloud } from "lucide-react";

export const Stats: React.FC = () => {
  const statsList = [
    {
      metric: "2+",
      label: "Completed Live Projects",
      description: "Deployed web applications and AI APIs",
      icon: <Terminal className="text-indigo-400" size={20} />
    },
    {
      metric: "15+",
      label: "Core Technologies",
      description: "Full stack engineering & modern databases",
      icon: <Cpu className="text-purple-400" size={20} />
    },
    {
      metric: "4",
      label: "Certifications",
      description: "IBM and Google validated specializations",
      icon: <Award className="text-pink-400" size={20} />
    },
    {
      metric: "Live",
      label: "Cloud Deployed",
      description: "Hosted on Vercel with active domains",
      icon: <Cloud className="text-emerald-400" size={20} />
    }
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statsList.map((stat, i) => (
          <Card
            key={stat.label}
            className="flex flex-col gap-2 border-zinc-900 bg-zinc-950/20 p-5 text-left md:p-6"
            delay={i * 0.1}
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl font-black tracking-tight text-white md:text-4xl">
                {stat.metric}
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900/60 border border-zinc-800">
                {stat.icon}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-200 sm:text-sm">{stat.label}</div>
              <div className="mt-1 text-[10px] text-zinc-550 sm:text-xs leading-normal">
                {stat.description}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Stats;
