"use client";

import React, { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { devProcess } from "../../../constants/portfolio";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const DevProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1 w-6 bg-indigo-500 rounded" />
          Engineering Philosophy
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          The 6-Step Development Process
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          A structured lifecycle focused on clean architecture, thorough testing, and successful deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        {/* Left Side: Steps Selector */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {devProcess.map((step, i) => (
            <button
              key={step.phase}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                activeStep === i
                  ? "border-indigo-500 bg-indigo-500/5 shadow-lg shadow-indigo-500/5"
                  : "border-zinc-900 bg-zinc-950/20 hover:border-zinc-800"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                  activeStep === i
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-900 text-zinc-400"
                }`}
              >
                {step.phase}
              </div>
              <div className="flex flex-1 items-center justify-between">
                <span
                  className={`text-xs font-bold transition-colors sm:text-sm ${
                    activeStep === i ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {step.title}
                </span>
                <ChevronRight
                  size={16}
                  className={`text-zinc-555 transition-transform ${
                    activeStep === i ? "rotate-90 text-indigo-400" : ""
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Right Side: Detailed View */}
        <div className="lg:col-span-7">
          <Card className="h-full border-zinc-900 bg-zinc-950/20 p-8 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <span className="font-mono text-xxs font-bold uppercase tracking-wider text-indigo-400">
                  Phase {devProcess[activeStep].phase}
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-400 uppercase">
                  Active Standards
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-extrabold text-white sm:text-xl">
                  {devProcess[activeStep].title}
                </h3>
                <p className="text-xs text-zinc-400 sm:text-sm leading-relaxed">
                  {devProcess[activeStep].description}
                </p>
              </div>

              <div className="border-t border-zinc-900 pt-6">
                <div className="text-xs font-bold tracking-wider text-zinc-300 uppercase mb-4">
                  🎯 Key Deliverables
                </div>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {devProcess[activeStep].details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xxs text-zinc-450 sm:text-xs">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-[10px] text-zinc-550 italic border-t border-zinc-900/60 pt-4">
              * Development steps structured to ensure reliable features and maintainable code.
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default DevProcess;
