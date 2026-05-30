import React from "react";
import { portfolioConstants } from "../../constants/portfolio";

export const StructuredData: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dixit-ankoliya-portfolio.vercel.app/#person",
        "name": portfolioConstants.name,
        "jobTitle": "Full Stack Developer (AI Integrations)",
        "url": "https://dixit-ankoliya-portfolio.vercel.app",
        "sameAs": [
          portfolioConstants.linkedin,
          `https://github.com/${portfolioConstants.github}`
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Self-Directed Practical Lab"
        },
        "description": portfolioConstants.about.story,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "AI Integrations",
          "Full Stack Development",
          "Next.js",
          "React",
          "TypeScript",
          "Python",
          "Prisma ORM",
          "SQLite",
          "OpenAI API",
          "AWS Cloud"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://dixit-ankoliya-portfolio.vercel.app/#website",
        "url": "https://dixit-ankoliya-portfolio.vercel.app",
        "name": `${portfolioConstants.name} - Portfolio`,
        "publisher": {
          "@id": "https://dixit-ankoliya-portfolio.vercel.app/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://dixit-ankoliya-portfolio.vercel.app/#profilepage",
        "url": "https://dixit-ankoliya-portfolio.vercel.app",
        "name": `${portfolioConstants.name} - Personal Portfolio`,
        "about": {
          "@id": "https://dixit-ankoliya-portfolio.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
