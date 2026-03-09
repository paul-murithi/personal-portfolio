import { motion } from "framer-motion";

export const PageHeading = ({ heading }: { heading: string }) => {
  return (
    <motion.h2
      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {heading}
    </motion.h2>
  );
};
