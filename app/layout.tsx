import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Murithi | Full-Stack & AI Integration Developer",
  description:
    "Official portfolio of Paul Murithi — a BSc IT student and developer building modern web systems with Python, FastAPI, React, and AI integrations. A 6-trimester journey from code to cloud to intelligent apps.",
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "Cloud Engineer",
    "AI Integration",
    "FastAPI",
    "React",
    "Python",
    "Docker",
    "AWS",
    "Machine Learning APIs",
    "BSc IT",
    "Paul Murithi Portfolio",
    "Software Engineer Kenya",
    "Student Developer",
    "AI Resume Assistant",
    "ScholarMatch AI",
  ],
  authors: [{ name: "Paul Murithi" }],
  creator: "Paul Murithi",
  openGraph: {
    title: "Paul Murithi | Full-Stack Developer & AI Integrator",
    description:
      "Portfolio and roadmap of Paul Murithi — showcasing scalable backends, cloud deployments, and AI-enhanced web apps built through his BSc IT journey.",
    url: "", // TODO: add live domain URL once deployed
    siteName: "Paul Murithi | Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Murithi - Full Stack Developer & AI Integrator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Murithi |  Full-Stack + Cloud + AI Integration",
    description:
      "Building modern web systems and AI-powered solutions — follow Paul’s journey from BSc IT student to cloud-ready software engineer.",
    creator: "@__the__bird__",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          antialiased 
          bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950
          text-white
          min-h-screen
        `}
      >
        {/* Scroll-in Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-0">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
