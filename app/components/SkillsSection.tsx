// SkillsTabs.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaCode,
  FaBrain,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiNumpy,
  SiFlask,
  SiScikitlearn,
  SiPostgresql,
  SiPytorch,
  SiFastapi,
  SiDocker,
  SiTensorflow,
} from "react-icons/si";

// Skills grouped by categories
const skillCategories = [
  {
    category: "Programming & Foundations",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        semester: "Sem 1",
        level: "Proficient",
      },
      {
        name: "Git & CLI",
        icon: <FaCode />,
        semester: "Sem 1",
        level: "Proficient",
      },
      {
        name: "NumPy",
        icon: <SiNumpy />,
        semester: "Sem 1",
        level: "Intermediate",
      },
      {
        name: "Matplotlib",
        icon: <FaBrain />,
        semester: "Sem 1",
        level: "Intermediate",
      },
      {
        name: "DS&A + Math",
        icon: <FaBrain />,
        semester: "Sem 1",
        level: "Ongoing",
      },
    ],
  },
  {
    category: "Data & ML",
    skills: [
      {
        name: "Pandas",
        icon: <FaDatabase />,
        semester: "Sem 2",
        level: "Intermediate",
      },
      {
        name: "scikit-learn",
        icon: <SiScikitlearn />,
        semester: "Sem 2",
        level: "Intermediate",
      },
      {
        name: "SQL / Postgres",
        icon: <SiPostgresql />,
        semester: "Sem 2",
        level: "Intermediate",
      },
      {
        name: "Visualization (Seaborn)",
        icon: <FaBrain />,
        semester: "Sem 2",
        level: "Beginner",
      },
    ],
  },
  {
    category: "Deep Learning & AI",
    skills: [
      {
        name: "PyTorch",
        icon: <SiPytorch />,
        semester: "Sem 3",
        level: "Intermediate",
      },
      {
        name: "CNNs / RNNs",
        icon: <FaBrain />,
        semester: "Sem 3",
        level: "Beginner",
      },
      {
        name: "Transformers",
        icon: <SiTensorflow />,
        semester: "Sem 4",
        level: "Beginner",
      },
      {
        name: "Hugging Face",
        icon: <FaBrain />,
        semester: "Sem 4",
        level: "Beginner",
      },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      {
        name: "Flask",
        icon: <SiFlask />,
        semester: "Sem 1–2",
        level: "Intermediate",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi />,
        semester: "Sem 3",
        level: "Intermediate",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        semester: "Sem 3",
        level: "Beginner",
      },
      {
        name: "Redis",
        icon: <FaServer />,
        semester: "Sem 3",
        level: "Beginner",
      },
      {
        name: "System Design",
        icon: <FaServer />,
        semester: "Sem 4",
        level: "Beginner",
      },
    ],
  },
  {
    category: "DevOps & Deployment",
    skills: [
      { name: "CI/CD", icon: <FaCode />, semester: "Sem 5", level: "Planned" },
      {
        name: "Monitoring",
        icon: <FaServer />,
        semester: "Sem 6",
        level: "Planned",
      },
    ],
  },
];

// Flatten skills for "All" tab
const allSkills = skillCategories.flatMap((cat) => cat.skills);

// Pick core highlights for compact view
const highlightSkills = [
  "Python",
  "Pandas",
  "scikit-learn",
  "PyTorch",
  "FastAPI",
  "Docker",
  "Transformers",
  "System Design",
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
