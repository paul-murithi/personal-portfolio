// SkillsTabs.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaBrain, FaServer } from "react-icons/fa";
import { SiPostgresql, SiDocker } from "react-icons/si";
import { PageHeading } from "./PageHeading";

const skillCategories = [
  {
    category: "Backend Engineering",
    skills: [
      {
        name: "Node.js & TypeScript",
        icon: <FaServer />,
      },
      {
        name: "Express.js",
        icon: <FaServer />,
      },
      {
        name: "REST API Design",
        icon: <FaCode />,
      },
      {
        name: "Structured Logging",
        icon: <FaCode />,
      },
    ],
  },

  {
    category: "Databases & Transaction Systems",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "SQL Transactions",
        icon: <FaBrain />,
      },
      {
        name: "Row-Level Locking",
        icon: <FaBrain />,
      },
      {
        name: "Atomic Operations & Idempotency",
        icon: <FaBrain />,
      },
    ],
  },

  {
    category: "Async Systems & Queues",
    skills: [
      {
        name: "Redis",
        icon: <FaServer />,
      },
      {
        name: "BullMQ",
        icon: <FaServer />,
      },
      {
        name: "Event-Driven Architecture",
        icon: <FaCode />,
      },
      {
        name: "Webhook Processing",
        icon: <FaCode />,
      },
    ],
  },

  {
    category: "DevOps & Infrastructure",
    skills: [
      {
        name: "Docker",
        icon: <SiDocker />,
      },
      {
        name: "Docker Compose",
        icon: <SiDocker />,
      },
      {
        name: "Linux CLI & Git",
        icon: <FaCode />,
      },
      {
        name: "Environment Automation",
        icon: <FaServer />,
      },
    ],
  },

  {
    category: "System Design & Reliability",
    skills: [
      {
        name: "Transactional State Machines",
        icon: <FaBrain />,
      },
      {
        name: "Concurrency Control",
        icon: <FaBrain />,
      },
      {
        name: "Resilient System Design",
        icon: <FaServer />,
      },
      {
        name: "Failure Simulation",
        icon: <FaServer />,
      },
    ],
  },

  {
    category: "Frontend & Developer Experience",
    skills: [
      {
        name: "React",
        icon: <FaCode />,
      },
      {
        name: "Tailwind CSS",
        icon: <FaCode />,
      },
      {
        name: "Developer Tooling",
        icon: <FaCode />,
      },
      {
        name: "Technical Documentation",
        icon: <FaCode />,
      },
    ],
  },
];

// Flatten skills for "All" tab
const allSkills = skillCategories.flatMap((cat) => cat.skills);

const highlightSkills = [
  "Node.js & TypeScript",
  "PostgreSQL",
  "Docker",
  "Redis",
  "BullMQ",
  "Concurrency Control",
  "Transactional State Machines",
  "Webhook Processing",
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
