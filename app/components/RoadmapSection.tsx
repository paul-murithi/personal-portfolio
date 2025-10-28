// JourneySnapshot.tsx
"use client";
import { motion } from "framer-motion";

const journeyYears = [
  {
    title: "Year 1 — Foundations & Machine Learning",
    period: "Sep 2025 – Apr 2026",
    summary:
      "Built a strong foundation in programming, math, and data handling while delivering my first ML-powered apps.",
    projects: [
      "Smart Campus Assistant",
      "Student Dropout Predictor",
      "Kenyan Market Trends Dashboard",
    ],
    skills: ["Python", "Git", "Pandas", "scikit-learn", "Flask", "SQL"],
    mantra: "Done, documented, deployed beats perfect.",
  },
  {
    title: "Year 2 — Deep Learning & Scalable Systems",
    period: "May – Dec 2026",
    summary:
      "Dived into deep learning with PyTorch, deployed scalable APIs, and began exploring LLMs & system design.",
    projects: [
      "Smart Recipe Recommender",
      "AI Summarization API",
      "News Recommender System",
    ],
    skills: ["PyTorch", "FastAPI", "Docker", "Redis", "Transformers"],
    mantra: "Scale it, ship it, show it.",
  },
  {
    title: "Year 3 — Capstone & Career Readiness",
    period: "Jan – Aug 2027",
    summary:
      "Focused on multi-modal AI, production-ready systems, and preparing for real-world engineering roles.",
    projects: [
      "ScholarMatch AI",
      "AI Resume Enhancer",
      "Capstone: AI Career Navigator",
    ],
    skills: ["Hugging Face", "System Design", "CI/CD", "Monitoring"],
    mantra: "Graduate with proof!",
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
            My Applied AI Journey
          </motion.h2>
          <p className="text-gray-400 mt-2">
            A year-by-year snapshot of my journey as a student building skills
            toward a career in applied AI.
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
                <h4 className="text-cyan-300 font-semibold mb-1">
                  🚀 Projects
                </h4>
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
