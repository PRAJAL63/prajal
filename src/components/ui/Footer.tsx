import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <Github size={16} />, href: "https://github.com", label: "GitHub" },
    {
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t px-6 md:px-12 py-10 overflow-hidden"
      style={{
        borderColor: "rgba(255,255,255,0.07)",
        background: "rgba(10,10,10,0.8)",
      }}
    >
      {/* Subtle gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <motion.span
              className="font-heading font-bold text-xl"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-gradient">Prajal Gurung</span>
            </motion.span>
            <p className="text-gray-500 text-xs">
              UI/UX Designer & Frontend Developer · Pokhara, Nepal
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["about", "skills", "projects", "contact"].map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-gray-500 hover:text-gray-300 text-xs capitalize transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-gray-600 text-xs">
            © {year} Prajal Gurung. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Built with React & TypeScript
            <Heart
              size={10}
              className="text-purple-500 fill-purple-500 mx-0.5"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
