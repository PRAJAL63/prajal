import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Play,
  BookOpen,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import type { Project } from "../../types";

const projects: Project[] = [
  {
    id: 1,
    title: "PopCorn Box",
    year: "2024",
    description:
      "Subscription-based movie streaming platform with full authentication, content discovery, and a cinematic UI experience built with a full-stack approach.",
    tools: ["Figma", "React", "Node.js", "MongoDB"],
    status: "completed",
    links: {
      live: "https://popcornbox.demo",
      behance: "https://behance.net",
    },
    gradient: "from-orange-500/20 to-red-500/10",
    icon: "🎬",
  },
  {
    id: 2,
    title: "Lovify – AI Dating App",
    year: "2025",
    description:
      "AI-powered dating app concept with smart matching algorithms, personality-based compatibility scores, and a refined, modern UI designed entirely in Figma.",
    tools: ["Figma", "UI/UX Design", "Prototyping"],
    status: "completed",
    links: {
      behance: "https://behance.net",
    },
    gradient: "from-pink-500/20 to-rose-500/10",
    icon: "💜",
  },
  {
    id: 3,
    title: "Samjhana – Reminder App",
    year: "2025",
    description:
      "A minimal, elegant reminder application designed to help users build habits and stay on top of their daily tasks. Currently in active development.",
    tools: ["React", "TypeScript", "Figma"],
    status: "ongoing",
    links: {},
    gradient: "from-blue-500/20 to-cyan-500/10",
    icon: "🔔",
  },
  {
    id: 4,
    title: "Personal Portfolio v1",
    year: "2023",
    description:
      "My first personal portfolio website built from scratch using pure HTML, CSS, and JavaScript. Fully responsive with smooth animations and a dark theme.",
    tools: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    links: {
      live: "https://prajal.dev",
    },
    gradient: "from-purple-500/20 to-indigo-500/10",
    icon: "🌐",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isInView,
}) => {
  return (
    <motion.div
      className="group relative glass-card overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const,
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Gradient top bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace("/20", "").replace("/10", "")} opacity-60`}
      />

      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 60%)`,
          boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.2)",
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${project.gradient}`}
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg leading-tight">
                {project.title}
              </h3>
              <span className="text-gray-500 text-xs">{project.year}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.status === "ongoing" && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1"
                style={{
                  background: "rgba(59,130,246,0.15)",
                  color: "rgb(147,197,253)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <Clock size={10} />
                Ongoing
              </span>
            )}
            <motion.div
              className="text-gray-600 group-hover:text-purple-400 transition-colors"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgb(156,163,175)",
              }}
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.links.live ||
          project.links.behance ||
          project.links.github) && (
          <div className="flex gap-3 mt-auto">
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-white px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(59,130,246,0.3))",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(168,85,247,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Play size={11} fill="white" />
                Live Demo
              </motion.a>
            )}
            {project.links.behance && (
              <motion.a
                href={project.links.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-300 px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                whileHover={{
                  scale: 1.03,
                  background: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <BookOpen size={11} />
                Case Study
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-300 px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={11} />
                GitHub
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            — Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              Projects & <span className="text-gradient">Case Studies</span>
            </h2>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1.5 group"
            >
              View on Behance
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
