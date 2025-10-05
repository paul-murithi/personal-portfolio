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
  title: "Paul Murithi | AI & Backend Developer Portfolio",
  description:
    "Explore my 6-semester journey through BSc IT — building scalable backends, AI-driven apps, and real-world solutions. Documented growth. Clean code. Modern design.",
  keywords: [
    "AI Developer",
    "Backend Developer",
    "BSc IT",
    "Next.js",
    "Tailwind CSS",
    "Machine Learning",
    "Python",
    "FastAPI",
    "Flask",
    "React",
    "Portfolio",
    "Roadmap",
    "Student Developer",
    "Full Stack AI Engineer",
    "Paul Murithi",
  ],
  authors: [{ name: "Paul Murithi" }],
  creator: "Paul murithi",
  openGraph: {
    title: "Paul Murithi | AI Developer Portfolio",
    description:
      "A semester-driven portfolio showcasing projects, skills, and AI systems built throughout my BSc IT journey.",
    url: "", // TODO: Add domain URL
    siteName: "Paul Murithi | Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Murithi - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul murithi | AI Developer Portfolio",
    description:
      "A semester-driven journey in AI, backend systems, and full-stack development. Follow along as I build and grow.",
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
