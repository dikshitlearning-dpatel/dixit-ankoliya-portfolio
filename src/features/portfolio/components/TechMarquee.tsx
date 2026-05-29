"use client";

import React from "react";

export const TechMarquee: React.FC = () => {
  const techs = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Python",
    "Tailwind CSS v4",
    "Node.js",
    "Prisma ORM",
    "SQLite",
    "OpenAI API",
    "Claude API",
    "AWS EC2",
    "AWS Cloud9",
    "Vercel",
    "Git",
    "GitHub",
    "JWT Security",
    "Object-Oriented Programming",
    "REST APIs"
  ];

  // Double the list to ensure seamless marquee repeating
  const doubledTechs = [...techs, ...techs];

  return (
    <section className="relative w-full overflow-hidden border-y border-zinc-900 bg-zinc-950/20 py-6 backdrop-blur-sm">
      <div className="absolute top-0 left-0 bottom-0 z-10 w-20 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-12 pl-12 hover:[animation-play-state:paused]">
        {doubledTechs.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-400 select-none"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/50" />
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {/* Injecting marquee animation if not already handled in globals.css */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
