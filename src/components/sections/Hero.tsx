import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Sparkles,
} from "lucide-react";
import Button from "../ui/Button";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
  {
    icon: <Linkedin size={18} />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <ExternalLink size={18} />,
    href: "https://behance.net",
    label: "Behance",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.4 7.2h-2.133c-.213 0-.533.107-.64.32L14.08 10.08l-1.547-2.56c-.107-.213-.427-.32-.64-.32H9.6C9.28 7.2 9.067 7.52 9.28 7.84l2.56 4.16-2.773 4.48c-.213.32 0 .747.427.747h2.24c.213 0 .533-.107.64-.32l1.6-2.667 1.6 2.667c.107.213.427.32.64.32h2.24c.427 0 .64-.427.427-.747L16.16 12 18.72 7.84c.213-.32 0-.64-.32-.64z" />
      </svg>
    ),
    href: "https://dribbble.com",
    label: "Dribbble",
  },
];

const roles = ["UI/UX Designer", "Frontend Developer", "Product Thinker"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f0f0f 0%, #1a0533 60%, #0a1628 100%)",
          }}
        />
        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.25)",
              color: "rgb(196,181,253)",
            }}
          >
            <Sparkles size={12} className="text-purple-400" />
            Available for freelance & collaboration
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#a855f7" }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="font-heading font-bold leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Designing Experiences{" "}
          <span className="block text-gradient">That Feel Effortless.</span>
        </motion.h1>

        {/* Typewriter subtext */}
        <motion.div
          variants={item}
          className="text-gray-400 text-lg md:text-xl mb-10 h-8"
        >
          <span className="text-gradient-blue font-medium">{displayed}</span>
          <span
            className="inline-block w-0.5 h-5 ml-0.5 align-middle"
            style={{ background: "#a855f7", animation: "pulse 1s infinite" }}
          />{" "}
          crafting intuitive digital products.
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed mb-12"
        >
          Based in Pokhara, Nepal — focused on building pixel-perfect interfaces
          and seamless user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            icon={<ExternalLink size={14} />}
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            href="/resume.pdf"
            icon={<Download size={14} />}
          >
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              whileHover={{
                scale: 1.1,
                y: -3,
                boxShadow: "0 8px 25px rgba(168,85,247,0.3)",
                borderColor: "rgba(168,85,247,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
