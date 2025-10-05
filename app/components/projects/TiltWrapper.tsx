"use client";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * A reusable 3D tilt wrapper for cards
 * Handles cursor movement and smooth return animation.
 */
export default function TiltWrapper({
  children,
  intensity = 10,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: (y / rect.height) * intensity,
      y: -(x / rect.width) * intensity,
    });
  };

  const resetTilt = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}
