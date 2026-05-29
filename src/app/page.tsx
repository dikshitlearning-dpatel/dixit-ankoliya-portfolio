"use client";

import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../features/portfolio/components/Hero";
import Stats from "../features/portfolio/components/Stats";
import Skills from "../features/portfolio/components/Skills";
import Projects from "../features/portfolio/components/Projects";
import Experience from "../features/portfolio/components/Experience";
import Certifications from "../features/portfolio/components/Certifications";
import Education from "../features/portfolio/components/Education";
import GithubSection from "../features/portfolio/components/Github";
import Contact from "../features/portfolio/components/Contact";
import Footer from "../components/common/Footer";
import ParticleBg from "../components/common/ParticleBg";
import ResumeModal from "../features/portfolio/components/ResumeModal";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Floating particles */}
      <ParticleBg />

      {/* Frosted header rail */}
      <Navbar />

      <main className="relative z-10 space-y-16">
        {/* Core segments stacking */}
        <Hero onOpenResume={() => setResumeOpen(true)} />
        
        <Stats />
        
        <Projects />
        
        <Skills />
        
        <GithubSection />
        
        <Experience />
        
        <Certifications />
        
        <Education />
        
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Branded Footer */}
      <Footer />

      {/* Digital Paper CV Mockup Modal */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal onClose={() => setResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
