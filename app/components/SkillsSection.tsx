// SkillsTabs.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaCode, FaBrain, FaServer } from "react-icons/fa";
import {
  SiFlask,
  SiScikitlearn,
  SiPostgresql,
  SiFastapi,
  SiDocker,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Programming & Foundations",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        semester: "Trimester 1",
        level: "Proficient",
      },
      {
        name: "Git & CLI",
        icon: <FaCode />,
        semester: "Trimester 1",
        level: "Proficient",
      },
      {
        name: "Data Structures & Algorithms",
        icon: <FaBrain />,
        semester: "Trimester 1",
        level: "Ongoing",
      },
      {
        name: "Problem Solving & Debugging",
        icon: <FaBrain />,
        semester: "Trimester 1",
        level: "Ongoing",
      },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      {
        name: "Flask",
        icon: <SiFlask />,
        semester: "Trimester 1–2",
        level: "Intermediate",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi />,
        semester: "Trimester 2",
        level: "Intermediate",
      },
      {
        name: "SQL / PostgreSQL",
        icon: <SiPostgresql />,
        semester: "Trimester 2",
        level: "Intermediate",
      },
      {
        name: "Authentication & JWT",
        icon: <FaServer />,
        semester: "Trimester 2",
        level: "Beginner",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        name: "Docker",
        icon: <SiDocker />,
        semester: "Trimester 3",
        level: "Intermediate",
      },
      {
        name: "CI/CD (GitHub Actions)",
        icon: <FaCode />,
        semester: "Trimester 3",
        level: "Ongoing",
      },
      {
        name: "Redis / Caching",
        icon: <FaServer />,
        semester: "Trimester 3",
        level: "Beginner",
      },
      {
        name: "Cloud Deployment (AWS / Render)",
        icon: <FaServer />,
        semester: "Trimester 3",
        level: "Ongoing",
      },
    ],
  },
  {
    category: "AI & Integrations",
    skills: [
      {
        name: "scikit-learn",
        icon: <SiScikitlearn />,
        semester: "Trimester 3",
        level: "Intermediate",
      },
      {
        name: "OpenAI API / GPT",
        icon: <FaBrain />,
        semester: "Trimester 4",
        level: "Planned",
      },
      {
        name: "Hugging Face Models",
        icon: <FaBrain />,
        semester: "Trimester 4",
        level: "Planned",
      },
      {
        name: "LangChain & Prompt Engineering",
        icon: <FaBrain />,
        semester: "Trimester 4",
        level: "Planned",
      },
    ],
  },
  {
    category: "Frontend & Collaboration",
    skills: [
      {
        name: "React",
        icon: <FaCode />,
        semester: "Trimester 5",
        level: "Planned",
      },
      {
        name: "Tailwind CSS",
        icon: <FaCode />,
        semester: "Trimester 5",
        level: "Planned",
      },
      {
        name: "Open Source & Team Workflow",
        icon: <FaServer />,
        semester: "Trimester 5",
        level: "Planned",
      },
    ],
  },
  {
    category: "System Design & Professional Practice",
    skills: [
      {
        name: "System Design",
        icon: <FaServer />,
        semester: "Trimester 6",
        level: "Planned",
      },
      {
        name: "Monitoring & Analytics",
        icon: <FaServer />,
        semester: "Trimester 6",
        level: "Planned",
      },
      {
        name: "Portfolio & Deployment Strategy",
        icon: <FaCode />,
        semester: "Trimester 6",
        level: "Planned",
      },
    ],
  },
];

// Flatten skills for "All" tab
const allSkills = skillCategories.flatMap((cat) => cat.skills);

const highlightSkills = [
  "Python",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "OpenAI API / GPT",
  "React",
  "System Design",
  "CI/CD (GitHub Actions)",
];

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const displayedSkills =
    activeTab === "All"
      ? showAll
        ? allSkills
        : allSkills.filter((s) => highlightSkills.includes(s.name))
      : skillCategories.find((cat) => cat.category === activeTab)?.skills || [];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Tech Stack Evolution
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my growing toolkit across programming, AI, backend, and
            deployment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {["All", ...skillCategories.map((c) => c.category)].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false); // reset showAll when switching tabs
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeTab === tab
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-cyan-300 hover:text-cyan-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (showAll ? "-all" : "-highlight")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {displayedSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <div className="text-cyan-400 text-2xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
                <div className="flex flex-col items-center mt-1 text-xs text-gray-400">
                  <span>{skill.semester}</span>
                  <span className="text-cyan-300">{skill.level}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show All toggle (only for All tab) */}
        {activeTab === "All" && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 px-6 py-2 rounded-full text-sm font-medium border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition"
            >
              {showAll ? "Show Less" : "Show All Skills"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsTabs;
