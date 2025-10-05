"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  // Track scroll progress.
  const { scrollYProgress } = useScroll();

  // Apply smooth spring motion
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
