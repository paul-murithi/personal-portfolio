"use client";

import React from "react";

const semesters = [
  { id: 1, label: "Trimester 1", theme: "Programming & Web Foundations" },
  { id: 2, label: "Trimester 2", theme: "Backend, Databases & Deployment" },
  { id: 3, label: "Trimester 3", theme: "Cloud, Containers & Light ML" },
  { id: 4, label: "Trimester 4", theme: "AI Integration & LLM Systems" },
  {
    id: 5,
    label: "Trimester 5",
    theme: "Collaboration & Multi-Modal Projects",
  },
  { id: 6, label: "Trimester 6", theme: "Capstone, Portfolio & Career Launch" },
];

// TODO: Update this each trimester
const currentSemester = 1;

const SemesterProgressBar = () => {
  const progressPercent = (currentSemester / semesters.length) * 100;

  return (
    <section className="w-full py-12 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 leading-tight">
              Academic & Certifications
            </h2>
            {/* <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Currently in{" "}
              <span className="text-cyan-300 font-semibold">
                {semesters[currentSemester - 1].label}
              </span>{" "}
              / {semesters.length}—{" "}
              <span className="text-gray-200">
                {semesters[currentSemester - 1].theme}
              </span>
            </p> */}
          </div>

          {/* <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400">
              Progress
              <div className="text-sm text-white font-medium">
                {Math.round(progressPercent)}%
              </div>
            </div>
          </div> */}
        </div>

        {/* Progress Bar Card */}
        {/* <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg"> */}
        {/* Progress with markers */}
        {/* <div
              className="relative h-3 bg-gray-800 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progressPercent)}
              aria-label="Semester progress"
            >
              <motion.div
                className="absolute top-0 left-0 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_6px_18px_rgba(6,182,212,0.12)]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div> */}

        {/* Markers */}
        <div className="mt-4 relative">
          {/* <div className="flex justify-between items-start text-xs text-gray-400 select-none pt-4">
                {semesters.map((sem) => {
                  const completed = sem.id <= currentSemester;
                  const isCurrent = sem.id === currentSemester;
                  return (
                    <div
                      key={sem.id}
                      className="flex flex-col items-center w-[6%] min-w-[48px]"
                    >
                      <motion.button
                        className={`relative -mt-3 w-3.5 h-3.5 rounded-full transition-all focus:outline-none ${
                          completed
                            ? "bg-cyan-400 shadow-[0_6px_14px_rgba(6,182,212,0.12)]"
                            : "bg-gray-700"
                        } ${
                          isCurrent ? "scale-110 ring-2 ring-cyan-400/30" : ""
                        }`}
                        title={`${sem.label}: ${sem.theme}`}
                        aria-current={isCurrent ? "true" : undefined}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 0 }}
                        // animate={isCurrent ? { y: -6 } : { y: 0 }}
                      />
                      <span
                        className={`mt-3 hidden md:block text-center ${
                          isCurrent ? "text-cyan-300 font-semibold" : ""
                        }`}
                      >
                        {sem.label}
                      </span>
                    </div>
                  );
                })}
              </div> */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 md:-bottom-12">
                <div className="hidden md:flex items-center gap-3 text-xs text-gray-300">
                  <span className="inline-block w-3 h-3 rounded-full bg-cyan-400" />
                  <span className="text-gray-400">Completed</span>
                  <span className="ml-4 inline-block w-3 h-3 rounded-full bg-gray-700" />
                  <span className="text-gray-400">Pending</span>
                </div>
              </div> */}
        </div>

        {/* Cards: Education + Certs */}
        <div
          id="education"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-850 border border-gray-800 rounded-xl p-5 hover:scale-[1.01] transition-transform">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    BSc in Information Technology
                  </h4>
                  <p className="text-cyan-300 text-sm mt-1">
                    Mount Kenya University (MKU)
                  </p>
                  <p className="text-gray-400 text-xs mt-1">2025 - 2027</p>
                </div>
                <div className="text-xs text-gray-400">Ongoing</div>
              </div>
              <p className="text-gray-300 text-sm mt-4">
                Continuing the academic journey with projects focused on cloud,
                APIs, and ML.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-850 border border-gray-800 rounded-xl p-5 hover:scale-[1.01] transition-transform">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Diploma in Computer Science
                  </h4>
                  <p className="text-cyan-300 text-sm mt-1">
                    Technical University of Mombasa
                  </p>
                  <p className="text-gray-400 text-xs mt-1">2021 - 2024</p>
                </div>
                <div className="text-sm text-cyan-300 font-medium">
                  Distinction
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-4">
                Graduated with{" "}
                <span className="font-semibold text-cyan-300">Distinction</span>
                . Focused on algorithms, systems programming, and software
                engineering best practices.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-850 border border-gray-800 rounded-xl p-5 h-full flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Software Engineering
                </h4>
                <p className="text-cyan-300 text-sm mt-1">ALX Africa</p>
                <p className="text-gray-400 text-xs mt-1">Verified</p>
                <p className="text-gray-300 text-sm mt-3">
                  Completed ALX’s 12-Month Software Engineering Program
                  specializing in Back-End Development.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <a
                  href="https://savanna.alxafrica.com/certificates/L5r26Hme7s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-cyan-400 text-black text-sm rounded-md font-medium hover:brightness-95"
                >
                  View Certification
                </a>
                <span className="inline-flex items-center gap-2 text-xs text-gray-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-80"
                  >
                    <path
                      d="M12 2v20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 7l7-5 7 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  ALX
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default SemesterProgressBar;
