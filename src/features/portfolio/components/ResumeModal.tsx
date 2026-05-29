"use client";

import React, { useRef } from "react";
import { X, Printer, Download, MapPin, Mail, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioConstants } from "../../../constants/portfolio";

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md overflow-y-auto">
      
      {/* Dynamic Screen Sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative flex h-full max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-zinc-800 bg-zinc-950 text-left shadow-2xl overflow-hidden"
      >
        
        {/* Header toolbar Controls */}
        <div className="flex flex-col gap-4 border-b border-zinc-900 bg-zinc-950 p-5 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <div>
            <span className="rounded bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 font-mono text-[8px] font-bold text-indigo-400 uppercase">
              Verifiable CV Stamping
            </span>
            <h3 className="mt-1.5 text-base font-extrabold text-white">Digital Document Viewer</h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handlePrint}
              className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3.5 text-xs font-bold text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <Printer size={14} />
              Print CV
            </button>
            <button
              onClick={() => window.open(`https://github.com/${portfolioConstants.github}`, "_blank")}
              className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 text-xs font-bold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <Download size={14} />
              GitHub CV Profile
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/40 text-zinc-400 transition-all hover:border-zinc-800 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Digital Paper Container */}
        <div className="flex-1 overflow-y-auto bg-zinc-900/20 p-6 sm:p-12 print:p-0 print:bg-white">
          
          {/* Printable Sheet */}
          <div
            ref={resumeRef}
            className="mx-auto max-w-[210mm] rounded-xl border border-zinc-900 bg-zinc-950 p-8 sm:p-12 shadow-md print:shadow-none print:border-none print:bg-white print:p-0 print:text-black print:rounded-none"
          >
            
            {/* Header Identity Block */}
            <div className="border-b-2 border-zinc-900 pb-6 text-center print:border-zinc-300">
              <h1 className="text-3xl font-black tracking-tight text-white print:text-black">
                {portfolioConstants.name}
              </h1>
              <p className="mt-1.5 font-mono text-xs font-extrabold uppercase tracking-widest text-indigo-400 print:text-indigo-600">
                AI Engineer & Full Stack Developer
              </p>
              
              {/* Contact Nodes */}
              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[10px] text-zinc-400 print:text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-zinc-650 shrink-0" />
                  {portfolioConstants.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={12} className="text-zinc-650 shrink-0" />
                  {portfolioConstants.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={12} className="text-zinc-650 shrink-0" />
                  {portfolioConstants.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe size={12} className="text-zinc-650 shrink-0" />
                  dixit-ankoliya.vercel.app
                </span>
              </div>
            </div>

            {/* Core Sections Grid */}
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 print:grid-cols-12 print:gap-6">
              
              {/* Left Column: Experience & Projects (8 cols) */}
              <div className="md:col-span-8 space-y-8 print:col-span-8">
                
                {/* Profile Story summary */}
                <div className="space-y-3">
                  <h4 className="border-b border-zinc-900 pb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-600 print:border-zinc-200">
                    Summary Profile
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-450 print:text-zinc-700">
                    {portfolioConstants.about.story}
                  </p>
                </div>

                {/* Practical Experiences */}
                <div className="space-y-6">
                  <h4 className="border-b border-zinc-900 pb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-600 print:border-zinc-200">
                    Technical Staging Experience
                  </h4>
                  {portfolioConstants.experience.map((exp) => (
                    <div key={exp.organization} className="space-y-2">
                      <div className="flex flex-col justify-between sm:flex-row">
                        <span className="text-xs font-black text-white print:text-black">
                          {exp.role}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-zinc-500">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="font-mono text-[9px] text-indigo-300 print:text-indigo-500">
                        {exp.organization}
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-xxs text-zinc-450 print:text-zinc-700">
                        {exp.highlights.slice(0, 4).map((h, i) => (
                          <li key={i} className="leading-relaxed">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Projects Showcase */}
                <div className="space-y-6">
                  <h4 className="border-b border-zinc-900 pb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-600 print:border-zinc-200">
                    Core Software Deployments
                  </h4>
                  {portfolioConstants.projects.map((proj) => (
                    <div key={proj.id} className="space-y-2">
                      <div className="flex flex-col justify-between sm:flex-row">
                        <span className="text-xs font-black text-white print:text-black">
                          {proj.title}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-zinc-550">
                          {proj.type}
                        </span>
                      </div>
                      <p className="text-xxs text-zinc-450 print:text-zinc-700 leading-relaxed">
                        {proj.description}
                      </p>
                      <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-zinc-450 print:text-zinc-700">
                        {proj.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="leading-relaxed">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Skills, Education & Credentials (4 cols) */}
              <div className="md:col-span-4 space-y-8 print:col-span-4 border-l border-zinc-900 pl-6 print:border-zinc-200">
                
                {/* Core Skills chips list */}
                <div className="space-y-4">
                  <h4 className="border-b border-zinc-900 pb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-600 print:border-zinc-200">
                    Skills Index
                  </h4>
                  {portfolioConstants.skills.slice(0, 5).map((cat) => (
                    <div key={cat.category} className="space-y-1">
                      <div className="font-mono text-[9px] font-extrabold text-zinc-300 print:text-zinc-800 uppercase">
                        {cat.category}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((s) => (
                          <span
                            key={s.name}
                            className="rounded border border-zinc-900 bg-zinc-950/40 px-1.5 py-0.5 font-mono text-[8px] text-zinc-400 print:text-zinc-700 print:bg-zinc-100 print:border-zinc-200"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Education history */}
                <div className="space-y-4">
                  <h4 className="border-b border-zinc-900 pb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-600 print:border-zinc-200">
                    Academic Background
                  </h4>
                  {portfolioConstants.education.map((edu) => (
                    <div key={edu.degree} className="space-y-1">
                      <div className="text-xxs font-black text-white print:text-black">
                        {edu.degree}
                      </div>
                      <div className="font-mono text-[8px] text-zinc-400 print:text-zinc-650 leading-tight">
                        {edu.institution}
                      </div>
                      <div className="flex justify-between font-mono text-[8px] text-zinc-550">
                        <span>{edu.duration}</span>
                        {edu.score && <span className="font-bold text-white print:text-zinc-800">{edu.score}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications credentials */}
                <div className="space-y-4">
                  <h4 className="border-b border-zinc-900 pb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-600 print:border-zinc-200">
                    Industry Credentials
                  </h4>
                  {portfolioConstants.certifications.slice(0, 3).map((cert) => (
                    <div key={cert.title} className="space-y-0.5">
                      <div className="text-[10px] font-bold text-white print:text-black leading-snug">
                        {cert.title}
                      </div>
                      <div className="flex justify-between font-mono text-[8px] text-zinc-500">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Print Layout Styling rules */}
            <style jsx global>{`
              @media print {
                body {
                  background-color: white !important;
                  color: black !important;
                }
                .print\\:hidden {
                  display: none !important;
                }
                .print\\:text-black {
                  color: black !important;
                }
                .print\\:text-indigo-600 {
                  color: #4f46e5 !important;
                }
                .print\\:border-zinc-300 {
                  border-color: #d4d4d8 !important;
                }
                .print\\:border-zinc-200 {
                  border-color: #e4e4e7 !important;
                }
                .print\\:text-zinc-700 {
                  color: #3f3f46 !important;
                }
                .print\\:text-zinc-600 {
                  color: #52525b !important;
                }
                .print\\:bg-zinc-100 {
                  background-color: #f4f4f5 !important;
                }
              }
            `}</style>

          </div>
        </div>

        {/* Modal Footer (Screen View Only) */}
        <div className="border-t border-zinc-900 bg-zinc-950 p-5 text-center text-xxs text-zinc-550 print:hidden">
          Dixit Ankoliya CV document • Electronically stamped credentials
        </div>

      </motion.div>
    </div>
  );
};

export default ResumeModal;
