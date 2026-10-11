// SkillsSection.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiCelery,
  SiFastapi,
  SiPydantic,
  SiNginx,
  SiPytest,
  SiJest,
  SiGit,
  SiSentry,
} from "react-icons/si";
import {
  FaCode,
  FaBrain,
  FaServer,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";
import { PageHeading } from "./PageHeading";

const skillCategories = [
  {
    category: "Languages & Runtimes",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "TypeScript", icon: <FaCode /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaCode /> },
    ],
  },

  {
    category: "Frameworks & APIs",
    skills: [
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "REST API Design", icon: <FaServer /> },
      { name: "Zod", icon: <FaCode /> },
      { name: "Pydantic", icon: <SiPydantic /> },
    ],
  },

  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL Transactions & ACID", icon: <FaBrain /> },
      { name: "Row-Level Locking", icon: <FaShieldAlt /> },
      { name: "Atomic Idempotency", icon: <FaBrain /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },

  {
    category: "Async & Messaging",
    skills: [
      { name: "BullMQ", icon: <FaServer /> },
      { name: "Celery", icon: <SiCelery /> },
      { name: "Event-Driven Architecture", icon: <FaServer /> },
      { name: "Webhook Processing", icon: <FaCode /> },
      { name: "Finite State Machines", icon: <FaBrain /> },
    ],
  },

  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker & Compose", icon: <SiDocker /> },
      { name: "GitHub Actions (CI/CD)", icon: <SiGithubactions /> },
      { name: "NGINX", icon: <SiNginx /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Sentry", icon: <SiSentry /> },
    ],
  },

  {
    category: "Testing & Reliability",
    skills: [
      { name: "Jest", icon: <SiJest /> },
      { name: "Pytest", icon: <SiPytest /> },
      { name: "Test-Driven Development", icon: <FaBrain /> },
      { name: "Integration Testing", icon: <FaCode /> },
      { name: "Chaos Testing", icon: <FaShieldAlt /> },
    ],
  },

  {
    category: "AI Integration",
    skills: [
      { name: "LLM Function Calling", icon: <FaRobot /> },
      { name: "Structured Output", icon: <FaCode /> },
      { name: "Prompt Engineering", icon: <FaBrain /> },
      { name: "Token & Cost Budgeting", icon: <FaCode /> },
    ],
  },
];

// Flatten all skills
const allSkills = skillCategories.flatMap((cat) => cat.skills);

// The skills shown by default on the "All" tab — cross-cutting highlights
const highlightSkills = [
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Redis",
  "Docker & Compose",
  "GitHub Actions (CI/CD)",
  "BullMQ",
  "Celery",
  "Webhook Processing",
  "LLM Function Calling",
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
        <PageHeading heading="Tech Stack & Skills" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {["All", ...skillCategories.map((c) => c.category)].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
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
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/8 transition"
              >
                <div className="text-cyan-400 text-2xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-center leading-snug">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show All toggle — only on All tab */}
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
