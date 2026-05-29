export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  learnings: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  caseStudy: CaseStudy;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  highlights: string[];
  tech: string[];
}

export interface WhyHireItem {
  title: string;
  description: string;
  icon: string;
}

export interface DevStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}
