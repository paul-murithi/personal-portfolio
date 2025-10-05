"use client";

import { motion } from "framer-motion";

const semesters = [
  { id: 1, label: "Semester 1", theme: "Foundations of AI" },
  { id: 2, label: "Semester 2", theme: "Data & ML Basics" },
  { id: 3, label: "Semester 3", theme: "Deep Learning & APIs" },
  { id: 4, label: "Semester 4", theme: "AI Systems & Cloud" },
  { id: 5, label: "Semester 5", theme: "LLMs & Projects" },
  { id: 6, label: "Semester 6", theme: "Capstone & Internships" },
];

// TODO: Update this each trimester
const currentSemester = 1;

const SemesterProgressBar = () => {
  const progressPercent = (currentSemester / semesters.length) * 100;

  return (
    <section className="w-full py-10 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
            🎓 Academic Journey Progress
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Currently in{" "}
            <span className="text-cyan-400 font-medium">
              {semesters[currentSemester - 1].label}
            </span>{" "}
            — {semesters[currentSemester - 1].theme}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Markers */}
        <div className="flex justify-between mt-3 text-xs text-gray-500">
          {semesters.map((sem) => (
            <div
              key={sem.id}
              className={`flex flex-col items-center ${
                sem.id === currentSemester ? "text-cyan-400 font-semibold" : ""
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full mb-1 ${
                  sem.id <= currentSemester
                    ? "bg-cyan-400 shadow-cyan-400/50 shadow-sm"
                    : "bg-gray-700"
                }`}
              ></span>
              <span className="hidden md:inline-block">{sem.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemesterProgressBar;
