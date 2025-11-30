"use client";
import { motion } from "framer-motion";

type Props = {
  active: "semester" | "side";
  onChange: (value: "semester" | "side") => void;
};

const FILTERS = [
  { id: "semester", label: "Major Projects" },
  { id: "side", label: "Side Projects" },
];

/**
 * Filter bar for projects section
 * Displays pill style toggle buttons with active state animation
 */
export default function ProjectsFilter({ active, onChange }: Props) {
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 pb-6">
      {FILTERS.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id as "semester" | "side")}
            className={`relative text-sm sm:text-base font-medium px-5 py-2 rounded-full transition-all duration-300
              ${
                isActive
                  ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                  : "text-gray-400 hover:text-cyan-300 hover:bg-white/5"
              }
            `}
          >
            {filter.label}

            {/* underline highlight */}
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full ring-1 ring-cyan-500/40 pointer-events-none"
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
