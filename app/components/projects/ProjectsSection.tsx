"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsFilter from "./ProjectsFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { majorProjects, minorProjects, ProjectType } from "./projectsData";
import { PageHeading } from "../PageHeading";

/**
 * ProjectsSection — main controller of the projects section
 * Handles filtering, mapping, and modal management
 */
export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"semester" | "side">(
    "semester",
  );
  const [selected, setSelected] = useState<ProjectType | null>(null);

  const displayedProjects =
    activeFilter === "semester" ? majorProjects : minorProjects;

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.07),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <PageHeading heading="Featured Projects" />

        {/* Filter */}
        <ProjectsFilter active={activeFilter} onChange={setActiveFilter} />

        {/* Projects Grid main */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayedProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onSelect={setSelected}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal viewer */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
