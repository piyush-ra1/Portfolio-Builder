"use client";

import { motion } from "framer-motion";
import Timeline, { TimelineItem } from "@/components/ui/Timeline";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="neon-text">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <Timeline>
          {experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              index={index}
              isLast={index === experience.length - 1}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-dark-600 hover:border-neon-purple transition-all"
                style={{
                  boxShadow: "0 0 10px rgba(184, 41, 221, 0.1)",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-neon-teal text-sm font-mono">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-neon-purple font-medium mb-3">
                  {exp.company}
                </p>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-dark-700 text-gray-300 rounded-full border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </TimelineItem>
          ))}
        </Timeline>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-neon-purple/10 to-neon-teal/10 rounded-2xl border border-dark-600 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Open to Opportunities
          </h3>
          <p className="text-gray-400 mb-6">
            I&apos;m always looking for exciting projects and collaborations.
            Let&apos;s build something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-teal rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </main>
  );
}
