import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { SectionWrapperProps } from "../../types";

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`section-padding ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" as const }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
