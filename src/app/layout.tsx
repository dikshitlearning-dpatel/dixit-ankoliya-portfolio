import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/common/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dixit Ankoliya | Full Stack Developer | AI Integrations",
  description:
    "BSc IT (AI/ML) student building real-world web applications using Next.js, TypeScript, Prisma, SQL, and AI integrations. Focused on creating scalable software and gaining practical engineering experience.",
  keywords: [
    "DIXIT ANKOLIYA",
    "AI Developer Ahmedabad",
    "Full Stack Developer Gujarat",
    "Software Developer Portfolio",
    "AI Engineer India",
    "GLS University student",
    "Krynex Technology",
    "Resume Mind AI"
  ],
  authors: [{ name: "Dixit Ankoliya" }],
  openGraph: {
    title: "Dixit Ankoliya | Full Stack Developer | AI Integrations",
    description: "Building Full Stack Applications with AI Integrations",
    url: "https://dixit-ankoliya-portfolio.vercel.app",
    siteName: "Dixit Ankoliya Portfolio",
    images: [
      {
        url: "https://dixit-ankoliya-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dixit Ankoliya | Full Stack Developer | AI Integrations"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dixit Ankoliya | Full Stack Developer | AI Integrations",
    description: "Building Full Stack Applications with AI Integrations",
    images: ["https://dixit-ankoliya-portfolio.vercel.app/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
