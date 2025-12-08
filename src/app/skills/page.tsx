"use client";

import { motion } from "framer-motion";
import { Code, Brain, Wrench } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/lib/data";

export default function SkillsPage() {
  const categories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: skills.languages,
      color: "#b829dd",
      glowColor: "purple",
    },
    {
      icon: Code,
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      color: "#00f5d4",
      glowColor: "teal",
    },
    {
      icon: Brain,
      title: "AI/ML Technologies",
      skills: skills.aiml,
      color: "#00bbf9",
      glowColor: "blue",
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: skills.tools,
      color: "#f72585",
      glowColor: "magenta",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="neon-text">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <GlowCard
              key={category.title}
              glowColor={category.glowColor}
              delay={categoryIndex * 0.1}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon
                    className="w-6 h-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={categoryIndex * 0.1 + skillIndex * 0.05}
                />
              ))}
            </GlowCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-8 neon-text-teal">
            Tech Stack Overview
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "Python",
              "React",
              "Next.js",
              "Node.js",
              "TensorFlow",
              "Git",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px #b829dd",
                }}
                className="px-6 py-3 bg-dark-800 rounded-lg border border-dark-600 text-white font-medium hover:border-neon-purple transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
