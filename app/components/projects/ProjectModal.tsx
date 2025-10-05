"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import Image from "next/image";
import { ProjectType } from "./projectsData";

type Props = {
  project: ProjectType | null;
  onClose: () => void;
};

/**
 * Project Modal — Displays expanded project info
 */
export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-2xl shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 transition"
              aria-label="Close Modal"
            >
              <FiX size={20} />
            </button>

            {/* image */}
            {project.image && (
              <div className="relative w-full h-56 rounded-lg overflow-hidden mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
            {project.semester && (
              <p className="text-sm text-cyan-400 mb-1 uppercase">
                {project.semester}
              </p>
            )}
            <p className="text-gray-300 mt-3 leading-relaxed">
              {project.details}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* personal Links */}
            <div className="flex items-center space-x-4 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  <FiGithub className="mr-1" /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  <FiExternalLink className="mr-1" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
