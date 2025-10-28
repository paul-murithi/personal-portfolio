"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// const currentSemester = {
//   title: "Semester 1 — Foundations of AI",
//   duration: "Sep – Dec 2025",
//   focus: "Building strong Python & DSA foundations for AI",
//   goals: [
//     "Fluent in Python",
//     "3 Mini Projects + 1 Smart Campus Assistant",
//     "Launch GitHub Portfolio",
//   ],
//   mantra: "Done, documented, deployed beats perfect.",
// };

const HeroProfileSection = () => {
  return (
    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/20 overflow-hidden"
        >
          <Image
            src="/potrait.webp"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hey, I&apos;m Paul Murithi
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 font-medium">
            BSc IT Student • Aspiring AI & Backend Engineer
          </h2>
          <p className="flex items-center justify-center text-gray-400 text-sm mt-2">
            <svg
              className="w-4 h-4 mr-2 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 6-9 11-9 11S3 16 3 10a9 9 0 1118 0z" />
              <circle cx="12" cy="10" r="3" fill="currentColor" />
            </svg>
            Mount Kenya University, Meru, kenya
          </p>

          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Passionate about building AI-powered tools and full-stack apps that
            solve real-world problems. Currently on a 2-year journey mastering
            AI, backend systems, and deployment at scale.
          </p>
        </motion.div>

        {/* TODO: I will add later */}
        {/* Semester Card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
        >
          <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
            {currentSemester.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 italic">
            {currentSemester.focus} ({currentSemester.duration})
          </p>

          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
            {currentSemester.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>

          <p className="text-sm text-gray-400 italic mt-4 border-t border-gray-800 pt-3">
            <span className="text-cyan-400">{currentSemester.mantra}</span>
          </p>
        </motion.div> */}

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row sm:space-x-6 items-center justify-center gap-4 pt-4"
        >
          <a
            href="mailto:paulmurithi518@gmail.com"
            className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            paulmurithi518@gmail.com
          </a>

          <a
            href="https://github.com/paul-murithi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="mr-2"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57v-2.235c-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22v3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12C24 5.37 18.63 0 12 0z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://linkedin.com/paul-murithi-a14482355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="mr-2"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProfileSection;
