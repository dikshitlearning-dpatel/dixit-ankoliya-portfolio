"use client";

import React from "react";
import { Card } from "../../../components/ui/Card";
import { Award, ArrowUpRight } from "lucide-react";
import { portfolioConstants } from "../../../constants/portfolio";

export const Certifications: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Industry Credentials
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Verifiable Certifications
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          Specializations in Machine Learning models, cognitive logic foundations, and cloud automation validated by leading institutions.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioConstants.certifications.map((cert, i) => (
          <Card
            key={cert.title}
            className="flex flex-col justify-between border-zinc-900 bg-zinc-950/20 p-6 text-left hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1 h-full"
            delay={i * 0.1}
          >
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-850 shadow-inner">
                <Award className="text-indigo-400" size={22} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold text-white sm:text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-[9px] font-bold text-indigo-300">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 flex items-center justify-between border-t border-zinc-900/80 pt-4">
              <span className="font-mono text-[9px] font-bold text-zinc-550">
                Issued {cert.date}
              </span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-colors hover:text-indigo-400"
                >
                  Verify
                  <ArrowUpRight size={12} className="text-zinc-400" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
