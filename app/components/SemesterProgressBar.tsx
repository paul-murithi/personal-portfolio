"use client";
import React from "react";
import { PageHeading } from "./PageHeading";

const SemesterProgressBar = () => {
  return (
    <section className="w-full py-12 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <PageHeading heading="Academic & Certifications" />

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
                  specializing in <b>Back-End Development.</b>
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
