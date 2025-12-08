"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          rotateX: 5,
          rotateY: -5,
          scale: 1.02,
        }}
        onClick={() => setIsModalOpen(true)}
        className="relative bg-dark-800/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 border-2 border-neon-purple rounded-xl" />
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                "0 0 30px #b829dd, inset 0 0 30px rgba(184, 41, 221, 0.1)",
            }}
          />
        </div>

        <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-teal/20 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-6xl"
          >
            {project.id === 1 ? "🤖" : project.id === 2 ? "🌐" : "📊"}
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-teal transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-dark-700 text-neon-teal rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-dark-800 rounded-2xl overflow-hidden neon-border"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="aspect-video bg-gradient-to-br from-neon-purple/30 to-neon-teal/30 flex items-center justify-center">
                <span className="text-8xl">
                  {project.id === 1 ? "🤖" : project.id === 2 ? "🌐" : "📊"}
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm text-neon-teal mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-white rounded-full text-sm border border-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700 rounded-lg text-white hover:bg-dark-600 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-teal rounded-lg text-white hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
