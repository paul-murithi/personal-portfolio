"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import TiltWrapper from "./TiltWrapper";
import { ProjectType } from "./projectsData";
import ProjectPlaceholder from "./ProjectPlaceholder";

type Props = {
  project: ProjectType;
  index: number;
  onSelect: (project: ProjectType) => void;
};

export default function ProjectCard({ project, index, onSelect }: Props) {
  return (
    <TiltWrapper>
      <motion.div
        className="h-full flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden 
        shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, type: "spring", stiffness: 80 }}
        onClick={() => onSelect(project)}
      >
        {/* Image */}
        {/* Image */}
        <div className="relative w-full h-44 bg-gray-800 overflow-hidden group">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <ProjectPlaceholder
              title={project.title}
              status={project.status as any}
              tags={project.tags}
            />
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center justify-between">
            {project.semester && (
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                {project.semester}
              </span>
            )}

            {/*Status badge */}
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                project.status === "in-progress"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
              }`}
            >
              {project.status === "in-progress" ? "In Progress" : "Upcoming"}
            </span>
          </div>

          <h3 className="text-lg font-semibold mt-1 text-white line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 mt-2 flex-grow leading-relaxed line-clamp-3 min-h-[60px]">
            {project.description}
          </p>

          {/* Tag */}
          <motion.div
            className="flex flex-wrap gap-2 mt-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Links reserved space for consistency) */}
          <div className="flex items-center space-x-4 mt-4 text-gray-400 min-h-[24px]">
            {project.github && (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-cyan-400 transition"
              >
                <FiGithub className="mr-1" /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-cyan-400 transition"
              >
                <FiExternalLink className="mr-1" /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </TiltWrapper>
  );
}
