import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Paul Murithi | Backend Engineer",
  description:
    "Portfolio of Paul Murithi — a backend engineer building production-grade systems in Node.js/TypeScript and Python. Specialising in FinTech infrastructure, transactional backends, distributed systems, and practical AI integration.",
  keywords: [
    "Backend Engineer",
    "Backend Developer",
    "FinTech Engineer",
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Distributed Systems",
    "Payment Systems",
    "Paul Murithi",
    "Paul Murithi Portfolio",
    "Software Engineer Kenya",
    "SimPesa",
    "SokoFlow",
    "WhatsApp Bot",
    "M-Pesa Developer",
  ],
  authors: [{ name: "Paul Murithi" }],
  creator: "Paul Murithi",
  openGraph: {
    title: "Paul Murithi | Backend Engineer",
    description:
      "Portfolio of Paul Murithi — backend engineer focused on FinTech infrastructure, transactional systems, and distributed backends. Built SimPesa and SokoFlow from scratch.",
    url: "",
    siteName: "Paul Murithi | Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Murithi - Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Murithi | Backend Engineer",
    description:
      "Building production-grade backends in Node.js/TypeScript and Python — payment systems, WhatsApp bots, and practical AI integration.",
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NF92KB5EL8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NF92KB5EL8');
        `,
          }}
        />
      </head>

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
        <Analytics />
      </body>
    </html>
  );
}
