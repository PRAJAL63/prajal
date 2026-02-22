import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative inline-flex h-9 w-9 items-center justify-center rounded-md
        border transition-colors duration-200 outline-none
        ${
          isDark
            ? "border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
            : "border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900"
        }
      `}
      whileTap={{ scale: 0.92 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
          className="absolute"
        >
          {isDark ? (
            <Moon size={15} strokeWidth={2} />
          ) : (
            <Sun size={15} strokeWidth={2} />
          )}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
};

export default ThemeToggle;
