import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiFigma,
  SiAdobephotoshop,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";
import { Layers, MousePointer2, Type, SlidersHorizontal } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const designSkills: Skill[] = [
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
  { name: "Wireframing", icon: <Layers size={18} />, color: "#a855f7" },
  { name: "Prototyping", icon: <MousePointer2 size={18} />, color: "#a855f7" },
  { name: "Typography", icon: <Type size={18} />, color: "#a855f7" },
  { name: "Visual Design", icon: <SlidersHorizontal size={18} />, color: "#a855f7" },
];

const devSkills: Skill[] = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#8b949e" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#818cf8" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#BB4B96" },
];

interface SkillChipProps {
  skill: Skill;
  index: number;
  isInView: boolean;
}

const SkillChip: React.FC<SkillChipProps> = ({ skill, index, isInView }) => (
  <motion.div
    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default
      bg-zinc-100 dark:bg-zinc-900/60
      border border-zinc-200/80 dark:border-zinc-800/70
      hover:border-purple-400/40 dark:hover:border-purple-500/40
      hover:shadow-[0_4px_20px_rgba(168,85,247,0.1)]
      transition-all duration-300 select-none"
    initial={{ opacity: 0, scale: 0.88 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
    whileHover={{ y: -2 }}
  >
    <span className="text-[1.1rem] leading-none" style={{ color: skill.color }}>
      {skill.icon}
    </span>
    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
      {skill.name}
    </span>
  </motion.div>
);

interface CategoryPanelProps {
  title: string;
  label: string;
  skills: Skill[];
  isInView: boolean;
  delay: number;
}

const CategoryPanel: React.FC<CategoryPanelProps> = ({
  title,
  label,
  skills,
  isInView,
  delay,
}) => (
  <motion.div
    className="flex flex-col"
    initial={{ opacity: 0, y: 24 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    <div className="mb-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500 mb-1">
        {label}
      </p>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-2.5">
      {skills.map((skill, i) => (
        <SkillChip key={skill.name} skill={skill} index={i} isInView={isInView} />
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-purple-500 text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Skills & Expertise
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            What I <span className="text-gradient">Work With</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <CategoryPanel
            label="Design"
            title="Visual & UX Design"
            skills={designSkills}
            isInView={isInView}
            delay={0.1}
          />
          <CategoryPanel
            label="Development"
            title="Frontend & Full-Stack"
            skills={devSkills}
            isInView={isInView}
            delay={0.2}
          />
        </div>

        <motion.p
          className="mt-12 text-zinc-400 dark:text-zinc-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          Always learning · Currently exploring{" "}
          <span className="text-purple-500">Three.js</span> &{" "}
          <span className="text-blue-400">Next.js</span>
        </motion.p>

      </div>
    </SectionWrapper>
  );
};

export default Skills;
