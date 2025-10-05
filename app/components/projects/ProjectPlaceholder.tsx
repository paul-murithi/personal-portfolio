// ProjectPlaceholder.tsx
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaPython, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiFlask,
  SiScikitlearn,
  SiPostgresql,
  SiPytorch,
  SiFastapi,
  SiDocker,
  SiTensorflow,
} from "react-icons/si";

// Map tech tags → icons
const tagIcons: Record<string, IconType> = {
  Python: FaPython,
  Flask: SiFlask,
  "scikit-learn": SiScikitlearn,
  SQL: FaDatabase,
  Postgres: SiPostgresql,
  PyTorch: SiPytorch,
  FastAPI: SiFastapi,
  Docker: SiDocker,
  Transformers: SiTensorflow,
  API: FaServer,
  APIs: FaServer,
  CLI: FaCode,
};

interface PlaceholderProps {
  title: string;
  status?: "in-progress" | "planned" | "done";
  tags?: string[];
}

const statusColors: Record<string, string> = {
  "in-progress": "bg-yellow-500/80 text-black",
  planned: "bg-gray-500/80 text-white",
  done: "bg-green-500/80 text-white",
};

const ProjectPlaceholder = ({ title, status, tags }: PlaceholderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileHover={{ opacity: 1, scale: 1.02 }}
      className="relative flex flex-col items-center justify-center h-full w-full 
        rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 
        border border-white/10 backdrop-blur-sm overflow-hidden p-4"
    >
      <span className="text-center text-gray-200 text-sm font-semibold">
        {title}
      </span>

      {/* Mini stack icons */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {tags.slice(0, 4).map((tag) => {
            const Icon = tagIcons[tag] || FaCode;
            return (
              <div
                key={tag}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-cyan-300 text-lg"
                title={tag}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      )}

      {/* Status badge */}
      {status && (
        <span
          className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-medium ${statusColors[status]}`}
        >
          {status.replace("-", " ")}
        </span>
      )}
    </motion.div>
  );
};

export default ProjectPlaceholder;
