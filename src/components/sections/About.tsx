import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const timeline = [
  {
    year: "2021 – 2025",
    degree: "Bachelor of Computer Application",
    short: "BCA",
    institution: "LA Grandee International College",
    location: "Pokhara, Nepal",
  },
  {
    year: "2019 – 2021",
    degree: "Higher Secondary Education",
    short: "+2 Science",
    institution: "Science Stream",
    location: "Pokhara, Nepal",
  },
];

const stats = [
  { value: "4+", label: "Projects", sub: "Shipped" },
  { value: "2+", label: "Years", sub: "Designing" },
  { value: "∞", label: "Passion", sub: "Always" },
];

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  });

  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* ── Header ───────────────────────────────── */}
        <motion.div className="mb-14" {...fade(0)}>
          <p className="text-purple-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            About Me
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-[2.8rem] leading-tight text-zinc-900 dark:text-white">
            Designing with <span className="text-gradient">Empathy,</span>
            <br />
            Building with Precision.
          </h2>
        </motion.div>

        {/* ── Main 2-col grid ───────────────────────── */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-14">
          {/* Left — Bio */}
          <motion.div {...fade(0.08)}>
            <p className="text-zinc-600 dark:text-zinc-300 text-[1.05rem] leading-[1.85] mb-5">
              Hey, I'm{" "}
              <span className="text-zinc-900 dark:text-white font-semibold">
                Prajal Gurung
              </span>{" "}
              — a UI/UX Designer and Frontend Developer based in Pokhara, Nepal.
              I bridge the gap between thoughtful design and clean code.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
              Passionate about crafting interfaces that are intuitive,
              accessible, and visually engaging. I care as much about the
              experience behind the screen as the pixels on it.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/70 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                <MapPin size={11} className="text-purple-500" />
                Pokhara, Nepal
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200/60 dark:border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
            </div>

            {/* Email quick link */}
            <a
              href="mailto:grgprajal01@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
            >
              grgprajal01@gmail.com
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>

          {/* Right — Education */}
          <motion.div {...fade(0.14)}>
            <div className="flex items-center gap-2 mb-7">
              <GraduationCap size={15} className="text-purple-500" />
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-zinc-400 dark:text-zinc-500">
                Education
              </p>
            </div>

            <div className="relative space-y-7">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent" />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.12,
                    ease: "easeOut",
                  }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-[11px] h-[11px] rounded-full bg-purple-500 ring-4 ring-purple-500/20 dark:ring-purple-500/15" />

                  <span className="block text-[11px] font-semibold text-purple-500 tracking-wider mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-zinc-900 dark:text-white text-sm font-semibold leading-snug">
                    {item.degree}
                    <span className="ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400">
                      {item.short}
                    </span>
                  </h4>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-1">
                    {item.institution} · {item.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ─────────────────────────────── */}
        <motion.div
          className="grid grid-cols-3 gap-0 pt-10 border-t border-zinc-200 dark:border-zinc-800"
          {...fade(0.22)}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-6 ${
                i < 2 ? "border-r border-zinc-200 dark:border-zinc-800" : ""
              }`}
            >
              <div className="text-3xl font-bold text-gradient mb-1 font-heading">
                {stat.value}
              </div>
              <div className="text-zinc-900 dark:text-white text-sm font-semibold">
                {stat.label}
              </div>
              <div className="text-zinc-400 dark:text-zinc-500 text-xs mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
