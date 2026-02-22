import React from "react";
import { motion } from "framer-motion";
import { useCustomCursor } from "../../hooks/useCustomCursor";

const CustomCursor: React.FC = () => {
  const { position, isHovering, isVisible } = useCustomCursor();

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          width: isHovering ? "40px" : "12px",
          height: isHovering ? "40px" : "12px",
          background: isHovering
            ? "rgba(168, 85, 247, 0.3)"
            : "rgba(255, 255, 255, 0.9)",
          border: isHovering ? "1.5px solid rgba(168, 85, 247, 0.8)" : "none",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: position.x - (isHovering ? 20 : 6),
          y: position.y - (isHovering ? 20 : 6),
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: "32px",
          height: "32px",
          border: "1px solid rgba(168, 85, 247, 0.4)",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: isVisible ? (isHovering ? 0 : 0.5) : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;
