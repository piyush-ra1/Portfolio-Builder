"use client";

import { motion } from "framer-motion";
import { User, Target, Rocket, Heart } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { personalInfo } from "@/lib/data";

export default function AboutPage() {
  const sections = [
    {
      icon: User,
      title: "Who I Am",
      content: personalInfo.bio,
      color: "purple",
    },
    {
      icon: Target,
      title: "What I Do",
      content:
        "I specialize in building modern web applications using React and Next.js, while also diving deep into AI/ML to create intelligent solutions. From crafting beautiful user interfaces to training machine learning models, I love bringing ideas to life through code.",
      color: "teal",
    },
    {
      icon: Rocket,
      title: "My Mission",
      content: personalInfo.mission,
      color: "blue",
    },
    {
      icon: Heart,
      title: "My Hobbies",
      content: `When I'm not coding, you'll find me ${personalInfo.hobbies.join(", ").toLowerCase()}. These activities keep me balanced and inspire creativity in my work.`,
      color: "magenta",
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
            About <span className="neon-text">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-square bg-gradient-to-br from-neon-purple/30 via-dark-700 to-neon-teal/30 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 border-2 border-neon-purple/50 rounded-2xl group-hover:border-neon-teal transition-colors duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 60px rgba(184, 41, 221, 0.3)",
                }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-9xl"
              >
                👨‍💻
              </motion.div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-dark-800 px-6 py-3 rounded-xl border border-neon-teal">
              <p className="text-neon-teal font-mono text-sm">
                {personalInfo.role}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Hey, I&apos;m{" "}
              <span className="neon-text-teal">{personalInfo.name}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg mb-6"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {["Passionate", "Creative", "Problem Solver", "Team Player"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-dark-700 rounded-full text-sm text-gray-300 border border-dark-600 hover:border-neon-purple transition-colors"
                  >
                    {trait}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <GlowCard
              key={section.title}
              glowColor={section.color}
              delay={index * 0.1}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--neon-${section.color}), transparent)`,
                  }}
                >
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-400">{section.content}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </main>
  );
}
