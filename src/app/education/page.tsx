"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { education } from "@/lib/data";

export default function EducationPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="neon-text">Education</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </motion.div>

        {education.map((edu, index) => (
          <GlowCard key={edu.id} glowColor="purple" delay={index * 0.1}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px #b829dd",
                      "0 0 40px #00f5d4",
                      "0 0 20px #b829dd",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-teal rounded-xl flex items-center justify-center"
                >
                  <GraduationCap className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <span className="px-3 py-1 bg-neon-teal/20 text-neon-teal rounded-full text-sm font-medium">
                    {edu.status}
                  </span>
                </div>

                <p className="text-lg text-neon-purple mb-1">{edu.institution}</p>
                <p className="text-gray-400 mb-4">
                  {edu.university} | {edu.duration}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-neon-teal" />
                    <span className="text-sm text-gray-400">Achievements</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm border border-dark-600"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-neon-blue" />
                    <span className="text-sm text-gray-400">
                      Progress to Graduation
                    </span>
                  </div>
                  <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-neon-purple via-neon-teal to-neon-blue rounded-full"
                      style={{
                        boxShadow: "0 0 10px #b829dd",
                      }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-500 mt-1">
                    85% Complete
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Current CGPA", value: "8.5+" },
            { label: "Projects", value: "10+" },
            { label: "Certifications", value: "5+" },
            { label: "Courses", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 p-6 rounded-xl border border-dark-600 text-center hover:border-neon-purple transition-colors"
            >
              <p className="text-3xl font-bold neon-text mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
