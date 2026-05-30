"use client";

import React, { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { Send, CheckCircle2, AlertCircle, Copy, Check, FileText } from "lucide-react";
import { Github, Linkedin } from "../../../components/common/Icons";
import { portfolioConstants } from "../../../constants/portfolio";
import confetti from "canvas-confetti";

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) nextErrors.message = "Message details are required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConstants.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      
      {/* Title */}
      <div className="mb-12 space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
          <span className="h-1 w-6 bg-indigo-500 rounded" />
          Gateway
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-xl text-xs text-zinc-400 sm:text-sm">
          Open to internships, freelance work, and entry-level software engineering opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-stretch">
        
        {/* Left Card: Quick Details (5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                ⚡ Direct Channels
              </div>

              <div className="space-y-3">
                {/* Email */}
                <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-3.5">
                  <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">
                    Email Address
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-white truncate">
                      {portfolioConstants.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-850 bg-zinc-900/60 text-zinc-400 transition-colors hover:text-white"
                      aria-label="Copy Email"
                    >
                      {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={portfolioConstants.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-3.5 flex items-center justify-between hover:border-zinc-800 transition-all group"
                >
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">
                      LinkedIn Profile
                    </span>
                    <span className="font-mono text-xs font-semibold text-white truncate group-hover:text-indigo-400 transition-colors">
                      dixit-ankoliya-527ba0360
                    </span>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-850 bg-zinc-900/60 text-zinc-400 group-hover:text-white">
                    <Linkedin size={14} />
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={`https://github.com/${portfolioConstants.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-3.5 flex items-center justify-between hover:border-zinc-800 transition-all group"
                >
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">
                      GitHub Profile
                    </span>
                    <span className="font-mono text-xs font-semibold text-white truncate group-hover:text-indigo-400 transition-colors">
                      dikshitlearning-dpatel
                    </span>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-850 bg-zinc-900/60 text-zinc-400 group-hover:text-white">
                    <Github size={14} />
                  </div>
                </a>

                {/* Resume Download */}
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="w-full rounded-xl border border-zinc-900 bg-zinc-950/40 p-3.5 flex items-center justify-between hover:border-zinc-800 transition-all group text-left"
                  >
                    <div>
                      <span className="text-[9px] font-bold text-zinc-500 block uppercase mb-1">
                        Resume Document
                      </span>
                      <span className="font-mono text-xs font-semibold text-white truncate group-hover:text-indigo-400 transition-colors">
                        View &amp; Save CV
                      </span>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-850 bg-zinc-900/60 text-zinc-400 group-hover:text-white">
                      <FileText size={14} />
                    </div>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6 text-[9px] text-zinc-550 border-t border-zinc-900/60 pt-4 leading-normal">
              * Operations Base: {portfolioConstants.location} • {portfolioConstants.phone}
            </div>
          </Card>
        </div>

        {/* Right Card: Form (7 cols) */}
        <div className="md:col-span-7">
          <Card className="border-zinc-900 bg-zinc-950/20 p-6 text-left sm:p-8 h-full">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col h-full justify-between">
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-bold text-zinc-450 uppercase block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-rose-400 block">{errors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] font-bold text-zinc-450 uppercase block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-rose-400 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[10px] font-bold text-zinc-450 uppercase block">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunities / project review"
                    className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Message details */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] font-bold text-zinc-450 uppercase block">
                    Detailed Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Introduce yourself, your company, and how we can collaborate..."
                    className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] text-rose-400 block">{errors.message}</span>
                  )}
                </div>
              </div>

              {/* Status Alert Panels */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                
                <div className="flex-1">
                  {status === "success" && (
                    <div className="flex items-center gap-1.5 text-xxs font-semibold text-emerald-400">
                      <CheckCircle2 size={14} />
                      <span>Message received successfully!</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-1.5 text-xxs font-semibold text-rose-400">
                      <AlertCircle size={14} />
                      <span>Submission failure. Re-verify fields.</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 text-xs font-bold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-95 disabled:opacity-50 shrink-0"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={12} />
                </button>
              </div>

            </form>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Contact;
