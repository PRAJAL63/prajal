import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { NavItem } from "../../types";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? isDark
              ? "rgba(15,15,15,0.88)"
              : "rgba(250,250,250,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? isDark
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(0,0,0,0.07)"
            : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-heading font-bold text-lg tracking-tight cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-gradient">PG</span>
            <span
              className={`mx-1.5 ${isDark ? "text-white/20" : "text-zinc-300"}`}
            >
              ·
            </span>
            <span
              className={`text-sm font-medium ${isDark ? "text-white/60" : "text-zinc-500"}`}
            >
              Prajal
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? isDark
                      ? "text-white"
                      : "text-zinc-900"
                    : isDark
                      ? "text-zinc-400 hover:text-white"
                      : "text-zinc-500 hover:text-zinc-900"
                }`}
                whileHover={{ y: -1 }}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #a855f7, #3b82f6)",
                    }}
                    layoutId="activeNav"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* shadcn-style theme toggle */}
            <ThemeToggle />

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="hidden md:flex btn-primary !py-2 !px-4 !text-xs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
            </motion.a>

            {/* Mobile toggle */}
            <motion.button
              className={`md:hidden w-9 h-9 rounded-md flex items-center justify-center border transition-colors ${
                isDark
                  ? "border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  : "border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8"
            style={{
              background: isDark
                ? "rgba(10,10,10,0.97)"
                : "rgba(250,250,250,0.97)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-2 mt-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`py-4 px-5 rounded-xl text-lg font-medium transition-all ${
                    isDark
                      ? "text-zinc-300 hover:text-white hover:bg-white/5"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span className="text-gradient-blue mr-3 text-sm">
                    0{i + 1}.
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="btn-primary w-full justify-center"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
