// JourneySnapshot.tsx
"use client";
import { motion } from "framer-motion";

const journeyYears = [
  {
    title: "Year 1 — Core Foundations & Backend Development",
    period: "Sep 2025 – Apr 2026",
    summary:
      "Building a strong foundation in Python, data structures, and web development. Progressing from coding fundamentals to creating and deploying full backend systems.",
    projects: ["Smart Campus Assistant", "Smart Admission Portal"],
    skills: [
      "Python",
      "Git",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Render",
      "REST APIs",
    ],
    mantra: "Build small, deploy early, learn fast.",
  },
  {
    title: "Year 2 — Cloud Engineering & AI Integration",
    period: "May – Dec 2026",
    summary:
      "Focusing on containerization, CI/CD, and scalable backend design while introducing AI-driven features through practical model integration and API-based intelligence.",
    projects: ["Smart Recommender API", "AI Resume Assistant"],
    skills: [
      "Docker",
      "CI/CD",
      "AWS",
      "Redis",
      "scikit-learn",
      "OpenAI API",
      "Hugging Face",
    ],
    mantra: "Deploy it, monitor it, make it smarter.",
  },
  {
    title: "Year 3 — Multi-Modal Systems & Career Launch",
    period: "Jan – Aug 2027",
    summary:
      "Planning to collaborate on open-source projects and build full-stack AI products that combine text, vision, and audio. Preparing to complete the capstone project and transition into real-world engineering roles.",
    projects: [
      "ScholarMatch AI",
      "Voice-to-Text Assistant",
      "Personal Portfolio v2",
    ],
    skills: [
      "React",
      "Tailwind",
      "LangChain",
      "OpenAI Whisper",
      "System Design",
      "CI/CD",
      "Cloud Deployment",
    ],
    mantra: "Graduate with proof — not promises.",
  },
];

const JourneySnapshot = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            My Full-Stack & AI Integration Journey
          </motion.h2>
          <p className="text-gray-400 mt-2">
            A trimester-by-trimester snapshot of my growth as a developer —
            learning to build modern web systems, deploy to the cloud, and
            integrate AI into real-world products.
          </p>
        </div>

        {/* Journey cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {journeyYears.map((year, i) => (
            <motion.div
              key={year.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col hover:shadow-cyan-500/10 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {year.title}
              </h3>
              <span className="text-sm text-gray-400 mb-3">{year.period}</span>

              <p className="text-gray-300 text-sm mb-4">{year.summary}</p>

              <div className="mb-3">
                <h4 className="text-cyan-300 font-semibold mb-1">Projects</h4>
                <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                  {year.projects.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="text-cyan-300 font-semibold mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {year.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-auto text-sm italic text-gray-400 border-t border-gray-800 pt-3">
                <span className="text-cyan-400">{year.mantra}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySnapshot;
